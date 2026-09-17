// BRIEF-4 gate: country-change carry-vs-reset.
//
// Run from the repo root, no build needed:
//     node scripts/check-country-change-carry.mjs
//
// WHAT THIS PROTECTS. Changing the destination mid-trip (calc-wizard.js:588, and the
// Edit-trip dialog) now carries the rest of the trip across that navigation instead of
// throwing it away, EXCEPT the two figures that are honestly country-specific: room price
// always resets to the new country's own typical, and flight price resets unless the
// reader actually typed their own fare. None of the other gates (calc-regression-test.mjs,
// the summed-savings checker, the search-index checker) ever reference calc-wizard.js, so
// this carry/reset arithmetic had no automated coverage at all before this brief.
//
// WHY THIS SHAPE. calc-wizard.js runs as an ES module inside the built static page, and
// this repo has no browser test runner (see calc-regression-test.mjs's own header: it
// asserts against calc-engine.js and CalcResult.astro as static source and built HTML,
// never by driving the page). Changing the country and confirming what carried is
// explicitly a live-route, screenshot-verified check (see the standing rule for calc
// surfaces) -- that is a human-in-a-browser step this script does not attempt to replace.
// What it DOES do: pull the real answersToShareParams()/countryChangeHref() function
// bodies out of the shipped file, byte for byte between the same markers below, and run
// them under Node with their few collaborators (snapshotControls, state,
// questionParamKeys) mocked out. If the markers ever move or the functions are renamed,
// this fails loudly rather than silently testing nothing, the same principle
// check-content.py's own header states for its own scope.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, '..', 'src', 'scripts', 'calc-wizard.js');
const src = fs.readFileSync(SRC, 'utf8');

const startMarker = 'function answersToShareParams(mode) {';
const endMarker = "return '/calculator/' + slug + (qs ? ('?' + qs) : '');\n  }";
const startIdx = src.indexOf(startMarker);
const endIdx = startIdx === -1 ? -1 : src.indexOf(endMarker, startIdx);

let fails = 0;
const check = (label, ok, detail) => {
  if (!ok) fails++;
  console.log(`  ${ok ? 'ok   ' : 'FAIL '} ${label}${detail ? '  ' + detail : ''}`);
};

if (startIdx === -1 || endIdx === -1) {
  console.log('FAIL  could not locate answersToShareParams()/countryChangeHref() in calc-wizard.js');
  console.log('      markers moved or functions renamed -- update this gate to match');
  console.log('\nRESULT: FAIL');
  process.exit(1);
}
const extracted = src.slice(startIdx, endIdx + endMarker.length);

// Build one sandboxed instance of the extracted functions against a given mock scene.
// scene.controls maps a snapshotControls() key to whatever it should return, matching
// the real snapshotControls' own per-key return shapes exactly.
function run(scene) {
  const questionParamKeys = scene.questionParamKeys || [];
  const state = { origin: { flight: scene.originFlight || 'estimate', hotel: scene.originHotel || 'estimate' } };
  function snapshotControls(key) {
    if (!(key in scene.controls)) throw new Error('unmocked snapshotControls key: ' + key);
    return scene.controls[key];
  }
  const factory = new Function(
    'URLSearchParams', 'snapshotControls', 'state', 'questionParamKeys',
    extracted + '\nreturn { answersToShareParams, countryChangeHref };'
  );
  return factory(URLSearchParams, snapshotControls, state, questionParamKeys);
}

function baseScene(overrides) {
  return Object.assign({
    questionParamKeys: ['carrier', 'rail', 'rental'],
    originFlight: 'estimate',
    originHotel: 'estimate',
    controls: {
      travelers: { value: '3' },
      nights: { value: '5' },
      style: { value: '1' },
      flights: { mode: 'known', price: '1000' },
      hotel: { value: '140', booking: 'online', roomsValue: '2' },
      card: { value: 'assumed' },
      carrier: { value: 'other' },
      rail: { value: 'no' },
      rental: { value: 'yes' },
      goods: { mode: 'yes', amount: '200' },
      date: { value: '2027-03-15' },
    },
  }, overrides || {});
}

