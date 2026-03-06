import type { AssetInfo } from '@/types';

/**
 * Static editorial content for each asset.
 * Keyed by symbol (same as in db.ts).
 * Assets without an entry here will show a fallback message in the modal.
 */
export const ASSET_INFO: Record<string, AssetInfo> = {

  // ═══════════════════════════════════════════
  //  INDIAN INDICES
  // ═══════════════════════════════════════════

  'NSE:NIFTY': {
    description: 'The NIFTY 50 is India\'s benchmark stock index, tracking the 50 largest companies listed on the NSE. It\'s basically India Inc. in a single number.',
    howToInvest: 'Buy any Nifty 50 index fund or ETF (UTI Nifty 50, HDFC Nifty 50) via Zerodha, Groww, or any broker. SIP starts at Rs 500/month.',
    pros: [
      'Congratulations, you\'ve discovered the most boring way to get rich slowly',
      'Your parents will finally understand what you invest in — "beta, Nifty toh suna hai"',
      'Historically delivers 12-14% CAGR, which is more than your savings account will ever dream of',
    ],
    cons: [
      'Returns so predictable, you\'ll never have a thrilling story at chai breaks',
      'When NIFTY crashes 10%, your WhatsApp groups become doomsday prediction forums',
      'You\'ll spend more time explaining "index fund" to relatives than actually investing',
    ],
  },

  'BSE:SENSEX': {
    description: 'The SENSEX tracks 30 of India\'s largest BSE-listed companies. It\'s the OG Indian market index — been around since 1986, older than most traders.',
    howToInvest: 'Buy an S&P BSE SENSEX index fund or ETF via any broker. Identical approach to Nifty — SIP or lump sum.',
    pros: [
      'The index your dad quotes at dinner to sound financially literate',
      'Only 30 stocks — because quality over quantity, right?',
      'Every TV channel scrolls it at the bottom, so you\'ll always know how your money is doing',
    ],
    cons: [
      'Basically NIFTY\'s older, slightly less cool cousin',
      'Only 30 stocks means one bad apple (looking at you, Adani saga) hits harder',
      'You\'ll argue with Nifty investors about which index is better, and nobody wins',
    ],
  },

  'NSE:BNKN': {
    description: 'BANK NIFTY tracks India\'s 12 most liquid banking stocks. When banks sneeze, this index catches a cold.',
    howToInvest: 'Buy Bank Nifty ETFs (Kotak Banking ETF, ICICI Bank ETF) or trade options if you enjoy sleepless nights.',
    pros: [
      'India runs on credit — and you get to profit from everyone\'s EMIs',
      'Option traders\' favorite playground — because who needs stable blood pressure?',
      'Banks are literally too big to fail... unless they\'re not',
    ],
    cons: [
      'RBI policy day is basically your portfolio\'s mood swing day',
      'NPA news can tank this faster than your dating life after a bad first date',
      'Concentrated in just 12 stocks — diversification called, it wants its money back',
    ],
  },

  'NSE:CNXIT': {
    description: 'NIFTY IT tracks India\'s top IT companies — TCS, Infosys, Wipro, HCL. Your portfolio\'s ticket to the US dollar party.',
    howToInvest: 'Buy a Nifty IT ETF or invest directly in IT stocks. Every rupee weakness is your gain.',
    pros: [
      'When the rupee falls, your IT stocks throw a party — natural dollar hedge',
      'Indian IT runs half the world\'s back offices, so job security for your portfolio',
      'AI hype means these companies can charge more for "digital transformation"',
    ],
    cons: [
      'US recession fears hit this sector like Monday morning hits employees',
      'Every quarter, analysts play "will TCS beat estimates?" — spoiler: it\'s always a coin flip',
      'H1B visa drama can send this index on a rollercoaster nobody asked for',
    ],
  },

  'NSE:MID150': {
    description: 'NIFTY Midcap 150 tracks mid-sized companies with market cap between large-cap and small-cap. The "Goldilocks" zone of Indian equities.',
    howToInvest: 'Buy Nifty Midcap 150 index fund (Motilal, UTI) via any broker. Fair warning: it\'s bumpy.',
    pros: [
      'These companies are big enough to not randomly vanish, but small enough to 5x',
      'Outperformed large caps over every 10-year period — patience is literally wealth here',
      'You get to sound sophisticated saying "I\'m overweight midcaps"',
    ],
    cons: [
      'Drawdowns of 30-40% are "normal" — your stomach needs to agree',
      'Liquidity disappears faster than free food at a startup office during crashes',
      'Your parents will panic-call you every time markets dip 5%',
    ],
  },

  'NSE:SML250': {
    description: 'NIFTY Smallcap 250 tracks the tiny warriors of the Indian market. High risk, high reward, high blood pressure.',
    howToInvest: 'Buy Nifty Smallcap 250 index fund. Only invest money you won\'t need for 7+ years. Seriously.',
    pros: [
      'Multi-baggers live here — the next Titan or Dixon was once a smallcap nobody',
      'Returns that make large-cap investors cry into their diversified portfolios',
      'You can brag about finding "hidden gems" at dinner parties',
    ],
    cons: [
      'Drawdowns of 50-60% are not bugs, they\'re features of this asset class',
      'Half these companies have promoters you\'ve never heard of — comforting, right?',
      'Circuit limits mean you might not be able to sell when you desperately want to',
    ],
  },

  'NSE:JR': {
    description: 'NIFTY Next 50 — the top 50 companies that didn\'t quite make it to the Nifty 50. Think of it as the VIP waiting list.',
    howToInvest: 'Buy a Nifty Next 50 index fund (UTI, ICICI). These stocks get promoted to Nifty 50, which is basically a built-in catalyst.',
    pros: [
      'When a stock gets promoted to Nifty 50, passive funds rush to buy — free pop!',
      'More growth potential than Nifty 50 without full midcap chaos',
      'Companies here are auditioning for the big league — motivation is a hell of a drug',
    ],
    cons: [
      'Higher volatility than Nifty 50, lower returns than Midcap — the middle child syndrome',
      'Rebalancing can be harsh — stocks that get demoted FROM Nifty 50 land here looking sad',
      'Not exciting enough for traders, not boring enough for your FD-loving uncle',
    ],
  },

  'NSE:PHARMA': {
    description: 'NIFTY Pharma tracks India\'s pharmaceutical giants. Because the world will always need pills.',
    howToInvest: 'Buy a Pharma ETF or pick individual pharma stocks. Sector rotates in and out of favor like fashion trends.',
    pros: [
      'India is "pharmacy of the world" — we supply 20% of global generics',
      'Every pandemic scare sends this index to the moon',
      'Defensive sector — people don\'t stop taking medicines in a recession',
    ],
    cons: [
      'FDA warning letters can destroy a stock faster than you can Google "FDA Form 483"',
      'Pricing pressure from the US government is a permanent sword over these stocks',
      'Patent cliffs are real — when the golden drug goes generic, so do returns',
    ],
  },

  'NSE:AUTO': {
    description: 'NIFTY Auto tracks India\'s automobile companies — Maruti, M&M, Tata Motors, Bajaj. Two-wheelers, four-wheelers, and everything in between.',
    howToInvest: 'Buy a Nifty Auto ETF or invest directly. EV transition makes this a "pick carefully" sector.',
    pros: [
      'India is becoming the world\'s 3rd largest auto market — that\'s a lot of cars',
      'EV revolution means the next Maruti could be an EV company nobody\'s heard of yet',
      'Monsoon + festival season = guaranteed quarterly hype cycle for sales numbers',
    ],
    cons: [
      'One bad monsoon and rural demand vanishes like your New Year\'s resolutions',
      'EV transition means some of these companies might become the next Kodak',
      'Fuel price hikes, insurance costs, and emissions norms — the fun never stops',
    ],
  },

  'NSE:FMCG': {
    description: 'NIFTY FMCG tracks consumer staples — HUL, ITC, Nestle, Dabur. The "people will always buy soap" index.',
    howToInvest: 'Buy an FMCG ETF or go for individual picks. Classic defensive play.',
    pros: [
      'Recession-proof: people don\'t stop buying toothpaste when markets crash',
      'Consistent dividends — these companies actually share profits with you',
      'Your portfolio\'s equivalent of comfort food during market crashes',
    ],
    cons: [
      'Growth rates that make watching paint dry feel like an adrenaline sport',
      'Valuations always "expensive" — 50 PE for a soap company feels personal',
      'Rural slowdown headlines will haunt you every alternate quarter',
    ],
  },

  'NSE:METAL': {
    description: 'NIFTY Metal tracks steel, aluminum, and mining companies. The most cyclical sector on the exchange — it literally moves with the global economy.',
    howToInvest: 'Buy a Metal ETF or stock-pick. Timing matters here more than any other sector.',
    pros: [
      'When the global economy booms, metal stocks go absolutely parabolic',
      'India\'s infrastructure push means domestic demand is structurally rising',
      'Tata Steel dividends alone could fund a modest vacation',
    ],
    cons: [
      'China sneezes and Indian metal stocks catch pneumonia',
      'Commodity cycles are brutal — what goes up 100% can come down 50%',
      'Environmental regulations are tightening, and compliance isn\'t cheap',
    ],
  },

  'NSE:REALTY': {
    description: 'NIFTY Realty tracks Indian real estate companies — DLF, Godrej Properties, Oberoi. The "India needs housing" thesis in index form.',
    howToInvest: 'Buy a Realty ETF or individual stocks. Very cyclical — interest rates are your friend or enemy.',
    pros: [
      'India\'s housing shortage is massive — 10 crore units needed, and these guys build them',
      'Low interest rates = rocket fuel for real estate stocks',
      'Urbanization is a multi-decade trend, and you can\'t urbanize without buildings',
    ],
    cons: [
      'Interest rate hikes hit this sector like a wrecking ball — pun intended',
      'Regulatory approvals in India move at the speed of government bureaucracy',
      'This sector has more "promoter quality concerns" than any other — do your homework',
    ],
  },

  // ═══════════════════════════════════════════
  //  NIFTY 50 STOCKS
  // ═══════════════════════════════════════════

  'RELIANCE': {
    description: 'Reliance Industries — India\'s largest company by market cap. Oil, telecom (Jio), retail, and now green energy. Ambani doesn\'t do things small.',
    howToInvest: 'Buy RELIANCE shares on NSE/BSE via any broker. Probably already in your mutual fund, whether you know it or not.',
    pros: [
      'Jio literally changed how 1.4 billion people use the internet — that\'s a moat',
      'The Ambani empire diversifies so you don\'t have to',
      'If India grows, Reliance grows — it\'s basically an India ETF with one ticker',
    ],
    cons: [
      'Debt levels that would make a small country nervous (they\'re reducing, but still)',
      'Succession planning drama could give Bollywood screenwriters ideas',
      'O2C business (oil-to-chemicals) is a sunset industry that still pays the bills',
    ],
  },

  'TCS': {
    description: 'Tata Consultancy Services — India\'s IT crown jewel and one of the most consistent wealth creators. The Tata name carries weight.',
    howToInvest: 'Buy TCS on NSE/BSE. Warning: it\'s rarely "cheap" — you pay a premium for quality.',
    pros: [
      'The Tata brand means corporate governance you can actually trust',
      'Attrition-proof — people actually want to stay at TCS (relative to peers)',
      'Dividend yield + buybacks make this a money-returning machine',
    ],
    cons: [
      'Growth rate of a blue whale — impressive, but don\'t expect it to sprint',
      'AI might automate the very services TCS sells — the irony writes itself',
      'Premium valuation means you\'re paying full price for yesterday\'s quality',
    ],
  },

  'HDFCBANK': {
    description: 'HDFC Bank — India\'s most valuable private bank. The gold standard of Indian banking, if gold was less exciting.',
    howToInvest: 'Buy HDFCBANK on NSE/BSE. It\'s in literally every portfolio, every mutual fund, every index.',
    pros: [
      'Asset quality so clean, other banks study it like a textbook',
      'India\'s credit penetration is still low — massive runway ahead',
      'The bank your parents trust AND the bank analysts recommend — rare combo',
    ],
    cons: [
      'Post-merger with HDFC Ltd, the bank is so large that growth has to slow — math is math',
      'Every minor NPA headline gets amplified because expectations are sky-high',
      'Boring enough to make you wonder why you didn\'t just buy an FD',
    ],
  },

  'INFY': {
    description: 'Infosys — India\'s second-largest IT company. Founded by Narayana Murthy, now run by Salil Parekh. Global clients, Indian efficiency.',
    howToInvest: 'Buy INFY on NSE/BSE or ADR on NYSE. Large-cap IT at a (relatively) reasonable valuation.',
    pros: [
      'Strong digital transformation deals — the "cloudification of everything" is Infosys\' bread and butter',
      'Better growth narrative than TCS, slightly more exciting quarterly results',
      'ADR listing means global investors validate the story with dollars',
    ],
    cons: [
      'CEO changes more often than your Spotify playlist — governance drama is a feature',
      'Guidance revisions can cause 5% drops in minutes — earnings day is not for the weak',
      'Whistleblower complaints pop up with unsettling regularity',
    ],
  },

  'ICICIBANK': {
    description: 'ICICI Bank — India\'s second-largest private bank. Was a basket case 5 years ago, now it\'s the comeback kid of Indian banking.',
    howToInvest: 'Buy ICICIBANK on NSE/BSE. The turnaround story analysts love to recommend.',
    pros: [
      'The greatest corporate turnaround in Indian banking history — NPAs cleaned up beautifully',
      'Subsidiaries (ICICI Lombard, ICICI Pru) are a hidden empire of financial services',
      'Technology adoption is strong — iMobile is actually good (shocking for a bank app)',
    ],
    cons: [
      'The memory of the NPA crisis lingers — one bad quarter and PTSD kicks in',
      'Valuation has re-rated so much, the "cheap turnaround" thesis is over',
      'Competition from fintechs is heating up — Paytm and PhonePe don\'t sleep',
    ],
  },

  'SBIN': {
    description: 'State Bank of India — the country\'s largest bank. Government-owned, everywhere you look, and impossible to ignore.',
    howToInvest: 'Buy SBIN on NSE/BSE. It\'s literally the backbone of Indian banking — 22,000+ branches.',
    pros: [
      'Too big to fail — the government of India literally guarantees this bank\'s existence',
      'Cheapest large bank by valuation — the "value investor\'s" banking pick',
      'YONO app has more users than most fintech startups — digital isn\'t just for private banks',
    ],
    cons: [
      'Government ownership means loan waivers, priority sector lending, and political interference',
      'Employee unions have more power than some board committees',
      'PSU banking means perpetual "undervalued" — some traps look like value',
    ],
  },

  'BAJFINANCE': {
    description: 'Bajaj Finance — India\'s largest NBFC. They\'ll finance your TV, your sofa, your EMI for the EMI. Consumer credit on steroids.',
    howToInvest: 'Buy BAJFINANCE on NSE/BSE. Expensive always, but "expensive" has worked for 15 years.',
    pros: [
      'India\'s consumer credit penetration is just 15% — runway is insanely long',
      'Cross-selling machine — one customer, twelve products',
      'Digital lending platform makes banks look like they\'re stuck in 2005',
    ],
    cons: [
      'Valuation gives nosebleeds even to the most optimistic analysts',
      'Any asset quality deterioration and this stock drops faster than gravity',
      'An NBFC competing with banks — regulators could tighten the leash anytime',
    ],
  },

  'LT': {
    description: 'Larsen & Toubro — India\'s infrastructure giant. If it\'s being built in India (bridges, metros, factories), L&T probably has a hand in it.',
    howToInvest: 'Buy LT on NSE/BSE. A proxy for India\'s infrastructure capex story.',
    pros: [
      'Order book so large, they have visibility for 3+ years of revenue',
      'India\'s infra push (highways, metros, smart cities) is basically L&T\'s ATM',
      'Diversified across construction, IT, finance — a mini conglomerate done right',
    ],
    cons: [
      'Working capital cycle would give an MBA student nightmares',
      'Execution delays are an industry feature, not a bug',
      'The stock moves in slow motion — patience is mandatory, excitement is not included',
    ],
  },

  'ASIANPAINT': {
    description: 'Asian Paints — India\'s paint king with 50%+ market share. They literally color India\'s walls.',
    howToInvest: 'Buy ASIANPAINT on NSE/BSE. Warning: it\'s always "expensive" and always delivers over decades.',
    pros: [
      'Brand so strong, painters recommend it by name — that\'s distribution moat at street level',
      'India\'s per-capita paint consumption is still a fraction of China\'s — room to grow',
      'Expanding into home decor, waterproofing, sanitizers — painting is just the start',
    ],
    cons: [
      'Crude oil prices directly impact raw material costs — your paint stock is oddly correlated with OPEC',
      'Grasim (Birla) and JSW are entering paint — the cozy duopoly days are numbered',
      'PE ratio permanently above 50x — "fairly valued" is a myth here',
    ],
  },

  'TITAN': {
    description: 'Titan Company — Tata\'s jewelry and watch empire. Tanishq is India\'s most trusted jewelry brand. They sell gold to Indians — genius business model.',
    howToInvest: 'Buy TITAN on NSE/BSE. Consumer discretionary play on India\'s rising middle class.',
    pros: [
      'Selling organized jewelry in a 70% unorganized market — the opportunity is obscene',
      'Tanishq brand recall is higher than most FMCG brands — in a category people love spending on',
      'Expanding into eyewear, fragrances, wearables — Tata doesn\'t stay in one lane',
    ],
    cons: [
      'Gold price swings directly impact demand — and gold is the ultimate mood swing commodity',
      'Valuation assumes everything goes right for the next decade — pressure much?',
      'Competition from Kalyan, Malabar, and online jewelers is intensifying rapidly',
    ],
  },

  'HINDUNILVR': {
    description: 'Hindustan Unilever — India\'s FMCG behemoth. Surf Excel, Dove, Lux, Vim — you probably used their products before reading this.',
    howToInvest: 'Buy HINDUNILVR on NSE/BSE. The classic defensive pick in every portfolio.',
    pros: [
      'Distribution network reaches villages that Google Maps hasn\'t found yet',
      'Recession-proof — people don\'t skip shampoo because the stock market crashed',
      'Dividend aristocrat — they share profits like a generous aunty at festivals',
    ],
    cons: [
      'Growth has stalled — turns out there\'s a limit to how much soap India can buy',
      'Premium valuation for single-digit growth is a tough sell',
      'D2C brands are eating into market share — Instagram ads vs. TV ads isn\'t a fair fight',
    ],
  },

  'WIPRO': {
    description: 'Wipro — India\'s third-largest IT company. Acquired, restructured, and trying very hard to be cool again under Thierry Delaporte.',
    howToInvest: 'Buy WIPRO on NSE/BSE. The "turnaround" pick of Indian IT — if you believe in second chances.',
    pros: [
      'Cheapest large-cap IT stock — value investors, this is your stop',
      'Aggressive acquisition strategy means growth isn\'t just organic anymore',
      'ESG and sustainability initiatives make your portfolio look responsible',
    ],
    cons: [
      'Has underperformed TCS and Infosys for so long, "turnaround" is an annual tradition',
      'Integration of acquisitions is easier said than done — just ask every M&A textbook',
      'Brand perception among developers: "I\'ll join Wipro if I have to" — talent matters',
    ],
  },

  'KOTAKBANK': {
    description: 'Kotak Mahindra Bank — Uday Kotak\'s creation, India\'s premium private bank. Where high-net-worth Indians park their money.',
    howToInvest: 'Buy KOTAKBANK on NSE/BSE. Premium bank at a premium price — always.',
    pros: [
      'Asset quality metrics that make even HDFC Bank slightly jealous',
      'Wealth management and insurance arms are high-margin businesses',
      'Conservative lending approach means fewer NPA surprises at 3 AM',
    ],
    cons: [
      'Succession post Uday Kotak\'s reduced role is a real overhang',
      'Growth rates are slower than ICICI Bank\'s — "premium" doesn\'t mean "fast"',
      'RBI has shown it can act tough on private banks — remember the digital onboarding ban?',
    ],
  },

  'ADANIPORTS': {
    description: 'Adani Ports — India\'s largest private port operator. Controls 30% of India\'s cargo movement. Logistics is the unsexy backbone of an economy.',
    howToInvest: 'Buy ADANIPORTS on NSE/BSE. The least controversial Adani stock (which is a low bar).',
    pros: [
      'Monopoly-like position in Indian ports — ships don\'t have many alternatives',
      'India\'s trade is growing, and every container needs a port — structural tailwind',
      'Cash flows are genuinely strong — this business makes real money',
    ],
    cons: [
      'The Adani brand carries Hindenburg-shaped baggage that won\'t go away easily',
      'Aggressive expansion via debt is the Adani playbook — works until it doesn\'t',
      'Governance concerns around the group overshadow an otherwise solid business',
    ],
  },

  'HCLTECH': {
    description: 'HCL Technologies — India\'s third-largest IT company by revenue. Strong in infrastructure management and engineering services.',
    howToInvest: 'Buy HCLTECH on NSE/BSE. The "quietly competent" IT stock.',
    pros: [
      'Engineering and R&D services are stickier than typical IT outsourcing',
      'Dividend payout is one of the highest in Indian IT — HCL actually shares the wealth',
      'Less dependent on BFSI (banking clients) than peers — diversification done right',
    ],
    cons: [
      'Founder family\'s significant stake means minority shareholders are along for the ride',
      'Not as "exciting" as Infosys for analysts — gets ignored in market rallies',
      'Infrastructure management is a mature business — the easy growth is behind',
    ],
  },

  'MM': {
    description: 'Mahindra & Mahindra — tractors, SUVs, and everything rugged. The Thar and XUV series made them cool again.',
    howToInvest: 'Buy MM on NSE/BSE. India\'s rural + urban auto play.',
    pros: [
      'Thar and XUV700 turned M&M from "tractor company" to "lifestyle brand" — branding masterclass',
      'Tractor market leader — India\'s farmers are your customers, and they always need tractors',
      'EV foray (XUV.e8, BE series) keeps them relevant in the electric future',
    ],
    cons: [
      'Tractor demand is monsoon-dependent — clouds literally control your stock price',
      'Too many subsidiaries and businesses — focus is a question mark',
      'EV competition from Tata, Hyundai, and new entrants is heating up fast',
    ],
  },

  // ═══════════════════════════════════════════
  //  MIDCAP STARS
  // ═══════════════════════════════════════════

  'DIXON': {
    description: 'Dixon Technologies — India\'s largest electronics manufacturer. They make TVs, washing machines, and phones for brands you actually buy.',
    howToInvest: 'Buy DIXON on NSE/BSE. A pure PLI (Production Linked Incentive) beneficiary.',
    pros: [
      'China+1 strategy means global brands are literally begging Indian manufacturers for capacity',
      'Contract manufacturing is the most capital-efficient business model in hardware',
      'Government PLI scheme is basically free money for companies like Dixon',
    ],
    cons: [
      'Margins are razor-thin — one wrong contract and profitability evaporates',
      'Completely dependent on clients\' orders — no brand of their own to fall back on',
      'Valuation prices in flawless execution for the next 5 years — no room for mistakes',
    ],
  },

  'POLYCAB': {
    description: 'Polycab India — India\'s largest wire and cable manufacturer. Every building, every factory, every data center needs cables.',
    howToInvest: 'Buy POLYCAB on NSE/BSE. Infrastructure capex play + FMEG (fans, switches) upside.',
    pros: [
      'India\'s electrification and data center boom means cables are non-negotiable',
      'FMEG business (fans, lighting) is turning this into a consumer brand too',
      'Real estate recovery = more buildings = more wires. Simple math.',
    ],
    cons: [
      'Copper prices directly impact costs — your wire stock dances to LME\'s tune',
      'Competition from Havells, Finolex means pricing power has limits',
      'Transition to FMEG is expensive and execution-dependent — wires are easier',
    ],
  },

  'PERSISTENT': {
    description: 'Persistent Systems — mid-tier IT company punching above its weight. Product engineering and digital transformation specialist.',
    howToInvest: 'Buy PERSISTENT on NSE/BSE. The mid-cap IT stock that analysts love to recommend.',
    pros: [
      'Growth rates that embarrass large-cap IT companies — 20%+ revenue growth consistently',
      'Partnerships with Salesforce, AWS, and Google give them a distribution edge',
      'Product engineering focus means higher margins than traditional IT services',
    ],
    cons: [
      'Valuation assumes they\'ll keep growing at this pace forever — pressure!',
      'One client concentration risk — lose a big account and the quarter is ruined',
      'Talent war with the big boys (TCS, Infosys) is a constant headache',
    ],
  },

  'BSE': {
    description: 'BSE Ltd — Asia\'s oldest stock exchange. Yes, the actual exchange is listed on itself. Very meta.',
    howToInvest: 'Buy BSE on NSE (ironic, isn\'t it?). A play on India\'s growing retail investor base.',
    pros: [
      'India went from 4 crore to 15+ crore demat accounts in 3 years — BSE gets a cut of everything',
      'StAR MF platform processes crores of mutual fund orders daily — silent revenue machine',
      'Zero competition risk — you can\'t just start a new stock exchange over the weekend',
    ],
    cons: [
      'NSE is the dominant exchange — BSE is like the Pepsi of Indian exchanges',
      'Revenue is tied to market activity — bear markets mean less trading, less revenue',
      'Regulatory risk from SEBI changes can impact exchange economics overnight',
    ],
  },

  'KAYNES': {
    description: 'Kaynes Technology — electronics system design and manufacturing (ESDM). Think Dixon, but for industrial and automotive electronics.',
    howToInvest: 'Buy KAYNES on NSE/BSE. India\'s "Make in India" for advanced electronics.',
    pros: [
      'Defense and aerospace electronics — once you\'re in, switching costs are astronomical',
      'Order book provides revenue visibility that most midcaps would kill for',
      'ESDM sector is tiny in India compared to global peers — massive growth runway',
    ],
    cons: [
      'Still a small company — one bad quarter and the stock can move 20%',
      'Execution on scaling manufacturing is the make-or-break factor',
      'Valuation is priced for perfection — and perfection is hard to deliver consistently',
    ],
  },

  'TRENT': {
    description: 'Trent Ltd — Tata\'s retail arm operating Westside and Zudio. Zudio is India\'s answer to H&M, but at 1/3rd the price.',
    howToInvest: 'Buy TRENT on NSE/BSE. India\'s fastest-growing fashion retail story.',
    pros: [
      'Zudio is scaling like a beast — ₹999 jeans that look like ₹3000 jeans. People love that.',
      'Store expansion at 30%+ annually — they can\'t open stores fast enough',
      'Tata backing means capital is never a constraint — they\'ll keep investing',
    ],
    cons: [
      'Retail is a low-margin, execution-heavy business — glamorous it is not',
      'Competition from Reliance Trends, D-Mart, and D2C brands is relentless',
      'Valuation assumes Zudio becomes the next Zara — that\'s a lot of assumption',
    ],
  },

  'VBL': {
    description: 'Varun Beverages — PepsiCo\'s largest bottler outside the US. Every Pepsi, Mountain Dew, and Sting you drink in India comes from these guys.',
    howToInvest: 'Buy VBL on NSE/BSE. A play on India\'s beverage consumption and summer heat.',
    pros: [
      'Bottling agreement with PepsiCo is essentially a license to print money in a hot country',
      'Expanding into Africa and other emerging markets — India was just the beginning',
      'Per-capita beverage consumption in India is 1/10th of the US — the math is beautiful',
    ],
    cons: [
      'Completely dependent on PepsiCo — if Pepsi changes terms, VBL\'s economics change overnight',
      'Sugar tax, health consciousness trends could slow carbonated drink growth',
      'One bad monsoon (hot summer delayed) and quarterly numbers look weak',
    ],
  },

  'CDSL': {
    description: 'CDSL — Central Depository Services. They hold your shares in electronic form. If you have a demat account, CDSL probably runs it.',
    howToInvest: 'Buy CDSL on NSE/BSE. A toll-booth on India\'s capital markets.',
    pros: [
      'Duopoly with NSDL — there are literally only two depositories in India, and you\'re investing in one',
      'Every new demat account = recurring revenue. India adds lakhs of accounts monthly.',
      'Asset-light business model with 70%+ margins — the dream business',
    ],
    cons: [
      'Revenue per account is decreasing as competition for market share heats up',
      'SEBI regulation can change economics with one circular — regulatory risk is real',
      'Already expensive — the "hidden gem" phase is long over, everyone knows this story',
    ],
  },

  'COFORGE': {
    description: 'Coforge — mid-tier IT company (formerly NIIT Technologies) focused on insurance, travel, and government verticals.',
    howToInvest: 'Buy COFORGE on NSE/BSE. Niche IT play with domain expertise.',
    pros: [
      'Deep specialization in insurance and travel tech — clients don\'t switch easily',
      'BFS (Banking & Financial Services) vertical growing rapidly',
      'Baring PE ownership brings professional management and governance',
    ],
    cons: [
      'Client concentration is high — top 10 clients drive most revenue',
      'Competing with TCS and Infosys for the same deals, with 1/10th the brand',
      'Valuation premium is justified only if growth sustains — any deceleration hurts',
    ],
  },

  'ZOMATO': {
    description: 'Zomato — India\'s food delivery and quick commerce giant. From restaurant listings to delivering groceries in 10 minutes.',
    howToInvest: 'Buy ZOMATO on NSE/BSE. The "New India" consumption story in one stock.',
    pros: [
      'Quick commerce (Blinkit) is growing faster than anyone expected — 10-minute delivery is addictive',
      'India\'s food services market is massive and still mostly offline — digitization runway is huge',
      'Finally profitable — the "when will they make money?" narrative is dead',
    ],
    cons: [
      'Competition from Swiggy, Amazon, and Flipkart means burning cash on discounts never truly ends',
      'Unit economics at scale are still a question mark — growth is easy, profits are hard',
      'Regulatory risk on gig worker rights could fundamentally change the cost structure',
    ],
  },

  // ═══════════════════════════════════════════
  //  US INDICES
  // ═══════════════════════════════════════════

  'SPX': {
    description: 'The S&P 500 — 500 largest US companies, representing ~80% of US stock market capitalization. The world\'s most-watched index.',
    howToInvest: 'Buy Motilal S&P 500 Index Fund (INR), or VOO/SPY directly via INDmoney/Vested (LRS route, USD).',
    pros: [
      'Has literally never failed to recover from a crash — 100+ years of data backs this up',
      'Owning 500 of the best companies in the world for a 0.03% expense ratio is theft',
      'Dollar exposure acts as natural hedge against INR depreciation',
    ],
    cons: [
      'US tax withholding on dividends makes the actual return lower than you think',
      'Rupee appreciation (if it ever happens) eats into your USD returns',
      'Buying at all-time highs always feels wrong, even though it\'s usually right',
    ],
  },

  'NDX': {
    description: 'NASDAQ 100 — the 100 largest non-financial companies on NASDAQ. Basically a tech index wearing a trench coat.',
    howToInvest: 'Buy Motilal Nasdaq 100 FoF (INR) or QQQ directly via LRS. The easiest way to own FAANG.',
    pros: [
      'Apple, Microsoft, Nvidia, Google, Meta — you\'re basically owning the future of technology',
      'AI revolution is printing money for these companies faster than they can count it',
      'Has outperformed the S&P 500 for 15+ years — the definition of "momentum"',
    ],
    cons: [
      'Tech-heavy means tech-crash-heavy — Nasdaq dropped 78% in 2000, and memories are short',
      'Top 7 stocks are like 50% of the index — "diversified" is a strong word here',
      'Buying a tech index at 30x PE requires faith in growth that would make a religion jealous',
    ],
  },

  'DJIA': {
    description: 'The Dow Jones Industrial Average — 30 blue-chip US stocks. The index your grandfather talks about.',
    howToInvest: 'Buy a Dow Jones ETF (DIA) via LRS route. Or just buy the S&P 500 — it\'s better.',
    pros: [
      'Oldest major US index — if it\'s survived 127 years, it\'ll probably survive your investment horizon',
      'Contains household names — Coca-Cola, Nike, Goldman Sachs. You know what you own.',
      'Less volatile than Nasdaq — your sleep quality will thank you',
    ],
    cons: [
      'Price-weighted index — a $400 stock has 10x the influence of a $40 stock. Make it make sense.',
      'Only 30 stocks — your neighborhood WhatsApp group has more diversity',
      'No Tesla, no Alphabet, no Amazon for the longest time — the selection committee lives in 1995',
    ],
  },

  'RUT': {
    description: 'Russell 2000 — 2000 small-cap US companies. The "Main Street America" index that Wall Street ignores.',
    howToInvest: 'Buy IWM ETF via LRS route. A bet on small American businesses.',
    pros: [
      'When the US economy actually recovers, small caps lead the charge',
      'Trading at historical discount to large caps — the value argument is real',
      'Less Big Tech concentration means more genuine diversification',
    ],
    cons: [
      'Many of these companies aren\'t profitable — it\'s a basket of "hope" stocks',
      'Higher interest rates hit small caps disproportionately — they actually need loans',
      'Has underperformed the S&P 500 for a decade — patience is a virtue you\'ll need',
    ],
  },

  'VOO': {
    description: 'Vanguard S&P 500 ETF — the most popular ETF in the world. Jack Bogle\'s gift to humanity.',
    howToInvest: 'Buy via INDmoney, Vested, or any international broker. Need LRS route (max $250K/year).',
    pros: [
      '0.03% expense ratio — Vanguard charges you less than your bank charges for an SMS alert',
      'Warren Buffett literally bet $1 million that this beats hedge funds — and won',
      'Set it and forget it — the ultimate "I have a life outside investing" product',
    ],
    cons: [
      'LRS paperwork makes buying this from India feel like applying for a visa',
      'Dividend withholding tax (25%) is a silent killer of returns for Indian investors',
      'Market-cap weighted means you\'re heavily exposed to whatever\'s expensive right now',
    ],
  },

  'QQQ': {
    description: 'Invesco QQQ — NASDAQ 100 ETF. The "I believe in technology" ETF.',
    howToInvest: 'Buy via LRS route through INDmoney/Vested/Interactive Brokers.',
    pros: [
      'One ETF to own the most innovative companies on Earth — not bad for a single ticker',
      'Tech sector concentration is a feature when tech is eating the world',
      'Liquidity is insane — you can buy/sell millions of dollars worth without blinking',
    ],
    cons: [
      'When tech corrects, QQQ doesn\'t gently decline — it takes the elevator down',
      'Expense ratio (0.20%) is higher than VOO — turns out you pay for the hype',
      'You\'re basically betting the entire future runs on 7 companies. Bold strategy.',
    ],
  },

  'VTI': {
    description: 'Vanguard Total Stock Market ETF — every publicly traded US company in one ticker. The "I want ALL of America" approach.',
    howToInvest: 'Buy via LRS route. The most diversified single US equity ETF you can buy.',
    pros: [
      '4000+ stocks — this is what actual diversification looks like',
      'Includes small and mid caps that the S&P 500 misses — broader exposure',
      '0.03% expense ratio — Vanguard is basically a charity at this point',
    ],
    cons: [
      'Performance is 95% correlated with VOO — the extra 3500 stocks barely matter',
      'Same LRS hassles as every US investment from India',
      'Small-cap drag can slightly underperform pure S&P 500 in bull runs',
    ],
  },

  'MOFSP500': {
    description: 'Motilal Oswal S&P 500 Index Fund — invest in the S&P 500 in Indian rupees. No LRS, no forex hassle.',
    howToInvest: 'Buy via Zerodha, Groww, or any MF platform. SIP or lump sum in INR.',
    pros: [
      'No LRS paperwork, no forex conversion, no international broker — just buy like any MF',
      'SIP in rupees, get dollar exposure — the lazy person\'s international diversification',
      'SEBI-regulated, Indian AMC — your parents won\'t panic about "foreign investments"',
    ],
    cons: [
      'Expense ratio (~1%) is 30x higher than VOO — convenience has a price',
      'SEBI\'s overseas investment limit means the fund can stop accepting money anytime',
      'Tracking error means you\'re not getting pure S&P 500 returns — close, but not exact',
    ],
  },

  // ═══════════════════════════════════════════
  //  US STOCKS
  // ═══════════════════════════════════════════

  'AAPL': {
    description: 'Apple Inc — the most valuable company on Earth. iPhones, MacBooks, and an ecosystem so sticky, leaving it feels like a breakup.',
    howToInvest: 'Buy AAPL via LRS route (INDmoney, Vested) or through Apple-heavy ETFs like QQQ.',
    pros: [
      'The most loyal customer base in history — people will sell a kidney for a new iPhone',
      'Services revenue (App Store, iCloud, Apple Music) is a $80B/year recurring cash machine',
      'Share buybacks so aggressive, Apple is basically buying itself into the sunset',
    ],
    cons: [
      'Innovation peaked with Steve Jobs — AirPods and Apple Vision Pro aren\'t exactly the iPhone moment',
      'China dependency for manufacturing is a geopolitical ticking time bomb',
      'India pricing makes every launch feel like a personal financial attack',
    ],
  },

  'MSFT': {
    description: 'Microsoft — the boring tech giant that became exciting again. Windows, Azure, Office 365, LinkedIn, and now AI via OpenAI partnership.',
    howToInvest: 'Buy MSFT via LRS route or through US tech ETFs.',
    pros: [
      'Azure cloud is growing 30%+ — enterprises are literally dependent on Microsoft for everything',
      'OpenAI partnership means Microsoft IS the AI platform play',
      'Dividend + buybacks + growth — the rare "have your cake and eat it too" tech stock',
    ],
    cons: [
      'Antitrust scrutiny on the Activision deal and OpenAI investment is brewing',
      'Enterprise spending slowdowns hit Azure directly — recession fears are real',
      'Satya Nadella can\'t stay CEO forever — succession is an unspoken risk',
    ],
  },

  'NVDA': {
    description: 'Nvidia — the company that accidentally became the most important semiconductor firm on Earth because AI needs GPUs.',
    howToInvest: 'Buy NVDA via LRS route. The "pick-and-shovel" play of the AI gold rush.',
    pros: [
      'Every AI model on Earth runs on Nvidia GPUs — that\'s not a moat, that\'s an ocean',
      'Data center revenue growing 200%+ — these numbers look like a typo but they\'re real',
      'CUDA ecosystem lock-in means switching away from Nvidia is like switching from QWERTY',
    ],
    cons: [
      'Valuation assumes AI spend grows forever — what if the bubble has a ceiling?',
      'US-China chip export restrictions could cut off a huge market overnight',
      'AMD, Intel, Google, and Amazon are all making competing chips — monopoly has an expiry date',
    ],
  },

  'GOOGL': {
    description: 'Alphabet (Google) — search, YouTube, Android, Waymo, and Google Cloud. They know more about you than your mother does.',
    howToInvest: 'Buy GOOGL via LRS route. The "advertising will never die" thesis.',
    pros: [
      'Google Search has 92% market share — that\'s not dominance, that\'s a verb (just Google it)',
      'YouTube is the world\'s second-largest search engine — and it prints ad money',
      'Google Cloud is growing fast and actually approaching profitability',
    ],
    cons: [
      'DOJ antitrust case could literally break up the company — not a drill',
      'AI search (Perplexity, ChatGPT) could disrupt the core ad business model',
      'Alphabet wastes billions on "Other Bets" that never seem to bet right',
    ],
  },

  'META': {
    description: 'Meta Platforms — Facebook, Instagram, WhatsApp, and the metaverse (which we\'re all pretending is still a thing).',
    howToInvest: 'Buy META via LRS route. India has the most FB and WhatsApp users — ironic that you can\'t easily invest.',
    pros: [
      '3 billion people use Meta\'s apps daily — half of humanity is on their platform',
      'Reels is eating TikTok\'s lunch in countries where TikTok is banned (like India)',
      'AI ad targeting is so effective, it\'s almost creepy — and advertisers love creepy-effective',
    ],
    cons: [
      'Metaverse spending burned $40+ billion with nothing to show for it except memes',
      'Privacy regulations (GDPR, etc.) are slowly choking the ad targeting machine',
      'Gen Z thinks Facebook is for boomers — Instagram carries the youth burden alone',
    ],
  },

  'AMZN': {
    description: 'Amazon — the everything store. E-commerce, AWS cloud, Prime streaming, and Jeff Bezos\'s humble gift to consumerism.',
    howToInvest: 'Buy AMZN via LRS route. The "cloud computing + retail" combo play.',
    pros: [
      'AWS is the #1 cloud platform globally — every Netflix show you watch runs on Amazon\'s servers',
      'Prime membership is the stickiest subscription model since gravity',
      'Logistics network is so vast, it could probably deliver to the Moon if there were Prime members there',
    ],
    cons: [
      'Retail margins are thinner than a sheet of paper — AWS subsidizes everything',
      'Antitrust pressure from every government on Earth is building',
      'India operations are a money pit — thanks to regulatory restrictions and Flipkart/Reliance competition',
    ],
  },

  'TSLA': {
    description: 'Tesla — EVs, energy storage, and Elon Musk\'s Twitter opinions. Part car company, part tech company, part meme stock.',
    howToInvest: 'Buy TSLA via LRS route. Only for those who can handle 50% drawdowns without crying.',
    pros: [
      'Leading the EV revolution — Supercharger network is an actual moat',
      'Energy storage and solar business is the "next Tesla" hiding inside Tesla',
      'FSD (Full Self-Driving) subscription could be the highest-margin product ever, if it works',
    ],
    cons: [
      'Elon Musk\'s tweets can move the stock more than quarterly earnings — governance, anyone?',
      'Competition from BYD, Rivian, Lucid, and legacy automakers is intensifying every quarter',
      'Valuation assumes it\'s a tech company, but 90% of revenue comes from selling cars',
    ],
  },

  'BRK.B': {
    description: 'Berkshire Hathaway (Class B) — Warren Buffett\'s holding company. Insurance, railroads, See\'s Candies, and a $200B cash pile.',
    howToInvest: 'Buy BRK-B via LRS route. The "I trust an old man from Omaha with my money" approach.',
    pros: [
      'Warren Buffett has compounded at ~20% annually for 60 years — the GOAT of investing',
      'No dividend means no tax drag — all returns are via appreciation (tax-efficient)',
      'Cash pile of $200B+ means they can buy basically anything when markets crash',
    ],
    cons: [
      'Buffett is 94 — succession to Greg Abel is the biggest unknown in finance',
      'Too big to grow fast — they need "elephant-sized acquisitions" that rarely appear',
      'No tech exposure means you miss the AI rally — Buffett admitted he doesn\'t understand tech',
    ],
  },

  // ═══════════════════════════════════════════
  //  MUTUAL FUNDS
  // ═══════════════════════════════════════════

  'MF-LC': {
    description: 'Mirae Asset Large Cap Fund — one of India\'s top large-cap equity mutual funds. Consistent outperformer with a low expense ratio.',
    howToInvest: 'Buy via Zerodha Coin, Groww, or any MF platform. SIP starts at Rs 500/month.',
    pros: [
      'Fund manager actually earns their fees — consistent alpha over the benchmark',
      'SIP + large cap = the "I\'m responsible but not boring" financial personality',
      'Tax-efficient compared to direct stock picking — no frequent capital gains tax events',
    ],
    cons: [
      'Expense ratio eats into returns — you\'re paying someone to basically buy Nifty stocks',
      'Exit load if you sell within 1 year — your money is technically a hostage',
      'Past performance ≠ future results — the only true statement in all of finance',
    ],
  },

  'MF-MC': {
    description: 'HDFC Mid-Cap Opportunities Fund — one of the largest midcap funds in India. High returns, high volatility, high blood pressure.',
    howToInvest: 'Buy via any MF platform. SIP recommended — lump sum in midcaps is for the brave.',
    pros: [
      'One of the most consistent midcap funds in India — 15+ year track record',
      'AUM so large, it practically IS the midcap market',
      'Professional stock picking in a segment where amateur investors get eaten alive',
    ],
    cons: [
      'Large AUM means it\'s becoming harder to buy small positions without moving prices',
      'Midcap drawdowns of 30-40% will test your SIP discipline like nothing else',
      'Fund manager changes can alter the DNA of the fund overnight',
    ],
  },

  'MF-FC': {
    description: 'Parag Parikh Flexi Cap Fund — the "thinking person\'s mutual fund." Holds Indian + US stocks + cash. Rajeev Thakkar is a cult figure.',
    howToInvest: 'Buy via any MF platform. One of the few funds with genuine international diversification.',
    pros: [
      'Holds Google, Alphabet, Amazon along with Indian stocks — geographic diversification in one fund',
      'Value-oriented approach means they don\'t chase momentum like a Labrador chasing a ball',
      'Low portfolio turnover = lower tax drag and costs — patience as a strategy',
    ],
    cons: [
      'International allocation is capped by SEBI limits — can\'t always buy what they want',
      'Conservative approach means it underperforms in euphoric bull markets',
      'The cult following means AUM is growing fast — size is the enemy of performance',
    ],
  },

  'MF-EL': {
    description: 'Axis ELSS Tax Saver Fund — save tax under Section 80C and potentially grow wealth. 3-year lock-in that you\'ll forget exists.',
    howToInvest: 'Buy via any MF platform before March 31st (when India suddenly remembers tax saving exists).',
    pros: [
      'Save up to Rs 46,800 in taxes — the government literally pays you to invest',
      '3-year lock-in prevents panic selling — sometimes handcuffs are good for you',
      'Shortest lock-in among 80C options — PPF makes you wait 15 years!',
    ],
    cons: [
      'Axis MF had that front-running scandal — trust takes time to rebuild',
      'ELSS funds can\'t be redeemed for 3 years per SIP installment — liquidity is non-existent',
      'New tax regime has no 80C benefit — ELSS is becoming irrelevant for many taxpayers',
    ],
  },

  'MF-IDX': {
    description: 'UTI Nifty 50 Index Fund — a passive fund that just tracks the Nifty 50 index. No star fund manager, no drama.',
    howToInvest: 'Buy via any MF platform. The lowest-effort equity investment in India.',
    pros: [
      'Expense ratio of 0.1% — cheaper than most things in life',
      'No fund manager risk — the index decides what to buy, not some human\'s gut feeling',
      'Outperforms most active large-cap funds over 10 years — the data is embarrassing for fund managers',
    ],
    cons: [
      'You\'ll never outperform the market — you ARE the market',
      'No downside protection — when Nifty falls, you fall with it, no questions asked',
      'Telling people "I invest in an index fund" doesn\'t sound as cool as stock picking',
    ],
  },

  'MF-NQ': {
    description: 'Motilal Oswal Nasdaq 100 FoF — invest in the Nasdaq 100 in Indian rupees. Tech exposure without the LRS headache.',
    howToInvest: 'Buy via any MF platform in INR. SIP or lump sum. No forex conversion needed.',
    pros: [
      'Own Apple, Google, Nvidia in a SEBI-regulated Indian mutual fund — simple',
      'Rupee depreciation against the dollar gives you an automatic kicker',
      'SIP in rupees into the world\'s best tech index — doesn\'t get easier than this',
    ],
    cons: [
      'Expense ratio (~0.5%) is 10x what you\'d pay with QQQ directly',
      'Fund can close to new investments if SEBI\'s overseas limit is hit — happened before',
      'Double taxation — US dividend withholding + Indian capital gains — the tax sandwich from hell',
    ],
  },

  'MF-PR': {
    description: 'Franklin India Prima Fund — OG Indian midcap fund. Been around since 1993. The fund that made midcap investing mainstream.',
    howToInvest: 'Buy via any MF platform. One of the longest-running midcap funds in India.',
    pros: [
      '30+ year track record — this fund has survived every crisis India has thrown at it',
      'Research-driven stock picking with a focus on growth at reasonable price (GARP)',
      'Franklin Templeton\'s global research infrastructure backs the local team',
    ],
    cons: [
      'Franklin debt fund fiasco left a stain on the brand — even equity investors felt the trust deficit',
      'AUM has shrunk as investors moved to newer, shinier midcap funds',
      'Higher expense ratio than index funds — the "active management premium" debate applies here',
    ],
  },

  'MF-BC': {
    description: 'SBI Bluechip Fund — SBI\'s flagship large-cap fund. The "my bank told me to invest" mutual fund.',
    howToInvest: 'Buy via SBI MF website or any third-party platform. The default recommendation from SBI branches.',
    pros: [
      'SBI brand means your parents trust it more than they trust you',
      'Consistent large-cap exposure with reasonable expense ratio',
      'Massive AUM means it\'s battle-tested across multiple market cycles',
    ],
    cons: [
      'Performance has been middling compared to Mirae and ICICI Pru peers',
      'Bank distribution = higher expense ratio regular plans — always go direct',
      'SBI MF doesn\'t exactly scream "innovative fund management"',
    ],
  },

  // ═══════════════════════════════════════════
  //  REITS & INVITS
  // ═══════════════════════════════════════════

  'EMBASSY': {
    description: 'Embassy Office Parks REIT — India\'s first and largest REIT. Owns 43 million sq ft of office space leased to Goldman Sachs, Google, Microsoft.',
    howToInvest: 'Buy EMBASSY on NSE/BSE like a regular stock. Minimum 1 unit. Quarterly dividends.',
    pros: [
      'Your tenants are Google, Microsoft, JP Morgan — they\'re not exactly skipping rent',
      'Quarterly dividends give you cash flow that stocks can\'t match',
      'Indian office REITs yield 6-8% — that\'s FD returns with equity upside',
    ],
    cons: [
      'Work-from-home trend is the sword hanging over every office REIT globally',
      'Interest rate hikes make REIT yields less attractive compared to risk-free FDs',
      'Indian REIT taxation is a confusing mess — dividend vs capital gains treatment changes yearly',
    ],
  },

  'MINDSPACE': {
    description: 'Mindspace Business Parks REIT — premium office spaces in Hyderabad, Mumbai, Pune, Chennai. K Raheja group backed.',
    howToInvest: 'Buy MINDSPACE on NSE/BSE. Same as buying a stock. Quarterly income distributions.',
    pros: [
      'Hyderabad and Pune are IT hubs that aren\'t going anywhere — location matters in real estate',
      'Grade A buildings with long lease terms — predictable cash flows for years',
      'Lower vacancy than Embassy — occupancy above 85% consistently',
    ],
    cons: [
      'Smaller than Embassy — less diversification across cities and tenants',
      'If Hyderabad IT market slows, Mindspace feels it disproportionately',
      'REIT awareness in India is still low — liquidity can dry up on bad days',
    ],
  },

  'NEXUS': {
    description: 'Nexus Select Trust — India\'s only retail mall REIT. Owns premium shopping malls across 14 cities. When Indians shop, you earn.',
    howToInvest: 'Buy NEXUS on NSE/BSE. India\'s first retail REIT — listed in 2023.',
    pros: [
      'Premium malls have 90%+ occupancy — they\'re experience centers, not just shopping places',
      'India\'s organized retail penetration is just 12% — runway is huge',
      'Revenue model is rent + revenue share from tenants — you profit when they profit',
    ],
    cons: [
      'E-commerce is a permanent threat — every Amazon sale is an anti-mall event',
      'Relatively new REIT with limited track record — it\'s a "trust us" investment',
      'Mall capex and renovation costs are significant — maintenance isn\'t free',
    ],
  },

  'BIRET': {
    description: 'Brookfield India REIT — global real estate giant Brookfield\'s India office portfolio. Premium offices in Gurgaon, Noida, Mumbai, Kolkata.',
    howToInvest: 'Buy BIRET on NSE/BSE. Backed by Brookfield Asset Management — one of the world\'s largest real estate investors.',
    pros: [
      'Brookfield\'s global expertise in real estate management — not your local builder',
      'Strong tenant mix with long-term lease agreements',
      'Steady dividend income with potential for NAV appreciation',
    ],
    cons: [
      'Smallest of the three office REITs — liquidity is a real concern',
      'Gurgaon office market has oversupply issues — not all locations are equal',
      'Management fees to Brookfield are an ongoing cost that reduces your returns',
    ],
  },

  'INDIGRID': {
    description: 'IndiGrid InvIT — India\'s first infrastructure investment trust. Owns power transmission lines. Your investment literally powers India.',
    howToInvest: 'Buy INDIGRID on NSE/BSE. Quarterly distributions. Think of it as a fixed-income alternative.',
    pros: [
      'Revenue is regulated and predictable — CERC-approved tariffs mean no negotiation drama',
      'Power transmission is the most boring, stable infra business — boring is beautiful',
      'Yields 10-12% — higher than most FDs with similar predictability',
    ],
    cons: [
      'Growth is limited by acquisition pipeline — they need to keep buying assets',
      'Regulatory changes to tariff structure could impact returns overnight',
      'Leverage is used to fund acquisitions — debt levels need watching',
    ],
  },

  'POWGRD': {
    description: 'PowerGrid InvIT — Power Grid Corporation\'s transmission assets. Government-backed infrastructure with regulated returns.',
    howToInvest: 'Buy POWGRD on NSE/BSE. Government lineage with InvIT structure.',
    pros: [
      'Power Grid Corporation backing means zero counter-party risk on government payments',
      'Regulated returns provide predictable income — your dividend calendar is set',
      'India\'s power demand is growing — more power means more transmission lines needed',
    ],
    cons: [
      'Growth rate is glacial — this is a yield play, not a growth play',
      'Government asset means government bureaucracy applies to operations',
      'Liquidity is thin — selling large quantities can move the price against you',
    ],
  },

  // ═══════════════════════════════════════════
  //  GOLD
  // ═══════════════════════════════════════════

  'SGB': {
    description: 'Sovereign Gold Bonds — RBI-issued bonds backed by gold. You get gold price appreciation PLUS 2.5% annual interest. It\'s gold with a salary.',
    howToInvest: 'Buy during RBI\'s periodic SGB issues or from NSE/BSE secondary market. Redeemable after 5 years.',
    pros: [
      'Gold returns + 2.5% interest — literally the only gold investment that pays you to hold it',
      'No storage hassle, no making charges, no purity concerns — it\'s just a bond',
      'Tax-free capital gains if held till maturity (8 years) — the government giving a gift is rare',
    ],
    cons: [
      '8-year lock-in is like a prison sentence — exit window opens at 5 years but still',
      'RBI has stopped issuing new SGBs — secondary market premiums are annoying',
      'If gold crashes, your 2.5% interest won\'t save your portfolio from sadness',
    ],
  },

  'GOLDBEES': {
    description: 'Nippon India Gold ETF — India\'s largest and most liquid gold ETF. 1 unit ≈ 0.01 grams of gold. Electronic gold at its simplest.',
    howToInvest: 'Buy GOLDBEES on NSE via any broker. Trades like a stock. SIP possible through some brokers.',
    pros: [
      'Most liquid gold ETF in India — tight bid-ask spreads, easy to buy and sell',
      'No making charges, no purity risk — pure gold exposure in demat form',
      'Cheaper than SGBs on secondary market and more liquid than physical gold',
    ],
    cons: [
      'Expense ratio of 0.5% is basically a gold tax you pay annually',
      'No interest income unlike SGBs — just sits there looking golden',
      'Capital gains tax applies (unlike SGB at maturity) — the taxman cometh',
    ],
  },

  'HDFCGOLD': {
    description: 'HDFC Gold ETF — another top gold ETF in India. Similar to GOLDBEES but from the HDFC AMC stable.',
    howToInvest: 'Buy HDFCGOLD on NSE via any broker. Same mechanics as GOLDBEES.',
    pros: [
      'HDFC brand means institutional backing and reliable tracking',
      'Good alternative if you want gold ETF diversification (yes, even ETFs can be diversified)',
      'Decent AUM and liquidity for smooth trading experience',
    ],
    cons: [
      'Marginally less liquid than GOLDBEES — the gap is small but exists',
      'Same expense ratio story — you\'re paying for the convenience of electronic gold',
      'Gold doesn\'t produce anything — it just sits there, beautifully, doing nothing productive',
    ],
  },

  'MCX:GOLD': {
    description: 'MCX Gold Futures — leveraged gold trading on India\'s commodity exchange. For those who think physical gold is too slow.',
    howToInvest: 'Open a commodity trading account with Zerodha/Angel One. Requires margin money. Not for beginners.',
    pros: [
      'Leverage means you can control Rs 70 lakh of gold with Rs 5 lakh margin — powerful',
      'Can go short — one of the few ways to bet against gold in India',
      'Price discovery is in real-time — no NAV delays like mutual funds',
    ],
    cons: [
      'Leverage cuts both ways — a 5% gold drop could wipe 50% of your margin',
      'Contract expiry means you must roll over or take physical delivery (yes, actual gold bars)',
      'This is trading, not investing — your odds of consistent profit are statistically depressing',
    ],
  },

  'MMTC': {
    description: 'MMTC-PAMP Digital Gold — buy gold in milligrams through apps like Paytm, PhonePe, Google Pay. Gold for the Instagram generation.',
    howToInvest: 'Buy through Paytm, PhonePe, Google Pay, or the MMTC-PAMP website. Start from Rs 1.',
    pros: [
      'Start investing from Rs 1 — literally the most accessible gold investment ever',
      'MMTC-PAMP is a JV between government MMTC and Swiss refiner PAMP — pedigree matters',
      'Can convert to physical coins/bars anytime — digital to physical bridge exists',
    ],
    cons: [
      'Spread between buy and sell price is 3-4% — you\'re losing money from day one',
      'No SEBI regulation — it\'s regulated by consumer laws, not securities law',
      'Storage charges can eat into returns — your digital gold isn\'t free to hold',
    ],
  },

  'GDX': {
    description: 'VanEck Gold Miners ETF — owns shares of gold mining companies globally. When gold rises, miners rise MORE.',
    howToInvest: 'Buy GDX via LRS route through INDmoney/Vested. USD-denominated.',
    pros: [
      'Levered play on gold — miners amplify gold\'s moves by 2-3x on the upside',
      'Miners pay dividends — your gold investment actually generates income',
      'Operational leverage means rising gold prices massively boost miner profits',
    ],
    cons: [
      'When gold falls, miners fall MUCH harder — leverage is a double-edged pickaxe',
      'Mining is a terrible business — regulatory risk, labor issues, environmental costs',
      'Management quality varies wildly — some miners are well-run, others are money pits literally',
    ],
  },

  'GDXJ': {
    description: 'VanEck Junior Gold Miners ETF — small-cap gold miners. High risk, high reward, high anxiety.',
    howToInvest: 'Buy GDXJ via LRS route. Only for those who understand mining risk.',
    pros: [
      'Junior miners can 10x when they discover new deposits — exploration upside is huge',
      'Even more leverage to gold prices than GDX — maximum beta play',
      'Acquisition targets — big miners buy successful juniors at premiums',
    ],
    cons: [
      'Many junior miners are essentially lottery tickets with a geology degree',
      'Exploration can fail, permits can be denied, operations can go bankrupt',
      'Drawdowns of 70-80% from peaks are not uncommon — this is not for the faint-hearted',
    ],
  },

  'IAU': {
    description: 'iShares Gold Trust — BlackRock\'s gold ETF. Simply holds physical gold in vaults. One of the largest gold ETFs globally.',
    howToInvest: 'Buy IAU via LRS route. Very similar to GLD but with a lower expense ratio.',
    pros: [
      'BlackRock management — the world\'s largest asset manager holds your gold',
      '0.25% expense ratio — cheap for physical gold exposure',
      'Ultra-liquid — billions in daily trading volume',
    ],
    cons: [
      'No yield — gold produces no income, and neither does this ETF',
      'Counterparty risk — you trust that the vault actually has the gold (it does, but still)',
      'LRS + US estate tax complications make this annoying for Indian investors',
    ],
  },

  // ═══════════════════════════════════════════
  //  SILVER
  // ═══════════════════════════════════════════

  'SILVERIETF': {
    description: 'Mirae Asset Silver ETF — India\'s silver exposure in demat form. Silver is gold\'s volatile younger sibling.',
    howToInvest: 'Buy SILVERIETF on NSE via any broker. India\'s silver ETF market launched in 2022.',
    pros: [
      'Industrial demand (solar panels, electronics) gives silver a dual personality — precious + industrial',
      'Gold-silver ratio is historically high — silver could outperform gold in a metals rally',
      'India launched silver ETFs just recently — you\'re early to the Indian silver ETF game',
    ],
    cons: [
      'Volatility is 1.5x that of gold — buckle up for bigger drawdowns',
      'Industrial demand means silver crashes harder in recessions',
      'Silver ETF tracking error in India is still being figured out — early-stage product',
    ],
  },

  'SILVERBEES': {
    description: 'Nippon Silver ETF — another top silver ETF in India from the Nippon AMC stable.',
    howToInvest: 'Buy SILVERBEES on NSE via any broker. Same mechanics as gold ETFs.',
    pros: [
      'Higher liquidity than other silver ETFs — Nippon has the ETF distribution advantage',
      'Silver at 80x gold-silver ratio is historically cheap — mean reversion thesis',
      'Solar energy boom means structural demand increase for silver',
    ],
    cons: [
      'Expense ratio is higher than gold ETFs — silver is the more expensive sibling to own',
      'Silver is more volatile than your average Bollywood plot twist',
      'No interest or dividend — pure commodity price exposure, for better or worse',
    ],
  },

  'MCX:SILVER': {
    description: 'MCX Silver Futures — leveraged silver trading. For those who think silver ETFs are too tame.',
    howToInvest: 'Trade via commodity broker. Mini and micro contracts available for smaller positions.',
    pros: [
      'Leverage amplifies silver\'s already volatile moves — adrenaline guaranteed',
      'Can go long or short — profit from silver drops too',
      'Micro contracts make it accessible without massive capital requirements',
    ],
    cons: [
      'Silver can move 5% in a day, and leverage makes that 30-50% on your margin',
      'Futures trading is a zero-sum game — someone loses for every winner',
      'Margin calls at 2 AM are a real thing when international markets move overnight',
    ],
  },

  'SLV': {
    description: 'iShares Silver Trust — the world\'s largest silver ETF. Physical silver stored in vaults. BlackRock\'s silver offering.',
    howToInvest: 'Buy SLV via LRS route. The simplest USD-denominated silver exposure.',
    pros: [
      'Ultra-liquid — the most traded silver product on the planet',
      'Direct physical silver exposure — no mining risk, no futures roll costs',
      'BlackRock management and JP Morgan custodianship — institutional grade',
    ],
    cons: [
      '0.50% expense ratio is double that of gold ETFs — silver costs more to store (it\'s bulky)',
      'No yield — silver just sits in a vault looking shiny',
      'LRS route means paperwork that makes the actual investment feel like a part-time job',
    ],
  },

  'PSLV': {
    description: 'Sprott Physical Silver Trust — Canadian alternative to SLV. Fully allocated physical silver with redemption rights.',
    howToInvest: 'Buy PSLV via international broker. Popular among precious metals enthusiasts.',
    pros: [
      'Fully allocated — every share corresponds to specific silver bars with serial numbers',
      'Can redeem for physical silver (minimum 10,000 oz) — tangible ownership',
      'The Reddit/WallStreetBets crowd loves this one — meme potential included',
    ],
    cons: [
      'Premium to NAV can be 5-10% — you might be overpaying for the "physical" feature',
      'Less liquid than SLV — wider bid-ask spreads',
      'Canadian trust structure has tax complications for Indian investors',
    ],
  },

  'PAAS': {
    description: 'Pan American Silver Corp — one of the world\'s largest primary silver miners. Operations across the Americas.',
    howToInvest: 'Buy PAAS via LRS route. A leveraged play on silver through mining equities.',
    pros: [
      'Pure-play silver miner — maximum leverage to silver price moves',
      'Operations across multiple countries reduce single-geography risk',
      'Pays dividends — mining companies actually return cash to shareholders',
    ],
    cons: [
      'Mining operations have environmental, political, and labor risks at every site',
      'All-in sustaining costs matter — if silver drops below AISC, the company bleeds cash',
      'Latin American operations mean political risk from Bolivia to Mexico',
    ],
  },

  'WPM': {
    description: 'Wheaton Precious Metals — not a miner, a streamer. They finance mines in exchange for the right to buy silver/gold at fixed low prices. Genius business model.',
    howToInvest: 'Buy WPM via LRS route. The "smart money" way to invest in precious metals mining.',
    pros: [
      'Streaming model means fixed costs and variable revenue — margins expand when prices rise',
      'No mining risk — they don\'t operate mines, they just buy the output cheaply',
      'Diversified across 20+ mines globally — if one mine fails, others compensate',
    ],
    cons: [
      'Still dependent on mining partners actually producing metal',
      'Premium valuation reflects the superior business model — you pay up for quality',
      'If silver and gold crash simultaneously, even the best business model hurts',
    ],
  },

  // ═══════════════════════════════════════════
  //  COPPER
  // ═══════════════════════════════════════════

  'MCX:COPPER': {
    description: 'MCX Copper Futures — India\'s only direct copper exposure. Copper is the "Dr. Copper" of commodities — it diagnoses the global economy.',
    howToInvest: 'Trade via commodity broker on MCX. No Indian copper ETF exists yet.',
    pros: [
      'EV revolution needs massive copper — each EV uses 4x more copper than ICE vehicles',
      'Data centers, renewables, and electrification are all copper-intensive',
      'Supply is constrained — new copper mines take 10+ years to develop',
    ],
    cons: [
      'China consumes 50% of global copper — Chinese slowdown = copper crash',
      'Futures trading means leverage risk and margin calls',
      'No passive copper investment in India — you\'re forced into derivatives',
    ],
  },

  'COPX': {
    description: 'Global X Copper Miners ETF — owns shares of copper mining companies worldwide. The pickaxe play for the electrification thesis.',
    howToInvest: 'Buy COPX via LRS route. Diversified copper mining exposure in one ETF.',
    pros: [
      'Diversified across 30+ copper miners globally — not dependent on a single mine',
      'Electrification megatrend is a multi-decade tailwind for copper demand',
      'Miners amplify copper price moves — leverage without leverage',
    ],
    cons: [
      'Mining is an ESG nightmare — copper mines aren\'t exactly environmentally friendly',
      'Country risk is real — Chilean, Peruvian, and Congolese politics impact operations',
      'Copper price cycles are brutal — what goes up 100% can (and does) come down 40%',
    ],
  },

  'CPER': {
    description: 'United States Copper Index Fund — commodity ETF that tracks copper futures. Direct price exposure without mining risk.',
    howToInvest: 'Buy CPER via LRS route. Pure copper price exposure.',
    pros: [
      'Direct copper price tracking without mining company risk',
      'Cleaner exposure than mining ETFs — no management, labor, or operational risk',
      'Useful for portfolio diversification — copper has low correlation with stocks',
    ],
    cons: [
      'Futures-based ETF means contango drag — the roll cost silently eats returns',
      'Very low liquidity compared to equity ETFs — wide spreads',
      'Doesn\'t pay dividends — pure price speculation with hidden costs',
    ],
  },

  'FCX': {
    description: 'Freeport-McMoRan — the world\'s largest publicly traded copper miner. Also produces gold and molybdenum. The "copper king."',
    howToInvest: 'Buy FCX via LRS route. Single-stock copper exposure with gold bonus.',
    pros: [
      'Operates Grasberg — one of the world\'s largest copper-gold deposits (Indonesia)',
      'Gold byproduct revenue provides a natural hedge against copper price drops',
      'Strong dividend when copper prices are high — cyclical income play',
    ],
    cons: [
      'Single company = single point of failure — any operational issue is your problem',
      'Indonesian operations mean political and regulatory risk',
      'Highly cyclical — the stock can drop 50% in a copper downturn without blinking',
    ],
  },

  'SCCO': {
    description: 'Southern Copper Corp — one of the world\'s largest copper producers. Operations in Peru and Mexico. Grupo Mexico controlled.',
    howToInvest: 'Buy SCCO via LRS route. Premium copper miner with low-cost operations.',
    pros: [
      'Lowest-cost copper producer globally — makes money even when copper prices drop',
      'Massive reserve base means 50+ years of mining life — longevity matters',
      'Pays generous dividends — 3-5% yield in good copper years',
    ],
    cons: [
      'Peruvian and Mexican political risks — mining regulations can change overnight',
      'Community protests and environmental concerns are a recurring theme',
      'Controlling shareholder (Grupo Mexico) has a history of governance concerns',
    ],
  },

  // ═══════════════════════════════════════════
  //  CRUDE OIL & ENERGY
  // ═══════════════════════════════════════════

  'MCX:CRUDE': {
    description: 'MCX Crude Oil Futures — India\'s crude oil derivative. The most traded energy contract on MCX. Volatile doesn\'t even begin to describe it.',
    howToInvest: 'Trade via commodity broker on MCX. Requires separate commodity account and margin.',
    pros: [
      'Crude oil moves markets globally — understanding it makes you a better overall investor',
      'Hedging tool for businesses dependent on fuel costs',
      'High liquidity on MCX means tight spreads and easy execution',
    ],
    cons: [
      'Remember April 2020 when oil went NEGATIVE? This contract can destroy accounts overnight',
      'OPEC decisions, wars, and tweets from world leaders move prices unpredictably',
      'Leverage + crude oil volatility = the financial equivalent of skydiving without checking your parachute',
    ],
  },

  'USO': {
    description: 'United States Oil Fund — the most popular crude oil ETF. Tracks WTI crude oil futures.',
    howToInvest: 'Buy USO via LRS route. Warning: this ETF has structural issues.',
    pros: [
      'Most liquid oil ETF — easy to trade with tight spreads',
      'Quick exposure to oil price movements without futures account hassle',
      'Useful for short-term oil trades and hedging',
    ],
    cons: [
      'Contango drag destroys long-term returns — USO has lost 95% since inception while oil recovered',
      'NOT suitable for buy-and-hold — this is a trading instrument, not an investment',
      'The 2020 oil crash caused USO to restructure — they literally changed the fund\'s structure to survive',
    ],
  },

  'UCO': {
    description: 'ProShares Ultra Bloomberg Crude Oil — 2x leveraged crude oil ETF. For those who think regular oil volatility isn\'t enough.',
    howToInvest: 'Buy UCO via LRS route. Only for short-term trades. Seriously.',
    pros: [
      'Double the daily oil moves — when oil pops 5%, you get ~10%',
      'Useful for short-term momentum trades in oil',
      'One of the few ways to get leveraged commodity exposure in an ETF wrapper',
    ],
    cons: [
      'Daily reset means volatility decay destroys returns over time — math is not on your side',
      '2x leverage on the world\'s most volatile commodity — what could go wrong?',
      'This ETF has destroyed more wealth than most financial scams — and it\'s perfectly legal',
    ],
  },

  'ONGC': {
    description: 'Oil & Natural Gas Corporation — India\'s largest crude oil and gas explorer. Government-owned, politically managed.',
    howToInvest: 'Buy ONGC on NSE/BSE. India\'s proxy for crude oil prices.',
    pros: [
      'When crude oil rallies, ONGC prints money — simple correlation',
      'Generous dividend payer — 5-8% yield consistently. Your FD wishes.',
      'India needs domestic oil production, and ONGC is basically the only game in town',
    ],
    cons: [
      'Government interferes in pricing — subsidy burden means you don\'t get full oil price benefit',
      'Declining production from mature fields — new discoveries aren\'t keeping pace',
      'PSU management means nobody\'s incentivized to innovate or take risks',
    ],
  },

  'BPCL': {
    description: 'Bharat Petroleum — India\'s second-largest refiner and fuel retailer. 20,000+ petrol pumps across India.',
    howToInvest: 'Buy BPCL on NSE/BSE. A downstream oil play with potential privatization upside.',
    pros: [
      'Refining margins are the real money-maker — crack spreads can be very profitable',
      'Privatization has been on-again-off-again — if it happens, expect a massive re-rating',
      'Dividend yield of 5%+ makes this an income investor\'s pick',
    ],
    cons: [
      'Government controls fuel prices — BPCL absorbs losses when prices are artificially low',
      'Privatization has been "imminent" for 5 years — don\'t hold your breath',
      'Energy transition means fuel retailing is a sunset business in the long run',
    ],
  },

  // ═══════════════════════════════════════════
  //  AGRICULTURE
  // ═══════════════════════════════════════════

  'MCX:SOYA': {
    description: 'MCX Soybean Futures — India\'s premier oilseed derivative. Traded mainly by edible oil processors and commodity traders.',
    howToInvest: 'Trade on MCX via commodity broker. Strictly for those who understand agri markets.',
    pros: [
      'India is one of the world\'s largest soybean consumers — domestic demand is strong',
      'Vegetable oil prices directly impact soybean — a play on food inflation',
      'Seasonal patterns are somewhat predictable for experienced traders',
    ],
    cons: [
      'Government can ban futures trading overnight — they\'ve done it before',
      'MSP (Minimum Support Price) distorts free market pricing',
      'Weather, pest outbreaks, and import/export policy can swing prices wildly',
    ],
  },

  'NCDEX:JEERA': {
    description: 'NCDEX Jeera (Cumin) Futures — India produces 70% of the world\'s cumin. This contract is as niche as it gets.',
    howToInvest: 'Trade on NCDEX via commodity broker. Volume is thin — be careful with large positions.',
    pros: [
      'India is a near-monopoly in global cumin — pricing power is real',
      'Export demand from Bangladesh, UAE, and Europe provides price floor',
      'Can deliver massive returns in supply-shock years (drought, crop failure)',
    ],
    cons: [
      'Liquidity is so thin, your order might be the only one on the screen',
      'Government export restrictions can crash prices overnight',
      'You\'re literally speculating on a spice — explain that at a dinner party',
    ],
  },

  'MCX:COTTON': {
    description: 'MCX Cotton Futures — India is the world\'s largest cotton producer. Textiles, garments, and denim all start here.',
    howToInvest: 'Trade on MCX via commodity broker. Used primarily by textile industry for hedging.',
    pros: [
      'India\'s textile export push means structural demand for domestic cotton',
      'Cotton prices follow global fashion and retail cycles — predictable trends exist',
      'China\'s cotton buying patterns create tradeable opportunities',
    ],
    cons: [
      'Bollworm, rain damage, and crop disease can wipe out supply forecasts',
      'Government MSP and export bans make this a politically managed commodity',
      'Synthetic alternatives (polyester) are eating into cotton\'s market share',
    ],
  },

  'NCDEX:CASTOR': {
    description: 'NCDEX Castor Seed Futures — India produces 80% of the world\'s castor oil. Used in lubricants, cosmetics, and biodiesel.',
    howToInvest: 'Trade on NCDEX via commodity broker. Niche but potentially rewarding.',
    pros: [
      'India\'s monopoly-like position in global castor means pricing power',
      'Industrial applications (lubricants, plastics, cosmetics) provide stable demand',
      'Biodiesel mandate could create new demand channels for castor oil',
    ],
    cons: [
      'Gujarat produces 80% of India\'s castor — one state\'s weather = your entire position risk',
      'Volume is low — getting in and out of positions can be challenging',
      'Not exactly a glamorous investment — "I trade castor seeds" won\'t impress anyone',
    ],
  },

  'NCDEX:WHEAT': {
    description: 'NCDEX Wheat Futures — India\'s staple grain. Government-controlled pricing makes this one of the most politically sensitive commodities.',
    howToInvest: 'Trade on NCDEX via commodity broker. Subject to frequent government intervention.',
    pros: [
      'India is the world\'s second-largest wheat producer — fundamental importance to food security',
      'Climate change-driven supply disruptions can create significant price spikes',
      'Rabi season patterns provide some seasonal predictability',
    ],
    cons: [
      'Government can ban wheat futures trading literally overnight — no warning',
      'FCI (Food Corporation of India) procurement distorts market pricing',
      'Stock limits, export bans, and MSP revisions make free market analysis nearly impossible',
    ],
  },

  // ═══════════════════════════════════════════
  //  FIXED INCOME — SAVINGS & GOVT SCHEMES
  // ═══════════════════════════════════════════

  'FD': {
    description: 'Bank Fixed Deposit — India\'s most beloved investment. Park your money, get guaranteed interest, sleep peacefully. Financial comfort food.',
    howToInvest: 'Open an FD at any bank (SBI, HDFC, ICICI). Online or walk into a branch. That\'s it.',
    pros: [
      'Guaranteed returns — the only investment where "guaranteed" is actually guaranteed',
      'DICGC insures up to Rs 5 lakh per bank — even if the bank fails, you\'re (mostly) covered',
      'Your parents approve of it — and in India, that\'s worth more than any return',
    ],
    cons: [
      'Returns barely beat inflation — you\'re preserving money, not growing it',
      'Interest is taxed as income — at 30% bracket, your 7% FD is really 4.9%',
      'Premature withdrawal penalty means your "liquid" investment isn\'t really liquid',
    ],
  },

  'CORPFD': {
    description: 'Corporate Fixed Deposit — higher interest rates than bank FDs, but backed by a company instead of a bank. The "spicy FD."',
    howToInvest: 'Apply via Bajaj Finance, Mahindra Finance, or other corporate FD issuers. Online or offline.',
    pros: [
      '0.5-1.5% higher rates than bank FDs — for the ambitious FD investor (yes, that\'s a thing)',
      'Companies like Bajaj Finance have AAA rating — almost as safe as banks',
      'Flexible tenures from 1 to 5 years with various payout options',
    ],
    cons: [
      'NOT insured by DICGC — if the company goes down, your money goes with it (ask DHFL investors)',
      'Liquidity is worse than bank FDs — breaking a corporate FD is painful',
      'Higher returns exist because higher risk exists — that\'s how finance works',
    ],
  },

  'PPF': {
    description: 'Public Provident Fund — the government\'s 15-year compulsory savings scheme. Currently at 7.1% tax-free. India\'s original SIP before SIP was cool.',
    howToInvest: 'Open a PPF account at any bank or post office. Max Rs 1.5 lakh/year. 15-year lock-in.',
    pros: [
      'EEE tax status (Exempt-Exempt-Exempt) — deposit, interest, and maturity are ALL tax-free',
      'Government-guaranteed returns — sovereign backing makes this bulletproof',
      '80C tax deduction + tax-free interest = double benefit. Your CA loves this.',
    ],
    cons: [
      '15-year lock-in is essentially a life sentence for your money',
      'Rs 1.5 lakh annual limit means you can\'t park serious money here',
      '7.1% sounds nice until you realize inflation is 6% — your real return is... 1%',
    ],
  },

  'NSC': {
    description: 'National Savings Certificate — Post Office savings scheme at 7.7%. Interest compounds but is paid at maturity after 5 years.',
    howToInvest: 'Buy from any India Post office. Physical certificate or online via India Post.',
    pros: [
      '80C deduction AND interest reinvested also qualifies for 80C — double dip allowed',
      'Government of India backing — can\'t get safer than this (unless you put money under your mattress)',
      '5-year lock-in is shorter than PPF\'s 15 — relatively more humane',
    ],
    cons: [
      'Interest is taxable — unlike PPF, the tax-free party ends at payout',
      'Post office paperwork feels like a time portal to 1990',
      'Fixed rate means if rates rise, you\'re locked into yesterday\'s rates',
    ],
  },

  'SCSS': {
    description: 'Senior Citizens Savings Scheme — 8.2% for people 60+. The best risk-adjusted return available to Indian senior citizens.',
    howToInvest: 'Open at any bank or post office. Available only for 60+ citizens (55+ for some retirees).',
    pros: [
      '8.2% government-guaranteed — the highest fixed rate the government offers to anyone',
      'Quarterly interest payout — regular income for retirement needs',
      '80C deduction on investment — tax saving + guaranteed income is the dream combo',
    ],
    cons: [
      'Only for senior citizens — sorry millennials, you\'ll have to wait',
      'Rs 30 lakh limit means it won\'t fund a lavish retirement alone',
      'Interest is fully taxable — TDS will be deducted if no 15G/H submitted',
    ],
  },

  'RBIBOND': {
    description: 'RBI Floating Rate Savings Bond — 7.35% (changes every 6 months based on NSC rate). The government\'s inflation-adjusted offering.',
    howToInvest: 'Buy from any bank. 7-year tenure. Interest paid semi-annually.',
    pros: [
      'Floating rate means it adjusts upward when rates rise — inflation protection built-in',
      'RBI-issued = zero credit risk. The central bank literally prints money.',
      'Semi-annual interest payments provide regular income',
    ],
    cons: [
      '7-year lock-in with limited exit options — your money is essentially frozen',
      'NO 80C tax deduction — this is income generation, not tax saving',
      'When rates fall, your returns fall too — the floating feature cuts both ways',
    ],
  },

  'SSY': {
    description: 'Sukanya Samriddhi Yojana — savings scheme for girl children at 8.2%. Open for parents of girls under 10. India\'s most progressive savings scheme.',
    howToInvest: 'Open at any bank or post office for your daughter. Must invest minimum Rs 250/year.',
    pros: [
      '8.2% tax-free (EEE status) — the single highest-yielding tax-free guaranteed instrument in India',
      'Forces financial planning for daughters — social impact + financial returns',
      'Partial withdrawal allowed for education after girl turns 18 — flexibility exists',
    ],
    cons: [
      'Only for daughters under 10 — sorry, sons and adults',
      'Matures when the girl turns 21 — patience is not optional, it\'s legally required',
      'Rs 1.5 lakh annual limit restricts how much you can benefit from the high rate',
    ],
  },

  // ═══════════════════════════════════════════
  //  BONDS — GOVT & CORP
  // ═══════════════════════════════════════════

  'IN10Y': {
    description: 'India 10-Year Government Security — the benchmark bond yield. When this moves, every other interest rate in India follows.',
    howToInvest: 'Buy via RBI Retail Direct portal or through gilt mutual funds. Direct purchase requires a Retail Direct account.',
    pros: [
      'Sovereign guarantee — the safest possible fixed-income investment in India',
      'Understanding the 10Y yield makes you smarter about ALL other investments',
      'RBI Retail Direct allows direct G-Sec buying with zero commission — revolutionary',
    ],
    cons: [
      'Bond math is inversely related to yields — rising rates means falling bond prices. Confusing? Welcome.',
      'Liquidity in individual G-Sec bonds can be poor — selling before maturity isn\'t always easy',
      'You need to understand duration, convexity, and yield curves — this is a PhD-level investment',
    ],
  },

  'TBILL91': {
    description: '91-Day Treasury Bill — the shortest-duration government security. Your money back in 3 months with government guarantee.',
    howToInvest: 'Buy via RBI Retail Direct or through your broker\'s bond platform. Auction-based.',
    pros: [
      'Literally the safest investment in India — 91 days of government guarantee',
      'Better returns than savings accounts — with almost zero risk',
      'No TDS — proceeds received without tax deduction at source',
    ],
    cons: [
      'Returns are so modest, they make FDs look exciting',
      'Auction process means you need to bid — it\'s not as simple as buying a stock',
      'Not useful for long-term wealth building — this is parking money, not growing it',
    ],
  },

  'TBILL364': {
    description: '364-Day Treasury Bill — one-year government security. Buy at discount, get face value at maturity.',
    howToInvest: 'Buy via RBI Retail Direct. Issued at discount to face value (Rs 100).',
    pros: [
      'Higher yield than 91-day T-Bill for slightly longer commitment',
      'Predictable maturity amount — you know exactly what you\'re getting back',
      'No coupon payment complexity — simple discount instrument',
    ],
    cons: [
      'Lock your money for a year for marginally better returns than a savings account',
      'Opportunity cost if interest rates rise during the year — you\'re stuck',
      'The excitement level of this investment is negative — but that\'s the point',
    ],
  },

  'BBNDETF': {
    description: 'Bharat Bond ETF — Edelweiss\'s ETF investing only in AAA-rated PSU bonds. Government companies\' debt in ETF form.',
    howToInvest: 'Buy on NSE/BSE like a stock. Available in 2031 and 2033 maturity variants.',
    pros: [
      'Only AAA-rated PSU bonds — the credit quality is about as high as it gets',
      'Target maturity means predictable yield if held to maturity — FD-like clarity',
      'Tax-efficient — indexation benefit makes post-tax returns better than FDs',
    ],
    cons: [
      'PSU bonds aren\'t risk-free — government companies can still default (rare but possible)',
      'If you sell before maturity, interest rate risk applies — prices fluctuate',
      'Expense ratio is a drag that FDs don\'t have',
    ],
  },

  'CPSEBOND': {
    description: 'CPSE Bond ETF — invests in bonds of Central Public Sector Enterprises. Another take on high-quality PSU debt.',
    howToInvest: 'Buy on NSE/BSE. Similar to Bharat Bond ETF but different maturity profile.',
    pros: [
      'Government-linked entities provide implicit sovereign guarantee',
      'Decent yield with low credit risk — a lazy person\'s bond portfolio',
      'ETF structure means easy buy/sell unlike individual bonds',
    ],
    cons: [
      'Lower yield than riskier corporate bonds — safety has a price',
      'Mark-to-market risk exists if interest rates rise sharply',
      'Tracking error between ETF price and NAV can be annoying',
    ],
  },

  'CORPBOND': {
    description: 'AAA Corporate Bond — highest-rated corporate debt. Companies like HDFC, NABARD, and REC issue these.',
    howToInvest: 'Buy via bond platforms (GoldenPi, IndiaBonds, Wint Wealth) or through debt mutual funds.',
    pros: [
      'Higher yield than G-Secs for marginally higher credit risk — the sweet spot',
      'AAA rating means these companies are almost as safe as the government',
      'Fixed coupon payments provide predictable income',
    ],
    cons: [
      'Corporate bonds can be downgraded — today\'s AAA can be tomorrow\'s AA (ask IL&FS investors)',
      'Liquidity in secondary market is poor — selling before maturity is a challenge',
      'Minimum investment amounts can be Rs 10 lakh+ — not exactly retail-friendly',
    ],
  },

  'TLT': {
    description: 'iShares 20+ Year Treasury Bond ETF — US long-term government bonds. The opposite of "risk-on" investing.',
    howToInvest: 'Buy TLT via LRS route. A hedge against stock market crashes — bonds rally when stocks fall (usually).',
    pros: [
      'Flight-to-safety asset — when stocks crash, everyone buys US Treasuries',
      'Duration of 17+ years means massive price gains when interest rates fall',
      'Dollar exposure provides diversification for Indian investors',
    ],
    cons: [
      'When rates rise, TLT drops like a stone — lost 50% from 2020 to 2023',
      'Zero correlation with Indian markets means timing the hedge is nearly impossible',
      'Bond math makes this behave more like a leveraged instrument than a "safe" investment',
    ],
  },

  // ═══════════════════════════════════════════
  //  DEBT MUTUAL FUNDS
  // ═══════════════════════════════════════════

  'MF-LQ': {
    description: 'HDFC Liquid Fund — parks money in overnight/short-term securities. Your savings account\'s sophisticated older sibling.',
    howToInvest: 'Buy via any MF platform. Instant redemption up to Rs 50,000 available.',
    pros: [
      'Better returns than savings accounts with almost identical liquidity',
      'Instant redemption means your money is available within 30 minutes',
      'Virtually no credit risk — invests only in highest-quality short-term paper',
    ],
    cons: [
      'Returns are barely higher than savings rates — the improvement is measured in basis points',
      'New tax rules (no indexation) have killed the tax advantage over FDs',
      'The word "liquid" makes it sound exciting — spoiler: it\'s not',
    ],
  },

  'MF-US': {
    description: 'Parag Parikh Ultra Short Duration Fund — slightly longer than liquid funds, slightly better returns. The middle ground.',
    howToInvest: 'Buy via any MF platform. Good for 1-3 month parking of funds.',
    pros: [
      'Marginally higher returns than liquid funds for marginally longer holding period',
      'Lower interest rate sensitivity than longer-duration debt funds',
      'PPFAS reputation for conservative, quality-focused management applies here too',
    ],
    cons: [
      'Returns don\'t justify the "complexity" for most retail investors — just use a liquid fund',
      'Not really "ultra short" in volatile rate environments — duration can drift',
      'Expense ratio might eat the marginal extra return over liquid funds',
    ],
  },

  'MF-SD': {
    description: 'Kotak Short Duration Fund — invests in 1-3 year bonds. The Goldilocks zone of debt funds.',
    howToInvest: 'Buy via any MF platform. Good for 2-3 year investment horizon.',
    pros: [
      'Better returns than liquid/ultra-short with moderate duration risk',
      'Professional credit analysis — the fund manager reads the fine print so you don\'t have to',
      'Ideal for goal-based investing with 2-3 year timelines (car down payment, vacation, etc.)',
    ],
    cons: [
      'Mark-to-market losses possible in rising rate environments',
      'New tax rules make debt MFs less attractive than they were pre-2023',
      'Kotak isn\'t exactly known for aggressive outperformance — steady and boring',
    ],
  },

  'MF-DB': {
    description: 'IDFC Dynamic Bond Fund — the fund manager actively adjusts duration based on rate outlook. The "I trust the expert" approach.',
    howToInvest: 'Buy via any MF platform. Only for those who understand interest rate cycles.',
    pros: [
      'Active duration management means the fund can profit from both rising and falling rates',
      'If the fund manager gets the rate call right, returns can beat FDs significantly',
      'Diversified across government and corporate bonds',
    ],
    cons: [
      'If the fund manager gets the rate call WRONG, you underperform a simple FD — ouch',
      'Dynamic means unpredictable — your "safe" debt fund can have equity-like volatility',
      'Manager dependency is extreme — the entire fund thesis is one person\'s interest rate view',
    ],
  },

  'MF-CR': {
    description: 'Franklin India Credit Risk Fund — invests in lower-rated bonds (AA and below) for higher yields. The "reach for yield" fund.',
    howToInvest: 'Buy via any MF platform. Only for those who understand credit risk (seriously).',
    pros: [
      'Highest yield among debt fund categories — 1-2% above typical debt funds',
      'When credit cycles improve, these bonds re-rate and deliver equity-like returns',
      'Professional credit analysis identifies diamonds in the rough',
    ],
    cons: [
      'Franklin itself had to wind up 6 debt schemes in 2020 — the poster child of credit risk gone wrong',
      'One default in the portfolio can wipe out months of extra yield',
      'You\'re basically lending money to companies that banks are nervous about — think about that',
    ],
  },

  'MF-LD': {
    description: 'Nippon Low Duration Fund — invests in 6-12 month instruments. Slightly more than liquid, slightly less than short-term.',
    howToInvest: 'Buy via any MF platform. Park money for 3-12 months here.',
    pros: [
      'Better returns than liquid funds for a 6-12 month time horizon',
      'Nippon MF has a solid track record in the debt fund space',
      'Lower volatility than longer-duration debt funds',
    ],
    cons: [
      'The category exists in a no-man\'s land — too long for parking, too short for investing',
      'Tax treatment changes have made all short-term debt funds less attractive',
      'You need a very specific use case to pick this over a liquid fund or short-duration fund',
    ],
  },

  // ═══════════════════════════════════════════
  //  CRYPTO
  // ═══════════════════════════════════════════

  'BTC': {
    description: 'Bitcoin — digital gold, internet money, or the future of finance. Or an elaborate Ponzi scheme. Depends on who you ask at the party.',
    howToInvest: 'Buy via CoinDCX, WazirX, CoinSwitch in INR. Or via international exchanges (Binance, Coinbase) using LRS.',
    pros: [
      'Only 21 million will ever exist — scarcity backed by math, not promises',
      'Outperformed every asset class over the last 10 years — the numbers speak for themselves',
      'Nation-states are now buying Bitcoin as a reserve asset — your speculation is becoming policy',
    ],
    cons: [
      '30% flat tax in India + 1% TDS on every trade — the government loves your crypto profits more than you do',
      'Can drop 70% and everyone says "this is normal" — what a wonderful definition of normal',
      'No consumer protection, no insurance, no helpline — lose your seed phrase and your money enters a black hole',
    ],
  },

  'ETH': {
    description: 'Ethereum — the programmable blockchain. Smart contracts, DeFi, NFTs all run on Ethereum. Bitcoin is gold; Ethereum is the app store.',
    howToInvest: 'Buy via CoinDCX, WazirX, CoinSwitch in INR. Staking earns 3-5% APY.',
    pros: [
      'The platform where 90% of blockchain innovation actually happens',
      'Staking rewards mean your ETH generates passive income — digital yield farming',
      'Ethereum L2s (Arbitrum, Optimism) are scaling to millions of transactions per second',
    ],
    cons: [
      'Gas fees during network congestion can cost more than the actual transaction',
      'Solana and other L1s are eating into Ethereum\'s market share — the moat is narrowing',
      'Vitalik Buterin is literally the single point of failure for a "decentralized" network',
    ],
  },

  'DOGE': {
    description: 'Dogecoin — the meme that became money. Started as a joke in 2013, now worth more than most companies. Much wow.',
    howToInvest: 'Buy via CoinDCX, WazirX, or international exchanges. And pray.',
    pros: [
      'Elon Musk tweets about it — and apparently that\'s a valid investment thesis now',
      'Transaction fees are dirt cheap — actually useful for small payments',
      'Community is the most fun in all of crypto — investing shouldn\'t always be serious',
    ],
    cons: [
      'Infinite supply means no scarcity — 10,000 new DOGE minted every minute, forever',
      'Entirely dependent on hype and celebrity tweets — fundamentals don\'t apply here',
      'You\'re literally investing in a Shiba Inu dog picture — your financial advisor is screaming internally',
    ],
  },

  'BTC1!': {
    description: 'CME Bitcoin Futures — institutional-grade Bitcoin derivatives. Regulated by the CFTC. Wall Street\'s way into crypto.',
    howToInvest: 'Trade via international broker (Interactive Brokers) with LRS route. Each contract = 5 BTC. Micro contracts = 0.1 BTC.',
    pros: [
      'CME-regulated — no exchange hack risk, no custodial nightmares',
      'Can go short Bitcoin — one of the few ways to bet against crypto with proper regulation',
      'Cash-settled — no need to deal with crypto wallets, keys, or blockchain',
    ],
    cons: [
      'Contango in futures means you pay a premium — holding costs are real',
      'Leverage + Bitcoin volatility = the most efficient way to destroy an account balance',
      'Contract sizes are large — even micro futures require significant margin',
    ],
  },

  'BITO': {
    description: 'ProShares Bitcoin Strategy ETF — the first US Bitcoin ETF. Futures-based, not spot. The "almost Bitcoin" investment.',
    howToInvest: 'Buy BITO via LRS route. The OG Bitcoin ETF, though now overshadowed by spot ETFs.',
    pros: [
      'SEC-regulated ETF — buy Bitcoin exposure in a brokerage account like any stock',
      'No crypto wallet, no private keys, no exchange hacks — traditional finance wrapper',
      'Available since October 2021 — the longest track record among US Bitcoin ETFs',
    ],
    cons: [
      'Futures-based means roll costs drag performance below actual Bitcoin returns',
      'Spot Bitcoin ETFs (IBIT, FBTC) now exist and are simply better — BITO is outdated',
      'High expense ratio (0.95%) for something that structurally underperforms spot BTC',
    ],
  },

  'BTF': {
    description: 'Valkyrie Bitcoin and Ether Strategy ETF — futures-based ETF covering both Bitcoin and Ethereum. Two for one.',
    howToInvest: 'Buy BTF via LRS route. Combined BTC + ETH futures exposure.',
    pros: [
      'Diversified crypto exposure (BTC + ETH) in a single ETF — lazy crypto investing',
      'SEC-regulated — same protections as any US-listed ETF',
      'Automatic rebalancing between BTC and ETH futures',
    ],
    cons: [
      'Same futures drag problem as BITO — you\'re always slightly behind spot prices',
      'Spot BTC and ETH ETFs are now available — this product is solving a solved problem',
      'Expense ratio makes this more expensive than holding spot crypto directly',
    ],
  },

  'IBIT': {
    description: 'iShares Bitcoin Trust — BlackRock\'s spot Bitcoin ETF. The world\'s largest asset manager says Bitcoin is an asset class. That\'s... something.',
    howToInvest: 'Buy IBIT via LRS route. The "safe" way to own Bitcoin if you don\'t trust crypto exchanges.',
    pros: [
      'BlackRock managing your Bitcoin is the most "institutional" thing that\'s ever happened to crypto',
      'Spot-based — tracks actual Bitcoin price with minimal tracking error',
      'Expense ratio of 0.25% is cheaper than crypto exchange fees for most investors',
    ],
    cons: [
      '"Not your keys, not your coins" — the crypto purists will judge you',
      'LRS route means paperwork, tax complexity, and annual limits',
      'If BlackRock and Bitcoin both fail simultaneously, this investment is in trouble',
    ],
  },

  'FBTC': {
    description: 'Fidelity Wise Origin Bitcoin Fund — Fidelity\'s spot Bitcoin ETF. Self-custodied by Fidelity Digital Assets. Old money meets new money.',
    howToInvest: 'Buy FBTC via LRS route. Fidelity manages the Bitcoin custody themselves (unlike BlackRock which uses Coinbase).',
    pros: [
      'Fidelity custodies the Bitcoin themselves — no third-party custody risk',
      'Fidelity has been building crypto infrastructure since 2014 — they didn\'t just jump on the hype',
      'Competitive expense ratio and tight tracking of Bitcoin spot price',
    ],
    cons: [
      'Self-custody by Fidelity means if their cold storage is compromised, there\'s no backup custodian',
      'Same LRS and tax hassles as every US-listed investment for Indian investors',
      'You\'re trusting a 70-year-old financial institution to understand a 15-year-old technology',
    ],
  },

  'BITB': {
    description: 'Bitwise Bitcoin ETF — from the OG crypto index fund company. Bitwise has been doing crypto asset management since 2017.',
    howToInvest: 'Buy BITB via LRS route. Crypto-native asset manager with traditional finance distribution.',
    pros: [
      'Bitwise is crypto-first — they understand the space better than TradFi competitors',
      'Transparent reporting and research — Bitwise publishes the best crypto research in the industry',
      'Competitive fees for spot Bitcoin exposure',
    ],
    cons: [
      'Smaller AUM than IBIT and FBTC — less liquidity and slightly wider spreads',
      'Bitwise is less known to mainstream investors — brand trust takes time',
      'All spot BTC ETFs essentially do the same thing — differentiation is marketing',
    ],
  },

  'HODL': {
    description: 'VanEck Bitcoin ETF — named after the crypto meme "HODL" (Hold On for Dear Life). When your ETF ticker is a meme, you know you\'re in crypto.',
    howToInvest: 'Buy HODL via LRS route. VanEck has been trying to get a Bitcoin ETF approved since 2018.',
    pros: [
      'VanEck is a respected ETF provider — decades of experience in commodity and specialty ETFs',
      'The ticker HODL is genuinely fun — naming your ETF after a meme shows self-awareness',
      'Donates 5% of profits to Bitcoin core developers — actually supports the ecosystem',
    ],
    cons: [
      'Smallest AUM among major spot BTC ETFs — liquidity matters',
      'VanEck\'s first Bitcoin ETF attempt was rejected by the SEC in 2018 — persistence or stubbornness?',
      'You\'ll have to explain to your family why your investment is called "HODL"',
    ],
  },
};
