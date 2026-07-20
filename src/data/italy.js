export default {
  slug: "italy",
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
          p: [
            "Italian taxis are <b>white</b>, metered, and licensed to a specific city, and in practice you cannot flag one down on the street. Drivers are almost always already booked or heading to a rank, and near a taxi stand they are not even allowed to pick you up off the street. So the two ways to get a cab are to walk to a <b>taxi rank</b>, which you will find at stations, main squares and airports, or to use an <b>app</b>.",
            "The apps to use are <b>itTaxi</b> and <b>FreeNow</b> (FreeNow is now part of Lyft), both of which dispatch the same licensed white metered taxis and let you pay by card. One payment note: if you did not book through an app, expect to pay <b>cash</b>. Drivers are technically required to accept cards, but in practice many do not, and you do not want to be arguing about it at the end of a ride."
          ]
        },
        {
          h: "Uber in Italy: only the pricey Black",
          p: [
            "If you are used to opening Uber and getting a cheap ride, Italy will surprise you. The <b>UberX</b> model, ordinary people driving their own cars, was <b>banned by Italian courts in 2017</b> as unfair competition to licensed taxis. What remains is <b>Uber Black</b>, a premium pre-booked service using licensed private-hire (NCC) drivers in dark cars, which is comfortable but noticeably more expensive.",
            "So treat Uber here as a chauffeur service, not a budget option. For a normal metered taxi at the regular fare, use <b>itTaxi</b> or <b>FreeNow</b>, or a taxi rank. The same caution applies to any <b>NCC</b> (noleggio con conducente) driver offered to you at an airport: they are legal but un-metered and pricier than a taxi, so know that is what you are choosing."
          ]
        },
        {
          h: "The airport fixed fare, and the abusivi",
          p: [
            "The single best protection for a visitor is the <b>fixed airport fare</b>. From <b>Rome Fiumicino</b> (FCO), a licensed white taxi to anywhere within the <b>Aurelian Walls</b>, the historic centre, is a flat <b>50 euros</b>, charged per car for up to four passengers, with no extra for luggage, night driving or holidays. <b>Ciampino</b> and <b>Milan Malpensa</b> have their own fixed fares. Confirm you are getting the fixed fare before the meter starts, and note it applies only to Rome-licensed white taxis taken from the rank.",
            "The scam to know is the <b>abusivi</b>, unlicensed drivers most common at Fiumicino and busy tourist sites. They approach you <b>inside the terminal</b>, often in plain clothes with a car that is not white, and offer a fixed price that turns out to be two to four times the real fare. Official drivers wait at the rank and never approach you, so the rule is simple: <b>only take a taxi from the official rank</b>, and refuse anyone who comes up to you. Into Rome, the <b>Leonardo Express</b> train is a cheap and reliable alternative."
          ]
        },
        {
          h: "Fares, paying and tipping",
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
          p: [
            "There is no Italy-only pet permit and no national quarantine. Bringing a dog or cat into Italy from the US is the standard EU move: an ISO microchip first, a rabies vaccination after the chip, then an EU Animal Health Certificate completed by a USDA-accredited vet and endorsed by APHIS, with the pet arriving within 10 days of endorsement. A first rabies shot adds a 21-day wait before travel.",
            "Because the process is identical across all 27 member countries, we do not repeat it per country. The full sequence, the microchip-before-rabies trap that costs people the most time, the 10-day clock, and the current APHIS endorsement fees all live on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Read that first, then come back for the Italy notes."
          ]
        },
        {
          h: "The Italy-specific parts",
          p: [
            "At the border, Italian customs may ask to see the endorsed certificate and confirm the microchip, and pets should enter through a designated traveller point of entry, which the major airports are. There is no dog or cat tapeworm rule for Italy, unlike Ireland, Finland or Malta.",
            "After you settle in, the Italy-specific step is registration in the national canine registry (anagrafe canina), which ties your dog's microchip to you at your Italian address and is handled through a local vet or the regional health authority (ASL). Italy does not keep a national banned-breed list the way some EU countries do, having moved away from breed-specific bans toward owner-responsibility rules, but muzzle-and-leash expectations still apply in public spaces. Register the pet once you have an address, and keep the EU certificate until you do."
          ]
        },
        {
          h: "Coming back to the US is the easy part",
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
    }
  ]
};
