// LATEST CHECKS: the item list behind the front-door ticker.
//
// WHAT THIS IS. A detector, not a source. It holds no facts of its own. It reads the
// `keyFacts` arrays that already live in the country guides (src/data/<slug>.js), keeps
// only the ones that are true right now and were actually checked, and formats them for
// the strip. Fix a fact in its country file and the strip changes on the next build.
// Nothing is ever re-typed here, so the guide and the front door cannot drift apart.
//
// WHY THE STALENESS SCANNER IS NOT READ HERE. scripts/check-fact-staleness.mjs emits a
// desk to-do list: confirm this, over the day mark, takes effect soon. Those are
// re-check REQUESTS, not confirmed facts. Putting them on the front door would either
// broadcast uncertainty at the visitor or quietly promote a "please re-verify" flag into
// a "checked fact", which is the exact inaccuracy this site exists to oppose. So the
// scanner stays a desk tool and this file reads the guides instead.
//
// THE FILTER, in plain terms: only facts that are true today, and only stated whole.
//   1. The country is live and not blocked.
//   2. status is "enacted". A proposed charge is not a fact yet.
//   3. There is a real `checked` date. The strip shows that date as the fact's own
//      freshness, so a fact without one has nothing honest to show and does not scroll.
//   4. There is no `effective` date, or the `effective` date is on or before today. A
//      future-dated fact (Australia's card surcharge ban on 2026-10-01, Austria's next
//      tax step on 2027-07-01) is real but not yet TRUE, so it stays off the strip
//      rather than being re-phrased into something that sounds current.
//   5. The rendered line fits MAX_ITEM_CHARS. This is a length gate, never a truncation:
//      a fact is shown whole or not at all. Several guide facts carry two or three
//      clauses of caveat (Sri Lanka's ETA, Namibia's visa, South Africa's ETA), and
//      cutting one mid-sentence is how a true fact turns into a false one. Those keep
//      living on their guide pages, which have the room to state them properly.
//   6. One fact per country, most recently checked first, capped at MAX_ITEMS. That is
//      a display choice, not an honesty one: it keeps the strip reading as breadth
//      rather than as three consecutive lines about Ecuador, and keeps one loop of the
//      marquee short enough that a visitor sees more than two countries.
//
// ABSENCE IS NOT ZERO, applied here. If nothing qualifies this returns an empty array
// and the strip does not render at all: no empty box, no placeholder, no "nothing to
// report" that reads as filler. A short honest ticker beats a padded one, and no ticker
// beats a ticker that had to reach.
//
// NEVER add a fact to this file. There is nowhere to put one, by design. If a fact
// should be on the strip, it belongs in its country's own `keyFacts` first, where the
// guide, the tourist-taxes page and the staleness scanner all see it too.

import { countries } from './index.js';

// A ticker line is one line. Facts longer than this are excluded whole rather than cut.
export const MAX_ITEM_CHARS = 130;

// Display cap. Raise it only if a loop of the strip still reads calmly.
export const MAX_ITEMS = 14;

// An ISO date (YYYY-MM-DD) as a short label, e.g. "Aug 3". The year is added only when
// the check was not made this year, so an older check can never read as a recent one.
function shortDate(iso, today) {
  const d = new Date(iso + 'T00:00:00');
  if (isNaN(d.getTime())) return '';
  const opts = d.getFullYear() === today.getFullYear()
    ? { month: 'short', day: 'numeric' }
    : { month: 'short', day: 'numeric', year: 'numeric' };
  return d.toLocaleDateString('en-US', opts);
}

export function latestChecks(today = new Date()) {
  const live = countries.filter(c => c.live && !c.blocked);

  const pool = [];
  for (const c of live) {
    if (!Array.isArray(c.keyFacts)) continue;
    for (const k of c.keyFacts) {
      if (k.status !== 'enacted') continue;
      if (!k.checked) continue;
      if (k.effective && new Date(k.effective + 'T00:00:00') > today) continue;
      const text = k.label + ': ' + k.value;
      if (text.length > MAX_ITEM_CHARS) continue;
      pool.push({
        country: c.name,
        slug: c.slug,
        text,
        checked: k.checked,
        checkedShort: shortDate(k.checked, today)
      });
    }
  }

  // Freshest first, then alphabetical so the order is stable between builds.
  pool.sort((a, b) => b.checked.localeCompare(a.checked) || a.country.localeCompare(b.country));

  const seen = new Set();
  const out = [];
  for (const item of pool) {
    if (seen.has(item.slug)) continue;
    seen.add(item.slug);
    out.push(item);
    if (out.length >= MAX_ITEMS) break;
  }
  return out;
}
