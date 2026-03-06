'use client';

import { useState } from 'react';
import type { Asset, Subcategory } from '@/types';
import { ASSET_INFO } from '@/data/asset-info';
import AssetModal from './AssetModal';
import {
  TIMEFRAME_LABELS,
  sign,
  returnClass,
  returnArrow,
  formatPrice,
  generateSparkline,
  RISK_COLORS,
  ASSET_RISK_OVERRIDE,
} from '@/lib/utils';

interface Props {
  subcategory: Subcategory;
}

export default function SubcategoryClient({ subcategory }: Props) {
  const [timeframeIndex, setTimeframeIndex] = useState(0);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  const returns = subcategory.assets.map((a) => a.returns[timeframeIndex]);
  const avg = returns.reduce((a, b) => a + b, 0) / returns.length;
  const gainers = returns.filter((r) => r > 0.2).length;
  const losers = returns.filter((r) => r < -0.2).length;
  const best = subcategory.assets.reduce((a, b) =>
    b.returns[timeframeIndex] > a.returns[timeframeIndex] ? b : a
  );
  const worst = subcategory.assets.reduce((a, b) =>
    b.returns[timeframeIndex] < a.returns[timeframeIndex] ? b : a
  );
  const avgColor =
    avg > 0.2 ? 'var(--up)' : avg < -0.2 ? 'var(--dn)' : 'var(--flat)';

  return (
    <>
      {/* Sticky timeframe bar */}
      <div className="tf-stick">
        <div className="tf-stick-title">{subcategory.title}</div>
        <div className="tfs">
          {TIMEFRAME_LABELS.map((label, i) => (
            <button
              key={label}
              className={`tf2${i === timeframeIndex ? ' on' : ''}`}
              onClick={() => setTimeframeIndex(i)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Description row */}
      <div className="sdr">
        <div
          className="sdr-ico"
          style={{
            background: `${subcategory.color}16`,
            color: subcategory.color,
          }}
        >
          {subcategory.icon}
        </div>
        <div>
          <h2>{subcategory.title}</h2>
          <p>{subcategory.desc}</p>
        </div>
      </div>

      {/* Summary stats */}
      <div className="sum-row">
        <div className="sum">
          <div className="sum-l">Avg Return ({TIMEFRAME_LABELS[timeframeIndex]})</div>
          <div className="sum-v" style={{ color: avgColor }}>
            {sign(avg)}{avg.toFixed(2)}%
          </div>
        </div>
        <div className="sum">
          <div className="sum-l">Gainers</div>
          <div className="sum-v" style={{ color: 'var(--up)' }}>{gainers}</div>
          <div className="sum-c" style={{ color: 'var(--text2)' }}>
            of {subcategory.assets.length}
          </div>
        </div>
        <div className="sum">
          <div className="sum-l">Decliners</div>
          <div className="sum-v" style={{ color: 'var(--dn)' }}>{losers}</div>
        </div>
        <div className="sum">
          <div className="sum-l">Best</div>
          <div className="sum-v" style={{ fontSize: 15, color: 'var(--up)' }}>
            {best.name}
          </div>
          <div className="sum-c" style={{ color: 'var(--up)' }}>
            +{best.returns[timeframeIndex].toFixed(2)}%
          </div>
        </div>
        <div className="sum">
          <div className="sum-l">Worst</div>
          <div className="sum-v" style={{ fontSize: 15, color: 'var(--dn)' }}>
            {worst.name}
          </div>
          <div className="sum-c" style={{ color: 'var(--dn)' }}>
            {sign(worst.returns[timeframeIndex])}{worst.returns[timeframeIndex].toFixed(2)}%
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="leg-row">
        <span>Colour by return:</span>
        <div className="leg">
          <div className="ldp" style={{ background: 'var(--up)' }} />
          Positive
        </div>
        <div className="leg">
          <div className="ldp" style={{ background: 'var(--dn)' }} />
          Negative
        </div>
        <div className="leg">
          <div className="ldp" style={{ background: 'var(--flat)' }} />
          Near flat
        </div>
      </div>

      {/* Asset grid */}
      <div className="a-grid">
        {subcategory.assets.map((asset) => {
          const ret = asset.returns[timeframeIndex];
          const cls = returnClass(ret);
          const strokeColor =
            cls === 'atu' ? '#22d47e' : cls === 'atd' ? '#f5475b' : '#f5c842';
          const sparkPoints = generateSparkline(asset.symbol, ret);

          const assetRisk = ASSET_RISK_OVERRIDE[asset.symbol] ?? subcategory.risk;

          return (
            <div key={asset.symbol + asset.name} className={`at ${cls}`} onClick={() => setSelectedAsset(asset)}>
              <div className="at-ln" />
              <div className="at-hd">
                <div>
                  <div className="at-name">{asset.name}</div>
                  <div className="at-sym-row">
                    <span className="at-sym">{asset.symbol}</span>
                    <span
                      className="risk-tag at-risk"
                      style={{
                        background: `${RISK_COLORS[assetRisk]}14`,
                        color: RISK_COLORS[assetRisk],
                      }}
                    >
                      {assetRisk}
                    </span>
                  </div>
                </div>
                <div className="at-dir">{returnArrow(ret)}</div>
              </div>
              <div className="at-bt">
                <div className="at-price">{formatPrice(asset)}</div>
                <div className="at-pct">
                  {sign(ret)}{ret.toFixed(2)}%
                </div>
              </div>
              <svg
                className="at-sp"
                viewBox="0 0 78 42"
                preserveAspectRatio="none"
              >
                <polyline
                  points={sparkPoints}
                  fill="none"
                  stroke={strokeColor}
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          );
        })}
      </div>

      {selectedAsset && (
        <AssetModal
          asset={selectedAsset}
          info={ASSET_INFO[selectedAsset.symbol]}
          risk={ASSET_RISK_OVERRIDE[selectedAsset.symbol] ?? subcategory.risk}
          onClose={() => setSelectedAsset(null)}
        />
      )}
    </>
  );
}
