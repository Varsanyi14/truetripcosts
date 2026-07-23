export default {
  slug: "poland",
  iso2: "pl",
  live: true,
  name: "Poland",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-16",
  sources: {
    changed: "First publication. Confirmed the money facts that matter most this year: the zloty sits at about 3.8 to the US dollar, Poland is one of the most cashless countries in Europe, and there is no city or tourist tax in Krakow, Warsaw or most cities, only a small local climate fee in designated resort and spa towns. VAT is 23%, and non-EU visitors can reclaim it on shopping over 200 zloty per store. On entry, the EU's biometric Entry/Exit System went live in April 2026, and a US passport is still all you need for now.",
    links: [
      { label: "Krakow Airport: tax-free shopping for non-EU visitors, the 23% VAT, the 200 zloty minimum per receipt and the customs confirmation on departure", url: "https://www.krakowairport.pl/en/passenger/travel/shopping/tax-refund", type: "revenue" },
      { label: "European Union travel portal: the Entry/Exit System (EES) now in operation at Schengen borders, and ETIAS due to follow", url: "https://travel-europe.europa.eu/ees_en", type: "gov" },
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

  title: "Money in Poland (2026): Cards, Cash, Zloty, ATMs, Taxes and Tipping | True Trip Costs",
  description: "How to handle money in Poland as a US traveler in 2026: near-universal cards and mobile pay, the little cash you still want, why it is zloty and not euros, the Euronet ATM trap, the dollar-conversion trap, the 23% VAT refund on shopping, city taxes, and how tipping works. Checked July 2026.",

  h1: "Money in Poland, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your card covers almost everything, the small amount of zloty worth carrying, the ATMs to avoid, and the taxes to know in a country that is cheaper than most of Europe.",
  hero: {
    img: "/poland-hero.jpg",
    h: 1375,
    alt: "A quiet Krakow old-town street at dusk with warm string lights strung between pastel townhouses whose tall windows glow amber, cobblestones underfoot, and the two uneven brick towers of St Mary's Basilica rising against a deep teal sky. A lone figure seen from behind walks away down the street toward the towers, and in the foreground on a wooden table sits a plate of pierogi with a dollop of sour cream beside a small bowl of ruby-red barszcz, gently steaming"
  },

  recentChange: {
    date: "Jul 2026",
    text: "The way you cross the border changed in 2026, though not the cost. Since April 2026 the EU's <b>Entry/Exit System (EES)</b> has been live: instead of a passport stamp, you give a quick fingerprint and photo at the border, which then tracks your 90 days automatically. There is <b>no fee and no form</b>. A separate online authorization, <b>ETIAS</b>, is due to start in late 2026 and will add a small fee once it applies, but for now a US passport is all you need."
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
      "At the border you will now be fingerprinted and photographed under the new <b>EES</b> system. There is no fee and no form, and a US passport is all you need for now."
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
    { q: "Do I need a visa or ETIAS for Poland?", a: "Not right now. US citizens visit visa-free for up to 90 days in any 180. Since April 2026 you give a fingerprint and photo at the border under the new EES system, with no fee and no form. ETIAS, a small online authorization fee, is due to start in late 2026." }
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
      slug: "bringing-your-pet",
      live: true,
      topic: "pets",
      title: "Bringing a dog or cat to Poland from the US (2026): the EU process, and the Poland-specific parts | True Trip Costs",
      description: "Moving to Poland with a pet from the US: why it runs on the shared EU health-certificate process, no quarantine and no titer, plus what is specific to Poland on arrival and after you settle in. Checked July 2026.",
      h1: "Bringing your dog or cat to Poland.",
      lede: "Poland runs on the single EU pet-entry process for a US-origin dog or cat: microchip, rabies in the right order, and an EU health certificate on a 10-day clock. No quarantine, no rabies titer. Here is what that means for Poland, and the local parts worth knowing.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Poland uses the <b>shared EU pet-entry process</b>, so there is no separate national permit and nothing unusual at the border. Your pet needs an <b>ISO microchip, a rabies vaccination given after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS</b>, then must enter within <b>10 days</b> of that endorsement. There is <b>no quarantine and no rabies titer</b> for a pet coming straight from the US. The full step-by-step, the ordering trap, and the current fees are on one page: see <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a>. Below are the Poland-specific notes. Coming home to the US is the easy part.",
      sections: [
        {
          h: "Poland runs on the EU process",
          p: ["There is no Poland-only pet permit and no national quarantine. Bringing a dog or cat into Poland from the US is the standard EU move: an ISO microchip first, a rabies vaccination after the chip, then an EU Animal Health Certificate completed by a USDA-accredited vet and endorsed by APHIS, with the pet arriving within 10 days of endorsement. A first rabies shot adds a 21-day wait before travel.", "Because the core process is identical across the EU (and the countries that follow its rules), we do not repeat it per country. The full sequence, the microchip-before-rabies trap that costs people the most time, the 10-day clock, and the current APHIS endorsement fees all live on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Read that first, then come back for the Poland notes."]
        },
        {
          h: "The Poland-specific parts",
          p: ["At the border, Polish customs may ask to see the endorsed certificate and confirm the microchip, and pets should enter through a designated traveller point of entry, which Warsaw airport is. There is no dog or cat tapeworm rule for Poland, unlike Ireland, Finland or Malta.", "After you arrive, Poland requires rabies vaccination to be kept current and, in many municipalities, an annual dog fee and local registration, with the amount set locally. Poland keeps a list of aggressive breeds that require a keeping permit from the municipality, so if your dog is a listed guarding or fighting type, check the requirement before you travel. Register and, where required, permit the dog once you have an address."]
        },
        {
          h: "Coming back to the US is the easy part",
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
    }
  ]
};
