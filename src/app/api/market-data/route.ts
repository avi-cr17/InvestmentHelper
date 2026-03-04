import { NextResponse } from 'next/server';
import { getCachedDB } from '@/lib/get-data';

export const revalidate = 600;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  try {
    const db = await getCachedDB();

    if (category) {
      const cat = db.categories.find((c) => c.id === category);
      if (!cat) {
        return NextResponse.json({ error: 'Category not found' }, { status: 404 });
      }
      return NextResponse.json(cat);
    }

    return NextResponse.json(db);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch market data' }, { status: 500 });
  }
}