console.log('1. Country-change mode omits room and an un-typed flight price, carries the rest');
{
  const { answersToShareParams } = run(baseScene());
  const p = answersToShareParams('countryChange');
  check('room is NOT carried (country-specific, must reset)', !p.has('room'));
  check('flightprice is NOT carried (was an estimate, never typed)', !p.has('flightprice'));
  check('flight MODE still carries ("known")', p.get('flight') === 'known');
  check('trav carries', p.get('trav') === '3');
  check('nights carries', p.get('nights') === '5');
  check('style carries', p.get('style') === '1');
  check('card carries', p.get('card') === 'assumed');
  check('booking carries (not a price)', p.get('booking') === 'online');
  check('rooms COUNT carries (party-driven, not country-driven)', p.get('rooms') === '2');
  check('goods mode and amount carry', p.get('goods') === 'yes' && p.get('goodsamt') === '200');
  check('date carries', p.get('date') === '2027-03-15');
  check('every wizard-gated answer carries (carrier/rail/rental)', p.get('carrier') === 'other' && p.get('rail') === 'no' && p.get('rental') === 'yes');
}

console.log('\n2. Country-change mode carries a flight price the reader actually TYPED');
{
  const { answersToShareParams } = run(baseScene({ originFlight: 'figure' }));
  const p = answersToShareParams('countryChange');
  check('flightprice IS carried (their own figure, honestly theirs to keep)', p.get('flightprice') === '1000');
  check('room is still NOT carried even though flight was', !p.has('room'));
}

console.log('\n3. Room price is a HARD reset, even if the reader typed their own figure');
{
  const scene = baseScene({ originHotel: 'figure' });
  scene.controls.hotel = { value: '999', booking: 'online', roomsValue: '2' };
  const { answersToShareParams } = run(scene);
  const p = answersToShareParams('countryChange');
  check("room is NOT carried, even when it was the reader's own figure", !p.has('room'));
}

console.log('\n4. Flight mode "exclude" carries as a decision; no price to reset');
{
  const scene = baseScene();
  scene.controls.flights = { mode: 'exclude', price: '' };
  const { answersToShareParams } = run(scene);
  const p = answersToShareParams('countryChange');
  check('flight mode "exclude" carries', p.get('flight') === 'exclude');
  check('no flightprice param at all when price is empty', !p.has('flightprice'));
}

console.log('\n5. Normal share-link mode (no argument) is completely unchanged');
{
  const { answersToShareParams } = run(baseScene());
  const p = answersToShareParams();
  check('room IS included in a normal share link', p.get('room') === '140');
  check('flightprice IS included in a normal share link, even as an estimate', p.get('flightprice') === '1000');
  check('every other field matches too', p.get('trav') === '3' && p.get('card') === 'assumed');
}

console.log('\n6. countryChangeHref: bare slug when nothing carries, and destination never leaks in as a param');
{
  const emptyScene = {
    questionParamKeys: [], originFlight: 'estimate', originHotel: 'estimate',
    controls: {
      travelers: { value: null }, nights: { value: null }, style: { value: null },
      flights: { mode: null, price: null }, hotel: { value: null, booking: null, roomsValue: null },
      card: { value: null }, goods: { mode: null, amount: '' }, date: { value: '' },
    },
  };
  const { countryChangeHref: hrefEmpty } = run(emptyScene);
  check('bare slug with no query string when nothing carries', hrefEmpty('thailand') === '/calculator/thailand');

  const { countryChangeHref } = run(baseScene());
  const href = countryChangeHref('thailand');
  check('href targets the new country path', href.startsWith('/calculator/thailand'));
  check('no destination param leaks into the query string', !/[?&]destination=/.test(href));
}

console.log('\nRESULT:', fails ? 'FAIL' : 'PASS');
process.exit(fails ? 1 : 0);
