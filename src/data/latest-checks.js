// LATEST CHECKS: the item list behind the front-door ticker.
//
// WHAT THIS IS. A detector, not a source. It holds no facts of its own. It reads the
// `keyFacts` arrays that already live in the country guides (src/data/<slug>.js), keeps
// only the ones that are true right now and were actually checked, and formats them for
// the strip. Fix a fact in its country file and the strip changes on the next build.
// Nothing is ever re-typed here, so the guide and the front door cannot drift apart.
//
// A SECOND SOURCE: hotel-tax-map.js. The tourist-tax figures that colour the
// /hotel-tax-map choropleth are dated, enacted and verified the same way a keyFact is,
// they just live in the map file because the map needs them. Reading them here lets a
// country's tax fact reach the front door without a second hand typed copy. Same filter:
// only a checked figure that is a clean charge added on top of the quoted price (the
// map's 'added' display, never 'mixed' or 'varies', which cannot be stated honestly in
// one line). When a country has both a keyFact and a map figure, the keyFact wins: it is
// the guide's own words. This file still holds no facts of its own.
//
// WHY THE STALENESS SCANNER IS NOT READ HERE. scripts/check-fact-staleness.mjs emits a
// desk to-do list: confirm this, over the day mark, takes effect soon. Those are
// re-check REQUESTS, not confirmed facts. Putting them on the front door would either
// broadcast uncertainty at the visitor or quietly promote a "please re-verify" flag into
// a "checked fact", which is the exact inaccuracy this site exists to oppose. So the
// scanner stays a desk tool and this file reads the guides instead.
//
// THE FILTER, in plain terms: only facts that are true today, and only stated whole.
//   1. The country is live and not blocked. Both sources are held to this, so a figure
//      for a country with no live guide cannot reach the strip from either direction.
//   2. status is "enacted". A proposed charge is not a fact yet. The map's equivalent is
//      state "checked": a real verified figure, not "varies" and not shape-only.
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
//   6. One fact per country, and no single source fills a loop. Dedup is by SOURCE
//      first, keyFact over a map figure, never by date: the map figures are all checked
//      the same recent day and a date-only rule would let them beat a guide's own
//      authored statement. Each source is then capped at MAX_PER_SOURCE and the sources
//      are interleaved, so one loop reads as a mix of tax, visa and fee facts rather
//      than as a column of percentages. That is a display choice, not an honesty one.
//
// ABSENCE IS NOT ZERO, applied here. If nothing qualifies this returns an empty array
// and the strip does not render at all: no empty box, no placeholder, no "nothing to
// report" that reads as filler. A short honest ticker beats a padded one, and no ticker
// beats a ticker that had to reach.
//
// NEVER add a fact to this file. There is nowhere to put one, by design. If a fact
// should be on the strip, it belongs in its country's own `keyFacts` first, or in the
// tax map entry the map itself paints from, where the guide, the tourist-taxes page and
// the staleness scanner all see it too.

import { countries } from './index.js';
import { hotelTaxMap } from './hotel-tax-map.js';

// A ticker line is one line. Facts longer than this are excluded whole rather than cut.
export const MAX_ITEM_CHARS = 130;

// Display cap. Raise it only if a loop of the strip still reads calmly.
export const MAX_ITEMS = 20;

// Per-source cap, so no single fact-type fills one loop of the strip. With two sources
// this binds before MAX_ITEMS does: the real ceiling today is 2 x MAX_PER_SOURCE.
const MAX_PER_SOURCE = 8;

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
  const liveSlugs = new Set(live.map(c => c.slug));

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
        checkedShort: shortDate(k.checked, today),
        source: 'keyFact',
      });
    }
  }

  // One decimal at most, and no trailing ".0", so 5 reads "5" and 3.7 reads "3.7". The
  // map already rounds to one decimal; this only drops the zero.
  const fmtPct = (n) => (Math.round(n * 10) / 10).toString();

  for (const e of hotelTaxMap) {
    if (e.state !== 'checked') continue;
    if (e.display !== 'added') continue;
    if (typeof e.addedPct !== 'number') continue;
    if (!e.slug) continue;
    if (!liveSlugs.has(e.slug)) continue;
    if (!e.checkedISO) continue;
    const text = 'Tourist tax: about ' + fmtPct(e.addedPct) + '% added on lodging';
    if (text.length > MAX_ITEM_CHARS) continue;
    pool.push({
      country: e.country,
      slug: e.slug,
      text,
      checked: e.checkedISO,
      checkedShort: shortDate(e.checkedISO, today),
      source: 'hotelTax',
    });
  }

  // One fact per country. A country's own keyFact wins over a map figure regardless of
  // date, because it is the guide's own statement. Within one source, the fresher wins.
  const bySlug = new Map();
  for (const it of pool) {
    const cur = bySlug.get(it.slug);
    if (!cur) { bySlug.set(it.slug, it); continue; }
    if (cur.source !== 'keyFact' && it.source === 'keyFact') { bySlug.set(it.slug, it); }
    else if (cur.source === it.source && it.checked > cur.checked) { bySlug.set(it.slug, it); }
  }

  const items = [...bySlug.values()];
  // Freshest first, then alphabetical so order is stable between builds.
  items.sort((a, b) => b.checked.localeCompare(a.checked) || a.country.localeCompare(b.country));

  // Cap each source, keeping the freshest of each, so one fact-type cannot fill a loop.
  const lanes = new Map();
  for (const it of items) {
    const lane = lanes.get(it.source) || [];
    if (lane.length >= MAX_PER_SOURCE) continue;
    lane.push(it);
    lanes.set(it.source, lane);
  }

  // Then INTERLEAVE the sources. A cap alone is not enough: the map figures all share
  // one recent check date, so a straight freshest-first walk emits every tax line before
  // the first visa line and the front half of the loop reads as a column of percentages,
  // which is what the cap was added to prevent. Round-robin across the lanes alternates
  // them instead. Lane order follows the freshest source, and within a lane the
  // freshest-first order above is preserved, so the result is stable between builds.
  const out = [];
  const queues = [...lanes.values()];
  for (let i = 0; out.length < MAX_ITEMS; i++) {
    let took = false;
    for (const q of queues) {
      if (i >= q.length) continue;
      out.push(q[i]);
      took = true;
      if (out.length >= MAX_ITEMS) break;
    }
    if (!took) break;
  }
  return out;
}
