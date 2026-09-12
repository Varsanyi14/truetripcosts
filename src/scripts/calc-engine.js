// TTC all-in trip cost calculator engine.
//
// EXTRACTED from CountryBriefing.astro (Step 0 of the calculator-wizard build) with NO
// behaviour change: same ids, same math, same order of operations. It used to live inline
// in CountryBriefing.astro's own <script> tag; two pages need it now (the per-country
// inline calc and /calculator/[slug]'s wizard), so it is a shared module instead of two
// copies. CountryBriefing.astro now just imports this file for its side effects.
//
// It is DOM-driven and defensive at the top (`if (!app || !dataEl) return;`), but almost
// everything below that guard reaches for a specific element id with NO null check. That is
// deliberate: every id it reaches for is expected to exist, exactly once, on any page that
// includes this engine. scripts/calc-regression-test.mjs asserts the full id contract
// against every built country page, and CalcWizard.astro is responsible for hosting a full,
// real copy of the estimator inputs and <CalcResult> so this engine finds everything it
// expects on the wizard page too.

// Formatting only. It holds no rate and fetches nothing: see the file header.
import { usdBracket } from '../data/usd-bracket.js';

// The all-in cost planner. Reads the inert JSON in #hn-data (exchange rate,
// currency, the country's tourist-tax block, the default foreign-fee assumption)
// and the per-country spend styles from the segmented control, then renders one
// all-in total broken into room, on-the-ground spend, the two card fees and tax.
// A no-foreign-fee toggle zeroes both fees; an already-paid toggle removes the
// room and its share of the card fee. No data about the traveler leaves the page.
(function () {
  const app = document.getElementById('hn-app');
  const dataEl = document.getElementById('hn-data');
  if (!app || !dataEl) return;

  let DATA;
  try { DATA = JSON.parse(dataEl.textContent); } catch (e) { return; }

  const rate = DATA.rate || 1;                 // local currency units per 1 USD
  const cur = DATA.cur || '';
  const round = DATA.round || 100000;
  const rateNote = DATA.rateNote || '';
  const tax = DATA.tax || null;
  const fallbackFxPct = (DATA.fallbackFxPct != null) ? DATA.fallbackFxPct : 3;

  // ----- confidence-range parameters -----
  // The range only moves the inputs we assume FOR the traveler, never the ones
  // they typed. Two knobs, both already acknowledged in the copy on this page:
  //   SPEND_BAND    daily spending could plausibly run this far under or over
  //                 the chosen style's per-day figure (0.15 = 15% either way).
  //   DCC_EXTRA_PP  how many percentage points hotter the foreign fee can run
  //                 on the high end, the documented "pay in dollars" (dynamic
  //                 currency conversion) or debit-card jump. The low end keeps
  //                 the blended fallback: a typical card does not charge less,
  //                 and the below-typical case is what the no-fee toggle is for,
  //                 so the band never double-counts it.
  // Site-wide modeling policy, not per-country facts, which is why they live
  // here as named constants. When the compare feature lifts this math into a
  // shared module, these move with it.
  const SPEND_BAND = 0.15;
  const DCC_EXTRA_PP = 2;

  const id = x => document.getElementById(x);
  const usd = x => '$' + Math.round(x).toLocaleString('en-US');
  // Split in two so the dollar bracket below can convert the figure the reader
  // actually sees, rounded exactly as it is printed, rather than the unrounded
  // value behind it. Same arithmetic as before, in two steps instead of one.
  const locNum = x => Math.round(x * rate / round) * round;
  const loc = x => locNum(x).toLocaleString('en-US') + ' ' + cur;
  const fmtPct = p => (Number.isInteger(p) ? p : Math.round(p * 10) / 10) + '%';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // THE LIVE RATE, BORROWED RATHER THAN FETCHED.
  //
  // The currency anchor panel further up this page already reads /api/rates,
  // already falls back to the baked snapshot when that is unavailable, and
  // already prints the date it settled on. It publishes the result, so this
  // reads that value and never asks for its own. One fetch on the page, one
  // rate, one date, and no way for the panel and the calculator to disagree.
  //
  // It returns null in three cases, and all three end the same way, with no
  // bracket at all: the country is on the dollar or pegged to it (the panel
  // does not render, so nothing is published), the currency is in neither the
  // live feed nor the fallback (the panel hides itself), or the live fetch is
  // still in flight on first paint. The third resolves itself: the panel
  // fires ttc:fx when the rate lands and the line is written again.
  function fxNow() {
    const f = (typeof window !== 'undefined') ? window.__ttcFx : null;
    if (!f || f.cur !== cur || !cur || cur === 'USD') return null;
    return (isFinite(f.rate) && f.rate > 0) ? f : null;
  }

  // Smoothly roll a number from its previous value to the new one.
  function roll(el, to, fmt, animate) {
    if (!el) return;
    const from = (typeof el._v === 'number') ? el._v : to;
    el._v = to;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (el._raf) { cancelAnimationFrame(el._raf); el._raf = 0; }
    if (!animate || reduce || from === to) { el.textContent = fmt(to); return; }
    const dur = 420, t0 = performance.now();
    function step(now) {
      const p = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(from + (to - from) * e);
      el._raf = (p < 1) ? requestAnimationFrame(step) : 0;
    }
    el._raf = requestAnimationFrame(step);
  }

  // ----- travel-style segmented control (per-day spend + cash share per style) -----
  const styleBtns = Array.from(app.querySelectorAll('.seg button'));
  let styleIndex = styleBtns.findIndex(b => b.classList.contains('on'));
  if (styleIndex < 0) styleIndex = 0;

  const state = { regionIndex: 0, room: 150, nights: 7, trav: 2, paid: false, noFee: false, flight: 0, flightEdited: false, roomEdited: false, rooms: 1, roomsEdited: false };

  // ----- flights: a verified typical fare prefilled, the traveler's own once edited -----
  // When the country carries a verified flight range, the input prefills with the
  // midpoint (rounded to $10) and the confidence range uses the verified low/high.
  // The moment the traveler types, the fare becomes a stated fact: it is used as
  // entered and frozen at both ends of the range, exactly like the room price.
  // Countries without verified data show an empty optional field, so nothing
  // unverified is ever shown.
  const flightData = DATA.flight || null;
  const flightInput = id('hnFlight');
  const flightHint = id('hnFlightHint');
  // ROUGH is true when the prefilled figure is a placeholder rather than a fare we track.
  // Every label downstream branches on it, because the one thing this must never do is let a
  // placeholder read as TTC's verified figure.
  const flightRough = (!flightData && typeof DATA.flightRough === 'number') ? DATA.flightRough : null;
  if (flightData) {
    state.flight = Math.round((flightData.low + flightData.high) / 2 / 10) * 10;
    if (flightInput) flightInput.value = state.flight.toLocaleString('en-US');
    if (flightHint) flightHint.textContent = 'Prefilled with a typical economy fare from major US gateways, checked ' + (flightData.checked || '') + '. Edit it to what you actually paid.';
  } else if (flightRough) {
    // A blank field used to leave Getting there at $0, which reads as a fact ("no flight
    // cost") rather than as the gap it is. So it prefills, and says plainly what it is.
    state.flight = flightRough;
    if (flightInput) flightInput.value = state.flight.toLocaleString('en-US');
    if (flightHint) flightHint.textContent = 'This one is a rough placeholder, not a fare we track for ' + DATA.name + '. Put your own fare in and the whole total moves with it.';
    if (flightHint) flightHint.classList.add('ef-hint-rough');
  }
  if (flightInput) {
    flightInput.addEventListener('input', () => {
      let v = parseInt(String(flightInput.value).replace(/[^0-9]/g, ''), 10);
      if (isNaN(v) || v < 0) v = 0;
      state.flight = v;
      state.flightEdited = true;
      render(true);
    });
    flightInput.addEventListener('blur', () => { flightInput.value = state.flight ? state.flight.toLocaleString('en-US') : ''; });
  }

  // ----- region selector (only when the tax varies by place) -----
  const regionWrap = id('hnRegionWrap');
  const regionSel = id('hnRegion');
  const regions = (tax && Array.isArray(tax.regions)) ? tax.regions : [];
  if (regions.length > 1) {
    regionSel.innerHTML = regions.map((r, i) => '<option value="' + i + '">' + esc(r.label) + '</option>').join('');
    regionWrap.hidden = false;
    regionWrap.style.display = '';
    regionSel.addEventListener('change', () => { state.regionIndex = +regionSel.value || 0; render(true); });
  } else {
    regionWrap.hidden = true;
    regionWrap.style.display = 'none';
  }

  // ----- room money input -----
  const roomInput = id('hnRoom');
  const roomHint = id('hnRoomHint');
  function roomVal() {
    let v = parseInt(String(roomInput.value).replace(/[^0-9]/g, ''), 10);
    if (isNaN(v) || v < 0) v = 0;
    return v;
  }

  // ----- per-style hotel suggestion (option A) -----
  // Each travel style can carry a typical nightly room price. Switching style
  // prefills the room field with it, so Budget, Mid-range and Comfort visibly
  // move the hotel line. The moment the traveler types their own room price,
  // their number wins and style stops overwriting it, exactly like the flight
  // field. Countries with no per-style room data keep the manual default and
  // switching style leaves the room alone.
  const styleRoomOf = i => { const b = styleBtns[i]; const r = b && b.dataset.room; return (r != null && r !== '') ? +r : null; };
  const hasStyleRooms = styleBtns.some((_, i) => styleRoomOf(i) != null);
  function applyStyleRoom() {
    if (state.roomEdited) return;
    const r = styleRoomOf(styleIndex);
    if (r == null) return;
    state.room = r;
    if (document.activeElement !== roomInput) roomInput.value = r.toLocaleString('en-US');
  }
  function updateRoomHint() {
    if (!roomHint) return;
    if (!hasStyleRooms) { roomHint.hidden = true; return; }   // no footprint where the feature is inactive
    roomHint.hidden = false;                                  // reserve the line so showing or hiding it never shifts the layout
    const r = styleRoomOf(styleIndex);
    if (r == null || state.roomEdited) { roomHint.style.visibility = 'hidden'; return; }
    const w = ((styleBtns[styleIndex] && styleBtns[styleIndex].textContent) || '').trim().toLowerCase();
    roomHint.style.visibility = 'visible';
    roomHint.textContent = 'Typical ' + w + ' room in ' + (DATA.name || 'this country') + ', edit if yours differs.';
  }

  roomInput.addEventListener('input', () => { state.room = roomVal(); state.roomEdited = true; updateRoomHint(); render(true); });
  roomInput.addEventListener('blur', () => { roomInput.value = state.room ? state.room.toLocaleString('en-US') : ''; });

  // seed the room and hint from the default style on load
  applyStyleRoom();
  updateRoomHint();

  // ----- rooms: an optional per-party room count (BRIEF-rooms-autosuggest) -----
  //
  // WIZARD-ONLY, ON PURPOSE. #hnRooms exists only on the calculator wizard's hidden engine
  // copy (CalcWizard.astro), never on the per-country inline calculator (CountryBriefing.astro),
  // so this is looked up with querySelector rather than the id() helper used everywhere else
  // in this file: id()/getElementById() calls are exactly what calc-regression-test.mjs's DOM
  // contract scans for and then requires on every built country page, and #hnRooms is
  // deliberately not part of that universal contract. Where it is absent, roomsInput stays
  // null, rooms stays fixed at 1 forever, and every line below behaves exactly as it did
  // before this feature: the inline calculator on all 59 live country pages is untouched.
  const roomsInput = document.querySelector('#hnRooms');
  function roomsVal() {
    if (!roomsInput) return 1;
    let v = parseInt(String(roomsInput.value).replace(/[^0-9]/g, ''), 10);
    if (!Number.isFinite(v) || v < 1) v = 1;
    return v;
  }
  // Math.ceil(travelers / 2): two travelers per room, rounded up. A pre-filled DEFAULT,
  // never a claim about the traveler's actual booking (see the wizard's own note).
  function suggestedRooms(travCount) { return Math.max(1, Math.ceil(travCount / 2)); }
  function applyRoomsSuggestion() {
    if (!roomsInput || state.roomsEdited) return;
    const r = suggestedRooms(state.trav);
    state.rooms = r;
    if (document.activeElement !== roomsInput) roomsInput.value = r;
  }
  if (roomsInput) {
    roomsInput.addEventListener('input', () => { state.rooms = roomsVal(); state.roomsEdited = true; render(true); });
    roomsInput.addEventListener('blur', () => { roomsInput.value = state.rooms || 1; });
  }
  // Seed it the same way the room price seeds from style on load, above.
  applyRoomsSuggestion();

  // ----- the two toggles: already-paid room, and the no-foreign-fee card lever -----
  const paidToggle = id('hnPaid');
  if (paidToggle) paidToggle.addEventListener('change', () => { state.paid = paidToggle.checked; render(true); });
  const noFeeToggle = id('hnNoFee');
  if (noFeeToggle) noFeeToggle.addEventListener('change', () => { state.noFee = noFeeToggle.checked; render(true); });

  // ----- style buttons -----
  styleBtns.forEach((b, i) => b.addEventListener('click', () => {
    styleIndex = i;
    styleBtns.forEach((x, j) => x.classList.toggle('on', j === i));
    applyStyleRoom();
    updateRoomHint();
    render(true);
  }));

  // ----- steppers (nights, travelers) -----
  const limits = { hnNights: [1, 60], hnTrav: [1, 12] };
  function bindStepper(key) {
    const el = id(key);
    const lo = limits[key][0], hi = limits[key][1];
    const btns = Array.from(app.querySelectorAll('.stp[data-step="' + key + '"]'));
    function setDisabled(v) {
      btns.forEach(b => { b.disabled = (b.dataset.dir === '-1' && v <= lo) || (b.dataset.dir === '1' && v >= hi); });
    }
    btns.forEach(btn => btn.addEventListener('click', () => {
      let v = +el.dataset.v + (+btn.dataset.dir);
      v = Math.max(lo, Math.min(hi, v));
      el.dataset.v = v; el.textContent = v;
      if (key === 'hnNights') { state.nights = v; } else { state.trav = v; applyRoomsSuggestion(); }
      setDisabled(v);
      render(true);
    }));
    setDisabled(+el.dataset.v);
  }
  bindStepper('hnNights');
  bindStepper('hnTrav');

  // ----- tourist-tax engine. rate = local currency units per 1 USD. -----
  //
  // `rooms` (BRIEF-rooms-autosuggest) defaults to 1 on every call site that does not pass
  // it, so a caller that still says computeTax(roomUSD, nights, trav) behaves exactly as
  // before this feature. Whether a unit scales with it depends on what it is actually
  // charging, never assumed uniformly:
  //   perPersonPerNight and the oneTimePerPerson add-on already charge every traveler by
  //     headcount (trav), regardless of how many rooms they are split across, so neither
  //     multiplies by rooms: a party in one room or three pays the same per-person tax.
  //   flatPerNight is a flat charge per booking, i.e. per room, per night (the same
  //     assumption the site's own hotel-tax-map.js calls "perRoomPerNight" for these exact
  //     real-world charges), so it scales with rooms.
  //   percentOfRoom is a percentage of ONE room's rate, per booking, so a second room at
  //     the same rate is a second charge: it scales with rooms too.
  //   tieredPerPersonPerNight looks up a band from the room's price PER OCCUPANT. At one
  //     room that is roomUSD / trav; splitting the same party across `rooms` equally
  //     priced rooms means each room houses trav / rooms people, so the per-occupant price
  //     driving the band lookup is roomUSD * rooms / trav. The per-person amount itself
  //     still multiplies by trav, same as before, since it is still charged per head.
  function computeTax(roomUSD, nights, trav, rooms) {
    if (rooms == null) rooms = 1;
    if (!tax || tax.none || regions.length === 0) {
      return { usd: 0, label: 'Tourist tax', note: (tax && tax.note) || '' };
    }
    const r = regions[Math.min(state.regionIndex, regions.length - 1)] || regions[0];
    const unit = r.unit || tax.unit;
    const capRaw = (r.capNights !== undefined) ? r.capNights : tax.capNights;
    const cap = (capRaw == null) ? null : capRaw;
    const nCap = cap ? Math.min(nights, cap) : nights;

    let amount = 0;
    if (unit === 'perPersonPerNight') {
      amount = ((r.rate || 0) * trav * nCap) / rate;
    } else if (unit === 'flatPerNight') {
      amount = ((r.rate || 0) * nCap * rooms) / rate;        // per room, per night
    } else if (unit === 'percentOfRoom') {
      amount = ((r.pct || 0) / 100) * roomUSD * nCap * rooms; // already USD, per room
    } else if (unit === 'tieredPerPersonPerNight') {
      const bands = r.bands || [];
      const ppLocalNight = (roomUSD * rooms / Math.max(1, trav)) * rate;
      let band = 0;
      for (const b of bands) { if (b.upTo == null || ppLocalNight < b.upTo) { band = b.rate; break; } }
      amount = (band * trav * nCap) / rate;
    }
    if (r.oneTimePerPerson) amount += (r.oneTimePerPerson * trav) / rate;   // e.g. Mexico VISITAX

    const short = String(r.label).split(' (')[0];
    let label;
    if (amount <= 0) label = 'Tourist tax';
    else if (r.taxLabel) label = r.taxLabel;
    else if (tax.taxLabel) label = tax.taxLabel;
    else label = short + ' tourist tax';

    return { usd: amount, label: label, note: r.note || tax.note || '' };
  }

  function render(animate) {
    const roomUSD = state.room, nights = state.nights, trav = state.trav;
    const b = styleBtns[styleIndex] || null;
    const per = b ? (+b.dataset.per || 0) : 0;
    const cashShare = b ? (+b.dataset.cash || 0) : 0;
    const styleName = b ? (b.textContent || '').trim() : '';

    // BRIEF-rooms-autosuggest: rooms only ever multiplies anything at 3+ travelers. Below
    // that this clamps to 1 regardless of state.rooms or roomsInput's own value, which is
    // the one line every 1 or 2-traveler trip's byte-identical result actually rests on:
    // even a stray or manipulated rooms value can never reach the math for a 1 or
    // 2-traveler trip, on this page or the inline calculator alike.
    const rooms = (trav >= 3) ? Math.max(1, state.rooms) : 1;
    const room = roomUSD * nights * rooms;
    const spend = per * trav * nights;
    const cash = spend * cashShare, card = spend - cash;
    const roomOnCard = state.paid ? 0 : room;
    const cardBase = roomOnCard + card;
    // Two separate rate levers, not one shared number. The card foreign-transaction
    // fee applies to what goes on the card; the ATM cash markup applies to the cash
    // you pull. They default to the same fallback today, but they are genuinely
    // different charges (a debit card can waive one and keep the other), so the
    // calculator keeps them apart rather than reusing a single percentage.
    const cardFxPct = state.noFee ? 0 : fallbackFxPct;    // % a typical card adds to foreign spend
    const atmCashPct = state.noFee ? 0 : fallbackFxPct;   // % most US banks add to foreign cash
    const cardFee = cardBase * (cardFxPct / 100);
    const pulls = Math.max(1, Math.ceil(cash / 300));
    const atmFlat = pulls * 5;                       // fixed operator/bank charge per withdrawal
    const atmFx = cash * (atmCashPct / 100);         // percentage markup on the cash itself
    const atmFee = state.noFee ? atmFlat : (atmFlat + atmFx);
    const t = computeTax(roomUSD, nights, trav, rooms);
    // Flights ride the total but never the fee math: a US-booked fare is a dollar
    // purchase, so it takes no foreign fee and no share of the cash split.
    const flightTotal = state.flight * trav;
    const total = roomOnCard + spend + cardFee + atmFee + t.usd + flightTotal;

    // ----- the confidence range -----
    // Rebuilds the same five-part total with only the assumed inputs moved.
    // Room, nights, travelers and the rule-based tourist tax stay exactly as
    // given; daily spend swings SPEND_BAND either way; the high end lets the
    // fee run DCC_EXTRA_PP points hotter. ATM pulls recompute per bound since
    // they follow the cash volume. With the no-fee toggle on, both fees stay
    // at $0 on both bounds and the range narrows to spend variability alone.
    function bandTotal(spendMult, extraPP, flightUSD) {
      const s = spend * spendMult;
      const cashB = s * cashShare, cardB = s - cashB;
      const pct = state.noFee ? 0 : (fallbackFxPct + extraPP);
      const cFee = (roomOnCard + cardB) * (pct / 100);
      const p = (cashB > 0) ? Math.max(1, Math.ceil(cashB / 300)) : 0;
      const aFee = state.noFee ? (p * 5) : (p * 5 + cashB * (pct / 100));
      return roomOnCard + s + cFee + aFee + t.usd + flightUSD;
    }
    // While the fare is our estimate, the band uses the verified low and high of
    // the range it came from. Once the traveler enters their own fare it is a
    // stated fact and holds still at both ends, like the room price.
    const estFlight = flightData && !state.flightEdited;
    // The prefilled figure is a rough placeholder, and the traveler has not replaced it yet.
    // Kept separate from estFlight so a placeholder is never described as a fare we track.
    const roughFlight = !flightData && flightRough && !state.flightEdited;
    const fltLo = estFlight ? flightData.low * trav : flightTotal;
    const fltHi = estFlight ? flightData.high * trav : flightTotal;
    const bandLo = bandTotal(1 - SPEND_BAND, 0, fltLo);
    const bandHi = bandTotal(1 + SPEND_BAND, DCC_EXTRA_PP, fltHi);

    // ----- the shape of the trip -----
    // One pass sets each segment's width and its legend share from the same five
    // numbers the itemized groups show, so the bar can never tell a different
    // story. Zero components collapse to nothing and their legend entry greys
    // out, which makes the two toggles visible at a glance: flip "already paid"
    // and the hotel block vanishes; flip the no-fee card and both fee slivers go.
    const segTotal = total > 0 ? total : 1;
    function shape(segId, legId, val, hideZero) {
      const pct = (val / segTotal) * 100;
      const seg = id(segId), leg = id(legId);
      if (seg) seg.style.width = pct + '%';
      if (leg) {
        leg.querySelector('b').textContent = (pct > 0 && pct < 1 ? '<1' : Math.round(pct)) + '%';
        leg.classList.toggle('nil', val <= 0);
        if (hideZero) leg.hidden = (val <= 0);
      }
    }
    // Flights hide entirely at zero (not participating), while the other five grey
    // out (a meaningful zero, e.g. the paid room or the no-fee card).
    shape('hsFlt', 'hlFlt', flightTotal, true);
    shape('hsRoom', 'hlRoom', roomOnCard);
    shape('hsSpend', 'hlSpend', spend);
    shape('hsCfee', 'hlCfee', cardFee);
    shape('hsAfee', 'hlAfee', atmFee);
    shape('hsTax', 'hlTax', t.usd);

    id('hnNightsLabel').textContent = nights;
    const fltLine = id('hnFlightLine');
    if (fltLine) {
      fltLine.hidden = (flightTotal <= 0);
      id('hnFlightTravLabel').textContent = trav;
      id('hnFlightNote').textContent = (estFlight
        ? 'a typical fare we track, edit it above to yours; '
        : (roughFlight ? 'a rough placeholder, not a fare we track, change it above; ' : 'your fare, as entered; ')) + 'paid in dollars at booking, so no foreign fee on this line';
      roll(id('hnFlightV'), flightTotal, usd, animate);
    }
    id('hnFeeQ').textContent = fmtPct(fallbackFxPct);
    id('hnTaxLabel').textContent = t.label;
    id('hnCardBase').textContent = usd(cardBase);
    id('hnCardFeeNote').textContent = state.paid
      ? 'the ' + usd(card) + ' card half of your spend, on the statement weeks later'
      : 'your ' + usd(room) + ' room and the ' + usd(card) + ' card half of your spend, both on the statement weeks later';
    id('hnCashAmt').textContent = usd(cash);
    id('hnAtmNote').textContent = 'a few dollars per withdrawal, plus the roughly ' + fmtPct(fallbackFxPct) + ' most US banks add on foreign cash';

    // ----- the three named numbers -----
    // On the ground is everything the calculator sums for in-country, which is the
    // total less the flight leg. Nothing new is computed here.
    const ground = total - flightTotal;
    roll(id('hnGround'), ground, usd, animate);
    roll(id('hnAir'), flightTotal, usd, animate);
    // A bare $0 on the flight line would read as free travel, so say what it means.
    const airNote = id('hnAirNote');
    if (airNote) airNote.textContent = (flightTotal > 0)
      ? (estFlight ? 'a fare we track, edit it above' : (roughFlight ? 'a rough placeholder, change it above' : 'your fare, as entered'))
      : 'not counted, add flights above';
    const tripNote = id('hnTripNote');
    if (tripNote) tripNote.textContent = (flightTotal > 0)
      ? 'getting there plus on the ground'
      : 'on the ground only, until flights go in';

    roll(id('hnTotal'), total, usd, animate);
    roll(id('hnLo'), bandLo, usd, animate);
    roll(id('hnHi'), bandHi, usd, animate);
    roll(id('hnRoomV'), room, usd, animate);
    roll(id('hnSpend'), spend, usd, animate);
    roll(id('hnCardFee'), cardFee, usd, animate);
    roll(id('hnAtmFee'), atmFee, usd, animate);
    roll(id('hnTax'), t.usd, usd, animate);

    // THE COLLAPSED-SECTION PREVIEWS.
    //
    // Written here, inside render(), rather than mirrored from the DOM afterwards. The
    // requirement is that a preview equals what the section shows when opened, and the only
    // way to guarantee that is for both to come from the same numbers in the same pass. A
    // second place doing this arithmetic is how a header and its contents start disagreeing.
    //
    // No new quantities are invented: Getting there is the flight total already rolled into
    // hnAir, On the ground is the same `ground` already rolled into hnGround, and the fees
    // preview is the sum of the three fee lines rendered immediately below it, in the same
    // unit. setPrev is null-safe because these elements live in a child component.
    const setPrev = (elId, v) => { const e = document.getElementById(elId); if (e) e.textContent = usd(v); };
    setPrev('prevGetting', flightTotal);
    setPrev('prevGround', ground);
    // The unavoidable half only. The avoidable items are never added into this, because
    // money the traveler will not spend is not part of a cost.
    //
    // ROUNDED COMPONENTS, SUMMED. Summing the raw floats and then rounding produced previews
    // a dollar off the three lines below them, because each line rounds for display first:
    // Austria showed $199 in the header against $200 inside. The header's whole promise is
    // that it equals what is inside, so it adds up exactly what the reader can see.
    const shown = (v) => Math.round(v);
    setPrev('prevFees', shown(cardFee) + shown(atmFee) + shown(t.usd));
    // The one avoidable item with a live figure: what the two fee lines above come to, which
    // is precisely what the no-foreign-fee toggle takes to zero. Not an estimated saving.
    setPrev('avFees', shown(cardFee) + shown(atmFee));

    // ----- COSTS NOBODY TELLS YOU ABOUT: the two figures and the exposure bar -----
    //
    // THE RULE THIS BLOCK EXISTS TO KEEP: there are two numbers and they are never added.
    // `pay` is money that leaves the account if the reader does nothing. `dodge` is money
    // that never leaves it once they know. Summing them would put money-they-will-never-
    // lose into a figure presented as a cost, which is both wrong arithmetic and the exact
    // fear-gauge this section is built to be the opposite of. There is no combined total
    // anywhere below, no percentage at risk, and no score.
    //
    // The static half of each figure arrives as data attributes from avoidable.js, where
    // every number was parsed back out of a sourced string. This adds only the parts that
    // depend on the reader's own inputs: the live fee lines, the card base a sourced
    // percentage band applies to, and the traveler count a per-person figure multiplies by.
    const exN = id('exNums');
    if (exN) {
      const d = exN.dataset;
      const n = k => { const v = parseFloat(d[k]); return isFinite(v) ? v : 0; };
      const live = (d.payLive === '1');
      const feesNow = shown(cardFee) + shown(atmFee);

      // Both ends of every sourced range carried through to both ends of the figure. A
      // band collapsed to its middle would be the one number nobody published.
      const payFixed = (live ? feesNow : 0) + n('payFlatLo') + n('payPpLo') * trav;
      const payLo = payFixed + cardBase * (n('payPctLo') / 100);
      const payHi = (live ? feesNow : 0) + n('payFlatHi') + n('payPpHi') * trav + cardBase * (n('payPctHi') / 100);
      const dodgeLo = n('dodgeFlatLo') + n('dodgePpLo') * trav;
      const dodgeHi = n('dodgeFlatHi') + n('dodgePpHi') * trav;

      // Whether a SIDE carries a sourced figure at all is a build-time fact about the
      // country, not a runtime fact about this reader's inputs. Keeping the two apart is
      // what lets the no-foreign-fee toggle show an honest $0 (a real result the reader
      // just caused) without a country that simply has no priced item on that side ever
      // showing a $0 it did not earn: that one hides instead.
      const hasPay = live || n('payPctHi') > 0 || n('payFlatHi') > 0 || n('payPpHi') > 0;
      const hasDodge = n('dodgeFlatHi') > 0 || n('dodgePpHi') > 0;
      const payUn = Math.round(n('payUnpriced'));
      const dodgeUn = Math.round(n('dodgeUnpriced'));

      const money = (lo, hi) => (Math.round(lo) === Math.round(hi)) ? usd(lo) : (usd(lo) + ' to ' + usd(hi));
      // A share of the trip, per side and never blended. Under one percent says so rather
      // than rounding to a zero that would read as nothing.
      const share = (lo, hi) => {
        if (!(total > 0)) return '';
        const f = v => { const q = (v / total) * 100; return (q > 0 && q < 1) ? '<1' : String(Math.round(q)); };
        const a = f(lo), b = f(hi);
        return (a === b) ? ('About ' + a + '% of your trip.') : ('About ' + a + '% to ' + b + '% of your trip.');
      };
      const setTx = (elId, tx) => { const e = id(elId); if (e) e.textContent = tx; };

      // ----- amber: avoidable but real -----
      const payBox = id('exPay');
      if (payBox) payBox.hidden = !hasPay;
      if (hasPay) {
        setTx('exPayV', money(payLo, payHi));
        const bits = [];
        if (live) bits.push(state.noFee ? 'your no-foreign-fee card just took the card percentage to $0' : 'the two fee lines above');
        if (n('payPctHi') > 0) bits.push(fmtPct(n('payPctLo')) + ' to ' + fmtPct(n('payPctHi')) + ' on the ' + usd(cardBase) + ' you put on the card');
        let note = bits.length ? (bits.join(', plus ') + '. ') : '';
        note = note.charAt(0).toUpperCase() + note.slice(1);
        // An unpriced item is COUNTED, never valued at zero. Saying how many are missing
        // from the figure is what stops the figure being read as the whole story.
        if (payUn > 0) note += 'Plus ' + payUn + ' more we put no figure on. ';
        setTx('exPayN', note + share(payLo, payHi));
      }

      // ----- green: pure avoidance, and the one that is the point -----
      const dodgeBox = id('exDodge');
      if (dodgeBox) dodgeBox.hidden = !(hasDodge || dodgeUn > 0);
      if (hasDodge) {
        setTx('exDodgeV', money(dodgeLo, dodgeHi));
        setTx('exDodgeL', "in scams and markups we'll help you dodge");
        setTx('exDodgeN', (dodgeUn > 0 ? ('Plus ' + dodgeUn + ' more below with no published price, so ' + (dodgeUn === 1 ? 'it is' : 'they are') + ' not in this figure. ') : '') + share(dodgeLo, dodgeHi));
      } else if (dodgeUn > 0) {
        // NO SOURCED PRICE ANYWHERE ON THIS SIDE, which is the normal case: only four of
        // the guides publish what a lookalike charges. So the figure is a COUNT and it is
        // presented as a count. The alternative is inventing a scam's price list to fill a
        // slot, which would make this the least honest number on a site whose entire
        // argument is the opposite.
        //
        // "KEEP", NOT "DODGE", and the difference matters. This side holds more than scams:
        // a sales tax you can claim back and a service charge you were about to tip on top
        // of are both here, and neither is a charge anybody is trying to dodge. The figure
        // above can say "scams and markups" because only a scam price or a reseller markup
        // can ever contribute a number to it. This one cannot.
        setTx('exDodgeV', String(dodgeUn));
        setTx('exDodgeL', dodgeUn === 1 ? "thing here we'll help you keep" : "things here we'll help you keep");
        setTx('exDodgeN', dodgeUn === 1
          ? 'No published price we can verify for it, so nothing is counted in dollars. It is listed below with the way out.'
          : 'No published price we can verify for these, so nothing is counted in dollars. Each is listed below with the way out.');
      }

      // ----- the bar: a proportion of the real trip total, and nothing else -----
      const barWrap = id('exBarWrap');
      const bar = barWrap ? barWrap.querySelector('.ex-bar') : null;
      const anyFigure = (payHi > 0 || dodgeHi > 0);
      if (barWrap) barWrap.hidden = !(total > 0 && anyFigure);
      if (total > 0 && anyFigure) {
        const pct = v => Math.max(0, (v / total) * 100);
        const wPay = pct(payLo), wPayB = pct(payHi - payLo), wDodge = pct(dodgeLo), wDodgeB = pct(dodgeHi - dodgeLo);
        const raw = wPay + wPayB + wDodge + wDodgeB;
        // WHEN IT WILL NOT FIT, IT IS NOT DRAWN. A traveler can set this to a prepaid room,
        // no flights and one night, and then a per-person visa markup is genuinely larger
        // than the total that remains. Scaling the blocks down to fit would draw a full bar
        // and say "all of your trip is exposed", which is false and is precisely the alarm
        // this section refuses to raise. So the bar steps aside and says what is missing.
        // The two figures above stay: they are still true, it is the proportion that is not
        // yet meaningful.
        const fits = (raw <= 100);
        if (bar) bar.hidden = !fits;
        if (fits) {
          const seg = (elId, w) => { const e = id(elId); if (e) e.style.width = w + '%'; };
          seg('exSegPay', wPay); seg('exSegPayBand', wPayB);
          seg('exSegDodge', wDodge); seg('exSegDodgeBand', wDodgeB);
          const banded = (wPayB > 0 || wDodgeB > 0);
          setTx('exScale', 'The full bar is your ' + usd(total) + ' trip, so both blocks are drawn to scale against it.'
            + (banded ? ' The hatched part of a block is a range the sources give, not a firmer number inside it.' : ''));
        } else {
          setTx('exScale', 'Your trip is set to ' + usd(total) + ' at the moment, which these figures are larger than, so there is nothing sensible to draw them against. Add your flights and your room above and the bar comes back.');
        }
      }
    }

    const cp = Math.round(cashShare * 100);
    id('cashBar').style.width = cp + '%';
    id('cardBar').style.width = (100 - cp) + '%';
    roll(id('cashUsd'), cash, usd, animate);
    roll(id('cardUsd'), card, usd, animate);

    // Hotel line strikes out when the room is already paid.
    id('hnHotelLine').classList.toggle('paid', state.paid);
    id('hnHotelNote').textContent = state.paid
      ? 'already paid, taken out of the total below'
      : 'on the card, prepaid or paid at the desk';

    // The card-fee line greys out to $0 under the no-fee card; the ATM line keeps its flat
    // operator fee, so it is not greyed out as though it were zero.
    id('hnCardFeeLine').classList.toggle('off', state.noFee);
    id('hnAtmFeeLine').classList.toggle('off', false);

    // The line that reads back the trip in words.
    const spendWord = styleName ? (styleName.toLowerCase() + ' spending') : 'spending';
    const head = state.paid
      ? ('Room already paid, plus ' + spendWord)
      : (nights + ' nights in a $' + roomUSD.toLocaleString('en-US') + ' room, ' + spendWord);
    id('hnSub').textContent = head + ' for ' + trav + ' ' + (trav === 1 ? 'traveler' : 'travelers') + ', fees and tourist tax folded in.';

    // The note under the breakdown swaps with the card toggle.
    id('hnFeeNote').textContent = state.noFee
      ? 'The card percentage just dropped to $0 on both purchases and cash. The flat ATM fee stays, because that is the machine operator\u2019s charge, not your bank\u2019s.'
      : 'Most US cards add about ' + fmtPct(fallbackFxPct) + ' on what you buy and on the cash you pull, plus a few dollars per ATM withdrawal, and choosing "pay in dollars" adds more on top. A no-foreign-fee card takes the percentage to $0, though the ATM operator\u2019s flat fee still applies.';

    // How much local cash, in how many ATM visits, plus the exchange-rate line.
    //
    // THE ONE FIGURE THIS CALCULATOR STATES IN THE LOCAL CURRENCY, and so the
    // only one that earns a dollar bracket. Every other number on the page is
    // already in dollars, and a bracket after those would be absurd. The
    // bracket is deliberately quiet and deliberately approximate: it converts
    // the rounded figure the reader can see, at the mid-market rate the panel
    // above published, and says when that rate was checked. Where no rate is
    // available for this currency there is simply no bracket, which is the
    // honest outcome rather than a fallback worth inventing.
    const vw = (pulls === 1) ? 'visit' : 'visits';
    const fx = fxNow();
    const cashBr = (cash > 0 && fx) ? usdBracket(locNum(cash), cur, fx.rate) : '';
    const fxWhen = (cashBr && fx.date) ? (' The dollars in brackets use the mid-market rate, checked ' + fx.date + '.') : '';
    id('hnHint').textContent = (cash > 0)
      ? ('That is about ' + pulls + ' ATM ' + vw + ' to pull roughly ' + loc(cash) + (cashBr ? ' ' + cashBr : '') + ' in cash. ' + rateNote + fxWhen)
      : rateNote;

    // How this estimate is built (assumptions panel), echoing the live figures.
    const setA = (elId, txt) => { const e = id(elId); if (e) e.textContent = txt; };
    const styleWord = styleName ? styleName.toLowerCase() : 'mid-range';
    setA('hnaSpend', 'About ' + usd(per) + ' per traveler each day for ' + styleWord + ' travel, across ' + trav + ' ' + (trav === 1 ? 'traveler' : 'travelers') + ' and ' + nights + ' ' + (nights === 1 ? 'night' : 'nights') + '.');
    // rooms > 1 is only ever reachable on the wizard (see the rooms section above), so this
    // clause is silently inert on the inline calculator, where rooms stays fixed at 1 and
    // the sentence never appears.
    const roomsNote = (rooms > 1) ? (' Assumed at ' + rooms + ' rooms.') : '';
    setA('hnaRoom', (styleRoomOf(styleIndex) != null && !state.roomEdited)
      ? ('A typical ' + styleWord + ' room in ' + DATA.name + ' runs about ' + usd(state.room) + ' a night, a starting point for the style you picked. Type your own and it takes over.' + (state.paid ? ' Marked already paid, so it is out of the total, though the tourist tax still applies.' : '') + roomsNote)
      : ('Your room at ' + usd(state.room) + ' a night' + (state.paid ? ', marked already paid, so it is out of the total, though the tourist tax still applies.' : ', across ' + nights + ' ' + (nights === 1 ? 'night' : 'nights') + '.') + roomsNote));
    setA('hnaFlight', !flightData && flightTotal <= 0
      ? 'Not counted. We have not yet verified a typical fare for ' + DATA.name + ', so flights join the total only if you enter your own round trip fare above.'
      : (estFlight
        ? 'A typical economy round trip from major US gateways runs about ' + usd(flightData.low) + ' to ' + usd(flightData.high) + ' a person, checked ' + (flightData.checked || '') + '. The total uses the midpoint and the range above uses the full spread; enter what you actually paid and both switch to your number.'
        // The placeholder case has to say what it is here too, because this is the section a
        // reader opens specifically to find out how much to trust each figure. Describing a
        // placeholder as "your own fare" would be the worst place on the page to be sloppy.
        : (roughFlight
          ? 'A rough placeholder of ' + usd(state.flight) + ' a person, not a fare we track for ' + DATA.name + '. We hold no verified range for this country yet, so it is here to stop the flight leg reading as zero, and it is the first thing you should change.'
          : 'Your own fare, ' + usd(state.flight) + ' a person as entered, taken as a fact at both ends of the range.')));
    setA('hnaSplit', 'About ' + cp + '% of that spend goes in cash and ' + (100 - cp) + '% on the card, the mix we assume for ' + styleWord + ' travel in ' + DATA.name + '.');
    setA('hnaAtm', pulls + (pulls === 1 ? ' ATM withdrawal' : ' ATM withdrawals') + ' of about $300, at roughly $5 each in operator and bank charges.');
    setA('hnaFee', 'We assume a blended ' + fmtPct(fallbackFxPct) + ' foreign fee, a typical figure for a US card, on both card spend and the cash you pull. Your own card may differ: a no-foreign-fee card removes it, which is what the toggle above shows, while a debit card or accepting a "pay in dollars" prompt can push it higher.');
    const bandPct = Math.round(SPEND_BAND * 100) + '%';
    setA('hnaRange', state.noFee
      ? ('With the no-foreign-fee card switched on, the fees stop moving, so the range under the big number only reflects your daily spending running about ' + bandPct + ' under or over the ' + styleWord + ' figure. Your room, nights, travelers and the tourist tax are taken as given at both ends.')
      : ('The big number is the middle of the road. The low end assumes your daily spending runs about ' + bandPct + ' under the ' + styleWord + ' figure. The high end runs it ' + bandPct + ' over and lets the foreign fee climb ' + DCC_EXTRA_PP + ' points higher, the kind of jump a debit card or a "pay in dollars" prompt causes. Your room, nights, travelers and the tourist tax are taken as given at both ends.' + (estFlight ? ' The flight leg swings across its verified ' + usd(flightData.low) + ' to ' + usd(flightData.high) + ' range until you enter your own fare.' : '')));
    setA('hnaTax', (t.usd > 0) ? ('Calculated from ' + DATA.name + "'s tourist-tax rule, per night and per person where that applies, and capped where the local rule caps it. The tax line above shows the specifics.") : (DATA.name + ' charges no nightly tourist tax, so this line stays at $0.'));

    // Per-region tourist-tax note, if any.
    const tn = id('hnTaxNote');
    if (t.note) { tn.textContent = t.note; tn.hidden = false; } else { tn.hidden = true; }
  }

  // ----- init -----
  app.hidden = false;
  state.room = roomVal();
  render();

  // The baked snapshot is applied during parse, so the first paint already
  // carries a bracket wherever a fallback rate exists. The live rate lands a
  // moment later and the panel says so; this redraws the one line that shows
  // it. Without animation, because nothing the traveler chose has changed and
  // rolling a number they did not touch would suggest otherwise.
  document.addEventListener('ttc:fx', () => render(false));
})();
