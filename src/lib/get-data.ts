import { unstable_cache } from 'next/cache';
import { getEnrichedDB } from './yahoo-finance';
import type { Category } from '@/types';

/**
 * Cached version of getEnrichedDB. Revalidates every 10 minutes.
 * All pages share this same cache entry.
 */
export const getCachedDB = unstable_cache(
  async (): Promise<{ categories: Category[] }> => {
    return getEnrichedDB();
  },
  ['market-data-all'],
  { revalidate: 600 }
);

export async function getCategoryData(categoryId: string) {
  const db = await getCachedDB();
  return db.categories.find((c) => c.id === categoryId);
}

export async function getSubcategoryData(categoryId: string, subcategoryId: string) {
  const category = await getCategoryData(categoryId);
  if (!category) return { category: undefined, subcategory: undefined };
  const subcategory = category.subcats.find((s) => s.id === subcategoryId);
  return { category, subcategory };
}
