export default {
  slug: "australia",
  iso2: "au",
  live: true,
  name: "Australia",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-12",
  sources: {
    changed: "First publication. Confirmed the money change that matters most this year: the Reserve Bank of Australia's final decision, published 31 March 2026, to ban card surcharges on eftpos, Visa and Mastercard from 1 October 2026, so until that date many merchants still add a surcharge. Also confirmed the AUD 20 service fee for the app-only ETA (subclass 601), the 10% GST built into prices, and the Tourist Refund Scheme minimum of AUD 300 for claiming GST back on goods.",
    links: [
      { label: "Reserve Bank of Australia: the final review of retail payments regulation, setting the ban on card surcharges for eftpos, Visa and Mastercard from 1 October 2026 and the lower interchange caps", url: "https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/", type: "gov" },
      { label: "Australian Taxation Office: the Tourist Refund Scheme, the AUD 300 minimum, the 60-day window and what qualifies for a GST refund on goods", url: "https://www.ato.gov.au/individuals-and-families/travelling-and-going-overseas/tourist-refund-scheme", type: "gov" },
      { label: "Australian Government, Department of Home Affairs and the Australian Embassy: the ETA (subclass 601), the AUD 20 app service fee, and that it is applied for only in the official Australian ETA app", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601", type: "gov" },
    ],
    judgment: "The daily cash share, the tipping feel, and how often a foreign card meets a surcharge are our own estimate from experience and from consistent traveler reports, not an official figure. Surcharge levels vary business by business, so treat our read as a guide, not a guarantee.",
  },
  emergency: { medical: "000", note: "000 (Triple Zero) reaches police, fire and ambulance, and calls are free from any phone. From a mobile, 112 also connects to the same service. The US number 911 is not reliable here, so use 000, or 112 from a mobile. For non-urgent police, call 131 444.", checked: "Jul 2026", checkedISO: "2026-07-12" },
  insuranceLevel: "medium",
  rentalCommon: true,
  region: "Oceania",
  signals: { cardFriendliness: 5, cashNeed: 1, taxRisk: 2 },
  hook: "About as card-friendly as travel gets: tap your card or phone almost everywhere. The one habit worth knowing is that until 1 October 2026 many places still add a card surcharge, so check the bill, choose Australian dollars over US dollars, and carry only a little cash.",
  aliases: ["australia", "aus", "aussie", "oz", "sydney", "melbourne", "brisbane", "perth", "adelaide", "cairns", "gold coast", "tasmania", "uluru", "great barrier reef", "outback", "aud", "australian dollar", "eta", "subclass 601", "gst", "trs", "tourist refund scheme", "eftpos", "opal", "myki"],

  title: "Australia money 2026: cards, surcharges and cash",
  description: "Tap almost everywhere: Australia is about as card-friendly as travel gets. Check the bill for a surcharge until the October 2026 ban. Checked 2026.",

  h1: "Money in Australia, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your card covers almost everything, the surcharge to watch for until the October 2026 ban, the little cash worth carrying, the GST you can claim back on shopping, and the ETA to sort before you fly.",
  hero: {
    img: "/australia-hero.jpg",
    h: 1375,
    alt: "A calm Sydney harbour promenade at dusk, the sail-shaped roofs of an opera house and the arch of a great steel bridge in silhouette across glittering water, a ferry crossing, warm string lights strung overhead, a lone figure in light summer clothes walking away along the boardwalk toward the lit skyline, and in the foreground a wooden table with a flat white coffee, a golden meat pie and a plate of grilled prawns and sausages"
  },

  recentChange: {
    date: "Jul 2026",
    text: "One money change is worth a fresh check this year. On 31 March 2026 the Reserve Bank confirmed it will ban card surcharges on eftpos, Visa and Mastercard from 1 October 2026, alongside lower card fees for businesses. Until that date many merchants still add a surcharge (often around 1 to 1.5%, and more on Amex), shown on the bill or the terminal, so it is worth looking for it. Amex and PayPal surcharges can continue after the ban."
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Australia is <b>about as card-friendly as travel gets</b>. Locals tap a card or phone for almost everything, and your <b>Visa or Mastercard</b> works at shops, cafes, restaurants, taxis and on city transit, with Amex widely accepted too. The one habit worth knowing: <b>until 1 October 2026</b>, many merchants still add a <b>card surcharge</b> (often around <b>1 to 1.5%</b>, and more on Amex), shown as a line on the bill or a sticker on the terminal, and a few offer a small cash discount instead. From that date the Reserve Bank bans surcharges on eftpos, Visa and Mastercard, so they simply switch off (Amex and PayPal can still charge). Carry only a little cash, about <b>AUD 50 to 100</b>, for the odd market stall or tiny vendor, and pull it from a <b>bank ATM</b> rather than an exchange counter. Set your card to <b>decline the dollar conversion</b> and <b>always choose Australian dollars</b> on any terminal or ATM. Two more things worth your attention: the <b>10% GST</b> is already in the price and you can <b>claim it back on goods</b> you take home through the Tourist Refund Scheme, and <b>nobody tips</b> here, so pay the price on the bill and relax. Before you fly, sort an <b>ETA</b> (AUD 20, in the official app only).",

  meter: {
    heading: "About as cashless as travel gets, with a little cash for the gaps.",
    cashPct: 10,
    note: "A rough feel for everyday spending. Cards and phones cover almost everything, from hotels and restaurants to shops, taxis and city transit. Cash is a small backup for a market stall, a tiny cafe or a rural stop, and you rarely need much of it."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are taken at shops, cafes, restaurants, taxis and on contactless transit gates, and Amex is widely accepted too. The one thing to watch is a <b>surcharge</b>: until 1 October 2026 many places add around 1 to 1.5% (more on Amex), shown on the bill. From that date the Reserve Bank ban removes it for eftpos, Visa and Mastercard.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "ok", h: "Cash", verd: "A small backup", p: "You rarely need it, but keep about AUD 50 to 100 for a market stall, a tiny vendor or a rural stop. Get Australian dollars from a bank ATM rather than an airport exchange counter, and top up only as needed.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy, just decline dollars", p: "Bank ATMs (CommBank, Westpac, NAB and ANZ) are everywhere and generally do not charge foreign cards a machine fee, while some independent ATMs in pubs and convenience stores add one. Always <b>choose Australian dollars, not US dollars</b>, so the machine does not set a poor rate, and your own bank handles the exchange.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b>, plus a backup from a different bank. Amex works widely but is more likely to carry a surcharge, so keep a Visa or Mastercard as your main card.",
      "Sort your <b>ETA (subclass 601)</b>. US visitors need one, it costs a flat <b>AUD 20</b> service fee, and it is applied for only in the official <b>Australian ETA app</b>, so ignore reseller sites charging more.",
      "Know the <b>surcharge</b> rule: until <b>1 October 2026</b> many places add around 1 to 1.5% (more on Amex) on card, after which it is banned for eftpos, Visa and Mastercard.",
      "Set up an <b>eSIM</b> before you land. Coverage is strong in the cities and towns, thinner in the remote Outback."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters. Pull Australian dollars from a <b>bank ATM</b> in the arrivals hall, and <b>decline 'convert to dollars,'</b> always choose Australian dollars.",
      "Grab about AUD 50 to 100 for your first day, for any cash-only stop.",
      "Tap your <b>contactless bank card</b> on the airport train or bus into the city, no separate ticket needed in most cities.",
      "Check your <b>US plan's roaming</b> rate before you rely on it, or switch on the eSIM you set up."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your card or phone</b> for almost everything, and choose Australian dollars every time.",
      "Until 1 October 2026, <b>glance at the bill or terminal for a surcharge</b>, and take the cash-discount option if one is offered.",
      "Keep a little <b>cash</b> for market stalls, small cafes and rural stops.",
      "<b>Tap your bank card</b> straight onto city transit (Opal in Sydney, Myki in Melbourne, and similar), so you often need no separate transit card."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in Australian dollars, never in US dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds a few percent on card terminals and ATMs.",
      "<b>Do not tip.</b> It is genuinely not expected here, and staff are paid a proper wage, so pay the price on the bill and add a thank-you."
    ], cta: null }
  ],

  cash: {
    rate: 1.44, cur: "AUD", round: 20, defaultIndex: 1,
    rateNote: "Rough guide at about 1.44 Australian dollars to the US dollar in mid-2026, so AUD 100 is roughly US$70. Australia is card-first, so this is the small, cash-in-hand slice of your spending.",
    styles: [
      { n: "Budget", per: 70, cash: 0.15, room: 100 },
      { n: "Mid-range", per: 130, cash: 0.1, room: 180 },
      { n: "Comfort", per: 240, cash: 0.06, room: 330 }
    ]
  },

  connectivity: {
    works: "Strong across the cities, the coast and the main towns, and thinner once you head into the remote Outback, where you can lose signal for long stretches. The main carriers are Telstra (widest reach, best in the country), Optus and Vodafone (part of TPG). A prepaid SIM is easy to buy, but for most visitors an eSIM from Airalo, Nomad or a similar provider is the simple route. Your US plan may include some roaming, so check the rate first. You do not need mobile data to pay by card, but you will want it for maps and rideshare apps."
  },

  tax: {
    none: true,
    currency: "AUD",
    note: "Australia has no nightly tourist or bed tax that you pay at checkout. A 10% GST is already built into the price you see. As a visitor you can reclaim that GST on goods you take home through the Tourist Refund Scheme (see below). Separately, entry needs an ETA, a flat AUD 20 service fee paid once in the official app, not a nightly charge."
  },

  currencyHeading: "The Australian dollar, in plain terms.",
  facts: [
    { sym: "aud", k: "Quick conversion", v: "Australia uses the Australian dollar. At about 1.44 to the US dollar in mid-2026, AUD 100 is roughly US$70 and AUD 20 about US$14. The colorful polymer notes come in 5, 10, 20, 50 and 100 dollars, and prices already include the 10% GST, so the figure on the tag is what you pay." },
    { sym: "card", k: "Cards rule, cash is backup", v: "Visa and Mastercard work almost everywhere, and Amex is widely accepted (though more often surcharged). You can go days without cash, but keep about AUD 50 to 100 for a market stall or a tiny rural vendor." },
    { sym: "tag", k: "Surcharges, until October 2026", v: "Until 1 October 2026 many businesses add a card surcharge, often around 1 to 1.5% and more on Amex, shown on the bill or the terminal. From that date the Reserve Bank bans it for eftpos, Visa and Mastercard, though Amex and PayPal surcharges can continue. Some places offer a small cash discount instead." },
    { sym: "notip", k: "No tipping", v: "Australia has no real tipping culture. Staff are paid a proper wage, so tips are a bonus for standout service, never an obligation. There is no tipping at cafes, bars or in taxis, and no service charge to expect on an ordinary bill." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "A 10% GST you can claim back on goods you take home.",
    text: "Australia keeps tax simple for a visitor. There is <b>no nightly tourist or bed tax</b> at checkout, and the <b>10% GST</b> is already included in the price you see. The win worth acting on: you can <b>reclaim the GST on goods</b> you carry out of the country through the <b>Tourist Refund Scheme (TRS)</b>. Spend at least <b>AUD 300</b> (GST inclusive) at a single business with one ABN, within <b>60 days</b> of leaving, keep the <b>original tax invoice</b>, and carry the goods in your <b>cabin bag</b>. Claim at the <b>TRS facility</b> at the international airport or seaport after security, arriving well ahead (30 minutes is the minimum, 90 is safer), and use the <b>My TRS Claim</b> app to enter your details in advance and get a QR code that skips the queue. The refund lands back on your card in about 60 days. What does not qualify: <b>services, accommodation</b>, and anything <b>consumed in Australia</b> before you go. One separate cost to remember is the <b>ETA</b>, a flat <b>AUD 20</b> service fee paid once in the official app before you fly."
  },

  keyFacts: [
    { label: "Card surcharge ban", value: "Surcharges on eftpos, Visa and Mastercard end nationwide; Amex and PayPal surcharges can continue", status: "enacted", effective: "2026-10-01", source: "https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/", checked: "2026-07-12" },
    { label: "ETA (entry authorization)", value: "Required for US visitors, AUD 20 service fee, applied for only in the official Australian ETA app", status: "enacted", effective: null, source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601", checked: "2026-07-12" }
  ],

  traps: [
    "<b>'Pay in US dollars?' Always say no.</b> Card terminals and ATMs may offer to charge you in US dollars (dynamic currency conversion), which quietly adds a few percent. Choose Australian dollars every time.",
    "<b>Card surcharges apply until 1 October 2026.</b> Many places add around 1 to 1.5% (more on Amex) on card, shown on the bill or the terminal. From that date the Reserve Bank ban removes it for eftpos, Visa and Mastercard, but until then, look for the surcharge and take a cash discount if one is offered.",
    "<b>Get your ETA in the official app, and skip the resellers.</b> The ETA (subclass 601) costs a flat AUD 20 service fee and is applied for only in the Australian ETA app. Third-party sites charge much more for the same thing, and some are outright scams.",
    "<b>Amex is welcome but more often surcharged.</b> Australia takes Amex widely, yet it usually carries a higher surcharge than Visa or Mastercard, so carry a Visa or Mastercard as your main card.",
    "<b>Watch fees on independent ATMs.</b> Bank ATMs (CommBank, Westpac, NAB, ANZ) generally do not charge a machine fee, but standalone ATMs in pubs, clubs and convenience stores often add a few dollars. Use a bank machine and decline the dollar conversion.",
    "<b>You often need no transit card.</b> In most big cities you can tap a contactless bank card straight onto trains, trams, buses and ferries (Opal in Sydney, Myki in Melbourne, and similar), so do not feel you must buy a separate card first."
  ],

  tippingHeading: "Don't feel you have to tip.",
  tipping: "Australia has no real tipping culture, and there is no awkwardness in not tipping, it is simply the norm. Staff are paid a proper hourly wage rather than relying on gratuities, so a tip is a genuine bonus for standout service, never an expectation. At <b>cafes, bars and in taxis, you do not tip</b>: pay the price on the bill or the meter. In a <b>nicer restaurant</b>, some people round up or leave around <b>10%</b> for service they thought was excellent, and there is often a <b>tip option on the card terminal</b> you can simply skip. Note that many venues add a <b>public holiday surcharge</b> (often 10 to 15%) to cover penalty wages, which is a cost of the day rather than a tip. Otherwise, pay what is on the bill and enjoy how relaxed it is."

,
  faqs: [
    { q: "Do I need cash in Australia?", a: "Barely. Australia is close to cashless, and cards and phones cover almost everything. Carry about AUD 50 to 100 for a market stall, a tiny cafe or a rural stop, and pull it from a bank ATM as needed." },
    { q: "Will I be charged a surcharge for paying by card in Australia?", a: "Until 1 October 2026, often yes. Many businesses add a card surcharge, usually around 1 to 1.5% and more on Amex, shown on the bill or the terminal. From that date the Reserve Bank bans surcharges on eftpos, Visa and Mastercard, so they disappear for those cards, though Amex and PayPal surcharges can continue. Some places offer a small cash discount instead." },
    { q: "Should I pay in Australian dollars or US dollars?", a: "Always Australian dollars. If a card terminal or ATM offers to charge you in US dollars, decline; that dynamic currency conversion adds a few percent. Choosing Australian dollars lets your card's network handle the exchange at a fair rate." },
    { q: "Do I need an ETA to visit Australia?", a: "Yes. US visitors need an ETA (subclass 601). It costs a flat AUD 20 service fee, there is no separate visa charge, and you apply for it only in the official Australian ETA app. Ignore reseller websites that charge more, and beware of scam sites." },
    { q: "Can I claim the GST back on shopping in Australia?", a: "Yes, on goods you take home. Through the Tourist Refund Scheme you can reclaim the 10% GST if you spend at least AUD 300 at a single business within 60 days of leaving, keep the original tax invoice, and carry the goods in your cabin bag. Claim at the airport TRS facility after security, and use the My TRS Claim app to skip the queue. Services, accommodation and anything consumed in Australia do not qualify." },
    { q: "Do you tip in Australia?", a: "No, tipping is not expected. Staff are paid a proper wage, so there is no tipping at cafes, bars or in taxis. In a nicer restaurant some people round up or leave about 10% for excellent service, but it is always optional. A public holiday surcharge on the bill is a cost of the day, not a tip." },
    { q: "Are ATMs easy to use in Australia, and do they charge?", a: "They are easy and widely available. Bank ATMs (CommBank, Westpac, NAB, ANZ) generally do not charge foreign cards a machine fee, while independent ATMs in pubs and shops often add a few dollars. Whatever the machine, choose Australian dollars, not US dollars." },
    { q: "How much cash should I bring for a week in Australia?", a: "Very little on top of card spending. For most visitors AUD 50 to 100 across the week covers the occasional market stall or rural stop, refreshed from a bank ATM if needed. Everything else can go on a tapped card." }
  ],

  culture: {
    heading: "A little Aussie goes a long way",
    intro: "Australia is relaxed and egalitarian, and a friendly, low-key manner fits right in. Nobody expects the slang, but a warm g'day, a bit of self-deprecating humor, and taking things in your stride mark you as a good sort rather than a tourist. Aussies value a fair go and an easy laugh.",
    phrases: [
      { mean: "Hello", say: "g-DAY", word: "G'day" },
      { mean: "Thank you", say: "tah", word: "Ta" },
      { mean: "Afternoon", say: "AH-vo", word: "Arvo" },
      { mean: "Barbecue", say: "BAR-bee", word: "Barbie" },
      { mean: "No problem", say: "no WORR-eez", word: "No worries" },
      { mean: "Genuine, the real thing", say: "fair DINK-um", word: "Fair dinkum" },
    ],
    tip: "Keep it easygoing and self-deprecating: Australians tend to distrust anyone who takes themselves too seriously, and gentle teasing between friends is a sign of warmth, not an insult. A cheerful <b>no worries</b> is the all-purpose reply to a thank-you or a small hiccup.",
    stories: [
      { img: "/australia-culture-1.jpg",
        alt: "Vintage travel-poster illustration of a great red desert monolith glowing deep orange at sunset in the outback, red earth and clumps of spinifex grass in the foreground, a lone desert tree, and a wide sky shading from gold to violet",
        h: "The red heart of the country",
        p: "Rising from the desert at the center of the continent, Uluru is one of the world's great sights and a deeply sacred place to the Anangu, its traditional owners. The rock glows through reds and oranges at sunrise and sunset. Out of respect for the Anangu, climbing it was ended in 2019, so walk the base instead and let the scale and the silence do the work.",
        note: "Good to know: the base walk, not the climb, is how you visit today" },
      { img: "/australia-culture-2.jpg",
        alt: "Vintage travel-poster illustration of a golden surf beach at midday, rolling turquoise waves and a rocky headland, swimmers between two plain red and yellow flags, and a family gathered around a small barbecue on the sand",
        h: "The beach and the barbie",
        p: "Summer in Australia means the beach and a barbecue, and both come with quiet local rules. At a patrolled beach, always <b>swim between the red and yellow flags</b>, where the surf lifesavers are watching, and heed any signs about rips. Public barbecues sit in parks and on foreshores for anyone to use, so a cook-up with friends is the classic, easygoing Aussie afternoon.",
        note: "Say it: swim between the flags, always" },
      { img: "/australia-culture-3.jpg",
        alt: "WPA-style illustration of eucalyptus bushland at golden hour, a group of kangaroos grazing among gum trees, a koala resting in the fork of a tree, and a kookaburra perched on a branch",
        h: "The bush and its locals",
        p: "Australia's wildlife lives nowhere else, and you meet it easily: kangaroos grazing at dusk, a koala dozing in a gum tree, a kookaburra laughing at dawn. The animals are most active early and late, so those are the times to look. If you drive at dawn or dusk, slow down for kangaroos on country roads, which is both safer and kinder.",
        note: "Good to know: dawn and dusk are the best times to spot wildlife" },
    ],
    pride: "Australia is proud of its wide-open landscapes, its extraordinary wildlife, and a laid-back, fair-go spirit. Meet it with warmth and a bit of humor, and you will feel at home fast."
  },

  // HUB-AND-SPOKE SPOKES. Data-driven, single-source, each independently dated,
  // rendered by components/Spoke.astro via src/pages/[slug]/[spoke].astro.
  spokes: [
    {
      slug: "driving-and-tolls",
      glance: [
        { k: "Tolls", v: "All electronic, no cash anywhere" },
        { k: "Toll states", v: "NSW, Victoria and Queensland only" },
        { k: "Rental admin", v: "About $3 a toll, or a daily pass" },
        { k: "Standard excess", v: "Often AU$3,000 to $8,000" }
      ],
      live: true,
      topic: "driving",
      title: "Driving in Australia: tolls, rental fees, excess",
      description: "Australian tolls are cashless, and the rental handling fee often costs more than the toll. Which states charge, and the excess in your rental contract.",
      h1: "Driving in Australia: tolls, fees and the excess",
      lede: "Two things decide what driving in Australia costs you, and neither is the daily rate. One is how your rental company handles tolls, which varies more than almost anything else. The other is the excess buried in the agreement.",
      checked: "Jul 2026",
      checkedISO: "2026-07-31",
      answer: "Australian toll roads have been <b>100% electronic since 2013</b>. There is <b>no cash option anywhere</b>, no booth to stop at, and no way to settle up at the road. Tolls exist in <b>three states only</b>: New South Wales, Victoria and Queensland. Western Australia, South Australia, Tasmania, the Northern Territory and the ACT have <b>none at all</b>. The cost that surprises people is not the toll but the <b>rental company's handling of it</b>, which ranges from nothing extra, to about <b>$3 per crossing</b>, to a prepaid daily toll pass at <b>AU$20 to $55 a day</b> depending on the state. Separately, check your <b>excess</b>: the standard figure is commonly <b>AU$3,000 to $8,000</b>, and it applies even when a kangaroo or a hailstorm is at fault.",
      carExcess: true,
      sections: [
        {
          h: "Cashless tolls, and the fee on top of the fee",
          icon: "receipt",
          key: { fig: "AU$20-55", tag: "A day, for a prepaid toll pass", text: "Toll policies vary more between rental companies than any other charge. Some add nothing, some bill about $3 a crossing, some sell a daily pass that costs more than the tolls.", tone: "amber" },
          p: [
            "Because there is no cash lane, your rental car's plate is simply photographed and the toll gets settled later, which means the rental company is in the middle of the transaction and prices that position differently at every brand. Some bill you the toll and a per-crossing admin fee of around <b>AU$3</b>. Some state they add <b>no fee</b> at all and pass through the toll. Others sell a <b>prepaid daily toll pass</b>, and those are the ones to look at closely: published daily rates run around <b>AU$55 in New South Wales</b>, <b>AU$33 in Victoria</b> and <b>AU$20 in Queensland</b>, charged for the days you hold it rather than the days you actually use a toll road.",
            "That matters because a single trip across Sydney using several motorways is roughly <b>AU$15 to $30</b> in actual tolls. If your driving is one airport run and a couple of city crossings, a $55 a day pass costs multiples of the tolls it covers. If you are commuting across Sydney daily for a week, it may pay. There is no general answer, which is exactly why the counter can sell it either way.",
            "The expensive mistake is leaving a toll unpaid. Escalation is quick: the base toll plus a video fee in the first two weeks, then a further admin fee, then enforcement fees, then debt collection. On top of that the rental company charges its own <b>AU$15 to $30</b> per toll notice it has to process. So ask one question at pickup: <b>how are tolls charged on this car, and what is the fee</b>. Get the answer in writing."
          ]
        },
        {
          h: "Where the tolls actually are",
          icon: "wheel",
          key: { fig: "3 states", tag: "The rest are toll-free", text: "Tolls are concentrated in Sydney, Melbourne and southeast Queensland. Hire in Perth, Adelaide, Darwin, Hobart or Canberra and tolls are simply not part of your trip.", tone: "teal" },
          p: [
            "<b>Sydney</b> has by far the most, including the Harbour Bridge and Tunnel, the Eastern Distributor, the Cross City and Lane Cove tunnels, the M2, M4, M5, M7, M8 and NorthConnex, with rates that vary by time of day and direction. <b>Melbourne</b> has three: CityLink, EastLink and the West Gate Tunnel. <b>Southeast Queensland</b> covers the Gateway and Logan motorways, Legacy Way, the Clem Jones tunnel and Airport Link.",
            "Everywhere else is free. If your trip is Perth and the southwest, Adelaide and the Barossa, Tasmania, the Red Centre or Canberra, tolls are not a line item and a daily toll pass is money for nothing. Confirm it against your route before you buy anything at the counter.",
            "If you do want to avoid tolls in the toll cities, both Google Maps and Apple Maps have an avoid-tolls setting, but be honest about the trade: the toll-free alternatives through Sydney cost roughly <b>30 to 90 minutes</b> extra, and Melbourne <b>15 to 45</b>. Brisbane has the most usable free alternatives. Buying back an hour in Sydney traffic for a few dollars is often the better deal."
          ]
        },
        {
          h: "The excess, and what voids it",
          icon: "alert",
          key: { fig: "AU$3-8k", tag: "Standard excess on a hire car", text: "Liability cover is included in Australia, but the damage excess is high and applies even for animal strikes and hail. Unsealed-road driving can void the waiver entirely.", tone: "amber" },
          p: [
            "The good news is that <b>injury liability is included</b>: compulsory third party cover comes with the vehicle's registration, so there is no mandatory insurance ambush at the desk. The catch is the <b>damage excess</b>. Australian hire cars come with a basic collision or loss damage waiver that caps your liability at an excess commonly quoted at <b>AU$3,000 to $8,000</b>, and sometimes higher. That figure is held or authorized against your card, and it applies even where nobody was at fault, including <b>animal strikes and hail</b>.",
            "The exclusions are where cover disappears rather than just costing you the excess. Driving on <b>unsealed or dirt roads</b> when the agreement prohibits it can <b>void the waiver entirely</b>, leaving you liable for the full repair. The same goes for <b>beach driving</b>, unauthorised drivers, and <b>overhead or underbody strikes</b> such as car-park height bars and cattle grids. Even paid excess-reduction products frequently still exclude <b>windscreen, tires and lost keys</b>. If your itinerary includes any unsealed road, and in Australia plenty of good destinations do, confirm in writing that your vehicle class and your cover both permit it.",
            "On credit cards, Australia is one of the destinations <b>American Express rental cover commonly excludes</b>, alongside New Zealand and Italy, so it is not a reliable fallback here. A standalone excess policy bought before you travel is usually far cheaper than the counter's excess reduction and often covers glass, tires and underbody that the counter's version will not. One useful protection you do have: under <b>Australian Consumer Law</b> you are entitled to an itemised repair invoice and a fair opportunity to dispute damage charges before your card is debited, so ask for the invoice and do not accept a bare figure."
          ]
        },
        {
          h: "What this means for your money",
          icon: "tag",
          key: { fig: "Ask 2 things", tag: "Tolls and excess, at the counter", text: "Settle how tolls are billed and what the excess is before you take the keys, and price the toll pass against your actual route rather than buying it by default.", tone: "teal" },
          p: [
            "Two questions at the counter cover most of the risk: <b>how are tolls billed and at what fee</b>, and <b>what is the excess and what voids it</b>. Both answers should be in writing on the agreement, not verbal. Then price the daily toll pass against your real route: if you are not driving in Sydney, Melbourne or southeast Queensland, decline it.",
            "Your <b>US license is valid</b> and no international permit is needed, since an international driving permit is a translation and a US license is already in English. In New South Wales and Victoria the visitor limit is around <b>six months</b>, which no holiday reaches. Remember you are driving on the <b>left</b>, in a right-hand-drive car, and that the first few roundabouts are where habits betray people.",
            "One last cost that is not the car: distances. Australian legs are far longer than the map suggests, so fuel is a serious budget line and outback roadhouse prices run well above city ones. Plan realistic daily distances, and see the <a href='/australia/cash-or-card'>Australia cash and cards guide</a> for paying at the pump."
          ]
        }
      ],
      faqs: [
        { q: "Can I pay Australian tolls with cash?", a: "No. Australian toll roads have been entirely electronic since 2013 and there is no cash option anywhere in the country. Your rental car's plate is photographed and the toll is settled afterward through the rental company or a toll account, which is why the rental company's handling fee matters as much as the toll itself." },
        { q: "Should I buy the rental company's daily toll pass?", a: "Only if your route justifies it. Published daily rates run about AU$55 in New South Wales, AU$33 in Victoria and AU$20 in Queensland, and they are charged for the days you hold the pass, not the days you use a toll road. A single cross-Sydney trip is roughly AU$15 to $30 in actual tolls, so for light city driving the pass often costs more than the tolls." },
        { q: "Which parts of Australia have no toll roads?", a: "Western Australia, South Australia, Tasmania, the Northern Territory and the ACT have none. Tolls exist only in New South Wales, Victoria and Queensland, concentrated around Sydney, Melbourne and southeast Queensland. Hire in Perth, Adelaide, Darwin, Hobart or Canberra and tolls will not be part of your trip." },
        { q: "What is the excess on an Australian hire car?", a: "Commonly AU$3,000 to $8,000, and sometimes more. Injury liability is included through the vehicle's compulsory third party cover, but the damage excess is yours and it applies even for animal strikes and hail. Driving on unsealed roads when the agreement prohibits it can void the waiver altogether." },
        { q: "Do I need an international driving permit in Australia?", a: "No, not with a US license. An international driving permit is essentially a translation, and a US license is already in English, so it is accepted as it is. New South Wales and Victoria set a visitor driving limit of around six months, which no holiday will reach." }
      ],
      sources: {
        links: [
          { label: "Linkt: a major Australian toll operator, for current toll roads, rates and visitor account options", url: "https://www.linkt.com.au/", type: "gov" },
          { label: "Australian Competition and Consumer Commission: your rights on car hire damage charges under Australian Consumer Law", url: "https://www.accc.gov.au/consumers/travel-and-transport/car-hire", type: "gov" }
        ],
        judgment: "The settled facts are that Australian tolling is fully electronic with no cash option, that tolls exist only in New South Wales, Victoria and Queensland, and that compulsory third party injury cover comes with the vehicle. Everything with a dollar sign is a current market figure rather than a regulated one. Rental toll handling genuinely conflicts between operators, from published statements of no added fee, to roughly AU$3 per crossing, to daily toll-pass rates around AU$55, $33 and $20 by state, so we describe the range and tell you to ask rather than quoting one policy as the norm. Excess figures of AU$3,000 to $8,000 are the band appearing across Australian insurers and motoring bodies, and vary by vehicle, operator and driver age. Toll rates themselves are adjusted quarterly by the operators, and the New South Wales weekly toll cap ended on 1 January 2026 and was replaced by a quarterly rebate scheme aimed at registered local account holders, which is unlikely to help a visitor. Confirm current rates with the operator and the fee schedule with your rental company. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Apps", v: "Uber, DiDi, Ola (also 13cabs)" },
        { k: "Taxis", v: "Metered, cashless, small surcharge" },
        { k: "From the airport", v: "App, or the train or SkyBus" },
        { k: "Tipping", v: "None (round up if you like)" }
      ],
      live: true,
      topic: "taxis",
      caution: "low",
      title: "Taxis in Australia: the apps, and cashless cabs",
      description: "Uber, DiDi, Ola and 13cabs all operate. Taxis are metered and cashless with a card surcharge, airports add a fee, and tipping is not expected.",
      h1: "Taxis in Australia, and the apps to use",
      lede: "Getting around Australia is easy: Uber and its rivals are everywhere, taxis are metered and effectively cashless, and you do not tip. The one quirk is a small card surcharge. Here is how it works.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Install <b>Uber</b>, and <b>DiDi</b> and <b>Ola</b> compete on price, while <b>13cabs</b> is the app for traditional taxis. Taxis are <b>metered, regulated and effectively cashless</b>: you tap a card or phone, and a small <b>card surcharge</b> (often 1 to 2%) is normal and shown up front. From the airport, an <b>app</b> is simplest, or the <b>train</b> in Sydney and the <b>SkyBus</b> in Melbourne. <b>Tipping is not expected</b>, though you can round up for a great trip.",
      sections: [
        {
          h: "Which apps to install",
          icon: "phoneok",
          key: { fig: "Apps", tag: "Uber leads", text: "Uber is everywhere, with DiDi and Ola competing on price. 13cabs is the app for booking a traditional metered taxi.", tone: "teal" },
          p: [
            "<b>Uber</b> is the default across Australian cities, and <b>DiDi</b> and <b>Ola</b> often undercut it, so it is worth having a couple installed to compare. For a traditional taxi, the <b>13cabs</b> app (and similar state operators) books a metered cab.",
            "Coverage is strong in <b>Sydney, Melbourne, Brisbane, Perth</b> and beyond. In smaller towns, apps thin out and a phone booking or a rank is the norm."
          ]
        },
        {
          h: "From the airport",
          icon: "plane",
          key: { fig: "By app", tag: "Or train or SkyBus", text: "An app is simplest from the marked rideshare zone. In Sydney the Airport Link train reaches the city; in Melbourne the SkyBus does.", tone: "teal" },
          p: [
            "An <b>app</b> is the easy option from the marked <b>rideshare pickup zone</b> at major airports. In <b>Sydney</b>, the <b>Airport Link train</b> runs straight into the city (with a station access fee built into the ticket). A metered <b>taxi</b> is reliable too, with an airport toll added.",
            "In <b>Melbourne</b>, the <b>SkyBus</b> is the standard link from Tullamarine into the city, since there is no airport train yet, and Uber and taxis serve the marked zones."
          ]
        },
        {
          h: "Cashless, metered, small surcharge",
          icon: "card",
          key: { fig: "Cashless", tag: "Tap, small surcharge", text: "Taxis are metered and effectively cashless: tap a card or phone. A small card surcharge (often 1 to 2%) is legal and shown up front.", tone: "teal" },
          p: [
            "Taxis are <b>metered and regulated</b>, and Australia is <b>effectively cashless</b>, so you <b>tap a card or phone</b> in the taxi or pay in the app. Expect a small <b>card surcharge</b> (often 1 to 2%, sometimes a flat fee), which is <b>legal and disclosed</b> up front, so it is normal to see it.",
            "There is nothing to negotiate: the meter or the app sets the fare. Apps show the price before you book, which is usually the easiest way to know the cost."
          ]
        },
        {
          h: "Fares, paying and tipping",
          icon: "aud",
          key: { fig: "No tip", tag: "Round up if you like", text: "Fares are metered or set in the app. Tipping is not expected, though rounding up for a great trip is a welcome gesture.", tone: "teal" },
          p: [
            "Fares are <b>metered</b> in a taxi or <b>set in the app</b>, and paid by card or phone. <b>Tipping is not expected</b> in Australia, since drivers earn a proper wage, though <b>rounding up</b> for a particularly good trip is a welcome gesture.",
            "For more, see <a href='/australia/tipping'>tipping in Australia</a>, <a href='/australia/cash-or-card'>cash or card in Australia</a>, and the <a href='/australia'>Australia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Uber in Australia?", a: "Yes, Uber is the default across Australian cities, with DiDi and Ola often cheaper, so it is worth comparing. For a traditional metered taxi, the 13cabs app books one." },
        { q: "How do I get from a big Australian airport to the city?", a: "An app from the marked rideshare zone is simplest. In Sydney the Airport Link train reaches the city; in Melbourne the SkyBus is the standard link from Tullamarine. Metered taxis serve both, with an airport toll." },
        { q: "Do you tip taxi drivers in Australia?", a: "No, it is not expected, since drivers earn a proper wage. Rounding up for a great trip is a welcome gesture, but never required." },
        { q: "Why did my Australian taxi add a surcharge?", a: "A small card surcharge, often 1 to 2%, is legal and common in Australia and must be shown up front. Taxis are effectively cashless, so you tap a card or phone and see the surcharge on the fare." }
      ],
      sources: {
        links: [
          { label: "Tourism Australia: official travel information", url: "https://www.australia.com", type: "gov" },
          { label: "US State Department: Australia country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Australia.html", type: "gov" }
        ],
        judgment: "Australian taxis are metered, cashless and regulated, apps are the norm, and the card surcharge is disclosed. Fares and app coverage shift over time, so this is our practical read. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Australian dollar (AUD)" },
        { k: "Cards", v: "Near-cashless, tap for everything" },
        { k: "Cash for", v: "Rarely needed (a few markets)" },
        { k: "On a card", v: "Choose Australian dollars" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Australia? Almost never 2026",
      description: "Australia is nearly cashless, so tap a card or phone for almost everything. Keep a little cash for markets and rural stops, and choose Australian dollars.",
      h1: "Do I need cash in Australia, or can I use cards?",
      lede: "Short answer: almost never. Australia is one of the most cashless countries anywhere, so you can tap for nearly everything. Here is how to handle it, including the card surcharge you may see.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Cards, almost entirely. Australia is <b>nearly cashless</b>: <b>contactless</b> is the default, and you can <b>tap a card or phone for almost everything</b>, even small purchases, at cafes, shops, restaurants and on transit. Many places are effectively <b>card-only</b>. You will <b>rarely need cash</b>: perhaps a little for <b>some markets, small rural spots or a food van</b>. The currency is the <b>Australian dollar</b>. Choose <b>Australian dollars, not US dollars</b>, on any card or ATM. Note that some places add a small <b>card surcharge</b>, shown at the till.",
      sections: [
        {
          h: "Near-cashless: tap for everything",
          icon: "phoneok",
          key: { fig: "Tap", tag: "Cards almost everywhere", text: "Australia is nearly cashless. Tap a card or phone for almost everything, even small purchases. You will rarely need cash.", tone: "teal" },
          p: [
            "Australia is <b>one of the most cashless countries anywhere</b>. <b>Contactless</b> is the default: you <b>tap a card or phone for almost everything</b>, even a coffee, at cafes, shops, restaurants and on transit, and many places are effectively <b>card-only</b>.",
            "You will <b>rarely need cash</b>. Keep a <b>little</b> for the exceptions: <b>some weekend markets, small rural spots, or a food van</b>, though even those increasingly tap."
          ]
        },
        {
          h: "Choose Australian dollars",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose AUD", text: "When a terminal or ATM offers US or Australian dollars, pick Australian dollars. US dollars trigger dynamic currency conversion at a rate about 3 to 8% worse.", tone: "amber" },
          p: [
            "When a card terminal or ATM asks whether to charge in <b>US or Australian dollars, always choose Australian dollars</b>. US dollars trigger dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. Decline it every time.",
            "One local quirk: some businesses add a small <b>card surcharge</b> (often around 1 to 2%, more for Amex), which must be <b>shown at the till</b>. It is legal and common, so do not be surprised by it."
          ]
        },
        {
          h: "How little cash you need",
          icon: "aud",
          key: { fig: "Barely any", tag: "A little for markets", text: "Most travelers get by with almost no cash. Keep a small amount of Australian dollars for markets and rural spots, just in case.", tone: "teal" },
          p: [
            "Most travelers get by with <b>almost no cash</b> in Australia. If you like a buffer, keep a <b>small amount of Australian dollars</b> for weekend markets, rural areas or a food van. Use a bank ATM if you need more, and a <b>debit card</b> to avoid cash-advance fees.",
            "For tipping norms (spoiler: you do not really tip), see <a href='/australia/tipping'>tipping in Australia</a>, and for the wider picture, the <a href='/australia'>Australia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Australia?", a: "Rarely. Australia is nearly cashless, and you can tap a card or phone for almost everything, even small purchases. Keep a little Australian-dollar cash only for some markets, rural spots or a food van." },
        { q: "Should I pay in Australian dollars or US dollars in Australia?", a: "Always Australian dollars. If a card machine or ATM offers US dollars, decline: that dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
        { q: "Why was I charged a card surcharge in Australia?", a: "Some businesses add a small card surcharge, often around 1 to 2% (more for Amex), which must be shown at the till. It is legal and common in Australia, so it is normal to see it." },
        { q: "Is Australia cashless?", a: "Nearly. Contactless is the default and many places are effectively card-only, so most travelers get by with almost no cash. Keep a little for markets or rural spots just in case." }
      ],
      sources: {
        links: [
          { label: "Reserve Bank of Australia: official exchange rate information", url: "https://www.rba.gov.au", type: "gov" },
          { label: "US State Department: Australia country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Australia.html", type: "gov" }
        ],
        judgment: "Australia is one of the most cashless economies anywhere, so cards cover nearly everything, though disclosed card surcharges are common. The dollar rate moves, and the firm rule is to decline US-dollar conversion. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Not expected, not the culture" },
        { k: "Why", v: "Staff earn a high minimum wage" },
        { k: "Nice restaurant", v: "A small tip is optional" },
        { k: "Cafes, taxis", v: "No tip" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Australia: you do not need to tip 2026",
      description: "Tipping is not expected in Australia because staff earn a high minimum wage. When a small tip is optional, and how to handle the terminal prompt.",
      h1: "Tipping in Australia",
      lede: "Australia is not a tipping country. Staff earn a high minimum wage, so tipping is not expected anywhere, and you can relax about it. A small tip for exceptional service is optional. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Australia is <b>not a tipping country</b>. Hospitality staff earn a <b>high minimum wage</b>, so tipping is <b>not expected</b> at cafes, restaurants, bars or in taxis, and no one will think twice if you leave nothing. For <b>exceptional service at a nicer restaurant</b>, a <b>small tip</b> (around 10%, or rounding up) is a welcome gesture but never required. Card terminals increasingly <b>prompt for a tip</b>, US-style, but you can simply <b>decline</b>. Otherwise, the price or meter is what you pay.",
      sections: [
        {
          h: "You do not need to tip",
          icon: "notip",
          key: { fig: "Not expected", tag: "High minimum wage", text: "Tipping is not expected anywhere in Australia. Staff earn a high minimum wage, so leaving nothing is completely normal.", tone: "teal" },
          p: [
            "Australia is <b>not a tipping culture</b>. Because hospitality staff earn a <b>high minimum wage</b> (and do not depend on tips the way US servers do), tipping is <b>not expected</b> at <b>cafes, restaurants, bars or in taxis</b>. Leaving nothing is <b>completely normal</b> and nobody will bat an eye.",
            "For visitors from the US, this is a genuine relief: the <b>price or the meter is the price</b>, full stop."
          ]
        },
        {
          h: "The exception: exceptional service",
          icon: "tip",
          key: { fig: "Optional", tag: "A nice restaurant", text: "For exceptional service at a nicer restaurant, a small tip (about 10%, or rounding up) is welcome but never expected.", tone: "teal" },
          p: [
            "The one time Australians might tip is for <b>genuinely exceptional service at a nicer restaurant</b>: leaving <b>around 10%</b>, or simply <b>rounding up</b> the bill, is a welcome gesture. Larger groups occasionally see a <b>service charge</b> on the bill, so check.",
            "But this is a <b>bonus for standout service</b>, not a default. A normal meal needs no tip."
          ]
        },
        {
          h: "Watch the card terminal",
          icon: "card",
          key: { fig: "You can decline", tag: "Prompts are creeping in", text: "Card terminals increasingly prompt for a tip, US-style, but tipping is not expected here, so decline without a second thought.", tone: "amber" },
          p: [
            "One modern wrinkle: <b>card terminals increasingly prompt for a tip</b>, US-style, sometimes with preset percentages. Since tipping is <b>not expected</b> in Australia, you can <b>decline without a second thought</b>, and locals routinely do.",
            "No tip is needed at <b>cafes, bars or in taxis</b>. For the wider picture, see the <a href='/australia'>Australia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Australia?", a: "No, it is not expected. Hospitality staff earn a high minimum wage, so tipping is not the culture at cafes, restaurants, bars or in taxis. Leaving nothing is completely normal." },
        { q: "How much do you tip at an Australian restaurant?", a: "Nothing is expected. For exceptional service at a nicer restaurant, a small tip of about 10% or rounding up is a welcome gesture, but a normal meal needs no tip." },
        { q: "Why does the card machine in Australia ask for a tip?", a: "Terminal tip prompts have crept in, US-style, but tipping is not expected in Australia. You can decline without a second thought, and locals routinely do." },
        { q: "Do you tip taxi drivers in Australia?", a: "No, it is not expected. The metered fare is what you pay, though rounding up is a small courtesy if you like." }
      ],
      sources: {
        links: [
          { label: "US State Department: Australia country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Australia.html", type: "gov" }
        ],
        judgment: "Australia's no-tipping norm rests on its high hospitality minimum wage, though US-style terminal prompts are a growing wrinkle. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "eta",
      glance: [
        { k: "Visa", v: "ETA (subclass 601), before you fly" },
        { k: "The catch", v: "App-only, no website" },
        { k: "Cost", v: "Flat AUD $20 (about $13 US)" },
        { k: "Where", v: "The official AustralianETA app" }
      ],
      live: true,
      topic: "visas",
      title: "Australia ETA for US citizens: how to apply 2026",
      description: "US citizens need an Australian ETA and can only apply through the official app. The AUD 20 dollar fee, how long it lasts, and the chipped-passport rule.",
      h1: "How do US citizens get an Australia ETA?",
      lede: "Short answer: through the official app, and only the app. US citizens need an Australian ETA, it is cheap and usually instant, but the app-only process trips people up. Here is how it works and what it costs.",
      checked: "Jul 2026",
      checkedISO: "2026-07-08",
      answer: "US citizens need an <b>Australian ETA</b> (Electronic Travel Authority, subclass 601) before they fly, and here is the catch: you can <b>only apply through the official Australian ETA app</b>, there is no website version. It costs a flat <b>AUD $20</b> service fee (about 13 US dollars), is valid <b>12 months</b> with multiple entries of up to 3 months each, and is usually approved within minutes.",
      official: {
        label: "Official Australian ETA (Department of Home Affairs)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601",
        note: "The only way to apply is the free AustralianETA app (from the Apple App Store or Google Play, published by the Department of Home Affairs). This government page explains eligibility; the application itself happens in the app, where the AUD $20 fee is paid."
      },
      expediter: false,
      sections: [
        {
          h: "The catch: it is app-only",
          icon: "phoneok",
          key: { fig: "App-only", tag: "No website", text: "Since 2022, the only way to apply for an Australian ETA is the official AustralianETA app from the Department of Home Affairs. There is no website version, so ignore any site claiming otherwise.", tone: "teal" },
          p: [
            "Since 2022, the <b>only</b> way to apply for an Australian ETA is the official <b>AustralianETA app</b>, made by the Department of Home Affairs. The old website application was retired, so if a site offers to process your ETA online, it is a third party, not the government. Download the app from the Apple App Store or Google Play.",
            "The app works by <b>scanning your passport chip</b> (your passport must be the chipped, electronic kind) and taking a <b>live selfie</b>. If your passport cannot be scanned, or you have a complication like a past visa refusal, you apply for a different visa (Subclass 600) instead."
          ]
        },
        {
          h: "What it costs, and what you get",
          icon: "aud",
          key: { fig: "AUD $20", tag: "The only real cost", text: "There is no visa application charge, but the app charges a flat AUD $20 service fee, roughly $13 US, and that is the only legitimate cost. The ETA is valid for a year of visits.", tone: "teal" },
          p: [
            "There is <b>no visa application charge</b>, but the app charges a flat <b>AUD $20 service fee</b> (roughly 13 US dollars), and that is the only legitimate cost. It is non-refundable.",
            "The ETA is <b>valid for 12 months</b> (or until your passport expires), with <b>multiple entries</b> of up to <b>3 months</b> each. It covers tourism, visiting family, and business visitor activities like meetings and conferences, but <b>not paid work</b>. It is linked to your passport, so there is nothing to print."
          ]
        },
        {
          h: "How to apply, step by step",
          icon: "qr",
          key: { fig: "10 min", tag: "In the app", text: "Most people finish in under ten minutes in the app: scan your passport, take a photo, answer a few questions and pay the AUD $20. Apply before you book flights to be safe.", tone: "teal" },
          p: [
            "Most people finish in under ten minutes."
          ],
          steps: [
            "Download the free AustralianETA app from the Apple App Store or Google Play. Check it is the one by the Department of Home Affairs.",
            "Scan your passport chip with your phone, then take the live selfie the app prompts for.",
            "Fill in your details and answer the questions honestly. Traveling as a family? Use the Group ID function.",
            "Pay the AUD $20 by card. Most applications are approved within minutes, though some take up to 72 hours.",
            "Check the result in the app. Once granted, the ETA is tied to your passport automatically."
          ]
        },
        {
          h: "Watch for the markup sites, and one gotcha",
          icon: "alert",
          key: { tag: "Skip the markup sites", text: "Because the ETA is a paid, required document, lookalike sites rank in search and charge well above the AUD $20 to file it. The app is the only official route, so use nothing else.", tone: "amber" },
          p: [
            "Because the ETA is a paid, required document, plenty of <b>lookalike sites</b> rank in search and charge well above the AUD $20 to file it for you. The app is the only official channel and the fee is always just AUD $20, so anything higher is a markup.",
            "The gotcha: if you <b>renew your passport</b>, your ETA becomes invalid and you need a new one, because it is linked to the specific passport. And the ETA <b>cannot be extended</b>, for a longer stay you would need a Subclass 600 visitor visa. For how money works once you land, see the <a href=\"/australia\">Australia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa for Australia?", a: "US citizens need an Australian ETA (Electronic Travel Authority, subclass 601), which is an electronic authority equivalent to a visa. You apply only through the official AustralianETA app for a flat AUD $20 service fee. It is valid 12 months, allows multiple entries of up to 3 months each, and is usually approved within minutes." },
        { q: "How do I apply for the Australia ETA, and is there a website?", a: "There is no website. Since 2022 the only official channel is the AustralianETA app from the Department of Home Affairs, on the Apple App Store or Google Play. You scan your passport chip, take a selfie, answer the questions, and pay AUD $20 in the app. If your passport has no chip, you apply for a Subclass 600 visitor visa instead." },
        { q: "How much does the Australia ETA cost?", a: "A flat AUD $20 service fee (about 13 US dollars), paid in the app. There is no separate visa application charge, so AUD $20 is the only legitimate cost. Third-party sites that charge more are adding their own markup for filing the same application." },
        { q: "How long is the Australia ETA valid?", a: "The ETA is valid for 12 months from grant, or until your passport expires, whichever comes first. It allows multiple entries, each stay up to 3 months. It cannot be extended, and if you renew your passport you must apply for a new ETA, since it is linked to the specific passport." }
      ],
      sources: {
        links: [
          { label: "Australian Department of Home Affairs: the official Electronic Travel Authority (subclass 601) page, cost, validity and conditions", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601", type: "gov" },
          { label: "AustralianETA app on Google Play (published by the Department of Home Affairs): the only official channel to apply, noting the AUD $20 service fee", url: "https://play.google.com/store/apps/details?id=au.gov.homeaffairs.eta", type: "gov" }
        ],
        judgment: "The ETA is app-only and the AUD $20 service fee is the only legitimate charge, but fees and conditions can change, so confirm on the official Home Affairs page before you apply. Checked July 2026."
      }
    },
    {
      slug: "bringing-your-pet",
      glance: [
        { k: "Lead time", v: "At least 6 to 7 months" },
        { k: "Fixed wait", v: "180 days, cannot shorten" },
        { k: "Permit", v: "A BICON import permit (~AUD 600)" },
        { k: "Quarantine", v: "Mandatory at Mickleham" }
      ],
      live: true,
      topic: "pets",
      title: "Bringing a dog or cat to Australia: cost and wait",
      description: "Australia wants a rabies titer plus a 180-day wait before you fly, a BICON permit, and Mickleham quarantine, 10 days if the identity check passes.",
      h1: "Bringing your dog or cat to Australia.",
      lede: "Australia has the strictest pet import process of any English-speaking country, and it is the most expensive move we cover. Two numbers frame it: a lead time of at least 6 to 7 months, set by a rabies test and a fixed 180-day wait, and an all-in cost that often reaches five figures. Here is the order, the official route, and where the money goes.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Give yourself <b>at least 6 to 7 months</b>. The mainland US is a <b>Group 3 country</b>, so your pet needs a <b>rabies antibody test (RNATT)</b> and then a <b>fixed 180-day residency period</b> that starts when the lab receives the blood sample and cannot be shortened. You also need a <b>BICON import permit</b> and mandatory <b>quarantine at the Mickleham facility near Melbourne</b>. One optional step, an <b>identity check done before the blood draw</b>, cuts that quarantine from 30 days to 10. Budget <b>several thousand dollars, often well into five figures</b> for a large dog using a shipper, with air cargo and quarantine the biggest costs.",
      sections: [
        {
          h: "The two numbers: lead time and cost",
          icon: "calendar",
          key: { fig: "6-7 months", tag: "Start early", text: "Two large things decide an Australia move: lead time is at least 6 to 7 months, dominated by a fixed 180-day residency that starts when the lab receives the blood sample and cannot be shortened.", tone: "teal" },
          p: [
            "The two things that decide an Australia move with a pet, and both are large. <b>Lead time is at least 6 to 7 months</b>, dominated by a fixed 180-day waiting period tied to the rabies antibody test, plus permit processing and quarantine booking. <b>Cost is the highest of any destination we cover</b>, commonly several thousand dollars and often well into five figures for a large dog handled by a relocation company. The biggest lines are air transport as cargo to Melbourne and the mandatory government quarantine.",
            "Australia only accepts pets from approved countries and classes the mainland US as Group 3, meaning rabies is present but controlled, so a testing and waiting sequence applies. Guam and Hawaii are treated differently, so contact Australia's Department of Agriculture, Fisheries and Forestry first if your pet is coming from either."
          ]
        },
        {
          h: "The steps, in order",
          icon: "health",
          key: { tag: "Order is unforgiving", text: "The sequence matters more here than almost anywhere: one step, the identity check, has to happen before the blood draw, or you lose the result and restart. Follow the order exactly.", tone: "amber" },
          p: [
            "The sequence matters more here than almost anywhere, and one step, the identity check, has to happen before another, the blood draw, or you lose the option to shorten quarantine."
          ],
          steps: [
            "Microchip first, before any rabies vaccination.",
            "Rabies vaccination with an approved vaccine, given when your pet is at least 84 days old. The vaccination must stay valid all the way through to export, or you risk starting over.",
            "Identity check, optional but worth it. Have an official vet verify your pet's identity before the rabies blood draw and at least 180 days before export. This single step cuts mandatory quarantine from 30 days to 10, which usually saves more than it costs. It cannot be done at the same visit as the blood draw.",
            "Rabies antibody test (RNATT). After a wait of about 3 to 4 weeks from the rabies shot, a vet draws blood for a titer test (FAVN or RFFIT) sent to an approved laboratory; the result must be at least 0.5 IU per ml.",
            "The 180-day residency. A 180-day clock starts on the day the laboratory receives the blood sample, and your pet cannot be exported until it is complete. This is a residency period, not quarantine, so your pet stays home with you, but there are no exceptions to the 180 days.",
            "Import permit through BICON. Once the rabies documents are ready, apply for a biosecurity import permit in Australia's BICON system. Processing commonly takes a few weeks.",
            "Book Mickleham quarantine. As soon as the permit is issued, book your pet's post-entry quarantine, since space is limited.",
            "Final window. Close to travel, your pet gets parasite treatments, a final exam and an export health certificate from a USDA-accredited vet, endorsed by USDA APHIS.",
            "Fly as cargo to Melbourne, then quarantine. Pets enter only as manifest cargo at Melbourne, and government staff transfer them to the Mickleham facility for their 10 or 30 day stay. Owners cannot collect a pet at the airport."
          ]
        },
        {
          h: "Dogs face extra tests, and cats are not exempt from the titer",
          icon: "alert",
          key: { fig: "Dogs: more", tag: "Species-specific", text: "Dogs carry a heavier load: on top of the rabies sequence they need a canine influenza vaccination and, depending on the permit, other tests. Cats still need the rabies titer too.", tone: "teal" },
          p: [
            "Dogs from the US carry a heavier load than cats. On top of the rabies sequence, dogs need a <b>canine influenza vaccination</b>, and depending on your permit they may need testing or treatment for diseases such as <b>Brucella canis</b> and <b>Ehrlichia canis</b>, with conditions that have changed in recent years. Because these dog rules move, read your import permit and Australia's step-by-step guide carefully rather than relying on an old checklist.",
            "Cats are simpler but still need the rabies antibody test, even an indoor-only cat that has never been outside. A handful of dog breeds are banned from entry entirely, so check the list if you have a restricted breed."
          ]
        },
        {
          h: "Where the money goes",
          icon: "aud",
          key: { fig: "AUD 600", tag: "Permit plus quarantine", text: "The two government charges you can pin down are the BICON import permit, roughly AUD 600 and non-refundable, and the mandatory Mickleham quarantine, a minimum 10-day stay you book and pay for.", tone: "amber" },
          p: [
            "The two government charges you can pin down are the <b>BICON import permit</b>, roughly AUD 600 and non-refundable, and the <b>Mickleham quarantine</b>, with a minimum 10-day stay around AUD 1,900 and a 30-day stay considerably more. On top of those sit the rabies antibody test and other lab work, the canine influenza vaccine for dogs, an airline-approved crate, and the single largest cost, air cargo to Melbourne. There is also a smaller airline handling charge collected before your pet is released.",
            "Government fees are reviewed regularly and airfreight pricing swings a lot, so treat these as a budgeting frame and confirm the current figures with the Department of Agriculture and your airline before you commit."
          ]
        },
        {
          h: "The money side, honestly",
          p: [
            "No insurance product reimburses mandatory quarantine. Not pet health insurance, not travel insurance with a pet add-on, not a shipper's own protection plan. If your destination requires a quarantine stay, treat that boarding bill as an out-of-pocket cost and budget it from the start. Nationwide is the one US pet insurer that reimburses vet care at any licensed vet worldwide, and even it excludes boarding, which is what quarantine is.",
            "US pet insurance is written around a pet that lives in the US. Most policies carry a policy territory, typically the US and sometimes Canada or Puerto Rico, and even the ones that reimburse vet care worldwide generally require your primary residence to stay in the US. So a policy may well pay a vet bill on a trip abroad and still lapse the day the move becomes permanent. Read your own policy's territory and residency wording before you assume it travels with you, and for a permanent move plan on taking out local pet insurance in your new country.",
            "As a rough sanity check on any quote, and this is our read of current market pricing rather than an official figure: a standard international pet move tends to run about $1,500 to $6,000, while destinations with mandatory quarantine sit higher, roughly $3,000 to $12,000 and up. Australia in particular often lands between $5,000 and $15,000 once quarantine and the limited set of approved flights are counted. Full-service door-to-door typically costs 30 to 50 percent more than a transport-only booking where you handle the vet work and paperwork yourself.",
            "The costs people forget are the small ones. USDA APHIS charges a user fee to endorse an export health certificate, currently $101 where no test verification is needed, $160 for a certificate covering one or two tests, and $206 for three to six tests, with rabies vaccination not counted in that tally. These rates rose on 10 January 2025, the first APHIS fee adjustment since 2012. Add an airline-compliant crate (roughly $50 to $400), the travel vet visits themselves, boarding on a layover, and summer heat surcharges.",
            "Pet shipping attracts scammers, so verify any company before you send money. IPATA, the International Pet and Animal Transportation Association, is a trade association: its members ship under their own company names, IPATA itself does not ship pets, and there is no legitimate shipper with \"ipata\" in its name. Scammers clone real shippers' sites, logos and testimonials, so check the company in the member directory at ipata.org rather than trusting a logo on a website. Treat these as red flags: a quote dramatically below every other quote, a domain registered less than six months ago, email coming from a gmail address rather than the company domain, and any request to pay by Western Union or MoneyGram."
          ]
        },
        {
          h: "Coming back to the US",
          icon: "plane",
          key: { fig: "Easy", tag: "The return trip", text: "The return is far simpler than the outbound: Australia is rabies-free, so a dog flying home to the US is on the CDC easy path, usually just a free CDC form.", tone: "teal" },
          p: [
            "The return is far simpler than the outbound trip. Australia is rabies-free, so a dog flying home to the US is on the CDC easy path, usually just a free CDC form receipt with no titer and no quarantine, which we cover in <a href=\"/bringing-a-dog-into-the-us\">bringing a dog into the US</a>.",
            "For how Australia compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."
          ]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Australia",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-australia",
        note: "The US-side steps, plus links to Australia's Group 3 step-by-step guides and the BICON permit system, which are the final word on the day."
      },
      faqs: [
        { q: "How long does it take to bring a pet to Australia from the US?", a: "Plan for at least 6 to 7 months. The timeline is dominated by a fixed 180-day residency period that starts when the lab receives the blood sample for the rabies antibody test, and it has no exceptions. Add the rabies vaccination and 3 to 4 week wait before the test, the import permit processing, and booking quarantine, and starting early is essential. Australia itself advises allowing at least 6 months." },
        { q: "How much does it cost to bring a dog to Australia?", a: "It is the most expensive move we cover, commonly several thousand dollars and often well into five figures for a large dog using a relocation company. The government charges alone include a BICON import permit of roughly AUD 600 and a Mickleham quarantine stay starting around AUD 1,900 for the 10-day minimum. The biggest cost is air cargo to Melbourne, followed by quarantine and the rabies and disease testing." },
        { q: "Can I avoid the 30-day quarantine at Mickleham?", a: "You can reduce it to a 10-day minimum, but only by completing an identity check with an official vet before the rabies blood draw and at least 180 days before export. If the identity check is skipped, done incorrectly, or done after the blood draw, your pet serves the 30-day minimum instead. The saving in quarantine fees usually more than covers the extra step, so most families do it." },
        { q: "Does my pet have to quarantine in Australia, and can it stay with me?", a: "Not at home. Every dog and cat from the US completes mandatory post-entry quarantine at the government's Mickleham facility near Melbourne, for a minimum of 10 or 30 days depending on the identity check. Pets fly in as cargo to Melbourne only, and government staff move them to Mickleham; owners cannot collect them at the airport or visit during the stay." }
      ],
      sources: {
        links: [
          { label: "Australian Department of Agriculture, Fisheries and Forestry: step-by-step guide to bring a dog to Australia from a Group 3 country", url: "https://www.agriculture.gov.au/biosecurity-trade/cats-dogs/how-to-import/step-by-step-guides/category-3-step-by-step-guide-for-dogs", type: "gov" },
          { label: "Australian Department of Agriculture: step-by-step guide to bring a cat to Australia from a Group 3 country", url: "https://www.agriculture.gov.au/biosecurity-trade/cats-dogs/how-to-import/step-by-step-guides/category-3-step-by-step-guide-for-cats", type: "gov" },
          { label: "Australian Department of Agriculture: post-entry quarantine fees and charges at the Mickleham facility", url: "https://www.agriculture.gov.au/biosecurity-trade/cats-dogs/quarantine-facilities-and-fees/fees", type: "gov" },
          { label: "USDA APHIS: pet travel from the United States to Australia, the US-side requirements and identity check", url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-australia", type: "gov" }
        ],
        judgment: "The rules and fees are set by Australia's Department of Agriculture, Fisheries and Forestry and administered on the US side by APHIS, not by us. This route is both the strictest and one of the more actively changing, especially the dog disease-testing conditions and the identity-check process, so we point you to the official pages and dated this in July 2026. Costs vary widely with your pet's size and your route, so confirm current permit and quarantine fees with the Department before you commit."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Strong in cities, coast and towns" },
        { k: "Carrier roaming", v: "$10 to $12 a day" },
        { k: "Cheapest", v: "A travel eSIM, a few $ per GB" },
        { k: "Signal gaps", v: "The remote Outback, for long stretches" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "medium",
      title: "eSIM for Australia: coverage and Outback gaps",
      description: "Coverage is strong in cities, on the coast and in main towns, thin in the remote Outback. US roaming runs about 10 to 12 dollars a day; an eSIM is less.",
      h1: "Staying connected in Australia.",
      lede: "Two things to sort here. The cost question, which an eSIM usually answers, and the distance question, because Australia is enormous and the coverage map has real holes in it once you leave the settled edge.",
      checked: "Jul 2026",
      checkedISO: "2026-07-31",
      answer: "Coverage is <b>strong across the cities, the coast and the main towns</b>, and genuinely <b>thin in the remote Outback</b>, where you can lose signal for long stretches. On cost, your US carrier charges about <b>10 to 12 dollars a day</b> to roam (<b>AT&amp;T and Verizon</b> day passes), and <b>T-Mobile</b> is worth checking before you buy anything, because its current mid and upper tiers include a real <b>high-speed allowance</b> abroad, from <b>5GB up to 30GB</b> depending on plan, and only slow to <b>256kbps</b> after that. A <b>Nomad eSIM</b> is a few dollars per gigabyte and works from landing, which is the cheaper route for a data-first trip. If you are leaving the cities, favour an eSIM that rides <b>Telstra</b>, which reaches furthest. Never roam <b>pay-per-use</b>, at about 2 dollars a megabyte.",
      sections: [
        {
          h: "A cost question first",
          icon: "roamfee",
          key: { fig: "$10-12/day", tag: "Roaming default", text: "A US carrier day pass runs about $10 to $12 a day, so a two-week Australia trip is real money. T-Mobile is the exception, with 5GB to 30GB of high-speed data abroad on its current mid and upper tiers, so check yours before buying.", tone: "teal" },
          p: [
            "Australia is a long-trip destination, which makes the roaming math worse than it looks. <b>AT&amp;T and Verizon</b> day passes run about <b>10 to 12 dollars a day</b>, so a week is around <b>70 to 84 dollars</b> and the two or three weeks most people spend here turns into a few hundred dollars for data you can buy far cheaper. <b>T-Mobile</b> is the exception worth checking first: its current tiers include a genuine <b>high-speed allowance</b> abroad, roughly <b>5GB</b> on Experience More, Magenta MAX and Go5G Plus, <b>15GB</b> on Experience Beyond and Go5G Next, and <b>30GB</b> on Better Value, slowing to <b>256kbps</b> only once that is used up. The entry <b>Essentials</b> tier is the one throttled from the start. Google Fi and Visible set their own terms, so read your own plan rather than assuming.",
            "The trap to avoid entirely is roaming with <b>no plan</b>. Pay-per-use data runs about <b>2 dollars a megabyte</b>, thousands per gigabyte, and phones use data in the background without being asked, so <b>turn off data roaming</b> until your eSIM or pass is live. <b>Physical prepaid SIMs</b> are easy to buy in Australia at airports, supermarkets and phone shops if you prefer one, but for a normal trip an eSIM saves you the errand on your first jet-lagged morning."
          ]
        },
        {
          h: "Why an eSIM is usually cheapest, and why Telstra matters",
          icon: "qr",
          key: { fig: "Telstra", tag: "The network to favour", text: "A travel eSIM is a few dollars per gigabyte. Which network it rides matters more here than in most countries: Telstra reaches furthest beyond the cities.", tone: "amber" },
          p: [
            "A <b>travel eSIM</b> is the cheapest way for most visitors to get real data. A <b>Nomad eSIM</b> is a few dollars per gigabyte, well under day-pass pricing, and it <b>activates before you fly</b> and works from landing, with no shop visit and no Australian paperwork. Your US number stays reachable on your usual plan while the eSIM carries the data.",
            "In Sydney or Melbourne, the underlying network hardly matters. Outside them it matters a lot, and this is the one country in our guides where we would tell you to check. <b>Telstra</b> has the widest reach by a clear margin and is the network to want in the country, <b>Optus</b> is solid across the populated areas, and <b>Vodafone</b>, now part of TPG, is competitive in the cities and thinner beyond them. If your trip includes a long drive, a national park, a remote coastal town or anything resembling the Outback, <b>favour a Telstra-backed plan</b> and treat the extra dollar or two as cheap insurance. Telstra publishes a coverage map you can search by address or coordinates, which is worth ten minutes if your route is ambitious, keeping in mind that such maps predict outdoor coverage rather than guarantee it."
          ]
        },
        {
          h: "Where the signal actually stops",
          icon: "alert",
          key: { fig: "Long stretches", tag: "Beyond the settled edge", text: "Treat a long outback drive as an offline trip: maps saved, route shared with someone, and no assumption that a phone could call for help partway.", tone: "amber" },
          p: [
            "Australian coverage follows the population, which lives around the edge. In the <b>cities, along the coast and in the main regional towns</b> you get fast 4G and 5G in the bigger centers. In the <b>remote interior</b>, the gaps are not the few-minutes kind familiar from a European mountain pass: on outback highways you can be <b>out of range for hours of driving</b>, and small settlements may have a single carrier or none. Long stretches of the Nullarbor, the central deserts and remote parts of the north are simply not covered by anyone.",
            "Plan for it rather than trying to buy your way out. <b>Download offline maps</b> and anything you need to read before you leave a town, tell someone your route on a long drive, and remember that a phone with no signal cannot summon a tow truck. If you are going properly remote, the carriers sell <b>satellite messaging and satellite handsets</b> for exactly this, which is the serious answer for a serious trip. For everyone else, the practical version is that coverage is excellent where you will actually spend your time. This guide is written for US travelers departing the US. For more, see <a href='/australia/cash-or-card'>cash or card in Australia</a>, <a href='/australia/taxis-and-apps'>taxis and apps in Australia</a>, and the <a href='/australia'>Australia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is an eSIM cheaper than roaming in Australia?", a: "Usually by a wide margin, and the long trips people take here make the gap bigger. A Nomad eSIM is a few dollars per gigabyte, against about 10 to 10 to 12 dollars a day for an AT&T or Verizon roaming pass, so a two-week trip that would cost well over a hundred dollars in day passes costs a fraction of that on an eSIM." },
        { q: "Which Australian network has the best coverage?", a: "Telstra, by a clear margin once you leave the cities, which is why it is the network to favour if your trip includes long drives, national parks or remote towns. Optus is solid across the populated areas and Vodafone, part of TPG, is competitive in the cities and thinner beyond them." },
        { q: "Will my phone work in the Outback?", a: "Often not. On remote highways you can be out of range for hours of driving rather than minutes, and some small settlements have one carrier or none. Download offline maps before you leave a town, and for genuinely remote travel the carriers sell satellite messaging and handsets." },
        { q: "Should I buy an Australian SIM card or use an eSIM?", a: "Prepaid SIMs are easy to buy at airports, supermarkets and phone shops, so either works. An eSIM is simpler for a normal trip since it is set up before you fly and works on landing, with no errand on your first morning. A physical SIM can suit a long stay with very heavy use." }
      ],
      sources: {
        links: [
        { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
        { label: "Verizon: international travel pages, TravelPass rate and the North America inclusion", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "Telstra: the carrier's official coverage and network pages, including the searchable coverage map and remote-area options", url: "https://www.telstra.com.au/coverage-networks/our-coverage", type: "carrier" },
          { label: "Tom's Guide: a 2026 comparison of US carrier international roaming plans and day-pass prices", url: "https://www.tomsguide.com/us/wireless-carriers-international-travel-plans,review-4327.html", type: "news" }
        ],
        judgment: "Carrier prices and inclusions change with your exact plan, so treat the day-pass figures as a July 2026 snapshot. Coverage maps predict outdoor coverage rather than guarantee it, so the Outback advice here is deliberately conservative: assume no signal between towns and be pleasantly surprised. Checked Jul 2026. Corrected on 31 July 2026, and worth saying what changed. This page previously quoted a flat 12 dollars a day for a carrier day pass and described T-Mobile's included roaming as slow 2G that could not handle maps. Both were wrong in the same direction, the direction that flatters the eSIM we earn a commission on. On price, 10 dollars a day is the current eligible-plan rate for both AT&T's International Day Pass and Verizon's TravelPass, with 12 dollars applying to AT&T's non-eligible plans, so the honest figure is a range. On T-Mobile, its own roaming pages now list a real high-speed allowance abroad, 5GB on Experience More, Magenta MAX and Go5G Plus, 15GB on Experience Beyond and Go5G Next and 30GB on Better Value, dropping to 256kbps only after that, with the entry Essentials tier the one throttled from the start. We have rewritten the figures and the T-Mobile description throughout and cite the carriers directly. Carrier terms move faster than anything else we cover, so check your own plan rather than trusting this paragraph."
      }
    }
  ]
};
