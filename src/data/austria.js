export default {
  slug: "austria",
  live: true,
  name: "Austria",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  sources: {
    changed: "Sources added, and a rate update. The City of Vienna raised its Ortstaxe from about 3.2% to 5% of the net room price on 1 July 2026 (a further rise to 8% is set for July 2027), so we updated the Vienna figure. The 20% VAT refund for non-EU visitors, which starts at 75.01 euros, is confirmed. Alpine and regional towns still charge a small flat fee per night.",
    links: [
      { label: "City of Vienna: the Ortstaxe (local accommodation tax) and its rise to 5% from 1 July 2026", url: "https://www.wien.gv.at/english/e-government/financial/tax/local-tax.html", type: "gov" },
      { label: "Austrian Federal Ministry of Finance: the VAT refund for non-EU visitors, from 75.01 euros", url: "https://www.bmf.gv.at/en/topics/customs/travellers/vat-refund.html", type: "revenue" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "112", note: "112 reaches every emergency service, and 144 goes straight to an ambulance.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  region: "Europe",
  hook: "Cards work fine, but Austria still runs on more cash than most of Western Europe.",
  aliases: ["vienna", "wien", "salzburg", "innsbruck", "hallstatt", "graz", "linz", "tyrol", "tirol", "austrian", "euro", "eur", "alps", "alpine"],

  title: "Money in Austria (2026): Cards, Cash, Euros and Tipping | True Trip Costs",
  description: "How to handle money in Austria as a US traveler in 2026: cards and tap work in most places but cash is still common, why to pay in euros not dollars, how little you tip, which ATMs to use, the per-night tourist tax, VAT that's already in the price, and how to claim it back. Checked July 2026.",

  h1: "Money in Austria, sorted.",
  lede: "A calm, current plan for the money side of your trip: why you should carry a bit more cash than elsewhere in Europe, how modest the tipping is, and the small nightly tourist tax added at your hotel.",
  hero: {
    img: "/austria-hero.jpg",
    h: 1375,
    alt: "A cobbled Salzburg old-town lane at dusk with pastel baroque townhouses, red geraniums in window boxes, wrought-iron shop signs, string lights crossing the street, drifting autumn leaves, the lit silhouette of the Hohensalzburg Fortress on its hill with a snowy Alpine peak behind it, a figure in a warm coat walking away, and a plate of golden Wiener schnitzel with a lemon wedge beside a slice of Sachertorte and a tall glass of golden beer on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Austria is easy on the wallet to manage: cards and contactless work in most shops, restaurants and on transit, and Apple Pay and Google Pay are widely accepted. The twist is that Austria leans on <b>cash more than most of Western Europe</b>, so some cafes, bakeries, wine taverns and small shops still prefer notes or set a card minimum. Bring a <b>no-foreign-fee Visa or Mastercard</b>, carry <b>60 to 100 euros</b> in cash, and pull more from a <b>bank ATM</b> (a Bankomat at Erste, Bank Austria or Raiffeisen) rather than the blue Euronet machines. Prices already include VAT, tipping is light, and the one rule that always saves money is to pay in <b>euros, not dollars</b>, on every card screen.",

  meter: {
    heading: "Cards work, but keep real cash on you here.",
    cashPct: 45,
    note: "A rough feel for everyday spending. Cards and contactless are fine in most places, but Austria is more of a cash country than its neighbors, so a fair share of cafes, bakeries, market stalls, mountain huts and traditional wine taverns (Heuriger) prefer cash or ask for a minimum card spend. Carry enough notes that a card-only wallet never leaves you stuck."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Fine in most places", p: "Visa and Mastercard are accepted in most shops, restaurants and on transit, and contactless, Apple Pay and Google Pay are widely supported. Amex is patchier. The gaps are small and traditional: some cafes, bakeries, huts and wine taverns still want cash or set a card minimum.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Carry more than usual", p: "Austria uses cash more than most of Western Europe. Keep 60 to 100 euros for cafes, bakeries, small shops, markets, mountain huts and Heuriger wine taverns, where cards may not be welcome. Euro coins go up to 2 euros and add up, so spend them rather than hoarding them.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Use a bank Bankomat", p: "Bank ATMs (Erste and Sparkasse, Bank Austria, Raiffeisen) are widespread and reliable. Avoid the blue Euronet machines in tourist areas, which offer poor rates and push fees and conversions. Read the screen, decline \"convert to US dollars,\" and take enough at once.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> with contactless, plus a backup card from a different bank.",
      "Get a <b>no-foreign-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "Austria is in the EU, so an EU eSIM or an EU roaming plan works normally. Check whether your US plan already includes Europe."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters, the rates are poor.",
      "Pull euros from a <b>bank Bankomat</b> (Erste, Bank Austria, Raiffeisen), not a blue Euronet machine, and <b>decline \"convert to US dollars.\"</b>",
      "Take a sensible amount at once, since you will lean on cash a little more here than elsewhere."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card or phone</b> for larger shops, restaurants, museums and transit.",
      "<b>Keep cash handy</b> for cafes, bakeries, markets, huts and wine taverns, which may be cash-only or set a card minimum.",
      "Prices already <b>include VAT</b>, so the tag or menu price is what you pay.",
      "<b>Always choose euros</b>, never US dollars, on every card terminal and ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "coins", when: "A golden rule", bullets: [
      "<b>Always pay in euros, not dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "<b>Do not go fully cashless.</b> A card-only wallet will occasionally leave you stuck at a bakery counter or a mountain hut, so keep notes on you."
    ], cta: null }
  ],

  cash: {
    rate: 0.88, cur: "EUR", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 0.88 euros to 1 US dollar in mid-2026, so 1 euro is worth about $1.14. That means 100 euros is roughly $114 and 20 euros about $23. The rate moves, so check a current converter before you go.",
    styles: [
      { n: "Budget",    per: 70,  cash: 0.4 },
      { n: "Mid-range", per: 150, cash: 0.3 },
      { n: "Comfort",   per: 300, cash: 0.2 }
    ]
  },

  connectivity: {
    works: "Very good across the country and strong in the cities and along the valleys, with only the highest and most remote alpine areas thinning out. The main networks are A1, Magenta and Drei, all with wide 4G and growing 5G. Because Austria is in the EU, an EU eSIM or an EU SIM with \"roam like at home\" works normally here, and many US plans include European roaming, so check yours first; an eSIM (Airalo, Nomad, Ubigi) is a cheap backup. You do not need mobile data to pay for anything; cards and contactless stand on their own."
  },

  // TOURIST TAX (high-churn, verified to Jul 2026 knowledge; confirm local rates).
  // Austria has no national tourist tax. Most towns charge a local overnight tax (Ortstaxe /
  // Tourismusabgabe) added to your hotel bill. Vienna charges 5% of the net room price (raised from 3.2% on 1 July 2026);
  // most alpine and regional towns charge a flat per-person, per-night fee, commonly EUR 1 to 3.50.
  // These are rough figures; the exact amount varies by state, town and season. VAT is separate
  // and already included in displayed prices.
  tax: {
    unit: "perPersonPerNight",
    currency: "EUR",
    capNights: null,
    note: "Austria has no single national tourist tax. Most towns add a small local overnight tax to your hotel bill. Vienna charges a percentage of the room rather than a flat fee; most alpine and regional towns charge a flat per-person, per-night amount. These are rough figures; the exact amount varies by state, town and season. VAT is separate and already included in prices.",
    regions: [
      { key: "vienna", label: "Vienna", rate: 5.5, note: "Vienna's tax is technically 5% of the net room price (raised from 3.2% on 1 July 2026, with a further rise to 8% due in July 2027) rather than a flat nightly fee, so on a typical hotel it works out to about 5 to 7 euros per person per night. This uses a representative figure." },
      { key: "alpine", label: "Salzburg, Tyrol and the alpine resorts", rate: 2.5, note: "Alpine towns charge a flat local tax per person per night, commonly 1.50 to 3.50 euros depending on the resort and season." },
      { key: "other", label: "Elsewhere in Austria", rate: 2.0, note: "Most Austrian towns charge a small flat per-person, per-night tax, commonly 1 to 3 euros." }
    ]
  },

  currencyHeading: "The euro in Austria, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "Austria uses the euro. At about 0.88 euros to 1 US dollar in mid-2026, a euro is worth roughly $1.14. So 10 euros is about $11.40, 50 euros about $57, and 100 euros about $114. To go the other way, a US figure buys a little under that many euros." },
    { sym: "smallnotes", k: "Notes and coins", v: "Euro notes run from 5 to 200 euros (the 500 is being retired). Coins go from 1 cent up to 1 and 2 euros. Those 1 and 2 euro coins are real money, so use them for cafes, tips and ticket machines rather than letting them pile up." },
    { sym: "cash", k: "Cash is still common here", v: "This is the Austria surprise: unlike much of Western Europe, plenty of cafes, bakeries, market stalls, mountain huts and traditional wine taverns still prefer cash or set a minimum for card payment. Carry notes so a card-only wallet never leaves you stuck." },
    { sym: "tag", k: "Tax is already in the price", v: "Austrian VAT is included in the displayed price: 20% on most things and a reduced 10% on food, books and hotel stays. The tag or menu price is what you pay, and non-EU visitors can reclaim the VAT on larger purchases (see below)." }
  ],

  taxfree: {
    label: "Taxes, tips and refunds",
    heading: "Tax in the price, a refund if you shop big, and a light tip.",
    text: "In Austria, <b>VAT is already included</b> in the price you see: 20% on most goods and services, and a reduced 10% on food, books and hotel accommodation. As a US visitor you can claim <b>tax-free shopping</b>: on purchases over about <b>75 euros</b> in one store, ask for a refund form and reclaim the VAT when you leave the EU, usually at the airport. Separately, most towns add a small <b>overnight tourist tax</b> to your hotel bill: Vienna charges about 3.2% of the room price, while alpine and regional towns usually charge a flat per-person nightly fee of roughly 1 to 3.50 euros. <b>Tipping is light</b>: service is included, and rounding up or adding about 5 to 10% for good service is normal. Tell the server the total you want to pay as you hand over cash or card, rather than leaving coins on the table. There is no separate departure tax; airport charges are built into your ticket."
  },

  traps: [
    "<b>Do not rely on cards alone.</b> Austria uses more cash than its neighbors, and cafes, bakeries, markets, huts and wine taverns may be cash-only or set a card minimum. Carry 60 to 100 euros so you are never caught out.",
    "<b>Pay in euros, not dollars.</b> Terminals and ATMs offer to charge you in your home currency (dynamic currency conversion), which adds 3 to 8%. Always choose euros and let your own bank convert.",
    "<b>Skip the blue Euronet ATMs.</b> The non-bank machines in tourist spots give poor rates and push fees. Use a bank Bankomat (Erste and Sparkasse, Bank Austria, Raiffeisen) and decline the US-dollar conversion.",
    "<b>The tourist tax is not uniform.</b> Vienna charges a percentage of your room while alpine towns charge a flat per-person nightly fee, and either way it is added to your hotel bill, not the sticker price you booked."
  ],

  tippingHeading: "Light: round up, or 5 to 10% for good service.",
  tipping: "Tipping in Austria is modest, so keep it simple. Service is included in the bill, and the custom is to round up or add roughly 5 to 10% for good service at a restaurant. The Austrian way is to tell the server the total you want to pay as you settle (for example, saying the rounded-up figure when you hand over the cash or card), rather than leaving coins on the table. For a quick coffee or casual meal, rounding to the next euro or two is plenty. Taxis get rounded up; hotel housekeeping a couple of euros is a kind gesture but not expected; a bellhop or helpful guide, a few euros. There is no North American card-terminal tip-prompt culture here.",

  faqs: [
    { q: "Do I need cash in Austria?", a: "More than in most of Western Europe, yes. Cards work in most shops and restaurants, but Austria still leans on cash, and cafes, bakeries, markets, mountain huts and traditional wine taverns may be cash-only or set a card minimum. Carry about 60 to 100 euros and top up at a bank Bankomat." },
    { q: "Should I pay in euros or US dollars in Austria?", a: "Euros. If a card terminal or ATM offers to charge you in US dollars, decline; that dynamic currency conversion typically adds 3 to 8%. Paying in euros and letting your own bank do the conversion is almost always cheaper." },
    { q: "What is the best ATM to use in Austria?", a: "A bank Bankomat, such as Erste and Sparkasse, Bank Austria or Raiffeisen. Avoid the blue Euronet machines common in tourist areas, which offer poor rates and push fees, and always decline the offer to convert to US dollars." },
    { q: "How much should I tip in Austria?", a: "Not much. Service is included, so locals round up or add about 5 to 10% for good service. The custom is to state the total you want to pay as you hand over cash or card, rather than leaving coins behind. Round up for taxis and casual meals." },
    { q: "Is tax included in prices in Austria?", a: "Yes. Austrian VAT is built into the displayed price, 20% on most things and a reduced 10% on food, books and hotels, so the tag or menu price is what you pay. Non-EU visitors can reclaim VAT on purchases over about 75 euros in one store when leaving the EU." },
    { q: "Does Austria charge a tourist tax?", a: "Most towns do, added to your hotel bill. Vienna charges about 3.2% of the net room price, while alpine and regional towns usually charge a flat per-person nightly fee of roughly 1 to 3.50 euros. It is separate from the room rate you book online." }
  ]
};
