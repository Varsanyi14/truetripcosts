// THE PRESS-READY VERSIONS OF THE RATE-PARITY MAP: a downloadable SVG, a 1200 by 630 social
// card, and a CSV of the underlying rows.
//
// WHY THIS FILE EXISTS AT ALL. /how-to-pay-less-on-hotels carries the strongest single data
// finding on this site, and until now the only way to reuse it was to screenshot the page or
// paste an iframe. A writer who wants the number in a chart, or the map in a print piece, or
// the rows in a spreadsheet, had nothing. Those three wants are three files, and all three
// have to come out of the same data as the page or the page and its own press kit will
// disagree in public.
//
// ============================================================================
// RAIL 1. NOTHING HERE DECIDES A FACT. IT ONLY DRAWS ONE.
// ============================================================================
// Every status, colour, date and URL below is read from booking-tactics.js, and every outline
// from src/data/maps/world.js. This module holds no jurisdiction, no rate, no legal position
// and no colour of its own. If it ever needs to know something to render, that something is
// in the wrong place. Same rule ParityMap.astro states for itself.
//
// ============================================================================
// RAIL 2. THE EXPORTS CARRY ONLY PUBLISHED, SOURCE-BACKED FIELDS.
// ============================================================================
// The CSV is the one thing here that leaves the site and gets opened in a spreadsheet, edited
// and re-published by somebody else. So it carries exactly what the page shows: jurisdiction,
// status, the date the instrument took effect, the source URL and the date we checked it. It
// does NOT carry desk notes, pending-source notes or anything marked for review, because a
// column called "note" in a downloaded CSV becomes a quote in somebody's article.
//
// A ROW WITH NO SOURCE URL STILL SHIPS, with the cell empty rather than omitted. Dropping the
// unsourced rows would hand a writer a cleaner-looking table than the one on the page, which
// is the opposite of the point: the gap is part of the finding.
//
// ============================================================================
// RAIL 3. THE SOCIAL CARD MAY NOT MAKE A PROMISE.
// ============================================================================
// The card states the counts and the checked month and stops. It does not say "book cheaper",
// "always book direct" or "save money", because legal freedom to undercut is not a lower
// price and a card travels with no page around it to say so. The one line of qualifying text
// is on the card itself for that reason.

import world from './maps/world.js';
import {
  PARITY_BY_REGION,
  PARITY_STATUS,
  EU_EEA_ISOS,
  parityStatusByIso,
  parityFinding,
  PARITY_PRESS,
  bookingTacticsChecked,
  bookingTacticsCheckedISO,
} from './booking-tactics.js';
import { STATES } from './hotel-tax-map.js';

// The same not-yet-checked grey the two choropleths on this site already share, imported
// rather than retyped for the same reason ParityMap.astro imports it: two maps must not drift
// into two meanings for one shade.
const UNCHECKED = STATES.unchecked.fill;

const INK = '#16302C';
const PAPER = '#F5F4EF';
const MUTED = '#6F6E66';
const TEAL_DEEP = '#0A5644';
const HAIRLINE = '#F5F4EF';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// --- the fills, read from the one place that holds them ----------------------
// A hatched status resolves to a pattern, exactly as it does in the component. The pattern
// PLUMBING is per-renderer and legitimately duplicated; the COLOUR and the decision to hatch
// are not, and both come from PARITY_STATUS.
const patternId = (key) => `pa-hatch-${key}`;

function fillsFor(statusByIso) {
  const out = new Map();
  for (const [iso, v] of statusByIso) {
    const s = PARITY_STATUS[v.status];
    out.set(iso, s.hatch ? `url(#${patternId(v.status)})` : s.fill);
  }
  return out;
}

function defsFor() {
  return Object.entries(PARITY_STATUS)
    .filter(([, s]) => s.hatch)
    .map(([key, s]) => (
      `<pattern id="${patternId(key)}" width="7" height="7" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">`
      + `<rect width="7" height="7" fill="${s.fill}"/>`
      + `<line x1="0" y1="0" x2="0" y2="7" stroke="#FFFFFF" stroke-width="2.4" stroke-opacity="0.62"/>`
      + `</pattern>`
    ))
    .join('');
}

// Every country outline, filled. Identical decision path to the component: a country with no
// entry gets the not-checked grey, and a Natural Earth shape with no ISO code can never be
// coloured at all.
function countriesGroup(fills) {
  const paths = world.countries.map((c) => {
    const fill = c.iso ? (fills.get(c.iso) || UNCHECKED) : UNCHECKED;
    return `<path d="${c.d}" fill="${fill}"/>`;
  }).join('');
  return `<g stroke="${HAIRLINE}" stroke-width="0.5" vector-effect="non-scaling-stroke">${paths}</g>`;
}

