// One home for every outbound paid (affiliate) link on the site.
//
// Two rules keep this safe and tidy:
//   1. To turn a link on, paste the tracking URL here. One edit, every page updates.
//   2. A link left as null stays hidden, so a page ships with its content live and the
//      button simply appears the day you fill the URL in. Nothing breaks while it is empty.
//
// The honesty labels ("earns commission" / "no commission") live in the page, not here.

export const affiliate = {
  // Faye travel insurance, via Impact. One link covers every country.
  // Paste your approved Impact tracking link here once Faye approves you.
  insurance: null,

  // Travel eSIM, via Impact (Nomad, Ubigi, Airalo, or whichever you are approved for).
  //   esimBrand     the provider's name, shown on the button (e.g. "Nomad"). Set it with esimBase.
  //   esimBase      your general eSIM tracking link, used as the fallback for any country.
  //   esimByCountry optional deep links straight to a country's page, keyed by slug.
  //                 Falls back to esimBase when a slug is missing.
  // To go live: set esimBrand to the provider name and paste your approved link into esimBase.
  // Switching providers later (or back to Airalo) is just these two lines. Nothing else to touch.
  esimBrand: "Nomad",
  esimBase: "https://lotusflareinc.pxf.io/m4NkDa",
  esimByCountry: {
    // vietnam: "https://your-esim-deep-link",
    // japan: "https://your-esim-deep-link",
  },

  // No-fee travel cards. Deferred until there is traffic, via a card network.
  // Parked here so the future home is ready. Not wired into the pages yet.
  cardNoFee: null,
  cardAtm: null,
};

// Returns the right eSIM link for a country: its deep link if we have one,
// otherwise the base link, otherwise null (the button stays hidden).
export function esimLink(slug) {
  if (affiliate.esimByCountry && affiliate.esimByCountry[slug]) return affiliate.esimByCountry[slug];
  return affiliate.esimBase || null;
}
