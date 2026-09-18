// BRIEF-1-2 gate: Airbnb/short-term rental reframe (no room multiplier, ever).
//
// Run from the repo root, no build needed:
//     node scripts/check-rental-reframe.mjs
//
// WHAT THIS PROTECTS. A rental is one unit booked whole, never N rooms scaled to party
// size. The fix is a single line in calc-engine.js's render() -- forcing `rooms` to 1
// whenever state.rental is set, regardless of travelers -- because that same `rooms`
// value feeds both the accommodation price (room = roomUSD * nights * rooms) and
// computeTax()'s own rooms argument. One line, two effects; this gate proves both.
//
// None of the other gates ever touch this: calc-regression-test.mjs's own money-math
// contract (section 1) asserts a fixed list of exact lines that this change does not
// touch, and its scenario matrix (section 5) does not model rooms at all. So the room-
// multiplier suppression itself had no automated coverage before this brief.
//
// WHY THIS SHAPE. Same reasoning as check-country-change-carry.mjs's own header: no
// browser test runner exists here, and the live-route screenshot check (standing rule for
// calc surfaces) is a human-in-a-browser step this script does not attempt to replace.
// What it DOES do: pull the real `rooms` line and the real computeTax() function out of
// the shipped file, byte for byte between the same markers below, and run them under Node
// with their few free variables (state, tax, regions, rate) mocked out. If the markers
// ever move or the function is renamed, this fails loudly rather than silently testing
// nothing.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, '..', 'src', 'scripts', 'calc-engine.js');
const src = fs.readFileSync(SRC, 'utf8');

let fails = 0;
const check = (label, ok, detail) => {
  if (!ok) fails++;
  console.log(`  ${ok ? 'ok   ' : 'FAIL '} ${label}${detail ? '  ' + detail : ''}`);
};
const failHard = (msg) => { console.log('FAIL  ' + msg); console.log('\nRESULT: FAIL'); process.exit(1); };

// ---------------------------------------------------------------------------
// Extraction 1: the rooms-forcing line itself.
// ---------------------------------------------------------------------------
const roomsLine = "const rooms = (state.rental || trav < 3) ? 1 : Math.max(1, state.rooms);";
if (!src.includes(roomsLine)) {
  failHard('could not find the rooms-forcing line in calc-engine.js -- it moved or changed, update this gate to match');
}
const computeRooms = new Function('state', 'trav', roomsLine + '\nreturn rooms;');

// ---------------------------------------------------------------------------
// Extraction 2: the real computeTax() function, verbatim.
// ---------------------------------------------------------------------------
const taxStart = 'function computeTax(roomUSD, nights, trav, rooms) {';
const taxEnd = "return { usd: amount, label: label, note: r.note || tax.note || '' };\n  }";
const taxStartIdx = src.indexOf(taxStart);
const taxEndIdx = taxStartIdx === -1 ? -1 : src.indexOf(taxEnd, taxStartIdx);
if (taxStartIdx === -1 || taxEndIdx === -1) {
  failHard('could not find computeTax() in calc-engine.js -- it moved or changed, update this gate to match');
}
const extractedTax = src.slice(taxStartIdx, taxEndIdx + taxEnd.length);
function makeComputeTax(mock) {
  const factory = new Function('tax', 'regions', 'rate', 'state', extractedTax + '\nreturn computeTax;');
  return factory(mock.tax, mock.regions, mock.rate, mock.state || { regionIndex: 0 });
}

console.log('1. The rooms line: a rental is always 1, hotel/hotel-direct are untouched');
{
  check('non-rental, 2 travelers: rooms stays 1 (unchanged pre-existing behavior)', computeRooms({ rental: false, rooms: 3 }, 2) === 1);
  check('non-rental, 3+ travelers: rooms uses the party-driven count (unchanged)', computeRooms({ rental: false, rooms: 3 }, 4) === 3);
  check('non-rental, 3+ travelers, rooms somehow < 1: clamps to 1 (unchanged)', computeRooms({ rental: false, rooms: 0 }, 4) === 1);
  check('rental, 2 travelers: rooms stays 1', computeRooms({ rental: true, rooms: 3 }, 2) === 1);
  check('rental, 4 travelers, rooms=3 chosen earlier as a hotel: STILL forced to 1', computeRooms({ rental: true, rooms: 3 }, 4) === 1);
  check('rental, 6 travelers: still exactly 1, never scales with party size', computeRooms({ rental: true, rooms: 5 }, 6) === 1);
}

