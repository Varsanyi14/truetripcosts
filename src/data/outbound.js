// US outbound travelers by destination country, 2024.
//
// Compiled by the True Trip Costs desk from primary sources (national tourism
// offices, statistics agencies, and the US NTTO outbound survey). Each row is a
// point figure with a low/high range, the agency source, the methodology, and a
// confidence rating. Figures come from DIFFERENT counting methods and are NOT
// strictly rank-comparable; they do not sum to the outbound total. The page that
// renders this data surfaces those caveats (confidence shading, range bands, and
// a methodology filter). Do not present as a single official ranking.
//
// basisBucket classifies each row's methodology into one of five categories so a
// reader can filter by how the number was counted. Confidence (high/medium/low)
// is transcribed from the compilation and is independent of the bucket.
//
// Region is normalized to a single value; a few countries span two world regions
// in the source (kept here as a note): Turkey (Middle East/Europe),
// Egypt (Africa/Middle East).

export const outboundYear = 2024;

// Record US resident outbound total for 2024 (NTTO / US Dept of Commerce).
// The per-country figures below do NOT sum to this: they come from many sources
// and counting methods, and NTTO counts a traveler in every country visited on a
// multi-stop trip, so destinations overlap.
export const outboundTotal = 107713681;

export const outboundChecked = 'Jul 2026';

// The five methodology categories, in order of decreasing directness/firmness.
export const basisBuckets = [
  'Outbound survey (NTTO)',
  'Destination arrivals',
  'Hotel / overnight guest',
  'Derived (share math)',
  'Estimate (flagged)',
];

