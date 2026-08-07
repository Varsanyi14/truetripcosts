// Money rules: the pocket-card page type, one per country, at /{country}/rules.
//
// Keyed by country slug. A country gets a rules card simply by gaining a key here,
// and only if that country is also live in src/data/index.js, so this file cannot
// publish a card for a guide that does not exist yet. Costa Rica is the pilot and
// the only key for now.
//
// WRITING RULES FOR A NEW COUNTRY, please read before adding one:
//
// 1. Write the lines fresh. Every fact here is already stated, at length, in the
//    country guide and its spokes. Restating it in the guide's own sentences would
//    put two near-identical passages on the site and let Google pick which one to
//    rank, which is the opposite of what this page is for. Compress each idea into
//    one short line in new words. Keep the precise terms (colones, servicio,
//    la maria, dynamic currency conversion, TPL, PLI), because repeating a term is
//    not duplication and inventing a vaguer synonym just makes the page less useful.
//
// 2. Behaviour, not numbers. These lines are meant to stay true without maintenance,
//    so they carry habits and legally fixed figures only. Costa Rica's 10 percent
//    servicio is set in law and is fine. A percentage band that describes a spread of
//    market behaviour (the 5 to 10 and 3 to 8 below) is fine because it is a range,
//    not a live rate. Never put an exchange rate, an ATM fee or a headline price
//    here: those belong in the guide, where the checked date sits next to them.
//
// 3. Every rule points somewhere. The href must be a real spoke on that country,
//    because the second job of this page is passing authority around the country's
//    cluster. Do not link a rule to a spoke that only half covers it.
//
// House style: no em or en dashes, and "US" never the periods form. A gate enforces
// both (scripts/check-content.py).