// The two countries the 110m outline does not draw at all. Same Rail 3 reasoning as the
// component: a dot only where the fill has nowhere to land, so two dots cannot collide.
function dotsGroup(statusByIso, fills) {
  const polyIso = new Set(world.countries.map((c) => c.iso).filter(Boolean));
  const circles = (world.micro || [])
    .filter((m) => statusByIso.has(m.iso) && !polyIso.has(m.iso))
    .map((m) => `<circle cx="${m.cx}" cy="${m.cy}" r="5.5" fill="${fills.get(m.iso)}" stroke="${PAPER}" stroke-width="1.5"/>`)
    .join('');
  return `<g>${circles}</g>`;
}

function legendRows() {
  const statusByIso = parityStatusByIso();
  const counted = (key) => [...statusByIso.values()].filter((v) => v.status === key).length;
  const rows = Object.entries(PARITY_STATUS).map(([key, s]) => ({
    fill: s.fill, hatch: s.hatch, label: s.label, count: counted(key),
  }));
  rows.push({ fill: UNCHECKED, hatch: false, label: 'Not in our checked set', count: null });
  return rows;
}

// --- 1. THE DOWNLOADABLE MAP ------------------------------------------------
// Native projection size plus room for a legend and the credit line. Served as a real SVG so
// a writer can drop it into a print layout or a chart tool and scale it without it going soft,
// which is the whole argument for offering vector rather than only PNG.
export function parityMapSvg() {
  const statusByIso = parityStatusByIso();
  const fills = fillsFor(statusByIso);
  const [, , vbW, vbH] = String(world.viewBox).split(/\s+/).map(Number);
  const legend = legendRows();
  const LEG_TOP = vbH + 26;
  const COLS = 2;
  const colW = vbW / COLS;
  const rowH = 30;

  const legendSvg = legend.map((l, i) => {
    const col = i % COLS, row = Math.floor(i / COLS);
    const x = col * colW, y = LEG_TOP + row * rowH;
    const swatch = `<rect x="${x}" y="${y}" width="15" height="15" rx="3" fill="${l.fill}" stroke="rgba(22,48,44,.16)"/>`
      + (l.hatch ? `<rect x="${x}" y="${y}" width="15" height="15" rx="3" fill="url(#${patternId('narrowed')})"/>` : '');
    const words = l.count == null ? l.label : `${l.label}: ${l.count}`;
    return `${swatch}<text x="${x + 22}" y="${y + 12}" font-size="14" fill="${INK}" font-family="Inter, system-ui, sans-serif">${esc(words)}</text>`;
  }).join('');

  const legendRowsCount = Math.ceil(legend.length / COLS);
  const creditY = LEG_TOP + legendRowsCount * rowH + 16;
  const totalH = creditY + 40;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW} ${totalH}" width="${vbW}" height="${totalH}" role="img" aria-label="World map shading each country by whether a hotel is legally free to offer a cheaper direct rate than a booking platform.">
