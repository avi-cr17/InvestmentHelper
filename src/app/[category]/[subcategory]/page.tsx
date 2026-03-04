import { notFound } from 'next/navigation';
import { DB } from '@/data/db';
import { getSubcategoryData } from '@/lib/get-data';
import SubcategoryClient from '@/components/SubcategoryClient';

export const revalidate = 300;

interface Props {
  params: Promise<{ category: string; subcategory: string }>;
}

export function generateStaticParams() {
  return DB.categories.flatMap((cat) =>
    cat.subcats.map((sub) => ({
      category: cat.id,
      subcategory: sub.id,
    }))
  );
}

export default async function SubcategoryPage({ params }: Props) {
  const { category: categoryId, subcategory: subcategoryId } = await params;

  const { subcategory } = await getSubcategoryData(categoryId, subcategoryId);
  if (!subcategory) notFound();

  return (
    <div id="pg-sub">
      <SubcategoryClient subcategory={subcategory} />
    </div>
  );
}
