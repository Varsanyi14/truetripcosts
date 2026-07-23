export default {
  slug: "italy",
  iso2: "it",
  live: true,
  name: "Italy",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  sources: {
    changed: "Sources added. Verified the Venice day-tripper access fee for 2026 (5 euros if booked at least four days ahead, 10 euros last-minute, on about 60 peak dates from April to July, historic center only, with overnight guests exempt but still required to register), along with the per-night overnight taxes in Rome, Florence and Venice. The guide's figures are current.",
    links: [
      { label: "City of Venice official access-fee portal: the day-tripper contributo di accesso, its 2026 dates, price and exemptions", url: "https://cda.ve.it/en/", type: "gov" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "112", note: "112 reaches every service, and 118 goes straight to an ambulance.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  rentalCommon: true,
  region: "Europe",
  signals: { cardFriendliness: 4, cashNeed: 2, taxRisk: 3, atmRisk: 4 },
  title: "Money in Italy (2026): Cards, Cash, ATMs, the Coperto, Tipping and Tourist Taxes | True Trip Costs",
  description: "How to handle money in Italy as a US traveler in 2026: cards work almost everywhere, the dollar conversion trap, bank Bancomats vs Euronet ATMs, the coperto cover charge, light tipping, and the tourist taxes in Rome, Florence and Venice plus the Venice access fee. Checked July 2026.",
  h1: "Money in Italy, sorted.",
  lede: "A calm, current plan for the money side of your trip: what you can tap, the little things you still want euros for, and the small rules that trip up first-timers.",
  hero: {
    img: "/italy-hero.jpg",
    h: 1375,
    alt: "A quiet Italian old-town street at dusk with string lights overhead, pastel shuttered buildings, a Vespa parked to one side, a lone figure walking away toward a bell tower, and a plate of pasta with an espresso steaming on a wooden table in the foreground"
  },
  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',
  verdict: "Italy is now very <b>card-friendly</b>. Visa and Mastercard work almost everywhere, contactless is standard, and merchants are legally required to accept cards. Bring a <b>no-fee Visa or Mastercard</b> for nearly everything, keep <b>50 to 100 euros</b> in small notes for the coperto cover charge, espresso bars, markets, tips and the rare cash-only spot, and pull euros from a <b>bank Bancomat</b> rather than the blue Euronet machines. One rule above all: <b>always choose euros, never dollars</b>. Tipping is light here. If your trip includes Rome, Florence or Venice, budget the per-night tourist tax, and day-trippers to Venice on busy 2026 dates need the separate access fee.",
  recentChange: {
    date: "2026",
    text: "Venice runs its day-tripper <b>access fee</b> again in 2026, on 60 set days from <b>3 April to 26 July</b>, between 08:30 and 16:00. It is <b>5 euros</b> per person if you book at least four days ahead at the official site, <b>cda.ve.it</b>, and <b>10 euros</b> if you pay within three days or on the day. Children under 14 are exempt. If you sleep in Venice you do not pay it, since your lodging tax covers it, but you still must register for a free exemption QR code. It applies only to the historic center, not the islands like Murano, Burano and the Lido. Book on the official site, not the markup resellers that show up in search ads."
  },
  meter: {
    heading: "Italy is very card-friendly now, but keep some euros for the little things.",
    cashPct: 30,
    note: "A rough feel for everyday spending. Cards and contactless work almost everywhere, restaurants, shops, supermarkets, museums, trains and even taxis, and merchants legally have to accept them. You still want a little cash for the coperto cover charge, espresso bars, small markets, tips and the occasional cash-only trattoria, so carry some euros and top up at a bank ATM."
  },
  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are taken nearly everywhere, contactless is the norm, and merchants are legally required to accept cards. Amex is patchier at small spots. The only real catch is the screen that offers to charge you in dollars, which you always decline.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "A little, for the small stuff", p: "You do not need much, but keep 50 to 100 euros in small notes. Espresso bars, the coperto cover charge, neighborhood markets, tips and the odd cash-only trattoria still run on cash, and a 20 is easier to spend than a 50.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy, pick a bank Bancomat", p: "Bank ATMs (called Bancomat) from Intesa Sanpaolo, UniCredit, BNL or BancoPosta are everywhere in towns and cities. Avoid the bright blue standalone Euronet machines at tourist sites, which charge more and push the dollar conversion. Read the on-screen fee, and always decline \"convert to dollars.\"", cta: { label: "See low-fee cards", href: "#" } }
  ],
  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> with contactless for nearly everything, and pack a backup card from a different bank.",
      "Get a <b>no-foreign-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "You will need little cash, so plan to pull a modest amount once you land rather than buying euros at home.",
      "<b>Set a travel notice</b> with your bank so a first-day tap or ATM pull does not get blocked."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters and the airport ATMs, which carry the poorest rates and highest fees.",
      "Pull a modest amount of euros from a <b>bank Bancomat</b> (look for BNL, Intesa or UniCredit, not the blue Euronet box) and <b>decline \"convert to USD.\"</b>",
      "Heading into the city by train? You can usually <b>tap your card</b> at the ticket machine or gate, no cash needed."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card or contactless</b> for almost everything: restaurants, shops, supermarkets, museums, trains and taxis.",
      "<b>A little cash</b> for the coperto, espresso bars, markets, tips and the rare cash-only spot.",
      "<b>Always choose euros</b> on every card terminal and ATM screen.",
      "When you do need a Bancomat, pick one attached to a bank branch, not a standalone tourist-zone machine."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in euros, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "Same at the ATM: if it asks \"with or without conversion,\" choose <b>without conversion</b> (senza conversione), the charge-in-euros option."
    ], cta: null }
  ],
  cash: {
    rate: 0.88, cur: "EUR", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 0.88 euros to the dollar, so a euro costs you a little over a dollar. The rate has softened a touch through 2026, trading near 1.14 dollars per euro in mid-year.",
    styles: [ { n: "Budget", per: 45, cash: 0.45, room: 85 }, { n: "Mid-range", per: 95, cash: 0.3, room: 160 }, { n: "Comfort", per: 175, cash: 0.2, room: 320 } ]
  },
  connectivity: {
    works: "Yes, and coverage is excellent. Italy has near-universal 4G and widespread 5G across the cities, tourist regions and main rail and road routes. Signal can dip in remote mountain valleys and parts of the far south and islands."
  },
  // TOURIST TAX (high-churn, verified Jul 2026). An accommodation tax (tassa di soggiorno)
  // charged per person, per night, and collected at checkout, often in cash. The real
  // amount depends on the hotel's official star rating, so the calculator uses a sensible
  // mid-range figure per city and says so. Children under a set age are usually exempt.
  //
  // FUTURE SHAPE (not yet read by the calculator): when we add a star-rating input, each
  // region can carry a byClass map instead of a single rate, e.g.
  //   { key: "rome", label: "Rome", byClass: { "3": 6, "4": 7.5, "5": 10 } }
  // and the engine would pick the rate by the chosen star rating. For now we ship one
  // representative rate per city to keep the interface simple for a first-time traveler.
  // Typical economy round trip per person from major US gateways, as a verified
  // RANGE, never a point. Sourced from fare-tracker averages (Kayak, momondo,
  // Skyscanner published route data), deliberately wide to cover season and
  // gateway. HIGH-CHURN: re-verify on the tourist-tax cadence. The calculator
  // prefills the midpoint, feeds low/high into the confidence range until the
  // traveler enters their own fare, and hides the estimate if this block is absent.
  flight: { low: 550, high: 1200, checked: "Jul 2026", checkedISO: "2026-07-18" },
  tax: {
    unit: "perPersonPerNight",
    currency: "EUR",
    capNights: null,
    note: "An accommodation tax (tassa di soggiorno) charged per person, per night, and usually collected at checkout, often in cash. The exact amount depends on the hotel's official star rating, so treat this as a mid-range estimate. Young children are usually exempt, and some cities stop charging after about a week.",
    regions: [
      { key: "rome", label: "Rome", rate: 6 },
      { key: "florence", label: "Florence", rate: 5 },
      { key: "venice", label: "Venice", rate: 3, note: "This is Venice's overnight accommodation tax, paid at your hotel. The separate day-tripper access fee you may have read about does not apply when you are staying the night." },
      { key: "milan", label: "Milan", rate: 5 },
      { key: "other", label: "Elsewhere in Italy", rate: 2, note: "Most Italian towns charge a small per-person tax, commonly 1 to 5 euros a night by hotel rating. A few small places charge nothing." }
    ]
  },
  currencyHeading: "The euro, in plain terms.",
  facts: [
    { sym: "euro", k: "Quick conversion", v: "About 1 euro to 1.14 dollars in mid-2026, so euro prices are roughly the same as dollars, just a touch more. A quick gut check: a 10 euro lunch is about 11 and a half dollars, and 100 euros is about 114. The rate has been fairly steady, softening slightly over the year." },
    { sym: "coins", k: "Notes and coins", v: "Notes run 5, 10, 20, 50, 100, 200 and 500 euros, though the 200 and 500 are rare and awkward to spend. Note that 1 and 2 euros are coins, not notes, and add up fast, so keep a small stash of coins and small notes for cafes, the coperto and tips." },
    { sym: "tip", k: "Tipping is light", v: "Italy is not a US-style tipping culture. Servers earn a real salary and do not live on tips, so there is no expected percentage. Rounding up or leaving a few euros for great service is a kind gesture, not an obligation." },
    { sym: "bowl", k: "The coperto", v: "Most sit-down restaurants add a per-person cover charge called the coperto, commonly 2 to 3 euros and more in tourist spots. It is normal and not a scam, it is separate from any tip, and it is banned in Rome's Lazio region, where you may instead be offered (and can decline) a bread charge." }
  ],
  taxfree: {
    label: "Tourist taxes",
    heading: "The city taxes that surprise people at checkout.",
    text: "Italy has no single national tourist tax. Most cities charge their own <b>tassa di soggiorno</b>, a per-person, per-night fee that is almost never in your room rate and is usually collected by the hotel at checkout, often in cash. The rate depends on the city and the star rating, and it is capped after a set number of nights, with young children exempt. In <b>Rome</b>, expect roughly 4 euros a night at a 1-star up to 10 euros at a 5-star, for up to 10 nights, with under-10s exempt. In <b>Florence</b>, it runs about 3.50 to 8 euros per person per night, for up to 7 nights. In <b>Venice</b>, the overnight tax is roughly 1 to 5 euros per person per night depending on category and season, for up to 5 nights, and Venice also has the <b>separate day-tripper access fee</b> covered in the update above. Separately, if you shop, non-EU visitors can reclaim part of Italy's 22% VAT on goods over 70.01 euros bought in one store on one day: ask for a tax-free form with your passport, keep the goods unused, and validate at the airport when you leave. After the operators' fees you get back closer to 11 to 15%."
  },
  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> At a shop terminal or a Bancomat, choosing dollars (dynamic currency conversion) quietly adds 3 to 8%. Pick euros every time. At an Italian bank ATM the prompt reads \"con conversione\" or \"senza conversione,\" so choose senza conversione, without conversion.",
    "<b>Skip the blue Euronet ATMs.</b> The bright blue standalone machines clustered at tourist sites in Rome, Florence, Venice and Milan charge the most and push the dollar conversion hardest. Use a Bancomat attached to a bank branch (Intesa Sanpaolo, UniCredit, BNL, BancoPosta) and read the on-screen fee before you confirm.",
    "<b>The coperto and \"servizio.\"</b> Many restaurants add a per-person coperto cover charge, commonly 2 to 3 euros, and a few tourist spots add a separate service charge. Neither is a scam, but read the bill before you add a tip on top.",
    "<b>The tourist tax is paid at the hotel.</b> The per-night city tax is usually not in your room rate, so expect to settle it at checkout, often in cash. Budget roughly 3 to 10 euros per person per night in Rome, Florence and Venice.",
    "<b>Venice day-trip? Sort the access fee first.</b> On the 60 set 2026 dates you need a paid QR code to enter the historic center, and even exempt overnight guests must register. Book on the official site, cda.ve.it, well ahead to pay 5 euros rather than 10, and ignore the markup resellers in search ads."
  ],
  tippingHeading: "Tip lightly, if at all.",
  tipping: "Italy is not a US-style tipping culture, and this surprises many first-timers. Servers are paid a real salary and do not depend on tips, so there is no expected percentage and nobody will chase you for one. The coperto cover charge on your bill is not a tip, it is a separate seat-and-bread charge. For genuinely great service you can round up or leave a few euros, or up to roughly 5 to 10% at a nicer meal, but it is a kind gesture rather than an obligation. Check the bill first for a \"servizio\" service charge, more common in tourist areas, so you do not pay it twice, and leave any tip in cash. Round up a taxi fare, and a euro or two for a porter or for housekeeping is appreciated. Do not feel pressured to tip 15 to 20% the way you would at home.",
  faqs: [
    { q: "Do I need cash in Italy?", a: "Less than you would think. Cards and contactless work almost everywhere and merchants are legally required to accept them. But carry 50 to 100 euros in small notes for the coperto cover charge, espresso bars, neighborhood markets, tips and the occasional cash-only trattoria, and top up at a bank Bancomat as needed." },
    { q: "Should I pay in euros or dollars in Italy?", a: "Always euros. If a card terminal or ATM offers to charge you in dollars, decline. That dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better. At an Italian bank ATM, the option is worded \"senza conversione,\" without conversion, which is the charge-in-euros choice." },
    { q: "What is the coperto in Italy?", a: "The coperto is a small per-person cover charge most sit-down restaurants add, commonly 2 to 3 euros and more in tourist spots. It is normal and not a scam, and it is separate from any tip. It is actually banned in Rome's Lazio region, where some places instead offer a bread charge you can decline." },
    { q: "How much is the tourist tax in Italy?", a: "It is a per-person, per-night city tax (tassa di soggiorno) set by each city and paid at your accommodation, not included in the room rate. It is roughly 4 to 10 euros a night in Rome (up to 10 nights, under-10s exempt), about 3.50 to 8 euros in Florence (up to 7 nights), and around 1 to 5 euros in Venice. Venice also has a separate day-tripper access fee." },
    { q: "Do I have to pay the Venice access fee?", a: "Only if you visit the historic center as a day-tripper on one of the 60 set 2026 dates, from 3 April to 26 July, between 08:30 and 16:00. It is 5 euros per person booked at least four days ahead at cda.ve.it, or 10 euros last-minute, and under-14s are exempt. Overnight guests do not pay it but must still register for a free exemption QR code. The islands, like Murano, Burano and the Lido, are excluded for 2026." },
    { q: "How much cash should I bring for a week in Italy?", a: "For two mid-range travelers, very roughly 300 to 400 euros (about 350 to 450 dollars) in day-to-day cash across a week, beyond your hotel, pulled in a couple of bank-ATM visits. Cards and contactless cover most of the rest. Adjust for your style and how much you tap versus pay in cash." }
  ],

  culture: {
    heading: "A little Italian goes a long way",
    intro: "A few words and a couple of stories that turn you from a tourist into a guest. Italians open up fast when you meet them halfway, over a coffee, in a piazza, at the table.",
    phrases: [
      { mean: "Hello", say: "CHOW", word: "Ciao" },
      { mean: "Please", say: "pehr fah-VOH-reh", word: "Per favore" },
      { mean: "Thank you", say: "GRAH-tsee-eh", word: "Grazie" },
      { mean: "Cheers", say: "chin CHIN", word: "Cin cin" },
      { mean: "Delicious", say: "bwoh-NEES-see-moh", word: "Buonissimo" },
      { mean: "Beautiful!", say: "behl-LEES-see-moh", word: "Bellissimo" },
    ],
    tip: "greet with <b>Buongiorno</b> (bwon-JOR-noh) when you walk into a shop or bar. It is expected, and warmly received.",
    stories: [
      { img: "/italy-culture-1.jpg",
        alt: "WPA-style illustration of Julius Caesar on horseback at the edge of the Rubicon river at dawn, a Roman legion with standards massed behind him",
        h: "Alea iacta est: the die is cast",
        p: "In 49 BC, Julius Caesar marched his army across the Rubicon, the river he was forbidden to cross, and began a civil war. As he crossed, he is said to have declared alea iacta est, the die is cast: no turning back. Italians know the line and the moment.",
        note: "Say it: AH-leh-ah YAHK-tah est" },
      { img: "/italy-culture-2.jpg",
        alt: "WPA-style illustration of the she-wolf of Rome standing over the infant twins Romulus and Remus on the bank of the Tiber",
        h: "Raised by a wolf",
        p: "Legend says the twins Romulus and Remus, abandoned as infants, were suckled by a she-wolf on the banks of the Tiber. Romulus grew up to found Rome. The she-wolf and the twins are a symbol you will see everywhere, and every Italian knows her.",
        note: "Good to know: this is the founding legend of Rome" },
      { img: "/italy-culture-3.jpg",
        alt: "WPA-style illustration of a Renaissance sculptor carving a marble figure in a sunlit Florentine workshop, the dome of the Duomo beyond",
        h: "The Renaissance was born here",
        p: "Florence gave the world the Rinascimento, the rebirth of art and ideas, with Michelangelo, Leonardo, and Brunelleschi's great dome. Mentioning your love of Italian art, and the word Rinascimento, signals real appreciation.",
        note: "Say it: ree-nah-shee-MEN-toh" },
    ],
    pride: "Italy holds more UNESCO World Heritage sites than any country on earth, and gave the world opera, the Renaissance, and, of course, the food. A little genuine enthusiasm is always returned."
  },

  spokes: [
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Best option", v: "Taxi rank or app (itTaxi, FreeNow)" },
        { k: "Uber", v: "Only pricey Black, no UberX" },
        { k: "Airport", v: "Fixed flat fare" },
        { k: "Street hailing", v: "Not really possible" }
      ],
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "How taxis work in Italy, and the airport fixed fare that protects you (2026) | True Trip Costs",
      description: "Why you cannot hail a taxi on the street in Italy, which apps to use (itTaxi and FreeNow), why there is no cheap Uber, and the fixed airport fare from Rome Fiumicino that stops you overpaying. Checked July 2026.",
      h1: "Taxis in Italy, and the airport fixed fare",
      lede: "Taxis in Italy do not work the way most visitors expect: you cannot really flag one down, and Uber is not the cheap option it is at home. Here is how to get a cab, and the airport rule that saves you money.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "In Italy you cannot really hail a taxi on the street. You use a <b>taxi rank</b> or an <b>app</b>, either <b>itTaxi</b> or <b>FreeNow</b>, which send the licensed white metered taxis. There is <b>no cheap UberX</b> here, since Italian courts banned it in 2017, only the pricier <b>Uber Black</b>. The big protection is the <b>fixed airport fare</b>: from <b>Rome Fiumicino</b>, a licensed white taxi to anywhere in the historic centre is a flat <b>50 euros</b>, with no supplements. Watch for the <b>abusivi</b>, unlicensed drivers who approach you inside the terminal in unmarked cars at two to four times the fare, and only take a taxi from the official rank.",
      sections: [
        {
          h: "How Italian taxis work: rank or app, not street",
          icon: "phoneok",
          key: { fig: "Rank/app", tag: "Not the street", text: "Italian taxis are white, metered and city-licensed, and you cannot flag one down. Use a rank or an app, itTaxi or FreeNow, which send the licensed cars.", tone: "teal" },
          p: [
            "Italian taxis are <b>white</b>, metered, and licensed to a specific city, and in practice you cannot flag one down on the street. Drivers are almost always already booked or heading to a rank, and near a taxi stand they are not even allowed to pick you up off the street. So the two ways to get a cab are to walk to a <b>taxi rank</b>, which you will find at stations, main squares and airports, or to use an <b>app</b>.",
            "The apps to use are <b>itTaxi</b> and <b>FreeNow</b> (FreeNow is now part of Lyft), both of which dispatch the same licensed white metered taxis and let you pay by card. One payment note: if you did not book through an app, expect to pay <b>cash</b>. Drivers are technically required to accept cards, but in practice many do not, and you do not want to be arguing about it at the end of a ride."
          ]
        },
        {
          h: "Uber in Italy: only the pricey Black",
          icon: "alert",
          key: { tag: "No cheap UberX", text: "The UberX model was banned by Italian courts in 2017, so there is no cheap Uber here, only the pricier Uber Black. Plan on a rank or a local app instead.", tone: "amber" },
          p: [
            "If you are used to opening Uber and getting a cheap ride, Italy will surprise you. The <b>UberX</b> model, ordinary people driving their own cars, was <b>banned by Italian courts in 2017</b> as unfair competition to licensed taxis. What remains is <b>Uber Black</b>, a premium pre-booked service using licensed private-hire (NCC) drivers in dark cars, which is comfortable but noticeably more expensive.",
            "So treat Uber here as a chauffeur service, not a budget option. For a normal metered taxi at the regular fare, use <b>itTaxi</b> or <b>FreeNow</b>, or a taxi rank. The same caution applies to any <b>NCC</b> (noleggio con conducente) driver offered to you at an airport: they are legal but un-metered and pricier than a taxi, so know that is what you are choosing."
          ]
        },
        {
          h: "The airport fixed fare, and the abusivi",
          icon: "plane",
          key: { fig: "Flat fare", tag: "Your best protection", text: "From Rome Fiumicino, a licensed white taxi to anywhere inside the Aurelian Walls is a set flat fare. Take only official taxis at the rank, not the abusivi touts inside the terminal.", tone: "teal" },
          p: [
            "The single best protection for a visitor is the <b>fixed airport fare</b>. From <b>Rome Fiumicino</b> (FCO), a licensed white taxi to anywhere within the <b>Aurelian Walls</b>, the historic centre, is a flat <b>50 euros</b>, charged per car for up to four passengers, with no extra for luggage, night driving or holidays. <b>Ciampino</b> and <b>Milan Malpensa</b> have their own fixed fares. Confirm you are getting the fixed fare before the meter starts, and note it applies only to Rome-licensed white taxis taken from the rank.",
            "The scam to know is the <b>abusivi</b>, unlicensed drivers most common at Fiumicino and busy tourist sites. They approach you <b>inside the terminal</b>, often in plain clothes with a car that is not white, and offer a fixed price that turns out to be two to four times the real fare. Official drivers wait at the rank and never approach you, so the rule is simple: <b>only take a taxi from the official rank</b>, and refuse anyone who comes up to you. Into Rome, the <b>Leonardo Express</b> train is a cheap and reliable alternative."
          ]
        },
        {
          h: "Fares, paying and tipping",
          icon: "euro",
          key: { fig: "Metered", tag: "In the city", text: "In town the meter and per-kilometer rate vary by city and time, with legitimate surcharges for nights, weekends and holidays. Round up rather than tip a percentage.", tone: "teal" },
          p: [
            "In the city, the meter's starting amount and per-kilometer rate vary by city, time of day and day of the week, and there are legitimate <b>municipal surcharges</b> for nights, weekends, holidays and luggage. Those are set by the city, not invented by the driver, so they are not the scam. On the <b>fixed airport fare</b>, by contrast, no supplements are allowed at all.",
            "Tipping is not expected in Italy, and rounding up to a convenient figure is more than enough. For the wider money picture, including how much cash to carry and where cards work, see the <a href=\"/italy\">Italy money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is there Uber in Italy?", a: "Only Uber Black, the premium pre-booked chauffeur service using licensed private-hire (NCC) cars. The cheap UberX private-car model was banned by Italian courts in 2017. For a normal metered taxi at the regular fare, use the itTaxi or FreeNow app, or go to a taxi rank." },
        { q: "How do I get a taxi in Italy?", a: "You cannot reliably hail one on the street; drivers will not stop, and near a rank it is illegal for them to pick you up. Go to a taxi rank, found at stations, main squares and airports, or book through itTaxi or FreeNow, which send a licensed white metered taxi. If you did not book by app, expect to pay cash." },
        { q: "What is the taxi fare from Rome airport?", a: "From Fiumicino, a licensed white taxi to anywhere within the Aurelian Walls, the historic centre, is a fixed 50 euros, charged per car for up to four passengers, with no extra for luggage, night or holidays. Ciampino and Milan Malpensa have their own fixed fares. Confirm the fixed fare before the meter starts, and only use a taxi from the official rank." },
        { q: "What are taxi abusivi in Italy?", a: "Unlicensed drivers, most common at Fiumicino and tourist sites, who approach arriving passengers, often in plain clothes with a car that is not white, and offer a fixed price two to four times the official fare. Official drivers wait at the rank and do not approach you, so only take a taxi from the official rank and refuse anyone who comes up to you." }
      ],
      sources: {
        links: [
          { label: "US Department of State: Italy country information, general safety and local-travel context for US visitors", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Italy.html", type: "gov" },
          { label: "Magic Towns: a 2026 guide on how taxis work in Italy and why Uber barely exists", url: "https://magictowns.it/how-to-get-a-taxi-in-italy/", type: "guide" },
          { label: "Following the Riviera: a 2026 local guide to Italian taxis, the airport fixed fares and NCC drivers", url: "https://www.followingtherivera.com/guide-to-taking-taxis-in-italy/", type: "guide" }
        ],
        judgment: "Fixed airport fares and city meter tariffs are set by each municipality and can change, and app coverage varies by city, so confirm the fixed fare before you ride and treat euro figures as a recent read. Checked July 2026."
      }
    },
    {
      slug: "bringing-your-pet",
      glance: [
        { k: "Process", v: "Shared EU entry" },
        { k: "Need", v: "ISO chip, rabies, EU health cert" },
        { k: "Enter within", v: "10 days of endorsement" },
        { k: "Coming home", v: "Simple CDC path" }
      ],
      live: true,
      topic: "pets",
      title: "Bringing a dog or cat to Italy from the US (2026): the EU process, and the Italy-specific parts | True Trip Costs",
      description: "Moving to Italy with a pet from the US: why it runs on the shared EU health-certificate process, no quarantine and no titer, plus what is specific to Italy on arrival and after you register. Checked July 2026.",
      h1: "Bringing your dog or cat to Italy.",
      lede: "Italy is a popular EU destination for US pet owners, and there is nothing Italy-specific to fear at the border. It runs on the single EU pet-entry process: microchip, rabies in the right order, and an EU health certificate on a 10-day clock. No quarantine, no rabies titer. Here is what that means for Italy, and the local parts worth knowing.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Italy uses the <b>shared EU pet-entry process</b>, so there is no separate Italian permit and nothing unusual at the border. Your pet needs an <b>ISO microchip, a rabies vaccination given after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS</b>, then must enter Italy within <b>10 days</b> of that endorsement. There is <b>no quarantine and no rabies titer</b> for a pet coming straight from the US. The full step-by-step, the ordering trap, and the current fees are on one page: see <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a>. Below are the Italy-specific notes. Coming home to the US is the easy part.",
      sections: [
        {
          h: "Italy runs on the EU process",
          icon: "health",
          key: { fig: "10 days", tag: "No Italy-only permit", text: "The standard EU move: an ISO microchip first, a rabies shot after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS. Enter Italy within 10 days of that endorsement.", tone: "teal" },
          p: [
            "There is no Italy-only pet permit and no national quarantine. Bringing a dog or cat into Italy from the US is the standard EU move: an ISO microchip first, a rabies vaccination after the chip, then an EU Animal Health Certificate completed by a USDA-accredited vet and endorsed by APHIS, with the pet arriving within 10 days of endorsement. A first rabies shot adds a 21-day wait before travel.",
            "Because the process is identical across all 27 member countries, we do not repeat it per country. The full sequence, the microchip-before-rabies trap that costs people the most time, the 10-day clock, and the current APHIS endorsement fees all live on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Read that first, then come back for the Italy notes."
          ]
        },
        {
          h: "The Italy-specific parts",
          icon: "receipt",
          key: { fig: "Check", tag: "At the border", text: "Italian customs may ask to see the endorsed certificate and confirm the chip, and pets should arrive through a designated traveller point of entry, which the major airports are.", tone: "teal" },
          p: [
            "At the border, Italian customs may ask to see the endorsed certificate and confirm the microchip, and pets should enter through a designated traveller point of entry, which the major airports are. There is no dog or cat tapeworm rule for Italy, unlike Ireland, Finland or Malta.",
            "After you settle in, the Italy-specific step is registration in the national canine registry (anagrafe canina), which ties your dog's microchip to you at your Italian address and is handled through a local vet or the regional health authority (ASL). Italy does not keep a national banned-breed list the way some EU countries do, having moved away from breed-specific bans toward owner-responsibility rules, but muzzle-and-leash expectations still apply in public spaces. Register the pet once you have an address, and keep the EU certificate until you do."
          ]
        },
        {
          h: "Coming back to the US is the easy part",
          icon: "plane",
          key: { fig: "Easy", tag: "The return trip", text: "A dog flying home from Italy is on the simplest CDC path: usually a CDC Dog Import Form receipt, a microchip, and a minimum age of 6 months.", tone: "teal" },
          p: [
            "Good news for the return trip: a dog flying home to the US from Italy is on the simplest CDC path, typically a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement.",
            "For the wider picture, including how Italy compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."
          ]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Italy",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-italy",
        note: "The US-side steps and the EU health certificate for Italy. Italy applies the shared EU process, and the destination's own authorities are the final word on the day."
      },
      faqs: [
        { q: "Does my pet have to go into quarantine in Italy?", a: "No. Italy applies the shared EU pet-entry process, which has no quarantine and no rabies titer for a pet coming straight from the US. Your pet needs a microchip, a rabies vaccination in the right order, and an EU Animal Health Certificate endorsed by APHIS, then must arrive within 10 days of endorsement. See our EU pet health certificate page for the full process." },
        { q: "Is there anything Italy-specific beyond the EU rules?", a: "A little. Italy has no tapeworm rule (that applies to Ireland, Finland and Malta) and no national banned-breed list. After you arrive, you register your dog in the national canine registry (anagrafe canina) through a local vet or the regional health authority, which ties the microchip to your Italian address." },
        { q: "Do I need to quarantine my pet coming back to the US from Italy?", a: "No. A dog returning to the US from Italy is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details." }
      ],
      sources: {
        links: [
          { label: "True Trip Costs: the EU pet health certificate, the shared microchip, rabies and certificate process for all EU countries including Italy", url: "/eu-pet-health-certificate", type: "internal" },
          { label: "USDA APHIS: pet travel from the United States to Italy, the US-side steps and EU health certificate", url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-italy", type: "gov" },
          { label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, for the return leg", url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html", type: "gov" }
        ],
        judgment: "Italy applies the shared EU pet-entry framework, set by the EU and administered on the US side by APHIS, not by us. The process is stable in substance, though the EU certificate format changes on 1 October 2026, which we cover on the EU pet health certificate page. The Italian registry step is local, so handle it once you have an address. We point you to the official pages and dated this July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Light, not expected" },
        { k: "On the bill", v: "Coperto, 2 to 3 euros per person" },
        { k: "The coperto", v: "A cover charge, not a tip" },
        { k: "If you tip", v: "Round up, cash euros" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Italy: the coperto, the servizio, and what you actually owe (2026) | True Trip Costs",
      description: "How tipping works in Italy for US travelers in 2026: why it is not like home, what the coperto cover charge is, when a servizio is already on the bill, and how much to leave when you do tip. Checked July 2026.",
      h1: "Tipping in Italy",
      lede: "Italy is not a US-style tipping country, and that surprises many first-timers. Servers earn a real salary, nobody expects 20%, and the charges on your bill that look like tips often are not. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-20",
      answer: "Italy has a <b>light tipping culture</b>. Servers are paid a real salary and do <b>not depend on tips</b>, so there is no expected percentage and nobody will chase you for one. The <b>coperto</b> on your bill is a <b>per-person cover charge</b> (commonly 2 to 3 euros), not a tip. A few tourist spots add a separate <b>servizio</b> (service charge); check for it before adding more. For genuinely great service, <b>rounding up or leaving a few euros</b> is a kind gesture, or up to roughly <b>5 to 10%</b> at a nicer meal, but it is a courtesy, not an obligation. Leave any tip in <b>cash</b>. Do not feel pressured to tip 15 to 20% the way you would at home.",
      sections: [
        {
          h: "The coperto and the servizio: what they are and are not",
          icon: "receipt",
          key: { fig: "2-3 euros", tag: "Cover, not a tip", text: "The coperto is a per-person cover charge most sit-down places add, commonly 2 to 3 euros. It pays for the table and bread, and it is not a gratuity for your server.", tone: "teal" },
          p: [
            "The <b>coperto</b> is a per-person cover charge that most sit-down restaurants add to the bill, commonly <b>2 to 3 euros</b> and sometimes more in tourist spots. It covers the table, bread and service setup. It is <b>not a tip</b> and not a scam, it is a normal Italian practice.",
            "Note that in <b>Rome's Lazio region</b>, the coperto is actually <b>banned</b>. Some restaurants there offer a <b>bread charge (pane e coperto)</b> instead, which you can decline if you do not want bread.",
            "A few tourist-heavy restaurants also add a <b>servizio</b> (service charge), typically around <b>10 to 15%</b>. If you see it on the bill, <b>you do not need to tip on top</b>. If neither coperto nor servizio appears, the listed price is the price, and a small tip is a kind gesture."
          ]
        },
        {
          h: "When and how much to tip",
          icon: "euro",
          key: { fig: "Round up", tag: "Nothing expected", text: "For a normal meal nothing beyond the coperto is expected. For genuinely great service, round up the bill or leave a few euros on the table.", tone: "teal" },
          p: [
            "For a normal meal, <b>nothing beyond the coperto is expected</b>. For genuinely great service, <b>rounding up the bill or leaving a few euros on the table</b> is appreciated. At a nicer restaurant, up to roughly <b>5 to 10%</b> is generous.",
            "For <b>taxis</b>, <b>round up the fare</b> to a convenient figure. For <b>hotel porters</b>, <b>1 to 2 euros per bag</b> is appreciated. For <b>housekeeping</b>, <b>1 to 2 euros a day</b> left on the pillow is a kind gesture. At a <b>bar or cafe</b>, Italians sometimes leave the small change from an espresso, but nothing more is expected."
          ]
        },
        {
          h: "Cash for tips",
          icon: "cash",
          key: { fig: "Cash", tag: "In euros", text: "Leave any tip in cash, in euros. Card tips are unusual in Italy and small places may not process them, so keep a few coins and small notes handy.", tone: "teal" },
          p: [
            "Leave any tip in <b>cash, in euros</b>. Card tips are unusual in Italy, and small establishments may not be able to process them separately. Keep a few euro coins and small notes handy for tips, the coperto, and espresso bars."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Italy?", a: "Lightly, if at all. Servers earn a real salary and do not depend on tips. For good service, rounding up or leaving a few euros is a kind gesture, but there is no expected percentage. Check the bill first for a servizio (service charge) so you do not pay twice." },
        { q: "What is the coperto in Italy?", a: "A small per-person cover charge most sit-down restaurants add, commonly 2 to 3 euros and more in tourist spots. It covers the table and bread, and it is separate from any tip. It is normal and not a scam. It is banned in Rome's Lazio region, where some places offer a bread charge instead." },
        { q: "Is there a service charge on restaurant bills in Italy?", a: "Sometimes, especially in tourist areas. Look for servizio on the bill. If it is there, you do not need to tip on top. The coperto is a separate cover charge, not a service charge. If neither appears, the listed price is the price." },
        { q: "How much should I tip in Italy?", a: "Nothing is expected for a normal meal. For great service, a few euros or up to roughly 5 to 10% at a nicer restaurant is generous. Round up a taxi fare, and leave 1 to 2 euros per bag for porters or per day for housekeeping. Do not feel pressured to tip 15 to 20% the way you would at home." }
      ],
      sources: {
        links: [
          { label: "US State Department: Italy country information and local customs", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Italy.html", type: "gov" }
        ],
        judgment: "Tipping norms in Italy are cultural, and the coperto is a longstanding restaurant practice, not a recent policy. The Lazio coperto ban is real and region-specific. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "tourist-tax",
      glance: [
        { k: "What", v: "Per-person, per-night tax" },
        { k: "Collected", v: "By your hotel, often cash" },
        { k: "Rome 2026", v: "About 4 to 10 euros a night" },
        { k: "Venice", v: "A separate access fee" }
      ],
      live: true,
      topic: "tourist-tax",
      title: "Italy's tourist tax (tassa di soggiorno) in 2026, and the Venice access fee that is separate | True Trip Costs",
      description: "The per-person, per-night city tax Italy adds at your hotel, not in the online price: what Rome, Florence, Venice and Milan charge in 2026, the night caps and child exemptions, and why Venice's day-tripper access fee is a different thing. Checked Jul 2026.",
      h1: "Italy's tourist tax, and the Venice access fee.",
      lede: "Almost every Italian city adds a small per-person, per-night tax to your stay, and it is rarely in the price you paid online. Here is what it costs in 2026, who is exempt, and why Venice has a second, separate fee that confuses everyone.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Most Italian cities charge a <b>tassa di soggiorno</b>, a <b>per-person, per-night</b> tourist tax collected by your hotel or host, usually <b>at check-in or checkout</b> and often in <b>cash</b>. It is <b>not</b> in the room price you saw on Booking or Airbnb. The amount is set by each city and rises with the accommodation's <b>star rating</b>: in 2026, <b>Rome</b> runs about <b>4 to 10 euros</b> a night, <b>Florence</b> about <b>3.50 to 8 euros</b>, <b>Venice</b> about <b>1 to 5 euros</b>, and <b>Milan</b> raised its rate for the Winter Olympics. Most cities <b>cap</b> the nights charged (Rome at 10, Florence at 7) and <b>exempt young children</b>. Separately, <b>Venice</b> charges day visitors a <b>5 euro access fee</b> on 60 peak days in 2026, which is a different thing, explained below.",
      sections: [
        {
          h: "How the overnight tax works",
          icon: "calendar",
          key: { fig: "Per night", tag: "Set by the city", text: "The tassa di soggiorno is set by each comune, charged per person per night, and collected by your hotel or host at check-in or checkout, often in cash. It is not in the room price you booked.", tone: "teal" },
          p: [
            "The tax is set by the <b>comune</b>, the city or town, not by the national government, so roughly 1,200 of Italy's towns charge it and each picks its own rate. It is charged <b>per person, per night</b>, and it scales with the accommodation category: a 5-star hotel costs more per night than a 1-star or a campsite. It applies to <b>everyone regardless of nationality</b>, including on short-term rentals like Airbnb.",
            "The part that catches people out is <b>when and how you pay</b>. The tax is almost never in the total you paid online. Your host collects it <b>on arrival or at checkout</b>, and many smaller places want it in <b>cash, in euros</b>. Set aside a little cash so you are not caught short. For the wider cash-and-card picture, see the <a href=\"/italy\">Italy money guide</a>."
          ]
        },
        {
          h: "What the main cities charge in 2026",
          icon: "euro",
          key: { fig: "4-10 euros", tag: "Rome, per night", text: "Rates have kept climbing. In Rome the 2026 tax runs roughly 4 euros a night at a 1-star up to 10 euros at a 5-star, with short-term rentals around 6 euros.", tone: "teal" },
          p: [
            "Rates moved up across 2024 and 2025 and are still climbing. In <b>Rome</b>, the 2026 tax runs roughly <b>4 euros a night at a 1-star up to 10 euros at a 5-star</b>, with short-term rentals around <b>6 euros</b>, capped at <b>10 nights</b>, and under-10s exempt. <b>Florence</b> runs about <b>3.50 to 8 euros</b> by category, capped at <b>7 nights</b>. <b>Venice</b>'s overnight tax is lower, roughly <b>1 to 5 euros</b>. <b>Milan</b> raised its rate for the <b>2026 Winter Olympics</b>.",
            "Treat these as <b>2026 figures that each city can change</b>, and note that the night caps and the child-exemption ages vary from place to place. The reliable move is to <b>ask your accommodation for the exact per-night amount</b> when you book, so the checkout figure is no surprise."
          ]
        },
        {
          h: "The Venice access fee is a separate charge",
          icon: "ticket",
          key: { tag: "Venice mixes people up", text: "Venice runs two different charges. Stay overnight and you pay the hotel tourist tax and are exempt from the access fee. The access fee is aimed at day-trippers, so do not pay both.", tone: "amber" },
          p: [
            "This is the one people mix up. Venice runs <b>two different charges</b>. If you <b>stay overnight</b> in Venice, you pay the <b>overnight tourist tax</b> through your hotel and you are <b>exempt from the access fee</b>. If you visit for the <b>day</b> without staying, on certain peak days you owe the <b>Contributo di Accesso</b>, a fee to enter the historic centre.",
            "For 2026 the access fee is <b>5 euros per person</b> if you book by the fourth-last day before your visit, or <b>10 euros</b> if you pay later, and it applies on <b>60 designated days from 3 April to 26 July 2026, between 8:30 and 16:00</b>. <b>Children under 14 are exempt</b>, and the smaller lagoon islands (Lido, Murano, Burano, Torcello) are not covered in 2026. You register and pay on the official city portal and carry the QR code. Note that restaurant bill extras like the coperto and any servizio are different again, and covered in <a href=\"/italy/tipping\">tipping in Italy</a>."
          ]
        },
        {
          h: "Who is exempt, and how to keep it down",
          icon: "tag",
          key: { fig: "Children", tag: "Common exemptions", text: "Young children are usually exempt, though the cutoff varies from under 10 to under 14, and nights beyond the city's capped number are not charged.", tone: "teal" },
          p: [
            "Common exemptions across Italian cities include <b>young children</b>, though the cutoff varies, often under 10 to under 14, and any nights beyond the <b>capped number</b> are not charged. Some cities also exempt people with disabilities and a companion, and patients or a carer staying near a hospital, but the rules are local, so do not assume.",
            "There is no way to avoid the overnight tax at a legitimate property, and you should not try: it is a real, lawful charge. The only genuine savings are structural. The <b>per-night cap</b> means a longer stay in one city dilutes the cost, a <b>lower accommodation category</b> carries a lower rate, and in Venice, <b>staying overnight</b> removes the day-tripper access fee entirely."
          ]
        }
      ],
      faqs: [
        { q: "Is the tourist tax included in my hotel price in Italy?", a: "Almost never. The room rate you pay online rarely includes the tassa di soggiorno. Your hotel or host collects it separately, usually at check-in or checkout, and often wants it in cash. Ask for the per-night amount when you book so the final figure is no surprise." },
        { q: "How much is the tourist tax in Rome in 2026?", a: "Roughly 4 euros per person per night at a 1-star up to about 10 euros at a 5-star, with short-term rentals around 6 euros. It is capped at 10 nights per stay, and children under 10 are exempt. Rates are set by the city and can change, so confirm with your accommodation." },
        { q: "What is the difference between Venice's tourist tax and the access fee?", a: "They are two separate charges. Overnight guests pay the per-night tourist tax through their hotel and are exempt from the access fee. Day visitors who do not stay overnight pay the Contributo di Accesso, 5 euros or 10 euros last-minute, on 60 peak days between 3 April and 26 July 2026. You cannot be charged both." },
        { q: "Do children pay the tourist tax in Italy?", a: "Usually not, but the age cutoff varies by city, commonly under 10 in Rome, under 11 or 12 in Florence, and under 14 for the Venice access fee. Check the specific city's rule rather than assuming, since there is no single national age." }
      ],
      sources: {
        links: [
          { label: "Comune di Venezia: the official Venice access fee portal, with the 2026 rates, dates and exemptions", url: "https://cda.ve.it/en/", type: "gov" },
          { label: "Idealista: a 2026 rundown of Italy's city tourist-tax rules and rates", url: "https://www.idealista.it/en/news/legal-advice-in-italy/2026/02/03/260733-tourist-tax-in-italy-2025-city-rules-and-rates", type: "guide" }
        ],
        judgment: "Italy's overnight tax is set separately by each comune and rose in 2024 and 2025, so the euro figures here are a recent 2026 read by accommodation category, not a fixed national table. The Venice access fee dates and prices are from the official city portal. Confirm the exact per-night amount with your accommodation, since caps and child-exemption ages vary by city. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Euro (EUR)" },
        { k: "Cards", v: "Almost everywhere, legally required" },
        { k: "Cash for", v: "Coperto, espresso bars, markets" },
        { k: "Keep on hand", v: "50 to 100 euros" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Italy, or can I use cards? (2026) | True Trip Costs",
      description: "Both. Cards work almost everywhere and shops must legally accept them, but you want euros for the coperto, espresso bars and small trattorie. The traps: skip the blue Euronet ATMs and choose euros, not dollars. Checked Jul 2026.",
      h1: "Do I need cash in Italy, or can I use cards?",
      lede: "Short answer: cards for most things, a stash of euros for the small ones. Italy is more card-friendly than its reputation, and merchants must legally accept cards, but cash still oils the daily stuff. Here is how to pay well.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Both. <b>Cards work almost everywhere</b>, contactless included, and Italian merchants are <b>legally required to accept them</b>, so a refusal is on them, not the rules. But keep <b>50 to 100 euros</b> in small notes for the <b>coperto</b> cover charge, espresso bars, neighborhood markets, tips and the occasional cash-only trattoria. Two traps to sidestep: skip the <b>bright blue Euronet ATMs</b> at tourist sites, and always choose <b>euros, not dollars</b> (at an Italian machine, the without-conversion option is worded senza conversione). Your per-night city tax is settled at the hotel, and is covered separately.",
      sections: [
        {
          h: "Cards work, and legally must, but keep some cash",
          icon: "euro",
          key: { fig: "Everywhere", tag: "Cards accepted", text: "Visa and Mastercard are taken almost everywhere, contactless is normal, and merchants are legally required to accept cards, so a refusal is on them. Amex is patchier.", tone: "teal" },
          p: [
            "Italy has caught up on cards. <b>Visa and Mastercard</b> are taken almost everywhere, <b>contactless</b> is normal, and <b>Apple Pay and Google Pay</b> work at most terminals; Amex is patchier, so keep it as a backup. Since 2022, Italian businesses are <b>legally required to accept card payments</b>, even for small amounts, so if a place claims its machine is broken, it is not your job to go find cash.",
            "That said, <b>cash still smooths daily life</b>. Carry <b>50 to 100 euros</b> in small notes and coins for the <b>coperto</b> cover charge, an espresso at the bar, market stalls, small family trattorie, tips and a church donation box. Remember that <b>1 and 2 euros are coins</b>, not notes, and they add up, so a small coin stash is genuinely useful."
          ]
        },
        {
          h: "The euro-versus-dollar trap, and the blue ATMs",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose euros", text: "When a terminal or a Bancomat asks to charge in dollars or euros, pick euros. Dollars trigger dynamic currency conversion at a rate about 3 to 8% worse than your bank rate.", tone: "amber" },
          p: [
            "When a card terminal or a Bancomat asks whether to charge in <b>dollars or euros, always choose euros</b>. Choosing dollars triggers dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. At an Italian bank ATM the prompt is worded con conversione or senza conversione, so pick <b>senza conversione</b>, without conversion.",
            "The machines to avoid are the <b>bright blue Euronet ATMs</b> clustered at tourist sites in Rome, Florence, Venice and Milan. They charge the most and push the dollar conversion hardest. Use a <b>Bancomat attached to a bank branch</b>, Intesa Sanpaolo, UniCredit, BNL or BancoPosta, and read the on-screen fee before you confirm."
          ]
        },
        {
          h: "Getting cash safely",
          icon: "cash",
          key: { fig: "Bank ATM", tag: "By a branch, by day", text: "Use bank ATMs during the day, ideally beside a branch and better lit. Use a debit card rather than credit to avoid cash-advance fees, and decline the machine conversion offer.", tone: "teal" },
          p: [
            "Use <b>bank ATMs</b> during the day, ideally the machines inside or beside a branch, which are better lit and less prone to skimming. Use a <b>debit card</b> rather than a credit card, since a credit-card withdrawal is a cash advance with a fee and interest from day one, and bring a <b>no-foreign-fee card</b> plus a backup on a different network.",
            "For a rough sense of scale, two mid-range travelers might pull <b>300 to 400 euros</b> of day-to-day cash across a week beyond the hotel, in a couple of ATM visits, with cards covering the rest. Withdraw a few days' worth at a time to limit per-visit fees, and keep cash out of sight in crowds."
          ]
        },
        {
          h: "The bill: coperto, service, and the city tax",
          icon: "receipt",
          key: { fig: "Read it", tag: "Three add-ons", text: "Read the bill before tipping. Most places add a coperto cover charge (2 to 3 euros), a few add a servizio, and your hotel collects the city tourist tax separately.", tone: "teal" },
          p: [
            "Read the restaurant bill before you tip. Most sit-down places add a <b>coperto</b>, a per-person cover charge commonly <b>2 to 3 euros</b>, and a few tourist spots add a separate <b>servizio</b> service charge. Neither is a tip and neither is a scam. Tipping in Italy is light, with no US-style percentage to add; the detail is in <a href=\"/italy/tipping\">tipping in Italy</a>.",
            "Separately, Italy's <b>per-night city tax</b> (the tassa di soggiorno) is almost never in your room rate and is usually collected at the hotel, often in cash. What each city charges, plus the separate Venice access fee, is in <a href=\"/italy/tourist-tax\">Italy's tourist tax</a>. For the wider picture, see the <a href=\"/italy\">Italy money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Should I use cash or card in Italy?", a: "Both. Cards and contactless work almost everywhere and merchants are legally required to accept them, but carry 50 to 100 euros in small notes for the coperto cover charge, espresso bars, neighborhood markets, tips and the occasional cash-only trattoria. Top up at a bank Bancomat as needed." },
        { q: "Should I pay in euros or dollars in Italy?", a: "Always euros. If a card terminal or ATM offers to charge you in dollars, decline: that dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better. At an Italian bank ATM the charge-in-euros choice is worded senza conversione, without conversion." },
        { q: "Are the blue Euronet ATMs in Italy a rip-off?", a: "They are the pricey option. The bright blue standalone Euronet machines at tourist sites in Rome, Florence, Venice and Milan charge the highest fees and push the dollar conversion hardest. Use a Bancomat attached to a bank branch, such as Intesa Sanpaolo, UniCredit, BNL or BancoPosta, and read the on-screen fee first." },
        { q: "How much cash should I bring for a week in Italy?", a: "For two mid-range travelers, very roughly 300 to 400 euros of day-to-day cash across a week beyond your hotel, pulled in a couple of bank-ATM visits, with cards and contactless covering the rest. Adjust for how much you tap versus pay in cash." }
      ],
      sources: {
        links: [
          { label: "European Central Bank: the official euro reference exchange rates", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html", type: "gov" },
          { label: "US Department of State: Italy country information, including safety context relevant to ATM use", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Italy.html", type: "gov" }
        ],
        judgment: "Card acceptance is now near-universal in Italy and the legal obligation to accept cards is real, but ATM and card fees vary by your own bank, so much of this is our practical read. The euro rate moves, and the firm rule is to decline dollar conversion. Checked July 2026."
      }
    },
    {
      slug: "vat-refund",
      glance: [
        { k: "VAT rate", v: "22%" },
        { k: "Minimum", v: "70.01 euros, one store, one day" },
        { k: "You net", v: "About 11 to 15%" },
        { k: "Validate", v: "At an OTELLO kiosk on exit" }
      ],
      live: true,
      topic: "vat-refund",
      title: "Italy VAT refund for tourists (2026): the 70 euro minimum, OTELLO, and what you actually get back | True Trip Costs",
      description: "Non-EU visitors can reclaim part of Italy's 22% VAT on goods over 70.01 euros in one store. How the OTELLO digital validation works, the 2026 changes, and why operator fees leave you closer to 11 to 15%. Checked Jul 2026.",
      h1: "Italy's VAT refund, and what you actually get back.",
      lede: "Italy has the EU's highest VAT at 22%, and non-EU visitors can claim some of it back on shopping. The process is now digital and the threshold is low, but operator fees mean the real refund is well under the headline. Here is how it works.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Yes, if you shop enough in one place. Non-EU visitors can reclaim part of Italy's <b>22% VAT</b> on goods over <b>70.01 euros</b> bought in <b>one store on one day</b> (a single receipt, you cannot combine shops). Ask for a <b>tax-free form</b> with your passport at checkout, keep the goods <b>unused</b>, validate at an <b>OTELLO</b> digital kiosk at the airport before you check bags, then collect from the operator. The catch is the math: after <b>operator fees</b> you net closer to <b>11 to 15%</b>, not the full 22%, and a cash refund at the airport pays less than one to your card. Validate at your <b>final EU exit</b>.",
      sections: [
        {
          h: "Who qualifies, and the 70 euro minimum",
          icon: "receipt",
          key: { fig: "70 euros", tag: "One store, one day", text: "The refund is for non-EU residents taking goods home unused. Italy lowered the minimum to 70.01 euros in 2024 on a single receipt, so you cannot combine shops to reach it.", tone: "teal" },
          p: [
            "The refund is for <b>non-EU residents</b> taking goods home unused. Italy <b>lowered its minimum</b> from 154.95 euros to <b>70.01 euros</b> in 2024, and that lower threshold still applies in 2026, which brings mid-priced clothing, leather and cosmetics into range, not just luxury. The 70.01 euros must be spent in the <b>same store on the same day</b>, on a single receipt; you <b>cannot combine</b> a receipt from one shop with another. Department stores and outlets can sometimes combine boutique receipts under one roof.",
            "Only <b>goods</b> qualify, and they must leave the EU <b>unused</b>. Services you consume in Italy, like hotels, restaurants and transport, do not qualify, and neither do food or drink consumed there. Ask for the <b>tax-free form</b> at the moment of purchase, since a shop generally will not issue one later, and have your <b>passport</b> ready to link the sale."
          ]
        },
        {
          h: "OTELLO: the digital validation",
          icon: "qr",
          key: { fig: "Scan", tag: "No paper stamp", text: "Italy validates through OTELLO, which replaced the paper stamp. At the airport, scan the barcode on each tax-free form at an OTELLO kiosk before you check bags.", tone: "teal" },
          p: [
            "Italy validates through <b>OTELLO</b>, the customs system that has replaced the old paper stamp. At the airport you <b>scan the barcode</b> on each tax-free form at an <b>OTELLO kiosk</b> before checking any luggage that holds the goods; a green screen confirms it, and only then can the refund operator pay you. Kiosks are at the main airports including <b>Rome Fiumicino, Milan Malpensa, Venice, Florence, Naples and Bologna</b>.",
            "From <b>1 July 2026</b>, Italy simplified this further with a <b>single passport-based validation</b> for multiple forms at once, more cooperation between operators, and the export-proof deadline extended from four to <b>six months</b>. The through-line is the same: <b>validate before you check bags</b>, and keep the goods reachable in case customs wants to see them."
          ]
        },
        {
          h: "What you actually get back",
          icon: "coins",
          key: { fig: "11-15%", tag: "Not the full 22%", text: "The 22% VAT is the headline, but the refund operators, Global Blue, Planet and others, take a cut, so you typically net closer to 11 to 15% of the price.", tone: "amber" },
          p: [
            "This is where expectations meet reality. The <b>22% VAT</b> is the headline, but the <b>refund operators</b> (Global Blue, Planet and others) take a cut, so you typically net closer to <b>11 to 15%</b> of the price on ordinary purchases, a little more on large ones. A <b>cash refund</b> at the airport is convenient but pays the least; choosing a <b>refund to your card or bank</b> nets more but can take a few weeks.",
            "So the refund is real and worth it on a <b>meaningful purchase</b>, a designer bag or a good coat, but for a small buy the queue and the fees can outweigh it. Factor in that you will spend time at the kiosk and the operator desk, so arrive at the airport with margin."
          ]
        },
        {
          h: "The two-country trap, and the rest of the money picture",
          icon: "alert",
          key: { tag: "Validate at your EU exit", text: "If you fly onward through another EU country, you validate at your final EU exit, not in Italy. Fly Rome to Frankfurt to New York and you process the forms in Frankfurt.", tone: "amber" },
          p: [
            "A common mistake: if you are flying onward through another EU country, you <b>validate at your final EU exit</b>, not in Italy. Fly Rome to Frankfurt to New York, and you process the forms at <b>Frankfurt</b>, not Rome. Leaving overland to Switzerland, you validate at the border.",
            "The VAT refund is the shopping side of money in Italy. For the tax that lands on your hotel bill instead, see <a href=\"/italy/tourist-tax\">Italy's tourist tax</a>, and for paying day to day, <a href=\"/italy/cash-or-card\">cash or card in Italy</a>. The wider picture is in the <a href=\"/italy\">Italy money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "What is the minimum spend for a VAT refund in Italy?", a: "70.01 euros in one store on one day, on a single receipt. Italy lowered the threshold from 154.95 euros in 2024 and it still applies in 2026. You cannot combine receipts from different shops, though some department stores and outlets can combine boutique receipts under one roof." },
        { q: "How much VAT do I actually get back in Italy?", a: "Less than the 22% headline. After the refund operators take their cut, you typically net closer to 11 to 15% of the price, a little more on large purchases. A cash refund at the airport pays the least; a refund to your card nets more but can take a few weeks." },
        { q: "What is OTELLO in Italy?", a: "OTELLO is Italy's digital customs validation system, which replaced the paper stamp. You scan the barcode on your tax-free form at an OTELLO kiosk at the airport before checking bags; a green screen confirms it, and only then can the operator pay your refund. Kiosks are at Rome Fiumicino, Milan Malpensa, Venice, Florence, Naples and Bologna, among others." },
        { q: "Where do I validate my Italian tax-free form if I connect through another EU country?", a: "At your final point of departure from the EU, not in Italy. If you fly Rome to Frankfurt and then home, you validate at Frankfurt. If you leave overland to a non-EU country like Switzerland, you validate at the border crossing. Do this before checking any luggage with the goods." }
      ],
      sources: {
        links: [
          { label: "VATupdate: Italy's 2026 digital VAT-refund changes through OTELLO 2.0, including the single-validation reform and the 70.01 euro minimum", url: "https://www.vatupdate.com/2026/05/29/italy-streamlines-vat-refunds-for-non-eu-tourists-with-new-digital-rules/", type: "guide" },
          { label: "Fiscal-requirements: Italy's simplified tax-free validation from 1 July 2026 and the six-month export deadline", url: "https://www.fiscal-requirements.com/news/5526", type: "guide" }
        ],
        judgment: "The 22% rate, the 70.01 euro minimum and the OTELLO validation are current, and the July 2026 changes are drawn from tax-industry reporting on the Italian Customs (Agenzia delle Dogane) reform. The net-refund figure is a market estimate after operator fees and varies by operator and payout method, so treat 11 to 15% as a guide. Checked July 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Strong in cities and towns" },
        { k: "Carrier roaming", v: "About $12 a day" },
        { k: "Cheapest", v: "A travel eSIM, a few $ per GB" },
        { k: "Signal gaps", v: "High country and remote south" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "Staying connected in Italy (2026): the eSIM math, and where the mountains lose signal | True Trip Costs",
      description: "Italy's coverage is excellent in the cities and along the coast, so it is a cost question. Your US carrier charges about 12 dollars a day to roam; a Nomad eSIM is a few dollars per gigabyte. Expect gaps in the mountains. Checked Jul 2026.",
      h1: "Staying connected in Italy.",
      lede: "In Italy the coverage is strong where the visitors are, the cities, the coast, the hill towns, so the real decision is how you pay for data. For most US travelers an eSIM is far cheaper than the carrier day pass. Here is the math, and the few places signal drops.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Coverage is <b>strong</b> in cities, along the coast and in the hill towns, so this is mostly a cost question. Your US carrier charges about <b>12 dollars a day</b> to roam in Italy (<b>AT&amp;T and Verizon</b> day passes), and <b>T-Mobile</b>'s included roaming is often <b>slow 2G</b>, fine for messages but not maps. A <b>Nomad eSIM</b> is a few dollars per gigabyte, activates before you fly and works from landing, so for a data-first trip it is the cheapest option. Expect <b>weaker signal in the mountains</b> (the Dolomites, remote Sardinia and Sicily). Never roam <b>pay-per-use</b>, which runs about 2 dollars a megabyte.",
      sections: [
        {
          h: "A cost question first",
          icon: "roamfee",
          key: { fig: "$12/day", tag: "Roaming default", text: "Coverage is good where most people go, so this is mainly about cost. A US carrier day pass runs about $12 a day, and T-Mobile included roaming is often slow 2G, fine for messages but not maps.", tone: "teal" },
          p: [
            "Italy's mobile coverage is good across the places most people go, so the main decision is how you pay. The expensive default is roaming on your US plan: <b>AT&amp;T and Verizon</b> charge about <b>12 dollars a day</b>, so a week runs around <b>84 dollars</b>. <b>T-Mobile</b> and some Google Fi and Visible plans include roaming, but frequently at <b>slow 2G-style speeds</b> that handle messaging but struggle with maps and rideshare, so read your plan's fine print.",
            "Whatever you choose, do not roam with <b>no plan</b>. Pay-per-use data is around <b>2 dollars a megabyte</b>, thousands per gigabyte, and phones use data in the background, so <b>turn off data roaming</b> until an eSIM or pass is active."
          ]
        },
        {
          h: "Why an eSIM is usually cheapest",
          icon: "tag",
          key: { fig: "Few $/GB", tag: "The cheap option", text: "A travel eSIM is the cheapest way to get real data in Italy, a few dollars per gigabyte, well under day-pass fees. A Nomad eSIM activates before you fly and works on arrival.", tone: "teal" },
          p: [
            "A <b>travel eSIM</b> is the cheapest way for most visitors to get real data in Italy. A <b>Nomad eSIM</b> is a few dollars per gigabyte, well under day-pass fees, and it <b>activates before you fly</b> and works from landing, with no SIM counter and no Italian paperwork. Your US number stays reachable on your normal plan while the eSIM carries the data.",
            "The network barely matters in the places you will be: a Nomad eSIM rides a <b>major Italian network</b>, and coverage in the cities and along the coast is strong on all of them. Set it up before departure, since installing it needs a connection."
          ]
        },
        {
          h: "Where signal drops, and the practical bits",
          icon: "alert",
          key: { fig: "The Alps", tag: "Where signal thins", text: "Gaps are in the high country and remote south: parts of the Dolomites and Alps, the interiors of Sardinia and Sicily, and some rural roads. In a town you are fine.", tone: "teal" },
          p: [
            "The gaps are in the <b>high country and the remote south</b>: parts of the <b>Dolomites</b> and the Alps, the interiors of <b>Sardinia and Sicily</b>, and some rural hill and coastal roads. In a city or a well-visited town you will have fast 4G, with 5G in the bigger centers, but a mountain hike or a back-road drive can lose signal.",
            "So <b>download offline maps</b> before a mountain day or a rural drive. <b>WhatsApp</b> is widely used in Italy for things like confirming a tour or a table, so it is worth having. For paying as you go, see <a href=\"/italy/cash-or-card\">cash or card in Italy</a>, and the <a href=\"/italy\">Italy money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need an eSIM for Italy?", a: "For most US travelers it is the cheapest way to get real data. Italy's coverage is strong in cities and along the coast, so it is a cost question: a Nomad eSIM is a few dollars per gigabyte, versus about 12 dollars a day for an AT&T or Verizon roaming pass. Set it up before you fly and it works from landing." },
        { q: "How much does it cost to use my US phone in Italy?", a: "About 12 dollars a day on an AT&T or Verizon day pass, so roughly 84 dollars a week. T-Mobile and some other plans include roaming but often at slow 2G speeds. Never roam with no plan, since pay-per-use runs about 2 dollars a megabyte." },
        { q: "Will I have signal in the Italian mountains?", a: "Not always. Coverage is strong in cities and along the coast, but parts of the Dolomites and the Alps, and the interiors of Sardinia and Sicily, have gaps. Download offline maps before a mountain hike or a back-road drive, whatever network or eSIM you use." },
        { q: "Is an eSIM or a local SIM better for Italy?", a: "An eSIM is simpler for most visitors: no SIM counter and it works from landing if you set it up beforehand. A physical Italian SIM can suit very heavy, long-stay use, but for a normal trip a Nomad eSIM is more convenient, and coverage is strong either way." }
      ],
      sources: {
        links: [
          { label: "US Department of State: Italy country information and local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Italy.html", type: "gov" },
          { label: "Tom's Guide: a 2026 comparison of US carrier international roaming plans and day-pass prices", url: "https://www.tomsguide.com/us/wireless-carriers-international-travel-plans,review-4327.html", type: "guide" }
        ],
        judgment: "Carrier prices and inclusions change with your exact plan, so treat the day-pass figures as a July 2026 snapshot and check your own plan. The steady points are that Italian coverage is strong where visitors go, that a day pass is the pricey default, and that signal thins in the mountains and the remote south."
      }
    },
    {
      slug: "renting-a-car",
      glance: [
        { k: "Must carry", v: "IDP with your US license" },
        { k: "IDP cost", v: "About $20 from AAA" },
        { k: "Big trap", v: "ZTL camera zones in city centers" },
        { k: "Tolls", v: "Autostrada, pay by card or cash" }
      ],
      live: true,
      topic: "driving",
      carExcess: true,
      title: "Renting a car in Italy (2026): the ZTL fine trap, the permit you must carry, and the insurance excess | True Trip Costs",
      description: "Italy's historic-center ZTL cameras fine tourists months later through the rental company, plus you legally need an International Driving Permit. Skip the counter's pricey excess cover for a cheaper standalone policy. Checked Jul 2026.",
      h1: "What does renting a car in Italy really cost?",
      lede: "A car is wonderful for Tuscany, Puglia and the islands, and a liability in the big cities. Two things catch US drivers out before they even hit the road: a permit you must carry by law, and the camera zones that quietly fine you long after you fly home.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Two traps to get ahead of. First, you <b>legally need an International Driving Permit</b> (IDP) alongside your US license; without it agencies can refuse the car and police can fine you <b>400 euros or more</b>. Get it from <b>AAA</b> before you fly (about 20 dollars). Second, the <b>ZTL</b> camera zones in historic centers (Rome, Florence, Pisa, Milan, Naples and more) fine you about <b>80 to 130 euros per entry</b>, arriving <b>months later</b> via the rental company plus a <b>25 to 60 euro admin fee</b> each. On insurance, your <b>US card and policy generally do not cover you in Europe</b>, so decline the counter's pricey excess reduction and buy a <b>cheaper standalone excess policy</b> instead.",
      sections: [
        {
          h: "The permit you must carry",
          icon: "passport",
          key: { fig: "$20 IDP", tag: "Get it before you fly", text: "Italy requires non-EU drivers to carry an International Driving Permit with their home license. Without it, agencies can refuse the car and police can fine you 400 euros or more. Get one from AAA for about $20.", tone: "teal" },
          p: [
            "Italy requires non-EU drivers to hold an <b>International Driving Permit</b> together with their home license. It is essentially an official translation of your US license, and it is <b>not optional</b>: rental desks can <b>refuse to hand over the car</b> without one, and if the <b>Polizia Stradale</b> stop you, the fine for driving without a valid permit starts around <b>400 euros</b> and can climb much higher, with the car impounded until a licensed driver collects it.",
            "You <b>cannot buy an IDP in Italy</b>. Get it in the US before you travel, from <b>AAA</b> (about <b>20 dollars</b>, a week or two by mail), and carry it with your physical license and passport. Ignore any website selling instant online IDPs, they are not valid."
          ]
        },
        {
          h: "ZTL: the fine that finds you months later",
          icon: "alert",
          key: { tag: "Cameras, not signs", text: "Almost every historic center, Rome, Florence, Milan, Siena and more, has a ZTL camera zone. Drive in unknowingly and a fine arrives by mail months later, sometimes several.", tone: "amber" },
          p: [
            "This is the classic Italy money trap. Almost every historic center, <b>Rome, Florence, Pisa, Milan, Siena, Bologna, Naples</b> and many more, has a <b>ZTL</b> (Zona a Traffico Limitato), a camera-enforced zone that only residents and permit holders may enter during posted hours. Drive in by mistake and a camera reads your plate. Each <b>entry is a separate fine</b>, roughly <b>80 to 130 euros</b>, so one confused loop can trigger several.",
            "You will not know at the time. The fine goes to the car's registered keeper, the <b>rental company</b>, which bills it to your card <b>weeks or months later</b> (sometimes up to a year or two), adding an <b>admin fee of about 25 to 60 euros per ticket</b>. Your sat-nav may route you straight through a ZTL, so watch for the <b>round ZTL sign</b> and camera gates, park outside the center and walk, and if your hotel is inside a ZTL, send it your plate <b>in advance</b> so it can register you for temporary access."
          ]
        },
        {
          h: "Insurance: decline the counter, cover the excess",
          icon: "receipt",
          key: { fig: "Cover it", tag: "US cover does not apply", text: "Unlike in Canada, your US auto policy and credit-card collision generally do not apply in Italy, so you do need some collision protection. The rental includes basic cover with a high excess.", tone: "teal" },
          p: [
            "Unlike in Canada, your <b>US auto policy and credit-card collision cover generally do not apply in Italy</b>, so you do need some form of collision protection. The rental includes basic collision and theft cover with a <b>high excess</b> (the amount you owe if the car is damaged), often <b>1,000 to 1,500 euros or more</b>, and the counter will offer to <b>reduce that excess</b> for a steep daily fee.",
            "The cheaper route is to <b>decline the counter's excess reduction</b> and hold a <b>standalone excess policy</b> bought in advance, which reimburses the excess for a fraction of the counter price. That is what the option on this page covers. Keep a credit card in the main driver's name for the <b>deposit hold</b>."
          ]
        },
        {
          h: "Tolls, fuel and where not to drive",
          icon: "euro",
          key: { fig: "Tolled", tag: "Autostrada and fuel", text: "The autostrada motorways are tolled: take a ticket on entry and pay by card or cash on exit. Fuel is among the most expensive in Europe, so budget for it.", tone: "teal" },
          p: [
            "On the road, the <b>autostrada</b> motorways are tolled: take a ticket on entry and pay on exit by <b>card or cash</b>, or use a Telepass lane. Fuel is <b>among the most expensive in Europe</b>. Drivers under 25 pay a <b>young-driver surcharge</b>, and one-way drops cost extra.",
            "The best money move is often <b>where you drive</b>. For <b>Rome, Florence, Venice, Milan and Naples</b>, skip the car: parking is dear and scarce, the ZTL risk is real, and fast trains link the cities. Rent for the places a car actually helps, <b>Tuscany, Umbria, Puglia, Sicily and Sardinia</b>. For paying day to day, see <a href=\"/italy/cash-or-card\">cash or card in Italy</a>, and the <a href=\"/italy\">Italy money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need an International Driving Permit to rent a car in Italy?", a: "Yes. Italy legally requires non-EU drivers, including US license holders, to carry an International Driving Permit alongside their license. Rental agencies can refuse the car without one, and police fines for driving without a valid permit start around 400 euros. Get an IDP from AAA in the US before you travel; you cannot buy one in Italy." },
        { q: "What is a ZTL, and how do the fines work in Italy?", a: "A ZTL (Zona a Traffico Limitato) is a camera-enforced limited-traffic zone in Italian historic centers that only permit holders may enter. Drive in by accident and each entry is a separate fine of about 80 to 130 euros, billed to your card months later by the rental company plus a 25 to 60 euro admin fee. Watch for the round ZTL sign and do not trust your sat-nav to avoid it." },
        { q: "Does my US insurance cover a rental car in Italy?", a: "Generally no. Unlike in Canada, US auto policies and credit-card collision cover usually do not apply in Europe, so you need collision protection in Italy. The rental has a high excess; rather than pay the counter's steep excess-reduction fee, a standalone excess policy bought in advance covers the same gap for less." },
        { q: "Should I rent a car for Rome or Florence?", a: "Usually no. Rome, Florence, Venice, Milan and Naples have scarce, expensive parking and ZTL zones that fine drivers, and fast trains link them. Rent a car for the countryside and islands instead, such as Tuscany, Umbria, Puglia, Sicily or Sardinia, and use trains and transit for the big cities." }
      ],
      sources: {
        links: [
          { label: "US Department of State: Italy country information, including road travel and the International Driving Permit requirement", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Italy.html", type: "gov" },
          { label: "Untold Italy: a 2026 guide to renting a car in Italy, ZTL fines and the IDP", url: "https://untolditaly.com/renting-a-car-in-italy/", type: "guide" }
        ],
        judgment: "The IDP requirement and the ZTL camera system are well established; the exact fine and admin-fee amounts vary by city and rental company, and can arrive up to a year or more later, so treat the euro figures as typical 2026 ranges. The steady advice is to carry an IDP, avoid the historic-center ZTLs, and cover the insurance excess before the counter. Checked July 2026."
      }
    }
  ]
};
