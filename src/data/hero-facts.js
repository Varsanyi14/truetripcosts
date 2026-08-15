// The gut-punch: one surprising, true, sourced fact per country, in the hybrid frame.
//
// WHY THIS FILE EXISTS: the hero fact is the first thing a traveler reads on a country
// page, so it is the most visible place on the site to be wrong. It lives here, in one
// map, rather than as a field on each country file, for two reasons. First, `hero` is
// already taken on every country object: it holds the guide's hero illustration
// (hero.img, hero.alt, hero.h), so a second meaning for the same key would be a trap
// for the next editor. Second, these facts are curated as a SET: the door teaser draws
// from the same pool, and the shape accents only read well when you can see them beside
// each other. One file, one read, one place to audit.
//
// THE FRAME. Every fact renders in the same skeleton, so all 59 countries look like one
// product rather than 59 one-offs:
//     setup   the assumption the traveler is carrying (what they think they know)
//     fact    the surprise, stated plainly, with the specific number or mechanism
//     escape  what to actually do about it
// Plus the checked date, which is read from the country's own `checked` field so it can
// never drift from the guide it sits on. A fact re-verified later than its guide carries
// its own `checked` override.
//
// THE SHAPE ACCENT is optional and deliberately rare. `shape` names the fact's form for
// the record; the accent only RENDERS when the fact also carries `accent` data. That
// separation is what lets a hybrid fact (Netherlands is scale plus staleness, Mexico is
// a split) be honestly labelled without being forced into a frame that fights it. Never
// add an accent to make a row look busier.
//
// ABSENCE IS NOT ZERO, applied here: a country with no strong fact is simply not in this
// map. It gets NO gut-punch and opens straight into the breadth reveal and calculator.
// That is the designed graceful degrade, not a gap to be filled. Do not invent a fact to
// give a country a hero, and do not promote a weak one to fill the frame.
//
// doorPool gates the phase-1 rolling teaser on the front door. It is deliberately
// narrower than this map: a fact on the door is the most public claim the site makes, so
// only rock-solid, slow-moving facts belong there. Anything volatile stays out even when
// it is a fine fact on its own page. Argentina is the standing example.
//
// EDITING RULES
//   1. Every figure here traces to a field or sourced line in that country's own guide.
//      If the guide and this file ever disagree, the guide is right and this is a bug:
//      the traveler sees both on the same page.
//   2. Superlatives stay softened ("among the most cashless"), because that is what the
//      sourcing supports.
//   3. A fact with an expiry or a freshness risk carries a `flag`. The flag is not
//      decoration: check-fact-staleness reads them, and a flagged fact is a re-verify
//      task, not a finished one.
//      FLAG KINDS. `volatile`, `seasonal` and `freshness` are shown to the READER by
//      GutPunch, because they change what the traveler should do with the fact. Every
//      other kind is a desk note and stays off the page: `date-conflict`, `novelty`,
//      `watch`, and two added in the August 2026 fill, `sourcing` (the claim is dated and
//      checked but has no primary source attached) and `verify` (the whole fact rests on
//      one detail that has moved before and needs a confirmation pass). Adding a kind is
//      safe by construction: GutPunch reads an allowlist, so an unknown kind is silently
//      a desk note rather than something new appearing on the page.
//   4. Never add a figure that is not already published and dated elsewhere on the site.

// The four shapes a fact can take. `null` (or a shape with no accent data) renders the
// plain frame, which is the default and the most common outcome.
export const SHAPES = ['dead-advice', 'price-isnt-price', 'money-you-shouldnt-pay', 'counterintuition'];

