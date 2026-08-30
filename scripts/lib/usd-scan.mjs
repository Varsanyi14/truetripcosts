// Replays the client-side USD-bracket pass against a BUILT page, server side.
//
// WHY THIS EXISTS. The brackets are injected in the browser by UsdProse.astro,
// so they are never present in dist/ HTML. Grepping the built page for a bracket
// always returns zero and tells you nothing at all. Any honest audit has to
// reproduce what the browser does: assemble the same per-block strings from the
// same text nodes, with the same regions excluded, and ask the same detector.
//
// WHY NOT JSDOM. It was jsdom first. Running it over all 577 built pages takes
// well over a minute and exhausts the default Node heap, and this repo's own rule
// (see check-grid-text.mjs) is that a gate needing a --max-old-space-size flag is
// a gate nobody runs. check-grid-text solves that by sampling one page per
// template, which is right for structure and useless here: this gate is about
// COPY, and copy is exactly what differs between pages built from one template.
// Sampling would mean not checking the thing.
//
// So extraction is a small purpose-built scanner instead. And because a
// hand-rolled HTML scanner is precisely the sort of thing that quietly disagrees
// with a real parser, it CHECKS ITSELF: `crossCheck` runs jsdom over a sample and
// asserts the fast path produced the same block texts. The gate calls it on every
// run. If the scanner drifts from real DOM semantics, the gate fails rather than
// silently measuring the wrong string.
//
// THREE THINGS ARE MIRRORED FROM UsdProse.astro and must stay in step: the OFF
// list (regions the pass must not touch), the INLINE set (which elements continue
// a sentence rather than starting one), and the block-assembly rule. They are
// duplicated because the component's logic lives in an .astro <script> block that
// Node cannot import. crossCheck is what keeps the duplication honest.
//
// It holds no rate and computes no dollar value. It reports only WHETHER a figure
// would receive a bracket, which is the only question a coverage gate needs.
import { findFigures, FX_PAR } from '../../src/data/usd-prose.js';
import fxFallback from '../../src/data/fxFallback.js';

// Mirrors UsdProse.astro's INLINE map: these continue a text run.
const INLINE = new Set(['b', 'i', 'em', 'strong', 'span', 'a', 'u', 'small', 'abbr', 'code', 'mark', 'sup', 'sub', 'time', 'bdi', 'wbr']);
// Mirrors the tag-name half of UsdProse.astro's OFF selector.
const OFF_TAGS = new Set(['script', 'style', 'svg', 'select', 'option', 'input', 'textarea', 'button', 'label', 'noscript']);
// NOT part of the component's OFF selector, and excluded anyway because the DOM
// excludes it for free. A <template>'s children live in a separate document
// fragment, so they are not descendants of <main> and a TreeWalker never reaches
// them: the browser's pass cannot see that text, so neither may this scanner.
// /cost-comparison ships a <template> holding "That is $0 on this bar", which is
// exactly the phantom run crossCheck caught on the first run of this gate.
const INERT_TAGS = new Set(['template']);
// Mirrors the id and class half: #fx, #hn-app, .estimator, #ttcCard, #calc, .usdb, [data-usd-skip].
const OFF_IDS = new Set(['fx', 'hn-app', 'ttcCard', 'calc']);
const OFF_CLASSES = new Set(['estimator', 'usdb']);
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);

