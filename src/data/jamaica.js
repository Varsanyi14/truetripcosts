export default {
  slug: "jamaica",
  iso2: "jm",
  live: true,
  name: "Jamaica",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-03",
  emergency: { medical: "110", note: "110 reaches fire and ambulance and 119 the police, both free from any phone even with no SIM or credit. (911 connects in some areas, but 119 and 110 are the numbers to rely on.) Save your hotel address to read out.", checked: "Jul 2026", checkedISO: "2026-07-03" },
  insuranceLevel: "medium",
  region: "Americas",
  signals: { cardFriendliness: 3, cashNeed: 3, taxRisk: 3, atmRisk: 4 },
  hook: "Two currencies, one simple rule: pay in Jamaican dollars or by card, not US dollars, since paying in USD quietly costs you 5 to 10% on the vendor's rate. Keep JMD cash for taxis, jerk stands and tips.",
  aliases: ["jamaica", "montego bay", "mobay", "negril", "ocho rios", "kingston", "port antonio", "jmd", "jamaican dollar", "reggae", "jerk", "blue mountains"],

  title: "Money in Jamaica (2026): JMD vs US Dollars, Cards, ATMs, Taxes and Tipping | True Trip Costs",
  description: "How to handle money in Jamaica as a US traveler in 2026: the dual-currency trap and why paying in Jamaican dollars beats US dollars, where cards work, modest ATM fees at Scotiabank and NCB, the GCT and room taxes on your bill, the all-inclusive tipping rule, and connectivity. Checked July 2026.",

  h1: "Money in Jamaica, sorted.",
  lede: "A calm, current plan for the money side of your trip: why paying in Jamaican dollars beats US dollars, where your card works, the cash worth carrying, and the taxes and tipping rules that catch people out.",
  hero: {
    img: "/jamaica-hero.jpg",
    h: 1375,
    alt: "A colorful seaside town street in Jamaica at dusk, with brightly painted wooden clapboard buildings in teal, coral and yellow, palm trees and string lights overhead, a lone figure walking away down a cobblestone street toward a calm bay glowing under an amber sunset, and a plate of jerk chicken with rice and peas, a golden lager and a fresh green coconut with a straw on a wooden table in the foreground"
  },

  recentChange: {
    date: "2026 to 2027",
    text: "Following Hurricane Melissa in late 2025, Jamaica's 2026 to 2027 budget is raising the lower tourism GCT rate on hotels and tours from 10% toward 15%, so hotel, tour and excursion prices are edging up. Prices were already on the higher side for the Caribbean, so budget realistically."
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Jamaica runs on <b>two currencies</b>: the Jamaican dollar (JMD) is official, but US dollars are taken almost everywhere tourists go. The catch is that when you pay in US dollars, the vendor sets the rate, and it is almost never in your favor, so you quietly lose <b>5 to 10%</b>. The fix is simple: <b>pay in Jamaican dollars or by card</b>, and always choose JMD, not dollars, on any card terminal. Visa and Mastercard work well at resorts, hotels, restaurants and shops in the tourist areas (Amex less so), so a <b>no-foreign-fee card</b> covers most of a trip. For cash, get <b>JMD from a bank ATM</b> (Scotiabank, NCB or Sagicor) rather than the airport counter or a US-dollar markup, decline the machine's offer to 'convert to dollars,' and keep small JMD notes for <b>taxis, jerk stands, markets and tips</b>. ATM fees here are modest, about <b>500 to 1,000 Jamaican dollars (4 to 8 dollars) a withdrawal</b>, with limits around 30,000 to 50,000 JMD, and machines get scarce once you leave the main towns, so stock up before heading to the Blue Mountains or the south coast. Two things to know: many <b>all-inclusive resorts do not allow tipping</b> (check your hotel's policy), and Jamaica's arrival and departure taxes are almost always <b>built into your airfare</b>, so you should not owe them at the airport.",

  meter: {
    heading: "Cards and US dollars cover the resorts and tourist towns, but keep Jamaican cash for taxis, jerk stands and tips.",
    cashPct: 40,
    note: "A rough feel for everyday spending. Cards work well at resorts, hotels, restaurants and shops in the tourist areas, and US dollars are taken there too, at a poorer rate. Jamaican dollars in cash take over for taxis, jerk stands, markets, small shops, tips and anywhere off the tourist trail, and cash leans more essential the further you get from the resorts."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Good in tourist areas", p: "Visa and Mastercard are widely taken at resorts, hotels, restaurants, tour operators and shops in the tourist areas, with Amex less consistent. A no-foreign-fee card is the easy way to cover most of your spending, and it sidesteps the poor rate vendors give on US-dollar cash. Your bank's foreign fee still applies unless your card waives it, and always choose Jamaican dollars on the terminal.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "JMD for the local side", p: "Keep Jamaican dollars for taxis, jerk stands, markets, small shops and tips. Paying in JMD, or by card, beats handing over US dollars, since vendors set a poor rate on dollars and often give change in JMD anyway. Get JMD from a bank ATM rather than the airport, and stock up before heading to areas where machines are scarce.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Modest fees, mind the limits", p: "A good way to get Jamaican dollars at a fair rate. Use <b>Scotiabank, NCB or Sagicor</b> machines inside banks or malls, expect a modest fee of about <b>500 to 1,000 JMD (4 to 8 dollars)</b> plus whatever your home bank adds, and limits of around 30,000 to 50,000 JMD a withdrawal. Decline \"convert to dollars,\" and pull enough before the Blue Mountains or south coast, where ATMs thin out.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> for resorts, hotels, dining and shops, plus a backup from a different bank. Amex is less widely accepted.",
      "Add a <b>fee-free ATM debit card</b> for Jamaican cash. Charles Schwab refunds ATM fees worldwide; a Bank of America card can use Scotiabank ATMs at lower cost through the Global ATM Alliance.",
      "Bring some <b>US dollars</b> as a backup and for tips, but plan to spend mostly in Jamaican dollars, since paying in USD usually costs you 5 to 10% on the vendor's rate.",
      "Confirm your <b>airfare includes Jamaica's departure and arrival taxes</b> (it almost always does), and check whether your resort adds a room tax or resort fee."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters, where spreads can be very wide. Pull Jamaican dollars from a bank ATM in arrivals instead and <b>decline \"convert to dollars.\"</b>",
      "Take out enough JMD for your first day or two, especially if you are heading somewhere rural where ATMs are scarce.",
      "Set up an <b>eSIM</b> before you land for maps and calls. Digicel and Flow both cover the tourist areas well; a local SIM needs ID, so an eSIM is the easy route.",
      "If a taxi or transfer is quoted in US dollars, agree the price first, and remember you can usually pay less by settling in Jamaican dollars."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap or dip your card</b> at resorts, hotels, restaurants and shops, and choose Jamaican dollars every time.",
      "Keep <b>JMD cash</b> for taxis, jerk stands, markets, small shops and tips.",
      "When something is priced in <b>US dollars</b>, remember you usually save by paying the JMD equivalent or by card.",
      "At an <b>all-inclusive</b>, check the tipping policy: some include it and ask you not to tip, others welcome a little cash for great service."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Pay in Jamaican dollars, not US dollars.</b> When you pay in USD, the vendor picks the rate, and it quietly costs you 5 to 10%. On card terminals and ATMs, choose JMD and decline \"convert to dollars.\"",
      "<b>Confirm the currency before you pay.</b> Prices can be quoted in either JMD or USD, and both use a dollar sign, so ask which one a price is in, especially with taxis and small restaurants."
    ], cta: null }
  ],

  cash: {
    rate: 158, cur: "JMD", round: 1000, defaultIndex: 1,
    rateNote: "Rough guide at about 158 Jamaican dollars to the US dollar in mid-2026, so 1,000 JMD is roughly 6 dollars and 5,000 JMD about 32. The rate moves gently against the dollar, so check a current converter before you travel.",
    styles: [
      { n: "Budget", per: 50, cash: 0.5, room: 90 },
      { n: "Mid-range", per: 90, cash: 0.4, room: 170 },
      { n: "Comfort", per: 170, cash: 0.3, room: 330 }
    ]
  },

  connectivity: {
    works: "Good across the tourist areas and towns. The two carriers are Digicel (the largest, with the widest reach) and Flow, and 4G is strong in Montego Bay, Negril, Ocho Rios and Kingston with 5G in parts, thinning in the Blue Mountains, the south coast and rural parishes. A local prepaid SIM is cheap but needs ID, and both Digicel and Flow, along with eSIMs from Airalo, Nomad or Holafly, work well if your phone supports it. You do not need mobile data to pay by card, but you will want it for maps, calls and ride or taxi apps. Most hotels and many cafes have Wi-Fi."
  },

  tax: {
    none: true,
    currency: "JMD",
    note: "Jamaica has no simple per-person nightly tourist tax to add at the desk. What you will see instead: the 15% General Consumption Tax (GCT) on restaurant and shop bills, a lower tourism GCT on hotels that is rising toward 15% in the 2026 to 2027 budget, a small flat Guest Accommodation Room Tax of about 1 to 4 US dollars per room per night by hotel size, and sometimes a resort fee. Arrival and departure taxes are almost always built into your airfare."
  },

  currencyHeading: "The Jamaican dollar, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "At about 158 Jamaican dollars to the US dollar in mid-2026, 1,000 JMD is roughly 6 dollars, 5,000 about 32, and 100 about 60 cents. To ballpark a JMD price fast, drop two zeros and divide by about 1 and a half. Notes run 50, 100, 500, 1,000 and 5,000 dollars." },
    { sym: "usd", k: "Two currencies, one trap", v: "US dollars are taken across the tourist areas, but the vendor sets the rate when you pay in USD, and it is almost never in your favor, so you lose about 5 to 10%. Pay in Jamaican dollars or by card, and expect change in JMD even when you pay in dollars." },
    { sym: "card", k: "Cards and where they work", v: "Visa and Mastercard are solid at resorts, hotels, restaurants and shops in the tourist areas, with Amex less consistent. Always choose Jamaican dollars on the terminal, and carry a backup card. Off the tourist trail, cash is king." },
    { sym: "tip", k: "Tipping, and the all-inclusive rule", v: "About 10 to 20% for guides and drivers, and small cash for bellhops and housekeeping, but many all-inclusive resorts include gratuities and ask you not to tip, so check the policy. A 15% GCT on a bill is a government tax, not a tip. See the tipping section below." }
  ],

  taxfree: {
    label: "Taxes and fees",
    heading: "The taxes on your bill, and the ones already in your airfare.",
    text: "Jamaica has <b>no simple per-person nightly tourist tax</b> to hand over at the desk, but a few charges are worth knowing. Restaurant and shop bills carry the <b>15% General Consumption Tax (GCT)</b>, Jamaica's version of VAT, usually shown on the bill. Hotels have long paid a <b>lower tourism GCT rate</b>, which is <b>rising toward 15% in the 2026 to 2027 budget</b>, so hotel and tour prices are edging up. On top of that, hotels charge a small flat <b>Guest Accommodation Room Tax</b> of roughly <b>1 to 4 US dollars per room per night</b> depending on the property's size, and some resorts add a <b>resort fee</b>. The good news on entry and exit: Jamaica's <b>arrival and departure taxes</b> (its Tourism Enhancement Fee and airport taxes) are <b>almost always built into your airfare</b>, so you should not be paying them separately at the airport, though it is worth confirming with your airline. There is no tourist VAT-refund scheme on shopping, so there is nothing to reclaim when you leave."
  },

  traps: [
    "<b>Pay in Jamaican dollars, not US dollars.</b> US dollars are accepted across the tourist areas, but the vendor sets the exchange rate and it is almost never in your favor, so you lose about 5 to 10%. Pay in JMD or by card, and on any terminal or ATM choose Jamaican dollars and decline \"convert to dollars.\"",
    "<b>Confirm whether a price is in JMD or USD.</b> Both currencies are quoted, and each uses a dollar sign, so a number can mean very different things. Ask before you agree, especially with taxis and small restaurants.",
    "<b>Skip the airport exchange counters.</b> Their spreads can be very wide. A bank ATM (Scotiabank, NCB or Sagicor) gives a fairer rate; if you must change cash, use a licensed cambio in town and count it.",
    "<b>Mind where the ATMs run out.</b> Machines are easy to find in Montego Bay, Negril, Ocho Rios and Kingston, but scarce in the Blue Mountains and along the south coast, so pull enough Jamaican dollars before you leave the main towns, and withdraw inside banks or malls in daylight.",
    "<b>Know your all-inclusive's tipping policy.</b> Many all-inclusive resorts fold gratuities into the price and ask guests not to tip, while others welcome a little cash for great service. A 15% GCT or a printed 'service charge' on a bill is not your tip to the server.",
    "<b>Check for a resort fee or room tax on the bill.</b> On top of GCT, hotels add a small nightly Guest Accommodation Room Tax and some add a resort fee, so read the final bill rather than assuming the nightly rate is all-in."
  ],

  tippingHeading: "Customary off-resort, often included at all-inclusives.",
  tipping: "Tipping in Jamaica is customary in most places, with one big exception. At sit-down restaurants a tip of around <b>10 to 15%</b> is normal for good service, though many bills already include a <b>service charge</b> (often 10%), which is shared among staff, so check before adding more. For tour guides and private drivers, <b>10 to 20%</b> of the cost is standard, and a little cash for a bellhop (a few hundred Jamaican dollars a bag) or housekeeping (a few hundred a day) is appreciated. The exception is <b>all-inclusive resorts</b>, many of which fold gratuities into the price and formally ask guests not to tip, so check your resort's policy before handing out cash. Tips are welcome in <b>Jamaican dollars or US dollars</b>, and small US bills are easy to give, but note that a <b>15% GCT</b> on a bill is a government tax, not a tip. Cash, handed to the person, is the surest way to reach them.",
  sources: {
    changed: "Sources added on first publish, checked July 2026. Jamaica's General Consumption Tax is 15%, with a lower tourism rate on hotels of about 10%. Following Hurricane Melissa in late 2025, the 2026 to 2027 budget raises that tourism rate from 10% toward the standard 15%, phased in by April 2027, so hotel and tour costs are set to rise.",
    links: [
      { label: "Tax Administration Jamaica: the 15% General Consumption Tax (GCT)", url: "https://www.jamaicatax.gov.jm/", type: "revenue" },
      { label: "Jamaica Information Service: the 2026 to 2027 budget raising the tourism GCT rate from 10% toward 15%", url: "https://jis.gov.jm/govt-projects-29-4b-from-new-revenue-measures-in-fiscal-year-2026-27/", type: "gov" },
    ],
    judgment: "The small flat room tax of roughly 1 to 4 US dollars per room per night, the resort-fee habit, and the daily cash share, tipping norms and likely ATM behavior are our own read from recent traveler and bank reports, not a single official table.",
  },

  faqs: [
    { q: "Should I use US dollars or Jamaican dollars in Jamaica?", a: "Both work in the tourist areas, but paying in Jamaican dollars (or by card) is usually cheaper. When you pay in US dollars, the vendor sets the exchange rate, and it is almost never in your favor, so you lose about 5 to 10%, and you will often get change in JMD anyway. Carry a mix: US dollars as a backup and for tips, Jamaican dollars for taxis, jerk stands, markets and small shops." },
    { q: "Do I need cash in Jamaica?", a: "Some, in Jamaican dollars. Cards work well at resorts, hotels, restaurants and shops in the tourist areas, but taxis, jerk stands, markets, small shops and tips run on cash. Get JMD from a bank ATM rather than the airport, keep small notes handy, and stock up before heading to rural areas where machines are scarce." },
    { q: "What is the best way to get Jamaican dollars?", a: "A bank ATM at a fair rate. Use Scotiabank, NCB or Sagicor machines inside banks or malls; expect a modest fee of about 500 to 1,000 JMD (4 to 8 dollars) plus your home bank's charge, with limits around 30,000 to 50,000 JMD per withdrawal. A Charles Schwab card refunds ATM fees, and a Bank of America card can use Scotiabank through the Global ATM Alliance. Decline \"convert to dollars\" and choose JMD." },
    { q: "Should I pay in Jamaican dollars or US dollars on a card terminal?", a: "Always Jamaican dollars. If the terminal or ATM offers to charge you in US dollars, decline; that dynamic currency conversion adds a few percent on top. Choosing JMD lets your card's network handle the exchange at a fairer rate." },
    { q: "Can I tip at an all-inclusive resort in Jamaica?", a: "Often not. Many all-inclusive resorts include gratuities in the price and ask guests not to tip, while others welcome a little cash for great service, so check your resort's specific policy. Off-resort, tipping is customary: around 10 to 15% at restaurants (minus any service charge already on the bill) and 10 to 20% for guides and drivers, in Jamaican or US dollars." },
    { q: "Do I have to pay a tourist tax or departure tax in Jamaica?", a: "There is no simple per-person nightly tourist tax to hand over, but hotel bills carry GCT (a tourism rate rising toward 15% in the 2026 to 2027 budget) plus a small flat room tax of about 1 to 4 US dollars per room per night, and some resorts add a resort fee. Jamaica's arrival and departure taxes are almost always built into your airfare, so you should not owe them separately at the airport, but confirm with your airline." },
    { q: "How much cash should I bring for a week in Jamaica?", a: "It depends on your trip. At an all-inclusive you may need very little beyond tips (where allowed) and a few excursions. Traveling independently, roughly 200 to 400 US dollars' worth of Jamaican dollars across a week beyond your card spending covers taxis, local food, markets and tips. Get it from bank ATMs rather than the airport, and keep small JMD notes for taxis and jerk stands." }
  ],

  culture: {
    heading: "A few words of Patois go a long way",
    intro: "Everyone in Jamaica speaks English, but the island's own Patois is everywhere, warm and musical. A Wah gwaan on the way in and a story or two mark you as a guest rather than a tourist.",
    phrases: [
      { mean: "Hello, what is going on", say: "wah GWAAN", word: "Wah gwaan" },
      { mean: "All good, fine, positive", say: "EYE-ree", word: "Irie" },
      { mean: "Yes, for sure, okay", say: "yah mon", word: "Ya mon" },
      { mean: "Respect, and thanks", say: "reh-SPEKT", word: "Respect" },
      { mean: "Coming soon, in good time", say: "soon come", word: "Soon come" },
      { mean: "To eat", say: "nyam", word: "Nyam" },
    ],
    tip: "Jamaica runs on an easy, sunny spirit the locals call <b>irie</b>, everything good, and on the idea of <b>one love</b>. You can answer Wah gwaan with everyting irie. And do not leave without trying <b>ackee and saltfish</b>, the national dish, and fiery <b>jerk</b>.",
    stories: [
      { img: "/jamaica-culture-1.jpg",
        alt: "WPA-style illustration of a nighttime street dance around a towering stack of reggae sound-system speakers, a selector at the turntables, people dancing under warm string lights, a tropical town behind",
        h: "The island that gave the world reggae",
        p: "Music pours out of Jamaica. On this small island, mobile sound systems, towering stacks of speakers wheeled into the street, gave rise to ska, then rocksteady, then reggae, which carried Jamaican rhythm and its message of unity around the globe. Few places so small have shaped world music so much.",
        note: "Good to know: reggae is UNESCO listed" },
      { img: "/jamaica-culture-2.jpg",
        alt: "WPA-style illustration of two coffee pickers in straw hats with woven baskets among rows of red-cherry coffee bushes on the misty slopes of the Blue Mountains at morning",
        h: "Coffee from the misty peaks",
        p: "High in the cool, cloud-wrapped Blue Mountains grows some of the most prized coffee in the world, picked by hand on steep green slopes. The mist and the altitude give the beans their smooth, gentle flavor, and true Blue Mountain coffee is protected by name. A cup here tastes of the mountains themselves.",
        note: "Good to know: Blue Mountain coffee is protected by name" },
      { img: "/jamaica-culture-3.jpg",
        alt: "WPA-style illustration of triumphant Maroon fighters standing on a misty ridge in rugged green hills, one raising a cow-horn to sound the call, dawn breaking behind them",
        h: "The people who won their freedom",
        p: "When Jamaica was a slave colony, groups of Africans escaped into the rugged interior, the Cockpit Country, and fought so fiercely for their freedom that they won it: in 1739 the British signed a treaty granting the Maroons their own free communities. Their descendants keep the culture alive today, sounding the abeng horn as they always have.",
        note: "Good to know: the Maroons won their freedom in 1739" },
    ],
    pride: "Jamaicans are proud, warm and full of style, and their small island punches far above its weight in music, in sport and in spirit. They are proud of a people who won their freedom, of a sound the whole world dances to, and of living by one love."
  },

  spokes: [
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Jamaican dollar (JMD), dollars accepted" },
        { k: "Cards", v: "Resorts, hotels, nicer restaurants" },
        { k: "Cash for", v: "Small vendors, route taxis, markets" },
        { k: "On a card", v: "Choose Jamaican dollars" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Jamaica, or can I use cards? (2026) | True Trip Costs",
      description: "Both. Cards work at resorts and hotels, but small vendors, markets and route taxis run on cash. Pay in Jamaican dollars for the best value. Choose Jamaican dollars, not US dollars. Checked July 2026.",
      h1: "Do I need cash in Jamaica, or can I use cards?",
      lede: "Short answer: cards at resorts and hotels, and Jamaican-dollar cash for small vendors, markets and route taxis. US dollars are accepted in tourist areas, but local currency gives better value. Here is how to handle it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Both. Jamaica takes <b>cards at resorts, hotels and nicer restaurants</b>, where <b>contactless</b> is common, but <b>small vendors, markets, route taxis and street food</b> run on cash. It is a <b>dual-currency</b> tourist economy: the <b>Jamaican dollar</b> is official, but <b>US dollars are widely accepted</b> in resort areas, usually at a less favorable rate. Pay in <b>Jamaican dollars</b> for local prices. Keep some for the small stuff. Choose <b>Jamaican dollars, not US dollars</b>, on any card or ATM.",
      sections: [
        {
          h: "Cards at resorts, cash for local life",
          icon: "phoneok",
          key: { fig: "Dual currency", tag: "Cards at resorts", text: "Cards work at resorts, hotels and nicer restaurants; small vendors, markets and route taxis are cash. Both currencies circulate.", tone: "teal" },
          p: [
            "Jamaica takes <b>cards at resorts, hotels, nicer restaurants and larger shops</b>, where <b>contactless</b> is common. But <b>small vendors, markets, street food and route taxis</b> run largely on <b>cash</b>, so carry <b>Jamaican dollars</b>.",
            "It is a <b>dual-currency</b> tourist economy: the <b>Jamaican dollar</b> is official, but <b>US dollars are widely accepted</b> in resort areas, usually at a <b>less favorable rate</b> than paying in local currency."
          ]
        },
        {
          h: "Pay in Jamaican dollars",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Local currency is better", text: "Choose Jamaican dollars on a card, and prefer paying in them in cash: US dollars in tourist areas come at a poorer rate.", tone: "amber" },
          p: [
            "On a <b>card</b>, if asked to charge in <b>US or Jamaican dollars, choose Jamaican dollars</b>, since US dollars trigger dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your bank's. In <b>cash</b>, US dollars are accepted in tourist zones but usually at a <b>poorer rate</b>.",
            "So <b>pay in Jamaican dollars</b> for local prices. Use a bank ATM, and a <b>debit card</b> to avoid cash-advance fees."
          ]
        },
        {
          h: "Cash for small vendors and route taxis",
          icon: "usd",
          key: { fig: "Local cash", tag: "For the small stuff", text: "Keep Jamaican-dollar cash for small vendors, markets, street food and route taxis, where cards are not taken.", tone: "teal" },
          p: [
            "Keep <b>Jamaican-dollar cash</b> for the small stuff: <b>markets, small vendors, street food (a patty and a drink) and route taxis</b>. Small US bills can work in tourist zones, but local currency is simpler and better value.",
            "For tipping norms, including the service charge some places add, see <a href='/jamaica/tipping'>tipping in Jamaica</a>, and for the wider picture, the <a href='/jamaica'>Jamaica money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Jamaica?", a: "Yes, for daily life. Cards work at resorts, hotels and nicer restaurants, but small vendors, markets, street food and route taxis run on cash. Carry Jamaican dollars." },
        { q: "Should I pay in Jamaican dollars or US dollars in Jamaica?", a: "Jamaican dollars, for the best value. On a card, choose Jamaican dollars to avoid the 3 to 8% conversion. In cash, US dollars are accepted in tourist zones but usually at a poorer rate, so local currency is better." },
        { q: "Are US dollars accepted in Jamaica?", a: "Yes, widely in resort and tourist areas, though usually at a less favorable rate than paying in Jamaican dollars. Away from tourist zones, local currency is expected." },
        { q: "Can I use cards everywhere in Jamaica?", a: "At resorts, hotels and nicer restaurants, yes, with contactless common. Small vendors, markets, street food and route taxis run on cash, so carry Jamaican dollars for those." }
      ],
      sources: {
        links: [
          { label: "Bank of Jamaica: official exchange rate information", url: "https://boj.org.jm", type: "gov" },
          { label: "US State Department: Jamaica country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Jamaica.html", type: "gov" }
        ],
        judgment: "Jamaica is a dual-currency tourist economy where paying in Jamaican dollars beats paying in US dollars. The rate moves, and the firm rule is to decline US-dollar conversion. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "10 to 15%, US-influenced" },
        { k: "Restaurants", v: "Check for a 10% service charge" },
        { k: "Resorts", v: "Tipping staff is appreciated" },
        { k: "How", v: "US dollars or Jamaican dollars" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Jamaica: what you actually owe (2026) | True Trip Costs",
      description: "How tipping works in Jamaica for US travelers in 2026: why it leans US-influenced at 10 to 15%, the 10% service charge to check for, resort tipping, and paying in US dollars. Checked July 2026.",
      h1: "Tipping in Jamaica",
      lede: "Jamaica leans US-influenced on tipping: 10 to 15% at restaurants, though many add a 10% service charge. Check the bill, and know that resort policies vary. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Jamaica leans <b>US-influenced</b> on tipping. At a <b>restaurant</b>, <b>10 to 15%</b> is normal, but many add a <b>10% service charge</b>, so <b>check the bill</b>: if it is there, that is largely the tip. At <b>all-inclusive resorts</b>, tipping helpful staff is appreciated (some resorts have a no-tipping policy, so check). For <b>taxis</b>, agree the fare first and round up. Tips can be in <b>US dollars or Jamaican dollars</b>, both widely accepted.",
      sections: [
        {
          h: "10 to 15%, US-influenced",
          icon: "coins",
          key: { fig: "10-15%", tag: "For good service", text: "At a restaurant, 10 to 15% is normal for good service, more US-influenced than light-tipping regions.", tone: "teal" },
          p: [
            "Jamaica is <b>more US-influenced</b> on tipping than light-tipping regions. At a <b>sit-down restaurant</b>, <b>10 to 15%</b> for good service is normal, and staff appreciate it.",
            "At a <b>casual spot or for drinks</b>, rounding up or leaving a little is fine."
          ]
        },
        {
          h: "Check for a 10% service charge",
          icon: "receipt",
          key: { fig: "10%", tag: "Often already added", text: "Many restaurants and hotels add a 10% service charge. If it is there, that is largely the tip, so you need not add a full extra.", tone: "teal" },
          p: [
            "Many <b>restaurants and hotels</b> add a <b>10% service charge</b> to the bill. If a <b>service charge is there</b>, that is largely the tip, so you do <b>not need a full extra</b>, though rounding up for great service is common.",
            "So <b>read the bill</b> before adding a tip on top."
          ]
        },
        {
          h: "Resorts, taxis, paying",
          icon: "usd",
          key: { fig: "USD or JMD", tag: "Both accepted", text: "At resorts, tipping staff is appreciated (check for a no-tipping policy). Taxis: agree the fare, round up. USD or JMD both work.", tone: "teal" },
          p: [
            "At <b>all-inclusive resorts</b>, tipping helpful <b>bar staff, servers and housekeeping</b> is appreciated, though <b>some resorts have a no-tipping policy</b>, so check at check-in. For <b>taxis</b>, <b>agree the fare first</b> (they are not reliably metered) and round up. Tips can be in <b>US dollars or Jamaican dollars</b>. For the wider picture, see the <a href='/jamaica'>Jamaica money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Jamaica?", a: "Yes, it leans US-influenced. At a restaurant, 10 to 15% is normal, but many add a 10% service charge, so check the bill: if it is there, that is largely the tip. At resorts, tipping helpful staff is appreciated." },
        { q: "Is a service charge added in Jamaica?", a: "Often: many restaurants and hotels add 10%. If it is there, that is largely the tip, so you need not add a full extra, though rounding up for great service is common. Read the bill first." },
        { q: "Do you tip at all-inclusive resorts in Jamaica?", a: "It is appreciated for helpful bar staff, servers and housekeeping, though some resorts have a no-tipping policy, so check at check-in. US dollars or Jamaican dollars both work." },
        { q: "Can you tip in US dollars in Jamaica?", a: "Yes. Both US dollars and Jamaican dollars are widely accepted for tips, so small US bills are fine." }
      ],
      sources: {
        links: [
          { label: "US State Department: Jamaica country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Jamaica.html", type: "gov" }
        ],
        judgment: "Jamaica's tipping leans US-influenced through tourism, and the 10% service charge varies by venue. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "No Uber", v: "Use a licensed red-plate taxi" },
        { k: "Never", v: "An unlicensed white-plate robot" },
        { k: "Fares", v: "Not metered, agree before you go" },
        { k: "Airport", v: "The Authorised desk at Sangster" }
      ],
      live: true,
      topic: "taxis",
      caution: "high",
      title: "Getting a taxi in Jamaica, and the red-plate rule (2026) | True Trip Costs",
      description: "Why there is no real Uber in Jamaica, how to tell a licensed red-plate taxi from an illegal white-plate 'robot', why you must agree the fare first, and the official airport taxi desk at Montego Bay. Checked July 2026.",
      h1: "Taxis in Jamaica, and the red-plate rule",
      lede: "Jamaica has no Uber, and the taxis are not reliably metered, so a couple of simple habits keep you safe and fairly priced. Here is the plate to look for, how to handle the fare, and the airport desk to use.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "There is <b>no Uber</b> in Jamaica, so the safe choice is a <b>licensed red-plate taxi</b>, never an unlicensed white-plate <b>robot</b>. Taxis are not reliably metered, so <b>agree the fare before you set off</b>, or better, pre-book an airport transfer for a fixed price. At Montego Bay's <b>Sangster</b> airport, use the official <b>Authorised Airport Taxi desk</b> (JUTA or JCAL) just outside customs, or a pre-booked transfer. Your hotel's own tourist-board-approved taxi is another safe bet.",
      official: {
        label: "Montego Bay Airport, official airport taxi information",
        url: "https://www.mbjairport.com/taxi-cabs",
        note: "At <b>Sangster International</b> (Montego Bay), the <b>Authorised Airport Taxi desk</b> is just outside the customs exit, shared by the two licensed operators, <b>JUTA</b> and <b>JCAL</b>. There are no meters, so agree the fare at the desk, or pre-book a transfer for a fixed price."
      },
      sections: [
        {
          h: "Red plate good, white-plate robot bad",
          icon: "alert",
          key: { tag: "Red plate is licensed", text: "The one thing to know in Jamaica is the plate. A legitimate taxi is a licensed public passenger vehicle with a red plate and a Transport Authority sticker. Never take an unlicensed white-plate car, the robot.", tone: "amber" },
          p: [
            "The one thing to know in Jamaica is the license plate. A legitimate taxi is a licensed <b>public passenger vehicle</b>, and it carries a <b>red plate</b>, along with a Transport Authority sticker on the windscreen, a <b>Taxi</b> globe on the roof, and often the words <b>Route Taxi</b> on the doors. An unlicensed car working as a taxi is known locally as a <b>robot</b>, and it carries an ordinary <b>white plate</b>.",
            "Robots are everywhere and cheap, and locals use them, but they are operating illegally, they are often overloaded, and the point that matters for you: if there is an accident, the passengers are <b>not insured</b>. As a visitor, keep it simple and use only <b>red-plate</b> taxis, tourist-board-approved taxis such as <b>JUTA</b>, or your hotel's own drivers."
          ]
        },
        {
          h: "No Uber, so agree the fare first",
          icon: "cash",
          key: { tag: "No ride apps here", text: "Uber and the big apps do not really operate in Jamaica, and online Uber Montego Bay listings are private-transfer firms borrowing the name. Taxis are not reliably metered, so agree the fare before you set off, or pre-book a fixed-price transfer.", tone: "amber" },
          p: [
            "<b>Uber</b> and the big ride apps do not really operate in Jamaica. The listings you will find online for <b>Uber Montego Bay</b> are private-transfer companies borrowing the name, not the app itself, so do not plan around it. What you use instead is a licensed taxi or a booked transfer.",
            "Taxis outside Kingston are technically metered, but drivers often will not use the meter, so <b>always agree the price before you set off</b>, and expect roughly <b>25 percent more after midnight</b>. Shared <b>route taxis</b>, the red-plate kind, run fixed point-to-point routes cheaply, while a <b>charter</b> taxi is private and costs more. For anything longer, know the going rate first or book a fixed-price transfer."
          ]
        },
        {
          h: "At the airport",
          icon: "plane",
          key: { fig: "JUTA desk", tag: "The Authorised desk", text: "At Montego Bay's Sangster International, the official Authorised Airport Taxi desk sits just outside the customs exit, shared by the two licensed operators, JUTA among them. Use it for a set fare.", tone: "teal" },
          p: [
            "At Montego Bay's <b>Sangster International</b> (MBJ), the official <b>Authorised Airport Taxi desk</b> sits just outside the customs exit and is shared by the two licensed operators, <b>JUTA</b> and <b>JCAL</b>. You can take a cab from the rank in front of arrivals or pre-book a transfer. Because there are no meters, you agree or prepay the fare, and a <b>pre-booked private transfer</b> gives you a fixed price and a driver waiting with your name, which is the least stressful option after a long flight.",
            "Kingston's airport is <b>Norman Manley</b> (NMIA), and the same rules apply there. Wherever you land, <b>ignore anyone who approaches you</b> inside the terminal offering a ride, and head for the official desk or your booked driver."
          ]
        },
        {
          h: "Fares, paying and tipping",
          icon: "usd",
          key: { fig: "USD or JMD", tag: "Agree the number", text: "Agree the number before you get in. Both US dollars and Jamaican dollars are widely accepted for taxis, so carry small notes, and a licensed taxi should show you its rate sheet.", tone: "teal" },
          p: [
            "Agree the number before you get in. Both <b>US dollars</b> and <b>Jamaican dollars</b> are widely accepted for taxis, so carry small notes, and a licensed taxi should be able to show you its fares. Confirm whether the quote is in US or Jamaican dollars, since the difference is large and a vague quote is where misunderstandings happen.",
            "Tipping is a kind gesture rather than an obligation, and around 10 to 15 percent for a helpful driver or a tour is appreciated, though it is not expected on a fixed-price transfer. For the wider money picture, including how much cash to carry and which currency to use, see the <a href=\"/jamaica\">Jamaica money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is there Uber in Jamaica?", a: "No, not really. Uber and the big ride apps do not operate in Jamaica, and the 'Uber Montego Bay' listings online are private-transfer companies using the name. The safe options are a licensed red-plate taxi, a tourist-board-approved taxi such as JUTA, your hotel's own driver, or a pre-booked private transfer." },
        { q: "What is a robot taxi in Jamaica?", a: "An unlicensed car operating as a taxi, carrying an ordinary white plate instead of the legal red public-passenger-vehicle plate. Robots are common and cheap but illegal, often overloaded, and passengers are not insured if there is an accident. As a visitor, use only red-plate taxis or a tourist-board-approved or hotel taxi." },
        { q: "Do Jamaican taxis have meters?", a: "Outside Kingston some are metered, but drivers frequently do not use the meter, so always agree the fare before you set off, and expect about 25 percent more after midnight. For the airport, a pre-booked transfer with a fixed price avoids the negotiation entirely." },
        { q: "What is the best taxi from Montego Bay airport?", a: "Use the official Authorised Airport Taxi desk just outside customs, shared by JUTA and JCAL, or pre-book a private transfer for a fixed fare and a driver waiting with your name. There are no meters, so agree or prepay the price, and ignore anyone who approaches you offering a ride inside the terminal." }
      ],
      sources: {
        links: [
          { label: "US Department of State: Jamaica country information, general safety and local-travel context for US visitors", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Jamaica.html", type: "gov" },
          { label: "Jamaica Observer: reporting on licensed red-plate public-passenger-vehicle taxis versus illegal white-plate robot cabs", url: "https://www.jamaicaobserver.com/2021/08/23/hunt-for-illegal-cabbies/", type: "news" },
          { label: "iExplore: a Jamaica transport overview on metered fares, route taxis and tourist-board-approved taxis", url: "https://www.iexplore.com/articles/travel-guides/caribbean/jamaica/transportation", type: "guide" }
        ],
        judgment: "Fares are negotiated rather than metered and move with fuel and season, so agree the price first and treat any figures as a recent read. Ride-hailing apps were not operating in Jamaica as of this check, so confirm current options before you travel. Checked July 2026."
      }
    }
  ]
};
