// Baked mid-market snapshot, base US dollar. This is only a safety net.
//
// The currency anchor panels read live rates from /api/rates, which the Worker
// refreshes once a day from ExchangeRate-API and stores in KV. On every page
// load the live value overrides what is here. These baked numbers are shown
// only in the rare case that the live fetch is unavailable, and the panel
// labels them with the date below so a reader always knows how fresh they are.
//
// You do not need to keep these current. Refresh them occasionally if you like
// (paste a fresh set from the same source), but the live feed does the real
// work. Rates are how many units of each currency equal one US dollar.
export default {
  base: "USD",
  date: "15 Jul 2026",
  rates: {
    AED: 3.6725,
    ARS: 1474.74,
    AUD: 1.4362,
    BRL: 5.0992,
    BSD: 1,
    CAD: 1.4066,
    CHF: 0.8102,
    CNY: 6.78,
    COP: 3240.62,
    CRC: 455.9955,
    CZK: 21.2513,
    DKK: 6.5382,
    DOP: 58.9102,
    EGP: 50.7236,
    EUR: 0.8758,
    GBP: 0.747,
    GEL: 2.63,
    IDR: 18080.3,
    INR: 96.2416,
    ISK: 125.5528,
    JMD: 158.8814,
    JPY: 162.1718,
    KRW: 1490.4845,
    LAK: 21900,
    LKR: 336.47,
    MAD: 9.3302,
    MXN: 17.439,
    NAD: 16.3784,
    NOK: 9.6907,
    NZD: 1.7213,
    SEK: 9.6617,
    SGD: 1.2914,
    THB: 33.4681,
    TRY: 47.033,
    VND: 26206,
    ZAR: 16.3784
  }
};
