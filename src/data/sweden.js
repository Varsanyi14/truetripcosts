export default {
  slug: "sweden",
  live: true,
  name: "Sweden",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-07",
  sources: {
    changed: "Sources added on first publish, checked July 2026. Confirmed that Sweden (an EU member, but keeping its own krona rather than the euro) charges VAT (moms) of 25% on most things, with reduced rates of 12% on hotels and restaurant meals and 6% on transport, books and culture, all already in the price, and that non-EU visitors can reclaim VAT on goods over 200 SEK in one store. The recent change: from 1 April 2026 the VAT on most groceries dropped from 12% to 6% (a temporary cut running to the end of 2027), which should ease food-shop costs a little. There is still no general tourist or nightly accommodation tax.",
    links: [
      { label: "Skatteverket (Swedish Tax Agency): the 25%, 12% and 6% VAT rates", url: "https://www.skatteverket.se/servicelankar/otherlanguages/inenglish/businessesandemployers/startingandrunningaswedishbusiness/registeringabusiness/vatratesongoodsandservices.4.676f4884175c97df4192860.html", type: "revenue" },
      { label: "Global Blue: Sweden tax-free shopping, minimum 200 SEK per store", url: "https://www.globalblue.com/destinations/sweden/", type: "guide" },
      { label: "Sweden country emergency number: 112 for all services", url: "https://globalemergencynumbers.com/country/sweden", type: "police" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure. VAT rates and thresholds can change, so check anything that affects a big purchase.",
  },
  emergency: { medical: "112", note: "112 reaches every emergency service, ambulance, police and fire, from any phone, even with no SIM. Operators speak English. For non-urgent medical advice, call 1177 (staffed by nurses); for non-urgent police matters, call 114 14. Keep 112 for a genuine emergency.", checked: "Jul 2026", checkedISO: "2026-07-07" },
  insuranceLevel: "low",
  region: "Europe",
  hook: "One of the most cashless places on earth, so your card is king, but it is kronor not euros, plenty of spots take no cash at all, and prices run high.",
  aliases: ["sweden", "stockholm", "gothenburg", "goteborg", "malmo", "uppsala", "gamla stan", "lapland", "kiruna", "swedish krona", "sek", "krona", "kronor"],

  title: "Money in Sweden (2026): Cards, Cashless Shops, Kronor and VAT | True Trip Costs",
  description: "How to handle money in Sweden as a US traveler in 2026: one of the world's most cashless countries, why some venues take no cash at all, why it is kronor and not euros, the dollar-conversion trap, bank ATMs, the 25% VAT you can partly claim back, light tipping, high prices, and no tourist tax. Checked July 2026.",

  h1: "Money in Sweden, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your card covers everything (and cash almost nothing), why it is kronor and not euros, how little you tip, the shopping tax you can claim back, and why there is no tourist tax to worry about.",
  hero: {
    img: "/sweden-hero.jpg",
    h: 1375,
    alt: "A quiet cobbled street in Stockholm's Gamla Stan old town under a pale winter sky, ochre and pink townhouses with blue shutters lining the left, a green copper church spire in the distance, a lone man in a grey overcoat walking away over the cobbles, and a cup of coffee with a sweet bun on a small round cafe table in the foreground"
  },

  recentChange: {
    date: "Jul 2026",
    text: "From 1 April 2026, Sweden cut the VAT on most groceries from 12% to 6% (a temporary reduction scheduled to run to the end of 2027), which should trim food-shop bills a little. The reduced rate on restaurant and cafe meals stayed at 12%, and hotel stays are still 12% too. It does not change how you pay, since VAT is already in the price, but it is why a supermarket receipt may look slightly cheaper than you expected."
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Sweden is one of the <b>most cashless countries anywhere</b>, so your card does almost everything: tap, chip, Apple Pay and Google Pay work nearly everywhere, and plenty of cafes, shops and museums take <b>no cash at all</b>. Bring a <b>no-foreign-fee Visa or Mastercard</b>, and you can honestly skip cash entirely; if you want a small buffer, 200 to 400 SEK is plenty, pulled from a <b>bank ATM</b> (called Bankomat or Uttagsautomat) and never converted to dollars. Two things to hold onto: it is <b>kronor, not euros</b> (Sweden is in the EU but kept its own currency, so euros will not spend here), and it is <b>expensive</b>, so budget more than for much of Europe. There is <b>no general tourist tax</b>. Always choose kronor, never dollars, and tipping is light.",

  meter: {
    heading: "Genuinely cashless; the real cost is how much everything costs.",
    cashPct: 5,
    note: "A rough feel for everyday spending. Cards and contactless cover essentially everything, from hotels and restaurants to buses, trains, museums and tiny kiosks, and locals lean on cards and the Swish app. Many places take no cash whatsoever. You need almost no cash here; the thing to plan for is not cash, it is the prices, so pad your daily budget."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works everywhere", p: "Visa and Mastercard are taken essentially everywhere, contactless is the norm, and Apple or Google Pay are widely accepted, on trains, in shops and at museums. Many venues are card-only and will not take cash at all. Locals often pay by the Swish app, but you will not need it. Amex works at bigger hotels and shops but is patchier, so carry a Visa or Mastercard.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "ok", h: "Cash", verd: "You can skip it", p: "Cards cover everything, and lots of places refuse cash outright. You can travel Sweden without touching a krona. If you want a small safety net, keep 200 to 400 SEK for a rare market stall or rural spot, but do not exchange a pile of dollars; euros do not work here either.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Use a bank machine", p: "If you want cash, use a bank <b>Bankomat</b> ATM (the shared machines used by the big banks), common in towns. Read the on-screen fee, take a modest amount since you will barely use it, and always <b>decline \"convert to US dollars.\"</b> Your own bank's foreign-ATM fee usually matters more than the machine's.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> with contactless for everything, plus a backup card from a different bank; that is genuinely all you need here.",
      "A <b>no-foreign-fee debit card</b> (Charles Schwab, Wise or Revolut) is handy for the rare cash you might want, but many trips use none.",
      "Check your US phone plan for Sweden. It is in the EU, so plans that include EU roaming usually cover it, but confirm the rate; otherwise an eSIM is cheap.",
      "Do not bother buying kronor in advance. You will barely use cash, and airport exchange rates are poor."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters. You can tap your card straight away, including for the Arlanda Express or the airport bus into Stockholm.",
      "If you insist on a little cash, pull kronor from a bank <b>Bankomat</b> ATM and <b>decline \"convert to dollars.\"</b>",
      "Set up an <b>eSIM</b> before you land (Airalo, Nomad, or a local Telia, Tele2 or Telenor plan) for maps and transit apps.",
      "Doing the <b>VAT refund</b> on the way out? Get forms validated at customs before you check bags."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your card or phone</b> for everything: trains, buses, shops, restaurants and museums. Expect to see \"card only\" signs.",
      "Prices already <b>include VAT</b>, so the number on the tag or menu is what you pay.",
      "You will rarely, if ever, need <b>cash</b>. Do not stress about carrying it.",
      "<b>Always choose kronor</b>, never dollars or euros, on every card terminal and ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "denom", when: "A golden rule", bullets: [
      "<b>It is kronor, not euros, and always pay in kronor.</b> Choosing dollars or euros (dynamic currency conversion) quietly adds 3 to 8%, and euros do not spend here at all.",
      "<b>Budget high.</b> A coffee, a quick lunch, a beer or a museum ticket all cost more than you expect, so plan a bigger daily number than for much of Europe."
    ], cta: null }
  ],

  cash: {
    rate: 9.7, cur: "SEK", round: 100, defaultIndex: 1,
    rateNote: "Rough guide at about 9.7 kronor to the dollar in mid-2026, so 100 SEK is roughly 10 dollars and 500 SEK about 52. Sweden is about as cashless as anywhere, so this is a tiny cash-in-hand slice of your spending, not your whole budget; most people use no cash at all.",
    styles: [
      { n: "Budget",    per: 600,  cash: 0.08 },
      { n: "Mid-range", per: 1200, cash: 0.05 },
      { n: "Comfort",   per: 2200, cash: 0.03 }
    ]
  },

  connectivity: {
    works: "Excellent across cities, towns and the main routes, with strong 4G and wide 5G, and good coverage along most travelled roads and rail lines. The main networks are Telia, Tele2 and Telenor. Coverage thins in the far north, the mountains and deep in Lapland, so expect gaps in the wilderness. Sweden is in the EU, so a US plan with EU roaming usually covers it, but confirm the rate; an eSIM (Airalo, Nomad, Ubigi) is often cheaper. You do not need mobile data to pay by card, but you will want it for maps and transit apps."
  },

  // TOURIST TAX: none. Verified to Jul 2026. Sweden has no general tourist or nightly accommodation
  // tax. There is a guest-registration requirement for accommodation providers, but that is a
  // record-keeping rule, not a charge to the traveler. VAT (moms) is separate and already in prices:
  // 25% standard, 12% on hotels and restaurant meals, 6% on transport, books and culture, with the
  // temporary grocery cut to 6% from April 2026. Using the newer no-tax pattern.
  tax: {
    none: true,
    currency: "SEK",
    note: "Sweden has no general tourist tax or nightly accommodation tax, so there is nothing extra to add to your hotel bill. Prices already include VAT (moms): 25% on most things, a reduced 12% on hotels and restaurant meals, and 6% on transport, books and culture. From 1 April 2026 the VAT on most groceries dropped to 6% (a temporary cut to the end of 2027). As a non-EU visitor you can reclaim the VAT on goods you take home (see below)."
  },

  currencyHeading: "The Swedish krona, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "Sweden uses the krona (SEK), plural kronor. At about 9.7 kronor to the dollar in mid-2026, 100 SEK is roughly 10 dollars, 200 SEK about 21, and 500 SEK about 52. Prices already include VAT, so the figure on the tag or menu is what you pay." },
    { sym: "smallnotes", k: "Notes and coins", v: "Notes run 20, 50, 100, 200, 500 and 1,000 kronor; coins are 1, 2, 5 and 10 kronor. You will rarely handle any of it, since almost everything goes on a card and many places take no cash." },
    { sym: "denom", k: "It's kronor, not euros", v: "Sweden is in the EU but never adopted the euro, so the currency is the Swedish krona, not the euro. Euros will not spend here, and there is no reason to carry dollars; your card handles everything." },
    { sym: "tip", k: "Tipping is light", v: "Service is included and staff are paid a proper wage, so tipping is modest: round up or leave about 5 to 10% for good service at a sit-down meal, nothing at a counter. See the tipping section below." }
  ],

  taxfree: {
    label: "Taxes, tips and refunds",
    heading: "High prices with tax in them, a light tip, and money back on shopping.",
    text: "Sweden is expensive, and <b>VAT is already in the price</b>: 25% on most things, a reduced 12% on hotels and restaurant meals, and 6% on transport, books and culture, so the tag or menu figure is what you pay. From <b>1 April 2026</b> the VAT on most groceries dropped to 6% (a temporary cut to the end of 2027), which eases food-shop bills a little. As a <b>non-EU visitor you can reclaim the VAT on goods</b> you take home, on receipts of at least <b>200 SEK</b> in a single store. Ask for a tax-free form, keep the goods unused, and get it validated by customs when you leave the EU; after the operator's fee you get back a useful chunk, though not the full 25%. <b>Tipping is light</b>: service is included, so rounding up or leaving about 5 to 10% for good service at a nice restaurant is generous, not expected, and there is no terminal tip-prompt culture as in the US. There is <b>no general tourist tax</b> in Sweden, and no separate departure tax to pay; airport charges are built into your ticket.",
  },

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> Terminals and ATMs offer to charge you in your home currency (dynamic currency conversion), which adds 3 to 8%. Pick kronor every time.",
    "<b>Do not count on paying with cash.</b> Sweden is so cashless that many cafes, shops, buses and museums take no cash at all. A card is essential; cash is close to useless. Do not exchange a pile of dollars.",
    "<b>It is kronor, not euros.</b> Sweden is in the EU but never joined the euro. Do not arrive expecting to spend euros, and do not load up on euros for this leg of a European trip.",
    "<b>It is an expensive country, so budget up.</b> A coffee, a quick lunch, a beer or a museum ticket all cost more than you expect. Plan a higher daily number than for much of Europe and it will not sting.",
    "<b>Have a backup card.</b> Because nearly everything is cashless, a declined or blocked card is a real headache. Carry a second card from a different bank and tell your bank you are travelling."
  ],

  tippingHeading: "Light: service is included, rounding up is plenty.",
  tipping: "Tipping in Sweden is modest, so relax about it. Service is included and staff are paid a proper wage, so locals simply round up or leave a little for good service. At a <b>sit-down restaurant</b>, rounding the bill up or adding about <b>5 to 10%</b> for good service is generous rather than expected; at a <b>cafe, bar or counter</b>, no tip is needed. For <b>taxis</b>, round up to the nearest note; for <b>hotel housekeeping</b>, a small amount is a kind gesture but not required; for a helpful <b>guide or driver</b> on a tour, a little extra is appreciated. Card terminals may show a tip line, but there is no strong tipping culture here as in North America, so do not feel obliged.",

  faqs: [
    { q: "Do I need cash in Sweden?", a: "Almost never. Sweden is one of the most cashless countries in the world: cards and tap work everywhere, and many cafes, shops, buses and museums take no cash at all. You can comfortably travel without touching a krona. If you want a small buffer, keep 200 to 400 SEK, but most visitors use none." },
    { q: "Does Sweden use the euro?", a: "No. Sweden is in the EU but never adopted the euro, so it uses the Swedish krona (SEK). Euros will not spend here, so plan to pay by card in kronor and do not carry euros for this leg." },
    { q: "Should I pay in kronor or US dollars in Sweden?", a: "Kronor. If a card terminal or ATM offers to charge you in US dollars (or euros), decline; that dynamic currency conversion typically adds 3 to 8%. Paying in kronor and letting your own bank convert is almost always cheaper." },
    { q: "Is there a tourist tax in Sweden?", a: "No. Sweden has no general tourist tax or nightly accommodation tax, so nothing extra is added to your hotel bill. VAT is already baked into prices, and from April 2026 the VAT on most groceries dropped to 6% on a temporary basis." },
    { q: "Can I get a VAT refund on shopping in Sweden?", a: "Yes, if you live outside the EU and spend at least 200 SEK in one store. Ask for a tax-free refund form, keep the goods unused, and get it validated by customs when you leave the EU, then claim through the refund operator. After fees you get back a useful part of the 25% VAT, though not the full amount." },
    { q: "Why is Sweden so expensive, and how much should I budget?", a: "High wages, a high cost of living and VAT all feed into prices, from coffee to museum tickets. For everyday spending beyond your hotel, very roughly 900 to 1,600 SEK a day per person (about 93 to 165 dollars) is a realistic mid-range figure, essentially all on card. The fix is to budget a higher daily number than for much of Europe." }
  ]
};
