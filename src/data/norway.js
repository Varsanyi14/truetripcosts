import { S } from './carrier-spine.js';

export default {
  slug: "norway",
  iso2: "no",
  live: true,
  name: "Norway",
  from: "United States",
  checked: "Aug 2026",
  checkedISO: "2026-08-26",
  sources: {
    changed: "Sources added on first publish, checked July 2026. Confirmed that Norway (outside the EU, its own krone) charges VAT (MVA) of 25% on most things, a reduced 12% on hotel stays and transport and 15% on food, all already in the price, and that non-residents can reclaim VAT on goods over 315 NOK in one store. The big change: Norway passed a visitor's contribution law, up to 3% on overnight stays, that took effect 1 July 2026, but it is a permission slip, not a live charge: a municipality has to apply and be approved before it can collect, and as of August 2026 none is collecting anywhere. Tromso has applied and is targeting 1 January 2027, so the earliest a traveler pays this is 2027.",
    links: [
      { label: "Skatteetaten (Norwegian Tax Administration): the 25%, 15% and 12% VAT rates", url: "https://www.skatteetaten.no/en/rates/value-added-tax/", type: "revenue" },
      { label: "Forbes: Norway's phased visitor's contribution law, up to 3% on overnight stays, with collection starting municipality by municipality", url: "https://www.forbes.com/sites/davidnikel/2025/06/07/norway-confirms-phased-introduction-of-tourist-tax-in-2026/", type: "media" },
      { label: "Norway country emergency numbers: 112 police, 113 ambulance and 110 fire", url: "https://globalemergencynumbers.com/country/norway", type: "police" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure. No Norwegian municipality is collecting the visitor's contribution yet, so this is one to watch rather than budget for; check your specific stay if you travel in 2027 or later.",
  },
  emergency: { medical: "112", note: "112 reaches the police and works from any phone, even with no SIM. For a medical emergency dial 113 for an ambulance, and 110 for the fire service. 116 117 is the out-of-hours medical line for less urgent care. Operators speak English.", checked: "Jul 2026", checkedISO: "2026-07-07" },
  insuranceLevel: "medium",
  rentalCommon: true,
  region: "Europe",
  signals: { cardFriendliness: 5, cashNeed: 1, taxRisk: 3 },
  hook: "Card-friendly and nearly cashless, but it is kroner not euros, everything is expensive, and a new visitor's tax is on the books though no town is collecting it yet.",
  aliases: ["norway", "oslo", "bergen", "tromso", "lofoten", "stavanger", "alesund", "geiranger", "fjords", "trondheim", "norwegian krone", "nok", "krone", "kroner"],

  title: "Can you use euros in Norway? Money in 2026",
  description: "No, Norway runs on kroner, and you barely need cash: cards work nearly everywhere. Prices are high, and a new visitor's tax began in 2026. Checked 2026.",

  h1: "Money in Norway, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your card covers almost everything, why it is kroner and not euros, how little you tip, the shopping tax you can claim back, and the new visitor's contribution that is now law but that no town is charging yet.",
  hero: {
    img: "/norway-hero.jpg",
    h: 1375,
    alt: "A calm Norwegian fjord under a soft grey sky, a lone figure with a backpack walking along a wooden wharf, a row of colorful gabled wharf warehouses and a small sailing boat across the water with forested mountains behind, and a cinnamon bun, an enamel mug of black coffee and a wedge of brown cheese on the wooden railing in the foreground"
  },

  recentChange: {
    date: "Jul 2026",
    text: "Norway's visitor's contribution became law on 1 July 2026, but it is a permission slip rather than a live charge, and as of August 2026 no municipality is collecting it anywhere. Before a town can charge it, it has to show tourism strains its services, get a spending plan approved by the national ministry, and pass a local rule. It lets a town add up to 3% to the price of an overnight stay (hotels, guesthouses and short-term rentals) and to cruise calls once it is running; campsites, marinas, tents and personal campervans are exempt. Tromso is furthest along: its council approved a plan in June 2026 and is targeting 1 January 2027, still subject to ministry approval. So for a trip now you pay nothing extra; on a 2,500 NOK hotel night, the eventual 3% would be about 75 NOK, roughly 7 dollars."
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Norway is clean, orderly and about as <b>card-friendly as anywhere in Europe</b>: tap, chip, Apple Pay and Google Pay work almost everywhere, and you rarely need cash. Bring a <b>no-foreign-fee Visa or Mastercard</b>, keep maybe <b>500 to 800 NOK</b> for the odd small or rural spot, and pull kroner from a <b>bank ATM</b> (look for Minibank machines from the big banks), declining any offer to charge you in dollars. Two things to hold onto: it is <b>kroner, not euros</b> (Norway is not in the EU or the eurozone, so leftover euros will not spend here), and it is <b>genuinely expensive</b>, so budget more than for most of Europe. New for 2026: a <b>visitor's contribution</b> of up to 3% on overnight stays is now law, but <b>no town is collecting it yet</b> (Tromso is targeting 2027), so it is one to watch, not budget for (below). Always choose kroner, never dollars, and tipping is light.",

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
      "You may have read about Norway's new <b>visitor's contribution</b>, but no town is collecting it yet (see below), so there is nothing extra to pay on a trip now."
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
      { n: "Budget", per: 70, cash: 0.12, room: 120 },
      { n: "Mid-range", per: 145, cash: 0.08, room: 210 },
      { n: "Comfort", per: 265, cash: 0.05, room: 360 }
    ]
  },

  connectivity: {
    works: "Very good in and around cities, towns and along the main roads and fjord routes, with strong 4G and wide 5G. The main networks are Telenor (the widest reach) and Telia. Coverage thins in the high mountains, some remote fjords and the far north, so expect gaps if you go deep into the backcountry. Because Norway is not in the EU, the free roaming that applies elsewhere in Europe often is not free here, so check your US plan carefully; an eSIM (Airalo, Nomad, Ubigi) is frequently cheaper. You do not need mobile data to pay by card, but you will want it for maps and, if driving, road and ferry information."
  },

  // VISITOR'S CONTRIBUTION (Visitor Contribution Act), verified to Aug 2026. Norway's parliament
  // passed the law in 2025 and it took effect 1 July 2026, but it is a PERMISSION SLIP, not a live
  // charge: a municipality must show tourism strains its services, get a spending plan approved by
  // the national ministry, and pass a local rule before it can collect. As of Aug 2026 NO town is
  // collecting anywhere. Tromso has applied and is targeting 1 Jan 2027 (still pending approval).
  // Once running it lets a town add UP TO 3% to an overnight stay (hotels, guesthouses, hostels,
  // short-term rentals) and cruise calls; campsites, marinas, tents and personal campervans are
  // exempt. Modeled here DEFAULTING TO 0 (nothing collected today); the 3% option is the eventual
  // rate for a town once it switches on. VAT is separate and already in prices.
  tax: {
    unit: "percentOfRoom",
    currency: "NOK",
    capNights: null,
    taxLabel: "Visitor's contribution",
    note: "Norway's visitor's contribution became law on 1 July 2026, but no municipality is collecting it yet, so on a trip now there is nothing extra to pay. A town has to apply and be approved before it can charge up to 3% of the accommodation price (hotels, guesthouses, short-term rentals and cruise calls); campsites, tents and personal campervans are exempt. Tromso is targeting 1 January 2027. Leave this at nothing for a trip now, or pick the 3% option to see what a stay would cost once a town starts charging.",
    regions: [
      { key: "today", label: "Any town today (nothing being collected yet)", pct: 0, note: "As of 2026 no Norwegian municipality is collecting the visitor's contribution, so there is nothing extra to pay on a trip now, anywhere in the country." },
      { key: "eventual", label: "Once a town starts charging (Tromso targets 2027)", pct: 3, note: "When a town switches the levy on, expect up to 3% added to your accommodation. On a 2,500 NOK hotel night that is about 75 NOK, roughly 7 dollars. It may show as a separate line or be built into the rate, so read your booking. Tromso is targeting 1 January 2027." }
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
    text: "Norway is expensive, and <b>VAT is already in the price</b>: 25% on most things, a reduced 12% on hotel stays and transport, and 15% on food, so the tag or menu figure is what you pay. As a <b>non-resident you can reclaim the VAT on goods</b> you take home, on receipts of at least <b>315 NOK</b> in a single store. Ask for a tax-free form, keep the goods unused, and get it stamped by customs when you leave; after the operator's fee you get back a useful chunk, though not the full 25%. <b>Tipping is light</b>: service is included, so rounding up or leaving about 5 to 10% for good service at a nice restaurant is generous, not expected, and there is no terminal tip-prompt culture as in the US. New for 2026, Norway passed a <b>visitor's contribution</b> of up to 3% on overnight stays (below), but <b>no town is collecting it yet</b>, so it adds nothing to a trip now (Tromso is targeting 2027). There is no separate departure tax to pay; airport charges are built into your ticket.",
  },

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> Terminals and ATMs offer to charge you in your home currency (dynamic currency conversion), which adds 3 to 8%. Pick kroner every time, and do not bring euros expecting to spend them.",
    "<b>It is an expensive country, so budget up.</b> A coffee, a quick lunch, a beer or a fjord ferry all cost more than you expect. Plan a higher daily number than for most of Europe and it will not sting.",
    "<b>It is kroner, not euros.</b> Norway is not in the EU or the eurozone. Do not arrive expecting to spend euros, and do not load up on euros for this leg of a European trip.",
    "<b>You will not pay the new visitor's contribution yet.</b> Norway's up-to-3% overnight levy became law on 1 July 2026, but no municipality is collecting it as of 2026, so there is nothing extra on your bill today. Tromso is targeting 2027, so this is one to check again if you travel next year.",
    "<b>Mind roaming if your US plan is EU-based.</b> Norway is not in the EU, so the free roaming that applies elsewhere in Europe often excludes it. Check the rate or set up an eSIM before you rely on your phone."
  ],

  tippingHeading: "Light: service is included, rounding up is plenty.",
  tipping: "Tipping in Norway is modest, so relax about it. Service is included and staff are paid a proper wage, so locals simply round up or leave a little for good service. At a <b>sit-down restaurant</b>, rounding the bill up or adding about <b>5 to 10%</b> for good service is generous rather than expected; at a <b>cafe, bar or counter</b>, no tip is needed. For <b>taxis</b>, round up to the nearest note; for <b>hotel housekeeping</b>, a small amount is a kind gesture but not required; for a helpful <b>guide or driver</b> on a tour, a little extra is appreciated. Card terminals may show a tip line, but there is no strong tipping culture here as in North America, so do not feel obliged.",

  faqs: [
    { q: "Do I need cash in Norway?", a: "Not much. Cards and tap work almost everywhere, including ferries, buses and small kiosks, and locals lean on cards and the Vipps app. Keep maybe 500 to 800 NOK for a rural stall, a tiny ferry or an honesty box, and pull it from a bank Minibank ATM if you run low. Do not exchange a big pile of dollars into kroner." },
    { q: "Does Norway use the euro?", a: "No. Norway is not in the EU or the eurozone, so it uses the Norwegian krone (NOK). Leftover euros from elsewhere in Europe will not spend here, so plan to pay by card in kroner and do not carry euros for this leg." },
    { q: "Should I pay in kroner or US dollars in Norway?", a: "Kroner. If a card terminal or ATM offers to charge you in US dollars (or euros), decline; that dynamic currency conversion typically adds 3 to 8%. Paying in kroner and letting your own bank convert is almost always cheaper." },
    { q: "What is Norway's new tourist tax, and will I pay it?", a: "Almost certainly not yet. Norway's visitor's contribution became law on 1 July 2026, but it is a permission slip: a town has to apply and be approved before it can charge up to 3% on overnight stays, and as of 2026 no municipality is collecting it anywhere. Tromso has applied and is targeting 1 January 2027. So on a trip now you pay nothing extra; if it ever applies to your stay, 3% on a 2,500 NOK hotel night is about 75 NOK (roughly 7 dollars), and campsites, tents and personal campervans are exempt." },
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
  },

  spokes: [
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Apps", v: "Bolt, Uber (Uber in Oslo)" },
        { k: "Taxis", v: "Very expensive, fares vary by firm" },
        { k: "From Oslo airport", v: "The train beats a taxi" },
        { k: "Watch for", v: "Check the price, fares differ a lot" }
      ],
      live: true,
      topic: "taxis",
      caution: "low",
      title: "Taxis in Norway: pricey, and fares that vary",
      description: "Bolt and Uber operate in Norway, but deregulation means fares vary a lot by company. The Oslo airport train, and how much to tip. Checked 2026.",
      h1: "Taxis in Norway, and checking the price",
      lede: "Norwegian taxis are among the priciest anywhere, and since deregulation their fares vary a lot between companies, so it pays to check before you ride. The train usually wins. Here is how it works.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Install <b>Bolt</b>, and <b>Uber</b> operates in <b>Oslo</b>, alongside established firms (Oslo Taxi and others). Norwegian taxis are <b>very expensive</b>, and since the market was <b>deregulated</b>, <b>fares vary a lot by company</b>, so check the price or use an app that shows it up front. From <b>Oslo airport (OSL)</b>, the <b>train</b> beats a taxi easily. Tipping is <b>not expected</b>, so you just round up. Fares are in <b>kroner</b>, and taxis take cards and Vipps.",
      sections: [
        {
          h: "Which app to install",
          icon: "phoneok",
          key: { fig: "Bolt", tag: "Uber in Oslo", text: "Bolt works in the cities and Uber operates in Oslo, alongside established firms. An app shows the fare up front, which matters here.", tone: "teal" },
          p: [
            "<b>Bolt</b> works in Norwegian cities and <b>Uber</b> operates in <b>Oslo</b>, alongside established companies like Oslo Taxi. Since fares vary (see below), an <b>app that shows the price before you ride</b> is especially useful here.",
            "Public transport in and around Oslo is good, so for many trips a tram, bus or train is far cheaper than any taxi."
          ]
        },
        {
          h: "From Oslo airport",
          icon: "plane",
          key: { fig: "Train", tag: "Beats a taxi", text: "From Oslo airport, the Flytoget express or a regular Vy train reaches the city cheaply. A taxi is very expensive.", tone: "teal" },
          p: [
            "From <b>Oslo airport (OSL, Gardermoen)</b>, the <b>Flytoget</b> airport express is fast, and a regular <b>Vy train</b> covers the same route for less, both far cheaper than a taxi.",
            "A <b>taxi</b> into Oslo can run well over 800 kroner, so the train is the obvious choice unless you have a group or heavy bags."
          ]
        },
        {
          h: "Check the price: fares vary a lot",
          icon: "alert",
          key: { tag: "Since deregulation", text: "Norway deregulated taxis, so different companies charge very different rates and some independents are steep. Check the price sticker or use an app that shows the fare before you ride.", tone: "amber" },
          p: [
            "Since Norway <b>deregulated taxis</b>, <b>fares vary widely between companies</b>, and some independent cabs charge steep rates, especially at ranks and the airport.",
            "So before you get in, <b>check the price</b> (there is a fare sticker in the window) or, more simply, <b>use an app</b> like Bolt or Uber that shows the total up front. Sticking to a well-known company also keeps the fare sensible."
          ]
        },
        {
          h: "Fares, paying and tipping",
          icon: "coins",
          key: { fig: "Round up", tag: "Not expected", text: "Fares are metered but pricey, paid by card or Vipps. Tipping is not expected, so just round up for good service.", tone: "teal" },
          p: [
            "Fares are <b>metered but expensive</b>, paid by <b>card or Vipps</b> (cash rarely needed). Tipping is <b>not expected</b> in Norway, so at most <b>round up</b> for good service.",
            "For more, see <a href='/norway/tipping'>tipping in Norway</a>, <a href='/norway/cash-or-card'>cash or card in Norway</a>, and the <a href='/norway'>Norway money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Uber in Norway?", a: "Uber operates in Oslo, and Bolt works in the cities too, alongside established firms like Oslo Taxi. Since fares vary a lot between companies, an app that shows the price up front is especially useful." },
        { q: "Should I take a taxi from Oslo airport?", a: "Usually not: the Flytoget express or a regular Vy train reaches the city far more cheaply, while a taxi can run well over 800 kroner. Take the train unless you have a group or heavy bags." },
        { q: "Why do Norwegian taxi fares vary so much?", a: "Norway deregulated taxis, so different companies set very different rates and some independents are steep, especially at ranks and the airport. Check the fare sticker or use an app that shows the price before you ride." },
        { q: "Do you tip taxi drivers in Norway?", a: "No, it is not expected. Fares are metered but expensive, paid by card or Vipps, so at most round up for good service." }
      ],
      sources: {
        links: [
          { label: "Visit Norway: official travel information", url: "https://www.visitnorway.com/", type: "gov" },
          { label: "US State Department: Norway country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Norway.html", type: "gov" }
        ],
        judgment: "Norwegian taxis are very expensive, and deregulation means fares vary by company, so checking the price or using an app matters. The train beats a taxi from Oslo airport. Conditions shift over time, so this is our practical read. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Not really expected" },
        { k: "Why", v: "High wages, service included" },
        { k: "Good service", v: "Round up, or 5 to 10%" },
        { k: "Cafes, taxis", v: "No tip" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Norway: you do not really tip 2026",
      description: "Wages are high in Norway, so tipping is not really expected. When to round up for good service, and how to handle the card terminal prompt.",
      h1: "Tipping in Norway",
      lede: "Norway is not really a tipping country. Wages are high and service is included, so tipping is not expected. Round up for good service if you like. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Norway is <b>not really a tipping country</b>. Wages are <b>high</b> and service is effectively <b>included</b>, so tipping is <b>not expected</b> and leaving nothing is normal. For <b>good service at a restaurant</b>, it is common to <b>round up</b> the bill, or leave <b>5 to 10%</b> if you were really pleased, but it is optional. At <b>cafes, bars and in taxis</b>, no tip is expected. Norway is <b>largely cashless</b>, so card terminals may <b>prompt for a tip</b>, which you can decline. Any tip is in <b>kroner</b>.",
      sections: [
        {
          h: "You do not really tip here",
          icon: "notip",
          key: { fig: "Not expected", tag: "High wages", text: "Tipping is not expected in Norway. Wages are high and service is effectively included, so leaving nothing is normal.", tone: "teal" },
          p: [
            "Norway is <b>not really a tipping culture</b>. Hospitality <b>wages are high</b> and service is effectively <b>included</b> in prices, so tipping is <b>not expected</b>, and leaving nothing is completely normal.",
            "At <b>cafes, bars and in taxis</b>, <b>no tip is expected</b> at all. For US visitors, the <b>price or the meter is the price</b>."
          ]
        },
        {
          h: "Round up for good service",
          icon: "coins",
          key: { fig: "5-10%", tag: "Optional at a restaurant", text: "For good restaurant service, rounding up or leaving 5 to 10% is a welcome gesture, but it is optional.", tone: "teal" },
          p: [
            "The one time Norwegians might tip is for <b>good service at a sit-down restaurant</b>: <b>rounding up</b> the bill, or leaving <b>5 to 10%</b> if you were really pleased, is a welcome gesture.",
            "But it is a <b>bonus for good service</b>, not a default, and far from the US norm. A normal meal needs no tip."
          ]
        },
        {
          h: "Watch the card terminal",
          icon: "card",
          key: { fig: "You can decline", tag: "Norway is cashless", text: "Norway is largely cashless, so card terminals may prompt for a tip. Since it is not expected, you can decline.", tone: "amber" },
          p: [
            "Norway is <b>largely cashless</b>, and card terminals <b>increasingly prompt for a tip</b>, sometimes with preset percentages. Since tipping is <b>not expected</b>, you can <b>decline without a second thought</b>.",
            "If you do want to tip, adding it on the card or leaving <b>kroner</b> both work. For the wider picture, see <a href='/norway/cash-or-card'>cash or card in Norway</a> and the <a href='/norway'>Norway money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Norway?", a: "Not really. Wages are high and service is effectively included, so tipping is not expected and leaving nothing is normal. For good restaurant service, rounding up or 5 to 10% is a welcome gesture, but optional." },
        { q: "How much do you tip at a Norwegian restaurant?", a: "Nothing is expected. For good service, rounding up the bill or leaving 5 to 10% is a welcome gesture, but a normal meal needs no tip. Cafes, bars and taxis need no tip." },
        { q: "Why does the card machine in Norway ask for a tip?", a: "Norway is largely cashless, and terminal tip prompts have crept in, sometimes with presets. Since tipping is not expected, you can decline without a second thought." },
        { q: "Do you tip taxi drivers in Norway?", a: "No, it is not expected. The metered fare is what you pay, though rounding up is a small courtesy if you like." }
      ],
      sources: {
        links: [
          { label: "US State Department: Norway country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Norway.html", type: "gov" }
        ],
        judgment: "Norway's no-tipping norm rests on high hospitality wages, with terminal prompts a growing wrinkle in a cashless economy. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Norwegian krone (NOK), not euro" },
        { k: "Cards", v: "Near-total, contactless everywhere" },
        { k: "Cash", v: "Rarely needed, often refused" },
        { k: "On a card", v: "Choose krone, not dollars" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Norway? Almost never 2026",
      description: "Norway is nearly cashless and many places take little or no cash. The currency is the krone, not the euro, and it is an expensive country. Choose krone.",
      h1: "Do I need cash in Norway, or can I use cards?",
      lede: "Short answer: a card for everything, and almost no cash. Norway is nearly cashless like its Nordic neighbors, uses the krone rather than the euro, and is one of Europe's most expensive countries. Here is how to handle it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Cards, essentially entirely. Norway is <b>nearly cashless</b>, like Sweden and Denmark: <b>contactless</b> is everywhere, Apple Pay and Google Pay are standard, and many places take <b>little or no cash</b>. The currency is the <b>Norwegian krone (NOK), not the euro</b>. You need <b>very little cash</b>, so a working card is essential. It is also an <b>expensive</b> country, so budget higher than most of Europe. On any card or ATM, choose <b>krone, not dollars</b>.",
      sections: [
        {
          h: "Nearly cashless, like its neighbors",
          icon: "phoneok",
          key: { fig: "Card first", tag: "Cash rarely needed", text: "Contactless is everywhere and many places take little or no cash. A working card is essential; locals use Vipps, which you do not need.", tone: "teal" },
          p: [
            "Norway is <b>nearly cashless</b>, much like Sweden and Denmark. <b>Contactless</b> cards, Apple Pay and Google Pay are accepted almost everywhere, and many shops, cafes and transport take <b>little or no cash</b>. Locals pay each other with the <b>Vipps</b> app, which you do not need as a visitor.",
            "For you, a <b>working card is essential</b> and cash is close to optional. Carry a <b>contactless card</b> with a backup on a different network, and check it works on arrival, since being cash-only here is more of a problem than being card-only."
          ]
        },
        {
          h: "It is krone, not euros, so choose krone",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose krone", text: "The currency is the Norwegian krone, not the euro. When a terminal or ATM offers dollars or krone, pick krone; dollars add about 3 to 8% via dynamic conversion.", tone: "amber" },
          p: [
            "Norway uses the <b>Norwegian krone (NOK)</b>, not the euro, and it is not in the EU. When a card terminal or ATM asks whether to charge in <b>dollars or krone, always choose krone</b>. Dollars trigger dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. Decline it every time.",
            "You will rarely need cash, but if you do, use a <b>bank ATM</b> (a <b>Minibank</b>) rather than a standalone tourist kiosk, and use a <b>debit card</b> to avoid cash-advance fees."
          ]
        },
        {
          h: "Little cash, and the cost of things",
          icon: "coins",
          key: { fig: "Near zero", tag: "Expensive country", text: "Most trips need almost no cash. Keep a small buffer of krone for a rare rural spot, and budget higher, since Norway is expensive.", tone: "teal" },
          p: [
            "Most visitors need <b>almost no cash</b> in Norway. Keep a <b>small buffer of krone</b> for a rare rural spot, but do not exchange much. Norway is also one of <b>Europe's most expensive</b> countries, so meals, transport and everyday costs run high; budget accordingly.",
            "As in Sweden, the real risk is a <b>dead card with no backup</b>, so carry two cards on different networks. For the wider picture, see the <a href='/norway'>Norway money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Norway?", a: "Almost never. Norway is nearly cashless, and many places take little or no cash. A contactless card covers everything; keep only a small buffer of krone, if any, for rural spots." },
        { q: "Does Norway use the euro?", a: "No. Norway uses the Norwegian krone (NOK), not the euro, and it is not in the EU. On a card or ATM, choose to be charged in krone, not dollars or euros." },
        { q: "Should I pay in krone or dollars in Norway?", a: "Always krone. If a card machine or ATM offers dollars, decline: that dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
        { q: "Is Norway expensive?", a: "Yes, it is one of Europe's most expensive countries. Meals, transport and everyday costs run high, so budget accordingly. A contactless card covers almost everything, with little or no cash needed." }
      ],
      sources: {
        links: [
          { label: "Norges Bank: official Norwegian krone information", url: "https://www.norges-bank.no", type: "gov" },
          { label: "US State Department: Norway country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Norway.html", type: "gov" }
        ],
        judgment: "Norway is genuinely among the most cashless countries, though a rare rural spot may still want cash, so this is our practical read. The krone rate moves, and the firm rule is to decline dollar conversion. Checked July 2026."
      }
    },
    {
      slug: "bringing-your-pet",
      glance: [
        { k: "Process", v: "Shared EU entry (adopted)" },
        { k: "Need", v: "ISO chip, rabies, EU health cert" },
        { k: "Dogs also need", v: "A tapeworm treatment before arrival" },
        { k: "Coming home", v: "Simple CDC path" }
      ],
      live: true,
      topic: "pets",
      insurance: true,
      title: "Bringing a dog or cat to Norway: tapeworm rule",
      description: "Norway runs on the shared EU health-certificate process, no quarantine and no titer, plus one extra step: a timed tapeworm treatment for dogs.",
      h1: "Bringing your dog or cat to Norway.",
      lede: "Norway is a destination some US pet owners choose, and it follows the EU pet-entry rules: microchip, rabies in the right order, and an EU health certificate on a 10-day clock. No quarantine, no rabies titer. Norway adds one thing the big EU countries do not: a timed tapeworm treatment for dogs. Here is what that means, and the local parts worth knowing.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Norway follows the <b>shared EU pet-entry process</b> (it has adopted the EU rules), so there is no quarantine and no rabies titer for a pet coming straight from the US. Your pet needs an <b>ISO microchip, a rabies vaccination given after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS</b>, with entry within <b>10 days</b> of endorsement. Norway's one addition: <b>dogs need an approved tapeworm treatment given by a vet 24 to 120 hours before arrival</b>, recorded on the certificate. Cats do not. The full shared process is on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Coming home to the US is the easy part.",
      sections: [
        {
          h: "Norway runs on the EU process",
          icon: "health",
          key: { fig: "10 days", tag: "EU rules, not an EU member", text: "Norway is not an EU member but has adopted the EU import rules, with no quarantine or rabies titer from the US: an ISO microchip first, a rabies shot after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS.", tone: "teal" },
          p: ["Norway is not an EU member but has adopted the EU import rules, so bringing a dog or cat into Norway from the US is the standard EU move: an ISO microchip first, a rabies vaccination after the chip, then an EU Animal Health Certificate completed by a USDA-accredited vet and endorsed by APHIS, with the pet arriving within 10 days of endorsement. A first rabies shot adds a 21-day wait before travel.", "Because the core process is identical across the EU (and the countries that follow its rules), we do not repeat it per country. The full sequence, the microchip-before-rabies trap that costs people the most time, the 10-day clock, and the current APHIS endorsement fees all live on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Read that first, then come back for the Norway notes."]
        },
        {
          h: "The Norway-specific part: the dog tapeworm rule",
          icon: "paw",
          key: { tag: "Dogs need a tapeworm dose", text: "Like Ireland, Finland and Malta, Norway adds a dog tapeworm rule: a vet must give your dog an approved tapeworm treatment 24 to 120 hours before you arrive, recorded on the certificate. Cats are exempt.", tone: "amber" },
          p: ["Norway sits outside the EU but has adopted the EU import rules, so the core process is the same shared one: microchip, rabies after the chip, and an EU Animal Health Certificate endorsed by APHIS, with entry within 10 days. Norway is one of the short list of rabies-free destinations (with Ireland, Finland and Malta) that add a dog tapeworm treatment. A vet must give your <b>dog</b> an approved treatment against echinococcus tapeworm and record it on the certificate <b>24 to 120 hours before the dog arrives in Norway</b>, that is between one and five days out. It is a timing rule as much as a medical one, so it usually happens at a final vet visit right before travel.", "Two things to stress. This applies to <b>dogs only</b>: cats coming to Norway do not need it. And Norway requires arriving pet owners to report to customs (the red channel) on entry to present the pet and its papers. Get the tapeworm timing wrong and the certificate is not valid for Norway, so build the final vet visit into your travel plan deliberately."]
        },
        {
          h: "The money side, honestly",
          p: [
            "No insurance product reimburses quarantine boarding anywhere, so if you later move on to a destination that requires it, budget that as an out-of-pocket cost. Nationwide is the one US pet insurer that reimburses vet care at any licensed vet worldwide, and even it excludes boarding.",
            "US pet insurance is written around a pet that lives in the US. Most policies carry a policy territory, typically the US and sometimes Canada or Puerto Rico, and even the ones that reimburse vet care worldwide generally require your primary residence to stay in the US. So a policy may well pay a vet bill on a trip abroad and still lapse the day the move becomes permanent. Read your own policy's territory and residency wording before you assume it travels with you, and for a permanent move plan on taking out local pet insurance in your new country.",
            "As a rough sanity check on any quote, and this is our read of current market pricing rather than an official figure: a standard international pet move tends to run about $1,500 to $6,000. Full-service door-to-door typically costs 30 to 50 percent more than a transport-only booking where you handle the vet work and paperwork yourself.",
            "The costs people forget are the small ones. USDA APHIS charges a user fee to endorse an export health certificate, currently $101 where no test verification is needed, $160 for a certificate covering one or two tests, and $206 for three to six tests, with rabies vaccination not counted in that tally. These rates rose on 10 January 2025, the first APHIS fee adjustment since 2012. Add an airline-compliant crate (roughly $50 to $400), the travel vet visits themselves, boarding on a layover, and summer heat surcharges.",
            "Pet shipping attracts scammers, so verify any company before you send money. IPATA, the International Pet and Animal Transportation Association, is a trade association: its members ship under their own company names, IPATA itself does not ship pets, and there is no legitimate shipper with \"ipata\" in its name. Scammers clone real shippers' sites, logos and testimonials, so check the company in the member directory at ipata.org rather than trusting a logo on a website. Treat these as red flags: a quote dramatically below every other quote, a domain registered less than six months ago, email coming from a gmail address rather than the company domain, and any request to pay by Western Union or MoneyGram.",
            "One dated note for EU moves: the EU's pet travel rules were remade by Commission Delegated Regulation (EU) 2026/131, which applies from 22 April 2026, with the new certificate models set out in Implementing Regulation (EU) 2026/705. On the US side, APHIS is switching to the new non-commercial certificate on 1 October 2026 and can endorse the current one up to 30 September 2026. We cover the detail on the <a href=\"/eu-pet-health-certificate\">EU pet health certificate</a> page."
          ]
        },
        {
          h: "Coming back to the US is the easy part",
          icon: "plane",
          key: { fig: "Easy", tag: "The return trip", text: "A dog flying home from Norway is on the simplest CDC path: usually a CDC Dog Import Form receipt, a microchip, and a minimum age of 6 months.", tone: "teal" },
          p: ["Good news for the return trip: a dog flying home to the US from Norway is on the simplest CDC path, typically a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement.", "For the wider picture, including how Norway compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Norway",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-finland-malta-ireland-including-northern",
        note: "The US-side steps and the EU health certificate for Norway. Norway applies the shared EU process plus the dog tapeworm treatment, and the destination's own authorities are the final word on the day."
      },
      faqs: [
        {
          q: "What is the extra step for bringing a dog to Norway?",
          a: "A tapeworm treatment. Norway follows the EU process but, like Ireland, Finland and Malta, adds a vet-given echinococcus tapeworm treatment for dogs, recorded on the certificate 24 to 120 hours (one to five days) before arrival. It applies to dogs only, not cats, and the timing must fall inside that window. Norway also asks arriving owners to report to customs on entry."
        },
        {
          q: "Does my pet have to go into quarantine in Norway?",
          a: "No. Norway applies the shared EU pet-entry process, which has no quarantine and no rabies titer for a pet coming straight from the US. Your pet needs a microchip, a rabies vaccination in the right order, and an EU Animal Health Certificate endorsed by APHIS, then must arrive within 10 days of endorsement. The one addition is the dog tapeworm treatment in the 24-to-120-hour window before arrival. See our EU pet health certificate page for the full process."
        },
        {
          q: "Do I need to quarantine my pet coming back to the US from Norway?",
          a: "No. A dog returning to the US from Norway is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details."
        }
      ],
      sources: {
        links: [
          {
            label: "True Trip Costs: the EU pet health certificate, the shared microchip, rabies and certificate process for all EU countries including Norway",
            url: "/eu-pet-health-certificate",
            type: "internal"
          },
          {
            label: "USDA APHIS: pet travel from the United States to Norway, the US-side steps and EU health certificate",
            url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-finland-malta-ireland-including-northern",
            type: "gov"
          },
          {
            label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, for the return leg",
            url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html",
            type: "gov"
          }
        ],
        judgment: "Norway applies the shared EU pet-entry framework plus a dog tapeworm treatment, which it has adopted despite sitting outside the EU, set by the EU and administered on the US side by APHIS, not by us. The process is stable in substance, though the EU certificate format changes on 1 October 2026, which we cover on the EU pet health certificate page. The tapeworm timing is the part to get right, so we point you to the official pages and dated this July 2026."
      }
    },
    {
      slug: "driving-and-tolls",
      glance: [
        { k: "Where it applies", v: "Oslo, Bergen, Trondheim" },
        { k: "Day permit", v: "35 NOK" },
        { k: "Longer", v: "450 NOK a month, 1,400 a season" },
        { k: "No permit", v: "750 NOK, charged to the driver" }
      ],
      live: true,
      topic: "driving",
      caution: "medium",
      title: "Norway studded tyre fee: ask what your rental has",
      description: "Oslo, Bergen and Trondheim charge to drive on studded winter tyres: 35 NOK a day, 750 NOK if you skip it. Most rentals are studless and exempt.",
      h1: "The Norwegian city charge for studded winter tyres",
      lede: "Norway is the rare country that charges you to use studded winter tyres rather than banning them. Whether it costs you anything comes down to one question at the rental counter, because studless tyres are exempt and most rentals have them. Here is the fee, and how to tell if it is yours to pay.",
      checked: "Aug 2026",
      checkedISO: "2026-08-14",
      answer: "Norway is the rare country that <b>charges</b> you to use studded winter tyres rather than banning them. In <b>Oslo, Bergen and Trondheim</b> a studded-tyre permit costs <b>35 NOK a day</b>, <b>450 NOK a month</b> or <b>1,400 NOK for the season</b>, and driving without one is a <b>750 NOK fine charged to the driver, not the rental company</b>. Then the caveat that decides whether any of this is your problem: it is <b>winter only</b>, and it applies <b>only if the rental has studded tyres</b>. Studless friction tyres are <b>exempt</b>, and <b>most rentals are studless</b>, so <b>ask which ones you have</b> before you budget for anything.",
      sections: [
        {
          h: "A charge, not a ban",
          icon: "wheel",
          key: { fig: "35 NOK", tag: "A day, in the big cities", text: "Oslo, Bergen and Trondheim price studded tyres rather than forbidding them: 35 NOK a day, 450 NOK a month or 1,400 NOK for the season, with a 750 NOK fine for driving without a permit.", tone: "teal" },
          p: [
            "Most countries that dislike studded tyres ban them. Norway prices them instead, which is why this cost surprises people who have driven other winter destinations. In <b>Oslo, Bergen and Trondheim</b> a studded-tyre permit costs <b>35 NOK a day</b>, <b>450 NOK a month</b> or <b>1,400 NOK for the season</b>, and the fine for driving without one is <b>750 NOK</b>.",
            "The part that matters for a rental is who pays. The fine is <b>charged to the driver, not the rental company</b>, so it is not something that quietly appears on the company's account and gets absorbed. It lands on you, which is reason enough to sort the permit on the morning you plan to drive into one of those three cities."
          ]
        },
        {
          h: "First, ask which tyres you have",
          icon: "alert",
          key: { tag: "Most rentals are exempt", text: "Studless friction tyres carry no fee at all. Only studded tyres need a permit, so one question at the rental counter settles whether this cost applies to you.", tone: "amber" },
          p: [
            "Before any of the above becomes a cost, establish whether it applies. Winter rentals in Norway come on one of two types, and only one of them is charged. <b>Studless friction tyres are exempt</b>. <b>Studded tyres need the permit.</b> <b>Most rentals are studless</b>, so for a lot of visitors the honest answer is that this fee never touches them, and the useful action is simply to <b>ask which tyres your winter rental has</b> when you collect the car.",
            "It is also worth knowing what you are not looking for. In Oslo there is <b>no windscreen sticker to display</b>: the permission is registered electronically against the vehicle's registration number, so there is nothing to check in the car and nothing to stick on the glass. If your rental does have studs and you have paid, that is the whole of it."
          ]
        },
        {
          h: "Where to buy it, and where it stops working",
          icon: "card",
          key: { fig: "City by city", tag: "Not a national permit", text: "You buy from the city, at oslo.kommune.no or the relevant city site, and the permit does not travel. Sweden and Denmark take a different approach and ban studs on some streets instead.", tone: "teal" },
          p: [
            "This is a municipal charge rather than a national one, so you buy it from the city: <b>oslo.kommune.no</b> for Oslo, or the relevant city site for Bergen and Trondheim. Buy it for the days you will actually drive in the city, since the day, month and season options exist precisely because most visitors need only the first of the three.",
            "One boundary worth planning around on a longer trip: the permit <b>does not carry into Sweden or Denmark</b>. Those countries take the opposite approach and <b>ban studs on some streets</b> instead of charging for them, so a cross-border winter drive is a separate question rather than an extension of what you have already paid. For the rest of the money picture, see <a href='/norway/cash-or-card'>cash or card in Norway</a>, <a href='/norway/taxis-and-apps'>taxis and apps in Norway</a>, and the <a href='/norway'>Norway money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I have to pay a studded tyre fee in Norway?", a: "Only if your car actually has studded tyres and you are driving in Oslo, Bergen or Trondheim in winter. Studless friction tyres are exempt, and most rentals are studless, so ask which ones you have before assuming this is a cost." },
        { q: "How much is the studded tyre permit in Oslo?", a: "35 NOK a day, 450 NOK a month, or 1,400 NOK for the season. You buy it from the city, at oslo.kommune.no for Oslo or the relevant city site elsewhere, and in Oslo it is registered electronically rather than shown as a sticker." },
        { q: "What happens if I drive on studs without a permit?", a: "A 750 NOK fine, and it is charged to the driver rather than the rental company. That is the main reason to settle the question at the counter rather than assume the rental firm has handled it." },
        { q: "Does the Norwegian studded tyre permit work in Sweden or Denmark?", a: "No. It does not carry across the border. Sweden and Denmark ban studs on some streets rather than charging for them, so treat a cross-border winter drive as a separate question." }
      ],
      sources: {
        links: [
          { label: "City of Oslo: the studded tyre fee, in English, confirming the daily, monthly and season prices and the 750 NOK penalty", url: "https://www.oslo.kommune.no/english/street-transport-and-parking/studded-tyre-fee/", type: "gov" },
          { label: "Oslo kommune: piggdekkgebyr, the Norwegian page, on where the charge applies and how the electronic permit is registered", url: "https://www.oslo.kommune.no/gate-transport-og-parkering/piggdekkgebyr/", type: "gov" }
        ],
        judgment: "The prices and the penalty come straight from the city's own pages, so those are firm. The legal framing sits in the national road-use regulation, Forskrift 1999-05-07-437, and the charge has been the subject of a parliamentary proposal, Stortinget Dokument 8:35 S for the 2025 to 2026 session, so it is a live policy question rather than a settled one. We have deliberately led with the caveat rather than the number, because the fee only applies if the rental has studded tyres and most rentals are studless, which means the fact most readers need is the question to ask rather than the amount to budget. City rates are set individually and have moved in recent years, so confirm with the city site for the winter you are travelling. Checked Aug 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Strong along the coast and valleys" },
        { k: "Signal gaps", v: "Mountain passes and inland Finnmark" },
        { k: "Carrier roaming", v: "$10 to $12 a day" },
        { k: "Not included", v: "Svalbard, on most plans" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "medium",
      title: "Norway: good coverage, and two things plans leave out",
      description: "Norwegian coverage is strong where people live and thin in the mountains and the far inland. Svalbard is a separate destination that most plans exclude.",
      h1: "Staying connected in Norway.",
      lede: "Norway covers its coast and valleys better than a country this shape has any right to, and then stops sharply above and inland. The two things worth checking before you buy are the mountain passes and Svalbard.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>strong along the populated coast and up the valleys</b>, including the fjord towns, the Lofoten road and most of the rail network, and it thins in the <b>high mountain passes</b>, inland <b>Finnmark</b>, the Hardangervidda plateau and on long stretches of the E6 in the far north. Your US carrier charges about <b>${S.dayPass}</b> to roam (<b>AT&amp;T and Verizon</b> day passes), though <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, while <b>Verizon has ${S.verizonNoCap}</b> and keeps billing daily. <b>T-Mobile</b>'s mid and upper tiers include <b>${S.tmoRange}</b> of high-speed data abroad before slowing to <b>${S.throttle}</b>. Norway is in the <b>EEA</b>, so an EU or Norwegian prepaid SIM roams here under <b>Roam Like At Home</b>. The two Norway-specific checks: <b>Svalbard</b> is a separate destination that most eSIM plans and EU roaming leave out, and long road <b>tunnels</b>, of which Norway has more than anywhere, drop signal routinely. A <b>Nomad eSIM</b> is a few dollars per gigabyte. Before a mountain drive, <b>download offline maps</b> and check <b>vegvesen.no</b> for pass closures. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "Svalbard is not Norway, for your phone",
          icon: "alert",
          key: { fig: "Svalbard", tag: "Usually excluded", text: "Listed as its own destination and outside EU roaming. Check the plan by name, and expect maritime rates on a boat.", tone: "amber" },
          p: [
            `If Longyearbyen is on your itinerary, read this before you buy anything. <b>Svalbard</b> is listed as a separate destination by the US carriers, sits <b>outside the EU roaming zone</b>, and is excluded from a lot of travel eSIM plans sold as covering Norway or Europe. Coverage in and around <b>Longyearbyen</b> itself is fine; the problem is what you are paying for it.`,
            `The sharper risk on Svalbard is at sea. Once a boat is away from the settlement, a phone can latch onto a <b>maritime or satellite network</b> billed at rates that make a day pass look like nothing, so <b>turn data roaming off</b> on any boat trip and leave it off until you are back ashore. The same warning applies to the coastal Hurtigruten in mainland Norway.`
          ]
        },
        {
          h: "The passes, the plateau and the tunnels",
          icon: "wheel",
          key: { fig: "The passes", tag: "Where signal drops", text: "High mountain passes, the Hardangervidda and inland Finnmark thin out on every network, and Norway has more road tunnels than anywhere.", tone: "amber" },
          p: [
            `Coverage follows the coast and the valley floors, so a Norwegian road trip crosses in and out of it. Expect gaps on the high <b>mountain passes</b>, across the <b>Hardangervidda</b>, in inland <b>Finnmark</b> and on long empty stretches of the E6 north of Tromso. Norway also has <b>more road tunnels than any country</b>, many of them kilometres long, and most take your signal with them.`,
            `So plan a driving day offline: <b>download the whole route</b> rather than the next leg, check <b>vegvesen.no</b> for pass closures and conditions before you set off, since a summer pass can shut in an afternoon, and keep your accommodation details available without a connection. <b>112</b> reaches emergency services and can sometimes connect on a network you have no subscription with.`
          ]
        },
        {
          h: "Where you actually are, it is good",
          icon: "roamfee",
          key: { fig: `${S.dayPassFig}`, tag: "Roaming default", text: "A US carrier day pass is the expensive default. AT&T caps it at 10 daily fees a bill period, Verizon does not cap at all, and T-Mobile's mid and upper tiers include 5GB to 30GB abroad.", tone: "teal" },
          p: [
            `For the parts of Norway most visitors spend most of their time in, coverage is genuinely strong: <b>Oslo, Bergen, Trondheim, Tromso</b>, the fjord towns, <b>Lofoten</b>'s main road and the Bergen and Flam railways all hold up, with fast 4G and urban 5G. So this is largely a cost question after all.`,
            `Roaming is about <b>${S.dayPass}</b>, so <b>${S.week}</b> a week, with <b>AT&amp;T</b> capping at <b>${S.capFees}</b> and <b>Verizon</b> having <b>${S.verizonNoCap}</b>. <b>T-Mobile</b>'s tiers include <b>${S.tmoRange}</b> before slowing to <b>${S.throttle}</b>. Norwegian prepaid from <b>Telenor</b> or <b>Telia</b> is available but pricier than most of Europe, so a <b>Nomad eSIM</b> at a few dollars per gigabyte is usually the better value here. This guide is written for US travelers departing the US. For more, see <a href='/norway/cash-or-card'>cash or card in Norway</a>, <a href='/norway/taxis-and-apps'>taxis and apps in Norway</a>, and the <a href='/norway'>Norway money guide</a>.`
          ]
        }
      ],
      faqs: [
        { q: `Does my Norway plan cover Svalbard?`, a: `Often not. Svalbard is listed as its own destination by the US carriers, sits outside the EU roaming zone and is excluded from many travel eSIM plans sold as covering Norway. Check it by name. On boat trips away from Longyearbyen, turn data roaming off, since maritime networks bill at far higher rates.` },
        { q: `Will I have signal driving in Norway?`, a: `Along the coast and the valleys, yes. On high mountain passes, across the Hardangervidda, in inland Finnmark and in Norway's many long road tunnels, frequently not. Download the whole route offline and check vegvesen.no for pass closures before you set off.` },
        { q: `How much does it cost to use my US phone in Norway?`, a: `About ${S.dayPass} on an AT&T or Verizon day pass, so roughly ${S.week} a week. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad before slowing to ${S.throttle}.` },
        { q: `Is a Norwegian SIM card worth buying?`, a: `Usually not, since Norwegian prepaid is pricier than most of Europe. A travel eSIM at a few dollars per gigabyte is generally better value. Norway is in the EEA, so if you already hold an EU SIM it roams here at no surcharge under Roam Like At Home.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "Norwegian Public Roads Administration: road and mountain pass conditions", url: "https://www.vegvesen.no/", type: "gov" },
          { label: "AT&T: the International Day Pass destination list, which names Svalbard separately", url: "https://www.att.com/support/article/wireless/KM1395068/", type: "card" },
          { label: "US State Department: Norway country information and local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Norway.html", type: "gov" }
        ],
        judgment: "Checked Aug 2026. Two things here cost us rather than earn: Svalbard's exclusion is a reason to check a country list rather than click a link, and the maritime-roaming warning is the largest single bill risk on any Norwegian trip and has nothing to do with the products on this page. Svalbard's separate listing was verified against AT&T's own destination list. Pass conditions come from vegvesen.no, which supersedes anything here on the day you drive."
      }
    },
    {
      slug: "medical-costs",
      exposureCategory: "payInFull",
      exposureQuote: "Norway's public health service is funded for residents, and a visitor from outside the EEA is charged the full cost of treatment.",
      glance: [
        { k: "You pay", v: "The full rate as a visitor" },
        { k: "Care", v: "Good, and sometimes far away" },
        { k: "Distance", v: "A real cost driver here" },
        { k: "Real risk", v: "Getting to care, then the bill" }
      ],
      live: true,
      topic: "health",
      title: "Getting sick in Norway: good care, long distances",
      description: "Norway's public system covers residents. A visitor from outside the EEA pays the full cost, and outside the cities the distance to care is its own expense.",
      h1: "What does getting sick in Norway cost a visitor?",
      lede: "Norway has a strong public health service organised around its own residents, and a geography that makes reaching it the first question in half the country.",
      checked: "Aug 2026",
      checkedISO: "2026-08-20",
      answer: "Norway's public system is <b>funded for residents</b>, and a visitor from outside the EEA is <b>charged the full cost</b> of treatment. Emergency care is provided and then billed. The second half of the picture is <b>geography</b>: outside Oslo, Bergen and the other cities, Norway is <b>long, thin and sparsely populated</b>, and a serious problem in the fjords, the north or the mountains is a <b>transport problem before it is a treatment problem</b>. Air ambulance is a normal part of Norwegian healthcare because it has to be. Nothing about the medicine should worry you. The distance and the price should both be on your list.",
      insurance: true,
      insuranceNote: "Norway treats you and then bills you at the full rate, and outside the cities the harder problem is reaching care at all. Cover here is doing two jobs: absorbing a bill from an expensive country, and paying for the transport that a fjord or an arctic road makes necessary. Faye covers trip medical and evacuation.",
      careFirst: "If it looks serious, get to care first and settle the cost afterwards.",
      sections: [
        {
          h: "Residents are covered. You are billed",
          icon: "alert",
          key: { tag: "Full cost", text: "Norway's public health service is funded for its residents. A visitor from outside the EEA is charged the full cost of treatment, billed after care.", tone: "amber" },
          p: [
            "Norway's health service is <b>publicly funded and organised around residents</b>, in the way of most of Northern Europe, and the entitlement follows residence rather than presence. A visitor from <b>outside the EEA</b>, which includes every American, is <b>charged for treatment</b> at the full rate.",
            "The sequence is the reassuring part: you are <b>treated and then billed</b>, rather than assessed for ability to pay first. <b>If it looks serious, get to care first and settle the cost afterwards.</b> Norway is also an expensive country generally, and healthcare is not the exception to that."
          ]
        },
        {
          h: "Half the country is a long way from a hospital",
          icon: "plane",
          key: { tag: "Distance", text: "Outside the cities Norway is sparsely populated and hard to cross. Air ambulance is routine here because roads and fjords make it necessary.", tone: "amber" },
          p: [
            "This is the part that separates Norway from its Nordic neighbours. The country is <b>long, mountainous and cut by fjords</b>, and outside the main cities the population is thin. A road that looks short on a map can be a <b>ferry, a tunnel and two hours</b>. In Lofoten, Finnmark, the interior or on a hiking route, the nearest full hospital may be a long way off.",
            "Norway handles this with a well-run <b>air ambulance</b> service, because it has no alternative. For you that means the realistic serious scenario is not just a ward bill but a <b>transfer</b>, and the <b>evacuation limit</b> on your policy is the number that decides how it goes. In winter, with weather closing options, that is more true rather than less."
          ]
        },
        {
          h: "Why there are no prices on this page",
          icon: "tag",
          key: { tag: "Absence is not zero", text: "We have not sourced an official Norwegian price list for visitors that we would stand behind, so we have published none.", tone: "teal" },
          p: [
            "We would rather say this than pad the page. We have <b>not sourced an official Norwegian tariff for non-resident care</b> that we would put our name to, so no local price figure appears here. On a medical page a plausible-sounding number is not a small error, because it is something a person might act on while unwell.",
            "The structure is what to plan around: <b>you are charged the full cost</b>, <b>care is given first and billed after</b>, and <b>distance is a cost in its own right</b> once you leave the cities. Ask your insurer about the evacuation limit rather than about consultation fees, because that is the number Norway tests."
          ]
        },
        {
          h: "What this means for your money",
          icon: "cash",
          key: { tag: "Two different trips", text: "A city trip is a bill question. A fjord, arctic or hiking trip is a transport question, and those need different amounts of cover.", tone: "teal" },
          p: [
            "Norway is really two trips with two risk profiles. An <b>Oslo or Bergen</b> trip is a straightforward question of what an expensive country charges an uninsured visitor. A <b>fjords, Lofoten, Svalbard or hiking</b> trip adds a transport problem that money solves and nothing else does.",
            "Match the cover to the trip you are actually taking. And note that if you are heading to <b>Svalbard</b>, that is a further step again in remoteness and is worth checking your policy names specifically. For paying on the ground, see the <a href='/norway/cash-or-card'>Norway cash and cards guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is healthcare free in Norway for tourists?", a: "No. Norway's public health service is funded for residents, and a visitor from outside the EEA is charged the full cost of treatment. Care is given first and billed afterwards." },
        { q: "How much does a hospital cost in Norway?", a: "We have not published a figure, because we could not source an official Norwegian non-resident tariff we would stand behind. Norway is an expensive country generally and healthcare is not an exception, so plan on a real bill rather than a token one." },
        { q: "Is medical evacuation likely in Norway?", a: "More likely than in most of Europe, and that is about geography rather than danger. Outside the cities, fjords, mountains and long distances make air ambulance a routine part of Norwegian healthcare, so the evacuation limit on your policy matters here." },
        { q: "Will a Norwegian hospital treat me without insurance?", a: "Yes. You are treated and then billed. The question is not whether you get care but what the invoice looks like afterwards and who pays it." },
        { q: "Do I need travel insurance for Norway?", a: "Yes, and the reason shifts with the trip. For a city visit it is about the size of the bill. For the fjords, the arctic or a hiking trip it is about paying for the transport that distance makes necessary." }
      ],
      sources: {
        links: [
          { label: "US State Department: Norway country information, including health and medical care guidance for travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Norway.html", type: "gov" }
        ],
        judgment: "No price figures appear on this page because we did not source an official Norwegian non-resident tariff we would publish. The charging position for non-EEA visitors and the geography-driven reliance on air ambulance are structural rather than priced, and that is how we have written them. Norwegian regions administer care differently and costs vary, so confirm at the point of care. Checked August 2026."
      }
    }
  ]
};
