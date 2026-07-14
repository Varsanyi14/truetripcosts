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
  insurance: "https://withfaye.pxf.io/NGeQxb",

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

  // Passport and visa expediter (RushMyPassport / RushMyTravelVisa, via Rakuten, MID 24807).
  // A private service. Two hard rules keep it honest:
  //   1. It is always shown BENEATH the official government route, never above it.
  //   2. It appears only where a US traveler has a real, paid document task: renewing a
  //      passport, a country that actually requires a visa, or an airport transit visa.
  //      It is never placed on a visa-free destination, since selling a visa nobody needs
  //      would break the point of the site. That is why the visa link is opt-in per country
  //      below, with no site-wide fallback.
  //   passportExpediter  the passport-expedite link, used on the passports and visas page.
  //   transitVisa        the airport-transit-visa link, used in the transit section there.
  //   visaByCountry      per-country travel-visa deep links, keyed by slug. Fill in ONLY the
  //                      countries that genuinely require a visa for US citizens. A slug left
  //                      out shows no expediter, which is the safe default.
  // To go live: paste the matching Rakuten "Get link" URL into each line you want on.
  passportExpediter: "https://click.linksynergy.com/fs-bin/click?id=CEp78hNtoag&offerid=1492921.10000027&type=3&subid=0",
  transitVisa: "https://click.linksynergy.com/fs-bin/click?id=CEp78hNtoag&offerid=1492921.10000021&type=3&subid=0",
  visaByCountry: {
    brazil: "https://click.linksynergy.com/fs-bin/click?id=CEp78hNtoag&offerid=1492921.10000046&type=3&subid=0",
    india: "https://click.linksynergy.com/fs-bin/click?id=CEp78hNtoag&offerid=1492921.10000129&type=3&subid=0",
    vietnam: "https://click.linksynergy.com/fs-bin/click?id=CEp78hNtoag&offerid=1492921.10000163&type=3&subid=0",
    egypt: "https://click.linksynergy.com/fs-bin/click?id=CEp78hNtoag&offerid=1492921.10000080&type=3&subid=0",
    indonesia: "https://click.linksynergy.com/fs-bin/click?id=CEp78hNtoag&offerid=1492921.10000130&type=3&subid=0",
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

// Returns the travel-visa expediter link for a country, or null. There is deliberately
// no site-wide fallback here: the link shows only for countries listed in visaByCountry,
// so a visa-free destination can never surface an expediter it does not need.
export function visaLink(slug) {
  return (affiliate.visaByCountry && affiliate.visaByCountry[slug]) || null;
}
