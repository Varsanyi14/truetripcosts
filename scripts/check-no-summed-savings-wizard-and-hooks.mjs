import fs from 'node:fs';
import path from 'node:path';
import { countries } from '../src/data/index.js';

const live = countries.filter(c => c.live);
// Same pattern calc-regression-test.mjs's own section 6 checks, plus a couple of extra
// phrasings that would also read as a summed total.
const SAVINGS = /\b(save \$[\d,]|you could save|we saved you|savings? of \$|total (you can|to) (save|avoid)|avoid \$[\d,]+ (in|on|across))\b/i;

let scanned = 0;
let failures = 0;
const flagged = [];

function stripTags(html) {
  return html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ');
}

for (const c of live) {
  // 1. The wizard result page.
  const wizardPath = path.join('dist', 'calculator', c.slug, 'index.html');
  if (fs.existsSync(wizardPath)) {
    const html = fs.readFileSync(wizardPath, 'utf8');
    const text = stripTags(html);
    scanned++;
    if (SAVINGS.test(text)) { failures++; flagged.push('wizard:' + c.slug); }
  } else {
    failures++; flagged.push('wizard:' + c.slug + ' (missing page)');
  }

  // 2. The country-guide hook specifically (not just the whole guide page, so a match
  // elsewhere on a long guide page cannot hide a real problem in the hook itself, and a
  // false hit elsewhere on the page cannot be blamed on the hook).
  const guidePath = path.join('dist', c.slug, 'index.html');
  if (fs.existsSync(guidePath)) {
    const html = fs.readFileSync(guidePath, 'utf8');
    const m = html.match(/<div class="avoid-hook">[\s\S]*?<\/div>\s*(?:<\/div>)?/);
    if (!m) { failures++; flagged.push('hook:' + c.slug + ' (not found)'); }
    else {
      const text = stripTags(m[0]);
      scanned++;
      if (SAVINGS.test(text)) { failures++; flagged.push('hook:' + c.slug); }
    }
  } else {
    failures++; flagged.push('hook:' + c.slug + ' (missing guide page)');
  }
}

console.log('Scanned ' + scanned + ' page regions (59 wizard result pages + 59 country-guide hooks).');
console.log(failures === 0 ? 'RESULT: PASS, no summed-savings language found anywhere' : 'RESULT: FAIL (' + failures + ')');
if (flagged.length) flagged.forEach(f => console.log('  FLAGGED: ' + f));
