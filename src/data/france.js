export default {
  slug: "france",
  live: true,
  name: "France",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  sources: {
    changed: "Sources added. Verified that Paris raised its taxe de sejour on 1 January 2026, so a mid-range hotel now runs about 6 euros a person per night and the top categories more, while most towns outside Paris stay at a euro or two. The detaxe VAT refund still starts at 100 euros spent in one store. The guide's figures are current.",
    links: [
      { label: "French government (service-public.fr): the Paris taxe de sejour rates that took effect 1 January 2026", url: "https://www.service-public.gouv.fr/particuliers/actualites/A17929?lang=en", type: "gov" },
      { label: "Paris Convention and Visitors Bureau: the tourist tax by accommodation category, per person per night", url: "https://parisjetaime.com/eng/article/tourist-tax-a616", type: "tourism" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "112", note: "112 reaches every service, and 15 connects you straight to the medical service, the SAMU.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  rentalCommon: true,
  region: "Europe",
  signals: { cardFriendliness: 4, cashNeed: 2, taxRisk: 3, atmRisk: 4 },
  title: "Money in France (2026): Cash, Cards, ATMs, Tipping and the VAT Refund | True Trip Costs",
  description: "How to handle money in France as a US traveler in 2026: cash vs card, which ATMs to use and which to avoid, the dollar conversion trap, tipping with service compris, the tourist tax, and the VAT refund. Checked July 2026.",
  h1: "Money in France, sorted.",
  lede: "A calm, current plan for the money side of your trip: what to tap, the little cash you still want, and the small rules that trip up first-timers.",
  hero: {
    img: "/france-hero.jpg",
    h: 1375,
    alt: "A quiet French village street at dusk with string lights overhead, blue shutters and red flowers, a bell tower and lavender fields in the distance, a lone figure walking away, and a bowl of cassoulet, a baguette and a glass of rose on a wooden table in the foreground"
  },
  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',
  verdict: "France runs on <b>cards</b>. Visa and Mastercard work almost everywhere, contactless (\"sans contact\") is the norm, and Apple Pay and Google Pay are widely accepted. You still want <b>a little cash</b> for bakeries, open-air markets, small cafes and tips. Bring a <b>no-fee Visa or Mastercard</b>, pull euros from a <b>bank ATM</b> rather than a Euronet kiosk, and one rule everywhere: <b>always choose euros, never dollars</b>.",
  meter: {
    heading: "Day to day, France is mostly card.",
    cashPct: 25,
    note: "A rough feel for everyday spending. Cities, shops, restaurants and transit are overwhelmingly card and contactless. The cash you do want is for bakeries, open-air markets, small village cafes, a few tips, and the odd shop with a card minimum. Out in the countryside, carry a little more."
  },
  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are taken nearly everywhere, and contactless is standard, including Apple Pay and Google Pay. Amex is less widely accepted. A few small shops set a card minimum, often around 5 to 10 euros.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "A little, for the small stuff", p: "You can get through most days on a card, but keep some euros for bakeries, open-air markets, small cafes, tips and rural spots. A few coins are handy for some public toilets too.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy, skip the Euronet ones", p: "Plentiful in towns and cities. Use a machine attached to a real bank (BNP Paribas, Credit Agricole, Societe Generale, LCL), not a standalone Euronet or Travelex kiosk, which charge more and push the dollar conversion.", cta: { label: "See fee-saving cards", href: "#" } }
  ],
  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> for almost everything, plus a backup card from a different bank.",
      "Add a <b>no-fee debit card</b> for ATM cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "Set your cards up for <b>contactless</b> and add them to Apple Pay or Google Pay. Most US issuers no longer need a travel notice, but it does not hurt to flag the trip."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters; their rates are poor.",
      "For cash, find a <b>bank ATM</b> rather than the bright <b>Euronet</b> kiosks near the exits, and <b>decline \"convert to USD.\"</b> Always choose euros.",
      "Pull a larger amount at once so any per-withdrawal fee stings less."
    ], cta: { label: "Find fee-saving cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your card or phone</b> for almost everything: shops, restaurants, museums and transit.",
      "Keep <b>cash</b> for bakeries, open-air markets, small village cafes and tips.",
      "<b>Always choose euros</b> on the card terminal and the ATM screen, never dollars."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in euros, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "This is true at shop card terminals and at ATMs alike, and the standalone Euronet machines push it hardest."
    ], cta: null }
  ],
  cash: {
    rate: 0.88, cur: "EUR", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 1.14 dollars to the euro in mid-2026, so roughly 0.88 euros per dollar. France is card-first, so this is the smaller, cash-in-hand slice of your spending.",
    styles: [ { n: "Budget", per: 50, cash: 0.35, room: 90 }, { n: "Mid-range", per: 105, cash: 0.25, room: 170 }, { n: "Comfort", per: 190, cash: 0.15, room: 330 } ]
  },
  connectivity: {
    works: "Yes across the cities, tourist regions and main routes, with excellent 4G and 5G growing in the bigger cities and along the TGV lines. Signal thins in the Alps and Pyrenees valleys and remote rural areas like inland Brittany and the Dordogne."
  },
  // TOURIST TAX (high-churn, verified Jul 2026). A nightly tourist tax (taxe de sejour)
  // charged per person and collected by your accommodation. The amount rises with the
  // hotel's rating, so the calculator uses a mid-range figure per city. Children under
  // 18 are exempt.
  // Typical economy round trip per person from major US gateways, as a verified
  // RANGE, never a point. Sourced from fare-tracker averages (Kayak, momondo,
  // Skyscanner published route data), deliberately wide to cover season and
  // gateway. HIGH-CHURN: re-verify on the tourist-tax cadence. The calculator
  // prefills the midpoint, feeds low/high into the confidence range until the
  // traveler enters their own fare, and hides the estimate if this block is absent.
  flight: { low: 550, high: 1150, checked: "Jul 2026", checkedISO: "2026-07-18" },
  tax: {
    unit: "perPersonPerNight",
    currency: "EUR",
    capNights: null,
    note: "A nightly tourist tax (taxe de sejour) charged per person and collected by your accommodation. The amount depends on the hotel rating, so this is a mid-range estimate. Children under 18 are exempt.",
    regions: [
      { key: "paris", label: "Paris", rate: 6, note: "Paris raised its tourist tax for 2026. Grand and palace hotels pay well above this mid-range figure, while simple hotels pay less." },
      { key: "nice", label: "Nice and the Riviera", rate: 3 },
      { key: "lyon", label: "Lyon", rate: 3 },
      { key: "other", label: "Elsewhere in France", rate: 1.5, note: "Most French towns charge a small per-person tax, commonly 1 to 3 euros a night by hotel rating. Some rural spots charge very little." }
    ]
  },
  currencyHeading: "The euro, in plain terms.",
  facts: [
    { sym: "euro", k: "Quick conversion", v: "About 1.14 dollars to 1 euro in mid-2026, so a 10 euro lunch is roughly $11 and 50 euros is about $57. Prices show the euro sign, often after the number, as in \"12 \u20AC\"." },
    { sym: "coins", k: "Notes and coins", v: "Notes run 5, 10, 20, 50, 100, 200 and 500 euros, though many shops dislike anything above 50; coins go from 1 cent to 2 euros. Keep small notes and a few coins for bakeries, markets and toilets." },
    { sym: "card", k: "Contactless is king", v: "Tap to pay is everywhere, usually with no PIN under about 50 euros, and Apple Pay and Google Pay are widely accepted. Carry a chip-and-PIN card as backup for the odd machine that wants it." },
    { sym: "tip", k: "Service is included", v: "Restaurant and cafe prices include a service charge by law (\"service compris\"), so tipping is optional and small. There is no US-style percentage to track." }
  ],
  taxfree: {
    label: "Taxes and refunds",
    heading: "The tourist tax on your room, and money back on shopping.",
    text: "Two things to know. Most towns add a small <b>tourist tax (taxe de sejour)</b> to your lodging, charged per person per night, usually a euro or two, collected at the hotel or built into an Airbnb booking, and children under 18 are exempt. It is higher in Paris, which raised its rates in 2026, where a mid-range hotel can run around 6 euros and up per adult per night. Separately, non-EU visitors can claim a <b>VAT refund (detaxe)</b> on shopping. French VAT is 20%, and if you spend <b>over 100 euros in one store on the same day</b>, ask for a tax-free form (\"detaxe\"), show your passport, keep the goods unused, and validate at a <b>PABLO kiosk</b> when you leave the EU. After fees you get roughly 10 to 15% back. Apps like ZappTax or Wevat can combine smaller receipts to clear the threshold."
  },
  recentChange: {
    date: "Jan 2026",
    text: "<b>Paris raised its tourist tax.</b> From January 1, 2026 the city's nightly <i>taxe de sejour</i> went up, partly to fund transport and 2028 Olympic-legacy projects. Expect roughly 6 euros and up per adult per night at a mid-range Paris hotel, and more at higher categories, charged separately from your room rate. Children under 18 are still exempt, and most towns outside Paris stay at a euro or two."
  },
  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> At a card terminal or ATM, choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%. Pick euros every time.",
    "<b>Avoid the Euronet and Travelex kiosks.</b> The bright standalone machines at airports, stations and tourist squares charge high fees and push dollar conversion. One traveler was charged a flat 3.95 euro fee on a 20 euro withdrawal even after declining the conversion. Use a bank-branch ATM instead.",
    "<b>Watch your pockets in crowds.</b> Paris pickpockets work the metro, the steps at Sacre-Coeur and the lines at big sights. Keep cards and phone in a front or zipped pocket, and be wary of the friendship-bracelet and clipboard-petition distractions.",
    "<b>Some small spots are cash, or have a minimum.</b> A few bakeries, market stalls and village cafes are cash-preferred or set a card minimum around 5 to 10 euros, so keep a little cash and some coins on you.",
    "<b>Tap water is free.</b> Ask for \"une carafe d'eau\" at restaurants instead of paying for bottled water. It is normal, expected and safe."
  ],
  tippingHeading: "Service is included, so tip lightly.",
  tipping: "By French law, restaurant and cafe prices already include a service charge, shown as \"service compris,\" and staff earn a full wage. So tipping is optional and modest, not the US 15 to 20%. For good service, round up or leave a euro or two; in a nicer restaurant, about 5% is generous. Cash is best, since a tip left in cash goes straight to the staff, while the newer card-terminal tip prompts may be pooled or skipped. At a hotel, a euro or two for housekeeping or a couple of euros per bag for a porter is plenty, and a few euros for a helpful taxi driver or tour guide. There is never any pressure, and no one will think less of you for not tipping.",
  faqs: [
    { q: "Do I need cash in France?", a: "Not much. France is card-first, and contactless works almost everywhere, including Apple Pay and Google Pay. Keep some euros for bakeries, open-air markets, small village cafes, tips and the occasional shop with a card minimum, but you can put most spending on a card." },
    { q: "What ATM should I use in France?", a: "Use a machine attached to a real bank, such as BNP Paribas, Credit Agricole, Societe Generale or LCL. Avoid the standalone Euronet and Travelex kiosks at airports, stations and tourist squares; they charge more and push the dollar conversion. Always choose to be charged in euros." },
    { q: "Should I pay in euros or dollars in France?", a: "Always euros. If a card machine or ATM offers to charge you in dollars, decline. That dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
    { q: "Do you tip in France?", a: "Only lightly. Service is included by law (\"service compris\") and staff are paid a full wage, so tipping is optional. Round up or leave a euro or two for good service, or about 5% in a nicer restaurant. Cash is better than the card-terminal prompt." },
    { q: "What is the tourist tax and VAT refund in France?", a: "Most towns add a small taxe de sejour to your lodging, per person per night, usually a euro or two and higher in Paris, with under-18s exempt. Separately, non-EU visitors can reclaim VAT (detaxe) on shopping over 100 euros in one store on the same day: ask for the tax-free form, keep the goods unused, and validate at a PABLO kiosk when you leave. After fees you get roughly 10 to 15% back." },
    { q: "How much cash should I bring for a week in France?", a: "For two mid-range travelers, very roughly 200 to 300 euros in day-to-day cash across a week, beyond your hotel, pulled in one or two ATM visits. France is card-first, so most spending goes on a card and the cash is for small extras." }
  ],

  culture: {
    heading: "A little French goes a long way",
    intro: "A little French, starting with Bonjour, changes everything here. Say it as you walk into any shop, cafe or lift, add a story or two, and you become a guest rather than a tourist.",
    phrases: [
      { mean: "Hello, good day", say: "bawn-ZHOOR", word: "Bonjour" },
      { mean: "Please", say: "seel voo PLEH", word: "S'il vous plaît" },
      { mean: "Thank you", say: "mair-SEE", word: "Merci" },
      { mean: "Excuse me, sorry", say: "pahr-DOHN", word: "Pardon" },
      { mean: "Cheers", say: "sahn-TAY", word: "Santé" },
      { mean: "Delicious", say: "deh-lee-SYUH", word: "Délicieux" },
    ],
    tip: "The single most important word in France is <b>Bonjour</b>. Say it before anything else when you enter a shop or approach someone, because skipping straight to your question can read as rude. Add <b>Madame</b> or <b>Monsieur</b> and you will be met warmly.",
    stories: [
      { img: "/france-culture-1.jpg",
        alt: "WPA-style illustration of a painter seen from behind at an easel beside a still water-lily pond, a green Japanese footbridge and weeping willows in soft light",
        h: "Painting the light itself",
        p: "In gardens like these, French painters broke the old rules and chased the light itself, dabbing colour straight onto the canvas to catch a passing moment. Claude Monet painted his own water-lily pond at Giverny again and again across the seasons. The movement they began, Impressionism, changed art forever.",
        note: "Good to know: Monet's garden at Giverny still blooms" },
      { img: "/france-culture-2.jpg",
        alt: "WPA-style illustration of prehistoric artists by torchlight painting a great ochre horse and a red bull on a curving cave wall deep underground",
        h: "Art from the dawn of time",
        p: "Deep in a cave in the Dordogne, early hunters painted horses, bulls and deer on the walls around 17,000 years ago, by the light of flickering lamps. The Lascaux paintings are so alive they are called the Sistine Chapel of prehistory. The real cave is closed now to protect it, but a faithful replica nearby lets you see them.",
        note: "Good to know: see the replica, Lascaux IV" },
      { img: "/france-culture-3.jpg",
        alt: "WPA-style illustration of a grand Belle Epoque Paris cafe at dusk, patrons at little marble tables under a striped awning and a waiter carrying a tray",
        h: "Life at the cafe",
        p: "The Paris cafe is not fast food, it is a place to sit, watch the street and let time pass, and a single coffee buys you the table for as long as you like. In the Belle Epoque, the golden years around 1900, cafes were where artists, writers and everyone else met. Order un café, take a little table on the pavement, and you are part of it.",
        note: "Say it: un café (uhn kah-FAY)" },
    ],
    pride: "The French are proud of their art of living, the food, the wine, the language and the long lunch, and they love to share it with anyone who makes a little effort. Lead with Bonjour and a smile, and any coolness melts fast."
  },

  spokes: [
    {
      slug: "taxis-and-apps",
      live: true,
      topic: "taxis",
      caution: "low",
      title: "How taxis and Uber work in Paris, and the CDG airport fixed fare (2026) | True Trip Costs",
      description: "How Paris taxis and ride apps work (real Uber and Bolt here, plus G7 and FreeNow), the government-fixed CDG and Orly airport fares, the unlicensed touts to skip, and when the RER B train wins. Checked July 2026.",
      h1: "Paris taxis and Uber, and the CDG fixed fare",
      lede: "Paris gives you real choice, a hailable licensed taxi or a proper Uber, but the airport is where money is won or lost. Here is how the two compare, the fixed fare that protects you, and the tout trick to skip.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Paris has real choice: hail a licensed <b>taxi</b> on a regulated meter, or use <b>Uber</b> and <b>Bolt</b>, which run proper ride-hailing cars here, plus <b>G7</b> or <b>FreeNow</b> to book a licensed cab. The big protection is the airport <b>fixed fare</b>: from <b>Charles de Gaulle</b>, a licensed taxi to the <b>Right Bank</b> is a flat <b>56 euros</b> and to the <b>Left Bank</b> <b>65 euros</b>, luggage and tolls included, 24/7, for up to 4 people. Uber has <b>no fixed airport rate</b>, so it surges. The scam to skip is the unlicensed <b>touts</b> at CDG who quote 120 to 200 euros for that ride, so ignore anyone who approaches you and follow the signs to the official rank.",
      sections: [
        {
          h: "Taxi or app: you have real choice here",
          p: [
            "Unlike Italy or Greece, France has proper ride-hailing. <b>Uber</b> and <b>Bolt</b> run real private-hire cars (called <b>VTC</b>), so opening Uber works the way it does at home, with an upfront price and, yes, surge pricing at busy times. You can <b>also</b> hail a licensed <b>taxi</b> on the street or at a rank, running a regulated meter with three tariffs that change by time of day and zone and a starting charge of about 4 euros. To book a licensed taxi through an app, use <b>G7</b>, Paris's biggest taxi network, or <b>FreeNow</b>.",
            "One rule for the apps: you cannot just grab an Uber or Bolt <b>spontaneously at the airport</b>. You book in the app and walk to the designated pickup point, which the app shows by door and level. For a short city trip, an Uber is often a few euros cheaper than a metered taxi, and licensed taxis must accept a card."
          ]
        },
        {
          h: "The CDG and Orly fixed fare",
          p: [
            "The key protection is the airport <b>fixed fare</b>, set by government decree, identical day and night, with luggage and tolls included, for up to 4 passengers, on <b>licensed taxis from the official rank</b>. From <b>Charles de Gaulle</b> (CDG): the <b>Right Bank</b> is <b>56 euros</b> and the <b>Left Bank</b> is <b>65 euros</b>. From <b>Orly</b> it is roughly <b>37 to 44 euros</b>. It is worth knowing which bank your hotel is on, since the fixed fare depends on it.",
            "The catch that costs people money: <b>Uber and Bolt have no fixed airport rate</b>, so their price rises with demand and can reach 80 to 120 euros from CDG at peak times or in bad weather. For the airport specifically, the <b>fixed-fare licensed taxi is often the cheaper and more predictable</b> choice, which is the opposite of the usual city advice."
          ]
        },
        {
          h: "The CDG touts, and the cheap train",
          p: [
            "The notorious scam at Charles de Gaulle is the <b>unlicensed tout</b>. Someone approaches you inside or just outside the terminal, asks if you are <b>going to Paris</b> or need a taxi, and then charges <b>120 to 200 euros</b> for the same ride the official fixed fare covers for 56, in an unmarked car. The Paris airports openly warn about these <b>false taxis</b>. The rule is simple: <b>ignore anyone who approaches you</b>, follow the signs, the blue circles on the floor and the overhead <b>Taxi</b> signs, to the official taxi rank, where a marshal points you to a licensed cab and the fixed fare applies.",
            "The cheap alternative into central Paris is the <b>RER B</b> train, about <b>12 euros</b> to <b>Chatelet-Les Halles</b> and <b>Saint-Michel</b> in 30 to 35 minutes, which is the best value for a solo traveler. For a family or a group of up to four with luggage, the fixed-fare taxi works out competitive per person and drops you at the door."
          ]
        },
        {
          h: "Fares, paying and tipping",
          p: [
            "In the city, the meter runs one of <b>three tariffs</b>, daytime, evening and Sunday, and night and suburbs, shown by a light on the roof, and there is no flat-rate haggling for a city trip. Licensed taxis must <b>accept a card</b> and give a receipt for any fare of 25 euros or more, so ask for one if you need proof. On the airport <b>fixed fare</b>, no extra supplements apply.",
            "Tipping is not expected in France, and rounding up to the nearest euro, or 5 to 10 percent for good service, is plenty. For the wider money picture, including how much cash to carry and where cards work, see the <a href=\"/france\">France money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Does Uber work in Paris?", a: "Yes, properly. France has real ride-hailing, so Uber and Bolt run private-hire (VTC) cars with upfront pricing, unlike Italy or Greece where the apps only dispatch licensed taxis. You can also hail a licensed metered taxi or book one through G7 or FreeNow. Note that Uber and Bolt surge and have no fixed airport rate, so compare them against the fixed taxi fare for airport runs." },
        { q: "What is the taxi fare from CDG to Paris?", a: "A government-set flat fare on licensed taxis from the official rank: 56 euros to the Right Bank and 65 euros to the Left Bank, luggage and tolls included, identical day and night, for up to 4 passengers. Orly is roughly 37 to 44 euros. Know which bank your hotel is on. Uber and Bolt have no fixed airport rate and surge, so the fixed-fare taxi is often cheaper and more predictable." },
        { q: "How do I avoid the taxi scam at Charles de Gaulle?", a: "Ignore anyone who approaches you inside or near the terminal asking if you need a taxi or are going to Paris; they are unlicensed touts who charge 120 to 200 euros for the ride the fixed fare covers for 56. Follow the signs, the blue circles on the floor and overhead Taxi signs, to the official rank, where a marshal assigns you a licensed cab at the fixed fare. For an Uber or Bolt, book in the app and go to the designated pickup point." },
        { q: "Should I take a taxi or the train from CDG?", a: "For value, the RER B train is about 12 euros to central Paris (Chatelet-Les Halles, Saint-Michel) in 30 to 35 minutes, best for a solo traveler. For door-to-door with luggage or a group of up to four, the fixed-fare taxi (56 euros to the Right Bank, 65 to the Left Bank) is competitive per person and hassle-free. Uber works but surges at the airport." }
      ],
      sources: {
        links: [
          { label: "US Department of State: France country information, general safety and local-travel context for US visitors", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/France.html", type: "gov" },
          { label: "Hootling: a 2026 guide to the CDG to Paris fixed taxi fare, the unlicensed touts and the RER B train", url: "https://www.hootling.com/blog/taxi-cdg-to-paris", type: "guide" },
          { label: "AlloTaxi: Paris taxi rates for 2026, the decree-set airport flat fares and the three meter tariffs", url: "https://www.allotaxi.net/service-taxi/en/paris-taxi-rates.html", type: "guide" }
        ],
        judgment: "The fixed airport fares are set by decree but can be revised, and city meter tariffs and app surge pricing move, so confirm the fixed fare before you ride and treat euro figures as a recent read. Checked July 2026."
      }
    },
    {
      slug: "bringing-your-pet",
      live: true,
      topic: "pets",
      title: "Bringing a dog or cat to France from the US (2026): the EU process, and the France-specific parts | True Trip Costs",
      description: "Moving to France with a pet from the US: why it runs on the shared EU health-certificate process, no quarantine and no titer, plus what is specific to France on arrival and after you settle in. Checked July 2026.",
      h1: "Bringing your dog or cat to France.",
      lede: "France is one of the most common EU destinations for US pet owners, and the good news is there is nothing France-specific to fear at the border. It runs on the single EU pet-entry process: microchip, rabies in the right order, and an EU health certificate on a 10-day clock. No quarantine, no rabies titer. Here is what that means for France, and the local parts worth knowing.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "France uses the <b>shared EU pet-entry process</b>, so there is no separate French permit and nothing unusual at the border. Your pet needs an <b>ISO microchip, a rabies vaccination given after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS</b>, then must enter France within <b>10 days</b> of that endorsement. There is <b>no quarantine and no rabies titer</b> for a pet coming straight from the US. We keep the full step-by-step, the ordering trap, and the current fees on one page: see <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a>. Below are the France-specific notes. Coming home to the US is the easy part.",
      sections: [
        {
          h: "France runs on the EU process",
          p: [
            "There is no France-only pet permit and no national quarantine. Bringing a dog or cat into France from the US is the standard EU move: an ISO microchip first, a rabies vaccination after the chip, then an EU Animal Health Certificate completed by a USDA-accredited vet and endorsed by APHIS, with the pet arriving within 10 days of endorsement. A first rabies shot adds a 21-day wait before travel.",
            "Because the process is identical across all 27 member countries, we do not repeat it per country. The full sequence, the microchip-before-rabies trap that costs people the most time, the 10-day clock, and the current APHIS endorsement fees all live on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Read that first, then come back for the France notes."
          ]
        },
        {
          h: "The France-specific parts",
          p: [
            "At the border, French customs may ask to see the endorsed certificate and confirm the microchip, and pets should enter through a designated traveller point of entry, which the major airports are. There is no cat or dog tapeworm rule for France, unlike Ireland, Finland or Malta.",
            "After you settle in, the practical French thing to know is identification. France requires pets to be identified and registered in the national database (I-CAD), and a French vet can update your pet's ISO microchip details into that system once you have a local address. Certain dog types classed as category 1 and 2 (some guarding and attack breeds) face extra French rules on ownership, insurance and muzzling, so if your dog is a bull-type or mastiff-type breed, check the French classification before you travel."
          ]
        },
        {
          h: "Coming back to the US is the easy part",
          p: [
            "Good news for the return trip: a dog flying home to the US from France is on the simplest CDC path, typically a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement.",
            "For the wider picture, including how France compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."
          ]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to France",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-france",
        note: "The US-side steps and the EU health certificate for France. France applies the shared EU process, and the destination's own agriculture ministry is the final word on the day."
      },
      faqs: [
        { q: "Does my pet have to go into quarantine in France?", a: "No. France applies the shared EU pet-entry process, which has no quarantine and no rabies titer for a pet coming straight from the US. Your pet needs a microchip, a rabies vaccination in the right order, and an EU Animal Health Certificate endorsed by APHIS, then must arrive within 10 days of endorsement. See our EU pet health certificate page for the full process." },
        { q: "Is there anything France-specific beyond the EU rules?", a: "A little. There is no French tapeworm rule (that applies to Ireland, Finland and Malta, not France). After you settle in, France requires pets to be registered in its national I-CAD identification database, which a local vet can handle. Some guarding and attack dog breeds face extra French ownership rules, so check the French breed classification if that applies to you." },
        { q: "Do I need to quarantine my pet coming back to the US from France?", a: "No. A dog returning to the US from France is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details." }
      ],
      sources: {
        links: [
          { label: "True Trip Costs: the EU pet health certificate, the shared microchip, rabies and certificate process for all EU countries including France", url: "/eu-pet-health-certificate", type: "internal" },
          { label: "USDA APHIS: pet travel from the United States to France, the US-side steps and EU health certificate", url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-france", type: "gov" },
          { label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, for the return leg", url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html", type: "gov" }
        ],
        judgment: "France applies the shared EU pet-entry framework, set by the EU and administered on the US side by APHIS, not by us. The process is stable in substance, though the EU certificate format changes on 1 October 2026, which we cover on the EU pet health certificate page. We point you to the official pages and dated this July 2026. Costs vary with your pet and route, so treat any figure as a starting point and confirm on the source."
      }
    },
    {
      slug: "tourist-tax",
      live: true,
      topic: "tourist-tax",
      title: "France's tourist tax (taxe de sejour) in 2026, and why Paris is now so much higher | True Trip Costs",
      description: "The per-adult, per-night tax France adds at your accommodation, not in the online price: how it works, why Paris and the Ile-de-France region stack surcharges that push it into the mid-teens in euros in 2026, and who is exempt. Checked Jul 2026.",
      h1: "France's tourist tax, and the Paris surcharges.",
      lede: "France adds a small per-adult, per-night tax to your stay, set by each town. In most places it is a euro or two. In Paris it is now much more, because the region stacks extra charges on top. Here is what to expect in 2026.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "France charges a <b>taxe de sejour</b>, a <b>per-adult, per-night</b> tax collected by your accommodation and set by each <b>commune</b>. <b>Children under 18 are exempt</b>. In most of France it is modest, roughly <b>1 to 6 euros</b> a night by accommodation category, and on the Riviera (Nice, Cannes) about <b>1.50 to 6 euros</b>. <b>Paris is the outlier</b>: since <b>1 January 2026</b> the base rate rose, and the Paris region adds a <b>200% surcharge for Ile-de-France transport</b> plus other add-ons, pushing the all-in figure into the <b>mid-teens in euros per adult, per night</b> at the top hotel categories, and up to about <b>15.93 euros</b> for an unclassified place. It is usually <b>not</b> in the price you booked, and is paid at the accommodation.",
      sections: [
        {
          h: "How it works, and who pays",
          p: [
            "The taxe de sejour is a <b>local</b> tax, voted by each town or inter-communal body, so whether it applies and how much depends on where you stay. It is charged <b>per adult, per night</b>. <b>Under-18s do not pay</b>, which is the big difference from Italy and Spain, where the exemption is usually only for young children. Your accommodation collects it and passes it to the local authority; on Airbnb and Booking, the platform usually collects it for you.",
            "For a <b>classified</b> hotel the rate is a set amount per night by star level. For an <b>unclassified</b> or not-yet-rated place, it is instead <b>a percentage of the room price</b> (5% in Paris) per person, capped at the top rate. As with Italy, the charge is <b>rarely in the online total</b>, so expect it at check-in or checkout. For the broader money picture see the <a href=\"/france\">France money guide</a>."
          ]
        },
        {
          h: "Why Paris is now so much higher",
          p: [
            "Paris used to cost a few euros a night. That changed. On top of the base city rate, the <b>Ile-de-France region</b> now adds a <b>200% surcharge</b> to fund regional transport, and there are further add-ons: a Grand Paris projects surcharge and a departmental surcharge. Stacked together, these can <b>more than triple</b> the base figure.",
            "The practical result for 2026 is that a night in a classified Paris hotel runs from roughly <b>6 euros at the mid-range</b> up toward the <b>mid-teens in euros</b> at 5-star and palace properties, <b>per adult, per night</b>. An <b>unclassified</b> Paris rental is charged at <b>5% of the nightly price</b>, capped at about <b>15.93 euros</b> per adult per night. Sources differ on the exact per-star numbers because of how the surcharges are applied, so treat these as a <b>2026 range</b> and confirm the figure with your hotel."
          ]
        },
        {
          h: "Elsewhere in France, and the coast",
          p: [
            "Away from Paris the tax is much gentler. Most towns charge somewhere in the <b>1 to 6 euro</b> range per adult per night depending on the accommodation category, and campsites and hostels sit at the bottom, often about <b>1 euro</b>. On the <b>Riviera</b>, Nice and Cannes are around <b>1.50 to 6 euros</b>.",
            "A few departments beyond Paris (in the Alpes-Maritimes, Bouches-du-Rhone and Var, and some south-western departments) also add a regional surcharge, but nothing like the scale of the Paris region. Wherever you are, the <b>per-adult, per-night</b> shape is the same, and the amount is set locally."
          ]
        },
        {
          h: "Exemptions and keeping it small",
          p: [
            "The clearest saving is built in: <b>children under 18 pay nothing</b>, so a family pays only for the adults. People staying for <b>seasonal work</b> or in certain <b>emergency or social housing</b> are also exempt in most communes, and some places cap the charge, with Paris limiting it to a set amount per person per month for very long stays.",
            "There is no legitimate way to avoid the tax at a real property, and you should not try. As with Italy, the honest levers are a <b>lower accommodation category</b> and, in Paris specifically, understanding that the headline surcharge goes to the region's transport system, not to the hotel."
          ]
        }
      ],
      faqs: [
        { q: "How much is the Paris tourist tax in 2026?", a: "Roughly 6 euros per adult per night at a mid-range classified hotel, rising into the mid-teens in euros at 5-star and palace properties, after the 1 January 2026 increase and the Ile-de-France surcharges. An unclassified rental is charged at 5% of the nightly price, capped near 15.93 euros per adult per night. Children under 18 are exempt." },
        { q: "Do children pay the tourist tax in France?", a: "No. France exempts everyone under 18 from the taxe de sejour, so a family pays only for the adults. This is more generous than Italy or Spain, where the exemption is usually only for young children." },
        { q: "Why is the tourist tax in Paris so high now?", a: "On top of the base city rate, the Ile-de-France region adds a 200% surcharge to fund regional transport, plus a Grand Paris projects surcharge and a departmental surcharge. Stacked together they can more than triple the base amount, which is why Paris is far above the rest of France." },
        { q: "Is the taxe de sejour included in my hotel price?", a: "Usually not. It is generally collected at the accommodation at check-in or checkout, though on Airbnb and Booking the platform often collects it with your payment. Ask your hotel for the per-night amount so the final bill is no surprise." }
      ],
      sources: {
        links: [
          { label: "Service-Public.fr: the French government's 2026 taxe de sejour rates for Paris, including the Ile-de-France surcharge and the 15.93 euro cap", url: "https://entreprendre.service-public.gouv.fr/actualites/A17929?lang=en", type: "gov" }
        ],
        judgment: "France's tax is set by each commune, and Paris raised its rates on 1 January 2026 while stacking regional surcharges, so published per-star figures for Paris vary by source depending on how the surcharges are applied. The mechanics (per adult, under-18 exempt, 5% for unclassified, the 15.93 euro Paris cap) are from the French government page, and the euro ranges are a recent 2026 read. Confirm the exact amount with your accommodation. Checked July 2026."
      }
    }
  ]
};
