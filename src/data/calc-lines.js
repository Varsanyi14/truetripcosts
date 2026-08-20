// THE CALCULATOR'S SOURCED LINES, the detail behind the breadth reveal's glance.
//
// WHY THIS SITS BESIDE breadth.js RATHER THAN INSIDE IT. The reveal and the calculator are
// the same content at two depths: the reveal names a RULE ("charged per person, per night"),
// the calculator prices it against the traveler's own nights and travelers. Same sources,
// two readings. Keeping them in two modules that read the same fields means neither can
// quietly drift into computing something the other does not know about, and it keeps each
// one small enough to audit in a sitting.
//
// THIS MODULE READS. IT DOES NOT GENERATE. Every string it returns is either a field from a
// country's own guide, quoted, or a label written here to say what that field IS. Where a
// field is missing the function returns null and the calculator renders no line, because
// absence is not zero and a hidden honest line beats a shown invented one.
//
// WHAT IT DELIBERATELY DOES NOT DO: arithmetic. Not one figure here is multiplied, summed
// or converted. The live money math has exactly one home, the calculator's own render(), and
// a second implementation living in a data file is how two numbers on one page start
// disagreeing. Everything here is categorical, a quoted range, or a tier name.
//
// THE UNIT RULES THAT GOVERN WHAT MAY BE PRICED AT ALL:
//   Entry charges are ONE-OFF PER PERSON. They scale with travelers and never with nights.
//   Lodging taxes are per night. They are the calculator's existing tax engine, not here.
//   Insurance, season, VAT-refund availability and service charge are CATEGORICAL. They are
//     tiers and verdicts, never dollar figures, because no honest dollar figure exists.
//   Tips add NOTHING to any total. The daily spend figure already counts them.
//   Departure tax is a TRAP, not a line: it is inside the airfare, so pricing it would
//     double-count against the flight the traveler already entered.

import { entryChargesFor, isBillable, isNamedZero, isUnpriced } from './entry-charges.js';
import { seasons } from './seasons.js';
import { tipping as tippingRows } from './tipping.js';
import { isSchengen, borderStatus } from './schengen.js';

// A7, VAT and GST refunds.
//
// The brief asked for availability plus rate plus threshold from `taxfree{}`. Those fields
// do not exist: taxfree is a heading and a prose paragraph, and the rate and threshold are
// sentences inside it. Parsing figures out of prose would be inventing structure that was
// never verified as structure, so it is not done here.
//
// Three guides DO carry the refund as a structured, dated, sourced keyFact, and those three
// render the real detail. Everywhere else the line says only that the guide covers it and
// points at the section, with no rate and no threshold on screen. That is absence-is-not-zero
// applied to a field that exists as words rather than as data.
const VAT_REFUND_FACTS = {
  philippines: 'Tourist VAT refund (RA 12079)',
  'south-africa': 'Tourist VAT refund',
  taiwan: 'Tourist VAT refund (TRS)',
};

// How a service-charge frequency reads as the double-tipping guard (A8). Categorical by
// design: there is no figure here and there should not be one.
const SERVICE_CHARGE = {
  always: 'A service charge is always on the bill here',
  usually: 'A service charge is usually already on the bill',
  often: 'A service charge is often already on the bill',
  sometimes: 'A service charge is sometimes on the bill',
  rarely: 'A service charge is rarely printed here',
};

// What each insurance tier means (A2). A named tier that moves no total, ever: the calculator
// prices no policy, because a premium depends on age, cover and trip length, none of which
// this page asks for.
const INSURANCE = {
  low: { label: 'Lower priority', note: 'Good public healthcare and low medical costs for visitors, so cover is about cancellations and belongings more than hospital bills.' },
  medium: { label: 'Worth carrying', note: 'Treatment as a visitor is chargeable and can run to real money, so medical cover earns its place.' },
  high: { label: 'Strongly advised', note: 'Medical costs for visitors are high or care is far from major towns, so cover and evacuation matter here.' },
};

