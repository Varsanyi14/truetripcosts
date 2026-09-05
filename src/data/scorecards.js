// SCORECARDS DATA. Per-country money scorecard ratings: a categorical verdict plus
// five tiered dimensions (ease, cash, cost, around, currency). No numeric score anywhere.
//
// TWO SOURCES, per BRIEF-money-scorecard.md:
//  (A) ~43 countries pulled from their region-comparison page's own `rate` object
//      (src/pages/compare/*.astro), which already rates cost (1-4), cash/card lean and
//      tag, currency and note. Taxi caution comes from the COUNTRY'S OWN taxi spoke when
//      present (this is what the compare page itself renders), falling back to the
//      region page's own taxiCaution field only when no spoke caution exists (gulf and
//      middle-east clusters carry taxiCaution directly in their rate objects).
//  (B) ~16 countries with NO region cluster, fresh-rated by reading the country's own
//      guide file (src/data/<slug>.js): `signals.cardFriendliness` (1-5) and
//      `signals.cashNeed` (1-5) drive ease/cash, `cash.styles` Mid-range (per + room)
//      drives cost via a cross-site quartile banding (see COST BANDING below), the
//      guide's own taxi spoke drives around, and the guide's currency prose drives
//      currency. Every rating below carries a trailing citation comment.
//
// EASE/CASH MAPPING RULES (documented once here, applied consistently everywhere):
//  From a region page's cashLean + cashTag:
//    cashLean:card + tag implies near-total card use ("everywhere", "nearly cashless",
//      "card for everything", "cash often refused") -> ease very-easy, cash near-cashless
//    cashLean:card otherwise -> ease easy, cash light
//    cashLean:cash + tag is the exact phrase "Carry cash" (no "too") -> ease cash-first,
//      cash cash-heavy (a stronger cash signal than "carry cash too")
//    cashLean:cash + tag implies cash needed for most things ("cash-first", "cash is
//      king", "mostly cash", "cash, bring USD", "small bills", "cash outside towns")
//      -> ease cash-first, cash cash-heavy (except see NOTE on Namibia below)
//    cashLean:cash + tag implies cards work in cities/some places ("cards in cities",
//      "cards, then cash", "cards, keep cash", "carry cash too") -> ease mixed, cash carry-some
//  NOTE (Namibia): "Cash outside towns" literally states cards work IN towns, so ease is
//  mixed (gaps only once you leave town), while cash dependence is still cash-heavy since
//  the trip (a self-drive safari) spends most of its time outside towns. This is the one
//  place ease and cash diverge from the same tag; flagged for MAIN.
//  From a fresh-rated guide's own signals: cardFriendliness 5->very-easy, 4->easy,
//  3->mixed, <=2->cash-first (mirrors the >=4/<=2 split hubs.js already uses for its own
//  chips); cashNeed 1->near-cashless, 2->light, 3->carry-some, >=4->cash-heavy.
//
// COST BANDING for the 16 fresh-rated countries (no region cost dot exists for them):
// every guide's cash.styles Mid-range tier gives a per-person daily spend (`per`) and a
// nightly room rate (`room`); their sum is the same total the site's own cost-comparison
// page (src/pages/cost-comparison.astro) ranks countries on. Computing that sum across
// all 59 live countries and taking quartiles (15th/30th/45th of 59, sorted) gives break
// points of $175 / $230 / $300, so: <=175 budget, 176-230 moderate, 231-300 pricier,
// >300 expensive. This is a derived banding, not a stated guide field, flagged for MAIN.
//
// VERDICT is computed from ease + cash by a fixed, sequential rule (first match wins):
//   1. ease in {very-easy,easy} and cash in {near-cashless,light}  -> easy-money
//   2. ease in {very-easy,easy} and cash === carry-some            -> card-easy-carry-cash
//   3. ease === mixed OR cash === cash-heavy                       -> mixed-carry-cash
//   4. ease === cash-first                                        -> cash-first
//   5. ease is null                                               -> null (no chip)
// KNOWN RULE QUIRK, FLAGGED FOR MAIN: because step 3 fires on cash === cash-heavy
// regardless of ease, every ease:cash-first country whose cash is also cash-heavy (which
// is most of them) lands on mixed-carry-cash rather than reaching step 4's cash-first
// verdict at all. Both are amber chips, so the color is right, but the wording ("Mixed,
// keep cash handy" instead of "Cash-first, plan ahead") undersells the more cash-heavy
// countries below. Affected: Germany, Japan, Egypt, Argentina, Ecuador, Thailand, Vietnam,
// Indonesia, Philippines, Morocco, Mexico, India, Cambodia, Laos, Sri Lanka. Implemented
// exactly as specified in BRIEF-money-scorecard.md rather than silently fixed; MAIN should
// decide whether to add a step 3.5 (ease===cash-first -> cash-first, checked before the
// cash-heavy OR) or accept the amber-but-softer wording.
export const VERDICT_META = {
  'easy-money':           { label: 'Easy money destination',     tone: 'green' },
  'card-easy-carry-cash': { label: 'Card-easy, but carry cash',  tone: 'amber' },
  'mixed-carry-cash':     { label: 'Mixed, keep cash handy',    tone: 'amber' },
  'cash-first':           { label: 'Cash-first, plan ahead',    tone: 'amber' },
};

