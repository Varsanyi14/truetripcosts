// THE CONNECTIVITY VERDICT LAYER: a one-line honest call per country for the
// /staying-connected/ hub, built on the same TIERS mechanism rail-passes.js uses.
//
// WHY THIS EXISTS. The hub lists every country with a staying-connected spoke and, before
// this file, offered no synthesis: 59 links and no way to see the shape of the answer
// without opening 59 pages. The shape is the interesting part, because across the wave the
// honest cheapest answer turned out NOT to be the travel eSIM we earn a commission on in
// more than half the countries we looked at. That is the most differentiating thing this
// site can say about itself and it was invisible.
//
// WHERE THE CLASSIFICATION COMES FROM, and this is a hard rail. Every `tier` below is
// HAND-CLASSIFIED against the country's own spoke prose. It is never derived at build time
// from the spoke's `Cheapest` glance row, for two reasons: that row exists in only about 43
// of the 59 spokes, and its values are free text ranging from "A local SIM, about $4 a
// month" to "Often nothing, on wifi" to "Close: a Swiss SIM or an eSIM". A regex over that
// is exactly the failure verdict.js documents, where a naive keyword match nearly told five
// countries they could claim a VAT refund they cannot get. If you are ever tempted to
// generate this file, do not.
//
// THE COLOR RAIL, which is the honesty payload. `tone: 'product'` is the swatch that says
// "the thing we sell has a genuine case", and it is reserved for the `esim` tier ALONE.
// Every other tier is half-strength, neutral or caution-marked, including the three tiers
// where the honest answer costs us the commission. The visual consequence is deliberate: a
// reader glancing at the hub sees the product-wins color on a minority of countries, which
// is the true state of things. scripts/check-connectivity-verdicts.mjs asserts this, so a
// later well-meaning edit cannot quietly make the eSIM look like it wins more often.
//
// COVERAGE IS OFF THE MONEY AXIS. namibia, iceland and new-zealand are not a "cheaper or
// dearer" story, they are a "you will lose signal, plan offline" story, so the `coverage`
// tier carries a caution treatment rather than a position on the price gradient. Forcing a
// coverage country onto the same scale as a price country would misrepresent both. The gate
// asserts that a spoke carrying caution: "high" cannot be tiered as a money verdict.

// Ranked so the hub can sort. Rank orders by "how much does the reader need to do
// something different from the obvious", not by how good the news is for us.
export const TIERS = [
  {
    key: 'local-sim',
    rank: 5,
    label: 'A local SIM is clearly cheaper',
    short: 'Buy a local SIM',
    gloss: 'The honest cheapest pick is a local or airport SIM, often several times cheaper than a travel eSIM. We earn nothing on that and it is still the right answer here.',
    tone: 'neutral',
  },
  {
    key: 'coverage',
    rank: 4,
    label: 'No SIM fixes the gaps',
    short: 'Coverage is the real issue',
    gloss: 'The problem here is signal rather than price, and no purchase closes it. Plan to be offline: downloaded maps, details saved, somebody told where you are going.',
    tone: 'caution',
  },
  {
    key: 'too-close',
    rank: 3,
    label: 'Genuinely too close to call',
    short: 'Do the math',
    gloss: 'A travel eSIM and the local option land close together, and which wins depends on your trip length, your data use or how much a shop errand is worth to you.',
    tone: 'half',
  },
  {
    key: 'wifi',
    rank: 2,
    label: 'You may not need to buy anything',
    short: 'Wifi is usually enough',
    gloss: 'On a typical trip here, hotel and public wifi cover it and buying data is optional. We would rather say so than sell you a plan for a problem you do not have.',
    tone: 'neutral',
  },
  {
    key: 'in-plan',
    rank: 1,
    label: 'Your US plan likely covers this',
    short: 'Check your own plan first',
    gloss: 'Most US unlimited plans already include this country, or sell a cheap regional pass for it. Look at what you have before you buy anything at all.',
    tone: 'neutral',
  },
  {
    key: 'esim',
    rank: 0,
    label: 'A travel eSIM is the honest call',
    short: 'An eSIM is the pick',
    gloss: 'Coverage is not the problem and the local alternatives do not undercut it, so a travel eSIM genuinely is the cheaper or more predictable option here.',
    tone: 'product',
  },
];

