import Link from 'next/link';
import type { Category } from '@/types';

interface Props {
  category: Category;
  instrumentCount: number;
}

export default function CategoryCard({ category, instrumentCount }: Props) {
  return (
    <Link href={`/${category.id}`} className="cc" style={{ textDecoration: 'none' }}>
      <div className="cc-bar" style={{ background: category.grad }} />
      <div className="cc-in">
        <div
          className="cc-ico"
          style={{ background: `${category.color}16`, color: category.color }}
        >
          {category.icon}
        </div>
        <div className="cc-title">{category.title}</div>
        <div className="cc-desc">{category.desc}</div>
        <div className="cc-tags">
          {category.tags.map((tag) => (
            <div key={tag} className="cct">{tag}</div>
          ))}
        </div>
        <div className="cc-foot">
          <span className="cc-cnt">{instrumentCount}+ instruments</span>
          <div className="cc-arr">→</div>
        </div>
      </div>
    </Link>
  );
}
