// Hub system for True Trip Costs. One source for region metadata, the editorial copy,
// and the small signal-to-tag logic, feeding the region hubs, the breadcrumbs and the
// guide links so they stay consistent. Built as a general pattern: the same Hub
// component renders regional hubs today, and thematic collections (for example
// "Most card friendly" or "Cash still matters") and the current-fees hub later, each as
// a new config here plus a thin page, not a rewrite.

// --- Region, the single canonical source ---
// Most country files carry a `region`. These originals leave it to this fallback for
// now; backfilling `region` into their data files removes the need for it.
export const REGION_FALLBACK = {
  france: 'Europe', italy: 'Europe', japan: 'Asia', mexico: 'Americas',
  portugal: 'Europe', spain: 'Europe', thailand: 'Asia',
  'united-kingdom': 'Europe', vietnam: 'Asia',
};
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
  // Europe, Asia and Americas: add a config here and a thin page, then set live true.
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
