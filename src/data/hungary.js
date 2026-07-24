export default {
  slug: "hungary",
  iso2: "hu",
  live: true,
  name: "Hungary",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-16",
  sources: {
    changed: "First publication. Confirmed the money facts that matter most this year: the forint sits at about 315 to the US dollar, cards are widely taken, and Hungary has the highest VAT in the EU at 27%, which also means the best tourist refund in Europe, about 18% back after fees. Budapest charges a 4% tourist tax on the room. On entry, the EU's biometric Entry/Exit System went live in April 2026, and a US passport is still all you need for now.",
    links: [
      { label: "National Tax and Customs Administration (NAV): the 27% VAT and the tax-free refund for non-EU travelers", url: "https://nav.gov.hu/en", type: "revenue" },
      { label: "European Union travel portal: the Entry/Exit System (EES) now in operation at Schengen borders, and ETIAS due to follow", url: "https://travel-europe.europa.eu/ees_en", type: "gov" },
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

  title: "Money in Hungary (2026): Cards, Cash, Forint, ATMs, Taxes and Tipping | True Trip Costs",
  description: "How to handle money in Hungary as a US traveler in 2026: widely accepted cards, the forint cash you still want for markets and baths, why it is not euros, the exchange-booth and Euronet ATM traps, the dollar-conversion trap, the 27% VAT and Europe's best refund, Budapest's tourist tax, and how tipping works. Checked July 2026.",

  h1: "Money in Hungary, sorted.",
  lede: "A calm, current plan for the money side of your trip: where your card is fine and where forint still helps, the ATMs and exchange booths to skip, the taxes to know, and why shopping here earns the best VAT refund in Europe.",
  hero: {
    img: "/hungary-hero.jpg",
    h: 1375,
    alt: "A quiet Budapest castle-district street at dusk with warm string lights overhead, pale stone townhouses with glowing windows, and the colorful diamond-tiled roof and slim spire of Matthias Church rising against a deep teal sky. A lone figure seen from behind walks away up the cobbled street toward the church, and in the foreground on a wooden table sits a steaming bowl of paprika-red goulash with a torn piece of bread beside it"
  },

  recentChange: {
    date: "Jul 2026",
    text: "The way you cross the border changed in 2026, though not the cost. Since April 2026 the EU's <b>Entry/Exit System (EES)</b> has been live: instead of a passport stamp, you give a quick fingerprint and photo at the border, which then tracks your 90 days automatically. There is <b>no fee and no form</b>. A separate online authorization, <b>ETIAS</b>, is due to start in late 2026 and will add a small fee once it applies, but for now a US passport is all you need."
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
      "At the border you will now be fingerprinted and photographed under the new <b>EES</b> system. There is no fee and no form, and a US passport is all you need for now."
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
    { q: "Do you tip in Hungary?", a: "A little more than elsewhere in Europe: around 10% for good table service. Check the bill first for a service charge (szervizdij), often already added. When tipping, tell the server the total you want to pay rather than leaving cash on the table." },
    { q: "Do I need a visa or ETIAS for Hungary?", a: "Not right now. US citizens visit visa-free for up to 90 days in any 180. Since April 2026 you give a fingerprint and photo at the border under the new EES system, with no fee and no form. ETIAS, a small online authorization fee, is due to start in late 2026." }
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
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "10 to 15%, customary" },
        { k: "Restaurants", v: "Round up, or state the total" },
        { k: "Check the bill", v: "Some add a service charge" },
        { k: "Currency", v: "Forint (not euros)" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Hungary: 10 to 15%, and the service charge (2026) | True Trip Costs",
      description: "How tipping works in Hungary for US travelers in 2026: why 10 to 15% is customary, how to leave it, the service charge some Budapest spots add, and why you tip in forint. Checked July 2026.",
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
      title: "Do I need cash in Hungary, or can I use cards? (2026) | True Trip Costs",
      description: "Some. Hungary is card-friendly in Budapest, but the currency is the forint, not the euro, with notes in the thousands. Carry some forint, pay in forint, and choose forint not dollars. Checked July 2026.",
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
      title: "Bringing a dog or cat to Hungary from the US (2026): the EU process, and the Hungary-specific parts | True Trip Costs",
      description: "Moving to Hungary with a pet from the US: why it runs on the shared EU health-certificate process, no quarantine and no titer, plus what is specific to Hungary on arrival and after you settle in. Checked July 2026.",
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
    }
  ]
};
