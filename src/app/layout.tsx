import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Mono, Outfit } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';

const serifFont = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
});
const monoFont = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
});
const sansFont = Outfit({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'InvestHelper — India\'s Investment Map',
  description:
    'Every way to invest in India, mapped for you. From Nifty 50 to NASDAQ, MCX Gold to US Silver ETFs — every investment route explained simply.',
  keywords: 'invest india, nifty 50, gold etf, silver etf, copper investment, mutual funds, fixed deposit, ppf, bonds',
  openGraph: {
    title: 'InvestHelper — India\'s Complete Investment Map',
    description: 'Every way to invest in India, mapped for you. 100+ instruments across equities, commodities, and fixed income.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InvestHelper — India\'s Complete Investment Map',
    description: 'Every way to invest in India, mapped for you.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${monoFont.variable} ${sansFont.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <footer className="footer">
          <div>
            <div className="footer-brand">
              Invest<em>Helper</em>
            </div>
            <div className="footer-note">
              Market data from Yahoo Finance. Delayed up to 15 minutes. Not financial advice.
              <br />
              &copy; 2026 InvestHelper. Built for Indian investors.
            </div>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">About</a>
            <a href="#" className="footer-link">Blog</a>
            <a href="#" className="footer-link">GitHub</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
