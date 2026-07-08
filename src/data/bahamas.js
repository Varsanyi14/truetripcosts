export default {
  slug: "bahamas",
  live: true,
  name: "The Bahamas",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  emergency: { medical: "911", note: "911 works like it does in the US for police, fire and ambulance, free from any phone. 919 is an alternate that also reaches police and fire. Save your hotel address to read out, and remember that on the Out Islands help can be further away.", checked: "Jul 2026", checkedISO: "2026-07-04" },
  insuranceLevel: "medium",
  region: "Americas",
  sources: {
    changed: "Sources added on first publish. Verified with the Bahamas Department of Inland Revenue that the standard VAT rate is 10%, and with the official tourism board that non-resident visitors can reclaim it on shopping through Global Blue, often refunded at the till. Confirmed with the Government of The Bahamas that the air departure tax is BS$15 and normally built into airfare, and with the Royal Bahamas Police Force that 911 and 919 are the emergency numbers. The Bahamian dollar's 1 to 1 peg with the US dollar, and the interchangeable use of both currencies, is long standing.",
    links: [
      { label: "Bahamas Department of Inland Revenue: the standard VAT rate is 10%", url: "https://inlandrevenue.finance.gov.bs/value-added-tax/about-vat/", type: "revenue" },
      { label: "The Bahamas (official tourism board): the US dollar peg, tipping, and the Global Blue VAT refund for visitors", url: "https://www.bahamas.com/plan-your-trip/island-faq", type: "tourism" },
      { label: "Government of The Bahamas: the BS$15 air departure (passenger) tax", url: "https://www.bahamas.gov.bs/departure-tax", type: "gov" },
      { label: "Royal Bahamas Police Force: emergency numbers (911 and 919)", url: "https://www.royalbahamaspolice.org/crimeprevention/emergencynumbers.html", type: "police" }
    ],
    judgment: "The split between card-friendly Nassau, Paradise Island and Freeport and the cash-first Out Islands, straw markets and Fish Fry, the rough ATM fee and withdrawal-limit ranges, and the daily spending figures in the calculator are our own read from recent traveler and bank reports, not a single official table. Treat them as a planning guide and confirm anything critical before you travel."
  },
  hook: "The Bahamian dollar is pegged 1 to 1 with the US dollar, so USD and local notes are used interchangeably at par, no exchange needed. Tap your card in Nassau and the resorts, and carry small bills for taxis, the straw market, the Out Islands and tips.",
  aliases: ["bahamas", "the bahamas", "nassau", "paradise island", "freeport", "grand bahama", "exuma", "exumas", "eleuthera", "harbour island", "abaco", "bimini", "atlantis", "baha mar", "bsd", "bahamian dollar", "junkanoo"],

  title: "Money in the Bahamas (2026): US Dollars, Cards, ATMs, the VAT Refund and Tipping | True Trip Costs",
  description: "How to handle money in the Bahamas as a US traveler in 2026: the Bahamian dollar's 1 to 1 peg with the US dollar and how both are used at par, where cards work, ATM fees, why the Out Islands and straw markets need cash, the 10% VAT and the visitor VAT refund on shopping, US-style tipping, and connectivity. Checked July 2026.",

  h1: "Money in the Bahamas, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your US dollars work at par, where your card covers you, the cash worth carrying for the Out Islands and markets, and the taxes and tipping rules that catch people out.",
  hero: {
    img: "/bahamas-hero.jpg",
    h: 1375,
    alt: "A pastel colonial street in Nassau, the Bahamas at dusk, with brightly painted buildings in pink, yellow and turquoise, palm trees and string lights overhead, a lone figure walking away down the street toward a turquoise harbour glowing under an amber sunset, and a plate of conch fritters, a fresh green coconut with a straw and a golden rum cocktail on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "The Bahamas is one of the <b>easiest places in the Caribbean for money</b>. The Bahamian dollar (BSD) is pegged <b>1 to 1 with the US dollar</b>, and the two are used interchangeably at par, so you can spend US dollars almost everywhere, get change in a mix of both, and never exchange a thing, with no penalty for paying in dollars. <b>Visa and Mastercard</b> are widely taken at hotels, resorts (Atlantis, Baha Mar), Bay Street shops, tourist restaurants and tour operators, with Amex and Discover less consistent, so a <b>no-foreign-fee card</b> covers most of a trip. Where you still need <b>cash</b> is the local side: the <b>straw markets</b>, the <b>Fish Fry</b> at Arawak Cay, taxis, water taxis, small vendors, tips, and above all the <b>Out Islands</b> (the Exumas, Eleuthera, Harbour Island, Andros and the rest), where card acceptance and ATMs thin out fast, so stock up in Nassau or Freeport first. Get local cash from a <b>bank ATM</b> (RBC Royal Bank, Scotiabank, CIBC or Bank of the Bahamas), expect about <b>3 to 10 dollars</b> a withdrawal on top of your home bank's fee, and although the currency is at par, <b>choose Bahamian dollars, not US dollars</b>, on any card terminal to dodge the poor conversion. Two nice extras: tipping follows familiar <b>US customs</b>, and as a visitor you can <b>claim the 10% VAT back on shopping</b> at Global Blue stores (below).",

  meter: {
    heading: "Cards and US dollars cover Nassau and the resorts; keep cash for the straw market, taxis, tips and the Out Islands.",
    cashPct: 35,
    note: "A rough feel for everyday spending. Cards work well at hotels, resorts, Bay Street shops, tourist restaurants and tour operators, and US dollars are accepted everywhere at par. Cash takes over for the straw markets, the Fish Fry, taxis, water taxis, small vendors and tips, and it becomes essential on the Out Islands, where card acceptance and ATMs are limited."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Good in Nassau and resorts", p: "Visa and Mastercard are widely taken at hotels, resorts, Bay Street shops, tourist restaurants and tour operators, with Amex and Discover less consistent. A no-foreign-fee card is the easy way to cover most of your spending. Your bank's foreign fee still applies unless the card waives it (and some US banks add it even though the currency is at par), and always choose Bahamian dollars on the terminal.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "For the local side and Out Islands", p: "You can pay it in US dollars or Bahamian dollars, both work at par. Keep small bills for the straw markets, the Fish Fry, taxis, water taxis, small vendors and tips, and carry more if you are heading to the Out Islands, where cards and ATMs are scarce. Get local cash from a bank ATM rather than the airport counter.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy in town, scarce on Out Islands", p: "Plenty in Nassau, Paradise Island and Freeport (<b>RBC Royal Bank, Scotiabank, CIBC, Bank of the Bahamas</b>), most dispensing Bahamian dollars and some US dollars, both fine. Expect a fee of about <b>3 to 10 dollars</b> plus your home bank's, and limits around <b>300 to 500 dollars</b>. Decline \"convert to dollars,\" and pull enough before any Out Island, where machines thin out.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> for hotels, resorts, dining and shops, plus a backup from a different bank. Amex and Discover are less widely accepted.",
      "Add a <b>fee-free ATM debit card</b> (Charles Schwab, Wise or Revolut) for local cash. Some US banks charge a foreign fee here even though the currency is at par, so a card that waives it helps.",
      "You do not need to exchange money first: <b>bring US dollars</b> and spend them at par, or pull Bahamian dollars from an ATM on arrival. Keep small bills for tips and taxis.",
      "Heading to the <b>Out Islands</b>? Plan your cash in Nassau or Freeport first, since ATMs and card acceptance are limited once you leave."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters. You can spend US dollars as-is, or pull Bahamian dollars from a bank ATM and <b>decline \"convert to dollars.\"</b>",
      "Take out enough cash for taxis, tips and your first day, especially if you are connecting on to an Out Island where machines are scarce.",
      "Set up an <b>eSIM</b> before you land for maps and calls. BTC and Aliv both cover Nassau, Paradise Island and Freeport well; a local SIM needs your passport, so an eSIM is the easy route.",
      "Agree any taxi fare before you get in. Nassau taxis are zone-priced and can be paid in US or Bahamian dollars."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap or dip your card</b> at hotels, resorts, restaurants and shops, and choose Bahamian dollars every time.",
      "Keep <b>cash</b> for the straw market, the Fish Fry, taxis, water taxis and tips; US or Bahamian dollars both work.",
      "Shopping for something to take home? Ask for a <b>Global Blue VAT refund</b>, since as a visitor you can reclaim the 10% VAT (below).",
      "On the <b>Out Islands</b>, assume cash: carry enough, in small bills, before you go."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>US dollars are fine, but choose Bahamian dollars on card terminals.</b> Cash in USD is accepted at par with no penalty, but on a card machine or ATM, picking US dollars (dynamic currency conversion) quietly adds a few percent, so choose BSD.",
      "<b>Carry cash for the Out Islands and markets.</b> Nassau and the resorts are card-friendly, but the straw markets, the Fish Fry and the Family Islands run on cash, so plan ahead."
    ], cta: null }
  ],

  cash: {
    rate: 1, cur: "BSD", round: 50, defaultIndex: 1,
    rateNote: "The Bahamian dollar is pegged 1 to 1 with the US dollar, so a Bahamian dollar and a US dollar are worth exactly the same and are used interchangeably. This is the small, cash-in-hand slice of your spending, and you can pay it in US dollars if you prefer.",
    styles: [
      { n: "Budget",    per: 60,  cash: 0.45 },
      { n: "Mid-range", per: 120, cash: 0.35 },
      { n: "Comfort",   per: 230, cash: 0.25 }
    ]
  },

  connectivity: {
    works: "Good across Nassau, Paradise Island and Freeport, thinner on the Out Islands. The two carriers are BTC (the former national operator) and Aliv, both on 4G LTE, with coverage strongest in the main tourist centers and patchier on the Family Islands. A local prepaid SIM is inexpensive but needs your passport; a travel eSIM from Airalo, Nomad or Holafly is the easy route if your phone supports it, since local eSIM options are still limited. Your US plan may include some roaming, so check the rate before you rely on it. You do not need mobile data to pay by card, but you will want it for maps, calls and ride or taxi apps. Most hotels and resorts have Wi-Fi."
  },

  tax: {
    none: true,
    currency: "BSD",
    note: "The Bahamas has no per-person nightly tourist tax to add at the desk. What you will see instead: a 10% VAT baked into most goods, dining and hotel rates (basic unprepared groceries are exempt or reduced), a service charge or gratuity that many hotels and resorts add (often about 15%), and sometimes a resort levy. Your air departure tax of about 15 dollars is almost always built into your airfare. And as a visitor, you can claim the 10% VAT back on shopping through the Global Blue scheme."
  },

  currencyHeading: "The Bahamian dollar, in plain terms.",
  facts: [
    { sym: "usd", k: "Same as the US dollar", v: "The Bahamian dollar (BSD, written with a dollar sign) is pegged 1 to 1 to the US dollar and has been for decades, so 10 BSD is 10 US dollars, no conversion needed. US dollars and Bahamian dollars are accepted interchangeably, and you will usually get change in a mix of both. Spend any leftover Bahamian notes before you fly home, since they are hard to exchange elsewhere." },
    { sym: "card", k: "Cards, and where you need cash", v: "Visa and Mastercard are solid at hotels, resorts, Bay Street shops and tourist restaurants, with Amex and Discover less consistent. Cash rules the straw markets, the Fish Fry, taxis, small vendors and the Out Islands. Always choose Bahamian dollars on the terminal, and carry a backup card." },
    { sym: "tag", k: "Money back on shopping", v: "As a visitor leaving within 45 days you can reclaim the 10% VAT on goods you buy to take home, through the Global Blue Tax Free scheme, and at affiliated stores you get the refund immediately at the till. Look for Global Blue signage in Nassau (Bay Street, the airport, Cable Beach and Baha Mar), on Paradise Island and in Freeport. The minimum purchase is about 25 dollars." },
    { sym: "tip", k: "Tipping is US-style", v: "Unusually for the Caribbean, the Bahamas follows US tipping customs: 15 to 20% at restaurants (check for an automatic gratuity first), a dollar or two per drink, a few dollars per bag for porters, and 15 to 20% for tour guides and charter captains. See the tipping section below." }
  ],

  taxfree: {
    label: "Taxes, refunds and fees",
    heading: "A 10% VAT you can claim back, and the fees on your bill.",
    text: "The Bahamas keeps tax simple for visitors. There is <b>no per-person nightly tourist tax</b> to hand over at the desk. Prices carry a <b>10% VAT</b> (basic unprepared groceries are exempt or reduced), usually baked into what you see on menus and hotel rates. Hotels and resorts commonly add a <b>service charge or gratuity</b>, often around 15%, and sometimes a <b>resort levy</b>, so read the final bill rather than assuming the nightly rate is all-in. The win worth acting on: as a visitor (a non-resident leaving within 45 days) you can <b>reclaim the 10% VAT on goods</b> you buy to take home, through the <b>Global Blue Tax Free</b> scheme, and at affiliated stores the refund is given <b>immediately at the till</b> rather than at the airport. Look for Global Blue signage on Bay Street and at the airport in Nassau, at Cable Beach and Baha Mar, on Paradise Island and in Freeport; the minimum purchase is about <b>25 dollars</b> for non-consumables. On entry and exit, the <b>air departure tax</b> of about <b>15 dollars</b> per person is almost always <b>built into your airfare</b>, so you should not owe it separately at the airport (cruise passengers instead pay separate per-person taxes and tourism levies by sea)."
  },

  traps: [
    "<b>US dollars are fine in cash, but choose Bahamian dollars on card terminals.</b> Paying cash in US dollars costs you nothing, since it is at par, but on a card machine or ATM, choosing US dollars (dynamic currency conversion) quietly adds a few percent. Choose BSD every time.",
    "<b>Carry cash for the Out Islands.</b> The Exumas, Eleuthera, Harbour Island, Andros and the other Family Islands have very limited card acceptance and few, sometimes unreliable, ATMs. Withdraw enough in Nassau or Freeport before you go.",
    "<b>The straw market and Fish Fry are cash-only.</b> Nassau's Straw Market and the food stalls at Arawak Cay (the Fish Fry) run on cash, and bargaining is expected at the market, so bring small bills.",
    "<b>Read the hotel bill for service charges and resort fees.</b> On top of the 10% VAT, many resorts add a service charge or gratuity (often about 15%) and sometimes a resort levy, so the nightly rate is rarely the full story.",
    "<b>Some US banks still charge a foreign fee here.</b> Even though the Bahamian dollar is at par with the US dollar, a few US banks treat withdrawals and card purchases as foreign and add a fee, so a no-foreign-fee card saves a small but real amount.",
    "<b>Do the VAT refund before you fly.</b> The Global Blue refund on goods is for visitors leaving the country, so keep your receipts and, at any store that does not refund on the spot, get the paperwork validated before you check your bags. Bahamian notes are also hard to exchange at home, so spend them first."
  ],

  tippingHeading: "US-style, and often added to your bill.",
  tipping: "Tipping in the Bahamas follows <b>US customs</b>, which is unusual for the Caribbean. At sit-down restaurants, <b>15 to 20%</b> is standard for good service, but check the bill first, since many places (especially resort restaurants and larger parties) add an <b>automatic gratuity of about 15%</b>, in which case nothing more is needed. At bars, a <b>dollar or two per drink</b> is normal; for porters, <b>a dollar or two a bag</b>; and for housekeeping, a <b>few dollars a day</b>. Tour guides, snorkeling and dive operators, and fishing charter captains are usually tipped <b>15 to 20%</b>. Tip in cash, in either US or Bahamian dollars, with small bills preferred, and handed to the person to be sure it reaches them.",

  faqs: [
    { q: "Can I use US dollars in the Bahamas?", a: "Yes, everywhere. The Bahamian dollar is pegged 1 to 1 to the US dollar, and the two are accepted interchangeably at par, so you can spend US dollars without exchanging anything first and simply get change in a mix of both. There is no penalty for paying cash in US dollars. The one place to choose Bahamian dollars is on a card terminal or ATM, to avoid the poor conversion of dynamic currency conversion." },
    { q: "Do I need cash in the Bahamas?", a: "Some, and more if you leave Nassau. Cards work well at hotels, resorts, Bay Street shops and tourist restaurants, but the straw markets, the Fish Fry, taxis, water taxis, small vendors and tips run on cash, and the Out Islands (the Exumas, Eleuthera, Harbour Island and the rest) have very limited card acceptance and ATMs. Carry small bills, in US or Bahamian dollars, and stock up in Nassau or Freeport before any Family Island." },
    { q: "What is the best way to get Bahamian dollars?", a: "A bank ATM. Use RBC Royal Bank, Scotiabank, CIBC or Bank of the Bahamas machines in Nassau, Paradise Island or Freeport; most dispense Bahamian dollars and some dispense US dollars, both fine at par. Expect a fee of about 3 to 10 dollars plus your home bank's charge, with limits around 300 to 500 dollars per withdrawal. Decline \"convert to dollars\" and, since some US banks add a foreign fee even at par, a no-foreign-fee card helps." },
    { q: "Can I get a VAT refund on shopping in the Bahamas?", a: "Yes, if you are a visitor leaving within 45 days. Through the Global Blue Tax Free scheme you can reclaim the 10% VAT on goods you buy to take home, and at affiliated stores you get the refund immediately at the till. Look for Global Blue signage on Bay Street and at the airport in Nassau, at Cable Beach and Baha Mar, on Paradise Island and in Freeport. The minimum purchase is about 25 dollars for non-consumables." },
    { q: "Do I have to pay a tourist tax or departure tax in the Bahamas?", a: "There is no per-person nightly tourist tax to hand over. Prices carry a 10% VAT, and hotels often add a service charge or gratuity (around 15%) and sometimes a resort levy, so read the final bill. Your air departure tax of about 15 dollars is almost always built into your airfare, so you should not owe it separately at the airport, though cruise passengers pay separate taxes and tourism levies by sea." },
    { q: "How much cash should I bring for a week in the Bahamas?", a: "It depends on your trip. At a Nassau or Paradise Island resort you may need little beyond tips, taxis and a few excursions, so roughly 150 to 300 US dollars in cash across a week beyond your card spending is a fair guide. On the Out Islands, plan for more, since cards and ATMs are scarce. US or Bahamian dollars both work; keep small bills for tips, taxis and the straw market." }
  ],

  culture: {
    heading: "A few island words go a long way",
    intro: "English is the language of the Bahamas, spoken fast and musical, so you will understand and be understood. But a handful of local words, and a little island history, turn you from a tourist into a guest.",
    phrases: [
      { mean: "Friend, buddy (and just 'hey')", say: "like 'buoy' said fast", word: "Bey" },
      { mean: "Conch, the island's signature shellfish", say: "say it KONK", word: "Conch" },
      { mean: "Fresh limeade, the island cooler", say: "SWITCH-ah", word: "Switcha" },
      { mean: "Gossip, best over a cold drink", say: "sip sip", word: "Sip sip" },
      { mean: "The local bus", say: "JIT-nee", word: "Jitney" },
      { mean: "The beloved island street dog", say: "POT-cake", word: "Potcake" },
    ],
    tip: "The word you will hear most is <b>bey</b>, a friendly all-purpose man, woman or buddy, as in Hey, bey. And <b>dem</b> tacked onto a name means and company, so Johnny dem is Johnny and his crew.",
    stories: [
      { img: "/bahamas-culture-1.jpg",
        alt: "WPA-style illustration of a jubilant Junkanoo street parade at dawn, dancers in towering bright crepe-paper costumes, goombay drummers and cowbells, energy and color",
        h: "Junkanoo",
        p: "Junkanoo is the heartbeat of the Bahamas: a dazzling street parade of towering costumes, goombay drums, cowbells and brass that fills the streets on Boxing Day and New Year's morning. It began in the days of slavery, when it was the one holiday of the year, and it is fiercely loved.",
        note: "Good to know: the big parades are December 26 and January 1" },
      { img: "/bahamas-culture-2.jpg",
        alt: "WPA-style illustration of a weathered pirate sloop at anchor in old Nassau harbor at sunset, a black flag, palm-fringed shore and a low fort",
        h: "The Republic of Pirates",
        p: "In the early 1700s Nassau was a pirates' den, a self-declared Republic of Pirates where the likes of Blackbeard came and went. It did not last, and the islands wear the history with a wink. You will find it in the old forts and the tales.",
        note: "Good to know: the pirates were finally driven out in 1718" },
      { img: "/bahamas-culture-3.jpg",
        alt: "WPA-style illustration of a free-diver rising through clear turquoise shallows holding up a large pink queen-conch shell, a wooden sloop on the surface above",
        h: "Conch, say konk",
        p: "The pink queen conch is the taste and emblem of the Bahamas, in fritters, in salad, cracked fresh by the water, and the shell itself is an island icon. Just remember it is pronounced konk, never conch. Order the conch salad; it is the national dish.",
        note: "Say it: KONK, never 'conch'" },
    ],
    pride: "The Bahamas is 700 islands and cays all its own, not a stop on someone else's map. Junkanoo, the goombay rhythm, the warmth and the impossibly clear water are all theirs, and they love to share them."
  }
};
