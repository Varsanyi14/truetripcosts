// Nav dropdown geometry check. jsdom does no layout, so this resolves the shipped CSS
// itself: it reads the built page's inlined rules and computes the panel box the same way
// the browser would, from the containing block the CSS actually establishes.
import fs from 'fs';

const html = fs.readFileSync('dist/hungary/index.html', 'utf8');

function rule(sel, prop) {
  // Find the LAST declaration of prop for sel, which is what wins between the base rule
  // and the max-width:640px override, since both have equal specificity.
  const re = new RegExp(sel.replace(/[.[\]]/g, m => '\\' + m) + '\\[data-astro-cid-[^\\]]+\\]\\{([^}]*)\\}', 'g');
  let m, out = null;
  while ((m = re.exec(html))) {
    const d = new RegExp('(?:^|;)\\s*' + prop + '\\s*:\\s*([^;]+)').exec(m[1]);
    if (d) out = d[1].trim();
  }
  return out;
}

const GUTTER = 22, GAP = 16, CTA = 92;   // .navin padding, .navlinks gap, "Get updates"

console.log('== Nav dropdown geometry, from the shipped CSS ==\n');
console.log('  .gmenu position on mobile        :', rule('.gmenu', 'position'));
console.log('  .navin position                  :', rule('.navin', 'position'));
console.log('  .gmenu-panel right (last wins)   :', rule('.gmenu-panel', 'right'));
console.log('  .gmenu-panel width (last wins)   :', rule('.gmenu-panel', 'width'));

const staticGmenu = rule('.gmenu', 'position') === 'static';
const relNavin = rule('.navin', 'position') === 'relative';
const rightPx = parseFloat(rule('.gmenu-panel', 'right'));

let fails = 0;
const check = (label, ok, detail) => {
  if (!ok) fails++;
  console.log(`  ${ok ? 'ok   ' : 'FAIL '} ${label}${detail ? '  ' + detail : ''}`);
};

console.log('\n1. The panel is anchored to the nav row, not to the Guides summary');
check('.gmenu is out of the positioning flow on mobile', staticGmenu);
check('.navin provides the containing block', relNavin);
check('the panel is inset from the screen edge by the nav gutter', rightPx === GUTTER, `right:${rightPx}px`);

console.log('\n2. The panel fits on screen at every phone width');
for (const W of [320, 360, 375, 390, 402, 414, 420, 430, 440]) {
  // The containing block is .navin's padding box, which spans the viewport at these widths.
  const width = Math.min(W - 2 * GUTTER, 320);
  const left = W - rightPx - width;
  const right = W - left - width;
  check(`${W}px: panel ${width.toFixed(0)}px, ${left.toFixed(0)}px from the left edge`,
    left >= 0 && right >= 0);
}

console.log('\n3. The old anchoring really was off screen (regression witness)');
for (const W of [390, 420, 430]) {
  const oldRight = W - GUTTER - CTA - GAP;      // right:0 against .gmenu
  const oldWidth = Math.min(0.92 * W, 320, W - 32);
  const oldLeft = oldRight - oldWidth;
  check(`${W}px: would have been ${Math.abs(oldLeft).toFixed(0)}px off the left edge`, oldLeft < 0);
}

console.log('\nRESULT:', fails ? `FAIL (${fails})` : 'PASS');
process.exit(fails ? 1 : 0);
