export default {
  slug: "switzerland",
  iso2: "ch",
  live: true,
  name: "Switzerland",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  sources: {
    changed: "Sources added. Verified that Switzerland (outside the EU, its own franc) charges VAT of 8.1% on most things, 3.8% on hotel stays and 2.6% on food, all already in the price, and that non-residents can reclaim VAT on purchases over 300 francs in one shop. The per-night visitor's tax (Kurtaxe) is set locally, roughly 2 to 7 francs. The guide's figures are current.",
    links: [
      { label: "Switzerland Tourism: tax-free shopping, the 300 franc minimum and the 8.1% VAT", url: "https://www.myswitzerland.com/en-us/planning/about-switzerland/general-facts/money-and-shopping/tax-free-shopping/", type: "tourism" },
      { label: "Swiss Federal Tax Administration: VAT rates and the tax-free rules for visitors", url: "https://www.estv.admin.ch/estv/en/home/value-added-tax/vat-specialist-information/vat-vatefund-taxfree/vat-tax-free.html", type: "revenue" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "112", note: "112 reaches every service, 144 goes straight to an ambulance, and 1414 is Rega, the air-rescue service.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  region: "Europe",
  signals: { cardFriendliness: 4, cashNeed: 2, taxRisk: 3 },
  hook: "Card-friendly and tidy, but it's francs, not euros, and everything costs more than you expect.",
  aliases: ["zurich", "geneva", "bern", "basel", "lucerne", "lausanne", "zermatt", "interlaken", "st moritz", "st. moritz", "grindelwald", "swiss franc", "chf", "franc", "matterhorn", "jungfrau", "swiss", "helvetia"],

  title: "Money in Switzerland (2026): Cards, Cash, Francs and Tipping | True Trip Costs",
  description: "How to handle money in Switzerland as a US traveler in 2026: cards and tap work almost everywhere, why it's francs and not euros, how little you tip, paying in francs not dollars, the per-night visitor's tax and Guest Card, VAT that's already in the price, and which ATMs to use. Checked July 2026.",

  h1: "Money in Switzerland, sorted.",
  lede: "A calm, current plan for the money side of your trip: why you barely need cash, why it's francs and not euros, how modest the tipping is, and the small per-night tax that often pays for your train rides.",
  hero: {
    img: "/switzerland-hero.jpg",
    h: 1375,
    alt: "A cobbled Swiss alpine village street at dusk with wooden chalets, red geraniums in window boxes, string lights crossing the lane, drifting autumn leaves, the snow-dusted silhouette of the Matterhorn at the end of the street against a golden sky, a figure walking away, and a bubbling pot of cheese fondue beside a few squares of Swiss chocolate and a tall glass of golden beer on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Switzerland is clean, orderly and about as card-friendly as anywhere in Europe: tap, chip, Apple Pay and Google Pay work almost everywhere, and you rarely need cash. Bring a <b>no-foreign-fee Visa or Mastercard</b>, keep <b>CHF 50 to CHF 80</b> for mountain huts, small kiosks and cable-car snack bars, and pull francs from a <b>bank ATM</b> (UBS, PostFinance, Raiffeisen or a cantonal bank), declining any offer to charge you in dollars. Two things to hold onto: it's <b>Swiss francs, not euros</b> (Switzerland is not in the EU or the eurozone, so leftover euros won't spend here), and it is <b>genuinely expensive</b>, so budget more than you would for the rest of Europe. Tipping is light: service is included, and rounding up is plenty.",

  meter: {
    heading: "Nearly cashless, but keep a little for the mountains.",
    cashPct: 25,
    note: "A rough feel for everyday spending. Cards and contactless work almost everywhere, on trains, in shops, restaurants and even many small stalls, and locals lean heavily on cards and the Twint app. You need a little cash for high mountain huts, small village kiosks, some cable-car snack bars and the odd honesty-box farm stand. The real thing to plan for is not cash at all: prices are high, so pad your daily budget."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are taken nearly everywhere, contactless is standard, and Apple Pay and Google Pay are widely accepted. Locals often pay by the Twint app, but you will not need it. Amex is accepted at hotels and larger shops but is patchier at small cafes and mountain spots.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "ok", h: "Cash", verd: "A little, for the mountains", p: "Cards cover almost everything in towns. Keep CHF 50 to CHF 80 for high mountain huts, small kiosks, cable-car snack bars and rural honesty boxes. Franc coins go up to 5 francs and are worth real money, so do not let them pile up unspent before you fly home.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Use a bank machine", p: "Bank ATMs (UBS, PostFinance, Raiffeisen and the cantonal banks) are common and reliable. Read the on-screen fee, take a sensible amount at once since Switzerland is pricey, and always decline \"convert to US dollars.\" Your own bank's foreign-ATM fee usually matters more than the machine's.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> with contactless for nearly everything, plus a backup card from a different bank.",
      "Get a <b>no-foreign-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "Check whether your US phone plan covers Switzerland. Many that include Europe leave Switzerland out, since it is not in the EU, so an eSIM may be cheaper."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters, the rates are poor.",
      "Pull francs from a <b>bank ATM</b> (UBS, PostFinance, Raiffeisen or a cantonal bank) and <b>decline \"convert to US dollars.\"</b>",
      "You will need little cash, so one modest withdrawal usually covers a whole trip."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card or phone</b> for essentially everything: trains, shops, restaurants and museums.",
      "Prices already <b>include VAT</b>, so the number on the tag is what you pay.",
      "Carry a little cash for <b>mountain huts, small kiosks and cable-car snack bars</b>, which can be cash-only.",
      "<b>Always choose Swiss francs</b>, never dollars or euros, on every card terminal and ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "denom", when: "A golden rule", bullets: [
      "<b>It's francs, not euros, and always pay in francs.</b> Choosing dollars or euros (dynamic currency conversion) quietly adds 3 to 8%, and leftover euros do not spend here.",
      "<b>Budget high.</b> A coffee, a quick lunch or a short train hop all cost more than you expect, so plan a bigger daily number than for the rest of Europe."
    ], cta: null }
  ],

  cash: {
    rate: 0.82, cur: "CHF", round: 10, defaultIndex: 1,
    rateNote: "The franc is strong: roughly 0.82 francs to 1 US dollar in mid-2026, so 1 franc is worth about $1.22. That means CHF 100 is about $122 and CHF 20 about $24. Switzerland is expensive, and the rate moves, so check a current converter before you go.",
    styles: [
      { n: "Budget", per: 90, cash: 0.25, room: 130 },
      { n: "Mid-range", per: 200, cash: 0.2, room: 260 },
      { n: "Comfort", per: 420, cash: 0.15, room: 450 }
    ]
  },

  connectivity: {
    works: "Excellent almost everywhere, including high in the Alps and on trains through the mountains. The three networks, Swisscom, Sunrise and Salt, give strong 4G and wide 5G, and even remote valleys and high passes are usually covered. Local plans are expensive, and because Switzerland is not in the EU, roaming that is free elsewhere in Europe often is not free here, so check your US plan carefully; an eSIM (Airalo, Nomad, Ubigi) is frequently the cheaper option. You do not need mobile data to pay for anything; cards and contactless stand on their own."
  },

  // VISITOR'S TAX (high-churn, verified to Jul 2026 knowledge; confirm municipal rates).
  // Switzerland has no national tourist tax. Instead most towns charge a per-person, per-night
  // visitor's tax (Kurtaxe / taxe de sejour), roughly CHF 2 to 7, set by the municipality or resort,
  // and it very often includes a Guest Card giving free or discounted local transport and attractions.
  // These are rough figures; the exact amount varies by town and season. VAT is separate and already
  // included in displayed prices.
  tax: {
    unit: "perPersonPerNight",
    currency: "CHF",
    capNights: null,
    note: "Switzerland has no single national tourist tax. Instead most towns add a small per-person, per-night visitor's tax, set locally, and it often comes with a Guest Card that gives free or discounted local trains, buses and attractions, so it frequently pays for itself. These are rough figures; the exact amount varies by town and season. VAT is separate and already included in prices.",
    regions: [
      { key: "cities", label: "Cities (Zurich, Geneva, Basel, Bern)", rate: 3.0, note: "Big-city visitor's taxes run roughly CHF 2.50 to 4 per person per night. Many cities include a transport or museum card with your stay." },
      { key: "resorts", label: "Alpine resorts (Zermatt, St. Moritz, Interlaken, Lucerne, Grindelwald)", rate: 4.0, note: "Mountain and lake resorts charge roughly CHF 3 to 7 per person per night, and the Guest Card here is often the most valuable, with free local transport, cable-car discounts and more." },
      { key: "other", label: "Smaller towns and villages", rate: 2.5, note: "Smaller places charge roughly CHF 2 to 3 per person per night, still usually with a local Guest Card." }
    ]
  },

  currencyHeading: "The Swiss franc, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "The franc is strong. At about 0.82 francs to 1 US dollar in mid-2026, a franc is worth roughly $1.22. So CHF 10 is about $12.20, CHF 50 about $61, and CHF 100 about $122. To go the other way, a US figure buys a little less than that many francs." },
    { sym: "smallnotes", k: "Notes and coins", v: "Notes come in CHF 10, 20, 50, 100, 200 and 1000. Coins are the 5, 10 and 20 centime pieces (called Rappen or centimes), the half franc, and the 1, 2 and 5 franc coins. The 5 franc coin is worth about $6, so spend your coins before you leave." },
    { sym: "denom", k: "It's francs, not euros", v: "Switzerland is not in the EU or the eurozone, so the currency is the Swiss franc, not the euro. Some shops near borders or in big stations will take euros, but the rate is poor and your change comes back in francs. Leftover euros from elsewhere in Europe will not spend here." },
    { sym: "tag", k: "Tax is already in the price", v: "Swiss VAT is low by European standards and included in the displayed price: 8.1% on most things, just 3.8% on hotel stays and 2.6% on food and books. The tag or menu price is what you pay, and non-residents can reclaim VAT on larger purchases (see below)." }
  ],

  taxfree: {
    label: "Taxes, tips and refunds",
    heading: "Low tax in the price, a small nightly tax, and a light tip.",
    text: "Switzerland keeps things simple. <b>VAT is already included</b> in the price you see: 8.1% on most goods and services, a low 3.8% on hotel accommodation and 2.6% on food and books. Non-residents can also claim <b>tax-free shopping</b>: on purchases of at least <b>CHF 300</b> in a single store on the same day, ask for a refund form, and reclaim the VAT when you export the goods within 30 days (the desk is usually at the airport or border). Separately, most towns charge a small <b>per-person, per-night visitor's tax</b> (roughly CHF 2 to 7), and the good news is it often comes with a <b>Guest Card</b> that gives free or discounted local transport and attractions, so it frequently pays for itself. <b>Tipping is light</b>: service is included by law, and rounding up or leaving about 5 to 10% for good service is generous, not expected. There is no departure tax to pay separately; airport charges are built into your ticket."
  },

  traps: [
    "<b>It's an expensive country, so budget up.</b> A coffee, a quick lunch or a short train ride all cost more than you expect. Plan a higher daily number than for the rest of Europe and it will not sting.",
    "<b>Pay in francs, not dollars or euros.</b> Terminals and ATMs offer to charge you in your home currency (dynamic currency conversion), which adds 3 to 8%. Near borders and in big stations some places take euros, but at a poor rate, with change in francs.",
    "<b>It's francs, not euros.</b> Switzerland is not in the EU or the eurozone. Do not arrive expecting to spend euros, and do not load up on euros for this leg of a European trip.",
    "<b>Carry a little cash for the mountains.</b> Some high huts, small cable-car kiosks and rural honesty boxes are cash-only. A modest amount of francs covers the gaps where a card will not."
  ],

  tippingHeading: "Light: service is included, rounding up is plenty.",
  tipping: "Tipping in Switzerland is modest, so relax about it. Service is included in the bill by law, and locals simply round up or leave a little extra for good service, roughly 5 to 10% at a nice restaurant, which is generous rather than expected. At a cafe or casual spot, rounding the bill up to the next franc or two is fine. For taxis, round up to the nearest franc or two; for hotel housekeeping, a couple of francs is a kind gesture but not required; for a bellhop or a helpful tour guide, a few francs is appreciated. There is no card-terminal tip prompt culture here as there is in North America, so you will usually just leave coins or tell the staff the total to charge.",

  faqs: [
    { q: "Do I need cash in Switzerland?", a: "Not much. Cards and tap work almost everywhere, including on trains and at many small stalls. Keep about CHF 50 to CHF 80 for high mountain huts, small kiosks, cable-car snack bars and the occasional rural honesty box, and pull it from a bank ATM if you run low." },
    { q: "Does Switzerland use the euro?", a: "No. Switzerland is not in the EU or the eurozone, so it uses the Swiss franc (CHF). A few shops near borders or in major stations accept euros, but the rate is poor and your change comes back in francs, so plan to pay in francs and do not rely on leftover euros." },
    { q: "Should I pay in Swiss francs or US dollars?", a: "Swiss francs. If a card terminal or ATM offers to charge you in US dollars (or euros), decline; that dynamic currency conversion typically adds 3 to 8%. Paying in francs and letting your own bank convert is almost always cheaper." },
    { q: "How much should I tip in Switzerland?", a: "Very little. Service is included by law, so locals just round up or leave about 5 to 10% for good service at a nice restaurant, which is generous, not expected. Round up for taxis and casual meals, and there is no terminal tip-prompt culture as in the US." },
    { q: "Why is Switzerland so expensive?", a: "High wages, a strong franc and a high cost of living all feed into prices, from coffee and lunch to train tickets and hotels. It is not a rip-off aimed at tourists, it is simply an expensive country, so the fix is to budget a higher daily number than you would elsewhere in Europe." },
    { q: "Can I get a VAT refund on shopping in Switzerland?", a: "Yes, if you are a non-resident and spend at least CHF 300 in one store on the same day. Ask for a tax-free refund form, keep the goods unused, and claim the VAT back when you export them within 30 days, usually at an airport or border refund desk." }
  ],

  culture: {
    heading: "A little of the local language goes a long way",
    intro: "Switzerland speaks four languages, so your hello changes with the valley you are in, but a smile travels everywhere. A word in the local tongue and a story or two mark you as a guest rather than a tourist.",
    phrases: [
      { mean: "Hello, German-speaking Switzerland", say: "GROO-tsee", word: "Grüezi" },
      { mean: "Hello, French-speaking west", say: "bawn-ZHOOR", word: "Bonjour" },
      { mean: "Hello, Italian-speaking south", say: "bwohn-JOR-noh", word: "Buongiorno" },
      { mean: "Hello, in Romansh", say: "ah-LAY-grah", word: "Allegra" },
      { mean: "Thank you, German and French", say: "DAHN-kuh / mair-SEE", word: "Danke / Merci" },
      { mean: "Cheers", say: "prohsht", word: "Proscht" },
    ],
    tip: "Match your greeting to the region: <b>Grüezi</b> in the German-speaking north and east, <b>Bonjour</b> in the French-speaking west, <b>Buongiorno</b> in the Italian-speaking south. And be on time: in Switzerland punctuality is a form of respect, and the trains really do leave to the minute.",
    stories: [
      { img: "/switzerland-culture-1.jpg",
        alt: "WPA-style illustration of a crossbowman in medieval Alpine dress taking aim in a village square while villagers watch, wooden chalets and green mountains behind",
        h: "One apple, one legend",
        p: "Legend tells of William Tell, a mountain marksman forced by a cruel overlord to shoot an apple from his own son's head with a crossbow. He split the apple clean, then helped spark the rebellion that founded Switzerland. Whether he truly lived or not, he is the spirit of Swiss independence.",
        note: "Good to know: Tell is the symbol of Swiss freedom" },
      { img: "/switzerland-culture-2.jpg",
        alt: "WPA-style illustration of a large St Bernard rescue dog with a small wooden cask at its collar standing alert in deep snow on a high Alpine pass, snow-capped peaks behind",
        h: "The dogs that saved lives in the snow",
        p: "High on the Great St Bernard Pass, monks bred big, gentle dogs to find travellers lost in the snow, and over the centuries the St Bernard breed is said to have saved around 2,000 lives. The most famous, a dog named Barry, rescued dozens on his own. The little brandy cask on the collar, though, is a charming myth.",
        note: "Good to know: the most famous dog was named Barry" },
      { img: "/switzerland-culture-3.jpg",
        alt: "WPA-style illustration of a watchmaker leaning over a wooden bench under a green lamp, a loupe to his eye and tweezers setting a tiny part into an open watch movement",
        h: "A nation built on precision",
        p: "Swiss watchmaking is a craft centuries old, and a fine mechanical watch can hold hundreds of tiny parts, each set by hand under a loupe. The tradition took root in Geneva and the Jura mountains and became a byword for precision the world over. That same love of exactness runs right through Swiss life.",
        note: "Say it: made in Switzerland means precision" },
    ],
    pride: "The Swiss are private, precise and quietly proud: of four languages living side by side, of mountains and trains that run to the minute, and of a humanitarian spirit that gave the world the Red Cross, founded in Geneva in 1863."
  },

  spokes: [
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Light, service included" },
        { k: "Restaurants", v: "Round up, up to about 10%" },
        { k: "Not expected", v: "But welcome for good service" },
        { k: "How", v: "Cash, or tell the server" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Switzerland: light, and what you actually owe (2026) | True Trip Costs",
      description: "How tipping works in Switzerland for US travelers in 2026: why service is already included, how much to round up for good service, and why even that adds up in an expensive country. Checked July 2026.",
      h1: "Tipping in Switzerland",
      lede: "Switzerland is a light-tipping country. Service was folded into prices long ago and staff earn strong wages, so nobody expects a US-style percentage. Rounding up for good service is the norm. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Switzerland has a <b>light tipping culture</b>. Service has been <b>included</b> since tipping was folded into prices decades ago, and staff earn <b>strong wages</b>, so there is <b>no expected percentage</b> and no obligation. For good service, <b>rounding up</b> is the norm, or up to about <b>10%</b> at a nicer restaurant if you were really pleased. Because Switzerland is <b>expensive</b>, even rounding up adds up, so do not feel you owe more. Leave a tip in <b>cash</b> (francs) or tell the server the total.",
      sections: [
        {
          h: "Light tipping, since service is included",
          icon: "coins",
          key: { fig: "Included", tag: "Not expected", text: "Service has been included in prices for decades and staff earn strong wages, so tipping is light and never obligatory.", tone: "teal" },
          p: [
            "Switzerland folded <b>service into prices</b> decades ago, and staff earn <b>strong wages</b>, so tipping is <b>light and not expected</b>. There is <b>no US-style percentage</b> to track, and no one will chase you for one.",
            "For genuinely good service, the norm is simply to <b>round up</b> the bill to a convenient figure, or leave up to about <b>10%</b> at a nicer restaurant if you were really pleased. It is a courtesy, not an obligation."
          ]
        },
        {
          h: "When and how much to leave",
          icon: "receipt",
          key: { fig: "Round up", tag: "Up to about 10%", text: "For good service, round up or leave up to about 10% at a nicer place. Switzerland is expensive, so even rounding up adds up.", tone: "teal" },
          p: [
            "At an everyday meal, <b>rounding up</b> is plenty. At a <b>nicer restaurant</b> where service was excellent, up to about <b>10%</b> is generous. At a <b>cafe or bar</b>, leaving the small change is normal.",
            "Because Switzerland is <b>one of Europe's most expensive</b> countries, even rounding up a bill is a meaningful amount, so <b>do not feel you owe more</b>. Round up a taxi fare, and leave a franc or two per bag for a porter."
          ]
        },
        {
          h: "Cash, or tell the server",
          icon: "cash",
          key: { fig: "Francs", tag: "Cash or say the total", text: "Leave a tip in francs, or tell the server the total when paying by card. There is no need for a set percentage.", tone: "teal" },
          p: [
            "Leave any tip in <b>cash, in francs</b>, or, when paying by card, <b>tell the server the total</b> you want to pay including the tip. Keep a few <b>franc coins and small notes</b> handy. For the wider picture, see <a href='/switzerland/cash-or-card'>cash or card in Switzerland</a> and the <a href='/switzerland'>Switzerland money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Switzerland?", a: "Only lightly, and only if you want to. Service is included in prices and staff earn strong wages, so there is no expected percentage. For good service, round up, or up to about 10% at a nicer restaurant." },
        { q: "Is a service charge added in Switzerland?", a: "Service was folded into prices decades ago, so the listed price already covers it. There is no separate US-style tip expected; rounding up for good service is the norm." },
        { q: "How much should I tip at a Swiss restaurant?", a: "Nothing is required. Round up the bill for good service, or up to about 10% at a nicer place if you were really pleased. Switzerland is expensive, so even rounding up is a meaningful amount." },
        { q: "Cash or card for tips in Switzerland?", a: "Either. Leave cash in francs, or tell the server the total you want to pay when paying by card. There is no need for a set percentage." }
      ],
      sources: {
        links: [
          { label: "US State Department: Switzerland country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Switzerland.html", type: "gov" }
        ],
        judgment: "Swiss tipping is light because service was long ago included in prices, and this is our practical read of current norms rather than a single official table. Amounts are a guide; rounding up is the local habit. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Swiss franc (CHF), not euro" },
        { k: "Cards", v: "Card-friendly, contactless everywhere" },
        { k: "Euros", v: "Sometimes taken, poor change" },
        { k: "On a card", v: "Choose francs, not dollars" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Switzerland, or can I use cards? (2026) | True Trip Costs",
      description: "Barely. Switzerland is very card-friendly and contactless is everywhere. The catch is the currency: it is Swiss francs, not euros, and paying in euros gets a poor rate, so use francs and choose francs on a card. Checked July 2026.",
      h1: "Do I need cash in Switzerland, or can I use cards?",
      lede: "Short answer: a card for almost everything, a little cash in francs. Switzerland is very card-friendly, but the thing to get right is the currency: it uses Swiss francs, not euros, despite being surrounded by the eurozone.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Cards, almost entirely. Switzerland is <b>very card-friendly</b>: <b>contactless</b> is everywhere, and Apple Pay and Google Pay are widely taken. The key thing to get right is the <b>currency</b>: Switzerland uses the <b>Swiss franc (CHF), not the euro</b>, even though it is surrounded by the eurozone. Some tourist spots and hotels <b>accept euros</b>, but they give <b>change in francs at a poor rate</b>, so pay in <b>francs</b>. On any card or ATM, choose <b>francs, not dollars</b>. Keep a little cash in francs for small things; it is an expensive country, so budget accordingly.",
      sections: [
        {
          h: "Card-friendly, but it is francs, not euros",
          icon: "phoneok",
          key: { fig: "Use francs", tag: "Not the euro", text: "Switzerland is very card-friendly and contactless is everywhere, but the currency is the Swiss franc, not the euro. Euros are sometimes taken but change comes in francs at a poor rate.", tone: "amber" },
          p: [
            "Switzerland is <b>very card-friendly</b>. <b>Visa and Mastercard</b> are taken almost everywhere, <b>contactless</b> is the norm, and Apple Pay and Google Pay work widely; <b>Amex</b> is less consistent. Locals also use the <b>Twint</b> app, but you do not need it as a visitor.",
            "The thing to get right is the <b>currency</b>. Switzerland uses the <b>Swiss franc (CHF)</b>, not the euro, despite the eurozone all around it. Some hotels, stations and tourist shops <b>accept euros</b>, but they hand back <b>change in francs at a poor rate</b>, so it is better to <b>pay in francs</b> and keep euros for elsewhere."
          ]
        },
        {
          h: "Choose francs, not dollars",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose francs", text: "When a terminal or ATM offers dollars or francs, pick francs. Dollars trigger dynamic currency conversion at a rate about 3 to 8% worse than your bank's.", tone: "amber" },
          p: [
            "When a card terminal or ATM asks whether to charge in <b>dollars or francs, always choose francs</b>. Choosing dollars triggers dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. The same goes for any offer to charge you in euros. Decline both every time.",
            "For cash, use an ATM (a <b>Bancomat</b>) attached to a <b>Swiss bank</b>, such as UBS, PostFinance or a cantonal bank, rather than a standalone tourist kiosk. Use a <b>debit card</b> to avoid cash-advance fees."
          ]
        },
        {
          h: "How much cash, and the cost of things",
          icon: "coins",
          key: { fig: "A little", tag: "Expensive country", text: "A card covers almost everything, so carry a little cash in francs. Switzerland is expensive, so budget higher than most of Europe.", tone: "teal" },
          p: [
            "A card covers almost everything, so carry only <b>a little cash in francs</b> for small purchases, mountain huts, or the odd machine. Switzerland is one of <b>Europe's most expensive</b> countries, so day-to-day costs, meals and transport run well above neighboring countries; budget accordingly rather than being caught out.",
            "Tipping is light, since service is included and staff earn a strong wage; rounding up is plenty. For the wider picture, see the <a href='/switzerland'>Switzerland money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Switzerland?", a: "Not much. Switzerland is very card-friendly and contactless is everywhere. Carry a little cash in Swiss francs for small purchases and mountain huts, but a card covers most spending." },
        { q: "Does Switzerland use the euro?", a: "No. Switzerland uses the Swiss franc (CHF), not the euro, even though it is surrounded by the eurozone. Some tourist spots accept euros but give change in francs at a poor rate, so it is better to pay in francs." },
        { q: "Should I pay in francs or dollars in Switzerland?", a: "Always francs. If a card machine or ATM offers dollars (or euros), decline: that dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
        { q: "Is Switzerland expensive?", a: "Yes, it is one of Europe's most expensive countries. Meals, transport and everyday costs run well above neighboring countries, so budget higher. A card covers most spending, with a little cash in francs for small things." }
      ],
      sources: {
        links: [
          { label: "Swiss National Bank: official Swiss franc information", url: "https://www.snb.ch", type: "gov" },
          { label: "US State Department: Switzerland country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Switzerland.html", type: "gov" }
        ],
        judgment: "Switzerland is strongly card-friendly, and the practical points here are our read, but the currency rule is firm: it is francs, not euros, and you should decline dollar or euro conversion on your card. The franc rate moves. Checked July 2026."
      }
    },
    {
      slug: "bringing-your-pet",
      glance: [
        { k: "Process", v: "Shared EU entry (adopted)" },
        { k: "Need", v: "ISO chip, rabies, EU health cert" },
        { k: "Enter within", v: "10 days of endorsement" },
        { k: "Coming home", v: "Simple CDC path" }
      ],
      live: true,
      topic: "pets",
      insurance: true,
      title: "Bringing a dog or cat to Switzerland from the US (2026): the EU process, and the Switzerland-specific parts | True Trip Costs",
      description: "Moving to Switzerland with a pet from the US: why it runs on the shared EU health-certificate process, no quarantine and no titer, plus what is specific to Switzerland on arrival and after you settle in. Checked July 2026.",
      h1: "Bringing your dog or cat to Switzerland.",
      lede: "Switzerland runs on the single EU pet-entry process for a US-origin dog or cat: microchip, rabies in the right order, and an EU health certificate on a 10-day clock. No quarantine, no rabies titer. Here is what that means for Switzerland, and the local parts worth knowing.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Switzerland uses the <b>shared EU pet-entry process</b> (it has adopted the EU rules), so there is no separate national permit and nothing unusual at the border. Your pet needs an <b>ISO microchip, a rabies vaccination given after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS</b>, then must enter within <b>10 days</b> of that endorsement. There is <b>no quarantine and no rabies titer</b> for a pet coming straight from the US. The full step-by-step, the ordering trap, and the current fees are on one page: see <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a>. Below are the Switzerland-specific notes. Coming home to the US is the easy part.",
      sections: [
        {
          h: "Switzerland runs on the EU process",
          icon: "health",
          key: { fig: "10 days", tag: "EU rules, not an EU member", text: "Switzerland is not an EU member but has adopted the EU import rules, so it is the standard EU move: an ISO microchip first, a rabies shot after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS. Enter within 10 days of endorsement.", tone: "teal" },
          p: ["Switzerland is not an EU member but has adopted the EU import rules, so bringing a dog or cat into Switzerland from the US is the standard EU move: an ISO microchip first, a rabies vaccination after the chip, then an EU Animal Health Certificate completed by a USDA-accredited vet and endorsed by APHIS, with the pet arriving within 10 days of endorsement. A first rabies shot adds a 21-day wait before travel.", "Because the core process is identical across the EU (and the countries that follow its rules), we do not repeat it per country. The full sequence, the microchip-before-rabies trap that costs people the most time, the 10-day clock, and the current APHIS endorsement fees all live on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Read that first, then come back for the Switzerland notes."]
        },
        {
          h: "The Switzerland-specific parts",
          icon: "receipt",
          key: { fig: "Same rules", tag: "At the border", text: "The core process is the same shared one. Swiss customs may ask to see the endorsed certificate and confirm the chip, and pets should arrive through a designated traveller point of entry.", tone: "teal" },
          p: ["Switzerland sits outside the EU but has adopted the EU import rules, so the core process is the same shared one: an ISO microchip, rabies after the chip, and an EU Animal Health Certificate endorsed by APHIS, with the pet arriving within 10 days of endorsement. There is no dog or cat tapeworm rule for Switzerland, unlike Ireland, Finland or Malta, and no quarantine or titer for a pet coming straight from the US.", "After you arrive, Switzerland requires dogs to be microchipped and registered in the national database (AMICUS) through the local commune once you have an address, and dog owners pay an annual dog tax set by the commune or canton. Some cantons keep their own restricted-breed lists and permit rules, so if your dog is a bull-type or mastiff-type breed, check the rules for the canton where you plan to live."]
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
          key: { fig: "Easy", tag: "The return trip", text: "A dog flying home from Switzerland is on the simplest CDC path: usually a CDC Dog Import Form receipt, a microchip, and a minimum age of 6 months.", tone: "teal" },
          p: ["Good news for the return trip: a dog flying home to the US from Switzerland is on the simplest CDC path, typically a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement.", "For the wider picture, including how Switzerland compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Switzerland",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-switzerland",
        note: "The US-side steps and the EU health certificate for Switzerland. Switzerland applies the shared EU process, and the destination's own authorities are the final word on the day."
      },
      faqs: [
        {
          q: "Is Switzerland part of the EU pet process?",
          a: "In effect, yes. Switzerland is not an EU member but has adopted the EU import rules, so a US-origin pet uses the same EU Animal Health Certificate process: microchip, rabies in order, APHIS endorsement, and the 10-day window, with no quarantine or titer. After you arrive, dogs are registered in the national AMICUS database through the local commune and a communal dog tax applies."
        },
        {
          q: "Does my pet have to go into quarantine in Switzerland?",
          a: "No. Switzerland applies the shared EU pet-entry process, which has no quarantine and no rabies titer for a pet coming straight from the US. Your pet needs a microchip, a rabies vaccination in the right order, and an EU Animal Health Certificate endorsed by APHIS, then must arrive within 10 days of endorsement. See our EU pet health certificate page for the full process."
        },
        {
          q: "Do I need to quarantine my pet coming back to the US from Switzerland?",
          a: "No. A dog returning to the US from Switzerland is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details."
        }
      ],
      sources: {
        links: [
          {
            label: "True Trip Costs: the EU pet health certificate, the shared microchip, rabies and certificate process for all EU countries including Switzerland",
            url: "/eu-pet-health-certificate",
            type: "internal"
          },
          {
            label: "USDA APHIS: pet travel from the United States to Switzerland, the US-side steps and EU health certificate",
            url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-switzerland",
            type: "gov"
          },
          {
            label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, for the return leg",
            url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html",
            type: "gov"
          }
        ],
        judgment: "Switzerland applies the shared EU pet-entry framework, which it has adopted despite sitting outside the EU, set by the EU and administered on the US side by APHIS, not by us. The process is stable in substance, though the EU certificate format changes on 1 October 2026, which we cover on the EU pet health certificate page. The local registration and any breed rules vary, so we point you to the official pages and dated this July 2026."
      }
    }
  ]
};
