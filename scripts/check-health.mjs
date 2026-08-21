#!/usr/bin/env node
// THE HEALTH WAVE GATE. Run from the repo root: node scripts/check-health.mjs
//
// WHAT THIS GATE CAN AND CANNOT DO, stated first because it is the whole point.
// It proves that no cost figure can reach a medical-costs page WITHOUT BEING DECLARED.
// It does not, and cannot, prove a declared figure is TRUE. That is MAIN's job, and this
// gate exists to make that job small: instead of reading nine pages hunting for numbers,
// MAIN reads a short declared list per spoke. A gate that claimed to verify truth would be
// worse than no gate, because it would be believed.
//
// THE SIX CHECKS.
//   1. AFFILIATE WIRING IS CONSISTENT. Every medical-costs spoke carries insurance:true and
//      topic:"health", so the Faye callout renders on all of them or none. A spoke that
//      discusses medical money without the disclosure box, or a health spoke that quietly
//      drops the flag, both fail here.
//   2. NO UNDECLARED FIGURE. Every currency figure appearing in a spoke's PROSE must also
//      appear in its `sourcedFigures` array, and every entry in that array must appear in
//      the prose. Bidirectional, so a figure cannot be smuggled in and a stale declaration
//      cannot linger after its sentence is rewritten. Same anti-drift shape as verdict.js:
//      a pointer that no longer matches its source is a failure, not something to repair.
//   3. PRICE_EXEMPT BY NAME. A country whose spoke states no cost figure at all is exempt,
//      and it is listed HERE BY NAME so a missing figure can never hide as a false
//      exemption. This is the load-bearing half of MAIN's absence-is-not-zero rule, and it
//      is the same pattern as KEYFACTS_EXEMPT in check-entry-costs.mjs. Sourcing a figure
//      for one of these is a good thing; the gate will tell you to remove it from the list.
//   4. THE CARE-FIRST RAIL IS PRESENT. Every spoke carries `careFirst`, and that exact
//      sentence must appear VERBATIM in the spoke's own prose. The field is a pointer, not
//      a copy, so it cannot outlive the sentence it points at. This is the rail that keeps
//      a page about money from reading as medical triage.
//   5. NO SECOND COPY OF A COUNTRY-LEVEL FACT. A medical-costs spoke must not restate an
//      entry-insurance figure that its own country file already states, because two copies
//      of a number drift. Georgia is the live case: its 30,000 GEL rule lives on the guide.
//   6. HARVEST AGREEMENT. Any verdict row harvested from a medical-costs spoke must match
//      its glance pair verbatim, and NO insurance-nudge row may be harvested for a country
//      on the CRUX list, where the honest call is that cover matters less.
//
// Exits 1 on any FAIL.

import fs from 'fs';
import path from 'path';
import { countries } from '../src/data/index.js';
import { SPOKE_ROWS } from '../src/data/verdict.js';

const SLUG = 'medical-costs';

