import Link from 'next/link';
import type { Subcategory } from '@/types';

interface Props {
  subcategory: Subcategory;
  categoryId: string;
  index: number;
}

export default function SubcategoryCard({ subcategory, categoryId, index }: Props) {
  return (
    <Link
      href={`/${categoryId}/${subcategory.id}`}
      className="scc"
      style={{ animationDelay: `${index * 0.06}s`, textDecoration: 'none' }}
    >
      <div className="scc-top">
        <div
          className="scc-ico"
          style={{ background: `${subcategory.color}16`, color: subcategory.color }}
        >
          {subcategory.icon}
        </div>
        <div
          className="scc-badge"
          style={{ background: `${subcategory.color}18`, color: subcategory.color }}
        >
          {subcategory.badge}
        </div>
      </div>
      <div className="scc-title">{subcategory.title}</div>
      <div className="scc-desc">{subcategory.desc}</div>
      <div className="scc-chips">
        {subcategory.items.map((item) => (
          <div key={item} className="chip">{item}</div>
        ))}
      </div>
      <div className="scc-foot">
        <span className="scc-n">{subcategory.assets.length} instruments</span>
        <span className="scc-go">→</span>
      </div>
    </Link>
  );
}