export const heroFacts = {

  // ---------------------------------------------------------------------------
  // TOP 10. Rock-solid unless flagged. Wording locked by the desk.
  // ---------------------------------------------------------------------------

  colombia: {
    shape: 'money-you-shouldnt-pay',
    setup: 'You expect the room rate to be the room rate.',
    fact: 'Hotels charge 19% IVA, but as a foreign tourist you are exempt, and about half try to add it anyway.',
    escape: 'Show your passport with the tourist stamp at check-in, and check the bill.',
    accent: { figure: '19%', label: 'IVA on your room', note: 'you are exempt, so the honest figure here is nothing' },
    doorPool: true,
  },

  japan: {
    shape: 'counterintuition',
    setup: 'You have heard Japan is the future, so you plan to tap your way around it.',
    fact: "The world's most high-tech country is still cash-first, and most bank ATMs refuse US cards. The 7-Eleven is where you get yen.",
    escape: 'Use a 7-Eleven or Japan Post ATM, decline pay-in-dollars, and never tip.',
    accent: null,
    doorPool: true,
  },

  // VOLATILE. Kept out of the door pool on purpose: the peso regime has moved twice in
  // two years and a stale front-door fact is the most visible way to be wrong.
  argentina: {
    shape: 'dead-advice',
    setup: 'Every guidebook and forum thread tells you to bring US dollars in cash.',
    fact: 'The blue-dollar advice every guidebook repeats is dead. Your card now gets a fair official rate.',
    escape: 'Just pay by card, and skip the cash-exchange back-alleys.',
    accent: {
      old: 'Bring dollars and change them on the street at the blue-dollar rate',
      now: 'that gap is gone, and your card gets the fair rate',
    },
    flag: { kind: 'volatile', note: 'Re-verify the week of launch and show the date. The peso regime has moved before.' },
    doorPool: false,
  },

  // HYBRID: scale plus staleness. Labelled price-isnt-price for the record, but it
  // carries no accent, because the surprise is two charges landing at once rather than
  // one menu-to-bill transformation. Forcing the accent would misrepresent the fact.
  netherlands: {
    shape: 'price-isnt-price',
    setup: 'You saved a good Amsterdam room rate and assume it still holds.',
    fact: "Amsterdam's 12.5% tourist tax is Europe's highest, and on 1 January 2026 hotel VAT jumped from 9% to 21%. Both land at checkout, so a price you saved last year can be badly wrong.",
    escape: 'Re-price anything you saved before this year, and assume both land at checkout rather than in the headline rate.',
    accent: null,
    doorPool: false,
  },

  czechia: {
    shape: 'money-you-shouldnt-pay',
    setup: 'You assume a bad exchange rate is your own fault for not shopping around.',
    fact: 'Czech law gives you three hours to cancel a bad currency exchange and get your money back, on amounts up to 1,000 EUR. Keep the receipt. If they did not give you one listing this right, you have six months.',
    escape: 'Take the receipt, and if the rate was a stitch-up, go straight back inside within three hours.',
    accent: { figure: '3 hours', label: 'to undo a bad exchange', note: 'on amounts up to 1,000 EUR, and six months if they gave you no receipt' },
    doorPool: true,
  },

  greece: {
    shape: 'price-isnt-price',
    setup: 'You booked the apartment because it was cheaper than the hotel.',
    fact: "Greece's climate fee charges an Airbnb-style rental about 8 EUR a night against 2 for a budget hotel. The cheap option is the taxed option, and booking sites rarely show it.",
    escape: 'Add the nightly fee to both options before you compare them, and expect to pay it at the property.',
    accent: {
      from: '2 EUR a night', fromNote: 'a 1 or 2-star hotel',
      to: '8 EUR a night', toNote: 'the same night in a registered short-term rental',
    },
    doorPool: true,
  },

  'el-salvador': {
    shape: 'counterintuition',
    setup: 'You read that El Salvador made Bitcoin legal tender and assume you need a wallet.',
    fact: 'The country that made Bitcoin legal tender? You can ignore Bitcoin entirely and just spend US dollars, the official currency.',
    escape: 'Spend dollars exactly as you would at home. There is nothing to exchange and no crypto to set up.',
    accent: null,
    doorPool: true,
  },

  cambodia: {
    shape: 'counterintuition',
    setup: 'You expect to need riel, and to get it from an ATM like anywhere else.',
    fact: "The US dollar is Cambodia's everyday currency, and ATMs hand you crisp $100 bills nobody can break.",
    escape: 'Ask for small notes, and expect change in riel.',
    accent: null,
    doorPool: true,
  },

  turkey: {
    shape: 'dead-advice',
    setup: 'You go looking for the Turkish e-visa everyone says you need.',
    fact: 'US citizens need no visa and no e-visa for Turkey, scrapped in 2023. Every site still selling a Turkish e-visa is selling something that does not exist.',
    escape: 'Buy nothing. Fly with your ordinary passport.',
    caveat: 'Ordinary passports.',
    accent: {
      old: 'Apply and pay for a Turkish e-visa before you fly',
      now: 'scrapped in 2023, so there is nothing to buy',
    },
    doorPool: true,
  },

  ecuador: {
    shape: 'counterintuition',
    setup: 'You expect the usual exchange-rate homework.',
    fact: 'Ecuador uses the US dollar, so there is nothing to exchange, until the Galapagos, where you pay $220 in cash at the gate and there are no ATMs on the islands.',
    escape: 'If the Galapagos are on the plan, carry the $220 a person in cash from the mainland.',
    accent: null,
    doorPool: false,
  },

  // ---------------------------------------------------------------------------
  // PASS 2. Resolved picks. Shapes assigned only where the desk named one, so most
  // of these render the plain frame by design.
  // ---------------------------------------------------------------------------

  italy: {
    shape: 'price-isnt-price',
    setup: 'You read the menu prices and add them up.',
    fact: 'Most Italian restaurants add a coperto, a per-person cover charge of commonly 2 to 3 euros, before you have ordered anything. It is normal and not a scam, and it is separate from any tip.',
    escape: 'Expect it on the bill, and do not read it as a service charge you should match with a tip.',
    caveat: 'Banned in Rome and the wider Lazio region, where you may instead be offered a bread charge you can decline.',
    accent: {
      from: 'on the menu', fromNote: 'nothing, the cover charge is not printed with the dishes',
      to: '2 to 3 euros a person', toNote: 'on the bill, before you ordered',
    },
    doorPool: true,
  },

  'united-kingdom': {
    shape: null,
    setup: 'You assume a British passport queue is the only thing standing between you and London.',
    fact: 'US citizens now need an approved UK ETA before boarding, at 20 pounds a person, and it applies to a layover through a UK airport even if you never leave the terminal.',
    escape: 'Apply on GOV.UK or in the official UK ETA app before you fly, and count connections through the UK as trips that need one.',
    accent: null,
    flag: { kind: 'date-conflict', note: 'The brief dated the 20 pound fee to Feb 2026; the guide sources it to 8 April 2026, up from 16 pounds. Wording here follows the guide. Confirm with MAIN.' },
    doorPool: false,
  },

  mexico: {
    shape: 'counterintuition',
    setup: 'You glance at a price tag, see a dollar sign, and read it as dollars.',
    fact: 'In Mexico the "$" sign means pesos, not dollars, and at the till choosing to pay in dollars quietly adds 5 to 10%.',
    escape: 'Read every "$" as pesos, and pick pesos on the terminal every time.',
    accent: null,
    doorPool: false,
  },

  spain: {
    shape: null,
    setup: 'You assume a VAT refund is only worth it on a big purchase.',
    fact: "Spain's 21% IVA refund for non-EU visitors has no minimum spend, so any purchase can qualify, however small.",
    escape: 'Ask for the tax-free form at the till, keep the goods unused, and validate at a DIVA kiosk on the way out.',
    accent: null,
    doorPool: false,
  },

  portugal: {
    shape: null,
    setup: 'You plan to hop on Lisbon\'s Tram 28 and pay the driver like a bus.',
    fact: 'Paying the driver onboard is the most expensive way to ride, at about 3.30 euros, against 1.72 with zapping credit on a 0.50-euro navegante card.',
    escape: 'Buy a navegante occasional card from any metro machine and load zapping credit before you ride.',
    accent: null,
    doorPool: false,
  },

  taiwan: {
    shape: null,
    setup: 'You expect to load a transit card with your phone or your card, as you would at home.',
    fact: 'The EasyCard that runs the MRT, buses and local trains is topped up with cash, card top-ups are not reliable for visitors, and it does not work on the High Speed Rail at all.',
    escape: 'Buy one for about NT$100 plus load at a convenience store, top it up with cash, and book High Speed Rail separately.',
    accent: null,
    doorPool: false,
  },

  philippines: {
    shape: null,
    setup: 'You assume Southeast Asia does not do tourist VAT refunds.',
    fact: 'The Philippines now refunds its 12% VAT to foreign tourists on goods over 3,000 pesos from accredited stores, taken out of the country within 60 days.',
    escape: 'Shop at accredited stores, keep the receipts and the goods unused, and claim on departure.',
    accent: null,
    flag: { kind: 'novelty', note: 'Leads on being new. Swap this fact once the scheme is no longer novel.' },
    doorPool: false,
  },

  // SWAP DUE 1 Oct 2026. The ETA is the durable fact and holds until then. On 1 October
  // 2026 Australia's card-surcharge ban BEGINS (the keyFact's `effective` date is a start,
  // not an expiry), which is a stronger hero: a fee disappearing nationwide is a bigger
  // surprise to a US traveler than one more entry authorization. Swap the fact then, keep
  // the ETA in the breadth reveal where it already surfaces as an entry charge.
  australia: {
    shape: null,
    setup: 'You expect a visa-free country to mean nothing to file.',
    fact: 'US visitors need an Australian ETA before flying, it carries an AUD 20 service fee, and it can only be applied for inside the official Australian ETA app.',
    escape: 'Use the official app only. Anything charging you more on a website is a reseller.',
    accent: null,
    flag: { kind: 'watch', note: 'Swap to the card-surcharge ban after 1 Oct 2026, when the ban takes effect.' },
    doorPool: false,
  },

  // ---------------------------------------------------------------------------
  // WEAK 6. Net-new facts, each with a supporting spoke page already built and
  // verified. The gut-punch links through to the spoke as the full story.
  // ---------------------------------------------------------------------------

  hungary: {
    shape: 'dead-advice',
    setup: 'You plan to price-check Uber against Bolt against a taxi, the way you would at home.',
    fact: 'Uber is back in Budapest, but it dispatches Fotaxi cars, and every licensed taxi runs one tariff set by law. App-shopping saves you nothing.',
    escape: 'Use whichever app you already have, and at the airport take only the official Fotaxi stand.',
    accent: {
      old: 'Compare the apps and take whichever is cheapest',
      now: 'one regulated tariff, so there is nothing to compare',
    },
    spoke: { href: '/hungary/taxis-and-apps', label: 'How taxis and apps actually work in Budapest' },
    doorPool: false,
  },

  // REFRAMED. The honest version is "compare", not "one uniform rate": the meter is
  // universal but the tariff behind it is set company by company.
  denmark: {
    shape: 'dead-advice',
    setup: 'You assume ride-hailing undercuts the local taxi, as it usually does.',
    fact: 'Danish law makes every for-hire car run a meter, which pushed Uber out in 2017 and shaped what came back in 2025. Tariffs are still set company by company, so the meter does not mean one price.',
    escape: 'Compare companies rather than assuming a fixed rate, and in Copenhagen check the Metro first.',
    accent: {
      old: 'Open the ride app to beat the taxi price',
      now: 'every car is metered, so compare tariffs instead of platforms',
    },
    spoke: { href: '/denmark/taxis-and-apps', label: 'Taxis, apps and the meter law in Denmark' },
    doorPool: false,
  },

  vietnam: {
    shape: 'dead-advice',
    setup: 'You install Grab because that is the one everybody names.',
    fact: 'Xanh SM overtook Grab in 2025 to become the largest ride app in Vietnam, and its fares often come in lower.',
    escape: 'Install both and compare in-app before each ride, and ignore the fake-taxi touts at the Hanoi and Ho Chi Minh City airports.',
    accent: {
      old: 'Just get Grab, it is the one that works here',
      now: 'Xanh SM took the lead in 2025, so check both',
    },
    flag: { kind: 'freshness', note: 'Market-share fact. Re-verify each season.' },
    spoke: { href: '/vietnam/taxis-and-apps', label: 'Ride apps and airport taxis in Vietnam' },
    doorPool: false,
  },

  laos: {
    shape: null,
    setup: 'You budget for the Laos-China railway as just another train fare.',
    fact: 'Getting a seat is harder than the ride: there is no working online ticket site for foreigners, and trains sell out within minutes of release.',
    escape: 'Plan the ticket before the trip, not the train, and use an agent or buy in person the moment seats release.',
    accent: null,
    flag: { kind: 'freshness', note: 'Ticketing practice moves. Re-verify each season.' },
    spoke: { href: '/laos/rail', label: 'How to actually get a Laos-China railway ticket' },
    doorPool: false,
  },

  // CAVEAT IS LOAD-BEARING. Winter only, and only if the rental actually has studs.
  // Most rentals are studless and exempt, so the fact must not read as a blanket charge.
  norway: {
    shape: null,
    setup: 'You budget for tolls and fuel and assume the tyres are the rental company\'s problem.',
    fact: 'Some Norwegian cities charge a winter permit for studded tyres, 35 NOK a day and 750 NOK if you skip it. Whether it costs you anything comes down to one question at the counter, because studless tyres are exempt and most rentals have them.',
    escape: 'Ask which tyres your car has. If they are studless, this is nothing to you.',
    accent: null,
    flag: { kind: 'seasonal', note: 'Winter only, and conditional on the rental having studs. Never render as a flat charge.' },
    spoke: { href: '/norway/driving-and-tolls', label: 'Driving, tolls and winter rules in Norway' },
    doorPool: false,
  },

  // SEASONAL. The Grossglockner closes roughly Nov to Apr; the winter reading of this
  // fact leads with the year-round section tolls instead. No Brenner figure on screen.
  austria: {
    shape: null,
    setup: 'You buy the vignette and assume the motorways are paid for.',
    fact: 'Austrian tolls come in two layers. The 12.80 EUR ten-day vignette covers the motorway network, then a handful of sections bill you again at a barrier, and the Grossglockner High Alpine Road is 46.50 EUR for a car for the day, which the vignette does not touch.',
    escape: 'Buy the vignette, then price the specific tunnels and mountain roads on your route separately.',
    accent: null,
    flag: { kind: 'seasonal', note: 'Grossglockner closes roughly Nov to Apr. Winter reading leads with the year-round section tolls.' },
    spoke: { href: '/austria/driving-and-tolls', label: 'Vignette, tunnels and mountain tolls in Austria' },
    doorPool: false,
  },

  // ---------------------------------------------------------------------------
  // Two more resolved picks.
  // ---------------------------------------------------------------------------

  sweden: {
    shape: 'counterintuition',
    setup: 'You plan to land with some cash, the way you would anywhere else.',
    fact: 'Sweden is among the most cashless countries anywhere, and plenty of cafes, shops and museums take no cash at all. Changing dollars into kronor is the mistake, not the preparation.',
    escape: 'Bring a card and skip the exchange counter entirely.',
    accent: null,
    doorPool: false,
  },

  switzerland: {
    shape: null,
    setup: 'You assume the Swiss Travel Pass is the obvious buy.',
    fact: 'The decision is the Half Fare Card against the pass. At about CHF 150 for a month the Half Fare Card takes 50 percent off nearly everything, and the pass only wins if you are moving most days.',
    escape: 'Count your travel days first. One base with a couple of big day trips favours the Half Fare Card.',
    accent: null,
    doorPool: false,
  },

  // ---------------------------------------------------------------------------
  // PASS 3. The fill, from the desk's FINDINGS document of 14 August 2026.
  //
  // Every entry below takes its fact from that document's row for that country, and
  // nothing here was sourced independently. Where the document flagged a caution, the
  // caution won: a desk-estimate percentage is reworded to the behavior behind it, a
  // superlative is softened to what the sourcing carries, and a fact resting on an
  // unconfirmed detail ships with a flag rather than a confident face.
  //
  // NO NEW DOOR FACTS. Every entry here is doorPool: false. A door fact is the most
  // public claim the site makes and the pool stays at the eight the desk signed off by
  // name. Promoting one of these is an editorial decision for MAIN, not a side effect of
  // a data fill.
  //
  // SHAPES ARE ASSIGNED SPARINGLY, which is why most of these are null. A shape is a
  // claim about the fact's form, and the accent only renders when the shape has a visual
  // one AND the data supports both halves of it. Several facts below are labelled with a
  // shape and carry no accent, which is the Netherlands pattern: honest about the form,
  // unwilling to invent the second half.
  // ---------------------------------------------------------------------------

  // ----- Western Europe -----

  france: {
    shape: 'counterintuition',
    setup: 'You brace yourself to be quoted a price for the ride into Paris.',
    fact: 'The fare from Charles de Gaulle into Paris is fixed by government decree, bags and tolls included, at any hour. There is nothing to negotiate, so anyone approaching you in the arrivals hall with a price is by definition not a licensed taxi.',
    escape: 'Walk past everyone who offers you a ride and join the official rank outside. The number is set before you get in.',
    accent: null,
    doorPool: false,
  },

  ireland: {
    shape: null,
    setup: 'You assume a toll road has a booth, or at least a moment where somebody asks you for money.',
    fact: "Dublin's M50 has neither. A camera reads your plate and you have until 8pm the next day to pay it yourself online. Miss that and eFlow adds a late fee of about 4 euros per trip, which the rental company passes to you later.",
    escape: 'Pay on the eFlow site the same evening you drive it, rather than assuming the rental desk handles it.',
    accent: null,
    doorPool: false,
  },

  germany: {
    shape: 'counterintuition',
    // THE PERCENTAGE IS DELIBERATELY GONE. The FINDINGS row carries a 30 to 40% figure
    // that sits in our own verdict prose rather than in a sourced field, and the document
    // says so and offers the alternative: word the behavior without the number. It costs
    // this line almost nothing and it keeps an unsourced statistic off the page.
    setup: "You expect Europe's efficiency capital to be the easiest place in the region to tap a card.",
    fact: 'Germany is one of its most cash-loving countries instead. Bakeries, market stalls, small restaurants and traditional shops often prefer cash or take nothing else, and a counter with a card reader on it can still be cash-only under 20 or 30 euros.',
    escape: 'Carry 50 to 100 euros, ask before you order, and pull it from a Sparkasse or Cash Group machine rather than a standalone one.',
    accent: null,
    doorPool: false,
  },

  iceland: {
    shape: null,
    // FIGURES RESTORED, AND THE DOLLAR IS THE GUIDE'S OWN. They were held back on the
    // first pass pending confirmation. They are confirmed: the per-km margin, the loop
    // distance, the total and the conversion all sit in iceland.js, in the road-tax `text`
    // and in `traps`.
    //
    // THE BRACKET IS NOT MINE TO CALCULATE. A US reader cannot price 13,200 ISK, so the
    // figure needs a dollar beside it or it is decoration. But converting it here would
    // mean picking an exchange rate, and a rate picked in this file drifts away from the
    // guide on the same page. So the bracket quotes the conversion the guide already
    // publishes, which is 105 dollars. Note for the next editor: if the guide's figure is
    // ever restated, restate it here too. The two must move together.
    setup: 'You price the rental car, the fuel and the room, and assume the road itself is free.',
    fact: 'Iceland is among the most cashless countries anywhere, and since 1 January 2026 it charges a road tax by the kilometre on every vehicle. Rental firms bill it on with a margin of their own, often around 8.8 ISK per km, so a Ring Road loop adds about 13,200 ISK (about $105) to your card after you drop the car off, and it appeared in no quote you were shown.',
    escape: 'Ask the rental company how it bills the road tax and what its own per-kilometre margin is, before you sign.',
    accent: null,
    flag: { kind: 'novelty', note: 'Newest fact in the set, effective 1 Jan 2026. The figures trace to iceland.js, whose source for them is a rental company blog rather than an official Icelandic one, and the government rate is about 6.95 ISK per km against the roughly 8.8 ISK rental firms bill. Worth attaching an official source, and worth revisiting once the fact is no longer new.' },
    doorPool: false,
  },

  poland: {
    shape: 'counterintuition',
    // "COMMONLY READ AS" IS LOAD-BEARING. This is a behavioral norm, not a rule, and the
    // guide already words it that way. Stated as a certainty it would be wrong often
    // enough to matter.
    setup: 'You say thank you as you hand over the money, because that is what you do at home.',
    fact: 'In Poland that is commonly read as "keep the change". The politeness reflex is the tip, and it lands before you have decided to leave one.',
    escape: 'Say the total you want to pay instead, and save the thank-you until after your change is back in your hand.',
    accent: null,
    doorPool: false,
  },

  croatia: {
    // Labelled for the record, no accent: the fact is that the menu number is a rate
    // rather than a price, and there is no second figure to put beside it.
    shape: 'price-isnt-price',
    setup: 'You read the price beside the fish and take it for the price of the dish.',
    fact: 'Fish and shellfish on the Croatian coast are priced by the kilogram, not by the plate, so the number on the menu is a rate rather than a total, and what arrives decides what you pay.',
    escape: 'Ask for the weight and the total before you order it, not after it reaches the table.',
    accent: null,
    doorPool: false,
  },

  // ----- The Gulf -----

  uae: {
    shape: 'counterintuition',
    setup: 'You do the prepared thing and buy some dirhams before you fly.',
    fact: 'That is the expensive move. The dirham is thinly traded outside the UAE, so US rates run roughly 4 to 8% worse, and the exchange desks at the airport and in hotels are 4 to 6% worse than the ones in the malls. The dirham has been fixed to the dollar since 1997, so there is nothing to time.',
    escape: 'Bring dollars or just your card, and if you want cash use an ATM or an in-mall exchange house.',
    accent: null,
    doorPool: false,
  },

  qatar: {
    shape: null,
    setup: 'You assume a Gulf state means a tax you have not budgeted for, the way Saudi Arabia does at 15%.',
    fact: 'Qatar has no VAT, no sales tax and no tourist or hotel tax at all, so the price on the tag is the price you pay. The metro across Doha is about QR 2, roughly 55 cents.',
    escape: 'Nothing to avoid here. This is the rare country where the arithmetic is just the shelf price.',
    accent: null,
    doorPool: false,
  },

  'saudi-arabia': {
    shape: 'money-you-shouldnt-pay',
    setup: 'You expect to sort out a tax refund at the airport on your way home, as you would in Europe.',
    fact: 'Saudi Arabia charges 15% VAT, three times the UAE and Oman, and it is one of only two Gulf states where a visitor can claim it back. The claim starts at the till, not at departures, so leaving it until the airport means losing it.',
    escape: 'Ask the retailer for the refund form with your passport at the moment you buy. No form, no refund, however large the receipt.',
    accent: { figure: '15%', label: 'VAT on what you buy', note: 'reclaimable, but only if you ask for the form at the till rather than at the airport' },
    doorPool: false,
  },

  oman: {
    shape: null,
    setup: 'You read that Oman is visa-free for Americans and stop reading there.',
    fact: 'The 14-day exemption is conditional in a way almost nobody checks: you need a confirmed hotel booking, health insurance and a return ticket, and those 14 days cannot be extended or turned into anything else.',
    escape: 'Carry the booking, the policy and the onward ticket. For anything longer, apply for the eVisa on the ROP portal before you fly.',
    caveat: 'Fourteen days or fewer. A longer stay is a different application.',
    accent: null,
    doorPool: false,
  },

  bahrain: {
    shape: 'price-isnt-price',
    setup: 'You book the room at the rate you were quoted.',
    fact: 'Bahrain adds more to a hotel bill than any Gulf state except Saudi Arabia, and it arrives in four separate parts: 10% VAT, a 5% government levy, a 10% property service charge and a flat BD 3 per room per night. Expect roughly a quarter on top of the rate.',
    escape: 'Ask whether the rate is all-in when you book, because it frequently is not.',
    accent: {
      from: 'the quoted rate', fromNote: 'what the booking page showed you',
      to: 'about 25% more', toNote: 'VAT, government levy, service charge and BD 3 a night, added at the desk',
    },
    doorPool: false,
  },

  kuwait: {
    shape: 'counterintuition',
    // SUPERLATIVE SOFTENED. The FINDINGS document flags "the highest-valued currency unit
    // in the world" as our own assertion. "One of the highest-valued" is what the sourcing
    // carries and the line loses nothing.
    setup: 'You carry over the exchange rate that served you fine in Dubai or Doha.',
    fact: 'Every one of Kuwait\'s neighbours fixes its currency to the US dollar. Kuwait pegs the dinar to an undisclosed basket instead, so this is the one Gulf trip where the rate genuinely moves. It is also one of the highest-valued currency units anywhere, and it splits into 1,000 fils, so a price written 2.750 is about nine dollars.',
    escape: 'Check the rate before you go rather than reusing a number from another Gulf state, and read the three decimals carefully.',
    accent: null,
    doorPool: false,
  },

  // ----- Asia -----

  'south-korea': {
    shape: null,
    setup: 'Your card works everywhere, so you assume the ATM is a formality.',
    fact: 'Korean ATMs take four-digit PINs only. A five or six digit PIN fails every time, and a few failed attempts across different machines can trip your own bank\'s fraud lock while you are standing there.',
    escape: 'Set a four-digit PIN before you fly, and use a machine marked Global ATM or Global Service rather than a plain domestic one.',
    accent: null,
    doorPool: false,
  },

  china: {
    shape: 'dead-advice',
    setup: 'Everything you have read says mobile payments in China are closed to foreigners without a Chinese bank account.',
    fact: 'That wall came down. Alipay and WeChat Pay now let you link a foreign Visa or Mastercard with a passport and a face scan, no Chinese bank account, which is the change that makes an independent trip workable.',
    escape: 'Set up both apps before you fly. Verification takes time, and one can work where the other fails.',
    accent: {
      old: 'You need a Chinese bank account, so bring cash and expect to struggle',
      now: 'a foreign Visa or Mastercard links with a passport and a face scan',
    },
    doorPool: false,
  },

  'hong-kong': {
    shape: null,
    setup: 'You plan to claim the tax back on your shopping at the airport.',
    fact: 'There is nothing to claim. Hong Kong is a free port with no sales tax or VAT at all, so the price on the tag is the price. The one lodging cost is a 3% Hotel Accommodation Tax, reinstated on 1 January 2025, which some hotels collect separately at check-in.',
    escape: 'Read the folio at check-in for the 3%, and do not go looking for a refund desk that does not exist.',
    accent: null,
    doorPool: false,
  },

  singapore: {
    shape: 'price-isnt-price',
    setup: 'You read a Singapore menu price and add up what dinner will cost.',
    fact: 'Two plus signs after a price mean 19% is still coming: 9% GST and a 10% service charge, added at the end. S$10++ is about S$12. A price marked "nett" already includes everything.',
    escape: 'Learn the two symbols before you order. Nett is the real price, ++ is not.',
    accent: {
      from: 'S$10++', fromNote: 'the number printed on the menu',
      to: 'about S$12', toNote: 'after 9% GST and a 10% service charge',
    },
    doorPool: false,
  },

  thailand: {
    shape: null,
    setup: 'You plan to pull cash as you go, a bit at a time, the way you would at home.',
    fact: 'Thai ATMs charge a flat fee of about 220 baht per foreign-card withdrawal regardless of the amount, so four small withdrawals cost four times what one large one does. AEON machines are the cheapest at about 150.',
    escape: 'Take out a large sum at once from a bank ATM, and take your card back straight away, because Thai machines dispense the cash first and return the card second.',
    accent: null,
    doorPool: false,
  },

  indonesia: {
    shape: 'price-isnt-price',
    setup: "You search for Bali's tourist levy and pay on the site at the top of the results.",
    fact: 'The levy is IDR 150,000 on the official site, and the lookalike sites charge two to three times that for the same thing, existing mainly to harvest card details. The only official domain ends in .go.id.',
    escape: 'Pay on the .go.id site or at the counter on arrival, and ignore everything else that ranks above it.',
    accent: {
      from: 'IDR 150,000', fromNote: 'the official levy, on the .go.id site',
      to: 'two to three times that', toNote: 'what the lookalike sites charge for the identical filing',
    },
    flag: { kind: 'sourcing', note: 'The guide states this levy twice, as IDR 150,000 in traps and as about 10 dollars in the visa spoke. They agree at current rates, but the guide should state one and derive the other. Reconcile there, then re-check this line.' },
    doorPool: false,
  },

  india: {
    shape: 'dead-advice',
    // THE WEAKEST ROW IN THIS PASS, and shipped flagged rather than confidently. The
    // FINDINGS document rates it True md and asks for a confirmation pass, because the
    // tourist UPI route has opened and closed before and the whole hook rests on it being
    // available right now. It is in the same bucket as Czechia, Colombia and Turkey, which
    // the desk shipped on the same terms.
    setup: 'Everything you have read says UPI, the QR system the whole country runs on, is closed to foreign visitors.',
    fact: 'A visitor can now tap into it through a prepaid tourist UPI wallet loaded with an international card, so you no longer have to sit outside the system that most of India actually pays with.',
    escape: 'Set the wallet up before you fly, and still carry a card for hotels and cash for the street.',
    accent: {
      old: 'UPI is for residents, so plan on cash and a card and nothing else',
      now: 'a prepaid tourist wallet takes an international card',
    },
    flag: { kind: 'verify', note: 'Confirm the tourist UPI route is currently open before this stays up. It has changed repeatedly and the whole fact rests on present availability. If it has closed, drop this entry rather than reword it.' },
    doorPool: false,
  },

  'sri-lanka': {
    shape: 'money-you-shouldnt-pay',
    setup: 'You go to pay for the Sri Lankan ETA, because it has always cost money.',
    fact: 'It became free for US citizens on 25 May 2026 and it is still mandatory. The fee died, the requirement did not, and the lookalike sites are still charging for it.',
    escape: 'Apply on the official government portal before you fly, and confirm the fee shows as zero for your passport.',
    accent: { figure: 'free', label: 'the tourist ETA, since 25 May 2026', note: 'still mandatory, and still being sold by sites that rank above the real one' },
    doorPool: false,
  },

  // ----- Africa -----

  morocco: {
    shape: null,
    setup: 'You order some local currency before you fly, the way you would for anywhere else.',
    fact: 'You cannot. The dirham is a closed currency: it is not sold outside Morocco, and you cannot take more than 2,000 MAD out of the country, so the money only exists inside its own borders. Shops that quote you in euros instead are charging 5 to 15% for the privilege.',
    escape: 'Withdraw dirham from a bank ATM on arrival, pay in dirham every time, keep the exchange receipts, and convert what is left before you fly home.',
    accent: null,
    flag: { kind: 'sourcing', note: 'Both Morocco keyFacts entries carry source: null. The claim is dated and checked but has no primary source attached. Close it with Office des Changes or the central bank before this fact is promoted anywhere more public than the country page.' },
    doorPool: false,
  },

  egypt: {
    shape: 'counterintuition',
    // NO CASH PERCENTAGE. meter.cashPct 72 is a desk estimate and the guide's own
    // judgment field says so, so the fact is worded as the behavior rather than as a
    // statistic. The document is explicit about this one.
    setup: 'You bring a card and assume cash is the backup, as it is nearly everywhere now.',
    fact: 'Egypt inverts that. The constant cost is baksheesh, the small expected tips that run through the whole day, and no card can pay them. A pocket of 5, 10 and 20 pound notes is the single most useful thing you can carry.',
    escape: 'Pull pounds from a bank ATM and break them into small notes immediately, and treat the card as the backup for hotels and the largest bills.',
    accent: null,
    doorPool: false,
  },

  'south-africa': {
    shape: null,
    setup: 'You know the tipping rules: restaurants, bars, maybe a porter.',
    fact: 'South Africa tips people Americans have never tipped. The petrol attendant who fills your tank, checks your oil and cleans your windscreen expects R5 to R10, and the car guard who watched your parked car expects about R5. Fuel is full service and there is no self-serve option to opt into.',
    escape: 'Keep a pocket of small rand specifically for this. It is a few dollars a day and it is not optional in practice.',
    accent: null,
    doorPool: false,
  },

  namibia: {
    shape: 'dead-advice',
    setup: 'You read that Namibia is visa-free for Americans, which it was for years.',
    fact: 'It stopped on 1 April 2025. Entry now costs about N$1,600, roughly US$88 per person, and a great many guides and blog posts still say it is free.',
    escape: 'Apply on the official e-visa portal before you fly, or pay on arrival at main airports and border posts, and bring a printed approval if you applied online.',
    accent: {
      old: 'Namibia is visa-free for US passports, just turn up',
      now: 'about US$88 a person, required since 1 April 2025',
    },
    doorPool: false,
  },

  // ----- The Americas -----

  canada: {
    shape: 'price-isnt-price',
    setup: 'You expect Canada to work like home, because on this it nearly does.',
    fact: 'Nothing on a Canadian tag or menu is the real number. Sales tax of 5 to 15% depending on the province is added at the register, and a tip of 15 to 20% is expected on top, prompted at 18, 20 or 25% on the terminal. A listed 100 dollar dinner lands near 130.',
    escape: 'Budget above the sticker on everything, and tip on the pre-tax amount, which is what the local norm actually is.',
    accent: {
      from: '$100', fromNote: 'the price printed on the menu',
      to: 'near $130', toNote: 'after provincial sales tax at the register and a 15 to 20% tip',
    },
    doorPool: false,
  },

  brazil: {
    shape: 'counterintuition',
    setup: 'You picture Brazil as a cash-and-caution trip and plan the hard part for when you arrive.',
    fact: 'Brazil is more cashless than most of Europe, and you can tap a card at a beach bar. The hard part happens before you leave home: a US visitor needs an e-visa at about 81 dollars, airlines are fined for boarding you without one, and it can take up to ten working days.',
    escape: 'Sort the e-visa on the official VFS portal early, and bring one no-foreign-fee card for everything else. Pix runs the country but needs a Brazilian tax ID, so it is not for you.',
    accent: null,
    doorPool: false,
  },

  'costa-rica': {
    shape: 'money-you-shouldnt-pay',
    setup: 'The bill arrives with a blank tip line, so you fill it in.',
    fact: 'A 10% service charge is already on that bill by law, and some tourist-area places hand you a US-style receipt with an empty tip line hoping you add 18 to 20% on top of it. Separately, paying in the currency the price was not quoted in lets the merchant set the rate, which costs about 5 to 10%.',
    escape: 'You have already tipped. Pay colones for sodas, markets, taxis and buses, and dollars for hotels, tours and shuttles, matching whichever the price is quoted in.',
    accent: { figure: '10%', label: 'service charge already on the bill', note: 'so the blank tip line underneath it is asking you for the same thing twice' },
    doorPool: false,
  },

  'dominican-republic': {
    shape: 'price-isnt-price',
    setup: 'You read the menu, pick the RD$150 beer, and expect to pay RD$150.',
    fact: 'Where a Dominican menu says "impuestos no incluidos", 18% ITBIS and a 10% service charge are added at the end, roughly 28% on top. That beer rings up closer to RD$190.',
    escape: 'Look for that phrase on the menu and do the arithmetic before you order, and remember the service is already paid.',
    accent: {
      from: 'RD$150', fromNote: 'the price printed on the menu',
      to: 'about RD$190', toNote: 'after 18% ITBIS and a 10% service charge',
    },
    doorPool: false,
  },

  jamaica: {
    shape: null,
    setup: 'US dollars are taken everywhere in the tourist areas, so you use them and feel efficient about it.',
    fact: 'Every time you do, the vendor sets the exchange rate, and it is almost never in your favor. Paying in dollars quietly costs about 5 to 10%, and both currencies use the dollar sign, so a quoted number can mean two very different things.',
    escape: 'Pay in Jamaican dollars or by card, and confirm which currency a price is in before you agree to it.',
    accent: null,
    doorPool: false,
  },

  bahamas: {
    shape: 'counterintuition',
    setup: 'You bring US cash, which here is genuinely the local money.',
    fact: 'The Bahamian dollar is pegged one to one with the US dollar and the two circulate side by side, so paying cash in dollars costs you nothing at all. Yet some US banks still treat a Bahamas card purchase or ATM withdrawal as foreign and charge a fee on a transaction with no conversion in it.',
    escape: 'Spend US cash freely, choose Bahamian dollars on any terminal or ATM screen, and bring a no-foreign-fee card so nobody charges you for converting nothing.',
    accent: null,
    doorPool: false,
  },

  aruba: {
    shape: 'price-isnt-price',
    // HEDGED ON PURPOSE. The two levies are sourced. The resort-fee range and the
    // quarter-to-a-third total are the desk's own observation and the data says so, so
    // both are worded as a typical case rather than as a rule.
    setup: 'You compare Aruba hotels on the nightly rate, because that is the number they show you.',
    fact: "Two of the charges are government: a 12.5% tourist levy and an environmental levy of about 3 dollars a night. Then the property adds its own 10 to 15% service charge and, commonly, a resort fee of 30 to 90 dollars a night. Together they typically add something like a quarter to a third to the rate.",
    escape: 'Ask for an all-in nightly figure including levies, service charge and resort fee before you book. Only the first two are taxes; the rest is the hotel\'s choice.',
    accent: {
      from: 'the nightly rate', fromNote: 'what you compared hotels on',
      to: 'typically a quarter to a third more', toNote: 'two government levies, then the service charge and resort fee on top',
    },
    doorPool: false,
  },

  // ----- Oceania -----

  'new-zealand': {
    shape: null,
    setup: 'You budget for the flights and the room and assume the border is free.',
    fact: 'New Zealand charges about NZ$117 a person before you land: an NZeTA at NZ$17 in the official app, or NZ$23 on the website, plus a NZ$100 International Visitor Levy in the same non-refundable transaction. A family of four is roughly NZ$468 before a room is booked. And unlike Australia next door, there is no GST refund on your shopping on the way out.',
    escape: 'Use the official app rather than the website, allow up to 72 hours, and do not plan any shopping around a refund that does not exist here.',
    accent: null,
    doorPool: false,
  },

  // ----- Caucasus -----

  georgia: {
    shape: null,
    setup: 'You check the visa rules, find none, and stop looking.',
    fact: 'A US citizen can stay in Georgia for 365 days on arrival with no visa, the most generous entry in the set. Since 1 January 2026 every tourist must also carry travel insurance of at least 30,000 GEL, about 11,000 dollars, for the whole stay, and almost nobody has heard of it.',
    escape: 'Most standard US policies already qualify. Carry the certificate as a PDF or a printout in English, because border officers can ask for it.',
    accent: null,
    doorPool: false,
  },

};

