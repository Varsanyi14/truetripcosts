export default {
  slug: "germany",
  iso2: "de",
  live: true,
  name: "Germany",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  sources: {
    changed: "Sources added, and a correction. We removed Munich from the list of cities charging a bed tax: Bavaria banned local hotel taxes and its Constitutional Court upheld that ban in 2025, so Munich does not levy one. The other city rates are confirmed (Berlin 7.5%, Cologne 5%, Hamburg on a sliding scale, Frankfurt 2 euros a night), as is the 19% VAT refund for non-EU visitors, which starts at 50.01 euros spent in one store.",
    links: [
      { label: "German Customs (Zoll): VAT-free shopping for non-EU visitors, the 50.01 euro minimum and how to claim the refund", url: "https://www.zoll.de/EN/Private-individuals/Travel/Leaving-Germany/Tax-free-shopping/tax-free-shopping_node.html", type: "gov" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "112", note: "112 covers ambulance and fire, and it is free from any phone.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  rentalCommon: true,
  region: "Europe",
  signals: { cardFriendliness: 3, cashNeed: 3, taxRisk: 3, atmRisk: 4 },
  hook: "More cash-loving than its reputation suggests, with a patchwork of city bed taxes to plan for.",

  title: "Money in Germany (2026): Cash, Cards, ATMs and City Taxes | True Trip Costs",
  description: "How to handle money in Germany as a US traveler in 2026: why cash still rules more than you'd expect, fee-free Cash Group and Sparkasse ATMs, the dollar conversion trap, light round-up tipping, and the city-by-city bed tax (Bettensteuer) in Berlin, Hamburg, Cologne and Frankfurt (but not Munich, where Bavaria bans it). Checked July 2026.",

  h1: "Money in Germany, sorted.",
  lede: "A calm, current plan for the money side of your trip: why a famously efficient country still runs more on cash than you'd guess, and the small per-city tax that varies more than anywhere else in Europe.",
  hero: {
    img: "/germany-hero.jpg",
    h: 1375,
    alt: "A half-timbered German old-town street at dusk with string lights overhead, flower boxes spilling red geraniums from the windows, a church spire silhouetted at the end of the street, a lone figure in a dark coat walking away, and a plate of grilled bratwurst with mustard, a soft pretzel, a bowl of sauerkraut and a tall glass of golden beer on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Germany has a reputation for efficiency, but it is one of Europe's more cash-loving countries: roughly 30 to 40% of small businesses, bakeries, market stalls and traditional restaurants still prefer or only take cash. Bring a <b>no-fee Visa or Mastercard</b> for supermarkets, chain restaurants and hotels, but carry <b>50 to 100 euros</b> for everything else, and pull cash from a <b>Sparkasse or Cash Group ATM</b> (Deutsche Bank, Commerzbank, Postbank), not an independent machine. One rule everywhere: <b>always choose euros, never dollars</b>. If your trip includes Berlin, Hamburg, Cologne or Frankfurt, budget the city's own bed tax, since the rate and the way it is charged differ from city to city. Munich and the rest of Bavaria do not charge one.",

  meter: {
    heading: "Germany is more cash-loving than its efficient reputation suggests.",
    cashPct: 48,
    note: "A rough feel for everyday spending. Supermarkets, chain stores and hotels take cards easily, contactless included. But traditional bakeries, market stalls, beer gardens, small family restaurants and many museums still prefer cash, or are cash only, and that habit runs deeper here than in most of Western Europe."
  },

  trio: [
    { sym: "card", kind: "warn", h: "Your card", verd: "Works widely, but not everywhere", p: "Visa and Mastercard are accepted at supermarkets, chain restaurants, hotels and most city-center shops, often via contactless. Many independent bakeries, small restaurants, market stalls and some museums are cash only or set a minimum, commonly around 10 to 30 euros.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Keep more than you expect", p: "Germans famously like cash, and you will run into it more than in France, Spain or the UK. Keep 50 to 100 euros for bakeries, beer gardens, markets, festivals and paid restrooms, which often want coins.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Plentiful, but mind the network", p: "Sparkasse (red S logo) and the Cash Group (Deutsche Bank, Commerzbank, Postbank) cover cities and most towns well. A foreign card is an \"out of network\" withdrawal almost everywhere, so expect a fee, sometimes 5 euros or more at a standalone machine. Read the screen before confirming.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> for hotels, supermarkets and chain restaurants, plus a backup card from a different bank.",
      "Get a <b>no-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "<b>Amex is accepted far less</b> than Visa or Mastercard in Germany, so do not rely on it as your main card."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters, the rates are poor.",
      "Pull euros from a <b>Sparkasse or Cash Group ATM</b> (look for the red S, or Deutsche Bank, Commerzbank, Postbank) and <b>decline \"convert to USD.\"</b>",
      "Withdraw a larger amount at once, since the out-of-network fee is usually a flat charge per withdrawal, not a percentage."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card</b> for supermarkets (Rewe, Edeka, Aldi, Lidl), chain restaurants and hotels.",
      "<b>Cash</b> for bakeries, beer gardens, market stalls, small family-run restaurants and paid public toilets.",
      "A handy local trick: supermarkets and drugstores like dm and Rossmann will often give you cash back free of charge with a card purchase.",
      "<b>Always choose euros</b>, never dollars, on every card terminal and ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in euros, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "When a restaurant brings the card reader, state the total you want to pay out loud, including any tip, before they process it. Leaving coins on the table after paying and walking off reads as a mistake, not a tip."
    ], cta: null }
  ],

  cash: {
    rate: 0.88, cur: "EUR", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 0.88 euros to the dollar in mid-2026, so a euro costs a little over a dollar.",
    styles: [
      { n: "Budget", per: 50, cash: 0.45, room: 80 },
      { n: "Mid-range", per: 100, cash: 0.35, room: 150 },
      { n: "Comfort", per: 180, cash: 0.2, room: 290 }
    ]
  },

  connectivity: {
    works: "Yes, with one well-known catch. Deutsche Telekom has the strongest and most consistent nationwide coverage, including small towns, the Alps and the Black Forest, with Vodafone a close second, especially in the western half of the country. O2 has closed much of its old rural gap but still trails the other two outside cities. The famous weak point is German long-distance trains: ICE lines run through long tunnels and rural stretches with patchy signal, even though free onboard wifi (WIFIonICE) helps fill the gaps. Pick a Telekom-backed eSIM if your trip includes rural regions or a lot of train travel."
  },

  // TOURIST TAX / FEES (high-churn, verified Jul 2026). Germany has no national tourist tax.
  // Instead, individual cities levy their own "Bettensteuer" (bed tax) or "Kulturförderabgabe"
  // (culture tax), charged on leisure stays only (business travelers are generally exempt with
  // proof). Rates and structure vary city by city: some charge a percentage of the net room
  // rate, Frankfurt charges a flat per-night amount, and Hamburg uses a sliding scale by price
  // tier that works out to roughly 2% of the room rate. Many smaller cities and towns charge
  // nothing at all, outside the separate Kurtaxe system in officially designated spa towns.
  tax: {
    unit: "percentOfRoom",
    currency: "EUR",
    capNights: null,
    note: "Germany has no national tourist tax. Individual cities charge their own bed tax (Bettensteuer) on leisure stays, usually added to your bill at checkout. Business travelers are generally exempt with an employer letter. Rates and structure vary by city, so this is a city-specific estimate, not a flat national rate.",
    regions: [
      { key: "berlin", label: "Berlin", pct: 7.5, capNights: 21, note: "Berlin charges 7.5% of the net room rate, capped after 21 consecutive nights." },
      { key: "munich", label: "Munich", pct: 0, note: "Munich charges no bed tax. Bavaria banned local hotel taxes, and the Bavarian Constitutional Court upheld that ban in 2025, so the city cannot levy one." },
      { key: "hamburg", label: "Hamburg", pct: 2.1, note: "Hamburg uses a sliding scale by room price rather than a flat percentage; this is roughly equivalent to about 2% of the room rate." },
      { key: "cologne", label: "Cologne", pct: 5, note: "Cologne's culture tax (Kulturförderabgabe) runs 5% of the net room rate." },
      { key: "frankfurt", label: "Frankfurt", unit: "perPersonPerNight", rate: 2, note: "Frankfurt charges a flat 2 euros per person, per night, rather than a percentage." },
      { key: "other", label: "Elsewhere in Germany", pct: 0, note: "Most German towns and smaller cities charge no bed tax at all. A separate Kurtaxe applies in officially designated spa and resort towns, typically 1.50 to 4 euros per person per night." }
    ]
  },

  currencyHeading: "The euro, in plain terms.",
  facts: [
    { sym: "euro", k: "Quick conversion", v: "About 1.14 dollars to 1 euro in mid-2026, so a 10 euro meal is roughly $11.40, and 100 euros is about $114." },
    { sym: "coins", k: "Notes and coins", v: "Notes run 5, 10, 20, 50, 100, 200 and 500 euros, though many small shops dislike anything above 50. Coins go from 1 cent to 2 euros, and Germans use them freely, exact change is expected and appreciated." },
    { sym: "card", k: "The Girocard isn't yours", v: "Most Germans pay with a Girocard, a domestic debit network that does not work for foreign visitors. Your Visa or Mastercard is a separate, sometimes pricier transaction for the merchant, which is part of why some small businesses skip cards altogether." },
    { sym: "tip", k: "Tipping is light", v: "Round up the bill rather than calculating a percentage. There is no US-style 18 to 20% expectation here, see the tipping section below." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "City bed taxes, and money back on shopping.",
    text: "Germany has no single national tourist tax. Instead, individual cities charge their own <b>bed tax</b>, added to your hotel bill on leisure stays. Berlin charges 7.5% of the room rate, Munich and Cologne charge 5%, Hamburg uses a sliding scale that works out to roughly 2%, and Frankfurt charges a flat 2 euros per night. Most smaller towns charge nothing. Separately, if you shop, non-EU visitors can reclaim part of Germany's 19% VAT (a reduced 7% applies to books, food and hotel stays). Ask for a tax-free form at the till, keep the goods unused, and get it stamped by customs when you leave the EU. After the refund operator's fee, expect back roughly 10 to 14%, not the full 19%."
  },

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> Choosing your home currency at a card terminal or ATM (dynamic currency conversion) quietly adds 3 to 8%. Pick euros every time.",
    "<b>Cards are not as universal as they look.</b> A shop with a card reader on the counter can still be cash-only for amounts under 20 or 30 euros, or simply prefer cash. Ask before you order if you are not carrying cash.",
    "<b>Out-of-network ATM fees add up fast.</b> A foreign card at a standalone or wrong-network machine can cost 5 euros or more per withdrawal. Stick to Sparkasse or Cash Group machines, and read the fee on screen before confirming.",
    "<b>Don't leave coins on the table and walk off.</b> Tell the server the total you want to pay, tip included, before they run your card or hand back change. Walking away from change left on the table is read as forgetfulness, not a tip."
  ],

  tippingHeading: "Round up, don't calculate a percentage.",
  tipping: "Tipping in Germany is light and works differently than in the US. At a restaurant or bar, round up the bill, on a 23 euro tab, say \"25, bitte\" when you pay, rather than working out 18 to 20%. For a larger meal, an extra 5% on top is generous. Taxi drivers get the fare rounded up. Hotel porters or housekeeping can be left 1 to 2 euros, appreciated but not expected. Fast food counters, bakeries, supermarkets and self-service cafes get no tip at all. The key habit to know: state the total you want to pay, tip included, before the card reader is run or change is handed back, since Germans settle the tip in the moment rather than leaving cash behind afterward.",

  faqs: [
    { q: "Do I need cash in Germany?", a: "Yes, more than you would expect from a country with this reputation for efficiency. Supermarkets, chain restaurants and hotels take cards easily, but bakeries, market stalls, beer gardens, small family restaurants and paid restrooms often want cash. Keep 50 to 100 euros on hand and top up at a Sparkasse or Cash Group ATM." },
    { q: "What is the best ATM to use in Germany?", a: "Look for Sparkasse (red S logo), or the Cash Group network: Deutsche Bank, Commerzbank and Postbank. A foreign card is treated as out-of-network almost everywhere, so a fee is likely, sometimes 5 euros or more at independent machines. Read the on-screen fee and always decline the dollar conversion." },
    { q: "Should I pay in euros or dollars in Germany?", a: "Always euros. If a card terminal or ATM offers to charge you in dollars, decline. That dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
    { q: "Do you tip in Germany?", a: "Lightly, and by rounding up rather than calculating a percentage. Round a restaurant bill up to the next few euros, round up a taxi fare, and leave 1 to 2 euros for hotel porters or housekeeping. State your total, tip included, before the card is run, since leaving cash behind after paying is not how it is done here." },
    { q: "What is Germany's tourist tax?", a: "There is no single national tax. Individual cities charge their own bed tax on leisure stays: Berlin is 7.5% of the room rate, Munich and Cologne are 5%, Hamburg works out to roughly 2%, and Frankfurt charges a flat 2 euros a night. Most smaller towns charge nothing." },
    { q: "How much cash should I bring for a week in Germany?", a: "For two mid-range travelers, very roughly 300 to 400 euros (about $340 to $450) in day-to-day cash across a week, beyond your hotel, pulled in a couple of ATM visits. Cards cover supermarkets, chains and hotels; the cash covers bakeries, markets, beer gardens and the odd cash-only restaurant." }
  ],

  culture: {
    heading: "A little German goes a long way",
    intro: "Germans speak German, and they value courtesy and directness in equal measure. A clear Guten Tag and a story or two mark you as a guest rather than a tourist.",
    phrases: [
      { mean: "Hello, good day", say: "GOO-ten tahk", word: "Guten Tag" },
      { mean: "Please, and you are welcome", say: "BIT-uh", word: "Bitte" },
      { mean: "Thank you", say: "DAHN-kuh", word: "Danke" },
      { mean: "Cheers", say: "prohst", word: "Prost" },
      { mean: "Yes", say: "yah", word: "Ja" },
      { mean: "Delicious, tasty", say: "LECK-er", word: "Lecker" },
    ],
    tip: "Greet people with a clear <b>Guten Tag</b> and expect friendly directness in return. A lovely afternoon custom is <b>Kaffee und Kuchen</b>, coffee and cake, a proper pause to sit down together with something sweet. Germans also treasure their forests and long country walks.",
    stories: [
      { img: "/germany-culture-1.jpg",
        alt: "WPA-style illustration of a printer in a 15th-century workshop pulling a freshly printed sheet from a heavy wooden screw press, racks of metal type and drying pages around him by candlelight",
        h: "The invention that changed everything",
        p: "Around 1450 in the city of Mainz, Johannes Gutenberg built Europe's first printing press with movable metal type, and suddenly books could be made quickly and cheaply for the first time. Knowledge spread as never before. Few inventions have done more to shape the modern world.",
        note: "Good to know: the printing press dates from around 1450" },
      { img: "/germany-culture-2.jpg",
        alt: "WPA-style illustration of a composer with wild dark hair seated at a grand piano deep in thought, scattered manuscript pages and a candle on the lid, a tall arched starry window behind",
        h: "Music for all humanity",
        p: "Germany has given the world some of its greatest composers, and none is more beloved than Ludwig van Beethoven. He wrote symphonies of thunder and tenderness, and composed some of his greatest music, including the famous Ode to Joy, after he had gone almost completely deaf. His work still moves audiences everywhere.",
        note: "Good to know: he composed while going deaf" },
      { img: "/germany-culture-3.jpg",
        alt: "WPA-style illustration of four fairy-tale animals, a donkey, a dog, a cat and a rooster, comically stacked one atop another to peer through the lit window of a cottage in a moonlit forest",
        h: "A tale of four friends",
        p: "The Brothers Grimm gathered Germany's old folk tales, Cinderella, Hansel and Gretel, Rapunzel, and preserved them for the world. In one favorite, the Bremen Town Musicians, four aging animals set off together for a better life and cleverly scare off a band of robbers by standing on one another's backs. It is a story about finding your place and your friends.",
        note: "Say it: the Bremen Town Musicians" },
    ],
    pride: "Germans are proud of a deep heritage of thinkers, poets and composers, of Kaffee und Kuchen and Christmas markets, and of a countryside of dark forests and fairy-tale castles. Show genuine interest and a little enthusiasm, and their warmth and dry humor come right out."
  },

  spokes: [
    {
      slug: "tipping",
      glance: [
        { k: "Tipping (Trinkgeld)", v: "Modest, about 5 to 10%" },
        { k: "How", v: "Round up to a tidy figure" },
        { k: "The habit", v: "Say the total, do not leave it" },
        { k: "Pay with", v: "Cash is simplest" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Germany: Trinkgeld, and how to leave it (2026) | True Trip Costs",
      description: "How tipping works in Germany for US travelers in 2026: the modest Trinkgeld custom, why you tell the server the total rather than leaving it on the table, and how much to leave. Checked July 2026.",
      h1: "Tipping in Germany",
      lede: "Germany has a real but modest tipping custom called Trinkgeld, and one habit that surprises visitors: you tell the server the total you want to pay, rather than leaving coins on the table. Here is how it works.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Germany has a modest tipping custom, <b>Trinkgeld</b>, of roughly <b>5 to 10%</b>, usually done by <b>rounding up</b> to a convenient figure. The key habit: when the server takes payment, you <b>state the total you want to pay</b>, including the tip, rather than leaving it on the table. For a 42 euro bill you might say <b>47</b>, or <b>stimmt so</b> (keep the change). Service is <b>not a separate line</b> but staff earn a wage, so this is a courtesy, not an obligation. <b>Cash</b> is simplest, and when paying by card you tell the server the total.",
      sections: [
        {
          h: "Trinkgeld: how much, and the round-up habit",
          icon: "euro",
          key: { fig: "5-10%", tag: "Round up", text: "Trinkgeld is roughly 5 to 10%, done by rounding up to a convenient number. It is customary but modest, not a US-style 20%.", tone: "teal" },
          p: [
            "<b>Trinkgeld</b> (literally drink-money) is <b>customary but modest</b>: about <b>5 to 10%</b> at a restaurant, usually by <b>rounding up</b> to a tidy figure rather than calculating a percentage. For a <b>42 euro</b> bill, rounding to <b>45 or 47</b> is normal. At a <b>cafe or bar</b>, rounding up the coins is plenty.",
            "Service is <b>not added as a separate line</b>, and staff earn a proper wage, so the tip is a <b>genuine courtesy</b>. Round up for <b>taxis</b>, leave <b>1 to 2 euros per bag</b> for a porter, and a euro or two a day for housekeeping if you like."
          ]
        },
        {
          h: "The habit that surprises visitors: say the total",
          icon: "coins",
          key: { fig: "Say the total", tag: "Not left on the table", text: "When the server takes payment, state the full amount you want to pay including the tip, or say stimmt so for keep the change. You do not leave it on the table.", tone: "teal" },
          p: [
            "Here is the part that catches US visitors out. In Germany you <b>do not usually leave the tip on the table</b>. Instead, when the server tells you the total and takes your money, you <b>state the amount you want to pay</b>. For a <b>42 euro</b> bill, hand over a note and say <b>47</b>, and you get change for the rest.",
            "If you want to give exactly the change in hand, say <b>stimmt so</b> (that is right, keep the change). The server sorts the tip on the spot, so have a rough total in mind before they come over."
          ]
        },
        {
          h: "Cash, and paying by card",
          icon: "cash",
          key: { fig: "Cash is simplest", tag: "Tell the server", text: "Cash is the norm for tips. When paying by card, tell the server the total including the tip before they enter it, or add it on the machine.", tone: "teal" },
          p: [
            "<b>Cash</b> is still the simplest way to tip in Germany, and many smaller places are <b>cash-preferred</b> anyway. When you <b>pay by card</b>, tell the server the <b>total including the tip</b> before they enter the amount, or add it on the card machine if it prompts. Keep <b>euro coins and small notes</b> handy for rounding up."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Germany?", a: "Yes, modestly. Trinkgeld of roughly 5 to 10% is customary, usually by rounding up to a convenient figure. It is a courtesy, not an obligation, since staff earn a proper wage. It is well below the US 15 to 20%." },
        { q: "How do you leave a tip in Germany?", a: "You tell the server the total you want to pay when they take payment, rather than leaving coins on the table. For a 42 euro bill you might say 47, or say stimmt so to mean keep the change. The server handles the tip on the spot." },
        { q: "How much should I tip at a German restaurant?", a: "About 5 to 10%, usually by rounding up to a tidy number. For a 42 euro bill, rounding to 45 or 47 is normal. At a cafe or bar, rounding up the coins is plenty." },
        { q: "Can you tip by card in Germany?", a: "Yes, increasingly. Tell the server the total including the tip before they enter the amount, or add it on the card machine if it prompts. Cash is still the simplest, and many smaller places prefer it." }
      ],
      sources: {
        links: [
          { label: "US State Department: Germany country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Germany.html", type: "gov" }
        ],
        judgment: "German tipping is cultural, and the say-the-total habit is a longstanding local practice, not a rule. The amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
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
      title: "Bringing a dog or cat to Germany from the US (2026): the EU process, and the Germany-specific parts | True Trip Costs",
      description: "Moving to Germany with a pet from the US: why it runs on the shared EU health-certificate process, no quarantine and no titer, plus what is specific to Germany on arrival and after you register. Checked July 2026.",
      h1: "Bringing your dog or cat to Germany.",
      lede: "Germany is one of the most common EU destinations for US pet owners, and there is nothing Germany-specific to fear at the border. It runs on the single EU pet-entry process: microchip, rabies in the right order, and an EU health certificate on a 10-day clock. No quarantine, no rabies titer. Here is what that means for Germany, and the local parts worth knowing.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Germany uses the <b>shared EU pet-entry process</b>, so there is no separate German permit and nothing unusual at the border. Your pet needs an <b>ISO microchip, a rabies vaccination given after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS</b>, then must enter Germany within <b>10 days</b> of that endorsement. There is <b>no quarantine and no rabies titer</b> for a pet coming straight from the US. The full step-by-step, the ordering trap, and the current fees are on one page: see <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a>. Below are the Germany-specific notes. Coming home to the US is the easy part.",
      sections: [
        {
          h: "Germany runs on the EU process",
          icon: "health",
          key: { fig: "10 days", tag: "No Germany-only permit", text: "The standard EU move: an ISO microchip first, a rabies shot after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS. Enter Germany within 10 days of that endorsement.", tone: "teal" },
          p: [
            "There is no Germany-only pet permit and no national quarantine. Bringing a dog or cat into Germany from the US is the standard EU move: an ISO microchip first, a rabies vaccination after the chip, then an EU Animal Health Certificate completed by a USDA-accredited vet and endorsed by APHIS, with the pet arriving within 10 days of endorsement. A first rabies shot adds a 21-day wait before travel.",
            "Because the process is identical across all 27 member countries, we do not repeat it per country. The full sequence, the microchip-before-rabies trap that costs people the most time, the 10-day clock, and the current APHIS endorsement fees all live on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Read that first, then come back for the Germany notes."
          ]
        },
        {
          h: "The Germany-specific parts",
          icon: "receipt",
          key: { fig: "Check", tag: "At the border", text: "German customs may ask to see the endorsed certificate and confirm the chip, and pets should arrive through a designated traveller point of entry, which the major airports are.", tone: "teal" },
          p: [
            "At the border, German customs may ask to see the endorsed certificate and confirm the microchip, and pets should enter through a designated traveller point of entry, which the major airports are. There is no dog or cat tapeworm rule for Germany, unlike Ireland, Finland or Malta.",
            "The real German-specific issues are local rather than at the border. Dog owners in Germany pay an annual dog tax (Hundesteuer) to their city or municipality and must register the dog locally, and several German states (Bundesländer) maintain their own lists of restricted or dangerous breeds with extra rules, so the treatment of a given breed can vary by where you settle. If your dog is a bull-type or mastiff-type breed, check the rules for your specific state before you commit to an address, and expect to register and insure the dog once you arrive."
          ]
        },
        {
          h: "Coming back to the US is the easy part",
          icon: "plane",
          key: { fig: "Easy", tag: "The return trip", text: "A dog flying home from Germany is on the simplest CDC path: usually a CDC Dog Import Form receipt, a microchip, and a minimum age of 6 months.", tone: "teal" },
          p: [
            "Good news for the return trip: a dog flying home to the US from Germany is on the simplest CDC path, typically a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement.",
            "For the wider picture, including how Germany compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."
          ]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Germany",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-germany",
        note: "The US-side steps and the EU health certificate for Germany. Germany applies the shared EU process, and the destination's own authorities are the final word on the day."
      },
      faqs: [
        { q: "Does my pet have to go into quarantine in Germany?", a: "No. Germany applies the shared EU pet-entry process, which has no quarantine and no rabies titer for a pet coming straight from the US. Your pet needs a microchip, a rabies vaccination in the right order, and an EU Animal Health Certificate endorsed by APHIS, then must arrive within 10 days of endorsement. See our EU pet health certificate page for the full process." },
        { q: "Is there anything Germany-specific beyond the EU rules?", a: "Yes, mostly local. Germany has no tapeworm rule (that applies to Ireland, Finland and Malta). But dog owners pay an annual dog tax (Hundesteuer) and must register the dog with their municipality, and individual German states keep their own restricted-breed lists, so a breed's treatment can vary by where you live. Check your state's rules if you own a bull-type or mastiff-type dog." },
        { q: "Do I need to quarantine my pet coming back to the US from Germany?", a: "No. A dog returning to the US from Germany is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details." }
      ],
      sources: {
        links: [
          { label: "True Trip Costs: the EU pet health certificate, the shared microchip, rabies and certificate process for all EU countries including Germany", url: "/eu-pet-health-certificate", type: "internal" },
          { label: "USDA APHIS: pet travel from the United States to Germany, the US-side steps and EU health certificate", url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-germany", type: "gov" },
          { label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, for the return leg", url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html", type: "gov" }
        ],
        judgment: "Germany applies the shared EU pet-entry framework, set by the EU and administered on the US side by APHIS, not by us. The process is stable in substance, though the EU certificate format changes on 1 October 2026, which we cover on the EU pet health certificate page. The German-specific dog tax and state breed rules are local matters that vary, so confirm them for your city. We point you to the official pages and dated this July 2026."
      }
    }
  ]
};
