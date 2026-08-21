import { S } from './carrier-spine.js';

export default {
  slug: "vietnam",
  iso2: "vn",
  live: true,
  name: "Vietnam",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-10",
  emergency: { medical: "115", note: "115 reaches an ambulance. There is no single all-services number, so 113 is the police and 114 is fire.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "high",
  region: "Asia",
  signals: { cardFriendliness: 1, cashNeed: 5, taxRisk: 3, atmRisk: 4 },
  title: "Vietnam money 2026: cash, cards and ATM fees",
  description: "Vietnam runs on cash, and most ATMs charge a fee with low limits. Pay in dong rather than dollars, and watch the zeros: the notes look alike. Checked 2026.",
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
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Vietnamese dong (VND)" },
        { k: "Cards", v: "Hotels, malls, nicer restaurants" },
        { k: "Cash for", v: "Street food, markets, taxis" },
        { k: "Watch", v: "Big numbers, mind the zeros" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Vietnam? Yes, carry dong 2026",
      description: "Cards work at hotels and nicer restaurants, but street food, markets and taxis run on cash. Mind the many zeros on dong notes, and choose dong.",
      h1: "Do I need cash in Vietnam, or can I use cards?",
      lede: "Short answer: cards for hotels and larger purchases, and dong cash for daily life. One quirk to watch: the dong has a lot of zeros, so notes are easy to mix up. Here is how to handle it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Both, and carry cash. Vietnam takes <b>cards at hotels, malls and nicer restaurants</b> in cities, where <b>contactless</b> is growing, but <b>street food, markets, small shops and taxis</b> are largely cash. The currency is the <b>dong</b>, which has <b>a lot of zeros</b> (a bowl of pho might be 50,000, a nicer dinner 500,000), so <b>mind the notes</b>, since large and small ones look similar. Choose <b>dong, not dollars</b>, on any card or ATM. Use <b>Grab</b> for taxis.",
      sections: [
        {
          h: "Cash-reliant, and mind the zeros",
          icon: "cash",
          key: { fig: "Mind the zeros", tag: "Notes look alike", text: "Cards work in cities, but daily life is cash. The dong has many zeros, so 50,000 and 500,000 notes are easy to mix up.", tone: "teal" },
          p: [
            "Vietnam takes <b>cards at hotels, malls and nicer restaurants</b> in cities, and <b>contactless</b> is growing. But <b>street food, markets, small shops and taxis</b> run largely on <b>cash</b>, so carry <b>dong</b>.",
            "The quirk to watch: the dong has <b>a lot of zeros</b>. A street bowl of pho might be <b>50,000</b> and a nicer dinner <b>500,000</b>, and the notes <b>look similar</b>, so check the number of zeros before you hand over a note, to avoid overpaying tenfold."
          ]
        },
        {
          h: "Choose dong, not dollars",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose dong", text: "When a terminal or ATM offers dollars or dong, pick dong. Dollars trigger dynamic currency conversion at a rate about 3 to 8% worse.", tone: "amber" },
          p: [
            "When a card terminal or ATM asks whether to charge in <b>dollars or dong, always choose dong</b>. Dollars trigger dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. Decline it every time.",
            "For cash, use ATMs at <b>major banks</b>. Some cap withdrawals low or charge foreign-card fees, though banks like <b>TPBank</b> tend to allow larger withdrawals. Use a <b>debit card</b> to avoid cash-advance fees."
          ]
        },
        {
          h: "Getting cash, and taxis",
          icon: "dong",
          key: { fig: "Small notes", tag: "For daily spending", text: "Break large notes when you can, and keep smaller ones for daily spending. Use Grab for taxis, at a fixed price.", tone: "teal" },
          p: [
            "Keep a mix, and <b>break large notes</b> at hotels or bigger shops so you have smaller ones for <b>street food and small vendors</b>. For <b>taxis</b>, use <b>Grab</b>, which shows a fixed price and avoids meter disputes.",
            "For tipping norms, see <a href='/vietnam/tipping'>tipping in Vietnam</a>, and for the wider picture, the <a href='/vietnam'>Vietnam money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Vietnam?", a: "Yes. Cards work at hotels, malls and nicer restaurants in cities, but street food, markets, small shops and taxis are largely cash. Carry dong, and mind the many zeros on the notes." },
        { q: "Should I pay in dong or dollars in Vietnam?", a: "Always dong. If a card machine or ATM offers dollars, decline: that dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
        { q: "Why is Vietnamese money confusing?", a: "The dong has a lot of zeros, so amounts run into the tens and hundreds of thousands, and notes like 50,000 and 500,000 look similar. Check the number of zeros before handing over a note, to avoid overpaying tenfold." },
        { q: "How do I pay for taxis in Vietnam?", a: "Use Grab, which shows a fixed price up front and avoids meter disputes. Otherwise use a metered taxi from a trusted company and pay in dong." }
      ],
      sources: {
        links: [
          { label: "State Bank of Vietnam: official exchange rate information", url: "https://www.sbv.gov.vn/webcenter/portal/en/home", type: "gov" },
          { label: "US State Department: Vietnam country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Vietnam.html", type: "gov" }
        ],
        judgment: "Vietnam takes cards in cities but daily life runs on cash, and the dong's many zeros make notes easy to confuse. The dong rate moves, and the firm rule is to decline dollar conversion. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Not required, but appreciated" },
        { k: "Restaurants", v: "Round up, or small change" },
        { k: "Tourist areas", v: "Small tips are common" },
        { k: "How", v: "Cash, in small dong notes" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Vietnam: how much and when 2026",
      description: "Tipping is appreciated but not required in Vietnam. The service charge some places add, and what to leave guides, drivers and spa staff. Checked 2026.",
      h1: "Tipping in Vietnam",
      lede: "Vietnam has a light tipping culture: not required, but increasingly appreciated in tourist areas. Round up at restaurants, tip guides and spa staff a little, and use small dong notes. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Vietnam has a <b>light tipping culture</b>: not traditionally required, but <b>increasingly appreciated</b>, especially in tourist areas. At a <b>restaurant</b>, <b>rounding up</b> or leaving the <b>small change</b> is normal, and a bit more for good service; some tourist and upscale places add a <b>service charge</b>, so check the bill. It is common to tip a <b>guide, driver, spa therapist or hotel porter</b> a small amount. For <b>taxis</b>, use Grab or round up. Leave tips in <b>cash</b>, in small dong notes.",
      sections: [
        {
          h: "Not required, but appreciated",
          icon: "coins",
          key: { fig: "Round up", tag: "Appreciated, not obligatory", text: "Tipping is not traditional but increasingly appreciated in tourist areas. Round up or leave the small change at a restaurant.", tone: "teal" },
          p: [
            "Vietnam did not traditionally have a tipping culture, but in <b>tourist areas it is increasingly appreciated</b>. At a <b>restaurant</b>, <b>rounding up</b> or leaving the <b>small change</b> is normal, with a bit more for good service. At a <b>street stall or local eatery</b>, no tip is expected.",
            "Some <b>tourist and upscale restaurants</b> add a <b>service charge</b> (often 5 to 10%), so <b>check the bill</b>; if it is there, you need not tip on top."
          ]
        },
        {
          h: "Where a tip is a nice gesture",
          icon: "tip",
          key: { fig: "Small tips", tag: "Guides, spa, porters", text: "A small tip for a guide, driver, spa therapist or hotel porter is common and appreciated in tourist areas.", tone: "teal" },
          p: [
            "It is common and appreciated to leave a <b>small tip</b> for a <b>tour guide, driver, spa or massage therapist, or hotel porter</b>, especially on the tourist trail. Amounts are modest, a few dollars' worth of dong for a service well done.",
            "It is a <b>kind gesture</b>, not an obligation, so there is no set percentage to track."
          ]
        },
        {
          h: "Taxis, and paying in dong",
          icon: "dong",
          key: { fig: "Small dong", tag: "Use Grab or round up", text: "For taxis, use Grab (a fixed price) or round up a metered fare. Leave tips in cash, in small dong notes.", tone: "teal" },
          p: [
            "For <b>taxis</b>, the easiest is <b>Grab</b>, which shows a fixed price, or <b>round up</b> a metered fare from a trusted company. Leave any tip in <b>cash, in small dong notes</b>, since large notes are hard to use for tips. For the wider picture, see the <a href='/vietnam'>Vietnam money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Vietnam?", a: "It is not required, but increasingly appreciated in tourist areas. Round up or leave the small change at a restaurant, and a bit more for good service. At street stalls, no tip is expected." },
        { q: "Is there a service charge in Vietnam?", a: "Sometimes, at tourist and upscale restaurants, often 5 to 10%. Check the bill; if a service charge is there, you need not tip on top." },
        { q: "Should I tip a guide or driver in Vietnam?", a: "Yes, a small tip for a tour guide, driver, spa therapist or hotel porter is common and appreciated in tourist areas. Amounts are modest, a few dollars' worth of dong." },
        { q: "Do you tip taxi drivers in Vietnam?", a: "Rounding up a metered fare is a kind gesture but not required. The easiest option is Grab, which shows a fixed price up front, so there is no need to negotiate or tip." }
      ],
      sources: {
        links: [
          { label: "US State Department: Vietnam country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Vietnam.html", type: "gov" }
        ],
        judgment: "Vietnamese tipping is light and emerging, most visible in tourist areas, with a service charge common at some tourist and upscale restaurants. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Two big apps", v: "Xanh SM and Grab (also Be)" },
        { k: "Fares", v: "Fixed in-app, no meter" },
        { k: "Street taxis", v: "Only Mai Linh or Vinasun" },
        { k: "Airport", v: "Plan ahead, first-day scams" }
      ],
      live: true,
      topic: "taxis",
      caution: "low",
      title: "Vietnam taxi apps, and the airport scam to skip",
      description: "Grab is no longer the only ride app in Vietnam: electric Xanh SM overtook it. Compare both in-app, and skip the fake-taxi trick at Hanoi and HCMC airports.",
      h1: "Which taxi app to use in Vietnam, and the airport scam to skip",
      lede: "The honest answer is that installing one app before you land makes most of the risk disappear. Here is the app to use, the fake-taxi trick to know, and how to get from the airport into town without the tourist markup.",
      checked: "Aug 2026",
      checkedISO: "2026-08-14",
      answer: "For a decade the standard advice was just use Grab. That changed: in 2025 the local electric-taxi app <b>Xanh SM</b> overtook Grab to become <b>Vietnam's largest ride app</b>, with roughly <b>44.7% of the market against Grab's 36%</b> by mid-2025, and its fares often beat Grab's surge pricing. So <b>install Grab, Xanh SM and Be</b>, then <b>compare the in-app quote for each trip</b>. All three show a fixed price up front, so there is no meter to argue about. On the street, only two taxi brands are widely trusted, <b>Mai Linh</b> (green) and <b>Vinasun</b> (white), and fakes copy their look, so if the name is not exactly right, walk on. At <b>Noi Bai</b> (Hanoi) and <b>Tan Son Nhat</b> (Ho Chi Minh City) airports, ignore anyone who approaches you offering a taxi and book your own ride instead.",
      sections: [
        {
          h: "The scam, and the two names worth trusting",
          icon: "alert",
          key: { tag: "Trust two brands", text: "Vietnam's taxi problem clusters in the first day: a fake-branded car, a meter that runs fast or is said to be broken. On the street, trust only Mai Linh or Vinasun, and otherwise use an app.", tone: "amber" },
          p: [
            "Vietnam's taxi problem is narrow but real, and it clusters in the first day: a car that looks like a taxi, a meter that runs suspiciously fast or is said to be broken, and a flat price invented on the spot. The classic version is a fake cab dressed up to look like a known brand. Vietnam has two taxi companies most travelers rely on, <b>Mai Linh</b>, which is green, and <b>Vinasun</b>, which is white. Copycats use near-identical colors and a name that is close but not exact, so read the name on the car, not just the paint.",
            "Two meter tricks are worth knowing. One is a rigged meter that climbs far too quickly. The other is simpler: Vietnamese dong has a lot of zeros, and a meter reading of <b>64.0</b> means <b>64,000 dong</b>, not 640,000, and drivers sometimes lean on that confusion. The clean way around all of it is to book on an app, where the fare is agreed before you get in."
          ]
        },
        {
          h: "Which app to install",
          icon: "phoneok",
          key: { fig: "44.7%", tag: "Xanh SM, against Grab's 36%", text: "The local electric-taxi app Xanh SM overtook Grab in 2025 to become Vietnam's largest ride app. Install both, plus Be, and compare the quote for each trip rather than defaulting to one.", tone: "teal" },
          p: [
            "The advice most guides still give, just use Grab, is out of date. In 2025 <b>Xanh SM</b>, a Vietnamese all-electric taxi app, <b>overtook Grab</b> to become the <b>largest ride app in Vietnam</b>, on roughly <b>44.7% of the market against Grab's 36%</b> by mid-2025, and its fares <b>often beat Grab's surge pricing</b>. <b>Grab</b> is still the broader super-app, works in Hanoi, Ho Chi Minh City, Da Nang, Hoi An and most cities a visitor goes, does cars and motorbike rides, and uses the same app and login you may already have from elsewhere in Southeast Asia.",
            "So the useful habit is not picking a winner, it is <b>installing Grab, Xanh SM and Be and comparing the in-app quote</b> for each trip, since which one is cheapest genuinely varies by city, hour and surge. Any of the three protects you the same way. One warning that applies to all of them: if a street driver flashes a Grab price on his own phone, do not trust it, because he may have picked a pricier option. Check the fare in your own app."
          ]
        },
        {
          h: "Getting from the airport into town",
          icon: "plane",
          key: { fig: "Plan ahead", tag: "First-day scams", text: "At Noi Bai (Hanoi) and Tan Son Nhat (Ho Chi Minh City), people approach offering rides at inflated rates. Book a Grab to the app pickup point, or use a trusted-brand taxi at the rank.", tone: "teal" },
          p: [
            "This is where first-day scams happen, so have a plan. At <b>Noi Bai</b> (Hanoi) and <b>Tan Son Nhat</b> (Ho Chi Minh City), people will approach you inside and just outside arrivals offering a taxi. Politely decline and keep walking. Open your app and book a ride to the marked ride-hailing pickup point, or head to the official metered-taxi rank and use only a Mai Linh or Vinasun car. The rule that settles it: <b>only get in a car whose plate matches your app</b>, and <b>ignore touts who shout app names or wave a phone showing an inflated Grab fare</b>.",
            "As a rough sense of the fare, a metered or app ride from Noi Bai into central Hanoi tends to run around <b>250,000 to 400,000 dong</b> (roughly 10 to 16 US dollars), depending on traffic and car size. A fake cab may try to charge a million dong or more for the same trip, so a quote well above that range is your signal to walk away."
          ]
        },
        {
          h: "Fares, paying and tipping",
          icon: "dong",
          key: { fig: "Small dong", tag: "Carry cash too", text: "In the app you can usually pay by card or cash, and cash is still common, so carry small dong notes. In a legitimate street taxi, make sure the meter is running.", tone: "teal" },
          p: [
            "In the app you can usually pay by card or in cash, and cash is still common, so carry small dong notes. If you take a legitimate street taxi, make sure the meter is running from the start and keep an eye on the reading. Tipping is not expected for a metered or app ride, though rounding up is a kind gesture and appreciated for a motorbike ride or heavy bags.",
            "For the bigger money picture in Vietnam, including how much cash to carry and how card-friendly it is, see the <a href=\"/vietnam\">Vietnam money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Does Uber work in Vietnam?", a: "No. Uber left Vietnam in 2018 when it sold its Southeast Asia business to Grab, so there is no Uber here. Grab is the main ride app, with Xanh SM (electric) and Be as local alternatives. Install one before you land and use it instead of hailing on the street." },
        { q: "Which taxi app is best in Vietnam?", a: "There is no longer one answer, which is the change worth knowing. Xanh SM, an all-electric Vietnamese fleet, overtook Grab in 2025 to become the largest ride app, on roughly 44.7% of the market against Grab's 36% by mid-2025, and often beats Grab's surge pricing. Install Grab, Xanh SM and Be and compare the quote for each trip." },
        { q: "Are taxis at Hanoi and Ho Chi Minh City airports a scam?", a: "The legitimate ones are fine, but the airports draw touts and fake cabs. Ignore anyone who approaches you offering a taxi, and either book a ride in your app to the marked pickup point or use the official rank with a Mai Linh (green) or Vinasun (white) car. A real metered ride into central Hanoi from Noi Bai is roughly 250,000 to 400,000 dong." },
        { q: "How do I read a Vietnamese taxi meter?", a: "Vietnamese dong has many zeros, so meters usually drop the last three. A reading of 64.0 means 64,000 dong, not 640,000. Watch that the meter is running from the start and climbing at a normal pace. If it races, or the driver says it is broken and quotes a flat price, get out. Using an app avoids the issue entirely." }
      ],
      sources: {
        links: [
          { label: "Grab: Vietnam's dominant ride-hailing app, confirming it operates for cars and motorbike rides across the major cities", url: "https://www.grab.com/vn/en/", type: "app" },
          { label: "US Department of State: Vietnam country information, general safety and local-travel context for US visitors", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Vietnam.html", type: "gov" },
          { label: "Vietnam Unlock: a recent traveler guide describing the fake-taxi and airport pickup scams and how ride apps avoid them", url: "https://vietnamunlock.com/vietnam-scams/", type: "guide" }
        ],
        judgment: "One caution on the market-share figures, because they are less settled than a single number suggests. The 44.7% against 36% reading is a market-share measure for mid-2025, and other surveys using different metrics put Grab ahead on usage rate, so the honest summary is that two apps now compete closely rather than that one has won outright. That is also why our advice is to compare both rather than to switch allegiance. If Xanh SM's lead reverses, the practical instruction does not change. Fares move with fuel, traffic and surge, so treat the dong figures as a recent read and check the price in your own app before you ride. Apps also come and go from smaller towns, so confirm coverage there. Checked Aug 2026."
      }
    },
    {
      slug: "money-scams",
      glance: [
        { k: "Taxis", v: "Rigged meters, fake branding" },
        { k: "At the airport", v: "A fake Grab app screen" },
        { k: "The notes", v: "Big dong notes look alike" },
        { k: "Costliest", v: "Motorbike-rental damage" }
      ],
      live: true,
      topic: "scams",
      title: "Common money scams in Vietnam, and what they cost",
      description: "Fake-branded taxis and rigged meters, the fake-Grab airport trick, shortchanging on confusing dong notes, and the motorbike-rental damage scam.",
      h1: "Common money scams in Vietnam, and what they cost you",
      lede: "Vietnam is a wonderful and largely trouble-free trip, and the scams that target tourists are mostly small-value money hustles, not danger: overcharging, sleight of hand and a few transport tricks. They rely on confusion, and a few habits defuse nearly all of them. Here is each one and how to avoid it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "The recurring traps are money ones: <b>taxis</b> with <b>rigged meters</b> or <b>fake company branding</b> that copy the real firms, the <b>fake Grab app</b> trick at the airport, <b>shortchanging</b> and note-switching on Vietnam's <b>confusing dong notes</b>, <b>motorbike-rental damage</b> charged for pre-existing scratches, and overcharging by unofficial <b>xe om</b> (motorbike taxis) and cyclos. The habits that beat them: use the real <b>Grab, Be or Xanh SM</b> app booked on your own phone, or only <b>Vinasun (white) or Mai Linh (green)</b> taxis, <b>count your money and pay close to exact</b>, and <b>video any rental</b>. Most of it is low-value and easily avoided.",
      sections: [
        {
          h: "Taxis: rigged meters and fake branding",
          icon: "taxi",
          key: { fig: "3-10x", tag: "Fake-branded cars", text: "Vietnam's classic: an unlicensed car with a rigged fast meter, a long route, or branding that copies a real firm, overcharging three to ten times. Use Grab, Be or Xanh SM, or Mai Linh and Vinasun.", tone: "amber" },
          p: [
            "Vietnam's classic is the taxi that <b>overcharges 3 to 10 times</b> the real fare: an unlicensed car, a <b>rigged meter</b> that runs fast, a long route, or <b>fake branding</b> that mimics the reputable firms' colors. The two firms to trust are <b>Vinasun (white)</b> and <b>Mai Linh (green)</b>, with the company name clearly on the car, but the cleaner defense is the <b>Grab app</b> (or <b>Be</b> or <b>Xanh SM</b>, the electric-car service), which shows the price, route and driver up front and needs no cash.",
            "If you take a street taxi, <b>confirm the meter is running</b> before you move, and refuse any cab that <b>approaches you</b> at the airport or a tourist site. For <b>xe om</b> (motorbike taxis) and cyclos, unofficial drivers near stations quote high for short hops, so use Grab for a fixed price, and for a cyclo <b>agree the total before you get in</b> and hold firm at the end."
          ]
        },
        {
          h: "The fake Grab app at the airport",
          icon: "phoneok",
          key: { fig: "Your app", tag: "Screen trick", text: "A newer trap: a driver taps your destination into a phone and turns the screen to show what looks like a Grab fare. Book the ride yourself in your own app so you control the price.", tone: "teal" },
          p: [
            "A newer arrival trap: a driver approaches you in the terminal, taps your destination into a phone, and <b>turns the screen around to show what looks like the Grab app</b> with a fixed price. It is a <b>fake app or a screenshot</b>. The defense is simple: <b>open the real Grab on your own phone</b>, book the ride yourself, and watch the <b>driver's name and license plate appear in the app</b> before you walk to the pickup point. <b>Only get into the car you called</b>, never one that approached you.",
            "The airports at <b>Ho Chi Minh City, Hanoi and Da Nang</b> have <b>designated Grab pickup points</b> and <b>official taxi stands</b> with fixed-rate metered cabs; if you do not have a local SIM yet, staff at the airport Grab counter can book for you. That gets you into the city at a fair, known price."
          ]
        },
        {
          h: "Money: shortchanging and the confusing notes",
          icon: "denom",
          key: { fig: "The zeros", tag: "Big notes look alike", text: "Vietnam's dong notes are easy to muddle: similar colors and lots of zeros, so a 500,000 note, about $20, is easily confused with a 20,000. Count your change.", tone: "teal" },
          p: [
            "Vietnam's <b>dong notes are easy to muddle</b>: several are similar colors, and the numbers are large, so a <b>500,000 dong note (about 20 dollars)</b> is easy to confuse with a <b>20,000</b>. Drivers and vendors sometimes exploit this with <b>sleight of hand</b>, swapping your note for a smaller one, or claiming they have <b>no change</b>. Before you travel, <b>learn the notes</b>, and when you pay cash, <b>count it out and say the amount</b>, keep denominations separate, and settle close to exact.",
            "Change money only at <b>banks or official exchange counters</b>, checking the rate first, and use <b>bank ATMs</b>, which do charge a fee. At the card machine or ATM, choose <b>dong, not your home currency</b>. Paying by app or card wherever you can removes most change-related tricks entirely."
          ]
        },
        {
          h: "Motorbike rentals, and a few extras",
          icon: "wheel",
          key: { tag: "Photograph it first", text: "The motorbike-rental damage scam can cost real money: on return the shop points to pre-existing scratches and demands a fee, and some hold your passport. Photograph the bike first and avoid leaving your passport.", tone: "amber" },
          p: [
            "The <b>motorbike-rental damage scam</b> is the one that can cost real money: on return, the shop points to <b>pre-existing scratches</b> and demands a fee, and some hold an <b>excessive deposit</b> or your passport. The fix: <b>photograph and video the bike from all angles</b> before you ride, rent from a <b>reputable shop or your hotel</b>, and <b>never leave your passport as the deposit</b>, only a copy.",
            "Smaller ones round out the list: a <b>shoeshiner</b> who starts work unasked then demands <b>200,000 dong</b>, a coconut or fruit vendor who hands you their pole for a photo then charges, and <b>fake tour operators</b> selling <b>Ha Long Bay cruises</b> on boats that do not match the listing. Decline unsolicited services, agree prices first, and book cruises through a <b>reputable operator or your hotel</b>."
          ]
        },
        {
          h: "What this means for your money",
          icon: "cash",
          key: { fig: "Short list", tag: "How to avoid it", text: "Nearly all of it is low-value and annoying, not dangerous, and the same list defuses it: use the real Grab, Be or Xanh SM app, count your change, and photograph any rental.", tone: "teal" },
          p: [
            "Nearly all of it is <b>low-value and frustrating rather than dangerous</b>, and the same short list defuses it: use the <b>real Grab, Be or Xanh SM app</b> (or only Vinasun and Mai Linh taxis), <b>count your money and pay close to exact</b>, <b>video any rental and keep your passport</b>, and <b>agree prices before cyclos, photos or tours</b>. The one worth active care is the <b>motorbike-rental damage</b> charge.",
            "Handled calmly, Vietnam is a superb and welcoming trip. For getting around, see the <a href=\"/vietnam/taxis-and-apps\">Vietnam taxis and apps guide</a>, and for the wider picture the <a href=\"/vietnam\">Vietnam cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Vietnam safe for tourists?", a: "For most visitors, yes, and trips are largely trouble-free. The scams that target tourists are mostly small-value money hustles, taxi overcharging, shortchanging and rental disputes, rather than anything dangerous. Using the real Grab app, sticking to Vinasun or Mai Linh taxis, counting your money, and videoing any rental avoids nearly all of them." },
        { q: "How do I avoid taxi scams in Vietnam?", a: "Use the Grab app (or Be or Xanh SM), which shows the price, route and driver upfront, or take only Vinasun (white) or Mai Linh (green) taxis with the company name clearly on the car, since other cabs copy their colors. Confirm the meter is running before you move, and refuse any taxi that approaches you at the airport or a tourist site." },
        { q: "What is the fake Grab app scam at Vietnamese airports?", a: "A driver approaches you in the terminal and turns his phone around to show what looks like the Grab app with a fixed price, but it is a fake app or a screenshot. Open the real Grab on your own phone, book the ride yourself, confirm the driver's name and plate in the app, and only get into the car you called. The main airports also have official taxi stands and Grab counters." },
        { q: "Why is Vietnamese money so easy to get wrong?", a: "The dong comes in large numbers and several notes are similar colors, so a 500,000 note (about 20 dollars) is easy to confuse with a 20,000. Some drivers and vendors exploit this by switching notes or claiming no change. Learn the notes before you travel, count cash out and say the amount as you pay, and use an app or card where you can." },
        { q: "How do I avoid the motorbike rental damage scam?", a: "Photograph and video the bike from every angle before you ride, so pre-existing scratches cannot be blamed on you, and rent from a reputable shop or through your hotel. Never leave your passport as the deposit, only a copy, and be wary of shops asking for an unusually large cash deposit." }
      ],
      sources: {
        links: [
          { label: "US State Department: Vietnam country information and safety guidance for travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Vietnam.html", type: "gov" },
          { label: "Vietnam Unlock: a 2026 guide to which scams actually target tourists and how to avoid them", url: "https://vietnamunlock.com/vietnam-scams/", type: "guide" }
        ],
        judgment: "These are the money traps most consistently reported by travelers in 2025 and 2026, concentrated in Ho Chi Minh City, Hanoi and the tourist hubs, not a ranked risk list, and dong amounts and the dominant app can shift, so treat figures as a recent read. Most of it is low-value and easily avoided. Checked July 2026."
      }
    },
    {
      slug: "e-visa",
      glance: [
        { k: "Visa", v: "e-Visa, apply online" },
        { k: "Validity", v: "Up to 90 days, single or multiple entry" },
        { k: "Cost", v: "$25 single-entry, $50 multiple-entry" },
        { k: "Where", v: "evisa.gov.vn only" }
      ],
      live: true,
      topic: "visas",
      title: "Vietnam e-visa for US citizens: how to apply 2026",
      description: "US citizens need a visa for Vietnam, and the e-visa online is simplest. The one official portal, $25 single or $50 multiple entry, and 90-day validity.",
      h1: "How do US citizens get a Vietnam e-visa?",
      lede: "Short answer: online, on one official government site, before you travel. US citizens need a visa for Vietnam, the e-visa is the easy route, but search results are full of middlemen charging well above the real fee. Here is the official site and the real cost.",
      checked: "Jul 2026",
      checkedISO: "2026-07-26",
      answer: "US citizens need a <b>visa for Vietnam</b>, and the simplest route is the <b>e-visa</b>, applied for <b>online before you fly</b> on the one official portal, <b>evisa.gov.vn</b>. It is valid for <b>up to 90 days</b>, in a <b>single-entry ($25)</b> or <b>multiple-entry ($50)</b> version, and approval usually takes about <b>three to five working days</b>. There is no simple visa on arrival for US tourists, so arrange the e-visa in advance.",
      official: {
        label: "Official Vietnam e-Visa portal",
        url: "https://evisa.gov.vn",
        note: "This is the Vietnamese Immigration Department's official e-Visa site (it also runs at thithucdientu.gov.vn). The whole application is here: fill the form, upload your passport page and a photo, declare your entry port, and pay online. The fee is charged in Vietnamese dong, so the dollar amount can vary a little with the exchange rate."
      },
      expediter: true,
      expediterNote: "Vietnam's form trips people up on small details, above all the entry port, which must match exactly where you actually arrive. If you would rather have someone check it, or you are short on time, a private visa service will file it for a fee on top of the government charge. You never need one, the official portal above is cheaper, but some travelers use one for peace of mind.",
      expediterLabel: "File with a visa service",
      sections: [
        {
          h: "Which e-visa, and what it costs",
          icon: "receipt",
          key: { fig: "$25 or $50", tag: "Single or multiple", text: "One e-visa, valid up to 90 days, in a single-entry version for $25 or a multiple-entry version for $50. The fee is charged in dong and is non-refundable.", tone: "teal" },
          p: [
            "There is one tourist <b>e-visa</b>, valid for <b>up to 90 days</b>. You choose <b>single-entry for $25</b> or <b>multiple-entry for $50</b>, the multiple-entry worth it if you plan to slip into Cambodia, Laos or Thailand and come back. The fee is set by the Immigration Department, charged in <b>Vietnamese dong</b> (so the dollar figure shifts a little with the exchange rate), and it is <b>non-refundable</b>, even if refused.",
            "The visa runs from the <b>entry date you request</b>, not the day you apply, and it <b>cannot be extended</b>, so if you might stay longer, choose the multiple-entry or a later start rather than cutting it fine. Your passport needs <b>six months</b> of validity and a couple of blank pages."
          ]
        },
        {
          h: "How to apply, step by step",
          icon: "qr",
          key: { fig: "3 to 5 days", tag: "Apply ahead", text: "Apply on the official portal a week or two before you fly, with your passport, a photo and your exact entry port. Approval usually takes three to five working days.", tone: "teal" },
          p: [
            "Allow about <b>three to five working days</b>, and apply a week or two ahead to be safe."
          ],
          steps: [
            "Go to the official portal, evisa.gov.vn, and start a new e-visa application. Go there directly, not through a search ad.",
            "Fill in your details and upload a passport-style photo and a scan of your passport page.",
            "Declare your entry and exit ports carefully, they must match where you actually arrive and leave, then pay the fee online.",
            "Wait for the result by email, usually three to five working days. Download and print the e-visa and carry it, airlines check it at boarding and immigration checks it on arrival."
          ]
        },
        {
          h: "The official site, and the many that are not",
          icon: "alert",
          key: { tag: "Beware visa middlemen", text: "Like India, Vietnam draws swarms of lookalike sites that charge well above the $25 to $50 government fee to file the same form. Use only evisa.gov.vn.", tone: "amber" },
          p: [
            "Vietnam is one of the worst destinations for <b>visa middlemen</b>: search results are full of sites that charge well above the <b>$25 to $50</b> government fee to file the same application, and some only fill in the form for you at a markup. The official portals are <b>evisa.gov.vn</b> and <b>thithucdientu.gov.vn</b>, so if a site charges noticeably more, it is adding its own fee.",
            "Be wary too of anything selling a Vietnam <b>visa on arrival</b>: the old approval-letter system is a private workaround rather than a government service, and for US citizens the clean route is the official e-visa arranged before you fly."
          ]
        },
        {
          h: "A couple of gotchas",
          icon: "plane",
          key: { tag: "Match your port, no extension", text: "The e-visa is tied to the entry port you declare and cannot be extended, so match it to how and where you arrive, and pick multiple-entry if you will leave and return.", tone: "amber" },
          p: [
            "The single biggest slip is the <b>entry port</b>: the e-visa lists the port you declared, and you are expected to arrive there, so if your plans change you may need to reapply. The e-visa <b>cannot be extended</b>, and if you leave and re-enter, say a side trip to Angkor Wat, you need the <b>multiple-entry</b> version. Overstaying brings daily fines.",
            "For how money works once you are there, cards, cash, ATMs and the rest, see the <a href=\"/vietnam\">Vietnam money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa for Vietnam?", a: "Yes. US citizens need a visa, and the easiest route is the Vietnam e-visa, applied for online at evisa.gov.vn before you travel. Vietnam's short visa-free waiver does not include US passport holders, and there is no simple visa on arrival, so arrange the e-visa in advance. It is valid for up to 90 days, single or multiple entry." },
        { q: "How much is the Vietnam e-visa for US citizens?", a: "The official government fee is $25 for a single-entry e-visa and $50 for a multiple-entry one, both valid up to 90 days. It is charged in Vietnamese dong, so the dollar amount can vary a little, and it is non-refundable. Third-party sites charge more to file the same form, so apply on the official portal." },
        { q: "What is the official Vietnam e-visa website?", a: "evisa.gov.vn, run by the Vietnamese Immigration Department, which also operates at thithucdientu.gov.vn. Vietnam's search results are full of third-party sites that charge inflated fees for the same visa, so apply directly on the official site and confirm the current fee there." },
        { q: "How long does the Vietnam e-visa take?", a: "Usually about three to five working days, though it can run longer in busy periods. Apply a week or two before you fly, and do not book non-refundable travel until it is approved. The e-visa cannot be extended, so for a longer trip choose the multiple-entry version or a later start date." }
      ],
      sources: {
        links: [
          { label: "Vietnam Immigration Department: the official Vietnam e-Visa portal, application, fees and conditions", url: "https://evisa.gov.vn", type: "gov" },
          { label: "US Embassy in Vietnam: Vietnamese visas and entry and exit information for US citizens", url: "https://vn.usembassy.gov/vietnamese-visas-and-entry-exit/", type: "gov" },
          { label: "US Department of State: the country information pages, the official router for entry and visa requirements by destination", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html", type: "gov" }
        ],
        judgment: "Vietnam's e-visa fee is charged in dong and its rules have changed in recent years, with the 90-day, multiple-entry e-visa relatively new, so confirm the current fee and conditions on the official portal before you pay. Checked July 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Excellent, the remote north included" },
        { k: "Carrier roaming", v: `${S.dayPassGlance}` },
        { k: "Cheapest", v: "A Viettel SIM, $5 to $8" },
        { k: "SIM registration", v: "Passport, and it is enforced" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "Vietnam SIM card: Viettel for $5 beats everything",
      description: "A Viettel or Vinaphone SIM is 5 to 8 dollars for a month of generous data on excellent coverage. Registration needs your passport and is genuinely enforced.",
      h1: "Staying connected in Vietnam.",
      lede: "Vietnam has better mobile coverage than most of Europe and charges almost nothing for it. The local SIM is the answer here, and the only real friction is that registration is properly enforced.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>excellent</b>, and unusually so: strong in the cities, along the whole coast, through the <b>Mekong delta</b> and up into the <b>remote north</b> around Sapa and Ha Giang where you would not expect it. The cheapest option is clearly local. A <b>Viettel</b> or <b>Vinaphone</b> SIM costs about <b>5 to 8 dollars</b> for a month of generous data, sold at the airports and in phone shops, and <b>registration with your passport is required and enforced</b>, so buy from an official counter rather than a street stall. Your US carrier charges about <b>${S.dayPass}</b> (<b>AT&amp;T and Verizon</b> day passes), though <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, and covers the rest of that bill period on land, so the daily arithmetic stops past day 10, and <b>T-Mobile</b>'s mid and upper tiers include <b>${S.tmoRange}</b> of high-speed data abroad before slowing to <b>${S.throttle}</b>. A <b>Nomad eSIM</b> is a few dollars per gigabyte and suits a regional trip or a late arrival. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "Viettel for a few dollars, on very good coverage",
          icon: "tag",
          key: { fig: "$5 to $8", tag: "For a month", text: "Viettel has the widest reach in the country, including the northern mountains. A month of generous data costs less than one day of carrier roaming.", tone: "teal" },
          p: [
            "<b>Viettel</b> is the network to want. It has the broadest footprint in Vietnam by a clear margin, including the <b>northern mountains</b>, the <b>Ha Giang loop</b> and rural stretches where other networks fade, and a tourist data package runs about <b>5 to 8 dollars</b> for a month. <b>Vinaphone</b> is a solid second and <b>Mobifone</b> is fine in the cities. Buy at an <b>airport counter</b> or an official carrier shop in town.",
            "One day of a US carrier day pass costs more than the whole month of local data, and a travel eSIM costs several times it. We earn a commission on eSIMs and nothing on a Viettel SIM, and the honest recommendation for a Vietnam trip is still Viettel."
          ]
        },
        {
          h: "Registration is real, so buy from an official counter",
          icon: "passport",
          key: { fig: "Passport", tag: "Required, enforced", text: "Vietnam enforces SIM registration and has cut off unregistered lines. Buy at an airport counter or carrier shop, not from a street stall.", tone: "amber" },
          p: [
            "Vietnam requires every SIM to be <b>registered to an identified person</b>, and unlike some countries that write the rule and shrug, it has run enforcement waves and <b>disconnected unregistered lines</b> in bulk. For a visitor the process is simple: your <b>passport</b>, a few minutes at the counter, and it works. What matters is where you buy.",
            "A SIM sold from a <b>street stall or a market table</b>, already activated and asking for no documents, is registered to somebody else's identity and can be cut off mid-trip. It is a small saving against losing your data on day four in Hue. The airport counters and the official <b>Viettel Store</b> and <b>Vinaphone</b> shops are everywhere and cost the same."
          ]
        },
        {
          h: "Coverage worth noting, and when to buy something else",
          icon: "roamfee",
          key: { fig: `${S.dayPassFig}`, tag: "Roaming default", text: `Roaming is the expensive default and AT&T caps at 10 fees a bill period. Check T-Mobile first, since its mid and upper tiers include ${S.tmoRange} abroad.`, tone: "teal" },
          p: [
            "The coverage point deserves a line because it is genuinely unusual: Vietnam has invested heavily and you will have a working connection in places that would be dead zones in richer countries, including much of the <b>Ha Giang loop</b>, the <b>Hai Van pass</b> and the delta. The thin spots are deep in the national parks, on some boat routes in <b>Ha Long bay</b> and in the far mountain valleys. The <b>overnight trains</b> hold a signal for most of the route.",
            `On the alternatives: <b>AT&amp;T and Verizon</b> day passes are about <b>${S.dayPass}</b> and <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, and covers the rest of that bill period on land, so the daily arithmetic stops past day 10, and <b>T-Mobile</b>'s current tiers include roughly <b>${S.tmoLow}</b> on Experience More, Magenta MAX and Go5G Plus, <b>${S.tmoMid}</b> on Experience Beyond and Go5G Next and <b>${S.tmoHigh}</b> on Better Value. A <b>Nomad eSIM</b> is worth it for a <b>multi-country trip</b> or a 1am arrival at Tan Son Nhat, and it is the convenience option rather than the cheap one. This guide is written for US travelers departing the US. For more, see <a href='/vietnam/cash-or-card'>cash or card in Vietnam</a>, <a href='/vietnam/taxis-and-apps'>taxis and apps in Vietnam</a>, and the <a href='/vietnam'>Vietnam money guide</a>.`
          ]
        }
      ],
      faqs: [
        { q: "How much is a SIM card in Vietnam?", a: "About 5 to 8 dollars for a month of generous data from Viettel or Vinaphone, sold at the airports and in official carrier shops. You need your passport to register. That is less than one day of US carrier roaming." },
        { q: "Which network is best in Vietnam?", a: "Viettel, by a clear margin on reach. It covers the northern mountains, the Ha Giang loop and rural areas where other networks fade. Vinaphone is a solid second and Mobifone is fine in the cities." },
        { q: "Do I need to register a SIM card in Vietnam?", a: "Yes, with your passport, and it is genuinely enforced. Vietnam has run enforcement waves and disconnected unregistered lines in bulk. Buy from an airport counter or an official carrier shop rather than a street stall, since a pre-activated stall SIM is registered to somebody else and can be cut off mid-trip." },
        { q: "How much does it cost to use my US phone in Vietnam?", a: `About ${S.dayPass} on an AT&T or Verizon day pass, so roughly ${S.week} a week. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad before slowing to ${S.throttle}.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "Viettel: prepaid and tourist data package pages", url: "https://viettel.vn/", type: "official" },
          { label: "US State Department: Vietnam country information for US travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Vietnam.html", type: "gov" }
        ],
        judgment: "Checked Aug 2026. The two load-bearing points are that Vietnamese coverage is genuinely better than its income level suggests, which is the desk's read from operator maps and consistent traveler accounts, and that SIM registration is enforced rather than nominal, which is why this page tells you where to buy rather than only what to buy. Local package contents shift with promotions, so the 5 to 8 dollar range is the current shape of the offer. We earn on eSIM links and nothing on a Viettel SIM."
      }
    },
    {
      slug: "medical-costs",
      exposureCategory: "evacuationIsTheCost",
      exposureQuote: "the serious case is treated in Bangkok or Singapore, so the bill that matters is the flight",
      glance: [
        { k: "Everyday care", v: "City clinics handle it" },
        { k: "Payment", v: "Expected up front" },
        { k: "Serious case", v: "Bangkok or Singapore" },
        { k: "Real risk", v: "The flight, not the ward" }
      ],
      live: true,
      topic: "health",
      title: "Getting sick in Vietnam: the serious case flies to Bangkok",
      description: "Vietnam's international clinics handle the everyday, paid up front. The genuinely serious case is treated in Bangkok or Singapore, and the flight is the bill.",
      h1: "What does getting sick in Vietnam cost a visitor?",
      lede: "Vietnam's honest medical geography has three tiers: the international clinics of Hanoi and Ho Chi Minh City for the everyday, local hospitals that stabilise, and then the region's hubs. Beyond the first tier, the serious case is treated in Bangkok or Singapore, so the bill that matters is the flight.",
      checked: "Aug 2026",
      checkedISO: "2026-08-21",
      answer: "For everyday problems, Vietnam is easy: <b>Hanoi and Ho Chi Minh City run international clinics</b> with English-speaking doctors, walk-in service and prices that will not wreck a trip, and Danang has a slice of the same. Payment is <b>expected up front</b>, in cash or on a card, everywhere in the system. The structure changes with severity: Vietnamese hospitals <b>stabilise</b> the serious case, and the established pattern after stabilisation is a <b>medically supervised flight to Bangkok or Singapore</b>, where the region concentrates its top-end capacity. That flight, not any Vietnamese ward, is the largest number this page implies, and the <b>evacuation limit</b> on a policy is the line to read before any other.",
      insurance: true,
      insuranceNote: "The everyday tier in Vietnam is inexpensive and genuinely easy to use, and we will not pretend a clinic visit here is a financial risk. Cover is for the structure above it: payment expected up front, and a serious case that leaves the country for Bangkok or Singapore under medical supervision. Judge a policy for Vietnam on its evacuation limit and on whether its assistance line can organise that flight, because those are the two things you cannot improvise. Faye covers trip medical and evacuation.",
      careFirst: "If it is serious, get to a hospital or an international clinic first and let your insurer chase the paperwork.",
      sections: [
        {
          h: "The everyday tier is cheap and close, in the cities",
          icon: "tag",
          key: { tag: "City clinics", text: "Hanoi and Ho Chi Minh City run international clinics with English-speaking doctors and walk-in service. The everyday problem is handled well and inexpensively.", tone: "teal" },
          p: [
            "Start with the reassurance, because it is real: for a stomach bug, an infection, stitches or a scooter graze, the <b>international clinics</b> of Hanoi, Ho Chi Minh City and increasingly Danang handle a visitor quickly, in English, at prices that read as small by US standards. Pharmacies are everywhere and inexpensive.",
            "Payment is <b>up front</b> across the system, cash or card, with reimbursement being your problem rather than the clinic's. Keep every receipt and ask for paperwork in English at the international clinics, which are used to producing it for insurers."
          ]
        },
        {
          h: "The serious case leaves the country",
          icon: "plane",
          key: { tag: "Bangkok or Singapore", text: "Vietnamese hospitals stabilise the serious case; definitive complex care is a medically supervised flight away, in Bangkok or Singapore.", tone: "amber" },
          p: [
            "The structural fact that shapes cover here: for major trauma, cardiac events and anything genuinely complex, Vietnamese hospitals <b>stabilise</b>, and the pattern your insurer's assistance line will follow is a <b>flight to Bangkok or Singapore</b>. That is where the region keeps its top-end medicine, and it is the same route the expatriates who live here plan around.",
            "Outside the two big cities, add a first leg: the highlands, the far north, Phu Quoc and the smaller coast towns are hours from even the stabilising tier, so a serious problem there is a transport question before it is a treatment question at all."
          ]
        },
        {
          h: "Why there are no prices on this page",
          icon: "receipt",
          key: { tag: "Absence is not zero", text: "We have not sourced a Vietnamese price list for visitor care that we would stand behind, so we have published none.", tone: "teal" },
          p: [
            "We would rather say this than pad the page. Vietnamese care is priced facility by facility, the international clinics price differently from local hospitals, and we did not source a published visitor tariff we would put our name to, so no dong figure appears here. On a medical page a plausible-sounding number is not a small error, because it is something a person might act on while unwell.",
            "The structure carries the planning weight: the everyday is cheap and close in the cities, payment comes first, and the serious case flies. The number to ask your insurer for is the evacuation limit, not a consultation fee."
          ]
        },
        {
          h: "What this means for your money",
          icon: "cash",
          key: { tag: "The flight is the policy", text: "Pay the everyday yourself. Judge a policy on its evacuation limit and its assistance line, because the serious case here is a flight to Bangkok or Singapore.", tone: "teal" },
          p: [
            "If it is serious, get to a hospital or an international clinic first and let your insurer chase the paperwork. The split is unusually clean in Vietnam: the everyday tier you simply pay for, and it is small. The serious tier is a regional evacuation, which no one pays for out of pocket comfortably, and which takes an assistance line that knows the hospitals on both ends. That is the whole insurance argument here, and it is a strong one without any dressing up.",
            "Scooter riders should check the two-wheel fine print, because Vietnam is a scooter country and the exclusion is common. For paying on the ground, see the <a href=\"/vietnam/cash-or-card\">Vietnam cash and cards guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Where do serious medical cases in Vietnam go?", a: "Vietnamese hospitals stabilise, and the established pattern for complex or critical cases is a medically supervised flight to Bangkok or Singapore, organised through an insurer's assistance line. That flight is the largest realistic bill for a Vietnam trip." },
        { q: "Is healthcare in Vietnam cheap?", a: "The everyday tier genuinely is: international clinics in Hanoi, Ho Chi Minh City and Danang see visitors quickly, in English, at prices small by US standards, and pharmacies are inexpensive. The money story is the regional evacuation for the serious case." },
        { q: "Do Vietnamese hospitals require payment up front?", a: "Yes, payment up front is the working rule across the system, cash or card, with your insurer reimbursing you afterwards unless it has direct billing with an international clinic. Keep every receipt." },
        { q: "Does my US health insurance work in Vietnam?", a: "Rarely, and Medicare not at all. What matters for Vietnam is an evacuation limit that would genuinely cover a flight to Bangkok or Singapore, and an assistance line that can organise it." },
        { q: "Do I need travel insurance for Vietnam?", a: "Not for the clinic tier, which is cheap. The honest reason is the structure above it: a serious case leaves the country under medical supervision, and that flight is the bill worth insuring, plus scooter cover if you ride." }
      ],
      sources: {
        links: [
          { label: "US State Department: Vietnam country information for US travelers, including health and medical care guidance", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Vietnam.html", type: "gov" }
        ],
        judgment: "The three-tier structure, international clinics for the everyday, local stabilisation, and evacuation to Bangkok or Singapore for the complex case, is the consistent shape of official US guidance and of how insurers actually move patients from Vietnam, stated qualitatively. Payment up front is the system-wide practice. No dong figure appears because pricing varies by facility and we did not source a published visitor tariff we would defend. Checked August 2026.",
      }
    }
  ]
};
