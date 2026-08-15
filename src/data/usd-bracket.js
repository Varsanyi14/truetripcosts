// THE USD BRACKET. The quiet "(~$340)" that sits beside a figure this site
// states in a country's own currency, so a reader who thinks in dollars never
// has to stop and do the sum.
//
// WHAT THIS FILE IS NOT, AND THE REASON IT MATTERS MOST. It is not a rate
// source. There is exactly one of those on this site: the daily snapshot the
// Worker refreshes into KV and the pages read from /api/rates, with the baked
// fxFallback.js snapshot as its safety net. Both are already read, once, by the
// currency anchor panel in CountryBriefing.astro. This module does arithmetic
// and formatting on a rate it is handed. It fetches nothing, imports no rate
// table, and holds no numbers of its own. A second rate source is how two
// figures on one page start disagreeing, and it is the one thing a helper like
// this must never quietly become.
//
// THE FIVE RULES IT EXISTS TO KEEP:
//
//   1. ALWAYS APPROXIMATE. Every string it returns carries a "~". A bracket is
//      an aid, never a quote, and it should never be able to read as one.
//
//   2. NO FALSE PRECISION. A conversion of 8.73 reads "~$9", not "~$8.73". The
//      mid-market rate is a daily midpoint and the reader's own bank will land
//      somewhere below it, so cents are precision the number has not earned.
//      Cents are never printed, and the rounding gets deliberately coarser as
//      the figure grows: nobody needs a cash withdrawal priced to the dollar.
//
//   3. ABSENCE IS NOT ZERO. Handed no usable rate, it returns an empty string
//      rather than a guess, a zero, or a figure that would look authoritative
//      while being nothing of the kind. A missing bracket is honest. A wrong
//      one is not, and no bracket has ever been the worse of the two.
//
//   4. NEVER CONVERT DOLLARS INTO DOLLARS. A figure already in US dollars gets
//      nothing. Currencies pegged one to one with the dollar are excluded
//      upstream, by the same FX_PAR list that already stops the currency panel
//      offering a conversion in Ecuador or the Bahamas, so a caller that reads
//      its rate from that panel inherits the exclusion for free.
//
//   5. IT CARRIES ITS SOURCE'S FRESHNESS, NOT ITS OWN. This file has no date in
//      it because it has no rate in it. Whoever hands over the rate hands over
//      the date label with it, and the calling copy says when it was checked,
//      exactly as the currency panel already does.
//
// PHASE 1 uses it for one figure: the ATM cash line in the calculator, the only
// number that module states in the local currency rather than in dollars.
// Figures written into guide prose (entry charges, reseller prices, keyFacts)
// are deliberately untouched. Those are sentences rather than held values, and
// converting them means parsing prose, which is its own job with its own
// accuracy problems. That is phase 2.

// How coarsely a dollar figure rounds, by size. Small money keeps whole dollars;
// bigger money loses the digits nobody would trust anyway. Chosen so a bracket
// never implies more accuracy than a mid-market midpoint can support.
function stepFor(v) {
  if (v >= 1000) return 50;
  if (v >= 100) return 10;
  if (v >= 20) return 5;
  return 1;
}

// The bare conversion, kept separate so it can be read and tested on its own.
// `unitsPerUsd` is how many units of the local currency equal one US dollar,
// which is the shape both /api/rates and fxFallback.js already use. Returns
// null rather than NaN or 0 for anything it cannot honestly convert.
export function usdFromLocal(amount, unitsPerUsd) {
  const a = Number(amount);
  const r = Number(unitsPerUsd);
  if (!isFinite(a) || !isFinite(r) || r <= 0) return null;
  const v = a / r;
  return isFinite(v) ? v : null;
}

// Rounds a dollar value to something a reader can hold, or returns null where
// there is nothing worth showing. A value that would round to zero returns null
// rather than "~$0": zero is a claim, and the claim would be false.
export function roundUsd(value) {
  const v = Number(value);
  if (!isFinite(v) || v <= 0) return null;
  const n = Math.round(v / stepFor(v)) * stepFor(v);
  return n > 0 ? n : null;
}

// The whole helper, and the only function most callers need: hand it a figure,
// the currency it is stated in, and the units-per-dollar rate for that currency,
// and it returns either a finished bracket or an empty string. Never a partial
// one, never a zero, never a bare number.
export function usdBracket(amount, cur, unitsPerUsd) {
  if (!cur || cur === 'USD') return '';
  const n = roundUsd(usdFromLocal(amount, unitsPerUsd));
  if (n == null) return '';
  return '(~$' + n.toLocaleString('en-US') + ')';
}

// ---------------------------------------------------------------------------
// PHASE 2 ADDITION. Everything above is untouched: same rules, same rounding,
// same refusals. This adds the two shapes prose needs that a single held figure
// never did, and adds nothing else.
//
// RANGES, BECAUSE PROSE IS FULL OF THEM. "10,000 to 20,000 yen" is one price
// with two ends, and it earns one bracket, never two. Either end failing to
// convert kills the whole thing rather than producing half a range, which would
// be the most misleading output available: a reader who sees a bracket on one
// end will read the other as the same currency. Where both ends round to the
// same dollar figure the range collapses, so a bracket never reads "~$9 to $9".
//
// NO PARENTHESES, BECAUSE THE SENTENCE OFTEN HAS ITS OWN. Roughly a sixth of the
// figures this site states in prose already sit inside an aside the writer
// opened: "a low fee (around 110 to 220 yen)". Adding a bracket inside that
// bracket gives "(around 110 to 220 yen (~$1))", which is noisier than the sum
// it saves. So the caller is handed the text and decides on the punctuation, and
// an aside gets "(around 110 to 220 yen, ~$1)" instead. The "~" is not optional
// in either shape, for the reason rule 1 gives.
export function usdText(lo, hi, cur, unitsPerUsd) {
  if (!cur || cur === 'USD') return '';
  const a = roundUsd(usdFromLocal(lo, unitsPerUsd));
  if (a == null) return '';
  if (hi == null) return '~$' + a.toLocaleString('en-US');
  const b = roundUsd(usdFromLocal(hi, unitsPerUsd));
  if (b == null) return '';
  if (b === a) return '~$' + a.toLocaleString('en-US');
  return '~$' + a.toLocaleString('en-US') + ' to $' + b.toLocaleString('en-US');
}
