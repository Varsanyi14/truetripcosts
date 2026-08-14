// The breadth reveal: "everything we checked" for one country, at a glance.
//
// WHAT THIS IS: the derivation behind the four-category glance that sits between the
// gut-punch and the calculator. It reads fields that already exist and are already
// sourced, and returns rows. It computes no money and invents no categories.
//
// THE ZOOM RELATIONSHIP. This is the GLANCE; the calculator is the same content in
// DETAIL. So a "fees nobody quotes" row here names the RULE ("charged per person, per
// night") and the calculator is where that rule becomes a number against the traveler's
// own nights and travelers. Two depths of one thing, never two competing sections.
//
// The line that draws is COMPUTED money, not money. Nothing here may multiply anything by
// the traveler's inputs, because only the calculator knows them, and a figure that looks
// computed but is not is the worst of both. A figure quoted verbatim from its own sourced
// field is fine and often the most useful thing in the row: several entry charges are
// published as prose with a range in dollars, and flattening those to "there is a fee"
// would lose the sourcing the brief asks us to preserve. Where a quoted figure appears it
// carries its unit, so it cannot be misread as a trip total.
//
// ABSENCE IS NOT ZERO, and it is enforced structurally rather than remembered. Every
// builder below returns rows or returns nothing. A category with no rows is dropped
// before it reaches the page, so a data-poor country renders two or three categories and
// still reads as finished. Nothing here can manufacture a category to fill the column:
// there is no default row anywhere in this file, and no branch that emits a placeholder.
//
// THE FOUR CATEGORIES, and what earns a place in each:
//   fees    Money you will be charged that the booking price did not quote. A real,
//           sourced rule only.
//   keep    Money you do NOT have to spend, where that is an explicit sourced zero or a
//           genuine no-tipping norm. Never the mere absence of data.
//   traps   A documented way to lose money by doing the obvious thing.
//   timing  When the country is dear and when it is cheap, as categorical tiers. No
//           percentages, ever: seasons.js holds no figures on purpose.

import { entryChargesFor, isBillable, isNamedZero } from './entry-charges.js';
import { arrivalFormFor } from './arrival-forms.js';
import { seasons } from './seasons.js';
import { tipping as tippingRows } from './tipping.js';
import { isSchengen, borderStatus } from './schengen.js';

// How each tourist-tax unit reads in plain words. This is the unit-discipline rail made
// visible to the reader: a per-person tax and a per-room tax are different money on the
// same trip, and the glance says which it is before the calculator multiplies anything.
const TAX_UNIT_WORDS = {
  perPersonPerNight: 'charged per person, per night',
  flatPerNight: 'charged per room, per night, not per person',
  percentOfRoom: 'charged as a percentage of the room rate',
  tieredPerPersonPerNight: 'charged per person, per night, banded by what the room costs',
};

