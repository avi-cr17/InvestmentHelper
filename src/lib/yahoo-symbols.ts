/**
 * Maps display symbols used in db.ts to Yahoo Finance ticker symbols.
 * Assets not in this map will retain their hardcoded prices/returns.
 */
export const YAHOO_SYMBOL_MAP: Record<string, string> = {
  // Indian Indices
  'NSE:NIFTY':  '^NSEI',
  'BSE:SENSEX': '^BSESN',
  'NSE:BNKN':   '^NSEBANK',
  'NSE:CNXIT':  '^CNXIT',
  'NSE:MID150': 'NIFTY_MIDCAP_150.NS',
  'NSE:SML250': 'NIFTY_SMLCAP_250.NS',
  'NSE:JR':     '^NSMIDCP',
  'NSE:PHARMA': '^CNXPHARMA',
  'NSE:AUTO':   '^CNXAUTO',
  'NSE:FMCG':   '^CNXFMCG',
  'NSE:METAL':  '^CNXMETAL',
  'NSE:REALTY': '^CNXREALTY',

  // Indian Stocks (NSE)
  'RELIANCE':   'RELIANCE.NS',
  'TCS':        'TCS.NS',
  'HDFCBANK':   'HDFCBANK.NS',
  'INFY':       'INFY.NS',
  'ICICIBANK':  'ICICIBANK.NS',
  'SBIN':       'SBIN.NS',
  'BAJFINANCE': 'BAJFINANCE.NS',
  'LT':         'LT.NS',
  'ASIANPAINT': 'ASIANPAINT.NS',
  'TITAN':      'TITAN.NS',
  'HINDUNILVR': 'HINDUNILVR.NS',
  'WIPRO':      'WIPRO.NS',
  'KOTAKBANK':  'KOTAKBANK.NS',
  'ADANIPORTS': 'ADANIPORTS.NS',
  'HCLTECH':    'HCLTECH.NS',
  'MM':         'M&M.NS',
  'DIXON':      'DIXON.NS',
  'POLYCAB':    'POLYCAB.NS',
  'PERSISTENT': 'PERSISTENT.NS',
  'BSE':        'BSE.NS',
  'KAYNES':     'KAYNES.NS',
  'TRENT':      'TRENT.NS',
  'VBL':        'VBL.NS',
  'CDSL':       'CDSL.NS',
  'COFORGE':    'COFORGE.NS',
  'ZOMATO':     'ZOMATO.BO',
  'ONGC':       'ONGC.NS',
  'BPCL':       'BPCL.NS',

  // Indian ETFs (NSE)
  'GOLDBEES':   'GOLDBEES.NS',
  'HDFCGOLD':   'HDFCGOLD.NS',
  'SILVERIETF': 'SILVERIETF.NS',
  'SILVERBEES': 'SILVERBEES.NS',
  'EMBASSY':    'EMBASSY.NS',
  'MINDSPACE':  'MINDSPACE.NS',
  'NEXUS':      'NEXUSMALLS.NS',
  'BIRET':      'BIRET.NS',
  'INDIGRID':   'INDIGRID.NS',
  'POWGRD':     'POWERGRID.NS',

  // US Indices
  'SPX':  '^GSPC',
  'NDX':  '^NDX',
  'DJIA': '^DJI',
  'RUT':  '^RUT',

  // US Stocks & ETFs
  'AAPL':  'AAPL',
  'MSFT':  'MSFT',
  'NVDA':  'NVDA',
  'GOOGL': 'GOOGL',
  'META':  'META',
  'AMZN':  'AMZN',
  'TSLA':  'TSLA',
  'BRK.B': 'BRK-B',
  'VOO':   'VOO',
  'QQQ':   'QQQ',
  'VTI':   'VTI',
  'GDX':   'GDX',
  'GDXJ':  'GDXJ',
  'IAU':   'IAU',
  'SLV':   'SLV',
  'PSLV':  'PSLV',
  'PAAS':  'PAAS',
  'WPM':   'WPM',
  'COPX':  'COPX',
  'CPER':  'CPER',
  'FCX':   'FCX',
  'SCCO':  'SCCO',
  'USO':   'USO',
  'UCO':   'UCO',
  'TLT':   'TLT',
  'IBIT':  'IBIT',
  'FBTC':  'FBTC',
  'BITB':  'BITB',
  'HODL':  'HODL',
  'BITO':  'BITO',
  'BTF':   'BTF',

  // Crypto
  'BTC':   'BTC-USD',
  'ETH':   'ETH-USD',
  'DOGE':  'DOGE-USD',
  'BTC1!': 'BTC-USD',

  // MCX Commodities → COMEX/NYMEX equivalents (USD, converted to INR)
  'MCX:GOLD':   'GC=F',
  'MCX:SILVER': 'SI=F',
  'MCX:COPPER': 'HG=F',
  'MCX:CRUDE':  'CL=F',
};

/**
 * Symbols that should NEVER be fetched from Yahoo Finance.
 * These retain their hardcoded values from db.ts.
 */
export const STATIC_SYMBOLS = new Set([
  'FD', 'CORPFD', 'PPF', 'NSC', 'SCSS', 'RBIBOND', 'SSY',
  'TBILL91', 'TBILL364', 'BBNDETF', 'CPSEBOND', 'CORPBOND',
  'IN10Y',
  'MF-LC', 'MF-MC', 'MF-FC', 'MF-EL', 'MF-IDX', 'MF-NQ', 'MF-PR', 'MF-BC',
  'MF-LQ', 'MF-US', 'MF-SD', 'MF-DB', 'MF-CR', 'MF-LD',
  'MOFSP500', 'SGB', 'MMTC',
  'MCX:SOYA', 'NCDEX:JEERA', 'MCX:COTTON', 'NCDEX:CASTOR', 'NCDEX:WHEAT',
]);

/** Symbols where Yahoo returns USD prices but DB expects INR */
export const MCX_SYMBOLS = new Set([
  'MCX:GOLD', 'MCX:SILVER', 'MCX:COPPER', 'MCX:CRUDE',
]);