// The door teaser pool: rock-solid, slow-moving facts only. Deliberately narrower than
// the map above. Argentina is excluded by its own doorPool flag, not by a name check
// here, so the rule holds automatically for the next volatile fact somebody adds.
//
// The desk signed off on these eight by name: Japan, Colombia, Turkey, Italy, Czechia,
// Greece, Cambodia, El Salvador. Adding a ninth is an editorial decision, not a
// housekeeping one, so it needs the same sign-off. Netherlands and Ecuador are good facts
// that are deliberately NOT here: the Dutch one turns on a dated VAT change and the
// Ecuadorean one on a conditional Galapagos fee, and the door is the wrong place for a
// fact that needs a caveat to stay true.
export const doorPool = Object.keys(heroFacts).filter(s => heroFacts[s].doorPool === true);

// One accessor, so every caller reads the same shape and no page reaches into the map
// directly. Returns null for a country with no fact, which is the graceful-degrade
// signal the gut-punch and door both branch on.
export function heroFactFor(slug) {
  const f = heroFacts[slug];
  if (!f) return null;
  return {
    slug,
    shape: f.shape || null,
    setup: f.setup || '',
    fact: f.fact || '',
    escape: f.escape || '',
    caveat: f.caveat || '',
    // The accent renders only when the fact carries accent data AND a shape that has a
    // visual form. counterintuition and an unset shape are always the plain frame.
    accent: (f.accent && f.shape && f.shape !== 'counterintuition') ? f.accent : null,
    flag: f.flag || null,
    spoke: f.spoke || null,
    checked: f.checked || null,   // null means "use the country's own checked date"
    doorPool: f.doorPool === true,
  };
}
