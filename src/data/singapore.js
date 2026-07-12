export default {
  slug: "singapore",
  live: true,
  name: "Singapore",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-12",
  sources: {
    changed: "First publication. Confirmed the 9% GST that is built into prices and that Budget 2026 held the rate with no rise announced, the tourist GST refund with its S$100 minimum for goods bought to take home, and that there is no nightly tourist or bed tax. Also confirmed the free, mandatory SG Arrival Card filed within three days before arrival, that US visitors enter without a visa for up to 90 days, and the local emergency numbers.",
    links: [
      { label: "Inland Revenue Authority of Singapore (IRAS): the current GST rate of 9% that is already included in displayed prices", url: "https://www.iras.gov.sg/taxes/goods-services-tax-(gst)/basics-of-gst/current-gst-rates", type: "revenue" },
      { label: "Singapore Customs: the Tourist Refund Scheme, the S$100 minimum spend, goods only, and the eTRS kiosks at Changi and Seletar", url: "https://www.customs.gov.sg/at-customs/departing-singapore/tourist-refund-scheme/", type: "gov" },
      { label: "Immigration and Checkpoints Authority (ICA): the free, mandatory SG Arrival Card filed within three days before you arrive", url: "https://www.ica.gov.sg/enter-transit-depart/entering-singapore/sg-arrival-card", type: "gov" },
    ],
    judgment: "The daily cash share, the tipping feel, and how often a hawker stall or wet-market vendor turns out to be cash only are our own estimate from experience and from consistent traveler reports, not an official figure. Card acceptance is very wide but not total, so treat our read as a guide, not a guarantee.",
  },
  emergency: { medical: "995", note: "995 reaches an ambulance or the fire service, and 999 is the police. Both are free and answer around the clock. If you dial 911 out of habit on a US phone, it is routed to 999 automatically. The public emergency ambulance is free for a genuine emergency, while a non-emergency call-out is charged.", checked: "Jul 2026", checkedISO: "2026-07-12" },
  insuranceLevel: "medium",
  region: "Asia",
  signals: { cardFriendliness: 5, cashNeed: 1, taxRisk: 2 },
  hook: "About as cashless as a city gets: tap a Visa or Mastercard for almost everything, straight onto the train and bus gates too, carry only a few dollars for hawker stalls and wet markets, always choose Singapore dollars over US dollars, and remember the 9% GST is refundable on the things you shop for and carry home.",
  aliases: ["singapore", "singapura", "sg", "sgp", "changi", "sentosa", "orchard road", "marina bay", "gardens by the bay", "sgd", "singapore dollar", "gst", "ez-link", "ezlink", "simplygo", "mrt", "hawker", "kopitiam", "merlion", "chinatown", "little india", "kampong glam", "chili crab", "laksa"],

  title: "Money in Singapore (2026): Cards, Contactless, the GST Refund, ATMs and Tipping | True Trip Costs",
  description: "How to handle money in Singapore as a US traveler in 2026: tap-to-pay almost everywhere including the MRT and buses, the small cash for hawker stalls, ATMs on every corner, the dollar-conversion trap, the 9% GST you can claim back on shopping, and why you do not tip. Checked July 2026.",

  h1: "Money in Singapore, sorted.",
  lede: "A calm, current plan for the money side of your trip: why a tap of your card covers almost everything, including the trains and buses, the small cash worth carrying for hawker food, the fee-free way to get dollars, and the 9% GST you can claim back on what you buy to take home.",
  hero: {
    img: "/singapore-hero.jpg",
    h: 1375,
    alt: "A warm Singapore evening at dusk along Marina Bay, glowing hotel towers and the lit domes and steel Supertrees of a waterfront garden reflected in the water, string lights overhead, a lone figure walking toward a lion-headed fountain statue spouting water with the bay and a slender skyline in silhouette, a red and white train crossing a bridge behind, and a plate of chili crab, a bowl of laksa, kaya toast and a cup of kopi on a wooden hawker-centre table in the foreground"
  },

  recentChange: {
    date: "Jul 2026",
    text: "Two small things are current for 2026. Singapore's GST holds at 9%, with Budget 2026 confirming no further rise, so the rate baked into the prices you see is unchanged. And at the border there is no passport stamp anymore: you file the free SG Arrival Card online within three days of arrival, health declaration included, and receive a digital e-Pass by email. Neither costs much attention, but both are worth knowing before you fly."
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Singapore is <b>about as cashless as travel gets</b>. Locals and visitors tap a card or phone for almost everything, and your <b>Visa or Mastercard</b> works at hotels, malls, restaurants, taxis and even most hawker stalls, with Amex less universal. Better still, you can <b>tap that same contactless card or your phone straight onto the gates</b> of the MRT and buses, with no separate ticket to buy. The one place cash still earns its keep is <b>hawker centres and wet markets</b>, where a handful of stalls are cash only, so carry a <b>few small notes</b> as backup. Getting cash is painless: <b>ATMs are on every corner</b> and in every mall (DBS or POSB, OCBC, UOB), foreign cards work, and you should <b>always choose Singapore dollars, not US dollars</b>, on any terminal or ATM. Two things worth your attention: as a visitor you can <b>claim back the 9% GST</b> on goods you buy to take home, and <b>nobody tips</b> here, since restaurants and hotels usually add a <b>10% service charge</b> already (the ++ you see after a price).",

  meter: {
    heading: "About as cashless as travel gets, with a little cash for the hawkers.",
    cashPct: 12,
    note: "A rough feel for everyday spending. Cards and phones cover almost everything, from hotels and restaurants to shops, taxis and the trains and buses. Cash is a small backup for the hawker stalls and wet-market vendors that are cash only, and a few dollars usually does it."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are taken at hotels, malls, restaurants, taxis and most hawker stalls, and you can tap your contactless card or phone straight onto the gates of the MRT and buses through the SimplyGo system, with no card to buy and no sign-up. Amex is less widely accepted, so lead with a Visa or Mastercard. The soft spots are a handful of hawker stalls and wet-market vendors that take cash only.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "ok", h: "Cash", verd: "A small backup", p: "You rarely need it, but keep a few small Singapore dollar notes for the hawker stalls, kopitiams and wet-market vendors that are cash only. Get dollars from a bank ATM rather than an airport exchange counter, and draw only what you will use.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy and everywhere", p: "ATMs are on nearly every corner and inside the malls, run by banks like DBS and POSB, OCBC and UOB, and foreign Visa and Mastercard cards work in them without fuss. Withdrawal fees are modest. Decline any offer to charge you in US dollars and <b>always choose Singapore dollars</b> so your own bank handles the exchange.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b>, plus a backup from a different bank. Amex is less widely accepted here, so do not rely on it alone.",
      "Add your card to your <b>phone wallet</b> (Apple Pay, Google Pay or Samsung Pay). It works to tap onto the trains and buses and at almost every till.",
      "File the free <b>SG Arrival Card</b> online within three days before you arrive. It is mandatory, includes a short health declaration, and is not a money charge. Use only the official ICA site or app, never a paid third party.",
      "Planning to shop? For the <b>GST refund</b> you must show your <b>passport</b> at the shop when you buy and carry the goods out with you, so keep it handy."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At Changi", bullets: [
      "Skip the exchange counters. If you want cash, pull Singapore dollars from a <b>bank ATM</b> in the arrivals hall, and <b>decline 'convert to US dollars.'</b>",
      "To reach the city, just <b>tap your card or phone onto the MRT gate</b>. Paper single tickets are gone, so tap in and tap out.",
      "Only riding a lot? Consider a <b>Singapore Tourist Pass</b> or an EZ-Link card, but for a few trips a day, tapping your own card is usually cheaper.",
      "Set up an <b>eSIM</b> before you land. Coverage is excellent, and you will want data for maps and the Grab taxi app, though not for paying."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your card or phone</b> for almost everything, and choose Singapore dollars every time.",
      "<b>Tap the same card or phone</b> at the MRT and bus gates, and remember to tap off, or you pay the maximum fare.",
      "Keep a few <b>small notes</b> for hawker stalls, kopitiams and wet markets that are cash only.",
      "Shopping something to take home? Ask for the <b>GST refund</b> (eTRS) at a Tax Free shop when you spend at least S$100."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in Singapore dollars, never in US dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds a few percent on card terminals and ATMs.",
      "<b>Do not tip.</b> It is not expected, and restaurants and hotels usually add a 10% service charge already, the ++ after the price."
    ], cta: null }
  ],

  cash: {
    rate: 1.29, cur: "SGD", round: 5, defaultIndex: 1,
    rateNote: "Rough guide at about 1.29 Singapore dollars to the US dollar in mid-2026, a strong and stable currency. Singapore is deeply card-first, so this is the small, cash-in-hand slice of your spending.",
    styles: [
      { n: "Budget",    per: 60,  cash: 0.15 },
      { n: "Mid-range", per: 120, cash: 0.10 },
      { n: "Comfort",   per: 240, cash: 0.06 }
    ]
  },

  connectivity: {
    works: "Among the best anywhere. Singapore has fast, dense 4G and 5G across the whole island, and Changi and much of the city offer free public WiFi. The three carriers are Singtel, StarHub and M1, and a prepaid SIM is cheap, but for most visitors an eSIM from Airalo, Nomad or a similar provider is the easy route. Your US plan may include some roaming, so check the rate before you rely on it. You do not need mobile data to pay by card, but you will want it for maps and the Grab taxi app."
  },

  tax: {
    none: true,
    currency: "SGD",
    note: "Singapore has no nightly tourist or bed tax. A 9% GST is already built into the price you see, and restaurants and hotels commonly add a 10% service charge on top, shown as the ++ after a price. As a visitor you can claim the GST back on goods you buy to take home (see below)."
  },

  currencyHeading: "The Singapore dollar, in plain terms.",
  facts: [
    { sym: "sgd", k: "Quick conversion", v: "Singapore uses the Singapore dollar, written S$. At about 1.29 to the US dollar in mid-2026, S$10 is roughly 8 dollars and S$100 about 78. Notes come in 2, 5, 10, 50 and 100 dollars, with 1 dollar and smaller amounts in coins. Prices already include the 9% GST, so the figure on the tag is what you pay, before any service charge on a restaurant or hotel bill." },
    { sym: "card", k: "Cards rule, cash is a backup", v: "Visa and Mastercard work almost everywhere, with Amex less universal. You can go days without cash, but a handful of hawker stalls and wet-market vendors take cash only, so carry a few small notes as backup and draw them from any bank ATM." },
    { sym: "ic", k: "One tap runs transit", v: "You do not need a separate transit card. Tap a contactless Visa or Mastercard, or your phone, straight on the MRT and bus gates through SimplyGo, with a small foreign-card fee of about S$0.60 for each day you ride. You can instead buy an EZ-Link card or a Singapore Tourist Pass, and single paper tickets are gone, though buses still take cash for a fare." },
    { sym: "notip", k: "No tipping", v: "Singapore is not a tipping culture, and it is not expected. Restaurants and hotels usually add a 10% service charge already, the ++ you see after a price, so nothing more is needed. At hawker stalls and taxis you simply pay the amount, and rounding up a fare is a friendly touch, not a rule." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "A 9% GST you can claim back on the things you shop for.",
    text: "Singapore keeps tax simple for a visitor. There is <b>no nightly tourist or bed tax</b>. The <b>9% GST</b> is already included in the price you see, and restaurants and hotels usually add a <b>10% service charge</b> on top, the <b>++</b> after a price (a price marked <b>nett</b> is all-in). The win worth acting on: as a tourist you can <b>claim the GST back</b> on goods you buy to take home, through the Tourist Refund Scheme. Spend at least <b>S$100 including GST</b> at a shop showing a <b>Tax Free</b> or <b>GST Refund</b> sign (you can add up to three same-day receipts from the same shop to reach it), and <b>show your passport</b> when you buy. Then, before you fly out of <b>Changi</b> or Seletar, scan your passport at an <b>eTRS self-help kiosk</b> and choose your refund to a card, to Alipay, or as cash. It covers <b>goods only</b>, not services, hotel stays or anything used up here, and you must be leaving by air with the goods within <b>two months</b>. Keep them handy in case customs asks for a look. After the refund company's handling fee, you get back a little under the full 9%."
  },

  keyFacts: [
    { label: "GST (sales tax)", value: "9%, already included in displayed prices, and held at 9% for 2026 with no rise announced", status: "enacted", effective: "2024-01-01", source: "https://www.iras.gov.sg/taxes/goods-services-tax-(gst)/basics-of-gst/current-gst-rates", checked: "2026-07-12" },
    { label: "SG Arrival Card (SGAC)", value: "Mandatory and free, filed online within three days before arrival, with a short health declaration", status: "enacted", effective: null, source: "https://www.ica.gov.sg/enter-transit-depart/entering-singapore/sg-arrival-card", checked: "2026-07-12" }
  ],

  traps: [
    "<b>'Pay in US dollars?' Always say no.</b> Card terminals and ATMs may offer to charge you in dollars (dynamic currency conversion), which quietly adds a few percent. Choose Singapore dollars every time.",
    "<b>Know what ++ means.</b> A price shown with <b>++</b> on a menu or a hotel rate has the 9% GST and a 10% service charge added at the end, so S$10++ is about S$12. A price marked <b>nett</b> already includes everything.",
    "<b>Hawker stalls and wet markets can be cash only.</b> Most of Singapore takes cards, but some food stalls and market vendors do not, so keep a few small notes and coins on hand for them.",
    "<b>Single paper MRT tickets are gone.</b> You must tap a card, your phone, or a stored-value or Tourist Pass at the gate, and you have to <b>tap out</b> as well, or the system charges you the maximum fare for the trip.",
    "<b>Do not mix a physical card and the same card on your phone</b> when you tap in and out on transit. Tapping in with the card and out with the phone (or the reverse) can charge you twice, so pick one and stick with it for the whole trip.",
    "<b>A foreign card on transit adds a small daily fee.</b> Tapping a non-Singapore card at the gates adds about S$0.60 for each day you ride, no matter how many trips. It is fine for a short visit, but if you ride heavily an EZ-Link card or Tourist Pass can work out cheaper."
  ],

  tippingHeading: "Don't tip, it is built in.",
  tipping: "Singapore is not a tipping culture, and there is no awkwardness in not tipping. Restaurants and hotels usually add a <b>10% service charge</b> to the bill already, shown as the <b>++</b> after a price, so you do not add anything more. At <b>hawker centres and kopitiams</b> you pay the stall directly and do not tip, and in <b>taxis</b> there is no tip, though rounding the fare up is a friendly touch. The rare exceptions where a small gesture is welcome are a <b>high-end hotel</b> porter or concierge who goes out of their way, or an <b>excellent private guide</b> on a longer tour. Otherwise, pay the amount on the bill or the meter and keep your wallet closed.",

  faqs: [
    { q: "Do I need cash in Singapore?", a: "Barely. Singapore is one of the most cashless places anywhere, and cards and phones cover almost everything, including the trains and buses. Carry a few small Singapore dollar notes as backup for the hawker stalls, kopitiams and wet-market vendors that are cash only, and draw them from any bank ATM as needed." },
    { q: "Can I use my card on the MRT and buses in Singapore?", a: "Yes, and it is the easy way to travel. Tap a contactless Visa or Mastercard, or your phone, straight on the MRT and bus gates through the SimplyGo system, with no card to buy and no sign-up. There is a small foreign-card fee of about S$0.60 for each day you ride, and you must tap out as well as in, or you are charged the maximum fare." },
    { q: "Should I pay in Singapore dollars or US dollars?", a: "Always Singapore dollars. If a card terminal or ATM offers to charge you in US dollars, decline; that dynamic currency conversion adds a few percent. Choosing Singapore dollars lets your card's network handle the exchange at a fair rate." },
    { q: "Can I get a GST refund on shopping in Singapore?", a: "Yes. As a tourist you can claim back the 9% GST on goods you buy to take home, under the Tourist Refund Scheme. Spend at least S$100 including GST at a shop showing a Tax Free or GST Refund sign, show your passport when you buy, then scan your passport at an eTRS self-help kiosk at Changi or Seletar before you fly, and choose a refund to your card, to Alipay, or as cash. It covers goods only, not services or hotel stays, and you get back a little under the full 9% after the handling fee." },
    { q: "What does ++ mean on a menu or hotel price in Singapore?", a: "It means the 9% GST and a 10% service charge are added on top. So a dish listed at S$10++ actually costs about S$12 once both are applied. A price marked nett already includes everything, with nothing more to add." },
    { q: "Do you tip in Singapore?", a: "No. Tipping is not customary and not expected. Restaurants and hotels usually add a 10% service charge already, shown as the ++ after a price, so you do not add more. In taxis there is no tip, though rounding up the fare is a friendly gesture." },
    { q: "Do I need an SG Arrival Card for Singapore?", a: "Yes. Everyone entering Singapore must file the free SG Arrival Card online within three days before arrival, including a short health declaration, and you receive a digital e-Pass by email. It is not a visa; US visitors can enter without a visa for up to 90 days. Use only the official ICA website or app, since paid third-party sites are not endorsed." },
    { q: "How much cash should I bring for a week in Singapore?", a: "Very little on top of card spending. For most visitors a modest amount of small Singapore dollar notes across the week is plenty for hawker food and the odd cash-only stall, refreshed from a bank ATM as needed. Cards and phones handle the rest, including transit." }
  ],

  culture: {
    heading: "A few local words go a long way",
    intro: "English is everywhere in Singapore, so you will get by with no trouble, but a little of the local color, a Malay thank-you or a word of Singlish, earns a smile and marks you as a guest rather than a tourist. Singaporeans are quietly proud of how many cultures share the island, and they notice the effort.",
    phrases: [
      { mean: "Thank you (Malay)", say: "TREE-mah KAH-see", word: "Terima kasih" },
      { mean: "To eat, food", say: "MAH-kahn", word: "Makan" },
      { mean: "Reserve a seat (with a tissue packet)", say: "chope", word: "Chope" },
      { mean: "Delicious, great", say: "shee-OK", word: "Shiok" },
      { mean: "Coffee, kopitiam style", say: "KOH-pee", word: "Kopi" },
      { mean: "Yes, sure (Singlish)", say: "can LAH", word: "Can lah" },
    ],
    tip: "At a hawker centre you <b>chope</b> a seat by leaving a packet of tissues on the table before you queue for food, and everyone respects it. On the MRT, eating and drinking are not allowed and can draw a fine, and durians are famously banned on board, so save the snack for later.",
    stories: [
      { img: "/singapore-culture-1.jpg",
        alt: "WPA-style illustration of a bustling open-air hawker centre under warm lights, long communal tables packed with diners of many backgrounds, steam rising from rows of food stalls, a cook ladling noodle soup, plates of rice and satay skewers, a folded packet of tissues holding a seat at an empty table",
        h: "The hawker centre is the heart",
        p: "Singapore does much of its eating at hawker centres, open-air halls of tiny stalls serving chicken rice, laksa, satay and more for a few dollars, side by side. The tradition is loved so much that Singapore's hawker culture was added to UNESCO's list of intangible cultural heritage in 2020. Queue at the stall, carry your own tray, and eat like a local.",
        note: "Good to know: Singapore's hawker culture is UNESCO-listed" },
      { img: "/singapore-culture-2.jpg",
        alt: "WPA-style illustration of a Singapore street where a Chinese temple, an Indian temple with a colorful tiered tower, a mosque with a golden dome and a row of pastel colonial shophouses stand along the same lane, people in varied dress walking together, lanterns and garlands overhead, warm afternoon light",
        h: "Four cultures, one island",
        p: "Singapore weaves together Chinese, Malay, Indian and other communities, and it shows in the food, the festivals and the four official languages: English, Malay, Mandarin and Tamil. Wander from Chinatown to Little India to Kampong Glam and you cross whole worlds in a short walk. That easy mix is a point of real pride.",
        note: "Say it: makan (MAH-kahn), the local word for eating well" },
      { img: "/singapore-culture-3.jpg",
        alt: "WPA-style illustration of the towering steel-and-plant Supertrees of a bayside garden joined by an elevated walkway, lush greenery cascading down their trunks, a glass conservatory dome nearby, visitors strolling below among tropical foliage, birds in flight, golden evening sky",
        h: "A city in a garden",
        p: "For all its towers, Singapore calls itself a city in a garden, and means it: greenery spills down buildings, and the giant Supertrees at Gardens by the Bay light up over the water each night. It is a small island that decided to stay green on purpose, and locals take quiet pride in how clean and planted it feels.",
        note: "Good to know: the Supertrees put on a free light show most evenings" },
    ],
    pride: "Singapore packs many cultures and faiths onto one small island and keeps it clean, green and orderly, something residents take real pride in. A little courtesy goes far: keep to the left on an escalator, no eating or drinking on the trains, and a friendly word in any of its languages is always welcome."
  }
};
