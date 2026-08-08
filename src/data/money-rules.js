// Money rules: the pocket-card page type, one per country, at /{country}/rules.
//
// Keyed by country slug. A country gets a rules card simply by gaining a key here,
// and only if that country is also live in src/data/index.js, so this file cannot
// publish a card for a guide that does not exist yet. A country with no key here
// simply has no card, which is the safe default.
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
  canada: {
    title: 'Canada money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in Canada: choose Canadian dollars, the eTA is not for you, shelf prices are pre-tax, and tipping runs US-style.',
    h1: 'Canada money rules',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        lead: true,
        h: 'Choose Canadian dollars, never US dollars',
        p: 'Terminals and cash machines both offer to bill you at home in your own currency. Take it and you have accepted dynamic currency conversion, worth 3 to 8 percent to whoever asked. Let your own bank convert.',
        href: '/canada/cash-or-card',
        linkLabel: 'Paying by card in Canada',
      },
      {
        h: 'The eTA everyone warns you about is not for you',
        p: 'Canada asks most visa-exempt nationalities to buy one before flying, so US travelers assume they are included. They are specifically exempt. Anyone selling you one is selling you nothing.',
        href: '/canada/visa-and-eta',
        linkLabel: 'Why US citizens skip the eTA',
      },
      {
        h: 'An old drink-driving charge can turn you around',
        p: 'Canada treats criminal inadmissibility more strictly than almost anywhere Americans drive to, and a conviction that feels ancient at home can end the trip at the booth. Sort it out well before you travel.',
        href: '/canada/visa-and-eta',
        linkLabel: 'Being refused at the border',
      },
      {
        h: 'The price on the shelf is never the price you pay',
        p: 'Sales tax goes on at the register, not on the tag, and the province decides how much. It is the same habit as home, which is exactly why people stop expecting it once they cross a border.',
        href: '/canada/cash-or-card',
        linkLabel: 'What tax adds at the till',
      },
      {
        h: 'Tip like you would at home, on the total before tax',
        p: 'This is a tipping culture, so 15 to 20 percent at a sit-down restaurant is the expectation rather than a bonus. The terminal will suggest more than that, and it calculates on the taxed total, so work from the pre-tax line.',
        href: '/canada/tipping',
        linkLabel: 'What to tip in Canada',
      },
      {
        h: 'Draw cash at a bank, not from the box in the bar',
        p: 'The big five all have machines worth using. The white-label units in convenience stores, hotel lobbies and pubs charge a surcharge of their own on top of whatever your bank already takes.',
        href: '/canada/cash-or-card',
        linkLabel: 'Getting Canadian dollars',
      },
      {
        h: 'Your own car insurance probably already covers you',
        p: 'The happy opposite of renting in Mexico or much of Europe. US policies and credit-card collision cover generally do travel across this border, which makes the daily waiver at the desk often skippable. Check yours first.',
        href: '/canada/renting-a-car',
        linkLabel: 'Renting a car in Canada',
      },
      {
        h: 'Driving in winter? Quebec makes tires the law',
        p: 'From December to mid-March every vehicle there needs winter tires, rentals included, and the company charges a daily fee for them. Ontario also has a camera toll north of Toronto that bills you weeks later.',
        href: '/canada/renting-a-car',
        linkLabel: 'Winter tires and tolls',
      },
    ],
  },
  japan: {
    title: 'Japan money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in Japan: most bank ATMs reject foreign cards, get an IC card, never tip, and always choose yen over dollars.',
    h1: 'Japan money rules',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        lead: true,
        h: 'Most bank machines here will refuse your card',
        p: 'The ordinary high street banks simply hand a foreign card back, which is a bad thing to discover at nine at night. The ones that reliably work are the convenience store machines and Japan Post. Plan your cash around them.',
        href: '/japan/cash-or-card',
        linkLabel: 'Getting yen that actually works',
      },
      {
        h: 'Cashless in the cities, cash at the old places',
        p: 'Tapping covers Tokyo and Osaka more than its reputation suggests. What still wants coins and notes are the shrines, the small family places, the markets and the vending machines, which is a lot of what you came for.',
        href: '/japan/cash-or-card',
        linkLabel: 'Where cards work in Japan',
      },
      {
        h: 'An IC card is the best thing you set up all trip',
        p: 'Suica, Pasmo or ICOCA gets you through every gate without buying a ticket, and then pays for the convenience store and the vending machine too. Load it on arrival and stop thinking about small change.',
        href: '/japan/cash-or-card',
        linkLabel: 'Setting up an IC card',
      },
      {
        h: 'Do not tip. Say something instead',
        p: 'Good service is the professional standard here, not something you buy on top, and money left on a table can read as an insult. Gochisousama deshita on your way out does the job a tip is meant to do.',
        href: '/japan/tipping',
        linkLabel: 'Why nobody tips in Japan',
      },
      {
        h: 'Say yen every time a screen offers you dollars',
        p: 'Terminals and cash machines both ask, and saying yes is dynamic currency conversion, a poor rate dressed up as a courtesy. Choose yen and your own bank does the maths for far less.',
        href: '/japan/cash-or-card',
        linkLabel: 'Declining the dollar conversion',
      },
      {
        h: 'Visa-free for 90 days, but carry the proof',
        p: 'Nothing to apply for and nothing to pay. There is still a conversation: immigration can ask for your onward ticket, your first night address and evidence you can fund the trip. People have been refused for having none.',
        href: '/japan/visa',
        linkLabel: 'Entering Japan as a US citizen',
      },
      {
        h: 'GO is the taxi app, and Uber sends a real taxi',
        p: 'Install GO first, it has the widest coverage. Uber works but dispatches a licensed cab rather than a private car, so the cheap ride you know from home does not exist here. Do not touch the rear door, the driver opens it.',
        href: '/japan/taxis-and-apps',
        linkLabel: 'Taxis and apps in Japan',
      },
      {
        h: 'From the airport, the train wins on every count',
        p: 'A cab from Narita into central Tokyo costs many times the train and is not much faster. The Narita Express and the Keisei Skyliner both reach the city in under an hour. Take a taxi only for heavy bags or a group.',
        href: '/japan/taxis-and-apps',
        linkLabel: 'Getting in from the airport',
      },
    ],
  },
  spain: {
    title: 'Spain money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in Spain: choose euros, skip the kiosk cash machines, tipping is light, and the tourist tax hits only two regions.',
    h1: 'Spain money rules',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        lead: true,
        h: 'Choose euros, not dollars, every single time',
        p: 'Card readers and cash machines will both offer to switch you into dollars. Accept, and you lose 3 to 8 percent your own bank would never have charged.',
        href: '/spain/cash-or-card',
        linkLabel: 'Paying by card in Spain',
      },
      {
        h: 'The kiosk machines are the dear way to get cash',
        p: 'The standalone units in tourist streets, stations and airports carry no bank name and a fee of their own, which lands even after you have refused the dollar conversion. Draw from a machine at a bank branch.',
        href: '/spain/cash-or-card',
        linkLabel: 'Getting euros without the fee',
      },
      {
        h: 'Tipping is light here, and it should be cash',
        p: 'Rounding up or leaving 5 to 10 percent for good service is already generous, and nothing like the US percentage. Spanish terminals often have no tip prompt at all, and cash reaches the staff directly.',
        href: '/spain/tipping',
        linkLabel: 'What a propina is worth',
      },
      {
        h: 'No service charge, and no cover charge either',
        p: 'Spain does not usually add either, and there is no Italian-style coperto for sitting down. The listed price has the tax in it already, so the number on the menu is generally the number you pay.',
        href: '/spain/tipping',
        linkLabel: 'Reading a Spanish bill',
      },
      {
        h: 'Only two regions charge a tourist tax',
        p: 'Catalonia and the Balearics do, per person per night. Madrid, Andalucia and Valencia do not. Where it applies it is almost never in the total you booked, so expect it at the desk, sometimes in cash.',
        href: '/spain/tourist-tax',
        linkLabel: 'Where the tourist tax applies',
      },
      {
        h: 'There is no minimum spend on the tax refund',
        p: 'Spain scrapped it, so any purchase leaving unused can be claimed, which is unusually generous by EU standards. Validate at a DIVA kiosk before you fly, and at your last EU stop rather than here if you connect.',
        href: '/spain/vat-refund',
        linkLabel: 'How the IVA refund works',
      },
      {
        h: 'Renting a car? The permit is genuinely enforced',
        p: 'Spain requires non-EU drivers to carry an International Driving Permit alongside the license from home, and the big chains will refuse the keys without it. Get one before you leave; you cannot buy it there.',
        href: '/spain/renting-a-car',
        linkLabel: 'The permit and the fuel trick',
      },
      {
        h: 'Madrid airport is a fixed fare. Barcelona is not',
        p: 'An official taxi from Barajas to anywhere inside the ring road charges a set rate whatever the traffic. Barcelona is the odd one out for apps: local rules mean a ride has to be booked ahead rather than summoned.',
        href: '/spain/taxis-and-apps',
        linkLabel: 'Airport fares and ride apps',
      },
    ],
  },
  portugal: {
    title: 'Portugal money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in Portugal: use Multibanco not Euronet, the couvert is a charge, and never enter a Via Verde lane unequipped.',
    h1: 'Portugal money rules',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        lead: true,
        h: 'Use a Multibanco machine. Walk past the yellow ones',
        p: 'Portugal has one national bank network, MB, and it charges little or nothing to withdraw. The bright yellow Euronet units carry no bank name, cluster where tourists land, and stack a fee on top of a poor rate.',
        href: '/portugal/euronet-atm-fees',
        linkLabel: 'Telling the machines apart',
      },
      {
        h: 'Choose euros, not dollars, at every screen',
        p: 'Terminals and cash machines both offer the switch. Saying yes is dynamic currency conversion, a rate roughly 3 to 8 percent worse than the one your own bank would have given you for free.',
        href: '/portugal/cash-or-card',
        linkLabel: 'Paying by card in Portugal',
      },
      {
        h: 'The bread you did not order is a charge',
        p: 'Bread, olives and cheese arriving unasked is the couvert, and it appears on the bill at a euro or two a head. It is not a gift and it is not a scam. If you do not want it, say so and it goes back.',
        href: '/portugal/tipping',
        linkLabel: 'What the couvert costs',
      },
      {
        h: 'Tipping is light, and cash is the way to do it',
        p: 'Rounding up or 5 to 10 percent for good service is plenty, well under the US norm. Portuguese card machines often have no tip line, so keep coins and small notes if you want the money to reach anyone.',
        href: '/portugal/tipping',
        linkLabel: 'Tipping in Portugal',
      },
      {
        h: 'Get a navegante card before you ride the 28',
        p: 'Lisbon metro gates take your own contactless card, but the famous tram does not reliably, so do not build a day around tapping. A reusable navegante costs small change from any metro machine and covers both.',
        href: '/portugal/tram-28-contactless',
        linkLabel: 'Paying for Lisbon transport',
      },
      {
        h: 'Buying from the tram driver is the tourist price',
        p: 'A single bought on board costs close to double the same ride loaded onto a card, and drivers want coins or small notes for it. On a route you will ride more than once that difference adds up fast.',
        href: '/portugal/tram-28-contactless',
        linkLabel: 'What paying the driver costs',
      },
      {
        h: 'Validate the tax refund before you reach the gate',
        p: 'Ask the shop for the form, then use an e-Taxfree kiosk at the airport. Which kiosk depends on whether the goods are in your carry-on or going in the hold, so sort that out before you check a bag with them inside.',
        href: '/portugal/iva-tax-refund-kiosk',
        linkLabel: 'How the IVA refund works',
      },
      {
        h: 'Never enter a Via Verde lane without a device',
        p: 'Some motorways here have no booth at all and read your plate instead. A car hired in Portugal comes with a transponder fitted by law, but a foreign-plated one does not, and an unequipped car in that lane means a fine.',
        href: '/portugal/driving-and-tolls',
        linkLabel: 'Tolls, transponders and fines',
      },
    ],
  },
};

export function rulesFor(slug) {
  return moneyRules[slug] || null;
}
