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
