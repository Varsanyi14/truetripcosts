// Generates every raster and standalone brand asset from the same vector paths that
// src/components/LogoMark.astro renders. One source, so a favicon can never drift from
// the mark in the site header.
//
// Writes:
//   public/favicon.svg          the mark, scalable
//   public/apple-touch-icon.png 180x180
//   public/icon-192.png         PWA
//   public/icon-512.png         PWA
//   public/favicon-32.png       raster fallback, feeds the .ico
//   public/favicon-16.png       raster fallback, feeds the .ico
//   public/og-a.png             social card, option A
//   public/og-b.png             social card, option B
//
// favicon.ico is assembled from the 16 and 32 PNGs by scripts/make-favicon-ico.py,
// because .ico is a container format and this script only rasterises.
//
// RUN:  node scripts/build-brand-assets.mjs
// Needs Chromium once:  npx playwright install chromium
// Needs the brand fonts (for the social cards only):
//   npm i --no-save playwright @fontsource/ibm-plex-mono @fontsource/fraunces @fontsource/inter
//
// App icons need a filled background, not transparency: iOS composites a transparent
// apple-touch-icon onto black, which would lose the mark's dark square entirely. So the
// icons are drawn on the brand ink with the mark inset, rather than on nothing.

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const INK = '#16302C', PAPER = '#F5F4EF', CREAM = '#F5F4EF', AMBER = '#F0A83C';

// Pulled out of src/components/LogoMark.astro so the two cannot diverge. If that file's
// paths ever change, this throws rather than silently generating a stale icon.
function pathsFromComponent() {
  const src = fs.readFileSync(path.join(root, 'src/components/LogoMark.astro'), 'utf8');
  const glyphs = [...src.matchAll(/<path transform="translate\(([\d.]+),753\.249875\)" d="([^"]+)"/g)];
  const words = [...src.matchAll(/<path transform="translate\(([\d.]+),1038\.324851\)" d="([^"]+)"/g)];
  if (glyphs.length !== 3) throw new Error(`Expected 3 TTC glyphs in LogoMark.astro, found ${glyphs.length}`);
  if (words.length !== 13) throw new Error(`Expected 13 wordmark glyphs in LogoMark.astro, found ${words.length}`);
  return {
    ttc: glyphs.map(m => `<path transform="translate(${m[1]},753.249875)" d="${m[2]}"/>`).join(''),
    word: words.map(m => `<path transform="translate(${m[1]},1038.324851)" d="${m[2]}"/>`).join(''),
  };
}
const P = pathsFromComponent();

// file:// URLs do not resolve under page.setContent (the document origin is about:blank),
// and they fail silently: you get a card rendered in a fallback font with a missing image
// and no error. So fonts and bitmaps are inlined as data URIs.
const b64 = (rel) => {
  const p = path.join(root, rel);
  if (!fs.existsSync(p)) throw new Error(`Missing asset: ${rel}\nRun: npm i --no-save @fontsource/ibm-plex-mono @fontsource/fraunces`);
  return fs.readFileSync(p).toString('base64');
};
const FONT_SERIF = b64('node_modules/@fontsource/fraunces/files/fraunces-latin-500-normal.woff2');
const FONT_MONO  = b64('node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2');

const SHARED = 'translate(2,2) scale(0.18285714) translate(-487.5,-427.5)';
const HORIZ = 'translate(118,63) scale(0.76023) translate(-503.447919,-1038.324851)';

const markGroup = (radius = 52.5) => `
  <g transform="${SHARED}">
    <rect x="487.5" y="427.5" width="525" height="525" rx="${radius}" fill="${INK}"/>
    <g fill="${CREAM}">${P.ttc}</g>
    <g fill="${AMBER}"><rect x="690" y="795" width="120" height="12"/><rect x="690" y="819" width="120" height="12"/></g>
  </g>`;

// The mark alone. Used for favicon.svg, where the browser supplies the surrounding chrome.
const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="True Trip Costs">${markGroup()}</svg>`;

// App icon: the mark's own square, edge to edge, so it reads at 16px. At that size an
// inset square inside another square just turns into mud, so the container IS the mark.
const appIcon = (px) => `<!doctype html><meta charset="utf-8"><style>
  html,body{margin:0;padding:0;width:${px}px;height:${px}px;overflow:hidden}
  svg{display:block}
