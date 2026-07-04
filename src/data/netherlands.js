export default {
  slug: "netherlands",
  live: true,
  name: "Netherlands",
  from: "United States",
  checked: "Jun 2026",
  checkedISO: "2026-06-30",
  sources: {
    changed: "Sources added. Verified with the Dutch government that VAT on hotel rooms rose from 9% to 21% on 1 January 2026 (camping stays stay at 9%), and with the City of Amsterdam that its tourist tax is 12.5% of the net room rate, the highest in Europe. Combined, that is roughly 33.5% on an Amsterdam hotel stay. The guide's figures are current.",
    links: [
      { label: "Dutch government (business.gov.nl): VAT on overnight accommodation rose to 21% on 1 January 2026", url: "https://business.gov.nl/amendments/vat-overnight-accommodation-goes-up/" },
      { label: "City of Amsterdam: the tourist tax is 12.5% of the overnight price, excluding VAT", url: "https://www.amsterdam.nl/en/municipal-taxes/tourist-tax/" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "112", note: "112 reaches every emergency service, free from any phone.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  region: "Europe",
  hook: "One of Europe's most cashless countries, with a catch: not every card type works everywhere.",

  title: "Money in the Netherlands (2026): Cards, Cash, ATMs and Amsterdam's Tourist Tax | True Trip Costs",
  description: "How to handle money in the Netherlands as a US traveler in 2026: why a debit card works better than a credit card, fee-free Geldmaat ATMs, light round-up tipping, and Amsterdam's percentage-based tourist tax on top of a new 21% VAT on hotel rooms. Checked June 2026.",

  h1: "Money in the Netherlands, sorted.",
  lede: "A calm, current plan for the money side of your trip: why this is one of the most cashless countries in Europe, the one card quirk that catches US travelers out, and the tax change that just made Amsterdam hotel rooms noticeably pricier.",
  hero: {
    img: "/netherlands-hero.jpg",
    h: 1375,
    alt: "A canal in Amsterdam at sunset lined with red-brick gabled houses and string lights, a humpbacked stone bridge with bicycles parked along its railings, a lone figure standing on the bridge looking toward a church tower silhouetted against the setting sun, tulips along the canal edge, and a tray of bitterballen with mustard, a stroopwafel and a glass of beer on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "The Netherlands is one of the most cashless countries in Europe, but there is a real catch: many Dutch shops, including the largest supermarket chain, are set up for <b>debit cards</b> and sometimes reject foreign <b>credit cards</b> outright. Bring a <b>no-fee debit card</b> as your main card, plus a credit card as backup, and lean on <b>Apple Pay or Google Pay</b> when a physical card gets declined, it often goes through anyway. You barely need cash, 20 to 30 euros covers the rare exception. If you are staying in Amsterdam, budget for the highest tourist tax in Europe, a steep <b>12.5% of your room rate</b>, on top of a new 21% VAT on hotel rooms that just replaced the old 9% rate.",

  meter: {
    heading: "Barely any cash changes hands here, cards and phones do almost everything.",
    cashPct: 12,
    note: "A rough feel for everyday spending. Roughly 80% of in-person payments in the Netherlands are by debit card, with cash down near 15 to 20% and falling. Museums, public transport, and even some public toilets have gone fully cashless. The exception is the rare small business or market stall that still wants cash for a small amount."
  },

  trio: [
    { sym: "card", kind: "warn", h: "Your card", verd: "Debit beats credit here", p: "Dutch terminals are built around debit cards (Maestro, V Pay, and now Visa/Mastercard debit). A foreign credit card sometimes gets rejected at supermarkets like Albert Heijn or budget shops like Hema, even though it works fine at restaurants and hotels. Apple Pay or Google Pay often succeeds when the physical card fails.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "ok", h: "Cash", verd: "Barely needed", p: "You can go days without touching cash. Keep 20 to 30 euros for the odd old-school snack bar, a market stall, or a public toilet attendant who still wants coins, but it is genuinely a backup, not a plan.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy, but getting scarcer", p: "Geldmaat, the unified yellow ATM network shared by Dutch banks, is reliable and reasonably priced. Avoid standalone Euronet-style machines in tourist shops, which charge more. ATMs are slowly thinning out nationwide as card use grows, so don't wait until you're nearly out of cash to find one.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee debit card</b> as your main card here, plus a no-fee credit card as backup.",
      "Add your cards to <b>Apple Pay or Google Pay</b> before you fly. It can succeed at a terminal that rejects the physical card.",
      "If you plan to use public transport with a bank card, a <b>contactless debit or credit card</b> works directly at the gates, no OV-chipkaart required."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters, the rates are poor, and you will rarely need much cash anyway.",
      "If you want a little cash, use a <b>Geldmaat</b> machine (the shared yellow ATM brand) rather than a standalone tourist-shop ATM, and <b>decline \"convert to USD.\"</b>",
      "You can tap your contactless card straight through the train gates into the city, no ticket machine needed."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card or phone</b> for nearly everything: cafes, museums, transit, markets and shops.",
      "If a card is declined at a supermarket self-checkout, try <b>Apple Pay or Google Pay</b> before assuming the card is broken.",
      "Keep a little cash for the rare cash-only snack bar or market stall.",
      "<b>Always choose euros</b>, never dollars, on any terminal or ATM that asks."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in euros, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "A declined card at a Dutch supermarket is often a debit-versus-credit issue, not a problem with your account. Try a different card or your phone wallet."
    ], cta: null }
  ],

  cash: {
    rate: 0.88, cur: "EUR", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 0.88 euros to the dollar in mid-2026.",
    styles: [
      { n: "Budget",    per: 55,  cash: 0.15 },
      { n: "Mid-range", per: 110, cash: 0.1 },
      { n: "Comfort",   per: 200, cash: 0.05 }
    ]
  },

  connectivity: {
    works: "Yes, reliably almost everywhere. The Netherlands is small, flat and densely built, which makes for some of the most consistent mobile coverage in Europe. KPN, Vodafone and T-Mobile NL all run strong 4G and growing 5G across cities, towns, the countryside and the rail network. You would have to go looking for a dead zone here, a rare situation by European standards."
  },

  // TOURIST TAX (high-churn, verified Jun 2026). Amsterdam is the outlier: a steep 12.5% of
  // the room rate (excluding VAT), the highest percentage-based tourist tax in Europe, on top
  // of a separate national VAT hike on hotel rooms from 9% to 21% that took effect 1 Jan 2026
  // (covered in recentChange and taxfree below, not part of this calculator line, since VAT
  // is a different kind of charge than the local occupancy tax). Most other Dutch
  // municipalities charge a small flat fee per person per night instead of a percentage.
  tax: {
    unit: "percentOfRoom",
    currency: "EUR",
    capNights: null,
    note: "Amsterdam charges a percentage of your room rate, added at checkout. Most other Dutch cities and towns instead charge a small flat amount per person, per night, set by each municipality. This does not include the separate 21% VAT on hotel rooms nationwide, covered below.",
    regions: [
      { key: "amsterdam", label: "Amsterdam", pct: 12.5, note: "The highest tourist tax rate in Europe, 12.5% of the overnight rate excluding VAT, with no cap. A separate national VAT increase on hotel rooms, from 9% to 21% as of January 2026, applies on top of this and is not included here." },
      { key: "other", label: "Elsewhere in the Netherlands (Rotterdam, Utrecht, The Hague, and beyond)", unit: "perPersonPerNight", rate: 3, note: "Most Dutch municipalities charge a small flat fee per person per night instead of a percentage, commonly 1.50 to 6 euros depending on the town and accommodation type. This uses a representative mid-range figure." }
    ]
  },

  currencyHeading: "The euro, in plain terms.",
  facts: [
    { sym: "euro", k: "Quick conversion", v: "About 1.14 dollars to 1 euro in mid-2026, so a 10 euro lunch is roughly $11.40, and 100 euros is about $114." },
    { sym: "coins", k: "Notes and coins", v: "Notes run 5, 10, 20, 50, 100, 200 and 500 euros, though you will rarely see anything over 50 in daily use. Coins run 1 cent to 2 euros, and you will need them less often than almost anywhere else in Europe." },
    { sym: "card", k: "Debit, not credit, is king", v: "Dutch shopping habits revolve around debit cards (Maestro, V Pay, and now Visa or Mastercard debit). A foreign credit card can be rejected at some supermarkets and budget retailers even though it works everywhere else, so always carry a debit option too." },
    { sym: "qr", k: "iDEAL isn't your tool", v: "iDEAL, the Dutch online banking payment system, requires a Dutch bank account, so it is not something a US visitor can use. Stick to your card or phone wallet for everything, including online bookings." }
  ],

  taxfree: {
    label: "Taxes and the VAT change",
    heading: "A tourist tax that varies by city, and a VAT hike that just landed.",
    text: "Two separate charges affect a Dutch hotel bill. Amsterdam's <b>tourist tax</b> is 12.5% of the room rate, the highest in Europe, while most other Dutch towns charge a small flat fee per person per night instead. Separately, and nationwide, <b>VAT on hotel accommodation jumped from 9% to 21%</b> on January 1, 2026, a change some booking sites had not fully reflected in their displayed prices as of when this guide was checked. In Amsterdam, the two together can push the effective tax on a room to roughly 33.5%, well above what a quoted nightly rate might suggest. If you shop, non-EU visitors can also reclaim VAT (21% standard rate, 9% on most other goods) on purchases over a per-store minimum, typically around 50 euros: ask for a tax-free form, keep the goods unused, and get it stamped by customs when you leave the EU."
  },

  recentChange: {
    date: "Jan 2026",
    text: "<b>Hotel VAT tripled overnight.</b> As of January 1, 2026, Dutch VAT on hotel and short-term rental accommodation rose from 9% to 21%, the same rate charged on most other goods and services. Combined with Amsterdam's existing 12.5% tourist tax, a room booked in the city can carry a combined tax load of roughly 33.5%. Some bookings made before the change, and some booking sites slow to update, may still show the old 9% rate, so double-check your total at checkout rather than trusting an older quote."
  },

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> Choosing your home currency at a card terminal or ATM (dynamic currency conversion) quietly adds 3 to 8%. Pick euros every time.",
    "<b>A declined card is often debit-versus-credit, not your bank.</b> Dutch terminals favor debit cards. If your credit card is rejected at a supermarket or budget shop, try a debit card or your phone wallet before assuming something is wrong with your account.",
    "<b>Don't trust an old quote on hotel tax.</b> The jump in VAT on accommodation from 9% to 21% took effect January 1, 2026, and combined with Amsterdam's 12.5% tourist tax, the gap between an old quote and your actual checkout total can be substantial.",
    "<b>Avoid standalone tourist-shop ATMs.</b> Look for the bright yellow Geldmaat machines, the shared bank-neutral network, rather than unbranded ATMs in souvenir shops, which charge more and push the dollar conversion."
  ],

  tippingHeading: "Light, and round up rather than calculate a percentage.",
  tipping: "Tipping in the Netherlands is appreciated, not expected. Staff are paid a real wage and do not depend on tips to live. At a restaurant, rounding up the bill or adding around 10% for good service is generous and plenty. Cafes, bars and casual spots get no tip at all, or just the coins left from change. For taxis, round up the fare. Cash is often preferred by waitstaff over a card tip, since a cash tip goes straight to the person rather than into a pooled or taxed total. Nobody will chase you for a tip, and a modest one is always well received.",

  faqs: [
    { q: "Do I need cash in the Netherlands?", a: "Barely. This is one of the most cashless countries in Europe, with cards and phone wallets covering nearly everything, including transit and many museums. Keep 20 to 30 euros for the rare old-school snack bar, market stall or toilet attendant that still wants coins." },
    { q: "Why was my card declined in the Netherlands?", a: "Most likely a debit-versus-credit issue, not a problem with your account. Dutch terminals are built around debit cards, and some supermarkets and budget shops reject foreign credit cards even though restaurants and hotels take them fine. Try a debit card or Apple Pay or Google Pay instead." },
    { q: "What is the best ATM to use in the Netherlands?", a: "Look for Geldmaat, the shared yellow ATM network used by Dutch banks, which charges standard rates. Avoid unbranded standalone machines in tourist shops, which cost more and push the \"convert to USD\" option you should always decline." },
    { q: "How much is Amsterdam's tourist tax?", a: "12.5% of your room rate excluding VAT, the highest percentage-based tourist tax in Europe, with no nightly cap. As of January 2026, this sits on top of a separate VAT hike on hotel rooms nationwide, from 9% to 21%, so the combined tax load in Amsterdam can reach roughly 33.5%." },
    { q: "How much cash should I bring for a week in the Netherlands?", a: "For two travelers, very roughly 50 to 100 euros (about $55 to $115) in pocket cash for the rare cash-only moment across a whole week. Nearly everything else, hotels, restaurants, transit and shops, runs through a card or phone wallet." }
  ]
};
