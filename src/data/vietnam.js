export default {
  slug: "vietnam",
  live: true,
  name: "Vietnam",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-10",
  emergency: { medical: "115", note: "115 reaches an ambulance. There is no single all-services number, so 113 is the police and 114 is fire.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "high",
  title: "Money in Vietnam (2026): Cash, Cards, ATM Fees and the Dong Conversion Trap | True Trip Costs",
  description: "How to handle money in Vietnam as a US traveler in 2026: cash vs card, the best ATMs and their fees, how much cash to bring, tipping, and the traps to avoid. Checked July 2026.",
  h1: "Money in Vietnam, sorted.",
  lede: "A calm, current plan for the money side of your trip: what to pay with, how much cash to carry, and the local traps to dodge.",
  hero: {
    img: "/vietnam-hero.jpg",
    h: 1375,
    alt: "Evening street in Vietnam with paper lanterns overhead, scooters passing, a woman in a conical hat, and a steaming bowl of pho with a teapot on a table in the foreground"
  },
  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',
  verdict: "Vietnam runs on <b>cash</b> for everyday life. Bring a <b>no-fee debit card</b>, pull Vietnamese dong from a fee-free ATM (VPBank) when you land, and keep a <b>Visa or Mastercard</b> for hotels and nicer restaurants. Skip Amex, it's rarely accepted. Carry small notes, and always pay in dong, never \"in USD.\"",
  meter: {
    heading: "Day to day, Vietnam leans heavily on cash.",
    cashPct: 70,
    note: "A rough feel for everyday spending. Cards climb toward half in central Hanoi, Ho Chi Minh City and Da Nang, and contactless (Apple Pay, Google Pay) works at many city terminals. Out of the cities, assume cash."
  },
  trio: [
    { sym: "card", kind: "warn", h: "Your card", verd: "Works in cities, not everywhere", p: "Fine at hotels, malls and nicer restaurants. Visa and Mastercard rule, Amex is spotty. Some small shops add a 2 to 3% card surcharge.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Yes, you'll need it daily", p: "Street food, markets, taxis, small cafes and rural areas are cash only. Keep small notes for vendors who can't change a big bill.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy in cities", p: "Everywhere in towns, thin in remote areas. Use a bank ATM (VPBank is fee-free, big limit). Fees elsewhere run about $1 to $2 a withdrawal.", cta: { label: "See the ATM map", href: "#" } }
  ],
  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Get a <b>no-foreign-fee debit card</b> for cash. A Charles Schwab account refunds ATM fees worldwide, which suits Vietnam well.",
      "Bring a <b>Visa or Mastercard with no foreign fee</b> for hotels and bigger spots.",
      "<b>Tell your bank</b> you're traveling so it doesn't block the card."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters, the rates are poor.",
      "Pull your first dong from a <b>bank ATM</b> and <b>decline \"convert to USD.\"</b> Always choose dong.",
      "Take out a larger amount to save on per-withdrawal fees."
    ], cta: { label: "Find VPBank ATMs near you", tag: "free", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Cash</b> for street food, markets, taxis and small shops. <b>Card</b> for hotels, malls and nicer restaurants.",
      "Use <b>Grab</b> for taxis so the fare is set in the app and you skip meter games.",
      "Keep most cash at the hotel, carry a day's worth."
    ], cta: { label: "Download Grab", tag: "free", href: "#" } },
    { sym: "usd", when: "A little USD", bullets: [
      "Carry some <b>clean, newer-than-2009 USD</b> for emergencies, but pay in dong day to day.",
      "If you exchange cash, use a <b>bank or reputable gold shop</b>, never the airport or street changers."
    ], cta: null }
  ],
  cash: {
    rate: 25000, cur: "VND", defaultIndex: 1,
    rateNote: "Rough guide at 25,000 VND to the dollar.",
    styles: [ { n: "Budget", per: 25, cash: 0.8 }, { n: "Mid-range", per: 50, cash: 0.7 }, { n: "Comfort", per: 90, cash: 0.55 } ]
  },
  connectivity: {
    works: "Yes. Vietnam has near-universal 4G and growing 5G across the cities and main travel routes, with signal thinning in remote mountain areas like Sapa and Ha Giang."
  },
  // TOURIST TAX (high-churn, verified Jul 2026). Vietnam has no separate tourist or hotel
  // tax. Room rates already include VAT, so the quoted price is the price you pay.
  tax: {
    none: true,
    note: "Vietnam has no separate tourist or hotel tax. Your room rate already includes VAT, so the price you are quoted is the price you pay."
  },
  currencyHeading: "The dong, in plain terms.",
  facts: [
    { sym: "dong", k: "Quick conversion", v: "About 25,000 VND to $1. Drop three zeros, divide by 25: 100,000 VND is roughly $4." },
    { sym: "denom", k: "Biggest common note", v: "500,000 VND (about $20). Easy to mix up with the 20,000 note, similar color, so look twice." },
    { sym: "smallnotes", k: "Carry small notes", v: "10,000 to 50,000 VND for taxis, street food and tips. Vendors often can't change a 500,000." },
    { sym: "qr", k: "Local QR wallets", v: "MoMo and ZaloPay are everywhere for locals but usually need a Vietnamese bank account, so they're not your tool." }
  ],
  // ENTRY (high-churn, verified Jul 2026). US citizens are not on Vietnam's visa
  // exemption list and need an e-visa arranged before boarding.
  keyFacts: [
    { label: "Vietnam e-visa (up to 90 days, US citizens)", value: "$25 single entry or $50 multiple entry, on the official e-visa portal before you fly", status: "enacted", effective: null, source: "https://evisa.gov.vn/", checked: "2026-07-11" }
  ],
  traps: [
    "<b>\"Pay in USD?\" Always say no.</b> At a card machine or ATM, choosing your home currency (dynamic currency conversion) quietly adds 3 to 7%. Pick dong every time.",
    "<b>Taxi meter games.</b> Use Grab so the price is fixed in the app, or stick to Mai Linh and Vinasun, the reputable metered taxis.",
    "<b>Wrong change and torn notes.</b> Count your change, and don't accept ripped notes, some shops won't take them back.",
    "<b>TPBank ATMs are no longer free.</b> They added a fee in 2025. Favor VPBank or another bank-branch ATM, and read the on-screen fee before you confirm."
  ],
  tippingHeading: "Not expected, always appreciated.",
  tipping: "Vietnam isn't a tipping culture, so there's no set percentage. Rounding up a taxi or leaving small notes for great service is a kind gesture, not an obligation. Upscale restaurants and hotels sometimes add a service charge already, so check the bill before you add more.",
  sources: {
    changed: "Re-checked July 2026, confirmed current. Vietnam's standard VAT is 10% but sits at a temporary 8% through 31 December 2026 under a National Assembly resolution, so most prices you pay include the lower rate for now. There is still no separate tourist or hotel tax.",
    links: [
      { label: "PwC Worldwide Tax Summaries: Vietnam's standard 10% VAT and the temporary 8% rate that runs through the end of 2026", url: "https://taxsummaries.pwc.com/vietnam/corporate/other-taxes", type: "revenue" },
      { label: "Trip.com: the tourist VAT refund and the fact that room rates already include VAT", url: "https://www.trip.com/guide/info/vietnam-tax-refund.html", type: "guide" },
    ],
    judgment: "The daily cash share, tipping norms and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  faqs: [
    { q: "Do I need cash in Vietnam?", a: "Yes. Cash is essential for everyday spending: street food, markets, taxis, small cafes and rural areas are largely cash only. Cards work at hotels, malls and nicer restaurants in the cities." },
    { q: "What is the best ATM to use in Vietnam?", a: "Use a bank-branch ATM. VPBank has been fee-free for foreign cards with a high withdrawal limit. Many other ATMs charge about 22,000 to 55,000 VND per withdrawal, and TPBank added a fee in 2025. Always choose to be charged in dong, never your home currency." },
    { q: "Should I bring US dollars to Vietnam?", a: "Bring a little clean, newer-than-2009 USD for emergencies, but pay in Vietnamese dong day to day. If you exchange cash, use a bank or a reputable gold shop rather than the airport." },
    { q: "Do you tip in Vietnam?", a: "Tipping is not expected and there is no set percentage. Rounding up or leaving small notes for good service is appreciated. Some upscale places add a service charge already." },
    { q: "How much cash should I bring for a week in Vietnam?", a: "For two mid-range travelers over a week, plan roughly 400 to 500 US dollars in day-to-day cash spending beyond your hotel, withdrawn in a couple of ATM visits. Adjust for your style and group size." }
  ],

  culture: {
    heading: "A little Vietnamese goes a long way",
    intro: "Vietnamese is written in the Latin alphabet, though its tones take practice, and a warm Xin chào and a story or two mark you as a guest rather than a tourist. A little effort is met with real warmth.",
    phrases: [
      { mean: "Hello", say: "sin chow", word: "Xin chào" },
      { mean: "Thank you", say: "kahm uhn", word: "Cảm ơn" },
      { mean: "Please", say: "lam uhn", word: "Làm ơn" },
      { mean: "Yes, politely", say: "vuhng", word: "Vâng" },
      { mean: "Delicious, tasty", say: "ngon", word: "Ngon" },
      { mean: "Cheers", say: "zoh", word: "Dzô" },
    ],
    tip: "Two daily joys are worth seeking out: <b>phở</b>, the fragrant noodle soup Vietnamese eat for breakfast, and <b>cà phê sữa đá</b>, strong coffee dripped over sweet condensed milk and poured over ice. Pull up a low plastic stool at a street stall and you are doing it exactly right.",
    stories: [
      { img: "/vietnam-culture-1.jpg",
        alt: "WPA-style illustration of a traditional wooden junk with tall red sails gliding among towering limestone karst islands in a calm emerald bay, morning mist wreathing the peaks",
        h: "Where the dragon met the sea",
        p: "Ha Long Bay is a maze of nearly two thousand limestone islands rising sheer from emerald water, often wreathed in mist. Its name means descending dragon, and legend says the peaks are jewels a great dragon spat into the sea to shield the land from invaders. Gliding among them by boat feels like sailing through a myth.",
        note: "Good to know: Ha Long means descending dragon" },
      { img: "/vietnam-culture-2.jpg",
        alt: "WPA-style illustration of farmers in conical hats tending flooded green rice terraces curving down a misty hillside, a stilt house and mountains beyond in soft morning light",
        h: "Staircases of rice up the mountains",
        p: "In the misty northern highlands around Sapa, farmers have carved the steep hillsides into shining green staircases of rice, worked by hand and by water buffalo much as they have been for generations. Fed by mountain streams, the flooded terraces mirror the sky. It is farming turned into landscape art.",
        note: "Good to know: the terraces around Sapa are centuries old" },
      { img: "/vietnam-culture-3.jpg",
        alt: "WPA-style illustration of the two Trung Sisters in ancient robes riding war elephants with spears raised, red banners flying and an army following across a misty green plain",
        h: "The sisters who led a nation",
        p: "Almost two thousand years ago, two sisters, the Trung Sisters, raised an army and rode elephants into battle to drive out a foreign occupier, becoming the first great heroines of Vietnamese history. Their revolt is remembered as the nation's first fight for independence. Streets and temples across Vietnam still carry their name.",
        note: "Good to know: the Trung Sisters are honored across Vietnam" },
    ],
    pride: "Vietnamese are resilient, quick-witted and endlessly hospitable, proud of a long history of heroines and heroes and of a culture that has always endured. Pull up a stool, share a bowl of phở, and you will be treated like an old friend."
  }
};
