export default {
  slug: "australia",
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

  title: "Money in Australia (2026): Cards, Surcharges, Cash, ATMs, the GST Refund and Tipping | True Trip Costs",
  description: "How to handle money in Australia as a US traveler in 2026: near-universal cards and contactless, the card surcharges that still apply until the 1 October 2026 ban, the dollar-conversion trap, easy ATMs, the AUD 20 app-only ETA, the 10% GST refund on goods through the Tourist Refund Scheme, and why nobody tips. Checked July 2026.",

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
      slug: "eta",
      live: true,
      topic: "visas",
      title: "How do US citizens get an Australia ETA? (2026) | True Trip Costs",
      description: "US citizens need an Australian ETA, and there is one catch: you can only apply through the official app. What it costs (AUD $20), how long it lasts, the passport-chip requirement, and how to avoid the markup sites. Checked July 2026.",
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
          p: [
            "Since 2022, the <b>only</b> way to apply for an Australian ETA is the official <b>AustralianETA app</b>, made by the Department of Home Affairs. The old website application was retired, so if a site offers to process your ETA online, it is a third party, not the government. Download the app from the Apple App Store or Google Play.",
            "The app works by <b>scanning your passport chip</b> (your passport must be the chipped, electronic kind) and taking a <b>live selfie</b>. If your passport cannot be scanned, or you have a complication like a past visa refusal, you apply for a different visa (Subclass 600) instead."
          ]
        },
        {
          h: "What it costs, and what you get",
          p: [
            "There is <b>no visa application charge</b>, but the app charges a flat <b>AUD $20 service fee</b> (roughly 13 US dollars), and that is the only legitimate cost. It is non-refundable.",
            "The ETA is <b>valid for 12 months</b> (or until your passport expires), with <b>multiple entries</b> of up to <b>3 months</b> each. It covers tourism, visiting family, and business visitor activities like meetings and conferences, but <b>not paid work</b>. It is linked to your passport, so there is nothing to print."
          ]
        },
        {
          h: "How to apply, step by step",
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
      live: true,
      topic: "pets",
      title: "Bringing a dog or cat to Australia from the US (2026): the 180-day wait, quarantine and cost | True Trip Costs",
      description: "Moving to Australia with a pet from the US: the rabies titer and mandatory 180-day residency, the BICON import permit, the identity check that cuts Mickleham quarantine from 30 to 10 days, and a realistic all-in cost. Checked July 2026.",
      h1: "Bringing your dog or cat to Australia.",
      lede: "Australia has the strictest pet import process of any English-speaking country, and it is the most expensive move we cover. Two numbers frame it: a lead time of at least 6 to 7 months, set by a rabies test and a fixed 180-day wait, and an all-in cost that often reaches five figures. Here is the order, the official route, and where the money goes.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Give yourself <b>at least 6 to 7 months</b>. The mainland US is a <b>Group 3 country</b>, so your pet needs a <b>rabies antibody test (RNATT)</b> and then a <b>fixed 180-day residency period</b> that starts when the lab receives the blood sample and cannot be shortened. You also need a <b>BICON import permit</b> and mandatory <b>quarantine at the Mickleham facility near Melbourne</b>. One optional step, an <b>identity check done before the blood draw</b>, cuts that quarantine from 30 days to 10. Budget <b>several thousand dollars, often well into five figures</b> for a large dog using a shipper, with air cargo and quarantine the biggest costs.",
      sections: [
        {
          h: "The two numbers: lead time and cost",
          p: [
            "The two things that decide an Australia move with a pet, and both are large. <b>Lead time is at least 6 to 7 months</b>, dominated by a fixed 180-day waiting period tied to the rabies antibody test, plus permit processing and quarantine booking. <b>Cost is the highest of any destination we cover</b>, commonly several thousand dollars and often well into five figures for a large dog handled by a relocation company. The biggest lines are air transport as cargo to Melbourne and the mandatory government quarantine.",
            "Australia only accepts pets from approved countries and classes the mainland US as Group 3, meaning rabies is present but controlled, so a testing and waiting sequence applies. Guam and Hawaii are treated differently, so contact Australia's Department of Agriculture, Fisheries and Forestry first if your pet is coming from either."
          ]
        },
        {
          h: "The steps, in order",
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
          p: [
            "Dogs from the US carry a heavier load than cats. On top of the rabies sequence, dogs need a <b>canine influenza vaccination</b>, and depending on your permit they may need testing or treatment for diseases such as <b>Brucella canis</b> and <b>Ehrlichia canis</b>, with conditions that have changed in recent years. Because these dog rules move, read your import permit and Australia's step-by-step guide carefully rather than relying on an old checklist.",
            "Cats are simpler but still need the rabies antibody test, even an indoor-only cat that has never been outside. A handful of dog breeds are banned from entry entirely, so check the list if you have a restricted breed."
          ]
        },
        {
          h: "Where the money goes",
          p: [
            "The two government charges you can pin down are the <b>BICON import permit</b>, roughly AUD 600 and non-refundable, and the <b>Mickleham quarantine</b>, with a minimum 10-day stay around AUD 1,900 and a 30-day stay considerably more. On top of those sit the rabies antibody test and other lab work, the canine influenza vaccine for dogs, an airline-approved crate, and the single largest cost, air cargo to Melbourne. There is also a smaller airline handling charge collected before your pet is released.",
            "Government fees are reviewed regularly and airfreight pricing swings a lot, so treat these as a budgeting frame and confirm the current figures with the Department of Agriculture and your airline before you commit."
          ]
        },
        {
          h: "Coming back to the US",
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
    }
  ]
};