// ---------------------------------------------------------------------------
// THE EXEMPTION LIST. A country here ships the universal-truth version of the spoke: the
// honest account of who pays, when, and what the serious scenario is, with NO local price
// figure, because none could be sourced to a standard we would defend. Listed by name so a
// silently missing figure is a FAIL rather than a quiet pass.
//
// Batch 1 of the wave. Every one of these was checked against a primary source (State
// Department country information, a US Embassy medical assistance page, or the CDC Yellow
// Book) for its STRUCTURAL claims; what could not be sourced was the routine-care price,
// and so no routine-care price appears.
const PRICE_EXEMPT = new Set([
  'cambodia', 'laos', 'sri-lanka', 'georgia', 'el-salvador', 'jamaica',
  'kuwait', 'namibia', 'china',
  // Batch 2. Three of the four counterintuitive countries carry no routine-care price,
  // and each omission is a decision rather than a gap, so each is named here.
  //   australia    non-eligible patient fees are set per state and territory, not
  //                nationally, so a single national figure would be false precision.
  //   new-zealand  no non-resident price list sourced. The page turns on the ACC
  //                accident/illness split, which decides the bill more than any fee does.
  //   japan        fees ARE set on a national schedule, so this is the most promising
  //                exemption to retire later, but no visitor-facing list is sourced yet.
  // The United Kingdom is deliberately NOT here: it carries two sourced figures, the
  // free A and E and GP exemption and the 150% tariff, both from NHS England.
  'australia', 'new-zealand', 'japan',
  // Batch 3, the OFFICIAL tier. Three of the seventeen cleared MAIN's source bar and
  // carry real figures: hong-kong (Hospital Authority non-eligible person rates),
  // canada (Hopital Montfort published 2026-27 non-resident fees) and ireland
  // (HSE statutory charge plus Beaumont's published non-EU rates). They are NOT here.
  // The rest are figureless because THIS SOURCING PASS did not reach an authority's
  // own page, which is not the same as no official source existing. Several of these
  // very probably publish one and should be retired from this list on a later pass:
  // the Nordics publish patient fee schedules, Taiwan's NHI publishes a fee schedule,
  // Korean university hospitals publish self-pay rates, and France, Germany and the
  // Netherlands all publish regulated tariffs. singapore is a partial: MOH's subsidy
  // structure is sourced and declared, but no non-resident currency figure was found.
  'switzerland', 'norway', 'denmark', 'sweden', 'iceland', 'south-korea', 'taiwan',
  'singapore', 'uae', 'qatar', 'france', 'germany', 'netherlands', 'austria',
  // Batch 4, the CRUX tier plus china. Every structural claim on these pages traces to a
  // primary source (State Department country pages, US Embassy medical pages, the UK FCDO
  // for thailand, the Saudi Council of Health Insurance, the Croatian tourism ministry, a
  // major Prague hospital's own self-payer rules), and every one ships figureless, because
  // on CRUX pages the honest claim is qualitative: care is priced for the country, not for
  // America, and a borrowed number under a commission link is the exact failure this gate
  // exists to prevent. Deposits that hospitals publish (czechia's ER desk, thailand's and
  // china's admission deposits) are described as practice, never quoted as amounts, since
  // one hospital's figure is not a national tariff. The most promising exemptions to
  // retire on a later sourcing pass: portugal (the SNS publishes a non-beneficiary
  // tariff), turkey (the health ministry publishes an international health tourism price
  // list), thailand (the flagship private hospitals publish price lists), and croatia
  // (HZZO publishes its fee schedule).
  'italy', 'spain', 'portugal', 'greece', 'czechia', 'poland', 'hungary', 'croatia',
  'thailand', 'turkey', 'costa-rica', 'colombia', 'saudi-arabia',
]);

// Countries where the honest call is that cover matters LESS than a traveler assumes, from
// the Phase 1 triage. The affiliate rail says these pages must not lean on the Faye link,
// and check 6 enforces the one piece of that a machine can see: no insurance-nudge row may
// be harvested onto their verdict card. The prose restraint is MAIN's read, not the gate's.
const CRUX = new Set([
  'taiwan', 'thailand', 'italy', 'spain', 'portugal', 'greece', 'czechia', 'poland',
  'hungary', 'croatia', 'costa-rica', 'colombia', 'turkey', 'saudi-arabia',
]);

// Currency figures in prose. Deliberately broad: dollar amounts, written dollars, and the
// local-currency codes the guides actually use in medical contexts. Ranges are captured
// whole ("15,000 to 20,000 dollars") so a declaration matches the sentence rather than one
// end of it. Bare years and percentages are excluded, since neither is a price.
//
// WIDENED IN BATCH 3, after a mutation test caught the gate missing a fabricated price.
// The original pattern required "dollars" to sit immediately after the digits, so it saw
// "15,000 to 20,000 dollars" but was blind to "12,900 Hong Kong dollars", "2,980 Canadian
// dollars", "446.82 euro" and the bare "8,840.50". Batch 3 is the first batch to quote
// non-US currencies heavily, so the hole was invisible until the OFFICIAL tier landed: an
// invented Hong Kong or Canadian price would have shipped undeclared. Three additions:
//   1. an optional nationality qualifier between the number and the currency word,
//   2. euro and pound amounts, not just dollars,
//   3. any comma-grouped number, which on a medical-costs page is always money.
// Rule 3 can over-match (a distance, a population), and that is the safe direction: a
// false positive costs an editor one declaration, a false negative ships a fabricated
// price under a commission link.
const CURRENCY_QUALIFIER = '(?:Hong Kong|Canadian|Singapore|Singaporean|Australian|New Zealand|US|Taiwan|Taiwanese|Jamaican|Namibian|Emirati|Qatari|Swiss|Danish|Norwegian|Swedish|Icelandic)\\s';
const FIGURE_RE = new RegExp([
  '\\$\\s?[\\d,]+(?:\\.\\d+)?(?:\\s?(?:to|-)\\s?\\$?[\\d,]+(?:\\.\\d+)?)?(?:k|\\+)?',
  `[\\d,]+(?:\\.\\d+)?(?:\\s?(?:to|-)\\s?[\\d,]+(?:\\.\\d+)?)?\\s?(?:${CURRENCY_QUALIFIER})?(?:dollars?|USD|euros?|EUR|pounds?)`,
  '[\\d,]+(?:\\s?(?:to|-)\\s?[\\d,]+)?\\s?(?:pesos|GEL|KWD|LAK|KHR|LKR|JMD|NAD|CNY|HKD|CAD|SGD|yuan|RMB|lari|dinars?)',
  '\\b\\d{1,3}(?:,\\d{3})+(?:\\.\\d+)?\\b',
].join('|'), 'gi');

