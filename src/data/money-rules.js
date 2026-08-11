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
    blurb: 'Service sits in the price by law, and the fare in from the airport is set by decree.',
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
    blurb: 'Nothing to reclaim on the way out, and no travel card worth buying.',
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
    blurb: 'Drive into an old city centre and a camera bills you months after you fly home.',
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
    blurb: 'The dollar sign on a menu means pesos, and the tip wants to be cash.',
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
    blurb: 'Two currencies circulate, and crossing them over lets the seller pick the rate.',
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
    blurb: 'The shelf price is never the price, and the tipping runs the way it does at home.',
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
    blurb: 'Most bank machines refuse a foreign card, and a tip is not expected anywhere.',
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
    blurb: 'No cover charge, no service charge, and a tax refund with no minimum spend.',
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
    blurb: 'One national machine network is cheap, and the bright yellow ones are not.',
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
  germany: {
    title: 'Germany money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in Germany: carry cash, say the total instead of leaving a tip, no car toll, and the green windscreen sticker.',
    h1: 'Germany money rules',
    blurb: 'Less card-friendly than it looks, and you say the total rather than leaving it.',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        lead: true,
        h: 'Carry cash. Germany is not as card-first as it looks',
        p: 'The richest country in Europe and the bakery still wants coins. Supermarkets, hotels and chains take cards, but bars, small restaurants and market stalls often do not. Carry small notes, they dislike large ones.',
        href: '/germany/cash-or-card',
        linkLabel: 'Where cards work in Germany',
      },
      {
        h: 'Say the total. Do not leave it on the table',
        p: 'This is the habit that catches Americans out. When the server tells you what you owe, you name the figure you want to pay, tip included, and hand over the money. Cash left behind on the table is not how it is done here.',
        href: '/germany/tipping',
        linkLabel: 'How to tip in Germany',
      },
      {
        h: 'Trinkgeld is modest, and you round rather than calculate',
        p: 'Somewhere around 5 to 10 percent covers a restaurant, and it is arrived at by rounding up to a tidy figure rather than working out a percentage. At a bar or a cafe, leaving the coins is plenty.',
        href: '/germany/tipping',
        linkLabel: 'What Trinkgeld is worth',
      },
      {
        h: 'Choose euros, not dollars, at every screen',
        p: 'Terminals and cash machines both offer the switch. Saying yes is dynamic currency conversion, a rate roughly 3 to 8 percent worse than the one your own bank would have given you for nothing.',
        href: '/germany/cash-or-card',
        linkLabel: 'Paying by card in Germany',
      },
      {
        h: 'There is no car toll, whatever anyone tries to sell you',
        p: 'Austria, Switzerland and Slovenia all charge one, so drivers arrive expecting to buy a windscreen vignette here too. Germany has none for cars, so anyone selling you one near the border is selling you nothing.',
        href: '/germany/driving-and-tolls',
        linkLabel: 'Tolls and the vignette myth',
      },
      {
        h: 'The green sticker is the real driving trap',
        p: 'Most cities of any size are low-emission zones you may only enter showing an Umweltplakette on the glass, Berlin and Munich among them. Check the windscreen when you collect the car, and bring an International Driving Permit.',
        href: '/germany/driving-and-tolls',
        linkLabel: 'The Umweltzone and the permit',
      },
      {
        h: 'FreeNow is the app, and Uber sends a real taxi',
        p: 'Install FreeNow first, it has the widest reach. Uber and Bolt work in the big cities, but German rules mean they call a licensed taxi rather than the cheap private car you know from home.',
        href: '/germany/taxis-and-apps',
        linkLabel: 'Taxis and apps in Germany',
      },
      {
        h: 'From the airport, the train is usually the answer',
        p: 'Frankfurt, Munich and Berlin all have the station inside or underneath the terminal, and the S-Bahn or regional train into the city costs a few euros. In traffic it also beats a taxi on time, not just on price.',
        href: '/germany/taxis-and-apps',
        linkLabel: 'Getting in from the airport',
      },
    ],
  },
  'dominican-republic': {
    title: 'Dominican Republic money rules: 8 to remember',
    description:
      'Eight money habits for US travelers in the Dominican Republic: the E-Ticket is free and needed twice, the 10 and 18 on your bill, and pay in pesos.',
    h1: 'Dominican Republic money rules',
    blurb: 'The menu price hides about a quarter, and the entry form is needed twice.',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        lead: true,
        h: 'The E-Ticket is free, and you need it twice',
        p: 'Once to come in and once to go home, each with its own code. It is a government form, ten minutes, no charge. The search results are thick with lookalike sites charging real money to type it in for you.',
        href: '/dominican-republic/e-ticket',
        linkLabel: 'Filing the E-Ticket yourself',
      },
      {
        h: 'The menu price is about a quarter off the truth',
        p: 'Locals call it the 10 and 18: restaurants add a service charge and then a tax on top of the listed prices, so the total lands well above what you read. Nothing is wrong with the bill, it is just built that way.',
        href: '/dominican-republic/tipping',
        linkLabel: 'Reading a Dominican bill',
      },
      {
        h: 'Then leave a little directly for your server',
        p: 'The service charge on the bill is modest and gets pooled, so a small extra handed over is the part that reaches the person who looked after you. Around 5 to 10 percent is customary.',
        href: '/dominican-republic/tipping',
        linkLabel: 'Tipping in the Dominican Republic',
      },
      {
        h: 'Choose pesos, not dollars, on every card screen',
        p: 'Saying yes to dollars is dynamic currency conversion, worth 3 to 8 percent to whoever offered it. Choose pesos and let your own bank convert, which it does for far less.',
        href: '/dominican-republic/cash-or-card',
        linkLabel: 'Paying by card here',
      },
      {
        h: 'Dollars are accepted, but your change will not be',
        p: 'US notes work in the resort areas, but the change comes back in pesos at whatever rate the vendor decided. Paying in pesos is simply better value for anything bought on the street.',
        href: '/dominican-republic/cash-or-card',
        linkLabel: 'Which currency to carry',
      },
      {
        h: 'No meters, so agree the fare and the currency',
        p: 'Ordinary taxis do not run a meter, so settle the number before you get in and confirm whether it is pesos or dollars, because the gap is enormous. Ask your hotel what a fair price looks like.',
        href: '/dominican-republic/taxis-and-apps',
        linkLabel: 'Taxis, apps and motoconchos',
      },
      {
        h: 'At Punta Cana, book the transfer before you fly',
        p: 'App coverage thins out in the resort areas, and official airport taxis run fixed rates that are steep even for a short hop. A transfer through the hotel or a shuttle firm is the calm option.',
        href: '/dominican-republic/taxis-and-apps',
        linkLabel: 'Getting from the airport',
      },
      {
        h: 'Bring the passport book, not the passport card',
        p: 'The card is not accepted for an international flight, which is a bad thing to learn at the airport. Six months of validity beyond your trip is the safe standard, whatever easing is in force.',
        href: '/dominican-republic/e-ticket',
        linkLabel: 'Entry rules and documents',
      },
    ],
  },
  jamaica: {
    title: 'Jamaica money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in Jamaica: red plate taxis only, the C5 form is free, choose Jamaican dollars, and check for a service charge.',
    h1: 'Jamaica money rules',
    blurb: 'Two currencies share one name, so always ask which dollars are meant.',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        lead: true,
        h: 'Look at the plate. Red is legal, white is not',
        p: 'A licensed taxi carries a red plate, a Transport Authority sticker and a globe on the roof. The white-plate cars touting for business are unlicensed and uninsured for you. Be firm about this one.',
        href: '/jamaica/taxis-and-apps',
        linkLabel: 'Licensed taxis in Jamaica',
      },
      {
        h: 'The C5 form is free, and only one site has it',
        p: 'Everybody needs one, children included, before arrival. It is a free government form that takes a few minutes. Lookalike sites charge serious money to fill in the same thing and some look convincingly official.',
        href: '/jamaica/c5-form',
        linkLabel: 'Filing the C5 yourself',
      },
      {
        h: 'You cannot file it months ahead, only weeks',
        p: 'The window opens 30 days before you travel, so doing it early does not work. Have your flight and accommodation to hand, file one per traveler, and screenshot the code it gives you.',
        href: '/jamaica/c5-form',
        linkLabel: 'When to file the C5',
      },
      {
        h: 'There is no Uber, so settle the number first',
        p: 'The listings you find for ride apps here are private transfer firms borrowing the name. What you actually use is a licensed taxi, and the fare is agreed before you get in, not metered on the way.',
        href: '/jamaica/taxis-and-apps',
        linkLabel: 'Why the app does not work here',
      },
      {
        h: 'Always ask which dollars they mean',
        p: 'Both currencies circulate in the tourist areas and the two numbers are wildly different, so a quote of twenty could be a small fare or a large one. Confirm it out loud before you agree to anything.',
        href: '/jamaica/taxis-and-apps',
        linkLabel: 'Agreeing a fare',
      },
      {
        h: 'On a card, choose Jamaican dollars',
        p: 'Being billed in US dollars is dynamic currency conversion, roughly 3 to 8 percent worse than your own bank would manage. In cash, US notes are taken in the resort zones but usually at a rate that favours the till.',
        href: '/jamaica/cash-or-card',
        linkLabel: 'Paying by card in Jamaica',
      },
      {
        h: 'Read the bill before you add a tip',
        p: 'A service charge is commonly added already, and where it is, the tip is broadly dealt with. Tipping runs closer to the US habit here than elsewhere in the Caribbean, so 10 to 15 percent where nothing was added.',
        href: '/jamaica/tipping',
        linkLabel: 'Tipping in Jamaica',
      },
      {
        h: 'Keep local cash for the parts worth having',
        p: 'Cards cover the resorts and the nicer restaurants. Markets, street food and the route taxis run on Jamaican dollars, and that is most of what you will remember about eating here.',
        href: '/jamaica/cash-or-card',
        linkLabel: 'How much cash to carry',
      },
    ],
  },
  india: {
    title: 'India money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in India: use only the official e-Visa site, book autos in an app, tip small and often, and always pay in rupees.',
    h1: 'India money rules',
    blurb: 'One official site issues the visa, and the rest are middlemen.',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        lead: true,
        h: 'One website issues the e-Visa. The rest are middlemen',
        p: 'India is among the worst destinations anywhere for visa agents, and the results are full of sites charging well over the government fee for the same form. Some are simply scams. Use the official portal.',
        href: '/india/e-visa',
        linkLabel: 'Applying for the e-Visa',
      },
      {
        h: 'The e-Visa only works if you fly into the right port',
        p: 'It is valid at designated airports and seaports, not at a land border, and it cannot be extended once you are there. Check your arrival point against the list before booking, and allow a week or two to apply.',
        href: '/india/e-visa',
        linkLabel: 'The e-Visa conditions',
      },
      {
        h: 'If a driver says your hotel is closed, call the hotel',
        p: 'Flooded, full, burnt down, never existed: the story varies and the destination is always a place that pays him commission. It clusters around New Delhi station. One phone call to your booking ends it.',
        href: '/india/money-scams',
        linkLabel: 'The hotel is closed scam',
      },
      {
        h: 'Never buy gems or carpets to sell at home',
        p: 'The costliest trap here is the export scheme: a friendly introduction, goods described as investment grade, and a resale market that does not exist. Buy things because you want them, never because of the profit.',
        href: '/india/money-scams',
        linkLabel: 'The gem and carpet scam',
      },
      {
        h: 'Book the auto in an app and skip the whole argument',
        p: 'Drivers are meant to run the meter and frequently will not, offering a flat price several times over the real one. Uber, Ola and Rapido all quote before you ride, which removes the negotiation entirely.',
        href: '/india/taxis-and-apps',
        linkLabel: 'Autos, meters and apps',
      },
      {
        h: 'The men who approach you at arrivals are not the taxi',
        p: 'They offer a prepaid ride well over the odds, sometimes taking hold of a bag to move you along. Use the app or the real prepaid counter. In Delhi, the Airport Express metro avoids all of it.',
        href: '/india/taxis-and-apps',
        linkLabel: 'Getting out of the airport',
      },
      {
        h: 'Baksheesh means many small tips, not big ones',
        p: 'You will tip often and never much: a porter, a driver, a doorman, housekeeping. In restaurants around 10 percent is normal, but check the bill first, because a service charge is frequently added and is officially voluntary.',
        href: '/india/tipping',
        linkLabel: 'Tipping and baksheesh',
      },
      {
        h: 'Choose rupees, and ask for small notes',
        p: 'Refuse the dollar option on any terminal or cash machine. Then get your cash into small notes, because large ones are hard to break at a stall and most of what you will enjoy here is a cash transaction.',
        href: '/india/cash-or-card',
        linkLabel: 'Cash and cards in India',
      },
    ],
  },
  // Batch three: Netherlands, Iceland, Indonesia. Portugal was already carrying a
  // card from the previous batch and is left untouched.
  netherlands: {
    title: 'Netherlands money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in the Netherlands: carry a debit card, choose euros, take the train from Schiphol, and round up when you tip.',
    h1: 'Netherlands money rules',
    blurb: 'So card-first that some places refuse cash, and debit beats credit at the till.',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        // The one country in the series where the lead is not about currency. Being
        // refused at a till is the thing that actually happens to Americans here, and
        // it is the same reasoning that puts cash at the top of the Germany card.
        lead: true,
        h: 'Carry a debit card, not only a credit card',
        p: 'Almost nowhere in Europe leans harder on cards, which is what makes the exception sting. Tills here are built around debit, so an American credit card is sometimes refused at a supermarket or a discount chain. When one gets declined, the phone wallet usually goes through anyway.',
        href: '/netherlands/cash-or-card',
        linkLabel: 'Which card to bring',
      },
      {
        h: 'Say euros when the screen offers you dollars',
        p: 'Card readers and cash machines both float the home-currency option, and taking it hands 3 to 8 percent to whoever owns the machine. Pick euros and the conversion goes back to your own bank.',
        href: '/netherlands/cash-or-card',
        linkLabel: 'Why euros, not dollars',
      },
      {
        h: 'Some places have stopped taking cash at all',
        p: 'The usual warning runs backwards here. A growing number of cafes, shops and museums are card-only, so the card is the essential thing and the notes are the spare. One small note in your pocket covers the rare stall that wants coins.',
        href: '/netherlands/cash-or-card',
        linkLabel: 'How little cash you need',
      },
      {
        h: 'Your room costs more than the rate you booked',
        p: 'Amsterdam takes a slice of the room every night with no ceiling on it, and national VAT on hotel rooms climbed steeply in January. In the capital the two together run to about a third above the advertised price, and they land when you check out.',
        href: '/netherlands/tourist-tax',
        linkLabel: 'What a Dutch hotel adds',
      },
      {
        h: 'From Schiphol, the train beats the taxi rank',
        p: 'It leaves from under the terminal and reaches central Amsterdam in about twenty minutes for a few euros, against many times that in a cab. Your contactless card opens the gate, so there is no transit pass to buy first.',
        href: '/netherlands/taxis-and-apps',
        linkLabel: 'Getting in from Schiphol',
      },
      {
        h: 'Book a cab in an app rather than flagging one down',
        p: 'Amsterdam street taxis have a long reputation for the scenic route and for turning down anything short. Uber, Bolt and FreeNow all settle the price before you get in, and a marked cab at an official rank runs a regulated meter.',
        href: '/netherlands/taxis-and-apps',
        linkLabel: 'Taxis, apps and street cabs',
      },
      {
        h: 'Round up, do not work out a percentage',
        p: 'Staff here draw a proper wage, so a fooi is a courtesy and the American arithmetic does not apply. Rounding up the bill is generous, 5 to 10 percent marks something memorable, and at a bar the change on the counter is plenty.',
        href: '/netherlands/tipping',
        linkLabel: 'What a fooi is worth',
      },
      {
        h: 'The card machine may ask you for a tip',
        p: 'Unusual for Europe, and easy to accept by reflex. Nothing has been added to a Dutch bill and nothing is expected, so treat the prompt as an invitation rather than a correction.',
        href: '/netherlands/tipping',
        linkLabel: 'Tipping on the card machine',
      },
    ],
  },
  iceland: {
    title: 'Iceland money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in Iceland: it is krona not euros, cards cover the whole trip, nobody expects a tip, and what car cover skips.',
    h1: 'Iceland money rules',
    blurb: 'Cashless to the point of not needing notes, and euros are no use here.',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        // Arriving with euros is the distinctly Icelandic version of the currency
        // mistake, so it leads and the conversion rule sits directly under it.
        lead: true,
        h: 'It is krona, and euros will not spend here',
        p: 'Iceland belongs to neither the EU nor the eurozone, so euros carried over for the trip have to be changed a second time, at your expense. The price is in Icelandic krona and that is what to pay in.',
        href: '/iceland/cash-or-card',
        linkLabel: 'Krona, cards and cash machines',
      },
      {
        h: 'Refuse every offer to charge you in dollars',
        p: 'Terminals and cash machines both make it. Taking it lets the machine set your exchange rate rather than your bank, and that swap costs 3 to 8 percent. Krona every time.',
        href: '/iceland/cash-or-card',
        linkLabel: 'Declining the dollar conversion',
      },
      {
        h: 'You can cross this country without a banknote',
        p: 'Cards and phone wallets reach almost everything, from a Reykjavik cafe to a guesthouse in the middle of nowhere, which makes Iceland one of the few places where carrying no cash is a workable plan. Keep a token reserve and expect never to break it.',
        href: '/iceland/cash-or-card',
        linkLabel: 'How little cash you need',
      },
      {
        h: 'Nobody is waiting for a tip',
        p: 'Service is inside the price and wages are decent, so restaurants, bars and taxis expect nothing and the terminals do not nag. A private guide who has made your day is the one case where a little cash is a warm gesture.',
        href: '/iceland/tipping',
        linkLabel: 'Why tipping is not a thing',
      },
      {
        h: 'No Uber here, and the airport cab is the dearest ride',
        p: 'Licensed firms run official meters and you reach them by app, by phone or from a rank, so hailing is not the habit. For the run in from Keflavik the scheduled coach covers the same road for a fraction of the fare.',
        href: '/iceland/taxis-and-ride-hailing',
        linkLabel: 'Taxis, apps and the Keflavik run',
      },
      {
        h: 'The rental waiver leaves out what actually happens',
        p: 'Gravel chips, glass, tires and blown sand or ash all sit outside the standard collision cover, and outside the expensive upgrade too, because that upgrade lowers your deductible without lengthening the list. Roughly a third of the roads here are unpaved.',
        href: '/iceland/renting-a-car',
        linkLabel: 'What the insurance skips',
      },
      {
        h: 'Nothing sold in Iceland covers a river crossing',
        p: 'Ford one and a flooded engine is yours outright, whatever you bought at the counter. Taking a two-wheel drive onto an F-road is illegal as well as uninsured. These are not deductibles, they are the cover disappearing.',
        href: '/iceland/renting-a-car',
        linkLabel: 'F-roads, fords and voided cover',
      },
      {
        h: 'Some of the driving bills arrive after you fly home',
        p: 'Car parks at the big waterfalls have a camera instead of a booth and expect an app, the tunnel in the north is paid online by plate, and the road tax is charged by distance. All of it reaches your rental agreement later, with a handling fee on top, so ask the desk how it bills each one.',
        href: '/iceland/renting-a-car',
        linkLabel: 'Parking, tolls and the road tax',
      },
    ],
  },
  indonesia: {
    title: 'Indonesia money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in Indonesia: carry rupiah, count the zeros, pay the Bali levy on the official site, and read the plus plus.',
    h1: 'Indonesia money rules',
    blurb: 'Cash still runs most of the day, and the zeros are easy to misread.',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        // Most US trips here are Bali trips, and the guide is written that way, so the
        // card follows it. Cash leads because it is the assumption travelers arrive
        // with backwards.
        lead: true,
        h: 'Most of what you will do runs on cash',
        p: 'Hotels, smarter restaurants and larger shops take cards, and a few add a percentage for the privilege. Warungs, markets, parking attendants and boats do not, and between them they account for most of an ordinary day.',
        href: '/indonesia/cash-or-card',
        linkLabel: 'How much rupiah to carry',
      },
      {
        h: 'Count the zeros, then count them again',
        p: 'A hundred thousand note and a ten thousand note are easy to mix up at a glance, and rupiah figures run long enough that misreading one costs real money. Slow down at the moment of paying, particularly on day one.',
        href: '/indonesia/cash-or-card',
        linkLabel: 'Reading rupiah notes',
      },
      {
        h: 'Choose rupiah, never dollars, at the terminal',
        p: 'The offer to bill you in your own currency is dynamic currency conversion, and it takes 3 to 8 percent on the way past. Your bank will do the same sum for less.',
        href: '/indonesia/cash-or-card',
        linkLabel: 'Paying by card in Indonesia',
      },
      {
        h: 'Draw cash inside a bank or a mall, not off the street',
        p: 'The standalone boxes along the tourist strips are where card skimming turns up. Use a machine inside a branch of one of the big banks, or in a shopping centre, and do it in daylight.',
        href: '/indonesia/cash-or-card',
        linkLabel: 'Getting rupiah safely',
      },
      {
        h: 'Pay the Bali levy on the government site only',
        p: 'Lookalike pages charge several times the real figure and exist mainly to collect card numbers. The official address ends in .go.id, the levy is once per trip rather than per night, and a counter on arrival is the safe fallback.',
        href: '/indonesia/visa',
        linkLabel: 'The Bali levy and the visa on arrival',
      },
      {
        h: 'Read the bill for the plus plus before you tip',
        p: 'Hotels and tourist restaurants routinely add service and tax on top of the listed price, and where that is already sitting there it stands in for the tip. At a warung nothing is expected at all.',
        href: '/indonesia/tipping',
        linkLabel: 'The plus plus, and what to tip',
      },
      {
        h: 'Tip in rupiah, in cash, with your right hand',
        p: 'A tip added on a card tends to vanish into a pool, so cash is what actually reaches the driver, the guide or the spa. Small notes make it easy, and the right hand is the polite one.',
        href: '/indonesia/tipping',
        linkLabel: 'Tipping in Indonesia',
      },
      {
        h: 'Book the ride in an app, and be ready to walk a little',
        p: 'Grab and Gojek both price the trip before you get in and undercut a street cab. Local unions block app pickups in parts of Ubud, Canggu and Uluwatu, so a driver may ask you to meet him round the corner. Being dropped off there is rarely the problem.',
        href: '/indonesia/taxis-and-apps',
        linkLabel: 'Ride apps, and the no-app zones',
      },
    ],
  },
  // Batch four: the Gulf six. All six sit under a shared State Department advisory in
  // src/data/advisories.js, which is why rules.astro gained the advisory strip in the same
  // change: a card for a Level 3 country that never mentions the level would be the guide
  // telling a reader one thing and the pocket version telling them nothing.
  //
  // These six countries share a region and very little else on money. The peg is the clean
  // example: five of them fix to the dollar and Kuwait does not, so the same rule number
  // carries the opposite advice. Where they genuinely do overlap, declining the dollar
  // conversion and reading the bill before tipping, each card comes at it through that
  // country's own angle rather than repeating a house sentence six times.
  //
  // A constraint worth recording: these guides run four spokes each (visa, cash-or-card,
  // tipping, taxis-and-apps) and no tax spoke. So the hotel add-on stacks, and the Saudi
  // refund mechanics, are deliberately absent. Both are real money facts and both live on
  // the guide, but a rule has to point at a spoke that actually covers it. A hotel-taxes
  // spoke, or saudi-arabia/vat-refund, would each earn a rule here immediately.
  uae: {
    title: 'UAE money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in the UAE: the dirham is pegged, skip the airport exchange desk, tip in cash, and read your entry stamp.',
    h1: 'UAE money rules',
    blurb: 'The rate cannot move against you, so the only real leak is the exchange desk.',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        lead: true,
        h: 'The dirham does not move against the dollar',
        p: 'The peg has held for decades and will not shift while you are there. That also means a terminal offering to bill you in dollars is offering you nothing, and accepting it costs 3 to 8 percent for a conversion you never needed.',
        href: '/uae/cash-or-card',
        linkLabel: 'Paying by card in the UAE',
      },
      {
        h: 'Never change money at the airport or your hotel',
        p: 'Those two desks run the worst rates on offer anywhere in the country. The exchange houses inside the malls are where locals go, and if you are paying by card for most things you may never need one at all.',
        href: '/uae/cash-or-card',
        linkLabel: 'Where to change money',
      },
      {
        h: 'Tap for everything, keep a little cash for the souk',
        p: 'Cabs, the metro, malls and restaurants all take a card or a phone without a second thought. What still wants notes is the souk, the small local place, and anything you hand to a person as thanks.',
        href: '/uae/cash-or-card',
        linkLabel: 'How much cash to carry',
      },
      {
        h: 'The room rate is not the room bill',
        p: 'Tax is genuinely light here, but a municipality fee, a service charge and a nightly city charge all stack on top, commonly a fifth to a third above the figure you were quoted. Ask what the all-in nightly total is before you book.',
        href: '/uae/hotel-taxes-and-fees',
        linkLabel: 'What a hotel bill adds',
      },
      {
        h: 'No visa to arrange, but read what gets stamped in',
        p: 'It is issued free on arrival at any UAE airport and covers all seven emirates, so anyone selling you one in advance is selling you nothing. The length written into the stamp is the part that varies, so look at it rather than trusting a figure you read online.',
        href: '/uae/visa',
        linkLabel: 'What the stamp gives you',
      },
      {
        h: 'The service charge may never reach your server',
        p: 'Restaurants add one routinely and it is not the same thing as a tip here. If the service was good, a little cash into a hand is the part you can actually be sure about.',
        href: '/uae/tipping',
        linkLabel: 'Service charges, and tipping',
      },
      {
        h: 'A few dirhams goes a long way, and cash is the form',
        p: 'Valet, porter, housekeeping: small notes given directly are the norm rather than a percentage of anything. Keep some back for the purpose, because a tip added to a card disappears into the till.',
        href: '/uae/tipping',
        linkLabel: 'What to tip, and to whom',
      },
      {
        h: 'Dubai cabs run one formula, so there is nothing to haggle over',
        p: 'Every licensed taxi is metered to the same regulated rate, a minimum fare means a very short hop costs the same as a slightly longer one, and road tolls land on the meter as you pass a gate. Cards work in the car, and the apps cost more than a street hail.',
        href: '/uae/taxis-and-apps',
        linkLabel: 'Taxis, apps and tolls',
      },
    ],
  },
  oman: {
    title: 'Oman money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in Oman: read the three decimals, break the big notes early, agree taxi fares first, and carry cash for the souk.',
    h1: 'Oman money rules',
    blurb: 'Three decimals on every price, and the souk still runs on cash.',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        // The decimal leads on three of these six cards, because in Oman, Bahrain and
        // Kuwait it is the error that actually empties a wallet and it is invisible to
        // anyone who has only ever used a two-decimal currency.
        lead: true,
        h: 'That price has three decimals, so read it twice',
        p: 'The rial divides into a thousand baisa, so a tag marked 3.500 means three and a half rials, not three fifty. Everything else about paying here is easy, and this is the one that stings in a souk.',
        href: '/oman/cash-or-card',
        linkLabel: 'Reading rial prices',
      },
      {
        h: 'Break the big notes early',
        p: 'A single large rial note is worth more than a hundred dollars, which makes it awkward in a cafe or a taxi. Change one down at a hotel or a supermarket on the first day and keep the small ones moving.',
        href: '/oman/cash-or-card',
        linkLabel: 'Notes, and what to carry',
      },
      {
        h: 'Cards run the cities, cash runs everything else',
        p: 'Hotels, malls, supermarkets and chains in Muscat and Salalah take one without fuss. The souk, the roadside stop, the short taxi ride and most of the country beyond those two cities do not.',
        href: '/oman/cash-or-card',
        linkLabel: 'Where cards work',
      },
      {
        h: 'Say rials when the screen offers dollars',
        p: 'The rial is fixed against the dollar, so the conversion a terminal wants to sell you buys you nothing whatsoever. It is the one steady leak in an otherwise simple country.',
        href: '/oman/cash-or-card',
        linkLabel: 'Declining the dollar conversion',
      },
      {
        h: 'No Uber here, so use a licensed app or agree the fare',
        p: 'The transport ministry licenses a handful of local on-demand apps, and those fix the price in advance so there is nothing left to argue about. In a street taxi the meter frequently stays off, so agree the figure while you are still on the pavement.',
        href: '/oman/taxis-and-apps',
        linkLabel: 'Taxis, apps and fares',
      },
      {
        h: 'At Muscat airport, take the official pickup',
        p: 'Whoever walks up to you in arrivals is not the authorised service and has no fixed price to honour. Use the sanctioned rank, or a transfer booked before you landed.',
        href: '/oman/taxis-and-apps',
        linkLabel: 'Getting out of the airport',
      },
      {
        h: 'Two weeks comes free, and it comes with conditions',
        p: 'The short visa-free stay is conditional: they want to see where you are sleeping, cover for medical bills, and a ticket out of the country. It cannot be stretched or turned into anything else once you are in, so a longer trip means applying before you fly.',
        href: '/oman/visa',
        linkLabel: 'What the exemption requires',
      },
      {
        h: 'Look for a service charge before you add anything',
        p: 'Hotels and tourist restaurants usually put one on the bill, and where it is there the question is already settled. Where it is not, a small note is plenty, and cash is what reaches the person who served you.',
        href: '/oman/tipping',
        linkLabel: 'Tipping in Oman',
      },
    ],
  },
  qatar: {
    title: 'Qatar money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in Qatar: no VAT so the tag is final, Careem has gone, the metro beats the airport cab, and tipping is optional.',
    h1: 'Qatar money rules',
    blurb: 'No VAT at all, so the tag is the price, and one familiar ride app has gone.',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        lead: true,
        h: 'There is no VAT, so the tag is the price',
        p: 'Almost nowhere else in the region can say that, and it makes budgeting here unusually honest. A service charge can still land on a restaurant bill, but that one is the property helping itself, not the state.',
        href: '/qatar/cash-or-card',
        linkLabel: 'What things actually cost',
      },
      {
        h: 'Careem does not work here any more',
        p: 'It closed its Qatar ride-hailing operation years ago and a great many travel pages have never caught up. Uber works, the turquoise Karwa cars are the official cabs, and you can book a Karwa through the Uber app.',
        href: '/qatar/taxis-and-apps',
        linkLabel: 'Which apps work in Doha',
      },
      {
        h: 'From the airport, the metro costs a fraction of the cab',
        p: 'A standard journey costs small change against a taxi into town, and the line reaches the terminal. With heavy bags or a late landing the cab earns its money, but you are picking it rather than stuck with it.',
        href: '/qatar/taxis-and-apps',
        linkLabel: 'The metro, and the airport run',
      },
      {
        h: 'If you read that you get thirty days, that is out of date',
        p: 'The rule changed, and a US passport now collects a multiple-entry stamp good for years, with a generous stay allowed on each visit. There is no form to file in advance and no fee to pay.',
        href: '/qatar/visa',
        linkLabel: 'What the entry stamp gives you',
      },
      {
        h: 'Say riyals, every screen, every time',
        p: 'The currency has been fixed to the dollar since 1980, so a machine offering to charge you at home is offering margin and no benefit. Let your own bank do the arithmetic.',
        href: '/qatar/cash-or-card',
        linkLabel: 'Declining the dollar conversion',
      },
      {
        h: 'Cards cover nearly everything, official cabs included',
        p: 'Hotels, malls, restaurants, the metro and most of the government taxis all take one, and the phone wallets work widely. A small float of notes handles the souq stalls and the occasional driver who cannot.',
        href: '/qatar/cash-or-card',
        linkLabel: 'How much cash to carry',
      },
      {
        h: 'A percentage on the bill is service, not tax',
        p: 'With no tax in the country, an added percentage can only be the restaurant charging for service, and where you see it you have already covered that. Nothing further is expected of you.',
        href: '/qatar/tipping',
        linkLabel: 'Reading the bill',
      },
      {
        h: 'If you tip, tip in cash',
        p: 'It is genuinely optional here, drivers do not expect it, and rounding up reads as a courtesy rather than a duty. In a city where you tap for everything else, notes are the only form that reaches a person.',
        href: '/qatar/tipping',
        linkLabel: 'Tipping in Qatar',
      },
    ],
  },
  bahrain: {
    title: 'Bahrain money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in Bahrain: read the three decimals, both ride apps work here, apps undercut the meter, tip in small notes.',
    h1: 'Bahrain money rules',
    blurb: 'Card-easy and arithmetic-hard, and the one Gulf state where both ride apps work.',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        lead: true,
        h: 'A small-looking number is not a small amount',
        p: 'Prices run to three decimal places here, because the dinar breaks into a thousand parts rather than a hundred. A figure that looks tiny is several times what you read, and with the dinar worth well over two dollars, a few of those in a souq is real money gone.',
        href: '/bahrain/cash-or-card',
        linkLabel: 'Reading dinar prices',
      },
      {
        h: 'Both ride apps work here, which is rare in the Gulf',
        p: 'Uber and Careem each operate, and the airport gives them their own pickup point at the kerb. One of them has pulled out of Qatar next door and the other never arrived in Oman, so this is the country where your usual app simply works.',
        href: '/bahrain/taxis-and-apps',
        linkLabel: 'Uber, Careem and the airport',
      },
      {
        h: 'The app usually undercuts the meter',
        p: 'Into central Manama a booked car tends to come in below what a metered taxi wants for the same run, and you see the number before you commit. There is no train here, so every trip is a road trip.',
        href: '/bahrain/taxis-and-apps',
        linkLabel: 'Apps against the meter',
      },
      {
        h: 'Choose dinars at every terminal',
        p: 'The dinar is fixed to the dollar, so letting a machine convert on your behalf stacks a padded rate on top of a perfectly stable one. Decline it on card readers and cash machines alike.',
        href: '/bahrain/cash-or-card',
        linkLabel: 'Declining the dollar conversion',
      },
      {
        h: 'Card for most of it, small notes for the souq',
        p: 'Hotels, malls, restaurants and fuel across Manama take contactless as a matter of course. Keep a modest float in small notes for Manama Souq, the independent cafes and tips.',
        href: '/bahrain/cash-or-card',
        linkLabel: 'Cards, cash and ATMs',
      },
      {
        h: 'The bill answers the tipping question more clearly here',
        p: 'A service charge on a hotel or restaurant bill is standard rather than occasional, so where it is printed you have paid for service. Anything beyond it is genuinely your own choice.',
        href: '/bahrain/tipping',
        linkLabel: 'Service charges, and tipping',
      },
      {
        h: 'Calibrate the tip to what a note is worth',
        p: 'A single dinar is already a real tip and five is a substantial one, which is not the instinct an American arrives with. Keep the fils coins and the single notes back for the purpose.',
        href: '/bahrain/tipping',
        linkLabel: 'What to tip in Bahrain',
      },
      {
        h: 'The visa has two routes, and they are not the same length',
        p: 'You can take one on arrival for a short single-entry stay, or apply through the official portal beforehand for longer and for multiple entries. Both carry a fee, and that portal is the only place worth reading the current one.',
        href: '/bahrain/visa',
        linkLabel: 'Visa on arrival, or eVisa',
      },
    ],
  },
  'saudi-arabia': {
    title: 'Saudi Arabia money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in Saudi Arabia: budget for the highest VAT in the Gulf, take the Riyadh Metro, never an unlicensed taxi.',
    h1: 'Saudi Arabia money rules',
    blurb: 'The highest VAT in the Gulf, and one of only two you can claim back.',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        // The rate itself is left out on purpose. It has moved twice since introduction,
        // which puts it outside what this page format is for, and the comparison to the
        // neighbours carries the point without dating the card.
        lead: true,
        h: 'Budget for the highest VAT in the Gulf',
        p: 'It lands on almost everything and it runs to several times what the UAE or Oman charge, so a menu or shelf figure is not what you will end up paying. Arriving straight from Qatar, where there is none at all, the jump is jarring.',
        href: '/saudi-arabia/cash-or-card',
        linkLabel: 'What VAT does to prices',
      },
      {
        h: 'The tax comes back, but only if you ask as you pay',
        p: 'A refund on goods carried home has run since 2025, and it begins at the counter rather than at departures: the form is raised against your passport while the sale is happening. Clear the minimum inside one approved shop, because spending spread over several will not count.',
        href: '/saudi-arabia/vat-refund',
        linkLabel: 'Claiming the refund',
      },
      {
        h: 'Cards work almost everywhere, metro gates included',
        p: 'Riyadh, Jeddah and the main cities are comfortably card-first, phone wallets included, and machines are easy to find. A small float covers the souks, the small vendors and tips.',
        href: '/saudi-arabia/cash-or-card',
        linkLabel: 'Cards, cash and ATMs',
      },
      {
        h: 'Say riyals when a screen offers dollars',
        p: 'The riyal is fixed to the dollar and will not budge while you are there, so the conversion on offer is margin for the machine and nothing at all for you.',
        href: '/saudi-arabia/cash-or-card',
        linkLabel: 'Declining the dollar conversion',
      },
      {
        h: 'The Riyadh Metro undercuts a booked car heavily',
        p: 'A ticket costs about a dollar against many times that for the same trip by app, and a line runs from the main airport into the city. It is the largest single saving available to you here.',
        href: '/saudi-arabia/taxis-and-apps',
        linkLabel: 'The metro and the airport run',
      },
      {
        h: 'The unlicensed street taxi is not worth the saving',
        p: 'Running one is against the law and the fine falls on the driver, but the exposure falls on you: no record of the journey and nobody to complain to. The apps and the official ranks are licensed, and priced low enough that the risk buys you nothing.',
        href: '/saudi-arabia/taxis-and-apps',
        linkLabel: 'Licensed cars, and the apps',
      },
      {
        h: 'Two things on the bill, and only one is service',
        p: 'The tax is the government taking its share, and a service charge is the property taking its own. Where the service charge appears you are finished, and where it does not, around 10 percent in a sit-down place is generous.',
        href: '/saudi-arabia/tipping',
        linkLabel: 'Reading a Saudi bill',
      },
      {
        h: 'Ten riyals, not one note',
        p: 'A riyal is worth a small fraction of what a unit of the neighbouring currencies is worth, so the gesture that lands as generous one border away lands as nothing here. Tip in cash, and scale it to the money actually in your hand.',
        href: '/saudi-arabia/tipping',
        linkLabel: 'What to tip in Saudi Arabia',
      },
    ],
  },
  kuwait: {
    title: 'Kuwait money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in Kuwait: the rate really moves here, no VAT, install Careem, agree the fare first, and read the three decimals.',
    h1: 'Kuwait money rules',
    blurb: 'The one Gulf currency that is not pegged, so here the rate genuinely moves.',
    standfirst:
      'Eight things worth remembering while you are there, each linking to the fuller explanation.',
    checked: 'August 2026',
    rules: [
      {
        // The one card in the series whose lead contradicts its neighbours. Five Gulf
        // cards say the rate cannot move. This one has to say the opposite, and say it
        // first, because the habit a traveler picks up next door is the error here.
        lead: true,
        h: 'Here, unlike next door, the rate actually moves',
        p: 'The other five all tie their money to the dollar. Kuwait tracks a basket of currencies it keeps private instead, so a figure carried over from a previous Gulf trip will be wrong. Look it up fresh before you go.',
        href: '/kuwait/cash-or-card',
        linkLabel: 'The dinar, and the rate',
      },
      {
        h: 'Three decimals, and the strongest currency unit anywhere',
        p: 'The dinar divides into a thousand parts, so prices carry three decimals and a modest-looking number is nothing of the kind. Because the unit is worth more than any other currency on earth, misreading one of those decimals costs more here than it would elsewhere.',
        href: '/kuwait/cash-or-card',
        linkLabel: 'Reading dinar prices',
      },
      {
        h: 'No VAT, so the shelf price is final',
        p: 'Kuwait never adopted it, which puts it alongside Qatar and against the rest of the region. Where a percentage does appear, the business set it as a service charge and no government is taking a cut.',
        href: '/kuwait/cash-or-card',
        linkLabel: 'What things actually cost',
      },
      {
        h: 'Install Careem before you land, and do not count on Uber',
        p: 'Careem operates here properly, while Uber shows up as active in some sources and absent in others, which is not something to discover at the kerb. Local apps are worth having as a backup.',
        href: '/kuwait/taxis-and-apps',
        linkLabel: 'Which apps work in Kuwait',
      },
      {
        h: 'Have an arrival plan that is not an app',
        p: 'Reports say the apps are not permitted to pick up at the international airport at all, which leaves the official rank or the bus. Work that out before you are outside with your bags.',
        href: '/kuwait/taxis-and-apps',
        linkLabel: 'Getting out of the airport',
      },
      {
        h: 'Agree the fare before the door closes',
        p: 'Street taxis have meters and frequently do not use them, so the number matters more than the machine. Settle it out loud, in dinars, before the car is moving.',
        href: '/kuwait/taxis-and-apps',
        linkLabel: 'Street taxis and fares',
      },
      {
        h: 'The visa is bought at the border, and big cash gets declared',
        p: 'A tourist visa on arrival costs a modest fee and covers a stay of some months. Separately, carrying more than a set amount of cash into the country has to be declared at the border. Neither is difficult, both are easier known in advance.',
        href: '/kuwait/visa',
        linkLabel: 'The visa, and the cash rule',
      },
      {
        h: 'Tip in coins, not notes',
        p: 'Because a single note here is worth more than it is anywhere else, handing one over overshoots what the gesture means, and the coins are the right size. Check the bill first, since a service charge is often sitting there already.',
        href: '/kuwait/tipping',
        linkLabel: 'Tipping in Kuwait',
      },
    ],
  },
};

export function rulesFor(slug) {
  return moneyRules[slug] || null;
}