<title>Where a hotel can legally undercut a booking site</title>
<desc>${esc(parityFinding().sentence)} ${esc(PARITY_PRESS.method)} Checked ${esc(bookingTacticsChecked)}.</desc>
<defs>${defsFor()}</defs>
<rect width="${vbW}" height="${totalH}" fill="${PAPER}"/>
${countriesGroup(fills)}
${dotsGroup(statusByIso, fills)}
${legendSvg}
<text x="0" y="${creditY}" font-size="13" fill="${MUTED}" font-family="Inter, system-ui, sans-serif">Legal freedom to undercut, not a promise of a lower price. Checked ${esc(bookingTacticsChecked)}.</text>
<text x="0" y="${creditY + 20}" font-size="13" fill="${TEAL_DEEP}" font-family="Inter, system-ui, sans-serif">${esc(PARITY_PRESS.attribution)}</text>
</svg>`;
}

// --- 2. THE SOCIAL CARD -----------------------------------------------------
// 1200 by 630, the size every platform crops to. This is the SOURCE the PNG in public/og is
// rasterised from, so the card and the page cannot state different counts.
//
// THE MAP IS THE BACKGROUND AND THE COUNTS ARE THE MESSAGE, not the other way round: at
// thumbnail size nobody reads a world map, and the three numbers are what survives.
export function parityOgSvg() {
  const statusByIso = parityStatusByIso();
  const fills = fillsFor(statusByIso);
  const finding = parityFinding();
  const [, , vbW, vbH] = String(world.viewBox).split(/\s+/).map(Number);

  // The map, scaled to sit across the lower two thirds of the card and bleed off both edges
  // slightly, so it reads as a texture behind the type rather than as a small picture of a map.
  const scale = 1260 / vbW;
  const mapY = 630 - vbH * scale - 6;

  const chips = Object.entries(PARITY_STATUS).map(([key, s], i) => {
    const count = [...statusByIso.values()].filter((v) => v.status === key).length;
    const x = 76 + i * 356;
    return `<rect x="${x}" y="196" width="18" height="18" rx="4" fill="${s.fill}"/>`
      + `<text x="${x + 28}" y="211" font-size="19" font-weight="600" fill="${INK}" font-family="Inter, system-ui, sans-serif">${count} ${esc(s.label.toLowerCase())}</text>`;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
<defs>${defsFor()}</defs>
<rect width="1200" height="630" fill="${PAPER}"/>
<g transform="translate(-30 ${mapY}) scale(${scale})" opacity="0.92">
${countriesGroup(fills)}
${dotsGroup(statusByIso, fills)}
</g>
<rect width="1200" height="300" fill="${PAPER}" opacity="0.88"/>
<text x="76" y="86" font-size="21" font-weight="600" letter-spacing="3" fill="${TEAL_DEEP}" font-family="'IBM Plex Mono', monospace">RATE PARITY BY COUNTRY</text>
<text x="76" y="152" font-size="52" font-weight="500" fill="${INK}" font-family="Fraunces, Georgia, serif">Where a hotel may legally</text>
<text x="76" y="208" font-size="52" font-weight="500" fill="${INK}" font-family="Fraunces, Georgia, serif">undercut a booking site</text>
<g transform="translate(0 60)">${chips}</g>
<text x="76" y="330" font-size="20" fill="${MUTED}" font-family="Inter, system-ui, sans-serif">Legal freedom to undercut, not a promise of a lower price. ${esc(finding.total)} countries checked ${esc(bookingTacticsChecked)}.</text>
<text x="76" y="586" font-size="22" font-weight="600" letter-spacing="2" fill="${TEAL_DEEP}" font-family="'IBM Plex Mono', monospace">TRUETRIPCOSTS.COM</text>
</svg>`;
}

// --- 3. THE CSV -------------------------------------------------------------
// Five columns, per Rail 2, and every value already visible on the page.
//
// THE BLOC ROW IS EXPANDED, and that is the one editorial decision in here worth stating. The
// table's strongest row reads "EU and EEA, all 27 member states", which is the right way to
// state a ruling and useless in a spreadsheet: a writer sorting by jurisdiction would find no
// Poland. So the bloc row ships once under its own name AND once per member state, with the
// member rows naming the instrument they inherit from in the jurisdiction cell, so nothing in
// the file claims a separate national ruling that does not exist.
export function parityCsv() {
  const header = ['jurisdiction', 'status', 'effective date', 'source URL', 'checked date'];
  const rows = [];

  const cell = (v) => {
    const s = v == null ? '' : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };

  const isoName = new Map();
  for (const c of world.countries) if (c.iso && c.name) isoName.set(c.iso, c.name);
  for (const m of (world.micro || [])) if (m.iso && m.name) isoName.set(m.iso, m.name);

  for (const r of PARITY_BY_REGION.slice().sort((a, b) => a.order - b.order)) {
    rows.push([
      r.jurisdiction,
      PARITY_STATUS[r.status].label,
      r.sinceISO || r.sinceDate || '',
      (r.source && r.source.url) || '',
      bookingTacticsCheckedISO,
    ]);
  }

  const byIso = parityStatusByIso();
  for (const iso of EU_EEA_ISOS) {
    const v = byIso.get(iso);
    // A member state that has its own row in the table above is already in the file under its
    // own name, so it is not repeated here as an inherited row.
    if (!v || !v.bloc) continue;
    rows.push([
      `${isoName.get(iso) || iso}, via the EU and EEA ruling`,
      PARITY_STATUS[v.status].label,
      v.row.sinceISO || '',
      (v.row.source && v.row.source.url) || '',
      bookingTacticsCheckedISO,
    ]);
  }

  return [header, ...rows].map((r) => r.map(cell).join(',')).join('\n') + '\n';
}