// Every named entity the built site actually emits, found by scanning dist/ for
// /&[a-zA-Z][a-zA-Z0-9]*;/ rather than guessed: middot, nbsp, amp, times, quot,
// rarr, rdquo, ldquo, lt, gt. A few extras are carried in case copy changes. An
// entity missing from here decodes to itself, which crossCheck catches as a
// mismatch against jsdom rather than letting it silently corrupt a text run.
const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: '\u00A0', middot: '\u00B7', times: '\u00D7', rarr: '\u2192', larr: '\u2190', hellip: '\u2026', rsquo: '\u2019', lsquo: '\u2018', ldquo: '\u201C', rdquo: '\u201D', deg: '\u00B0', pound: '\u00A3', euro: '\u20AC', yen: '\u00A5', cent: '\u00A2', mdash: '\u2014', ndash: '\u2013', shy: '\u00AD', ensp: '\u2002', emsp: '\u2003', thinsp: '\u2009' };
function decode(s) {
  if (s.indexOf('&') === -1) return s;
  return s.replace(/&(#x?[0-9A-Fa-f]+|[a-zA-Z]+);/g, (m, b) => {
    if (b[0] === '#') {
      const n = (b[1] === 'x' || b[1] === 'X') ? parseInt(b.slice(2), 16) : parseInt(b.slice(1), 10);
      return isFinite(n) ? String.fromCodePoint(n) : m;
    }
    const k = ENT[b] != null ? b : b.toLowerCase();
    return ENT[k] != null ? ENT[k] : m;
  });
}

