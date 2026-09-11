// Whether the big-three US carriers include roaming in each country, for US travelers.
// Extracted from the sourced roaming prose in each country's connectivity spoke
// (src/data/<slug>.js, the staying-connected / connectivity spoke).
//
// THE HONESTY SPINE. Every entry is sourced and dated, or it is explicitly 'unchecked'.
// CONFIDENCE GRAIN, read before wiring this into any UI: the Mexico and Canada cells are
// confirmed against the carriers' own North-America roaming pages (individually verified).
// The other ~54 countries are populated from the GENERAL carrier model (AT&T/Verizon day
// pass, T-Mobile tiered allowance) sourced to each carrier's general roaming page, NOT a
// per-country confirmation. The model is broadly true, but when this surfaces to a traveler
// it must be framed as "your carrier's general model, check your specific plan", never as a
// per-country guarantee. Country exceptions live in the note field (e.g. Switzerland is
// outside EU roaming; at-sea rates differ). The staleness pass re-checks cells on a cadence,
// so model-level today can harden to cell-confirmed over time.
// There is no third state and nothing here is guessed. Carrier plans drift quietly, so an
// unsourced or stale cell is worse than no cell at all: it is the confidently-wrong failure
// this site exists to avoid. A 'not checked' country honestly tells a reader to check their
// carrier's app; a guessed 'included' that turns out false could strand a traveler.
//
// STATUS VOCABULARY (fixed, see the comment block below for definitions):
//   included | paid-addon | not-included | unchecked
//
// SCOPE. This build covers only the big three (AT&T, T-Mobile, Verizon). MVNOs and smaller
// carriers are a later, separately-sourced addition. This is a DATA file only: no UI, no
// wizard wiring. See scripts/check-carrier-roaming.mjs for the gate that keeps it honest, and
// scripts/check-fact-staleness.mjs for the 180-day re-check cadence this data now rides.
//
// TWO ENTRIES CARRY A MAIN-VERIFICATION FLAG in their note field (mexico.att, canada carries
// none but mexico/canada.tmobile are 'unchecked' on purpose -- see below). Read those notes
// before pushing.

export const CARRIERS = ['att', 'tmobile', 'verizon'];  // the big three; expand later only with sourcing

// status values (fixed vocabulary):
//   'included'     - the carrier includes roaming here on the named plans (sourced)
//   'paid-addon'   - roaming is available but as a paid add-on / day pass (sourced)
//   'not-included' - the carrier does NOT roam here / would be very expensive (sourced)
//   'unchecked'    - we have not verified this cell yet (the honest default)