const strip = (s) => String(s || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

// Every piece of reader-visible prose on a spoke, in one string. Glance values are included
// because a figure on the glance card is a figure the reader sees.
function proseOf(sp) {
  const bits = [sp.lede, sp.answer, sp.title, sp.description, sp.h1];
  (sp.glance || []).forEach(g => bits.push(g.k, g.v));
  (sp.sections || []).forEach(sec => {
    bits.push(sec.h);
    if (sec.key) bits.push(sec.key.fig, sec.key.tag, sec.key.text);
    (sec.p || []).forEach(p => bits.push(p));
    (sec.steps || []).forEach(s => bits.push(s));
  });
  (sp.faqs || []).forEach(f => bits.push(f.q, f.a));
  return bits.map(strip).filter(Boolean).join(' ');
}

const fails = [], notes = [];
const fail = (m) => fails.push(m);
const note = (m) => notes.push(m);

const withSpoke = countries
  .map(c => ({ c, sp: (c.spokes || []).find(s => s.slug === SLUG) }))
  .filter(x => x.sp);

// --- 1. Affiliate wiring is consistent -------------------------------------
for (const { c, sp } of withSpoke) {
  if (sp.insurance !== true) fail(`1 AFFILIATE  ${c.slug}: medical-costs spoke does not set insurance:true, so the Faye disclosure box will not render`);
  if (sp.topic !== 'health') fail(`1 AFFILIATE  ${c.slug}: medical-costs spoke has topic "${sp.topic}", expected "health"`);
  if (sp.live === false) note(`1 AFFILIATE  ${c.slug}: medical-costs spoke is not live (not a failure, but it is invisible)`);
}
// The reverse direction: a health-topic spoke that is not medical-costs still needs the flag,
// or the wave has two different disclosure behaviours for the same subject.
for (const c of countries) {
  for (const sp of (c.spokes || [])) {
    if (sp.topic === 'health' && sp.slug !== SLUG) {
      note(`1 AFFILIATE  ${c.slug}/${sp.slug}: health-topic spoke outside the medical-costs family, review its disclosure`);
    }
  }
}

// --- 2 and 3. Figures declared, and exemptions by name ---------------------
// A declaration is a FACT, not a naked number:
//   { fact: "what the source actually says", kind: 'routine'|'evacuation'|'entry',
//     src: <index into sources.links, or null>, forms: ["every surface form in prose"] }
// One fact can surface in several shapes (a glance value, a keystat fig, a sentence), and
// listing the forms is what lets the gate match prose without the desk rewriting the page
// to suit the regex. `kind` is what makes PRICE_EXEMPT meaningful: the wave's rule is about
// ROUTINE-CARE prices, and an officially published evacuation floor is a different animal
// that the brief explicitly allows. Without kind, the gate would force a country to choose
// between stating a sourced evacuation figure and being honestly exempt on routine prices.
const untraced = [];
for (const { c, sp } of withSpoke) {
  const prose = proseOf(sp);
  const decls = Array.isArray(sp.sourcedFigures) ? sp.sourcedFigures : [];
  const links = (sp.sources && sp.sources.links) || [];
  const exempt = PRICE_EXEMPT.has(c.slug);
  const allForms = decls.flatMap(d => d.forms || []);

  // POSITION MATCHING, not substring matching. The earlier version asked whether a prose
  // figure and a declared form contained one another as strings, and a mutation test found
  // that too loose: an injected "65 euro" was silently absolved by the declared form
  // "111.65 euro", because the declared string happens to contain the injected one. A
  // fabricated price could therefore hide behind a legitimate neighbour. Now every regex
  // hit is located in the prose and must sit INSIDE an actual occurrence of a declared
  // form. Coincidental overlap no longer clears a figure; only real coverage does.
  const spans = [];
  for (const form of allForms) {
    let at = prose.indexOf(form);
    while (at !== -1) { spans.push([at, at + form.length]); at = prose.indexOf(form, at + 1); }
  }
  const covered = (start, end) => spans.some(([a, b]) => a <= start && end <= b);
  const reported = new Set();
  for (const m of prose.matchAll(FIGURE_RE)) {
    // The digit classes include commas so ranges capture whole, which means a match can
    // swallow the sentence's own punctuation ("$18 to $25,"). Trim it off both ends
    // before comparing, or a figure fails against its own correct declaration.
    const raw = m[0];
    const lead = raw.length - raw.trimStart().length;
    const trimmed = raw.trim().replace(/[.,;:]+$/, '');
    if (!trimmed) continue;
    const start = m.index + lead;
    const end = start + trimmed.length;
    const f = trimmed;
    if (!covered(start, end) && !reported.has(f)) {
      reported.add(f);
      fail(`2 FIGURE     ${c.slug}: prose states "${f}" but no sourcedFigures entry claims it. Declare it with its fact, kind and source, or remove it.`);
    }
  }
  for (const d of decls) {
    if (!d.fact || !d.kind) fail(`2 FIGURE     ${c.slug}: a sourcedFigures entry is missing fact or kind`);
    if (!Array.isArray(d.forms) || !d.forms.length) fail(`2 FIGURE     ${c.slug}: sourcedFigures entry "${d.fact}" lists no prose forms`);
    for (const form of (d.forms || [])) {
      if (!prose.includes(form)) fail(`2 FIGURE     ${c.slug}: sourcedFigures claims the form "${form}" but no prose states it. The sentence changed; update the declaration.`);
    }
    if (d.src === null || d.src === undefined) {
      untraced.push(`${c.slug} [${d.kind}] ${d.fact}`);
    } else if (!links[d.src]) {
      fail(`2 FIGURE     ${c.slug}: sourcedFigures entry "${d.fact}" points at sources.links[${d.src}], which does not exist`);
    }
  }

  // PRICE_EXEMPT is specifically about routine-care prices, per MAIN's absence-is-not-zero
  // ruling. An exempt country may still carry a sourced evacuation or entry figure.
  const routine = decls.filter(d => d.kind === 'routine');
  if (exempt && routine.length) {
    fail(`3 EXEMPT     ${c.slug}: listed in PRICE_EXEMPT but declares a routine-care figure (${routine.map(d => d.fact).join(' | ')}). Sourcing one is good news: remove the country from PRICE_EXEMPT.`);
  }
  if (!exempt && !routine.length) {
    fail(`3 EXEMPT     ${c.slug}: states no routine-care figure and is NOT in PRICE_EXEMPT. A missing figure must be a named decision, never a silence.`);
  }
  if (decls.length && !links.length) {
    fail(`3 EXEMPT     ${c.slug}: declares figures but carries no sources.links to verify them against`);
  }
}

// --- 4. The care-first rail ------------------------------------------------
for (const { c, sp } of withSpoke) {
  if (!sp.careFirst || !String(sp.careFirst).trim()) {
    fail(`4 CAREFIRST  ${c.slug}: no careFirst sentence. Every spoke in this wave says, in its own words, that a serious problem gets care first and money second.`);
    continue;
  }
  const target = strip(sp.careFirst);
  if (!proseOf(sp).includes(target)) {
    fail(`4 CAREFIRST  ${c.slug}: careFirst is declared but its sentence does not appear verbatim in the spoke prose. It is a pointer, not a second copy.`);
  }
}

// --- 5. No second copy of a country-level figure ---------------------------
// A spoke must not restate a number its own country file already states elsewhere. Scoped
// to entry-insurance minimums, which is where this wave collides with the entry wave.
const ENTRY_INS_RE = /[\d,]+\s?(?:GEL|EUR|USD|dollars)\b/gi;
for (const { c, sp } of withSpoke) {
  const filePath = path.join('src', 'data', c.slug + '.js');
  if (!fs.existsSync(filePath)) continue;
  const raw = fs.readFileSync(filePath, 'utf8');
  const spokeProse = proseOf(sp);
  // Numbers the country file states in an insurance context, outside this spoke.
  const guideOnly = raw.slice(0, raw.indexOf('slug: "' + SLUG + '"') === -1 ? raw.length : raw.indexOf('slug: "' + SLUG + '"'));
  const guideFigs = [...new Set((guideOnly.match(ENTRY_INS_RE) || []))]
    .filter(f => {
      const i = guideOnly.indexOf(f);
      return /insur/i.test(guideOnly.slice(Math.max(0, i - 260), i + 260));
    });
  for (const f of guideFigs) {
    if (spokeProse.includes(f)) {
      fail(`5 SECONDCOPY ${c.slug}: the guide already states the insurance figure "${f}" and the spoke repeats it. Point at the guide instead, so there is one copy.`);
    }
  }
}

// --- 6. Harvest agreement --------------------------------------------------
const NUDGE = /(buy|get|need|carry|take out)\b.{0,24}\b(insurance|cover|policy)/i;
for (const { c, sp } of withSpoke) {
  const rows = (SPOKE_ROWS[c.slug] || []).filter(r => r.spoke === SLUG);
  for (const r of rows) {
    const hit = (sp.glance || []).filter(g => g.k === r.k && g.v === r.v);
    if (hit.length !== 1) {
      fail(`6 HARVEST    ${c.slug}: verdict row "${r.k}: ${r.v}" does not resolve to exactly one live glance pair on the medical-costs spoke`);
    }
    if (CRUX.has(c.slug) && NUDGE.test(`${r.k} ${r.v}`)) {
      fail(`6 HARVEST    ${c.slug}: is on the CRUX list, where the honest call is that cover matters less, and an insurance-nudge row "${r.k}: ${r.v}" has been harvested onto its card`);
    }
  }
  if (!rows.length) note(`6 HARVEST    ${c.slug}: medical-costs not triaged into SPOKE_ROWS (a decision, if deliberate)`);
}

// --- Report ----------------------------------------------------------------
console.log('== TTC health wave gate ==');
console.log(`medical-costs spokes found: ${withSpoke.length} (${withSpoke.map(x => x.c.slug).join(', ')})`);
console.log(`PRICE_EXEMPT: ${PRICE_EXEMPT.size} named`);
const declaredAll = withSpoke.flatMap(({ c, sp }) => (sp.sourcedFigures || []).map(d => {
  const links = (sp.sources && sp.sources.links) || [];
  const src = (d.src === null || d.src === undefined) ? 'NO SOURCE CITED' : (links[d.src] ? links[d.src].url : '??');
  return `${c.slug} [${d.kind}] ${d.fact}\n        forms: ${(d.forms || []).join(' | ')}\n        source: ${src}`;
}));
console.log(`\nDECLARED FIGURES for MAIN to verify (${declaredAll.length}):`);
declaredAll.forEach(f => console.log('    ' + f));

// UNTRACED FIGURES. Declared, so they cannot hide, but not tied to any cited source. This
// prints loudly and does NOT fail, for one reason: the only entries today are the shipped
// Mexico spoke's, which predate MAIN's ruling that a figure must trace to a clinic's own
// published price list or an official tariff. Failing here would turn a pre-existing
// editorial question into a blocked commit for an unrelated batch. Once MAIN rules on
// Mexico, this should become a FAIL and the block below should move up into the checks.
if (untraced.length) {
  console.log(`\nUNTRACED FIGURES, declared but not tied to a cited source (${untraced.length}):`);
  untraced.forEach(u => console.log('    ' + u));
  console.log('    ^ These need MAIN\'s ruling. They do not fail the gate yet. See the comment in this file.');
}
console.log(`\nCARE-FIRST LINES for MAIN to read (${withSpoke.length}):`);
withSpoke.forEach(({ c, sp }) => console.log(`    ${c.slug}: ${strip(sp.careFirst)}`));

console.log(`\nFAILURES: ${fails.length ? fails.length : 'none'}`);
fails.forEach(f => console.log('    ' + f));
if (notes.length) {
  console.log(`\nNOTES (not failures): ${notes.length}`);
  notes.forEach(n => console.log('    ' + n));
}
console.log('\nRESULT:', fails.length ? 'FAIL' : 'PASS');
process.exit(fails.length ? 1 : 0);
