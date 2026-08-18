import { S } from './carrier-spine.js';

export default {
  slug: "poland",
  iso2: "pl",
  live: true,
  name: "Poland",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-31",
  sources: {
    changed: "First publication. Confirmed the money facts that matter most this year: the zloty sits at about 3.8 to the US dollar, Poland is one of the most cashless countries in Europe, and there is no city or tourist tax in Krakow, Warsaw or most cities, only a small local climate fee in designated resort and spa towns. VAT is 23%, and non-EU visitors can reclaim it on shopping over 200 zloty per store. On entry, the EU's biometric Entry/Exit System went live in April 2026, and a US passport is still all you need for now. Updated 31 July 2026: the EU removed its late-2026 ETIAS target, so this guide no longer quotes a start date for it.",
    links: [
      { label: "Krakow Airport: tax-free shopping for non-EU visitors, the 23% VAT, the 200 zloty minimum per receipt and the customs confirmation on departure", url: "https://www.krakowairport.pl/en/passenger/travel/shopping/tax-refund", type: "revenue" },
      { label: "European Union travel portal: the Entry/Exit System (EES) at Schengen borders, and the ETIAS travel authorization", url: "https://travel-europe.europa.eu/ees_en", type: "gov" },
      { label: "Poland.travel: the official tourism site, for getting around and visitor basics", url: "https://www.poland.travel/en", type: "tourism" },
    ],
    judgment: "The daily cash share, the tipping feel, and the likely behavior of Euronet ATMs are our own estimate from experience and consistent traveler reports, not an official figure. The small resort climate fee is set by each municipality and shown here as a representative amount.",
  },
  emergency: { medical: "112", note: "112 reaches every service, in English. If you prefer the direct lines, 999 is an ambulance, 998 the fire service and 997 the police. The 911 number does not work here.", checked: "Jul 2026", checkedISO: "2026-07-16" },
  insuranceLevel: "low",
  region: "Europe",
  signals: { cardFriendliness: 4, cashNeed: 2, taxRisk: 2, atmRisk: 4 },
  hook: "One of the most cashless countries in Europe, so tap your card or phone almost everywhere, keep a little zloty for the smallest stalls, sidestep the Euronet ATMs and their poor rates, and always pay in zloty, not euros or dollars.",
  aliases: ["poland", "polish", "krakow", "cracow", "warsaw", "warszawa", "gdansk", "wroclaw", "zakopane", "zloty", "zlotych", "pln", "zl", "wawel", "pierogi", "blik", "auschwitz", "malbork"],

  title: "Does Poland accept euros? Money in 2026",
  description: "Not really, you pay in zloty. Poland is close to cashless, so tap almost everywhere, keep a little zloty for stalls, and skip Euronet ATMs. Checked 2026.",

  h1: "Money in Poland, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your card covers almost everything, the small amount of zloty worth carrying, the ATMs to avoid, and the taxes to know in a country that is cheaper than most of Europe.",
  hero: {
    img: "/poland-hero.jpg",
    h: 1375,
    alt: "A quiet Krakow old-town street at dusk with warm string lights strung between pastel townhouses whose tall windows glow amber, cobblestones underfoot, and the two uneven brick towers of St Mary's Basilica rising against a deep teal sky. A lone figure seen from behind walks away down the street toward the towers, and in the foreground on a wooden table sits a plate of pierogi with a dollop of sour cream beside a small bowl of ruby-red barszcz, gently steaming"
  },


  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Poland is <b>one of the most cashless countries in Europe</b>, and your money life here is easy. <b>Visa and Mastercard</b>, Apple Pay and Google Pay work almost everywhere, from hotels and restaurants to tiny shops and many market stalls, and locals lean on the homegrown <b>BLIK</b> phone app. Keep only <b>a little cash</b> for the smallest vendors, a church donation box or a rural stop. Two things to hold onto: it is the <b>zloty, not the euro</b> (Poland is in the EU but kept its own currency), so price and pay in zloty; and when you need cash, use a <b>bank ATM</b> and avoid the pervasive standalone <b>Euronet</b> machines, which push poor conversion. Always <b>choose zloty, not US dollars</b>, on any card terminal or ATM. On tax, everyday prices already include <b>23% VAT</b>, there is <b>no city tax</b> in Krakow, Warsaw or most cities, and non-EU visitors can reclaim VAT on shopping over 200 zloty. Tipping is light: round up or leave about 10% for good table service.",

  meter: {
    heading: "About as cashless as Europe gets, with a little cash for the smallest spots.",
    cashPct: 22,
    note: "A rough feel for everyday spending. Cards and phone payments cover almost everything, including small shops and many market stalls. Cash is a small backup, for the tiniest vendors, tips, church boxes and the odd rural stop, and you rarely need much of it."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works nearly everywhere", p: "Visa and Mastercard, Apple Pay and Google Pay are taken almost everywhere, even small shops and market stalls, and locals pay by phone with BLIK. Amex is less widely accepted. You can go most of a day without touching cash.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "A little, in zloty", p: "Carry a small amount of <b>zloty</b> for the smallest vendors, market stalls, tips and rural stops. Remember it is <b>zloty, not euros</b>: a few tourist spots take euros at a poor rate, so pay in zloty. Get it from a bank ATM as you go.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Avoid Euronet", p: "Use a machine attached to a real bank (PKO BP, Santander, ING, mBank) and skip the blue-and-yellow <b>Euronet</b> ATMs, which are everywhere in tourist areas and push poor exchange. Whichever you use, <b>decline the 'pay in US dollars' offer</b> and choose zloty.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b>, plus a backup. Amex is patchier here.",
      "Expect to pay by card or phone for almost everything; carry only a little cash for the smallest spots.",
      "Know it is the <b>zloty, not the euro</b>, so do not bring euros expecting to spend them.",
      "At the border you will be fingerprinted and photographed under the EU's <b>EES</b> system, so allow extra time on arrival in summer."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters and the <b>Euronet</b> ATMs. Use a bank ATM in the arrivals hall, and <b>decline 'convert to US dollars.'</b>",
      "Grab about <b>200 to 400 zloty</b> for your first day or two of small cash needs.",
      "Buy a transit ticket or tap your card straight onto the tram or bus; most Polish cities take contactless on board.",
      "Set up an <b>eSIM</b> before you land; Poland has fast, cheap mobile data."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your card or phone</b> for nearly everything, and choose zloty every time.",
      "Keep a little <b>cash</b> for market stalls, milk bars, tips and church donation boxes.",
      "For transit, <b>tap your card</b> on the tram, bus or metro, or buy tickets from a machine.",
      "If an ATM or shop offers to charge you in dollars, say no and pay in zloty."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in zloty, never US dollars.</b> Choosing your home currency (dynamic currency conversion), and using Euronet ATMs, both quietly add a few percent.",
      "<b>Tip lightly.</b> Round up or leave about 10% for good table service, in cash, and only say 'thank you' as you pay if you mean keep the change."
    ], cta: null }
  ],

  cash: {
    rate: 3.8, cur: "PLN", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 3.8 zloty to the US dollar in 2026. Poland is noticeably cheaper than Western Europe, and because nearly everything takes a card, this is only the small cash-in-hand slice of your spending.",
    styles: [
      { n: "Budget", per: 45, cash: 0.3, room: 55 },
      { n: "Mid-range", per: 100, cash: 0.25, room: 110 },
      { n: "Comfort", per: 220, cash: 0.2, room: 220 }
    ]
  },

  connectivity: {
    works: "Excellent and cheap. Poland has fast, wide 4G and strong 5G across the cities and along the main routes, from Plus, Play, Orange and T-Mobile. A prepaid SIM costs very little, but for most visitors an eSIM from Airalo, Nomad or a similar provider is the easy route. Your US plan may include some roaming, so check the rate first. You do not need mobile data to pay by card, but you will want it for maps and tickets."
  },

  tax: {
    unit: "perPersonPerNight",
    currency: "PLN",
    capNights: null,
    note: "Poland has no nationwide tourist or city tax. Krakow, Warsaw and most cities charge nothing. Only designated resort and health-resort towns levy a small local climate fee (oplata miejscowa) or spa fee (oplata uzdrowiskowa), commonly a few zloty per person per night, set by each municipality and added to your bill.",
    regions: [
      { key: "cities", label: "Krakow, Warsaw and most cities", rate: 0, note: "Poland's major cities do not charge a tourist or city tax on your stay." },
      { key: "resorts", label: "Zakopane and resort or spa towns", rate: 4, note: "Designated resort and health-resort towns add a small climate or spa fee, commonly a few zloty per person per night, set locally." },
      { key: "other", label: "Elsewhere in Poland", rate: 0 }
    ]
  },

  currencyHeading: "The Polish zloty, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "Poland uses the zloty (written zl, code PLN), not the euro. At about 3.8 to the US dollar in 2026, 100 zloty is roughly 26 dollars and 10 zloty about 2.65. Notes run 10, 20, 50, 100, 200 and 500, and prices already include the 23% VAT, so the tag is what you pay." },
    { sym: "usd", k: "It's zloty, not euros", v: "Poland is in the EU but kept its own currency. Shops, taxis and restaurants price and take zloty, not euros. A few tourist spots accept euros at a poor rate, but always pay in zloty, and a card spares you the guesswork entirely." },
    { sym: "card", k: "Contactless everywhere", v: "Poland is one of the most cashless countries in Europe. Cards, Apple Pay and Google Pay work almost everywhere, even tiny shops and market stalls, and locals pay by phone with the BLIK app. Keep a little cash only for the smallest vendors." },
    { sym: "tip", k: "Tipping is light", v: "Tipping is modest. In restaurants with table service, rounding up or leaving about 10% for good service is normal, ideally in cash. One quirk: saying thank you (dziekuje) as you hand over money can mean keep the change, so use it deliberately." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "No city tax in the cities, and money back on shopping.",
    text: "Good news on both counts. There is <b>no citywide tourist tax</b> in Krakow, Warsaw or most Polish cities; only designated resort and spa towns like Zakopane add a <b>small local climate fee</b>, usually a few zloty per person per night. Everyday prices already include VAT, a <b>23%</b> standard rate with reduced rates of 8% on things like hotels and 5% on books and basic food, so the figure on the tag is what you pay. If you shop, non-EU visitors can reclaim the 23% VAT on goods: spend <b>over 200 zloty in one store</b> on one receipt, ask for a Tax Free form, keep the goods unused, and have customs confirm it (done electronically at Polish airports and border points) when you leave the EU. After the operator's fee you get back roughly <b>14%</b>, not the full 23%. Refunds are for goods, not hotels, meals or fuel."
  },

  keyFacts: [],

  traps: [
    "<b>'Pay in US dollars?' Always say no.</b> Card terminals and ATMs may offer to charge you in dollars (dynamic currency conversion), which quietly adds a few percent. Choose zloty every time.",
    "<b>Avoid Euronet ATMs.</b> The blue-and-yellow standalone machines all over tourist areas push poor exchange and extra fees. Use an ATM attached to a real bank instead.",
    "<b>It is zloty, not euros.</b> Poland is in the EU but kept its own currency. A few tourist spots take euros at a bad rate, so pay in zloty, and do not arrive expecting euros to work.",
    "<b>Watch the 'thank you' at payment.</b> Saying dziekuje as you hand a server your money is often read as 'keep the change,' so only say it then if that is what you mean.",
    "<b>A few cash-only pockets remain.</b> Some milk bars (bar mleczny), market stalls and rural spots take only cash, so keep a little zloty on hand."
  ],

  tippingHeading: "Tip lightly.",
  tipping: "Poland tips modestly, and nobody expects the percentages common in the US. In a restaurant with table service, <b>rounding up or leaving around 10%</b> for good service is normal, and cash straight to the server is best. For a quick coffee, a bar or counter service, tipping is not expected, though a rounded-up bill is welcome. Taxi fares are usually just rounded up. The one thing to know is a local quirk: handing over your money and saying <b>dziekuje (thank you)</b> is commonly taken to mean 'keep the change,' so if you want change back, say it after you get it, not as you pay.",

  faqs: [
    { q: "Do I need cash in Poland?", a: "Not much. Poland is one of the most cashless countries in Europe, and cards and phones work almost everywhere, even small stalls. Keep a little zloty for the tiniest vendors, tips, milk bars and rural stops, and pull it from a bank ATM as needed." },
    { q: "Is it zloty or euros in Poland?", a: "Zloty. Poland is in the EU but kept its own currency, the zloty (zl, PLN). Shops and restaurants price and take zloty; a few tourist spots accept euros at a poor rate, so pay in zloty or by card." },
    { q: "Which ATMs should I avoid in Poland?", a: "Skip the standalone blue-and-yellow Euronet machines common in tourist areas, which push poor conversion and fees. Use an ATM attached to a real bank such as PKO BP, Santander, ING or mBank, and always choose zloty, not dollars." },
    { q: "Should I pay in zloty or US dollars?", a: "Always zloty. If a card terminal or ATM offers to charge you in US dollars, decline; that dynamic currency conversion adds a few percent. Paying in the local currency lets your card's network handle the exchange fairly." },
    { q: "What is BLIK?", a: "BLIK is Poland's hugely popular phone-based payment system, used by locals for shops, transfers and cash withdrawals. As a visitor you do not need it: your contactless card or Apple and Google Pay works in all the same places." },
    { q: "Is there a tourist tax in Krakow or Warsaw?", a: "No. Poland's major cities do not charge a citywide tourist tax. Only designated resort and spa towns, like Zakopane, add a small local climate fee of a few zloty per person per night." },
    { q: "Can I get a VAT refund on shopping in Poland?", a: "Yes. Non-EU visitors can reclaim the 23% VAT on goods: spend over 200 zloty in one store on one receipt, ask for a Tax Free form, keep the goods unused, and have customs confirm it when you leave the EU. After fees you get back roughly 14%, and it is for goods, not hotels or meals." },
    { q: "Do you tip in Poland?", a: "Lightly. Round up or leave about 10% for good table service, in cash. Tipping is not expected for counter service or a quick coffee. Note that saying thank you as you hand over money is often read as 'keep the change.'" },
    { q: "Do I need a visa or ETIAS for Poland?", a: "Not right now. US citizens visit visa-free for up to 90 days in any 180, and since April 2026 you give a fingerprint and photo at the border under the EES system, with no fee and no form. ETIAS, a separate online authorization, is not yet in operation, and the EU has said it will announce a start date several months before it begins, so there is nothing to apply for and nothing to buy today." }
  ],
  culture: {
    heading: "A few Polish words go a long way",
    intro: "Nobody expects a visitor to master Polish, but a warm dzien dobry, a dziekuje, and a little curiosity about the country's history mark you as a guest rather than a tourist. Poles are proud and hospitable, and they notice the effort.",
    phrases: [
      { mean: "Hello / good day", say: "jane DOH-bri", word: "Dzien dobry", native: "Dzień dobry" },
      { mean: "Thank you", say: "jen-KOO-yeh", word: "Dziekuje", native: "Dziękuję" },
      { mean: "Please / you're welcome", say: "PROH-sheh", word: "Prosze", native: "Proszę" },
      { mean: "How much?", say: "EE-leh toh kosh-TOO-yeh", word: "Ile to kosztuje", native: "Ile to kosztuje" },
      { mean: "Excuse me / sorry", say: "psheh-PRAH-sham", word: "Przepraszam", native: "Przepraszam" },
      { mean: "Cheers", say: "nah ZDROH-vyeh", word: "Na zdrowie", native: "Na zdrowie" },
    ],
    tip: "A simple dzien dobry as you walk into a shop or cafe is expected politeness in Poland, and it sets a warm tone. At a milk bar (bar mleczny), the cheap and beloved cafeteria left over from an earlier era, you order at the counter and often bus your own tray; it is one of the best-value meals in the country.",
    stories: [
      { img: "/poland-culture-1.jpg",
        alt: "WPA-style illustration of the legendary green Wawel Dragon coiled at the mouth of its cave at the foot of Wawel Hill, the stone castle and cathedral rising above and the Vistula river curving past below",
        h: "The dragon under Wawel Hill",
        p: "Krakow's founding legend lives at the foot of Wawel Hill, where a fire-breathing dragon once terrorized the city until a clever cobbler's boy tricked it with a sulphur-stuffed lamb. Today a metal dragon by the river breathes real fire for delighted crowds, and the castle above is the historic heart of Poland.",
        note: "Good to know: the dragon statue puffs fire every few minutes" },
      { img: "/poland-culture-2.jpg",
        alt: "WPA-style illustration of a lone trumpeter in a red cloak leaning from the high window of a tall brick church tower at dawn, playing a brass bugle out over the misty red rooftops of the old town",
        h: "The trumpet call that stops mid-note",
        p: "Every hour a trumpeter plays the hejnal from the tallest tower of St Mary's Basilica on Krakow's main square, and the tune always breaks off abruptly. Legend says a medieval trumpeter was shot in the throat by a Tatar arrow mid-warning, and the city has honored him by cutting the call short ever since.",
        note: "Good to know: listen for it on the hour, played to each direction" },
      { img: "/poland-culture-3.jpg",
        alt: "WPA-style illustration of the astronomer Nicolaus Copernicus in a fur-trimmed robe on a stone tower balcony at night, a hand on a brass armillary sphere, gazing at a sky of stars with the sun and planets suggested above",
        h: "The man who moved the Earth",
        p: "Poland gave the world Nicolaus Copernicus, the astronomer who placed the sun, not the Earth, at the center of the heavens and changed how humanity sees itself. You meet his legacy across the country, from Torun, his birthplace, to Warsaw, where a grand statue of him sits outside the science academy.",
        note: "Good to know: Torun celebrates him with its famous gingerbread" },
    ],
    pride: "Poland is warm, proud and full of history worn openly, from royal Krakow to rebuilt Warsaw and the peaks of the Tatras. A few words of Polish and real curiosity about the past are noticed and generously returned."
  },

  spokes: [
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Apps", v: "Bolt (also Uber, FreeNow)" },
        { k: "Why apps", v: "Cheap, and no meter games" },
        { k: "From the airport", v: "Train or bus, or an app" },
        { k: "Watch for", v: "Street and station taxi overcharging" }
      ],
      live: true,
      topic: "taxis",
      caution: "low",
      title: "Taxis in Poland: Bolt, and avoiding overcharging",
      description: "Bolt leads in Poland, with Uber and FreeNow. Getting from the airport cheaply, the station and street taxi overcharging to avoid, and how much to tip.",
      h1: "Taxis in Poland, and the Bolt app",
      lede: "Poland is cheap and easy to get around by app, with Bolt the local favorite. The main thing to sidestep is the old-school station or street taxi that overcharges tourists. Here is how.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Install <b>Bolt</b>, the local favorite and usually the cheapest, and <b>Uber</b> and <b>FreeNow</b> work well too. Apps are the easy default because they are <b>cheap and price the trip up front</b>, sidestepping the one real issue: <b>station and street taxis that overcharge visitors</b>. From the airport, a <b>train or bus</b> into the city is cheap, or use an app. You <b>tip</b> by rounding up, and fares are in <b>zloty</b>.",
      sections: [
        {
          h: "Which app to install",
          icon: "phoneok",
          key: { fig: "Bolt", tag: "Usually cheapest", text: "Bolt is the local favorite and usually the cheapest, with Uber and FreeNow also working well across Polish cities.", tone: "teal" },
          p: [
            "<b>Bolt</b> is the app Poles use most and is usually the <b>cheapest</b>, so install it first. <b>Uber</b> and <b>FreeNow</b> also work well across <b>Warsaw, Krakow, Wroclaw, Gdansk</b> and other cities, and all show the fare and driver up front.",
            "Apps are the easy default for visitors: cheap, priced in advance, and paid by card, which removes any doubt about the meter or the fare."
          ]
        },
        {
          h: "From the airport",
          icon: "plane",
          key: { fig: "Train", tag: "Or an official taxi", text: "Warsaw and Krakow airports both have a cheap train or bus into the city. If you take a taxi, use the official rank or an app, not a tout.", tone: "teal" },
          p: [
            "From <b>Warsaw Chopin (WAW)</b>, a <b>train or city bus</b> runs into the center for a few zloty, and <b>Krakow (KRK)</b> has a train to the main station. Both are cheap and simple.",
            "If you prefer a taxi, use the <b>official airport rank</b> (clearly branded companies) or an <b>app</b>, and ignore anyone <b>touting</b> for a ride inside the terminal, which is where overcharging starts."
          ]
        },
        {
          h: "Avoid station and street taxi overcharging",
          icon: "alert",
          key: { tag: "Use apps or official ranks", text: "The classic Polish issue is an unofficial or station taxi that overcharges tourists with an inflated rate. Booking through Bolt, Uber or FreeNow avoids it, since the fare is set in advance.", tone: "amber" },
          p: [
            "The one real caution is the <b>old-school station or street taxi</b>, especially around <b>train stations and tourist spots</b>, where an unofficial cab may run an <b>inflated tariff</b> or quote a high flat price to a visitor.",
            "The fix is simple: <b>book through Bolt, Uber or FreeNow</b>, where the fare is fixed before you ride, or use a clearly branded <b>official taxi rank</b> with a visible meter. Avoid unmarked cars and anyone approaching you."
          ]
        },
        {
          h: "Fares, paying and tipping",
          icon: "coins",
          key: { fig: "Round up", tag: "Cheap, in zloty", text: "Rides are cheap, shown up front in an app or metered in an official taxi. Tip by rounding up; there is no set percentage.", tone: "teal" },
          p: [
            "Fares are <b>cheap by Western European standards</b>: set in advance in an app, or metered in an official taxi, and paid in <b>zloty</b>. To <b>tip</b>, <b>round up</b> the fare; there is no set percentage.",
            "For more, see <a href='/poland/tipping'>tipping in Poland</a>, <a href='/poland/cash-or-card'>cash or card in Poland</a>, and the <a href='/poland'>Poland money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "What taxi app should I use in Poland?", a: "Bolt is the local favorite and usually the cheapest, with Uber and FreeNow also working well across Warsaw, Krakow, Wroclaw and Gdansk. All show the fare and driver up front and are paid by card." },
        { q: "How do I get from Warsaw airport to the city?", a: "A train or city bus runs from Warsaw Chopin into the center for a few zloty. If you prefer a taxi, use the official airport rank or an app, and ignore anyone touting for a ride inside the terminal." },
        { q: "Do Polish taxis overcharge tourists?", a: "Unofficial or station taxis sometimes do, especially near train stations and tourist spots, with an inflated tariff or flat price. Booking through Bolt, Uber or FreeNow avoids it, since the fare is set in advance." },
        { q: "Do you tip taxi drivers in Poland?", a: "Lightly: round up the fare. There is no set percentage, and rides are cheap, shown up front in an app or metered in an official taxi." }
      ],
      sources: {
        links: [
          { label: "Polish Tourism Organisation: official travel information", url: "https://www.poland.travel/en", type: "gov" },
          { label: "US State Department: Poland country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Poland.html", type: "gov" }
        ],
        judgment: "Poland is cheap and easy by app, Bolt leads, and unofficial station taxis are the thing to avoid. Fares and app coverage shift over time, so this is our practical read. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "About 10%, customary" },
        { k: "Restaurants", v: "Round up to about 10%" },
        { k: "Careful", v: "Thank you can mean keep the change" },
        { k: "Currency", v: "Zloty (not euros)" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Poland: about 10%, and a thank-you quirk",
      description: "About 10% is customary in Poland, and saying thank you as you pay can mean keep the change. Why you tip in zloty. Checked 2026.",
      h1: "Tipping in Poland",
      lede: "Poland tips a little more than Western Europe: about 10% at a restaurant. There is one quirk worth knowing, where saying thank you as you pay can mean keep the change. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Poland tips a little <b>more than Western Europe</b>: about <b>10%</b> is customary at a restaurant for good service (a <b>napiwek</b>), usually by rounding up. One quirk to know: <b>saying thank you (dziekuje) as you hand over money can mean keep the change</b>, so if you want change back, do not say it until you have received your change. Service is <b>usually not included</b>, though some tourist spots add it, so check the bill. Tip in <b>zloty</b>, not euros. Round up for taxis and small services.",
      sections: [
        {
          h: "About 10%, a bit more than the West",
          icon: "coins",
          key: { fig: "About 10%", tag: "Customary for good service", text: "Around 10% is customary at a restaurant for good service, usually by rounding up. More than Western Europe, far below US levels.", tone: "teal" },
          p: [
            "Poland tips a little <b>more than Western Europe</b>: about <b>10%</b> is customary at a sit-down restaurant for good service, the <b>napiwek</b>, usually by <b>rounding up</b>. At a <b>bar, cafe or for drinks</b>, rounding up the coins is plenty.",
            "It is a <b>courtesy</b>, not an obligation, and staff earn a wage. Round up for <b>taxis</b>, and leave a little for a porter or housekeeping if you like."
          ]
        },
        {
          h: "The thank-you quirk",
          icon: "receipt",
          key: { fig: "Mind dziekuje", tag: "Can mean keep the change", text: "Saying thank you (dziekuje) as you hand over money can signal keep the change. If you want change back, wait until you have it before saying thanks.", tone: "amber" },
          p: [
            "Here is the quirk that catches visitors out. If you <b>hand over money and say thank you (dziekuje)</b> at the same time, the server may take it to mean <b>keep the change</b>, and you could tip far more than you meant to.",
            "So if you are <b>paying with a large note and want change</b>, do <b>not</b> say thank you until <b>after</b> you have your change, or simply <b>state the total</b> you want to pay (for a <b>90 zloty</b> bill, say <b>100</b>). Then a thank-you is safe."
          ]
        },
        {
          h: "Pay tips in zloty",
          icon: "cash",
          key: { fig: "Zloty", tag: "Not euros", text: "Tip in Polish zloty, not euros. Cash is simplest and reaches the staff directly.", tone: "teal" },
          p: [
            "Tip in <b>Polish zloty</b>, not euros, which are taken only at a poor rate in tourist spots. <b>Cash</b> is simplest and reaches the staff directly, though you can also state the total when paying by card. For the wider picture, see <a href='/poland/cash-or-card'>cash or card in Poland</a> and the <a href='/poland'>Poland money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Poland?", a: "Yes, modestly. About 10% is customary at a restaurant for good service, usually by rounding up. More than Western Europe, far below US levels. At a bar or cafe, rounding up the coins is plenty." },
        { q: "What is the tipping quirk in Poland?", a: "If you hand over money and say thank you (dziekuje) at the same time, the server may take it to mean keep the change, so you could over-tip. If you want change, wait until you have it before saying thanks, or state the total you want to pay." },
        { q: "How much do you tip at a Polish restaurant?", a: "Around 10% for good service, usually by rounding up. At a bar, cafe or for drinks, rounding up the coins is plenty. It is a courtesy, not an obligation." },
        { q: "Do you tip in euros or zloty in Poland?", a: "Zloty. Poland uses the zloty, not the euro, and euros are taken only at a poor rate. Tip in zloty, in cash, or state the total when paying by card." }
      ],
      sources: {
        links: [
          { label: "US State Department: Poland country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Poland.html", type: "gov" }
        ],
        judgment: "Polish tipping is modest, and the thank-you quirk is a widely reported local convention. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Polish zloty (PLN), not euro" },
        { k: "Cards", v: "Card-friendly, contactless everywhere" },
        { k: "Cheaper", v: "Than most of Western Europe" },
        { k: "On a card", v: "Choose zloty, not dollars" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Poland? Zloty, not euros 2026",
      description: "Poland is very card-friendly and contactless is everywhere, but the currency is the zloty. Pay in zloty, choose zloty, and expect lower prices.",
      h1: "Do I need cash in Poland, or can I use cards?",
      lede: "Short answer: a card for most things, a little zloty for the rest. Poland is very card-friendly, keeps the zloty rather than the euro, and is a pleasant bargain by Western European standards. Here is how to handle it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Cards, almost entirely. Poland is <b>very card-friendly</b>: <b>contactless</b> is everywhere, and Apple Pay and Google Pay are widely taken. The currency is the <b>Polish zloty (PLN), not the euro</b>, even though Poland is in the EU. Keep <b>a little zloty cash</b> for small shops, markets and rural spots. Poland is also <b>cheaper than most of Western Europe</b>, which is a pleasant surprise. Some tourist spots quote or take <b>euros at a poor rate</b>, so pay in <b>zloty</b>, and choose <b>zloty, not dollars</b> on any card or ATM.",
      sections: [
        {
          h: "Card-friendly, and it is zloty, not euros",
          icon: "phoneok",
          key: { fig: "Use zloty", tag: "Not the euro", text: "Poland is very card-friendly and contactless is everywhere, but the currency is the zloty, not the euro. Tourist spots may take euros at a poor rate, so pay in zloty.", tone: "teal" },
          p: [
            "Poland is <b>very card-friendly</b>. <b>Contactless</b> cards, Apple Pay and Google Pay are accepted almost everywhere, and <b>Visa and Mastercard</b> work widely. Locals also use the <b>BLIK</b> app, which you do not need as a visitor.",
            "The currency is the <b>Polish zloty (PLN)</b>, not the euro, despite EU membership. Some <b>tourist spots</b> quote prices in or accept <b>euros</b>, but at a <b>poor rate</b>, so it is better to <b>pay in zloty</b>. Keep a little zloty cash for <b>small shops, markets and rural areas</b>."
          ]
        },
        {
          h: "Choose zloty, not dollars",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose zloty", text: "When a terminal or ATM offers dollars or zloty, pick zloty. Dollars trigger dynamic currency conversion at a rate about 3 to 8% worse than your bank's.", tone: "amber" },
          p: [
            "When a card terminal or ATM asks whether to charge in <b>dollars or zloty, always choose zloty</b>. Dollars trigger dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. Decline it every time, and decline any euro option too.",
            "For cash, use an ATM (a <b>bankomat</b>) attached to a <b>real bank</b>, such as PKO Bank Polski or mBank, rather than a standalone <b>Euronet</b> kiosk, which charges high fees and pushes the dollar conversion."
          ]
        },
        {
          h: "A cheaper country, and paying",
          icon: "coins",
          key: { fig: "Good value", tag: "Cheaper than the West", text: "Poland is noticeably cheaper than Western Europe. A card covers most spending; keep a little zloty for small and rural spots.", tone: "teal" },
          p: [
            "A nice surprise: Poland is <b>noticeably cheaper</b> than Western Europe, so meals, transport and everyday costs go further. A <b>card covers most spending</b>, and you only need a <b>little zloty</b> for small shops, markets and rural spots.",
            "Use a <b>debit card</b> at the ATM to avoid cash-advance fees. For the wider picture, see the <a href='/poland'>Poland money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Poland?", a: "A little. Poland is very card-friendly and contactless is everywhere, so a card covers most spending. Keep some zloty for small shops, markets and rural areas." },
        { q: "Does Poland use the euro?", a: "No. Poland uses the Polish zloty (PLN), not the euro, even though it is in the EU. Some tourist spots take euros at a poor rate, so it is better to pay in zloty." },
        { q: "Should I pay in zloty or dollars in Poland?", a: "Always zloty. If a card machine or ATM offers dollars (or euros), decline: that dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
        { q: "Is Poland cheap to visit?", a: "It is noticeably cheaper than most of Western Europe, so meals, transport and everyday costs go further. A card covers most spending, with a little zloty for small and rural spots." }
      ],
      sources: {
        links: [
          { label: "Narodowy Bank Polski: official Polish zloty information", url: "https://www.nbp.pl", type: "gov" },
          { label: "US State Department: Poland country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Poland.html", type: "gov" }
        ],
        judgment: "Poland is very card-friendly, and the zloty-not-euro point is fixed rather than a rate quirk. The zloty rate moves, and the firm rule is to decline dollar conversion. Checked July 2026."
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
      title: "Bringing a dog or cat to Poland from the US 2026",
      description: "Poland runs on the shared EU health-certificate process, with no quarantine and no titer. What is Poland-specific on arrival and after you settle in.",
      h1: "Bringing your dog or cat to Poland.",
      lede: "Poland runs on the single EU pet-entry process for a US-origin dog or cat: microchip, rabies in the right order, and an EU health certificate on a 10-day clock. No quarantine, no rabies titer. Here is what that means for Poland, and the local parts worth knowing.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Poland uses the <b>shared EU pet-entry process</b>, so there is no separate national permit and nothing unusual at the border. Your pet needs an <b>ISO microchip, a rabies vaccination given after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS</b>, then must enter within <b>10 days</b> of that endorsement. There is <b>no quarantine and no rabies titer</b> for a pet coming straight from the US. The full step-by-step, the ordering trap, and the current fees are on one page: see <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a>. Below are the Poland-specific notes. Coming home to the US is the easy part.",
      sections: [
        {
          h: "Poland runs on the EU process",
          icon: "health",
          key: { fig: "10 days", tag: "No Poland-only permit", text: "The standard EU move: an ISO microchip first, a rabies shot after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS. Enter Poland within 10 days of that endorsement.", tone: "teal" },
          p: ["There is no Poland-only pet permit and no national quarantine. Bringing a dog or cat into Poland from the US is the standard EU move: an ISO microchip first, a rabies vaccination after the chip, then an EU Animal Health Certificate completed by a USDA-accredited vet and endorsed by APHIS, with the pet arriving within 10 days of endorsement. A first rabies shot adds a 21-day wait before travel.", "Because the core process is identical across the EU (and the countries that follow its rules), we do not repeat it per country. The full sequence, the microchip-before-rabies trap that costs people the most time, the 10-day clock, and the current APHIS endorsement fees all live on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Read that first, then come back for the Poland notes."]
        },
        {
          h: "The Poland-specific parts",
          icon: "receipt",
          key: { fig: "Check", tag: "At the border", text: "Polish customs may ask to see the endorsed certificate and confirm the chip, and pets should arrive through a designated traveller point of entry, which Warsaw Chopin is.", tone: "teal" },
          p: ["At the border, Polish customs may ask to see the endorsed certificate and confirm the microchip, and pets should enter through a designated traveller point of entry, which Warsaw airport is. There is no dog or cat tapeworm rule for Poland, unlike Ireland, Finland or Malta.", "After you arrive, Poland requires rabies vaccination to be kept current and, in many municipalities, an annual dog fee and local registration, with the amount set locally. Poland keeps a list of aggressive breeds that require a keeping permit from the municipality, so if your dog is a listed guarding or fighting type, check the requirement before you travel. Register and, where required, permit the dog once you have an address."]
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
          key: { fig: "Easy", tag: "The return trip", text: "A dog flying home from Poland is on the simplest CDC path: usually a CDC Dog Import Form receipt, a microchip, and a minimum age of 6 months.", tone: "teal" },
          p: ["Good news for the return trip: a dog flying home to the US from Poland is on the simplest CDC path, typically a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement.", "For the wider picture, including how Poland compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Poland",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-poland",
        note: "The US-side steps and the EU health certificate for Poland. Poland applies the shared EU process, and the destination's own authorities are the final word on the day."
      },
      faqs: [
        {
          q: "Is there anything Poland-specific beyond the EU rules?",
          a: "A little. Poland has no tapeworm rule (that applies to Ireland, Finland and Malta). Rabies vaccination must be kept current, many municipalities charge an annual dog fee, and Poland keeps a list of aggressive breeds that need a municipal keeping permit, so check if your dog is a listed type."
        },
        {
          q: "Does my pet have to go into quarantine in Poland?",
          a: "No. Poland applies the shared EU pet-entry process, which has no quarantine and no rabies titer for a pet coming straight from the US. Your pet needs a microchip, a rabies vaccination in the right order, and an EU Animal Health Certificate endorsed by APHIS, then must arrive within 10 days of endorsement. See our EU pet health certificate page for the full process."
        },
        {
          q: "Do I need to quarantine my pet coming back to the US from Poland?",
          a: "No. A dog returning to the US from Poland is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details."
        }
      ],
      sources: {
        links: [
          {
            label: "True Trip Costs: the EU pet health certificate, the shared microchip, rabies and certificate process for all EU countries including Poland",
            url: "/eu-pet-health-certificate",
            type: "internal"
          },
          {
            label: "USDA APHIS: pet travel from the United States to Poland, the US-side steps and EU health certificate",
            url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-poland",
            type: "gov"
          },
          {
            label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, for the return leg",
            url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html",
            type: "gov"
          }
        ],
        judgment: "Poland applies the shared EU pet-entry framework, set by the EU and administered on the US side by APHIS, not by us. The process is stable in substance, though the EU certificate format changes on 1 October 2026, which we cover on the EU pet health certificate page. The local registration and any breed rules vary, so we point you to the official pages and dated this July 2026."
      }
    },
    {
      slug: "money-scams",
      glance: [
        { k: "Most cost", v: "Small sums, avoidable" },
        { k: "Taxis", v: "Book an app, never accept" },
        { k: "Bars", v: "Skip the discount lure" },
        { k: "Your card", v: "Nobody calls to verify it" }
      ],
      live: true,
      topic: "scams",
      title: "Common money scams in Poland, and what they cost",
      description: "The unlicensed airport taxi, the bar that lures you with a discount, the fake call from reception and exchange booths with poor rates. What each costs, and how to sidestep it.",
      h1: "Common money scams in Poland, and what they cost you",
      lede: "Poland is a genuinely low-crime country, it sits at the calmest US advisory level, and violent crime against visitors is uncommon. Scams here are rare and usually small, and most travelers meet none of them. The short list worth knowing is: a driver who approaches you at the airport, a bar that hands out discount flyers, a phone call from someone claiming to be reception, and an exchange booth with a sign that is too good. Here is each one, what it costs, and how to sidestep it.",
      checked: "Aug 2026",
      checkedISO: "2026-08-15",
      answer: "Four things account for most of it. <b>Unlicensed taxis</b> at Warsaw Chopin, Krakow and the main stations, where a driver approaches you and the meter never quite works. <b>Bars and clubs that lure you with a discount</b>, which the Canadian government warns about directly, and where drinks have been spiked and cards overcharged. The fake <b>call from reception</b> asking you to confirm your card number. And <b>exchange booths and Euronet ATMs</b> quoting poor rates, alongside the <b>pay in dollars</b> prompt. The golden rules: <b>book a ride in an app</b>, <b>never follow a flyer or a tout into a bar</b>, <b>hang up and walk to the desk</b>, and <b>always choose zloty</b>.",
      sections: [
        {
          h: "The driver who approaches you",
          icon: "taxi",
          key: { fig: "Book it in the app", tag: "Not the arrivals hall", text: "The pattern is a friendly driver who reaches you before the official rank, with no meter running or a suspicious one, and a figure several times the real fare at the other end.", tone: "teal" },
          p: [
            "This is Poland's most reported tourist money problem and it is entirely avoidable. You land tired at <b>Warsaw Chopin</b>, or arrive at a main station, and a friendly English-speaking driver reaches you before you get to the official rank. The ride is fine. The number at the end is several times what a legitimate taxi would have charged, there is no meter running or the meter reads oddly, and refusing produces a scene rather than a negotiation. It is a markup, not a mugging, but it is an unpleasant first hour in a country.",
            "The fix is one habit: <b>never take a ride from someone who approaches you</b>. <b>Bolt</b> is the local favourite and usually cheapest, and <b>Uber and FreeNow</b> both work well; all three show the price before you confirm. If you want a traditional cab, use the <b>official rank</b>, take one with a company name and phone number printed on the car, and check the meter starts immediately. From the airports, the train or bus into the city is cheaper than all of it. The <a href=\"/poland/taxis-and-apps\">Poland taxis and apps guide</a> has the detail."
          ]
        },
        {
          h: "The bar with the discount flyer",
          icon: "cocktail",
          key: { tag: "Choose your own bar", text: "Canada's travel advice warns about bars and clubs that lure customers with promises of discounts, where drinks have been spiked and cards then overcharged. Pick your own venue and keep your card in sight.", tone: "teal" },
          p: [
            "This is the one worth real care, and it is government-documented rather than folklore. The Canadian government's Poland advice says plainly: exercise caution at <b>bars, nightclubs and adult entertainment venues that lure clients with promises of discounts</b>, because customers have been served <b>spiked drinks and then overcharged on their credit cards</b> while under the influence. It clusters in the nightlife streets of <b>Krakow and Warsaw</b>, and the approach is either a flyer, a tout, or a friendly stranger who knows a place.",
            "The escape is upstream and costs nothing: <b>choose your own venue</b> rather than accepting one that was offered to you. Canada's advice adds two more habits that fit this exactly: <b>never leave a drink unattended</b> or with a stranger, and be wary of accepting snacks, drinks, gum or cigarettes from new acquaintances. Keep your card in sight when you pay, and turn on <b>transaction alerts</b> so an unexpected charge reaches your phone that night rather than a month later. Canada also notes that <b>credit card and ATM fraud happen particularly at bars and nightclubs</b>, so paying cash for a night out in an unfamiliar venue caps the downside neatly."
          ]
        },
        {
          h: "The call from reception",
          icon: "card",
          key: { tag: "Hang up, walk down", text: "A late call from someone claiming to be the front desk asks you to confirm your card number for a problem with the booking. A real hotel does not do this. Hang up and walk to the desk.", tone: "teal" },
          p: [
            "This one is widely reported by travelers in Poland and it is worth knowing precisely because it is so easy to fall for while half asleep. The room phone rings late. The caller apologizes for the hour, says there is a problem with the card on your booking, and asks you to <b>read out the number</b> to fix it. It sounds routine, you are tired, and the card is right there in your wallet. The charges follow.",
            "The rule is absolute and takes two minutes: <b>no legitimate hotel asks for a full card number over the phone</b>. Hang up, and if you are unsure whether it was real, <b>walk down to the front desk and ask in person</b>. Do not call back a number the caller gave you. The same principle covers everything else in this family: nobody who calls, emails or messages you needs your full card number, your PIN or a code from your bank's text message. Canada's advice also flags <b>public Wi-Fi</b> being compromised to harvest card details, so avoid entering card numbers on an open network."
          ]
        },
        {
          h: "Exchange booths, Euronet, and the dollars prompt",
          icon: "atm",
          key: { tag: "Choose zloty", text: "Old Town kantors advertising an unbeatable rate usually have a catch, and standalone Euronet ATMs charge heavily. Use a bank ATM and choose zloty on every terminal.", tone: "amber" },
          p: [
            "Nothing here is illegal, which is why nobody warns you. In the Old Town areas of Krakow, Warsaw and Gdansk, an exchange booth, a <b>kantor</b>, may advertise a rate that beats everyone. The catch is usually a fee revealed at the counter, or a rate that applies only to amounts you are not exchanging. Kantors themselves are a normal and generally good way to change money in Poland; it is the tourist-street ones with the unbeatable sign that are worth walking past. <b>Ask exactly how many zloty you will receive</b> before handing anything over, and count it before you leave.",
            "The standalone <b>Euronet</b> machines, blue and yellow, cluster in tourist areas and charge high fees while pushing the conversion prompt. Use an ATM attached to a real bank instead. And on every card machine and ATM, choose <b>zloty</b> rather than dollars, since the dollar option uses a marked-up rate that costs a few percent each time. Poland kept the zloty, so places accepting euros set their own rate too. The <a href=\"/poland/cash-or-card\">Poland cash and cards guide</a> covers it."
          ]
        },
        {
          h: "What this means for your money",
          icon: "coins",
          key: { fig: "Habits", tag: "How to avoid it", text: "Book rides in an app, choose your own bar, hang up on anyone asking for a card number, and choose zloty everywhere. Report anything before you leave the country, since you cannot do it afterwards.", tone: "teal" },
          p: [
            "Poland is cheaper and calmer than most of Western Europe, and the whole list here is four habits: <b>book rides in an app rather than accepting one</b>, <b>choose your own bar rather than a flyer's</b>, <b>hang up on anyone asking for a card number</b>, and <b>choose zloty at every terminal</b>. One practical detail from Canada's advice is worth carrying because it is easy to get wrong: <b>report any crime to Polish police before you leave the country</b>, since a police report cannot be filed once you have gone, and your insurer will want one.",
            "One quirk that is not a scam but does cost small change: saying <b>dziekuje</b> as you hand a server your money is commonly read as keep the change, so save it until after you have your change if you want it back. That and the rest of the tipping norms are in the <a href=\"/poland/tipping\">Poland tipping guide</a>. For getting and spending money well while you are there, see the <a href=\"/poland/cash-or-card\">Poland cash and cards guide</a> and the <a href=\"/poland\">Poland cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Poland safe for tourists?", a: "Yes. Poland is a low-crime country at the calmest US advisory level, violent crime against visitors is uncommon, and most travelers meet no scams at all. The short list worth knowing is unlicensed taxis at airports and stations, bars that lure you with discounts, a fake call from reception asking for your card number, and exchange booths with poor rates." },
        { q: "How do I avoid taxi scams at Warsaw Chopin Airport?", a: "Never accept a ride from a driver who approaches you in the arrivals hall. Book Bolt, Uber or FreeNow, which all show the price before you confirm, or use the official taxi rank and take a car with a company name and phone number printed on it, checking the meter starts immediately. The train or bus into the city is cheaper again." },
        { q: "Are bar scams a real risk in Krakow and Warsaw?", a: "They are documented by the Canadian government, which advises caution at bars, nightclubs and adult entertainment venues that lure customers with promises of discounts, where drinks have been spiked and credit cards then overcharged. It also notes that card and ATM fraud occur particularly at bars and nightclubs. Choose your own venue rather than one handed to you on a flyer." },
        { q: "Did my hotel really call to verify my credit card number?", a: "Almost certainly not. A late call from someone claiming to be the front desk, asking you to read out your card number to fix a problem with the booking, is a widely reported scam in Poland. No legitimate hotel asks for a full card number by phone. Hang up, and if in doubt walk down to the desk and ask in person rather than calling a number the caller gave you." },
        { q: "Where should I change money in Poland?", a: "A kantor, or exchange office, is a normal and generally good option, but skip the tourist-street ones advertising an unbeatable rate, and ask exactly how many zloty you will receive before handing anything over. Avoid standalone Euronet ATMs, which charge high fees. Use an ATM attached to a real bank, and always choose zloty rather than dollars." },
        { q: "What should I do if I am scammed in Poland?", a: "Report it to the local police before you leave the country. Canada's travel advice notes specifically that you cannot complete a police report after leaving Poland, and your travel insurer will normally want one. Emergency numbers are 112, or 997 for police. Contact your card issuer straight away for anything card-related, and keep every receipt." }
      ],
      sources: {
        links: [
          { label: "Government of Canada: Poland travel advice, including discount-lure bars, card fraud at nightlife venues and reporting crimes before departure", url: "https://travel.gc.ca/destinations/poland", type: "gov" },
          { label: "UK FCDO: Poland travel advice, safety and security", url: "https://www.gov.uk/foreign-travel-advice/poland/safety-and-security", type: "gov" }
        ],
        judgment: "The discount-lure bar scam with spiked drinks and card overcharging, the note that card and ATM fraud occur particularly at bars and nightclubs, the warning about accepting snacks, drinks, gum or cigarettes from new acquaintances, the public Wi-Fi risk and the requirement to report a crime before leaving Poland all come from current Government of Canada travel advice. The unlicensed taxi overcharge and the fake call from reception are consistently reported by travelers and travel media rather than named in a government advisory, so we have described them as reported and given the escape rather than attaching figures. We have deliberately not repeated a claim circulating online that Warsaw airport taxi complaints fell by a set percentage after a January 2026 fixed-rate change, because we could not source it. Zloty conversions use roughly 3.8 to the dollar. Checked August 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Excellent, countryside included" },
        { k: "Carrier roaming", v: `${S.dayPassGlance}` },
        { k: "Cheapest", v: "A local SIM under $10, EU-wide" },
        { k: "Signal gaps", v: "None worth planning around" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "Poland SIM card: under $10, and it works EU-wide",
      description: "A Play or Plus starter is under 10 dollars for tens of gigabytes, and because Poland is in the EU it roams across the union at no extra cost. Hard to beat on a Europe trip.",
      h1: "Staying connected in Poland.",
      lede: "Poland has some of the cheapest mobile data in Europe on a network that is genuinely good, and because it is in the EU that data follows you across the union. If Poland is your first stop of several, this page is worth reading before you buy anything.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>excellent</b> across the cities, the countryside and the rail network, so there is nothing to plan around. The interesting part is price. A <b>local prepaid starter</b> from <b>Play</b>, <b>Plus</b>, <b>Orange</b> or <b>T-Mobile Polska</b> costs <b>under 10 dollars</b> for tens of gigabytes, needs your <b>passport</b> because Poland has required prepaid registration since 2016, and because Poland is in the <b>EU</b> that allowance travels with you across the union under <b>Roam Like At Home</b>. Your US carrier charges about <b>${S.dayPass}</b> (<b>AT&amp;T and Verizon</b> day passes), though <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, and covers the rest of that bill period on land, so the daily arithmetic stops past day 10, and <b>T-Mobile</b>'s mid and upper tiers include <b>${S.tmoRange}</b> of high-speed data abroad before slowing to <b>${S.throttle}</b>. A <b>Nomad eSIM</b> is a few dollars per gigabyte and is simpler, with nothing to buy on arrival. On price, for a trip of a week or more, the Polish SIM is hard to beat. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "The cheapest data in Europe, and it crosses borders",
          icon: "tag",
          key: { fig: "Under $10", tag: "For tens of GB", text: "A Play or Plus starter is a few dollars for a large allowance, and EU roaming rules mean it works across the union at no extra cost.", tone: "teal" },
          p: [
            "Polish prepaid is aggressively cheap. A <b>Play</b> or <b>Plus</b> starter with a data bundle runs <b>under 10 dollars</b> for tens of gigabytes over a month, sold in phone shops, Zabka convenience stores and at the airports, with your <b>passport</b> for registration. The networks are good: <b>Play</b> and <b>Orange</b> both have strong nationwide reach and 5G in the cities.",
            "The part that makes this genuinely competitive rather than merely cheap is <b>Roam Like At Home</b>. Poland is in the EU, so a Polish prepaid allowance works in <b>Germany, Czechia, Italy, Spain and the rest of the union</b> at no surcharge, subject to a fair-use policy aimed at permanent roaming rather than a three-week trip. If Warsaw or Krakow is your first stop on a multi-country European trip, one Polish SIM can cover the whole thing for less than a travel eSIM would cost for one leg. It does not cover the <b>UK or Switzerland</b>, which are both outside the zone."
          ]
        },
        {
          h: "What the eSIM is actually buying you here",
          icon: "qr",
          key: { fig: "Few $/GB", tag: "The simpler option", text: "A travel eSIM costs more per gigabyte than Polish prepaid and needs no shop visit, no passport at a counter and no Polish. That is the trade.", tone: "teal" },
          p: [
            "We earn a commission on eSIMs and none on a Play starter, so it is worth being plain: in Poland the eSIM is not the cheap option, it is the frictionless one. A <b>Nomad eSIM</b> is a few dollars per gigabyte, activates before you fly and works from landing, with no shop, no queue, no registration form and no need to work out which bundle code to text.",
            "For a long weekend in Krakow that convenience is worth more than the few dollars it costs. For two weeks moving across central Europe, the Polish SIM wins clearly and it is not close. Both are far cheaper than roaming, so the worst outcome here is only mildly wrong."
          ]
        },
        {
          h: "Coverage, and nothing much else",
          icon: "phoneok",
          key: { fig: `${S.dayPassFig}`, tag: "Roaming default", text: `AT&T caps its Day Pass at 10 daily fees per bill period. T-Mobile's mid and upper tiers include ${S.tmoRange} of high-speed data abroad.`, tone: "teal" },
          p: [
            "This section is short because Poland does not give us much to warn about. Coverage is strong in <b>Warsaw, Krakow, Gdansk and Wroclaw</b>, across the countryside, on the trains and in the <b>Tatra</b> foothills, with 5G widespread in the cities. High in the Tatras and deep in the <b>Bialowieza</b> forest you can lose it, which is a hiking note rather than a trip-planning one.",
            `On the alternatives: <b>AT&amp;T and Verizon</b> day passes are about <b>${S.dayPass}</b> and <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, and covers the rest of that bill period on land, so the daily arithmetic stops past day 10, and <b>T-Mobile</b>'s current tiers include roughly <b>${S.tmoLow}</b> on Experience More, Magenta MAX and Go5G Plus, <b>${S.tmoMid}</b> on Experience Beyond and Go5G Next and <b>${S.tmoHigh}</b> on Better Value. Do not roam with <b>no plan</b>, since pay-per-use is about <b>${S.ppu}</b>. This guide is written for US travelers departing the US. For more, see <a href='/poland/cash-or-card'>cash or card in Poland</a>, <a href='/poland/taxis-and-apps'>taxis and apps in Poland</a>, and the <a href='/poland'>Poland money guide</a>.`
          ]
        }
      ],
      faqs: [
        { q: "Is a Polish SIM card cheaper than an eSIM?", a: "Yes, clearly, for any stay of about a week or more. A Play or Plus starter is under 10 dollars for tens of gigabytes, where a travel eSIM costs a few dollars per gigabyte. The eSIM buys you no shop visit and no registration form, which is worth something on a long weekend and not much on a longer trip." },
        { q: "Does a Polish SIM work in other EU countries?", a: "Yes. Poland is in the EU, so a Polish prepaid allowance works across the union under Roam Like At Home at no surcharge, subject to a fair-use policy aimed at permanent roaming rather than a normal trip. It does not cover the UK or Switzerland, both of which sit outside the zone." },
        { q: "Do I need a passport to buy a SIM card in Poland?", a: "Yes. Poland has required prepaid SIM registration since 2016, so bring your passport to the shop. It is a counter formality rather than a wait, and the SIM works immediately." },
        { q: "How much does it cost to use my US phone in Poland?", a: `About ${S.dayPass} on an AT&T or Verizon day pass, so roughly ${S.week} a week. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad before slowing to ${S.throttle}.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "European Commission: how EU roaming works and which countries are covered", url: "https://europa.eu/youreurope/citizens/consumers/telecoms-internet/mobile-roaming-costs/index_en.htm", type: "official" },
          { label: "Play: prepaid starter and data bundle pages", url: "https://www.play.pl/", type: "official" }
        ],
        judgment: "Checked Aug 2026. The load-bearing point is the one that costs us a commission: Polish prepaid is cheap enough, and EU roaming broad enough, that one starter bought in Krakow can cover a multi-country European trip for less than an eSIM would cost for a single leg. The fair-use policy attached to EU roaming is aimed at people permanently roaming on a foreign SIM rather than a traveler on a three-week trip, so it is mentioned rather than dwelt on. Polish prepaid bundle sizes move with promotions, so the under-10-dollars figure is the current shape of the market."
      }
    }
  ]
};
