import { notFound } from 'next/navigation';
import { DB } from '@/data/db';
import { getCategoryData } from '@/lib/get-data';
import SubcategoryCard from '@/components/SubcategoryCard';

export const revalidate = 600;

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return DB.categories.map((cat) => ({ category: cat.id }));
}

export default async function CategoryPage({ params }: Props) {
  const { category: categoryId } = await params;
  const category = await getCategoryData(categoryId);

  if (!category) notFound();

  return (
    <div id="pg-cat">
      <div className="ph">
        <div
          className="ph-ico"
          style={{ background: `${category.color}16`, color: category.color }}
        >
          {category.icon}
        </div>
        <div className="ph-title">{category.title}</div>
        <div className="ph-desc">{category.desc}</div>
      </div>

      <div className="sc-grid">
        {category.subcats.map((sub, i) => (
          <SubcategoryCard
            key={sub.id}
            subcategory={sub}
            categoryId={category.id}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
