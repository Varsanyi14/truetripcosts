export default {
  slug: "jamaica",
  iso2: "jm",
  live: true,
  name: "Jamaica",
  from: "United States",
  checked: "Aug 2026",
  checkedISO: "2026-08-17",
  emergency: { medical: "110", note: "110 reaches fire and ambulance and 119 the police, both free from any phone even with no SIM or credit. (911 connects in some areas, but 119 and 110 are the numbers to rely on.) Save your hotel address to read out.", checked: "Jul 2026", checkedISO: "2026-07-03" },
  insuranceLevel: "medium",
  region: "Americas",
  signals: { cardFriendliness: 3, cashNeed: 3, taxRisk: 3, atmRisk: 4 },
  hook: "Two currencies, one simple rule: pay in Jamaican dollars or by card, not US dollars, since paying in USD quietly costs you 5 to 10% on the vendor's rate. Keep JMD cash for taxis, jerk stands and tips.",
  aliases: ["jamaica", "montego bay", "mobay", "negril", "ocho rios", "kingston", "port antonio", "jmd", "jamaican dollar", "reggae", "jerk", "blue mountains"],

  title: "Does Jamaica take US dollars? Money in 2026",
  description: "They are taken, but cost you 5 to 10% on the vendor's rate. Pay in Jamaican dollars or by card, and keep JMD for taxis. Checked 2026.",

  h1: "Money in Jamaica, sorted.",
  lede: "A calm, current plan for the money side of your trip: why paying in Jamaican dollars beats US dollars, where your card works, the cash worth carrying, and the taxes and tipping rules that catch people out.",
  hero: {
    img: "/jamaica-hero.jpg",
    h: 1375,
    alt: "A colorful seaside town street in Jamaica at dusk, with brightly painted wooden clapboard buildings in teal, coral and yellow, palm trees and string lights overhead, a lone figure walking away down a cobblestone street toward a calm bay glowing under an amber sunset, and a plate of jerk chicken with rice and peas, a golden lager and a fresh green coconut with a straw on a wooden table in the foreground"
  },

  recentChange: {
    date: "From Apr 2027",
    text: "Following Hurricane Melissa in late 2025, Jamaica legislated an increase in the lower tourism GCT rate on hotels and tours from 10% to the standard 15%. It has not happened yet: the rate is still 10% today and the increase takes effect from 1 April 2027, phased in, and the hotel industry is contesting it. Prices are already on the higher side for the Caribbean, so budget realistically, but a trip before April 2027 is not paying the higher rate."
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
    unit: "percentOfRoom",
    currency: "JMD",
    capNights: null,
    note: "Jamaica has no per-person nightly bed tax. On a hotel room you pay the lower tourism rate of General Consumption Tax, still 10% today and legislated to rise to 15% from 1 April 2027, plus a small flat Guest Accommodation Room Tax set by the size of the property: US$1 per room per night up to 50 rooms, US$2 from 51 to 100, and US$4 at 101 rooms and above. This models the 10%, so add the flat room tax on top. Restaurant and shop bills carry the standard 15% GCT. Some resorts add a resort fee of their own. Arrival and departure taxes are almost always built into your airfare.",
    regions: [
      { key: "hotel", label: "Hotel room (10% tourism GCT)", pct: 10, note: "The lower tourism GCT rate, 10% today and legislated to reach 15% on 1 April 2027. On top of it sits the Guest Accommodation Room Tax, a flat US$1 to US$4 per room per night depending on how many rooms the property has, which the calculator does not model, so add roughly a dollar or two a night for a small place and 4 dollars at a large resort. A resort fee, where one applies, is the property's own and is not included." },
      { key: "restaurant", label: "Restaurant meal or shopping (15% GCT)", pct: 15, note: "The standard 15% GCT applies outside the tourism concession, so restaurant and shop bills carry the full rate. Many restaurant bills also add a service charge of around 10%, which is the establishment's own rather than a tax." }
    ]
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
    text: "Jamaica has <b>no simple per-person nightly tourist tax</b> to hand over at the desk, but a few charges are worth knowing. Restaurant and shop bills carry the <b>15% General Consumption Tax (GCT)</b>, Jamaica's version of VAT, usually shown on the bill. Hotels pay a <b>lower tourism GCT rate</b>, which is <b>still 10% today</b>. It is legislated to rise to the standard <b>15% from 1 April 2027</b>, phased in, and the hotel industry is contesting it, so a trip before that date is not paying the higher rate. On top of that, hotels charge a small flat <b>Guest Accommodation Room Tax</b>, set by property size: <b>US$1 per room per night up to 50 rooms</b>, <b>US$2</b> from 51 to 100, and <b>US$4</b> at 101 rooms and above, and some resorts add a <b>resort fee</b>. The good news on entry and exit: Jamaica's <b>arrival and departure taxes</b> (its Tourism Enhancement Fee and airport taxes) are <b>almost always built into your airfare</b>, so you should not be paying them separately at the airport, though it is worth confirming with your airline. There is no tourist VAT-refund scheme on shopping, so there is nothing to reclaim when you leave."
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
    changed: "Sources added on first publish, checked July 2026. Jamaica's General Consumption Tax is 15%, with a lower tourism rate on hotels of about 10%. Corrected Aug 2026: we previously wrote that the tourism GCT rate was already rising, which read as if it had happened. It has not. Following Hurricane Melissa in late 2025 the 2026 to 2027 budget legislated a rise from 10% to the standard 15%, but the effective date is 1 April 2027, phased in, and the Jamaica Hotel and Tourist Association is contesting it. The rate on a hotel bill today is still 10%.",
    links: [
      { label: "Tax Administration Jamaica: the 15% General Consumption Tax (GCT)", url: "https://www.jamaicatax.gov.jm/", type: "revenue" },
      { label: "Jamaica Information Service: the 2026 to 2027 revenue measures legislating the tourism GCT rise from 10% to 15%, effective 1 April 2027", url: "https://jis.gov.jm/govt-projects-29-4b-from-new-revenue-measures-in-fiscal-year-2026-27/", type: "gov" },
    ],
    judgment: "The Guest Accommodation Room Tax tiers are now confirmed against Tax Administration Jamaica's own guidance rather than inferred, so they are no longer our estimate. Note that TAJ's published table overlaps at 51 rooms, printing the lowest band as 1 to 51 and the next as 51 to 100; we use up to 50 rooms for the lowest band, which matches the original 2012 measure. The resort-fee habit, the daily cash share, tipping norms and likely ATM behavior remain our own read from recent traveler and bank reports.",
  },

  faqs: [
    { q: "Should I use US dollars or Jamaican dollars in Jamaica?", a: "Both work in the tourist areas, but paying in Jamaican dollars (or by card) is usually cheaper. When you pay in US dollars, the vendor sets the exchange rate, and it is almost never in your favor, so you lose about 5 to 10%, and you will often get change in JMD anyway. Carry a mix: US dollars as a backup and for tips, Jamaican dollars for taxis, jerk stands, markets and small shops." },
    { q: "Do I need cash in Jamaica?", a: "Some, in Jamaican dollars. Cards work well at resorts, hotels, restaurants and shops in the tourist areas, but taxis, jerk stands, markets, small shops and tips run on cash. Get JMD from a bank ATM rather than the airport, keep small notes handy, and stock up before heading to rural areas where machines are scarce." },
    { q: "What is the best way to get Jamaican dollars?", a: "A bank ATM at a fair rate. Use Scotiabank, NCB or Sagicor machines inside banks or malls; expect a modest fee of about 500 to 1,000 JMD (4 to 8 dollars) plus your home bank's charge, with limits around 30,000 to 50,000 JMD per withdrawal. A Charles Schwab card refunds ATM fees, and a Bank of America card can use Scotiabank through the Global ATM Alliance. Decline \"convert to dollars\" and choose JMD." },
    { q: "Should I pay in Jamaican dollars or US dollars on a card terminal?", a: "Always Jamaican dollars. If the terminal or ATM offers to charge you in US dollars, decline; that dynamic currency conversion adds a few percent on top. Choosing JMD lets your card's network handle the exchange at a fairer rate." },
    { q: "Can I tip at an all-inclusive resort in Jamaica?", a: "Often not. Many all-inclusive resorts include gratuities in the price and ask guests not to tip, while others welcome a little cash for great service, so check your resort's specific policy. Off-resort, tipping is customary: around 10 to 15% at restaurants (minus any service charge already on the bill) and 10 to 20% for guides and drivers, in Jamaican or US dollars." },
    { q: "Do I have to pay a tourist tax or departure tax in Jamaica?", a: "There is no simple per-person nightly tourist tax to hand over, but hotel bills carry GCT (a lower tourism rate, still 10% today, legislated to rise to 15% from 1 April 2027) plus a small flat room tax of about 1 to 4 US dollars per room per night, and some resorts add a resort fee. Jamaica's arrival and departure taxes are almost always built into your airfare, so you should not owe them separately at the airport, but confirm with your airline." },
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
      title: "Do I need cash in Jamaica? Cards and local cash",
      description: "Cards work at resorts and hotels, but small vendors, markets and route taxis run on cash. Pay in Jamaican dollars for the best value, not US dollars.",
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
      title: "Tipping in Jamaica: how much and when 2026",
      description: "Jamaica leans US-influenced at 10 to 15%, with a 10% service charge to check for first. Resort tipping, and paying in US dollars. Checked 2026.",
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
      title: "Taxis in Jamaica, and the red-plate rule 2026",
      description: "There is no real Uber in Jamaica. How to tell a licensed red-plate taxi from an illegal white-plate robot, why to agree the fare, and the MoBay desk.",
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
    },
    {
      slug: "c5-form",
      glance: [
        { k: "Visa", v: "None for US citizens, up to 6 months" },
        { k: "C5 form", v: "Required, free, before arrival" },
        { k: "Must have", v: "Onward ticket and your address" },
        { k: "Where", v: "enterjamaica.gov.jm only" }
      ],
      live: true,
      topic: "visas",
      title: "Jamaica visa and the C5 form for US travelers",
      description: "No visa for US citizens, but everyone files the free online C5 form before arrival. What the C5 is, the onward-ticket rule, and the sites that charge.",
      h1: "Do US citizens need a visa for Jamaica?",
      lede: "Short answer: no visa, but yes to one free online form. US citizens enter Jamaica visa-free; the step you cannot skip is the C5 declaration, which every arriving traveler files. Here is how it works, and how not to overpay for it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-26",
      answer: "US citizens need <b>no visa</b> for Jamaica and can be admitted for up to <b>six months</b>, with the officer setting the exact length on arrival. What everyone must do is complete the <b>C5 form</b>, Jamaica's combined <b>immigration and customs declaration</b>, <b>online before you fly</b>, on the official government site. It is <b>free</b>, gives you a <b>QR code</b> to show at the airport, and is separate from any visa. Have a <b>return or onward ticket</b> and your <b>address in Jamaica</b> ready.",
      official: {
        label: "Government of Jamaica: the official C5 form",
        url: "https://enterjamaica.gov.jm",
        note: "The official Jamaican government portal for the C5 immigration and customs declaration. It is completely free and you can file it up to 30 days before travel. Many third-party sites charge $50 to $100 to complete this free form, so use only this official page (also reachable through the official visitjamaica.com)."
      },
      expediter: false,
      sections: [
        {
          h: "No visa, but the C5 is required",
          icon: "passport",
          key: { fig: "Free", tag: "Every traveler", text: "US citizens need no visa and can get up to six months. Everyone must file the free C5 immigration and customs form online before arrival, air or sea, including children.", tone: "teal" },
          p: [
            "US passport holders enter Jamaica <b>visa-free</b> and are typically admitted for <b>up to six months</b>, though the officer decides the exact length on arrival, so check your stamp. The one thing everyone must do, whatever their nationality and including children, is complete the <b>C5 form</b>: Jamaica's combined <b>immigration and customs declaration</b>.",
            "It is <b>not a visa</b>, just a declaration, and it applies whether you arrive by <b>air or cruise ship</b>. File it <b>online before you travel</b> and you clear the airport on a <b>QR code</b> instead of filling a paper card in the arrivals hall."
          ]
        },
        {
          h: "How and when to file it",
          icon: "qr",
          key: { fig: "30 days ahead", tag: "Before you fly", text: "Complete the C5 online up to 30 days before travel, with your passport, flight and where you are staying. Save the QR code. You cannot do it months in advance.", tone: "teal" },
          p: [
            "You can file the C5 from <b>up to 30 days before</b> travel, not months ahead. It asks for your <b>passport details, flight, and where you are staying</b>, so have your booking to hand, and each traveler needs their <b>own</b> submission. Save or screenshot the <b>QR code</b> it gives you."
          ],
          steps: [
            "Go to the official site, enterjamaica.gov.jm. Go there directly, not through a search ad.",
            "Enter your passport, flight and accommodation details.",
            "Submit and save the QR code confirmation. It is free, so if you are asked to pay, you are on the wrong site.",
            "Show the QR code at immigration on arrival, and keep it for departure."
          ]
        },
        {
          h: "The free-form trap",
          icon: "alert",
          key: { tag: "The C5 is free", text: "The C5 is completely free on the official site. A crowd of lookalike sites charge $50 to $100 to file it for you. Use only enterjamaica.gov.jm.", tone: "amber" },
          p: [
            "Because the form is <b>free and mandatory</b>, plenty of <b>lookalike sites</b> charge <b>$50 to $100</b> to fill in the same government form, and some look convincingly official. They add nothing you cannot do in a few minutes. Use only <b>enterjamaica.gov.jm</b>.",
            "A couple of extras: carry a <b>return or onward ticket</b> and be ready to show <b>funds</b> (often assessed around $50 to $100 a day) and your accommodation. A passport valid for your stay is enough, though six months is a safe margin."
          ]
        },
        {
          h: "A couple of notes",
          icon: "tag",
          key: { tag: "Tourism only", text: "Working on a tourist entry is not allowed, and staying past your stamp needs an extension from PICA. Then see the money guide.", tone: "amber" },
          p: [
            "Visa-free entry is for <b>tourism and business visits</b>, not working, and staying <b>beyond your stamped date</b> needs a formal extension from PICA, Jamaica's immigration agency. Yellow fever vaccination is only required if you are <b>arriving from</b> a risk country.",
            "For how money works once you are there, the Jamaican dollar, US dollars, cards and the rest, see the <a href=\"/jamaica\">Jamaica money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa for Jamaica?", a: "No. US citizens visit Jamaica visa-free and are usually admitted for up to six months, with the officer setting the exact length on arrival. There is no visa to apply for, but every traveler must complete the free online C5 immigration and customs form before arriving." },
        { q: "What is the Jamaica C5 form?", a: "The C5 is Jamaica's combined immigration and customs declaration, mandatory for every arriving passenger by air or sea, including children. You complete it online before you travel and receive a QR code to show at the airport. It is not a visa; it is a declaration, and it is free." },
        { q: "How much does the Jamaica C5 form cost?", a: "Nothing. The C5 is completely free on the official government site, enterjamaica.gov.jm. Many third-party sites charge $50 to $100 to file the same form; they are not official. Use only the government portal, and if you are asked to pay, you are on the wrong site." },
        { q: "When should I complete the Jamaica C5 form?", a: "You can file it from up to 30 days before travel, but not months in advance. Do it before you fly so you clear the airport on a QR code rather than filling a paper card on arrival. Each traveler needs their own submission, and you keep the confirmation for departure." }
      ],
      sources: {
        links: [
          { label: "Government of Jamaica: the official, free C5 immigration and customs declaration portal", url: "https://enterjamaica.gov.jm", type: "gov" },
          { label: "Visit Jamaica (Jamaica Tourist Board): official entry requirements and the C5 declaration", url: "https://www.visitjamaica.com/plan-your-adventure/travel-tips/entry-requirements/", type: "gov" },
          { label: "US Department of State: the country information pages, the official router for entry requirements by destination", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html", type: "gov" }
        ],
        judgment: "Jamaica's visa-free entry for US citizens is stable, and the online C5 declaration is a standing, mandatory requirement in 2026, not a pandemic leftover. The form is free; only the official government site is legitimate. Stay length is set by the officer on arrival. Checked July 2026."
      }
    },
    {
      slug: "hotel-taxes-and-fees",
      glance: [
        { k: "On top of the room", v: "10% GCT plus a flat fee" },
        { k: "Tourism GCT", v: "10% now, 15% from Apr 2027" },
        { k: "Room tax", v: "US$1 to US$4 a night" },
        { k: "Charged", v: "Per room, not per person" }
      ],
      live: true,
      topic: "taxes",
      title: "Jamaica hotel taxes and fees: the 10% and the room tax",
      description: "A Jamaica hotel bill adds the 10% tourism GCT plus a flat room tax of US$1 to US$4 a night. The GCT is legislated to reach 15% in April 2027. Checked 2026.",
      h1: "Jamaica hotel taxes and fees, explained",
      lede: "Short answer: less than most of the Caribbean today, and more from April 2027. Jamaica charges hotels a reduced rate of its sales tax plus a small flat nightly room tax, and the reduced rate is legislated to disappear. Here is what stacks now, what changes, and why the date matters more than the amount.",
      checked: "Aug 2026",
      checkedISO: "2026-08-17",
      answer: "Two government charges sit on a Jamaica room rate. The <b>General Consumption Tax</b>, Jamaica's sales tax, which is <b>15% as standard</b> but charged to hotels and tourism businesses at a reduced <b>10%</b>. And the <b>Guest Accommodation Room Tax</b>, a flat charge set by the size of the property: <b>US$1 per room per night up to 50 rooms</b>, <b>US$2</b> from 51 to 100 rooms, and <b>US$4</b> at 101 rooms and above. Both are charged <b>per room, not per person</b>, and GCT is <b>not</b> charged on the room tax, so nothing compounds here. The reduced 10% tourism rate is <b>legislated to rise to 15% on 1 April 2027</b>, though the industry is contesting it and the path is not settled. Arrival and departure taxes are almost always <b>inside your airfare</b>. There is <b>no VAT refund</b> on shopping.",
      official: {
        label: "Tax Administration Jamaica: the Guest Accommodation Room Tax rates and rules",
        url: "https://www.jamaicatax.gov.jm/guest-accommodation-room-tax1",
        note: "TAJ publishes the room tax tiers, the per-room basis, the exemptions and the rule that GCT is not charged on it. Note that TAJ's own table overlaps at 51 rooms; we use up to 50 for the lowest band, matching the original measure. Resort fees are set by each property."
      },
      sections: [
        {
          h: "The tourism GCT: 10% today, and a date on the calendar",
          icon: "receipt",
          key: { fig: "10%", tag: "Reduced, for now", text: "Hotels pay a concessional 10% rather than the standard 15%. That concession is legislated to end on 1 April 2027, which makes the date matter more than the rate.", tone: "teal" },
          p: [
            "Jamaica's <b>General Consumption Tax</b> is <b>15% as standard</b>, but hotels and other tourism businesses have long paid a reduced effective rate of about <b>10%</b>. That is what sits on a room rate today, and it is why a Jamaica hotel bill currently stacks less than a Dominican one at 28% or a Nassau one at about 21%.",
            "The concession is going. Following Hurricane Melissa in late 2025, the 2026 to 2027 revenue measures legislated the tourism rate up to the standard <b>15%</b>, effective <b>1 April 2027</b>, with the delay explicitly intended to give the industry time to recover. So a trip taken before that date pays 10%, and a trip after it is budgeted at 15% unless something changes."
          ]
        },
        {
          h: "Whether it actually reaches 15% is not settled",
          icon: "alert",
          key: { tag: "An endpoint, not a guarantee", text: "The measure has passed and the date is real, but the hotel association is formally opposed and has been meeting the government through 2026. Treat 15% as the legislated endpoint rather than a certainty.", tone: "amber" },
          p: [
            "This is worth saying plainly rather than presenting 15% as a settled fact. The increase <b>passed Parliament</b> as part of the 2026 to 2027 revenue package and the <b>1 April 2027 date is real</b>. But the <b>Jamaica Hotel and Tourist Association has formally rejected it</b>, arguing the cost cannot simply be passed to visitors when contracts already extend into 2027, and it has been meeting the finance minister and the Prime Minister through 2026 with no compromise announced.",
            "There is one further ambiguity we could not resolve. Reputable Jamaican reporting describes the increase as <b>phased in over two fiscal years</b>, but no source publishes intermediate rates, and other accounts describe it as a single step to 15%. It is possible the phasing refers to the revenue profile rather than the rate. We are not going to invent a waypoint: <b>10% now, 15% legislated for 1 April 2027, exact path unconfirmed</b>. If you are booking for 2027 or later, budget 15% and treat anything lower as a bonus."
          ]
        },
        {
          h: "The room tax is flat, per room, and set by the hotel's size",
          icon: "coins",
          key: { fig: "US$1 to $4", tag: "By property size", text: "A flat nightly charge scaled to how many rooms the property has, not to what you paid. It is charged per room rather than per person, so two people in one room pay it once.", tone: "teal" },
          p: [
            "The <b>Guest Accommodation Room Tax</b> is a flat charge on every occupied room each night, and the rate depends on <b>how big the property is</b>, not what your room costs: <b>US$1</b> up to 50 rooms, <b>US$2</b> from 51 to 100 rooms, and <b>US$4</b> at 101 rooms and above. A large all-inclusive is therefore at the top band and a small guesthouse at the bottom. Unusually, the tiers are <b>set in US dollars</b> in the legislation itself and converted monthly at the Bank of Jamaica rate, so for a US traveller these are exact figures rather than currency approximations.",
            "Three details that work in your favour. It is charged <b>per room, not per person</b>, so a couple sharing pays once and a family in one room pays once. <b>GCT is not charged on it</b>, so unlike the Bahamas, where VAT applies to the area levies and the pieces compound, nothing stacks on top of this. And a stay of more than <b>60 unbroken nights</b> is reclassified as residential and stops attracting the tax from the 61st night. It does apply to complimentary rooms, which is why a free night on points can still show a small charge."
          ]
        },
        {
          h: "Resort fees, all-inclusives, and nothing to reclaim",
          icon: "usd",
          key: { fig: "No refund", tag: "Nothing to claim back", text: "Some resorts add a fee of their own, set per property. There is no tourist VAT-refund scheme in Jamaica, so the GCT you pay is a cost rather than something recoverable at the airport.", tone: "amber" },
          p: [
            "Beyond the two government charges, <b>some resorts add a resort fee</b>. This is the property's own, it is not a tax, and there is no standard figure, so read the fees section of your own booking. Many <b>all-inclusive</b> properties fold the taxes and gratuities into the package price instead, and a good number formally ask guests not to tip, which means the comparison worth making is the <b>all-in total</b> rather than the nightly rate. See the <a href=\"/jamaica/tipping\">Jamaica tipping guide</a> for how that policy works in practice.",
            "Two closing points. Jamaica's <b>arrival and departure taxes</b>, its Tourism Enhancement Fee and airport charges, are <b>almost always built into your airfare</b>, so you should not be paying them at the airport, though it is worth confirming with your airline. And there is <b>no tourist VAT-refund scheme</b> here, so the GCT is simply part of the price with nothing to reclaim on the way out. For cards, cash and why paying in US dollars quietly costs you, see the <a href=\"/jamaica\">Jamaica money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "How much tax is on a hotel room in Jamaica?", a: "Today, 10% General Consumption Tax at the reduced tourism rate, plus a flat Guest Accommodation Room Tax of US$1 per room per night at properties up to 50 rooms, US$2 from 51 to 100 rooms, and US$4 at 101 rooms and above. Both are charged per room rather than per person, and GCT is not charged on the room tax. Some resorts add a resort fee of their own on top, which is not a tax." },
        { q: "Is Jamaica's hotel tax going up to 15%?", a: "That is the legislation. The reduced 10% tourism rate is set to rise to the standard 15% on 1 April 2027, passed as part of the 2026 to 2027 revenue measures after Hurricane Melissa. It has not happened yet, so a trip before that date pays 10%. The hotel association is formally contesting the increase and reporting describes it as phased over two fiscal years without publishing intermediate rates, so treat 15% as the legislated endpoint rather than a certainty." },
        { q: "What is the Guest Accommodation Room Tax in Jamaica?", a: "A flat government charge on each occupied room per night, scaled to the size of the property rather than the price of the room: US$1 up to 50 rooms, US$2 from 51 to 100, US$4 at 101 and above. The tiers are set in US dollars in the legislation. It is charged per room, not per person, it applies to complimentary rooms, and a stay of more than 60 unbroken nights stops attracting it from the 61st night." },
        { q: "Do I pay the room tax per person in Jamaica?", a: "No, per room per night. Tax Administration Jamaica states this directly: two people booked into one room are charged once, not twice. That is worth knowing if you are comparing Jamaica against the Bahamas, where some resorts charge mandatory gratuities per person per night instead, which behaves very differently for a family." },
        { q: "Can I claim a tax refund when leaving Jamaica?", a: "No. There is no tourist VAT or GCT refund scheme in Jamaica, so the tax you pay on hotels, meals and shopping is simply part of the price. On the other hand, the arrival and departure taxes are almost always already inside your airfare, so you should not owe anything extra at the airport when you fly home." }
      ],
      sources: {
        links: [
          { label: "Tax Administration Jamaica: the Guest Accommodation Room Tax rates, per-room basis and exemptions", url: "https://www.jamaicatax.gov.jm/guest-accommodation-room-tax1", type: "revenue" },
          { label: "Jamaica Information Service: the 2026 to 2027 revenue measures raising the tourism GCT to 15% from 1 April 2027", url: "https://jis.gov.jm/govt-projects-29-4b-from-new-revenue-measures-in-fiscal-year-2026-27/", type: "gov" }
        ],
        judgment: "The room tax tiers, the per-room basis, the 60-night residential rule and the fact that GCT is not charged on the room tax all come from Tax Administration Jamaica's own guidance. One caveat on that source: TAJ's published table overlaps at 51 rooms, printing the lowest band as 1 to 51 and the next as 51 to 100, so we use up to 50 rooms for the lowest band, which matches the 2012 measure that introduced the tax. The current tourism GCT rate of about 10% is confirmed by international tax practices rather than a single official rate table. On the 2027 increase, the measure and the 1 April 2027 date are well reported, but the phasing is genuinely unresolved: Jamaican reporting describes it as phased over two fiscal years while other accounts describe a single step, and no source publishes intermediate rates, so we have stated the endpoint and said the path is unconfirmed rather than guessing. Resort fees are set by each property. Checked August 2026."
      }
    }
  ]
};
