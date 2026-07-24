export default {
  slug: "sweden",
  iso2: "se",
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
  signals: { cardFriendliness: 5, cashNeed: 1, taxRisk: 2 },
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
      { n: "Budget", per: 60, cash: 0.08, room: 100 },
      { n: "Mid-range", per: 125, cash: 0.05, room: 180 },
      { n: "Comfort", per: 225, cash: 0.03, room: 330 }
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
  ],

  culture: {
    heading: "A few words of Swedish go a long way",
    intro: "Swedes speak Swedish and value balance in all things. A friendly Tack and a story or two mark you as a guest rather than a tourist.",
    phrases: [
      { mean: "Hello", say: "hey", word: "Hej" },
      { mean: "Thank you", say: "tahk", word: "Tack" },
      { mean: "Yes", say: "yah", word: "Ja" },
      { mean: "Cheers", say: "skowl", word: "Skål" },
      { mean: "Good, tasty", say: "got", word: "Gott" },
      { mean: "Bye", say: "hey doh", word: "Hej då" },
    ],
    tip: "Two words unlock Sweden. <b>Fika</b> is the daily ritual of pausing for coffee and something sweet with friends or colleagues, and it is never to be skipped. And <b>lagom</b>, meaning just the right amount, not too much and not too little, is the very heart of how Swedes like life to be.",
    stories: [
      { img: "/sweden-culture-1.jpg",
        alt: "WPA-style illustration of a Viking-age carver kneeling to chisel runes and a coiling serpent into a tall standing stone with the grooves painted red, a raven on top and a wooden hall behind",
        h: "Messages carved in stone",
        p: "More than a thousand years ago, Vikings raised tall rune stones across Sweden, carving them with angular runes and coiling serpents to honor the dead or mark a journey. Sweden has thousands of them, more than anywhere else on Earth, still standing in fields and churchyards. They are letters from the Viking age, written in stone.",
        note: "Say it: rune stones, raised over a thousand years ago" },
      { img: "/sweden-culture-2.jpg",
        alt: "WPA-style illustration of people in white folk dress and crowns of wildflowers dancing hand in hand in a ring around a flower-decked maypole in a bright green summer meadow",
        h: "The longest, brightest day",
        p: "At Midsummer, when the northern sun barely sets, Swedes head to the countryside to raise a flower-decked maypole and dance around it in rings, wearing crowns of wildflowers. There is pickled herring, singing and endless daylight. After the long dark winter, it is the most beloved day of the year.",
        note: "Good to know: Midsummer is the high point of the Swedish year" },
      { img: "/sweden-culture-3.jpg",
        alt: "WPA-style illustration of a great ornately carved 17th-century wooden warship with towering masts, a gilded stern and rows of cannon ports setting out across a calm harbor with sails filling",
        h: "The warship that sank in minutes",
        p: "In 1628 the mighty warship Vasa, the pride of the Swedish navy, set sail from Stockholm before a cheering crowd, then caught a gust of wind, tipped over and sank in the harbor after barely a kilometer. Built top-heavy and over-armed, she went down on her maiden voyage. Raised almost whole in 1961, she is now Sweden's most visited museum.",
        note: "Good to know: raised in 1961, now a museum ship" },
    ],
    pride: "Swedes are calm, egalitarian and proud of a country that pairs a Viking past with sleek modern design, music and a strong social spirit. They cherish nature, fairness and their fika. Match their easy, unshowy warmth and you will get along famously."
  },

  spokes: [
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Swedish krona (SEK), not euro" },
        { k: "Cards", v: "Near-total, contactless everywhere" },
        { k: "Cash", v: "Often refused, you may never need it" },
        { k: "On a card", v: "Choose krona, not dollars" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Sweden, or can I use cards? (2026) | True Trip Costs",
      description: "Almost never. Sweden is one of the most cashless countries on earth, and many places refuse cash altogether. Carry a contactless card, choose krona not dollars, and keep two cards as backup. Checked July 2026.",
      h1: "Do I need cash in Sweden, or can I use cards?",
      lede: "Short answer: a card for everything, and you may never touch cash. Sweden is one of the most cashless countries anywhere, and many places refuse cash outright, so the real risk is a dead card, not a lack of notes.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Cards, essentially entirely. Sweden is <b>one of the most cashless countries on earth</b>: <b>contactless</b> is everywhere, Apple Pay and Google Pay are standard, and many shops, cafes, museums and buses <b>refuse cash altogether</b> (you will see signs reading no cash). The currency is the <b>Swedish krona (SEK), not the euro</b>. You can travel Sweden <b>essentially without cash</b>, so a card is essential and cash is close to optional. On any card or ATM, choose <b>krona, not dollars</b>.",
      sections: [
        {
          h: "One of the most cashless countries anywhere",
          icon: "phoneok",
          key: { fig: "Card only", tag: "Cash often refused", text: "Contactless is universal, and many shops, cafes, museums and buses take no cash at all. You can travel Sweden essentially cashless, so a working card is essential.", tone: "teal" },
          p: [
            "Sweden is <b>famously close to cashless</b>. <b>Contactless</b> cards, Apple Pay and Google Pay are accepted virtually everywhere, and a great many places, shops, cafes, museums, and public transport, <b>do not take cash at all</b>, often with a sign to that effect. Locals pay each other with the <b>Swish</b> app, which you do not need as a visitor.",
            "The upshot for you: a <b>working card is essential</b>, and cash is close to optional. Carry a <b>contactless card</b> with a backup on a different network, and make sure it works on arrival, since being cash-only here is more of a problem than being card-only."
          ]
        },
        {
          h: "It is krona, not euros, so choose krona",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose krona", text: "The currency is the Swedish krona, not the euro. When a terminal or ATM offers dollars or krona, pick krona; dollars add about 3 to 8% via dynamic conversion.", tone: "amber" },
          p: [
            "Sweden uses the <b>Swedish krona (SEK)</b>, not the euro, despite being in the EU. When a card terminal or ATM asks whether to charge in <b>dollars or krona, always choose krona</b>. Dollars trigger dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. Decline it every time.",
            "You will rarely need cash, but if you do, use an ATM (a <b>Bankomat</b>) rather than a standalone tourist kiosk, and use a <b>debit card</b> to avoid cash-advance fees."
          ]
        },
        {
          h: "The little cash you might want",
          icon: "coins",
          key: { fig: "Near zero", tag: "A small buffer", text: "Most trips need no cash at all. Keep a small buffer of krona only for a rare rural spot, and rely on a contactless card for everything else.", tone: "teal" },
          p: [
            "Most visitors get through Sweden with <b>no cash at all</b>. If you want a buffer for a <b>remote or rural</b> spot, a small amount of <b>krona</b> is plenty, but do not exchange much. The practical risk here is a <b>dead card and no backup</b>, so carry two cards on different networks.",
            "Tipping is modest and not expected, since service is included; rounding up is plenty. For the wider picture, see the <a href='/sweden'>Sweden money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Sweden?", a: "Almost never. Sweden is one of the most cashless countries on earth, and many shops, cafes, museums and buses take no cash at all. A contactless card covers everything; keep only a tiny buffer of krona, if any, for rural spots." },
        { q: "Does Sweden use the euro?", a: "No. Sweden uses the Swedish krona (SEK), not the euro, even though it is in the EU. On a card or ATM, choose to be charged in krona, not dollars or euros." },
        { q: "Should I pay in krona or dollars in Sweden?", a: "Always krona. If a card machine or ATM offers dollars, decline: that dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
        { q: "Can I travel Sweden without cash?", a: "Yes, easily. A contactless card, or Apple Pay or Google Pay, works virtually everywhere, and many places refuse cash. Carry two cards on different networks as backup, since a dead card is the real risk, not a lack of cash." }
      ],
      sources: {
        links: [
          { label: "Sveriges Riksbank: official Swedish krona information", url: "https://www.riksbank.se", type: "gov" },
          { label: "US State Department: Sweden country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Sweden.html", type: "gov" }
        ],
        judgment: "Sweden is genuinely among the most cashless countries, and the cash-refused pattern is widespread, though a rare rural spot may differ, so this is our practical read. The krona rate moves, and the firm rule is to decline dollar conversion. Checked July 2026."
      }
    },
    {
      slug: "bringing-your-pet",
      glance: [
        { k: "Process", v: "Shared EU entry" },
        { k: "Need", v: "ISO chip, rabies, EU health cert" },
        { k: "Enter within", v: "10 days of endorsement" },
        { k: "Coming home", v: "Simple CDC path" }
      ],
      live: true,
      topic: "pets",
      insurance: true,
      title: "Bringing a dog or cat to Sweden from the US (2026): the EU process, and the Sweden-specific parts | True Trip Costs",
      description: "Moving to Sweden with a pet from the US: why it runs on the shared EU health-certificate process, no quarantine and no titer, plus what is specific to Sweden on arrival and after you settle in. Checked July 2026.",
      h1: "Bringing your dog or cat to Sweden.",
      lede: "Sweden runs on the single EU pet-entry process for a US-origin dog or cat: microchip, rabies in the right order, and an EU health certificate on a 10-day clock. No quarantine, no rabies titer. Here is what that means for Sweden, and the local parts worth knowing.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Sweden uses the <b>shared EU pet-entry process</b>, so there is no separate national permit and nothing unusual at the border. Your pet needs an <b>ISO microchip, a rabies vaccination given after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS</b>, then must enter within <b>10 days</b> of that endorsement. There is <b>no quarantine and no rabies titer</b> for a pet coming straight from the US. The full step-by-step, the ordering trap, and the current fees are on one page: see <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a>. Below are the Sweden-specific notes. Coming home to the US is the easy part.",
      sections: [
        {
          h: "Sweden runs on the EU process",
          icon: "health",
          key: { fig: "10 days", tag: "No Sweden-only permit", text: "The standard EU move: an ISO microchip first, a rabies shot after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS. Enter Sweden within 10 days of that endorsement.", tone: "teal" },
          p: ["There is no Sweden-only pet permit and no national quarantine. Bringing a dog or cat into Sweden from the US is the standard EU move: an ISO microchip first, a rabies vaccination after the chip, then an EU Animal Health Certificate completed by a USDA-accredited vet and endorsed by APHIS, with the pet arriving within 10 days of endorsement. A first rabies shot adds a 21-day wait before travel.", "Because the core process is identical across the EU (and the countries that follow its rules), we do not repeat it per country. The full sequence, the microchip-before-rabies trap that costs people the most time, the 10-day clock, and the current APHIS endorsement fees all live on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Read that first, then come back for the Sweden notes."]
        },
        {
          h: "The Sweden-specific parts",
          icon: "receipt",
          key: { fig: "Declare", tag: "Report to customs", text: "Swedish customs may check the endorsed certificate and chip, and Sweden asks arriving pet owners to report to customs through the red channel on arrival, rather than walking straight out.", tone: "teal" },
          p: ["At the border, Swedish customs may ask to see the endorsed certificate and confirm the microchip, and Sweden asks arriving pet owners to report to customs (the red channel) on entry to confirm the pet. Pets should enter through a designated traveller point of entry, which Stockholm airport is. There is no dog or cat tapeworm rule for Sweden, unlike Ireland, Finland or Malta.", "After you arrive, Sweden requires dogs to be registered in the national dog register kept by the Swedish Board of Agriculture (Jordbruksverket) within a set period of taking up residence, handled online, and rabies vaccination must be kept current. There is no strict national banned-breed list. Register the dog once you have an address."]
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
          key: { fig: "Easy", tag: "The return trip", text: "A dog flying home from Sweden is on the simplest CDC path: usually a CDC Dog Import Form receipt, a microchip, and a minimum age of 6 months.", tone: "teal" },
          p: ["Good news for the return trip: a dog flying home to the US from Sweden is on the simplest CDC path, typically a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement.", "For the wider picture, including how Sweden compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Sweden",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-sweden",
        note: "The US-side steps and the EU health certificate for Sweden. Sweden applies the shared EU process, and the destination's own authorities are the final word on the day."
      },
      faqs: [
        {
          q: "Is there anything Sweden-specific beyond the EU rules?",
          a: "A little. Sweden has no tapeworm rule (that applies to Ireland, Finland and Malta), but it asks arriving owners to report to customs on entry, and requires dogs to be registered in the national dog register kept by the Swedish Board of Agriculture after you take up residence. Rabies vaccination must be kept current."
        },
        {
          q: "Does my pet have to go into quarantine in Sweden?",
          a: "No. Sweden applies the shared EU pet-entry process, which has no quarantine and no rabies titer for a pet coming straight from the US. Your pet needs a microchip, a rabies vaccination in the right order, and an EU Animal Health Certificate endorsed by APHIS, then must arrive within 10 days of endorsement. See our EU pet health certificate page for the full process."
        },
        {
          q: "Do I need to quarantine my pet coming back to the US from Sweden?",
          a: "No. A dog returning to the US from Sweden is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details."
        }
      ],
      sources: {
        links: [
          {
            label: "True Trip Costs: the EU pet health certificate, the shared microchip, rabies and certificate process for all EU countries including Sweden",
            url: "/eu-pet-health-certificate",
            type: "internal"
          },
          {
            label: "USDA APHIS: pet travel from the United States to Sweden, the US-side steps and EU health certificate",
            url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-sweden",
            type: "gov"
          },
          {
            label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, for the return leg",
            url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html",
            type: "gov"
          }
        ],
        judgment: "Sweden applies the shared EU pet-entry framework, set by the EU and administered on the US side by APHIS, not by us. The process is stable in substance, though the EU certificate format changes on 1 October 2026, which we cover on the EU pet health certificate page. The local registration and any breed rules vary, so we point you to the official pages and dated this July 2026."
      }
    }
  ]
};
