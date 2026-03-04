import { getCachedDB } from '@/lib/get-data';
import CategoryCard from '@/components/CategoryCard';
import Ticker from '@/components/Ticker';

export const revalidate = 600;

export default async function HomePage() {
  const DB = await getCachedDB();

  const totalInstruments = DB.categories.reduce(
    (sum, cat) => sum + cat.subcats.reduce((s, sub) => s + sub.assets.length, 0),
    0
  );
  const totalSubcats = DB.categories.reduce(
    (sum, cat) => sum + cat.subcats.length,
    0
  );

  return (
    <div id="pg-home">
      <Ticker />

      <div className="hero">
        <div className="hero-ey">India&apos;s Complete Investment Map</div>
        <h1>
          Every way to invest,<br />
          <em>mapped for you.</em>
        </h1>
        <p className="hero-sub">
          From Nifty 50 to NASDAQ, MCX Gold to US Silver ETFs — every investment
          route available to Indian investors, explained simply.
        </p>
        <div className="stats">
          <div>
            <div className="stn">{totalInstruments}+</div>
            <div className="stl">Instruments</div>
          </div>
          <div>
            <div className="stn">{DB.categories.length}</div>
            <div className="stl">Asset Classes</div>
          </div>
          <div>
            <div className="stn">{totalSubcats}</div>
            <div className="stl">Subcategories</div>
          </div>
          <div>
            <div className="stn">IN+US</div>
            <div className="stl">Coverage</div>
          </div>
        </div>
      </div>

      <div className="cat-grid">
        {DB.categories.map((cat) => {
          const count = cat.subcats.reduce((s, sub) => s + sub.assets.length, 0);
          return <CategoryCard key={cat.id} category={cat} instrumentCount={count} />;
        })}
      </div>
    </div>
  );
}
