// Renders the money rules pocket card to a phone-sized JPG, so a reader can long press
// and save it to Photos. The web page is the primary artefact; this is the "keep it in my
// camera roll" fallback, and it is also the thing that works with no signal at all.
//
// WHY THIS EXISTS: the page is taller than one phone screen, so a screenshot never
// captures all eight rules. Print to PDF captures everything but a PDF is not what anyone
// wants in their camera roll on a trip. This produces one 1080x1920 image, the shape of a
// phone screen, holding the whole card.
//
// SINGLE SOURCE OF TRUTH: the rules are read from src/data/money-rules.js, the same file
// the page renders from, so the image cannot drift from the page. If you change a rule,
// rerun this and commit the new JPG.
//
// RUN:  node scripts/build-rules-card.mjs
// Needs Chromium once:  npx playwright install chromium
// Needs the brand fonts:  npm i --no-save @fontsource/ibm-plex-mono @fontsource/fraunces
//
// Fonts are embedded as base64 rather than pulled from Google, because a headless browser
// racing a webfont download silently produces a fallback-font image, which is worse than
// an obvious failure.

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { moneyRules } from '../src/data/money-rules.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const b64 = (rel) => {
  const p = path.join(root, rel);
  if (!fs.existsSync(p)) throw new Error(`Missing font file: ${rel}\nRun: npm i --no-save @fontsource/ibm-plex-mono @fontsource/fraunces`);
  return fs.readFileSync(p).toString('base64');
};

const FONTS = {
  mono600: b64('node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-600-normal.woff2'),
  mono500: b64('node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2'),
  serif500: b64('node_modules/@fontsource/fraunces/files/fraunces-latin-500-normal.woff2'),
  sans400: b64('node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2'),
};