export const TIER_VOCAB = {
  ease:     ['very-easy', 'easy', 'mixed', 'cash-first'],
  cash:     ['near-cashless', 'light', 'carry-some', 'cash-heavy'],
  cost:     ['budget', 'moderate', 'pricier', 'expensive'],
  around:   ['honest', 'some-caution', 'high-caution'],
  currency: ['stable', 'minor-wrinkle', 'volatile'],
};

export const TIER_LABELS = {
  ease:     { 'very-easy': 'Very easy', 'easy': 'Easy', 'mixed': 'Mixed', 'cash-first': 'Cash-first' },
  cash:     { 'near-cashless': 'Near cashless', 'light': 'Light cash use', 'carry-some': 'Carry some cash', 'cash-heavy': 'Cash-heavy' },
  cost:     { 'budget': 'Budget', 'moderate': 'Moderate', 'pricier': 'Pricier', 'expensive': 'Expensive' },
  around:   { 'honest': 'Honest taxis', 'some-caution': 'Some caution', 'high-caution': 'High caution' },
  currency: { 'stable': 'Stable', 'minor-wrinkle': 'Worth checking', 'volatile': 'Volatile' },
};

// Computes the verdict key from ease + cash, per the fixed rule documented above.
// Exported so the gate (scripts/check-scorecards.mjs) can assert every stored verdict
// still matches what its own tiers would produce.
export function computeVerdict(ease, cash) {
  if (!ease) return null;
  const easyEase = ease === 'very-easy' || ease === 'easy';
  if (easyEase && (cash === 'near-cashless' || cash === 'light')) return 'easy-money';
  if (easyEase && cash === 'carry-some') return 'card-easy-carry-cash';
  if (ease === 'cash-first') return 'cash-first';
  if (ease === 'mixed' || cash === 'cash-heavy') return 'mixed-carry-cash';
  return null;
}