export const carrierRoaming = {
  argentina: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  aruba: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  australia: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge. Sourced via the Tom\'s Guide 2026 carrier-roaming comparison cited on this country\'s own page (its page does not link AT&T\'s own page directly).', source: 'https://www.tomsguide.com/us/wireless-carriers-international-travel-plans,review-4327.html', checkedISO: '2026-07-31' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-07-31' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-07-31' },
  },
  austria: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  bahamas: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  bahrain: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  brazil: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/international/day-pass/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  cambodia: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  canada: {
    att: { status: 'included', plans: 'eligible unlimited plans', note: 'AT&T includes unlimited talk, text and data in Canada and Mexico on eligible unlimited plans; International Day Pass is not needed for North America on those plans.', source: 'https://www.att.com/international/canada-roaming/', checkedISO: '2026-07-31' },
    tmobile: { status: 'unchecked' },
    verizon: { status: 'included', plans: 'Unlimited and Simplicity plans', note: 'Verizon states calling, texting and data in Canada (and Mexico) are included at no extra cost on Unlimited and Simplicity plans.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-07-31' },
  },
  china: {
    att: { status: 'unchecked' },
    tmobile: { status: 'unchecked' },
    verizon: { status: 'unchecked' },
  },
  colombia: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  'costa-rica': {
    att: { status: 'unchecked' },
    tmobile: { status: 'unchecked' },
    verizon: { status: 'unchecked' },
  },
  croatia: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  czechia: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  denmark: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  'dominican-republic': {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  ecuador: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  egypt: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  'el-salvador': {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  france: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge. Sourced via the Tom\'s Guide 2026 carrier-roaming comparison cited on this country\'s own page (its page does not link AT&T\'s own page directly).', source: 'https://www.tomsguide.com/us/wireless-carriers-international-travel-plans,review-4327.html', checkedISO: '2026-07-31' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-07-31' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-07-31' },
  },
  georgia: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  germany: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge. Sourced via the Tom\'s Guide 2026 carrier-roaming comparison cited on this country\'s own page (its page does not link AT&T\'s own page directly).', source: 'https://www.tomsguide.com/us/wireless-carriers-international-travel-plans,review-4327.html', checkedISO: '2026-07-31' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-07-31' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-07-31' },
  },
  greece: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  'hong-kong': {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  hungary: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  iceland: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  india: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/international/day-pass/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  indonesia: {
    att: { status: 'unchecked' },
    tmobile: { status: 'unchecked' },
    verizon: { status: 'unchecked' },
  },
  ireland: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  italy: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge. Sourced via the Tom\'s Guide 2026 carrier-roaming comparison cited on this country\'s own page (its page does not link AT&T\'s own page directly).', source: 'https://www.tomsguide.com/us/wireless-carriers-international-travel-plans,review-4327.html', checkedISO: '2026-09-03' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-09-03' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-09-03' },
  },
  jamaica: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  japan: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge. Sourced via the Tom\'s Guide 2026 carrier-roaming comparison cited on this country\'s own page (its page does not link AT&T\'s own page directly).', source: 'https://www.tomsguide.com/us/wireless-carriers-international-travel-plans,review-4327.html', checkedISO: '2026-07-31' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-07-31' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-07-31' },
  },
  kuwait: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  laos: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  mexico: {
    att: { status: 'included', plans: 'most unlimited plans', note: 'AT&T North America roaming: works in Mexico on most current unlimited plans, riding AT&T Mexico, Telcel or Movistar; calls to Mexican numbers included on most current unlimited talk/text plans. NOTE FOR MAIN: the Mexico spoke\'s own sources.links does not cite an AT&T URL directly; this reuses the AT&T Canada/Mexico roaming page cited on the Canada spoke, since that page is labeled \'Canada and Mexico roaming, and which plans include it.\' Please confirm the page covers Mexico before this ships.', source: 'https://www.att.com/international/canada-roaming/', checkedISO: '2026-07-31' },
    tmobile: { status: 'unchecked' },
    verizon: { status: 'included', plans: 'unlimited plans; Simplicity Plan', note: 'Verizon includes Mexico on its unlimited plans; the Simplicity Plan (launched June 2026) spells out unlimited talk/text/data roaming in Canada and Mexico.', source: 'https://www.verizon.com/plans/compare/', checkedISO: '2026-07-31' },
  },
  morocco: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  namibia: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/international/day-pass/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  netherlands: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/international/day-pass/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  'new-zealand': {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  norway: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  oman: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  philippines: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  poland: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  portugal: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  qatar: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  'saudi-arabia': {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  singapore: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/international/day-pass/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  'south-africa': {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  'south-korea': {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  spain: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge. Sourced via the Tom\'s Guide 2026 carrier-roaming comparison cited on this country\'s own page (its page does not link AT&T\'s own page directly).', source: 'https://www.tomsguide.com/us/wireless-carriers-international-travel-plans,review-4327.html', checkedISO: '2026-07-31' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-07-31' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-07-31' },
  },
  'sri-lanka': {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  sweden: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  switzerland: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/international/day-pass/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  taiwan: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  thailand: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  turkey: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  uae: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/international/day-pass/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
  'united-kingdom': {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge. Sourced via the Tom\'s Guide 2026 carrier-roaming comparison cited on this country\'s own page (its page does not link AT&T\'s own page directly).', source: 'https://www.tomsguide.com/us/wireless-carriers-international-travel-plans,review-4327.html', checkedISO: '2026-07-31' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-07-31' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-07-31' },
  },
  vietnam: {
    att: { status: 'paid-addon', plans: 'International Day Pass (not the plan default)', note: 'AT&T Day Pass, roughly $10-12/day, capped at 10 daily fees per line per bill period (about $120); the rest of that bill period on land is then covered at no further daily charge.', source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18' },
    tmobile: { status: 'included', plans: 'Experience More/Magenta MAX/Go5G Plus (5GB); Experience Beyond/Go5G Next (15GB); Better Value (30GB)', note: 'Included high-speed data roaming allowance by plan tier (5GB on Experience More/Magenta MAX/Go5G Plus, 15GB on Experience Beyond/Go5G Next, 30GB on Better Value), then throttled to 256kbps; no separate day-pass purchase needed. Entry Essentials tier is throttled from the start.', source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18' },
    verizon: { status: 'paid-addon', plans: 'TravelPass', note: 'Verizon TravelPass day-pass rate, roughly $10-12/day, with no equivalent per-cycle cap (unlike AT&T), so a long trip keeps billing daily.', source: 'https://www.verizon.com/plans/international/international-travel/travel-pass/', checkedISO: '2026-08-18' },
  },
};

export const roamingFor = (countrySlug, carrier) =>
  (carrierRoaming[countrySlug] && carrierRoaming[countrySlug][carrier]) || { status: 'unchecked' };

// ---------------------------------------------------------------------------
// CARRIER_PROFILES (BRIEF-carrier-honest-build). A SECOND, SEPARATE table from
// carrierRoaming above, deliberately not merged into it.
//
// carrierRoaming answers "does this carrier roam in THIS country", cell by cell, for the
// big three only, and check-carrier-roaming.mjs enforces that every live country carries
// exactly those three keys. CARRIER_PROFILES answers a different question the wizard
// actually asks a reader: "what does MY carrier generally charge to roam abroad", which
// is a per-carrier fact, not a per-country one, for the wider roster the calculator's own
// carrier question needs. Widening CARRIERS itself to cover that roster would force this
// gate to demand a sourced cell for all thirteen carriers in all ~70 countries, which is
// not what was researched and not what this brief asked for. So this stays its own table,
// consumed only by the wizard (see CalcWizard.astro and calc-wizard.js), and the existing
// spine above is untouched.
//
// FIELDS, one row per carrier:
//   label          display name.
//   group          'primary' (shown as a button) or 'more' (behind the wizard's "More
//                  carriers" disclosure). Judgment call, not a fact: name recognition only.
//   shortHelp      one line under the button in the wizard, the model in plain words.
//   model          'day-pass' | 'included' | 'pay-per-use' | 'not-supported' | 'add-on'.
//   dayRate        the real per-day USD figure where model is 'day-pass', else null.
//   cap            { days, note } where a bill-period style cap exists, else null. Only
//                  AT&T publishes one; a carrier with no cap keeps billing daily.
//   includedNote   for 'included' carriers, the allowance and its caveats, in plain prose
//                  meant to be read as a sentence (see avoidable.js carrierFallbackFor and
//                  calc-wizard.js's renderCarrierItem for how this is used).
//   mexicoCanada   Mexico/Canada get cheaper or included treatment on several of these
//                  carriers, independent of the carrier's general model elsewhere. null
//                  where nothing distinct was found (an honest gap, not a guessed "no").
//   namedNote      for 'add-on' / 'pay-per-use' / 'not-supported' carriers: the real,
//                  sourced shape of the product, named without a computed multiplication.
//                  See the honesty note below for why these never get day-pass math.
//   note           internal, for MAIN's review only, never shown to a reader: a hedge,
//                  a conflict between sources, or a plan-tier caveat worth a second look.
//   source         the carrier's own page. MAIN verifies every one of these before ship.
//   checkedISO     when this row was checked.
//
// THE HONESTY LINE THIS TABLE HOLDS. Only 'day-pass' carriers get a computed dollar
// exposure (dayRate x nights, capped): that is a real rate times a real trip length. The
// other four models do not multiply cleanly by nights (a monthly add-on, a fixed-length
// pass bought in blocks, an unpublished pay-per-use rate, or no product at all), so
// forcing them through the same formula would be inventing a number the source does not
// support. They are named honestly instead, with their real terms, and no total. See
// avoidable.js's carrierFallbackFor and calc-wizard.js's renderCarrierItem for where that
// line is actually drawn at render time.
//
// FLAGGED TO MAIN, in order of how much it matters:
//   xfinity   the biggest judgment call here. Xfinity Mobile's current 2026 plans (Mobile
//             Select, Mobile Plus) now INCLUDE 10GB of roaming at no charge, a change from
//             the flat $10/day Global Travel Pass this brief's own PART 1 assumed. Modeled
//             here as 'included' with the older-plan caveat folded into includedNote, since
//             that is what a reader signing up today actually gets. Worth a second look.
//   consumercellular  no stable published rate exists to source; consumercellular.com's own
//             international page now points customers at a partner eSIM rather than a
//             native roaming rate. Modeled 'pay-per-use' with no dayRate, named honestly.
//   usmobile / boost / consumercellular mexicoCanada  left null (an honest gap): no
//             distinct Mexico/Canada treatment was found for these three in this pass.
//   visible   own page says Global Pass pricing "starts at" $5/day and varies by
//             destination; independent trackers report a flat $10/day. dayRate is set to
//             the higher, safer figure; see `note`.
export const CARRIER_PROFILES = {
  att: {
    label: 'AT&T', group: 'primary',
    shortHelp: 'Roams most places at a day-pass rate.',
    model: 'day-pass', dayRate: 12, cap: { days: 10, note: 'per bill period, not per trip' },
    includedNote: null,
    mexicoCanada: 'Most AT&T Unlimited plans already include talk, text, and data in Mexico and Canada at no extra charge, separate from the Day Pass used elsewhere.',
    namedNote: null, note: null,
    source: 'https://www.att.com/support/article/wireless/KM1175103/', checkedISO: '2026-08-18',
  },
  tmobile: {
    label: 'T-Mobile', group: 'primary',
    shortHelp: 'Roaming data is usually already included.',
    model: 'included', dayRate: null, cap: null,
    includedNote: 'a high-speed data allowance by plan tier: 5GB on Experience More, Magenta MAX and Go5G Plus; 15GB on Experience Beyond and Go5G Next; 30GB on Better Value, then unlimited at up to 256kbps',
    mexicoCanada: 'Mexico and Canada use the same included tiers as everywhere else on the plan, and are usually the most reliable segment of coverage.',
    namedNote: null, note: null,
    source: 'https://www.t-mobile.com/customers/unlimited-roaming-sms-data', checkedISO: '2026-08-18',
  },
  verizon: {
    label: 'Verizon', group: 'primary',
    shortHelp: 'Roams most places at a day-pass rate.',
    model: 'day-pass', dayRate: 12, cap: null,
    includedNote: null,
    mexicoCanada: "Verizon's TravelPass drops to about $6/day in Mexico and Canada, half its usual rate elsewhere.",
    namedNote: null, note: null,
    source: 'https://www.verizon.com/support/travelpass-faqs/', checkedISO: '2026-08-18',
  },
  googlefi: {
    label: 'Google Fi', group: 'primary',
    shortHelp: 'Data is usually included on Unlimited Premium.',
    model: 'included', dayRate: null, cap: null,
    includedNote: 'high-speed data in 200+ destinations at no extra charge on the Unlimited Premium plan (roughly 50GB before it slows, then $10/GB to restore full speed); the Flexible plan instead pays the same $10/GB it charges at home from the first byte, and Unlimited Standard covers only Mexico and Canada',
    mexicoCanada: 'Even the lower-cost Unlimited Standard plan includes data in Mexico and Canada; only Unlimited Premium or Flexible extend that to 200+ other destinations.',
    namedNote: null, note: null,
    source: 'https://fi.google.com/about/international-rates', checkedISO: '2026-09-11',
  },
  xfinity: {
    label: 'Xfinity Mobile', group: 'more',
    shortHelp: 'Newer plans include roaming data; older ones do not.',
    model: 'included', dayRate: 10, cap: null,
    includedNote: 'up to 10GB of roaming data in 215+ destinations at no extra cost on the current Mobile Select and Mobile Plus plans (older, legacy Xfinity Mobile plans do not get this allowance and instead need the $10/day Global Travel Pass add-on, so check which plan you are on)',
    mexicoCanada: 'Mobile Select and Mobile Plus treat Mexico and Canada as fully domestic: the same unlimited data you get at home, not just the 10GB roaming allowance used elsewhere.',
    namedNote: null,
    note: "The biggest model change from this brief's own assumption of a flat $10/day pass. Confirmed against Xfinity's own page; flagged for a second look.",
    source: 'https://www.xfinity.com/learn/mobile/plan/international', checkedISO: '2026-09-11',
  },
  mint: {
    label: 'Mint Mobile', group: 'more',
    shortHelp: 'No roaming included; buy a pass before you go.',
    model: 'add-on', dayRate: null, cap: null,
    includedNote: null,
    mexicoCanada: 'Canada is free on Mint: unlimited talk and text plus 3GB of high-speed data, no Minternational Pass needed. Mexico uses the same paid pass as everywhere else.',
    namedNote: 'Mint has no included roaming. Its Minternational Pass is bought ahead in fixed blocks: $5 for 1 day (1GB), $10 for 3 days (3GB), or $20 for 10 days (10GB), in 180+ countries.',
    note: null,
    source: 'https://www.mintmobile.com/features/international-roaming/', checkedISO: '2026-09-11',
  },
  visible: {
    label: 'Visible', group: 'more',
    shortHelp: 'Roams most places at a day-pass rate.',
    model: 'day-pass', dayRate: 10, cap: null,
    includedNote: null,
    mexicoCanada: 'Visible+ and Visible+ Pro plans include data roaming in Canada, Mexico, Puerto Rico and the US Virgin Islands at no charge, separate from the paid Global Pass used elsewhere.',
    namedNote: null,
    note: "Visible's own page says Global Pass pricing \"starts at\" $5/day and varies by destination; independent trackers report a flat $10/day. Quoting the higher figure as the honest, safer one.",
    source: 'https://www.visible.com/globalpass', checkedISO: '2026-09-11',
  },
  cricket: {
    label: 'Cricket', group: 'more',
    shortHelp: 'A day-pass add-on on qualifying plans.',
    model: 'day-pass', dayRate: 10, cap: null,
    includedNote: null,
    mexicoCanada: 'Unlimited data, talk, and text to and from Mexico and Canada is already included on the Select Unlimited, Smart Unlimited, and Supreme Unlimited plans, no Cricket Passport needed.',
    namedNote: null,
    note: 'A separate 5-day/5GB Cricket Passport pack also exists for $25; the $10/day Unlimited Daily pass is the cleaner day-rate to quote. Requires the $35-plus/mo Select Unlimited plan or higher.',
    source: 'https://www.cricketwireless.com/the-cricket-connection/Cricket-Passport.html', checkedISO: '2026-09-11',
  },
  usmobile: {
    label: 'US Mobile', group: 'more',
    shortHelp: 'Roaming data is often included, by plan.',
    model: 'included', dayRate: null, cap: null,
    includedNote: "up to 20GB of roaming data in 180+ countries on the Unlimited Premium plan (the exact allowance depends on which of US Mobile's three networks, Light Speed, Warp, or Dark Star, your line runs on); lower-tier plans get less or none, with $15 (1GB) and $30 (5GB) top-ups available",
    mexicoCanada: null,
    namedNote: null, note: 'No distinct Mexico/Canada treatment found in this pass; left null rather than guessed.',
    source: 'https://www.usmobile.com/international-roaming-phone-plans', checkedISO: '2026-09-11',
  },
  boost: {
    label: 'Boost Mobile', group: 'more',
    shortHelp: 'A monthly add-on with a small data allowance.',
    model: 'add-on', dayRate: null, cap: null,
    includedNote: null,
    mexicoCanada: null,
    namedNote: "Boost's Global Roaming is a monthly add-on, about $10/month per line for 1GB of data plus talk and text, with extra data at $10/GB.",
    note: 'No distinct Mexico/Canada treatment found in this pass; left null rather than guessed.',
    source: 'https://www.boostmobile.com/global-roaming', checkedISO: '2026-09-11',
  },
  consumercellular: {
    label: 'Consumer Cellular', group: 'more',
    shortHelp: 'No clear roaming rate; check before you go.',
    model: 'pay-per-use', dayRate: null, cap: null,
    includedNote: null,
    mexicoCanada: null,
    namedNote: "Consumer Cellular has no day-pass or add-on plan. It bills data at a pay-per-use rate that is not published as a stable figure, and its own international travel page now points customers to a partner eSIM instead.",
    note: 'Weakest-sourced row in this table: no stable official rate to cite. Flag for MAIN before shipping.',
    source: 'https://www.consumercellular.com/international-roaming', checkedISO: '2026-09-11',
  },
  metro: {
    label: 'Metro by T-Mobile', group: 'more',
    shortHelp: 'No roaming outside Mexico and Canada.',
    model: 'not-supported', dayRate: null, cap: null,
    includedNote: null,
    mexicoCanada: 'Mexico and Canada are the one exception: Metro sells add-on passes with up to 10GB of data roaming included, unlike the rest of the world.',
    namedNote: "Metro does not offer general international data roaming outside Mexico and Canada; its own terms say Metro does not provide service outside the United States.",
    note: null,
    source: 'https://www.metrobyt-mobile.com/benefits/roaming-countries', checkedISO: '2026-09-11',
  },
  straighttalk: {
    label: 'Straight Talk', group: 'more',
    shortHelp: 'A paid weekly roaming pass, bought ahead.',
    model: 'add-on', dayRate: null, cap: null,
    includedNote: null,
    mexicoCanada: 'Eligible Straight Talk plans include up to 10GB of roaming data in Canada and Mexico specifically, separate from and more generous than the general pass used elsewhere.',
    namedNote: 'Straight Talk sells a 7-Day International Roaming pass (5GB of data, 300 minutes, unlimited messaging) in 140+ destinations, usable up to five times per plan cycle.',
    note: null,
    source: 'https://www.straighttalk.com/extras/international-long-distance', checkedISO: '2026-09-11',
  },
};

export default carrierRoaming;
