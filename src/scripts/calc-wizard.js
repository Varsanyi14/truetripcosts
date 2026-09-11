// THE WIZARD'S CLIENT DRIVER, for the specialist-design rebuild (calculator/[slug].astro).
//
// TWO KINDS OF FUNCTION IN THIS FILE, and the boundary between them matters:
//   APPLY functions write into the hidden real engine's own inputs and fire the exact native
//   events its own listeners already expect (setStepper, setMoneyInput, clickStyle, setNoFee).
//   They never touch render() directly and never compute a total themselves. This is the
//   same event-simulation trick every prior pass of this wizard has used.
//   The MIRROR function does the reverse: it reads text calc-engine.js has ALREADY written
//   into the hidden CalcResult's own elements (hnLo, hnHi, hnRoomV, hnSpend, hnTax, hnCardFee,
//   hnAtmFee, avFees, ...) and copies that text, verbatim, into this new surface's elements.
//   It does no arithmetic on unknown inputs. Two places add numbers together (the "Taxes &
//   payment fees" group's collapsed amount, and BRIEF-calc-v2-clusterA #7's accommodation
//   checkout uplift), each a sum of numbers the engine already computed and already displays
//   elsewhere on this same hidden tree; a presentation regrouping under the design's own
//   labels, not new math (spec section 9: "Grouping is a presentation mapping, not permission
//   to move charges in or out of the total"). The uplift additionally never appears at all
//   where the engine's own tax comes back zero. A third place, BRIEF-calc-v2-A2's HARD-tier
//   avoidable figures, multiplies rather than sums: avoidable.js's own sourced percentage or
//   dollar range (worth.lo/worth.hi, passed straight through, never recomputed) times a
//   number the engine already computed (cardBase) or the reader already set (trav), the same
//   multiplication the engine's own exposureFor()/render() already performs for its blended
//   total, just kept per item instead of blended.
//
// WHAT IS THE SURFACE'S OWN STATE, because the engine has no concept of it and none should be
// invented for it (spec section 11's engine/surface boundary table):
//   - flightMode ('known' | 'exclude'): the engine only ever sees a dollar figure in #hnFlight
//     (zero or not). Whether that zero means "explicitly declined" or "not yet answered" is a
//     presentation distinction this file tracks itself, never sent to the engine.
//   - origin.hotel / origin.flight ('estimate' | 'figure'): whether the reader's own price
//     differs from the typical figure this page prefilled, tracked independently of the
//     numeric value itself, per spec section 6: "An untouched planning default remains Our
//     estimate even after the user presses Continue... A genuine user-supplied quote does."
//   - carrier (BRIEF-carrier-honest-build, default 'other'): which US carrier the reader
//     picked in the wizard's own step 8. calc-engine.js has no concept of a carrier and
//     none should be invented for it; see renderCarrierItem() below for the one place this
//     state is read, and carrier-roaming.js's CARRIER_PROFILES for where its figures come
//     from.
//   - rail (BRIEF-rail-avoidable, default 'no'): whether the reader is planning intercity
//     train travel, asked only on the countries rail-passes.js has a real verdict for (see
//     CalcWizard.astro's own hasRail gate). Unlike carrier, nothing here is computed: the
//     rail card's text is fully build-time known, so this state only ever toggles that
//     card's visibility in mirror(), below.
//   - rental (BRIEF-rental-avoidable, default 'no'): whether the reader is renting a car.
//     Same shape as rail, minus the country gate: this question and its card are on every
//     page, since the counter upsell pitch does not vary by destination.
//
// NO PENDING STATE. The reference design's "Updating your estimate" state exists for an
// engine call that can take real time or fail over a network. This engine is synchronous and
// always present on every built country page (calc-regression-test.mjs asserts this), so
// there is no async gap to show a spinner during. Building one anyway would be exactly the
// kind of demo-only theater spec section 11 says to remove. The error state is kept, but only
// as a defensive try/catch around the mirror step itself, never a state with a real trigger
// today.

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const byId = (x) => document.getElementById(x);
const fire = (el, type) => el && el.dispatchEvent(new Event(type, { bubbles: true }));

function text(id) {
  const el = byId(id);
  return el ? el.textContent.trim() : '';
}

// Strips a formatted "$1,234" back to a plain number, for the one place this file adds
// already-computed figures together (see file header). Never used to invent a figure the
// engine did not already print somewhere on the page.
function usdToNumber(s) {
  const n = parseFloat(String(s).replace(/[^0-9.-]/g, ''));
  return Number.isFinite(n) ? n : 0;
}
function numberToUsd(n) {
  return '$' + Math.round(n).toLocaleString('en-US');
}

// ----- APPLY: write into the hidden real engine, exactly like every prior pass -----
function setStepper(key, target) {
  const el = byId(key);
  if (!el) return;
  let guard = 0;
  while (+el.dataset.v !== target && guard < 80) {
    const dir = target > +el.dataset.v ? '1' : '-1';
    const btn = document.querySelector('.stp[data-step="' + key + '"][data-dir="' + dir + '"]');
    if (!btn || btn.disabled) break;
    fire(btn, 'click');
    guard++;
  }
}
function setMoneyInput(key, value) {
  const el = byId(key);
  if (!el) return;
  el.value = String(Math.round(value));
  fire(el, 'input');
}
function clickStyle(i) {
  const btn = byId('hnStyle' + i);
  if (btn) fire(btn, 'click');
}
function setNoFee(on) {
  const el = byId('hnNoFee');
  if (!el) return;
  el.checked = on;
  fire(el, 'change');
}

// Accepts a clear US-style decimal or grouped number; rejects malformed grouping and a blank
// field. Matches the specialist reference's own validator. Zero is a valid answer (spec
// section 5: "It does not turn a blank into zero" is about not SILENTLY treating blank as
// zero; a reader who explicitly types 0 is answered honestly either way).
function parseMoney(value) {
  const raw = String(value).trim();
  if (!/^(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d{1,2})?$/.test(raw)) return null;
  const n = Number(raw.replace(/,/g, ''));
  return Number.isFinite(n) ? n : null;
}