export const outbound = [
  { rank: 1, country: "Mexico", slug: "mexico", hasGuide: true, region: "North America", point: 39900000, low: 39000000, high: 40500000, year: 2024, basisBucket: "Outbound survey (NTTO)", basis: "Air+land outbound survey", source: "NTTO SIAT (trade.gov)", confidence: "High" },
  { rank: 2, country: "Canada", slug: "canada", hasGuide: true, region: "North America", point: 14100000, low: 13800000, high: 14400000, year: 2024, basisBucket: "Outbound survey (NTTO)", basis: "Air+land outbound survey", source: "NTTO SIAT (trade.gov)", confidence: "High" },
  { rank: 3, country: "United Kingdom", slug: "united-kingdom", hasGuide: true, region: "Europe", point: 6000000, low: 5800000, high: 6200000, year: 2024, basisBucket: "Outbound survey (NTTO)", basis: "Air outbound survey", source: "NTTO SIAT (trade.gov)", confidence: "High" },
  { rank: 4, country: "Italy", slug: "italy", hasGuide: true, region: "Europe", point: 4200000, low: 4000000, high: 4400000, year: 2024, basisBucket: "Outbound survey (NTTO)", basis: "Air outbound survey", source: "NTTO SIAT (trade.gov)", confidence: "High" },
  { rank: 5, country: "France", slug: "france", hasGuide: true, region: "Europe", point: 4100000, low: 3900000, high: 4300000, year: 2024, basisBucket: "Outbound survey (NTTO)", basis: "Air outbound survey", source: "NTTO SIAT (trade.gov)", confidence: "High" },
  { rank: 6, country: "Dominican Republic", slug: "dominican-republic", hasGuide: true, region: "Caribbean", point: 3700000, low: 3500000, high: 3900000, year: 2024, basisBucket: "Outbound survey (NTTO)", basis: "Air outbound survey; DR reports ~64.8% of 7.13M foreign air arrivals from N. America", source: "NTTO SIAT; Central Bank of DR", confidence: "High" },
  { rank: 7, country: "Spain", slug: "spain", hasGuide: true, region: "Europe", point: 3100000, low: 3100000, high: 4300000, year: 2024, basisBucket: "Outbound survey (NTTO)", basis: "NTTO outbound 3.1M vs Spain INE ~4.3M (US ~4.6% of 93.8M)", source: "NTTO SIAT; INE FRONTUR", confidence: "High" },
  { rank: 8, country: "Germany", slug: "germany", hasGuide: true, region: "Europe", point: 2800000, low: 2800000, high: 7200000, year: 2024, basisBucket: "Hotel / overnight guest", basis: "US arrivals ~2.8M; separately 7.2M US overnight stays", source: "GNTB/Destatis", confidence: "Medium" },
  { rank: 9, country: "Japan", slug: "japan", hasGuide: true, region: "Asia", point: 2720000, low: 2700000, high: 2750000, year: 2024, basisBucket: "Destination arrivals", basis: "Visitor arrivals, +33% YoY, +58% vs 2019 (base 1,723,861)", source: "JNTO", confidence: "High" },
  { rank: 10, country: "Portugal", slug: "portugal", hasGuide: true, region: "Europe", point: 2293300, low: 2200000, high: 2350000, year: 2024, basisBucket: "Hotel / overnight guest", basis: "Guests in tourist accommodation (overnight), +11.9%", source: "Turismo de Portugal / INE", confidence: "Medium" },
  { rank: 11, country: "Jamaica", slug: "jamaica", hasGuide: true, region: "Caribbean", point: 1900000, low: 1700000, high: 2000000, year: 2024, basisBucket: "Derived (share math)", basis: "Derived: ~3.0M stopover x ~65% US", source: "Jamaica MoT / JTB (derived)", confidence: "Medium" },
  { rank: 12, country: "India", slug: "india", hasGuide: true, region: "Asia", point: 1800000, low: 1750000, high: 1805000, year: 2024, basisBucket: "Destination arrivals", basis: "Foreign tourist arrivals by nationality (US = top source, ~18%)", source: "India Ministry of Tourism", confidence: "High" },
  { rank: 13, country: "Costa Rica", slug: "costa-rica", hasGuide: true, region: "Central America", point: 1587138, low: 1580000, high: 1595000, year: 2024, basisBucket: "Destination arrivals", basis: "Air arrivals; US ~60% of 2,661,488 air arrivals", source: "ICT", confidence: "High" },
  { rank: 14, country: "Greece", slug: "greece", hasGuide: true, region: "Europe", point: 1550000, low: 1300000, high: 1600000, year: 2024, basisBucket: "Destination arrivals", basis: "Border-survey travelers; receipts EUR 1.58B (+15.3%)", source: "Bank of Greece", confidence: "High" },
  { rank: 15, country: "Switzerland", slug: "switzerland", hasGuide: true, region: "Europe", point: 1460000, low: 1400000, high: 1500000, year: 2024, basisBucket: "Hotel / overnight guest", basis: "Hotel arrivals (also 3.5-4.6M overnight stays), +13.9%", source: "Swiss FSO", confidence: "Medium" },
  { rank: 16, country: "Bahamas", slug: "bahamas", hasGuide: true, region: "Caribbean", point: 1400000, low: 1300000, high: 1450000, year: 2024, basisBucket: "Derived (share math)", basis: "Derived: ~1.72M foreign air arrivals x ~80% US", source: "Bahamas MoT (derived)", confidence: "Medium" },
  { rank: 17, country: "Turkey", slug: "turkey", hasGuide: true, region: "Middle East", regionNote: "Middle East/Europe", point: 1400000, low: 1350000, high: 1450000, year: 2024, basisBucket: "Destination arrivals", basis: "Foreign visitor arrivals by nationality (+8.1%)", source: "Turkey Min. of Culture & Tourism", confidence: "High" },
  { rank: 18, country: "South Korea", slug: "south-korea", hasGuide: true, region: "Asia", point: 1320000, low: 1300000, high: 1340000, year: 2024, basisBucket: "Destination arrivals", basis: "Visitor arrivals (surpassed 2019 record)", source: "Korea Tourism Organization", confidence: "High" },
  { rank: 19, country: "El Salvador", slug: "el-salvador", hasGuide: false, region: "Central America", point: 1267903, low: 1250000, high: 1280000, year: 2024, basisBucket: "Destination arrivals", basis: "Tourist arrivals by residence (incl. large diaspora VFR)", source: "MITUR El Salvador", confidence: "High" },
  { rank: 20, country: "Ireland", slug: "ireland", hasGuide: true, region: "Europe", point: 1240000, low: 1200000, high: 1300000, year: 2024, basisBucket: "Destination arrivals", basis: "Overseas visitors (island of Ireland), +9%", source: "CSO / Tourism Ireland", confidence: "High" },
  { rank: 21, country: "China", slug: "china", hasGuide: true, region: "Asia", point: 1200000, low: 900000, high: 1700000, year: 2024, basisBucket: "Estimate (flagged)", basis: "Rough estimate; recovery still partial (Asia region 103% of 2019)", source: "Estimate (flagged)", confidence: "Low" },
  { rank: 22, country: "Colombia", slug: "colombia", hasGuide: true, region: "South America", point: 1194642, low: 1190000, high: 1200000, year: 2024, basisBucket: "Destination arrivals", basis: "Non-resident visitors, 26.5% share (largest source)", source: "MinCIT / Migracion Colombia", confidence: "High" },
  { rank: 23, country: "Netherlands", slug: "netherlands", hasGuide: true, region: "Europe", point: 1100000, low: 1000000, high: 1300000, year: 2024, basisBucket: "Estimate (flagged)", basis: "Estimate; CBS reports ~3.5M US hotel stays, no clean arrivals count", source: "CBS (estimate)", confidence: "Low" },
  { rank: 24, country: "Aruba", slug: "aruba", hasGuide: true, region: "Caribbean", point: 1066000, low: 1000000, high: 1070000, year: 2024, basisBucket: "Destination arrivals", basis: "Stopover; US = 75% of 1,421,616", source: "Aruba Tourism Authority", confidence: "High" },
  { rank: 25, country: "Thailand", slug: "thailand", hasGuide: true, region: "Asia", point: 1030000, low: 980000, high: 1030000, year: 2024, basisBucket: "Destination arrivals", basis: "International arrivals by nationality; 58.8B baht revenue", source: "Tourism Authority of Thailand", confidence: "High" },
  { rank: 26, country: "Philippines", slug: "philippines", hasGuide: false, region: "Asia", point: 920000, low: 900000, high: 950000, year: 2024, basisBucket: "Estimate (flagged)", basis: "Extrapolated from 764,124 US arrivals Jan-Oct", source: "Philippines DoT (extrapolated)", confidence: "Medium" },
  { rank: 27, country: "Hong Kong", slug: "hong-kong", hasGuide: true, region: "Asia", point: 884000, low: 870000, high: 900000, year: 2024, basisBucket: "Destination arrivals", basis: "Visitor arrivals (US = 3rd source)", source: "Hong Kong Tourism Board", confidence: "High" },
  { rank: 28, country: "United Arab Emirates", slug: "uae", hasGuide: true, region: "Middle East", point: 800000, low: 700000, high: 900000, year: 2024, basisBucket: "Estimate (flagged)", basis: "Estimate; Dubai DET reports by region, not US absolute", source: "Estimate (flagged)", confidence: "Low" },
  { rank: 29, country: "Vietnam", slug: "vietnam", hasGuide: true, region: "Asia", point: 780000, low: 750000, high: 800000, year: 2024, basisBucket: "Destination arrivals", basis: "International arrivals", source: "Vietnam GSO / VNAT", confidence: "Medium" },
  { rank: 30, country: "Egypt", slug: "egypt", hasGuide: true, region: "Africa", regionNote: "Africa/Middle East", point: 750000, low: 600000, high: 900000, year: 2024, basisBucket: "Estimate (flagged)", basis: "Estimate; 2022 actual = 676,000", source: "Estimate (flagged)", confidence: "Low" },
  { rank: 31, country: "Brazil", slug: "brazil", hasGuide: true, region: "South America", point: 696512, low: 690000, high: 700000, year: 2024, basisBucket: "Destination arrivals", basis: "International tourist arrivals (border; 2nd source)", source: "Ministerio do Turismo / Embratur", confidence: "High" },
  { rank: 32, country: "Australia", slug: "australia", hasGuide: true, region: "Oceania", point: 669000, low: 650000, high: 680000, year: 2024, basisBucket: "Destination arrivals", basis: "Short-term visitor arrivals (year end Dec)", source: "TRA / ABS", confidence: "High" },
  { rank: 33, country: "Taiwan", slug: "taiwan", hasGuide: true, region: "Asia", point: 651264, low: 645000, high: 660000, year: 2024, basisBucket: "Destination arrivals", basis: "Visitor arrivals (US = 4th source)", source: "Taiwan Tourism Administration", confidence: "High" },
  { rank: 34, country: "Peru", slug: "peru", hasGuide: false, region: "South America", point: 604000, low: 595000, high: 615000, year: 2024, basisBucket: "Destination arrivals", basis: "International tourist arrivals (18.6% share, 2nd source)", source: "Mincetur / Migraciones", confidence: "High" },
  { rank: 35, country: "Turks & Caicos", slug: "turks-and-caicos", hasGuide: false, region: "Caribbean", point: 594000, low: 585000, high: 600000, year: 2024, basisBucket: "Derived (share math)", basis: "Derived: ~81% of 734,308 air arrivals", source: "Experience TCI (derived)", confidence: "Medium" },
  { rank: 36, country: "Iceland", slug: "iceland", hasGuide: true, region: "Europe", point: 560000, low: 500000, high: 650000, year: 2024, basisBucket: "Estimate (flagged)", basis: "US ~22-25% of 2.27M foreign visitors via Keflavik", source: "Icelandic Tourist Board / Isavia", confidence: "Medium" },
  { rank: 37, country: "Guatemala", slug: "guatemala", hasGuide: false, region: "Central America", point: 550000, low: 500000, high: 600000, year: 2024, basisBucket: "Estimate (flagged)", basis: "Estimate from total ~3.04M and N. America share", source: "INGUAT (estimate)", confidence: "Low" },
  { rank: 38, country: "Ecuador", slug: "ecuador", hasGuide: true, region: "South America", point: 466000, low: 450000, high: 480000, year: 2024, basisBucket: "Estimate (flagged)", basis: "Estimate; H1 US = 233,320 (~40% of foreign)", source: "INEC / Mitur (estimate)", confidence: "Low" },
  { rank: 39, country: "Panama", slug: "panama", hasGuide: false, region: "Central America", point: 448360, low: 445000, high: 455000, year: 2024, basisBucket: "Destination arrivals", basis: "International visitor arrivals (largest source, +11%)", source: "ATP", confidence: "High" },
  { rank: 40, country: "New Zealand", slug: "new-zealand", hasGuide: true, region: "Oceania", point: 377000, low: 376000, high: 379000, year: 2024, basisBucket: "Destination arrivals", basis: "Overseas visitor arrivals (2nd source)", source: "Stats NZ / Tourism NZ", confidence: "High" },
  { rank: 41, country: "South Africa", slug: "south-africa", hasGuide: true, region: "Africa", point: 372362, low: 370000, high: 375000, year: 2024, basisBucket: "Destination arrivals", basis: "Tourist arrivals (top overseas source, +5.2%)", source: "Statistics South Africa", confidence: "High" },
  { rank: 42, country: "Cayman Islands", slug: "cayman-islands", hasGuide: false, region: "Caribbean", point: 355000, low: 350000, high: 360000, year: 2024, basisBucket: "Derived (share math)", basis: "Derived: ~80%+ of 437,842 stayover", source: "CIDOT (derived)", confidence: "Medium" },
  { rank: 43, country: "Morocco", slug: "morocco", hasGuide: true, region: "Africa", point: 350000, low: 300000, high: 400000, year: 2024, basisBucket: "Estimate (flagged)", basis: "Estimate; US-specific not published", source: "Estimate (flagged)", confidence: "Low" },
  { rank: 44, country: "Belize", slug: "belize", hasGuide: false, region: "Central America", point: 350000, low: 330000, high: 370000, year: 2024, basisBucket: "Derived (share math)", basis: "Derived from 562,405 overnight, US majority", source: "Belize Tourism Board (derived)", confidence: "Low" },
  { rank: 45, country: "Israel", slug: "israel", hasGuide: false, region: "Middle East", point: 330000, low: 300000, high: 360000, year: 2024, basisBucket: "Estimate (flagged)", basis: "Estimate; Jan-Aug 2024 US = 226,000 (war-suppressed)", source: "Israel CBS (estimate)", confidence: "Medium" },
  { rank: 46, country: "Kenya", slug: "kenya", hasGuide: false, region: "Africa", point: 306501, low: 305000, high: 310000, year: 2024, basisBucket: "Destination arrivals", basis: "International arrivals; US = #1 source (12.8%)", source: "Tourism Research Institute Kenya", confidence: "High" },
  { rank: 47, country: "Argentina", slug: "argentina", hasGuide: true, region: "South America", point: 300000, low: 250000, high: 350000, year: 2024, basisBucket: "Estimate (flagged)", basis: "Estimate; INDEC reports US within US+Canada bloc", source: "INDEC (estimate)", confidence: "Low" },
  { rank: 48, country: "Barbados", slug: "barbados", hasGuide: false, region: "Caribbean", point: 217000, low: 201000, high: 225000, year: 2024, basisBucket: "Destination arrivals", basis: "Stay-over; 201,005 Jan-Nov (+28%)", source: "Barbados Statistical Service", confidence: "Medium" },
  { rank: 49, country: "Curacao", slug: "curacao", hasGuide: false, region: "Caribbean", point: 165000, low: 150000, high: 180000, year: 2024, basisBucket: "Estimate (flagged)", basis: "Estimate; US = 2nd source of 700,249 stayover", source: "Curacao Tourist Board (estimate)", confidence: "Low" },
  { rank: 50, country: "Fiji", slug: "fiji", hasGuide: false, region: "Oceania", point: 140000, low: 130000, high: 150000, year: 2024, basisBucket: "Estimate (flagged)", basis: "Estimate; US = 2nd source of 982,938 total", source: "Fiji Bureau of Statistics (estimate)", confidence: "Low" },
];
