export default {
  slug: "argentina",
  live: true,
  name: "Argentina",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-03",
  sources: {
    changed: "Sources added. Verified with Argentina's national and Buenos Aires tourism boards that non-resident foreign tourists get an automatic 21% VAT discount on accommodation, and on breakfast if it is included, when paying with a foreign-issued card or an international transfer, shown at billing with a passport and entry record. Confirmed the 2025 migration reform (Decree 366/2025) that expects foreign visitors to carry valid travel medical insurance and lets public hospitals bill non-residents for non-emergency care, with border checks on tourists inconsistent so far. The exchange picture is current: after the April 2025 lifting of currency controls the official, blue and MEP rates converged, so a foreign card gets the MEP rate. Peso figures are a fast-moving snapshot.",
    links: [
      { label: "Visit Argentina: 21% VAT refund on accommodation for foreign tourists", url: "https://www.argentina.travel/en/news/21-vat-refund-on-accommodation-for-foreign-tourists-in-argentina", type: "tourism" },
      { label: "City of Buenos Aires: VAT-free accommodation for visitors", url: "https://turismo.buenosaires.gob.ar/en/article/vat-free-accommodation", type: "gov" },
      { label: "Buenos Aires Herald: health insurance now required to enter Argentina", url: "https://buenosairesherald.com/world/travelers-will-now-need-to-show-proof-of-health-insurance-to-enter-argentina", type: "media" }
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "911", note: "911 is the nationwide line for police, fire and ambulance and works from any phone, even with no SIM or credit. In Buenos Aires and some provinces 107 reaches the SAME ambulance service directly, with 101 for police and 100 for fire. There is also a tourist line, 0800 999 5000, with some help in languages other than Spanish. Save your address in Spanish to read out.", checked: "Jul 2026", checkedISO: "2026-07-03" },
  insuranceLevel: "high",
  region: "Americas",
  hook: "The blue-dollar bargain is over: your card now gets a fair rate, so tap for most things, keep some cash for taxis and small spots, skip the pricey ATMs, and carry travel insurance.",
  aliases: ["argentina", "buenos aires", "patagonia", "mendoza", "bariloche", "iguazu", "iguazu falls", "el calafate", "ushuaia", "salta", "cordoba", "peso", "ars", "argentine peso", "blue dollar", "dolar blue", "mep", "malbec", "tango", "obelisco"],

  title: "Money in Argentina (2026): Cards, the Blue Dollar Myth, MEP, Cash and Tipping | True Trip Costs",
  description: "How to handle money in Argentina as a US traveler in 2026: why the blue-dollar advantage is gone, the fair rate your card now gets (MEP), the cash still worth carrying and how to get it, the pricey ATMs, the 21% hotel VAT refund, the new travel-insurance rule, and 10% cash tipping. Checked July 2026.",

  h1: "Money in Argentina, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your card now gets a fair rate, the cash still worth carrying and how to get it cheaply, the ATMs to go easy on, and the hotel tax you should not be paying.",
  hero: {
    img: "/argentina-hero.jpg",
    h: 1375,
    alt: "A quiet Buenos Aires street at dusk, with grand balconied stone buildings on one side and colorful painted facades on the other, string lights overhead, a lone figure walking away down a cobblestone street toward the silhouette of the Obelisco and a domed building against an amber sunset, and a sizzling steak, a glass of red Malbec and two golden empanadas on a wooden table in the foreground"
  },

  recentChange: {
    date: "Since 2025",
    text: "The old blue-dollar bargain is gone. After Argentina lifted its currency controls, the official, street and card (MEP) rates converged through 2025 and 2026, so a foreign card now gets a fair rate and there is no longer a big prize for carrying dollars. Prices in dollar terms have risen sharply, so budget realistically and, with inflation still high, check the rate right before you travel."
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Argentina's money story has flipped. For years the trick was to bring US dollar cash and change it at the street 'blue' rate for far more pesos. That advantage is gone: after the country lifted its currency controls, the official, blue and card rates converged, so a <b>foreign Visa or Mastercard now gets a fair rate</b> (the MEP rate, applied automatically in pesos) and there is <b>no longer a big prize for carrying dollars</b>. Tap or dip your card for most things, from hotels and restaurants to Uber and shops, and <b>always choose pesos, never dollars</b>. Amex is rarely accepted, so carry Visa or Mastercard, and note that Visa applies the MEP rate at purchase while Mastercard charges the official rate and refunds the difference a few days later. You still want <b>some cash</b> for ordinary taxis, small shops, markets, cafes and tips, and the best value is to <b>exchange US dollars at an official casa de cambio or use Western Union</b>, because <b>Argentine ATMs are the expensive option</b>: low per-withdrawal limits and steep flat fees, with a fee-refunding card like Charles Schwab the main way to soften them. One easy win at hotels: as a foreign tourist paying with a foreign card, you should <b>not be paying the 21% accommodation VAT</b>, so show your passport. Two more things before you go: Argentina now expects foreign visitors to carry <b>travel medical insurance</b>, and because prices move fast with high inflation, <b>check the rate right before you travel.</b>",

  meter: {
    heading: "Cards cover most of a city trip now, but keep cash for taxis, small spots and tips.",
    cashPct: 35,
    note: "A rough feel for everyday spending. Cards now cover most of a city trip: hotels, restaurants, shops and rides on Uber. Cash still handles ordinary taxis, small shops and markets, casual cafes, tips and smaller towns, and it leans a little more essential the further you get from Buenos Aires."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Now gets a fair rate", p: "A foreign Visa or Mastercard is charged in pesos at the MEP rate, which is now competitive after the rates converged, so cards are the easy default for hotels, restaurants, shops and Uber. Visa applies the rate at purchase; Mastercard charges the official rate and refunds the difference within days. Amex is rarely accepted, and your own bank's foreign fee still applies unless your card waives it.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Still needed, sourced smartly", p: "Keep pesos for ordinary taxis, small shops, markets, casual cafes and tips. The best value is exchanging US dollars at an official casa de cambio or picking up pesos from Western Union, both close to the street rate. Go easy on the ATM for large sums, and always pay tips in cash, since card receipts often have no tip line.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Low limits, steep fees", p: "The pricey option. Per-withdrawal limits are low, often the equivalent of 70 to 150 dollars, and the flat fee is steep enough to run 10 percent or more of a small withdrawal, on top of the official rate. A <b>Charles Schwab</b> debit card refunds those fees, which is the main way to make ATMs bearable. Withdraw inside banks in daylight and decline \"convert to dollars.\"", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> for almost everything, plus a backup from a different bank. Amex is rarely accepted, so do not rely on it.",
      "Add a <b>fee-free ATM debit card</b> for the cash you need. Charles Schwab refunds ATM fees worldwide, which cancels out Argentina's steep machine fees; Wise and Revolut are low-fee.",
      "Bring a few <b>clean, newer US 100 dollar bills</b> if you want cash on hand. They exchange well at a casa de cambio or Western Union, and small dollar bills make welcome tips for guides and porters.",
      "<b>Sort travel medical insurance.</b> Argentina now expects foreign visitors to carry it, and public hospitals bill non-residents for non-emergency care, so bring proof and check the current entry rules before you fly."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange desks, which give the official rate, the worst of the options.",
      "If you want a little cash on arrival, pull pesos from a bank ATM and <b>decline \"convert to dollars,\"</b> or wait and exchange dollars in town for a better rate.",
      "Set up an <b>eSIM</b> before you land for maps and Uber. A local SIM needs passport registration, so an eSIM is the easy route.",
      "In Buenos Aires, get a <b>SUBE card</b> for the subway and buses, since cash is not accepted on board. Buy it and top it up at a kiosk or station."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap or dip your card</b> for hotels, restaurants, shops and Uber, and choose pesos every time.",
      "Keep <b>cash</b> for ordinary taxis, small shops, markets, casual cafes and tips.",
      "For a bigger cash top-up, use <b>Western Union</b> or an official <b>casa de cambio</b> rather than the ATM.",
      "Carry <b>small peso notes</b> for tips and taxis, since breaking a 10,000 or 20,000 peso note in a small shop is hard."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in pesos, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds a few percent on both card terminals and ATMs.",
      "<b>Check the rate right before you travel.</b> With inflation still high, prices and the exchange rate move fast, so a figure from a few months ago may be well out of date."
    ], cta: null }
  ],

  cash: {
    rate: 1500, cur: "ARS", round: 10000, defaultIndex: 1,
    rateNote: "Rough guide at about 1,500 pesos to the dollar in mid-2026, so 10,000 pesos is roughly 7 dollars and 100,000 pesos about 67. The peso moves fast, with inflation still around 33 percent a year, so treat any figure as a snapshot and check a live converter right before you travel.",
    styles: [
      { n: "Budget",    per: 40,  cash: 0.45 },
      { n: "Mid-range", per: 75,  cash: 0.35 },
      { n: "Comfort",   per: 150, cash: 0.25 }
    ]
  },

  connectivity: {
    works: "Good across Buenos Aires and the main cities. The three carriers are Claro (widest national and Patagonia reach), Personal (strong in Buenos Aires and on the main routes) and Movistar (solid in the cities). 4G is strong on tourist routes with growing 5G in Buenos Aires, Cordoba, Rosario and Mendoza, and signal thins in remote Patagonia and the national parks. A local prepaid SIM is cheap but must be registered with your passport, which can be fiddly, so an eSIM from Airalo, Nomad or Holafly is the easy route if your phone supports it. You do not need mobile data to pay by card, but you will want it for maps, Uber and QR payments. In Buenos Aires, a SUBE card is what you tap for the subway and buses."
  },

  tax: {
    none: true,
    currency: "ARS",
    note: "Argentina has no general nightly tourist tax. Better still, foreign tourists are refunded the 21% VAT (IVA) on accommodation when they pay with a foreign card and show their passport, though hotels sometimes apply it anyway, so check the bill. A few destinations such as Bariloche add a small local eco or tourist fee at hotels."
  },

  currencyHeading: "The peso, in plain terms.",
  facts: [
    { sym: "peso", k: "Quick conversion", v: "At about 1,500 pesos to the dollar in mid-2026, 10,000 pesos is roughly 7 dollars, 50,000 about 33, and 100,000 about 67. The largest note is 20,000 pesos, worth about 13 dollars, so you tend to carry a thick stack. The peso moves fast, so check a current rate before you go." },
    { sym: "usd", k: "The blue-dollar myth", v: "For years, dollars bought far more pesos at the street 'blue' rate than at the bank. That gap has closed: the official, blue and card (MEP) rates now sit within a few percent of each other, so a card gets a fair rate and there is no big prize for carrying cash. The flip side is that prices in dollar terms have risen, so Argentina is no longer the bargain it was." },
    { sym: "card", k: "Cards get the MEP rate", v: "A foreign Visa or Mastercard is charged in pesos at the MEP rate, which is now competitive. Visa applies it at purchase; Mastercard charges the official rate and refunds the difference a few days later. Amex is rarely accepted, so carry Visa or Mastercard, and always choose pesos on the terminal." },
    { sym: "tip", k: "Tipping is cash, about 10%", v: "Around 10% at sit-down restaurants, usually not on the bill, and card receipts often have no tip line, so cash in pesos is the sure way to reach your server. The cubierto (a per-person cover charge) is not a tip. See the tipping section below." }
  ],

  taxfree: {
    label: "Entry, taxes and insurance",
    heading: "No visa, a VAT refund on hotels, and the new insurance rule.",
    text: "Good news on entry: <b>US travelers need no visa for stays up to 90 days</b>, and the old US reciprocity fee is gone, so there is nothing to pay on arrival. There is also a real saver in the fine print: as a <b>foreign tourist you are refunded the 21% VAT (IVA) on accommodation</b> when you <b>pay with a foreign-issued card</b> (or an international transfer) and show your <b>passport and entry record</b>. Breakfast counts if it is included in the rate. The refund is meant to be automatic, but some hotels or booking sites add the VAT anyway, so pay direct with a foreign card where you can and check the bill. The newer thing to know: since a <b>2025 migration reform</b>, Argentina expects foreign visitors to carry <b>valid travel medical insurance</b>, and public hospitals now bill non-residents for non-emergency care (emergencies are still stabilized). Border checks on tourists have been inconsistent so far, but the rule is on the books, so carry a policy and proof and confirm the current requirement before you fly. There is <b>no general nightly tourist tax</b>, though a few places like Bariloche add a small local fee, and there is no separate departure tax to pay at the airport since it is built into your ticket."
  },

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> Card terminals and ATMs may offer to charge you in dollars (dynamic currency conversion), which quietly adds a few percent. Choose pesos every time, on every screen.",
    "<b>ATMs are the expensive way to get cash.</b> Per-withdrawal limits are low, often the equivalent of 70 to 150 dollars, and the flat fee can run 10 percent or more of a small withdrawal. A Charles Schwab card refunds those fees; otherwise exchange US dollars at a casa de cambio or use Western Union, which sit close to the street rate.",
    "<b>The 'blue dollar' is no longer the play.</b> The street rate now sits within a few percent of the card and official rates, so following a \"cambio, cambio\" tout down an alley is not worth the counterfeit risk. If you exchange cash, use an official casa de cambio or Western Union and count it.",
    "<b>Do not confuse the tourist rate with the resident 'card dollar.'</b> Argentine media quote a 'dolar tarjeta' near double the official rate, but that is what locals pay on foreign spending. A foreign visitor's card gets the MEP rate, which is close to the street rate, so ignore the scary number.",
    "<b>The cubierto is not a tip.</b> Many restaurants add a small per-person cubierto (a cover charge for bread and the table setting) that goes to the house, not your server, so a 10 percent tip is still expected on top, and cash is the sure way to reach the staff.",
    "<b>Carry your own medical insurance.</b> Public hospitals now bill non-residents for non-emergency care, and Argentina's 2025 rules expect visitors to hold travel insurance, so do not travel without a policy and proof."
  ],

  tippingHeading: "About 10%, in cash, and not on the bill.",
  tipping: "Tipping in Argentina is modest and almost always cash. In a sit-down restaurant, around <b>10%</b> is the norm for good service, closer to 15% for something special, and it is usually <b>not added to the bill</b>. Card machines often have no tip line and a card tip may not reach your server, so leave the tip in <b>cash pesos</b>, handed to the person where you can. Watch for the <b>cubierto</b>, a small per-person cover charge for bread and the table setting: it goes to the restaurant, not the waiter, so it does not replace the tip. Taxis are not tipped beyond rounding up, though a little extra is kind if the driver helps with your bags, and Uber is paid in the app. For hotel porters and housekeeping a small tip is appreciated, and because the peso loses value quickly, a <b>small US dollar bill</b> (a 1 or a 5) is genuinely welcome to guides, porters and drivers who like to save in dollars, even though pesos are more practical day to day.",

  faqs: [
    { q: "Is Argentina still a bargain, and do I need to bring US dollars?", a: "Not the bargain it was. After the country lifted its currency controls, the official, street 'blue' and card rates converged, so the old trick of bringing dollars to change at a much better rate no longer pays off, and prices in dollar terms have risen sharply. You do not need to arrive with a thick envelope of cash. A modest amount of clean US dollars is still handy to exchange for small daily spending, but a no-foreign-fee card now gets a fair rate for most of your trip." },
    { q: "Should I pay in pesos or dollars in Argentina?", a: "Always pesos. If a card terminal or ATM offers to charge you in US dollars, decline; that dynamic currency conversion adds a few percent. Pay in pesos and let your card's network handle the exchange, which gives you the MEP rate." },
    { q: "What exchange rate does my card get in Argentina?", a: "The MEP rate, applied automatically when a foreign Visa or Mastercard is charged in pesos. It is now close to the street 'blue' rate and clearly better than the airport or bank counter. Visa applies it at the moment of purchase, while Mastercard charges the official rate and refunds the difference a few days later. Note that the scary 'dolar tarjeta' figure in the local news is the rate Argentine residents pay, not what a foreign visitor gets." },
    { q: "What is the best way to get cash in Argentina?", a: "For a larger sum, exchange US dollars at an official casa de cambio or pick up pesos from Western Union, both of which sit close to the street rate. Argentine ATMs are the expensive route: low per-withdrawal limits and steep flat fees on top of the official rate. If you do use an ATM, a Charles Schwab card refunds the fees, withdraw inside a bank in daylight, and choose pesos, not dollars." },
    { q: "Do I need travel insurance to enter Argentina?", a: "You should carry it. A 2025 migration reform introduced a requirement for foreign visitors to hold valid travel medical insurance, and public hospitals now bill non-residents for non-emergency care, though emergencies are still stabilized. Border checks on tourists have been inconsistent, but the rule is official, so travel with a policy and proof and confirm the current entry requirement before you fly." },
    { q: "Do I have to pay the hotel VAT in Argentina?", a: "As a foreign tourist, no. You are refunded the 21% VAT (IVA) on accommodation when you pay with a foreign-issued card or international transfer and show your passport and entry record, and breakfast counts if it is included. The refund should be automatic, but some hotels or booking sites add the VAT anyway, so pay direct with a foreign card where you can and check the final bill." },
    { q: "How much cash should I bring for a week in Argentina?", a: "Less than you would expect, since cards now cover most of a city trip. For two mid-range travelers, roughly 200 to 350 dollars' worth of pesos across a week beyond your card spending is plenty, for ordinary taxis, small shops, markets, cafes and tips. Get it by exchanging US dollars or from Western Union rather than leaning on ATMs, and keep small notes for tips." }
  ]
};