console.log('\n2. computeTax: a rental (rooms=1) never gets a room-multiplied tax; hotel math is untouched');
{
  // flatPerNight: a flat charge per booking (per room, per night). 4 travelers, 3 rooms,
  // rate 1 local unit per USD for simplicity.
  const flatTax = makeComputeTax({ tax: { unit: 'flatPerNight' }, regions: [{ rate: 5 }], rate: 1 });
  const hotelFlat = flatTax(100, 4, 4, 3); // hotel: 3 rooms
  const rentalFlat = flatTax(100, 4, 4, 1); // rental: forced to 1 unit
  check('flatPerNight scales with room count for a hotel (3 rooms x $5 x 4 nights = $60)', hotelFlat.usd === 60, 'got ' + hotelFlat.usd);
  check('flatPerNight for a rental is ONE booking, not three (1 x $5 x 4 nights = $20)', rentalFlat.usd === 20, 'got ' + rentalFlat.usd);

  // percentOfRoom: a percentage of one room's rate, per booking. Room $100/night, 3 rooms
  // for a hotel vs 1 unit for a rental, 5% rate, 2 nights.
  const pctTax = makeComputeTax({ tax: { unit: 'percentOfRoom' }, regions: [{ pct: 5 }], rate: 1 });
  const hotelPct = pctTax(100, 2, 4, 3);
  const rentalPct = pctTax(100, 2, 4, 1);
  check('percentOfRoom scales with room count for a hotel (5% x $100 x 2 nights x 3 rooms = $30)', hotelPct.usd === 30, 'got ' + hotelPct.usd);
  check('percentOfRoom for a rental is one unit\'s percentage, not three (5% x $100 x 2 nights x 1 = $10)', rentalPct.usd === 10, 'got ' + rentalPct.usd);

  // perPersonPerNight: already never scales with rooms, for hotel OR rental -- this is the
  // "where it is genuinely per-person, party size still applies" case from the brief.
  const ppTax = makeComputeTax({ tax: { unit: 'perPersonPerNight' }, regions: [{ rate: 2 }], rate: 1 });
  const hotelPp = ppTax(100, 3, 4, 3);
  const rentalPp = ppTax(100, 3, 4, 1);
  check('perPersonPerNight is identical for hotel and rental (both $2 x 4 travelers x 3 nights = $24)', hotelPp.usd === 24 && rentalPp.usd === 24, 'got ' + hotelPp.usd + ' / ' + rentalPp.usd);

  // tieredPerPersonPerNight: bands off the per-occupant price. A $300/night stay split
  // across 4 travelers in 3 hotel rooms (rooms=3) prices each occupant off $300*3/4 =
  // $225/night; the SAME $300/night rental (rooms=1) prices each occupant off the whole
  // unit split 4 ways, $300*1/4 = $75/night -- a materially different, and correct, band.
  const tieredTax = makeComputeTax({
    tax: { unit: 'tieredPerPersonPerNight' },
    regions: [{ bands: [{ upTo: 100, rate: 1 }, { upTo: null, rate: 3 }] }],
    rate: 1,
  });
  const hotelTiered = tieredTax(300, 2, 4, 3); // per-occupant $225/night -> upper band (rate 3)
  const rentalTiered = tieredTax(300, 2, 4, 1); // per-occupant $75/night -> lower band (rate 1)
  check('tieredPerPersonPerNight prices a hotel occupant off the room rate, hitting the upper band', hotelTiered.usd === 3 * 4 * 2, 'got ' + hotelTiered.usd);
  check('tieredPerPersonPerNight prices a rental occupant off the WHOLE unit split by party, hitting the lower band', rentalTiered.usd === 1 * 4 * 2, 'got ' + rentalTiered.usd);
}

console.log('\n3. Integration: the accommodation price itself drops the multiplier the same way tax does');
{
  const trav = 4, nights = 3, roomUSD = 100;
  const hotelRooms = computeRooms({ rental: false, rooms: 3 }, trav);
  const rentalRooms = computeRooms({ rental: true, rooms: 3 }, trav);
  const hotelPrice = roomUSD * nights * hotelRooms;
  const rentalPrice = roomUSD * nights * rentalRooms;
  check('hotel accommodation price still multiplies by the room count ($100 x 3 nights x 3 rooms = $900)', hotelPrice === 900, 'got ' + hotelPrice);
  check('rental accommodation price is one unit x nights only ($100 x 3 nights = $300, no multiplier)', rentalPrice === 300, 'got ' + rentalPrice);
}

console.log('\nRESULT:', fails ? 'FAIL' : 'PASS');
process.exit(fails ? 1 : 0);
