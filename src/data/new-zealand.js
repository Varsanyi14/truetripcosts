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
  rentalCommon: true,
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
  },

  // HUB-AND-SPOKE SPOKES. Data-driven, single-source, each independently dated,
  // rendered by components/Spoke.astro via src/pages/[slug]/[spoke].astro.
  spokes: [
    {
      slug: "nzeta-and-ivl",
      live: true,
      topic: "visas",
      title: "Do US citizens need an NZeTA for New Zealand, and what is the IVL? (2026) | True Trip Costs",
      description: "Yes, and it is two charges, not one. US citizens need an NZeTA (NZ$17 by app) plus the NZ$100 tourism levy (IVL), paid together before you fly. The official app, the real total, and how to skip the overpriced sites. Checked July 2026.",
      h1: "Do US citizens need an NZeTA for New Zealand, and what is the IVL?",
      lede: "Short answer: yes, and it is two charges bundled into one. The NZeTA is cheap, but the NZ$100 tourism levy on top is the part that surprises people. Here is the real total, the official app, and how not to overpay.",
      checked: "Jul 2026",
      checkedISO: "2026-07-08",
      answer: "Yes. US citizens need an <b>NZeTA</b> (New Zealand Electronic Travel Authority) before they fly, and it comes with a second charge, the <b>IVL</b> tourism levy, paid in the same transaction. The NZeTA is <b>NZ$17 in the official app</b> (NZ$23 on the website), and the <b>IVL is NZ$100</b>, so you are really paying about <b>NZ$117</b> total. Both come only from the official app or immigration.govt.nz, and the NZeTA is valid <b>2 years</b>.",
      official: {
        label: "Official NZeTA, on immigration.govt.nz",
        url: "https://nzeta.immigration.govt.nz",
        note: "Two official ways to apply: the free NZeTA app (cheapest at NZ$17, and it scans your passport) or the website at NZ$23. The system adds the NZ$100 IVL automatically and you pay both together. Allow up to 72 hours for approval."
      },
      expediter: false,
      sections: [
        {
          h: "The two charges, and the real total",
          p: [
            "This is the bit that catches people. New Zealand entry is <b>two things bundled together</b>: the NZeTA (the travel authority itself) and the IVL (a conservation and tourism levy). You pay them in a single transaction, so it feels like one fee, but it is two.",
            "The NZeTA costs <b>NZ$17 through the official app</b> or <b>NZ$23 on the website</b>. The <b>IVL is NZ$100</b> per person, and it went up from NZ$35 on <b>1 October 2024</b>, so older guides quote far less. All in, a US traveler pays about <b>NZ$117 by app</b> (roughly 70 US dollars), covering entries for two years on the NZeTA side."
          ]
        },
        {
          h: "How to apply, and the cheaper way",
          p: [
            "The app is both the cheapest and the fastest route."
          ],
          steps: [
            "Download the official NZeTA app (iOS or Android), or go to nzeta.immigration.govt.nz. Use only the official app or site.",
            "Scan your passport and take the photo the app prompts for. The app route is NZ$17; the website is NZ$23.",
            "The system adds the NZ$100 IVL automatically. Pay both together by card. A family or group can do up to 10 in one transaction.",
            "Wait for approval, allow up to 72 hours, though it is often quick. The NZeTA links to your passport, so there is nothing to print."
          ]
        },
        {
          h: "Do not pay a markup for it",
          p: [
            "New Zealand Immigration warns about this directly: a number of <b>third-party sites</b> sell the NZeTA and charge more than the official price, sometimes promising faster processing they cannot deliver. The official app and immigration.govt.nz are the only real routes, and the app is the cheapest. If a site quotes more than NZ$17 to NZ$23 plus the NZ$100 levy, it is adding its own fee.",
            "The NZeTA is valid for <b>2 years</b> or until your passport expires, and lets you visit for up to <b>90 days</b> at a time. The IVL, though, is charged <b>each time you request a new NZeTA</b>, so it is not strictly once every two years if you renew early."
          ]
        },
        {
          h: "A couple of things to know",
          p: [
            "The NZeTA is <b>non-refundable</b>, the IVL included, even if your request is declined, so apply once and answer the questions carefully. It is valid <b>2 years</b> or until your passport expires, for stays up to <b>90 days</b>.",
            "If your trip <b>connects through Auckland</b> on the way elsewhere, check whether you need an NZeTA for transit before you book, the official site above covers it. For how money works once you land, cards, cash, ATMs and the rest, see the <a href=\"/new-zealand\">New Zealand money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need an NZeTA to visit New Zealand?", a: "Yes. US citizens must have an NZeTA (New Zealand Electronic Travel Authority) before boarding a flight or cruise to New Zealand. It is valid for 2 years, allows stays of up to 90 days, and comes with the separate NZ$100 IVL tourism levy paid in the same transaction. Apply on the official NZeTA app or immigration.govt.nz." },
        { q: "How much does the NZeTA cost, including the IVL?", a: "The NZeTA is NZ$17 through the official app or NZ$23 on the website. On top of that, the IVL (International Visitor Conservation and Tourism Levy) is NZ$100 per person, paid together with the NZeTA. So the real total is about NZ$117 by app, roughly 70 US dollars. The IVL rose from NZ$35 on 1 October 2024, so older guides quote less." },
        { q: "What is the IVL and do I have to pay it?", a: "The IVL is New Zealand's International Visitor Conservation and Tourism Levy, NZ$100 per person, charged to most short-stay visitors when they request an NZeTA. For US tourists it is not optional, it is added automatically and paid alongside the NZeTA. It is non-refundable even if your application is declined." },
        { q: "What is the official site for the NZeTA?", a: "The official routes are the free NZeTA app (cheapest at NZ$17) and immigration.govt.nz (nzeta.immigration.govt.nz, NZ$23). New Zealand Immigration warns that third-party sites overcharge for the same authority, so use the official app or site and do not pay a markup." }
      ],
      sources: {
        links: [
          { label: "Immigration New Zealand: the official NZeTA request page and the warning to avoid overcharging third-party sites", url: "https://nzeta.immigration.govt.nz", type: "gov" },
          { label: "Immigration New Zealand: paying the NZ$100 International Visitor Conservation and Tourism Levy (IVL)", url: "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/fees-processing-times-and-refunds/paying-the-international-visitor-levy/", type: "gov" },
          { label: "New Zealand Government (govt.nz): visitor visas and the NZeTA, with the IVL and 72-hour processing", url: "https://www.govt.nz/browse/immigration-and-visas/visitor-visas-and-the-nzeta/", type: "gov" }
        ],
        judgment: "Fees and the levy change (the IVL rose from NZ$35 to NZ$100 on 1 October 2024), so confirm the current amounts on the official site before you pay. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      live: true,
      topic: "cash",
      title: "Do I need cash in New Zealand, or can I use cards? (2026) | True Trip Costs",
      description: "New Zealand is nearly cashless: tap a card or phone almost everywhere. The local quirk is card surcharges (often 1.5 to 2%), and a promised ban stalled, so they are still legal. Keep a little cash for rural spots. Checked July 2026.",
      h1: "Do I need cash in New Zealand, or can I use cards?",
      lede: "Short answer: barely any cash, New Zealand runs on tap-and-go. The one local wrinkle is the surcharge some places add when you pay by card. Here is what to expect and how to pay well.",
      checked: "Jul 2026",
      checkedISO: "2026-07-08",
      answer: "Cards, almost entirely. New Zealand is <b>among the most cashless countries anywhere</b>, so you can <b>tap a card or phone nearly everywhere</b>, from supermarkets to market stalls, and in the main cities you barely need cash. The local quirk is <b>card surcharges</b>: shops can legally add around <b>1.5 to 2%</b> when you tap or use credit. Keep a little cash (<b>NZ$100 to NZ$200</b>) for rural spots, and choose <b>NZ dollars, not US dollars</b>, at the terminal.",
      sections: [
        {
          h: "Nearly cashless, everywhere",
          p: [
            "New Zealand is a <b>tap-and-go country</b>. Contactless is near-universal across supermarkets, restaurants, petrol stations, attractions and even many market stalls, and the local <b>EFTPOS</b> debit network sits alongside Visa and Mastercard everywhere. In <b>Auckland, Wellington, Christchurch and Queenstown</b> you can get by almost entirely on card.",
            "Even transit has gone contactless: <b>Auckland now lets you tap a contactless card or phone</b> on buses, trains and ferries for the same fare locals pay, so there is no need to buy a separate transit card there."
          ]
        },
        {
          h: "The surcharge quirk, and the ban that stalled",
          p: [
            "Here is the New Zealand catch. Merchants can <b>legally add a surcharge</b> when you pay by card, typically <b>1.5 to 2%</b> on contactless (PayWave) and credit, and it is meant to be clearly signposted at the counter. A government <b>ban on these surcharges was promised for May 2026</b>, but the bill <b>stalled in Parliament and has not taken effect</b> as of mid-2026, so <b>surcharges are still legal</b>. Check the terminal or the sign before you tap.",
            "One caveat you may read elsewhere: New Zealanders can sometimes dodge the fee by <b>inserting</b> a local debit card (which routes through the free domestic EFTPOS network) rather than tapping. That trick does <b>not reliably help a foreign card</b>, which runs through Visa or Mastercard either way, so as a visitor, just expect the odd surcharge and treat it as a small cost."
          ]
        },
        {
          h: "Cash, and the dollar rule",
          p: [
            "You need <b>little cash</b>, but not none. Budget around <b>NZ$100 to NZ$200</b> for a typical trip, and more if you are heading well off the beaten track, to rural areas, small farm stays or the occasional market. ATMs from the main banks (<b>ANZ, ASB, BNZ, Westpac, Kiwibank</b>) are widely available and take foreign cards.",
            "As always, when an ATM or terminal asks whether to charge in <b>US dollars or NZ dollars, choose NZ dollars</b>. The dollar option triggers dynamic currency conversion at a poor rate; NZ dollars lets your own bank convert more cheaply."
          ]
        },
        {
          h: "Tipping, and the wrap",
          p: [
            "<b>Tipping is not expected</b> in New Zealand, service is not built around it, so there is no need to add a tip, though it is welcome for something exceptional.",
            "For the fuller money picture, see the <a href=\"/new-zealand\">New Zealand money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in New Zealand, or can I use cards?", a: "Barely any cash. New Zealand is among the most cashless countries, and you can tap a card or phone almost everywhere, including many market stalls and Auckland public transport. Keep about NZ$100 to NZ$200 for rural areas, small farm stays and the occasional market, and use a card for everything else." },
        { q: "Do New Zealand shops charge a surcharge for card payments?", a: "Often yes. Merchants can legally add a surcharge, typically 1.5 to 2%, when you pay by contactless or credit, and it should be signposted. A ban was promised for May 2026 but stalled in Parliament and has not taken effect as of mid-2026, so surcharges are still legal. Expect the occasional one and treat it as a small cost." },
        { q: "Should I choose NZ dollars or US dollars at the terminal in New Zealand?", a: "Always choose NZ dollars. Selecting US dollars triggers dynamic currency conversion at a marked-up rate, so you pay more. Choosing NZ dollars lets your own bank handle the conversion at a better rate. The same applies at ATMs." },
        { q: "Can I use contactless on public transport in New Zealand?", a: "In Auckland, yes: you can now tap a contactless card or phone on buses, trains and ferries and pay the same fare as locals, so no separate transit card is needed there. Contactless is near-universal for everyday spending across the country too." }
      ],
      sources: {
        links: [
          { label: "Reserve Bank of New Zealand: the central bank and official NZ dollar reference", url: "https://www.rbnz.govt.nz", type: "gov" },
          { label: "New Zealand Commerce Commission: the retail payment system and the status of card-surcharge rules", url: "https://comcom.govt.nz", type: "gov" }
        ],
        judgment: "The card-surcharge ban was promised for May 2026 but had not taken effect by mid-2026, and surcharge levels and the rest are our practical read, so confirm the current rule and treat amounts as a guide. Checked July 2026."
      }
    },
    {
      slug: "bringing-your-pet",
      live: true,
      topic: "pets",
      title: "Bringing a dog or cat to New Zealand from the US (2026): the 6 to 7 month process and the rules change mid-transition | True Trip Costs",
      description: "Moving to New Zealand with a pet from the US: why it is a strict 6 to 7 month process with a blood titer, Brucella testing for dogs, and a minimum 10-day quarantine, plus the 2026 import-standard change every mover needs to check. Checked July 2026.",
      h1: "Bringing your dog or cat to New Zealand.",
      lede: "New Zealand is a long-lead destination on the level of Australia and Japan. It is rabies-free and guards that status with a strict, months-long process: an import permit, a rabies blood test, Brucella testing for dogs, specific parasite treatments, and a mandatory quarantine stay on arrival. On top of that, the rules are mid-change in 2026, so the first thing to nail down is which standard applies to you. Here is the whole route.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Start early: this is a <b>6 to 7 month</b> process run by New Zealand's Ministry for Primary Industries (MPI), not a quick one. The mainland US is a <b>Category 3</b> country (rabies well-controlled), so your pet needs an <b>MPI import permit, an ISO microchip, a current rabies vaccination and a rabies blood titer test, Brucella testing for dogs, set parasite treatments, two vet certificates endorsed by USDA APHIS, and a minimum 10-day stay in an MPI-approved quarantine facility</b> on arrival. Budget several thousand dollars, driven mostly by flying your pet as cargo and the quarantine fees. One critical catch: <b>MPI's import rules are in a transition period in 2026</b>, so confirm whether you fall under the old or new standard before you start. Coming home to the US is the easy part.",
      sections: [
        {
          h: "The two numbers, and the catch",
          p: [
            "Two things decide a move to New Zealand with a pet. <b>Lead time is roughly 6 to 7 months</b>, set by the sequence of vaccination, blood testing, and permit processing that all has to happen in order. <b>Cost runs to several thousand dollars</b>, with the biggest lines being air transport as cargo and the mandatory quarantine stay. Vet visits, the rabies titer, and Brucella testing for dogs make up much of the rest.",
            "The catch that is specific to 2026: MPI issued a new Import Health Standard for cats and dogs that came into force on 1 July 2026, with a transition period during which both the old and the new requirements are accepted. So before anything else, confirm which standard applies to your move. The safest step is to ask MPI directly or check the current MPI guidance, because the pre-export identification checks and some tests and treatments differ between the two. Do not build your whole timeline on an out-of-date checklist."
          ]
        },
        {
          h: "The steps, in the order that matters",
          p: [
            "Follow these in sequence and start well ahead. The permit alone takes MPI a month of working days to process once your paperwork is correct, and quarantine space has to be booked, so the front end fills up fast."
          ],
          steps: [
            "Microchip first. Your pet needs an ISO-standard microchip, and it must be in place before the vaccinations and tests that count, so that every record ties to the same chip number.",
            "Rabies vaccination. A current rabies vaccination is required, recorded against the microchip.",
            "Rabies blood titer test. A blood sample is tested to confirm the vaccination worked, with the lab report endorsed by APHIS. This is a gating step, so it has to be done in the right window relative to the vaccination and to travel.",
            "Brucella canis testing for dogs. New Zealand no longer accepts the 2ME-RSAT test on its own. The approved tests are RSAT (not the 2ME-RSAT), TAT, CPAg-AGID, and IFAT, and the lab reports must tie to the microchip.",
            "Parasite treatments. Specific external and internal parasite treatments are required, from MPI's current approved list, done in the required window before travel.",
            "Book quarantine and apply for the import permit. Book a place at an MPI-approved quarantine facility, then apply to MPI for the import permit. MPI needs about 30 working days to process the permit once documentation is correct, and recommends applying roughly six weeks before travel.",
            "Two vet certificates, endorsed. A USDA-accredited vet completes Health Certificate A, and APHIS issues and endorses Health Certificate B, with the endorsed lab reports.",
            "Advance notice and arrival. Contact MPI at least 72 hours before travel for the arrival inspection. Cats and dogs needing quarantine can only arrive at Auckland or Christchurch."
          ]
        },
        {
          h: "Quarantine, ports, and prohibited breeds",
          p: [
            "Quarantine is mandatory and is a defining feature of this route. Your pet must stay a <b>minimum of 10 days</b> at an MPI-approved facility, and pets requiring quarantine can only enter through Auckland or Christchurch. The facility handles the MPI arrival notification for you. Because the final release inspection happens during normal business hours, pickup may not land exactly when the 10 days end, so plan a little slack. Quarantine space is limited and can be the bottleneck that dictates your whole timeline, which is another reason to book early.",
            "Note also that some breeds are barred entirely. Prohibited dog breeds include the Brazilian Fila, Dogo Argentino, Japanese Tosa, Perro de Presa Canario, and American Pit Bull Terrier, along with hybrids. For cats, hybrids are prohibited except Bengal cats with documentation showing five generations of domestic ancestry. If your pet is a listed breed, it cannot be imported, so check this before you spend on anything else.",
            "One recent easing worth knowing: for pets from the mainland US arriving from 1 March 2026, crate seals are no longer required. It is a small simplification in an otherwise strict process."
          ]
        },
        {
          h: "Coming back to the US is the easy part",
          p: [
            "Good news for the return trip: because New Zealand is rabies-free, a dog flying home to the US is on the simplest path. The CDC is the primary authority for dogs entering the US, and from a rabies-free country the usual requirements are a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer test and no quarantine. Cats have no federal requirement returning to the US.",
            "For the full detail on the return, see our guide to <a href=\"/bringing-a-dog-into-the-us\">bringing a dog into the US</a>, and for how New Zealand compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."
          ]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to New Zealand",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-new-zealand",
        note: "The US-side steps, the two health certificates, and the link to MPI's own rules. New Zealand's Ministry for Primary Industries is the final word, and its import standard is mid-transition in 2026, so confirm the current version."
      },
      faqs: [
        { q: "How long does it take to bring a pet to New Zealand from the US?", a: "Plan for about 6 to 7 months. The timeline is set by the order of steps: microchip, rabies vaccination, the rabies blood titer test, Brucella testing for dogs, parasite treatments, the import permit (which MPI needs around 30 working days to process), and a quarantine booking. Quarantine space and permit processing are common bottlenecks, so start early." },
        { q: "Does my pet have to go into quarantine in New Zealand?", a: "Yes. A minimum 10-day stay at an MPI-approved quarantine facility is mandatory, and pets needing quarantine can only arrive at Auckland or Christchurch. The facility handles MPI arrival notification for you. Because the release inspection is during business hours, pickup may not fall exactly when the 10 days end, so build in a little slack." },
        { q: "What is the 2026 rules change I keep seeing?", a: "MPI brought in a new Import Health Standard for cats and dogs on 1 July 2026, with a transition period during which both the old and the new requirements are accepted. The two differ on pre-export identification checks and some tests and treatments, so before you start, confirm with MPI which standard applies to your move. Building a timeline on the wrong checklist is the costly mistake to avoid." },
        { q: "Do I need to quarantine my pet coming back to the US from New Zealand?", a: "No. New Zealand is rabies-free, so a dog returning to the US is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details." }
      ],
      sources: {
        links: [
          { label: "USDA APHIS: pet travel from the United States to New Zealand, the Category 3 requirements, two health certificates, Brucella testing, and the crate-seal change", url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-new-zealand", type: "gov" },
          { label: "MPI (New Zealand Ministry for Primary Industries): the step-by-step guide to bringing cats and dogs to New Zealand and the current import health standard", url: "https://www.mpi.govt.nz/bring-send-to-nz/pets-travelling-to-nz/bringing-cats-and-dogs-to-nz", type: "gov" },
          { label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, the CDC Dog Import Form and microchip rules for the return leg", url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html", type: "gov" }
        ],
        judgment: "The steps, the quarantine, and the import standard are set by New Zealand's MPI and administered on the US side by APHIS, not by us. The rules are strict and, in 2026, mid-transition between an old and a new standard, so we point you to the official pages and dated this July 2026. Costs vary with your pet's size, your route, and quarantine fees, so treat the figures as a starting point and confirm the current MPI requirements, including which standard applies to you, before you begin."
      }
    }
  ]
};
