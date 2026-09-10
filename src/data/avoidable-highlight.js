// BRIEF-v2-experience-build, Part 2: the country-guide avoidable hook needs one number
// per country, known at build time, for a trip nobody has configured yet (the engine's
// own "default inputs"). calc-engine.js computes the equivalent figures, but only inside
// a browser, reading specific DOM elements CalcWizard.astro/CalcResult.astro render for a
// reader who is actively using the wizard. There is no reader here: this runs once per
// country at build time, before any DOM exists.
//
// So this file re-derives ONLY the pure arithmetic calc-engine.js's render() performs for
// the universal defaults (nights=7, trav=2, the country's own default travel style, room
// not yet paid, no no-fee-card toggle), from the exact same source values CalcWizard.astro
// itself reads (c.cash.styles / c.cash.defaultIndex, cards.js's fallbackFxPct) and
// avoidable.js's own `worth` field, in the same order and with the same rounding calc-
// engine.js uses. It does not touch calc-engine.js, avoidable.js, or calc-lines.js.
//
// THIS IS VERIFIED, NOT ASSUMED. scripts/check-avoidable-highlight.mjs runs the real,
// unmodified calc-engine.js (via jsdom, against a real built /calculator/<slug> page) for
// every live country and asserts this file's numbers match it exactly. If calc-engine.js's
// formula ever changes and this file is not updated to match, that script fails the build
// loudly instead of the hook quietly drifting from what the wizard itself would show.
// Read that script alongside this one before changing either.
import { avoidableFor } from './avoidable.js';
import { fallbackFxPct } from './cards.js';

// Matches calc-engine.js's own initial `state` object exactly: nights: 7, trav: 2. These
// are not per-country facts, so they are not read from any country's data.
const DEFAULT_NIGHTS = 7;
const DEFAULT_TRAV = 2;

// A short, natural-language stand-in for the item's own (more literal) card title, used
// only in the hook's one sentence. Every avoidable item's `.title` is written to read well
// as a card heading ("Paying in dollars at the terminal", "Reseller markup on the entry
// charge"), not as the subject of a sentence ("dynamic currency conversion alone can
// cost..."). There are exactly four possible HARD keys (avoidable.js's own `worth` is only
// ever non-null for these four), so this is a small, fixed, fully-enumerated mapping, not
// per-country hand-authored copy: the same four phrases apply to every country that
// carries that item. The item's own title and action still appear, unchanged, on the
// result page itself.
const HOOK_PHRASE = {
  dcc: 'dynamic currency conversion',
  fees: "your own bank's foreign-transaction and ATM fees",
  form: 'a paid lookalike of the free entry form',
  reseller: "a reseller's markup on the entry charge",
};

// The pure-arithmetic subset of calc-engine.js's render(), for the universal defaults
// only (state.paid = false, state.noFee = false). Line-for-line the same operations, same
// order, same rounding points as src/scripts/calc-engine.js (render(), computeTax() is not
// needed here: the hook never prices tax, only the HARD-tier items, and none of the four
// HARD keys is tax-based).
function defaultTripFigures(c) {
  const styles = (c.cash && c.cash.styles) || [];
  const defaultIndex = (c.cash && c.cash.defaultIndex) || 0;
  const style = styles[defaultIndex] || null;
  const roomUSD = (style && style.room) || 150; // calc-engine.js's own state.room fallback
  const per = (style && style.per) || 0;
  const cashShare = (style && style.cash) || 0;

  const room = roomUSD * DEFAULT_NIGHTS;
  const spend = per * DEFAULT_TRAV * DEFAULT_NIGHTS;
  const cash = spend * cashShare;
  const card = spend - cash;
  const roomOnCard = room; // state.paid defaults to false, so this is never zeroed here
  const cardBaseRaw = roomOnCard + card;

  const cardFxPct = fallbackFxPct; // state.noFee defaults to false
  const cardFee = cardBaseRaw * (cardFxPct / 100);
  const pulls = Math.max(1, Math.ceil(cash / 300));
  const atmFlat = pulls * 5;
  const atmFx = cash * (cardFxPct / 100);
  const atmFee = atmFlat + atmFx;

  return {
    // calc-wizard.js's own HARD-tier mirroring (BRIEF-calc-v2-A2) reads cardBase back out
    // of the ALREADY-ROUNDED hnCardBase display text, never the raw float, before using it
    // to price the DCC range. Rounded here for the same reason, so this file's DCC figure
    // can never disagree with what a reader running the wizard actually sees.
    cardBase: Math.round(cardBaseRaw),
    // calc-engine.js's own avFees line: `shown(cardFee) + shown(atmFee)`, i.e. each fee
    // rounded to a whole dollar separately, then summed; not the sum rounded once.
    fees: Math.round(cardFee) + Math.round(atmFee),
  };
}

// One HARD item's dollar figure at the defaults above, using ONLY avoidable.js's own
// `worth` (never a number this file invents): a live figure for `liveFees`, cardBase times
// the item's own sourced percentage band for `pctCardBase`, or the item's own sourced
// dollar range times the reader's traveler count for `usd`. This is calc-wizard.js's own
// HARD-tier formula (BRIEF-calc-v2-A2), reapplied here at the universal defaults instead
// of the reader's live inputs.
function pricedHardItem(a, figures) {
  if (a.worth.kind === 'liveFees') {
    return { item: a, lo: figures.fees, hi: figures.fees, mid: figures.fees };
  }
  if (a.worth.kind === 'pctCardBase') {
    const lo = Math.round(figures.cardBase * (a.worth.lo / 100));
    const hi = Math.round(figures.cardBase * (a.worth.hi / 100));
    return { item: a, lo, hi, mid: (lo + hi) / 2 };
  }
  // 'usd'
  const mult = a.worth.perPerson ? DEFAULT_TRAV : 1;
  const lo = Math.round(a.worth.lo * mult);
  const hi = Math.round(a.worth.hi * mult);
  return { item: a, lo, hi, mid: (lo + hi) / 2 };
}

// The one thing the country-guide hook needs: whether this country is calm-eligible at
// the defaults (mirrors CalcWizard.astro's own calmEligible: "worth-bearing items other
// than the live fee line" is what a no-fee card cannot zero out), and if not, its single
// largest HARD item, priced and phrased for the hook's one sentence. Never a sum: exactly
// one item, the same "largest by midpoint" rule the result page's own HARD tier uses to
// order itself (BRIEF-calc-v2-A2), just picking the top of that order instead of showing
// the whole list.
export function avoidableHighlightFor(c) {
  const items = avoidableFor(c);
  const hard = items.filter(a => a.worth);
  const otherHardCount = hard.filter(a => a.worth.kind !== 'liveFees').length;
  const calmEligible = otherHardCount === 0;

  if (calmEligible || hard.length === 0) {
    return { calmEligible: true, largest: null, hardCount: hard.length, totalCount: items.length };
  }

  const figures = defaultTripFigures(c);
  const priced = hard.map(a => pricedHardItem(a, figures));
  const top = priced.reduce((best, p) => (p.mid > best.mid ? p : best), priced[0]);

  return {
    calmEligible: false,
    largest: {
      key: top.item.key,
      phrase: HOOK_PHRASE[top.item.key] || top.item.title,
      lo: top.lo,
      hi: top.hi,
    },
    hardCount: hard.length,
    totalCount: items.length,
  };
}
