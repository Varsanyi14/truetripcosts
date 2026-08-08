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
  france: {
    title: 'France money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in France: say euros not dollars, service is included by law, carry a chip-and-PIN card, and the CDG fixed fare.',
    h1: 'France money rules',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        lead: true,
        h: 'Say euros, not dollars, every single time',
        p: 'Card readers and cash machines will both offer to switch you into dollars. Accept, and you lose 3 to 8 percent your own bank would never have charged.',
        href: '/france/cash-or-card',
        linkLabel: 'Paying by card in France',
      },
      {
        h: 'The standalone kiosks are the dear way to get cash',
        p: 'Euronet and Travelex units sit exactly where tourists are, and their own fee bites even when you have refused the dollar conversion. Draw from a machine at a bank.',
        href: '/france/cash-or-card',
        linkLabel: 'Getting euros without the fee',
      },
      {
        h: 'Service is in the price already, by law',
        p: 'That is what service compris means, and staff draw a proper wage for it, so the American percentage simply does not apply here. A tip line on a terminal is an offer, not a bill.',
        href: '/france/tipping',
        linkLabel: 'What a pourboire is worth',
      },
      {
        h: 'Bring one card that has a chip and a PIN',
        p: 'Tapping is fine anywhere with a person behind the counter. It is the unattended machines that catch you out, motorway barriers, station kiosks and parking meters, which may want the PIN.',
        href: '/france/cash-or-card',
        linkLabel: 'Which cards work where',
      },
      {
        h: 'The fare in from Charles de Gaulle is fixed, not offered',
        p: 'A licensed taxi charges a flat rate set by decree, bags and tolls included, at any hour of the day. Anyone touting a price at you in the arrivals hall is not one of those.',
        href: '/france/taxis-and-apps',
        linkLabel: 'The CDG fixed fare, and touts',
      },
      {
        h: 'Driving? You will want a Crit Air sticker',
        p: 'Low-emission zones now cover the middle of a lengthening list of French cities, and they expect that sticker in the windscreen. Motorway tolls are billed by the kilometre, so crossing the country mounts up.',
        href: '/france/renting-a-car',
        linkLabel: 'Tolls, stickers and parking',
      },
      {
        h: 'The taxe de sejour lands at checkout',
        p: 'Every commune sets its own, it is levied on each adult for each night, and Paris sits well above the rest of the country. Your booking rate will not have covered it.',
        href: '/france/tourist-tax',
        linkLabel: 'What the taxe de sejour costs',
      },
      {
        h: 'Over 100 euros in one shop? There is tax to reclaim',
        p: 'Non-EU visitors can recover part of the 20 percent on goods leaving unused. Get the form stamped at a PABLO machine before the purchase disappears into a checked bag. The operator keeps a slice.',
        href: '/france/vat-refund',
        linkLabel: 'How the detaxe works',
      },
    ],
  },
  'united-kingdom': {
    title: 'UK money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in the UK: pay in pounds, get the ETA before you fly, the 12.5 percent is the tip, and there is no VAT refund.',
    h1: 'UK money rules',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        lead: true,
        h: 'Pay in pounds, whatever the screen suggests',
        p: 'Terminals and cash machines will float the dollar option, and taking it hands over 3 to 8 percent. Sterling every time, and your own bank does the sum.',
        href: '/united-kingdom/cash-or-card',
        linkLabel: 'Cards, cash and cashpoints',
      },
      {
        // Not strictly an in-country rule, but the consequence of missing it is being
        // refused at the gate, which outranks every other item on the card.
        h: 'No ETA, no boarding',
        p: 'Since February 2026 US visitors need one to fly, and the airline stops you without it. Apply through the official government app, not the copycat sites that resell it at a markup.',
        href: '/united-kingdom/eta',
        linkLabel: 'What the UK ETA involves',
      },
      {
        h: 'Some cash machines charge, most do not',
        p: 'The ones wedged into corner shops and the Euronet units at airports and big stations all take a cut. A LINK machine at a bank costs nothing, and the screen says so before you commit.',
        href: '/united-kingdom/cash-or-card',
        linkLabel: 'Getting cash without a fee',
      },
      {
        h: 'Do not buy an Oyster card',
        p: 'The card or phone already in your pocket opens the same gates at the same price, and hits the same daily ceiling once you have ridden enough. London buses stopped taking coins years ago.',
        href: '/united-kingdom/taxis-and-apps',
        linkLabel: 'Getting around London',
      },
      {
        h: 'That 12.5 percent on the bill is the tip',
        p: 'Restaurants add it, London ones especially, and it is discretionary, so you may ask for it off if the service earned that. Nothing further is needed. At a pub bar you tip nothing at all.',
        href: '/united-kingdom/tipping',
        linkLabel: 'Service charges, and pubs',
      },
      {
        h: 'Britain will not refund your VAT',
        p: 'The visitor scheme ended in 2021 and has never returned, so the 20 percent stays put on anything you carry out. Shopping here is not the tax-back exercise the rest of Europe trains you to expect.',
        href: '/united-kingdom/vat-refund',
        linkLabel: 'Why there is no VAT refund',
      },
      {
        h: 'Leave Heathrow on the Elizabeth line, not in a cab',
        p: 'One flat fare into the middle of London, a fraction of what a black cab wants for the same journey, and in traffic it usually arrives sooner.',
        href: '/united-kingdom/taxis-and-apps',
        linkLabel: 'Cabs, apps and the airport run',
      },
      {
        h: 'Scottish notes are sterling, but spend them up there',
        p: 'Banks in Scotland and Northern Ireland print their own pounds. It is real money, though it does not count as legal tender in England and plenty of shops there will wave it away. Swap them for Bank of England notes before heading south.',
        href: '/united-kingdom/cash-or-card',
        linkLabel: 'Notes, and what gets accepted',
      },
    ],
  },
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
        h: 'Your US car insurance stops at the border',
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
