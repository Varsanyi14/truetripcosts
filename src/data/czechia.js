export default {
  slug: "czechia",
  iso2: "cz",
  live: true,
  name: "Czechia",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  sources: {
    changed: "Sources added. Verified with the City of Prague that the local accommodation fee is 50 koruna per person per night (doubled from 21 in 2022), capped by national law, applying to the first 60 nights, with under-18s exempt. Standard Czech VAT is 21%, and non-EU visitors can reclaim it on shopping. The guide's figures are current.",
    links: [
      { label: "City of Prague: the local tourist fee, 50 koruna per person per night since 2022, under Act 565/1990", url: "https://sdileneubytovani.praha.eu/jnp/en/for_accommodation_providers/local_tourist_fee.html", type: "gov" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "112", note: "112 reaches every service, and 155 goes straight to an ambulance.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  region: "Europe",
  signals: { cardFriendliness: 4, cashNeed: 2, taxRisk: 3, atmRisk: 4 },
  hook: "One of Europe's most card-friendly countries, with a small Prague city fee and a couple of tourist-money traps to dodge.",
  aliases: ["czech republic", "czech", "prague", "praha", "brno", "cesky krumlov", "karlovy vary", "plzen", "pilsen", "koruna", "czk", "bohemia", "moravia"],

  title: "Cash or card in Prague? Czechia money in 2026",
  description: "Cards work almost everywhere, so you need little cash. It is koruna, not euros, and the yellow tourist ATMs are the ones to walk past. Checked 2026.",

  h1: "Money in Czechia, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your tap-to-pay card covers almost everything, the two tourist traps that quietly cost the most, and the small nightly city fee in Prague.",
  hero: {
    img: "/czechia-hero.jpg",
    h: 1375,
    alt: "A colorful Prague old-town street at dusk with pastel townhouses and red-tiled roofs, string lights strung across the lane, the twin Gothic spires of the Tyn Church silhouetted against an orange sunset, a lone figure walking away down the cobblestones, and a plate of roast pork with bread dumplings, red cabbage and pickles beside a tall glass of golden Czech beer on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Czechia is one of Europe's most card-friendly countries, and Prague is close to tap-to-pay everywhere. Bring a <b>no-foreign-fee Visa or Mastercard</b> and you can pay for almost everything by contactless card, phone or watch. Keep a little cash, <b>about 1,000 to 2,000 koruna</b>, for pubs outside the center, market stalls, tips and paid restrooms, and pull it from a <b>bank ATM</b> (ČSOB, Komerční banka, Česká spořitelna, Raiffeisenbank), never a bright yellow Euronet machine. Two habits save the most money: <b>always choose koruna, never dollars</b>, and skip the tourist-area street exchange booths. If you are staying in Prague, add the small nightly city fee to your budget.",

  meter: {
    heading: "Very card-friendly, with a little cash for pubs and small towns.",
    cashPct: 30,
    note: "A rough feel for everyday spending. Cards and contactless work almost everywhere in Prague and the cities, on transit, in shops, restaurants and supermarkets. You still want a little koruna for neighborhood pubs, market stalls, small-town bakeries, tips and paid public toilets, and cash leans more useful the further you get from the tourist center."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are taken nearly everywhere in cities and towns, contactless is the norm, and Apple Pay and Google Pay are widely accepted. Amex is patchier at small spots. The odd neighborhood pub, bakery or market stall is still cash only or sets a small card minimum.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "A little, for the small stuff", p: "You do not need much. Keep about 1,000 to 2,000 Kč in small notes for pubs off the tourist strip, markets, tips, paid restrooms and small towns. A 200 note is far easier to spend than a 2,000.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Easy, but avoid the yellow ones", p: "Bank ATMs (ČSOB, Komerční banka, Česká spořitelna, Raiffeisenbank, UniCredit) are all over the cities. Avoid the bright yellow standalone Euronet machines at tourist sites, which charge the most and push the dollar conversion. Read the on-screen fee and decline \"convert to dollars.\"", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> with contactless for nearly everything, plus a backup card from a different bank.",
      "Get a <b>no-foreign-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "You will need little cash, so plan to pull a modest amount of koruna once you land rather than buying it at home."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters and currency kiosks, the rates are poor.",
      "Pull koruna from a <b>bank ATM</b> (ČSOB, Komerční banka, Česká spořitelna, Raiffeisenbank) and <b>decline \"convert to USD.\"</b>",
      "Avoid the bright yellow Euronet ATMs, even the ones at the airport and in the arrivals hall."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card or phone</b> for shops, supermarkets (Albert, Billa, Lidl, Tesco), restaurants, museums and transit.",
      "<b>Cash</b> for neighborhood pubs, market stalls, small-town bakeries, tips and paid public toilets.",
      "In tourist-area restaurants, check the bill for a cover charge (couvert) or service charge before you add a tip.",
      "<b>Always choose koruna</b>, never dollars, on every card terminal and ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in koruna, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "Ignore the \"0% commission\" street exchange booths; a bank ATM gives you a fairer rate with less hassle."
    ], cta: null }
  ],

  cash: {
    rate: 22, cur: "CZK", round: 100, defaultIndex: 1,
    rateNote: "Rough guide at about 22 koruna to the dollar in mid-2026, so 100 Kč is roughly $4.50 and 1,000 Kč about $45. The koruna moves against the dollar, so check a current converter before you travel.",
    styles: [
      { n: "Budget", per: 45, cash: 0.3, room: 60 },
      { n: "Mid-range", per: 100, cash: 0.25, room: 120 },
      { n: "Comfort", per: 240, cash: 0.2, room: 240 }
    ]
  },

  connectivity: {
    works: "Very good, and cheap. The three networks, O2, T-Mobile and Vodafone, all give strong 4G and growing 5G across Prague, the other cities and most of the countryside, with only the odd dead spot in deep forest or on rural train lines. A local prepaid SIM is easy to buy, and eSIMs from Airalo, Nomad, Ubigi or Holafly work well if your phone supports them. You do not need mobile data to pay for anything, cards and contactless stand on their own, so data is really just for maps, transit apps and calling a taxi."
  },

  // TOURIST TAX / FEES (high-churn, verified to Jul 2026 knowledge; confirm the Prague figure).
  // Czechia levies a local accommodation fee ("poplatek z pobytu"), capped by national law at
  // 50 Kč per person per night. Municipalities set their own rate up to that cap: Prague charges
  // the full 50 Kč, many tourist towns charge up to it, and lots of small places charge nothing.
  // Children under 18 are exempt, and the fee applies only to the first 60 consecutive nights.
  tax: {
    unit: "perPersonPerNight",
    currency: "CZK",
    capNights: 60,
    note: "A small local accommodation fee, capped by national law at 50 Kč per person, per night, and added to your hotel bill. The rate is set by each municipality up to that cap. Children under 18 are exempt, and it applies only to the first 60 consecutive nights.",
    regions: [
      { key: "prague", label: "Prague", rate: 50, note: "Prague charges the full national maximum of 50 Kč per person, per night." },
      { key: "towns", label: "Other cities and tourist towns", rate: 30, note: "Karlovy Vary, Český Krumlov, Brno, Plzeň and other towns set their own fee up to the 50 Kč cap; many popular ones are at or near it, so this is a middle estimate." },
      { key: "other", label: "Villages and countryside", rate: 0, note: "Many small municipalities charge no accommodation fee at all." }
    ]
  },

  currencyHeading: "The koruna, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "At about 22 koruna to the dollar in mid-2026, 100 Kč is roughly $4.50, 500 Kč about $23, and 1,000 Kč about $45. To sanity-check a price fast, divide the koruna figure by 22." },
    { sym: "smallnotes", k: "Notes and coins", v: "Notes run 100, 200, 500, 1,000, 2,000 and 5,000 Kč; coins are 1, 2, 5, 10, 20 and 50 Kč. Small shops and pubs dislike breaking the 2,000 and 5,000, so ask the ATM for a mix where you can, and spend the big notes in supermarkets." },
    { sym: "usd", k: "It's koruna, not euros", v: "Czechia is in the EU but does not use the euro; it uses the koruna (Kč). Some tourist-area hotels, shops and restaurants will take euros, but the rate they give is poor, so pay in koruna whenever you can." },
    { sym: "tip", k: "Tipping is light", v: "No US-style percentage is expected. Round up, or leave about 10% for good restaurant service, usually by telling the server the total when you pay. See the tipping section below." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "A small city fee, plus money back on shopping.",
    text: "Prague and many Czech tourist towns add a small <b>local accommodation fee</b> to your room, capped by national law at <b>50 Kč per person, per night</b> (Prague charges the full amount), with <b>children under 18 exempt</b>. Everyday prices already include VAT, a <b>21%</b> standard rate with a reduced <b>12%</b> on things like hotel stays and restaurant food, so the figure on the tag or menu is what you pay. If you shop, non-EU visitors can reclaim part of the 21% VAT on goods (not services): spend <b>over 2,000 Kč</b> in one store, ask for a tax-free form, keep the goods unused, and have customs stamp it when you leave the EU. After the refund operator's fee, expect back roughly 12 to 17%, not the full 21%. There is no separate departure tax; it is built into your airfare."
  },

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> Card terminals and ATMs in tourist areas love to offer to charge you in dollars (dynamic currency conversion). It quietly adds 3 to 8%. Choose koruna every time.",
    "<b>Skip the bright yellow Euronet ATMs.</b> They cluster around the tourist sights, charge high fees, and push the dollar-conversion trick. Use a bank machine instead: ČSOB, Komerční banka, Česká spořitelna, Raiffeisenbank or UniCredit.",
    "<b>Avoid the street exchange booths.</b> The tourist-area kiosks (\"směnárna\") that advertise \"0% commission\" often give a terrible rate, or quote one rate and hand over less. A Czech law lets you cancel a bad exchange within three hours, but it is far simpler to pull koruna from a bank ATM and skip them.",
    "<b>Read the bill, and pick your taxi.</b> Some tourist-area restaurants add a cover charge (couvert) for bread or a service charge, so check before you tip. For taxis, order through Bolt or Uber or have your hotel call one, rather than hailing on the street, where overcharging is a long-running Prague problem."
  ],

  tippingHeading: "Round up, or about 10% for good service.",
  tipping: "Tipping in Czechia is light and not the US 18 to 20%. In a restaurant, leave around 10% for good service, or just round up at a casual spot. The local habit is to tell the server the total you want to pay, tip included, when they take your card or cash, rather than leaving coins on the table and walking off. Card terminals often have no tip line, so a <b>cash tip</b> is the easy way to do it. In tourist-area restaurants, check whether a service charge is already on the bill before adding more. Round up for taxis and in pubs, and leave 20 to 50 Kč for hotel porters or housekeeping. None of it is obligatory; staff are paid a wage.",

  faqs: [
    { q: "Do I need cash in Czechia?", a: "Not much. Prague and the Czech cities are very card-friendly, with contactless almost everywhere. Keep about 1,000 to 2,000 Kč on hand for neighborhood pubs, markets, tips and paid restrooms, and top up at a bank ATM if you run low. Cards and your phone cover nearly everything else." },
    { q: "Should I pay in koruna, dollars or euros in Czechia?", a: "Always koruna. If a card terminal or ATM offers to charge you in dollars, decline; that dynamic currency conversion adds roughly 3 to 8%. And although some tourist spots accept euros, the rate they give is poor, so the koruna price is the better deal." },
    { q: "What is the best ATM to use in Prague?", a: "Use a bank-branded machine: ČSOB, Komerční banka, Česká spořitelna, Raiffeisenbank or UniCredit. Avoid the bright yellow standalone Euronet ATMs that cluster around the tourist sights, which charge high fees and push the dollar conversion. Read the on-screen fee and decline \"convert to dollars.\"" },
    { q: "Do you tip in Czechia?", a: "Lightly. Around 10% for good restaurant service, or just round up at casual spots and for taxis, and 20 to 50 Kč for hotel porters or housekeeping. Tell the server the total you want to pay, tip included, when they take your card or cash; a cash tip is easiest since terminals often have no tip line. Check for a service charge before adding more." },
    { q: "What is Czechia's tourist tax?", a: "A local accommodation fee, capped nationally at 50 Kč per person, per night, and added to your hotel bill. Prague charges the full 50 Kč; other towns set their own up to that cap, and many small places charge nothing. Children under 18 are exempt, and it applies only to the first 60 consecutive nights." },
    { q: "How much cash should I bring for a week in Czechia?", a: "For two mid-range travelers, very roughly 3,000 to 5,000 Kč (about $140 to $230) in day-to-day cash across a week beyond your hotel, pulled from a bank ATM once or twice. Cards and your phone cover the great majority of spending; the cash is for pubs, markets, tips and the odd cash-only spot." }
  ],

  culture: {
    heading: "A little Czech goes a long way",
    intro: "Czech is a Slavic language and no one expects you to master it, but a Dobrý den on the way in and an Ahoj among friends, plus a story or two, mark you as a guest rather than a tourist.",
    phrases: [
      { mean: "Good day, a formal hello", say: "DOH-bree den", word: "Dobrý den" },
      { mean: "Hi and bye, informal", say: "AH-hoy", word: "Ahoj" },
      { mean: "Please, and you are welcome", say: "PROH-seem", word: "Prosím" },
      { mean: "Thank you", say: "DYE-koo-yih", word: "Děkuji" },
      { mean: "Cheers", say: "nah ZDRAH-vee", word: "Na zdraví" },
      { mean: "Delicious, excellent", say: "VEE-bor-neh", word: "Výborné" },
    ],
    tip: "Use <b>Dobrý den</b> (good day) when you walk into a shop or restaurant, and save the cheerful <b>Ahoj</b> for friends. Then raise a glass of the local beer: the Czechs invented <b>pilsner</b> and drink more beer per person than anyone else on Earth.",
    stories: [
      { img: "/czechia-culture-1.jpg",
        alt: "WPA-style illustration of the medieval astronomical clock on Prague's Old Town Hall tower, its blue and gold dials glowing and a small crowd gathered below in the square",
        h: "The oldest clock still ticking",
        p: "Prague's astronomical clock, the Orloj, has kept time on the Old Town Hall since 1410, making it the oldest working clock of its kind anywhere in the world. On the hour a little parade of the twelve apostles appears in the windows above the dial. Crowds still gather in the square to watch it strike.",
        note: "Good to know: the Orloj dates from 1410" },
      { img: "/czechia-culture-2.jpg",
        alt: "WPA-style illustration of a towering clay figure standing in a moonlit cobbled lane of old Prague as a bearded scholar in a long robe reaches up with a slip of parchment",
        h: "The clay giant of Prague",
        p: "Legend says that centuries ago a learned rabbi in Prague's old Jewish quarter shaped a giant from the clay of the riverbank and brought it to life with a sacred word, to guard his people. The creature was called the Golem. It is one of Europe's most famous folk tales, and Prague still tells it with pride.",
        note: "Say it: the Golem of Prague" },
      { img: "/czechia-culture-3.jpg",
        alt: "WPA-style illustration of the stone Charles Bridge at dawn lined with weathered statues, Prague Castle and its cathedral rising through morning mist beyond the river",
        h: "A bridge fit for an emperor",
        p: "The great stone Charles Bridge was begun in 1357 under Emperor Charles IV, who built much of golden Prague, including the oldest university in central Europe. Legend says egg yolks were mixed into the mortar to make it strong, and it has stood for more than 650 years. Cross it at dawn, before the crowds, and it is pure magic.",
        note: "Good to know: begun in 1357 under Charles IV" },
    ],
    pride: "Czechs can seem reserved at first but warm quickly, and they are quietly proud of a country that gave the world pilsner beer and Art Nouveau, and a capital of a hundred spires that came through the centuries almost untouched."
  },

  spokes: [
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Koruna (CZK), not euros" },
        { k: "Cards", v: "Card-friendly, contactless common" },
        { k: "Cash for", v: "Small shops, pubs, small towns" },
        { k: "On a card", v: "Choose koruna, avoid Euronet" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Czechia? Koruna, not euros",
      description: "Czechia is card-friendly, especially in Prague, but the currency is the koruna. Carry some for small shops and pubs, and avoid Euronet ATMs. Checked 2026.",
      h1: "Do I need cash in Czechia, or can I use cards?",
      lede: "Short answer: cards work well, especially in Prague, but the currency is the koruna, not the euro, so do not pay in euros. Carry a little koruna for small shops and pubs. Here is how to handle it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Cards, mostly. Czechia is <b>card-friendly</b>, especially in <b>Prague</b>, where <b>contactless</b> is common in shops, restaurants and transit. The currency is the <b>Czech koruna</b>, <b>not the euro</b>, so ignore euro prices and <b>do not pay in euros</b> (poor rate). Keep <b>some koruna cash</b> for <b>small shops, pubs outside the center, markets and small towns</b>. Choose <b>koruna, not euros or dollars</b>, on any card or ATM, and avoid standalone <b>Euronet</b> ATMs, which charge high fees.",
      sections: [
        {
          h: "Card-friendly, and it is koruna",
          icon: "phoneok",
          key: { fig: "Koruna", tag: "Contactless common", text: "Czechia is card-friendly, especially in Prague. The currency is the koruna, not the euro, so do not pay in euros.", tone: "teal" },
          p: [
            "Czechia is <b>card-friendly</b>, especially in <b>Prague</b>, where <b>contactless</b>, Apple Pay and Google Pay work in shops, restaurants and on transit, and <b>Visa and Mastercard</b> are widely accepted.",
            "The currency is the <b>Czech koruna</b>, <b>not the euro</b>. Some tourist spots quote or accept euros, but at a <b>poor rate</b>, so pay in <b>koruna</b>. Keep <b>some koruna cash</b> for <b>small shops, pubs outside the center, markets and small towns</b>."
          ]
        },
        {
          h: "Choose koruna, avoid Euronet",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose koruna", text: "Choose koruna on any terminal or ATM, and avoid standalone Euronet ATMs, which charge high fees and push the dollar conversion.", tone: "amber" },
          p: [
            "When a card terminal or ATM asks whether to charge in <b>euros, dollars or koruna, always choose koruna</b>. Foreign currency triggers dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. Decline it every time.",
            "For cash, use an ATM attached to a <b>real bank</b>, not a standalone <b>Euronet</b> kiosk, which charges high fees and pushes the dollar conversion. Use a <b>debit card</b> to avoid cash-advance fees."
          ]
        },
        {
          h: "Cash for small spots",
          icon: "coins",
          key: { fig: "A little", tag: "For pubs and small towns", text: "Keep a little koruna cash for small shops, neighborhood pubs, markets and small towns, where cards are less certain.", tone: "teal" },
          p: [
            "A <b>card covers most spending</b> in Prague and larger towns. Keep <b>a little koruna cash</b> for <b>small shops, neighborhood pubs, markets and small towns</b>, where cards are less certain.",
            "For tipping norms, see <a href='/czechia/tipping'>tipping in Czechia</a>, and for the wider picture, the <a href='/czechia'>Czechia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Czechia?", a: "A little. Czechia is card-friendly, especially in Prague, with contactless common, so a card covers most spending. Keep some koruna for small shops, neighborhood pubs, markets and small towns." },
        { q: "Should I pay in koruna or euros in Czechia?", a: "Always koruna. Czechia uses the koruna, not the euro, and places that accept euros give a poor rate. On a card, choose koruna, not euros or dollars, to avoid the 3 to 8% conversion." },
        { q: "Are Euronet ATMs a good idea in Czechia?", a: "No. Standalone Euronet kiosks charge high fees and push the dollar conversion. Use an ATM attached to a real bank instead, and always choose to be charged in koruna." },
        { q: "Does Czechia use the euro?", a: "No. The currency is the Czech koruna. Some tourist spots quote or accept euros, but at a poor rate, so pay in koruna for the best value." }
      ],
      sources: {
        links: [
          { label: "Czech National Bank: official exchange rate information", url: "https://www.cnb.cz/en", type: "gov" },
          { label: "US State Department: Czechia country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/CzechRepublic.html", type: "gov" }
        ],
        judgment: "Czechia is card-friendly but uses the koruna, not the euro, and the Euronet ATM fee trap is well documented. The koruna rate moves, and the firm rule is to decline foreign-currency conversion. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "About 10%, customary" },
        { k: "Restaurants", v: "Round up to about 10%" },
        { k: "How", v: "State the total when paying" },
        { k: "Currency", v: "Koruna (not euros)" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Czechia: about 10%, and how to leave it",
      description: "About 10% is customary in Czechia. You state the total when you pay rather than leaving coins, and you tip in koruna. Checked 2026.",
      h1: "Tipping in Czechia",
      lede: "Czechia tips a little more than Western Europe: about 10% at a restaurant, told to the server rather than left on the table. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Czechia tips a little <b>more than Western Europe</b>: about <b>10%</b> is customary at a restaurant for good service, usually by <b>rounding up</b> to roughly that. The local habit is to <b>state the total you want to pay</b> when the server takes your money, rather than leaving it on the table (much like Germany and Austria). Service is <b>usually not included</b>, though some Prague tourist spots add it, so check the bill. Pay in <b>Czech koruna</b>, not euros. Round up for taxis, and leave a little for good service elsewhere.",
      sections: [
        {
          h: "About 10%, a bit more than the West",
          icon: "coins",
          key: { fig: "About 10%", tag: "Customary for good service", text: "Around 10% is customary at a restaurant for good service, usually by rounding up. A little more than Western Europe, but far from US levels.", tone: "teal" },
          p: [
            "Czechia sits between <b>Western Europe's round-up</b> and <b>US percentages</b>: about <b>10%</b> is customary at a sit-down restaurant for good service, usually by <b>rounding up</b> to roughly that figure. At a <b>pub, cafe or for drinks</b>, rounding up the coins is plenty.",
            "It is a <b>courtesy</b>, not an obligation, and staff earn a wage. Round up for <b>taxis</b>, and leave a little for a porter or housekeeping if you like."
          ]
        },
        {
          h: "State the total when you pay",
          icon: "receipt",
          key: { fig: "Say the total", tag: "Like Germany", text: "When the server takes payment, state the total you want to pay including the tip, rather than leaving it on the table. Check the bill for a service charge first.", tone: "teal" },
          p: [
            "As in Germany and Austria, the habit is to <b>tell the server the total</b> you want to pay when they take your money, rather than leaving coins on the table. For a <b>270 koruna</b> bill you might say <b>300</b>, and get change for the rest.",
            "Most places do <b>not</b> add a service charge, but some <b>Prague tourist restaurants</b> do, so <b>check the bill</b> before adding more. If a service charge is there, you need not tip on top."
          ]
        },
        {
          h: "Pay tips in koruna",
          icon: "cash",
          key: { fig: "Koruna", tag: "Not euros", text: "Tip in Czech koruna, not euros, which are poorly accepted. Cash is simplest and reaches the staff directly.", tone: "teal" },
          p: [
            "Tip in <b>Czech koruna</b>, not euros, which are poorly accepted and get a bad rate. <b>Cash</b> is simplest and reaches the staff directly, though you can also state the total when paying by card. For the wider picture, see the <a href='/czechia'>Czechia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Czechia?", a: "Yes, modestly. About 10% is customary at a restaurant for good service, usually by rounding up. A little more than Western Europe, but far below US levels. At a pub or cafe, rounding up the coins is plenty." },
        { q: "How do you leave a tip in Czechia?", a: "Tell the server the total you want to pay when they take your money, rather than leaving it on the table. For a 270 koruna bill you might say 300. Check the bill first for a service charge, which some Prague tourist spots add." },
        { q: "How much do you tip at a Czech restaurant?", a: "Around 10% for good service, usually by rounding up. At a pub, cafe or for drinks, rounding up the coins is plenty. It is a courtesy, not an obligation." },
        { q: "Do you tip in euros or koruna in Czechia?", a: "Koruna. Czechia uses the koruna, not the euro, and euros are poorly accepted. Tip in koruna, in cash, or state the total when paying by card." }
      ],
      sources: {
        links: [
          { label: "US State Department: Czechia country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/CzechRepublic.html", type: "gov" }
        ],
        judgment: "Czech tipping is modest, a bit above Western Europe, and the say-the-total habit is a longstanding local practice. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Apps", v: "Bolt (cheapest), also Uber" },
        { k: "Old reputation", v: "Mostly fixed by the apps" },
        { k: "Watch for", v: "Unlicensed touts at tourist spots" },
        { k: "Pay in", v: "Koruna, not euros" }
      ],
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Prague taxi apps, and the airport fare to skip",
      description: "Bolt is usually cheapest in Prague, with Uber and local Liftago. The old overcharging reputation is mostly outdated, and how to leave the airport.",
      h1: "Prague taxis, the apps, and the airport scam to skip",
      lede: "Prague's taxis had a bad name for years, but apps have quietly fixed most of it. Here is which one to install, the airport trick that still catches people, and how to get into the city cheaply.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Install <b>Bolt</b>, and <b>Uber</b> too. Both lock the price before you ride, and Bolt is usually the cheapest. Prague's old taxi-overcharging reputation is mostly <b>outdated</b> now that apps dominate, but unlicensed drivers and touts at tourist spots and the airport still quote inflated flat fares in unmarked cars, so <b>never take a taxi that approaches you</b>. If you need a traditional cab, use <b>AAA Radiotaxi</b> or <b>Liftago</b> with the meter running. From <b>Vaclav Havel airport</b>, use Bolt or Uber (the airport Wi-Fi is free, so you can book without a SIM) or the Airport Express bus.",
      sections: [
        {
          h: "Which app to install",
          icon: "phoneok",
          key: { fig: "Bolt", tag: "Cheapest in Prague", text: "Bolt is the cheapest and most-used ride app in Prague, and the one to have. Uber works well too and is usually only a little pricier, so many travelers keep both and compare.", tone: "teal" },
          p: [
            "<b>Bolt</b> is the cheapest and most-used ride app in Prague, and the one to have. <b>Uber</b> works well too and is usually only a little pricier, so many travelers keep both and compare. <b>Liftago</b> is a Czech app that dispatches licensed taxis and uses a bidding model, which makes it a useful backup when Bolt and Uber are both surging on a busy night. All three lock the fare before the car arrives, so there is nothing to argue about.",
            "The reassuring part is that Prague's fearsome taxi reputation was earned back in the 1990s and 2000s, when unregulated cabs ran the tourist areas and honest meters were rare. Apps changed that. For almost every ride now, opening Bolt or Uber is cheaper, transparent and paid in advance, and it sidesteps the whole problem below."
          ]
        },
        {
          h: "The scam, and the licensed-taxi rules",
          icon: "alert",
          key: { tag: "Unlicensed touts", text: "Prague's old overcharging reputation is mostly outdated now that apps dominate, but unlicensed drivers and touts at Wenceslas Square, Old Town Square, the main station and the airport still quote inflated flat fares. Book an app instead.", tone: "amber" },
          p: [
            "The trouble that remains comes from <b>unlicensed drivers and touts</b> at the big tourist spots, Wenceslas Square, Old Town Square, the main train station and the airport, who quote a flat price instead of running the meter and overcharge many times the real fare. The airport version is a friendly man, often with an <b>official-looking vest</b>, who offers a taxi at a fixed price like 800 koruna, walks you to an unmarked car, and lands a final bill two to four times higher with invented luggage, night or toll fees. The single rule that defeats all of it: <b>never get into a taxi that approaches you</b>, and always book the ride yourself.",
            "If you do want a traditional cab, licensed Prague taxis must display a rate card on the doors, run the meter from the moment you get in, and give a printed receipt, with the regulated rate around 36 koruna per kilometer. The two names to trust for a street or phone-booked cab are <b>AAA Radiotaxi</b> (call 14014) and <b>Liftago</b>. Confirm the meter is on before you move, and keep a map open to watch the route."
          ]
        },
        {
          h: "Getting in from the airport",
          icon: "plane",
          key: { fig: "App it", tag: "Free airport Wi-Fi", text: "At Vaclav Havel airport, Bolt and Uber are the cheapest and clearest options, and the free airport Wi-Fi lets you order one before you even leave arrivals.", tone: "teal" },
          p: [
            "At <b>Vaclav Havel airport</b> (PRG), Bolt and Uber are the cheapest and clearest options, and because the airport has free Wi-Fi you can order one without a local SIM. Uber is the official airport partner allowed to wait at the terminal curb, while for Bolt or Liftago you walk to the marked ride-hailing pickup zone. Reckon on roughly <b>550 to 700 koruna</b> to the centre by Bolt. Ignore anyone soliciting a ride inside or just outside arrivals.",
            "If you would rather take public transport, the <b>Airport Express</b> bus runs straight to the main train station for about 100 koruna, or the number <b>119</b> bus connects to metro line A for about 40 koruna and takes you into the centre. Both are cheap, quick and completely scam-proof."
          ]
        },
        {
          h: "Fares, paying and tipping",
          icon: "coins",
          key: { fig: "Koruna", tag: "Not euros", text: "Pay in Czech koruna, not euros, which are poorly accepted and get a bad rate. In the apps the fare is fixed; for a street taxi, round up a little for good service.", tone: "teal" },
          p: [
            "Pay in <b>Czech koruna</b>, not euros. The koruna is the currency, and euros are poorly accepted and get a bad rate where they are taken at all. In the apps you pay by card in koruna, and for a traditional taxi carry small koruna notes. On an app ride, tipping is not expected, though rounding up to the nearest 10 or 20 koruna is a normal gesture, and the same modest rounding is standard in a metered street taxi.",
            "For the wider money picture, including how much cash to carry and why to always pay in koruna rather than euros, see the <a href=\"/czechia\">Czechia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Uber or Bolt better in Prague?", a: "Both work well and lock the price before you ride. Bolt is usually 15 to 25 percent cheaper and is the local default, while Uber is a little pricier but familiar and is the app allowed to wait at the airport curb. Liftago, a Czech app that dispatches licensed taxis, is a handy backup when both are surging on a busy night." },
        { q: "Are Prague taxis a scam?", a: "The apps are safe and transparent. The risk is unlicensed drivers and touts at tourist spots and the airport who quote inflated flat fares in unmarked cars, a reputation earned back in the 1990s and 2000s. Use Bolt or Uber, and never get into a taxi that approaches you. If you need a street cab, use only AAA Radiotaxi or Liftago with the meter running." },
        { q: "How do I get from Prague airport to the city?", a: "Bolt or Uber are cheapest and clearest, and the airport's free Wi-Fi lets you book without a SIM; expect roughly 550 to 700 koruna to the centre by Bolt. The Airport Express bus runs to the main train station for about 100 koruna, or the number 119 bus connects to metro line A for about 40 koruna. Ignore drivers soliciting outside arrivals." },
        { q: "Do I pay in euros or koruna in Prague?", a: "Koruna. Czechia uses the koruna (CZK), and paying in euros, where it is accepted at all, gets a poor rate. The apps charge your card in koruna, and for a traditional taxi carry small koruna notes." }
      ],
      sources: {
        links: [
          { label: "Prague Trip: a 2026 guide to Prague taxis, Uber and Bolt, prices and the airport scams", url: "https://www.prague-trip.com/practical/taxis-uber-bolt/", type: "guide" },
          { label: "Best Prague Guide: a 2026 breakdown of Bolt, Uber, the licensed-taxi rules and the regulated meter rate", url: "https://bestpragueguide.com/en/blog/prague-taxi-uber-bolt", type: "guide" },
          { label: "How in Czech: a 2026 Prague airport taxi guide covering Uber, Bolt and the pickup zones", url: "https://howinczech.com/prague-airport-taxi-guide", type: "guide" }
        ],
        judgment: "App availability and the regulated meter rate can change, and airport pickup arrangements shift, so treat any koruna figures as a recent read and check the price in your app. The advice to never take a taxi that approaches you is the constant. Checked July 2026."
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
      title: "Bringing a dog or cat to Czechia from the US 2026",
      description: "Czechia runs on the shared EU health-certificate process, with no quarantine and no titer. What is Czechia-specific on arrival and after you settle in.",
      h1: "Bringing your dog or cat to Czechia.",
      lede: "Czechia runs on the single EU pet-entry process for a US-origin dog or cat: microchip, rabies in the right order, and an EU health certificate on a 10-day clock. No quarantine, no rabies titer. Here is what that means for Czechia, and the local parts worth knowing.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Czechia uses the <b>shared EU pet-entry process</b>, so there is no separate national permit and nothing unusual at the border. Your pet needs an <b>ISO microchip, a rabies vaccination given after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS</b>, then must enter within <b>10 days</b> of that endorsement. There is <b>no quarantine and no rabies titer</b> for a pet coming straight from the US. The full step-by-step, the ordering trap, and the current fees are on one page: see <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a>. Below are the Czechia-specific notes. Coming home to the US is the easy part.",
      sections: [
        {
          h: "Czechia runs on the EU process",
          icon: "health",
          key: { fig: "10 days", tag: "No Czechia-only permit", text: "The standard EU move: an ISO microchip first, a rabies shot after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS. Enter Czechia within 10 days of that endorsement.", tone: "teal" },
          p: ["There is no Czechia-only pet permit and no national quarantine. Bringing a dog or cat into Czechia from the US is the standard EU move: an ISO microchip first, a rabies vaccination after the chip, then an EU Animal Health Certificate completed by a USDA-accredited vet and endorsed by APHIS, with the pet arriving within 10 days of endorsement. A first rabies shot adds a 21-day wait before travel.", "Because the core process is identical across the EU (and the countries that follow its rules), we do not repeat it per country. The full sequence, the microchip-before-rabies trap that costs people the most time, the 10-day clock, and the current APHIS endorsement fees all live on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Read that first, then come back for the Czechia notes."]
        },
        {
          h: "The Czechia-specific parts",
          icon: "receipt",
          key: { fig: "Check", tag: "At the border", text: "Czech customs may ask to see the endorsed certificate and confirm the chip, and pets should arrive through a designated traveller point of entry, which the major airports are.", tone: "teal" },
          p: ["At the border, Czech customs may ask to see the endorsed certificate and confirm the microchip, and pets should enter through a designated traveller point of entry, which Prague airport is. There is no dog or cat tapeworm rule for Czechia, unlike Ireland, Finland or Malta.", "The Czech-specific parts are local. Czechia requires dogs to be microchipped, and cities and municipalities charge an annual dog fee and ask owners to register the dog locally, with the amount set by each municipality. There is no strict national banned-breed list. Register and pay the local dog fee once you have an address."]
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
          key: { fig: "Easy", tag: "The return trip", text: "A dog flying home from Czechia is on the simplest CDC path: usually a CDC Dog Import Form receipt, a microchip, and a minimum age of 6 months.", tone: "teal" },
          p: ["Good news for the return trip: a dog flying home to the US from Czechia is on the simplest CDC path, typically a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement.", "For the wider picture, including how Czechia compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Czechia",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-czech-republic",
        note: "The US-side steps and the EU health certificate for Czechia. Czechia applies the shared EU process, and the destination's own authorities are the final word on the day."
      },
      faqs: [
        {
          q: "Is there anything Czechia-specific beyond the EU rules?",
          a: "Mostly local. Czechia has no tapeworm rule (that applies to Ireland, Finland and Malta). Dogs must be microchipped, and municipalities charge an annual dog fee and expect local registration, with the amount set by each city. Register once you have an address."
        },
        {
          q: "Does my pet have to go into quarantine in Czechia?",
          a: "No. Czechia applies the shared EU pet-entry process, which has no quarantine and no rabies titer for a pet coming straight from the US. Your pet needs a microchip, a rabies vaccination in the right order, and an EU Animal Health Certificate endorsed by APHIS, then must arrive within 10 days of endorsement. See our EU pet health certificate page for the full process."
        },
        {
          q: "Do I need to quarantine my pet coming back to the US from Czechia?",
          a: "No. A dog returning to the US from Czechia is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details."
        }
      ],
      sources: {
        links: [
          {
            label: "True Trip Costs: the EU pet health certificate, the shared microchip, rabies and certificate process for all EU countries including Czechia",
            url: "/eu-pet-health-certificate",
            type: "internal"
          },
          {
            label: "USDA APHIS: pet travel from the United States to Czechia, the US-side steps and EU health certificate",
            url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-czech-republic",
            type: "gov"
          },
          {
            label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, for the return leg",
            url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html",
            type: "gov"
          }
        ],
        judgment: "Czechia applies the shared EU pet-entry framework, set by the EU and administered on the US side by APHIS, not by us. The process is stable in substance, though the EU certificate format changes on 1 October 2026, which we cover on the EU pet health certificate page. The local registration and any breed rules vary, so we point you to the official pages and dated this July 2026."
      }
    },
    {
      slug: "money-scams",
      glance: [
        { k: "Most cost", v: "Tens of dollars, avoidable" },
        { k: "Exchange booths", v: "You have three hours" },
        { k: "Taxis", v: "Book an app, never hail" },
        { k: "At the ATM", v: "Choose koruna, skip Euronet" }
      ],
      live: true,
      topic: "scams",
      title: "Common money scams in Czechia, and what they cost",
      description: "Prague taxi overcharging, exchange booths with terrible rates, Euronet ATMs and padded restaurant bills. What each costs, and the Czech law that lets you undo a bad exchange.",
      h1: "Common money scams in Czechia, and what they cost you",
      lede: "Czechia is one of Europe's safer countries and violent crime against visitors is rare, so almost nothing here is dramatic. Prague's old reputation for fleecing tourists has faded a long way as ride apps took over, but three traps survive in the tourist core: the taxi that finds a reason not to run the meter, the exchange booth with an unbeatable-looking sign, and the bill with things on it you did not order. There is also a Czech law that quietly gives you a way out of the second one. Here is each, what it costs, and how to sidestep it.",
      checked: "Aug 2026",
      checkedISO: "2026-08-15",
      answer: "Three traps cluster in the Prague tourist core: <b>taxi overcharging</b>, mostly from drivers who approach you at the airport, the main station or a tourist square; <b>exchange booths</b> advertising zero commission while quoting a poor rate, or handing back less than the board promised; and <b>padded restaurant bills</b>, where a couvert, a service charge or items you did not order appear at the end. Add the standard pair, <b>Euronet ATMs</b> and the <b>pay in dollars</b> prompt. The golden rules: <b>book a ride in an app rather than hailing</b>, <b>get koruna from a bank ATM instead of a booth</b>, <b>read the bill before you tip</b>, and <b>always choose koruna</b>. And if a booth does catch you, Czech law gives you <b>three hours to undo it</b>.",
      sections: [
        {
          h: "Exchange booths, and the three-hour law",
          icon: "cash",
          key: { fig: "Three hours", tag: "You can undo it", text: "Czech law lets you cancel a currency exchange free of charge within three hours, at the same booth, for amounts up to about 1,000 euros. Insist on the receipt, since it is what makes the right work.", tone: "teal" },
          p: [
            "The tourist-area exchange kiosk, the <b>smenarna</b>, is Prague's most durable money trap. The board advertises <b>zero commission</b> while the rate itself is dreadful, or the headline number turns out to apply to some amount you are not exchanging, or the count in the handover comes back short. It is a slow, legal-looking way to lose ten to twenty percent of whatever you change.",
            "What makes Czechia unusual is that the law gives you a way back. The Czech National Bank sets out the rules plainly: you have the right to <b>cancel an exchange free of charge and without giving a reason within three hours</b>, at the same booth, for amounts up to the equivalent of about <b>1,000 euros</b>. The booth <b>may not prevent you</b> from exercising that right, and it is obliged to <b>issue you a receipt</b>, which is what makes the right usable, so insist on one and check the date and time on it. If a booth refuses, complain there first, then in writing to the Czech National Bank, which can sanction them. Two more rules from the same source are useful ammunition: booths may not charge separate fees beyond the rate itself, and only <b>one rate table</b> is allowed, so the VIP rate trick is banned. Simplest of all, skip the booth and pull koruna from a bank ATM."
          ]
        },
        {
          h: "Taxis: the driver who approaches you",
          icon: "taxi",
          key: { fig: "2 to 3x", tag: "Book, do not hail", text: "The classic is a driver who approaches you at the airport or main station with a fixed price, or a meter that never starts. Use Bolt, Uber or Liftago, where the fare is set before you get in.", tone: "teal" },
          p: [
            "Prague's taxi reputation is largely historical now, because apps dominate and most licensed drivers are straight. What survives is targeted at arrivals: a friendly man, sometimes in something that looks like a uniform, <b>approaches you inside the terminal or at the main station</b> and offers a fixed price. The car is unmarked or vaguely marked, and the final figure is <b>two to three times</b> the quote once luggage fees, a night surcharge or a changed story appear. An investigation published in late 2025 documented a fake operator at Prague Airport charging 70 koruna a kilometre plus a 500 koruna luggage fee, against a city-set maximum far below that, and issuing a receipt for a company that did not exist.",
            "The defense is simple and total: <b>never take a ride from someone who approaches you</b>. Book <b>Bolt, Uber or Liftago</b> from the arrivals hall, where the airport Wi-Fi is free, and the price is fixed before you get in. If you want a traditional cab, use a known company such as AAA Radiotaxi and check the <b>rate is displayed on the door</b>, which licensed Prague taxis are required to show, then make sure the meter runs from the start. The <a href=\"/czechia/taxis-and-apps\">Czechia taxis and apps guide</a> has the full picture, including the Airport Express bus, which is cheaper than all of it."
          ]
        },
        {
          h: "At the ATM and the card machine",
          icon: "atm",
          key: { tag: "Choose koruna", text: "Skip the bright yellow Euronet machines clustered around the sights, which charge high fees and push the dollar conversion. Use a Czech bank ATM, and always choose koruna.", tone: "amber" },
          p: [
            "Two costs here are entirely legal, which is exactly why nobody warns you. The first is the <b>bright yellow Euronet ATM</b>, which clusters around Old Town Square, Wenceslas Square and Charles Bridge precisely because that is where disoriented visitors are. They charge high fees and push the conversion prompt hard. Use a machine attached to a real Czech bank instead: <b>CSOB, Komercni banka, Ceska sporitelna, Raiffeisenbank or UniCredit</b>. Searching maps for <b>bankomat</b> finds them.",
            "The second is the <b>pay in dollars</b> offer on card machines and ATMs, which uses a marked-up rate and costs you a few percent every time you accept it. Always choose <b>koruna</b>. The same applies to paying in euros: Czechia kept the koruna, and places that accept euros set their own rate, which is never in your favour. The mechanics are in the <a href=\"/czechia/cash-or-card\">Czechia cash and cards guide</a>."
          ]
        },
        {
          h: "The bill: couvert, service and the tourist menu",
          icon: "receipt",
          key: { tag: "Read it first", text: "Tourist-area restaurants may add a couvert for bread, a service charge, or items you did not order. Ask for the menu with prices before you sit, and check the itemized bill before you tip.", tone: "teal" },
          p: [
            "In the streets immediately around Old Town Square, a few places run the standard European bill-padding playbook: a <b>couvert</b> charged for bread or nuts you did not order, a <b>service charge</b> added and then a blank tip line offered on top, or prices that were never actually shown to you. Some venues will quote verbally rather than hand over a printed menu, which is the tell. Ask for the <b>menu with prices</b> before you sit down, and walk if there is not one.",
            "At the end, look at the <b>itemized bill</b> rather than the total. If a service charge is already there you do not need to tip on top, and Czech tipping is about 10 percent by rounding up, stated to the server rather than left on the table, which the <a href=\"/czechia/tipping\">Czechia tipping guide</a> covers. Walking two streets away from the main square generally solves the whole problem, since prices in ordinary Prague pubs are a fraction of the ones on the square."
          ]
        },
        {
          h: "What this means for your money",
          icon: "coins",
          key: { fig: "Habits", tag: "How to avoid it", text: "Book rides in an app, get koruna from a bank ATM, choose koruna at every terminal, and read the itemized bill. Keep any exchange receipt, since it is what makes the three-hour right work.", tone: "teal" },
          p: [
            "Everything here costs tens of dollars at most and is avoided by four habits: <b>book a ride in an app rather than hailing one</b>, <b>get koruna from a bank ATM rather than a booth</b>, <b>choose koruna at every terminal</b>, and <b>read the itemized bill before you tip</b>. If you do use an exchange booth, <b>keep the receipt</b>, because without it the three-hour cancellation right is much harder to use.",
            "Handled calmly, none of this should shape your trip, and Prague outside the immediate tourist core is straightforwardly good value. For getting and spending money well while you are there, see the <a href=\"/czechia/cash-or-card\">Czechia cash and cards guide</a> and the <a href=\"/czechia\">Czechia cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Prague safe for tourists?", a: "Yes. Czechia is one of Europe's safer countries and violent crime against visitors is rare. What travelers meet are money annoyances rather than threats: taxi overcharging aimed at arrivals, exchange booths with poor rates, Euronet ATM fees and the occasional padded restaurant bill. All four are avoidable with a few habits." },
        { q: "Can I get my money back from a bad exchange office in Prague?", a: "Often yes. The Czech National Bank confirms you can cancel an exchange free of charge, without giving a reason, within three hours, at the same booth, for amounts up to the equivalent of about 1,000 euros. The booth cannot obstruct you and must issue a receipt, so insist on one. If refused, complain there, then in writing to the Czech National Bank." },
        { q: "Are Prague taxis still a scam?", a: "Much less than they were, since Bolt, Uber and Liftago now dominate and fix the fare in advance. What survives targets arrivals: someone approaching you inside the airport or main station with a fixed price, in an unmarked car, where the final figure lands two to three times higher. Never take a ride from a driver who approaches you." },
        { q: "Should I use exchange booths or ATMs in Czechia?", a: "Bank ATMs, from CSOB, Komercni banka, Ceska sporitelna, Raiffeisenbank or UniCredit. Avoid the bright yellow Euronet machines clustered around the sights, which charge high fees and push the dollar conversion. If you do use an exchange booth, ignore zero commission signs, check the rate itself, count the money before leaving, and keep the receipt." },
        { q: "Should I pay in koruna, euros or dollars in Czechia?", a: "Koruna, always. Czechia kept its own currency, so places that accept euros set their own rate and it will not favour you. On card machines and ATMs, decline the offer to charge you in dollars, since that uses a marked-up rate costing a few percent every time. Choosing koruna lets your own bank set the rate." },
        { q: "What is a couvert on a Czech restaurant bill?", a: "A cover charge, usually for bread or nuts brought to the table without being ordered. It is legal where disclosed, but it appears mostly in tourist-area restaurants near Old Town Square. Ask for a printed menu with prices before you sit, check the itemized bill at the end, and note whether a service charge is already included before adding a tip." }
      ],
      sources: {
        links: [
          { label: "Czech National Bank: ten golden rules for bureau-de-change clients, including the three-hour right to cancel", url: "https://www.cnb.cz/en/supervision-financial-market/consumer-protection-and-financial-literacy/consumer-protection/ten_golden_rules_currency_exchange/", type: "gov" },
          { label: "Expats.cz: investigation into imposter taxi operators at Prague Airport and the fares they charged", url: "https://www.expats.cz/czech-news/article/triple-the-price-how-prague-airport-s-imposter-taxi-drivers-exploit-travelers", type: "media" }
        ],
        judgment: "The three-hour cancellation right, the 1,000 euro limit, the obligation to issue a receipt, the ban on separate fees and the single-rate-table rule all come from the Czech National Bank's own consumer guidance, which is the primary source. The Prague Airport imposter taxi figures come from an Expats.cz investigation published in late 2025 and describe one documented operator, not a typical fare. We have deliberately not quoted the exact regulated per-kilometre maximum, because sources disagree on the current number; the mechanism that matters is that licensed taxis must display their rate on the door and run the meter. Koruna conversions use roughly 22 to the dollar. Checked August 2026."
      }
    }
  ]
};
