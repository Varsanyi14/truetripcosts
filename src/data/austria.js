import { S } from './carrier-spine.js';

export default {
  slug: "austria",
  iso2: "at",
  live: true,
  name: "Austria",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-25",
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

  title: "Austria currency in 2026: euros, cards and cash",
  description: "Austria uses the euro and cards work in most places, though cash is still common. Choose euros over dollars and expect a nightly tourist tax. Checked 2026.",

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
    { label: "Vienna accommodation tax (Ortstaxe)", value: "5% of the net room price", status: "enacted", effective: "2026-07-01", source: "https://www.wien.gv.at/english/e-government/financial/tax/local-tax.html", checked: "2026-08-03" },
    { label: "Vienna accommodation tax, next step", value: "8% of the net room price", status: "enacted", effective: "2027-07-01", source: "https://www.wien.gv.at/english/e-government/financial/tax/local-tax.html", checked: "2026-07-25" }
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
      slug: "taxis-and-apps",
      glance: [
        { k: "Apps", v: "Bolt, Uber (also 40100)" },
        { k: "Taxis", v: "Metered, honest, regulated" },
        { k: "From Vienna airport", v: "The S-Bahn or the CAT" },
        { k: "Tipping", v: "Round up a euro or two" }
      ],
      live: true,
      topic: "taxis",
      caution: "low",
      title: "Taxis in Austria: apps, and Vienna airport 2026",
      description: "Bolt and Uber work in Vienna, metered taxis are honest, and the S-Bahn or CAT beats a cab in from the airport. How much to tip. Checked 2026.",
      h1: "Taxis in Austria, and the apps to use",
      lede: "Austrian taxis are metered, honest and regulated, and in Vienna the apps make it easy. From the airport the train wins, and you tip by rounding up. Here is how it works.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "In <b>Vienna</b>, install <b>Bolt</b> (popular and often cheapest) or <b>Uber</b>, which dispatches licensed taxis, and the local <b>40100</b> taxi app is another option. Taxis are <b>metered, honest and regulated</b>, so there is nothing to haggle over. From <b>Vienna airport (VIE)</b>, the <b>S-Bahn</b> is the cheap way in and the <b>CAT</b> (City Airport Train) is the fast one. You <b>tip</b> by rounding up a euro or two.",
      sections: [
        {
          h: "Which app to install",
          icon: "phoneok",
          key: { fig: "Bolt", tag: "Uber too", text: "In Vienna, Bolt is popular and often cheapest, Uber dispatches licensed taxis, and the local 40100 app books a cab.", tone: "teal" },
          p: [
            "In <b>Vienna</b>, <b>Bolt</b> is widely used and often the cheapest, and <b>Uber</b> works, dispatching <b>licensed taxis</b> rather than private drivers. The long-standing local operator <b>40100</b> also has an app.",
            "Outside Vienna, apps thin out, so taxis are usually ordered by phone or taken from a rank. All are metered, so an app mainly adds convenience and card payment."
          ]
        },
        {
          h: "From Vienna airport",
          icon: "plane",
          key: { fig: "S-Bahn", tag: "Or the CAT", text: "The S-Bahn (S7) is the cheap way into Vienna; the CAT is the fast non-stop train. A metered taxi or app works too.", tone: "teal" },
          p: [
            "From <b>Vienna airport (VIE)</b>, the <b>S-Bahn (line S7)</b> is the cheapest way into the city, and the <b>CAT (City Airport Train)</b> is the fast non-stop option to Wien Mitte, for a higher fare.",
            "A metered <b>taxi</b> or an app into the center runs roughly 35 to 45 euros, which mainly makes sense for a group or heavy bags."
          ]
        },
        {
          h: "Metered, honest and regulated",
          icon: "wheel",
          key: { fig: "Metered", tag: "Honest", text: "Taxi fares are regulated, so the meter is honest with nothing to negotiate. Cards are widely accepted.", tone: "teal" },
          p: [
            "Austrian taxis run on <b>regulated tariffs</b>, so the <b>meter is honest</b> and consistent, with legitimate higher rates at night and on Sundays and holidays. There is <b>nothing to negotiate</b>.",
            "<b>Cards</b> are widely accepted, though it is worth confirming in a street-hailed cab, and keeping a little cash as a backup."
          ]
        },
        {
          h: "Fares, paying and tipping",
          icon: "euro",
          key: { fig: "Round up", tag: "A euro or two", text: "Tip by rounding up the fare a euro or two, telling the driver the total, as with restaurants. There is no set percentage.", tone: "teal" },
          p: [
            "Fares are metered and predictable. To <b>tip</b>, <b>round up</b> the fare by a euro or two and tell the driver the total you want to pay, just as in a restaurant.",
            "For more, see <a href='/austria/tipping'>tipping in Austria</a>, <a href='/austria/cash-or-card'>cash or card in Austria</a>, and the <a href='/austria'>Austria money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Uber in Austria?", a: "Yes, in Vienna, where it dispatches licensed taxis rather than private drivers. Bolt is popular and often cheaper, and the local 40100 app also books a cab. Outside Vienna, taxis are usually phoned or taken from a rank." },
        { q: "How do I get from Vienna airport to the city?", a: "The S-Bahn (line S7) is the cheapest way in, and the CAT (City Airport Train) is the fast non-stop option to Wien Mitte for a higher fare. A metered taxi or app runs roughly 35 to 45 euros." },
        { q: "Are Austrian taxis honest?", a: "Yes. Fares run on regulated tariffs, so the meter is honest and consistent, with higher rates at night and on Sundays and holidays. There is nothing to negotiate." },
        { q: "Do you tip taxi drivers in Austria?", a: "Lightly: round up the fare by a euro or two and tell the driver the total, as you would in a restaurant. There is no set percentage." }
      ],
      sources: {
        links: [
          { label: "Austrian National Tourist Office: official travel information", url: "https://www.austria.info/en", type: "gov" },
          { label: "US State Department: Austria country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Austria.html", type: "gov" }
        ],
        judgment: "Austrian taxis are metered, honest and regulated, Bolt and Uber serve Vienna, and the train beats a taxi from the airport. Fares and app coverage shift over time, so this is our practical read. Checked July 2026."
      }
    },
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
      title: "Tipping in Austria: Trinkgeld, and how to leave it",
      description: "Austrian Trinkgeld is modest, and you tell the server the total rather than leaving coins on the table, just as in Germany. Checked 2026.",
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
      title: "Do I need cash in Austria? Cards vs euros 2026",
      description: "Austria takes cards in cities and hotels but still leans on cash in small cafes, bakeries and wine taverns. Carry euros, choose euros, use bank ATMs.",
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
      insurance: true,
      title: "Bringing a dog or cat to Austria from the US 2026",
      description: "Austria runs on the shared EU health-certificate process, with no quarantine and no titer. What is Austria-specific on arrival and after you settle in.",
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
    },
    {
      slug: "rail",
      glance: [
        { k: "Pass?", v: "Only if you cannot plan" },
        { k: "Reservations", v: "Optional on domestic trains" },
        { k: "Cheapest fare", v: "Sparschiene, from about 10" },
        { k: "Second operator", v: "Westbahn, Vienna to Salzburg" }
      ],
      live: true,
      topic: "rail",
      caution: "medium",
      title: "Do you need a rail pass in Austria?",
      description: "A pass is cheap to use here, since reservations are optional, but saver fares from about ten euros undercut it on any trip you can plan in advance.",
      h1: "Do you need a rail pass in Austria?",
      lede: "Austria is a small country with unusually cheap advance fares and unusually relaxed rules about boarding. Both of those matter, and they pull in opposite directions, which is why this one is closer than it looks.",
      checked: "Aug 2026",
      checkedISO: "2026-08-13",
      answer: "Probably <b>not</b>, though the reasoning is different from most of Europe. Austria is friendly to passes in two ways: <b>reservations are optional</b> on domestic long-distance trains, so nobody taxes you at the gate, and an Austria pass is unusually valid on <b>Westbahn</b>, the private operator competing on the Vienna to Salzburg run. That is the opposite of Italy or Spain, where the competitor is excluded. What sinks it is the fare table. <b>Sparschiene</b> saver tickets start around <b>10 euros</b> and are released months ahead, and the country is compact enough that even full-price legs stay modest. So a pass loses on a trip you can plan, and only earns its keep if your dates are genuinely loose. For a longer stay, the <b>Vorteilscard</b> at about 66 euros is the better instrument.",
      sections: [
        {
          h: "Two reasons a pass is not absurd here",
          icon: "ticket",
          key: { tag: "Nobody charges you to board", text: "On domestic Railjet, EuroCity and Intercity services a reservation is a convenience you may buy, not a fee you must pay. That removes the per-leg surcharge that ruins passes in France, Spain and Italy.", tone: "teal" },
          p: [
            "Start with what Austria does not do to you. On domestic day trains, the fast <b>Railjet</b> and the EuroCity and Intercity services, a <b>seat reservation is optional</b>. Turn up, board, sit in anything unreserved. You can pay a small amount to lock a seat and it is worth doing on a Friday evening or leaving Vienna at the start of a holiday, but no rule forces it. Compare that with a French TGV, where a passholder pays every single time, and Austria immediately looks like a better country to hold a pass in.",
            "The second point is genuinely unusual. <b>Westbahn</b> is a private company running its own trains against the national operator between Vienna, Linz and Salzburg, and its walk-up fares often undercut the state railway by ten or twenty euros. Elsewhere on this site a competing operator is the reason a pass fails, because passes exclude them. Here the Austria pass is <b>valid on Westbahn</b> as well as on the national network, so buying one does not shut you out of the cheaper option. Worth knowing separately: neither company sells the other's tickets, so if you are buying rather than passing, check both sites for that corridor. Westbahn will also sell you a ticket on board at no penalty, which is close to extinct in Europe.",
            "Where a pass does still leak is at the edges. Some independent mountain and tourist lines sit outside it, the Zillertalbahn and the Achenseebahn among them, so a day trip built around one of those is paid for separately whatever you are holding."
            // FUTURE UtilityBox MOUNT POINT.
            // A rail-pass affiliate belongs here, at the end of this section, once one is
            // vetted. Nothing renders now on purpose: for most readers the answer above is
            // "do not buy a pass," and that has to read as a finished thought rather than a
            // run-up to a product. Activating it is a data change in three parts, no
            // restructuring: (1) add `railPass: true` to this spoke object, (2) add a
            // railPass entry to the affiliate registry in src/data/links.js, (3) add the
            // matching `railPassUrl` gate and <UtilityBox> block to Spoke.astro alongside
            // the existing esim, insurance and carExcess blocks, which already carry the
            // disclosure. Prop shape is the same: href, label, and the do-you-need-it prose
            // passed as the slot.
          ]
        },
        {
          h: "The fare that ends the argument",
          icon: "euro",
          key: { fig: "About 10 euros", tag: "Where saver fares start", text: "Sparschiene tickets are released months ahead in limited numbers and tie you to one departure. On a country this size they leave a pass with almost nothing to beat, which is why planning ahead matters more here than choosing a product.", tone: "teal" },
          p: [
            "<b>Sparschiene</b> is the saver fare, and it is the reason this page ends where it does. Allocations open a long way out, commonly three to six months, and the cheapest tier starts near <b>10 euros</b> for a long domestic leg. Vienna to Salzburg or Vienna to Graz booked early costs less than lunch. The catch is the usual one: the ticket is tied to <b>one specific departure</b> and is generally neither changeable nor refundable, so it rewards a decision and punishes a maybe.",
            "Scale matters too. Austria is compact, and even a <b>Standardticket</b>, the flexible full fare valid on any train that day, does not reach the numbers that make a pass tempting in Switzerland. Add those two facts together and the honest conclusion is that a pass here is not being compared against expensive tickets, it is being compared against cheap ones. It loses.",
            "Two group and family notes that beat any pass on the right trip. Children under six travel free without a ticket, which is more generous than most neighbors. And the <b>Einfach-Raus-Ticket</b> is a single day ticket covering two to five people travelling together on regional trains for roughly the price of one long-distance fare, which for a slow day in the countryside is the cheapest thing available."
          ]
        },
        {
          h: "Two Austrian products that are not tourist passes",
          icon: "tag",
          key: { tag: "The Klimaticket is for residents", text: "It covers almost everything that moves in Austria, including intercity trains and city transit, which makes it sound perfect. Then you see the price: it is an annual ticket costing over a thousand euros, aimed at people who live there.", tone: "amber" },
          p: [
            "The <b>Klimaticket</b> gets recommended to visitors constantly and it is the wrong product for almost all of them. What it covers is genuinely sweeping: national operator trains including the fast ones, Westbahn, regional services, and the trams, buses and metros of all nine provinces on one code. But it is sold as an <b>annual ticket priced above a thousand euros</b>, and the arithmetic only works for someone taking well over a dozen long-distance trips a year. That is a resident's commuting product wearing a tourist's clothes. Provincial versions covering a single region cost less and are still annual.",
            "The one Austrian card that can pay for a visitor is the <b>Vorteilscard</b>, a discount card rather than a pass. The standard version runs about <b>66 euros</b> for a year and takes <b>50 percent</b> off standard single tickets, with reduced versions for seniors and younger travellers costing considerably less, and it extends to most private Austrian railways too. Two or three long journeys at full fare and it has paid for itself. One caveat we could not pin down cleanly: how it interacts with an already-discounted <b>Sparschiene</b> fare is described inconsistently, with some sources saying the two do not stack at all and others describing a smaller reduction, so do not assume you will get half off the cheapest tickets as well.",
            "So the shape of the decision is three-way. Book <b>Sparschiene</b> if you know your dates. Buy a <b>Vorteilscard</b> if you are staying a while, travelling a lot at full fare, or qualify for a reduced version. Consider a pass only if your itinerary is genuinely undecided. For how this call lands elsewhere, see <a href='/rail-passes'>our country-by-country read on rail passes</a>, and the <a href='/austria'>Austria money guide</a> for the rest."
          ]
        }
      ],
      faqs: [
        { q: "Is an Austria rail pass worth it?", a: "Usually not, though it is a closer call than in most of Europe. Reservations are optional on domestic long-distance trains and the pass covers the private Westbahn services, so it is cheap and flexible to use. Saver fares from around ten euros simply undercut it on any trip you can book ahead." },
        { q: "Do I need a seat reservation on a Railjet?", a: "No. On domestic Railjet, EuroCity and Intercity trains a reservation is optional, so you can board and take any unreserved seat. Paying the small fee is sensible on Friday evenings, Sunday returns and the start of holiday periods, when long-distance trains fill up." },
        { q: "Should a tourist buy a Klimaticket?", a: "Almost never. It covers nearly all Austrian public transport including intercity trains, but it is an annual ticket costing over a thousand euros and is designed for residents. It only makes sense above roughly fifteen long-distance trips a year, which no holiday reaches." },
        { q: "What is a Sparschiene ticket?", a: "The saver fare on Austrian long-distance trains, released months ahead in limited numbers and starting around ten euros. It is tied to one specific departure and is generally not refundable or changeable, so it suits firm plans rather than flexible ones." },
        { q: "Is Westbahn cheaper than the national railway?", a: "Often, on the Vienna to Linz to Salzburg corridor where it competes, by roughly ten to twenty euros against walk-up fares. Neither company sells the other's tickets, so check both for that route. Westbahn also sells tickets on board without a penalty." },
        { q: "Is the Vorteilscard worth it for a visitor?", a: "It can be. About 66 euros a year for 50 percent off standard single tickets, less for seniors and younger travellers, and valid on most private Austrian railways too. Two or three full-fare long journeys cover the cost. How it combines with already-cheap saver fares is described inconsistently, so check before relying on it." }
      ],
      sources: {
        links: [
          { label: "OBB: the official Vorteilscard page, confirming the 50 percent discount on standard single tickets and its validity on private railways", url: "https://www.oebb.at/en/tickets-kundenkarten/kundenkarten/vorteilscard", type: "official" },
          { label: "ShowMeTheJourney: Austrian tickets and rail passes, on Westbahn coverage, the operators that sell which tickets, and the independent lines outside a pass", url: "https://showmethejourney.com/train-ticket-guides/austria-tickets-and-rail-passes/", type: "guide" },
          { label: "Rick Steves: Austria rail passes and point-to-point tips, including Westbahn fares and reduced Vorteilscard versions", url: "https://www.ricksteves.com/travel-tips/transportation/trains/austria-rail-passes", type: "guide" }
        ],
        judgment: "The optional-reservation rule, the Vorteilscard terms and the pass validity on Westbahn are all published and firm. Our confidence in the verdict is rated medium rather than high for one specific reason: we could not verify current Austria pass pricing from a source we trust, so the tier rests on the structure of the fares rather than on arithmetic we have done. Read it as our judgment that cheap saver fares beat a pass on a planned trip in a small country, not as a calculation. Sparschiene starting prices are widely quoted from around ten euros and move by route, date and how early you look. Klimaticket pricing was reported differently across sources we checked, with the figures separated by a few hundred euros, so we describe it as above a thousand euros a year rather than pick one, which is enough to make the point that it is not a visitor's product. How the Vorteilscard interacts with saver fares is genuinely contested and we say so on the page. Checked Aug 2026."
      }
    },
    {
      slug: "driving-and-tolls",
      glance: [
        { k: "10-day vignette", v: "12.80 EUR" },
        { k: "Bills you again", v: "Five motorway sections" },
        { k: "Grossglockner", v: "46.50 EUR a day, in season" },
        { k: "From 2027", v: "Digital vignette only" }
      ],
      live: true,
      topic: "driving",
      caution: "medium",
      title: "Austria vignette: the roads it does not cover",
      description: "The 12.80 EUR ten-day vignette covers the network, then five sections bill again at a barrier. Plus the 46.50 EUR Grossglockner, open May to November.",
      h1: "The Austrian vignette, and the roads it does not cover",
      lede: "Austria's motorway pass works like Switzerland's right up to the point where it does not. Five sections of the network charge you again at a barrier, all year round, and the scenic roads are private and priced on their own. Here is what to add to the vignette before you drive.",
      checked: "Aug 2026",
      checkedISO: "2026-08-14",
      answer: "The <b>10-day vignette costs 12.80 EUR</b> and covers the motorway and expressway network, but <b>five sections bill you again at a barrier</b>: the whole <b>A13 Brenner</b>, the <b>A10 Tauern and Katschberg</b> tunnels, the <b>S16 Arlberg</b> tunnel, the <b>A11 Karawanken</b>, and the <b>A9 Bosruck and Gleinalm</b> tunnels. Those are the ones that <b>always apply</b>, whatever the season. The scenic roads are separate and private: the <b>Grossglockner High Alpine Road is 46.50 EUR</b> for a car for the day, which is <b>three and a half times the ten-day pass, for one road</b>, and it is <b>open roughly the start of May to the start of November</b>, so in winter it is simply closed. <b>Trace your actual route</b> before you buy anything.",
      sections: [
        {
          h: "Five sections charge again, all year",
          icon: "receipt",
          key: { fig: "12.80 EUR", tag: "The ten-day vignette", text: "It covers the network, but not the A13 Brenner, the A10 Tauern and Katschberg tunnels, the S16 Arlberg, the A11 Karawanken or the A9 Bosruck and Gleinalm. Those bill separately at a barrier.", tone: "amber" },
          p: [
            "The <b>10-day vignette costs 12.80 EUR</b> and covers the motorway and expressway network, which is where the resemblance to Switzerland ends. <b>Five sections bill you again at a barrier</b>: the whole <b>A13 Brenner</b>, the <b>A10 Tauern and Katschberg</b> tunnels, the <b>S16 Arlberg</b> tunnel, the <b>A11 Karawanken</b>, and the <b>A9 Bosruck and Gleinalm</b> tunnels. If your route crosses the Brenner or uses one of the tunnel routes, <b>budget the section toll on top of the vignette</b> and expect to stop at a barrier, where <b>cash and cards both work</b>.",
            "These are the ones worth planning around, because they <b>apply year round</b>. A summer reader and a February reader meet the same barriers on the same roads, which is not true of the scenic passes below. The practical step is unglamorous and it is the whole job: <b>trace your actual route</b> before you buy anything, rather than buying a vignette and assuming the network is now paid for."
          ]
        },
        {
          h: "The Grossglockner, and only in season",
          icon: "calendar",
          key: { fig: "46.50 EUR", tag: "A day, for one road", text: "The Grossglockner High Alpine Road is private and priced accordingly, at three and a half times the ten-day vignette. It is open roughly the start of May to the start of November, so for a winter trip it is closed rather than expensive.", tone: "amber" },
          p: [
            "The <b>Grossglockner High Alpine Road</b> is private, and priced accordingly: <b>46.50 EUR</b> for a car for the day, <b>three and a half times the ten-day pass, for one road</b>. Before the price matters, check the calendar, because the road is <b>open roughly the start of May to the start of November</b>. For a winter trip it is not an expensive option, it is a <b>closed</b> one, and the five motorway sections above are the part of this page that still applies to you.",
            "In season, three things move the number. <b>Entry after 6pm drops the car rate to 36.50 EUR</b>. A <b>second visit later in the same calendar year is 17.50 EUR</b> if you keep your first ticket, which is <b>tied to your plate</b>. And one catch specifically for visitors: the <b>discounted advance tickets sold through the OAMTC, ARBO and ADAC motoring clubs exclude rental cars</b>, so that saving is closed to most US travelers. <b>Parking at the Ferleiten toll point is a separate 10 EUR a day</b>."
          ]
        },
        {
          h: "The sticker is ending, and the 18-day catch",
          icon: "ticket",
          key: { fig: "18 days", tag: "If you buy a digital one online", text: "A digital 2-month or annual vignette bought online is not valid until the 18th day after purchase, under EU distance-selling law. The 1-day and 10-day versions can be set to start immediately.", tone: "amber" },
          p: [
            "One change is worth knowing even for a single trip: the <b>physical windscreen sticker is being sold for the last time in 2026</b>. From the <b>2027 vignette year the digital vignette tied to your licence plate is the only option</b>, so if you drive in Austria regularly, the version you are used to buying at a border petrol station is on its way out.",
            "The trap in the digital version is timing. If you buy a <b>digital 2-month or annual vignette online, it is not valid until the 18th day after purchase</b> under EU distance-selling law, which is a genuine problem for anyone who buys the week before a trip. The <b>1-day and 10-day versions can be set to start immediately</b>, so for a normal holiday the short options are both cheaper and simpler. For more, see <a href='/austria/rail'>rail tickets in Austria</a>, <a href='/austria/cash-or-card'>cash or card in Austria</a>, and the <a href='/austria'>Austria money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Does the Austrian vignette cover the Brenner motorway?", a: "No. The whole A13 Brenner is a section toll charged again at a barrier on top of the vignette, and it applies year round. The same is true of the A10 Tauern and Katschberg tunnels, the S16 Arlberg, the A11 Karawanken and the A9 Bosruck and Gleinalm tunnels." },
        { q: "How much is the Grossglockner High Alpine Road?", a: "46.50 EUR for a car for the day, which is three and a half times the 12.80 EUR ten-day vignette. Entry after 6pm drops it to 36.50 EUR, and a second visit later in the same calendar year is 17.50 EUR if you keep your first ticket, which is tied to your plate." },
        { q: "Is the Grossglockner open all year?", a: "No. It is open roughly the start of May to the start of November. On a winter trip the road is closed, so the costs that still matter are the five year-round motorway section tolls rather than the scenic roads." },
        { q: "Can I use a motoring club discount on the Grossglockner in a rental car?", a: "No. The discounted advance tickets sold through the OAMTC, ARBO and ADAC motoring clubs specifically exclude rental cars, so that saving is closed to most US travelers. Parking at the Ferleiten toll point is a separate 10 EUR a day." },
        { q: "Is the Austrian vignette sticker being discontinued?", a: "Yes. The physical windscreen sticker is being sold for the last time in 2026, and from the 2027 vignette year the digital vignette tied to your licence plate is the only option." }
      ],
      sources: {
        links: [
          { label: "Grossglockner Hochalpenstrassen AG: prices and opening times for the 2026 season, including the evening rate and the repeat-visit ticket", url: "https://www.grossglockner.at/en/for-your-visit/prices-opening-times", type: "official" },
          { label: "oesterreich.gv.at: the vignette for vehicles up to 3.5 t, on prices, the switch to digital only and which vignettes can start immediately", url: "https://www.oesterreich.gv.at/en/themen/mobilitaet/kfz/10/Vignette-und-Maut/Vignette-fuer-Fahrzeuge-bis-3,5-t", type: "gov" },
          { label: "ASFINAG: the official vignette and section toll pages, on the last year of the adhesive sticker and the separately tolled sections", url: "https://www.asfinag.at/en/toll/vignette/", type: "official" }
        ],
        judgment: "The two figures this page rests on, 12.80 EUR for the ten-day vignette and 46.50 EUR for a car on the Grossglockner, are both official and current for 2026. One thing we have deliberately left off the page: the individual A13 Brenner section-toll amount is quoted differently across the sources we checked, by a couple of euros, so rather than pick one we tell you the Brenner charges separately and leave you to see the price at the barrier. Season dates for the Grossglockner move with the snow, so early May and early November are approximate and the road's own site is the place to confirm before a shoulder-season drive. The 2027 switch to digital-only is legislated rather than proposed, but the detail of how it will be sold is still being built out. Checked Aug 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Strong, including small towns" },
        { k: "Carrier roaming", v: "$10 to $12 a day" },
        { k: "Cheapest", v: "A travel eSIM, a few $ per GB" },
        { k: "Signal gaps", v: "High alpine valleys and gondolas" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "eSIM for Austria: the cost math, and alpine gaps",
      description: "Austrian coverage is strong including the small towns, so this is a cost question. The gaps are the high side valleys and some gondolas.",
      h1: "Staying connected in Austria.",
      lede: "Austria covers its cities, towns and main valleys well, which for a country that is mostly mountains is a real achievement. The gaps are high up and narrow, and they are worth knowing before a hiking day.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>strong across Austria</b>, including the small towns and most valley floors, with fast 4G and urban 5G in Vienna, Salzburg, Innsbruck and Graz, and a working signal on the rail network including the long tunnels. Your US carrier charges about <b>${S.dayPass}</b> to roam (<b>AT&amp;T and Verizon</b> day passes), though <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, while <b>Verizon has ${S.verizonNoCap}</b> and keeps billing daily. <b>T-Mobile</b>'s mid and upper tiers include <b>${S.tmoRange}</b> of high-speed data abroad before slowing to <b>${S.throttle}</b>. A <b>Nomad eSIM</b> is a few dollars per gigabyte, activates before you fly and works from landing. A <b>local prepaid SIM</b> is also cheap here and, because this is an <b>EU</b> country, it carries <b>Roam Like At Home</b> across the rest of the union at no surcharge, which is worth pricing if the trip continues into other EU countries. Where it thins is predictable: <b>high side valleys</b>, the upper stations of some <b>gondolas</b>, glacier terrain and hut-to-hut trails above the treeline, so <b>download offline maps</b> before a mountain day. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "A cost question first",
          icon: "roamfee",
          key: { fig: `${S.dayPassFig}`, tag: "Roaming default", text: "A US carrier day pass is the expensive default. AT&T caps it at 10 daily fees a bill period, Verizon does not cap at all, and T-Mobile's mid and upper tiers include 5GB to 30GB abroad.", tone: "teal" },
          p: [
            `Austrian networks are good where you will be, so the decision is what you pay. Roaming on your US plan is the expensive default at about <b>${S.dayPass}</b>, roughly <b>${S.week}</b> a week, with <b>AT&amp;T</b> capping at <b>${S.capFees}</b> and <b>Verizon</b> having <b>${S.verizonNoCap}</b>. <b>T-Mobile</b>'s tiers include roughly <b>${S.tmoLow}</b> on Experience More, Magenta MAX and Go5G Plus, <b>${S.tmoMid}</b> on Experience Beyond and Go5G Next and <b>${S.tmoHigh}</b> on Better Value.`,
            `A <b>Nomad eSIM</b> at a few dollars per gigabyte comes in well under the day pass. An <b>A1</b>, <b>Magenta</b> or <b>Drei</b> prepaid SIM is inexpensive and carries EU roaming, which matters if you are continuing into Germany, Italy or Slovenia. And do not roam with <b>no plan</b>: pay-per-use is about <b>${S.ppu}</b>.`
          ]
        },
        {
          h: "Where the mountains take it away",
          icon: "alert",
          key: { fig: "Side valleys", tag: "Where signal thins", text: "Valley floors and towns are covered. High side valleys, some gondola top stations and above-treeline trails are not.", tone: "amber" },
          p: [
            `Austrian coverage follows the valleys, which is where the roads, railways and villages are, and it does that well: you will have signal in <b>Zell am See, Hallstatt, Mayrhofen</b> and the ski villages, along the motorways and through the rail tunnels. Above and beside them it gets patchy: the upper reaches of narrow <b>side valleys</b>, the top stations of some <b>gondolas</b>, glacier terrain around the Grossglockner, and hut-to-hut routes above the treeline.`,
            `So a mountain day is worth preparing for rather than paying for. <b>Download offline maps</b> and the route, check the weather before you leave signal, and note that Austrian mountain rescue is reached on <b>140</b> while <b>112</b> works everywhere for emergencies and can sometimes connect on a network you have no subscription with.`
          ]
        },
        {
          h: "In town, and on the train",
          icon: "train",
          key: { fig: "Even in tunnels", tag: "The railways", text: "Austrian rail generally holds a signal, including through the long tunnels that break it in neighbouring countries.", tone: "teal" },
          p: [
            `In the cities there is nothing to plan around: fast 4G and 5G in <b>Vienna, Salzburg, Innsbruck and Graz</b>, coverage on the U-Bahn, and public wifi common in cafes and hotels. The <b>railways</b> are better than in Germany, generally holding a connection including through the long alpine tunnels, so a Vienna to Innsbruck run is workable rather than a coin flip.`,
            `One practical note that is about money rather than signal: if your trip continues to <b>Switzerland</b>, that is outside the EU roaming zone and outside a lot of Europe plans, so check the country list rather than assuming your Austrian arrangement follows you. This guide is written for US travelers departing the US. For more, see <a href='/austria/cash-or-card'>cash or card in Austria</a>, <a href='/austria/taxis-and-apps'>taxis and apps in Austria</a>, and the <a href='/austria'>Austria money guide</a>.`
          ]
        }
      ],
      faqs: [
        { q: `Will I have signal in the Austrian Alps?`, a: `On the valley floors and in the ski villages, yes. Higher up it thins: the upper reaches of narrow side valleys, some gondola top stations, glacier terrain and above-treeline trails. Download offline maps before a mountain day. Mountain rescue is 140, and 112 works everywhere for emergencies.` },
        { q: `How much does it cost to use my US phone in Austria?`, a: `About ${S.dayPass} on an AT&T or Verizon day pass, so roughly ${S.week} a week. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad before slowing to ${S.throttle}.` },
        { q: `Do Austrian trains have phone coverage?`, a: `Generally yes, including through the long alpine tunnels, which is better than long-distance rail in neighbouring Germany. A Vienna to Innsbruck run is workable rather than a coin flip.` },
        { q: `Does my Austrian plan work in Switzerland?`, a: `Check, because it often does not. Switzerland is outside the EU and the EEA, so EU roaming does not extend there and many regional Europe plans exclude it. Look for Switzerland by name on the covered-country list before you rely on it.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "US State Department: Austria country information and local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Austria.html", type: "gov" }
        ],
        judgment: "Checked Aug 2026. The alpine coverage read is the desk's from operator footprints and consistent traveler accounts rather than one official table, and the honest summary is that reach follows the valleys. The Switzerland note is included because an Austria trip so often continues there and the roaming zone stops at the border even though nothing else does. Carrier figures are an Aug 2026 snapshot. No SIM registration requirement is stated because we could not confirm one to our own standard."
      }
    },
    {
      slug: "medical-costs",
      glance: [
        { k: "You pay", v: "As a private patient" },
        { k: "Cities", v: "Care is close and good" },
        { k: "The Alps", v: "Rescue is charged" },
        { k: "Real risk", v: "A mountain callout" }
      ],
      live: true,
      topic: "health",
      title: "Getting sick in Austria: the mountain is the expensive part",
      description: "Austrian hospital care is good and contained in cost. The item that catches visitors is alpine rescue, which is charged and is not part of the hospital bill.",
      h1: "What does getting sick in Austria cost a visitor?",
      lede: "For a city trip, Austria is one of the calmer entries on this list. For a ski or mountain trip, there is a second bill that has nothing to do with the hospital.",
      checked: "Aug 2026",
      checkedISO: "2026-08-20",
      answer: "As a visitor you are treated as a <b>private patient</b> in Austria and billed for care. In the cities the picture is much like Germany's: <b>good hospitals, close by, at contained and regulated costs</b>, with emergency care given first. The item that catches people is <b>alpine rescue</b>. Getting an injured skier or walker off a mountain in Austria commonly involves a <b>helicopter or a mountain rescue callout</b>, and that is <b>charged separately from any hospital treatment</b>. It is the single most likely large bill a visitor to Austria will face, and it is the one most likely to fall outside a policy that was not read carefully.",
      insurance: true,
      insuranceNote: "In Austrian cities the medical position is ordinary: you pay as a private patient at contained costs. On a mountain it changes, because rescue is charged separately from treatment and a helicopter callout is the likeliest large bill here. Check that your policy names mountain rescue and the activities you plan. Faye covers trip medical and evacuation.",
      careFirst: "If it looks serious, call 144 or 112 first and deal with the cost afterwards.",
      sections: [
        {
          h: "In the cities, this is an ordinary page",
          icon: "health",
          key: { tag: "Close and contained", text: "Austrian hospitals are good and close in the populated areas, costs are contained, and emergency care is given before payment is discussed.", tone: "teal" },
          p: [
            "For <b>Vienna, Salzburg, Graz or Innsbruck</b>, Austria reads much like Germany. Hospitals are <b>good and close</b>, costs are <b>contained by regulation</b> rather than open-ended, and emergency care is provided before anyone discusses payment. <b>144</b> reaches an ambulance and <b>112</b> works throughout.",
            "<b>If it looks serious, call 144 or 112 first and deal with the cost afterwards.</b> On a city trip, the honest exposure is a hospital invoice and a flight home, which is a narrow and manageable case."
          ]
        },
        {
          h: "On the mountain, there is a second bill",
          icon: "alert",
          key: { tag: "Rescue is separate", text: "Alpine rescue, including helicopter callouts, is charged separately from hospital treatment. It is the likeliest large bill a visitor to Austria faces.", tone: "amber" },
          p: [
            "Austria's alpine regions run a serious <b>mountain rescue</b> operation, and it is <b>not free</b>. A helicopter callout to a piste, a ski touring route or a hiking trail is <b>billed</b>, and crucially it is billed <b>separately from any hospital treatment that follows</b>. A policy that covers your medical care may not cover the aircraft that got you to it.",
            "This is the specific thing to check before a ski trip. Does the policy name <b>mountain rescue</b> and <b>helicopter evacuation</b>, and does it cover the <b>activity</b> you are doing? <b>Off-piste skiing, ski touring and via ferrata</b> are common exclusions, and they are exactly the activities that generate callouts. Austrian ski areas also sell local rescue cover, sometimes bundled with a lift pass, which is worth understanding rather than assuming."
          ]
        },
        {
          h: "Why there are no prices on this page",
          icon: "tag",
          key: { tag: "Absence is not zero", text: "We have not sourced an official Austrian price list for visitors that we would stand behind, so we have published none.", tone: "teal" },
          p: [
            "We would rather say this than pad the page. We have <b>not sourced an official Austrian tariff for non-resident care</b> that we would put our name to, so no local price figure appears here. On a medical page a plausible-sounding number is not a small error, because it is something a person might act on while unwell.",
            "The structure is what matters here: <b>you are a private patient</b>, <b>city care is close and contained</b>, and <b>rescue is a separate, chargeable event from treatment</b>. Rather than guess at a helicopter rate, ask your insurer directly what its mountain rescue limit is and whether your activity is inside the policy."
          ]
        },
        {
          h: "What this means for your money",
          icon: "cash",
          key: { tag: "Which trip is it", text: "A city trip and a ski trip are different risks. The ski trip is where cover earns its keep, and where the policy wording matters most.", tone: "teal" },
          p: [
            "The practical split is clean. A <b>city trip</b> to Austria carries an ordinary European medical exposure. A <b>ski or mountain trip</b> carries that plus a rescue bill, and the rescue is the part more likely to be large and more likely to be excluded.",
            "So read the policy for the trip you are actually taking, and pay attention to the <b>activity definitions</b> rather than only the headline limits. For paying on the ground, see the <a href='/austria/cash-or-card'>Austria cash and cards guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is mountain rescue free in Austria?", a: "No. Alpine rescue, including helicopter callouts, is charged, and it is billed separately from any hospital treatment that follows. It is the likeliest large bill a visitor to Austria will face." },
        { q: "Is healthcare free in Austria for tourists?", a: "No. You are treated as a private patient and billed. In the cities costs are contained and regulated rather than open-ended, and emergency care is given before payment is discussed." },
        { q: "How much does a helicopter rescue cost in Austria?", a: "We have not published a figure, because we did not source an official rate we would stand behind and rescue is run by different organisations in different regions. Ask your insurer what its mountain rescue limit is instead." },
        { q: "Does my travel insurance cover skiing in Austria?", a: "Check the activity definitions rather than assuming. Off-piste skiing, ski touring and via ferrata are commonly excluded, and those are exactly the activities that generate rescue callouts. Austrian ski areas also sell local rescue cover, sometimes with a lift pass." },
        { q: "What is the ambulance number in Austria?", a: "144 reaches an ambulance, and 112 works throughout the country. For anything serious, call first and deal with the cost afterwards." }
      ],
      sources: {
        links: [
          { label: "US State Department: Austria country information, including health and medical care guidance for travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Austria.html", type: "gov" }
        ],
        judgment: "No price figures appear here. Austrian mountain rescue is run by different organisations in different regions with their own charging practices, so a single figure would be false precision, and we did not source an official medical tariff either. The separation of rescue costs from treatment costs is the load-bearing point on this page and is a structural fact rather than a price. Policy activity definitions vary widely, so read your own. Checked August 2026."
      }
    }
  ]
};
