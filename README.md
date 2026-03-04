# InvestHelper

**India's Complete Investment Map** — Every way to invest, mapped for you.

From Nifty 50 to NASDAQ, MCX Gold to US Silver ETFs — every investment route available to Indian investors, explained simply.

## What This Is

A beautifully designed web app mapping 100+ investment instruments across three asset classes:

- **Equities** — Indian indices, Nifty 50, midcaps, US stocks, mutual funds, REITs
- **Commodities** — Gold, silver, copper, crude oil, agriculture (Indian + international routes)
- **Fixed Income** — FDs, PPF, NSC, G-Secs, bonds, debt mutual funds

Each instrument shows returns across 6 timeframes (1D to 5Y) with color-coded tiles.

## Quick Start

```bash
git clone https://github.com/YOUR_USERNAME/investhelper.git
cd investhelper
npx serve src --listen 3000
# Open http://localhost:3000
```

No npm install, no build tools, no framework. Just open `src/index.html`.

## Project Structure

```
investhelper/
├── src/
│   ├── index.html            # Main entry point (SEO-optimized)
│   ├── css/styles.css        # Complete design system
│   ├── js/
│   │   ├── app.js            # Core navigation & rendering
│   │   ├── api.js            # Data fetching abstraction
│   │   └── analytics.js      # Event tracking (GA4 ready)
│   ├── data/
│   │   └── db.js             # 100+ instruments with return data
│   └── pages/                # Future: SEO landing pages
├── functions/
│   └── prices.js             # Serverless fn for live prices
├── tests/
│   └── data-validation.test.js
├── scripts/
│   └── build.js              # Build/minify script
├── .github/workflows/
│   └── ci.yml                # GitHub Actions CI pipeline
├── vercel.json               # Vercel config
├── netlify.toml              # Netlify config (alternative)
├── .eslintrc.json            # Linting rules
├── .lighthouserc.json        # Performance budget
└── .env.example              # Env var template
```

## Development

```bash
npm test          # Run data validation tests
npm run lint      # Lint JavaScript
npm run build     # Build to dist/ with minification
npm run preview   # Preview production build
```

## Deploy

### Vercel (Recommended)
1. Push to GitHub
2. Import at vercel.com
3. Output directory: `src`
4. Deploy

### Netlify
1. Push to GitHub
2. Import at netlify.com
3. Publish directory: `src`

## Adding Live Data

The app works in two modes:
1. **Static** (default) — Uses `src/data/db.js`
2. **Live** — Fetches from `/api/prices` serverless function

To enable live data:
1. Sign up for Upstash Redis (free)
2. Get a Twelve Data API key (or use yahoo-finance2)
3. Copy `.env.example` to `.env.local`
4. Uncomment implementation in `functions/prices.js`

## Roadmap

- [ ] Live price data via serverless functions
- [ ] SEO pages per asset class (/commodities/copper)
- [ ] Search across all instruments
- [ ] Blog / educational content
- [ ] Affiliate links (Groww, Zerodha, INDmoney)
- [ ] AI investment Q&A (Claude API)
- [ ] User accounts and watchlists
- [ ] Portfolio tracker

## Tech Stack

- **Frontend**: Vanilla HTML/CSS/JS (zero framework overhead)
- **Fonts**: DM Serif Display, DM Mono, Outfit
- **Hosting**: Vercel / Netlify (free tier)
- **Data**: Static JSON -> Yahoo Finance -> Redis cache
- **CI/CD**: GitHub Actions
- **Analytics**: Google Analytics 4

## License

MIT

---

Built with care for Indian investors.
