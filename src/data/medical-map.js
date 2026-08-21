// THE MEDICAL EXPOSURE WORLD MAP. What happens to a US traveler's money if they get
// sick there, by country. Feeds src/components/MedicalMap.astro on /medical-costs and
// scripts/check-medical-map.mjs, which audits the same derivation this file exports.
//
// This file is the whole honesty spine of the map, the same job hotel-tax-map.js does
// for /hotel-tax-map, and the rails are enforced by the shape of the data rather than
// by a reviewer remembering them.
//
// ============================================================================
// RAIL 1. THE COLOUR ENCODES A CATEGORY OF EXPOSURE, NEVER A COST.
// ============================================================================
// This map is deliberately NOT a cost map. Routine-care prices are mostly unsourceable
// to the standard the health wave holds (which is why most medical-costs spokes carry
// no figure at all, by named decision in check-health.mjs), and an emergency has no
// single honest figure anywhere. A price gradient here would be fabricated precision
// wearing a legend. So each country is coloured by the CATEGORY of what happens to
// your money, a claim its own spoke already makes in sourced prose, and nothing on
// this map encodes an amount. A "danger score" or any blended risk number is equally
// forbidden: the categories are different shapes, not different severities, and the
// component must never rank them.
//
// ============================================================================
// RAIL 2. THE TAG IS A POINTER TO THE SPOKE, NOT A SECOND OPINION.
// ============================================================================
// Every live medical-costs spoke carries two fields this map reads:
//   exposureCategory  one of the CATEGORIES keys below
//   exposureQuote     the sentence in THAT SPOKE'S OWN PROSE that justifies the tag
// The quote is a pointer, not a copy, exactly the careFirst mechanism in
// check-health.mjs: the gate fails if the quoted sentence no longer appears verbatim
// in the spoke's prose, so a rewritten page cannot leave a stale colour behind it,
// and the map can never assert something the page does not. The tag was assigned by
// reading the spoke, not from general knowledge of the country, and MAIN verified
// each quote against its page before the map first coloured (Aug 2026).
//
// ============================================================================
// RAIL 3. ABSENCE IS NEVER A COLOUR.
// ============================================================================
// A country with no live medical-costs spoke has made no claim, so it renders in the
// explicit not-yet-checked grey, the same grey and the same meaning as the hotel tax
// map's pending state. It is never a default category and it never reads as "safe" or
// "cheap". The health wave lands in batches, so grey shrinks as spokes ship, with no
// edit to this file: entries are DERIVED from the spokes, never hand-listed, so the
// map cannot invent a country and cannot outrun the verified pages.
//
// ============================================================================
// RAIL 4. A COUNTRY GETS ONE CATEGORY, THE ONE ITS SPOKE LEADS WITH.
// ============================================================================
// Several pages honestly assert two shapes (Norway is full-cost billing AND real
// evacuation distance; Jamaica is cash-before-treatment AND the flight to Florida).
// The rule, set in the build brief: the tag is the claim the spoke LEADS with, and
// no blended category may be invented. The runner-up claim still reaches the reader,
// because the row under the map quotes the spoke and links to it. Countries whose
// call was genuinely close are flagged in the gate's notes for MAIN to re-rule.

// --- the categories ----------------------------------------------------------
// A fixed, small set. Each one is a categorical claim a spoke actually makes, in the
// order the rows render. Fills are hue-distinct rather than a ramp, because the
// categories are different SHAPES of exposure, not steps on a scale: a ramp would
// smuggle a severity ranking in through the ink. Values are spread in lightness as
// well as hue so adjacent fills stay tellable apart in more kinds of colour vision,
// and every fill is distinct from every state fill below, which the gate asserts.
export const CATEGORIES = {
  payInFull: {
    label: 'Pay in full, no local safety net',
    fill: '#0A5644',
    legend: 'The public system covers its own people and you are outside it, billed the whole amount as a private or non-resident patient.',
  },
  freeUntilAdmitted: {
    label: 'Free at the door, charged if admitted',
    fill: '#6E93B8',
    legend: 'The walk-in and the emergency visit are free to visitors. The exemption stops when care continues as an admission, and the inpatient bill is real.',
  },
  accidentsOnly: {
    label: 'Accidents yes, illness no',
    fill: '#8A6B9E',
    legend: 'A no-fault scheme covers visitors injured in an accident. Falling ill is not covered at all, so which one happened decides the bill.',
  },
  depositFirst: {
    label: 'Deposit before treatment',
    fill: '#B05A4A',
    legend: 'Providers want payment, a deposit or proof of insurance before they will treat or admit you, and care can be refused without it.',
  },
  evacuationIsTheCost: {
    label: 'Evacuation is the real cost',
    fill: '#C0803F',
    legend: 'The serious case is treated somewhere else, so the bill that matters is the transfer or the flight, not the local ward.',
  },
  routineAffordable: {
    label: 'Routine affordable, cover the big event',
    fill: '#9DB56E',
    legend: 'Everyday care is accessible and inexpensive enough to pay for yourself. Cover is for the rare catastrophe and the flight home.',
  },
};
export const CATEGORY_ORDER = Object.keys(CATEGORIES);

// The non-category fill. Same grey, same meaning, as the hotel tax map's pending
// state: the absence of our work, never the absence of a cost.
export const STATES = {
  unchecked: { fill: '#E7E4DC', label: 'Not yet checked' },
};

// --- the single gate between a spoke and a fill ------------------------------
// A country colours ONLY if its live medical-costs spoke carries a category this file
// defines. Everything else, including a live spoke with no tag yet, falls through to
// not-yet-checked. One function, so it can be tested and so no component branch can
// route around it, the same shape as colours() in hotel-tax-map.js.
export const colours = (e) => !!e && !!CATEGORIES[e.category];
export const fillFor = (e) => (colours(e) ? CATEGORIES[e.category].fill : STATES.unchecked.fill);

// --- deriving the entries -----------------------------------------------------
// One derivation, exported, used by BOTH the component and the gate so they audit
// the same thing rather than two hand-kept copies. Nothing here is typed: the
// country, the ISO, the spoke link, the category and the quote all come from the
// country data, so the map reflects what the site already publishes the day a spoke
// lands or changes, and it cannot fabricate a country that does not exist.
export function deriveEntries(countries) {
  return countries
    .filter(c => c.live)
    .map(c => {
      const sp = (c.spokes || []).find(s => s && s.slug === 'medical-costs' && s.live !== false);
      if (!sp) return null;
      return {
        iso: (c.iso2 || '').toUpperCase(),
        country: c.name,
        slug: c.slug,
        spoke: sp.slug,
        category: sp.exposureCategory || null,
        quote: sp.exposureQuote || null,
        checkedISO: sp.checkedISO || null,
      };
    })
    .filter(Boolean)
    .filter(e => e.iso);
}