</style>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525 525" width="${px}" height="${px}">
  <rect width="525" height="525" rx="${Math.round(525 * 0.18)}" fill="${INK}"/>
  <g transform="translate(-487.5,-427.5)">
    <g fill="${CREAM}">${P.ttc}</g>
    <g fill="${AMBER}"><rect x="690" y="795" width="120" height="12"/><rect x="690" y="819" width="120" height="12"/></g>
  </g>
</svg>`;

// At 16px the TTC letters occupy about four pixels each and turn to mud. So the smallest
// favicon drops the letters and shows the amber ledger double-line alone, scaled up: it is
// the brand's signature element and it stays crisp at any size. 32px and up keep the full
// mark. Modern browsers prefer favicon.svg anyway; this is the legacy fallback.
const tinyIcon = (px) => `<!doctype html><meta charset="utf-8"><style>
  html,body{margin:0;padding:0;width:${px}px;height:${px}px;overflow:hidden}svg{display:block}
</style>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525 525" width="${px}" height="${px}">
  <rect width="525" height="525" rx="${Math.round(525 * 0.18)}" fill="${INK}"/>
  <g fill="${AMBER}">
    <rect x="105" y="188" width="315" height="52" rx="10"/>
    <rect x="105" y="285" width="315" height="52" rx="10"/>
  </g>
</svg>`;

const horizLockup = (h) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 100" height="${h}" width="${h * 5}">
  ${markGroup()}
  <g transform="${HORIZ}" fill="${INK}">${P.word}</g>
</svg>`;

function ogCard(variant) {
  // Both options carry the lockup and the positioning line, because a social card with no
  // brand name on it is a decoration. Option A is typographic. Option B keeps the existing
  // illustration on the right so the card still looks like the site.
  const illoB64 = variant === 'b' ? b64('public/og.png') : null;
  const illo = illoB64
    ? `<img class="illo" src="data:image/png;base64,${illoB64}">` : '';
  const wide = variant === 'b';
  return `<!doctype html><meta charset="utf-8"><style>
    @font-face{font-family:F;src:url(data:font/woff2;base64,${FONT_SERIF}) format('woff2');font-weight:500}
    @font-face{font-family:M;src:url(data:font/woff2;base64,${FONT_MONO}) format('woff2');font-weight:500}
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:1200px;height:630px;background:${PAPER};position:relative;overflow:hidden;
         display:flex;flex-direction:column;justify-content:space-between;
         padding:64px 76px}
    .illo{position:absolute;right:-70px;bottom:-30px;height:600px;opacity:.9;z-index:1}
    .top,.mid,.bot{position:relative;z-index:2}
    .mid{max-width:${wide ? '620px' : '900px'}}
    h1{font-family:F;font-weight:500;font-size:${wide ? '66px' : '82px'};line-height:1.03;
       letter-spacing:-.025em;color:${INK}}
    .url{font-family:M;font-weight:500;font-size:22px;letter-spacing:.1em;
         text-transform:uppercase;color:#0A5644}
    .bars{display:flex;flex-direction:column;gap:9px;margin-bottom:18px}
    .bars i{display:block;width:86px;height:8px;background:${AMBER};border-radius:4px}
  </style>${illo}
  <div class="top">${horizLockup(50)}</div>
  <div class="mid"><h1>The fees nobody<br>quotes you.</h1></div>
  <div class="bot">
    <div class="bars"><i></i><i></i></div>
    <div class="url">truetripcosts.com</div>
  </div>`;
}

const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}
);
const shot = async (html, w, h, out) => {
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(root, 'public', out), omitBackground: false });
  await page.close();
  console.log(`  ${out}  ${w}x${h}`);
};

console.log('Brand assets:');
fs.writeFileSync(path.join(root, 'public/favicon.svg'), markSvg);
console.log('  favicon.svg');
for (const [px, name] of [[180, 'apple-touch-icon.png'], [192, 'icon-192.png'], [512, 'icon-512.png'], [32, 'favicon-32.png'], [48, 'favicon-48.png']]) {
  await shot(appIcon(px), px, px, name);
}
await shot(tinyIcon(16), 16, 16, 'favicon-16.png');
await shot(ogCard('a'), 1200, 630, 'og-a.png');
await shot(ogCard('b'), 1200, 630, 'og-b.png');
await browser.close();
console.log('\nPick og-a or og-b, rename the winner to og.png, delete the other.');
console.log('Then run: python3 scripts/make-favicon-ico.py');
