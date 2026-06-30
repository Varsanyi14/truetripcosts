export default {
  slug: "costa-rica",
  live: true,
  name: "Costa Rica",
  from: "United States",
  checked: "Jun 2026",
  checkedISO: "2026-06-30",
  region: "Americas",
  hook: "Dollars work almost everywhere, but paying in colones quietly saves you money.",

  title: "Money in Costa Rica (2026): Dollars vs Colones, Cards, ATMs and Tipping | True Trip Costs",
  description: "How to handle money in Costa Rica as a US traveler in 2026: when to pay in US dollars versus colones, fee-free bank ATMs, the 13% VAT and 10% service charge already on your bill, light tipping, and why you barely need to exchange currency. Checked June 2026.",

  h1: "Money in Costa Rica, sorted.",
  lede: "A calm, current plan for the money side of your trip: the dollar works almost everywhere here, but knowing when to reach for colones instead is what keeps a little extra in your pocket.",
  hero: {
    img: "/costa-rica-hero.jpg",
    h: 1375,
    alt: "A colorful Costa Rican village street at dusk with a volcano and a small white church framed at the end, brightly painted houses with tile roofs lining both sides, palm trees and string lights overhead, a lone figure walking up the cobblestone street, and a plate of rice and black beans with fried plantains beside a fruit smoothie on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Costa Rica runs on two currencies at once: the colón and the US dollar, which works as an unofficial second currency almost everywhere tourists go. The simple rule is to <b>pay in whatever currency the price is quoted in</b>, dollars for hotels, tours and shuttles, colones for sodas (local diners), markets, taxis and buses, so you avoid a poor made-up exchange rate. Bring a <b>no-fee credit or debit card</b> for most spending, pull <b>colones from a bank ATM</b> (Banco Nacional or BCR are often fee-free), and carry small, pristine US bills (twenties and under) as a backup. There is no separate tourist tax, but restaurant bills already include a <b>13% tax and a 10% service charge</b>, so check before tipping again.",

  meter: {
    heading: "Cards go a long way, but cash still matters off the tourist track.",
    cashPct: 45,
    note: "A rough feel for everyday spending. Cards work remarkably well in Costa Rica, even at small businesses and toll booths, but sodas, roadside stands, small towns and remote areas like the Osa Peninsula, Tortuguero and Santa Teresa often run on cash. Carry some of both currencies."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Widely accepted, even rurally", p: "Visa and Mastercard work at hotels, restaurants, grocery stores, tour offices and even highway tolls. Amex is taken at high-end spots but less widely. The exceptions are cash-only pockets like Tortuguero, Drake Bay and parts of the Osa and Nicoya peninsulas, plus the odd rural machine that loses its internet signal.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Two currencies, used differently", p: "Dollars cover tourist services and bigger purchases; colones are better for sodas, markets, taxis, buses and toll booths. Bring small US bills (twenties and under) in pristine condition, since torn or worn notes are routinely refused, and you'll get change in colones.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy, some fee-free", p: "Bank ATMs are common outside the most remote areas and usually dispense both colones and dollars. Banco Nacional and BCR often charge foreign cards no access fee; others run about $3 to $6 per withdrawal. Choose colones, and decline the \"convert to USD\" prompt.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee credit or debit card</b> for most spending, plus a backup card.",
      "Pack a stack of <b>small US bills (ones, fives, tens, twenties) in perfect condition</b>. Skip fifties and hundreds, which are hard to use outside banks.",
      "You do <b>not</b> need to buy colones before you travel. Pull them from an ATM on arrival at a better rate."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters, they have the worst rates in the country.",
      "Pull a little cash from a <b>bank ATM</b> (Banco Nacional or BCR if you can find one), choose <b>colones</b>, and <b>decline \"convert to USD.\"</b>",
      "Withdraw a reasonable amount at once to limit per-withdrawal fees, but you won't need much up front since dollars work too."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Pay in the quoted currency:</b> dollars for hotels, tours and shuttles; colones for sodas, markets, taxis and buses.",
      "<b>Card</b> for most things, including grocery stores and tolls. Keep <b>cash</b> for sodas, roadside stands and remote areas.",
      "Tip the <b>guachiman</b> (the vested person watching parked cars) a few hundred colones, it's a local custom.",
      "When paying by card, <b>ask to be charged in colones</b> to get your bank's rate, not the merchant's."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Match the currency to the price tag.</b> Paying dollars on a colón price (or vice versa) lets the seller pick the exchange rate, usually in their favor.",
      "On any card terminal or ATM, <b>choose colones, never dollars</b>, to dodge the dynamic-conversion markup of 3 to 8%."
    ], cta: null }
  ],

  cash: {
    rate: 453, cur: "CRC", round: 1000, defaultIndex: 1,
    rateNote: "Rough guide at about 453 colones to the dollar in mid-2026, though it moves daily. A quick trick: 1,000 colones is a bit over 2 dollars, so halve the colón figure and drop the zeros for a rough dollar amount.",
    styles: [
      { n: "Budget",    per: 50,  cash: 0.5 },
      { n: "Mid-range", per: 110, cash: 0.4 },
      { n: "Comfort",   per: 200, cash: 0.25 }
    ]
  },

  connectivity: {
    works: "Mostly, with real gaps in the wild places you came to see. The state carrier Kolbi (ICE) has by far the widest reach, including national parks, cloud forests and remote coasts where Liberty and Claro lose signal, so a Kolbi-backed eSIM is the safest bet. 4G is the everyday standard; 5G is only in the larger towns. Expect dead zones in places like Corcovado, deep Monteverde, the Osa Peninsula and stretches of the Caribbean coast, and download offline maps before heading off the main routes. WhatsApp is the default way local tour operators and lodges communicate, so set it up before you go."
  },

  // TOURIST TAX (verified Jun 2026). Costa Rica has NO city/bed tourist tax of the kind charged
  // in much of Europe. The relevant charges are: (1) 13% VAT (IVA), included in displayed prices
  // by law; and (2) a 10% service charge ("servicio") added by law to most restaurant bills, on
  // top of which the 13% sits. Neither is a per-night occupancy tax, so the calculator adds
  // nothing here (single "everywhere" region at 0). The taxfree block below explains the real
  // charges travelers actually see on a bill.
  tax: {
    unit: "flatPerNight",
    currency: "CRC",
    capNights: null,
    note: "Costa Rica has no separate per-night tourist or city tax. Prices already include 13% VAT, and restaurant bills add a 10% service charge by law (see below), so there is nothing extra to estimate per night here.",
    regions: [
      { key: "everywhere", label: "Anywhere in Costa Rica", rate: 0, note: "No nightly tourist tax applies. The charges you will actually see are 13% VAT, already baked into prices, and a 10% service charge added to most restaurant bills." }
    ]
  },

  currencyHeading: "The colón (and the dollar), in plain terms.",
  facts: [
    { sym: "crc", k: "Quick conversion", v: "About 453 colones to the dollar in mid-2026. To estimate dollars fast, halve the colón amount and drop the zeros: 10,000 colones is roughly 22 dollars. The symbol is the crossed C, the same shape as a cent sign." },
    { sym: "coins", k: "Notes and coins", v: "Colón notes run 1,000, 2,000, 5,000, 10,000, 20,000 and 50,000, all colorful plastic featuring Costa Rican wildlife. Coins go from 5 to 500 colones. You'll often receive colones as change even when you pay in dollars." },
    { sym: "usd", k: "Two currencies at once", v: "The US dollar is an unofficial second currency: hotels, tours and shuttles are usually quoted in dollars, while sodas, markets and local services price in colones. Pay in whatever the price is quoted in for the fairest rate." },
    { sym: "tip", k: "Service is already on the bill", v: "Most sit-down restaurants add a 10% service charge plus 13% VAT to the menu price by law. That covers the baseline tip, so an extra gratuity is only for standout service, not an obligation." }
  ],

  taxfree: {
    label: "Taxes and service charges",
    heading: "No tourist tax, but two charges are baked into bills.",
    text: "Costa Rica does not levy a per-night tourist or city tax. What you will see instead are two things. <b>VAT (IVA) of 13%</b> is included in displayed prices by law, so a shelf or menu price is usually what you pay. At sit-down restaurants, a <b>10% service charge</b> is added on top of the food total, and the 13% tax is then calculated on the combined amount, so a menu price can rise by roughly 23% at checkout if neither was shown included. Some places fold both into the listed prices and note \"impuestos incluidos\"; others add them at the end. Because the 10% service charge already covers a baseline tip, you only need to add more for genuinely great service. There is no VAT-refund scheme for tourists in Costa Rica, so the 13% is simply part of the price."
  },

  traps: [
    "<b>Pay in the currency on the price tag.</b> If something is priced in colones, pay colones; if priced in dollars, pay dollars. Mixing them lets the merchant set an exchange rate that favors them, quietly costing you 5 to 10%.",
    "<b>Bring small, flawless US bills.</b> Fifties and hundreds are hard to break outside banks, and any bill that is torn, stained or heavily worn is routinely refused, even ones that came from a local ATM.",
    "<b>Watch for a second \"tip\" line.</b> Your bill already includes a 10% service charge. Some spots in tourist areas then hand over a US-style receipt with a blank tip line, hoping you'll add another 18 to 20% on top. You've already tipped.",
    "<b>\"Convert to USD?\" Always decline.</b> On card terminals and ATMs, choosing your home currency (dynamic currency conversion) adds 3 to 8%. Pick colones and let your own bank handle the rate."
  ],

  tippingHeading: "Light, since 10% is usually already on the bill.",
  tipping: "Tipping in Costa Rica is modest and often already handled. Most sit-down restaurants add a 10% service charge by law, so you are not expected to tip again unless the service was exceptional, in which case an extra 5 to 10% is a kind gesture. Sodas and street stands do not expect tips. For guided tours, gratuities are genuinely appreciated and a real part of guides' income: roughly 10%, or about $5 to $15 per person per day for a naturalist or adventure guide, more for something outstanding. Private drivers often see $5 to $15 a day; for taxis, rounding up the fare is plenty. Hotel housekeeping and porters appreciate $1 to $2 a day or per bag, and it is customary to hand a guachiman (the vested person watching your parked car) a few hundred colones. Tip in colones where you can, since it spares staff an exchange.",

  faqs: [
    { q: "Should I use US dollars or colones in Costa Rica?", a: "Both work, but pay in whatever currency the price is quoted in. Hotels, tours and shuttles are usually priced in dollars, while sodas, markets, taxis and buses price in colones. Matching the currency avoids a made-up exchange rate that favors the seller. You'll often get colones as change even when you pay in dollars." },
    { q: "Do I need cash in Costa Rica?", a: "Less than you might think, but yes for some situations. Cards work widely, even at small shops and toll booths, but sodas, roadside stands and remote areas like Tortuguero, Drake Bay and the Osa Peninsula are often cash only. Carry small US bills and some colones as backup." },
    { q: "What is the best ATM to use in Costa Rica?", a: "Banco Nacional and BCR (Banco de Costa Rica) often charge foreign cards no access fee, while others run about $3 to $6 per withdrawal. Most ATMs dispense both colones and dollars. Choose colones, and always decline the \"convert to USD\" option to avoid the markup." },
    { q: "Do you tip in Costa Rica?", a: "Lightly, because most restaurants already add a 10% service charge by law, which covers the baseline tip. Add a little more only for exceptional service. Tour guides and private drivers are the real exception: around 10%, or roughly $5 to $15 per person per day, is appreciated and forms part of their income." },
    { q: "Is there a tourist tax in Costa Rica?", a: "No per-night tourist or city tax like much of Europe charges. Prices already include 13% VAT, and restaurant bills add a 10% service charge on top of the food total. There is no VAT refund for visitors, so the 13% is simply part of what you pay." },
    { q: "How much cash should I bring for a week in Costa Rica?", a: "For two travelers, very roughly $300 to $500 across a week in small US bills, topped up with colones from an ATM as you go, alongside a no-fee card for most spending. Carry more cash if you're heading to remote, card-light areas like the Osa Peninsula or Tortuguero." }
  ]
};
