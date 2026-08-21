import { S } from './carrier-spine.js';

export default {
  slug: "ireland",
  iso2: "ie",
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
  rentalCommon: true,
  region: "Europe",
  signals: { cardFriendliness: 5, cashNeed: 1, taxRisk: 2 },
  hook: "About as cashless as travel gets: tap your card almost everywhere, carry a little euro cash as backup, decline dollar conversion, and mind two things: the VAT you can claim back on shopping and the car-rental insurance excess.",
  aliases: ["ireland", "republic of ireland", "eire", "dublin", "galway", "cork", "killarney", "ring of kerry", "cliffs of moher", "euro", "eur", "guinness", "wild atlantic way"],

  title: "Do I need cash in Ireland? Cash or card in 2026",
  description: "Barely any. Ireland is close to cashless, so tap almost everywhere, keep a little euro cash as backup, and decline dollar conversion. Checked 2026.",

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
      { n: "Budget", per: 55, cash: 0.2, room: 90 },
      { n: "Mid-range", per: 115, cash: 0.12, room: 170 },
      { n: "Comfort", per: 205, cash: 0.08, room: 320 }
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
  ],

  culture: {
    heading: "A few words of Irish go a long way",
    intro: "Everyone in Ireland speaks English, so nothing here is essential, but a few words of Irish (Gaeilge) and a story or two mark you as a guest rather than a tourist, and they open doors in a pub or a shop.",
    phrases: [
      { mean: "Hello", say: "DEE-ah gwit", word: "Dia duit" },
      { mean: "Please", say: "leh duh HULL", word: "Le do thoil" },
      { mean: "Thank you", say: "guh rev MAH AH-gut", word: "Go raibh maith agat" },
      { mean: "Cheers", say: "SLAWN-cheh", word: "Sláinte" },
      { mean: "Delicious", say: "BLAHS-tah", word: "Blasta" },
      { mean: "Beautiful", say: "guh HAW-lin", word: "Go hálainn" },
    ],
    tip: "Irish is the first official language and you will see it on every road sign, but English is spoken everywhere, so no pressure. <b>Sláinte</b> (to your health) is the one word every visitor should have ready for a toast.",
    stories: [
      { img: "/ireland-culture-1.jpg",
        alt: "WPA-style illustration of the Neolithic passage mound of Newgrange at dawn, a spiral-carved stone in front and a shaft of golden light at the entrance, green Boyne valley beyond",
        h: "Older than the pyramids",
        p: "Newgrange, the great mound in the Boyne valley, was built around 3,200 BC, older than Stonehenge and the pyramids of Giza. Once a year, at the winter solstice, the rising sun slips through a stone roof-box and lights the inner chamber. Mention that and you will impress a local.",
        note: "Good to know: it predates the pyramids by centuries" },
      { img: "/ireland-culture-2.jpg",
        alt: "WPA-style illustration of a tonsured Irish monk in a green robe illuminating a Gospel page with Celtic knotwork by candlelight, a round tower through the window",
        h: "The monks who kept the light on",
        p: "While much of Europe lost its books, Irish monks copied and illuminated them by hand, page after page, including the dazzling Book of Kells you can still see in Dublin. It is why Ireland is sometimes said to have kept learning alive. A point of quiet pride.",
        note: "Good to know: see the Book of Kells at Trinity College" },
      { img: "/ireland-culture-3.jpg",
        alt: "WPA-style illustration of a robed monk in a small leather boat under a single sail on a wild grey-green Atlantic at dawn, gazing west",
        h: "The saint who sailed west",
        p: "Legend says Saint Brendan the Navigator set out in a small leather boat and sailed far into the Atlantic, some say all the way to America, centuries before the Vikings. True or not, the Irish have always been a seafaring, wandering people, and they love the tale.",
        note: "Say it: Brendan the Navigator" },
    ],
    pride: "Ireland is a land of storytellers, from the old myths to Yeats, Joyce and Heaney, and the welcome is real: céad míle fáilte means a hundred thousand welcomes, and they mean it."
  },

  spokes: [
    {
      slug: "renting-a-car",
      glance: [
        { k: "Liability", v: "Included by law, unlimited" },
        { k: "The problem", v: "Card cover often excludes Ireland" },
        { k: "If you decline", v: "Hold of about 5,000 euros" },
        { k: "M50 toll", v: "Pay by 8pm the next day" }
      ],
      live: true,
      topic: "driving",
      title: "Renting a car in Ireland: the card insurance gap",
      description: "Ireland is where US credit-card rental cover most often does not apply. How to find what your card really does, and the Dublin toll you pay by 8pm.",
      h1: "Renting a car in Ireland, and the credit-card catch",
      lede: "Ireland is the country where the sentence people rely on, my card covers the rental, is least likely to be true. It is also the one where the answer depends on your specific card rather than on any general rule.",
      checked: "Jul 2026",
      checkedISO: "2026-07-31",
      answer: "Two things to get right. First, <b>liability is not your problem here</b>: Irish law requires third-party cover and it is <b>included in the rental price</b>, so unlike Costa Rica or Mexico there is no mandatory insurance ambushing you at the desk. Second, the <b>collision damage waiver is</b> the problem, because Ireland is the destination US card benefits <b>most often exclude</b>. Standard Visa and Mastercard rental cover has long excluded the Republic of Ireland, and most Amex cards exclude it too, though some issuers have quietly moved the other way. Decline the counter's waiver without written proof your card applies and you are exposed to a hold of around <b>5,000 euros</b> and the full value of an expensive car. Separately, Dublin's <b>M50</b> has no toll booth: pay online by <b>8pm the next day</b> or a 3.80 euro toll becomes a fine plus a rental admin fee.",
      carExcess: true,
      sections: [
        {
          h: "Why Ireland is the exception",
          icon: "alert",
          key: { tag: "Check the card, not the rule", text: "Ireland appears on more US card exclusion lists than almost anywhere. Standard Visa and Mastercard cover has excluded it for years, and most Amex cards exclude it, but individual issuers have started covering it. Only your own policy wording settles it.", tone: "amber" },
          p: [
            "For years the short version was simple: <b>standard Visa and Mastercard</b> rental collision cover excluded the <b>Republic of Ireland</b>, alongside Israel and Jamaica, and <b>most American Express</b> cards excluded it as well. The usual explanation offered is road conditions and claim frequency. Elite tiers were the exception, with some <b>World Elite Mastercard</b> products covering Ireland where the standard product did not.",
            "What has changed is that this is no longer a stable rule. Some US issuers have <b>removed the Ireland exclusion</b> and now issue letters confirming worldwide cover, while others have gone the other way and dropped rental benefits entirely. Meanwhile several travel-insurance rental add-ons still name Ireland as excluded. The result is that any page telling you confidently that your card does or does not cover Ireland is guessing, including the rental company's own summary.",
            "So the only reliable move is to <b>get it in writing from your issuer</b> for your exact card, dated close to your trip. Rental desks in Ireland routinely ask for a <b>letter of authorization</b> naming you and the card, and some want it issued within about <b>two weeks</b> of pickup. A phone call to the number on the back of the card usually produces one by email the same day. Ask specifically whether the <b>Republic of Ireland</b> is covered, whether <b>theft</b> is included as well as collision, and what the benefit caps out at."
          ]
        },
        {
          h: "What declining actually costs you",
          icon: "card",
          key: { fig: "5,000 euros", tag: "Typical hold if you decline", text: "Declining the counter waiver to rely on your card means a large authorization hold, and Irish cars are expensive to repair because of a 65% registration tax on new vehicles.", tone: "amber" },
          p: [
            "If you do decline the waiver, expect a hold in the region of <b>5,000 euros</b> on the card, and expect the company to insist the full rental is charged to that same card. Taking <b>any</b> part of their collision cover voids the card benefit, so it is genuinely one or the other.",
            "The exposure is larger than it looks because Irish cars cost more than their US equivalents, thanks to a <b>vehicle registration tax</b> of up to around <b>65%</b> on new vehicles. A card benefit capped at $25,000 to $50,000 of damage stretches less far here, and the excess on the rental company's own basic waiver is high to begin with.",
            "The counter's alternatives are <b>CDW</b> at roughly <b>15 to 30 euros a day</b> and <b>Super CDW</b>, which cuts the excess toward zero, at another <b>10 to 30 euros a day</b> on top. Note what even the paid waivers usually leave out: <b>tires, glass, windscreen, roof, undercarriage, mirrors and the interior</b>. That gap is why a standalone excess policy bought before you travel is often the cheaper and broader option, and it sidesteps the whole card-exclusion question."
          ]
        },
        {
          h: "The M50, the one toll that catches visitors",
          icon: "receipt",
          key: { fig: "8pm next day", tag: "The M50 payment deadline", text: "Dublin's M50 is barrier-free with no booth and no way to pay at the road. Miss the deadline and a small toll becomes a fine, plus your rental company's admin fee.", tone: "amber" },
          p: [
            "Most Irish tolls are ordinary barrier plazas on the M1, M4, M7 and M8, where you tap a card or drop coins and drive on. Keep a few euros in coins and they are a non-event. Northern Ireland has <b>no tolls at all</b>.",
            "The <b>M50</b>, the ring road you meet immediately on leaving Dublin Airport, is different. Between <b>Junction 6 and Junction 7</b> there is no booth and no barrier: a gantry photographs your plate at speed and nothing tells you it happened. You then have until <b>8pm the following day</b> to pay. Without an account the video rate is about <b>3.80 euros</b>, against roughly <b>2 euros</b> on a registered account, which is why quoted figures differ from source to source. Miss the deadline and a surcharge lands, then a fixed charge notice of <b>41 euros or more</b>, and the rental company adds its own <b>30 to 50 euros</b> for handling the notice.",
            "Rental company policies here vary more than anything else in this guide. Some fleets are pre-registered with <b>eFlow</b> and bill your card automatically after the rental, typically the toll plus about <b>1.23 euros</b> per crossing; others leave it entirely to you. So ask one question at the counter: <b>does this car have a toll tag, or do I pay the M50 myself?</b> If it is on you, note the registration number from the key tag and set a phone reminder. If you would rather control it, you can add the rental plate to your own eFlow account and pay the cheaper account rate with no rental markup."
          ]
        },
        {
          h: "What this means for your money",
          icon: "tag",
          key: { fig: "In writing", tag: "Ask your issuer before you go", text: "Settle the card question with your issuer in writing before you travel, decide the waiver on that basis, and handle the M50 deliberately rather than discovering it later.", tone: "teal" },
          p: [
            "Ireland rewards doing the boring thing early. Call your card issuer, ask about the <b>Republic of Ireland</b> specifically, and get the letter. If the answer is no, or if the caps and exclusions leave you uncomfortable, price a standalone excess policy against the counter's Super CDW rather than deciding at the desk after a transatlantic flight.",
            "Budget an <b>automatic transmission</b> deliberately too. Manual is the default in Ireland and automatics are a smaller, pricier part of the fleet, so they sell out and cost more, particularly in summer. If you are not confident shifting with your left hand on narrow roads, book the automatic early and treat the premium as part of the price.",
            "Your <b>US license is fine</b> for a tourist stay and no international permit is needed. For paying for fuel, tolls and parking once you are moving, see the <a href='/ireland/cash-or-card'>Ireland cash and cards guide</a>, and if your trip crosses into Belfast or the north, that is the UK, with its own rules and its own currency."
          ]
        }
      ],
      faqs: [
        { q: "Does my credit card cover a rental car in Ireland?", a: "You cannot assume it does, and Ireland is the destination most likely to be excluded. Standard Visa and Mastercard rental cover has excluded the Republic of Ireland for years and most Amex cards exclude it, though some issuers have recently removed the exclusion. Call your issuer, ask about the Republic of Ireland specifically, and get a dated letter of authorization, because the rental desk will often ask to see one." },
        { q: "Is car rental insurance mandatory in Ireland?", a: "Third-party liability is required by law and is already included in the rental price, so there is no mandatory insurance added at the counter the way there is in Costa Rica or Mexico. What the counter sells is the optional collision damage waiver, and that is where the decision and the cost sit." },
        { q: "What happens if I decline the collision damage waiver?", a: "Expect a hold of roughly 5,000 euros on your credit card, and the full rental must be charged to that same card. Accepting any part of the rental company's collision cover voids your card benefit, so it is one or the other. Irish cars are also expensive to repair, because new vehicles carry a registration tax of up to around 65%." },
        { q: "How do I pay the M50 toll in a rental car?", a: "The M50 is barrier-free, so there is no booth and no way to pay at the road. Ask at the counter whether the car has an eFlow toll tag. If it does, the toll plus a small per-crossing fee is billed to your card afterward. If it does not, pay online at eFlow.ie by 8pm the day after you drive through, using the registration number on the key tag. Miss it and you get a fine plus a rental admin fee of 30 to 50 euros." },
        { q: "Do I need an international driving permit for Ireland?", a: "No. A valid US driver's license is accepted for a tourist visit. What is worth arranging early is an automatic transmission, since manual is the default in Ireland and automatics are scarcer and more expensive, especially in summer." }
      ],
      sources: {
        links: [
          { label: "eFlow: the official M50 barrier-free toll operator, for paying a toll and the current rates", url: "https://www.eflow.ie/", type: "gov" },
          { label: "Transport Infrastructure Ireland: the national toll roads, operators and current toll schedules", url: "https://www.tii.ie/roads-tolling/tolling-information/", type: "gov" }
        ],
        judgment: "The stable facts are that third-party liability is legally required and included in Irish rental prices, and that the M50 is barrier-free with a next-day payment deadline. Credit-card coverage is deliberately not stated as a rule here, because it genuinely conflicts across sources: current comparison reporting still lists the Republic of Ireland as excluded from standard Visa and Mastercard rental cover and from most Amex products, while individual issuers have removed the exclusion and now confirm worldwide coverage in writing, and some rental agencies describe North American card cover as broadly withdrawn. All of those can be true at once because the answer is per-card, so we tell you to obtain your own issuer's wording rather than pick the tidiest version. On the M50 rate, quoted figures differ because there are two tiers: roughly 2 euros on a registered account and about 3.80 euros at the unregistered video rate, and Irish tolls are reviewed each January. Daily waiver prices, the 5,000 euro hold and the 30 to 50 euro admin fee are typical current figures from rental operators, not regulated amounts. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Apps", v: "FreeNow (Uber calls taxis too)" },
        { k: "Taxis", v: "Metered, fares set by the regulator" },
        { k: "From Dublin airport", v: "No rail: bus, taxi or app" },
        { k: "Tipping", v: "Round up a euro or two" }
      ],
      live: true,
      topic: "taxis",
      caution: "low",
      title: "Taxis in Ireland: FreeNow, and Dublin airport",
      description: "FreeNow leads in Ireland, and Uber calls licensed taxis. Fares are set by the regulator, Dublin airport has no rail link, and here is how much to tip.",
      h1: "Taxis in Ireland, and the FreeNow app",
      lede: "Irish taxis are metered, honest and set by a national regulator, so there is nothing to haggle over. Install FreeNow, know that Dublin airport has no train, and round up to tip. Here is how it works.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Install <b>FreeNow</b>, the app most used in Ireland, and <b>Uber</b> works too but <b>only dispatches licensed taxis</b> here (the private-car model is not allowed), with <b>Bolt</b> a third option. Taxis are <b>metered</b> and their fares are <b>set by the national regulator</b>, so they are honest with nothing to negotiate. From <b>Dublin airport</b>, there is <b>no rail link</b>, so it is a bus, a taxi or an app. You <b>tip</b> by rounding up a euro or two.",
      sections: [
        {
          h: "Which app to install",
          icon: "phoneok",
          key: { fig: "FreeNow", tag: "Uber calls taxis", text: "FreeNow is the app most used in Ireland. Uber works but only dispatches licensed taxis, since the private-car model is not allowed. Bolt is a third option.", tone: "teal" },
          p: [
            "<b>FreeNow</b> is the app most used in Ireland and connects you to licensed taxis, so install it first. <b>Uber</b> operates here too, but it <b>only dispatches licensed taxis</b>, since the cheap private-car model is <b>not allowed</b> in Ireland, and <b>Bolt</b> is a third choice.",
            "The apps show the fare estimate, the driver and the plate, and let you pay by card. Coverage is strong in <b>Dublin</b> and good in <b>Cork, Galway</b> and other cities, thinner in rural areas where you may phone a local company."
          ]
        },
        {
          h: "From Dublin airport",
          icon: "plane",
          key: { fig: "Buses", tag: "No airport rail", text: "Dublin airport has no train or tram. Airport coaches run into the city, and a metered taxi is about 25 to 30 euros, or use an app.", tone: "teal" },
          p: [
            "The thing to know is that <b>Dublin airport (DUB) has no rail or tram link</b>. Instead, frequent <b>airport coaches</b> (such as the Airlink, Aircoach and Dublin Express) run into the city center cheaply and are easy with luggage.",
            "A metered <b>taxi</b> into central Dublin runs roughly <b>25 to 30 euros</b> from the rank outside arrivals, and an <b>app</b> works the same way. For a group or late arrival, the taxi or app is the simplest door-to-door option."
          ]
        },
        {
          h: "Metered, and set by the regulator",
          icon: "wheel",
          key: { fig: "Metered", tag: "Regulated fares", text: "Taxi fares are set by the National Transport Authority, so the meter is honest and standard nationwide. Cards are widely accepted.", tone: "teal" },
          p: [
            "Irish taxi fares are <b>set by the National Transport Authority</b>, a national maximum fare, so the <b>meter is honest</b> and consistent around the country, with legitimate higher rates at night, on Sundays and on public holidays. There is <b>nothing to negotiate</b>.",
            "Most taxis take <b>cards</b>, and apps let you pay in-app, though it is worth a quick check if you plan to pay by card in a street-hailed cab. Keep a little cash as a backup in rural areas."
          ]
        },
        {
          h: "Fares, paying and tipping",
          icon: "euro",
          key: { fig: "Round up", tag: "A euro or two", text: "Tip by rounding up the fare a euro or two, or roughly 10% on a longer trip. There is no strict expectation.", tone: "teal" },
          p: [
            "Fares are metered and regulated. To <b>tip</b>, <b>round up</b> the fare by a euro or two, or roughly 10% on a longer journey, which is a common courtesy rather than a strict expectation.",
            "For more, see <a href='/ireland/tipping'>tipping in Ireland</a>, <a href='/ireland/cash-or-card'>cash or card in Ireland</a>, and the <a href='/ireland'>Ireland money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Uber in Ireland?", a: "Yes, but in Ireland Uber only dispatches licensed taxis, since the cheap private-car model is not allowed. FreeNow is the app most used, and Bolt also operates. All simply call a metered, regulated taxi." },
        { q: "How do I get from Dublin airport to the city?", a: "There is no rail or tram link. Frequent airport coaches (Airlink, Aircoach, Dublin Express) run into the city cheaply, a metered taxi is about 25 to 30 euros, and an app works the same way." },
        { q: "Are Irish taxis expensive?", a: "Fares are set by the National Transport Authority, so they are standard and honest, with higher rates at night, on Sundays and on holidays. Apps show the price before you book." },
        { q: "Do you tip taxi drivers in Ireland?", a: "Lightly: round up the fare by a euro or two, or roughly 10% on a longer trip. It is a common courtesy rather than a strict expectation." }
      ],
      sources: {
        links: [
          { label: "Transport for Ireland (National Transport Authority): official taxi fare information", url: "https://www.transportforireland.ie", type: "gov" },
          { label: "US State Department: Ireland country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Ireland.html", type: "gov" }
        ],
        judgment: "Irish taxi fares are set by the national regulator, FreeNow leads the apps, and Dublin airport has no rail link. Fares and app coverage shift over time, so this is our practical read. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Round up, or 10 to 15%" },
        { k: "Restaurants", v: "10 to 15% for good service" },
        { k: "Pubs", v: "No tip at the bar" },
        { k: "Check the bill", v: "Groups may see a service charge" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Ireland: how much and when 2026",
      description: "10 to 15% at restaurants, no tip at the pub bar, a service charge on group bills, and the euro versus pound border. Checked 2026.",
      h1: "Tipping in Ireland",
      lede: "Ireland tips more than most of Europe but less than the US: 10 to 15% at a restaurant, and nothing at the pub bar. Here is what you actually owe, and what to check on the bill.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Ireland tips <b>more than most of Europe but less than the US</b>. At a <b>sit-down restaurant</b>, <b>10 to 15%</b> for good service is normal, or simply round up. At a <b>pub</b>, there is <b>no tipping</b> when you order at the bar. Some restaurants add a <b>service charge</b>, especially for <b>larger groups</b>, so check the bill before adding more. Round up for <b>taxis</b>. Tips can go on the <b>card</b> or in cash, in euros (or pounds in Northern Ireland).",
      sections: [
        {
          h: "Restaurants: 10 to 15%",
          icon: "euro",
          key: { fig: "10-15%", tag: "For good service", text: "At a sit-down restaurant, 10 to 15% for good service is normal, or just round up. More than most of Europe, less than the US.", tone: "teal" },
          p: [
            "At a <b>sit-down restaurant</b>, <b>10 to 15%</b> for good service is the norm, or simply <b>rounding up</b> for something casual. It is <b>more than most of Europe</b> (where a round-up is enough) but <b>less than the US</b> 18 to 20%.",
            "For a <b>cafe or counter service</b>, tipping is optional; the tip jar is a nice gesture, not expected. Round up for <b>taxis</b>, and leave a euro or two a bag for a porter."
          ]
        },
        {
          h: "Pubs, and the service charge",
          icon: "receipt",
          key: { fig: "No pub tip", tag: "Check for a group charge", text: "No tipping at a pub when you order at the bar. Some restaurants add a service charge, especially for larger groups, so check the bill.", tone: "teal" },
          p: [
            "At a <b>pub</b>, when you <b>order and pay at the bar</b>, there is <b>no tipping</b>. For table service in a gastropub or restaurant, the restaurant norms above apply.",
            "Some restaurants add a <b>service charge</b>, especially for <b>larger groups</b> (often <b>10 to 12.5%</b>). <b>Check the bill</b>: if a service charge is already there, you do not need to tip on top."
          ]
        },
        {
          h: "Cash or card, and the border",
          icon: "cash",
          key: { fig: "Euros", tag: "Pounds in the North", text: "Tips can go on the card or in cash, in euros. In Northern Ireland it is pounds, since that is part of the UK.", tone: "teal" },
          p: [
            "Tips can go on the <b>card</b> or in <b>cash</b>, in <b>euros</b> in the Republic. Remember the border: <b>Northern Ireland is part of the UK</b>, so there it is <b>pounds</b>, and UK tipping norms apply. For the wider picture, see <a href='/ireland/cash-or-card'>cash or card in Ireland</a> and the <a href='/ireland'>Ireland money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Ireland?", a: "Yes, more than most of Europe but less than the US. At a sit-down restaurant, 10 to 15% for good service is normal, or just round up. There is no tipping at a pub when you order at the bar." },
        { q: "How much do you tip at an Irish restaurant?", a: "About 10 to 15% for good service, or round up for something casual. Check the bill first: some restaurants add a service charge, especially for larger groups, and then you need not tip on top." },
        { q: "Do you tip in Irish pubs?", a: "Not when you order and pay at the bar. For table service in a gastropub or restaurant, normal restaurant tipping applies. You can offer to buy the bartender a drink, but it is not expected." },
        { q: "Do you tip in euros or pounds in Ireland?", a: "Euros in the Republic of Ireland. In Northern Ireland, which is part of the UK, it is pounds, and UK tipping norms apply. Tips can go on the card or in cash." }
      ],
      sources: {
        links: [
          { label: "US State Department: Ireland country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Ireland.html", type: "gov" }
        ],
        judgment: "Irish tipping sits above most of Europe and below the US, and the group service charge is real but not universal. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Euro (EUR) in the Republic" },
        { k: "Cards", v: "Card-first, contactless everywhere" },
        { k: "The border", v: "Northern Ireland uses pounds" },
        { k: "On a card", v: "Choose euros, not dollars" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Ireland? Barely any now 2026",
      description: "The Republic of Ireland is card-first and contactless is everywhere. Carry a little euro cash for rural pubs, and mind that the North uses pounds.",
      h1: "Do I need cash in Ireland, or can I use cards?",
      lede: "Short answer: a card for almost everything, a little cash for country pubs. The Republic of Ireland is firmly card-first. The one thing to watch is the border: cross into Northern Ireland and the currency changes to pounds.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Cards, almost entirely. The <b>Republic of Ireland</b> is <b>card-first</b>: <b>contactless</b> is everywhere, and Apple Pay and Google Pay are widely taken, so you need <b>little cash</b>, mainly for <b>rural pubs</b>, small shops and the odd market. The currency is the <b>euro</b>. The one catch is the <b>border</b>: <b>Northern Ireland is part of the UK and uses pounds sterling</b>, not euros, so if you cross over you switch currency. On any card or ATM, choose <b>euros, not dollars</b>.",
      sections: [
        {
          h: "Card-first across the Republic",
          icon: "phoneok",
          key: { fig: "Tap", tag: "Contactless everywhere", text: "The Republic is card-first, with contactless and Apple Pay and Google Pay taken almost everywhere. Carry a little euro cash for country pubs and small shops.", tone: "teal" },
          p: [
            "The <b>Republic of Ireland</b> is firmly <b>card-first</b>. <b>Contactless</b> is near-universal across shops, cafes and transport, and <b>Apple Pay and Google Pay</b> are widely accepted. <b>Visa and Mastercard</b> work almost everywhere; Amex is less consistent.",
            "Keep <b>a little euro cash</b> for the corners that stay cash-friendly: <b>rural pubs</b>, small village shops, farmers markets and the occasional small vendor. In Dublin and the cities you will barely touch it."
          ]
        },
        {
          h: "Mind the border: euros versus pounds",
          icon: "coins",
          key: { fig: "NI uses pounds", tag: "Two currencies", text: "The Republic uses euros; Northern Ireland is part of the UK and uses pounds sterling. If you cross the border, your currency changes.", tone: "amber" },
          p: [
            "The one thing that catches visitors out on the island of Ireland is the <b>border</b>. The <b>Republic of Ireland uses the euro</b>, but <b>Northern Ireland is part of the United Kingdom and uses pounds sterling</b>. There is no hard border and you can cross without stopping, but your <b>currency changes</b>, so plan for both if your trip spans it.",
            "Cards work on both sides regardless, which smooths things over, but any <b>cash</b> you carry needs to match the side you are on: euros in the Republic, pounds in the North."
          ]
        },
        {
          h: "Choose euros, not dollars",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose euros", text: "When a terminal or ATM offers dollars or euros, pick euros. Dollars trigger dynamic currency conversion at a rate about 3 to 8% worse than your bank's.", tone: "amber" },
          p: [
            "When a card terminal or ATM asks whether to charge in <b>dollars or euros, always choose euros</b> (or pounds in the North). Dollars trigger dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. Decline it every time.",
            "For the little cash you need, use an ATM attached to a <b>real bank</b> (such as AIB or Bank of Ireland) rather than a standalone kiosk. For the wider picture, see the <a href='/ireland'>Ireland money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Ireland?", a: "Barely. The Republic of Ireland is card-first, and contactless works almost everywhere. Carry a little euro cash for rural pubs, small village shops and markets, but a card covers most spending." },
        { q: "Does Ireland use the euro?", a: "The Republic of Ireland uses the euro. Northern Ireland, which is part of the United Kingdom, uses pounds sterling. If your trip crosses the border, you switch currency, though cards work on both sides." },
        { q: "Should I pay in euros or dollars in Ireland?", a: "Always euros in the Republic (or pounds in Northern Ireland). If a card machine or ATM offers dollars, decline: that dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
        { q: "Do I need different money for Northern Ireland?", a: "Yes for cash. Northern Ireland is part of the UK and uses pounds sterling, while the Republic uses euros. Cards work on both sides, so the simplest approach is to rely on a card and carry a little of whichever currency matches where you are." }
      ],
      sources: {
        links: [
          { label: "European Central Bank: the official euro reference exchange rates", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html", type: "gov" },
          { label: "US State Department: Ireland country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Ireland.html", type: "gov" }
        ],
        judgment: "The Republic is strongly card-first, and the euro-versus-pound border point is a real, fixed distinction, not a rate quirk. The euro rate moves, and the firm rule is to decline dollar conversion. Checked July 2026."
      }
    },
    {
      slug: "bringing-your-pet",
      glance: [
        { k: "Process", v: "Shared EU entry" },
        { k: "Need", v: "ISO chip, rabies, EU health cert" },
        { k: "Dogs also need", v: "A tapeworm treatment before arrival" },
        { k: "Coming home", v: "Simple CDC path" }
      ],
      live: true,
      topic: "pets",
      insurance: true,
      title: "Bringing a dog or cat to Ireland: tapeworm rule",
      description: "Ireland runs on the shared EU health-certificate process, no quarantine and no titer, plus one extra step: a timed tapeworm treatment for dogs.",
      h1: "Bringing your dog or cat to Ireland.",
      lede: "Ireland is a common EU destination for US pet owners, and it runs on the single EU pet-entry process: microchip, rabies in the right order, and an EU health certificate on a 10-day clock. No quarantine, no rabies titer. Ireland adds exactly one thing the big EU countries do not: a timed tapeworm treatment for dogs. Here is what that means, and the local parts worth knowing.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Ireland uses the <b>shared EU pet-entry process</b>, so there is no separate Irish permit, no quarantine, and no rabies titer for a pet coming straight from the US. Your pet needs an <b>ISO microchip, a rabies vaccination given after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS</b>, with entry within <b>10 days</b> of endorsement. Ireland's one addition: <b>dogs need an approved tapeworm treatment given by a vet 24 to 120 hours before arrival</b>, recorded on the certificate. Cats do not. The full shared process is on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Coming home to the US is the easy part.",
      sections: [
        {
          h: "Ireland runs on the EU process",
          icon: "health",
          key: { fig: "10 days", tag: "No titer, no quarantine", text: "The standard EU move, with no rabies titer or quarantine for a pet coming straight from the US: an ISO microchip first, a rabies shot after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS.", tone: "teal" },
          p: [
            "There is no Ireland-only pet permit and no national quarantine. Bringing a dog or cat into Ireland from the US is the standard EU move: an ISO microchip first, a rabies vaccination after the chip, then an EU Animal Health Certificate completed by a USDA-accredited vet and endorsed by APHIS, with the pet arriving within 10 days of endorsement. A first rabies shot adds a 21-day wait before travel.",
            "Because the core process is identical across all 27 member countries, we do not repeat it per country. The full sequence, the microchip-before-rabies trap, the 10-day clock, and the current APHIS endorsement fees all live on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Read that first, then come back for the Ireland-specific step below."
          ]
        },
        {
          h: "The Ireland-specific part: the dog tapeworm rule",
          icon: "paw",
          key: { tag: "Dogs need a tapeworm dose", text: "Ireland is one of a short list of rabies-free destinations (with Finland, Malta and Norway) that add a dog tapeworm rule. A vet must give your dog an approved tapeworm treatment 24 to 120 hours before you arrive, recorded on the certificate.", tone: "amber" },
          p: [
            "Ireland is one of a short list of rabies-free EU destinations (with Finland, Malta, and non-EU Norway) that add a dog tapeworm treatment. A vet must give your <b>dog</b> an approved treatment against echinococcus tapeworm and record it on the certificate <b>24 to 120 hours before the dog arrives in Ireland</b>, that is between one and five days out. This is a timing rule as much as a medical one: the treatment has to fall inside that window, so it usually happens at a final vet visit right before travel, and the exact time and date go on the certificate.",
            "Two things worth stressing. First, this applies to <b>dogs only</b>: cats coming to Ireland do not need it. Second, get the timing wrong and the certificate is not valid for Ireland, which can mean turning around at the border, so build the final vet visit into your travel plan deliberately. After you settle in, Ireland also requires dogs to be licensed, which is a simple local step handled once you have an address."
          ]
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
          key: { fig: "Easy", tag: "The return trip", text: "A dog flying home from Ireland is on the simplest CDC path: usually a CDC Dog Import Form receipt, a microchip, and a minimum age of 6 months.", tone: "teal" },
          p: [
            "Good news for the return trip: a dog flying home to the US from Ireland is on the simplest CDC path, typically a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement.",
            "For the wider picture, including how Ireland compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."
          ]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Finland, Malta and Ireland",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-finland-malta-ireland-including-northern",
        note: "The US-side steps for Ireland, including the dog tapeworm treatment and its timing window. Ireland applies the shared EU process plus this one addition, and the destination's own authorities are the final word on the day."
      },
      faqs: [
        { q: "What is the extra step for bringing a dog to Ireland?", a: "A tapeworm treatment. On top of the standard EU process (microchip, rabies in order, EU health certificate, 10-day window), Ireland requires a vet to give your dog an approved echinococcus tapeworm treatment and record it on the certificate 24 to 120 hours (one to five days) before the dog arrives. It applies to dogs only, not cats, and the timing must fall inside that window or the certificate is not valid for Ireland." },
        { q: "Does my pet have to go into quarantine in Ireland?", a: "No. Ireland applies the shared EU pet-entry process, which has no quarantine and no rabies titer for a pet coming straight from the US. The only Ireland-specific addition is the dog tapeworm treatment in the 24-to-120-hour window before arrival. See our EU pet health certificate page for the full shared process." },
        { q: "Do I need to quarantine my pet coming back to the US from Ireland?", a: "No. A dog returning to the US from Ireland is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details." }
      ],
      sources: {
        links: [
          { label: "True Trip Costs: the EU pet health certificate, the shared microchip, rabies and certificate process for all EU countries including Ireland", url: "/eu-pet-health-certificate", type: "internal" },
          { label: "USDA APHIS: pet travel from the United States to Finland, Malta and Ireland, including the dog tapeworm treatment and its timing", url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-finland-malta-ireland-including-northern", type: "gov" },
          { label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, for the return leg", url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html", type: "gov" }
        ],
        judgment: "Ireland applies the shared EU pet-entry framework plus a dog tapeworm treatment, set by the EU and administered on the US side by APHIS, not by us. The process is stable in substance, though the EU certificate format changes on 1 October 2026, which we cover on the EU pet health certificate page. The tapeworm timing is the part to get right, so we point you to the official pages and dated this July 2026."
      }
    },
    {
      slug: "visa",
      glance: [
        { k: "Visa", v: "None for US citizens, up to 90 days" },
        { k: "ETIAS", v: "Does not apply, Ireland is not Schengen" },
        { k: "ETA", v: "Only for Northern Ireland (the UK)" },
        { k: "Need", v: "A valid passport, nothing to apply for" }
      ],
      live: true,
      topic: "visas",
      title: "Do US citizens need a visa or ETIAS for Ireland?",
      description: "No visa and no ETIAS for Ireland, which is not in the Schengen Area. The catch is Northern Ireland, part of the UK, where the UK ETA applies instead.",
      h1: "Do US citizens need a visa or ETIAS for Ireland?",
      lede: "Short answer: no visa, and no ETIAS. Ireland sits outside the Schengen Area, so Europe's coming authorization does not touch it. The one wrinkle is Northern Ireland, which is a different country. Here is what actually applies.",
      checked: "Jul 2026",
      checkedISO: "2026-07-31",
      answer: "US citizens need <b>no visa</b> for Ireland for tourism or business, up to <b>90 days</b>, with nothing to apply for in advance. And <b>ETIAS does not apply</b>: Ireland is an EU member but <b>opted out of the Schengen Area</b>, so Europe's coming travel authorization will not cover it. The one thing to know: <b>Northern Ireland is part of the UK</b>, so visiting Belfast or the north needs the <b>UK ETA</b>, which is separate. For the Republic, just bring a <b>valid passport</b>.",
      official: {
        label: "Irish Immigration Service: coming to visit Ireland",
        url: "https://www.irishimmigration.ie",
        note: "Ireland's official immigration site. There is nothing to apply for as a US tourist: it confirms visa-free entry for short stays and lists which nationalities do need a visa. Ireland runs its own immigration system, separate from both the Schengen Area and the UK."
      },
      expediter: false,
      sections: [
        {
          h: "No visa, and no ETIAS",
          icon: "passport",
          key: { fig: "90 days", tag: "Not in Schengen", text: "US citizens enter Ireland visa-free for up to 90 days with nothing to apply for. ETIAS does not apply, because Ireland opted out of the Schengen Area.", tone: "teal" },
          p: [
            "US passport holders enter Ireland <b>visa-free</b> for tourism or business, up to <b>90 days</b>, stamped in on arrival with <b>nothing to apply for</b> and no fee. Ireland is an <b>EU member</b> but it <b>opted out of the Schengen Area</b> and runs its own immigration system.",
            "That is why <b>ETIAS</b>, the EU travel authorization for Schengen countries, <b>will not apply to Ireland</b>. ETIAS is <b>not running and has no launch date</b>: the EU removed its late-2026 target in July 2026 and will announce a real date several months ahead. Whenever it does launch, you would need it for the Schengen portion of a trip, but never for Ireland itself."
          ]
        },
        {
          h: "Northern Ireland is the UK, and needs the UK ETA",
          icon: "alert",
          key: { tag: "The one real wrinkle", text: "The island holds two countries. The Republic needs nothing; Northern Ireland is part of the UK, so Belfast and the north need the UK ETA, separate and paid.", tone: "amber" },
          p: [
            "Here is the wrinkle that trips people up. The island of Ireland is <b>two countries</b>: the <b>Republic of Ireland</b> (independent, EU) and <b>Northern Ireland</b> (part of the <b>UK</b>). Since 2025, US citizens need a <b>UK Electronic Travel Authorization (ETA)</b> to visit the north, Belfast, the Causeway Coast and the like, which is <b>separate</b> from anything Irish and costs a small fee. Our <a href=\"/united-kingdom\">UK guide</a> covers it.",
            "There is <b>no checkpoint</b> on the land border, so you can drive Dublin to Belfast without stopping, but the UK ETA is still the legal requirement for the northern leg."
          ]
        },
        {
          h: "A useful quirk: Ireland resets your Schengen clock",
          icon: "calendar",
          key: { tag: "Extra time in Europe", text: "Time in Ireland does not count against the Schengen 90/180 limit, so it is a handy add-on if you have used up, or want to save, your Schengen days.", tone: "teal" },
          p: [
            "Because Ireland is outside Schengen, <b>time spent there does not count</b> toward the Schengen <b>90 days in 180</b>. That makes Ireland a genuinely useful stop on a longer European trip: you can spend your 90 Schengen days and <b>separately</b> spend up to 90 in Ireland, or start in Ireland and enter Schengen with a full allowance.",
            "Your passport needs to be <b>valid for your stay</b> with a blank page; Ireland does not require the six-month buffer some countries do. Immigration may still ask for a <b>return ticket</b>, funds and where you are staying."
          ]
        },
        {
          h: "A couple of notes",
          icon: "tag",
          key: { tag: "Tourism only", text: "Working needs an employment permit and a long-stay visa. Staying past 90 days means registering with Irish immigration. Then see the money guide.", tone: "amber" },
          p: [
            "Visa-free entry is for <b>tourism and business</b>, not working, which needs an <b>employment permit</b> and a long-stay visa arranged first. To stay <b>beyond 90 days</b> you register with Irish immigration before your time runs out.",
            "For how money works once you are there, the euro, cards, tipping and the rest, see the <a href=\"/ireland\">Ireland money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa for Ireland?", a: "No. US citizens visit Ireland visa-free for tourism or business for up to 90 days, stamped in on arrival with nothing to apply for and no fee. Be ready to show a return ticket, funds and accommodation, since visa-free entry does not guarantee admission. Working or longer stays need the right permit and visa." },
        { q: "Does ETIAS apply to Ireland?", a: "No. Ireland is an EU member but opted out of the Schengen Area, so ETIAS does not and will not apply to Ireland, even once it launches for Schengen countries. ETIAS is not running today and has no launch date, after the EU removed its late-2026 target in July 2026. You would need ETIAS only for the Schengen part of a trip, never for Ireland itself." },
        { q: "Do I need a UK ETA to visit Northern Ireland?", a: "Yes. Northern Ireland is part of the UK, so since 2025 US citizens need a UK Electronic Travel Authorization to visit Belfast or the north, separate from anything for the Republic of Ireland. There is no checkpoint on the land border, but the UK ETA is still legally required for the northern leg." },
        { q: "Does time in Ireland count toward the Schengen 90-day limit?", a: "No. Because Ireland is outside the Schengen Area, days spent there do not count against your Schengen 90-days-in-180 allowance. Ireland is a useful way to extend a European trip: you can spend your Schengen days and, separately, up to 90 days in Ireland." }
      ],
      sources: {
        links: [
          { label: "Irish Immigration Service (Department of Justice): visa and entry requirements for visiting Ireland", url: "https://www.irishimmigration.ie", type: "gov" },
          { label: "US Department of State: the country information pages, the official router for entry requirements by destination", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html", type: "gov" }
        ],
        judgment: "Ireland's visa-free entry for US citizens is stable, and its position outside Schengen means ETIAS will not apply to it. On ETIAS timing we deliberately quote no date: the EU removed its late-2026 target from its official ETIAS pages in July 2026, and those pages now say only that a start date will be announced several months in advance. Some other EU pages still carried the old last-quarter-of-2026 wording when we checked, which is why we rely on the official ETIAS pages rather than secondary EU summaries. The UK ETA requirement for Northern Ireland took effect in 2025 and is separate; confirm its details in our UK guide before a cross-border trip. Checked July 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Strong in the cities and towns" },
        { k: "Carrier roaming", v: "$10 to $12 a day" },
        { k: "Cheapest", v: "A travel eSIM, a few $ per GB" },
        { k: "Crossing the border", v: "Northern Ireland is the UK" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "eSIM for Ireland: check it covers Northern Ireland too",
      description: "Irish coverage is strong in the cities and thinner in the rural west. The trap is the border: Northern Ireland is the UK, and many EU plans stop there.",
      h1: "Staying connected in Ireland.",
      lede: "Ireland covers its cities and towns well and its far west less so. The thing most likely to catch you out is not a mountain, it is an invisible border: drive north from Donegal and your plan may quietly stop working.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>strong</b> in Dublin, Cork, Galway and the towns, and thinner across the rural west, <b>Connemara</b>, the Beara and Dingle peninsulas, parts of <b>Donegal</b> and the Wicklow uplands. Your US carrier charges about <b>${S.dayPass}</b> to roam (<b>AT&amp;T and Verizon</b> day passes), though <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, while <b>Verizon has ${S.verizonNoCap}</b> and keeps billing daily. <b>T-Mobile</b>'s mid and upper tiers include <b>${S.tmoRange}</b> of high-speed data abroad before slowing to <b>${S.throttle}</b>. A <b>Nomad eSIM</b> is a few dollars per gigabyte and works from landing. A <b>local prepaid SIM</b> is also cheap here and, because this is an <b>EU</b> country, it carries <b>Roam Like At Home</b> across the rest of the union at no surcharge, which is worth pricing if the trip continues into other EU countries. The Ireland-specific check: <b>Northern Ireland is part of the UK</b>, which since Brexit sits outside the EU roaming zone, so an Ireland-only or EU-only plan may not cover Belfast, the Causeway or the Mournes. If your trip crosses the border, and on this island it is easy to cross without noticing, <b>make sure the plan names both</b>. The US carrier day passes cover both. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "The border is the trap",
          icon: "alert",
          key: { fig: "The border", tag: "Check both", text: "Northern Ireland is the UK and outside EU roaming. An Ireland-only or EU-only plan may stop at the border, which is unmarked.", tone: "amber" },
          p: [
            `There is no checkpoint and often no sign, so the first indication you have left the Republic can be a roaming notification. <b>Northern Ireland is part of the United Kingdom</b>, and since Brexit the UK is <b>outside the EU roaming zone</b>, so an Irish prepaid SIM or a travel eSIM sold as covering Ireland or the EU may not work in <b>Belfast, Derry, the Causeway Coast or the Mournes</b>, or may work at a surcharge.`,
            `Anyone driving the Wild Atlantic Way into Donegal, doing Dublin and Belfast, or looping the Causeway should <b>check the covered-country list for both jurisdictions by name</b> before buying. Plans covering Ireland and the UK together are common and usually cost barely more. The <b>AT&amp;T and Verizon</b> day passes cover both, which is one case where the expensive default is also the simple one.`
          ]
        },
        {
          h: "A cost question otherwise",
          icon: "roamfee",
          key: { fig: `${S.dayPassFig}`, tag: "Roaming default", text: "A US carrier day pass is the expensive default. AT&T caps it at 10 daily fees a bill period, Verizon does not cap at all, and T-Mobile's mid and upper tiers include 5GB to 30GB abroad.", tone: "teal" },
          p: [
            `Otherwise this is money. Roaming is about <b>${S.dayPass}</b>, so <b>${S.week}</b> a week, with <b>AT&amp;T</b> capping at <b>${S.capFees}</b>, about <b>${S.capAmount}</b>, and <b>Verizon</b> having <b>${S.verizonNoCap}</b>. <b>T-Mobile</b>'s tiers include roughly <b>${S.tmoLow}</b> on Experience More, Magenta MAX and Go5G Plus, <b>${S.tmoMid}</b> on Experience Beyond and Go5G Next and <b>${S.tmoHigh}</b> on Better Value.`,
            `A <b>Nomad eSIM</b> at a few dollars per gigabyte is much cheaper than the pass. An Irish prepaid SIM from <b>Three</b>, <b>Vodafone</b> or <b>Eir</b> is inexpensive and carries EU roaming, and again, check what it does across the border. Do not roam with <b>no plan</b>, at about <b>${S.ppu}</b>.`
          ]
        },
        {
          h: "The rural west, and the driving",
          icon: "wheel",
          key: { fig: "The west", tag: "Where signal thins", text: "Connemara, the Beara and Dingle peninsulas and parts of Donegal thin out, on narrow roads where a map matters.", tone: "teal" },
          p: [
            `Coverage thins where the road narrows: <b>Connemara</b>, the <b>Beara</b> and <b>Dingle</b> peninsulas, the Sky Road and the boreens, parts of <b>Donegal</b> and the Wicklow uplands, and the ferry crossings to the Aran Islands and Skellig. None of it is dramatic by Namibian or Icelandic standards, and it lands at inconvenient moments, because these are exactly the roads where you are navigating turn by turn.`,
            `So <b>download offline maps</b> for a west-coast driving day, and save your B&amp;B address and number rather than trusting a booking email to load. In Dublin, Cork and Galway you will have fast 4G and 5G with nothing to think about. This guide is written for US travelers departing the US. For more, see <a href='/ireland/cash-or-card'>cash or card in Ireland</a>, <a href='/ireland/taxis-and-apps'>taxis and apps in Ireland</a>, and the <a href='/ireland'>Ireland money guide</a>.`
          ]
        }
      ],
      faqs: [
        { q: `Will my Irish SIM or eSIM work in Northern Ireland?`, a: `Not necessarily. Northern Ireland is part of the UK, which sits outside the EU roaming zone since Brexit, so an Ireland-only or EU-only plan may stop working at the border or charge a surcharge. The border is unmarked and easy to cross without noticing. Check that the plan names both jurisdictions. The AT&T and Verizon day passes cover both.` },
        { q: `How much does it cost to use my US phone in Ireland?`, a: `About ${S.dayPass} on an AT&T or Verizon day pass, so roughly ${S.week} a week. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad before slowing to ${S.throttle}.` },
        { q: `Will I have signal in Connemara and on the Dingle peninsula?`, a: `Patchily. The rural west, Connemara, the Beara and Dingle peninsulas, parts of Donegal and the Wicklow uplands all thin out, and it lands exactly where you are navigating narrow roads turn by turn. Download offline maps and save your accommodation details before you set off.` },
        { q: `Do I need an eSIM for Ireland?`, a: `It is the cheapest way for most US travelers to get real data, at a few dollars per gigabyte against about $10 to $12 a day for a carrier pass. If your trip includes Northern Ireland, buy one that covers both Ireland and the UK, which usually costs barely more.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "US State Department: Ireland country information and local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Ireland.html", type: "gov" },
          { label: "European Commission: how EU roaming works and which countries are covered", url: "https://europa.eu/youreurope/citizens/consumers/telecoms-internet/mobile-roaming-costs/index_en.htm", type: "official" }
        ],
        judgment: "Checked Aug 2026. The border point is the most useful thing on this page and it costs us a click: the honest advice is to check a country list for two jurisdictions before buying anything, including from us. It matters more here than at other borders precisely because this one is unmarked, so a traveler can be roaming on different terms without having noticed a change. The western coverage read is the desk's from operator footprints and traveler accounts."
      }
    },
    {
      slug: "medical-costs",
      exposureCategory: "payInFull",
      exposureQuote: "A visitor pays the non-EU emergency department rate and, if admitted, the full cost of the bed plus the consultant.",
      glance: [
        { k: "The 100 euro charge", v: "Is not the one you pay" },
        { k: "Non-EU rate", v: "About 447 euro at one Dublin ED" },
        { k: "If admitted", v: "The full cost of the bed" },
        { k: "Real risk", v: "Assuming it is free" }
      ],
      live: true,
      topic: "health",
      title: "Getting sick in Ireland: the 100 euro that is not yours",
      description: "Ireland abolished public inpatient charges in 2023, but not for you. A visitor outside the entitled groups pays the full cost of the bed, plus the consultant.",
      h1: "What does getting sick in Ireland cost a US visitor?",
      lede: "Ireland is where a true fact about the health service becomes a false assumption about your bill. Public inpatient charges really were abolished. They were abolished for people entitled to public health services, and a US visitor is not one of them.",
      checked: "Aug 2026",
      checkedISO: "2026-08-20",
      answer: "The number everyone quotes is the <b>100 euro</b> emergency department charge for attending without a GP referral. That is the charge for someone <b>entitled to public health services</b>. A US visitor generally is not, and pays the <b>non-EU rate</b> instead: <b>Beaumont Hospital</b> in Dublin publishes <b>446.82 euro</b> for a first non-EU emergency department attendance and <b>111.65 euro</b> for a return visit. If you are <b>admitted</b>, it gets more serious: Ireland's own Citizens Information states that someone not ordinarily resident, and not in an entitled group, pays the <b>full cost of the bed</b>, public or private, and <b>pays the consultant too</b>. The 2023 abolition of inpatient charges does not reach you.",
      insurance: true,
      insuranceNote: "Ireland is the country where the headline is true and does not apply to you: public inpatient charges were abolished, but for people entitled to public health services, which a US visitor is not. You pay the non-EU emergency rate and, if admitted, the full cost of the bed plus the consultant. That is a real gap behind a reassuring headline. Faye covers trip medical and evacuation.",
      careFirst: "If it looks serious, go to the emergency department first and deal with the charge afterwards.",
      sections: [
        {
          h: "The 100 euro charge belongs to somebody else",
          icon: "alert",
          key: { tag: "Not your rate", text: "The 100 euro emergency department charge applies to people entitled to public health services. A US visitor pays the higher non-EU rate.", tone: "amber" },
          p: [
            "The <b>100 euro</b> figure is real and it is statutory: since 2009 it is what you pay for attending an emergency department without a GP referral, and there is no charge at all if your GP referred you. It is also, for a US traveler, the <b>wrong number</b>, because it is the charge for people <b>entitled to public health services</b> in Ireland.",
            "What a visitor from outside the EU pays instead is set by the hospital. <b>Beaumont Hospital</b> in Dublin publishes its rates plainly: <b>446.82 euro</b> for a non-EU resident's emergency department attendance, and <b>111.65 euro</b> for a non-EU return visit. EU and UK visitors presenting an EHIC or GHIC card pay nothing. Note that this is <b>one hospital's published list</b>, not a national tariff, so another hospital will differ."
          ]
        },
        {
          h: "Admission is where the real exposure sits",
          icon: "receipt",
          key: { tag: "Full cost of the bed", text: "Citizens Information states that a person not ordinarily resident, outside the entitled groups, pays the full cost of the bed, public or private, and pays the consultant separately.", tone: "amber" },
          p: [
            "Public inpatient charges in Ireland <b>were</b> abolished, on <b>17 April 2023</b>, and the old 80 euro a day charge is genuinely gone. The catch is who it was abolished for. Ireland's own <b>Citizens Information</b> service states it directly: if you do not live in Ireland and you do not belong to a group entitled to free health services, you pay the <b>full cost of the bed</b>, whether it is a public bed or a private one, and you <b>also pay the consultant</b>.",
            "That is a genuinely open-ended figure rather than a listed charge, because it is the economic cost of your care rather than a flat fee, and the consultants who treat you invoice on their own account. The HSE does hold <b>discretion to reduce or waive charges in cases of hardship</b>, which is worth knowing but is not something to plan a trip around."
          ]
        },
        {
          h: "Emergency care happens first",
          icon: "health",
          key: { tag: "Treated regardless", text: "Everyone facing a medical emergency has the right to attend an emergency department and be treated. Charges are invoiced afterwards.", tone: "teal" },
          p: [
            "The reassuring part, and it is not small: nobody is turned away. Anyone facing a medical emergency in Ireland can attend an emergency department and be <b>treated regardless of ability to pay at that moment</b>, with charges invoiced afterwards. Ambulance attendance is not separately charged for an emergency call.",
            "<b>If it looks serious, go to the emergency department first and deal with the charge afterwards.</b> Ireland is one of the places where that advice costs you nothing to follow, because the clinical decision and the billing decision are genuinely separate."
          ]
        },
        {
          h: "What this means for your money",
          icon: "cash",
          key: { tag: "The gap is the admission", text: "The emergency attendance is a few hundred euro. The admission is the full economic cost of the bed plus the consultant, which is the number worth insuring.", tone: "teal" },
          p: [
            "So the shape is: a <b>walk-in emergency attendance</b> in the low hundreds of euro, a <b>GP visit</b> paid privately, and an <b>admission</b> priced at the full cost of your care with the consultant billed on top. The first two are inconvenient. The third is what a policy is for.",
            "Practically, tell the hospital you are a non-EU visitor at registration, because the rate differs and the paperwork follows from it. Keep the <b>hospital invoice and every consultant's invoice</b> separately, since they arrive from different places. For paying on the day, see the <a href='/ireland/cash-or-card'>Ireland cash and cards guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is healthcare free in Ireland for tourists?", a: "No. Public inpatient charges were abolished in April 2023 for people entitled to public health services, which a US visitor generally is not. A visitor pays the non-EU emergency department rate and, if admitted, the full cost of the bed plus the consultant." },
        { q: "How much is an emergency department visit in Ireland?", a: "It depends who you are. The statutory charge for someone entitled to public health services is 100 euro without a GP referral. Beaumont Hospital in Dublin publishes 446.82 euro for a non-EU resident's first attendance and 111.65 euro for a return visit. Other hospitals set their own non-EU rates." },
        { q: "What happens if I am admitted to hospital in Ireland?", a: "Citizens Information states that a person who is not ordinarily resident in Ireland, and not in an entitled group, pays the full cost of the bed, whether public or private, and pays the consultant as well. That is an economic cost rather than a fixed charge, so it is not published as a single figure." },
        { q: "Will an Irish hospital treat me if I cannot pay?", a: "Yes in an emergency. Everyone facing a medical emergency can attend an emergency department and be treated regardless of ability to pay at that moment, with charges invoiced afterwards. The HSE also has discretion to reduce or waive charges in hardship cases." },
        { q: "Does my EHIC or US insurance help in Ireland?", a: "An EHIC or UK GHIC removes the charge, but those are for EU and UK residents. A US health plan rarely pays in Ireland and Medicare does not pay abroad at all, so a US visitor is paying the non-EU rates out of pocket or through travel cover." }
      ],
      sourcedFigures: [
        { fact: "Beaumont Hospital Dublin published emergency department rates for non-EU residents: 446.82 euro first attendance, 111.65 euro return visit; the statutory charge for entitled persons attending without a GP referral is 100 euro", kind: "routine", src: 2, forms: ["446.82 euro", "111.65 euro", "100 euro", "447 euro", "80 euro"] }
      ],
      sources: {
        links: [
          { label: "HSE: hospital charges, including the statutory 100 euro emergency department charge for attendance without a GP referral", url: "https://www.hse.ie/eng/about/who/acute-hospitals-division/patient-care/hospital-charges/", type: "gov" },
          { label: "Citizens Information: charges for hospital services, including that a person not ordinarily resident and outside the entitled groups pays the full cost of the bed and the consultant", url: "https://www.citizensinformation.ie/en/health/health-services/gp-and-hospital-services/hospital-charges/", type: "gov" },
          { label: "Beaumont Hospital, Dublin: information on hospital charges, including the published non-EU emergency department rates", url: "https://www.beaumont.ie/page/information-hospital-charges-paying-hospital-bill", type: "gov" }
        ],
        judgment: "The 100 euro emergency department charge and the April 2023 abolition of public inpatient charges are statutory and apply to people entitled to public health services. The rule that a non-resident outside those groups pays the full cost of the bed plus the consultant comes from Citizens Information, the state's own information service. The non-EU emergency figures are one Dublin hospital's published rates, cited as an example rather than a national tariff, and other hospitals set their own. We have published no figure for an admission because it is an economic cost rather than a listed charge. Checked August 2026."
      }
    }
  ]
};
