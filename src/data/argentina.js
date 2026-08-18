import { S } from './carrier-spine.js';

export default {
  slug: "argentina",
  iso2: "ar",
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
  signals: { cardFriendliness: 3, cashNeed: 3, taxRisk: 2, atmRisk: 5 },
  hook: "The blue-dollar bargain is over: your card now gets a fair rate, so tap for most things, keep some cash for taxis and small spots, skip the pricey ATMs, and carry travel insurance.",
  aliases: ["argentina", "buenos aires", "patagonia", "mendoza", "bariloche", "iguazu", "iguazu falls", "el calafate", "ushuaia", "salta", "cordoba", "peso", "ars", "argentine peso", "blue dollar", "dolar blue", "mep", "malbec", "tango", "obelisco"],

  title: "Argentina money 2026: cards now get a fair rate",
  description: "The blue-dollar bargain is over, so your card gets a fair rate. Keep pesos for taxis and small spots, and skip the pricey ATMs. Checked 2026.",

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
      { n: "Budget", per: 40, cash: 0.45, room: 50 },
      { n: "Mid-range", per: 75, cash: 0.35, room: 100 },
      { n: "Comfort", per: 150, cash: 0.25, room: 200 }
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
  ],

  culture: {
    heading: "A little Spanish goes a long way",
    intro: "A few words and a couple of stories that turn you from a tourist into a guest. Argentines are expressive and welcoming, with an Italian warmth to them, and they love when a visitor makes the effort.",
    phrases: [
      { mean: "Hello", say: "OH-lah", word: "Hola" },
      { mean: "Please", say: "por fah-VOR", word: "Por favor" },
      { mean: "Thank you", say: "GRAH-syahs", word: "Gracias" },
      { mean: "Cheers", say: "sah-LOOD", word: "Salud" },
      { mean: "Delicious", say: "keh REE-koh", word: "Qué rico" },
      { mean: "Great, fantastic", say: "BAR-bah-roh", word: "Bárbaro" },
    ],
    tip: "Two very Argentine things: they say <b>che</b> for hey or buddy (yes, that is how Che Guevara got his nickname), and they pronounce ll and y like sh, so calle (street) sounds like CAH-sheh and yo like sho. Dale (DAH-leh) means okay, go for it.",
    stories: [
      { img: "/argentina-culture-1.jpg",
        alt: "WPA-style illustration of a couple in a dramatic tango embrace on a cobbled Buenos Aires street at dusk, a bandoneon player nearby, warm lamplight and old balconies",
        h: "Born in Buenos Aires",
        p: "Tango was born in the port neighborhoods of Buenos Aires, danced to the sighing squeeze of the bandoneon. It can be fiercely passionate or quietly melancholy, and Argentines take it seriously. Watching it danced well, close and intense, is unforgettable.",
        note: "Say it: bandoneón (ban-doh-neh-OHN)" },
      { img: "/argentina-culture-2.jpg",
        alt: "WPA-style illustration of a lone gaucho on horseback crossing the vast golden pampas at dawn, poncho and wide-brimmed hat, cattle in the distance, huge sky",
        h: "The gaucho and the pampas",
        p: "The gaucho, the free-roaming horseman of the endless pampas, is to Argentina what the cowboy is to the American West: a symbol of independence and skill. His world gave the country two of its loves, the asado (barbecue) and mate. Ask about either and you will make a friend.",
        note: "Say it: gaucho (GOW-choh)" },
      { img: "/argentina-culture-3.jpg",
        alt: "WPA-style illustration of a column of soldiers with flags and pack mules crossing a high snowy Andes pass at dawn, blue peaks",
        h: "The crossing of the Andes",
        p: "In 1817, General Jose de San Martin led an army across the towering, freezing Andes to help free Chile and then Peru from colonial rule. It was a feat to rank with Hannibal's crossing of the Alps, and San Martin is revered across the continent as El Libertador, the liberator.",
        note: "Good to know: San Martin is honored as El Libertador" },
    ],
    pride: "The heart of Argentine friendship is mate, a bitter green tea shared from one gourd and a metal straw, passed around the circle. Being offered the gourd is a small act of belonging. That, and a Sunday asado, is the country at its warmest."
  },

  spokes: [
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Argentine peso (ARS)" },
        { k: "Cards", v: "Fine for most things now" },
        { k: "Cash for", v: "Taxis, kiosks, markets, tips" },
        { k: "On a card", v: "Choose pesos, not dollars" }
      ],
      live: true,
      topic: "cash",
      caution: "medium",
      title: "Do I need cash in Argentina? Cards vs pesos 2026",
      description: "Cards get a fair rate now that Argentina has lifted its currency controls, so tap for most things and keep pesos for taxis, kiosks and tips. Checked 2026.",
      h1: "Do I need cash in Argentina, or can I use cards?",
      lede: "Short answer: cards cover most of a city trip, and you want pesos for the small stuff. The old blue-dollar trick is finished, which makes this much simpler than it was a few years ago. Here is how to handle it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-30",
      answer: "Cards for most things, pesos for the small stuff. Since Argentina lifted its currency controls, a <b>foreign Visa or Mastercard now gets a fair rate</b> in pesos, so tap or dip for hotels, restaurants, shops and Uber. Keep <b>some pesos in small notes</b> for ordinary taxis, kiosks, markets, casual cafes and tips. Always choose <b>pesos, never dollars</b>, on any card terminal or ATM screen. <b>Amex is rarely accepted</b>, so carry Visa or Mastercard. The one real catch: <b>Argentine ATMs are the expensive way</b> to get cash, so plan where your pesos come from.",
      sections: [
        {
          h: "The blue-dollar era is over, so cards are fine",
          icon: "card",
          key: { fig: "A fair rate", tag: "Cards are the default now", text: "The official, street and card rates converged after the currency controls came off, so a foreign card is charged in pesos at a rate close to the street rate. There is no longer a prize for arriving with a thick envelope of dollars.", tone: "teal" },
          p: [
            "For years the move was to bring US dollar cash and change it at the street rate for far more pesos. That gap has closed. A <b>foreign Visa or Mastercard</b> is charged in pesos at a rate that is now competitive, so cards are the easy default for <b>hotels, restaurants, shops, tours and Uber</b>. Visa applies the rate at the moment of purchase, while Mastercard charges the official rate and refunds the difference within a few days, which can look odd on your statement and is nothing to worry about.",
            "<b>Amex is rarely accepted</b>, so do not make it your only card, and bring a backup from a different bank. Your own bank's foreign transaction fee still applies unless your card waives it, which is the one cost you control before you leave. Ignore the alarming card-dollar figures in the local press: those describe what Argentine residents pay on foreign spending, not what a visitor's card gets here."
          ]
        },
        {
          h: "Where you still want pesos",
          icon: "cash",
          key: { fig: "Small notes", tag: "Taxis, kiosks, tips", text: "Ordinary taxis, small shops, market stalls, casual cafes and tips are cash. Because the largest note is worth only a few dollars, keep a stack of smaller ones rather than one big note.", tone: "teal" },
          p: [
            "Cash still handles <b>ordinary street taxis, small shops, market stalls, casual cafes and every tip</b>, and it leans more essential the further you get from Buenos Aires. Card receipts here often have no tip line, so a tip left on a card may never reach your server: <b>pesos in hand</b> are the sure way.",
            "Keep <b>small notes</b>. The largest peso note is worth only a handful of dollars, so a big note is hard to break in a kiosk and awkward in a taxi. The better value for a larger cash top-up is exchanging US dollars at an <b>official casa de cambio</b> or picking up pesos from <b>Western Union</b>, both of which sit close to the street rate. In Buenos Aires, note that the subway and buses take a <b>SUBE card</b> rather than cash, so pick one up at a kiosk or station early."
          ]
        },
        {
          h: "Choose pesos, and go easy on the ATM",
          icon: "atm",
          key: { fig: "Say no", tag: "Dollar offers cost you", text: "Any screen offering to charge you in dollars is dynamic currency conversion, which quietly adds a few percent. Choose pesos on every terminal and every ATM.", tone: "amber" },
          p: [
            "When a card terminal or an ATM asks whether to charge you in <b>dollars or pesos, always choose pesos</b>. Choosing your home currency is dynamic currency conversion, and it adds a few percent at a rate set by the machine rather than your bank. Decline it every time, on every screen.",
            "Argentine <b>ATMs are the pricey option</b>: per-withdrawal limits are low, often the equivalent of 70 to 150 dollars, and the flat fee can run 10 percent or more of a small withdrawal. A fee-refunding card such as <b>Charles Schwab</b> is the main way to make them bearable. Withdraw inside a bank in daylight, take the largest amount the machine allows, and check the rate shortly before you travel, because inflation is still high and figures move fast. This guide is written for US travelers departing the US. For more, see <a href='/argentina/tipping'>tipping in Argentina</a>, <a href='/argentina/taxis-and-ride-hailing'>taxis and ride-hailing in Argentina</a>, and the <a href='/argentina'>Argentina money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Argentina?", a: "Some, but less than you would expect. Cards now get a fair rate and cover hotels, restaurants, shops and Uber. Keep pesos in small notes for ordinary taxis, kiosks, markets, casual cafes and tips, and a little more if you are heading away from Buenos Aires." },
        { q: "Should I still bring US dollars to Argentina?", a: "A modest amount is handy, but you no longer need a thick envelope of them. The street, official and card rates converged after the currency controls came off, so the old bargain is gone. Clean dollar bills still exchange well at an official casa de cambio or through Western Union if you want a larger cash top-up." },
        { q: "Should I pay in pesos or dollars on a card machine?", a: "Always pesos. If a terminal or ATM offers to charge you in dollars, decline it. That is dynamic currency conversion, and it adds a few percent at the machine's own rate rather than your bank's." },
        { q: "What is the cheapest way to get pesos?", a: "Exchanging US dollars at an official casa de cambio, or collecting pesos from Western Union, both of which sit close to the street rate. Argentine ATMs are the expensive route, with low per-withdrawal limits and a steep flat fee, though a card that refunds ATM fees takes most of the sting out." }
      ],
      sources: {
        links: [
          { label: "Central Bank of Argentina: the official peso exchange rate and monetary statistics", url: "https://www.bcra.gob.ar/en/", type: "bank" },
          { label: "US State Department: Argentina country information for US travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Argentina.html", type: "gov" }
        ],
        judgment: "That cards now get a fair rate is settled, and that ATMs are the expensive way to buy pesos is our own read from recent traveler and bank reports rather than one official table. The peso moves fast, so treat any figure as a snapshot. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Restaurants", v: "About 10 percent" },
        { k: "On the bill", v: "Usually not, so add it" },
        { k: "How", v: "Cash pesos, handed over" },
        { k: "Cubierto", v: "A cover charge, not a tip" }
      ],
      live: true,
      topic: "tipping",
      caution: "low",
      title: "Tipping in Argentina: how much and when 2026",
      description: "About 10 percent in cash at sit-down restaurants, and the cubierto is a cover charge, not a tip. What drivers, guides and hotel staff expect. Checked 2026.",
      h1: "Tipping in Argentina",
      lede: "Tipping here is modest, almost always cash, and rarely on the bill. About 10 percent at a sit-down restaurant covers it, with a couple of local quirks worth knowing before the check arrives.",
      checked: "Jul 2026",
      checkedISO: "2026-07-30",
      answer: "Modest, and in cash. At a <b>sit-down restaurant</b>, around <b>10 percent</b> is the norm for good service, a little more for something special, and it is <b>usually not added to the bill</b>. Card terminals often have <b>no tip line</b>, and a tip added to a card may not reach your server, so leave it in <b>cash pesos</b>. Watch for the <b>cubierto</b>, a small per-person cover charge that goes to the house, not the waiter, so it does not replace your tip. <b>Taxis</b> are not really tipped beyond rounding up, and Uber is settled in the app.",
      sections: [
        {
          h: "About 10 percent, in cash, at the table",
          icon: "coins",
          key: { fig: "10 percent", tag: "Cash, not the card", text: "Around 10 percent is the norm at a sit-down restaurant, usually not printed on the bill. Card machines often have no tip line, so leave it in cash where you can hand it over.", tone: "teal" },
          p: [
            "In a <b>sit-down restaurant or cafe with table service</b>, around <b>10 percent</b> is the everyday norm and closer to 15 percent for a memorable meal. It is <b>rarely added for you</b>, so it is on you to leave it. At a counter, a bakery or a quick coffee, nothing is expected.",
            "Leave it in <b>cash pesos</b> if you can, ideally handed to the person who served you. Many card terminals here simply have no tip field, and where they do, the money does not reliably reach the staff. This is the main reason to keep small peso notes on you even when you are paying for the meal itself by card."
          ]
        },
        {
          h: "The cubierto is not a tip",
          icon: "receipt",
          key: { fig: "Cubierto", tag: "A cover charge", text: "Many restaurants add a small per-person cubierto for bread and the table setting. It goes to the restaurant rather than your server, so a tip is still expected on top.", tone: "amber" },
          p: [
            "Plenty of restaurants add a small per-person <b>cubierto</b>, a cover charge for bread and the table setting. It is legitimate and it will be printed on the bill, but it goes to <b>the house, not your server</b>, so it does not stand in for a tip. Read the bill before you decide what to leave.",
            "Some places, especially in tourist areas, also add a <b>service charge</b>. Where one is already on the bill you have done your part, and anything extra is a bonus rather than an expectation."
          ]
        },
        {
          h: "Drivers, guides and hotel staff",
          icon: "tip",
          key: { fig: "Round up", tag: "Taxis and small services", text: "Round up an ordinary taxi fare, and a little more if the driver handles your bags. Uber is paid in the app, and a small note is welcome for porters and housekeeping.", tone: "teal" },
          p: [
            "For an <b>ordinary taxi</b>, round the fare up rather than working out a percentage, and add a little if the driver helps with luggage. <b>Uber and the other apps</b> are settled in the app, where a tip is optional. For <b>hotel porters and housekeeping</b>, a small note is appreciated, and a <b>private guide or driver</b> who makes your day is worth more.",
            "One local quirk: because the peso loses value quickly, a <b>small US dollar bill</b> is genuinely welcome to guides, porters and drivers who prefer to save in dollars, even though pesos are far more practical for everything else. This guide is written for US travelers departing the US. For the wider picture, see <a href='/argentina/cash-or-card'>cash or card in Argentina</a>, <a href='/argentina/taxis-and-ride-hailing'>taxis and ride-hailing in Argentina</a>, and the <a href='/argentina'>Argentina money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "How much should I tip in a restaurant in Argentina?", a: "Around 10 percent for good service at a sit-down restaurant, and closer to 15 percent for something special. It is usually not added to the bill, so leave it yourself, in cash where you can." },
        { q: "Can I tip by card in Argentina?", a: "Often not. Many card terminals have no tip line, and where a tip can be added it does not reliably reach the person who served you. Cash pesos handed over directly are the sure route, so keep small notes even when you pay the bill by card." },
        { q: "What is the cubierto on my bill?", a: "A small per-person cover charge for bread and the table setting. It is normal and legitimate, but it goes to the restaurant rather than your server, so it does not replace a tip." },
        { q: "Do you tip taxi drivers in Argentina?", a: "Not as a percentage. Rounding the fare up is normal, with a little extra if the driver helps with your bags. Rides booked through an app are paid in the app, where a tip is optional." }
      ],
      sources: {
        links: [
          { label: "US State Department: Argentina country information for US travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Argentina.html", type: "gov" },
          { label: "Visit Argentina: the national tourism board's official visitor information", url: "https://www.argentina.travel/en", type: "official" }
        ],
        judgment: "Tipping norms are social rather than official, so the percentages here are the True Trip Costs desk's read from recent traveler reports and local practice, not a published schedule. The cubierto and the missing tip line on card terminals are the two things visitors most often get wrong. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-ride-hailing",
      glance: [
        { k: "Apps", v: "Uber, Cabify, DiDi in Buenos Aires" },
        { k: "Street taxis", v: "Black and yellow, metered" },
        { k: "Safer bet", v: "A radio taxi or an app" },
        { k: "Paying", v: "Pesos in small notes, or in app" }
      ],
      live: true,
      topic: "taxis",
      caution: "low",
      title: "Taxis in Argentina: apps, radio taxis, the meter",
      description: "Which ride apps work in Buenos Aires, why a radio taxi beats a cold street hail, how the meter works, and what to carry to pay. Checked 2026.",
      h1: "Taxis in Argentina, and which apps work",
      lede: "Taxis are cheap, plentiful and metered, and the money question is mostly about how you order one. An app or a radio taxi gives you a record and a price, which is why they are the better default here.",
      checked: "Jul 2026",
      checkedISO: "2026-07-30",
      answer: "In Buenos Aires, <b>Uber, Cabify and DiDi</b> all operate, and an app or a phone-ordered <b>radio taxi</b> is the safer money choice than flagging down whatever passes. Street taxis are <b>black and yellow, licensed and metered</b>, and the meter should be running from the start. Fares are in <b>pesos</b>, so carry <b>small notes</b>, since drivers are often short of change and some do not take cards. Round up rather than tipping a percentage. At the airports, use the <b>official taxi desk or the signposted app pickup area</b> rather than anyone who approaches you inside the terminal.",
      sections: [
        {
          h: "Apps, and why a radio taxi beats a cold hail",
          icon: "taxi",
          key: { fig: "Book it", tag: "App or radio taxi", text: "Uber, Cabify and DiDi operate in Buenos Aires, and radio taxi firms take phone and app bookings. Either way you get a price and a record, which a street hail does not give you.", tone: "teal" },
          p: [
            "<b>Uber, Cabify and DiDi</b> all operate in Buenos Aires, showing the fare and the driver before you get in, and settling in the app. The local equivalent is a <b>radio taxi</b>, a licensed firm you order by phone or app, identifiable by the company sign on the roof or door. Argentina's own tourism board points visitors to radio taxi services and official apps as the safe way to ride.",
            "Most street taxis are perfectly fine, but a cold hail is the one option with <b>no record of your trip</b>, which is why the sensible default is to order rather than flag. If you do hail one, check that the <b>meter is on</b> from the start and that the driver's license is displayed inside. App coverage is best in Buenos Aires and thinner in smaller cities, where a phone-ordered taxi or a remis arranged through your hotel is the normal way to travel."
          ]
        },
        {
          h: "The meter, the fare and paying",
          icon: "coins",
          key: { fig: "Small notes", tag: "Change is scarce", text: "Fares are metered in pesos and many drivers cannot break a large note. Carry small notes, count your change, and check whether a card is accepted before you set off.", tone: "amber" },
          p: [
            "Fares run on a <b>regulated meter</b> and are quoted in <b>pesos</b>, with a higher tariff late at night. There is nothing to negotiate in an ordinary taxi, and a driver who wants to agree a price up front instead of using the meter is the moment to find another cab.",
            "Pay with <b>small notes</b> where you can. Change is genuinely scarce, a large note is the usual source of a fare dispute, and while more drivers now take cards, plenty still do not, so ask before you set off if that matters. Count what you are handed back. To <b>tip</b>, round the fare up, and add a little if the driver handles your bags."
          ]
        },
        {
          h: "Airports, and getting into town",
          icon: "alert",
          key: { fig: "Official desk", tag: "Or the app pickup point", text: "At Ezeiza and Aeroparque, book at the official taxi or remis counter inside the terminal, or walk to the signposted app pickup area. Skip anyone who approaches you in the arrivals hall.", tone: "teal" },
          p: [
            "At <b>Ezeiza (EZE)</b> and <b>Aeroparque (AEP)</b>, the clean options are the <b>official taxi or remis counter</b> inside the terminal, where the fare is arranged before you leave the building, or the <b>signposted pickup area</b> for Uber and Cabify outside. Anyone who approaches you in the arrivals hall offering a ride is the one to walk past.",
            "A pre-booked <b>remis</b>, a private car at a fixed price, is the other normal way to do the airport run and is often what a hotel will arrange for you. This guide is written for US travelers departing the US. For the wider picture, see <a href='/argentina/cash-or-card'>cash or card in Argentina</a>, <a href='/argentina/tipping'>tipping in Argentina</a>, and the <a href='/argentina'>Argentina money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Does Uber work in Argentina?", a: "Yes in Buenos Aires, along with Cabify and DiDi, and coverage is thinner in smaller cities. All three show the fare and the driver before you ride and settle in the app, which is why they are a good default for a visitor." },
        { q: "Are taxis in Buenos Aires safe?", a: "Ordinary licensed taxis are generally fine, and the safer habit is to order a radio taxi by phone or app rather than hail one cold, because that leaves a record of the trip. Check that the meter is running from the start and that the driver's license is on display." },
        { q: "Can I pay for a taxi by card in Argentina?", a: "Sometimes. More drivers take cards than a few years ago, but many still prefer cash, so ask before you set off. Carry small peso notes, since change is scarce and a large note is the usual source of a dispute." },
        { q: "What is the best way to get from Ezeiza airport into Buenos Aires?", a: "Book at the official taxi or remis counter inside the terminal, or walk out to the signposted pickup area for Uber and Cabify. A pre-arranged remis at a fixed price is also normal. Avoid anyone offering you a ride in the arrivals hall." }
      ],
      sources: {
        links: [
          { label: "Visit Argentina: the tourism board's guide to getting around by Uber, Cabify and DiDi, and its advice to use radio taxis or official apps", url: "https://www.argentina.travel/en/news/useful-apps-to-get-around-argentina-uber-cabify-or-didi", type: "official" },
          { label: "US State Department: Argentina country information, including transportation and safety", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Argentina.html", type: "gov" }
        ],
        judgment: "App coverage and taxi tariffs change, and city fares are set locally, so we have kept this to the habits that hold: order rather than hail, watch the meter, carry small notes. Checked July 2026."
      }
    },
    {
      slug: "money-scams",
      glance: [
        { k: "Most cost", v: "Tens of dollars, avoidable" },
        { k: "Taxis", v: "Pre-arrange, do not flag one" },
        { k: "Your notes", v: "Look at what you are handed" },
        { k: "Street exchange", v: "No longer worth it" }
      ],
      live: true,
      topic: "scams",
      title: "Common money scams in Argentina, and what they cost",
      description: "The taxi note swap, the airport handler, the staged breakdown and the mustard distraction. What each costs a US visitor, and why the street exchange is no longer worth the risk.",
      h1: "Common money scams in Argentina, and what they cost you",
      lede: "The US State Department calls Argentina generally safe for travelers and rates it at its calmest advisory level. Almost nothing here is dramatic. What tourists do meet is a small, well-documented family of money tricks, and nearly all of them happen in or around a taxi you flagged down in the street. One decision, pre-arranging your ride instead of hailing it, removes most of the list. Here is each one, what it costs, and how to sidestep it.",
      checked: "Aug 2026",
      checkedISO: "2026-08-15",
      answer: "The State Department lists four taxi scams by name, and they are the core of this page: the driver who <b>helps you with your money</b> and swaps good notes for counterfeit ones; the airport <b>handler</b> who takes payment for the ride, after which the driver demands it again; the taxi that <b>breaks down</b> so a second one arrives and both drivers want paying; and the <b>mustard trick</b>, where something is sprayed on you from a distance and a helper robs you while cleaning it off. Add <b>street money changers</b>, now barely worth using at all. The golden rules: <b>pre-arrange a remise or use an app</b>, <b>look at every note you are handed</b>, <b>never accept help cleaning a stain</b>, and <b>change money at a place with a storefront</b>.",
      sections: [
        {
          h: "The note swap, and the driver who helps",
          icon: "cash",
          key: { tag: "Look at the note", text: "The State Department describes drivers who pretend to help tourists with unfamiliar money while trading valid bills for counterfeit ones. Hand over one note at a time and look at what comes back.", tone: "teal" },
          p: [
            "This is the classic Argentine one and it works because peso notes are unfamiliar and the numbers are large. You hand over a note, the driver studies it, says something is wrong with it, and hands back a different note that is counterfeit or a lower denomination. Or he offers to help you count, and good bills quietly become bad ones. The State Department names it directly among its Argentina taxi scams. The loss is the face value of whatever you were given, so usually <b>tens of dollars</b>, and you only find out when the next place refuses it.",
            "Three habits close it. <b>Hand over one note at a time</b> rather than a fan of them, <b>keep your own note in sight</b> while it is being examined, and <b>look at what comes back</b> before you get out. Carrying <b>small notes and the right change</b> removes the whole conversation, which is worth doing anyway since drivers are often short of change. If you are unsure what a real note looks like, the ones from a bank ATM are your reference set."
          ]
        },
        {
          h: "The handler, and the taxi that breaks down",
          icon: "taxi",
          key: { fig: "Paying twice", tag: "Pre-arrange it", text: "A handler at the airport takes payment, then the driver demands it again at the end. Or the taxi breaks down, a second one arrives, and both drivers want paying. Book a remise or an app instead.", tone: "teal" },
          p: [
            "Two more from the same State Department list, and both are variations on being made to pay twice. In the first, a <b>handler</b> at the airport takes your money for the ride, and at the other end the driver says he has seen nothing and asks again. In the second, the taxi <b>breaks down</b> mid-journey, a second taxi conveniently appears to finish the trip, and both drivers present a bill. Neither is violent and neither is large, but both are awkward to argue in a second language at the kerb.",
            "The State Department's own escape is the cleanest: <b>pre-arrange the ride</b>. Use a taxi dispatch service, a ride-hailing app, or one of the flat-rate <b>remise</b> services, which are private cars with drivers booked from the airport service counters or through your hotel. In city centres, it advises using taxis called by a central dispatcher or arranged by your hotel rather than flagged in the street. <b>Uber, Cabify and DiDi</b> all operate in Buenos Aires and fix the fare in the app, which ends the argument before it starts. The full picture is in the <a href=\"/argentina/taxis-and-ride-hailing\">Argentina taxis and ride-hailing guide</a>."
          ]
        },
        {
          h: "The stain, and the stranger who helps clean it",
          icon: "alert",
          key: { tag: "Walk away", text: "The State Department describes mustard or another substance sprayed on a tourist from a distance, then an accomplice robbing them while pretending to help clean it. Keep walking and deal with it yourself.", tone: "teal" },
          p: [
            "This one runs worldwide but Argentina's version is specific enough that the State Department spells it out: something, often <b>mustard</b> or a similar liquid, lands on you seemingly from nowhere, and a helpful person immediately appears with tissues. While they dab at your jacket, your bag, wallet or phone leaves. The stain is the entire point of the operation, so the moment to act is before you look down at it.",
            "The rule is short: <b>if something lands on you, hold your bag and keep walking</b>. Do not set anything down, do not let anyone else touch you, and clean it yourself somewhere you have chosen. The same instinct covers the other close-quarters ones on the State Department's list, including bag snatching in restaurants: keep your bag on your lap rather than on the back of a chair or on the floor, and do not leave a phone sitting on the table."
          ]
        },
        {
          h: "Changing money, and the advice that died",
          icon: "atm",
          key: { tag: "Storefront only", text: "The State Department says to exchange money only at banks, hotels and exchangers with an actual storefront. The blue-dollar street rate is no longer worth the counterfeit risk, because the gap has closed.", tone: "amber" },
          p: [
            "Argentina's most famous piece of travel advice is now out of date, and that matters here. For years the <b>blue dollar</b> street rate beat the official one by enough to justify the walk down an alley. That gap has closed: the street rate now sits within a few percent of what your card gets, so following a <b>cambio, cambio</b> tout is a small gain at best and a net loss once short-changing or a counterfeit note enters the picture. The <a href=\"/argentina/cash-or-card\">Argentina cash and cards guide</a> has the current mechanics.",
            "The State Department's instruction is simple: exchange money only at <b>banks, hotels, and money exchangers with actual storefronts</b>. Two practical details from the same page are worth carrying: you must <b>show your passport</b> to exchange money, and you should <b>keep every receipt</b> from buying pesos until you leave. On cards, always choose <b>pesos</b> rather than dollars, and expect low per-withdrawal ATM limits, which is why fewer, larger withdrawals cost less."
          ]
        },
        {
          h: "What this means for your money",
          icon: "coins",
          key: { fig: "Habits", tag: "How to avoid it", text: "Pre-arrange rides rather than hailing them, hand over one note at a time and look at what comes back, walk away from anyone helping with a stain, and change money only at a storefront.", tone: "teal" },
          p: [
            "Look at the list and one theme runs through it: almost every trap here begins with a taxi you flagged down or a stranger who approached you. So the habits are few. <b>Pre-arrange the ride or use an app</b>, <b>hand over one note at a time and check what comes back</b>, <b>keep walking if something lands on you</b>, and <b>change money only at a place with a storefront</b>. None of it costs more than tens of dollars when it does happen.",
            "Two more that are not scams but do cost money. The <b>cubierto</b>, a small per-person cover charge for bread and the table setting, goes to the house rather than your server, so it does not replace a tip; the <a href=\"/argentina/tipping\">Argentina tipping guide</a> covers that. And tips are best left in <b>cash pesos</b>, since card terminals often have no tip line. For getting and spending money well while you are there, see the <a href=\"/argentina/cash-or-card\">Argentina cash and cards guide</a> and the <a href=\"/argentina\">Argentina cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Argentina safe for tourists?", a: "The US State Department rates Argentina at its calmest level and describes it as generally safe for travelers. Petty crime happens in tourist areas and in Buenos Aires, and the money issues tourists actually meet are a short, well-documented list of taxi tricks. Pre-arranging rides rather than hailing them removes most of them." },
        { q: "What is the taxi counterfeit bill scam in Argentina?", a: "A driver offers to help you with unfamiliar peso notes, then swaps a valid bill for a counterfeit or lower-value one while examining it. The State Department lists it among Argentina's taxi scams. Hand over one note at a time, keep your own note in sight while it is checked, look at what comes back, and carry small notes so change is not needed." },
        { q: "How do I avoid taxi scams in Buenos Aires?", a: "Pre-arrange the ride. The State Department recommends a taxi dispatch service, a ride-hailing app, or a flat-rate remise booked at an airport service counter or through your hotel. Uber, Cabify and DiDi all operate in Buenos Aires and fix the fare in the app. In the city, use a dispatcher-called or hotel-arranged taxi rather than one flagged in the street." },
        { q: "Should I still use the blue dollar rate in Argentina?", a: "No, that advice is out of date. The street rate now sits within a few percent of what a foreign card gets in pesos, so the gain is minimal and it disappears entirely if you are short-changed or handed a counterfeit note. The State Department advises exchanging only at banks, hotels or exchangers with an actual storefront, and you will need your passport." },
        { q: "What is the mustard scam?", a: "Something is sprayed on you from a distance, often mustard or a similar liquid, and a helpful stranger appears immediately with tissues. While they clean the stain, an accomplice takes your bag, wallet or phone. The State Department names it directly. If something lands on you, hold your bag, keep walking, and clean it yourself somewhere you chose." },
        { q: "Should I pay in pesos or dollars in Argentina?", a: "Pesos, on every card terminal and ATM screen. Accepting the offer to be charged in dollars uses a marked-up rate that costs you a few percent each time. Note that ATM per-withdrawal limits are low and the flat fee can be steep, so fewer and larger withdrawals cost less. Keep small peso notes for taxis, kiosks and tips." }
      ],
      sources: {
        links: [
          { label: "US State Department: Argentina travel advisory and travel guidance, including the named taxi scams and currency advice", url: "https://travel.state.gov/en/international-travel/travel-advisories/argentina.html", type: "gov" },
          { label: "OSAC: Argentina country security report, referenced by the State Department advisory", url: "https://www.osac.gov/Country/Argentina/Content/Detail/Report/905ecf39-8463-4323-9ad7-1c74073427dc", type: "gov" }
        ],
        judgment: "All four taxi scams here, the note swap, the airport handler, the staged breakdown and the mustard distraction, are listed by name in the US State Department's own Argentina travel guidance, along with the remise and dispatcher escapes and the instruction to exchange money only at banks, hotels or exchangers with storefronts. The advisory was at Level 1, exercise normal precautions, when checked, with the crime and unrest risk indicators removed in July 2026. We have attached no figure to the note swap because the loss is simply the face value of the note substituted, and no honest typical figure exists. The blue dollar point reflects the current narrow gap between street, card and official rates rather than a specific quoted rate. Checked August 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Fine in Buenos Aires and the cities" },
        { k: "Signal gaps", v: "Patagonia, Ruta 40, the Andes" },
        { k: "Carrier roaming", v: "$10 to $12 a day" },
        { k: "Local SIM", v: "Cheap, but fiddly for visitors" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "medium",
      title: "Argentina: cheap local data, awkward to buy, big Patagonian gaps",
      description: "Argentine data is cheap and the local SIM is genuinely fiddly for foreigners. Coverage is fine in the cities and absent across long stretches of Patagonia.",
      h1: "Staying connected in Argentina.",
      lede: "Argentina is the country where the cheap option is real but awkward. Local data costs very little, buying it as a foreigner is inconsistent, and none of it helps once you are on Ruta 40.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>fine in Buenos Aires, Cordoba, Mendoza and Bariloche</b> and along the main highways, and there are <b>long gaps</b> across <b>Patagonia</b>, on <b>Ruta 40</b>, in the high Andes and the Puna, and on the roads to El Chalten and the glaciers. On price, local prepaid from <b>Personal</b>, <b>Claro</b> or <b>Movistar</b> is cheap in peso terms, and <b>buying it as a visitor is inconsistent</b>: some shops sell and register on a passport in minutes, others want a local ID number, and the top-up process assumes a local payment method. A <b>Nomad eSIM</b> at a few dollars per gigabyte skips all of that, which here is the honest argument for it. Your US carrier charges about <b>${S.dayPass}</b> to roam (<b>AT&amp;T and Verizon</b> day passes), though <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, while <b>Verizon has ${S.verizonNoCap}</b> and keeps billing daily. <b>T-Mobile</b>'s mid and upper tiers include <b>${S.tmoRange}</b> of high-speed data abroad before slowing to <b>${S.throttle}</b>. Before a Patagonian drive, <b>download the whole route offline</b>. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "Patagonia is the real story",
          icon: "alert",
          key: { fig: "Ruta 40", tag: "Long empty stretches", text: "Patagonia, Ruta 40, the high Andes and the Puna have long gaps with nothing on any network.", tone: "amber" },
          p: [
            `The distances here are the point. Argentina is bigger than India and much of the south is close to empty, so a Patagonian driving day crosses long stretches with <b>no signal on any network</b>: much of <b>Ruta 40</b>, the roads between El Calafate, El Chalten and the Chilean border crossings, the Puna and the high Andean passes, and plenty of the steppe in between. Fuel stops can be a hundred miles apart and so can other cars.`,
            `No plan fixes that, which is worth saying on a page carrying an eSIM link. What helps is preparation: <b>download the entire route</b> rather than the next leg, save your accommodation numbers and any bus or park bookings so they open offline, carry them on paper too, and tell somebody your plan for the day. In the cities and along the main corridors you will have workable 4G with 5G in Buenos Aires.`
          ]
        },
        {
          h: "The local SIM is cheap and awkward",
          icon: "tag",
          key: { fig: "Inconsistent", tag: "Buying as a visitor", text: "Local prepaid is cheap, but registration and top-up for foreigners varies by shop and assumes a local payment method.", tone: "amber" },
          p: [
            `In peso terms, Argentine mobile data is inexpensive, and if you can buy and top up a local line you will pay very little. The friction is procedural rather than legal: some carrier shops register a foreigner on a <b>passport</b> without fuss, others ask for a local ID, and the <b>top-up</b> flows, apps and kiosks generally assume a local card or an Argentine account. Add an economy where prices and payment methods move quickly and it becomes an errand with an uncertain ending.`,
            `So the honest framing is not that the eSIM is cheaper here, because it is not, but that it is <b>predictable</b>: a <b>Nomad eSIM</b> at a few dollars per gigabyte works from landing with no shop, no local ID question and no top-up puzzle. If you are staying weeks, especially in Buenos Aires, the local SIM is worth the errand. For a two-week loop with flights and buses, the eSIM is the one that will not eat an afternoon. Also read <a href='/argentina/cash-or-card'>cash or card in Argentina</a>, since paying for things here has its own rules.`
          ]
        },
        {
          h: "What roaming costs",
          icon: "roamfee",
          key: { fig: `${S.dayPassFig}`, tag: "Roaming default", text: "A US carrier day pass is the expensive default. AT&T caps it at 10 daily fees a bill period, Verizon does not cap at all, and T-Mobile's mid and upper tiers include 5GB to 30GB abroad.", tone: "teal" },
          p: [
            `Roaming is the expensive default at about <b>${S.dayPass}</b>, so <b>${S.week}</b> a week, and the caps matter on the long trips Argentina invites: <b>AT&amp;T</b> stops at <b>${S.capFees}</b>, about <b>${S.capAmount}</b>, while <b>Verizon has ${S.verizonNoCap}</b> and keeps billing daily, so a three-week Patagonian trip is a very different bill on the two networks. <b>T-Mobile</b>'s tiers include <b>${S.tmoRange}</b> before slowing to <b>${S.throttle}</b>.`,
            `Whatever you choose, do not roam with <b>no plan</b>: pay-per-use is about <b>${S.ppu}</b>. This guide is written for US travelers departing the US. For more, see <a href='/argentina/taxis-and-apps'>taxis and apps in Argentina</a> and the <a href='/argentina'>Argentina money guide</a>.`
          ]
        }
      ],
      faqs: [
        { q: `Will I have signal in Patagonia?`, a: `Often not. Much of Ruta 40, the roads between El Calafate, El Chalten and the Chilean border crossings, the Puna and the high Andean passes have long stretches with nothing on any network. Download the entire route offline, carry your accommodation numbers on paper and tell somebody your plan for the day.` },
        { q: `Can I buy a local SIM card in Argentina as a tourist?`, a: `Sometimes easily and sometimes not. Local prepaid is cheap, but registration varies by shop, some ask for a local ID rather than a passport, and top-up flows generally assume a local card or Argentine account. It is worth the errand for a long stay and often not for a two-week trip.` },
        { q: `How much does it cost to use my US phone in Argentina?`, a: `About ${S.dayPass} on an AT&T or Verizon day pass, so roughly ${S.week} a week. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad before slowing to ${S.throttle}.` },
        { q: `Is an eSIM the cheapest option in Argentina?`, a: `No, a local SIM is cheaper if you can get one working. The eSIM's advantage here is predictability rather than price: it works from landing with no shop visit, no local ID question and no top-up puzzle, which on a short trip is worth the premium.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "US State Department: Argentina country information and road conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Argentina.html", type: "gov" }
        ],
        judgment: "Checked Aug 2026. Two honest points. The local SIM is cheaper and we say so, and the reason we still describe the eSIM as reasonable here is procedural rather than commercial: visitor registration and top-up genuinely vary by shop and assume local payment methods, which is a different situation from the clean airport-counter purchase in Sri Lanka or Georgia. The Patagonian coverage gaps are the desk's read from operator footprints and consistent self-drive accounts, and they are the part of this page to act on. Peso pricing moves fast enough that no figure is quoted."
      }
    }
  ]
};
