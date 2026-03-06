export type RiskLevel = 'Low' | 'Moderate' | 'High' | 'Very High';

export interface Asset {
  name: string;
  symbol: string;
  price: number;
  /** Returns for [1D, 1W, 1M, 1Y, 3Y, 5Y] in percent */
  returns: [number, number, number, number, number, number];
  /** Price is in USD (not INR) */
  usd?: boolean;
  /** Price is already a percentage (e.g. G-Sec yield) */
  pct?: boolean;
}

export interface Subcategory {
  id: string;
  icon: string;
  title: string;
  badge: string;
  color: string;
  desc: string;
  risk: RiskLevel;
  items: string[];
  assets: Asset[];
}

export interface AssetInfo {
  description: string;
  howToInvest: string;
  pros: [string, string, string];
  cons: [string, string, string];
}

export interface Category {
  id: string;
  icon: string;
  title: string;
  desc: string;
  color: string;
  grad: string;
  tags: string[];
  subcats: Subcategory[];
}
