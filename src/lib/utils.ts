import type { Asset, RiskLevel } from '@/types';

export const RISK_COLORS: Record<RiskLevel, string> = {
  'Low': '#34d399',
  'Moderate': '#f5c842',
  'High': '#f97316',
  'Very High': '#f5475b',
};

/** Per-asset risk overrides (when asset risk differs from subcategory default) */
export const ASSET_RISK_OVERRIDE: Record<string, RiskLevel> = {
  // Indian Indices — some are higher risk than the "Moderate" subcategory default
  'NSE:MID150': 'High',
  'NSE:SML250': 'Very High',
  'NSE:METAL':  'High',
  'NSE:REALTY': 'High',
  // Gold subcategory is Moderate, but miners are High
  'GDX':  'High',
  'GDXJ': 'Very High',
  'MCX:GOLD': 'High',
  // Silver miners
  'PAAS': 'High',
  'MCX:SILVER': 'High',
  // US Stocks — Tesla/Nvidia are higher risk
  'TSLA': 'Very High',
  'NVDA': 'High',
  // Mutual Funds — credit risk fund is higher
  'MF-CR': 'Moderate',
  // Bonds — TLT has duration risk
  'TLT': 'Moderate',
  // Oil stocks in MCX
  'UCO': 'Very High',
  // Crypto — DOGE is extra risky
  'DOGE': 'Very High',
};

export const TIMEFRAME_LABELS = ['1D', '1W', '1M', '1Y', '3Y', '5Y'] as const;

export function sign(value: number): string {
  return value >= 0 ? '+' : '';
}

export function returnClass(ret: number): 'atu' | 'atd' | 'atf' {
  if (ret > 0.2) return 'atu';
  if (ret < -0.2) return 'atd';
  return 'atf';
}

export function returnArrow(ret: number): '▲' | '▼' | '—' {
  if (ret > 0.2) return '▲';
  if (ret < -0.2) return '▼';
  return '—';
}

export function formatPrice(asset: Asset): string {
  if (asset.pct) return asset.price.toFixed(2) + '%';
  if (asset.usd) {
    return '$' + asset.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  if (asset.price >= 10000) {
    return '₹' + asset.price.toLocaleString('en-IN', { maximumFractionDigits: 0 });
  }
  return '₹' + asset.price.toFixed(2);
}

/** Deterministic hash so sparklines are stable across server/client renders */
function stringHash(str: string): number {
  let hash = 0;
  for (const char of str) {
    hash = (hash * 31 + char.charCodeAt(0)) & 0x7fffffff;
  }
  return hash;
}

function seededRandom(seed: number): () => number {
  let s = Math.abs(seed) || 1;
  return () => {
    s = (s * 1664525 + 1013904223) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

export function generateSparkline(
  symbol: string,
  returnPct: number,
  width = 78,
  height = 42
): string {
  const rand = seededRandom(stringHash(symbol) + Math.round(returnPct * 100));
  const pointCount = 14;
  let cumulative = 0;
  const values: number[] = [];

  for (let i = 0; i < pointCount; i++) {
    cumulative += returnPct / pointCount + (rand() - 0.5) * 0.28;
    values.push(cumulative);
  }

  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  return values
    .map((v, i) => {
      const x = ((i / (pointCount - 1)) * width).toFixed(1);
      const y = (height - ((v - min) / range) * height).toFixed(1);
      return `${x},${y}`;
    })
    .join(' ');
}
