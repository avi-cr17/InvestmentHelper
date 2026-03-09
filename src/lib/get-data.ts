import { unstable_cache } from 'next/cache';
import { enrichSubcategory, getEnrichedDB } from './yahoo-finance';
import { DB } from '@/data/db';
import type { Category, Subcategory } from '@/types';

/**
 * Cached full DB — used for homepage and category pages (shows static data,
 * enrichment happens per-subcategory on individual pages).
 */
export const getCachedDB = unstable_cache(
  async (): Promise<{ categories: Category[] }> => {
    return { categories: DB.categories };
  },
  ['market-data-static'],
  { revalidate: 600 }
);

/**
 * Enrich a single subcategory with live Yahoo data.
 * Each subcategory is cached independently — only ~5-12 Yahoo calls per page.
 */
function getCachedSubcategory(categoryId: string, subcategoryId: string) {
  return unstable_cache(
    async (): Promise<Subcategory | undefined> => {
      const category = DB.categories.find((c) => c.id === categoryId);
      if (!category) return undefined;
      const subcat = category.subcats.find((s) => s.id === subcategoryId);
      if (!subcat) return undefined;
      return enrichSubcategory(subcat);
    },
    [`subcat-${categoryId}-${subcategoryId}`],
    { revalidate: 300 }
  )();
}

export async function getCategoryData(categoryId: string) {
  const db = await getCachedDB();
  return db.categories.find((c) => c.id === categoryId);
}

export async function getSubcategoryData(categoryId: string, subcategoryId: string) {
  const category = DB.categories.find((c) => c.id === categoryId);
  if (!category) return { category: undefined, subcategory: undefined };
  const subcategory = await getCachedSubcategory(categoryId, subcategoryId);
  return { category, subcategory };
}
