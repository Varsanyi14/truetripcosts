export default {
  slug: "jamaica",
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
      { n: "Budget",    per: 50,  cash: 0.5 },
      { n: "Mid-range", per: 90,  cash: 0.4 },
      { n: "Comfort",   per: 170, cash: 0.3 }
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
  }
};