function attrsOf(raw) {
  const out = {};
  const re = /([a-zA-Z_:][-\w:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s">]+)))?/g;
  let m;
  while ((m = re.exec(raw))) out[m[1].toLowerCase()] = m[2] != null ? m[2] : (m[3] != null ? m[3] : (m[4] != null ? m[4] : ''));
  return out;
}

function isOff(name, raw) {
  if (OFF_TAGS.has(name) || INERT_TAGS.has(name)) return true;
  if (!raw || raw.indexOf('=') === -1) return false;
  const a = attrsOf(raw);
  if (a.id && OFF_IDS.has(a.id)) return true;
  if ('data-usd-skip' in a) return true;
  if (a.class) for (const c of a.class.split(/\s+/)) if (OFF_CLASSES.has(c)) return true;
  return false;
}

/**
 * The per-block text runs of one built page, matching what UsdProse assembles in
 * the browser. `inLink` marks a run entirely inside an <a>, which the component
 * skips because a bracket there would take the link's styling.
 */
export function blockTexts(html) {
  // Scope to <main>, as the component does, falling back to the whole document.
  const mainOpen = html.search(/<main\b/);
  let scope = html;
  if (mainOpen !== -1) {
    const close = html.lastIndexOf('</main>');
    if (close > mainOpen) scope = html.slice(mainOpen, close);
  }

  const runs = [];
  let buf = '';
  let linkDepth = 0, bufHasLink = false, bufHasNonLink = false;
  const flush = () => {
    if (/\d/.test(buf)) runs.push({ text: buf, inLink: bufHasLink && !bufHasNonLink });
    buf = ''; bufHasLink = false; bufHasNonLink = false;
  };

  const tag = /<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>|<!\[[^\]]*\]>|<!([^>]*)>|<(\/?)([a-zA-Z][\w-]*)((?:"[^"]*"|'[^']*'|[^>"'])*?)(\/?)>/g;
  let last = 0, m;
  // Skipping is depth-counted per tag name so a nested same-name element cannot
  // end the skip early. That is the failure a naive non-greedy regex makes, and
  // svg-inside-svg and div-inside-div both occur on this site.
  let skip = null, skipDepth = 0;

  while ((m = tag.exec(scope))) {
    const text = scope.slice(last, m.index);
    last = tag.lastIndex;
    if (!skip && text) {
      buf += decode(text);
      if (/\S/.test(text)) { if (linkDepth > 0) bufHasLink = true; else bufHasNonLink = true; }
    }
    if (m[3] == null) continue;             // comment, doctype, CDATA
    const closing = m[2] === '/';
    const name = m[3].toLowerCase();
    const selfClose = m[5] === '/' || VOID.has(name);

    if (skip) {
      if (name === skip) {
        if (closing) { skipDepth--; if (skipDepth <= 0) skip = null; }
        else if (!selfClose) skipDepth++;
      }
      continue;
    }
    if (!closing && isOff(name, m[4] || '')) {
      if (!selfClose) { skip = name; skipDepth = 1; }
      continue;
    }
    if (name === 'a' && !selfClose) { if (closing) linkDepth = Math.max(0, linkDepth - 1); else linkDepth++; }
    if (!INLINE.has(name) && !selfClose) flush();
  }
  const tailText = scope.slice(last);
  if (!skip && tailText) buf += decode(tailText);
  flush();
  return runs;
}

/** The currency the page publishes to the client script, read off the note. */
export function pageCurrency(html) {
  const m = html.match(/<p class="usdp"[^>]*>/);
  if (!m) return { cur: null, note: false, fb: null };
  const a = attrsOf(m[0].slice(3, -1));
  const fb = parseFloat(a['data-usdp-fb'] || '');
  return { cur: a['data-usdp-cur'] || null, note: true, fb: isFinite(fb) && fb > 0 ? fb : null };
}

/**
 * Would the client script find a rate? On a spoke there is no currency panel, so
 * the baked snapshot is the only source: a currency missing from it means no
 * bracket can ever render on that country's spokes.
 */
export function hasRate(cur, fb) {
  if (!cur || FX_PAR.indexOf(cur) !== -1) return false;
  if (fb) return true;
  const r = fxFallback.rates[cur];
  return typeof r === 'number' && r > 0;
}

/** Every figure on a built page that WOULD receive a bracket in the browser. */
export function scanPage(html) {
  const { cur, note, fb } = pageCurrency(html);
  const rate = hasRate(cur, fb);
  const runs = blockTexts(html);
  const found = [];
  if (cur && rate && FX_PAR.indexOf(cur) === -1) {
    for (const run of runs) {
      if (run.inLink) continue;
      for (const h of findFigures(run.text, cur)) found.push({ text: run.text.slice(h.start, h.end), lo: h.lo, hi: h.hi });
    }
  }
  return { cur, note, fb, rate, runs, found };
}

// ---------------------------------------------------------------------------
// THE SELF-CHECK. Proves the fast scanner agrees with a real DOM on a sample, so
// the gate is never quietly measuring a different string from the browser's.
export async function crossCheck(files, readFile) {
  let JSDOM;
  try { ({ JSDOM } = await import('jsdom')); } catch { return { skipped: true, reason: 'jsdom is not installed' }; }
  const norm = s => s.replace(/\s+/g, ' ').trim();
  const OFF = '#fx, #hn-app, .estimator, #ttcCard, #calc, script, style, svg, select, option, input, textarea, button, label, noscript, .usdb, [data-usd-skip]';
  const INL = { B: 1, I: 1, EM: 1, STRONG: 1, SPAN: 1, A: 1, U: 1, SMALL: 1, ABBR: 1, CODE: 1, MARK: 1, SUP: 1, SUB: 1, TIME: 1, BDI: 1, WBR: 1 };
  const bad = [];
  for (const file of files) {
    const html = readFile(file);
    const dom = new JSDOM(html);
    const doc = dom.window.document;
    const scope = doc.querySelector('main') || doc.body;
    const walk = doc.createTreeWalker(scope, 4, {
      acceptNode(n) {
        if (!n.nodeValue) return 2;
        if (n.parentElement && n.parentElement.closest(OFF)) return 2;
        return 1;
      }
    });
    const out = [];
    let cursor = null, n;
    while ((n = walk.nextNode())) {
      let el = n.parentNode;
      while (el && el !== scope && INL[el.nodeName]) el = el.parentNode;
      if (!el) continue;
      if (!cursor || cursor.block !== el) { cursor = { block: el, text: '' }; out.push(cursor); }
      cursor.text += n.nodeValue;
    }
    const viaDom = out.map(r => r.text).filter(t => /\d/.test(t)).map(norm).join('\u0001');
    const viaFast = blockTexts(html).map(r => r.text).filter(t => /\d/.test(t)).map(norm).join('\u0001');
    dom.window.close();
    if (viaDom !== viaFast) {
      const a = viaDom.split('\u0001'), b = viaFast.split('\u0001');
      let i = 0;
      while (i < a.length && i < b.length && a[i] === b[i]) i++;
      bad.push({ file, index: i, dom: (a[i] || '(none)').slice(0, 120), fast: (b[i] || '(none)').slice(0, 120), domRuns: a.length, fastRuns: b.length });
    }
  }
  return { skipped: false, checked: files.length, bad };
}
