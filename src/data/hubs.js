// Hub system for True Trip Costs. One source for region metadata, the editorial copy,
// and the small signal-to-tag logic, feeding the region hubs, the breadcrumbs and the
// guide links so they stay consistent. Built as a general pattern: the same Hub
// component renders regional hubs today, and thematic collections (for example
// "Most card friendly" or "Cash still matters") and the current-fees hub later, each as
// a new config here plus a thin page, not a rewrite.

// --- Region, the single canonical source ---
// Every country file now carries a canonical `region`, so this fallback is empty. It is
// kept, with regionOf still reading it, purely as a safety net: a new guide added without
// a `region` would resolve to null and simply not appear on a hub until the field is set.
export const REGION_FALLBACK = {};
export const regionOf = (c) => (c && (c.region || REGION_FALLBACK[c.slug])) || null;

// Reading grammar for region names that take "the".
export const REGION_PHRASE = { 'Americas': 'the Americas', 'Middle East': 'the Middle East' };

// --- Region hubs ---
// `live` gates the breadcrumb link and each guide's up-link, so a region only appears
// once its hub page exists. Roll a region out by adding its page and setting live true.
// Intro is plain, real copy in the site voice, not filler. Keyed by the region value
// used in the country data.
export const REGIONS = {
  'Middle East': {
    kind: 'region',
    cardType: 'country',
    key: 'middle-east',
    label: 'Middle East',
    slug: 'middle-east',
    live: true,
    lab: 'Regional guide',
    title: 'Money in the Middle East (2026): cash, cards and fees by country | True Trip Costs',
    description: 'How money works across the Middle East for US travelers: where cards are fine, where to keep local cash, and the tourist taxes and fees to expect, country by country.',
    h1: 'Money in the Middle East, country by country.',
    intro: [
      'The Middle East runs the whole range. In the Gulf, cities like Dubai and Abu Dhabi are close to cashless, and your cards will carry you through hotels, malls, taxis and the metro. Elsewhere cash still does the daily work, and a stack of small local notes matters more than any card, above all for tips and markets.',
      'Below is every country we cover in the region, with a quick read on how card friendly it is and what to watch, then a full money guide for each. Start with where you are headed.',
    ],
  },
  'Europe': {
    kind: 'region',
    cardType: 'country',
    key: 'europe',
    label: 'Europe',
    slug: 'europe',
    live: true,
    lab: 'Regional guide',
    title: 'Money in Europe (2026): cards, cash and fees by country | True Trip Costs',
    description: 'How money works across Europe for US travelers: where you can tap for almost everything, the tourist taxes cities add at checkout, the Euronet ATMs to skip, and the cash and cards to bring, country by country.',
    h1: 'Money in Europe, country by country.',
    intro: [
      'Europe is the most card friendly region we cover. Across the west and north you can tap for almost everything, and in the Nordics you can go days without touching cash, though prices there run high once you convert. The money quirks are consistent: many cities add a small nightly tourist tax that lands at checkout rather than in the rate you booked, and the bright standalone ATMs in tourist squares, Euronet above all, charge steep fees and push a poor exchange rate.',
      'One rule holds everywhere here: always pay in the local currency, never dollars, on any card terminal or ATM, and let your own bank do the conversion. Below is every country we cover in Europe, with a quick read on how card friendly it is and what to watch, then a full money guide for each. Start with where you are headed.',
    ],
  },
  'Asia': {
    kind: 'region',
    cardType: 'country',
    key: 'asia',
    label: 'Asia',
    slug: 'asia',
    live: true,
    lab: 'Regional guide',
    title: 'Money in Asia (2026): cash, cards and fees by country | True Trip Costs',
    description: 'How money works across Asia for US travelers: where cards are fine and where cash still rules, the ATM fees and visa fees to plan for, and the local cash to carry, country by country.',
    h1: 'Money in Asia, country by country.',
    intro: [
      'Asia is the most cash first region we cover. Cards work at hotels, malls and mid range restaurants in the cities, and locals lean on QR payment apps, but street food, markets, tuk tuks and autorickshaws, temples and small shops still want local notes, so a stack of cash is your main tool almost everywhere. Two costs catch first timers here: several countries charge a flat fee on every foreign card withdrawal, steepest in Thailand, and a few want a visa or e-visa arranged and paid before you fly.',
      'One rule holds everywhere here: always pay in the local currency, never dollars, on any card terminal or ATM, and pull cash from a bank ATM rather than an airport counter. Below is every country we cover in Asia, with a quick read on how card friendly it is and what to watch, then a full money guide for each. Start with where you are headed.',
    ],
  },
  'Americas': {
    kind: 'region',
    cardType: 'country',
    key: 'americas',
    label: 'Americas',
    slug: 'americas',
    live: true,
    lab: 'Regional guide',
    title: 'Money in the Americas (2026): cash, cards and fees by country | True Trip Costs',
    description: 'How money works across the Americas for US travelers: where cards and US dollars work, where you still need local cash, and the tourist taxes, resort fees and ATM fees to expect, country by country.',
    h1: 'Money in the Americas, country by country.',
    intro: [
      'The Americas run the whole range. Canada and Brazil are close to cashless and card friendly almost everywhere, while much of Latin America and the Caribbean is card in the cities and cash for the rest, so how much local cash you carry depends heavily on where you land. Two habits pay off everywhere here: the US dollar is welcome at many Caribbean and Latin resorts, but you almost always lose a few percent when the merchant sets the rate, so pay in the local currency instead, and the ATMs can bite, with low withdrawal limits and steep flat fees in places like Argentina, Colombia and Mexico.',
      'Watch two more things, on the bill and before you fly: Caribbean and Mexican resort stays often add service charges, sales tax and local lodging or eco fees at checkout rather than in the quoted rate, and a couple of countries now want an entry authorization or e-visa paid ahead, Brazil and Canada among them. Below is every country we cover in the Americas, with a quick read on how card friendly it is and what to watch, then a full money guide for each. Start with where you are headed.',
    ],
  },
  // Thematic collections and the current-fees hub go here later, each as a Hub config plus a thin page.
};

