export default {
  slug: "new-zealand",
  live: true,
  name: "New Zealand",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-12",
  sources: {
    changed: "First publication. Confirmed the two costs that catch US visitors here: the NZD 100 International Visitor Levy (IVL) and the NZeTA (NZD 17 in the app, NZD 23 online), paid together before you fly. Also confirmed that, unlike Australia, New Zealand has not banned card surcharges: a ban promised for May 2026 stalled in Parliament, so surcharges still apply. And confirmed the 15% GST is built into prices with no tourist refund on ordinary purchases.",
    links: [
      { label: "Immigration New Zealand: the NZeTA and the International Visitor Levy, the NZD 17 app and NZD 23 online fees, the NZD 100 levy, and the two-year multiple-entry validity", url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta", type: "gov" },
      { label: "New Zealand Government: the surcharge ban bill, promised for May 2026 and now stalled in Parliament, so in-store card surcharges still apply", url: "https://www.rnz.co.nz/news/business/597751/card-payment-surcharge-ban-to-go-ahead-finance-minister-says", type: "news" },
      { label: "Inland Revenue: GST is 15% and built into prices, and visitors pay it like residents with no refund on ordinary purchases when leaving", url: "https://www.ird.govt.nz/gst", type: "gov" },
    ],
    judgment: "The daily cash share, the tipping feel, and how often a card meets a surcharge are our own estimate from experience and from consistent traveler reports, not an official figure. Surcharge levels vary business by business and are higher in tourist towns, so treat our read as a guide, not a guarantee.",
  },
  emergency: { medical: "111", note: "111 reaches police, fire and ambulance, and calls are free, even on a mobile with no credit. The US number 911 is not used here, so dial 111. For non-urgent police, call 105, and for free health advice, Healthline is 0800 611 116.", checked: "Jul 2026", checkedISO: "2026-07-12" },
  insuranceLevel: "medium",
  region: "Oceania",
  signals: { cardFriendliness: 5, cashNeed: 1, taxRisk: 3 },
  hook: "Very card-friendly, tap for almost everything. Two things to know: unlike Australia, New Zealand has not banned card surcharges, so you still meet about 2 to 3% at some places, and before you fly you pay an NZeTA plus a NZD 100 visitor levy. Choose New Zealand dollars over US dollars, and carry a little cash.",
  aliases: ["new zealand", "nz", "aotearoa", "kiwi", "auckland", "wellington", "christchurch", "queenstown", "rotorua", "milford sound", "south island", "north island", "nzd", "new zealand dollar", "nzeta", "ivl", "international visitor levy", "gst", "eftpos", "paywave", "maori", "haka"],

  title: "Money in New Zealand (2026): Cards, Surcharges, the Visitor Levy, Cash, ATMs, GST and Tipping | True Trip Costs",
  description: "How to handle money in New Zealand as a US traveler in 2026: near-universal cards and contactless, the card surcharges that still apply (no ban yet, unlike Australia), the NZeTA and the NZD 100 International Visitor Levy, the dollar-conversion trap, easy ATMs, the 15% GST with no tourist refund, and why nobody tips. Checked July 2026.",

  h1: "Money in New Zealand, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your card covers almost everything, the surcharge that still applies here, the NZeTA and visitor levy to pay before you fly, the little cash worth carrying, and why the 15% GST is not refundable on the way out.",
  hero: {
    img: "/new-zealand-hero.jpg",
    h: 1375,
    alt: "A calm alpine lake town in New Zealand at dusk, snow-capped mountain peaks in silhouette across a mirror-still lake, a small jetty and warm string lights, a lone figure in a warm jacket walking away along the lakefront path toward a glowing cluster of cabins, and in the foreground a wooden table with a flat white coffee, a plate of roast lamb and a slice of pavlova topped with kiwifruit and berries"
  },

  recentChange: {
    date: "Jul 2026",
    text: "Two things are worth a fresh check this year. First, the promised ban on in-store card surcharges, which was meant to arrive by May 2026, stalled in Parliament and has no confirmed date, so surcharges of around 2 to 3% still turn up at cafes, taxis and small shops, worst in tourist towns. Second, before you travel you pay an NZeTA (NZD 17 in the app, NZD 23 online) plus the NZD 100 International Visitor Levy in the same transaction."
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "New Zealand is <b>very card-friendly</b>. The local EFTPOS network and contactless PayWave are everywhere, so you can tap your <b>Visa or Mastercard</b> for almost everything, with Amex less widely taken. Two things set it apart. First, <b>surcharges still apply</b>: unlike Australia, New Zealand has <b>not</b> banned them (a ban promised for May 2026 stalled in Parliament), so many places add around <b>2 to 3%</b> on contactless and credit, worst in tourist towns like Queenstown, shown on the bill. Paying by <b>EFTPOS with a debit card inserted</b>, or in cash, usually avoids it. Second, before you fly you must sort an <b>NZeTA</b> (NZD 17 in the app, NZD 23 online) and pay the <b>NZD 100 International Visitor Levy</b> in the same transaction. Carry a little cash, about <b>NZD 50 to 100</b>, from a <b>bank ATM</b>, and <b>always choose New Zealand dollars</b>, never US dollars, on any terminal or ATM. Two more notes: the <b>15% GST</b> is already in the price and, unlike Australia, <b>you cannot claim it back</b> on ordinary shopping, and <b>nobody tips</b> here, so pay the price on the bill and relax.",

  meter: {
    heading: "About as cashless as travel gets, with a little cash for the gaps.",
    cashPct: 12,
    note: "A rough feel for everyday spending. Cards and phones cover almost everything, from hotels and restaurants to shops, taxis and tours. Cash is a small backup for a market stall, a tiny cafe, a rural stop, or dodging a card surcharge, and you rarely need much of it."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "The EFTPOS network and contactless PayWave are everywhere, so Visa and Mastercard tap for almost everything, with Amex less widely accepted. The one thing to watch is a <b>surcharge</b>: New Zealand has not banned them, so many places add around 2 to 3% on contactless and credit, worst in tourist towns. Inserting a debit card as EFTPOS, or paying cash, usually avoids it.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "ok", h: "Cash", verd: "A small backup", p: "You rarely need it, but keep about NZD 50 to 100 for a market stall, a tiny vendor, a rural stop, or to sidestep a card surcharge. Get New Zealand dollars from a bank ATM rather than an airport exchange counter, and top up only as needed.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy, just decline dollars", p: "Bank ATMs (ANZ, ASB, BNZ, Westpac and Kiwibank) are widely available and straightforward. Always <b>choose New Zealand dollars, not US dollars</b>, so the machine does not set a poor rate, and let your own bank handle the exchange. Watch for a small fee at standalone ATMs in shops and bars.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b>, plus a backup from a different bank. Amex is less widely accepted here, so keep a Visa or Mastercard as your main card.",
      "Request your <b>NZeTA</b> and pay the <b>IVL</b>: NZD 17 in the official app or NZD 23 online, plus the NZD 100 levy in the same transaction. Allow up to 72 hours, and it is valid for two years and multiple visits.",
      "Fill in the free <b>New Zealand Traveller Declaration (NZTD)</b> online before you land. It is required and quick, and it is not a money charge.",
      "Know that <b>surcharges still apply</b> here (around 2 to 3% at many places), so plan to insert a debit card as EFTPOS or use cash where you want to dodge them."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters. Pull New Zealand dollars from a <b>bank ATM</b> in the arrivals hall, and <b>decline 'convert to dollars,'</b> always choose New Zealand dollars.",
      "Grab about NZD 50 to 100 for your first day, for any cash-only stop.",
      "Set up an <b>eSIM</b> or check your US plan's roaming, useful for maps and for tour and transport apps.",
      "Duty-free at the airport is genuinely GST-free, so it is the one place to buy without the 15% tax."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your card or phone</b> for almost everything, and choose New Zealand dollars every time.",
      "To <b>dodge a surcharge</b>, insert a debit card and pay as EFTPOS, or use cash, at cafes, taxis and small shops that add one.",
      "Keep a little <b>cash</b> for market stalls, small cafes and rural stops.",
      "<b>Glance at the bill</b> for a card surcharge, especially in tourist spots, where 2 to 3% is common."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in New Zealand dollars, never in US dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds a few percent on card terminals and ATMs.",
      "<b>Do not tip.</b> It is genuinely not expected here, and staff are paid a proper wage, so pay the price on the bill and add a thank-you."
    ], cta: null }
  ],

  cash: {
    rate: 1.75, cur: "NZD", round: 20, defaultIndex: 1,
    rateNote: "Rough guide at about 1.75 New Zealand dollars to the US dollar in mid-2026, so NZD 100 is roughly US$57. New Zealand is card-first, so this is the small, cash-in-hand slice of your spending.",
    styles: [
      { n: "Budget",    per: 65,  cash: 0.15 },
      { n: "Mid-range", per: 120, cash: 0.1 },
      { n: "Comfort",   per: 220, cash: 0.06 }
    ]
  },

  connectivity: {
    works: "Good across the cities and main towns on both islands, and thinner in the remote high country, the fjords and along quiet stretches of highway, where you can lose signal. The main carriers are Spark, One NZ (formerly Vodafone) and 2degrees. A prepaid SIM is easy to buy, but for most visitors an eSIM from Airalo, Nomad or a similar provider is the simple route. Your US plan may include some roaming, so check the rate first. You do not need mobile data to pay by card, but you will want it for maps and for tour and transport apps."
  },

  tax: {
    none: true,
    currency: "NZD",
    note: "New Zealand has no nightly tourist or bed tax that you pay at checkout. A 15% GST is already built into the price you see, and unlike Australia you cannot claim it back on ordinary shopping (see below). The one tourism charge to plan for is the NZD 100 International Visitor Levy, a one-off paid with your NZeTA before you travel, not a nightly charge."
  },

  currencyHeading: "The New Zealand dollar, in plain terms.",
  facts: [
    { sym: "nzd", k: "Quick conversion", v: "New Zealand uses the New Zealand dollar. At about 1.75 to the US dollar in mid-2026, NZD 100 is roughly US$57 and NZD 20 about US$11. The polymer notes come in 5, 10, 20, 50 and 100 dollars, and prices already include the 15% GST, so the figure on the tag is what you pay." },
    { sym: "card", k: "Cards rule, cash is backup", v: "The EFTPOS and PayWave networks are everywhere, so Visa and Mastercard tap for almost everything, with Amex less widely taken. You can go days without cash, but keep about NZD 50 to 100 for a market stall or a rural vendor, or to dodge a surcharge." },
    { sym: "tag", k: "Surcharges, still here", v: "Unlike Australia, New Zealand has not banned card surcharges. A ban promised for May 2026 stalled in Parliament, so many places still add around 2 to 3% on contactless and credit, worst in tourist towns, shown on the bill. Inserting a debit card as EFTPOS, or paying cash, usually avoids it." },
    { sym: "notip", k: "No tipping", v: "New Zealand has no real tipping culture. Staff are paid a proper wage, so a tip is a genuine bonus for standout service, never an obligation. There is no tipping at cafes, bars or in taxis, and no service charge to expect on an ordinary bill." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "15% GST, built in, and no tourist refund.",
    text: "New Zealand keeps tax simple, but not in your favor as a shopper. There is <b>no nightly tourist or bed tax</b> at checkout, and the <b>15% GST</b> is already included in the price you see. The catch worth knowing: <b>unlike Australia, the EU or Singapore, New Zealand has no GST refund for visitors</b> on ordinary purchases. You pay the 15% just as a resident does, and there is <b>no refund desk at the airport</b>. The only genuinely GST-free routes are <b>airport duty-free</b> shops (in the secure zone after security) and having a store <b>export the goods for you</b>, either shipping them overseas or delivering them to the departure gate, so that you never take possession of the item in New Zealand. A limited number of larger, tourist-focused retailers offer that. Separately, the one tourism charge to plan for is the <b>NZD 100 International Visitor Levy</b>, a conservation and tourism levy paid once with your <b>NZeTA</b> before you fly."
  },

  keyFacts: [
    { label: "International Visitor Levy (IVL)", value: "NZD 100 per visitor, paid with your NZeTA, non-refundable", status: "enacted", effective: "2024-10-01", source: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta", checked: "2026-07-12" },
    { label: "NZeTA (entry authorization)", value: "Required for US visitors: NZD 17 in the app or NZD 23 online, valid two years, multiple entry", status: "enacted", effective: null, source: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta", checked: "2026-07-12" },
    { label: "Card surcharge ban", value: "A ban on in-store card surcharges was promised for May 2026 but stalled in Parliament, so surcharges still apply", status: "proposed", effective: null, source: "https://www.rnz.co.nz/news/business/597751/card-payment-surcharge-ban-to-go-ahead-finance-minister-says", checked: "2026-07-12" }
  ],

  traps: [
    "<b>'Pay in US dollars?' Always say no.</b> Card terminals and ATMs may offer to charge you in US dollars (dynamic currency conversion), which quietly adds a few percent. Choose New Zealand dollars every time.",
    "<b>Surcharges are still legal here.</b> Unlike Australia, New Zealand has not banned card surcharges, so expect around 2 to 3% on contactless and credit at many cafes, taxis and small shops, and higher in tourist towns like Queenstown. Inserting a debit card and paying as EFTPOS, or using cash, usually avoids it.",
    "<b>Sort your NZeTA and IVL before you fly.</b> Request the NZeTA (NZD 17 in the app, NZD 23 online) and pay the NZD 100 International Visitor Levy in the same transaction, allowing up to 72 hours. It is valid for two years. Use the official app or site, not reseller websites.",
    "<b>No GST refund on the way out.</b> You cannot reclaim the 15% GST at the airport on ordinary purchases, unlike Australia. The only GST-free options are airport duty-free after security, or having a store ship or deliver goods so you never take possession in New Zealand.",
    "<b>Decline the dollar conversion at ATMs.</b> Bank ATMs (ANZ, ASB, BNZ, Westpac, Kiwibank) are fine and widely available, but standalone ATMs in shops and bars may add a fee. Whatever the machine, choose New Zealand dollars, not US dollars.",
    "<b>Fill in your Traveller Declaration.</b> The New Zealand Traveller Declaration (NZTD) is a free online arrival form to complete before you land. It is required and quick, and it is not a money charge, but it is easy to forget."
  ],

  tippingHeading: "Don't feel you have to tip.",
  tipping: "New Zealand has no real tipping culture, and there is no awkwardness in not tipping, it is simply the norm. Staff are paid a proper hourly wage rather than relying on gratuities, so a tip is a genuine bonus for standout service, never an expectation. At <b>cafes, bars and in taxis, you do not tip</b>: pay the price on the bill or the meter. In a <b>nicer restaurant</b>, some people round up or leave around <b>10%</b> for service they thought was excellent, and a <b>tip prompt on the card terminal</b> is easy to skip. Otherwise, pay what is on the bill and enjoy how relaxed it is.",

  faqs: [
    { q: "Do I need cash in New Zealand?", a: "Barely. New Zealand is close to cashless, and cards and phones cover almost everything. Carry about NZD 50 to 100 for a market stall, a tiny cafe, a rural stop, or to dodge a card surcharge, and pull it from a bank ATM as needed." },
    { q: "Is there a card surcharge in New Zealand, and has it been banned?", a: "There is a surcharge at many places, and no, it has not been banned. A ban promised for May 2026 stalled in Parliament and has no confirmed date, so expect around 2 to 3% on contactless and credit at cafes, taxis and small shops, worst in tourist towns. Inserting a debit card and paying as EFTPOS, or using cash, usually avoids it." },
    { q: "Should I pay in New Zealand dollars or US dollars?", a: "Always New Zealand dollars. If a card terminal or ATM offers to charge you in US dollars, decline; that dynamic currency conversion adds a few percent. Choosing New Zealand dollars lets your card's network handle the exchange at a fair rate." },
    { q: "What is the NZeTA and the visitor levy, and how much do they cost?", a: "Before you travel, US visitors must request an NZeTA (New Zealand Electronic Travel Authority) and pay the International Visitor Levy in the same transaction. The NZeTA costs NZD 17 in the official app or NZD 23 online, the levy is NZD 100, and together they are valid for two years and multiple visits. Allow up to 72 hours, and use the official app or site." },
    { q: "Can I claim the GST back on shopping in New Zealand?", a: "No, not on ordinary purchases. Unlike Australia, the EU or Singapore, New Zealand has no tourist GST refund and no airport refund desk; you pay the 15% just as a resident does. The only GST-free routes are airport duty-free after security, or having a store export the goods so you never take possession of them in New Zealand." },
    { q: "Do you tip in New Zealand?", a: "No, tipping is not expected. Staff are paid a proper wage, so there is no tipping at cafes, bars or in taxis. In a nicer restaurant some people round up or leave about 10% for excellent service, but it is always optional." },
    { q: "Are ATMs easy to use in New Zealand, and do they charge?", a: "They are easy and widely available. Bank ATMs (ANZ, ASB, BNZ, Westpac, Kiwibank) are straightforward, while standalone ATMs in shops and bars may add a small fee. Whatever the machine, choose New Zealand dollars, not US dollars." },
    { q: "How much cash should I bring for a week in New Zealand?", a: "Very little on top of card spending. For most visitors NZD 50 to 100 across the week covers the occasional market stall, rural stop, or a surcharge you would rather dodge, refreshed from a bank ATM if needed. Everything else can go on a tapped card." }
  ],

  culture: {
    heading: "A little te reo goes a long way",
    intro: "New Zealanders are warm and understated, and Maori culture runs through daily life, from place names to a shared sense of welcome. Nobody expects fluency, but a friendly kia ora, a bit of humility, and respect for the land mark you as a guest rather than a tourist. Te reo Maori is an official language, and small words go far.",
    phrases: [
      { mean: "Hello, thank you, be well", say: "KEE-or-a", word: "Kia ora" },
      { mean: "Good, well done", say: "kah PIE", word: "Ka pai" },
      { mean: "New Zealand", say: "ow-teh-ah-ROH-ah", word: "Aotearoa" },
      { mean: "Family, extended family", say: "FAH-now", word: "Whanau" },
      { mean: "Food, a meal", say: "kigh", word: "Kai" },
      { mean: "Great, no problem (Kiwi slang)", say: "sweet az", word: "Sweet as" },
    ],
    tip: "A warm <b>kia ora</b> works for both hello and thank you, and it is always welcome. When visiting a home or a marae (a Maori meeting ground) it is polite to <b>remove your shoes</b>, and you may be greeted with a <b>hongi</b>, the gentle pressing of noses and foreheads that shares a breath of greeting.",
    stories: [
      { img: "/new-zealand-culture-1.jpg",
        alt: "WPA-style illustration of a traditional carved wooden Maori meeting house at golden hour, its gable decorated with flowing spiral patterns and a carved gateway, people gathered warmly on the green in front in a gesture of welcome, native trees and a green hill behind",
        h: "The welcome on the marae",
        p: "At the heart of Maori community life is the marae, with its carved <b>wharenui</b> (meeting house) whose spirals and figures tell the stories of the people. Visitors are welcomed with a <b>powhiri</b>, a ceremony of speeches, song and the hongi. Underlying it all is <b>manaakitanga</b>, the deep duty of hospitality and care for guests, which you feel across the whole country.",
        note: "Say it: manaakitanga (mah-nah-kee-TAH-nga), the care shown to guests" },
      { img: "/new-zealand-culture-2.jpg",
        alt: "Vintage travel-poster illustration of a deep dark fjord in New Zealand, sheer forested cliffs plunging into still water, the pointed summit of a mountain rising through drifting mist, a slender waterfall down the rock face, and calm reflections below",
        h: "Where the mountains meet the sea",
        p: "In the southwest, Fiordland opens into deep glacier-carved sounds, and Milford Sound, known to Maori as Piopiotahi, is the most breathtaking, with Mitre Peak rising straight from dark water. New Zealanders take seriously the idea of <b>kaitiakitanga</b>, guardianship of the land and water, which is partly what the NZD 100 visitor levy helps fund. Tread lightly and leave no trace.",
        note: "Good to know: your visitor levy helps protect places like this" },
      { img: "/new-zealand-culture-3.jpg",
        alt: "WPA-style illustration of a lush New Zealand native forest at dusk, towering silver tree ferns with unfurling spiral fronds, soft glowing undergrowth, and a small round long-beaked kiwi bird foraging among the ferns",
        h: "The bird that names a people",
        p: "The kiwi, a small, round, flightless bird with a long beak, is New Zealand's national symbol, and New Zealanders proudly call themselves Kiwis after it. It is nocturnal and shy, so you are most likely to meet one in a wildlife sanctuary. The <b>silver fern</b>, whose young fronds curl into the koru spiral, is the other emblem you will see everywhere.",
        note: "Good to know: 'Kiwi' means a New Zealander, the bird, not the fruit" },
    ],
    pride: "New Zealand is proud of its landscapes and its care for them, of Maori language and heritage woven through everyday life, and of a warm, low-key welcome. Meet it with humility and respect for the land, and you will feel it returned."
  }
};