// The one tone that means "the product we earn on is the answer". Exported so the hub and
// the gate read the same constant rather than each hard-coding a string.
export const PRODUCT_TONE = 'product';

// PER-COUNTRY ASSIGNMENTS, hand-classified against each spoke's own prose.
//
// `why` is the hub's one-line reason. It must not contradict the spoke it links to: a chip
// reading "an eSIM is the pick" over a spoke that says "buy the local SIM" is exactly the
// two-pages-one-story contradiction this layer is supposed to prevent.
export const VERDICTS = {
  // Local SIM clearly cheaper. Every one of these pages leads with the local option.
  india: { tier: 'local-sim', why: 'A Jio or Airtel plan is about 4 dollars for 28 days at 2GB a day, roughly a tenth of an eSIM. The cost is paperwork, not money.' },
  'sri-lanka': { tier: 'local-sim', why: 'An airport tourist pack is 5 to 10 dollars for 25GB or more, which is less than a single day of carrier roaming.' },
  cambodia: { tier: 'local-sim', why: 'A few dollars buys tens of gigabytes, among the cheapest data anywhere. One day of roaming costs more than the whole month.' },
  vietnam: { tier: 'local-sim', why: 'Viettel is 5 to 8 dollars a month on unusually good coverage. Registration is enforced, so buy from an official counter.' },
  laos: { tier: 'local-sim', why: 'Cheap, and buy the network rather than the price: Unitel has the reach. The gaps between towns are real on any plan.' },
  georgia: { tier: 'local-sim', why: 'A Magti or Silknet SIM at the airport is 4 to 9 dollars. Tusheti and upper Svaneti have no signal at any price.' },
  'hong-kong': { tier: 'local-sim', why: 'Local prepaid is 6 to 13 dollars with ubiquitous wifi behind it. Note Hong Kong sits outside the mainland firewall.' },
  poland: { tier: 'local-sim', why: 'Under 10 dollars for tens of gigabytes, and EU roaming means one Polish starter can cover a multi-country European trip.' },
  morocco: { tier: 'local-sim', why: 'A local SIM is 5 to 10 dollars. The one honest point for an eSIM is handset-specific: Moroccan carriers lag on visitor eSIM support.' },
  egypt: { tier: 'local-sim', why: 'A local pack is 6 to 12 dollars, and the arrivals-hall kiosks price above the shops in town.' },
  colombia: { tier: 'local-sim', why: 'Claro is a few dollars and has the widest reach. The eSIM case here is landing able to order a ride, not price.' },
  'south-africa': { tier: 'local-sim', why: 'An ordinary MTN bundle is about 5 dollars for 10GB against 20 dollars for 3GB on a tourist pack. RICA registration is the price of that gap.' },

  // Coverage, off the money axis. All three carry a higher caution in the spoke itself.
  namibia: { tier: 'coverage', why: 'Coverage follows the towns and the tarred roads. Most of the country has no signal on any network, so buy data cheaply and plan offline.' },
  iceland: { tier: 'coverage', why: 'The Ring Road is fine and the Highlands and F-roads are not. Here this is a safety question rather than a price one.' },
  'new-zealand': { tier: 'coverage', why: 'Towns and highways are covered, Fiordland and most DOC tracks are not. A locator beacon is what the rescue services expect.' },

  // Genuinely close.
  switzerland: { tier: 'too-close', why: 'Swisscom sells unlimited data at about 2 francs a day, so a heavy week can beat an eSIM. Check any Europe plan covers Switzerland at all.' },
  taiwan: { tier: 'too-close', why: 'Unlimited over the counter at about 10 dollars for five days. Heavy use favours the SIM, light use the eSIM.' },
  thailand: { tier: 'too-close', why: 'Both options are cheap, so it comes down to whether you want a Thai number or data working the moment you land.' },
  'south-korea': { tier: 'too-close', why: 'The local unlimited plan is the expensive one here, unusually for Asia, and ubiquitous wifi means a modest allowance goes far.' },
  philippines: { tier: 'too-close', why: 'The local pack is cheaper per gigabyte; a travel eSIM sits outside the registration process and its 30-day clock. Price against friction.' },
  brazil: { tier: 'too-close', why: 'A local chip undercuts everything per gigabyte, and the store visit is uneven. You do not need a CPF, whatever the internet says.' },

  // Wifi, or nothing.
  singapore: { tier: 'wifi', why: 'On a short stopover, hotel and public wifi genuinely cover it. If you do want data, the local SIM is enormous value.' },
  aruba: { tier: 'wifi', why: 'On a resort week the wifi covers it. Island prepaid is expensive enough that an eSIM is the better buy if you do want data.' },
  'dominican-republic': { tier: 'wifi', why: 'Resort wifi covers an all-inclusive, and a data plan often undercuts the resort premium wifi upsell.' },

  // Already in your plan.
  canada: { tier: 'in-plan', why: 'Most US unlimited plans include Canada at no extra cost. Look at your own plan before buying anything.' },
  mexico: { tier: 'in-plan', why: 'Usually included on the big three unlimited plans. If you do buy, the network matters more than the price: Telcel for anywhere rural.' },

  // A travel eSIM genuinely wins.
  japan: { tier: 'esim', why: 'Coverage is among the best anywhere including the bullet trains, so this is purely a cost decision and the eSIM wins it.' },
  france: { tier: 'esim', why: 'Strong coverage in the cities and towns, so a cost decision. Expect thinner signal in the Alps and Pyrenees.' },
  germany: { tier: 'esim', why: 'Strong almost everywhere, so a cost decision. Favour a Telekom-backed plan for rural travel and long ICE journeys.' },
  italy: { tier: 'esim', why: 'Strong in the cities and towns, so a cost decision, with gaps in the high country and the remote south.' },
  spain: { tier: 'esim', why: 'Strong in the cities, on the coast and the islands, so a cost decision. The rural interior and mountains thin out.' },
  'united-kingdom': { tier: 'esim', why: 'Excellent coverage including most of the Tube, so purely a cost decision against a carrier day pass.' },
  australia: { tier: 'esim', why: 'Strong in the cities, on the coast and in the towns, and honestly absent for long stretches of the remote Outback.' },
  netherlands: { tier: 'esim', why: 'Among the best coverage in Europe, trains included, with nothing to plan around. Purely a cost decision.' },
  turkey: { tier: 'esim', why: 'The inversion: visitor SIMs run 25 to 40 dollars, well above resident pricing, so here the eSIM really is cheapest.' },
  uae: { tier: 'esim', why: 'App calling is blocked on local networks and messaging is not. A travel eSIM sometimes routes around it, as a side effect and not a promise.' },
  indonesia: { tier: 'esim', why: 'Which network you ride matters more than the price: you want Telkomsel once you leave South Bali.' },
  'costa-rica': { tier: 'esim', why: 'Kolbi has the widest reach, so buy the network rather than the cheapest plan. Parks and remote coasts still drop out.' },
  china: { tier: 'esim', why: 'The one country where an eSIM is not about price: a roaming plan set up before you fly routes around the firewall. VPNs are unreliable.' },
};