export const moneyRules = {
  italy: {
    title: 'Italy money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in Italy: choose euros, dodge the ZTL fine, the coperto is not a tip, and the city tax your hotel collects.',
    h1: 'Italy money rules',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        // Currency leads on every card in this series. It is the loss that applies to
        // every visitor, driver or not, and keeping rule one consistent across countries
        // makes the format recognisable. Italy's larger single loss, the ZTL fine, sits
        // directly beneath it and is still above the fold on a phone.
        lead: true,
        h: 'Choose euros, and learn the Italian for it',
        p: 'Terminals and cash machines will both ask whether you would rather be charged in dollars. Saying yes costs 3 to 8 percent. On an Italian screen the option you want reads senza conversione, without conversion.',
        href: '/italy/cash-or-card',
        linkLabel: 'Cards, euros and cash machines',
      },
      {
        h: 'Drive into a historic centre and a camera bills you',
        p: 'ZTL zones ring the old heart of nearly every Italian city. Each entry is its own fine, in the region of 80 to 130 euros, the rental firm adds a handling charge, and it reaches you months after you are home.',
        href: '/italy/renting-a-car',
        linkLabel: 'The ZTL trap, and what driving costs',
      },
      {
        h: 'Walk past the bright blue cash machines',
        p: 'The free-standing ones near the big sights are the dearest draw in Italy and the pushiest about dollars. Use a Bancomat at an actual bank, and check the fee on screen first.',
        href: '/italy/cash-or-card',
        linkLabel: 'Where to get euros',
      },
      {
        h: 'Coperto is a table charge, not a gratuity',
        p: 'A couple of euros a head, printed on the menu, entirely legitimate. Italians add very little on top of it, so look at what is already there before you decide to.',
        href: '/italy/tipping',
        linkLabel: 'The coperto, and what to tip',
      },
      {
        h: 'Your hotel will want the city tax separately',
        p: 'Almost every town sets its own, it lands per head for each night you stay, and the rate you booked online rarely covers it. Many places still want cash on the way out.',
        href: '/italy/tourist-tax',
        linkLabel: 'What each city charges',
      },
      {
        h: 'Day-tripping to Venice? Buy the entry code first',
        p: 'There is a published list of dates when entering the old city requires a QR code you have paid for, and even people who owe nothing must still register. Book it early on the official site and it costs half.',
        href: '/italy/tourist-tax',
        linkLabel: 'The Venice access fee',
      },
      {
        h: 'Hailing a cab off the street will not work',
        p: 'Italian cabs are licensed to ranks and apps, so find a rank or open itTaxi or FreeNow. Into central Rome from Fiumicino the fare is set by rule, bags included, so a driver quoting his own figure is ignoring it.',
        href: '/italy/taxis-and-apps',
        linkLabel: 'Taxis, apps and the airport fare',
      },
      {
        h: 'Spent over 70 euros in one shop? Claim the VAT back',
        p: 'One store, one day, and the goods go home unused. Get the form validated at an airport kiosk before you check the bag it is packed in, because afterwards there is nothing to claim.',
        href: '/italy/vat-refund',
        linkLabel: 'How the VAT refund works',
      },
    ],
  },
  mexico: {
    title: 'Mexico money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in Mexico: pay in pesos, avoid airport ATMs, check the bill for propina, and the car insurance no quote includes.',
    h1: 'Mexico money rules',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        // The dollar sign is the trap almost nobody sees coming, and it sits on every
        // menu in the country, so it leads.
        lead: true,
        h: 'That dollar sign on the menu means pesos',
        p: 'Prices are written with a $ and they are not dollars. If a terminal or an ATM then offers to bill you in actual dollars, turn it down: the rate baked into that offer takes 5 to 10 percent.',
        href: '/mexico/cash-or-card',
        linkLabel: 'Paying in pesos, not dollars',
      },
      {
        h: 'Take cash out inside a bank, never at the airport',
        p: 'Machines in arrivals halls and on tourist streets carry the fattest fees and see the most tampering. Use a BBVA, Banorte, Santander or HSBC lobby, in daylight.',
        href: '/mexico/money-scams',
        linkLabel: 'The money traps that keep recurring',
      },
      {
        h: 'You will want pesos in your pocket every day',
        p: 'Hotels, resorts and city restaurants take cards happily. Taxis, market stalls, taco stands and tips do not, and some places add 3 to 5 percent to accept one anyway.',
        href: '/mexico/cash-or-card',
        linkLabel: 'How much cash to carry',
      },
      {
        h: 'Tipping is real here, and it wants to be cash',
        p: 'Around 10 to 15 percent in a restaurant, more at a resort. Give it in pesos: dollars leave the staff to go and change them at a rate that costs them.',
        href: '/mexico/tipping',
        linkLabel: 'What to tip, and to whom',
      },
      {
        h: 'Read the bill before you add that tip',
        p: 'Resorts and tourist restaurants often print propina or servicio on it, which means the service charge is already sitting there. Add your own and it has been paid twice.',
        href: '/mexico/tipping',
        linkLabel: 'The resort double-tip trap',
      },
      {
        h: 'The rental quote is not the rental price',
        p: 'Mexico insists on its own liability cover, sold as TPL or seguro de responsabilidad civil, and no US policy or credit card counts instead. It is the gap between the number you booked online and what the desk actually charges.',
        href: '/mexico/renting-a-car',
        linkLabel: 'What a rental really costs',
      },
      {
        h: 'Uber cannot pick you up at Cancun airport',
        p: 'That run belongs to the taxi union, so settle the number before the door shuts. Once you are in town the apps quote the fare up front, which street taxis do not.',
        href: '/mexico/taxis-and-apps',
        linkLabel: 'Uber, DiDi and the airport catch',
      },
      {
        h: 'Heading to Cancun or Tulum? Pay Visitax first',
        p: 'It is a Quintana Roo state charge, paid online before you travel, and the QR code gets scanned on your way back out of the country. Leaving it to the airport is the expensive route.',
        href: '/mexico/fmm-and-visitax',
        linkLabel: 'Visitax and the FMM tourist card',
      },
    ],
  },
  'costa-rica': {
    // Kept short deliberately. Rendered title is 44 characters, description 148,
    // both inside the limits where Google stops showing the text.
    title: 'Costa Rica money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in Costa Rica: match the currency, insist on la maria, skip the second tip line, refuse conversion to dollars.',
    h1: 'Costa Rica money rules',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    // Shown as "Rules as of {checked}". Bump this when a rule changes, not on a
    // routine guide refresh, since the point of the page is that it stays put.
    checked: 'August 2026',
    rules: [
      {
        // The one that catches almost everyone, so it gets the ink card at the top
        // rather than a number in the list.
        lead: true,
        h: 'Let the price decide the currency',
        p: 'Colon price, pay colones. Dollar price, pay dollars. Cross the two over and the seller is the one choosing the exchange rate, which quietly costs you 5 to 10 percent.',
        href: '/costa-rica/cash-or-card',
        linkLabel: 'Which currency to pay in',
      },
      {
        h: 'Cards work nearly everywhere',
        p: 'Hotels, restaurants, tours and supermarkets all take them. Carry a little cash anyway for small vendors and rural stops.',
        href: '/costa-rica/cash-or-card',
        linkLabel: 'Where cards work',
      },
      {
        h: 'Ask for la maria, then check it is running',
        p: 'That is the taxi meter, and some drivers leave it off for tourists. If it stays off, find another car. Uber and DiDi both operate here and quote before you ride.',
        href: '/costa-rica/taxis-and-apps',
        linkLabel: 'Taxis and apps in Costa Rica',
      },
      {
        h: 'Sit down to eat and the tip is already there',
        p: 'Restaurants add 10 percent servicio by law. Nothing further is expected unless the service genuinely stood out.',
        href: '/costa-rica/tipping',
        linkLabel: 'Tipping in Costa Rica',
      },
      {
        h: 'Then check the receipt for a second tip box',
        p: 'A few tourist places add the legal 10 percent and still slide over a US-style slip with an empty tip box. Fill that in and you have paid the tip twice.',
        href: '/costa-rica/tipping',
        linkLabel: 'Tipping in Costa Rica',
      },
      {
        h: 'The rental quote is not the rental price',
        p: 'Local third-party liability cover is compulsory here, billed as TPL or PLI. No US credit card stands in for it, and most online quotes leave it out entirely.',
        href: '/costa-rica/renting-a-car',
        linkLabel: 'Renting a car in Costa Rica',
      },
      {
        h: 'Refuse any screen offering to charge you in dollars',
        p: 'Card terminals and ATMs both ask. Saying yes is dynamic currency conversion, worth 3 to 8 percent to whoever asked. Choose colones, so your bank does the converting.',
        href: '/costa-rica/cash-or-card',
        linkLabel: 'Declining the dollar conversion',
      },
      {
        h: 'Bring small US bills in good condition',
        p: 'Fifties and hundreds are awkward to break outside a bank. Anything torn, marked or limp gets handed back, and cash from a local ATM is not automatically clean.',
        href: '/costa-rica/cash-or-card',
        linkLabel: 'Bringing US cash',
      },
    ],
  },
};

export function rulesFor(slug) {
  return moneyRules[slug] || null;
}
