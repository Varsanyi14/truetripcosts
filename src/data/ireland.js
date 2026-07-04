export default {
  slug: "ireland",
  live: true,
  name: "Ireland",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-03",
  sources: {
    changed: "Corrected the M50 toll wording: missing the 8pm next-day deadline first triggers a small per-journey late fee that then escalates, not a flat 30 to 60 euro fine. That figure is a separate rental-company admin fee.",
    links: [
      { label: "Irish Revenue: VAT, and the Retail Export (Tax-Free) scheme for non-EU visitors", url: "https://www.revenue.ie/en/vat/retail-export-scheme/index.aspx", type: "revenue" },
      { label: "Irish Revenue: current VAT rates, including the 9% rate on restaurant and catering food from 1 July 2026", url: "https://www.revenue.ie/en/vat/index.aspx", type: "revenue" },
      { label: "eFlow and Transport Infrastructure Ireland: the M50 barrier-free toll and its late-payment penalties", url: "https://www.eflow.ie/how-it-works", type: "gov" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "112", note: "112 is the free emergency number (999 also works, exactly like 911), reaching the Gardai (police), ambulance and fire from any phone, even with no SIM or credit. Operators speak English. Save your accommodation address to read out.", checked: "Jul 2026", checkedISO: "2026-07-03" },
  insuranceLevel: "low",
  region: "Europe",
  hook: "About as cashless as travel gets: tap your card almost everywhere, carry a little euro cash as backup, decline dollar conversion, and mind two things: the VAT you can claim back on shopping and the car-rental insurance excess.",
  aliases: ["ireland", "republic of ireland", "eire", "dublin", "galway", "cork", "killarney", "ring of kerry", "cliffs of moher", "euro", "eur", "guinness", "wild atlantic way"],

  title: "Money in Ireland (2026): Cards, Cash, ATMs, the VAT Refund and Car-Rental Insurance | True Trip Costs",
  description: "How to handle money in Ireland as a US traveler in 2026: near-universal cards and contactless, how little cash you need, fee-free bank ATMs, the dollar-conversion trap, the VAT refund non-EU visitors can claim on shopping, the car-rental insurance catch, and light tipping. Checked July 2026.",

  h1: "Money in Ireland, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your card covers almost everything, the little cash worth carrying, the VAT you can claim back on shopping, and the one place Ireland can bite your budget, renting a car.",
  hero: {
    img: "/ireland-hero.jpg",
    h: 1375,
    alt: "A rain-sheened old town street in Dublin, Ireland at dusk, with deep green and red painted pub fronts, warm brick and glowing windows, triangular bunting and string lights overhead, a lone figure in a dark coat walking away down a wet cobblestone street toward the silhouette of a cathedral spire against an amber sunset, and a pint of dark stout, a bowl of hearty stew and a slice of brown bread on a wooden table in the foreground"
  },

  recentChange: {
    date: "Jul 2026",
    text: "From 1 July 2026, Ireland cut the VAT on restaurant and cafe meals from 13.5% back to 9%, which should ease eating-out costs a little. Hotels were left out, and there is still no nightly tourist tax, though Dublin and Galway are pushing for the power to introduce one."
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Ireland is one of the <b>easiest places anywhere for money</b>: you can go days without touching cash. <b>Visa and Mastercard are taken almost everywhere</b>, contactless and Apple or Google Pay are universal, and a no-foreign-fee card covers all but a few corners. Amex is patchy and Discover is close to useless, so bring a Visa or Mastercard. Carry about <b>100 to 150 euros in small notes</b> for a week as backup: rural pubs and cafes that go card-only when the signal drops, small markets, and the odd taxi. Get euros from a <b>bank ATM</b> (AIB, Bank of Ireland, Permanent TSB), which are generally fee-free to foreign cards, skip the standalone machines in shops that add a few euro, and <b>always choose euros, not dollars</b>, on any terminal or ATM. Two things actually worth your attention here: as a <b>non-EU visitor you can reclaim the 23% VAT</b> on goods you buy to take home, and if you are <b>renting a car to tour</b>, the insurance is the real cost trap (below), not your day-to-day spending. If your trip also dips into Northern Ireland, that is the UK and uses pounds, but your card handles the switch without a thought.",

  meter: {
    heading: "About as cashless as travel gets; a little cash is just backup.",
    cashPct: 12,
    note: "A rough feel for everyday spending. Cards and contactless cover almost everything, from hotels and restaurants to shops, taxis and attractions. Cash is a small backup for rural card-only pubs, small markets, the odd taxi, and places where the card machine loses signal, and you rarely need much of it."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are near-universal, with contactless and Apple or Google Pay standard (regular contactless caps at 50 euros, mobile wallets have no limit). Amex is patchy and Discover barely accepted, so bring a Visa or Mastercard. A no-foreign-fee card covers almost the whole trip, and your bank's foreign fee still applies unless the card waives it.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "ok", h: "Cash", verd: "A small backup", p: "You rarely need it. Keep about 100 to 150 euros in small notes for a week for rural card-only pubs, small markets, the odd taxi and card-machine outages. Get euros from a bank ATM rather than an exchange booth, and top up only as needed.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Bank machines are fee-free", p: "Use <b>AIB, Bank of Ireland or Permanent TSB</b> machines, which generally charge foreign cards no access fee. Standalone ATMs in shops and tourist spots can add a few euro, so skip those. Daily limits run around 600 to 800 euros, and always <b>decline 'convert to dollars'</b> and choose euros.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b>, plus a backup from a different bank. Amex is patchy and Discover barely works, so do not rely on either.",
      "You need very little cash, but a <b>fee-free ATM debit card</b> (Charles Schwab, Wise or Revolut) is handy for the small amount you will pull from bank ATMs.",
      "If you plan to <b>rent a car</b>, sort the insurance before you go: the excess trap is real, and your US credit card often does not cover Ireland (see below).",
      "You do not need travel insurance for money reasons here, but standard travel medical cover is always sensible."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters. Pull euros from a bank ATM if you want a little cash, or just start tapping your card.",
      "Grab about 100 euros in small notes if it is easy, for your first taxi or a rural stop; you can also just break a note on a small purchase in arrivals.",
      "Set up an <b>eSIM</b> before you land for maps and calls. Three, Vodafone and eir all cover the country well; an eSIM from Airalo, Nomad or Holafly is the easy route.",
      "Renting a car at the airport? Expect a pickup fee of around 22 euros added at the desk, and read the insurance terms before you sign."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your card</b> for almost everything, and choose euros every time.",
      "Keep a little <b>cash</b> for rural pubs, small markets and the odd taxi.",
      "Shopping for something to take home? Ask for a <b>VAT refund (Tax-Free) form</b> at the till, since as a non-EU visitor you can reclaim the tax.",
      "Crossing into <b>Northern Ireland</b>? That is pounds, not euros, but your card switches seamlessly."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in euros, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds a few percent on card terminals and ATMs.",
      "<b>Use bank ATMs, not standalone ones.</b> AIB, Bank of Ireland and Permanent TSB machines are generally fee-free to foreign cards; the machines in shops and tourist spots are the ones that charge."
    ], cta: null }
  ],

  cash: {
    rate: 0.88, cur: "EUR", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 0.88 euros to the dollar in mid-2026, so a euro costs a little over a dollar. Ireland is card-first, so this is the small, cash-in-hand slice of your spending.",
    styles: [
      { n: "Budget",    per: 55,  cash: 0.2 },
      { n: "Mid-range", per: 115, cash: 0.12 },
      { n: "Comfort",   per: 205, cash: 0.08 }
    ]
  },

  connectivity: {
    works: "Excellent across the country. The three carriers are Three (the largest), Vodafone and eir, with 4G almost everywhere and 5G across Dublin, Cork, Galway and the other cities. Coverage can thin in the deep countryside and along parts of the Wild Atlantic Way, but even remote cafes usually take cards. A local prepaid SIM is cheap, and eSIMs from Airalo, Nomad or Holafly are the easy route if your phone supports it. Your US plan may include some roaming, so check the rate before you rely on it. You do not need mobile data to pay by card, but you will want it for maps and, if you are driving, live traffic."
  },

  tax: {
    none: true,
    currency: "EUR",
    note: "Ireland has no nightly tourist tax, unusually for Europe (Dublin and Galway are pushing for the power to add one, but nothing is in force yet). Restaurant and shop prices already include VAT, and from July 2026 the VAT on restaurant meals dropped from 13.5% to 9%. As a non-EU visitor, you can reclaim the VAT on goods you buy to take home (see below)."
  },

  currencyHeading: "The euro, in plain terms.",
  facts: [
    { sym: "euro", k: "Quick conversion", v: "Ireland uses the euro. At about 0.88 euros to the dollar in mid-2026, a euro costs a little over a dollar, so 10 euros is roughly 11 dollars and 50 euros about 57. Prices already include VAT, so the figure on the tag or menu is what you pay." },
    { sym: "card", k: "Cards rule, cash is backup", v: "Visa and Mastercard work almost everywhere, with contactless and mobile wallets standard; Amex is patchy and Discover barely accepted. You can go days without cash in the cities, but carry about 100 to 150 euros for rural pubs, small markets and card-machine outages." },
    { sym: "tag", k: "Money back on shopping", v: "As a non-EU visitor you can reclaim the 23% VAT on goods you buy to take home, through the Tax-Free (Retail Export) scheme. Ask for the form at the till, get it validated at the airport before you check your bags, and claim your refund, worth roughly 15% after fees. Northern Ireland purchases do not qualify." },
    { sym: "tip", k: "Tipping is light", v: "Around 10 to 12% in restaurants if no service charge is on the bill, nothing for drinks at a pub bar, and rounding up for taxis. Staff are paid a proper wage, so tips are appreciated but never expected. See the tipping section below." }
  ],

  taxfree: {
    label: "Taxes, refunds and renting a car",
    heading: "No tourist tax, money back on shopping, and the car-rental catch.",
    text: "Ireland is refreshingly simple on tax. There is <b>no nightly tourist tax</b>, unusually for Europe, though Dublin and Galway are lobbying for the power to add a small one, so it is worth a quick check nearer your trip. Prices already <b>include VAT</b> (23% standard), and there is good news for 2026: from <b>1 July 2026 the VAT on restaurant and cafe meals dropped from 13.5% to 9%</b>, which should ease eating-out costs a little. The win worth acting on: as a <b>non-EU visitor you can reclaim the VAT on goods</b> you buy to take home, through the Tax-Free or Retail Export scheme. Ask the shop for a tax-free form, get it validated by Customs at the airport before you check your bags, and claim through a refund company (Global Blue, Planet) or the retailer; after fees you get back roughly <b>15%</b> of the price. Note that purchases in <b>Northern Ireland</b> (which is the UK) no longer qualify. The one place Ireland can bite your budget is <b>renting a car</b> to tour, which is common here. The base rate includes basic collision cover but leaves a <b>high excess of about 1,500 to 3,500 euros</b> frozen on your credit card, so most people add <b>Super CDW or a standalone excess policy</b> (cheaper bought online in advance, around 3 to 8 euros a day, than the 15 to 30 a day at the desk). Do not assume your US credit card covers Ireland: <b>most Visa and Amex cards do not</b>, and even the Mastercards that do usually need a letter of coverage. Most rentals are <b>manual</b>, so book an automatic well ahead if you need one, and remember Dublin's <b>M50 is a barrier-free toll</b> you must pay online by the next day, or a late fee starts adding up."
  },

  traps: [
    "<b>'Pay in dollars?' Always say no.</b> Card terminals and ATMs may offer to charge you in dollars (dynamic currency conversion), which quietly adds a few percent. Choose euros every time.",
    "<b>Use bank ATMs, not the standalone ones.</b> AIB, Bank of Ireland and Permanent TSB machines are generally fee-free to foreign cards, while the standalone machines in shops, pubs and tourist spots often add a few euro per withdrawal.",
    "<b>The car-rental excess is the real trap.</b> Basic cover leaves an excess of roughly 1,500 to 3,500 euros frozen on your credit card. Add Super CDW or a standalone excess policy (cheaper bought online ahead), and do not assume your US credit card covers Ireland, since most Visa and Amex cards do not, and Mastercards that do usually need a letter of coverage.",
    "<b>Mind Dublin's M50 toll.</b> It is barrier-free, with no booth, so it will not stop you: your car's plate is charged, and you must pay online by 8pm the next day. Miss that and eFlow adds a small late fee per trip, about 4 euros, that climbs if it stays unpaid, and your rental company may add its own admin fee, so check its toll policy when you collect the car.",
    "<b>Amex and Discover let you down.</b> Amex is accepted only at bigger hotels and chains, and Discover is barely accepted at all, so always carry a Visa or Mastercard as your main card.",
    "<b>Do the VAT refund at the airport before you check bags.</b> The Tax-Free refund on goods needs Customs validation, and you cannot do it once your purchases are in checked luggage, so keep receipts and forms handy and allow time."
  ],

  tippingHeading: "Light and never expected.",
  tipping: "Tipping in Ireland is genuinely low-key, because staff are paid a proper minimum wage rather than relying on tips. In a sit-down restaurant, <b>10 to 12%</b> is a normal thank-you for good service, but first check whether a <b>service charge</b> (often 10%, common for larger tables) is already on the bill, in which case nothing more is needed. At a <b>pub, you do not tip for drinks</b> ordered at the bar; if you get table service for a while, leaving a euro or two is a kind gesture. For taxis, rounding up to the nearest euro or two, or the nearest 5, is plenty. A couple of euro for a hotel porter or for housekeeping is appreciated but not expected, and a private guide or driver who makes your day is happy with 10 to 20 euro. Card machines increasingly offer a tip prompt, but a little cash is always welcome and sure to reach the person.",

  faqs: [
    { q: "Do I need cash in Ireland?", a: "Barely. Ireland is one of the most cashless countries anywhere: cards and contactless work almost everywhere, including taxis and small shops in the cities. Carry about 100 to 150 euros in small notes for a week as backup, for rural card-only pubs, small markets, the odd taxi and times the card machine loses signal, and pull it from a bank ATM as needed." },
    { q: "Should I pay in euros or dollars in Ireland?", a: "Always euros. If a card terminal or ATM offers to charge you in US dollars, decline; that dynamic currency conversion adds a few percent. Choosing euros lets your card's network handle the exchange at a fair rate." },
    { q: "What is the best ATM to use in Ireland?", a: "A bank ATM. AIB, Bank of Ireland and Permanent TSB machines generally charge foreign cards no access fee, while standalone machines in shops, pubs and tourist areas often add a few euro. Daily limits run around 600 to 800 euros, and always decline 'convert to dollars' and choose euros." },
    { q: "Can I get a VAT refund on shopping in Ireland?", a: "Yes, if you live outside the EU. Through the Tax-Free (Retail Export) scheme you can reclaim the 23% VAT on goods you buy to take home. Ask the shop for a tax-free form, get it validated by Customs at the airport before you check your bags, and claim through a refund company or the retailer; after fees you get back roughly 15% of the price. Purchases in Northern Ireland do not qualify." },
    { q: "Should I rent a car in Ireland, and what about the insurance?", a: "Renting is the best way to see the country beyond Dublin, but the insurance is the catch. The base rate includes basic collision cover but leaves a high excess (about 1,500 to 3,500 euros) frozen on your credit card, so most people add Super CDW or a cheaper standalone excess policy bought online in advance. Do not assume your US credit card covers Ireland, since most Visa and Amex cards do not. Most cars are manual, so book an automatic well ahead if you need one, and pay Dublin's barrier-free M50 toll online by the next day." },
    { q: "Do I have to pay a tourist tax in Ireland?", a: "No. Unusually for Europe, Ireland has no nightly tourist or bed tax, though Dublin and Galway are pushing for the power to introduce a small one, so check again nearer your trip. Prices already include VAT, and from July 2026 the VAT on restaurant meals dropped from 13.5% to 9%." },
    { q: "How much cash should I bring for a week in Ireland?", a: "Very little. For most visitors, 100 to 150 euros in cash across a week is plenty on top of card spending, for rural pubs, small markets, the odd taxi and card-machine outages. Pull it from bank ATMs as needed rather than exchanging dollars, and keep it in small notes." }
  ]
};
