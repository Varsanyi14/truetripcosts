export default {
  slug: "vietnam",
  live: true,
  name: "Vietnam",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-10",
  emergency: { medical: "115", note: "115 reaches an ambulance. There is no single all-services number, so 113 is the police and 114 is fire.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "high",
  region: "Asia",
  signals: { cardFriendliness: 1, cashNeed: 5, taxRisk: 3, atmRisk: 4 },
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
    styles: [ { n: "Budget", per: 25, cash: 0.8, room: 30 }, { n: "Mid-range", per: 50, cash: 0.7, room: 70 }, { n: "Comfort", per: 90, cash: 0.55, room: 160 } ]
  },
  connectivity: {
    works: "Yes. Vietnam has near-universal 4G and growing 5G across the cities and main travel routes, with signal thinning in remote mountain areas like Sapa and Ha Giang."
  },
  // TOURIST TAX (high-churn, verified Jul 2026). Vietnam has no separate tourist or hotel
  // tax. Room rates already include VAT, so the quoted price is the price you pay.
  // Typical economy round trip per person from major US gateways, as a verified
  // RANGE, never a point. Sourced from fare-tracker averages (Kayak, momondo,
  // Skyscanner published route data), deliberately wide to cover season and
  // gateway. HIGH-CHURN: re-verify on the tourist-tax cadence. The calculator
  // prefills the midpoint, feeds low/high into the confidence range until the
  // traveler enters their own fare, and hides the estimate if this block is absent.
  flight: { low: 850, high: 1450, checked: "Jul 2026", checkedISO: "2026-07-18" },
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
  },

  spokes: [
    {
      slug: "taxis-and-apps",
      live: true,
      topic: "taxis",
      caution: "low",
      title: "Which taxi app to use in Vietnam, and the airport scam to skip (2026) | True Trip Costs",
      description: "Which ride app to install for Vietnam (Grab, plus the electric Xanh SM and Be), how the fake-taxi and rigged-meter tricks work at the Hanoi and Ho Chi Minh City airports, and the calm way to get from the airport into town. Checked July 2026.",
      h1: "Which taxi app to use in Vietnam, and the airport scam to skip",
      lede: "The honest answer is that installing one app before you land makes most of the risk disappear. Here is the app to use, the fake-taxi trick to know, and how to get from the airport into town without the tourist markup.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Install <b>Grab</b> before you arrive. It is the dominant ride app in Vietnam and shows a fixed price up front, so there is no meter to argue about. <b>Xanh SM</b> (electric cars and bikes) and <b>Be</b> also work well in the big cities. On the street, only two taxi brands are widely trusted, <b>Mai Linh</b> (green) and <b>Vinasun</b> (white), and fakes copy their look, so if the name is not exactly right, walk on. At <b>Noi Bai</b> (Hanoi) and <b>Tan Son Nhat</b> (Ho Chi Minh City) airports, ignore anyone who approaches you offering a taxi and book your own ride instead.",
      sections: [
        {
          h: "The scam, and the two names worth trusting",
          p: [
            "Vietnam's taxi problem is narrow but real, and it clusters in the first day: a car that looks like a taxi, a meter that runs suspiciously fast or is said to be broken, and a flat price invented on the spot. The classic version is a fake cab dressed up to look like a known brand. Vietnam has two taxi companies most travelers rely on, <b>Mai Linh</b>, which is green, and <b>Vinasun</b>, which is white. Copycats use near-identical colors and a name that is close but not exact, so read the name on the car, not just the paint.",
            "Two meter tricks are worth knowing. One is a rigged meter that climbs far too quickly. The other is simpler: Vietnamese dong has a lot of zeros, and a meter reading of <b>64.0</b> means <b>64,000 dong</b>, not 640,000, and drivers sometimes lean on that confusion. The clean way around all of it is to book on an app, where the fare is agreed before you get in."
          ]
        },
        {
          h: "Which app to install",
          p: [
            "<b>Grab</b> is the one to have. It is the largest ride app in Vietnam, works in Hanoi, Ho Chi Minh City, Da Nang, Hoi An and most cities a visitor goes, and it does both cars and motorbike rides. Because the price is fixed in the app, the meter argument never happens. If you have used Grab elsewhere in Southeast Asia, it is the same app and login.",
            "Two local alternatives are worth adding as backups. <b>Xanh SM</b> is an all-electric fleet, often a little cheaper and easy to spot. <b>Be</b> is another Vietnamese app. Any of the three protects you the same way. One warning that applies to all of them: if a street driver flashes a Grab price on his own phone, do not trust it, because he may have picked a pricier option. Check the fare in your own app."
          ]
        },
        {
          h: "Getting from the airport into town",
          p: [
            "This is where first-day scams happen, so have a plan. At <b>Noi Bai</b> (Hanoi) and <b>Tan Son Nhat</b> (Ho Chi Minh City), people will approach you inside and just outside arrivals offering a taxi. Politely decline and keep walking. Open your app and book a ride to the marked ride-hailing pickup point, or head to the official metered-taxi rank and use only a Mai Linh or Vinasun car.",
            "As a rough sense of the fare, a metered or app ride from Noi Bai into central Hanoi tends to run around <b>250,000 to 400,000 dong</b> (roughly 10 to 16 US dollars), depending on traffic and car size. A fake cab may try to charge a million dong or more for the same trip, so a quote well above that range is your signal to walk away."
          ]
        },
        {
          h: "Fares, paying and tipping",
          p: [
            "In the app you can usually pay by card or in cash, and cash is still common, so carry small dong notes. If you take a legitimate street taxi, make sure the meter is running from the start and keep an eye on the reading. Tipping is not expected for a metered or app ride, though rounding up is a kind gesture and appreciated for a motorbike ride or heavy bags.",
            "For the bigger money picture in Vietnam, including how much cash to carry and how card-friendly it is, see the <a href=\"/vietnam\">Vietnam money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Does Uber work in Vietnam?", a: "No. Uber left Vietnam in 2018 when it sold its Southeast Asia business to Grab, so there is no Uber here. Grab is the main ride app, with Xanh SM (electric) and Be as local alternatives. Install one before you land and use it instead of hailing on the street." },
        { q: "Which taxi app is best in Vietnam?", a: "Grab is the most widely used and works in all the cities most visitors see, with a fixed price shown before you ride. Xanh SM, an all-electric fleet, is often slightly cheaper, and Be is another Vietnamese option. Any of the three removes the meter argument and lets you track the route." },
        { q: "Are taxis at Hanoi and Ho Chi Minh City airports a scam?", a: "The legitimate ones are fine, but the airports draw touts and fake cabs. Ignore anyone who approaches you offering a taxi, and either book a ride in your app to the marked pickup point or use the official rank with a Mai Linh (green) or Vinasun (white) car. A real metered ride into central Hanoi from Noi Bai is roughly 250,000 to 400,000 dong." },
        { q: "How do I read a Vietnamese taxi meter?", a: "Vietnamese dong has many zeros, so meters usually drop the last three. A reading of 64.0 means 64,000 dong, not 640,000. Watch that the meter is running from the start and climbing at a normal pace. If it races, or the driver says it is broken and quotes a flat price, get out. Using an app avoids the issue entirely." }
      ],
      sources: {
        links: [
          { label: "Grab: Vietnam's dominant ride-hailing app, confirming it operates for cars and motorbike rides across the major cities", url: "https://www.grab.com/vn/en/", type: "app" },
          { label: "US Department of State: Vietnam country information, general safety and local-travel context for US visitors", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Vietnam.html", type: "gov" },
          { label: "Vietnam Unlock: a recent traveler guide describing the fake-taxi and airport pickup scams and how ride apps avoid them", url: "https://vietnamunlock.com/vietnam-scams/", type: "guide" }
        ],
        judgment: "The dominant app can shift, since Xanh SM has grown fast since 2023, and fares move with fuel and traffic, so treat the dong figures as a recent read and check the price in your own app before you ride. Apps also come and go from smaller towns, so confirm coverage there. Checked July 2026."
      }
    }
  ]
};
