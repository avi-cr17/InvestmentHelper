'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DB } from '@/data/db';

export default function Header() {
  const pathname = usePathname() ?? '';
  const segments = pathname.split('/').filter(Boolean);

  const category = segments[0]
    ? DB.categories.find((c) => c.id === segments[0])
    : null;

  const subcategory =
    category && segments[1]
      ? category.subcats.find((s) => s.id === segments[1])
      : null;

  return (
    <header id="hdr">
      <Link href="/" className="logo">
        <div className="logo-b">📈</div>
        Invest<em>Helper</em>
      </Link>

      <nav id="bc">
        <Link href="/" className="bci">Home</Link>
        {category && (
          <>
            <span className="bcs">/</span>
            <Link href={`/${category.id}`} className="bci">
              {category.title}
            </Link>
          </>
        )}
        {subcategory && (
          <>
            <span className="bcs">/</span>
            <span className="bci cur">{subcategory.title}</span>
          </>
        )}
      </nav>

      <div className="live">
        <div className="ldot" />
        DEMO
      </div>
    </header>
  );
}