export function initCalcWizard() {
  const shell = document; // steps live at document scope, not inside one wrapper
  const wdEl = byId('wiz-data');
  if (!wdEl) return;
  let WD;
  try { WD = JSON.parse(wdEl.textContent); } catch (e) { return; }

  const announcer = byId('announcer');
  function announce(msg) {
    if (!announcer) return;
    announcer.textContent = '';
    setTimeout(() => { announcer.textContent = msg; }, 40);
  }

  // BRIEF-calc-result-registry-rebuild: FIXED_STEPS never changes; every wizard-gated item
  // (carrier, rail where this country has a verdict, rental, and any future one) is
  // appended from WD.questionSteps, which CalcWizard.astro built from the SAME registry
  // order this file no longer needs to know about by name. Adding a fourth item is a
  // registry-only change (see avoidable.js's airRegistryEntryExample): WD.questionSteps
  // grows by one and this line needs nothing further.
  const FIXED_STEPS = ['destination', 'travelers', 'nights', 'style', 'flights', 'hotel', 'card'];
  const STEP_ORDER = FIXED_STEPS.concat(WD.questionSteps || []);
  const STEP_META = {
    destination: { editTitle: 'Change destination' },
    travelers: { editTitle: 'Change travelers' },
    nights: { editTitle: 'Change trip length' },
    style: { editTitle: 'Change travel style' },
    flights: { editTitle: 'Change airfare' },
    hotel: { editTitle: 'Change accommodation' },
    card: { editTitle: 'Change payment fees' },
    // Every wizard-gated item's own editTitle comes from the registry via WD.questionMeta,
    // never hardcoded here by key, so a new one needs no line added to this object.
    ...(WD.questionMeta || {}),
  };

  function panelFor(key) { return document.querySelector('[data-wizard-step="' + key + '"]'); }
  function formFor(key) { return document.querySelector('[data-step-form="' + key + '"]'); }

  // ----- surface-only state (see file header) -----
  // `answers` (BRIEF-calc-result-registry-rebuild, replacing the old separate
  // carrier/rail/rental fields) holds every wizard-gated item's own answer, keyed by its
  // stepKey, generic over however many of these this country page has. The hidden engine
  // has no concept of any of them and none should be invented for it: calc-engine.js does
  // not know what a carrier is, whether a reader is taking a train, or renting a car.
  // Defaults come from WD.questionDefaults (itself read off each item's own default-
  // selected option in the registry), never assumed here: 'other' for carrier, 'no' for a
  // plain yes/no item, exactly matching the radio checked by default in CalcWizard.astro.
  // A key that is not on THIS country's page (e.g. 'rail' where there is no verdict) simply
  // never appears in WD.questionDefaults, so it is never in this object at all, matching
  // rail's own "never asked" behavior rather than sitting unused.
  const state = {
    flightMode: 'known',
    origin: { hotel: 'estimate', flight: 'estimate' },
    answers: { ...(WD.questionDefaults || {}) },
  };

  // ===================================================================================
  // WIRING EACH CONTROL, once, on the real DOM node. Because edit-dialog re-uses these
  // same nodes (openEdit() relocates them, never clones them), a control only ever needs
  // wiring here, one time, regardless of whether it is currently showing in the wizard or
  // has been moved into the dialog.
  // ===================================================================================

  // ----- travelers / nights: presets + stepper -----
  function wireQuantity(name, hiddenKey) {
    const fieldset = document.querySelector('[data-quantity-fieldset="' + name + '"]');
    const qtyInput = document.querySelector('[data-quantity-input="' + name + '"]');
    if (!fieldset || !qtyInput) return;
    const min = +qtyInput.dataset.min, max = +qtyInput.dataset.max;
    const stepButtons = $$('.stepper button[data-adjust]', qtyInput.closest('.quantity-wrap'));

    function syncPresets(v) {
      $$('input[name="preset-' + name + '"]', fieldset).forEach(r => { r.checked = (+r.value === v); });
    }
    function syncButtons(v) {
      stepButtons.forEach(b => {
        const dir = +b.dataset.adjust;
        b.disabled = (dir < 0 && v <= min) || (dir > 0 && v >= max);
      });
    }
    function commit(v, announceIt) {
      qtyInput.value = v;
      syncPresets(v);
      syncButtons(v);
      setStepper(hiddenKey, v);
      if (announceIt) announce(v + ' ' + name);
    }
    $$('input[name="preset-' + name + '"]', fieldset).forEach(r => {
      r.addEventListener('change', () => commit(+r.value, true));
    });
    stepButtons.forEach(b => {
      b.addEventListener('click', () => {
        const current = parseInt(qtyInput.value, 10) || min;
        commit(Math.max(min, Math.min(max, current + (+b.dataset.adjust))), true);
      });
    });
    qtyInput.addEventListener('input', () => {
      const raw = qtyInput.value;
      const v = parseInt(raw, 10);
      if (raw !== '' && Number.isInteger(v) && v >= min && v <= max) {
        syncPresets(v); syncButtons(v); setStepper(hiddenKey, v);
      }
      // out-of-range or non-numeric: leave the field exactly as typed (never silently
      // clamp), validated properly at submit time instead.
    });
  }
  wireQuantity('travelers', 'hnTrav');
  wireQuantity('nights', 'hnNights');

  // ----- style: radio rows -----
  $$('[data-choice-fieldset="style"] input[type="radio"]').forEach(r => {
    r.addEventListener('change', () => { if (r.checked) clickStyle(+r.value); });
  });

  // ----- flights: mode radios + conditional price -----
  const flightPriceInput = document.querySelector('[data-price-input="flight"]');
  const flightPriceWrap = document.querySelector('[data-flight-price-wrap]');
  const initialFlightTypical = flightPriceInput ? Math.round(Number(flightPriceInput.value) || 0) : 0;
  $$('[data-choice-fieldset="flight-mode"] input[type="radio"]').forEach(r => {
    r.addEventListener('change', () => {
      if (!r.checked) return;
      state.flightMode = r.value;
      if (r.value === 'known') {
        if (flightPriceWrap) flightPriceWrap.hidden = false;
        const v = parseMoney(flightPriceInput.value);
        setMoneyInput('hnFlight', v == null ? 0 : v);
      } else {
        if (flightPriceWrap) flightPriceWrap.hidden = true;
        setMoneyInput('hnFlight', 0);
      }
    });
  });
  if (flightPriceInput) {
    flightPriceInput.addEventListener('input', () => {
      if (state.flightMode !== 'known') return;
      const v = parseMoney(flightPriceInput.value);
      if (v != null) setMoneyInput('hnFlight', v);
    });
  }

  // ----- hotel: price -----
  const hotelPriceInput = document.querySelector('[data-price-input="hotel"]');
  const initialRoomTypical = hotelPriceInput ? Math.round(Number(hotelPriceInput.value) || 0) : 0;
  if (hotelPriceInput) {
    hotelPriceInput.addEventListener('input', () => {
      const v = parseMoney(hotelPriceInput.value);
      if (v != null) setMoneyInput('hnRoom', v);
    });
  }

  // ----- card: radios -----
  $$('[data-choice-fieldset="card"] input[type="radio"]').forEach(r => {
    r.addEventListener('change', () => { if (r.checked) setNoFee(r.value === 'no-fee'); });
  });

  // ----- wizard-gated items: radios, surface-only (no hidden-engine equivalent), ONE
  // generic wiring loop over WD.questionSteps instead of one hand-authored block per item
  // (BRIEF-calc-result-registry-rebuild). Carrier alone splits across two ChoiceRows
  // sharing one `name` (the primary buttons and the "More carriers" disclosure), which
  // native radios treat as one exclusive group regardless of which fieldset each sits in;
  // syncMoreOptions() below is a no-op for any item with no such disclosure (rail, rental,
  // a hypothetical air), so it costs nothing to call generically for every key. -----
  function syncMoreOptions(key) {
    const details = document.querySelector('[data-more-options="' + key + '"]');
    if (details && details.querySelector('input:checked')) details.open = true;
  }
  (WD.questionSteps || []).forEach(key => {
    $$('[data-choice-fieldset="' + key + '"] input[type="radio"]').forEach(r => {
      r.addEventListener('change', () => { if (r.checked) { state.answers[key] = r.value; syncMoreOptions(key); } });
    });
    syncMoreOptions(key);
  });

  // ----- destination: search filter, reusing the site's typeahead behaviour -----
  (function wireDestination() {
    const search = document.querySelector('[data-destination-search]');
    const list = document.querySelector('[data-destination-list]');
    const empty = document.querySelector('[data-destination-empty]');
    if (!search || !list) return;
    function norm(s) { return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }
    const rows = $$('.choice', list);
    search.addEventListener('input', () => {
      const q = norm(search.value.trim());
      let shown = 0;
      rows.forEach(row => {
        const hit = q === '' || norm(row.dataset.name).indexOf(q) !== -1;
        row.hidden = !hit;
        if (hit) shown++;
      });
      if (empty) empty.hidden = shown !== 0;
      announce(shown + (shown === 1 ? ' matching country' : ' matching countries'));
    });
  })();

  // ===================================================================================
  // VALIDATION, per step. Returns { valid, message, focusEl }. Never silently clamps a
  // typed value (spec section 5): an out-of-range or malformed entry stays visible, with an
  // explanation, and focus moves to it.
  // ===================================================================================
  function validateStep(key) {
    if (key === 'destination') {
      const checked = document.querySelector('input[name="destination"]:checked');
      if (!checked) {
        const search = document.querySelector('[data-destination-search]');
        return { valid: false, message: 'Choose a destination before continuing.', focusEl: search, errorSelector: 'destination' };
      }
      return { valid: true, value: checked.value };
    }
    if (key === 'travelers' || key === 'nights') {
      const input = document.querySelector('[data-quantity-input="' + key + '"]');
      const min = +input.dataset.min, max = +input.dataset.max;
      const n = Number(input.value);
      if (input.value === '' || !Number.isInteger(n) || n < min || n > max) {
        return { valid: false, message: 'Enter a whole number from ' + min + ' to ' + max + '.', focusEl: input, errorSelector: key };
      }
      return { valid: true };
    }
    if (key === 'style') return { valid: true };
    if (key === 'flights') {
      const modeChecked = document.querySelector('[data-choice-fieldset="flight-mode"] input:checked');
      if (modeChecked && modeChecked.value === 'known') {
        const v = parseMoney(flightPriceInput.value);
        if (v == null) return { valid: false, message: 'Enter a price, or choose to leave flights out.', focusEl: flightPriceInput, errorSelector: 'flights' };
        state.origin.flight = (Math.round(v) !== initialFlightTypical) ? 'figure' : 'estimate';
      }
      return { valid: true };
    }
    if (key === 'hotel') {
      const v = parseMoney(hotelPriceInput.value);
      if (v == null) return { valid: false, message: 'Enter a room price in USD. For example, 150.', focusEl: hotelPriceInput, errorSelector: 'hotel' };
      state.origin.hotel = (Math.round(v) !== initialRoomTypical) ? 'figure' : 'estimate';
      return { valid: true };
    }
    if (key === 'card') return { valid: true };
    // Every wizard-gated item (carrier, rail, rental, and any future one) is a single
    // required-by-default radio group with a real default already checked, so none of
    // them need their own validation branch; this fallback covers all of them generically.
    return { valid: true };
  }
  function showStepError(key, message, focusEl) {
    const err = document.querySelector('#q-' + key + '-error, #q-' + key + '-quantity-error');
    const panel = panelFor(key);
    const errEl = panel ? panel.querySelector('.field-error') : null;
    if (errEl) errEl.textContent = message;
    if (focusEl) { focusEl.setAttribute('aria-invalid', 'true'); focusEl.focus(); }
  }
  function clearStepError(key) {
    const panel = panelFor(key);
    if (!panel) return;
    const errEl = panel.querySelector('.field-error');
    if (errEl) errEl.textContent = '';
    $$('[aria-invalid="true"]', panel).forEach(e => e.removeAttribute('aria-invalid'));
  }

  // Resync a later step's typical value from whatever the earlier steps have set, the
  // moment before it becomes visible, but ONLY where the reader has not already typed their
  // own figure (spec section 6: "Never overwrite user-entered airfare or room price when
  // changing style"). Today the only real case is the hotel step's price, since a style
  // choice made in step 4 changes the hidden engine's room prefill via its own
  // applyStyleRoom(), untouched, before the reader ever reaches step 6.
  function resyncBeforeShow(key) {
    if (key === 'hotel' && state.origin.hotel !== 'figure') {
      const hidden = byId('hnRoom');
      if (hidden && hotelPriceInput) hotelPriceInput.value = hidden.value;
    }
  }

  // ===================================================================================
  // STEP NAVIGATION
  // ===================================================================================
  function showStep(key) {
    STEP_ORDER.forEach(k => {
      const p = panelFor(k);
      if (p) p.hidden = (k !== key);
    });
    resyncBeforeShow(key);
    const panel = panelFor(key);
    if (panel) {
      const h1 = panel.querySelector('h1');
      if (h1) h1.focus({ preventScroll: false });
      if (typeof panel.scrollIntoView === 'function') {
        try { panel.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) { panel.scrollIntoView(); }
      }
    }
  }

  STEP_ORDER.forEach((key, index) => {
    const form = formFor(key);
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      clearStepError(key);
      const result = validateStep(key);
      if (!result.valid) { showStepError(key, result.message, result.focusEl); return; }
      if (key === 'destination') {
        // A real navigation: this static site bakes each country's engine data into its
        // own page (see calculator.astro's own header comment), so committing a
        // destination has to leave this page rather than update local state.
        window.location.href = '/calculator/' + result.value;
        return;
      }
      if (index < STEP_ORDER.length - 1) {
        showStep(STEP_ORDER[index + 1]);
      } else {
        finish();
      }
    });
    const back = form.querySelector('[data-wizard-back]');
    if (back) back.addEventListener('click', () => {
      if (index > 0) showStep(STEP_ORDER[index - 1]);
    });
  });

  // ===================================================================================
  // FINISH: reveal the result view and mirror the hidden engine's output into it.
  // ===================================================================================
  const resultView = document.querySelector('[data-result-view]');
  const errorView = document.querySelector('[data-error-view]');

  function finish() {
    STEP_ORDER.forEach(k => { const p = panelFor(k); if (p) p.hidden = true; });
    mirror();
  }

  // ===================================================================================
  // CARRIER CONNECTIVITY CARD (BRIEF-carrier-honest-build). The one piece of the result
  // view this file computes rather than mirrors, because nothing to mirror exists: neither
  // avoidable.js nor calc-engine.js knows the reader's carrier, so there is no hidden-engine
  // figure to read back. What IS computed here is the same small multiplication the
  // pctCardBase branch above already does for the dcc item: a sourced constant
  // (WD.carriers[key].dayRate, from carrier-roaming.js's CARRIER_PROFILES, passed straight
  // through in wizData, never re-sourced here) times a number this file already has
  // (nights, the same value every other mirrored line in this function uses). See
  // carrier-roaming.js's own header for why only the 'day-pass' model gets this
  // multiplication at all: the other four models are named honestly instead, with no
  // invented total.
  function renderCarrierItem(nights) {
    const wrap = document.querySelector('[data-avoid-carrier]');
    if (!wrap) return;
    const key = state.answers.carrier || 'other';
    const profiles = (WD && WD.carriers) || {};
    const profile = profiles[key] || null;
    const isNorthAmerica = (WD.countrySlug === 'mexico' || WD.countrySlug === 'canada');
    const n = Math.max(1, Math.round(Number(nights) || 1));

    let detail, status, amount = null, showEsim = true;

    if (profile && isNorthAmerica && profile.mexicoCanada) {
      // Mexico/Canada special case, ahead of the general model (BRIEF Part 3): several
      // carriers include or cheapen these two destinations regardless of their model
      // everywhere else, so the honest item here is that special treatment, not the
      // general one.
      detail = profile.mexicoCanada;
      status = 'Included';
      showEsim = false;
    } else if (!profile) {
      // "Other or not sure", or a carrier this build has no profile for: no carrier-specific
      // figure, ever (BRIEF honesty rule #3). Falls back to this country's own general
      // connectivity verdict, pre-authored at build time by avoidable.js's
      // carrierFallbackFor() and passed through unchanged.
      detail = WD.carrierFallbackText || 'Check your carrier\'s plan before you go, and compare live prices for a local SIM or eSIM.';
      status = 'No set price';
    } else if (profile.model === 'included') {
      detail = 'Your ' + profile.label + ' plan already includes data here (' + profile.includedNote + '). '
        + 'You likely do not need a travel eSIM, a purchase you can skip.';
      status = 'Included';
      showEsim = false;
    } else if (profile.model === 'day-pass' && profile.dayRate) {
      const cap = profile.cap;
      const billedDays = cap ? Math.min(n, cap.days) : n;
      const computed = profile.dayRate * billedDays;
      const capClause = cap ? (', capped at ' + numberToUsd(profile.dayRate * cap.days) + ' per bill period') : ' with no cap';
      detail = 'You are on ' + profile.label + ', ' + n + ' ' + (n === 1 ? 'night' : 'nights') + ' here. '
        + 'Its day pass is $' + profile.dayRate + '/day' + capClause + ', so about ' + numberToUsd(computed) + ' for this trip'
        + (cap ? ' if it falls in one bill period' : '') + '. A local eSIM is usually far cheaper for a trip this long.';
      amount = computed;
      status = 'Not included';
    } else {
      // add-on / pay-per-use / not-supported: named honestly, real terms, no computed
      // total, for the same reason the day-pass math above does not apply to them.
      detail = profile.namedNote || ('Check ' + profile.label + '\'s own international roaming page before this trip.');
      status = 'No set price';
    }

    const detailEl = wrap.querySelector('[data-carrier-detail]');
    if (detailEl) detailEl.textContent = detail;
    wrap.querySelectorAll('[data-carrier-status]').forEach(el => { el.textContent = status; });
    const amtWrap = wrap.querySelector('[data-carrier-amount-wrap]');
    if (amtWrap) {
      amtWrap.hidden = (amount == null);
      if (amount != null) {
        const amtEl = wrap.querySelector('[data-carrier-amount]');
        if (amtEl) amtEl.textContent = numberToUsd(amount);
      }
    }
    const esimWrap = wrap.querySelector('[data-carrier-esim-wrap]');
    if (esimWrap) esimWrap.hidden = !showEsim;

    const summaryEl = document.querySelector('[data-mirror="summaryCarrier"]');
    if (summaryEl) summaryEl.textContent = profile ? profile.label : 'Other or not sure';
  }

  // ===================================================================================
  // MIRROR: read already-computed text out of the hidden engine's own elements; write it,
  // verbatim, into the new surface. See file header for the full accounting.
  // ===================================================================================
  function mirror() {
    try {
      const trav = +byId('hnTrav').dataset.v;
      const nights = +byId('hnNights').dataset.v;
      const styleBtn = document.querySelector('#hn-app .seg button.on');
      const styleName = styleBtn ? styleBtn.textContent.trim() : '';
      const noFee = byId('hnNoFee').checked;

      const rangeLow = text('hnLo');
      const rangeHigh = text('hnHi');
      const flightAmt = text('hnFlightV');
      const roomAmt = text('hnRoomV');
      const spendAmt = text('hnSpend');
      const taxAmt = text('hnTax');
      const taxLabel = text('hnTaxLabel') || 'Tourist tax';
      const cardFeeAmt = text('hnCardFee');
      const atmFeeAmt = text('hnAtmFee');
      const feesLiveAmt = text('avFees');
      const cardBaseAmt = text('hnCardBase');
      const roomVal = Math.round(Number(byId('hnRoom').value) || 0);
      const flightVal = Math.round(Number(byId('hnFlight').value) || 0);

      if (!rangeLow || !rangeHigh) throw new Error('engine output not ready');

      const set = (sel, val) => { const el = document.querySelector(sel); if (el) el.textContent = val; };
      const setAll = (sel, val) => { $$(sel).forEach(el => { el.textContent = val; }); };

      setAll('[data-mirror="partyLabel"]', trav + ' ' + (trav === 1 ? 'traveler' : 'travelers'));
      setAll('[data-mirror="durationLabel"]', nights + ' ' + (nights === 1 ? 'night' : 'nights'));
      setAll('[data-mirror="rangeLow"]', rangeLow);
      setAll('[data-mirror="rangeHigh"]', rangeHigh);

      // ----- flights: inclusion is the SURFACE's own flightMode flag, not a reading of
      // whether the hidden figure happens to be zero (a reader can honestly enter $0). -----
      const flightIncluded = state.flightMode === 'known';
      const flightNotice = flightIncluded
        ? ('Flights included, about ' + flightAmt + ' for the whole party.')
        : 'Flights not included.';
      setAll('[data-mirror="flightNotice"]', flightNotice);
      const flightAction = document.querySelector('[data-flight-alert-action]');
      if (flightAction) flightAction.textContent = flightIncluded ? 'Change airfare \u2192' : 'Add flights \u2192';

      // ----- breakdown: Getting there -----
      set('[data-breakdown-amount="flights"]', flightIncluded ? flightAmt : 'Not included');
      document.querySelectorAll('[data-breakdown-amount="flights"]').forEach(el => el.classList.toggle('is-muted', !flightIncluded));
      set('[data-breakdown-line-amount="flights"]', flightIncluded ? flightAmt : 'Not included');
      set('[data-breakdown-line-provenance="flights"]', '<span class="meta-key">Basis</span> ' + (flightIncluded ? (state.origin.flight === 'figure' ? 'Your figure' : 'Our estimate') : 'Not applicable'));
      document.querySelectorAll('[data-breakdown-line-provenance="flights"]').forEach(el => { el.innerHTML = '<span class="meta-key">Basis</span> ' + (flightIncluded ? (state.origin.flight === 'figure' ? 'Your figure' : 'Our estimate') : 'Not applicable'); });
      document.querySelectorAll('[data-breakdown-line-status="flights"]').forEach(el => { el.textContent = flightIncluded ? 'Included' : 'Not included'; el.className = 'status' + (flightIncluded ? '' : ' not-included'); });

      // ----- breakdown: Accommodation -----
      set('[data-breakdown-amount="accommodation"]', roomAmt);
      set('[data-breakdown-line-amount="accommodation"]', roomAmt);
      document.querySelectorAll('[data-breakdown-line-provenance="accommodation"]').forEach(el => { el.innerHTML = '<span class="meta-key">Basis</span> ' + (state.origin.hotel === 'figure' ? 'Your figure' : 'Our estimate'); });
      set('[data-breakdown-line-note="accommodation"]', '$' + roomVal + ' a night \u00d7 ' + nights + ' ' + (nights === 1 ? 'night' : 'nights') + '.');

      // ----- breakdown: Accommodation checkout uplift (BRIEF-calc-v2-clusterA #7) -----
      // Gated on the engine's own already-computed tax figure (taxAmt, read from hnTax
      // above), never recomputed here. Zero or absent tax for this country means the
      // element stays hidden entirely, not a "$0 tax" line: see the honesty rules in
      // BRIEF-calc-v2-clusterA.md #7. Adding the two already-displayed figures (room total,
      // tax) together is the same sanctioned pattern the "Taxes & payment fees" group's own
      // amount below already uses (see file header): a presentation sum of numbers the
      // engine already shows elsewhere, not new math on an unknown input. No resort fee is
      // invented; the copy names it as unknown, because the engine models none.
      const upliftEl = document.querySelector('[data-checkout-uplift]');
      if (upliftEl) {
        const taxNum = usdToNumber(taxAmt);
        if (taxNum > 0) {
          const checkoutAmt = numberToUsd(usdToNumber(roomAmt) + taxNum);
          upliftEl.textContent = 'The room comes to ' + roomAmt + ' for the stay. Expect about ' + taxAmt + ' in tourist tax on top, so roughly ' + checkoutAmt + ' before any resort fees a hotel adds at checkout.';
          upliftEl.hidden = false;
        } else {
          upliftEl.textContent = '';
          upliftEl.hidden = true;
        }
      }

      // ----- breakdown: Daily spending -----
      set('[data-breakdown-amount="daily"]', spendAmt);
      set('[data-breakdown-line-amount="daily-2"]', spendAmt);

      // ----- breakdown: Taxes & payment fees. The one place this file sums figures the
      // engine already computed and already displays; see file header. -----
      const taxesTotal = usdToNumber(taxAmt) + usdToNumber(cardFeeAmt) + usdToNumber(atmFeeAmt);
      set('[data-breakdown-amount="taxes"]', numberToUsd(taxesTotal));
      set('[data-breakdown-tax-label]', taxLabel);
      set('[data-breakdown-line-amount="tax"]', taxAmt);
      set('[data-breakdown-line-amount="cardfee"]', cardFeeAmt);
      set('[data-breakdown-line-amount="atmfee"]', atmFeeAmt);
      document.querySelectorAll('[data-breakdown-line-provenance="cardfee"]').forEach(el => { el.innerHTML = '<span class="meta-key">Basis</span> ' + (noFee ? 'Your figure' : 'Sourced rule'); });
      document.querySelectorAll('[data-breakdown-line-status="cardfee"]').forEach(el => { el.textContent = noFee ? 'Already avoided' : 'Included'; el.className = 'status' + (noFee ? ' avoided' : ''); });

      // ----- avoidable items: the one live figure (card/ATM fee) -----
      document.querySelectorAll('[data-avoid-amount="fees"]').forEach(el => { el.textContent = feesLiveAmt; });
      document.querySelectorAll('[data-avoid-provenance="fees"]').forEach(el => { el.innerHTML = '<span class="meta-key">Basis</span> ' + (noFee ? 'Your figure' : 'Sourced rule'); });
      document.querySelectorAll('[data-avoid-status="fees"]').forEach(el => { el.textContent = noFee ? 'Already avoided' : 'Included'; el.className = 'status' + (noFee ? ' avoided' : ''); });

      // ----- avoidable items: HARD tier dollar figures (BRIEF-calc-v2-A2) -----
      // Every figure here traces to a real, already-rendered engine output. A `pctCardBase`
      // item (today only 'dcc') multiplies avoidable.js's own sourced percentage band
      // (worth.lo/worth.hi, passed through as data-avoid-pct-*, never recomputed) by
      // cardBase, which the engine has already computed and already rendered at hnCardBase;
      // this file only reads that text back, the same way it reads every other mirrored
      // figure. A `usd` item (today 'form' or 'reseller') is avoidable.js's own already-
      // resolved dollar range, scaled by the reader's own traveler count where the item is
      // per person, exactly the multiplication the engine's own exposureFor()/render() already
      // does for its blended dodge total; this just does it per item instead of summed.
      // `liveFees` needs nothing further: it is set immediately above.
      const cardBaseNum = usdToNumber(cardBaseAmt);
      function setAvoidMoneyRange(key, lo, hi) {
        const loEl = document.querySelector('[data-avoid-amount-lo="' + key + '"]');
        const sepEl = document.querySelector('[data-avoid-amount-sep="' + key + '"]');
        const hiEl = document.querySelector('[data-avoid-amount-hi="' + key + '"]');
        if (!loEl || !hiEl) return;
        const collapsed = Math.round(lo) === Math.round(hi);
        loEl.textContent = numberToUsd(lo);
        if (sepEl) sepEl.hidden = collapsed;
        hiEl.hidden = collapsed;
        if (!collapsed) hiEl.textContent = numberToUsd(hi);
      }
      $$('[data-avoid-tier="hard"] [data-avoid-item]').forEach(card => {
        const key = card.dataset.avoidItem;
        const kind = card.dataset.avoidKind;
        if (kind === 'pctCardBase') {
          const pctLo = +card.dataset.avoidPctLo || 0, pctHi = +card.dataset.avoidPctHi || 0;
          setAvoidMoneyRange(key, cardBaseNum * (pctLo / 100), cardBaseNum * (pctHi / 100));
        } else if (kind === 'usd') {
          const mult = (card.dataset.avoidUsdPp === '1') ? trav : 1;
          const usdLo = +card.dataset.avoidUsdLo || 0, usdHi = +card.dataset.avoidUsdHi || 0;
          setAvoidMoneyRange(key, usdLo * mult, usdHi * mult);
        }
        // kind === 'liveFees': nothing further; already set above.
      });

      // ----- HARD tier order: largest figure first (BRIEF-calc-v2-A2's layout rule) -----
      // Reads each card's OWN just-written figure back out of the DOM rather than a second
      // computation, so the order can never disagree with what the card shows (the same
      // "read the number back out of the sourced string" rule avoidable.js's own parsers
      // follow). A midpoint stands in for a range so a range and a single live figure (fees)
      // are genuinely comparable in dollars, not by type. A card whose figure cannot be read
      // (should not happen; defensive only) keeps its build-time position rather than
      // sorting to an arbitrary spot, which is the "stable order for mixed types" the brief
      // asks for in the case this sort cannot honestly decide.
      const hardTier = document.querySelector('[data-avoid-tier="hard"]');
      if (hardTier) {
        const ranked = $$('.avoid-card', hardTier).map((card, i) => {
          let value = null;
          if (card.dataset.avoidKind === 'liveFees') {
            value = usdToNumber(feesLiveAmt);
          } else {
            const key = card.dataset.avoidItem;
            const loEl = document.querySelector('[data-avoid-amount-lo="' + key + '"]');
            const hiEl = document.querySelector('[data-avoid-amount-hi="' + key + '"]');
            if (loEl && hiEl) {
              const lo = usdToNumber(loEl.textContent);
              const hi = hiEl.hidden ? lo : usdToNumber(hiEl.textContent);
              value = (lo + hi) / 2;
            }
          }
          return { card, i, value };
        });
        ranked.sort((a, b) => {
          if (a.value == null && b.value == null) return a.i - b.i;
          if (a.value == null) return 1;
          if (b.value == null) return -1;
          return b.value - a.value;
        });
        ranked.forEach(({ card }) => hardTier.appendChild(card));
      }

      // ----- calm outcome toggle (spec section 8). Eligibility is static per country
      // (WD.calmEligible, resolved at build time: see CalcWizard.astro's own comment on
      // this production blocker); the reader's own no-fee card choice is what actually
      // triggers it. -----
      const avoidSection = document.querySelector('[data-avoid-section]');
      const normalBlock = avoidSection ? avoidSection.querySelector('[data-avoid-normal]') : null;
      const calmBlock = avoidSection ? avoidSection.querySelector('[data-avoid-calm]') : null;
      const showCalm = WD.calmEligible && noFee;
      if (normalBlock) normalBlock.hidden = showCalm;
      if (calmBlock) calmBlock.hidden = !showCalm;

      // ----- trip summary (Edit trip) -----
      set('[data-mirror="summaryTravelers"]', trav + ' people');
      set('[data-mirror="summaryNights"]', nights + ' nights');
      set('[data-mirror="summaryStyle"]', styleName);
      set('[data-mirror="summaryFlight"]', flightIncluded ? ('$' + flightVal + ' per person') : 'Not included');
      set('[data-mirror="summaryHotel"]', '$' + roomVal + ' / room / night');
      set('[data-mirror="summaryCard"]', noFee ? 'No foreign-transaction fee' : 'Use the typical fee assumption');

      // ----- carrier connectivity card (BRIEF-carrier-honest-build) -----
      renderCarrierItem(nights);

      // ----- BRIEF-calc-result-registry-rebuild: rail, rental, and any future item of the
      // same shape, ONE generic toggle loop instead of one hand-copied block per item.
      // Nothing computed: every one of these cards' own text is fully build-time known
      // (see avoidable.js's railRegistryEntryFor/rentalRegistryEntry), so the only job here
      // is showing the right one precisely when the reader answered yes. A country with no
      // rail verdict simply has no 'rail' entry in WD.questionSteps, so this loop never
      // looks for a rail card there at all, matching the old hasRailVerdict gate's outcome
      // without needing a separate check. Carrier is skipped: it has no yes/no gate of its
      // own (always shown) and its own summary line is set above by renderCarrierItem(). -----
      (WD.questionSteps || []).forEach(key => {
        if (key === 'carrier') return;
        const wrap = document.querySelector('[data-avoid-extra="' + key + '"]');
        if (wrap) wrap.hidden = (state.answers[key] !== 'yes');
        const summaryEl = document.querySelector('[data-mirror="summary' + key.charAt(0).toUpperCase() + key.slice(1) + '"]');
        if (summaryEl) summaryEl.textContent = (state.answers[key] === 'yes') ? 'Yes' : 'No or not sure';
      });

      if (resultView) resultView.hidden = false;
      if (errorView) errorView.hidden = true;
      const h1 = resultView ? resultView.querySelector('h1') : null;
      if (h1) h1.focus({ preventScroll: false });
      if (resultView && typeof resultView.scrollIntoView === 'function') {
        try { resultView.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) { resultView.scrollIntoView(); }
      }
    } catch (err) {
      // Defensive only; see file header. Never show a partial or zero total.
      console.warn('TTC calculator: could not read a complete result.', err);
      if (resultView) resultView.hidden = true;
      if (errorView) errorView.hidden = false;
    }
  }

  const retryBtn = document.querySelector('[data-retry]');
  if (retryBtn) retryBtn.addEventListener('click', mirror);

  // ===================================================================================
  // RESULT ACTIONS: jump to edit summary, open the edit dialog, open the share dialog
  // ===================================================================================
  const jumpEdit = document.querySelector('[data-jump-edit]');
  if (jumpEdit) jumpEdit.addEventListener('click', () => {
    const summary = byId('edit-trip');
    if (!summary) return;
    if (typeof summary.scrollIntoView === 'function') {
      try { summary.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) { summary.scrollIntoView(); }
    }
    summary.focus({ preventScroll: true });
  });

  document.querySelectorAll('[data-edit]').forEach(btn => {
    btn.addEventListener('click', () => openEdit(btn.dataset.edit, btn));
  });

  // ----- Edit dialog: relocates the SAME control node used in the wizard, never a second
  // copy (spec section 11: "Share the question controls between the wizard and editor"). -----
  const editDialog = byId('edit-dialog');
  let editReturnFocus = null;
  let editHome = null; // { parent, next } to put the controls node back exactly where it was

  function snapshotControls(key) {
    if (key === 'travelers' || key === 'nights') {
      const input = document.querySelector('[data-quantity-input="' + key + '"]');
      return { value: input.value };
    }
    if (key === 'style') {
      const checked = document.querySelector('[data-choice-fieldset="style"] input:checked');
      return { value: checked ? checked.value : null };
    }
    if (key === 'flights') {
      const modeChecked = document.querySelector('[data-choice-fieldset="flight-mode"] input:checked');
      return { mode: modeChecked ? modeChecked.value : 'known', price: flightPriceInput.value, wrapHidden: flightPriceWrap ? flightPriceWrap.hidden : false };
    }
    if (key === 'hotel') return { value: hotelPriceInput.value };
    if (key === 'card') {
      const checked = document.querySelector('[data-choice-fieldset="card"] input:checked');
      return { value: checked ? checked.value : null };
    }
    if (key === 'destination') {
      const checked = document.querySelector('input[name="destination"]:checked');
      return { value: checked ? checked.value : null };
    }
    // Every wizard-gated item (carrier, rail, rental, and any future one) is a single
    // radio group under its own stepKey fieldset, snapshotted identically; see the
    // matching generic branch in restoreControls() below.
    if ((WD.questionSteps || []).includes(key)) {
      const checked = document.querySelector('[data-choice-fieldset="' + key + '"] input:checked');
      return { value: checked ? checked.value : null };
    }
    return {};
  }
  function restoreControls(key, snap) {
    if (key === 'travelers' || key === 'nights') {
      const n = Number(snap.value);
      if (Number.isFinite(n)) setStepper(key === 'travelers' ? 'hnTrav' : 'hnNights', n);
      const input = document.querySelector('[data-quantity-input="' + key + '"]');
      if (input) input.value = snap.value;
      const fieldset = document.querySelector('[data-quantity-fieldset="' + key + '"]');
      if (fieldset) $$('input[type="radio"]', fieldset).forEach(r => { r.checked = (r.value === String(snap.value)); });
    } else if (key === 'style') {
      if (snap.value != null) { clickStyle(+snap.value); $$('[data-choice-fieldset="style"] input').forEach(r => { r.checked = (r.value === snap.value); }); }
    } else if (key === 'flights') {
      state.flightMode = snap.mode;
      $$('[data-choice-fieldset="flight-mode"] input').forEach(r => { r.checked = (r.value === snap.mode); });
      flightPriceInput.value = snap.price;
      if (flightPriceWrap) flightPriceWrap.hidden = snap.wrapHidden;
      if (snap.mode === 'known') { const v = parseMoney(snap.price); setMoneyInput('hnFlight', v == null ? 0 : v); }
      else setMoneyInput('hnFlight', 0);
    } else if (key === 'hotel') {
      hotelPriceInput.value = snap.value;
      const v = parseMoney(snap.value);
      if (v != null) setMoneyInput('hnRoom', v);
    } else if (key === 'card') {
      if (snap.value != null) { setNoFee(snap.value === 'no-fee'); $$('[data-choice-fieldset="card"] input').forEach(r => { r.checked = (r.value === snap.value); }); }
    } else if (key === 'destination') {
      if (snap.value != null) $$('input[name="destination"]').forEach(r => { r.checked = (r.value === snap.value); });
    } else if ((WD.questionSteps || []).includes(key)) {
      if (snap.value != null) {
        state.answers[key] = snap.value;
        $$('[data-choice-fieldset="' + key + '"] input').forEach(r => { r.checked = (r.value === snap.value); });
        syncMoreOptions(key);
      }
    }
  }

  function closeEditDialog(returnControlsHome) {
    if (returnControlsHome && editHome) {
      const controls = editDialog.querySelector('.question-controls');
      if (controls) editHome.parent.insertBefore(controls, editHome.next);
    }
    editHome = null;
    editDialog.close();
  }

  function openEdit(key, trigger) {
    const meta = STEP_META[key];
    const panel = panelFor(key);
    if (!panel || !meta) return;
    const controls = panel.querySelector('.question-controls');
    if (!controls) return;
    editReturnFocus = trigger || null;
    editHome = { parent: controls.parentElement, next: controls.nextElementSibling };
    const snapshot = snapshotControls(key);

    editDialog.innerHTML =
      '<form class="dialog-layout" id="edit-form" novalidate>' +
      '<header class="dialog-header"><div><h2 id="edit-title" tabindex="-1">' + meta.editTitle + '</h2><p>All your other answers stay as they are.</p></div>' +
      '<button type="button" class="icon-button" data-close-edit aria-label="Close without applying changes">&times;</button></header>' +
      '<div class="dialog-content" id="edit-content"></div>' +
      '<footer class="dialog-actions"><button type="button" class="btn btn-secondary" data-close-edit>Cancel</button><button type="submit" class="btn btn-primary">Apply change</button></footer>' +
      '</form>';
    $('#edit-content', editDialog).appendChild(controls);

    $$('[data-close-edit]', editDialog).forEach(b => b.addEventListener('click', () => {
      restoreControls(key, snapshot);
      closeEditDialog(true);
    }));
    $('#edit-form', editDialog).addEventListener('submit', (e) => {
      e.preventDefault();
      const result = validateStep(key);
      if (!result.valid) {
        let err = editDialog.querySelector('.field-error');
        if (err) err.textContent = result.message;
        if (result.focusEl) result.focusEl.focus();
        return;
      }
      if (key === 'destination') {
        window.location.href = '/calculator/' + result.value;
        return;
      }
      closeEditDialog(true);
      mirror();
      announce('Trip updated. The old range is no longer shown.');
    });
    editDialog.addEventListener('close', function onClose() {
      editDialog.removeEventListener('close', onClose);
      document.body.style.overflow = '';
      if (editReturnFocus && editReturnFocus.isConnected) editReturnFocus.focus({ preventScroll: true });
    });
    editDialog.showModal();
    document.body.style.overflow = 'hidden';
    const h2 = $('#edit-title', editDialog);
    if (h2) h2.focus({ preventScroll: true });
  }

  // ===================================================================================
  // SHARE DIALOG + TRIP BRIEF. Text copy and print are implemented; a downloadable PNG
  // image (the specialist reference's canvas export) is deliberately NOT built in this
  // pass. It is a separate, self-contained subsystem the reference implements with its
  // own text-wrapping and layout code, and building it correctly was judged lower priority
  // than the wizard/result/breakdown/honesty-spine work this pass actually needed to get
  // right. Flagged to MAIN as a follow-up, not a silent omission.
  // ===================================================================================
  function currentPresentation() {
    return {
      destination: WD.countryName,
      partyLabel: text('hnTrav') ? (byId('hnTrav').dataset.v + ' travelers') : '',
      durationLabel: byId('hnNights') ? (byId('hnNights').dataset.v + ' nights') : '',
      rangeLow: text('hnLo'),
      rangeHigh: text('hnHi'),
      flightIncluded: state.flightMode === 'known',
      flightNotice: state.flightMode === 'known' ? ('Flights included, about ' + text('hnFlightV') + ' for the whole party.') : 'Flights not included.',
    };
  }
  const shareDialog = byId('share-dialog');
  const shareBtn = document.querySelector('[data-share]');
  if (shareBtn) shareBtn.addEventListener('click', () => openShare(shareBtn));

  function briefText() {
    const p = currentPresentation();
    const lines = [
      'TRUE TRIP COSTS - TRIP BRIEF',
      p.destination,
      [p.partyLabel, p.durationLabel].filter(Boolean).join(' | '),
      'About ' + p.rangeLow + ' to ' + p.rangeHigh + ' USD; for the whole party, not per person.',
      p.flightNotice,
      'Snapshot created ' + new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) + '. A saved snapshot, not a live quote; recheck rules before traveling.',
      'truetripcosts.com',
    ];
    return lines.join('\n');
  }
  function briefHTML() {
    const p = currentPresentation();
    return '<article class="trip-brief" aria-label="Shareable trip brief">' +
      '<header class="brief-brand"><strong>true trip costs.</strong><span>TRIP BRIEF</span></header>' +
      '<h2>' + p.destination + '</h2>' +
      '<p class="trip-meta">' + [p.partyLabel, p.durationLabel].filter(Boolean).join(' \u00b7 ') + '</p>' +
      '<div class="range-prefix">About</div><p class="range">' + p.rangeLow + '<span>&nbsp;to&nbsp;</span>' + p.rangeHigh + '</p>' +
      '<p class="range-scope">USD \u00b7 for the whole party</p>' +
      '<div class="scope-alert"><strong>' + p.flightNotice + '</strong></div>' +
      '<footer class="brief-note"><strong>Snapshot created ' + new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) + '.</strong><br>A saved snapshot, not a live quote. Recheck rules before traveling.<br>truetripcosts.com</footer>' +
      '</article>';
  }
  function openShare(trigger) {
    shareDialog.innerHTML =
      '<div class="dialog-layout"><header class="dialog-header"><div><h2 id="share-title" tabindex="-1">Keep your trip brief</h2><p>Its scope and assumptions stay attached.</p></div>' +
      '<button class="icon-button" type="button" data-close-share aria-label="Close trip brief">&times;</button></header>' +
      '<div class="dialog-content">' + briefHTML() +
      '<div class="copy-fallback" hidden><label class="field-label" for="copy-text">Select and copy this text</label><textarea id="copy-text" readonly></textarea></div></div>' +
      '<footer class="dialog-actions"><button type="button" class="btn btn-primary" data-copy-brief>Copy text</button><button type="button" class="btn btn-secondary" data-print>Print / save PDF</button></footer></div>';
    $('[data-close-share]', shareDialog).addEventListener('click', () => shareDialog.close());
    shareDialog.addEventListener('close', function onClose() {
      shareDialog.removeEventListener('close', onClose);
      document.body.style.overflow = '';
      if (trigger && trigger.isConnected) trigger.focus({ preventScroll: true });
    });
    $('[data-copy-brief]', shareDialog).addEventListener('click', async () => {
      const t = briefText();
      try {
        if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('unavailable');
        await navigator.clipboard.writeText(t);
        announce('Trip brief copied, including exclusions and assumptions.');
      } catch (e) {
        const fallback = $('.copy-fallback', shareDialog);
        fallback.hidden = false;
        const ta = $('textarea', fallback);
        ta.value = t; ta.focus(); ta.select();
        announce('Clipboard is unavailable here. Select and copy the text shown.');
      }
    });
    $('[data-print]', shareDialog).addEventListener('click', () => {
      const printRoot = byId('print-root');
      if (printRoot) printRoot.innerHTML = briefHTML();
      window.print();
    });
    shareDialog.showModal();
    document.body.style.overflow = 'hidden';
    const h2 = $('#share-title', shareDialog);
    if (h2) h2.focus({ preventScroll: true });
  }
}
