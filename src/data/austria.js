export default {
  slug: "austria",
  iso2: "at",
  live: true,
  name: "Austria",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  sources: {
    changed: "Re-checked July 2026. Confirmed the Vienna Ortstaxe rose to 5% of the net room price on 1 July 2026 as enacted (a further rise to 8% is set for 1 July 2027). The file already read correctly; re-stamped checked dates. VAT refund and alpine flat fees unchanged.",
    links: [
      { label: "City of Vienna: the Ortstaxe (local accommodation tax) and its rise to 5% from 1 July 2026", url: "https://www.wien.gv.at/english/e-government/financial/tax/local-tax.html", type: "gov" },
      { label: "Austrian Federal Ministry of Finance: the VAT refund for non-EU visitors, from 75.01 euros", url: "https://www.bmf.gv.at/en/topics/customs/travellers/vat-refund.html", type: "revenue" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "112", note: "112 reaches every emergency service, and 144 goes straight to an ambulance.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  region: "Europe",
  signals: { cardFriendliness: 3, cashNeed: 3, taxRisk: 3, atmRisk: 4 },
  hook: "Cards work fine, but Austria still runs on more cash than most of Western Europe.",
  aliases: ["vienna", "wien", "salzburg", "innsbruck", "hallstatt", "graz", "linz", "tyrol", "tirol", "austrian", "euro", "eur", "alps", "alpine"],

  title: "Money in Austria (2026): Cards, Cash, Euros and Tipping | True Trip Costs",
  description: "How to handle money in Austria as a US traveler in 2026: cards and tap work in most places but cash is still common, why to pay in euros not dollars, how little you tip, which ATMs to use, the per-night tourist tax, VAT that's already in the price, and how to claim it back. Checked July 2026.",

  h1: "Money in Austria, sorted.",
  lede: "A calm, current plan for the money side of your trip: why you should carry a bit more cash than elsewhere in Europe, how modest the tipping is, and the small nightly tourist tax added at your hotel.",
  hero: {
    img: "/austria-hero.jpg",
    h: 1375,
    alt: "A cobbled Salzburg old-town lane at dusk with pastel baroque townhouses, red geraniums in window boxes, wrought-iron shop signs, string lights crossing the street, drifting autumn leaves, the lit silhouette of the Hohensalzburg Fortress on its hill with a snowy Alpine peak behind it, a figure in a warm coat walking away, and a plate of golden Wiener schnitzel with a lemon wedge beside a slice of Sachertorte and a tall glass of golden beer on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Austria is easy on the wallet to manage: cards and contactless work in most shops, restaurants and on transit, and Apple Pay and Google Pay are widely accepted. The twist is that Austria leans on <b>cash more than most of Western Europe</b>, so some cafes, bakeries, wine taverns and small shops still prefer notes or set a card minimum. Bring a <b>no-foreign-fee Visa or Mastercard</b>, carry <b>60 to 100 euros</b> in cash, and pull more from a <b>bank ATM</b> (a Bankomat at Erste, Bank Austria or Raiffeisen) rather than the blue Euronet machines. Prices already include VAT, tipping is light, and the one rule that always saves money is to pay in <b>euros, not dollars</b>, on every card screen.",

  meter: {
    heading: "Cards work, but keep real cash on you here.",
    cashPct: 45,
    note: "A rough feel for everyday spending. Cards and contactless are fine in most places, but Austria is more of a cash country than its neighbors, so a fair share of cafes, bakeries, market stalls, mountain huts and traditional wine taverns (Heuriger) prefer cash or ask for a minimum card spend. Carry enough notes that a card-only wallet never leaves you stuck."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Fine in most places", p: "Visa and Mastercard are accepted in most shops, restaurants and on transit, and contactless, Apple Pay and Google Pay are widely supported. Amex is patchier. The gaps are small and traditional: some cafes, bakeries, huts and wine taverns still want cash or set a card minimum.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Carry more than usual", p: "Austria uses cash more than most of Western Europe. Keep 60 to 100 euros for cafes, bakeries, small shops, markets, mountain huts and Heuriger wine taverns, where cards may not be welcome. Euro coins go up to 2 euros and add up, so spend them rather than hoarding them.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Use a bank Bankomat", p: "Bank ATMs (Erste and Sparkasse, Bank Austria, Raiffeisen) are widespread and reliable. Avoid the blue Euronet machines in tourist areas, which offer poor rates and push fees and conversions. Read the screen, decline \"convert to US dollars,\" and take enough at once.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> with contactless, plus a backup card from a different bank.",
      "Get a <b>no-foreign-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "Austria is in the EU, so an EU eSIM or an EU roaming plan works normally. Check whether your US plan already includes Europe."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters, the rates are poor.",
      "Pull euros from a <b>bank Bankomat</b> (Erste, Bank Austria, Raiffeisen), not a blue Euronet machine, and <b>decline \"convert to US dollars.\"</b>",
      "Take a sensible amount at once, since you will lean on cash a little more here than elsewhere."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card or phone</b> for larger shops, restaurants, museums and transit.",
      "<b>Keep cash handy</b> for cafes, bakeries, markets, huts and wine taverns, which may be cash-only or set a card minimum.",
      "Prices already <b>include VAT</b>, so the tag or menu price is what you pay.",
      "<b>Always choose euros</b>, never US dollars, on every card terminal and ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "coins", when: "A golden rule", bullets: [
      "<b>Always pay in euros, not dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "<b>Do not go fully cashless.</b> A card-only wallet will occasionally leave you stuck at a bakery counter or a mountain hut, so keep notes on you."
    ], cta: null }
  ],

  cash: {
    rate: 0.88, cur: "EUR", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 0.88 euros to 1 US dollar in mid-2026, so 1 euro is worth about $1.14. That means 100 euros is roughly $114 and 20 euros about $23. The rate moves, so check a current converter before you go.",
    styles: [
      { n: "Budget", per: 70, cash: 0.4, room: 90 },
      { n: "Mid-range", per: 150, cash: 0.3, room: 160 },
      { n: "Comfort", per: 300, cash: 0.2, room: 300 }
    ]
  },

  connectivity: {
    works: "Very good across the country and strong in the cities and along the valleys, with only the highest and most remote alpine areas thinning out. The main networks are A1, Magenta and Drei, all with wide 4G and growing 5G. Because Austria is in the EU, an EU eSIM or an EU SIM with \"roam like at home\" works normally here, and many US plans include European roaming, so check yours first; an eSIM (Airalo, Nomad, Ubigi) is a cheap backup. You do not need mobile data to pay for anything; cards and contactless stand on their own."
  },

  // TOURIST TAX (high-churn, verified to Jul 2026 knowledge; confirm local rates).
  // Austria has no national tourist tax. Most towns charge a local overnight tax (Ortstaxe /
  // Tourismusabgabe) added to your hotel bill. Vienna charges 5% of the net room price (raised from 3.2% on 1 July 2026);
  // most alpine and regional towns charge a flat per-person, per-night fee, commonly EUR 1 to 3.50.
  // These are rough figures; the exact amount varies by state, town and season. VAT is separate
  // and already included in displayed prices.
  tax: {
    unit: "perPersonPerNight",
    currency: "EUR",
    capNights: null,
    note: "Austria has no single national tourist tax. Most towns add a small local overnight tax to your hotel bill. Vienna charges a percentage of the room rather than a flat fee; most alpine and regional towns charge a flat per-person, per-night amount. These are rough figures; the exact amount varies by state, town and season. VAT is separate and already included in prices.",
    regions: [
      { key: "vienna", label: "Vienna", rate: 5.5, note: "Vienna's tax is technically 5% of the net room price (raised from 3.2% on 1 July 2026, with a further rise to 8% due in July 2027) rather than a flat nightly fee, so on a typical hotel it works out to about 5 to 7 euros per person per night. This uses a representative figure." },
      { key: "alpine", label: "Salzburg, Tyrol and the alpine resorts", rate: 2.5, note: "Alpine towns charge a flat local tax per person per night, commonly 1.50 to 3.50 euros depending on the resort and season." },
      { key: "other", label: "Elsewhere in Austria", rate: 2.0, note: "Most Austrian towns charge a small flat per-person, per-night tax, commonly 1 to 3 euros." }
    ]
  },

  currencyHeading: "The euro in Austria, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "Austria uses the euro. At about 0.88 euros to 1 US dollar in mid-2026, a euro is worth roughly $1.14. So 10 euros is about $11.40, 50 euros about $57, and 100 euros about $114. To go the other way, a US figure buys a little under that many euros." },
    { sym: "smallnotes", k: "Notes and coins", v: "Euro notes run from 5 to 200 euros (the 500 is being retired). Coins go from 1 cent up to 1 and 2 euros. Those 1 and 2 euro coins are real money, so use them for cafes, tips and ticket machines rather than letting them pile up." },
    { sym: "cash", k: "Cash is still common here", v: "This is the Austria surprise: unlike much of Western Europe, plenty of cafes, bakeries, market stalls, mountain huts and traditional wine taverns still prefer cash or set a minimum for card payment. Carry notes so a card-only wallet never leaves you stuck." },
    { sym: "tag", k: "Tax is already in the price", v: "Austrian VAT is included in the displayed price: 20% on most things and a reduced 10% on food, books and hotel stays. The tag or menu price is what you pay, and non-EU visitors can reclaim the VAT on larger purchases (see below)." }
  ],

  taxfree: {
    label: "Taxes, tips and refunds",
    heading: "Tax in the price, a refund if you shop big, and a light tip.",
    text: "In Austria, <b>VAT is already included</b> in the price you see: 20% on most goods and services, and a reduced 10% on food, books and hotel accommodation. As a US visitor you can claim <b>tax-free shopping</b>: on purchases over about <b>75 euros</b> in one store, ask for a refund form and reclaim the VAT when you leave the EU, usually at the airport. Separately, most towns add a small <b>overnight tourist tax</b> to your hotel bill: Vienna charges 5% of the net room price, while alpine and regional towns usually charge a flat per-person nightly fee of roughly 1 to 3.50 euros. <b>Tipping is light</b>: service is included, and rounding up or adding about 5 to 10% for good service is normal. Tell the server the total you want to pay as you hand over cash or card, rather than leaving coins on the table. There is no separate departure tax; airport charges are built into your ticket."
  },

  // High-churn fees and taxes, each tracked on its own with a status, an effective
  // date, a primary source and the date we last checked it. Rendered as a small,
  // always-open card after the tax-free section. Vienna's Ortstaxe is on a stepped
  // rise: 5% from 1 July 2026, then 8% from 1 July 2027.
  keyFacts: [
    { label: "Vienna accommodation tax (Ortstaxe)", value: "5% of the net room price", status: "enacted", effective: "2026-07-01", source: "https://www.wien.gv.at/english/e-government/financial/tax/local-tax.html", checked: "2026-07-21" },
    { label: "Vienna accommodation tax, next step", value: "8% of the net room price", status: "enacted", effective: "2027-07-01", source: "https://www.wien.gv.at/english/e-government/financial/tax/local-tax.html", checked: "2026-07-21" }
  ],

  traps: [
    "<b>Do not rely on cards alone.</b> Austria uses more cash than its neighbors, and cafes, bakeries, markets, huts and wine taverns may be cash-only or set a card minimum. Carry 60 to 100 euros so you are never caught out.",
    "<b>Pay in euros, not dollars.</b> Terminals and ATMs offer to charge you in your home currency (dynamic currency conversion), which adds 3 to 8%. Always choose euros and let your own bank convert.",
    "<b>Skip the blue Euronet ATMs.</b> The non-bank machines in tourist spots give poor rates and push fees. Use a bank Bankomat (Erste and Sparkasse, Bank Austria, Raiffeisen) and decline the US-dollar conversion.",
    "<b>The tourist tax is not uniform.</b> Vienna charges a percentage of your room while alpine towns charge a flat per-person nightly fee, and either way it is added to your hotel bill, not the sticker price you booked."
  ],

  tippingHeading: "Light: round up, or 5 to 10% for good service.",
  tipping: "Tipping in Austria is modest, so keep it simple. Service is included in the bill, and the custom is to round up or add roughly 5 to 10% for good service at a restaurant. The Austrian way is to tell the server the total you want to pay as you settle (for example, saying the rounded-up figure when you hand over the cash or card), rather than leaving coins on the table. For a quick coffee or casual meal, rounding to the next euro or two is plenty. Taxis get rounded up; hotel housekeeping a couple of euros is a kind gesture but not expected; a bellhop or helpful guide, a few euros. There is no North American card-terminal tip-prompt culture here.",

  faqs: [
    { q: "Do I need cash in Austria?", a: "More than in most of Western Europe, yes. Cards work in most shops and restaurants, but Austria still leans on cash, and cafes, bakeries, markets, mountain huts and traditional wine taverns may be cash-only or set a card minimum. Carry about 60 to 100 euros and top up at a bank Bankomat." },
    { q: "Should I pay in euros or US dollars in Austria?", a: "Euros. If a card terminal or ATM offers to charge you in US dollars, decline; that dynamic currency conversion typically adds 3 to 8%. Paying in euros and letting your own bank do the conversion is almost always cheaper." },
    { q: "What is the best ATM to use in Austria?", a: "A bank Bankomat, such as Erste and Sparkasse, Bank Austria or Raiffeisen. Avoid the blue Euronet machines common in tourist areas, which offer poor rates and push fees, and always decline the offer to convert to US dollars." },
    { q: "How much should I tip in Austria?", a: "Not much. Service is included, so locals round up or add about 5 to 10% for good service. The custom is to state the total you want to pay as you hand over cash or card, rather than leaving coins behind. Round up for taxis and casual meals." },
    { q: "Is tax included in prices in Austria?", a: "Yes. Austrian VAT is built into the displayed price, 20% on most things and a reduced 10% on food, books and hotels, so the tag or menu price is what you pay. Non-EU visitors can reclaim VAT on purchases over about 75 euros in one store when leaving the EU." },
    { q: "Does Austria charge a tourist tax?", a: "Most towns do, added to your hotel bill. Vienna charges 5% of the net room price, while alpine and regional towns usually charge a flat per-person nightly fee of roughly 1 to 3.50 euros. It is separate from the room rate you book online." }
  ],

  culture: {
    heading: "A little German goes a long way",
    intro: "Austrians speak German, and a warm Grüß Gott as you enter a shop, plus a story or two, marks you as a guest rather than a tourist. A little effort is always met with warmth.",
    phrases: [
      { mean: "Hello, a warm regional greeting", say: "grooss GOT", word: "Grüß Gott" },
      { mean: "Please, and you are welcome", say: "BIT-uh", word: "Bitte" },
      { mean: "Thank you", say: "DAHN-kuh", word: "Danke" },
      { mean: "Cheers", say: "prohst", word: "Prost" },
      { mean: "Delicious, tasty", say: "LECK-uh", word: "Lecker" },
      { mean: "Hi and bye, among friends", say: "SER-vus", word: "Servus" },
    ],
    tip: "In Austria the everyday greeting is <b>Grüß Gott</b> (literally, may God greet you), not the German Guten Tag, and locals use it walking into shops and cafes. Among friends you will hear <b>Servus</b> for both hello and goodbye.",
    stories: [
      { img: "/austria-culture-1.jpg",
        alt: "WPA-style illustration of a small boy in a powdered wig and court coat playing a gilded harpsichord in a candlelit palace salon while elegantly dressed nobles listen",
        h: "The boy who astonished Europe",
        p: "Wolfgang Amadeus Mozart was born in Salzburg in 1756 and was performing for royal courts across Europe by the age of six. He wrote more than 600 works before he died at just 35. Austria has been a land of music ever since, with Vienna as its beating heart.",
        note: "Good to know: Mozart was born in Salzburg in 1756" },
      { img: "/austria-culture-2.jpg",
        alt: "WPA-style illustration of couples in ball gowns and tailcoats waltzing across a mirrored ballroom floor beneath grand chandeliers and red-curtained windows",
        h: "The city that waltzes",
        p: "Vienna gave the world the waltz, at first thought scandalous for how closely the dancers held each other, then adored everywhere. Each winter the city holds hundreds of grand balls, and the most famous open with couples sweeping across the floor. The Strauss family turned the waltz into Vienna's heartbeat.",
        note: "Good to know: the ball season runs each winter" },
      { img: "/austria-culture-3.jpg",
        alt: "WPA-style illustration of a man reading a newspaper at a small marble table in a classic Vienna coffeehouse, a green pendant lamp above and a slice of torte with a small coffee",
        h: "The living room of the city",
        p: "The Viennese coffeehouse is a second living room: order one coffee and you may sit for hours, reading the papers, meeting friends or simply thinking. The tradition is so treasured it sits on the UNESCO list of intangible cultural heritage. Ask for a Melange, the Viennese cousin of a cappuccino.",
        note: "Say it: a Melange (meh-LAHNZH)" },
    ],
    pride: "For a country its size, Austria has an outsized soul: Mozart and the waltz, the Alps and the coffeehouse, and a gentle pride in Gemütlichkeit, a cosy, unhurried warmth that has no exact word in English."
  },

  spokes: [
    {
      slug: "tipping",
      glance: [
        { k: "Tipping (Trinkgeld)", v: "Modest, about 5 to 10%" },
        { k: "How", v: "Round up, say the total" },
        { k: "The habit", v: "Tell the server, do not leave it" },
        { k: "Pay with", v: "Cash is simplest" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Austria: Trinkgeld, and how to leave it (2026) | True Trip Costs",
      description: "How tipping works in Austria for US travelers in 2026: the modest Trinkgeld custom, why you tell the server the total rather than leaving it on the table, just like Germany. Checked July 2026.",
      h1: "Tipping in Austria",
      lede: "Austria tips much like Germany: a modest Trinkgeld, done by rounding up, and told to the server rather than left on the table. Here is how it works.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Austria has a modest tipping custom, <b>Trinkgeld</b>, of roughly <b>5 to 10%</b>, usually done by <b>rounding up</b>, and it works just like <b>Germany</b>: when the server takes payment, you <b>state the total you want to pay</b>, including the tip, rather than leaving it on the table. For a 42 euro bill you might say <b>46</b>, or <b>passt schon</b> (that is fine, keep the change). Service is <b>not a separate line</b> but staff earn a wage, so this is a courtesy. <b>Cash</b> is simplest, and when paying by card you tell the server the total.",
      sections: [
        {
          h: "Trinkgeld: how much, and the round-up habit",
          icon: "euro",
          key: { fig: "5-10%", tag: "Round up", text: "Trinkgeld is roughly 5 to 10%, done by rounding up. It is customary but modest, not a US-style 20%.", tone: "teal" },
          p: [
            "<b>Trinkgeld</b> in Austria is <b>customary but modest</b>: about <b>5 to 10%</b> at a restaurant, usually by <b>rounding up</b> to a tidy figure rather than calculating a percentage. At a <b>cafe or bar</b>, rounding up the coins is plenty.",
            "Service is <b>not added as a separate line</b>, and staff earn a wage, so the tip is a <b>genuine courtesy</b>. Round up for <b>taxis</b>, leave <b>1 to 2 euros per bag</b> for a porter, and a euro or two a day for housekeeping if you like."
          ]
        },
        {
          h: "The habit that surprises visitors: say the total",
          icon: "coins",
          key: { fig: "Say the total", tag: "Like Germany", text: "When the server takes payment, state the full amount you want to pay including the tip, or say passt schon for keep the change. You do not leave it on the table.", tone: "teal" },
          p: [
            "Just as in Germany, in Austria you <b>do not usually leave the tip on the table</b>. When the server tells you the total and takes your money, you <b>state the amount you want to pay</b>. For a <b>42 euro</b> bill, hand over a note and say <b>46</b>, and you get change for the rest.",
            "If you want to give exactly the change in hand, say <b>passt schon</b> (that is fine, keep the change). The server sorts the tip on the spot, so have a rough total in mind before they come over."
          ]
        },
        {
          h: "Cash, and paying by card",
          icon: "cash",
          key: { fig: "Cash is simplest", tag: "Tell the server", text: "Cash is the norm for tips. When paying by card, tell the server the total including the tip before they enter it.", tone: "teal" },
          p: [
            "<b>Cash</b> is the simplest way to tip in Austria, and many smaller places are cash-preferred anyway. When you <b>pay by card</b>, tell the server the <b>total including the tip</b> before they enter the amount. Keep <b>euro coins and small notes</b> handy for rounding up. For the wider picture, see <a href='/austria/cash-or-card'>cash or card in Austria</a> and the <a href='/austria'>Austria money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Austria?", a: "Yes, modestly. Trinkgeld of roughly 5 to 10% is customary, usually by rounding up. It is a courtesy, not an obligation, since staff earn a wage, and it works just like Germany." },
        { q: "How do you leave a tip in Austria?", a: "You tell the server the total you want to pay when they take payment, rather than leaving coins on the table. For a 42 euro bill you might say 46, or say passt schon to mean keep the change. The server handles it on the spot." },
        { q: "How much should I tip at an Austrian restaurant?", a: "About 5 to 10%, usually by rounding up to a tidy number. At a cafe or bar, rounding up the coins is plenty." },
        { q: "Can you tip by card in Austria?", a: "Yes, increasingly. Tell the server the total including the tip before they enter the amount. Cash is still the simplest, and many smaller places prefer it." }
      ],
      sources: {
        links: [
          { label: "US State Department: Austria country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Austria.html", type: "gov" }
        ],
        judgment: "Austrian tipping mirrors Germany, and the say-the-total habit is a longstanding local practice, not a rule. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Euro (EUR)" },
        { k: "Cards", v: "Fine in cities, cash for small spots" },
        { k: "Carry", v: "Some euros, like in Germany" },
        { k: "On a card", v: "Choose euros, not dollars" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Austria, or can I use cards? (2026) | True Trip Costs",
      description: "Some. Austria takes cards in cities and hotels, but like neighboring Germany it still leans on cash in small cafes, bakeries and wine taverns, so carry euros. Choose euros not dollars, and use bank ATMs. Checked July 2026.",
      h1: "Do I need cash in Austria, or can I use cards?",
      lede: "Short answer: cards in the cities, a fair bit of cash for small places. Austria is a little more cash-minded than most of Western Europe, much like its neighbor Germany, so carry euros. Here is how to handle it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Some cash, more than you might expect. Austria takes <b>cards in cities, hotels and larger shops</b>, and <b>contactless</b> (with Apple Pay and Google Pay) is common, but like neighboring <b>Germany</b> it leans on <b>cash</b> in smaller spots: bakeries, cafes, <b>Heuriger</b> (wine taverns), markets and some restaurants. The domestic card is the <b>Bankomatkarte</b>, and <b>Visa and Mastercard</b> are widely but not universally taken, with Amex patchy. So <b>carry some euros</b>. Choose <b>euros, not dollars</b> on any card or ATM, and use bank <b>Bankomat</b> machines.",
      sections: [
        {
          h: "Cards in the cities, cash for the small places",
          icon: "cash",
          key: { fig: "Carry euros", tag: "Cash-leaning, like Germany", text: "Cities, hotels and larger shops take cards, but bakeries, cafes, wine taverns and markets often prefer cash. Carry euros, as you would in Germany.", tone: "amber" },
          p: [
            "Austria is <b>a little more cash-minded than most of Western Europe</b>, much like Germany next door. <b>Vienna and the larger cities</b>, hotels, department stores and chain restaurants take <b>cards</b>, and <b>contactless</b> is common. But <b>bakeries, cafes, Heuriger wine taverns, market stalls and some smaller restaurants</b> often <b>prefer or require cash</b>.",
            "The domestic debit card is the <b>Bankomatkarte</b>. <b>Visa and Mastercard</b> are widely accepted, though not everywhere, and <b>Amex</b> is the least reliable. Carry <b>some euros</b>, especially away from the big cities, and do not assume a small place takes cards."
          ]
        },
        {
          h: "Choose euros, not dollars",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose euros", text: "When a terminal or ATM offers dollars or euros, pick euros. Dollars trigger dynamic currency conversion at a rate about 3 to 8% worse than your bank's.", tone: "amber" },
          p: [
            "When a card terminal or ATM asks whether to charge in <b>dollars or euros, always choose euros</b>. Dollars trigger dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. Decline it every time.",
            "For cash, use a <b>Bankomat</b> (ATM) attached to a <b>real bank</b>, such as Erste Bank, Bank Austria or Raiffeisen, rather than a standalone <b>Euronet</b> kiosk, which charges high fees and pushes the dollar conversion."
          ]
        },
        {
          h: "How much cash, and paying",
          icon: "coins",
          key: { fig: "Keep small notes", tag: "For daily spots", text: "Keep smaller euro notes and coins for cafes, bakeries and taverns. Use a debit card at the ATM and take a few days worth at once.", tone: "teal" },
          p: [
            "Keep <b>smaller euro notes and coins</b> for the cash-friendly spots, which dislike large notes. Use a <b>debit card</b> at the ATM rather than a credit card (a credit withdrawal is a cash advance with fees from day one), and take out a <b>few days' worth at once</b>.",
            "Plan to use cash for a fair slice of daily spending, more than in France or the Netherlands but less than a village-only trip. For the wider picture, see the <a href='/austria'>Austria money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Austria?", a: "Yes, a fair amount. Cities, hotels and larger shops take cards, but bakeries, cafes, Heuriger wine taverns, markets and some smaller restaurants often prefer or require cash. Carry euros, especially away from the big cities." },
        { q: "Are cards widely accepted in Austria?", a: "In Vienna and larger cities, hotels and chains, yes, and contactless is common. But acceptance is not universal, especially at small or rural spots, and Amex is patchy. Carry euros as backup." },
        { q: "Should I pay in euros or dollars in Austria?", a: "Always euros. If a card machine or ATM offers dollars, decline: that dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
        { q: "Where should I get cash in Austria?", a: "A Bankomat (ATM) attached to a real bank, such as Erste Bank, Bank Austria or Raiffeisen. Avoid the standalone Euronet kiosks, which charge high fees and push the dollar conversion. Always choose euros." }
      ],
      sources: {
        links: [
          { label: "European Central Bank: the official euro reference exchange rates", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html", type: "gov" },
          { label: "US State Department: Austria country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Austria.html", type: "gov" }
        ],
        judgment: "Austria leans a little more on cash than most of Western Europe, much like Germany, though card acceptance keeps growing, so this is our practical read. The euro rate moves, and the firm rule is to decline dollar conversion. Checked July 2026."
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
      title: "Bringing a dog or cat to Austria from the US (2026): the EU process, and the Austria-specific parts | True Trip Costs",
      description: "Moving to Austria with a pet from the US: why it runs on the shared EU health-certificate process, no quarantine and no titer, plus what is specific to Austria on arrival and after you settle in. Checked July 2026.",
      h1: "Bringing your dog or cat to Austria.",
      lede: "Austria runs on the single EU pet-entry process for a US-origin dog or cat: microchip, rabies in the right order, and an EU health certificate on a 10-day clock. No quarantine, no rabies titer. Here is what that means for Austria, and the local parts worth knowing.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Austria uses the <b>shared EU pet-entry process</b>, so there is no separate national permit and nothing unusual at the border. Your pet needs an <b>ISO microchip, a rabies vaccination given after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS</b>, then must enter within <b>10 days</b> of that endorsement. There is <b>no quarantine and no rabies titer</b> for a pet coming straight from the US. The full step-by-step, the ordering trap, and the current fees are on one page: see <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a>. Below are the Austria-specific notes. Coming home to the US is the easy part.",
      sections: [
        {
          h: "Austria runs on the EU process",
          icon: "health",
          key: { fig: "10 days", tag: "No Austria-only permit", text: "The standard EU move: an ISO microchip first, a rabies shot after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS. Enter Austria within 10 days of that endorsement.", tone: "teal" },
          p: ["There is no Austria-only pet permit and no national quarantine. Bringing a dog or cat into Austria from the US is the standard EU move: an ISO microchip first, a rabies vaccination after the chip, then an EU Animal Health Certificate completed by a USDA-accredited vet and endorsed by APHIS, with the pet arriving within 10 days of endorsement. A first rabies shot adds a 21-day wait before travel.", "Because the core process is identical across the EU (and the countries that follow its rules), we do not repeat it per country. The full sequence, the microchip-before-rabies trap that costs people the most time, the 10-day clock, and the current APHIS endorsement fees all live on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Read that first, then come back for the Austria notes."]
        },
        {
          h: "The Austria-specific parts",
          icon: "receipt",
          key: { fig: "Check", tag: "At the border", text: "Austrian customs may ask to see the endorsed certificate and confirm the chip, and pets should arrive through a designated traveller point of entry, which the major airports are.", tone: "teal" },
          p: ["At the border, Austrian customs may ask to see the endorsed certificate and confirm the microchip, and pets should enter through a designated traveller point of entry, which the major airports are. There is no dog or cat tapeworm rule for Austria, unlike Ireland, Finland or Malta.", "The Austria-specific matters are local. Austria requires dogs to be registered and, in most provinces, to carry a dog tax or licence paid to the municipality, and several provinces (Bundeslaender) set their own leash and muzzle rules and keep lists of breeds needing a permit or a keeping licence. Because these vary by province, check the rules where you plan to live, and register and insure the dog once you have an address."]
        },
        {
          h: "Coming back to the US is the easy part",
          icon: "plane",
          key: { fig: "Easy", tag: "The return trip", text: "A dog flying home from Austria is on the simplest CDC path: usually a CDC Dog Import Form receipt, a microchip, and a minimum age of 6 months.", tone: "teal" },
          p: ["Good news for the return trip: a dog flying home to the US from Austria is on the simplest CDC path, typically a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement.", "For the wider picture, including how Austria compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Austria",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-austria",
        note: "The US-side steps and the EU health certificate for Austria. Austria applies the shared EU process, and the destination's own authorities are the final word on the day."
      },
      faqs: [
        {
          q: "Is there anything Austria-specific beyond the EU rules?",
          a: "Mostly local. Austria has no tapeworm rule (that applies to Ireland, Finland and Malta). But dogs are registered and taxed at municipal level, and individual Austrian provinces set their own leash, muzzle and restricted-breed rules, so a breed's treatment varies by where you live. Check your province's rules if you own a bull-type or mastiff-type dog."
        },
        {
          q: "Does my pet have to go into quarantine in Austria?",
          a: "No. Austria applies the shared EU pet-entry process, which has no quarantine and no rabies titer for a pet coming straight from the US. Your pet needs a microchip, a rabies vaccination in the right order, and an EU Animal Health Certificate endorsed by APHIS, then must arrive within 10 days of endorsement. See our EU pet health certificate page for the full process."
        },
        {
          q: "Do I need to quarantine my pet coming back to the US from Austria?",
          a: "No. A dog returning to the US from Austria is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details."
        }
      ],
      sources: {
        links: [
          {
            label: "True Trip Costs: the EU pet health certificate, the shared microchip, rabies and certificate process for all EU countries including Austria",
            url: "/eu-pet-health-certificate",
            type: "internal"
          },
          {
            label: "USDA APHIS: pet travel from the United States to Austria, the US-side steps and EU health certificate",
            url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-austria",
            type: "gov"
          },
          {
            label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, for the return leg",
            url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html",
            type: "gov"
          }
        ],
        judgment: "Austria applies the shared EU pet-entry framework, set by the EU and administered on the US side by APHIS, not by us. The process is stable in substance, though the EU certificate format changes on 1 October 2026, which we cover on the EU pet health certificate page. The local registration and any breed rules vary, so we point you to the official pages and dated this July 2026."
      }
    }
  ]
};