// AWAITING VERIFICATION. These countries have live spokes but no verdict chip yet, because
// the desk has not yet read their prose against a real tree. They render on the hub without
// a chip, exactly as a country absent from rail-passes.js does: an unclassified country is
// the safe default, and a chip that contradicts an unverified hedge is not.
//
// This list is not a backlog note, it is enforced. check-connectivity-verdicts.mjs requires
// every live spoke to be either tiered or listed here, so the gate cannot be satisfied by
// forgetting a country, and clearing an entry means moving its slug into VERDICTS above.
export const PENDING_VERIFICATION = [
  'portugal', 'greece', 'czechia', 'austria', 'hungary', 'croatia', 'norway', 'sweden',
  'denmark', 'ireland', 'oman', 'qatar', 'bahrain', 'kuwait', 'saudi-arabia',
  'argentina', 'jamaica', 'bahamas', 'ecuador', 'el-salvador',
];

// Two assignments the desk flagged rather than settled, recorded so the judgment is visible
// and can be revisited rather than being buried in a commit message:
//   philippines  the local pack is cheaper per gigabyte, and registration plus a 30-day
//                validity clock is real friction. Tiered too-close rather than local-sim
//                because the spoke leads with the friction, not the price.
//   brazil       the local chip undercuts everything per gigabyte, and the store visit is
//                genuinely uneven for a visitor. Tiered too-close rather than local-sim for
//                the same reason. If either reads wrong to you, they are one-word changes.
export const FLAGGED_JUDGMENTS = ['philippines', 'brazil'];

export const tierOf = (key) => TIERS.find((t) => t.key === key) || null;
