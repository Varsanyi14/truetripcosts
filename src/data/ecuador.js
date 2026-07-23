export default {
  slug: "ecuador",
  iso2: "ec",
  live: true,
  name: "Ecuador",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-20",
  sources: {
    changed: "Sources added on first publish. Confirmed with Ecuador's tax authority (SRI) that the standard VAT (IVA) is 15%, raised from 12% in April 2024 and still 15% for 2026, and with the Galapagos National Park that the foreign-adult entrance fee is 200 dollars, cash on arrival, since August 2024, plus a 20 dollar transit control card. Checked the US State Department advisory, which is Level 2 with some Level 3 and 4 zones. The US dollar has been Ecuador's official currency since 2000.",
    links: [
      { label: "Ecuador Internal Revenue Service (SRI): the standard VAT (IVA) rate, 15% since April 2024", url: "https://www.sri.gob.ec/", type: "revenue" },
      { label: "Galapagos National Park Directorate: the park entrance fee and the transit control card", url: "https://www.parquenacionalgalapagos.gob.ec/", type: "gov" },
      { label: "US State Department: the Ecuador travel advisory, Level 2 with higher-risk zones", url: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/ecuador-travel-advisory.html", type: "gov" }
    ],
    judgment: "The daily cash share, tipping habits, likely ATM behavior, and the practical safety notes on where to be careful and how to carry cash are our own read from advisories and recent traveler reports, not a single official table. Treat them as a planning guide and confirm anything critical before you travel."
  },
  emergency: { medical: "911", note: "911 is Ecuador's nationwide emergency number (ECU 911), reaching police, ambulance and fire from any phone. An English-speaking operator is not guaranteed, so have your address written down or saved.", checked: "Jul 2026", checkedISO: "2026-07-20" },
  insuranceLevel: "medium",
  region: "Americas",
  signals: { cardFriendliness: 3, cashNeed: 3, taxRisk: 2, atmRisk: 3 },
  hook: "Ecuador uses the US dollar as its official currency, so there is nothing to exchange and prices are already in dollars. Tap your card in Quito, Guayaquil and Cuenca, carry small bills for taxis, markets and the countryside, and bring cash for the Galapagos, where the park fees are cash only.",
  aliases: ["ecuador", "quito", "guayaquil", "cuenca", "galapagos", "galapagos islands", "otavalo", "cotopaxi", "banos", "amazon", "usd", "us dollar", "dollarized", "ecuadorian", "sucre"],

  title: "Money in Ecuador (2026): US Dollars, Cards, ATMs, the Galapagos Fees and Tipping | True Trip Costs",
  description: "How to handle money in Ecuador as a US traveler in 2026: it uses the US dollar so there is nothing to convert, where cards work and where you need cash, ATM fees and a safety habit, the 15% VAT, the cash-only Galapagos park and transit fees, modest tipping, and how to carry money safely. Checked July 2026.",

  h1: "Money in Ecuador, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your dollars simply work, where your card covers you, the cash worth carrying for taxis, markets and the Galapagos, and the safety habits that keep it all easy.",
  hero: {
    img: "/ecuador-hero.jpg",
    h: 1375,
    alt: "A quiet cobblestone street in the colonial old town of Quito at dusk, with whitewashed Spanish-colonial buildings, carved wooden balconies and red tile roofs, a baroque church dome glowing and the winged Virgin of Quito on the Panecillo hill in silhouette, string lights across the lane, a lone figure walking away, and a steaming bowl of locro de papa with avocado and cheese and a small dish of aji on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Ecuador is one of the <b>easiest countries for money</b>, because it uses the <b>US dollar</b> as its official currency and has since 2000. There is <b>nothing to exchange</b>, prices are already in dollars, and paying cash in dollars costs you nothing. <b>Visa and Mastercard</b> work in the cities, Quito, Guayaquil and Cuenca, at hotels, better restaurants, malls and tour operators, with Amex less consistent, so a <b>no-fee card</b> covers a lot of a trip. Where you still want <b>cash</b> is the everyday and rural side: taxis, markets, buses, small towns and tips, and above all the <b>Galapagos</b>, where the park fees are <b>cash only</b>. Pull dollars from a <b>bank ATM</b> (Banco Pichincha, Banco Guayaquil, Produbanco), expect about <b>3 to 5 dollars</b> a withdrawal on top of your home bank's, and use machines <b>inside banks or malls</b>, not street-facing ones. Two habits matter here: <b>carry only what you need</b>, roughly 50 to 100 dollars on you, and <b>pre-arrange airport transfers</b>, especially in Guayaquil. Prices include a <b>15% VAT</b>, restaurants often add a <b>10% service charge</b>, and tipping beyond that is modest.",

  recentChange: {
    date: "Jul 2026",
    text: "Ecuador is fine for most tourist trips, but rising crime has kept the US State Department at <b>Level 2</b> (exercise increased caution), with some areas at Level 3 or 4: <b>Guayaquil south of Portete de Tarqui</b>, parts of <b>Esmeraldas</b>, and the <b>Colombian border</b>. For your money that means a few simple habits: carry only <b>50 to 100 dollars</b> on you, use ATMs <b>inside banks or malls</b> rather than on the street, and <b>pre-arrange your airport transfer</b>, especially in Guayaquil. Quito's historic center, Cuenca and the Galapagos are much calmer. Check the current advisory before you go."
  },

  meter: {
    heading: "Cards cover the cities; keep cash for taxis, markets, the countryside and the cash-only Galapagos fees.",
    cashPct: 40,
    note: "A rough feel for everyday spending. Cards work well in Quito, Guayaquil and Cuenca at hotels, better restaurants, malls and tours, and since the currency is the US dollar there is nothing to convert. Cash takes over for taxis, markets, buses, small towns, tips, and the Galapagos, where the park and transit fees must be paid in cash."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Good in the cities", p: "Visa and Mastercard are widely taken in Quito, Guayaquil and Cuenca at hotels, better restaurants, shopping malls and tour operators, with Amex and Discover less consistent. A no-foreign-fee card is the easy way to cover city spending. Because prices are in US dollars there is no currency conversion on your card, though a few places add a small surcharge for card use.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "For taxis, markets and the Galapagos", p: "You will want dollars in hand for taxis, markets, buses, small towns and tips, and it is <b>essential in the Galapagos</b>, where the park fee and transit card are cash only. Carry <b>small, clean bills</b>, since change for large notes is scarce and worn or torn notes can be refused, and keep only what you need on you.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Use a bank machine, not the street", p: "Bank ATMs (<b>Banco Pichincha, Banco Guayaquil, Produbanco, Banco del Pacifico</b>) dispense dollars. Expect a fee of about <b>3 to 5 dollars</b> plus your home bank's, with withdrawal limits often around <b>300 to 500 dollars</b>. For safety, use machines <b>inside a bank branch or a mall</b>, not street-facing ones, and there are <b>no ATMs at the Galapagos airports</b>, so bring cash from the mainland.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> for hotels, dining and shops in the cities, plus a backup from a different bank.",
      "Add a <b>fee-free ATM debit card</b> (Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee) for pulling dollars.",
      "You do <b>not</b> need to exchange money, since Ecuador uses the US dollar. Just bring some <b>small, clean bills</b> for your first taxis and tips.",
      "Heading to the <b>Galapagos</b>? Set aside cash for the fees: about <b>200 dollars</b> per adult for the park and <b>20 dollars</b> for the transit card, both cash."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "<b>Pre-arrange your transfer</b> through your hotel or a trusted service, especially in <b>Guayaquil</b>, rather than hailing a taxi off the street.",
      "If you want cash, use a <b>bank ATM inside the terminal</b> and take out enough for a day or two.",
      "Flying on to the <b>Galapagos</b>? Buy the <b>20 dollar transit control card</b> at the Quito or Guayaquil airport counter before your flight, in cash, and keep the receipt.",
      "Set up an <b>eSIM</b> before you land for maps and ride apps. Claro and Movistar have the best coverage."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap or dip your card</b> at city hotels, restaurants, malls and tours.",
      "Keep <b>small-bill cash</b> for taxis, markets, buses, small towns and tips.",
      "Use a registered <b>taxi or a ride app</b> (Uber, inDrive, Cabify) rather than flagging one down, and agree the fare or run the meter.",
      "In the <b>Galapagos</b>, assume cash: the park fee and transit card are cash only, and there are no airport ATMs."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>You are already in dollars, so the rule here is about safety, not exchange.</b> Carry only <b>50 to 100 dollars</b> on you, use ATMs inside banks or malls, and keep the rest in the hotel safe.",
      "<b>Bring clean, smaller bills.</b> Very worn or torn US notes can be refused, change for 50s and 100s is scarce, and 20s and under are easiest to spend."
    ], cta: null }
  ],

  cash: {
    rate: 1, cur: "USD", round: 20, defaultIndex: 1,
    rateNote: "Ecuador uses the US dollar, so there is nothing to convert; this is just the cash-in-hand slice of your spending. Ecuador also mints its own centavo coins, worth exactly the same as US cents and used alongside them.",
    styles: [
      { n: "Budget", per: 45, cash: 0.50, room: 45 },
      { n: "Mid-range", per: 95, cash: 0.35, room: 90 },
      { n: "Comfort", per: 190, cash: 0.25, room: 180 }
    ]
  },

  connectivity: {
    works: "Good across Quito, Guayaquil and Cuenca and most towns, where 4G is widespread, and thinner in the Amazon, the high Andes and parts of the Galapagos. The main carriers are Claro and Movistar, with CNT also present. A local prepaid SIM needs your passport, so a travel eSIM from Airalo, Nomad or Holafly is the easy route if your phone supports it. You do not need mobile data to pay by card, but you will want it for maps, ride apps and calls. Most hotels have Wi-Fi."
  },

  flight: { low: 400, high: 950, checked: "Jul 2026", checkedISO: "2026-07-20" },

  tax: {
    none: true,
    currency: "USD",
    note: "Ecuador has no per-person nightly tourist tax to add at the desk. What you will see instead: a 15% VAT (IVA) baked into most prices, raised from 12% in April 2024, and a service charge of about 10% that many sit-down restaurants add to the bill. There is no general tourist VAT refund to count on. Separately, the Galapagos Islands charge a 200 dollar park entrance fee per foreign adult, cash on arrival, plus a 20 dollar transit control card, both covered below."
  },

  currencyHeading: "The dollar, and a few local coins.",
  facts: [
    { sym: "usd", k: "You are already in dollars", v: "Ecuador adopted the US dollar as its official currency in 2000, so prices are in dollars and there is nothing to convert. It also mints its own centavo coins (1, 5, 10, 25 and 50 cents) worth exactly the same as US cents, so your quarters and dimes work and you may get a mix of both in change." },
    { sym: "card", k: "Cards in the cities, cash beyond", v: "Visa and Mastercard are widely taken in Quito, Guayaquil and Cuenca at hotels, better restaurants, malls and tour operators, with Amex less so. Beyond the cities, and for taxis, markets, buses and small vendors, it is cash. Bring a no-fee card and a backup from a different bank." },
    { sym: "atm", k: "ATMs, fees and a safety habit", v: "Bank ATMs (Banco Pichincha, Banco Guayaquil, Produbanco, Banco del Pacifico) dispense dollars. Expect about 3 to 5 dollars a withdrawal plus your home bank's, with limits often around 300 to 500 dollars. Use machines inside banks or malls rather than on the street, and carry only what you need." },
    { sym: "tip", k: "Tipping is modest", v: "Many sit-down restaurants add a 10% service charge (servicio) to the bill on top of the 15% VAT; if it is there, that is the tip, though rounding up for good service is welcome. Round up taxi fares, and tip guides and porters a few dollars. See the tipping section below." }
  ],

  taxfree: {
    label: "Taxes and the Galapagos fees",
    heading: "A 15% VAT in the price, and cash fees for the Galapagos.",
    text: "Ecuador keeps everyday tax simple, then adds one big set of fees for its most famous destination. Prices carry a <b>15% VAT</b> (IVA), raised from 12% in April 2024 and usually baked into what you see, and sit-down restaurants often add a <b>service charge of about 10%</b> on top. There is <b>no general tourist VAT refund</b> to rely on. The costs to plan for are in the <b>Galapagos</b>: every foreign adult pays a <b>200 dollar national park entrance fee</b> (100 dollars for children under 12), <b>cash on arrival</b> at Baltra or San Cristobal, and this doubled from 100 dollars in <b>August 2024</b>, so older guides are out of date. On top of that you buy a <b>20 dollar transit control card</b> (the INGALA card) at the Quito or Guayaquil airport before you fly, also in cash. There are <b>no ATMs at the island airports</b>, so bring clean dollars from the mainland, and keep every receipt."
  },

  keyFacts: [
    { label: "Galapagos National Park entrance fee", value: "200 dollars per foreign adult, 100 per child, cash on arrival", status: "enacted", effective: "2024-08-01", source: "https://www.parquenacionalgalapagos.gob.ec/", checked: "2026-07-20" },
    { label: "Galapagos transit control card (INGALA)", value: "20 dollars per person, bought in cash at the mainland airport", status: "enacted", effective: null, source: "https://www.parquenacionalgalapagos.gob.ec/", checked: "2026-07-20" },
    { label: "Standard VAT (IVA)", value: "15%, raised from 12% in April 2024", status: "enacted", effective: "2024-04-01", source: "https://www.sri.gob.ec/", checked: "2026-07-20" }
  ],

  traps: [
    "<b>Carry only what you need, and use bank ATMs.</b> Rising crime in the big cities means keeping roughly 50 to 100 dollars on you, using machines inside banks or malls rather than street-facing ones, and leaving the rest in the hotel safe.",
    "<b>The Galapagos fees are cash only, and there are no airport ATMs on the islands.</b> Bring the 200 dollar park fee and the 20 dollar transit card in clean dollars from the mainland.",
    "<b>Bring clean, smaller bills.</b> Very worn or torn US notes can be refused, change for 50 and 100 dollar notes is often scarce, and 20s and under are the easiest to spend.",
    "<b>Pre-arrange airport transfers, especially in Guayaquil.</b> Avoid hailing a taxi off the street; use a hotel transfer, a registered taxi or a ride app (Uber, inDrive, Cabify).",
    "<b>Check the bill before you tip.</b> A 10% service charge is often already added at sit-down restaurants, so you do not need to add much more."
  ],

  tippingHeading: "Modest, and often already on the bill.",
  tipping: "Tipping in Ecuador is <b>modest</b> and not the pressure it can be in the US. At sit-down restaurants a <b>10% service charge</b> (servicio) is often already added to the bill on top of the 15% VAT, and if it is there, that is the tip, though leaving a little extra in cash for good service is welcome. At casual places and markets, nothing is expected, but rounding up is kind. <b>Round up taxi fares</b> to the nearest dollar rather than tipping a percentage. For guides, tip a <b>few dollars per person</b> for a day tour, more for a private or multi-day guide, and on a <b>Galapagos cruise</b> a common guideline is roughly 10 to 20 dollars per guest per day split between the guide and crew. Give hotel porters <b>a dollar or two a bag</b> and housekeeping a <b>dollar or two a day</b>. Tip in cash, in small bills, and hand it to the person to be sure it reaches them.",

  faqs: [
    { q: "Do I need to exchange money for Ecuador, or can I use US dollars?", a: "You use US dollars, so there is nothing to exchange. Ecuador adopted the US dollar as its official currency in 2000, so prices are already in dollars and paying in cash costs you nothing extra. It mints its own centavo coins worth the same as US cents, and you may get a mix of both in change. Just bring some small, clean bills for taxis and tips." },
    { q: "Do I need cash in Ecuador?", a: "Yes, for the everyday and rural side. Cards work well in Quito, Guayaquil and Cuenca at hotels, better restaurants, malls and tours, but taxis, markets, buses, small towns and tips run on cash, and the Galapagos park and transit fees are cash only. Carry small, clean dollar bills, get more from a bank ATM inside a branch or mall, and keep only what you need on you." },
    { q: "How much are the Galapagos entry fees in 2026?", a: "Foreign adults pay a 200 dollar national park entrance fee (100 dollars for children under 12), in cash on arrival at Baltra or San Cristobal, which doubled from 100 dollars in August 2024. On top of that there is a 20 dollar transit control card bought at the Quito or Guayaquil airport before you fly, also cash. There are no ATMs at the island airports, so bring the money in clean dollars from the mainland." },
    { q: "Is Ecuador safe, and how should I handle money there?", a: "Most tourist trips are fine, but crime has kept the US State Department at Level 2, with some areas at Level 3 or 4 (Guayaquil south of Portete de Tarqui, parts of Esmeraldas, the Colombian border). Handle money with a few habits: carry only 50 to 100 dollars on you, use ATMs inside banks or malls, pre-arrange airport transfers especially in Guayaquil, and use registered taxis or ride apps. Quito's center, Cuenca and the Galapagos are calmer. Check the current advisory before you travel." },
    { q: "Is there a tourist tax or a VAT refund in Ecuador?", a: "There is no per-person nightly tourist tax to hand over. Prices include a 15% VAT (raised from 12% in April 2024), and sit-down restaurants often add about a 10% service charge, so a bill can carry both. There is no general tourist VAT refund to count on. The main costs to plan for are the Galapagos park fee and transit card, which are separate and cash only." },
    { q: "How much cash should I bring for a week in Ecuador?", a: "It depends on your trip. On the mainland, very roughly 150 to 300 dollars in cash across a week beyond card spending covers taxis, markets, small towns and tips for two travelers, topped up from bank ATMs. For the Galapagos, add the fees (about 220 dollars per adult) plus extra cash, since cards and ATMs are limited on the islands. Keep it in small, clean bills." }
  ],

  culture: {
    heading: "A few Spanish words go a long way",
    intro: "Spanish is the language of Ecuador, and a warm hola and gracias open doors. Ecuadorians are proud of a small country that packs in the Andes, the Amazon, the Pacific coast and the Galapagos, so a little curiosity marks you as a traveler rather than a tourist.",
    phrases: [
      { mean: "Hello", say: "OH-lah", word: "Hola" },
      { mean: "Please", say: "por fah-VOR", word: "Por favor" },
      { mean: "Thank you", say: "GRAH-see-ahs", word: "Gracias" },
      { mean: "Cheers", say: "sah-LOOD", word: "Salud" },
      { mean: "How much is it?", say: "KWAN-toh KWES-tah", word: "Cuanto cuesta" },
      { mean: "Cool, great (very Ecuadorian)", say: "CHEH-veh-reh", word: "Chevere" }
    ],
    tip: "Ecuadorians are formal and friendly: greet with <b>buenos dias</b> before asking a question, and a warm <b>gracias</b> goes far. In the markets, a little polite Spanish and a smile get you further than haggling hard, since prices are already fair.",
    stories: [
      { img: "/ecuador-culture-1.jpg",
        alt: "WPA-style vintage travel poster of the Galapagos Islands, a giant tortoise in the misty highlands, a blue-footed booby on volcanic rock, a marine iguana and a calm ocean with a volcanic island behind",
        h: "The enchanted isles",
        p: "The Galapagos, six hundred miles out in the Pacific, are where Charles Darwin found the ideas behind evolution. The wildlife has no fear of people, so giant tortoises, blue-footed boobies, sea lions and marine iguanas go about their day beside you. It is one of the most protected places on Earth, which is why the fees are high and the rules strict.",
        note: "Good to know: the park fee is 200 dollars, cash on arrival" },
      { img: "/ecuador-culture-2.jpg",
        alt: "WPA-style vintage travel poster of the Otavalo market, indigenous Kichwa women in white blouses, dark skirts and felt hats selling stacks of colorful woven textiles, with a symmetrical volcano behind",
        h: "The Otavalo market",
        p: "In the highlands north of Quito, the Kichwa town of Otavalo hosts one of South America's most famous markets, a riot of handwoven textiles, blankets and crafts under the Imbabura volcano. The Otavalenos are renowned weavers who have carried their traditions and dress for centuries. Saturday is the big day, though stalls run most of the week.",
        note: "Good to know: the biggest market day is Saturday" },
      { img: "/ecuador-culture-3.jpg",
        alt: "WPA-style vintage travel poster of the snow-capped Cotopaxi volcano rising over golden Andean paramo grassland with wild horses grazing in the foreground",
        h: "The Avenue of the Volcanoes",
        p: "The Andes march down the center of Ecuador in a line of snow-capped volcanoes, and Cotopaxi, a near-perfect cone, is the icon among them. The name Ecuador comes from the equator, which runs right through the country just north of Quito, where you can stand with a foot in each hemisphere.",
        note: "Good to know: Ecuador is named for the equator" }
    ],
    pride: "Ecuador is small on the map but holds four worlds at once: the Andes, the Amazon, the Pacific coast and the Galapagos, all on the equator. Ecuadorians are proud of that variety, and of a capital, Quito, whose old town was one of the first UNESCO World Heritage Sites."
  },

  spokes: [
    {
      slug: "visa-and-galapagos-fees",
      glance: [
        { k: "Visa", v: "None, 90 days per year" },
        { k: "Mainland entry fee", v: "None" },
        { k: "Galapagos fees", v: "$220 total, cash only" },
        { k: "Also asked", v: "Onward ticket, lodging" }
      ],
      live: true,
      topic: "visas",
      title: "Do US citizens need a visa for Ecuador, and the Galapagos fees (2026) | True Trip Costs",
      description: "US citizens do not need a visa for Ecuador for stays up to 90 days. What you do need: a passport, an onward ticket, and, for the Galapagos, a 20 dollar transit card and a 200 dollar cash park fee. Checked July 2026.",
      h1: "Do US citizens need a visa for Ecuador?",
      lede: "Short answer: no visa for a normal visit, and entry is easy. The costs that catch people are not at the border but on the way to the Galapagos. Here is what you need, and what to budget.",
      checked: "Jul 2026",
      checkedISO: "2026-07-20",
      answer: "No. US citizens can enter Ecuador <b>visa-free for up to 90 days</b> in a 12-month period as tourists. You need a <b>passport valid for your stay</b>, and officials can ask for an <b>onward or return ticket</b> and proof of where you are staying. There is <b>no entry fee for mainland Ecuador</b>. The fees to plan for are for the <b>Galapagos</b>: a <b>20 dollar transit control card</b> bought at the mainland airport and a <b>200 dollar national park fee</b> (100 for children) paid in <b>cash on arrival</b> in the islands.",
      official: {
        label: "US State Department: Ecuador country information",
        url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Ecuador.html",
        note: "The official US-side page for entry requirements, safety and local conditions. Confirm details before you travel, since rules can change."
      },
      expediter: false,
      sections: [
        {
          h: "Entry for a normal visit",
          icon: "passport",
          key: { fig: "90 days", tag: "Visa-free", text: "US tourists get up to 90 days visa-free in any 12-month period, granted on arrival. There is no entry fee for mainland Ecuador.", tone: "teal" },
          p: [
            "As a tourist you get <b>up to 90 days</b> visa-free in any 12-month period, granted on arrival. Stay longer in a year and you would need an extension or a different visa category, arranged with Ecuador's migration authority.",
            "Have your <b>passport</b> (valid for the length of your stay), and be ready to show an <b>onward ticket</b> and accommodation if asked. No visa fee applies to a standard tourist entry to the mainland."
          ]
        },
        {
          h: "The Galapagos fees, the part that surprises people",
          icon: "ticket",
          key: { fig: "$220", tag: "Galapagos, cash only", text: "A $20 INGALA transit card at the mainland airport and a $200 national park fee, both cash, and there are no ATMs at the island airports.", tone: "amber" },
          p: [
            "The Galapagos are the real cost gate, and both fees are <b>cash</b>. Before you fly from Quito or Guayaquil, you buy the <b>INGALA transit control card for 20 dollars</b> at a dedicated airport counter, and you keep the receipt.",
            "On arrival at Baltra or San Cristobal, a park officer collects the <b>national park entrance fee</b>: <b>200 dollars per foreign adult</b>, 100 dollars per child under 12. This <b>doubled from 100 dollars in August 2024</b>, so budget the new amount, and note there are <b>no ATMs at the island airports</b>, so bring clean dollars."
          ]
        },
        {
          h: "One more form before the islands",
          icon: "receipt",
          key: { fig: "Online", tag: "Before you fly", text: "Galapagos-bound travelers complete a short biosecurity declaration online, and all bags are inspected for plant and animal material at the mainland airport.", tone: "teal" },
          p: [
            "Galapagos-bound travelers also complete a short <b>biosecurity declaration</b> online before the flight, and all bags are inspected for prohibited plant and animal material at the mainland airport. It is quick, but arrive with extra time.",
            "None of this is a visa. For most travelers the paperwork is simply a passport, an onward ticket, and the Galapagos card and fee if you are going to the islands."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa to visit Ecuador?", a: "No. US citizens can visit Ecuador visa-free for up to 90 days in a 12-month period as tourists, granted on arrival. You need a passport valid for your stay, and officials may ask for an onward ticket and proof of accommodation. Staying longer than 90 days in a year requires an extension or a different visa." },
        { q: "How much does it cost to enter the Galapagos?", a: "About 220 dollars per foreign adult in fees: a 200 dollar national park entrance fee paid in cash on arrival (100 for children under 12), plus a 20 dollar INGALA transit control card bought at the mainland airport. Both are cash, there are no ATMs at the island airports, and the park fee doubled from 100 dollars in August 2024." },
        { q: "Do I need a passport or is an ID enough for Ecuador?", a: "You need a valid US passport to enter Ecuador, valid for the length of your stay. A driver license or other ID is not enough for international entry. Officials can also ask to see an onward or return ticket and proof of where you are staying." },
        { q: "Is there an entry or tourist fee for mainland Ecuador?", a: "No. There is no entry fee or tourist tax to pay at the border for mainland Ecuador. Prices include a 15% VAT, and restaurants often add a service charge, but there is nothing to hand over on arrival. The Galapagos fees are separate and apply only if you visit the islands." }
      ],
      sources: {
        links: [
          { label: "US State Department: Ecuador country information and entry requirements", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Ecuador.html", type: "gov" },
          { label: "Galapagos National Park Directorate: the park entrance fee and transit control card", url: "https://www.parquenacionalgalapagos.gob.ec/", type: "gov" }
        ],
        judgment: "Entry rules and fees can change, and the Galapagos park fee rose sharply in 2024, so confirm the current amounts on the official pages before you travel. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "US dollar" },
        { k: "Cards", v: "Fine in the cities" },
        { k: "Cash for", v: "Taxis, markets, small towns" },
        { k: "Galapagos", v: "Cash only, no ATMs" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Ecuador, or can I use cards? (2026) | True Trip Costs",
      description: "Ecuador uses the US dollar, so there is nothing to convert. Cards work in Quito, Guayaquil and Cuenca; carry cash for taxis, markets, small towns and the cash-only Galapagos fees, and use bank ATMs for safety. Checked July 2026.",
      h1: "Do I need cash in Ecuador, or can I use cards?",
      lede: "Short answer: cards cover the cities, but you will want dollars in hand for the everyday and rural side, and cash is essential in the Galapagos. Here is how to pay, and how to carry money safely.",
      checked: "Jul 2026",
      checkedISO: "2026-07-20",
      answer: "Both, with cash for more than you might expect. Because Ecuador uses the <b>US dollar</b>, there is nothing to convert. <b>Cards work in the cities</b>, Quito, Guayaquil and Cuenca, at hotels, better restaurants, malls and tours, but <b>taxis, markets, buses, small towns and tips run on cash</b>, and the <b>Galapagos park and transit fees are cash only</b>. Pull dollars from a <b>bank ATM inside a branch or mall</b>, carry <b>small, clean bills</b>, and keep only <b>50 to 100 dollars</b> on you at a time.",
      sections: [
        {
          h: "Where cards work, and where they do not",
          icon: "card",
          key: { fig: "US$", tag: "No conversion", text: "Ecuador uses the US dollar, so nothing to convert. Cards work in Quito, Guayaquil and Cuenca, while taxis, markets, buses and small towns run on cash.", tone: "teal" },
          p: [
            "In the cities, <b>Visa and Mastercard</b> are fine at hotels, better restaurants, malls and tour operators, with Amex less consistent. A few places add a small surcharge for card use. Since prices are in US dollars, there is no currency conversion on your card.",
            "Beyond the cities, and for <b>taxis, markets, buses, street food and small shops</b>, it is cash. Assume cash the moment you leave the main tourist areas."
          ]
        },
        {
          h: "Getting cash, safely",
          icon: "atm",
          key: { fig: "$5", tag: "ATM fee", text: "Use bank ATMs (Banco Pichincha, Banco Guayaquil, Produbanco). Expect about $3 to $5 plus your own bank fee, with limits often $300 to $500 per withdrawal.", tone: "teal" },
          p: [
            "Use <b>bank ATMs</b> (Banco Pichincha, Banco Guayaquil, Produbanco, Banco del Pacifico). Expect a fee of about <b>3 to 5 dollars</b> plus your home bank's, with limits often around <b>300 to 500 dollars</b> per withdrawal.",
            "For safety, use machines <b>inside a bank branch or a shopping mall</b>, not street-facing ones, withdraw during the day, and carry only what you need. Bring <b>clean, smaller bills</b>, since worn notes can be refused and change for 50s and 100s is scarce."
          ]
        },
        {
          h: "The Galapagos is a cash island",
          icon: "cash",
          key: { fig: "$220", tag: "No ATMs", text: "The $200 park fee and $20 transit card are cash only, and there are no ATMs at the island airports, so bring dollars from the mainland.", tone: "amber" },
          p: [
            "Plan cash carefully for the Galapagos: the <b>200 dollar park fee</b> and <b>20 dollar transit card</b> are cash only, and there are <b>no ATMs at the island airports</b>, so bring dollars from the mainland.",
            "For the full money picture, tipping and the taxes to expect, see the <a href=\"/ecuador\">Ecuador money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Can I use US dollars in Ecuador?", a: "Yes, everywhere, because the US dollar is Ecuador's official currency. There is nothing to exchange and no conversion, and the country mints its own centavo coins worth the same as US cents. Bring small, clean bills for taxis and tips, and get more from a bank ATM." },
        { q: "Do I need cash in Ecuador?", a: "Yes, more than in a card-first country. Cards cover city hotels, restaurants, malls and tours, but taxis, markets, buses, small towns and tips need cash, and the Galapagos fees are cash only. Carry small, clean dollar bills and keep only what you need on you." },
        { q: "Where should I get cash in Ecuador?", a: "From a bank ATM, and for safety use one inside a branch or a mall rather than a street-facing machine. Banco Pichincha, Banco Guayaquil, Produbanco and Banco del Pacifico are common. Expect a fee of about 3 to 5 dollars plus your home bank's, and limits around 300 to 500 dollars." },
        { q: "Do I need cash for the Galapagos?", a: "Yes. The 200 dollar national park fee and the 20 dollar transit control card are both cash, and there are no ATMs at the island airports, so bring the money in clean dollars from the mainland along with extra cash for daily spending, since cards and machines are limited on the islands." }
      ],
      sources: {
        links: [
          { label: "Galapagos National Park Directorate: the cash-only park entrance fee", url: "https://www.parquenacionalgalapagos.gob.ec/", type: "gov" }
        ],
        judgment: "Card acceptance, ATM fees and withdrawal limits are our read from recent traveler and bank reports, not a single official table, so treat the figures as a planning guide. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Best option", v: "Uber, inDrive, Cabify" },
        { k: "Street taxis", v: "Orange plates only" },
        { k: "Airport", v: "Pre-arrange, esp. Guayaquil" },
        { k: "Fare", v: "Metered or agreed first" }
      ],
      live: true,
      topic: "taxis",
      caution: "high",
      title: "Taxis and ride apps in Ecuador: Uber, inDrive and staying safe (2026) | True Trip Costs",
      description: "How to get around Ecuador's cities safely: use a registered taxi or a ride app (Uber, inDrive, Cabify) rather than hailing one, pre-arrange airport transfers especially in Guayaquil, and always agree the fare or run the meter. Checked July 2026.",
      h1: "Taxis and ride apps in Ecuador, done safely",
      lede: "Getting around Ecuador is cheap, but hailing a taxi off the street carries a real safety risk in the big cities. Here is which apps to use, how to handle the airport, and the habits that keep it simple.",
      checked: "Jul 2026",
      checkedISO: "2026-07-20",
      answer: "Use a <b>registered taxi or a ride app</b>, not a car you flag down. In the cities, <b>Uber, inDrive and Cabify</b> all work and show the driver and price up front, which is both cheaper and safer. <b>Pre-arrange your airport transfer</b> through your hotel or a trusted service, especially in <b>Guayaquil</b>. With a street taxi, use only <b>official orange-plated cabs</b>, check the meter is running or <b>agree the fare first</b>, and never share a cab with strangers.",
      official: {
        label: "US State Department: Ecuador country information and safety",
        url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Ecuador.html",
        note: "The official US-side page on local conditions and safety, including transport. Worth a read before you go."
      },
      sections: [
        {
          h: "Apps first",
          icon: "phoneok",
          key: { fig: "3 apps", tag: "Safest option", text: "Uber, inDrive and Cabify run in Quito and Guayaquil. You see the driver, car and plate, the price is set, and there is a record of the trip.", tone: "teal" },
          p: [
            "<b>Uber, inDrive and Cabify</b> operate in Quito and Guayaquil and are the safest everyday option: you see the driver, car and plate, the price is set or metered, and there is a record of the trip. inDrive lets you name a fare and drivers accept or counter.",
            "Pay in <b>cash or in-app</b> depending on the service. Keep small bills for cash trips, since drivers may not have change for large notes."
          ]
        },
        {
          h: "The airport, and Guayaquil especially",
          icon: "plane",
          key: { tag: "Guayaquil especially", text: "Book an airport transfer through your hotel or a reputable company before you land. This matters most in Guayaquil, where the advice is to pre-arrange transport.", tone: "amber" },
          p: [
            "The safest arrival is a <b>transfer booked through your hotel</b> or a reputable company, arranged before you land. This matters most in <b>Guayaquil</b>, where the US advice is to limit unnecessary movement and pre-arrange transport.",
            "If you do take an airport taxi, use the <b>official taxi counter or rank</b> inside the terminal, not a driver who approaches you."
          ]
        },
        {
          h: "Street taxis, if you must",
          icon: "alert",
          key: { fig: "Orange", tag: "Official cabs only", text: "Use only official taxis with orange plates and a working meter. Check the meter is on or agree the fare first, since some drivers overcharge visitors.", tone: "teal" },
          p: [
            "Use only <b>official taxis</b> (orange plates, a company name and a working meter). Check the <b>meter is on</b> or <b>agree the fare before you get in</b>, since some drivers overcharge visitors.",
            "Avoid hailing at night, do not share with strangers, and if something feels off, wait for an app car instead. For how to carry and pay cash safely, see the <a href=\"/ecuador\">Ecuador money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Uber available in Ecuador?", a: "Yes. Uber operates in Quito and Guayaquil, along with inDrive and Cabify. Ride apps are the safest everyday way to get around, because you see the driver, car and plate, the price is set or metered, and the trip is logged. They are usually cheaper than a negotiated street taxi too." },
        { q: "Is it safe to take taxis in Ecuador?", a: "Registered taxis and ride apps are the safe choices; hailing a car off the street carries a real risk in the big cities. Use official orange-plated taxis with a working meter, or an app, pre-arrange airport transfers especially in Guayaquil, avoid hailing at night, and never share a cab with strangers." },
        { q: "How do I get from Guayaquil airport to the city safely?", a: "Pre-arrange a transfer through your hotel or a reputable company before you land, which is the recommended option in Guayaquil. If you must take a taxi, use the official taxi counter inside the terminal rather than a driver who approaches you, and keep valuables out of sight." },
        { q: "Should I agree a taxi fare in advance in Ecuador?", a: "Yes, unless the meter is running. With official street taxis, either confirm the meter is on or agree the fare before you get in, since some drivers overcharge visitors. Ride apps avoid the issue by setting the price up front. Keep small bills, as drivers may lack change." }
      ],
      sources: {
        links: [
          { label: "US State Department: Ecuador country information and safety", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Ecuador.html", type: "gov" }
        ],
        judgment: "The app coverage and the safety habits are our read from advisories and recent traveler reports, not an official transport table, so use your judgment and check the current advisory. Checked July 2026."
      }
    }
  ]
};
