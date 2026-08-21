import { S } from './carrier-spine.js';

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

  title: "Sweden money 2026: kronor, cards and going cashless",
  description: "Sweden uses kronor, not euros, and is close to cashless: some places take no cash at all. Cards work everywhere and 25% VAT is in the price. Checked 2026.",

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
      slug: "taxis-and-apps",
      glance: [
        { k: "Apps", v: "Uber, Bolt (also Taxi Stockholm)" },
        { k: "Taxis", v: "Deregulated, fares vary a lot" },
        { k: "From Arlanda", v: "The train, or a fixed-fare firm" },
        { k: "Watch for", v: "Rogue taxis, check the price sticker" }
      ],
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Taxis in Sweden: the price sticker, and rogue cabs",
      description: "Uber and Bolt operate, but deregulation lets rogue taxis overcharge in Sweden. Check the mandatory comparison-price sticker. Arlanda, and tipping.",
      h1: "Taxis in Sweden, and the price sticker",
      lede: "Sweden deregulated taxis, so most are fine but a few rogue cabs charge wild rates, especially at the airport. The trick is the yellow comparison-price sticker, or just use an app. Here is how it works.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Install <b>Uber</b> or <b>Bolt</b>, which both work in the cities, and reputable firms like <b>Taxi Stockholm</b>, <b>Taxi Kurir</b> and <b>Sverigetaxi</b> are safe bets. Sweden <b>deregulated taxis</b>, so fares vary a lot and a few <b>rogue cabs</b> charge extortionate rates, especially at <b>Arlanda</b> and tourist spots. Every taxi must show a yellow <b>comparison-price sticker</b> in the window: check it, or just use an app that shows the fare. Tipping is <b>not expected</b>, and Sweden is nearly cashless.",
      sections: [
        {
          h: "Which app to install",
          icon: "phoneok",
          key: { fig: "Uber, Bolt", tag: "Or Taxi Sthlm", text: "Uber and Bolt both work in the cities, and reputable firms like Taxi Stockholm, Taxi Kurir and Sverigetaxi are safe bets.", tone: "teal" },
          p: [
            "<b>Uber</b> and <b>Bolt</b> both operate in <b>Stockholm, Gothenburg and Malmo</b>, and the established firms <b>Taxi Stockholm</b>, <b>Taxi Kurir</b> and <b>Sverigetaxi</b> are reputable and fair.",
            "Using an app or a known company is the simplest way to sidestep the one real issue in Sweden, the rogue independent taxi, since the price is set or known in advance."
          ]
        },
        {
          h: "From Arlanda airport",
          icon: "plane",
          key: { fig: "Train", tag: "Or a fixed fare", text: "The Arlanda Express is fast; the commuter train and Flygbussarna coach are cheaper. A reputable taxi offers a fixed city fare; avoid rogue cabs at the rank.", tone: "teal" },
          p: [
            "From <b>Stockholm Arlanda (ARN)</b>, the <b>Arlanda Express</b> is the fast train, while the <b>commuter train</b> and the <b>Flygbussarna</b> coach are cheaper ways into the city.",
            "If you want a taxi, the reputable firms offer a <b>fixed fare</b> to central Stockholm (often around 500 to 700 kronor), booked at their desk. This is exactly where <b>rogue taxis</b> lurk, so do not jump into an unknown cab at the rank."
          ]
        },
        {
          h: "Check the comparison-price sticker",
          icon: "alert",
          key: { tag: "Fares vary wildly", text: "Deregulation means fares vary a lot, and a few rogue taxis charge extortionate rates. By law every taxi shows a yellow comparison-price sticker in the window; check it, or use an app or known firm.", tone: "amber" },
          p: [
            "Because taxis are <b>deregulated</b>, fares vary a lot and a small number of <b>rogue cabs</b> charge <b>wildly high rates</b>, the classic Stockholm airport and tourist trap.",
            "Your protection: by law, every taxi must display a yellow <b>comparison-price sticker (jamforpris)</b> in the rear window, showing the price for a standard trip. If that number looks high, walk away. Simpler still, <b>use an app or a known firm</b>, where the fare is set or fair."
          ]
        },
        {
          h: "Fares, paying and tipping",
          icon: "card",
          key: { fig: "Round up", tag: "Nearly cashless", text: "Fares are paid by card or Swish, since Sweden is nearly cashless. Tipping is not expected, so just round up for good service.", tone: "teal" },
          p: [
            "Fares are paid by <b>card or Swish</b>, as Sweden is <b>nearly cashless</b>. Tipping is <b>not expected</b>, so at most <b>round up</b> for good service.",
            "For more, see <a href='/sweden/tipping'>tipping in Sweden</a>, <a href='/sweden/cash-or-card'>cash or card in Sweden</a>, and the <a href='/sweden'>Sweden money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Uber in Sweden?", a: "Yes, Uber and Bolt both work in Stockholm, Gothenburg and Malmo. Reputable firms like Taxi Stockholm, Taxi Kurir and Sverigetaxi are also fair. Using an app or known company sidesteps the rogue-taxi problem." },
        { q: "Why are some Swedish taxis so expensive?", a: "Sweden deregulated taxis, so fares vary a lot and a few rogue cabs charge extortionate rates, especially at Arlanda and tourist spots. Check the yellow comparison-price sticker in the window, or use an app or known firm." },
        { q: "How do I get from Arlanda to Stockholm?", a: "The Arlanda Express is the fast train; the commuter train and Flygbussarna coach are cheaper. Reputable taxis offer a fixed fare (around 500 to 700 kronor), but avoid jumping into an unknown cab at the rank." },
        { q: "Do you tip taxi drivers in Sweden?", a: "No, it is not expected. Fares are paid by card or Swish since Sweden is nearly cashless, so at most round up for good service." }
      ],
      sources: {
        links: [
          { label: "Visit Sweden: official travel information", url: "https://visitsweden.com/", type: "gov" },
          { label: "US State Department: Sweden country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Sweden.html", type: "gov" }
        ],
        judgment: "Sweden deregulated taxis, so rogue cabs can overcharge and the comparison-price sticker is your check, while apps and known firms are safe. Fares shift over time, so this is our practical read. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Not really expected" },
        { k: "Why", v: "High wages, service included" },
        { k: "Good service", v: "Round up, or 5 to 10%" },
        { k: "The catch", v: "Near-cashless, terminals prompt" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Sweden: you do not really tip 2026",
      description: "Wages are high in Sweden, so tipping is not really expected. When to round up, and how to handle the tip prompt in a near-cashless country.",
      h1: "Tipping in Sweden",
      lede: "Sweden is not really a tipping country. Wages are high and service is included, so tipping is not expected. The wrinkle: in a near-cashless country, terminals often prompt for a tip. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Sweden is <b>not really a tipping country</b>. Wages are <b>high</b> and service is effectively <b>included</b>, so tipping is <b>not expected</b> and leaving nothing is normal. For <b>good service at a restaurant</b>, it is common to <b>round up</b> or leave <b>5 to 10%</b> if you were really pleased, but it is optional. The catch: Sweden is <b>nearly cashless</b>, so card terminals <b>often prompt for a tip</b> now, which you can decline. At <b>cafes, bars and in taxis</b>, no tip is expected. Any tip is in <b>kronor</b>.",
      sections: [
        {
          h: "You do not really tip here",
          icon: "notip",
          key: { fig: "Not expected", tag: "High wages", text: "Tipping is not expected in Sweden. Wages are high and service is effectively included, so leaving nothing is normal.", tone: "teal" },
          p: [
            "Sweden is <b>not really a tipping culture</b>. Hospitality <b>wages are high</b> and service is effectively <b>included</b> in prices, so tipping is <b>not expected</b>, and leaving nothing is completely normal.",
            "At <b>cafes, bars and in taxis</b>, <b>no tip is expected</b>. The <b>price or the meter is the price</b>."
          ]
        },
        {
          h: "Round up for good service",
          icon: "coins",
          key: { fig: "5-10%", tag: "Optional at a restaurant", text: "For good restaurant service, rounding up or leaving 5 to 10% is a welcome gesture, but it is optional.", tone: "teal" },
          p: [
            "The one time Swedes might tip is for <b>good service at a sit-down restaurant</b>: <b>rounding up</b> the bill, or leaving <b>5 to 10%</b> if you were really pleased, is a welcome gesture.",
            "But it is a <b>bonus for good service</b>, not a default. A normal meal needs no tip."
          ]
        },
        {
          h: "Near-cashless: watch the terminal",
          icon: "card",
          key: { fig: "You can decline", tag: "Sweden is near-cashless", text: "Sweden is nearly cashless, so card terminals often prompt for a tip. Since it is not expected, you can decline.", tone: "amber" },
          p: [
            "Sweden is <b>one of the most cashless countries in the world</b>, and card terminals <b>often prompt for a tip</b> now, sometimes with preset percentages. Since tipping is <b>not expected</b>, you can <b>decline without a second thought</b>.",
            "If you do want to tip, adding it on the card is easiest, since you may carry no <b>kronor</b> at all. For the wider picture, see <a href='/sweden/cash-or-card'>cash or card in Sweden</a> and the <a href='/sweden'>Sweden money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Sweden?", a: "Not really. Wages are high and service is effectively included, so tipping is not expected and leaving nothing is normal. For good restaurant service, rounding up or 5 to 10% is a welcome gesture, but optional." },
        { q: "How much do you tip at a Swedish restaurant?", a: "Nothing is expected. For good service, rounding up or leaving 5 to 10% is a welcome gesture, but a normal meal needs no tip. Cafes, bars and taxis need no tip." },
        { q: "Why does the card machine in Sweden ask for a tip?", a: "Sweden is nearly cashless, and terminal tip prompts have become common, sometimes with presets. Since tipping is not expected, you can decline without a second thought." },
        { q: "Do you tip taxi drivers in Sweden?", a: "No, it is not expected. The metered fare is what you pay, though rounding up is a small courtesy if you like." }
      ],
      sources: {
        links: [
          { label: "US State Department: Sweden country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Sweden.html", type: "gov" }
        ],
        judgment: "Sweden's no-tipping norm rests on high hospitality wages, and terminal tip prompts are common in one of the world's most cashless economies. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
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
      title: "Do I need cash in Sweden? Almost never 2026",
      description: "Sweden is one of the most cashless countries on earth, and many places refuse cash outright. Carry a contactless card, choose krona, keep a backup.",
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
      title: "Bringing a dog or cat to Sweden from the US 2026",
      description: "Sweden runs on the shared EU health-certificate process, with no quarantine and no titer. What is Sweden-specific on arrival and after you settle in.",
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
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Strong in the south and the cities" },
        { k: "Signal gaps", v: "The northern interior and Lapland" },
        { k: "Carrier roaming", v: "$10 to $12 a day" },
        { k: "Cheapest", v: "A travel eSIM, a few $ per GB" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "eSIM for Sweden: the cost math, and the empty north",
      description: "Swedish coverage is strong in the south and the cities and thin across the northern interior. Long train routes are patchier than you would expect.",
      h1: "Staying connected in Sweden.",
      lede: "Sweden is a long country with most of its people in the bottom third, and the network follows them. In the south this is purely a cost question. North of Ostersund it stops being one.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>strong across the south and the cities</b>, in Stockholm, Gothenburg and Malmo and through the populated Baltic coast, and it thins across the <b>northern interior</b>, in <b>Lapland</b> away from the towns and ski resorts, and on the long empty stretches of the inland route. Your US carrier charges about <b>${S.dayPass}</b> to roam (<b>AT&amp;T and Verizon</b> day passes), though <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, while <b>Verizon has ${S.verizonNoCap}</b> and keeps billing daily. <b>T-Mobile</b>'s mid and upper tiers include <b>${S.tmoRange}</b> of high-speed data abroad before slowing to <b>${S.throttle}</b>. Sweden is in the <b>EU</b>, so an EU or Swedish prepaid SIM roams here under <b>Roam Like At Home</b>, and Swedish prepaid from <b>Comviq</b>, <b>Telia</b> or <b>Telenor</b> is reasonably cheap. A <b>Nomad eSIM</b> is a few dollars per gigabyte and works from landing. One thing that surprises people: <b>long-distance trains</b> are patchier than the country's reputation suggests. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "A cost question, in the south at least",
          icon: "roamfee",
          key: { fig: `${S.dayPassFig}`, tag: "Roaming default", text: "A US carrier day pass is the expensive default. AT&T caps it at 10 daily fees a bill period, Verizon does not cap at all, and T-Mobile's mid and upper tiers include 5GB to 30GB abroad.", tone: "teal" },
          p: [
            `In the part of Sweden most visitors see, coverage is not the issue. Roaming on your US plan is about <b>${S.dayPass}</b>, roughly <b>${S.week}</b> a week, with <b>AT&amp;T</b> capping at <b>${S.capFees}</b>, about <b>${S.capAmount}</b>, and <b>Verizon</b> having <b>${S.verizonNoCap}</b>. <b>T-Mobile</b>'s tiers include roughly <b>${S.tmoLow}</b> on Experience More, Magenta MAX and Go5G Plus, <b>${S.tmoMid}</b> on Experience Beyond and Go5G Next and <b>${S.tmoHigh}</b> on Better Value.`,
            `A <b>Nomad eSIM</b> at a few dollars per gigabyte undercuts that comfortably. Swedish prepaid, <b>Comviq</b> especially, is cheap by Nordic standards and carries EU roaming, so it competes on a longer European trip. And do not roam with <b>no plan</b>, at about <b>${S.ppu}</b>. Sweden is also close to cashless, so a working phone is more load-bearing here than in most of Europe: see <a href='/sweden/cash-or-card'>cash or card in Sweden</a>.`
          ]
        },
        {
          h: "North of the cities, it thins",
          icon: "alert",
          key: { fig: "The interior", tag: "Where signal drops", text: "Lapland away from the towns, the northern interior and the inland route have real gaps on every network.", tone: "amber" },
          p: [
            `Sweden's population is concentrated in the south, and above it the map empties out. Expect real gaps across the <b>northern interior</b>, in <b>Lapland</b> away from Kiruna, Abisko and the ski resorts, along the <b>Inlandsbanan</b> corridor and on hiking routes including stretches of the <b>Kungsleden</b>. Winter adds a practical wrinkle: cold flattens a phone battery fast, which matters more than signal on an aurora night.`,
            `So a trip north is worth preparing for: <b>download offline maps</b> and your accommodation details, carry a power bank, and if you are hiking, treat the route as offline and tell somebody your plan. <b>112</b> reaches emergency services and can sometimes connect on a network you have no subscription with.`
          ]
        },
        {
          h: "The trains are the surprise",
          icon: "train",
          key: { fig: "Long routes", tag: "Patchier than expected", text: "Long-distance Swedish rail drops in and out through forest and rural stretches. Download before you board.", tone: "teal" },
          p: [
            `The thing that catches people out is not the wilderness, it is the train. <b>Long-distance routes</b>, Stockholm to Gothenburg and especially anything heading north, run through long forested and rural stretches where the signal comes and goes, and onboard wifi is shared and variable. It is a familiar complaint for anyone who has taken a German ICE.`,
            `The fix is a habit rather than a purchase: <b>download</b> your tickets, maps and anything you want to read before you board, and keep your SJ tickets available offline. In the cities themselves coverage is excellent, including on the Stockholm metro. This guide is written for US travelers departing the US. For more, see <a href='/sweden/taxis-and-apps'>taxis and apps in Sweden</a> and the <a href='/sweden'>Sweden money guide</a>.`
          ]
        }
      ],
      faqs: [
        { q: `Will I have signal in Swedish Lapland?`, a: `In Kiruna, Abisko and the ski resorts, yes. Away from the towns, across the northern interior and on hiking routes including stretches of the Kungsleden, there are real gaps on every network. Download offline maps, carry a power bank, since cold drains batteries fast, and tell somebody your route.` },
        { q: `How much does it cost to use my US phone in Sweden?`, a: `About ${S.dayPass} on an AT&T or Verizon day pass, so roughly ${S.week} a week. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad before slowing to ${S.throttle}.` },
        { q: `Do Swedish trains have good phone coverage?`, a: `Less than you would expect. Long-distance routes run through forested and rural stretches where the signal drops in and out, and onboard wifi is shared and variable. Download tickets, maps and reading before you board. City coverage, including the Stockholm metro, is excellent.` },
        { q: `Is a Swedish SIM card worth buying?`, a: `It can be. Comviq and the other Swedish prepaid options are cheap by Nordic standards and carry EU roaming across the union. A travel eSIM at a few dollars per gigabyte is simpler for a short trip. Both are far cheaper than a carrier day pass.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "US State Department: Sweden country information and local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Sweden.html", type: "gov" }
        ],
        judgment: "Checked Aug 2026. The train point is the desk's read from consistent traveler accounts rather than an operator statement, and it is included because it is the gap that actually interrupts a Swedish trip, while the far north is the one people already expect. Sweden being close to cashless makes a working phone more load-bearing here than elsewhere in Europe, which is a reason to have a plan rather than a reason to buy ours specifically. Carrier figures are an Aug 2026 snapshot."
      }
    },
    {
      slug: "medical-costs",
      exposureCategory: "payInFull",
      exposureQuote: "A visitor from outside the EU or EEA is charged the full cost of treatment.",
      glance: [
        { k: "You pay", v: "The full cost as a visitor" },
        { k: "Care", v: "Good, run by the regions" },
        { k: "The north", v: "Distances get real" },
        { k: "Real risk", v: "The bill, plus winter distance" }
      ],
      live: true,
      topic: "health",
      title: "Getting sick in Sweden: regions, and a very long north",
      description: "Sweden charges non-EEA visitors the full cost of care. In the south a hospital is close; in the north, winter distance becomes its own expense.",
      h1: "What does getting sick in Sweden cost a visitor?",
      lede: "Sweden is two countries for this purpose. In the populated south, care is close and the question is simply the bill. North of that, distance starts doing the work.",
      checked: "Aug 2026",
      checkedISO: "2026-08-20",
      answer: "Swedish healthcare is run by the <b>regions</b> and funded for <b>residents</b>. A visitor from outside the EU or EEA is <b>charged the full cost</b> of care, and rates are set regionally rather than nationally. Emergency care is <b>provided first and billed afterwards</b>. The geography splits the country: around <b>Stockholm, Gothenburg and Malmo</b> a hospital is close and the risk is simply the size of an invoice. In <b>Norrland and the far north</b>, distances are large, winter is long, and getting to a hospital becomes a cost of its own. Sweden is not a dangerous place to be ill. It is an expensive one, and in the north a slow one.",
      insurance: true,
      insuranceNote: "Sweden charges a non-EEA visitor the full cost, and how much that matters depends on where you are: in the south the risk is a bill, in the far north it is also the distance and the winter. Cover is doing an ordinary job in the south and a bigger one above the Arctic Circle. Faze aside, the gap is real in both. Faye covers trip medical and evacuation.",
      careFirst: "If it looks serious, get to care first and let the invoice follow.",
      sections: [
        {
          h: "Funded for residents, billed to you",
          icon: "alert",
          key: { tag: "Region by region", text: "Swedish care is run and priced by the regions and funded for residents. A non-EEA visitor is charged the full cost, at rates that vary regionally.", tone: "amber" },
          p: [
            "Sweden devolves healthcare to its <b>regions</b>, which run the hospitals and set the charges, and funds it for people <b>registered as resident</b>. A visitor from outside the EU or EEA is <b>charged the full cost</b>, and because pricing is regional there is <b>no single national figure</b> to quote even in principle.",
            "Emergency care comes first and the bill follows. <b>If it looks serious, get to care first and let the invoice follow.</b> Bring your policy details, because Swedish hospitals will ask how the account is being settled and an insurer's guarantee is simpler than a card payment."
          ]
        },
        {
          h: "The north is a different trip",
          icon: "plane",
          key: { tag: "Distance and winter", text: "Around the big cities a hospital is close. In Norrland and Lapland the distances are large and winter makes them larger, which turns transport into a cost.", tone: "amber" },
          p: [
            "In the <b>southern third</b> of Sweden, where most people live, care is close and the honest risk is financial rather than logistical. Go north and that changes. <b>Norrland and Swedish Lapland</b> are sparsely populated and very large, and in <b>winter</b> a journey that is straightforward in July is neither quick nor certain.",
            "For a northern-lights trip, a dog-sledding or snowmobile holiday, or anything in the mountains, the realistic serious scenario involves <b>being moved</b> before it involves being treated. That makes the <b>evacuation limit</b> on a policy the number worth reading, rather than the medical maximum."
          ]
        },
        {
          h: "Why there are no prices on this page",
          icon: "tag",
          key: { tag: "Absence is not zero", text: "We have not sourced an official Swedish price list for visitors that we would stand behind, so we have published none.", tone: "teal" },
          p: [
            "We would rather say this than pad the page. We have <b>not sourced an official Swedish tariff for non-resident care</b> that we would put our name to, so no local price figure appears here. On a medical page a plausible-sounding number is not a small error, because it is something a person might act on while unwell.",
            "The structure is dependable even without a figure: <b>you are charged the full cost</b>, <b>the regions set their own rates</b>, <b>care precedes billing</b>, and <b>distance is a cost in the north</b>. Because pricing is regional, the only accurate number is the one from the hospital treating you."
          ]
        },
        {
          h: "What this means for your money",
          icon: "cash",
          key: { tag: "Match it to the latitude", text: "A Stockholm city break and an arctic trip carry different risks. Cover the one you are actually taking.", tone: "teal" },
          p: [
            "The practical advice is unusually simple here: work out <b>which Sweden</b> you are visiting. A <b>city trip</b> needs cover for an ordinary hospital invoice. An <b>arctic or mountain trip</b> needs cover for moving a patient across a large, cold, thinly populated country.",
            "Neither is alarming, and we are not going to dress the first one up as the second. For paying on the ground, see the <a href='/sweden/cash-or-card'>Sweden cash and cards guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is healthcare free in Sweden for tourists?", a: "No. Swedish healthcare is run by the regions and funded for registered residents. A visitor from outside the EU or EEA is charged the full cost of treatment." },
        { q: "How much does a hospital cost in Sweden?", a: "We have not published a figure. Swedish regions set their own charges for non-resident care, so there is no single national rate, and we did not source an official regional tariff we would stand behind. Ask the hospital treating you." },
        { q: "Is northern Sweden riskier for medical costs?", a: "Not riskier clinically, but more expensive logistically. Norrland and Swedish Lapland are large and sparsely populated, and winter lengthens every journey, so a serious case there is a transport problem as well as a treatment one." },
        { q: "Will a Swedish hospital treat me without insurance?", a: "Yes. Emergency care is provided first and the charge follows afterwards. Carry your policy details, since hospitals will ask how the account is being settled." },
        { q: "Do I need travel insurance for Sweden?", a: "For a city trip it covers an ordinary hospital bill in an expensive country. For an arctic or mountain trip it is also paying for the distance, which is the larger of the two costs." }
      ],
      sources: {
        links: [
          { label: "US State Department: Sweden country information, including health and medical care guidance for travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Sweden.html", type: "gov" }
        ],
        judgment: "No price figures appear here. Swedish healthcare is priced by the regions rather than nationally, so a single national figure would be wrong by construction, and we did not source a regional tariff for non-resident care that we would publish. The north and south distinction is geographic fact rather than a claim about clinical quality, which is good throughout. Checked August 2026."
      }
    }
  ]
};
