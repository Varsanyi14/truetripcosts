export default {
  slug: "norway",
  live: true,
  name: "Norway",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-07",
  sources: {
    changed: "Sources added on first publish, checked July 2026. Confirmed that Norway (outside the EU, its own krone) charges VAT (MVA) of 25% on most things, a reduced 12% on hotel stays and transport and 15% on food, all already in the price, and that non-residents can reclaim VAT on goods over 315 NOK in one store. The big change: Norway's new visitor's contribution, up to 3% on overnight stays, took effect in the summer of 2026, but it is opt-in by municipality (the Lofoten islands are an approved early area, with Bergen, Tromso and others expected to follow), so it applies in some places and not others.",
    links: [
      { label: "Skatteetaten (Norwegian Tax Administration): the 25%, 15% and 12% VAT rates", url: "https://www.skatteetaten.no/en/rates/value-added-tax/", type: "revenue" },
      { label: "Forbes: Norway's phased visitor's contribution, up to 3% on overnight stays, from summer 2026", url: "https://www.forbes.com/sites/davidnikel/2025/06/07/norway-confirms-phased-introduction-of-tourist-tax-in-2026/", type: "media" },
      { label: "Norway country emergency numbers: 112 police, 113 ambulance and 110 fire", url: "https://globalemergencynumbers.com/country/norway", type: "police" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure. Which towns have opted into the visitor's contribution is changing through 2026, so check your specific stay.",
  },
  emergency: { medical: "112", note: "112 reaches the police and works from any phone, even with no SIM. For a medical emergency dial 113 for an ambulance, and 110 for the fire service. 116 117 is the out-of-hours medical line for less urgent care. Operators speak English.", checked: "Jul 2026", checkedISO: "2026-07-07" },
  insuranceLevel: "low",
  rentalCommon: true,
  region: "Europe",
  signals: { cardFriendliness: 5, cashNeed: 1, taxRisk: 3 },
  hook: "Card-friendly and nearly cashless, but it is kroner not euros, everything is expensive, and a new opt-in visitor's tax started in summer 2026 in places like Lofoten and Bergen.",
  aliases: ["norway", "oslo", "bergen", "tromso", "lofoten", "stavanger", "alesund", "geiranger", "fjords", "trondheim", "norwegian krone", "nok", "krone", "kroner"],

  title: "Money in Norway (2026): Cards, Cash, Kroner, VAT and the New Visitor's Tax | True Trip Costs",
  description: "How to handle money in Norway as a US traveler in 2026: near-universal cards and contactless, why it is kroner and not euros, the dollar-conversion trap, bank ATMs, the 25% VAT you can partly claim back, light tipping, high prices, and the new opt-in visitor's contribution of up to 3% that started in summer 2026. Checked July 2026.",

  h1: "Money in Norway, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your card covers almost everything, why it is kroner and not euros, how little you tip, the shopping tax you can claim back, and the new visitor's contribution that some towns started charging in summer 2026.",
  hero: {
    img: "/norway-hero.jpg",
    h: 1375,
    alt: "A calm Norwegian fjord under a soft grey sky, a lone figure with a backpack walking along a wooden wharf, a row of colorful gabled wharf warehouses and a small sailing boat across the water with forested mountains behind, and a cinnamon bun, an enamel mug of black coffee and a wedge of brown cheese on the wooden railing in the foreground"
  },

  recentChange: {
    date: "Jul 2026",
    text: "Norway's new visitor's contribution took effect in the summer of 2026. It lets a municipality add up to 3% to the price of an overnight stay (hotels, guesthouses and short-term rentals) and to cruise calls, but it is opt-in, not nationwide: a town has to apply and be approved. The Lofoten islands are an approved early area, and Bergen, Tromso and other busy spots are expected to follow, so it is rolling out gradually. Campsites, marinas, tents and personal campervans are exempt. On a 2,500 NOK hotel night, 3% is about 75 NOK, roughly 7 dollars."
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Norway is clean, orderly and about as <b>card-friendly as anywhere in Europe</b>: tap, chip, Apple Pay and Google Pay work almost everywhere, and you rarely need cash. Bring a <b>no-foreign-fee Visa or Mastercard</b>, keep maybe <b>500 to 800 NOK</b> for the odd small or rural spot, and pull kroner from a <b>bank ATM</b> (look for Minibank machines from the big banks), declining any offer to charge you in dollars. Two things to hold onto: it is <b>kroner, not euros</b> (Norway is not in the EU or the eurozone, so leftover euros will not spend here), and it is <b>genuinely expensive</b>, so budget more than for most of Europe. New for 2026: a <b>visitor's contribution</b> of up to 3% on overnight stays has started in some towns (Lofoten, likely Bergen and Tromso soon), but it is opt-in, so it appears in some places and not others (below). Always choose kroner, never dollars, and tipping is light.",

  meter: {
    heading: "Nearly cashless; the real cost is how much everything costs.",
    cashPct: 8,
    note: "A rough feel for everyday spending. Cards and contactless cover almost everything, from hotels and restaurants to buses, ferries, museums and small kiosks, and locals lean heavily on cards and the Vipps app. You need a little cash only for the occasional rural stall, small ferry or honesty box. The real thing to plan for is not cash, it is the prices, so pad your daily budget."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are taken nearly everywhere, contactless is standard, and Apple or Google Pay are widely accepted, on ferries, in shops and at remote lodges. Locals often pay by the Vipps app, but you will not need it. Amex is accepted at bigger hotels and shops but is patchier, so carry a Visa or Mastercard.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "ok", h: "Cash", verd: "A little, rarely", p: "Cards cover almost everything. Keep maybe 500 to 800 NOK for a small rural stall, a tiny ferry or an honesty-box farm stand. Do not load up on kroner; you will struggle to spend a big pile, and leftover euros do not work here at all.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Use a bank machine", p: "Use a bank <b>Minibank</b> ATM (the big banks: DNB, Nordea, SpareBank 1), common in towns. Read the on-screen fee, take a sensible amount since Norway is pricey, and always <b>decline \"convert to US dollars.\"</b> Your own bank's foreign-ATM fee usually matters more than the machine's.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> with contactless for nearly everything, plus a backup card from a different bank.",
      "Get a <b>no-foreign-fee debit card</b> (Charles Schwab, Wise or Revolut) for the little cash you might pull.",
      "Check whether your US phone plan covers Norway. Many that include the EU leave Norway out, since it is not an EU member, so an eSIM may be cheaper.",
      "Heading to Lofoten, Bergen or another busy spot? A small <b>visitor's contribution</b> may now be added to your stay (see below), so check your booking."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters. You can start tapping your card immediately, including for the airport train or bus into Oslo, Bergen or Tromso.",
      "If you want a little cash, pull kroner from a bank <b>Minibank</b> ATM and <b>decline \"convert to dollars.\"</b>",
      "Set up an <b>eSIM</b> before you land (Airalo, Nomad, or a local Telenor or Telia prepaid plan) for maps and, if you are driving the fjords, road conditions.",
      "Doing the <b>VAT refund</b> on the way out? Get forms stamped at customs before you check bags."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your card or phone</b> for almost everything: ferries, buses, shops, restaurants and museums.",
      "Prices already <b>include VAT</b>, so the number on the tag or menu is what you pay.",
      "Carry a little cash only for the odd <b>rural stall, small ferry or honesty box</b>.",
      "<b>Always choose kroner</b>, never dollars or euros, on every card terminal and ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "denom", when: "A golden rule", bullets: [
      "<b>It is kroner, not euros, and always pay in kroner.</b> Choosing dollars or euros (dynamic currency conversion) quietly adds 3 to 8%, and leftover euros do not spend here.",
      "<b>Budget high.</b> A coffee, a quick lunch, a beer or a fjord ferry all cost more than you expect, so plan a bigger daily number than for most of Europe."
    ], cta: null }
  ],

  cash: {
    rate: 9.8, cur: "NOK", round: 100, defaultIndex: 1,
    rateNote: "Rough guide at about 9.8 kroner to the dollar in mid-2026, so 100 NOK is roughly 10 dollars and 500 NOK about 51. Norway is card-first, so this is the small cash-in-hand slice of your spending, not your whole budget.",
    styles: [
      { n: "Budget",    per: 70,  cash: 0.12 },
      { n: "Mid-range", per: 145, cash: 0.08 },
      { n: "Comfort",   per: 265, cash: 0.05 }
    ]
  },

  connectivity: {
    works: "Very good in and around cities, towns and along the main roads and fjord routes, with strong 4G and wide 5G. The main networks are Telenor (the widest reach) and Telia. Coverage thins in the high mountains, some remote fjords and the far north, so expect gaps if you go deep into the backcountry. Because Norway is not in the EU, the free roaming that applies elsewhere in Europe often is not free here, so check your US plan carefully; an eSIM (Airalo, Nomad, Ubigi) is frequently cheaper. You do not need mobile data to pay by card, but you will want it for maps and, if driving, road and ferry information."
  },

  // VISITOR'S CONTRIBUTION (Visitor Contribution Act), verified to Jul 2026. Norway's parliament
  // passed the law in 2025; it took effect in summer 2026. It lets a municipality add UP TO 3% to
  // the price of an overnight stay (hotels, guesthouses, hostels and short-term rentals) and to
  // cruise calls, but it is OPT-IN: a town must apply and be approved, so it applies in some places
  // and not others. Lofoten is an approved early area; Bergen, Tromso and other busy spots are
  // expected to follow. Campsites, marinas, tents and personal campervans and boats are exempt.
  // Modeled here as a percent of the room, defaulting to the opt-in hotspots. VAT is separate and
  // already in prices.
  tax: {
    unit: "percentOfRoom",
    currency: "NOK",
    capNights: null,
    taxLabel: "Visitor's contribution",
    note: "Norway's visitor's contribution started in summer 2026 but is opt-in: a municipality has to apply to charge it, so it appears in some towns and not others. Where it applies it is up to 3% of the accommodation price, added to hotels, guesthouses and short-term rentals (and cruise calls). Lofoten is an approved early area; Bergen, Tromso and other busy spots are expected to follow. Campsites, tents and personal campervans are exempt. Pick the option that matches where you are staying, and check your booking, since the list of towns is changing through 2026.",
    regions: [
      { key: "optin", label: "Lofoten, Bergen, Tromso and other opt-in spots", pct: 3, note: "In towns that have opted in, expect up to 3% added to your accommodation. On a 2,500 NOK hotel night that is about 75 NOK, roughly 7 dollars. It may show as a separate line or be built into the rate, so read your booking." },
      { key: "elsewhere", label: "Towns that have not opted in", pct: 0, note: "Many places, especially quieter inland towns, have not adopted the visitor's contribution, so there is nothing extra to pay. Campsites, tents and personal campervans are exempt everywhere." }
    ]
  },

  currencyHeading: "The Norwegian krone, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "Norway uses the krone (NOK). At about 9.8 kroner to the dollar in mid-2026, 100 NOK is roughly 10 dollars, 200 NOK about 20, and 500 NOK about 51. Prices already include VAT, so the figure on the tag or menu is what you pay." },
    { sym: "smallnotes", k: "Notes and coins", v: "Notes run 50, 100, 200, 500 and 1,000 kroner; coins are 1, 5, 10 and 20 kroner. You will rarely handle much of it, since almost everything goes on a card." },
    { sym: "denom", k: "It's kroner, not euros", v: "Norway is not in the EU or the eurozone, so the currency is the Norwegian krone, not the euro. Leftover euros from elsewhere in Europe will not spend here, and there is no reason to carry dollars; your card handles everything." },
    { sym: "tip", k: "Tipping is light", v: "Service is included and staff are paid a proper wage, so tipping is modest: round up or leave about 5 to 10% for good service at a sit-down meal, nothing at a counter. See the tipping section below." }
  ],

  taxfree: {
    label: "Taxes, tips and refunds",
    heading: "High prices with tax in them, a light tip, and money back on shopping.",
    text: "Norway is expensive, and <b>VAT is already in the price</b>: 25% on most things, a reduced 12% on hotel stays and transport, and 15% on food, so the tag or menu figure is what you pay. As a <b>non-resident you can reclaim the VAT on goods</b> you take home, on receipts of at least <b>315 NOK</b> in a single store. Ask for a tax-free form, keep the goods unused, and get it stamped by customs when you leave; after the operator's fee you get back a useful chunk, though not the full 25%. <b>Tipping is light</b>: service is included, so rounding up or leaving about 5 to 10% for good service at a nice restaurant is generous, not expected, and there is no terminal tip-prompt culture as in the US. New for 2026, some towns now add a <b>visitor's contribution</b> of up to 3% to overnight stays (below), but it is opt-in, so it appears in places like Lofoten and, likely soon, Bergen and Tromso, and not in others. There is no separate departure tax to pay; airport charges are built into your ticket.",
  },

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> Terminals and ATMs offer to charge you in your home currency (dynamic currency conversion), which adds 3 to 8%. Pick kroner every time, and do not bring euros expecting to spend them.",
    "<b>It is an expensive country, so budget up.</b> A coffee, a quick lunch, a beer or a fjord ferry all cost more than you expect. Plan a higher daily number than for most of Europe and it will not sting.",
    "<b>It is kroner, not euros.</b> Norway is not in the EU or the eurozone. Do not arrive expecting to spend euros, and do not load up on euros for this leg of a European trip.",
    "<b>Check whether your stay carries the new visitor's contribution.</b> Since summer 2026 opt-in towns can add up to 3% to overnight stays. Lofoten is charging it and Bergen and Tromso are expected to follow, so it may appear on your bill in some places and not others. It is modest, but read your booking so it is not a surprise.",
    "<b>Mind roaming if your US plan is EU-based.</b> Norway is not in the EU, so the free roaming that applies elsewhere in Europe often excludes it. Check the rate or set up an eSIM before you rely on your phone."
  ],

  tippingHeading: "Light: service is included, rounding up is plenty.",
  tipping: "Tipping in Norway is modest, so relax about it. Service is included and staff are paid a proper wage, so locals simply round up or leave a little for good service. At a <b>sit-down restaurant</b>, rounding the bill up or adding about <b>5 to 10%</b> for good service is generous rather than expected; at a <b>cafe, bar or counter</b>, no tip is needed. For <b>taxis</b>, round up to the nearest note; for <b>hotel housekeeping</b>, a small amount is a kind gesture but not required; for a helpful <b>guide or driver</b> on a tour, a little extra is appreciated. Card terminals may show a tip line, but there is no strong tipping culture here as in North America, so do not feel obliged.",

  faqs: [
    { q: "Do I need cash in Norway?", a: "Not much. Cards and tap work almost everywhere, including ferries, buses and small kiosks, and locals lean on cards and the Vipps app. Keep maybe 500 to 800 NOK for a rural stall, a tiny ferry or an honesty box, and pull it from a bank Minibank ATM if you run low. Do not exchange a big pile of dollars into kroner." },
    { q: "Does Norway use the euro?", a: "No. Norway is not in the EU or the eurozone, so it uses the Norwegian krone (NOK). Leftover euros from elsewhere in Europe will not spend here, so plan to pay by card in kroner and do not carry euros for this leg." },
    { q: "Should I pay in kroner or US dollars in Norway?", a: "Kroner. If a card terminal or ATM offers to charge you in US dollars (or euros), decline; that dynamic currency conversion typically adds 3 to 8%. Paying in kroner and letting your own bank convert is almost always cheaper." },
    { q: "What is Norway's new tourist tax, and will I pay it?", a: "Norway's visitor's contribution started in summer 2026. It lets a town add up to 3% to overnight stays (and cruise calls), but it is opt-in, so it applies in some places and not others. The Lofoten islands are charging it, and Bergen, Tromso and other busy spots are expected to follow. On a 2,500 NOK hotel night, 3% is about 75 NOK (roughly 7 dollars). Campsites, tents and personal campervans are exempt, so check your specific booking." },
    { q: "Can I get a VAT refund on shopping in Norway?", a: "Yes, if you are a non-resident and spend at least 315 NOK in one store. Ask for a tax-free refund form, keep the goods unused, and get it stamped by customs when you leave Norway, then claim through the refund operator. After fees you get back a useful part of the 25% VAT, though not the full amount." },
    { q: "Why is Norway so expensive, and how much should I budget?", a: "High wages, a high cost of living and heavy taxes on things like alcohol all feed into prices, from coffee to fjord ferries. For everyday spending beyond your hotel, very roughly 1,000 to 1,800 NOK a day per person (about 100 to 185 dollars) is a realistic mid-range figure, mostly on card. The fix is to budget a higher daily number than elsewhere in Europe." }
  ],

  culture: {
    heading: "A few words of Norwegian go a long way",
    intro: "Norwegians speak Norwegian, and they live for the outdoors. A friendly Takk and a story or two mark you as a guest rather than a tourist, and any effort is met with warmth.",
    phrases: [
      { mean: "Hello", say: "hey", word: "Hei" },
      { mean: "Thank you", say: "tahk", word: "Takk" },
      { mean: "Please", say: "vair soh SNILL", word: "Vær så snill" },
      { mean: "Cheers", say: "skowl", word: "Skål" },
      { mean: "Yes", say: "yah", word: "Ja" },
      { mean: "Good, tasty", say: "got", word: "Godt" },
    ],
    tip: "Norwegians live by <b>friluftsliv</b>, the open-air life, a deep love of being outdoors in every season, rain or snow. There is a saying that there is no such thing as bad weather, only bad clothing. Learn <b>Takk</b> for thank you, lace up your boots, and you will fit right in.",
    stories: [
      { img: "/norway-culture-1.jpg",
        alt: "WPA-style illustration of a dragon-prowed Viking longship with a red-and-white striped sail and a row of round shields gliding down a deep, still fjord between sheer green mountains",
        h: "The age of the Vikings",
        p: "A thousand years ago, Norse seafarers, the Vikings, sailed out from these fjords in sleek dragon-prowed longships to trade, explore and raid across Europe and beyond. Light and fast, their ships could cross open ocean or slip far up a shallow river. They reached North America five hundred years before Columbus.",
        note: "Good to know: Norse sailors reached America around the year 1000" },
      { img: "/norway-culture-2.jpg",
        alt: "WPA-style illustration of a tall, many-tiered wooden stave church with dragon-head gables silhouetted against a night sky rippling with green northern lights, snow on the timber and pines",
        h: "Churches built like ships",
        p: "When Norway turned to Christianity, its people built soaring wooden stave churches, their frames raised like upturned ships and their gables carved with dragons from the old beliefs. Once there were more than a thousand. The few that survive, dark and steep against the northern sky, are nearly a thousand years old.",
        note: "Good to know: the oldest stave churches are around 900 years old" },
      { img: "/norway-culture-3.jpg",
        alt: "WPA-style illustration of a team of fur-clad polar explorers planting a red flag on a vast plain of ice and snow, sled dogs and a laden sledge beside them, long blue shadows",
        h: "First to the South Pole",
        p: "Norway bred great polar explorers, and in 1911 Roald Amundsen and his team became the first people ever to reach the South Pole, hauling sledges behind teams of hardy dogs across the ice. Careful planning and real skill on skis carried them there and safely home again. It was one of the great feats of the age of exploration.",
        note: "Good to know: the South Pole was first reached in 1911" },
    ],
    pride: "Norwegians are hardy, understated and deeply attached to nature, proud of the fjords, of a Viking and seafaring past, and of a modern country that tops the world's happiness and quality-of-life lists. Ask about their favorite cabin or ski trail and the reserve melts away."
  }
};