const plain = (s) => String(s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

// Joins a clause onto quoted prose without doubling or dropping its terminal punctuation.
// The keyFacts values are written as sentences and some end in a period while others do not,
// so a plain concatenation produced both "not being collected It adds nothing" and
// "before arrival.. One-off". The same helper exists in breadth.js for the same reason.
const sentence = (lead, tail) => {
  const a = plain(lead);
  if (!a) return plain(tail);
  if (!tail) return a;
  return a.replace(/[.;,]\s*$/, '') + '. ' + plain(tail);
};

// Puts the percent sign back on a bare leading figure ("5 to 10" becomes "5 to 10%"), the
// unit this column already carries site-wide. Anything already carrying a percent is left
// exactly as the desk wrote it, and a value that does not open with a number ("not
// expected", "round up") is never touched. It changes no number and invents none.
const pct = (s) => {
  const v = String(s || '');
  if (!v) return '';
  if (v.includes('%')) return v;
  return /\d/.test(v) ? v.replace(/(\d+)(?!.*\d)/, '$1%') : v;
};

export function calcLinesFor(c) {
  if (!c) return {};
  const out = {};

  // ----- A1, entry and border charges. One-off, per person. -----
  const entry = entryChargesFor(c);
  const billable = entry.filter(isBillable);
  if (billable.length) {
    out.entryCharges = billable.map(e => ({
      label: e.label,
      // The guide's own prose, quoted, so ranges, conditions and currencies survive intact.
      value: plain(e.value),
      effective: e.effective,
      source: e.source,
      checked: e.checked,
    }));
  }
  // Real charges that only bite on some trips. Named, never folded into a headline, because
  // most readers of Ecuador's guide are not going to the Galapagos.
  const conditional = entry.filter(e => e.kind === 'conditional');
  if (conditional.length) {
    out.entryConditional = conditional.map(e => ({
      label: e.label,
      value: sentence(e.value, 'Not counted in the total above, because it does not apply to most trips here.'),
      source: e.source,
    }));
  }
  // A proposed fee is a WATCH-FLAG ZERO, not a charge. Thailand's has sat uncollected for
  // years, and pricing it would overcharge every reader for a fee nobody pays.
  const proposed = entry.filter(e => e.kind === 'proposed');
  if (proposed.length) {
    out.entryProposed = proposed.map(e => ({
      label: e.label,
      value: sentence(e.value, 'It adds nothing to the total until it is actually collected.'),
    }));
  }
  // A real paid charge with no sourceable figure. It is NOT in the total above, and the
  // reason is the opposite of a zero's: there is nothing to add because we cannot price
  // it, not because there is nothing to pay. Saying that out loud is the whole point of
  // the kind, so the sentence appended here names the gap rather than hiding it.
  const unpriced = entry.filter(isUnpriced);
  if (unpriced.length) {
    out.entryUnpriced = unpriced.map(e => ({
      label: e.label,
      value: sentence(e.value, 'Not in the total above, because we will not publish a figure we cannot source. It is a real cost, so budget for it.'),
      source: e.source,
      checked: e.checked,
    }));
  }
  // A condition of entry with no fee we can source. Named as a requirement, never priced.
  const required = entry.filter(e => e.kind === 'requirement');
  if (required.length) {
    out.entryRequirements = required.map(e => ({ label: e.label, value: plain(e.value), source: e.source }));
  }
  // A documented route to paying nothing.
  const exemptions = entry.filter(e => e.kind === 'exemption');
  if (exemptions.length) {
    out.entryExemptions = exemptions.map(e => ({ label: e.label, value: plain(e.value) }));
  }

  // ----- A3, named zeros. An explicit sourced zero only. -----
  const zeros = entry.filter(isNamedZero);
  if (zeros.length) {
    out.namedZeros = zeros.map(e => ({ label: e.label, value: plain(e.value), source: e.source, checked: e.checked }));
  }
  // The shared Schengen position, one fact across seventeen guides. The EES is explicitly no
  // fee and no form, and ETIAS is not running, which makes both genuine named zeros rather
  // than an absence of data.
  if (isSchengen(c.slug)) {
    out.schengen = {
      ees: plain(borderStatus.ees),
      etias: plain(borderStatus.etias),
      checked: borderStatus.checked,
    };
  }

  // ----- A5, season tier. Categorical, near the hotel line. -----
  // seasons.js holds no figures on purpose: a single number for what a country costs in a
  // given month is not a sourceable fact. So this names the windows and says plainly that
  // the room price the traveler typed is NOT adjusted for season. Telling them the model
  // does not do something is more useful than a modelled swing we would have invented.
  const s = seasons.find(x => x.slug === c.slug);
  if (s && (s.peak || s.off || s.cheapestWindow)) {
    out.season = {
      peak: plain(s.peak),
      cheapest: plain(s.cheapestWindow || s.off),
      confidence: s.confidence || '',
    };
  }

  // ----- A6 tips scope, and A8 the service-charge guard. -----
  const t = tippingRows.find(x => x.slug === c.slug);
  if (t) {
    out.tips = {
      tier: t.tier,
      none: t.tierRank === 0,
      // The desk's own restaurant-scoped range. Scoped to sit-down meals, so it is never
      // applied to spend it does not cover: street food, a taxi, a convenience store.
      scope: pct(t.addsPercent),
      restaurant: pct(t.restaurant),
      // A8, the double-tipping guard. Categorical, no figure.
      serviceCharge: SERVICE_CHARGE[t.serviceCharge] || '',
      onTop: plain(t.tipOnTop),
    };
  }

  // ----- A7, VAT and GST refund. Structured where it exists, a pointer otherwise. -----
  const vatLabel = VAT_REFUND_FACTS[c.slug];
  const vatFact = (vatLabel && Array.isArray(c.keyFacts)) ? c.keyFacts.find(k => k.label === vatLabel) : null;
  if (vatFact) {
    out.vatRefund = {
      kind: 'sourced',
      label: vatFact.label,
      value: sentence(vatFact.value, 'We put no dollar figure on it, because that depends on what you buy.'),
      source: vatFact.source,
      checked: vatFact.checked,
    };
  } else if (c.taxfree && (c.taxfree.heading || c.taxfree.text)) {
    // Availability only. No rate, no threshold, no estimated refund: those live in prose on
    // this same page, and lifting figures out of prose would be fabricated structure.
    out.vatRefund = { kind: 'pointer', heading: plain(c.taxfree.heading) };
  }

  // ----- A2, insurance. A named tier that moves no total. -----
  if (c.insuranceLevel && INSURANCE[c.insuranceLevel]) {
    out.insurance = { level: c.insuranceLevel, ...INSURANCE[c.insuranceLevel] };
  }

  return out;
}