export const scorecards = {
  'portugal': {
    verdict: 'easy-money',
    ease: 'easy', cash: 'light', cost: 'moderate', around: 'honest', currency: 'stable',
    // SOURCE: compare/southern-europe.astro rate.portugal = { cost: 2, cashLean: 'card', cashTag: "Mostly cards", cur: 'Euro', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (2).
    // around <- the Portugal guide's own taxi spoke (caution: 'low'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'spain': {
    verdict: 'easy-money',
    ease: 'very-easy', cash: 'near-cashless', cost: 'moderate', around: 'honest', currency: 'stable',
    // SOURCE: compare/southern-europe.astro rate.spain = { cost: 2, cashLean: 'card', cashTag: "Cards everywhere", cur: 'Euro', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (2).
    // around <- the Spain guide's own taxi spoke (caution: 'low'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'italy': {
    verdict: 'mixed-carry-cash',
    ease: 'mixed', cash: 'carry-some', cost: 'pricier', around: 'some-caution', currency: 'stable',
    // SOURCE: compare/southern-europe.astro rate.italy = { cost: 3, cashLean: 'cash', cashTag: "Carry cash too", cur: 'Euro', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (3).
    // around <- the Italy guide's own taxi spoke (caution: 'medium'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'greece': {
    verdict: 'mixed-carry-cash',
    ease: 'mixed', cash: 'carry-some', cost: 'moderate', around: 'some-caution', currency: 'stable',
    // SOURCE: compare/southern-europe.astro rate.greece = { cost: 2, cashLean: 'cash', cashTag: "Carry cash too", cur: 'Euro', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (2).
    // around <- the Greece guide's own taxi spoke (caution: 'medium'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'croatia': {
    verdict: 'easy-money',
    ease: 'easy', cash: 'light', cost: 'pricier', around: 'honest', currency: 'stable',
    // SOURCE: compare/southern-europe.astro rate.croatia = { cost: 3, cashLean: 'card', cashTag: "Mostly cards", cur: 'Euro', curNote: "since 2023" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (3).
    // around <- the Croatia guide's own taxi spoke (caution: 'low'). currency <- curNote "since 2023" (see currency-tier rule in the file header).
  },
  'germany': {
    verdict: 'cash-first',
    ease: 'cash-first', cash: 'cash-heavy', cost: 'pricier', around: 'honest', currency: 'stable',
    // SOURCE: compare/central-europe.astro rate.germany = { cost: 3, cashLean: 'cash', cashTag: "Carry cash", cur: 'Euro', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (3).
    // around <- the Germany guide's own taxi spoke (caution: 'low'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'austria': {
    verdict: 'mixed-carry-cash',
    ease: 'mixed', cash: 'carry-some', cost: 'pricier', around: 'honest', currency: 'stable',
    // SOURCE: compare/central-europe.astro rate.austria = { cost: 3, cashLean: 'cash', cashTag: "Cards, keep cash", cur: 'Euro', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (3).
    // around <- the Austria guide's own taxi spoke (caution: 'low'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'switzerland': {
    verdict: 'easy-money',
    ease: 'easy', cash: 'light', cost: 'expensive', around: 'honest', currency: 'stable',
    // SOURCE: compare/central-europe.astro rate.switzerland = { cost: 4, cashLean: 'card', cashTag: "Card-friendly", cur: 'Franc', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (4).
    // around <- the Switzerland guide's own taxi spoke (caution: 'low'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'czechia': {
    verdict: 'mixed-carry-cash',
    ease: 'mixed', cash: 'carry-some', cost: 'moderate', around: 'some-caution', currency: 'stable',
    // SOURCE: compare/central-europe.astro rate.czechia = { cost: 2, cashLean: 'cash', cashTag: "Cards in cities", cur: 'Koruna', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (2).
    // around <- the Czechia guide's own taxi spoke (caution: 'medium'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'hungary': {
    verdict: 'mixed-carry-cash',
    ease: 'mixed', cash: 'carry-some', cost: 'moderate', around: 'honest', currency: 'stable',
    // SOURCE: compare/central-europe.astro rate.hungary = { cost: 2, cashLean: 'cash', cashTag: "Cards in cities", cur: 'Forint', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (2).
    // around <- the Hungary guide's own taxi spoke (caution: 'low'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'japan': {
    verdict: 'cash-first',
    ease: 'cash-first', cash: 'cash-heavy', cost: 'pricier', around: 'honest', currency: 'stable',
    // SOURCE: compare/east-asia.astro rate.japan = { cost: 3, cashLean: 'cash', cashTag: "Carry cash", cur: 'Yen', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (3).
    // around <- the Japan guide's own taxi spoke (caution: 'low'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'south-korea': {
    verdict: 'easy-money',
    ease: 'easy', cash: 'light', cost: 'moderate', around: 'honest', currency: 'minor-wrinkle',
    currencyNote: 'Counts high',
    // SOURCE: compare/east-asia.astro rate.south-korea = { cost: 2, cashLean: 'card', cashTag: "Card-first", cur: 'Won', curNote: "counts high" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (2).
    // around <- the South Korea guide's own taxi spoke (caution: 'low'). currency <- curNote "counts high" (see currency-tier rule in the file header).
  },
  'taiwan': {
    verdict: 'mixed-carry-cash',
    ease: 'mixed', cash: 'carry-some', cost: 'moderate', around: 'honest', currency: 'stable',
    // SOURCE: compare/east-asia.astro rate.taiwan = { cost: 2, cashLean: 'cash', cashTag: "Cash, cards in cities", cur: 'NT$ dollar', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (2).
    // around <- the Taiwan guide's own taxi spoke (caution: 'low'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'hong-kong': {
    verdict: 'easy-money',
    ease: 'easy', cash: 'light', cost: 'pricier', around: 'honest', currency: 'stable',
    // SOURCE: compare/east-asia.astro rate.hong-kong = { cost: 3, cashLean: 'card', cashTag: "Cards and Octopus", cur: 'HK$ dollar', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (3).
    // around <- the Hong Kong guide's own taxi spoke (caution: 'low'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'china': {
    verdict: 'mixed-carry-cash',
    ease: 'mixed', cash: 'carry-some', cost: 'moderate', around: 'some-caution', currency: 'stable',
    // SOURCE: compare/east-asia.astro rate.china = { cost: 2, cashLean: 'cash', cashTag: "Mobile pay", cur: 'Yuan', curNote: "RMB" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (2).
    // around <- the China guide's own taxi spoke (caution: 'medium'). currency <- curNote "RMB" (see currency-tier rule in the file header).
  },
  'uae': {
    verdict: 'easy-money',
    ease: 'very-easy', cash: 'near-cashless', cost: 'pricier', around: 'honest', currency: 'stable',
    // SOURCE: compare/gulf.astro rate.uae = { cost: 3, cashLean: 'card', cashTag: "Nearly cashless", cur: 'Dirham', curNote: "USD-pegged" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (3).
    // around <- the United Arab Emirates guide's own taxi spoke (caution: 'low'). currency <- curNote "USD-pegged" (see currency-tier rule in the file header).
  },
  'oman': {
    verdict: 'mixed-carry-cash',
    ease: 'mixed', cash: 'carry-some', cost: 'pricier', around: 'some-caution', currency: 'stable',
    // SOURCE: compare/gulf.astro rate.oman = { cost: 3, cashLean: 'cash', cashTag: "Cards, then cash", cur: 'Rial', curNote: "USD-pegged" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (3).
    // around <- the Oman guide's own taxi spoke (caution: 'medium'). currency <- curNote "USD-pegged" (see currency-tier rule in the file header).
  },
  'qatar': {
    verdict: 'easy-money',
    ease: 'very-easy', cash: 'near-cashless', cost: 'expensive', around: 'honest', currency: 'stable',
    // SOURCE: compare/gulf.astro rate.qatar = { cost: 4, cashLean: 'card', cashTag: "Nearly cashless", cur: 'Riyal', curNote: "USD-pegged" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (4).
    // around <- the Qatar guide's own taxi spoke (caution: 'low'). currency <- curNote "USD-pegged" (see currency-tier rule in the file header).
  },
  'saudi-arabia': {
    verdict: 'easy-money',
    ease: 'easy', cash: 'light', cost: 'pricier', around: 'some-caution', currency: 'stable',
    // SOURCE: compare/gulf.astro rate.saudi-arabia = { cost: 3, cashLean: 'card', cashTag: "Card-first", cur: 'Riyal', curNote: "USD-pegged" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (3).
    // around <- the Saudi Arabia guide's own taxi spoke (caution: 'medium'). currency <- curNote "USD-pegged" (see currency-tier rule in the file header).
  },
  'bahrain': {
    verdict: 'easy-money',
    ease: 'easy', cash: 'light', cost: 'pricier', around: 'honest', currency: 'stable',
    // SOURCE: compare/gulf.astro rate.bahrain = { cost: 3, cashLean: 'card', cashTag: "Card-easy", cur: 'Dinar', curNote: "USD-pegged" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (3).
    // around <- the Bahrain guide's own taxi spoke (caution: 'low'). currency <- curNote "USD-pegged" (see currency-tier rule in the file header).
  },
  'kuwait': {
    verdict: 'easy-money',
    ease: 'easy', cash: 'light', cost: 'expensive', around: 'some-caution', currency: 'volatile',
    // SOURCE: compare/gulf.astro rate.kuwait = { cost: 4, cashLean: 'card', cashTag: "Card-easy", cur: 'Dinar', curNote: "basket-pegged" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (4).
    // around <- the Kuwait guide's own taxi spoke (caution: 'medium'). currency <- curNote "basket-pegged" (see currency-tier rule in the file header).
  },
  'turkey': {
    verdict: 'easy-money',
    ease: 'easy', cash: 'light', cost: 'moderate', around: 'some-caution', currency: 'volatile',
    // SOURCE: compare/middle-east.astro rate.turkey = { cost: 2, cashLean: 'card', cashTag: "Cards in cities", cur: 'Lira', curNote: "high inflation" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (2).
    // around <- the Turkey guide's own taxi spoke (caution: 'medium'). currency <- curNote "high inflation" (see currency-tier rule in the file header).
  },
  'egypt': {
    verdict: 'cash-first',
    ease: 'cash-first', cash: 'cash-heavy', cost: 'budget', around: 'some-caution', currency: 'stable',
    // SOURCE: compare/middle-east.astro rate.egypt = { cost: 1, cashLean: 'cash', cashTag: "Cash-first", cur: 'Pound', curNote: "Egyptian" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (1).
    // around <- the Egypt guide's own taxi spoke (caution: 'medium'). currency <- curNote "Egyptian" (see currency-tier rule in the file header).
  },
  'denmark': {
    verdict: 'easy-money',
    ease: 'very-easy', cash: 'near-cashless', cost: 'expensive', around: 'honest', currency: 'stable',
    // SOURCE: compare/nordics.astro rate.denmark = { cost: 4, cashLean: 'card', cashTag: "Nearly cashless", cur: 'Krone', curNote: "Danish" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (4).
    // around <- the Denmark guide's own taxi spoke (caution: 'low'). currency <- curNote "Danish" (see currency-tier rule in the file header).
  },
  'sweden': {
    verdict: 'easy-money',
    ease: 'very-easy', cash: 'near-cashless', cost: 'pricier', around: 'some-caution', currency: 'stable',
    // SOURCE: compare/nordics.astro rate.sweden = { cost: 3, cashLean: 'card', cashTag: "Cash often refused", cur: 'Krona', curNote: "Swedish" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (3).
    // around <- the Sweden guide's own taxi spoke (caution: 'medium'). currency <- curNote "Swedish" (see currency-tier rule in the file header).
  },
  'norway': {
    verdict: 'easy-money',
    ease: 'very-easy', cash: 'near-cashless', cost: 'expensive', around: 'honest', currency: 'stable',
    // SOURCE: compare/nordics.astro rate.norway = { cost: 4, cashLean: 'card', cashTag: "Nearly cashless", cur: 'Krone', curNote: "Norwegian" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (4).
    // around <- the Norway guide's own taxi spoke (caution: 'low'). currency <- curNote "Norwegian" (see currency-tier rule in the file header).
  },
  'iceland': {
    verdict: 'easy-money',
    ease: 'very-easy', cash: 'near-cashless', cost: 'expensive', around: 'honest', currency: 'stable',
    // SOURCE: compare/nordics.astro rate.iceland = { cost: 4, cashLean: 'card', cashTag: "Card for everything", cur: 'Krona', curNote: "Icelandic" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (4).
    // around <- the Iceland guide's own taxi spoke (caution: 'low'). currency <- curNote "Icelandic" (see currency-tier rule in the file header).
  },
  'brazil': {
    verdict: 'easy-money',
    ease: 'easy', cash: 'light', cost: 'pricier', around: 'some-caution', currency: 'stable',
    // SOURCE: compare/south-america.astro rate.brazil = { cost: 3, cashLean: 'card', cashTag: "Cards and Pix", cur: 'Real', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (3).
    // around <- the Brazil guide's own taxi spoke (caution: 'medium'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'argentina': {
    verdict: 'cash-first',
    ease: 'cash-first', cash: 'cash-heavy', cost: 'moderate', around: 'honest', currency: 'volatile',
    // SOURCE: compare/south-america.astro rate.argentina = { cost: 2, cashLean: 'cash', cashTag: "Cash, bring USD", cur: 'Peso', curNote: "Argentine" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (2).
    // around <- the Argentina guide's own taxi spoke (caution: 'low'). currency <- curNote "Argentine" (see currency-tier rule in the file header).
  },
  'colombia': {
    verdict: 'mixed-carry-cash',
    ease: 'mixed', cash: 'carry-some', cost: 'budget', around: 'some-caution', currency: 'stable',
    // SOURCE: compare/south-america.astro rate.colombia = { cost: 1, cashLean: 'cash', cashTag: "Cards in cities", cur: 'Peso', curNote: "Colombian" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (1).
    // around <- the Colombia guide's own taxi spoke (caution: 'medium'). currency <- curNote "Colombian" (see currency-tier rule in the file header).
  },
  'ecuador': {
    verdict: 'cash-first',
    ease: 'cash-first', cash: 'cash-heavy', cost: 'moderate', around: 'high-caution', currency: 'stable',
    // SOURCE: compare/south-america.astro rate.ecuador = { cost: 2, cashLean: 'cash', cashTag: "US dollars, small bills", cur: 'US dollar', curNote: "yes, USD" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (2).
    // around <- the Ecuador guide's own taxi spoke (caution: 'high'). currency <- curNote "yes, USD" (see currency-tier rule in the file header).
  },
  'thailand': {
    verdict: 'cash-first',
    ease: 'cash-first', cash: 'cash-heavy', cost: 'moderate', around: 'some-caution', currency: 'stable',
    // SOURCE: compare/southeast-asia.astro rate.thailand = { cost: 2, cashLean: 'cash', cashTag: "Mostly cash", cur: 'Baht', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (2).
    // around <- the Thailand guide's own taxi spoke (caution: 'medium'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'vietnam': {
    verdict: 'cash-first',
    ease: 'cash-first', cash: 'cash-heavy', cost: 'budget', around: 'honest', currency: 'minor-wrinkle',
    currencyNote: 'Many zeros',
    // SOURCE: compare/southeast-asia.astro rate.vietnam = { cost: 1, cashLean: 'cash', cashTag: "Cash is king", cur: 'Dong', curNote: "many zeros" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (1).
    // around <- the Vietnam guide's own taxi spoke (caution: 'low'). currency <- curNote "many zeros" (see currency-tier rule in the file header).
  },
  'indonesia': {
    verdict: 'cash-first',
    ease: 'cash-first', cash: 'cash-heavy', cost: 'moderate', around: 'some-caution', currency: 'minor-wrinkle',
    currencyNote: 'Many zeros',
    // SOURCE: compare/southeast-asia.astro rate.indonesia = { cost: 2, cashLean: 'cash', cashTag: "Mostly cash", cur: 'Rupiah', curNote: "many zeros" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (2).
    // around <- the Indonesia guide's own taxi spoke (caution: 'medium'). currency <- curNote "many zeros" (see currency-tier rule in the file header).
  },
  'philippines': {
    verdict: 'cash-first',
    ease: 'cash-first', cash: 'cash-heavy', cost: 'moderate', around: 'some-caution', currency: 'stable',
    // SOURCE: compare/southeast-asia.astro rate.philippines = { cost: 2, cashLean: 'cash', cashTag: "Mostly cash", cur: 'Peso', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (2).
    // around <- the Philippines guide's own taxi spoke (caution: 'medium'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'singapore': {
    verdict: 'easy-money',
    ease: 'easy', cash: 'light', cost: 'expensive', around: 'honest', currency: 'stable',
    // SOURCE: compare/southeast-asia.astro rate.singapore = { cost: 4, cashLean: 'card', cashTag: "Card-first", cur: 'Dollar', curNote: "S$" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (4).
    // around <- the Singapore guide's own taxi spoke (caution: 'low'). currency <- curNote "S$" (see currency-tier rule in the file header).
  },
  'united-kingdom': {
    verdict: 'easy-money',
    ease: 'very-easy', cash: 'near-cashless', cost: 'pricier', around: 'honest', currency: 'stable',
    // SOURCE: compare/western-europe.astro rate.united-kingdom = { cost: 3, cashLean: 'card', cashTag: "Nearly cashless", cur: 'Pound', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (3).
    // around <- the United Kingdom guide's own taxi spoke (caution: 'low'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'france': {
    verdict: 'easy-money',
    ease: 'easy', cash: 'light', cost: 'pricier', around: 'honest', currency: 'stable',
    // SOURCE: compare/western-europe.astro rate.france = { cost: 3, cashLean: 'card', cashTag: "Card-friendly", cur: 'Euro', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (3).
    // around <- the France guide's own taxi spoke (caution: 'low'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'netherlands': {
    verdict: 'easy-money',
    ease: 'easy', cash: 'light', cost: 'pricier', around: 'some-caution', currency: 'stable',
    // SOURCE: compare/western-europe.astro rate.netherlands = { cost: 3, cashLean: 'card', cashTag: "Card and contactless", cur: 'Euro', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (3).
    // around <- the Netherlands guide's own taxi spoke (caution: 'medium'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'ireland': {
    verdict: 'easy-money',
    ease: 'easy', cash: 'light', cost: 'pricier', around: 'honest', currency: 'stable',
    // SOURCE: compare/western-europe.astro rate.ireland = { cost: 3, cashLean: 'card', cashTag: "Card-friendly", cur: 'Euro', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (3).
    // around <- the Ireland guide's own taxi spoke (caution: 'low'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'morocco': {
    verdict: 'cash-first',
    ease: 'cash-first', cash: 'cash-heavy', cost: 'moderate', around: 'some-caution', currency: 'minor-wrinkle',
    currencyNote: 'Closed currency',
    // SOURCE: compare/africa.astro rate.morocco = { cost: 2, cashLean: 'cash', cashTag: "Cash-first", cur: 'Dirham', curNote: "closed currency" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (2).
    // around <- the Morocco guide's own taxi spoke (caution: 'medium'). currency <- curNote "closed currency" (see currency-tier rule in the file header).
  },
  'south-africa': {
    verdict: 'easy-money',
    ease: 'easy', cash: 'light', cost: 'moderate', around: 'some-caution', currency: 'stable',
    // SOURCE: compare/africa.astro rate.south-africa = { cost: 2, cashLean: 'card', cashTag: "Card-friendly", cur: 'Rand', curNote: "" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (2).
    // around <- the South Africa guide's own taxi spoke (caution: 'medium'). currency <- curNote "" (see currency-tier rule in the file header).
  },
  'namibia': {
    verdict: 'mixed-carry-cash',
    ease: 'mixed', cash: 'cash-heavy', cost: 'moderate', around: 'some-caution', currency: 'minor-wrinkle',
    currencyNote: 'Rand also works',
    // SOURCE: compare/africa.astro rate.namibia = { cost: 2, cashLean: 'cash', cashTag: "Cash outside towns", cur: 'Namibian dollar', curNote: "rand also works" }.
    // ease/cash <- cashLean + cashTag per the mapping rule above. cost <- the region page's own cost dot (2).
    // around <- the Namibia guide's own taxi spoke (caution: 'medium'). currency <- curNote "rand also works" (see currency-tier rule in the file header).
  },
  'mexico': {
    verdict: 'cash-first',
    ease: 'cash-first', cash: 'cash-heavy', cost: 'budget', around: 'some-caution', currency: 'stable',
    // FRESH RATING (no region cluster covers Mexico). SOURCE: src/data/mexico.js
    // signals: { cardFriendliness: 2, cashNeed: 4 }. ease <- cardFriendliness, cash <- cashNeed (see mapping rule above).
    // cost <- cash.styles Mid-range (per + room) = $160/day, banded per the COST BANDING rule above.
    // around <- the guide's own taxi spoke (caution: 'medium').
  },
  'costa-rica': {
    verdict: 'mixed-carry-cash',
    ease: 'mixed', cash: 'carry-some', cost: 'pricier', around: 'some-caution', currency: 'minor-wrinkle',
    currencyNote: 'Dollars also work',
    // FRESH RATING (no region cluster covers Costa Rica). SOURCE: src/data/costa-rica.js
    // signals: { cardFriendliness: 3, cashNeed: 3 }. ease <- cardFriendliness, cash <- cashNeed (see mapping rule above).
    // cost <- cash.styles Mid-range (per + room) = $250/day, banded per the COST BANDING rule above.
    // around <- the guide's own taxi spoke (caution: 'medium').
  },
  'dominican-republic': {
    verdict: 'mixed-carry-cash',
    ease: 'mixed', cash: 'carry-some', cost: 'pricier', around: 'some-caution', currency: 'minor-wrinkle',
    currencyNote: 'Dollars also work',
    // FRESH RATING (no region cluster covers Dominican Republic). SOURCE: src/data/dominican-republic.js
    // signals: { cardFriendliness: 3, cashNeed: 3 }. ease <- cardFriendliness, cash <- cashNeed (see mapping rule above).
    // cost <- cash.styles Mid-range (per + room) = $260/day, banded per the COST BANDING rule above.
    // around <- the guide's own taxi spoke (caution: 'medium').
  },
  'india': {
    verdict: 'cash-first',
    ease: 'cash-first', cash: 'cash-heavy', cost: 'moderate', around: 'some-caution', currency: 'stable',
    // FRESH RATING (no region cluster covers India). SOURCE: src/data/india.js
    // signals: { cardFriendliness: 2, cashNeed: 4 }. ease <- cardFriendliness, cash <- cashNeed (see mapping rule above).
    // cost <- cash.styles Mid-range (per + room) = $180/day, banded per the COST BANDING rule above.
    // around <- the guide's own taxi spoke (caution: 'medium').
  },
  'canada': {
    verdict: 'easy-money',
    ease: 'easy', cash: 'light', cost: 'expensive', around: 'honest', currency: 'stable',
    // FRESH RATING (no region cluster covers Canada). SOURCE: src/data/canada.js
    // signals: { cardFriendliness: 4, cashNeed: 2 }. ease <- cardFriendliness, cash <- cashNeed (see mapping rule above).
    // cost <- cash.styles Mid-range (per + room) = $330/day, banded per the COST BANDING rule above.
    // around <- the guide's own taxi spoke (caution: 'low').
  },
  'jamaica': {
    verdict: 'mixed-carry-cash',
    ease: 'mixed', cash: 'carry-some', cost: 'pricier', around: 'high-caution', currency: 'minor-wrinkle',
    currencyNote: 'Confirm JMD vs USD',
    // FRESH RATING (no region cluster covers Jamaica). SOURCE: src/data/jamaica.js
    // signals: { cardFriendliness: 3, cashNeed: 3 }. ease <- cardFriendliness, cash <- cashNeed (see mapping rule above).
    // cost <- cash.styles Mid-range (per + room) = $260/day, banded per the COST BANDING rule above.
    // around <- the guide's own taxi spoke (caution: 'high').
  },
  'bahamas': {
    verdict: 'mixed-carry-cash',
    ease: 'mixed', cash: 'carry-some', cost: 'expensive', around: null, currency: 'minor-wrinkle',
    currencyNote: 'USD works at par',
    // FRESH RATING (no region cluster covers The Bahamas). SOURCE: src/data/bahamas.js
    // signals: { cardFriendliness: 3, cashNeed: 3 }. ease <- cardFriendliness, cash <- cashNeed (see mapping rule above).
    // cost <- cash.styles Mid-range (per + room) = $340/day, banded per the COST BANDING rule above.
    // around <- no taxi spoke on this guide.
  },
  'australia': {
    verdict: 'easy-money',
    ease: 'very-easy', cash: 'near-cashless', cost: 'expensive', around: 'honest', currency: 'stable',
    // FRESH RATING (no region cluster covers Australia). SOURCE: src/data/australia.js
    // signals: { cardFriendliness: 5, cashNeed: 1 }. ease <- cardFriendliness, cash <- cashNeed (see mapping rule above).
    // cost <- cash.styles Mid-range (per + room) = $310/day, banded per the COST BANDING rule above.
    // around <- the guide's own taxi spoke (caution: 'low').
  },
  'new-zealand': {
    verdict: 'easy-money',
    ease: 'very-easy', cash: 'near-cashless', cost: 'pricier', around: 'honest', currency: 'stable',
    // FRESH RATING (no region cluster covers New Zealand). SOURCE: src/data/new-zealand.js
    // signals: { cardFriendliness: 5, cashNeed: 1 }. ease <- cardFriendliness, cash <- cashNeed (see mapping rule above).
    // cost <- cash.styles Mid-range (per + room) = $280/day, banded per the COST BANDING rule above.
    // around <- the guide's own taxi spoke (caution: 'low').
  },
  'poland': {
    verdict: 'easy-money',
    ease: 'easy', cash: 'light', cost: 'moderate', around: 'honest', currency: 'minor-wrinkle',
    currencyNote: 'Not on the euro',
    // FRESH RATING (no region cluster covers Poland). SOURCE: src/data/poland.js
    // signals: { cardFriendliness: 4, cashNeed: 2 }. ease <- cardFriendliness, cash <- cashNeed (see mapping rule above).
    // cost <- cash.styles Mid-range (per + room) = $210/day, banded per the COST BANDING rule above.
    // around <- the guide's own taxi spoke (caution: 'low').
  },
  'cambodia': {
    verdict: 'cash-first',
    ease: 'cash-first', cash: 'cash-heavy', cost: 'budget', around: 'honest', currency: 'minor-wrinkle',
    currencyNote: 'Riel for change',
    // FRESH RATING (no region cluster covers Cambodia). SOURCE: src/data/cambodia.js
    // signals: { cardFriendliness: 2, cashNeed: 4 }. ease <- cardFriendliness, cash <- cashNeed (see mapping rule above).
    // cost <- cash.styles Mid-range (per + room) = $120/day, banded per the COST BANDING rule above.
    // around <- the guide's own taxi spoke (caution: 'low').
  },
  'laos': {
    verdict: 'cash-first',
    ease: 'cash-first', cash: 'cash-heavy', cost: 'budget', around: 'honest', currency: 'volatile',
    // FRESH RATING (no region cluster covers Laos). SOURCE: src/data/laos.js
    // signals: { cardFriendliness: 1, cashNeed: 5 }. ease <- cardFriendliness, cash <- cashNeed (see mapping rule above).
    // cost <- cash.styles Mid-range (per + room) = $110/day, banded per the COST BANDING rule above.
    // around <- the guide's own taxi spoke (caution: 'low').
  },
  'el-salvador': {
    verdict: 'mixed-carry-cash',
    ease: 'mixed', cash: 'cash-heavy', cost: 'budget', around: null, currency: 'stable',
    // FRESH RATING (no region cluster covers El Salvador). SOURCE: src/data/el-salvador.js
    // signals: { cardFriendliness: 3, cashNeed: 4 }. ease <- cardFriendliness, cash <- cashNeed (see mapping rule above).
    // cost <- cash.styles Mid-range (per + room) = $170/day, banded per the COST BANDING rule above.
    // around <- no taxi spoke on this guide.
  },
  'georgia': {
    verdict: 'easy-money',
    ease: 'easy', cash: 'light', cost: 'budget', around: 'some-caution', currency: 'stable',
    // FRESH RATING (no region cluster covers Georgia). SOURCE: src/data/georgia.js
    // signals: { cardFriendliness: 4, cashNeed: 2 }. ease <- cardFriendliness, cash <- cashNeed (see mapping rule above).
    // cost <- cash.styles Mid-range (per + room) = $135/day, banded per the COST BANDING rule above.
    // around <- the guide's own taxi spoke (caution: 'medium').
  },
  'sri-lanka': {
    verdict: 'cash-first',
    ease: 'cash-first', cash: 'cash-heavy', cost: 'budget', around: 'some-caution', currency: 'stable',
    // FRESH RATING (no region cluster covers Sri Lanka). SOURCE: src/data/sri-lanka.js
    // signals: { cardFriendliness: 2, cashNeed: 4 }. ease <- cardFriendliness, cash <- cashNeed (see mapping rule above).
    // cost <- cash.styles Mid-range (per + room) = $130/day, banded per the COST BANDING rule above.
    // around <- the guide's own taxi spoke (caution: 'medium').
  },
  'aruba': {
    verdict: 'easy-money',
    ease: 'easy', cash: 'light', cost: 'expensive', around: 'some-caution', currency: 'minor-wrinkle',
    currencyNote: 'USD works at par',
    // FRESH RATING (no region cluster covers Aruba). SOURCE: src/data/aruba.js
    // signals: { cardFriendliness: 4, cashNeed: 2 }. ease <- cardFriendliness, cash <- cashNeed (see mapping rule above).
    // cost <- cash.styles Mid-range (per + room) = $470/day, banded per the COST BANDING rule above.
    // around <- the guide's own taxi spoke (caution: 'medium').
  },
};

export const scorecardFor = (slug) => scorecards[slug] || null;
