import { YAHOO_SYMBOL_MAP, STATIC_SYMBOLS, MCX_SYMBOLS } from './yahoo-symbols';
import type { Asset } from '@/types';

const PERIOD_DAYS = [1, 7, 30, 365, 365 * 3, 365 * 5] as const;

// Lazy-init to avoid bundling issues with Next.js
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _yf: any = null;
async function getYF() {
  if (!_yf) {
    // Dynamic require to bypass Next.js bundler
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    _yf = require('yahoo-finance2').default;
  }
  return _yf;
}

/** Check if we're running during build (not runtime) */
function isBuildTime(): boolean {
  return process.env.NEXT_PHASE === 'phase-production-build';
}

interface QuoteResult {
  price: number;
  returns: [number, number, number, number, number, number];
}

/** Fetch USD/INR exchange rate for MCX commodity conversion */
async function getUsdInrRate(): Promise<number> {
  try {
    const yf = await getYF();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const quote: any = await yf.quote('INR=X');
    return quote.regularMarketPrice ?? 83.5;
  } catch {
    return 83.5;
  }
}

/** Race a promise against a timeout */
function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error('timeout')), ms)),
  ]);
}

/** Fetch current price + compute period returns for a single Yahoo symbol */
async function fetchSingleAsset(yahooSymbol: string): Promise<QuoteResult | null> {
  try {
    const yf = await getYF();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const quote: any = await withTimeout(yf.quote(yahooSymbol), 5000);
    if (!quote) return null;
    const currentPrice: number | undefined = quote.regularMarketPrice;
    if (!currentPrice) return null;

    const fiveYearsAgo = new Date();
    fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);
    fiveYearsAgo.setDate(fiveYearsAgo.getDate() - 10);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const chart: any = await withTimeout(yf.chart(yahooSymbol, {
      period1: fiveYearsAgo,
      interval: '1d',
    }), 5000);

    const quotes = chart.quotes;
    if (!quotes || quotes.length === 0) return null;

    const returns = PERIOD_DAYS.map((days) => {
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() - days);
      const targetTime = targetDate.getTime();

      // If the asset didn't exist at the target date, return 0
      const oldestTime = new Date(quotes[0].date).getTime();
      if (oldestTime > targetTime) return 0;

      // Find closest trading day at or before target
      let closestQuote = quotes[0];
      for (const q of quotes) {
        if (new Date(q.date).getTime() <= targetTime) {
          closestQuote = q;
        } else {
          break;
        }
      }

      const oldPrice = closestQuote.close;
      if (!oldPrice || oldPrice === 0) return 0;
      return parseFloat((((currentPrice - oldPrice) / oldPrice) * 100).toFixed(2));
    }) as [number, number, number, number, number, number];

    return { price: currentPrice, returns };
  } catch (error) {
    console.error(`[yahoo-finance] Failed to fetch ${yahooSymbol}:`, error);
    return null;
  }
}

// In-memory cache with 5-minute TTL
const cache = new Map<string, { data: QuoteResult; expiresAt: number }>();
const CACHE_TTL_MS = 5 * 60 * 1000;

async function fetchWithCache(yahooSymbol: string): Promise<QuoteResult | null> {
  const now = Date.now();
  const cached = cache.get(yahooSymbol);
  if (cached && cached.expiresAt > now) return cached.data;

  const result = await fetchSingleAsset(yahooSymbol);
  if (result) {
    cache.set(yahooSymbol, { data: result, expiresAt: now + CACHE_TTL_MS });
  }
  return result;
}

/**
 * Enrich an array of assets with live Yahoo Finance data.
 * Assets without a Yahoo mapping keep their hardcoded values.
 * Fetches in batches of 5 to avoid rate limits.
 */
export async function enrichAssetsWithLiveData(
  assets: Asset[],
  usdInrRate: number
): Promise<Asset[]> {
  const BATCH_SIZE = 5;
  const results: Asset[] = [...assets];

  // Identify fetchable assets
  const fetchable: { index: number; yahooSymbol: string; displaySymbol: string }[] = [];
  for (let i = 0; i < assets.length; i++) {
    const { symbol } = assets[i];
    if (STATIC_SYMBOLS.has(symbol)) continue;
    const yahooSymbol = YAHOO_SYMBOL_MAP[symbol];
    if (!yahooSymbol) continue;
    fetchable.push({ index: i, yahooSymbol, displaySymbol: symbol });
  }

  // Fetch in batches
  for (let start = 0; start < fetchable.length; start += BATCH_SIZE) {
    const batch = fetchable.slice(start, start + BATCH_SIZE);
    const batchResults = await Promise.allSettled(
      batch.map(({ yahooSymbol }) => fetchWithCache(yahooSymbol))
    );

    for (let j = 0; j < batch.length; j++) {
      const result = batchResults[j];
      if (result.status === 'fulfilled' && result.value) {
        const { index, displaySymbol } = batch[j];
        const original = assets[index];
        let { price } = result.value;

        // Convert MCX commodities from USD to INR
        if (MCX_SYMBOLS.has(displaySymbol)) {
          price = parseFloat((price * usdInrRate).toFixed(2));
        }

        results[index] = {
          ...original,
          price,
          returns: result.value.returns,
        };
      }
    }
  }

  return results;
}

/** Enrich a single subcategory's assets with live data */
export async function enrichSubcategory(
  subcategory: import('@/types').Subcategory
): Promise<import('@/types').Subcategory> {
  if (isBuildTime()) return subcategory;
  try {
    const usdInrRate = await getUsdInrRate();
    const assets = await enrichAssetsWithLiveData(subcategory.assets, usdInrRate);
    return { ...subcategory, assets };
  } catch (error) {
    console.error('[yahoo-finance] Subcategory enrichment failed:', error);
    return subcategory;
  }
}

/** Enrich the entire DB with live data */
export async function getEnrichedDB() {
  const { DB } = await import('@/data/db');

  // During build, return static data — live data fetched at runtime via ISR
  if (isBuildTime()) {
    return { categories: DB.categories };
  }

  try {
    const usdInrRate = await getUsdInrRate();

    const enrichedCategories = await Promise.all(
      DB.categories.map(async (category) => ({
        ...category,
        subcats: await Promise.all(
          category.subcats.map(async (subcat) => ({
            ...subcat,
            assets: await enrichAssetsWithLiveData(subcat.assets, usdInrRate),
          }))
        ),
      }))
    );

    return { categories: enrichedCategories };
  } catch (error) {
    console.error('[yahoo-finance] Enrichment failed, using static data:', error);
    return { categories: DB.categories };
  }
}
