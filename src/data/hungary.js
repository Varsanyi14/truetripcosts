import { S } from './carrier-spine.js';

export default {
  slug: "hungary",
  iso2: "hu",
  live: true,
  name: "Hungary",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-31",
  sources: {
    changed: "First publication. Confirmed the money facts that matter most this year: the forint sits at about 315 to the US dollar, cards are widely taken, and Hungary has the highest VAT in the EU at 27%, which also means the best tourist refund in Europe, about 18% back after fees. Budapest charges a 4% tourist tax on the room. On entry, the EU's biometric Entry/Exit System went live in April 2026, and a US passport is still all you need for now. Updated 31 July 2026: the EU removed its late-2026 ETIAS target, so this guide no longer quotes a start date for it.",
    links: [
      { label: "National Tax and Customs Administration (NAV): the 27% VAT and the tax-free refund for non-EU travelers", url: "https://nav.gov.hu/en", type: "revenue" },
      { label: "European Union travel portal: the Entry/Exit System (EES) at Schengen borders, and the ETIAS travel authorization", url: "https://travel-europe.europa.eu/ees_en", type: "gov" },
      { label: "VisitHungary: the official tourism site, for getting around and visitor basics", url: "https://visithungary.com/", type: "tourism" },
    ],
    judgment: "The daily cash share, the tipping feel, and which vendors will want cash are our own estimate from experience and consistent traveler reports, not an official figure. Town tourist-tax amounts outside Budapest vary and are shown here as a representative figure.",
  },
  emergency: { medical: "112", note: "112 reaches every service, in English. If you prefer the direct lines, 104 is an ambulance, 105 the fire service and 107 the police. The 911 number does not work here.", checked: "Jul 2026", checkedISO: "2026-07-16" },
  insuranceLevel: "low",
  region: "Europe",
  signals: { cardFriendliness: 4, cashNeed: 2, taxRisk: 3, atmRisk: 4 },
  hook: "Cards are taken almost everywhere, so tap where you can, keep some forint for market stalls, baths and taxis, use bank ATMs rather than the tourist-area exchange booths and Euronet machines, and always pay in forint, not euros or dollars.",
  aliases: ["hungary", "hungarian", "budapest", "buda", "pest", "forint", "huf", "ft", "magyar", "lake balaton", "eger", "szechenyi", "goulash", "ruin bar", "thermal baths", "danube", "parliament"],

  title: "Does Hungary accept euros? Money in 2026",
  description: "Not really, you pay in forint. Cards work almost everywhere, but skip exchange booths and Euronet ATMs, and keep forint for markets. Checked 2026.",

  h1: "Money in Hungary, sorted.",
  lede: "A calm, current plan for the money side of your trip: where your card is fine and where forint still helps, the ATMs and exchange booths to skip, the taxes to know, and why shopping here earns the best VAT refund in Europe.",
  hero: {
    img: "/hungary-hero.jpg",
    h: 1375,
    alt: "A quiet Budapest castle-district street at dusk with warm string lights overhead, pale stone townhouses with glowing windows, and the colorful diamond-tiled roof and slim spire of Matthias Church rising against a deep teal sky. A lone figure seen from behind walks away up the cobbled street toward the church, and in the foreground on a wooden table sits a steaming bowl of paprika-red goulash with a torn piece of bread beside it"
  },


  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Hungary is <b>easy and card-friendly</b>, with a couple of local wrinkles worth knowing. <b>Visa and Mastercard</b>, Apple Pay and Google Pay work in most hotels, restaurants, shops and even many market stalls and ruin bars, so you can lean on your card day to day. Keep some <b>forint</b> for the Great Market Hall vendors, smaller eateries, thermal-bath extras and taxis. Two things to hold onto: it is the <b>forint, not the euro</b> (Hungary is in the EU but kept its currency), so price and pay in forint; and for cash, use a <b>bank ATM</b> and steer clear of the tourist-area <b>exchange booths</b> and standalone <b>Euronet</b> machines, which give poor rates. Always <b>choose forint, not US dollars</b>, on any terminal or ATM, and for taxis use the <b>Bolt app</b> or a phone-booked cab rather than hailing an unmarked one. On tax, prices include the EU's <b>highest VAT at 27%</b>, Budapest adds a <b>4% tourist tax</b> on your room, and shoppers get the <b>best VAT refund in Europe</b>. Tipping is a little more expected here: around 10% for good table service.",

  meter: {
    heading: "Card-friendly day to day, with forint for markets, baths and taxis.",
    cashPct: 28,
    note: "A rough feel for everyday spending. Cards and phones cover most hotels, restaurants and shops. Cash is a moderate share, for market stalls, smaller eateries, thermal-bath lockers, taxis and tips, and it helps to keep a little forint on you."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Taken almost everywhere", p: "Visa and Mastercard, Apple Pay and Google Pay work in most hotels, restaurants, shops and even many market stalls and ruin bars. Amex is patchier. You can lean on your card, keeping forint for the cash-only corners.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Some, in forint", p: "Carry some <b>forint</b> for the Great Market Hall, smaller eateries, thermal-bath extras, and taxis. Remember it is <b>forint, not euros</b>: tourist spots that take euros use a poor rate. Get cash from a bank ATM, not an exchange booth.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Bank machines only", p: "Use an ATM attached to a real bank (OTP, K&H, Erste) and avoid the standalone <b>Euronet</b> machines and the tourist-area <b>exchange booths</b>, which give poor rates. Whichever you use, <b>decline the 'pay in US dollars' offer</b> and choose forint.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b>, plus a backup. Amex is patchier here.",
      "Plan to pay by card for most things, and carry some forint for markets, baths and taxis.",
      "Know it is the <b>forint, not the euro</b>, so do not arrive expecting euros to spend.",
      "At the border you will be fingerprinted and photographed under the EU's <b>EES</b> system, so allow extra time on arrival in summer."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters and <b>Euronet</b> ATMs. Use a bank ATM, and <b>decline 'convert to US dollars.'</b>",
      "Grab about <b>15,000 to 25,000 forint</b> for your first day or two of cash needs.",
      "Take the official <b>100E airport bus</b> or a Bolt into the city rather than an unmarked taxi.",
      "Set up an <b>eSIM</b> before you land; Hungary has fast, cheap mobile data."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your card or phone</b> for most things, and choose forint every time.",
      "Keep some <b>forint</b> for market stalls, thermal-bath lockers, smaller eateries and tips.",
      "For taxis, use the <b>Bolt app</b> or book by phone; do not hail an unmarked cab.",
      "If a booth, ATM or shop offers to charge you in dollars or euros, say no and pay in forint."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in forint, never US dollars.</b> Dynamic currency conversion, exchange booths and Euronet ATMs all quietly cost you a few percent.",
      "<b>Tip around 10%</b> for good table service, but check the bill first for a service charge (szervizdij) that is already added."
    ], cta: null }
  ],

  cash: {
    rate: 315, cur: "HUF", round: 5000, defaultIndex: 1,
    rateNote: "Rough guide at about 315 forint to the US dollar in 2026. Hungary is cheaper than Western Europe, and while cards cover most spending, markets, baths and taxis keep cash useful, so this cash slice is a bit larger than in the most cashless countries.",
    styles: [
      { n: "Budget", per: 45, cash: 0.35, room: 55 },
      { n: "Mid-range", per: 95, cash: 0.28, room: 110 },
      { n: "Comfort", per: 200, cash: 0.2, room: 210 }
    ]
  },

  connectivity: {
    works: "Excellent and inexpensive. Hungary has fast, wide 4G and strong 5G across Budapest and the main routes, from Magyar Telekom, Yettel and One. A prepaid SIM is cheap, but for most visitors an eSIM from Airalo, Nomad or a similar provider is the easy route. Your US plan may include some roaming, so check the rate first. You do not need mobile data to pay by card, but you will want it for maps, the Bolt taxi app and tickets."
  },

  tax: {
    unit: "percentOfRoom",
    currency: "HUF",
    capNights: null,
    note: "Budapest charges a tourist tax (idegenforgalmi ado) of 4% of the room price per night, added at your accommodation. Most other Hungarian towns charge a small flat fee per person per night instead. Under-18s are exempt.",
    regions: [
      { key: "budapest", label: "Budapest", pct: 4, note: "Budapest levies 4% of the net room price per night, with no cap on the number of nights. Under-18s are exempt." },
      { key: "towns", label: "Other towns and lake resorts", unit: "perPersonPerNight", rate: 500, note: "Towns like the Lake Balaton resorts and Eger set their own small fee, commonly a few hundred forint per person per night; this uses a representative figure." },
      { key: "other", label: "Villages and countryside", unit: "perPersonPerNight", rate: 0 }
    ]
  },

  currencyHeading: "The Hungarian forint, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "Hungary uses the forint (written Ft, code HUF), not the euro. At about 315 to the US dollar in 2026, 1,000 forint is roughly 3.20 dollars and 5,000 forint about 16. Notes run 500, 1,000, 2,000, 5,000, 10,000 and 20,000, and prices already include the 27% VAT, so the tag is what you pay." },
    { sym: "usd", k: "It's forint, not euros", v: "Hungary is in the EU but kept the forint, so shops, taxis and restaurants price and take forint, not euros. Some tourist spots quote euros at a poor rate. Pay in forint, or better, by card." },
    { sym: "card", k: "Cards widely taken", v: "Cards, Apple Pay and Google Pay work in most hotels, restaurants, shops and even many market stalls and ruin bars. Keep some forint for the Great Market Hall vendors, smaller eateries, thermal-bath lockers and taxis." },
    { sym: "tip", k: "Tipping is expected", v: "Tipping is a little more customary here than in much of Europe. Around 10% is normal for good table service. Check the bill first for a service charge (szervizdij) already added, and hand the tip to the server rather than leaving it on the table." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "The EU's highest VAT means the best refund on shopping.",
    text: "Two things. Budapest adds a <b>tourist tax of 4%</b> of your room price per night (most other towns charge a small flat fee instead), with <b>under-18s exempt</b>. Separately, Hungary has the <b>highest VAT in the EU at 27%</b> (hotels are just 5%, with some food and books at 18% or 5%), already included in the price you see. That high rate is good news if you shop: non-EU visitors can reclaim it. Spend <b>over about 55,000 forint in one store</b>, ask for a tax-free form, keep the goods unused, and have customs stamp it when you leave the EU. Hungary gives back <b>about 18% after fees</b>, the best net refund in Europe. Refunds are for goods, not hotels or meals."
  },

  keyFacts: [],

  traps: [
    "<b>'Pay in US dollars?' Always say no.</b> Terminals and ATMs may offer to charge you in dollars (dynamic currency conversion), which quietly adds a few percent. Choose forint every time.",
    "<b>Skip the exchange booths and Euronet ATMs.</b> Tourist-area currency kiosks and standalone Euronet machines give poor rates. Use an ATM attached to a real bank (OTP, K&H, Erste).",
    "<b>Book taxis, do not hail them.</b> Use the Bolt app or a phone-booked cab. Unmarked taxis waiting at the airport and tourist spots are known to overcharge visitors.",
    "<b>It is forint, not euros.</b> Hungary is in the EU but kept the forint. Some places take euros at a bad rate, so pay in forint, and do not arrive expecting euros to work.",
    "<b>Check for a service charge.</b> Many Budapest restaurants add a 10% to 12.5% service charge (szervizdij) to the bill, in which case you do not need to tip on top."
  ],

  tippingHeading: "Tip around 10%.",
  tipping: "Hungary tips a little more than much of Europe, and it is genuinely appreciated. In a restaurant with table service, <b>around 10%</b> for good service is normal, and a bit more for something special. First, <b>check the bill for a service charge (szervizdij)</b>, often 10% to 12.5%, already added, in which case nothing more is needed. When you do tip, the local way is to <b>tell the server the total you want to pay</b> as you hand over cash or your card, rather than leaving money on the table. For taxis, round up the fare, and for a helpful hotel porter, a few hundred forint is gracious.",

  faqs: [
    { q: "Do I need cash in Hungary?", a: "Some. Cards and phones cover most hotels, restaurants and shops, but market stalls, smaller eateries, thermal-bath extras and taxis often want cash. Keep some forint on you and top up from a bank ATM as needed." },
    { q: "Is it forint or euros in Hungary?", a: "Forint. Hungary is in the EU but kept its own currency, the forint (Ft, HUF). Shops and restaurants price and take forint; some tourist spots accept euros at a poor rate, so pay in forint or by card." },
    { q: "Which ATMs and exchange should I avoid in Hungary?", a: "Avoid the standalone Euronet machines and the tourist-area exchange booths, which give poor rates. Use an ATM attached to a real bank such as OTP, K&H or Erste, and always choose forint, not dollars." },
    { q: "Should I pay in forint or US dollars?", a: "Always forint. If a terminal, booth or ATM offers to charge you in US dollars, decline; that dynamic currency conversion adds a few percent. Paying in forint lets your card's network handle the exchange fairly." },
    { q: "What is the Budapest tourist tax?", a: "Budapest charges a tourist tax of 4% of your room price per night, added at your accommodation, with under-18s exempt. Most other Hungarian towns charge a small flat fee per person per night instead." },
    { q: "Can I get a VAT refund on shopping in Hungary?", a: "Yes, and it is the best in Europe. Hungary's VAT is 27%, so after fees you get back about 18%. Spend over about 55,000 forint in one store, ask for a tax-free form, keep the goods unused, and have customs stamp it when you leave the EU. It is for goods, not hotels or meals." },
    { q: "Are Budapest taxis safe to use?", a: "Yes, if you book rather than hail. Use the Bolt app or call a reputable company, and avoid the unmarked cabs waiting at the airport and tourist areas, which are known to overcharge visitors." },
    { q: "Do you tip in Hungary?", a: "A little more than elsewhere in Europe: around 10% for good table service. Check the bill first for a service charge (szervizdij), often already added. When tipping, tell the server the total you want to pay rather than leaving cash on the table." }
  ],
  culture: {
    heading: "A little Hungarian goes a long way",
    intro: "Hungarian is unlike the languages around it, so nobody expects you to speak it, but a warm szia, a koszonom, and some curiosity about the country's baths and history mark you as a guest rather than a tourist. It is warmly received.",
    phrases: [
      { mean: "Hi (informal)", say: "SEE-aw", word: "Szia", native: "Szia" },
      { mean: "Good day (formal)", say: "YOH NAW-pot", word: "Jo napot", native: "Jó napot" },
      { mean: "Thank you", say: "KUH-suh-nuhm", word: "Koszonom", native: "Köszönöm" },
      { mean: "Please / here you go", say: "KEH-rem", word: "Kerem", native: "Kérem" },
      { mean: "How much?", say: "MEN-nyi-beh keh-ROOL", word: "Mennyibe kerul", native: "Mennyibe kerül" },
      { mean: "Cheers", say: "EG-esh-shay-ged-reh", word: "Egeszsegedre", native: "Egészségedre" },
    ],
    tip: "Budapest runs on its thermal baths and its grand old coffee houses. At a bath, bring flip-flops and rent a cabin or locker; at a historic cafe, lingering over a coffee and a slice of cake is the whole point, not a quick stop. And a small warning on the toast: clinking beer glasses is traditionally avoided by some Hungarians, a custom tied to 1849, so follow your host's lead.",
    stories: [
      { img: "/hungary-culture-1.jpg",
        alt: "WPA-style illustration of the Hungarian Parliament on the bank of the Danube at dusk, its long neo-Gothic facade, spires and great central dome lit warm gold against a deep blue sky, the calm river catching the reflection with a small boat crossing",
        h: "The Parliament on the Danube",
        p: "Budapest's neo-Gothic Parliament, one of the largest in the world, glows over the Danube at night and anchors a river view among Europe's finest. The two banks, hilly Buda and flat Pest, were once separate cities, joined in 1873 into the capital you see today.",
        note: "Good to know: the classic evening view is from the Buda embankment" },
      { img: "/hungary-culture-2.jpg",
        alt: "WPA-style illustration of bathers relaxing in a steaming turquoise outdoor thermal pool before a grand butter-yellow neo-baroque bath house, two older men playing chess on a floating board, soft steam rising into the cool air",
        h: "Chess in the thermal baths",
        p: "Budapest sits on a field of hot springs, and its thermal baths are a way of life. At the grand Szechenyi baths, locals soak in steaming outdoor pools year round, and a pair of older regulars can often be found playing chess on a floating board, unbothered by the winter air.",
        note: "Good to know: bring flip-flops and rent a locker or cabin" },
      { img: "/hungary-culture-3.jpg",
        alt: "WPA-style illustration of a Hungarian csikos horseman in a flowing cobalt-blue costume and black hat standing astride two galloping horses and driving several more across the open golden puszta plain, dust rising",
        h: "Horsemen of the puszta",
        p: "Out on the puszta, the great Hungarian plain, the csikos herdsmen keep a centuries-old riding tradition alive, famous for the daring move of standing astride a pair of horses while driving several more at a gallop. It is a living link to the horseback Magyars who settled here more than a thousand years ago.",
        note: "Good to know: ranches near Kecskemet stage it for visitors" },
    ],
    pride: "Hungary is proud and distinct, with a language like no other, a deep cafe and bath culture, and a capital that ranks among Europe's most beautiful. A few Hungarian words and a genuine interest are warmly returned."
  },

  spokes: [
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Apps", v: "Uber, Bolt, City Taxi, Fotaxi" },
        { k: "Taxis", v: "Yellow, one regulated tariff" },
        { k: "From Budapest airport", v: "100E bus, or the Fotaxi stand" },
        { k: "Watch for", v: "Unlicensed taxis, use yellow only" }
      ],
      live: true,
      topic: "taxis",
      caution: "low",
      title: "Taxis in Hungary: Uber, Bolt and Budapest cabs",
      description: "Uber is back in Budapest but dispatches Fotaxi cabs, and one tariff is set by law, so switching apps saves nothing. The airport curb rule too.",
      h1: "Taxis in Hungary, and the apps to use",
      lede: "Uber is back in Budapest (run through Fotaxi), so Uber and Bolt both work, and every licensed taxi charges the same regulated rate. The main rule is simply to use licensed yellow cabs. Here is how it works.",
      checked: "Aug 2026",
      checkedISO: "2026-08-14",
      answer: "Good news since 2024: <b>Uber is back in Budapest</b>, operating <b>through Fotaxi</b>, so you can use the normal <b>Uber app</b>, and <b>Bolt</b> works well too. The catch that is really a feature: every Uber and every licensed taxi is a <b>yellow cab on the same regulated city tariff</b>, so an app is <b>not cheaper</b> than a street taxi, just easier (fare shown up front, card payment, no language barrier). The one rule: <b>use only licensed yellow taxis</b> or an app, never an unmarked car. From <b>Budapest airport (BUD)</b>, the <b>100E bus</b> is the cheap direct link, or take a taxi from the official rank. Fares are in <b>forint</b>, on a tariff of <b>1,000 HUF to start plus 400 HUF per km</b>. One airport rule to know: only <b>Fotaxi may collect from the arrivals curb</b>, so a Bolt or Uber car has to meet you up at Departures, and the run into town is roughly <b>28 to 35 EUR</b>.",
      sections: [
        {
          h: "Which app: Uber is back, plus Bolt",
          icon: "phoneok",
          key: { fig: "Pick on wait", tag: "Not on price", text: "Hungary sets one taxi tariff by law, so Uber, Bolt and City Taxi all charge the same regulated fare. Switching apps to hunt a cheaper price does nothing, so choose on availability.", tone: "teal" },
          p: [
            "The news for returning visitors: <b>Uber left Hungary in 2016</b> and <b>came back to Budapest in 2024</b>, this time <b>dispatching licensed Fotaxi cabs rather than private drivers</b>. So you can use the <b>standard Uber app</b> exactly as you would anywhere, <b>Bolt</b> and <b>City Taxi</b> are the other widely used options, and <b>Fotaxi</b> has its own app too.",
            "In Budapest, <b>only the standard Uber option</b> is offered, and every car is a licensed taxi (more on that below). Uber has since expanded to a few other Hungarian cities such as Miskolc, but Budapest is where you will use it most."
          ]
        },
        {
          h: "From Budapest airport",
          icon: "plane",
          key: { fig: "Fotaxi only", tag: "At the arrivals curb", text: "Only Fotaxi may collect from the arrivals curb at Budapest Airport, so use the Fotaxi stand or kiosk there. A Bolt or Uber car has to meet you up at Departures instead.", tone: "amber" },
          p: [
            "From <b>Budapest airport (BUD)</b>, the <b>100E airport bus</b> runs directly to the city center (Deak Ferenc ter) for a cheap flat fare and is easy with a small bag. There is <b>no direct train</b>.",
            "For a car, the rule at the airport is specific: <b>only Fotaxi may collect from the arrivals curb</b>, so the simplest route is the <b>Fotaxi stand or kiosk</b> there. If you would rather use <b>Bolt or Uber</b>, the car <b>has to meet you up at Departures</b>, one level above, which is worth knowing before you stand at arrivals waiting for it. Expect roughly <b>28 to 35 EUR</b> into the city center, and avoid anyone <b>touting</b> a ride inside the terminal."
          ]
        },
        {
          h: "Use licensed yellow taxis only",
          icon: "alert",
          key: { tag: "One regulated tariff", text: "Licensed Budapest taxis, including Uber and Bolt cars, are all yellow on the same regulated tariff, so they cannot overcharge. The risk is unmarked, unlicensed cars, so use a yellow taxi or an app.", tone: "amber" },
          p: [
            "Budapest regulates taxis tightly: <b>licensed cabs are all yellow</b> and charge a <b>single mandated tariff</b>, and that now includes <b>Uber and Bolt</b> cars, which are licensed taxis on the same rate. So a licensed ride <b>cannot legally overcharge</b> you, which is reassuring, and it is also why an app is not cheaper, only easier.",
            "The risk is <b>unmarked, unlicensed cars</b> that ignore the rules, especially near stations and nightlife. So <b>only get into a yellow licensed taxi</b> (with a company name and a visible meter) or book through <b>Uber, Bolt or Fotaxi</b>."
          ]
        },
        {
          h: "Fares, paying and tipping",
          icon: "coins",
          key: { fig: "Round up", tag: "In forint", text: "Every licensed ride runs on the same regulated tariff, in forint. Apps show the price up front; tip by rounding up, roughly 10%.", tone: "teal" },
          p: [
            "Because Hungary <b>sets one taxi tariff by law</b>, the fare is the same whether you hail a yellow cab or book an app, paid in <b>forint</b> (cards widely accepted), and apps show the price in advance. The regulated rate has been <b>1,000 HUF to start plus 400 HUF per km</b> since <b>1 May 2023</b>. To <b>tip</b>, <b>round up</b> the fare, roughly 10% for good service.",
            "For more, see <a href='/hungary/tipping'>tipping in Hungary</a>, <a href='/hungary/cash-or-card'>cash or card in Hungary</a>, and the <a href='/hungary'>Hungary money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Uber in Budapest?", a: "Yes. Uber returned to Budapest in June 2024, operating through Fotaxi, so you can use the standard Uber app. Every Uber car is a licensed yellow taxi on the regulated city tariff, and Bolt works well too." },
        { q: "Is Uber cheaper than a taxi in Budapest?", a: "No, and neither is any other app. Hungary sets one taxi tariff by law, so Uber, Bolt and City Taxi all charge the same regulated fare and switching apps to hunt a cheaper price does nothing. Pick whichever has a car free." },
        { q: "Which taxi app works at Budapest Airport?", a: "All of them, but the pickup point differs. Only Fotaxi may collect from the arrivals curb, so the Fotaxi stand or kiosk is the simplest option. A Bolt or Uber car has to meet you up at Departures instead. Expect roughly 28 to 35 EUR into the city center." },
        { q: "How do I get from Budapest airport to the city?", a: "The 100E airport bus runs directly to the city center (Deak Ferenc ter) cheaply. For a car, Fotaxi is the official airport operator and Uber runs off it too, from the marked rank or the app. There is no direct train." },
        { q: "Are Budapest taxis a scam risk?", a: "Licensed yellow taxis, including Uber and Bolt cars, charge one regulated tariff and cannot legally overcharge. The risk is unmarked, unlicensed cars, especially near stations and nightlife, so only use a yellow licensed taxi or an app." }
      ],
      sources: {
        links: [
          { label: "Hungarian Tourism Agency: official travel information", url: "https://visithungary.com/", type: "gov" },
          { label: "US State Department: Hungary country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Hungary.html", type: "gov" }
        ],
        judgment: "The load-bearing fact here is regulatory rather than commercial: Hungary sets one taxi tariff by law, so app choice is a question of which car is free, not which is cheaper, and that has held since the current rate took effect on 1 May 2023. Uber left in 2016 and returned to Budapest in 2024 dispatching Fotaxi cabs rather than private drivers, which is why the Uber app here behaves like a taxi dispatcher. The airport curb rule is the part most likely to trip a visitor up, and airport access arrangements do get renegotiated, so confirm the pickup point in your app on the day. The 28 to 35 EUR airport range is a fare estimate rather than a fixed price, and it moves with traffic and the forint. Checked Aug 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "10 to 15%, customary" },
        { k: "Restaurants", v: "Round up, or state the total" },
        { k: "Check the bill", v: "Some add a service charge" },
        { k: "Currency", v: "Forint (not euros)" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Hungary: 10 to 15%, and the charge",
      description: "10 to 15% is customary in Hungary. How to leave it, the service charge some Budapest spots add, and why you tip in forint. Checked 2026.",
      h1: "Tipping in Hungary",
      lede: "Hungary tips a little more than Western Europe: about 10 to 15% at a restaurant. Watch for a service charge in Budapest tourist spots, and tip in forint. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Hungary tips a little <b>more than Western Europe</b>: about <b>10 to 15%</b> is customary at a restaurant for good service. The habit is to <b>state the total you want to pay</b> when the server takes your money, or tell them the tip, rather than leaving it on the table. Some places, especially <b>Budapest tourist spots and ruin bars</b>, add a <b>service charge</b>, so check the bill before adding more. Tip in <b>forint</b>, not euros. Round up for taxis and small services.",
      sections: [
        {
          h: "10 to 15%, a bit more than the West",
          icon: "coins",
          key: { fig: "10-15%", tag: "Customary for good service", text: "About 10 to 15% is customary at a restaurant for good service. More than Western Europe, but not US-style obligation.", tone: "teal" },
          p: [
            "Hungary tips a little <b>more than Western Europe</b>: about <b>10 to 15%</b> at a sit-down restaurant for good service. At a <b>cafe, bar or for drinks</b>, rounding up or around 10% is plenty.",
            "It is a <b>courtesy</b>, and staff earn a wage. Round up for <b>taxis</b>, and leave a little for a porter or housekeeping if you like."
          ]
        },
        {
          h: "How to leave it, and the service charge",
          icon: "receipt",
          key: { fig: "Check first", tag: "Some add service", text: "Tell the server the tip or the total, rather than leaving it on the table. Some Budapest tourist spots and ruin bars add a service charge, so check the bill.", tone: "teal" },
          p: [
            "The habit is to <b>tell the server the tip</b>, or the <b>total you want to pay</b>, when they take your money, rather than leaving it on the table. In some places, handing money and saying thanks can be read as keep the change, so <b>state the amount</b> if you want change.",
            "Some <b>Budapest tourist restaurants and ruin bars</b> add a <b>service charge</b> (often around 10 to 12%), so <b>check the bill</b>. If it is there, you need not tip on top."
          ]
        },
        {
          h: "Pay tips in forint",
          icon: "cash",
          key: { fig: "Forint", tag: "Not euros", text: "Tip in Hungarian forint, not euros. Cash is simplest and reaches the staff directly.", tone: "teal" },
          p: [
            "Tip in <b>Hungarian forint</b>, not euros, which are taken only at a poor rate. <b>Cash</b> is simplest and reaches the staff directly, though you can also state the total when paying by card. For the wider picture, see <a href='/hungary/cash-or-card'>cash or card in Hungary</a> and the <a href='/hungary'>Hungary money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Hungary?", a: "Yes, modestly. About 10 to 15% is customary at a restaurant for good service. More than Western Europe, but not a US-style obligation. At a cafe or bar, rounding up or around 10% is plenty." },
        { q: "How do you leave a tip in Hungary?", a: "Tell the server the tip, or the total you want to pay, when they take your money, rather than leaving it on the table. State the amount if you want change, since handing money and saying thanks can be read as keep the change." },
        { q: "Is a service charge added in Hungary?", a: "Sometimes, especially at Budapest tourist restaurants and ruin bars, often around 10 to 12%. Check the bill, and if a service charge is there, you need not tip on top." },
        { q: "Do you tip in euros or forint in Hungary?", a: "Forint. Hungary uses the forint, not the euro, and euros are taken only at a poor rate. Tip in forint, in cash, or state the total when paying by card." }
      ],
      sources: {
        links: [
          { label: "US State Department: Hungary country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Hungary.html", type: "gov" }
        ],
        judgment: "Hungarian tipping is modest, a bit above Western Europe, and the Budapest service charge is real but not universal. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Hungarian forint (HUF), not euro" },
        { k: "Cards", v: "Fine in Budapest, carry some forint" },
        { k: "Big numbers", v: "Notes run into the thousands" },
        { k: "On a card", v: "Choose forint, not dollars" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Hungary? Forint, not euros",
      description: "Hungary is card-friendly in Budapest, but the currency is the forint, with notes in the thousands. Carry forint, pay in forint, and choose forint.",
      h1: "Do I need cash in Hungary, or can I use cards?",
      lede: "Short answer: cards in Budapest, some forint elsewhere. Hungary keeps the forint rather than the euro, its notes run into the thousands, and it is a bargain by Western European standards. Here is how to handle it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Cards, mostly, with some cash. Hungary is <b>card-friendly in Budapest</b>: <b>contactless</b> is common, and Apple Pay and Google Pay are widely taken. The currency is the <b>Hungarian forint (HUF), not the euro</b>, and its <b>notes run into the thousands</b>, so the numbers look large. Keep <b>some forint</b> for markets, small shops and spots outside the capital. Some tourist places quote or take <b>euros at a poor rate</b>, so pay in <b>forint</b>, and choose <b>forint, not dollars</b> on any card or ATM.",
      sections: [
        {
          h: "Card-friendly, and it is forint, not euros",
          icon: "phoneok",
          key: { fig: "Use forint", tag: "Not the euro", text: "Budapest is card-friendly and contactless is common, but the currency is the forint, not the euro. Tourist spots may take euros at a poor rate, so pay in forint.", tone: "teal" },
          p: [
            "Hungary is <b>card-friendly in Budapest</b>. <b>Contactless</b> cards, Apple Pay and Google Pay are widely accepted, and <b>Visa and Mastercard</b> work across the city. Outside the capital and at markets, <b>cash is more common</b>, so carry <b>some forint</b>.",
            "The currency is the <b>Hungarian forint (HUF)</b>, not the euro. Some <b>tourist spots</b> quote or accept <b>euros</b>, but at a <b>poor rate</b>, so it is better to <b>pay in forint</b>. One quirk: forint <b>notes run into the thousands</b> (a coffee can be several hundred forint), so the numbers look large at first."
          ]
        },
        {
          h: "Choose forint, not dollars",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose forint", text: "When a terminal or ATM offers dollars or forint, pick forint. Dollars trigger dynamic currency conversion at a rate about 3 to 8% worse than your bank's.", tone: "amber" },
          p: [
            "When a card terminal or ATM asks whether to charge in <b>dollars or forint, always choose forint</b>. Dollars trigger dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. Decline it every time, along with any euro option.",
            "For cash, use an ATM attached to a <b>real bank</b>, such as OTP Bank, rather than a standalone <b>Euronet</b> kiosk, which charges high fees and pushes the dollar conversion."
          ]
        },
        {
          h: "Watch the big numbers, and value",
          icon: "coins",
          key: { fig: "Count zeros", tag: "Cheaper than the West", text: "Forint notes run into the thousands, so check the zeros when paying. Hungary is cheaper than Western Europe; a card covers most spending.", tone: "teal" },
          p: [
            "Because forint <b>notes run into the thousands</b>, <b>check the zeros</b> when handing over cash or reading a bill, and be a little careful with high-value notes. On the plus side, Hungary is <b>cheaper than most of Western Europe</b>, so your money goes further.",
            "A <b>card covers most spending</b> in Budapest, with <b>some forint</b> for markets and smaller towns. For the wider picture, see the <a href='/hungary'>Hungary money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Hungary?", a: "Some. Budapest is card-friendly and contactless is common, but markets, small shops and places outside the capital lean on cash, so carry some forint." },
        { q: "Does Hungary use the euro?", a: "No. Hungary uses the Hungarian forint (HUF), not the euro. Some tourist spots take euros at a poor rate, so it is better to pay in forint." },
        { q: "Should I pay in forint or dollars in Hungary?", a: "Always forint. If a card machine or ATM offers dollars (or euros), decline: that dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
        { q: "Why are Hungarian prices such big numbers?", a: "The forint trades at many hundreds to the dollar, so notes run into the thousands and everyday prices look large. Check the zeros when paying, and note that Hungary is cheaper than most of Western Europe." }
      ],
      sources: {
        links: [
          { label: "Magyar Nemzeti Bank: official Hungarian forint information", url: "https://www.mnb.hu", type: "gov" },
          { label: "US State Department: Hungary country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Hungary.html", type: "gov" }
        ],
        judgment: "Hungary is card-friendly in Budapest, and the forint-not-euro point is fixed rather than a rate quirk. The forint rate moves, and the firm rule is to decline dollar conversion. Checked July 2026."
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
      title: "Bringing a dog or cat to Hungary from the US 2026",
      description: "Hungary runs on the shared EU health-certificate process, with no quarantine and no titer. What is Hungary-specific on arrival and after you settle in.",
      h1: "Bringing your dog or cat to Hungary.",
      lede: "Hungary runs on the single EU pet-entry process for a US-origin dog or cat: microchip, rabies in the right order, and an EU health certificate on a 10-day clock. No quarantine, no rabies titer. Here is what that means for Hungary, and the local parts worth knowing.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Hungary uses the <b>shared EU pet-entry process</b>, so there is no separate national permit and nothing unusual at the border. Your pet needs an <b>ISO microchip, a rabies vaccination given after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS</b>, then must enter within <b>10 days</b> of that endorsement. There is <b>no quarantine and no rabies titer</b> for a pet coming straight from the US. The full step-by-step, the ordering trap, and the current fees are on one page: see <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a>. Below are the Hungary-specific notes. Coming home to the US is the easy part.",
      sections: [
        {
          h: "Hungary runs on the EU process",
          icon: "health",
          key: { fig: "10 days", tag: "No Hungary-only permit", text: "The standard EU move: an ISO microchip first, a rabies shot after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS. Enter Hungary within 10 days of that endorsement.", tone: "teal" },
          p: ["There is no Hungary-only pet permit and no national quarantine. Bringing a dog or cat into Hungary from the US is the standard EU move: an ISO microchip first, a rabies vaccination after the chip, then an EU Animal Health Certificate completed by a USDA-accredited vet and endorsed by APHIS, with the pet arriving within 10 days of endorsement. A first rabies shot adds a 21-day wait before travel.", "Because the core process is identical across the EU (and the countries that follow its rules), we do not repeat it per country. The full sequence, the microchip-before-rabies trap that costs people the most time, the 10-day clock, and the current APHIS endorsement fees all live on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Read that first, then come back for the Hungary notes."]
        },
        {
          h: "The Hungary-specific parts",
          icon: "receipt",
          key: { fig: "Check", tag: "At the border", text: "Hungarian customs may ask to see the endorsed certificate and confirm the chip, and pets should arrive through a designated traveller point of entry, which the major airports are.", tone: "teal" },
          p: ["At the border, Hungarian customs may ask to see the endorsed certificate and confirm the microchip, and pets should enter through a designated traveller point of entry, which Budapest airport is. There is no dog or cat tapeworm rule for Hungary, unlike Ireland, Finland or Malta.", "After you arrive, Hungary requires dogs to be microchipped and registered in the national pet database, handled by a local vet, and rabies vaccination must be kept current. There is no strict national banned-breed list, but standard control rules apply in public. Register the dog once you have an address."]
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
          key: { fig: "Easy", tag: "The return trip", text: "A dog flying home from Hungary is on the simplest CDC path: usually a CDC Dog Import Form receipt, a microchip, and a minimum age of 6 months.", tone: "teal" },
          p: ["Good news for the return trip: a dog flying home to the US from Hungary is on the simplest CDC path, typically a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement.", "For the wider picture, including how Hungary compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Hungary",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-hungary",
        note: "The US-side steps and the EU health certificate for Hungary. Hungary applies the shared EU process, and the destination's own authorities are the final word on the day."
      },
      faqs: [
        {
          q: "Is there anything Hungary-specific beyond the EU rules?",
          a: "A little. Hungary has no tapeworm rule (that applies to Ireland, Finland and Malta). After you arrive, dogs are microchipped and registered in the national pet database through a local vet, and rabies vaccination must be kept current."
        },
        {
          q: "Does my pet have to go into quarantine in Hungary?",
          a: "No. Hungary applies the shared EU pet-entry process, which has no quarantine and no rabies titer for a pet coming straight from the US. Your pet needs a microchip, a rabies vaccination in the right order, and an EU Animal Health Certificate endorsed by APHIS, then must arrive within 10 days of endorsement. See our EU pet health certificate page for the full process."
        },
        {
          q: "Do I need to quarantine my pet coming back to the US from Hungary?",
          a: "No. A dog returning to the US from Hungary is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details."
        }
      ],
      sources: {
        links: [
          {
            label: "True Trip Costs: the EU pet health certificate, the shared microchip, rabies and certificate process for all EU countries including Hungary",
            url: "/eu-pet-health-certificate",
            type: "internal"
          },
          {
            label: "USDA APHIS: pet travel from the United States to Hungary, the US-side steps and EU health certificate",
            url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-hungary",
            type: "gov"
          },
          {
            label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, for the return leg",
            url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html",
            type: "gov"
          }
        ],
        judgment: "Hungary applies the shared EU pet-entry framework, set by the EU and administered on the US side by APHIS, not by us. The process is stable in substance, though the EU certificate format changes on 1 October 2026, which we cover on the EU pet health certificate page. The local registration and any breed rules vary, so we point you to the official pages and dated this July 2026."
      }
    },
    {
      slug: "money-scams",
      glance: [
        { k: "Most cost", v: "Avoidable entirely" },
        { k: "The big one", v: "Never follow a stranger" },
        { k: "Taxis", v: "Yellow and licensed, or app" },
        { k: "Bills", v: "Ask the price before ordering" }
      ],
      live: true,
      topic: "scams",
      title: "Common money scams in Budapest, and what they cost",
      description: "The friendly stranger who suggests a bar, unlicensed taxis, exchange booths and service charges. What each costs a US visitor in Hungary, and how to sidestep it.",
      h1: "Common money scams in Hungary, and what they cost you",
      lede: "Hungary is a low-crime country, the US rates it at its calmest advisory level, and Budapest is a comfortable city to walk at night. There is one genuine scam here worth knowing about in detail, and it is unusual in that it is entirely optional: it only happens if you follow a stranger to a bar they chose. Everything else is ordinary money housekeeping, a taxi rule, an exchange rule and a bill to read. Here is each, what it costs, and how to sidestep it.",
      checked: "Aug 2026",
      checkedISO: "2026-08-15",
      answer: "One scam dominates: the <b>konzumlany</b>, or consumption girl, where a friendly stranger steers you to a specific bar and the bill arrives at many times what the drinks were worth. Around it sit the usual suspects: <b>unlicensed taxis</b> at the airport and tourist spots, <b>exchange booths and Euronet ATMs</b> with poor rates, a <b>service charge</b> you may tip on top of by mistake, and items brought to the table that turn out to be chargeable. The golden rules: <b>never follow someone who approached you to a bar they picked</b>, <b>use only licensed yellow taxis or an app</b>, <b>get forint from a bank ATM</b>, and <b>check the printed prices before you order</b>.",
      sections: [
        {
          h: "The friendly stranger and the bar bill",
          icon: "cocktail",
          key: { fig: "$160-600", tag: "Choose your own bar", text: "A stranger suggests a bar they know, and the bill arrives at 50,000 to 200,000 forint for a round. The venue is in on it. Never follow someone who approached you to a bar they chose.", tone: "teal" },
          p: [
            "This is Budapest's signature con and it has run for decades. A well-dressed, friendly stranger, often a woman speaking excellent English, sometimes a couple, approaches you near <b>Vaci utca, Vorosmarty ter, Deak ter</b> or in the District VII ruin bar area and suggests a great bar nearby. The venue is complicit. Drinks arrive unpriced, your companion orders freely, and the bill lands at <b>50,000 to 200,000 forint</b>, roughly <b>160 to 600 dollars</b>, for what looked like a round or two. The stranger takes a commission, and a large member of staff tends to appear while payment is discussed. The dramatic cases go far higher; Hungarian press reported a single beer billed at 630 euros in one venue. Treat that as the far end, not the going rate.",
            "Hungarian police have taken this seriously. A 2025 investigation into a ring of complicit bars identified <b>33 victims</b> among hundreds, put the damage above a billion forint, and led to arrests in February and again in June. The defense costs nothing: <b>choose your own venue</b>. A genuine invitation from a person you just met does not require going to one specific bar within minutes. If you are already holding a bad bill, ask for an <b>itemized receipt</b>, stay calm rather than refusing outright if staff are pressing, and report it afterwards to the Budapest tourist police on <b>+36 1 438 8080</b>, who speak English. The general emergency number is <b>112</b>."
          ]
        },
        {
          h: "Taxis: yellow, licensed, or an app",
          icon: "taxi",
          key: { fig: "Only yellow", tag: "Never an unmarked car", text: "Every licensed Budapest taxi is yellow and on the same regulated city tariff, so an app is not cheaper, just clearer. Unmarked cars at the airport and tourist spots are the ones that overcharge.", tone: "teal" },
          p: [
            "Budapest solved most of this with regulation, and the result is a rule that is easy to remember. <b>Every licensed taxi in Budapest is yellow and runs the same regulated city tariff</b>, so no licensed cab is cheaper than another and there is nothing to shop around for. That means an app is not a discount, it is just clearer: the fare is shown up front, you pay by card, and there is no language barrier. <b>Bolt</b> is the workhorse here.",
            "The risk is the car that is not on that tariff. <b>Never get into an unmarked car</b>, and never take a ride from a driver who approaches you in the arrivals hall at Budapest airport or at a tourist square. Use the official rank, book in an app, or take the <b>100E</b> bus, which is the cheap direct link into town. If you are overcharged, note the plate and report it to the tourist police number above. The full picture is in the <a href=\"/hungary/taxis-and-apps\">Hungary taxis and apps guide</a>."
          ]
        },
        {
          h: "Exchange booths, Euronet, and the big numbers",
          icon: "cash",
          key: { tag: "Bank ATMs only", text: "Tourist-area exchange kiosks and standalone Euronet machines give poor rates. Use an ATM attached to a real bank, and count carefully, since forint notes run into the thousands.", tone: "amber" },
          p: [
            "Nothing here is illegal, which is the point. Tourist-area <b>exchange kiosks</b> and standalone <b>Euronet ATMs</b> quote poor rates and lean on fees, and they sit exactly where visitors arrive. Use a machine attached to a real Hungarian bank instead: <b>OTP, K and H, or Erste</b>. On any terminal or ATM, decline the offer to charge you in dollars and choose <b>forint</b>, so your own bank sets the rate. Places that accept euros do so at a rate they pick.",
            "The forint's own arithmetic is worth a second of care. Notes run into the <b>thousands and tens of thousands</b>, so a missing or extra zero is easy to miss when you are tired, and 20,000 forint is only about 63 dollars. Count what you are handed, and check a bill's total against the menu rather than eyeballing the digits. The <a href=\"/hungary/cash-or-card\">Hungary cash and cards guide</a> covers how to carry money here."
          ]
        },
        {
          h: "The bill: service charge, and things you did not order",
          icon: "receipt",
          key: { fig: "10 to 12.5%", tag: "Check before tipping", text: "Many Budapest restaurants add a service charge, the szervizdij, so tipping on top means paying twice. Bread and olives brought unasked are usually chargeable items, not a gift.", tone: "amber" },
          p: [
            "Two ordinary things catch Americans out. First, many Budapest restaurants add a <b>service charge</b>, the <b>szervizdij</b>, typically <b>10 to 12.5 percent</b>. If it is on the bill, you do not need to tip on top, and adding a US-style 20 percent means paying twice for the same thing. Look for the line before you decide, which the <a href=\"/hungary/tipping\">Hungary tipping guide</a> covers.",
            "Second, <b>bread, olives or a small plate arriving unasked</b> is normally a chargeable item here rather than a courtesy, itemized at a few euros each. That is legal once you accept it, so decline it if you do not want it. The related tell in the tourist streets is a place with <b>no printed prices</b>, or staff outside actively recruiting passers-by. Ask for the menu with prices before you sit, and if there is not one, keep walking."
          ]
        },
        {
          h: "What this means for your money",
          icon: "coins",
          key: { fig: "Habits", tag: "How to avoid it", text: "Choose your own bar, use yellow taxis or an app, pull forint from a bank ATM, choose forint at the terminal, and check the printed prices and the service line before you order or tip.", tone: "teal" },
          p: [
            "One item on this page can cost hundreds of dollars, and it requires your cooperation to happen at all. The habits: <b>choose your own bar rather than a stranger's</b>, <b>use licensed yellow taxis or an app</b>, <b>get forint from a bank ATM</b>, <b>choose forint at every terminal</b>, and <b>check the printed prices and the service line</b>. Everything else in Hungary is honest and good value; ordinary Budapest restaurants, the baths and public transport are all straightforward.",
            "Handled calmly, none of this should shape your trip, and most visitors meet none of it. Save the tourist police number, <b>+36 1 438 8080</b>, and the emergency number, <b>112</b>, and forget about it. For getting and spending money well while you are there, see the <a href=\"/hungary/cash-or-card\">Hungary cash and cards guide</a> and the <a href=\"/hungary\">Hungary cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Budapest safe for tourists?", a: "Yes. Hungary is a low-crime country and the US rates it at its calmest advisory level. The one scam worth knowing in detail is the konzumlany bar setup, which only happens if you follow a stranger to a bar they picked. The rest are ordinary money issues: unlicensed taxis, poor exchange rates and service charges you might tip on top of." },
        { q: "What is the konzumlany scam in Budapest?", a: "A friendly stranger, often a woman speaking good English, approaches you near Vaci utca, Vorosmarty ter, Deak ter or the ruin bar district and suggests a specific bar nearby. The venue is in on it, drinks arrive unpriced, and the bill lands at 50,000 to 200,000 forint, roughly 160 to 600 dollars. The stranger earns a commission. Choose your own venue and it cannot happen." },
        { q: "What do I do if a Budapest bar hands me a huge bill?", a: "Ask for an itemized receipt. If staff are pressing and you feel uncomfortable, negotiating down is generally safer than refusing outright, and you should report it afterwards rather than fight it there. The Budapest tourist police are on +36 1 438 8080 and speak English; the general emergency number is 112. Keep any receipt and card slip." },
        { q: "How do I avoid taxi overcharging in Budapest?", a: "Every licensed Budapest taxi is yellow and runs the same regulated city tariff, so use only those, or book through an app such as Bolt where the fare shows up front. Never get into an unmarked car, and never take a ride from anyone who approaches you in the airport arrivals hall. The 100E bus is the cheap direct link from the airport." },
        { q: "Where should I change money in Hungary?", a: "At an ATM attached to a real bank such as OTP, K and H or Erste. Avoid tourist-area exchange kiosks and standalone Euronet machines, which quote poor rates. Decline any offer to charge you in dollars and choose forint. Places that accept euros set their own rate, so pay in forint, and count what you are handed, since forint notes run into the thousands." },
        { q: "Do I tip in Hungary if there is a service charge?", a: "No. Many Budapest restaurants add a service charge, the szervizdij, usually 10 to 12.5 percent, and adding a US-style tip on top means paying twice. Check the bill for the line first. If there is no service charge, 10 to 15 percent is customary, stated to the server as the total you want to pay rather than left on the table." }
      ],
      sources: {
        links: [
          { label: "US State Department: Hungary country information and safety guidance for travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Hungary.html", type: "gov" },
          { label: "Daily News Hungary: police investigation into bars defrauding foreign tourists with hostesses, with victim and damage figures", url: "https://dailynewshungary.com/wealth-foreign-tourists-fell-victim-budapest/", type: "media" }
        ],
        judgment: "The 50,000 to 200,000 forint range is the typical reported bill for the konzumlany setup, and the 33 identified victims, the damage figure above a billion forint and the February and June 2025 arrests come from Hungarian press reporting on the police investigation. The 630 euro single beer is one dramatic reported case and we have flagged it as the far end rather than presenting it as what to expect. The service charge range and the tourist police number are widely published locally. We have not restated Budapest taxi tariffs here, since those sit in the taxis guide and move; the rule that matters is that all licensed cabs are yellow and share one regulated tariff. Forint conversions use roughly 315 to the dollar. Checked August 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Excellent, metro included" },
        { k: "Carrier roaming", v: "$10 to $12 a day" },
        { k: "Cheapest", v: "A local SIM, and it is cheap" },
        { k: "Signal gaps", v: "None worth planning around" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "eSIM for Hungary: cheap data, and no coverage story",
      description: "Hungarian coverage is excellent and prepaid data is cheap. This page is short because there is nothing here to plan around.",
      h1: "Staying connected in Hungary.",
      lede: "Hungary has excellent coverage, including deep in the Budapest metro, and cheap prepaid data. There is no connectivity trap here, so this page is short rather than padded.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>excellent</b> across Budapest and the regional towns, on the rail network and around Lake Balaton, and notably <b>deep in the Budapest metro</b>, including the century-old M1. On price, a local <b>Yettel</b>, <b>Telekom</b> or <b>One</b> prepaid SIM with a data bundle is cheap and carries <b>Roam Like At Home</b> across the EU. Your US carrier charges about <b>${S.dayPass}</b> to roam (<b>AT&amp;T and Verizon</b> day passes), though <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, while <b>Verizon has ${S.verizonNoCap}</b> and keeps billing daily. <b>T-Mobile</b>'s mid and upper tiers include <b>${S.tmoRange}</b> of high-speed data abroad before slowing to <b>${S.throttle}</b>. A <b>Nomad eSIM</b> is a few dollars per gigabyte and needs no shop. Both are far cheaper than roaming, so the decision is whether the errand is worth the difference. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "Cheap either way",
          icon: "tag",
          key: { fig: "Cheap both ways", tag: "Local SIM or eSIM", text: "Hungarian prepaid is inexpensive and carries EU roaming. A travel eSIM costs a little more and skips the shop. Both beat roaming easily.", tone: "teal" },
          p: [
            `Hungarian prepaid data is inexpensive, sold in <b>Yettel</b>, <b>Telekom</b> and <b>One</b> shops and in supermarkets, and because Hungary is in the <b>EU</b> the allowance travels across the union under <b>Roam Like At Home</b>. That makes it the better buy if Budapest is one stop on a wider central European trip.`,
            `A <b>Nomad eSIM</b> at a few dollars per gigabyte is the no-errand option, working from landing. For a long weekend that is probably worth the premium; for a longer trip the local SIM is ahead on price. We earn a commission on the eSIM and not on a Yettel SIM, which is worth knowing when reading a page that says the local SIM is cheaper.`
          ]
        },
        {
          h: "What roaming costs",
          icon: "roamfee",
          key: { fig: `${S.dayPassFig}`, tag: "Roaming default", text: "A US carrier day pass is the expensive default. AT&T caps it at 10 daily fees a bill period, Verizon does not cap at all, and T-Mobile's mid and upper tiers include 5GB to 30GB abroad.", tone: "teal" },
          p: [
            `Roaming on your US plan is about <b>${S.dayPass}</b>, so <b>${S.week}</b> for a week. <b>AT&amp;T</b> caps it at <b>${S.capFees}</b>, about <b>${S.capAmount}</b>, while <b>Verizon has ${S.verizonNoCap}</b> and keeps billing daily, which is the difference that matters on a long stay. <b>T-Mobile</b>'s tiers include roughly <b>${S.tmoLow}</b> on Experience More, Magenta MAX and Go5G Plus, <b>${S.tmoMid}</b> on Experience Beyond and Go5G Next and <b>${S.tmoHigh}</b> on Better Value, slowing to <b>${S.throttle}</b>.`,
            `Do not roam with <b>no plan</b>: pay-per-use is about <b>${S.ppu}</b>, and background app activity finds it on its own, so <b>turn off data roaming</b> until something is active.`
          ]
        },
        {
          h: "Nothing to warn you about, including underground",
          icon: "phoneok",
          key: { fig: "The metro too", tag: "Coverage", text: "Excellent across the country and working deep in the Budapest metro, including the M1. No gap worth planning around.", tone: "teal" },
          p: [
            `Short section, honestly. Coverage is strong in <b>Budapest, Debrecen, Szeged and Pecs</b>, across the Great Plain, along the Danube and around <b>Lake Balaton</b>, with 5G widespread in the capital and a working signal <b>in the metro tunnels</b>. Rural coverage is good by regional standards. The <b>Bukk</b> and <b>Matra</b> hills can thin, which is a hiking note.`,
            `So the useful advice is short: buy something cheap before you need it, and do not bother researching networks. Download offline maps for a hills day on general principle. This guide is written for US travelers departing the US. For more, see <a href='/hungary/cash-or-card'>cash or card in Hungary</a>, <a href='/hungary/taxis-and-apps'>taxis and apps in Hungary</a>, and the <a href='/hungary'>Hungary money guide</a>.`
          ]
        }
      ],
      faqs: [
        { q: `Is a Hungarian SIM card cheaper than an eSIM?`, a: `On price, yes, and it carries EU roaming across the union, which makes it the better buy for a wider central European trip. A travel eSIM costs a little more per gigabyte and needs no shop visit, which is worth the difference on a short break.` },
        { q: `How much does it cost to use my US phone in Hungary?`, a: `About ${S.dayPass} on an AT&T or Verizon day pass, so roughly ${S.week} a week. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad before slowing to ${S.throttle}.` },
        { q: `Is there phone signal in the Budapest metro?`, a: `Yes, including in the tunnels and on the century-old M1 line. Hungarian coverage is strong generally, in the capital, the regional towns, along the Danube and around Lake Balaton.` },
        { q: `Do I need data in Budapest?`, a: `Not strictly, since wifi is common in cafes, bars and hotels and the centre is walkable. It is worth having for transit apps, taxis and thermal-bath opening hours, and Hungarian prepaid is cheap enough that it is not a decision worth agonising over.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "US State Department: Hungary country information for US travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Hungary.html", type: "gov" }
        ],
        judgment: "Checked Aug 2026. Another deliberately short spoke: Hungarian coverage is excellent, prepaid data is cheap, and there is no registration quirk or signal gap worth a paragraph, so the page says so and stops. The local SIM is cheaper than the eSIM we earn on and the page states it. No SIM registration requirement is named because we could not confirm one to our own standard, and a wrong paperwork warning is a real harm."
      }
    },
    {
      slug: "medical-costs",
      exposureCategory: "routineAffordable",
      exposureQuote: "you are treated first and billed after, and the bill that follows is a Hungarian one",
      glance: [
        { k: "Emergency room", v: "Treats first, bills later" },
        { k: "Payment", v: "Cash on completion is normal" },
        { k: "Budapest", v: "Private clinics built for foreigners" },
        { k: "The tell", v: "Austrians come here for care" }
      ],
      live: true,
      topic: "health",
      title: "Getting sick in Hungary: treated first, billed in forints",
      description: "Hungary treats everyone's emergency first, tourists included, and bills after, in cash and in forints. The price tell is that Austrians and Germans have crossed the border for Hungarian care for forty years.",
      h1: "What does getting sick in Hungary cost a visitor?",
      lede: "Hungary's emergency rooms treat everyone first, tourists included, and settle up afterwards. The tell about what settling up costs is who else is in the waiting room: Austrians and Germans who crossed a border to be treated here on purpose.",
      checked: "Aug 2026",
      checkedISO: "2026-08-21",
      answer: "Hungary's state system belongs to residents and EU card holders, but the State Department states the visitor's sequence plainly: <b>everyone is entitled to emergency care, tourists included, and the bill arrives afterwards</b>. In our words: you are treated first and billed after, and the bill that follows is a Hungarian one. For everything short of an emergency you pay out of pocket, and the US Embassy in Budapest describes the mechanics: doctors and hospitals generally require <b>payment in cash upon completion</b> of services. The price level has a forty-year tell: Hungary is the country <b>Austrians and Germans cross a border into for dental and medical care</b>, which is not a thing people do toward expensive medicine. Budapest adds a lane built for you: <b>private clinics run for foreigners</b>, English-first, card-friendly, walk-in.",
      insurance: true,
      insuranceNote: "The honest Hungarian read is gentle: emergencies are treated first, everyday care is priced for a country that exports affordable medicine to its richer neighbours, and a clinic visit here should not frighten anyone, which we would rather say than lean on the link below. What earns cover is the same short list as everywhere: a long admission, billed even at Hungarian rates, and a medically supervised flight home. Check the evacuation limit, and keep receipts, since cash on completion is the local rhythm. Faye covers trip medical and evacuation.",
      careFirst: "If it is serious, call 112; you will be treated first and billed after, like everyone else.",
      sections: [
        {
          h: "Treated first, tourists included",
          icon: "receipt",
          key: { tag: "The stated sequence", text: "Everyone gets emergency care first, tourists included; the bill follows. Non-emergency care is out of pocket.", tone: "teal" },
          p: [
            "The State Department's Hungary page states the emergency rule in a sentence most countries make you infer: <b>everyone is entitled to emergency care, including tourists</b>, and you should <b>expect to receive a bill later</b>. If it is serious, call 112; you will be treated first and billed after, like everyone else.",
            "Outside the emergency door, the rule flips to pay-your-way: <b>non-emergency care is out of pocket</b> for a visitor, at the point of service. The next two sections are about what that pocket money looks like and where to hand it over."
          ]
        },
        {
          h: "Cash on completion",
          icon: "cash",
          key: { tag: "The mechanics", text: "Doctors and hospitals generally require payment in cash when the service is done. Forints, receipt, done.", tone: "teal" },
          p: [
            "The US Embassy in Budapest describes the payment culture in one line: doctors and hospitals here <b>generally require payment in cash upon completion of services rendered</b>. Not a deposit before, not an invoice weeks later: forints at the desk when the work is done. Private clinics increasingly take cards; the habit underneath is still cash.",
            "One cultural note so you do not misread the room: Hungary's old custom of slipping doctors <b>gratitude money</b>, the infamous halapenz, was <b>banned outright in 2021</b>. Nobody is waiting for an envelope, and offering one now insults people and breaks the law. The cash Hungary wants from you is the printed bill, nothing folded."
          ]
        },
        {
          h: "Budapest's foreigner clinics, and the dental tell",
          icon: "tag",
          key: { tag: "The price level", text: "Budapest runs private clinics built for foreigners, in the country Austrians and Germans visit on purpose for affordable care.", tone: "teal" },
          p: [
            "Budapest has a private tier that exists because of people like you: <b>English-first clinics built for foreigners</b>, walk-in or same-day, card terminals on the desk, prices posted. For anything short of an emergency, that lane turns a medical worry into an appointment.",
            "And the price level has the best kind of evidence: behaviour. For some forty years, <b>Austrians and Germans have crossed the border into Hungary for dental and medical care</b>, a trade that only flows toward the cheaper, competent side of a border. When your neighbours are richer and still drive to you for treatment, the tariff is telling the truth about itself."
          ]
        },
        {
          h: "What is still worth covering",
          icon: "plane",
          key: { tag: "Proportion", text: "The everyday side is priced for Hungary. The long admission and the flight home stay the two real numbers.", tone: "teal" },
          p: [
            "Here is the sentence that costs us commission: for a normal trip, <b>Hungary sits among Europe's least financially risky places to need a doctor</b>. The emergency room treats first, the everyday tariff is Hungarian, and the medical-tourism trade in the opposite direction says what needs saying.",
            "The two costs that stay big are the usual pair: a <b>long admission</b>, real money even in forints, and a <b>medically supervised flight home</b>. Point cover there, check the evacuation line first, and for the forint mechanics see the <a href='/hungary/cash-or-card'>Hungary cash and cards guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Will a Hungarian hospital treat a tourist in an emergency?", a: "Yes, and the State Department says so plainly: everyone is entitled to emergency care, tourists included, with the bill following afterwards. Non-emergency care is out of pocket at the point of service." },
        { q: "How do I pay for a doctor in Hungary?", a: "Generally in cash, in forints, when the service is complete, per the US Embassy's own description. Private clinics in Budapest increasingly take cards. Always take the printed receipt for any claim." },
        { q: "Is Hungarian healthcare cheap for foreigners?", a: "Priced for Hungary, yes, and the best evidence is behavioural: Austrians and Germans have crossed the border for Hungarian dental and medical care for decades. We publish no figure because we verified none against an official tariff." },
        { q: "Should I tip a Hungarian doctor or nurse?", a: "No. The old gratitude-money custom, halapenz, was banned outright in 2021. Offering cash to staff now is both illegal and insulting. The only money Hungarian medicine wants from you is the bill itself." },
        { q: "What is the emergency number in Hungary?", a: "112, with English-capable operators; 104 is the traditional ambulance line. Treatment comes first, the bill later, like everyone else in the room." }
      ],
      sources: {
        links: [
          { label: "US State Department: Hungary country information, health section, on emergency care for everyone including tourists, with billing to follow", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Hungary.html", type: "gov" },
          { label: "US Embassy in Hungary: medical assistance page, on payment in cash upon completion of services", url: "https://hu.usembassy.gov/medical-assistance/", type: "gov" }
        ],
        judgment: "The treated-first rule and the cash-on-completion mechanics are the State Department's and the US Embassy's own statements. The 2021 ban on gratitude money is settled Hungarian law and widely documented. The price-level claim is deliberately behavioural rather than numerical, the long-running Austrian and German care trade into Hungary, because no forint figure was verified against an official tariff this pass, and a borrowed number on a medical page is exactly what this site refuses to print. Checked August 2026."
      }
    }
  ]
};