// The mark, same geometry and same vector paths as src/components/LogoMark.astro. Kept in
// sync by hand; it is six shapes and has not changed since the export.
const MARK = `
<svg viewBox="0 0 100 100" width="84" height="84" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(2,2) scale(0.18285714) translate(-487.5,-427.5)">
    <rect x="487.5" y="427.5" width="525" height="525" rx="52.5" fill="#16302C"/>
    <g fill="#F5F4EF">
      <path transform="translate(587.197599,753.249875)" d="M 65.5625 -119.6875 L 65.5625 0 L 34.09375 0 L 34.09375 -119.6875 L 2.421875 -119.6875 L 2.421875 -146.515625 L 97.015625 -146.515625 L 97.015625 -119.6875 Z"/>
      <path transform="translate(694.55624,753.249875)" d="M 65.5625 -119.6875 L 65.5625 0 L 34.09375 0 L 34.09375 -119.6875 L 2.421875 -119.6875 L 2.421875 -146.515625 L 97.015625 -146.515625 L 97.015625 -119.6875 Z"/>
      <path transform="translate(801.914881,753.249875)" d="M 104.28125 -38.9375 C 104.28125 -32.78125 103.289062 -27.097656 101.3125 -21.890625 C 99.332031 -16.679688 96.4375 -12.171875 92.625 -8.359375 C 88.8125 -4.546875 84.003906 -1.574219 78.203125 0.546875 C 72.410156 2.671875 65.703125 3.734375 58.078125 3.734375 C 50.304688 3.734375 43.375 2.5625 37.28125 0.21875 C 31.195312 -2.125 26.066406 -5.347656 21.890625 -9.453125 C 17.710938 -13.566406 14.519531 -18.375 12.3125 -23.875 C 10.113281 -29.375 9.015625 -35.273438 9.015625 -41.578125 L 9.015625 -104.9375 C 9.015625 -111.25 10.113281 -117.15625 12.3125 -122.65625 C 14.519531 -128.15625 17.710938 -132.957031 21.890625 -137.0625 C 26.066406 -141.164062 31.195312 -144.390625 37.28125 -146.734375 C 43.375 -149.085938 50.304688 -150.265625 58.078125 -150.265625 C 65.703125 -150.265625 72.410156 -149.195312 78.203125 -147.0625 C 84.003906 -144.9375 88.8125 -141.96875 92.625 -138.15625 C 96.4375 -134.34375 99.332031 -129.832031 101.3125 -124.625 C 103.289062 -119.414062 104.28125 -113.734375 104.28125 -107.578125 L 104.28125 -93.28125 L 76.125 -93.28125 L 76.125 -106.921875 C 76.125 -112.054688 74.65625 -116.125 71.71875 -119.125 C 68.78125 -122.132812 64.378906 -123.640625 58.515625 -123.640625 C 52.648438 -123.640625 48.25 -122.097656 45.3125 -119.015625 C 42.382812 -115.941406 40.921875 -112.054688 40.921875 -107.359375 L 40.921875 -38.9375 C 40.921875 -34.25 42.382812 -30.398438 45.3125 -27.390625 C 48.25 -24.378906 52.648438 -22.875 58.515625 -22.875 C 64.378906 -22.875 68.78125 -24.378906 71.71875 -27.390625 C 74.65625 -30.398438 76.125 -34.46875 76.125 -39.59375 L 76.125 -53.234375 L 104.28125 -53.234375 Z"/>
    </g>
    <g fill="#E8A54A">
      <rect x="690" y="795" width="120" height="12"/>
      <rect x="690" y="819" width="120" height="12"/>
    </g>
  </g>
</svg>`;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function html(slug, data) {
  const lead = data.rules.find(r => r.lead) || data.rules[0];
  const rest = data.rules.filter(r => r !== lead);
  const row = (r, n, isLead) => `
    <div class="r${isLead ? ' lead' : ''}">
      <div class="n">${n}</div>
      <div class="tx"><div class="h">${esc(r.h)}</div><div class="p">${esc(r.p)}</div></div>
    </div>`;

  return `<!doctype html><html><head><meta charset="utf-8"><style>
    @font-face{font-family:M;src:url(data:font/woff2;base64,${FONTS.mono600}) format('woff2');font-weight:600}
    @font-face{font-family:M;src:url(data:font/woff2;base64,${FONTS.mono500}) format('woff2');font-weight:500}
    @font-face{font-family:S;src:url(data:font/woff2;base64,${FONTS.serif500}) format('woff2');font-weight:500}
    @font-face{font-family:I;src:url(data:font/woff2;base64,${FONTS.sans400}) format('woff2');font-weight:400}
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:1080px;height:1920px;background:#F5F4EF;font-family:I;display:flex;flex-direction:column;padding:56px 52px 44px}
    .top{display:flex;align-items:center;gap:20px;margin-bottom:34px}
    .wm{font-family:M;font-weight:600;font-size:25px;letter-spacing:.14em;text-transform:uppercase;color:#16302C}
    .eyebrow{font-family:M;font-weight:600;font-size:22px;letter-spacing:.16em;text-transform:uppercase;color:#0A5644;margin-bottom:14px}
    h1{font-family:S;font-weight:500;font-size:76px;line-height:1;letter-spacing:-.02em;color:#16302C;margin-bottom:20px}
    .stamp{display:inline-block;font-family:M;font-weight:500;font-size:20px;letter-spacing:.05em;text-transform:uppercase;color:#10502C;background:#E7F3EA;border-radius:999px;padding:11px 20px;margin-bottom:30px}
    .list{display:flex;flex-direction:column;gap:12px;flex:1}
    .r{display:flex;gap:20px;background:#fff;border:1px solid #E5E3DB;border-radius:16px;padding:20px 24px;align-items:flex-start}
    .r.lead{background:#16302C;border-color:#16302C;border-top:6px solid #E8A54A}
    .n{font-family:M;font-weight:600;font-size:28px;color:#6F6E66;width:34px;flex:none;line-height:1.25}
    .r.lead .n{color:#E8A54A}
    .h{font-family:S;font-weight:500;font-size:32px;line-height:1.16;color:#16302C;margin-bottom:7px;letter-spacing:-.01em}
    .r.lead .h{color:#fff}
    .p{font-size:24px;line-height:1.36;color:#3B4A46}
    .r.lead .p{color:#C6D6D0}
    .foot{display:flex;justify-content:space-between;align-items:center;margin-top:26px;padding-top:20px;border-top:1px solid #E5E3DB}
    .url{font-family:M;font-weight:500;font-size:21px;letter-spacing:.04em;color:#16302C;white-space:nowrap}
    .note{font-size:18px;color:#6F6E66;text-align:right;max-width:430px;line-height:1.35;padding-left:24px}
  </style></head><body>
    <div class="top">${MARK}<div class="wm">True Trip Costs</div></div>
    <div class="eyebrow">${esc(data.h1.replace(/ money rules$/i, ''))} / Money rules</div>
    <h1>${esc(data.h1)}</h1>
    <div><span class="stamp">Rules as of ${esc(data.checked)}</span></div>
    <div class="list">
      ${row(lead, 1, true)}
      ${rest.map((r, i) => row(r, i + 2, false)).join('')}
    </div>
    <div class="foot">
      <div class="url">truetripcosts.com/${slug}/rules</div>
      <div class="note">These rules hold steady. Check the guide for current fees and rates.</div>
    </div>
  </body></html>`;
}

const only = process.argv[2];
const slugs = only ? [only] : Object.keys(moneyRules);
// CHROMIUM_PATH is an escape hatch for machines that already have a Chromium and do not
// want a second copy downloaded. Left unset, Playwright uses its own managed browser.
const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}
);

for (const slug of slugs) {
  const data = moneyRules[slug];
  if (!data) { console.error(`No rules for "${slug}"`); process.exitCode = 1; continue; }

  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  await page.setContent(html(slug, data), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);

  // Overflow means a rule was added or the copy grew past the frame. Fail loudly rather
  // than quietly shipping a card with a rule cropped off the bottom.
  const overflow = await page.evaluate(() => document.body.scrollHeight - 1920);
  if (overflow > 0) throw new Error(`Card content overflows by ${overflow}px for "${slug}". Shorten a rule or raise the frame height.`);

  const out = path.join(root, 'public', 'rules-cards', `${slug}.jpg`);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await page.screenshot({ path: out, type: 'jpeg', quality: 90 });
  await page.close();
  console.log(`Wrote public/rules-cards/${slug}.jpg  (1080x1920, ${(fs.statSync(out).size / 1024).toFixed(0)}KB)`);
}

await browser.close();