export const regionsList = () => Object.values(REGIONS);

// Countries in a region, ready for a hub card grid. Filters by the canonical region,
// keeps live non-blocked guides, sorts by name. A new country file with the right
// region slots in here with no other change.
export function countriesInRegion(regionName, countries) {
  return (countries || [])
    .filter(c => c.live && !c.blocked && regionOf(c) === regionName)
    .sort((a, b) => a.name.localeCompare(b.name));
}

// --- Signals to tags ---
// One place that turns a country's `signals` object into the small tags shown on hub
// cards, and later on homepage cards and thematic collections. A missing signal simply
// produces no tag, so partial data degrades gracefully. Signals are on a 1 to 5 scale:
//   cardFriendliness  5 = cards accepted almost everywhere
//   cashNeed          5 = you will need local cash regularly (reserved for collections)
//   taxRisk           5 = notable tourist taxes or entry fees to expect
//   atmRisk           5 = high ATM or dynamic-currency-conversion fee risk
export function signalChips(signals) {
  if (!signals) return [];
  const out = [];
  const num = (v) => (typeof v === 'number' ? v : null);
  const cf = num(signals.cardFriendliness);
  const tax = num(signals.taxRisk);
  const atm = num(signals.atmRisk);
  if (cf !== null) {
    if (cf >= 4) out.push({ label: 'Card-friendly', tone: 'good' });
    else if (cf <= 2) out.push({ label: 'Cash-first', tone: 'warn' });
    else out.push({ label: 'Cards in cities', tone: 'neutral' });
  }
  if (tax !== null && tax >= 3) out.push({ label: 'Tourist tax to expect', tone: 'warn' });
  if (atm !== null && atm >= 4) out.push({ label: 'Watch ATM fees', tone: 'warn' });
  return out;
}
