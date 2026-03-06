'use client';

import { useEffect, useRef } from 'react';
import type { Asset, AssetInfo, RiskLevel } from '@/types';
import { formatPrice, RISK_COLORS } from '@/lib/utils';

interface Props {
  asset: Asset;
  info: AssetInfo | undefined;
  risk: RiskLevel;
  onClose: () => void;
}

export default function AssetModal({ asset, info, risk, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div className="modal-overlay" ref={overlayRef} onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>

        <div className="modal-header">
          <div>
            <h3 className="modal-name">{asset.name}</h3>
            <span className="modal-sym">{asset.symbol}</span>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="modal-price">{formatPrice(asset)}</div>
            <span
              className="risk-tag"
              style={{
                background: `${RISK_COLORS[risk]}18`,
                color: RISK_COLORS[risk],
                marginTop: 6,
                display: 'inline-block',
              }}
            >
              {risk} Risk
            </span>
          </div>
        </div>

        {info ? (
          <>
            <div className="modal-section">
              <h4>What is this?</h4>
              <p>{info.description}</p>
            </div>
            <div className="modal-section">
              <h4>How to invest</h4>
              <p>{info.howToInvest}</p>
            </div>
            <div className="modal-grid">
              <div className="modal-pros">
                <h4>The Good Stuff</h4>
                {info.pros.map((p, i) => (
                  <div key={i} className="modal-point pro">
                    <span className="modal-bullet">+</span>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
              <div className="modal-cons">
                <h4>The Reality Check</h4>
                {info.cons.map((c, i) => (
                  <div key={i} className="modal-point con">
                    <span className="modal-bullet">&minus;</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="modal-section">
            <p style={{ color: 'var(--text3)' }}>
              Detailed info coming soon. We&apos;re still writing sarcastic commentary for this one.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
