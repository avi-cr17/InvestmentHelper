import { getCachedDB } from '@/lib/get-data';
import { formatPrice, sign } from '@/lib/utils';

export default async function Ticker() {
  const DB = await getCachedDB();

  const assets = DB.categories.flatMap((cat) =>
    cat.subcats.flatMap((sub) => sub.assets.slice(0, 3))
  );

  const items = assets.map((asset) => {
    const ret = asset.returns[0]; // always 1D
    const cls = ret > 0 ? 'tiu' : ret < 0 ? 'tid' : '';
    return (
      <div key={asset.symbol + asset.name} className="ti">
        <span className="tin">{asset.symbol}</span>
        <span className="tip">{formatPrice(asset)}</span>
        <span className={cls}>
          {sign(ret)}{ret.toFixed(2)}%
        </span>
      </div>
    );
  });

  return (
    <div className="ticker-w">
      <div className="ticker-t">
        {items}
        {items}
      </div>
    </div>
  );
}