// Strips the light HTML the guides use in prose so a row can be rendered as plain text.
// The guides' own copy is the source; this only removes markup, never words.
const plain = (s) => String(s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

// Appends a clause to sourced prose without doubling its terminal punctuation. The
// keyFacts values are written as full sentences and some end in a period while others do
// not, so a naive concatenation produced "before arrival.. One-off, per person."
const sentence = (lead, tail) => {
  const a = plain(lead).replace(/\s*$/, '');
  if (!a) return plain(tail);
  return a.replace(/[.;,]\s*$/, '') + '. ' + plain(tail);
};

// Splits a trap into its bolded lead and the rest, which is exactly how the guides are
// already written: "<b>The lead.</b> The explanation." The lead becomes the row title so
// the glance reads as a headline, and no new copy is written.
function splitTrap(raw) {
  const s = String(raw || '');
  const m = s.match(/^\s*<b>(.*?)<\/b>\s*(.*)$/s);
  if (m) return { title: plain(m[1]).replace(/[.:]\s*$/, ''), detail: plain(m[2]) };
  const t = plain(s);
  const dot = t.indexOf('. ');
  if (dot > 0 && dot < 80) return { title: t.slice(0, dot), detail: t.slice(dot + 2) };
  return { title: t, detail: '' };
}

// ----- fees nobody quotes -----
function feeRows(c) {
  const rows = [];

  // The country's own tourist-tax rule, named by its unit. Only where a real rule exists:
  // tax.none is a sourced zero and belongs in "money you keep", not here.
  if (c.tax && !c.tax.none && Array.isArray(c.tax.regions) && c.tax.regions.length > 0) {
    const unit = c.tax.unit || (c.tax.regions[0] && c.tax.regions[0].unit);
    const words = TAX_UNIT_WORDS[unit] || 'charged on your stay';
    const varies = c.tax.regions.length > 1;
    rows.push({
      title: 'A tourist tax your room rate did not include',
      detail: words + (varies ? ', and the rate depends on where you stay and what kind of place it is' : '')
        + '. Almost always collected at the property, even on a prepaid room.',
    });
  }

  // Entry and border charges: one-off, per person. Unconditional charges only, so no
  // reader is quoted a Galapagos fee for a trip to Quito.
  const entry = entryChargesFor(c).filter(isBillable);
  if (entry.length === 1) {
    rows.push({
      // The figure is the keyFact's OWN sourced prose, quoted rather than reformatted, so
      // ranges, conditions and currencies survive intact. The unit is appended because a
      // bare figure at a glance could be misread as a trip total: an entry charge is
      // one-off per person, and it multiplies by travelers, never by nights.
      title: 'A charge to get in, before you have booked anything',
      detail: sentence(entry[0].value, 'One-off, per person.'),
    });
  } else if (entry.length > 1) {
    rows.push({
      title: 'More than one charge to get in',
      detail: entry.map(e => e.label).join(' and ') + ', each one-off and per person, and they stack.',
    });
  }

  return rows;
}

// ----- money you keep -----
function keepRows(c) {
  const rows = [];

  // A sourced "no tourist tax". The note is the guide's own sourced wording, which is
  // what makes this a NAMED zero rather than an empty field read as free.
  if (c.tax && c.tax.none && c.tax.note) {
    rows.push({ title: 'No nightly tourist tax here', detail: plain(c.tax.note) });
  }

  // A genuine no-tipping norm, from the same desk row /tipping-compared publishes.
  const tip = tippingRows.find(r => r.slug === c.slug);
  if (tip && tip.tierRank === 0) {
    rows.push({
      title: 'Nothing expected in tips',
      detail: plain(tip.remember || tip.note || 'Not a tipping culture, so this is genuinely money that stays in your pocket.'),
    });
  }

  // Explicit sourced zeros at the border: a mandatory form that is free, or a fee
  // formally waived. Named, so it never reads as a bare $0 or as missing data.
  const zeros = entryChargesFor(c).filter(isNamedZero);
  for (const z of zeros) {
    rows.push({ title: z.label + ', at no charge', detail: z.value });
  }

  // The Schengen border position, which is one fact shared by seventeen guides. The EES
  // is explicitly no fee, no form and nothing to apply for, and ETIAS is not running,
  // so anyone selling one is selling nothing.
  if (isSchengen(c.slug)) {
    rows.push({
      title: 'Nothing to buy or file at the Schengen border',
      detail: 'Fingerprint and photo on arrival instead of a stamp, with no fee and no form. ETIAS is not running and has no launch date, so anyone selling you one is selling nothing.',
      href: '/passports-and-visas',
    });
  }

  return rows;
}

// ----- traps to dodge -----
function trapRows(c) {
  const rows = [];

  // FORM 2, the country insert. It leads the traps group where a country has a pre-flight
  // form, because it is the trap the traveler is most likely to walk into before they have
  // even packed: the filing is obscure, mandatory, and surrounded by paid lookalikes that
  // outrank the real site.
  //
  // THESIS ALARMS, COUNTRY PAGE EQUIPS. The row does not just say a scam exists, it hands
  // over the official address, the fee position and the deadline, in that order. The whole
  // insert is carried on the `form` object so BreadthReveal can render it as an actionable
  // block rather than as one more line of prose. A country with no form gets no row: there
  // is no branch here that emits a generic warning.
  const form = arrivalFormFor(c.slug);
  if (form) {
    rows.push({
      title: form.free
        ? form.name + ' is mandatory and free, and the sites that charge are not it'
        : form.name + ' is mandatory, and only the official site charges the real amount',
      detail: form.note,
      form: {
        name: form.name,
        official: form.official,
        free: form.free,
        cost: form.cost || '',
        when: form.when,
        caution: form.caution || '',
      },
    });
  }

  if (!Array.isArray(c.traps) || c.traps.length === 0) return rows;
  // The glance takes the guide's first trap, which is the one the desk put first, and
  // counts the rest rather than listing them: the calculator and the traps section below
  // carry the full set.
  const first = splitTrap(c.traps[0]);
  if (!first.title) return rows;
  const more = c.traps.length - 1;
  rows.push({
    title: first.title,
    detail: first.detail + (more > 0 ? ' Plus ' + more + ' more we checked on this page.' : ''),
  });
  return rows;
}

// ----- timing -----
function timingRows(c) {
  const s = seasons.find(x => x.slug === c.slug);
  if (!s) return [];
  const rows = [];
  if (s.peak) rows.push({ title: 'When it is dearest and busiest', detail: plain(s.peak) });
  // The cheap window only where the row states one. Never inferred from the peak.
  if (s.cheapestWindow) rows.push({ title: 'When it is cheapest', detail: plain(s.cheapestWindow) });
  else if (s.off) rows.push({ title: 'When it is quieter and cheaper', detail: plain(s.off) });
  return rows;
}

// The four categories, in reading order, with their glance labels and colour keys. The
// colour is the categorisation doing its work at a glance: accent for a fee, green for
// money you keep, amber for a trap, grey for timing.
const CATEGORY_META = [
  { key: 'fees', label: 'fees nobody quotes', tone: 'fee', build: feeRows },
  { key: 'keep', label: 'money you keep', tone: 'keep', build: keepRows },
  { key: 'traps', label: 'traps to dodge', tone: 'trap', build: trapRows },
  { key: 'timing', label: 'timing', tone: 'time', build: timingRows },
];

// Returns only the categories that hold something real, each with at least one row.
// A country with two categories is a correct result, not a degraded one.
export function breadthFor(country) {
  if (!country) return [];
  const out = [];
  for (const cat of CATEGORY_META) {
    let rows = [];
    try { rows = cat.build(country) || []; } catch (e) { rows = []; }
    rows = rows.filter(r => r && r.title);
    if (rows.length === 0) continue;   // absence is not zero: the category simply is not here
    out.push({ key: cat.key, label: cat.label, tone: cat.tone, rows });
  }
  return out;
}

// Total rows across the categories, for the reveal's own copy. Counting what we actually
// found beats asserting a number we did not.
export const breadthCount = (groups) => groups.reduce((n, g) => n + g.rows.length, 0);
