// Finds CSS grid containers that hold LOOSE TEXT beside element children.
//
// The bug this catches, which shipped on /hotel-tax-map: a grid container declared with
// `grid-template-columns:18px 1fr` and three children (a swatch span, a <b>, and a bare
// text run). CSS grid wraps each contiguous run of loose text in an ANONYMOUS GRID ITEM,
// so the text became item 3, landed in row 2 of the 18px column, and rendered one word per
// line. The build passes, every content gate passes, and the page is unreadable.
//
// Signature: an element matched by a rule containing `display:grid` that has at least one
// element child AND at least one non-whitespace text node directly inside it. That is
// almost always a mistake, because it means the author was thinking in flow layout while
// the browser was assigning grid tracks.
//
// Narrow columns are reported separately, because a grid whose first track is a fixed small
// width is where this goes from "slightly off" to "unreadable".
import fs from 'node:fs';
import path from 'node:path';
import { JSDOM } from 'jsdom';

const pages = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name === 'index.html') pages.push(p);
  }
})('dist');

// Running jsdom over all 456 pages exhausts the default Node heap, and a gate that needs a
// --max-old-space-size flag is a gate nobody runs. So: one page per unique STYLESHEET SET.
// Pages linking the same /_astro bundles are built from the same components, and a grid
// container's child structure is decided by the component, not by the country data poured
// into it, so one page per template covers every grid container the site can render.
// The honest limit: if a component ever emits a loose text node only for certain data, this
// samples rather than proves. It would still catch it on any page that hits that branch.
const bySignature = new Map();
for (const file of pages) {
  const html = fs.readFileSync(file, 'utf8');
  const sig = (html.match(/\/_astro\/[^"']+\.css/g) || []).sort().join('|');
  if (!bySignature.has(sig)) bySignature.set(sig, file);
}
const sampled = [...bySignature.values()];

const findings = new Map();

for (const file of sampled) {
  const html = fs.readFileSync(file, 'utf8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  // Collect selectors from every rule that declares display:grid, and note whether the
  // rule pins a small fixed first column.
  const gridSel = new Map();
  // Astro puts component CSS in a LINKED stylesheet under /_astro once it is big enough,
  // not in an inline <style>. Reading only inline styles made an earlier version of this
  // check find zero grid rules and pass vacuously, which is worse than no check at all.
  const sheets = [...doc.querySelectorAll('style')].map(s => s.textContent || '');
  for (const link of doc.querySelectorAll('link[rel=stylesheet][href^="/_astro/"]')) {
    const f = path.join('dist', link.getAttribute('href'));
    if (fs.existsSync(f)) sheets.push(fs.readFileSync(f, 'utf8'));
  }
  for (const css of sheets) {
    for (const m of css.matchAll(/([^{}]+)\{([^}]*display\s*:\s*grid[^}]*)\}/g)) {
      const decls = m[2];
      const tpl = /grid-template-columns\s*:\s*([^;]+)/.exec(decls);
      let narrow = false;
      if (tpl) {
        const first = tpl[1].trim().split(/\s+/)[0];
        const px = /^(\d+(?:\.\d+)?)px$/.exec(first);
        if (px && parseFloat(px[1]) <= 80) narrow = true;
      }
      for (let sel of m[1].split(',')) {
        sel = sel.trim().replace(/\[data-astro-cid-[^\]]+\]/g, '');
        if (sel) gridSel.set(sel, narrow || gridSel.get(sel) === true);
      }
    }
  }

  for (const [sel, narrow] of gridSel) {
    let els;
    try { els = doc.querySelectorAll(sel); } catch { continue; }
    for (const el of els) {
      const elementChildren = el.children.length;
      if (elementChildren === 0) continue;
      const looseText = [...el.childNodes]
        .filter(n => n.nodeType === 3 && (n.textContent || '').trim().length > 0)
        .map(n => (n.textContent || '').trim());
      if (looseText.length === 0) continue;
      const key = sel + ' :: ' + looseText[0].slice(0, 50);
      if (!findings.has(key)) {
        findings.set(key, {
          sel, narrow, elementChildren,
          gridItems: elementChildren + looseText.length,
          sample: looseText[0].slice(0, 70),
          pages: new Set(),
        });
      }
      findings.get(key).pages.add(file.replace('dist', '').replace('/index.html', '') || '/');
    }
  }
  dom.window.close();
}

console.log('== grid containers holding loose text beside element children ==');
console.log('   scanned', sampled.length, 'page templates covering', pages.length, 'built pages\n');

const rows = [...findings.values()].sort((a, b) => (Number(b.narrow) - Number(a.narrow)) || b.pages.size - a.pages.size);
if (!rows.length) console.log('  none. every grid container holds only element children.');

let severe = 0;
for (const r of rows) {
  if (r.narrow) severe++;
  console.log(`  ${r.narrow ? 'SEVERE' : 'note  '}  ${r.sel}`);
  console.log(`           grid items: ${r.gridItems} (${r.elementChildren} elements + loose text)`);
  console.log(`           loose text: "${r.sample}..."`);
  console.log(`           on ${r.pages.size} page(s), e.g. ${[...r.pages].slice(0, 3).join(', ')}`);
  if (r.narrow) console.log('           narrow fixed first column, so the loose text will wrap one word per line');
}

console.log('\nRESULT:', severe ? 'FAIL' : (rows.length ? 'PASS (notes)' : 'PASS'));
process.exit(severe ? 1 : 0);
