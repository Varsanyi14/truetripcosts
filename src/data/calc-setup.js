// SHARED CALC SETUP, used by both the per-country page (CountryBriefing.astro) and the
// /calculator/[slug] wizard (CalcWizard.astro).
//
// EXTRACTED from CountryBriefing.astro's frontmatter with NO behaviour change: same fields,
// same fallbacks, same wording. Two pages build the estimator's inputs now, so this is a
// shared function instead of two copies that could quietly drift apart.
//
// Returns:
//   calcData  the plain object the estimator engine expects
//   calcJson  that object, JSON-stringified and escaped for a safe <script type="application/json"> body
//   tipCalc   the tipping line shown in the "on the ground" breakdown
import { tipping as tippingRows } from './tipping.js';
import { flightPlaceholderFor } from './flight-defaults.js';
import { fallbackFxPct } from './cards.js';

// ----- the tipping line in the calculator -----
// Tips are the classic hidden cost, so the calculator names the local norm rather
// than leaving it buried inside the daily spend figure.
//
// It reads the SAME desk row that /tipping-compared already publishes
// (src/data/tipping.js), so there is exactly one source of truth for the call and
// no second per-country field to drift out of sync. Tier, the restaurant-scoped
// figure and the service-charge caveat are all the desk's own words, already
// dated and confidence-rated in that file, so nothing here is a new judgment.
//
// Two hard rules hold this line honest. It never computes a dollar tip off total
// spend, and it never touches the total: the daily spend styles already count
// tips (see the on-the-ground line's own note), so an added figure would both
// fabricate a rate and double count. Where the desk has no row for a country yet,
// the line degrades to a pointer at that country's tipping guide and claims nothing.
const TIP_CHARGE = {
  always: 'A service charge is always on the bill here',
  usually: 'A service charge is usually already on the bill',
  often: 'A service charge is often already on the bill',
  sometimes: 'A service charge is sometimes on the bill',
  rarely: 'A service charge is rarely printed here',
};
function tipOnTopClause(row) {
  const s = String(row.tipOnTop || '').toLowerCase();
  if (s.startsWith('no,')) return 'where it is, that is the tip and nothing goes on top';
  if (s.startsWith('yes')) return 'and a tip on top is still expected';
  return 'and anything on top is optional';
}
// Restores the percent sign on a leading bare figure ("5 to 10" becomes "5 to 10%"),
// the unit this column already carries site-wide. Anything that already states a
// percent is left exactly as the desk wrote it, and a figure that does not open with
// a number ("round up", "not expected") is never touched. It changes no number and
// invents none.
const tipPct = (s) => {
  const v = String(s || '');
  if (v.includes('%')) return v;              // the desk already stated the unit
  return v.replace(/(\d+)(?!.*\d)/, '$1%');   // mark the last figure, e.g. "5 to 10"
};

export function tipCalcFor(c) {
  const tipRow = tippingRows.find(r => r.slug === c.slug) || null;
  return tipRow ? {
    none: tipRow.tierRank === 0,
    tier: tipRow.tier,
    label: tipRow.tierRank === 0 ? 'Tips' : 'Tips, on sit-down meals',
    figure: tipRow.tierRank === 0 ? '$0' : tipPct(tipRow.restaurant),
    note: tipRow.tierRank === 0
      ? 'No tipping culture here, so this line is genuinely zero and the money stays in your pocket.'
      : (TIP_CHARGE[tipRow.serviceCharge] || 'Read the bill first') + ', ' + tipOnTopClause(tipRow)
        + '. Counted inside your on-the-ground spend above, so this is the norm to expect, not a fee on top of the total.',
  } : {
    none: false,
    tier: '',
    label: 'Tips',
    figure: 'See the guide',
    note: 'The desk has not tiered the tipping norm for ' + c.name + ' yet, so the calculator does not put a figure on it.',
  };
}

// Everything the honest-number module needs, handed to the client as inert JSON.
// It asks the traveler nothing about their card, so no card data ships here: just
// the exchange rate, the tourist-tax block, and the default foreign-fee assumption.
export function calcDataFor(c) {
  const flightRough = flightPlaceholderFor(c);
  return {
    name: c.name,
    rate: (c.cash && c.cash.rate) || 1, // local currency units per 1 USD
    cur: (c.cash && c.cash.cur) || "",
    round: (c.cash && c.cash.round) || 100000,
    rateNote: (c.cash && c.cash.rateNote) || "",
    tax: c.tax || null,
    flight: c.flight || null, // verified typical round-trip range, or null when unverified
    // A ROUGH placeholder for the guides with no tracked range, so the flight field is never
    // blank and the card never ships reading as though the trip needs no flight. It is null
    // wherever `flight` above exists, because the tracked figure always wins. The UI must label
    // the two differently: see flight-defaults.js for where the number comes from and why it is
    // a placeholder rather than a claim.
    flightRough: flightRough ? flightRough.usd : null,
    fallbackFxPct,
  };
}

export function calcJsonFor(c) {
  return JSON.stringify(calcDataFor(c)).replace(/</g, "\\u003c");
}

// One call for a page that needs all three: the setup used both by CountryBriefing.astro
// and by the /calculator/[slug] wizard.
export function calcSetupFor(c) {
  return { calcData: calcDataFor(c), calcJson: calcJsonFor(c), tipCalc: tipCalcFor(c) };
}
