import { S } from './carrier-spine.js';

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

  title: "Ecuador uses the US dollar: money guide for 2026",
  description: "Nothing to exchange: the US dollar is the official currency. Carry small bills for taxis and markets, and expect cash-only Galapagos fees. Checked 2026.",

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
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "A 10% service, often added" },
        { k: "Currency", v: "US dollars (yes, really)" },
        { k: "Great service", v: "A little extra is welcome" },
        { k: "Casual spots", v: "No tip" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Ecuador: the 10%, and it is in dollars",
      description: "A 10% service charge is often already on the bill, and the currency is the US dollar. What to leave for genuinely good service. Checked 2026.",
      h1: "Tipping in Ecuador",
      lede: "In Ecuador, a 10% service charge is often already on your restaurant bill, and the whole thing is in US dollars, so there is no conversion to think about. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "In Ecuador, better restaurants <b>often add a 10% service charge</b> to the bill (alongside the sales tax), so a tip is <b>largely built in</b> and you do <b>not need to add more</b>. A convenient quirk: Ecuador uses the <b>US dollar</b> as its currency, so tips are in <b>dollars</b> with no conversion. For genuinely good service, a <b>little extra</b> is welcome. At <b>casual spots and markets</b>, no tip is expected. For <b>taxis</b>, rounding up is a courtesy, not a rule.",
      sections: [
        {
          h: "The 10% service, often on the bill",
          icon: "receipt",
          key: { fig: "10%", tag: "Often already added", text: "Better restaurants often add a 10% service charge alongside the tax. That covers the tip, so you need not add more.", tone: "teal" },
          p: [
            "At <b>better restaurants</b>, a <b>10% service charge</b> is <b>often added</b> to the bill, alongside the sales tax. That <b>stands in for a tip</b>, so you do <b>not need to add more</b>. Check the bill so you know whether it is there.",
            "At <b>casual eateries, set-menu almuerzo spots and markets</b>, there is usually no service charge and <b>no tip is expected</b>."
          ]
        },
        {
          h: "It is all in US dollars",
          icon: "usd",
          key: { fig: "US dollars", tag: "No conversion", text: "Ecuador uses the US dollar as its currency, so tips are in dollars with no conversion to think about.", tone: "teal" },
          p: [
            "A convenient quirk for US visitors: <b>Ecuador uses the US dollar</b> as its official currency (it adopted the dollar in 2000). So any <b>tip is simply in dollars</b>, with no exchange rate or conversion to work out.",
            "For genuinely good service where no service charge applied, leaving a <b>little extra</b>, rounding up or roughly 10%, is a welcome gesture. Keep small bills and coins, which are handy for tips."
          ]
        },
        {
          h: "Taxis, and paying",
          icon: "cash",
          key: { fig: "Round up", tag: "Not a rule", text: "For taxis, rounding up is a courtesy, not a rule. Leave anything extra in cash, in US dollars.", tone: "teal" },
          p: [
            "For <b>taxis</b>, <b>rounding up</b> is a courtesy but <b>not a rule</b>; agree the fare or use the meter first. <b>Hotel porters</b>, a dollar or two a bag is a kind gesture. Leave any extra in <b>cash, in dollars</b>. For the wider picture, see <a href='/ecuador/cash-or-card'>cash or card in Ecuador</a> and the <a href='/ecuador'>Ecuador money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Ecuador?", a: "Lightly. Better restaurants often add a 10% service charge that covers the tip, so you need not add more. For good service where none applied, a little extra is welcome. At casual spots and markets, no tip is expected." },
        { q: "What currency do you tip in Ecuador?", a: "US dollars. Ecuador uses the US dollar as its official currency, so tips are in dollars with no conversion to think about. Keep small bills and coins for tips." },
        { q: "Is there a service charge in Ecuadorian restaurants?", a: "Often, at better restaurants: a 10% service charge alongside the tax. Check the bill; if it is there, it covers the tip. Casual spots usually have no service charge." },
        { q: "Do you tip taxi drivers in Ecuador?", a: "Rounding up is a courtesy but not a rule. Agree the fare or use the meter first, and the total is what you pay." }
      ],
      sources: {
        links: [
          { label: "US State Department: Ecuador country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Ecuador.html", type: "gov" }
        ],
        judgment: "Ecuador uses the US dollar, and the 10% restaurant service charge is a common but not universal convention. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
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
      title: "Ecuador visa and Galapagos fees for US travelers",
      description: "No visa for US citizens up to 90 days. You need a passport and onward ticket, plus a 20 dollar transit card and 200 dollar cash park fee for Galapagos.",
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
      title: "Do I need cash in Ecuador? It uses US dollars",
      description: "Ecuador uses the US dollar, so there is nothing to convert. Cards work in Quito, Guayaquil and Cuenca; carry cash for taxis, markets and Galapagos fees.",
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
      title: "Taxis in Ecuador: Uber, inDrive, and staying safe",
      description: "Use a registered taxi or a ride app, Uber, inDrive or Cabify, rather than hailing. Pre-arrange Guayaquil airport, and agree the fare or run the meter.",
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
    },
    {
      slug: "money-scams",
      glance: [
        { k: "The real risk", v: "The taxi you flagged down" },
        { k: "Taxis", v: "Order it, never hail it" },
        { k: "Your wallet", v: "Only what you need today" },
        { k: "Galapagos fees", v: "Cash only, bring it with you" }
      ],
      live: true,
      topic: "scams",
      title: "Common money scams in Ecuador, and what they cost",
      description: "The secuestro express, drink spiking and card skimming. What each one is, how to stay out of the situation, and the Galapagos fees you must carry in cash.",
      h1: "Common money scams in Ecuador, and what they cost you",
      lede: "Ecuador packs an extraordinary amount into a small country and most visits pass without any of this. But we are not going to tell you a few habits defuse it, because the main way money leaves a foreign visitor here is not an overcharge. It is a taxi you flagged down in the street, or a drink you did not watch being poured. That changes the advice: it is about not entering the situation, and about carrying less so there is less to take. Note that this page covers money; the US State Department has Ecuador at a raised advisory level with a kidnapping indicator, and parts of the country carry separate warnings, so read the full advisory before you plan a route.",
      checked: "Aug 2026",
      checkedISO: "2026-08-15",
      answer: "Two things account for most money taken from visitors, and both work by removing your ability to refuse. The <b>secuestro express</b>, where a taxi picked up in the street is intercepted by the driver's accomplices and the passenger is driven between ATMs, with the driver often complicit. And <b>drink spiking</b>, using Rohypnol or scopolamine, which the State Department notes targets men through dating apps and in nightlife areas at weekends. Add ordinary <b>card skimming</b>. The escapes: <b>order a taxi by phone or app, never hail one</b>, <b>never accept a drink from a stranger</b>, <b>use ATMs in protected indoor areas</b>, <b>avoid withdrawing large amounts at once</b>, and <b>carry only the cash and cards you need that day</b>. Separately: the <b>Galapagos fees are cash only</b>.",
      sections: [
        {
          h: "The secuestro express, and the taxi you flagged",
          icon: "taxi",
          key: { fig: "Order it by phone", tag: "Never hail one", text: "US security reporting describes taxi passengers intercepted by armed accomplices and forced to withdraw money at ATMs, and notes that in many cases the driver is complicit.", tone: "teal" },
          p: [
            "This is the one that shapes how you move around Ecuador. US security reporting describes robberies and assaults against <b>taxi passengers</b> as a significant concern, especially in <b>Guayaquil and Manta</b>, in which armed thieves intercept the vehicle, threaten the passenger and <b>force them to withdraw money from ATMs</b>. The detail that matters most is this: <b>in many cases the taxi driver is complicit</b>. Locally it is the <b>secuestro express</b>. Canada's advice adds that these are often organised gangs who may take a victim to an ATM, or hold them longer and force <b>online bank transfers</b>, and that they sometimes work in collaboration with taxi or rideshare drivers.",
            "So the rule is the State Department's own: <b>avoid hailing taxis on the street</b>. Order by phone, use an app such as <b>Uber, inDrive or Cabify</b>, or use a service affiliated with your hotel. Australia's advice adds a useful check: <b>registered taxis carry a panic button and security cameras</b>, and express kidnappings usually involve unregistered ones, so look for the orange plates and the equipment. Canada notes taxis are generally fine by day and that these incidents cluster at <b>night</b>, which is a reasonable way to calibrate. Pre-arrange your airport transfer, especially in Guayaquil, since the State Department records travelers robbed even as they exit the arrivals areas at Quito and Guayaquil airports. The <a href=\"/ecuador/taxis-and-apps\">Ecuador taxis and apps guide</a> has the detail."
          ]
        },
        {
          h: "Drinks, and who is buying",
          icon: "alert",
          key: { tag: "Never from a stranger", text: "The State Department names Rohypnol and scopolamine used to facilitate robberies, and says men are targeted on dating apps and at weekends in popular nightlife areas.", tone: "teal" },
          p: [
            "The State Department's Ecuador guidance is specific in a way worth quoting closely: <b>do not leave food or drinks unattended, and never accept drinks from a stranger</b>, because incapacitating drugs including <b>Rohypnol and scopolamine</b> have been used to facilitate robberies. It also names the target group, which cuts against the usual assumption: <b>men are targeted on dating apps and on weekends in popular nightlife areas</b>. Australia's advice notes scopolamine has also been administered through aerosol sprays and paper handouts, so declining a leaflet pressed on you in the street is not paranoid.",
            "What follows is the same as elsewhere: cards, phone and cash go while you cannot object, and there is a real medical risk alongside the financial one. The escapes sit entirely before the drink. <b>Watch what you are drinking being poured</b>, prefer sealed and branded bottles, never leave a glass and come back to it, and be cautious about going somewhere private with someone new. Tell someone at home who you are meeting and where. If you are robbed, do not resist."
          ]
        },
        {
          h: "At the ATM, and what you carry",
          icon: "atm",
          key: { fig: "Carry a day's worth", tag: "Indoors only", text: "The State Department advises using ATMs in well-protected indoor areas, avoiding large single withdrawals, and carrying only the cash and cards you actually need.", tone: "teal" },
          p: [
            "Because Ecuador uses the <b>US dollar</b>, there is no exchange rate to worry about, and the whole ATM question becomes one of where and how much. The State Department's advice is short and worth following exactly: <b>use ATMs in well-protected indoor areas</b>, meaning inside a bank branch or a mall rather than a street-facing machine, <b>avoid withdrawing large amounts of cash at one time</b>, and <b>carry only the cash or credit cards that you need</b>. Roughly 50 to 100 dollars on you at a time is the usual working figure, with the rest in the hotel safe.",
            "Two additions. <b>Lower your daily withdrawal limit with your bank before you fly</b>, which costs nothing and caps the worst case in the forced-withdrawal scenario above. And on cards, the State Department is explicit: <b>do not let your credit card out of your sight</b>, to avoid skimming, which Canada also flags. Turn on transaction alerts so a bad charge reaches your phone the same day. Practical dollar detail: bring <b>clean, smaller bills</b>, since worn or torn notes get refused and change for fifties and hundreds is scarce, as the <a href=\"/ecuador/cash-or-card\">Ecuador cash and cards guide</a> explains."
          ]
        },
        {
          h: "The Galapagos cash, which is a fee and not a scam",
          icon: "usd",
          key: { fig: "$220 in cash", tag: "Bring it from the mainland", text: "The Galapagos national park fee and transit control card are official government charges, payable in cash, and there are no airport ATMs on the islands. Carry clean notes from the mainland.", tone: "amber" },
          p: [
            "This one belongs on the page for the opposite reason to everything above: people meet it, feel ambushed, and assume they are being scammed. They are not. The <b>Galapagos transit control card</b> bought at the mainland airport and the <b>national park entrance fee</b> are official Ecuadorian government charges, currently <b>20 dollars and 200 dollars</b> respectively for most adult foreign visitors. What makes them feel wrong is the logistics: they are <b>cash only</b>, and there are <b>no airport ATMs on the islands</b>, so you must carry the money with you in clean, acceptable notes. Turning up without it is a genuine problem rather than a negotiation.",
            "Because the fees are official and fixed, the correct response to anyone offering to arrange them differently, or quoting another number, is to decline. Check the current amounts before you fly, since they have changed, and see the <a href=\"/ecuador/visa-and-galapagos-fees\">Ecuador visa and Galapagos fees guide</a>. While you are reading bills: sit-down restaurants often add a <b>10 percent service charge</b> alongside the tax, so you rarely need to add much on top, as the <a href=\"/ecuador/tipping\">Ecuador tipping guide</a> covers."
          ]
        },
        {
          h: "What this means for your money",
          icon: "coins",
          key: { fig: "Decisions", tag: "Not just vigilance", text: "Order taxis rather than hailing them, never accept a drink from a stranger, withdraw indoors in smaller amounts, and carry only what you need for the day.", tone: "teal" },
          p: [
            "Vigilance is not the tool here, because you cannot watch your wallet carefully enough to beat a car you cannot get out of. Every useful item is a <b>decision made in advance</b>: <b>order a taxi by phone or app rather than hailing one</b>, <b>never accept a drink from a stranger and watch yours being poured</b>, <b>use ATMs in protected indoor areas and avoid large single withdrawals</b>, <b>lower your daily cap before you fly</b>, and <b>carry only the cash and cards you need today</b>. Route planning matters more in Ecuador than in most places, because risk varies sharply by province, so check the current advisory rather than treating the country as uniform.",
            "If something happens: emergency services are <b>911</b>, and Quito has a dedicated <b>tourist police</b> unit used to handling foreigners. Report it even if you expect nothing back, because your insurer will want the record, and call your card issuer immediately. Handled with those few decisions made, Ecuador is a rewarding and manageable country, and the Galapagos, the Andes and the Amazon are why people come. For getting and spending money well while you are there, see the <a href=\"/ecuador/cash-or-card\">Ecuador cash and cards guide</a> and the <a href=\"/ecuador\">Ecuador cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Ecuador safe for tourists?", a: "Most visits pass without incident, but risk varies sharply by province and the US State Department has Ecuador at a raised advisory level with a kidnapping indicator. This page covers money, where the main risks are the secuestro express in street-hailed taxis, drink spiking, and card skimming. Check the current advisory before planning a route, since some areas carry separate warnings." },
        { q: "What is a secuestro express in Ecuador?", a: "An express kidnapping. A passenger who hailed a taxi in the street is intercepted by armed accomplices of the driver and forced to withdraw money at a series of ATMs. US security reporting names Guayaquil and Manta particularly, and notes that in many cases the driver is complicit. Order taxis by phone or app instead, and never hail one on the street." },
        { q: "Are taxi apps safe in Ecuador?", a: "They are much safer than hailing on the street, and Uber, inDrive and Cabify all operate. Be aware that Canada's advice notes gangs sometimes work in collaboration with taxi or rideshare drivers, so an app is a strong safeguard rather than a perfect one. Registered taxis carry a panic button and cameras, incidents cluster at night, and hotel-arranged cars are a good option after dark." },
        { q: "Is drink spiking a risk in Ecuador?", a: "Yes, and the State Department is specific: Rohypnol and scopolamine have been used to facilitate robberies, and men are targeted on dating apps and at weekends in popular nightlife areas. Australia's advice notes scopolamine has also been delivered by aerosol spray and paper handouts. Never accept a drink from a stranger, watch yours being poured, and do not leave it unattended." },
        { q: "How much cash should I carry in Ecuador?", a: "Only what you need for the day, commonly around 50 to 100 dollars, with the rest in the hotel safe. The State Department advises using ATMs in well-protected indoor areas, avoiding large single withdrawals, and carrying only the cards you need. Lower your daily withdrawal limit with your bank before you fly, which caps the worst case at no cost." },
        { q: "Why are the Galapagos fees cash only?", a: "They are official Ecuadorian government charges, currently a 20 dollar transit control card bought at the mainland airport and a 200 dollar national park entrance fee for most adult foreign visitors, and the islands have no airport ATMs. It is a fee, not a scam. Bring the money in clean, smaller notes from the mainland, and check current amounts before you fly since they have changed." }
      ],
      sources: {
        links: [
          { label: "US State Department: Ecuador country information, including the avoid-hailing-taxis rule, ATM advice and drink spiking warning", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Ecuador.html", type: "gov" },
          { label: "OSAC: Ecuador country security report, including taxi interceptions, complicit drivers and the kidnapping indicator", url: "https://www.osac.gov/Content/Report/19e89ddd-38d6-4062-aa6d-1c2aad29162d", type: "gov" },
          { label: "Government of Canada: Ecuador travel advice, including express kidnapping, forced transfers and card fraud", url: "https://travel.gc.ca/destinations/ecuador", type: "gov" }
        ],
        judgment: "The instruction to avoid hailing taxis, to use ATMs in well-protected indoor areas, to avoid large single withdrawals, to keep a card in sight, and the naming of Rohypnol and scopolamine with men targeted through dating apps and weekend nightlife all come from current US State Department country information for Ecuador. The taxi interception mechanism, the complicit-driver point and the Guayaquil and Manta focus come from US security reporting. The organised-gang framing, the forced online transfers, the note that gangs sometimes work with taxi or rideshare drivers and the day-versus-night distinction come from Government of Canada advice. The registered-taxi panic button and camera detail comes from Australian government advice. We have attached no dollar figure to the express kidnapping or spiking sections because the loss is whatever your accounts allow, which is the argument for a low daily cap and carrying a day's cash. Galapagos fees are official charges that have changed before, so verify them before travel. Ecuador uses the US dollar. Checked August 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Good in Quito, Guayaquil, the Andes corridor" },
        { k: "Signal gaps", v: "The Oriente and remote Andes" },
        { k: "The Galapagos", v: "Its own destination, check the plan" },
        { k: "Carrier roaming", v: "$10 to $12 a day" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "medium",
      title: "Ecuador: check whether your plan covers the Galapagos",
      description: "Ecuadorian coverage is good along the Andes corridor and thin in the Amazon. The Galapagos is a separate destination that plans often exclude, and connectivity there is limited.",
      h1: "Staying connected in Ecuador.",
      lede: "Mainland Ecuador is straightforward: decent coverage in the corridor where everyone travels, gaps in the Amazon. The part that catches people is the Galapagos, which for your phone is somewhere else entirely.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>good in Quito, Guayaquil, Cuenca</b> and along the Andes corridor including Banos and Otavalo, and it thins in the <b>Oriente</b>, the Amazon lodges east of Coca and Tena, on the remote Andean paramo and parts of the northern coast. <b>Claro</b> has the widest reach, with <b>Movistar</b> competitive in the cities. The Ecuador-specific check is the <b>Galapagos</b>: it is listed as its own destination by the US carriers, travel eSIM plans covering Ecuador do not always include it, and connectivity on the islands is <b>limited and slow</b> even when covered, with lodge and boat wifi often satellite-backed. Your US carrier charges about <b>${S.dayPass}</b> to roam (<b>AT&amp;T and Verizon</b> day passes), though <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, while <b>Verizon has ${S.verizonNoCap}</b> and keeps billing daily. <b>T-Mobile</b>'s mid and upper tiers include <b>${S.tmoRange}</b> of high-speed data abroad before slowing to <b>${S.throttle}</b>. A <b>Nomad eSIM</b> is a few dollars per gigabyte; a local SIM is cheaper with your <b>passport</b>. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "The Galapagos is a separate question",
          icon: "alert",
          key: { fig: "The Galapagos", tag: "Check by name", text: "Listed as its own destination, often excluded from Ecuador plans, and slow even where covered. Boat days are offline days.", tone: "amber" },
          p: [
            `If the islands are on your itinerary, sort this before you fly. The <b>Galapagos</b> appears as its own entry on the US carriers' destination lists, and travel eSIM plans sold as covering Ecuador do not always extend to it, so <b>look for it by name</b>. Then set expectations: even where covered, island connectivity is <b>limited and slow</b>, concentrated around Puerto Ayora, Puerto Baquerizo Moreno and Puerto Villamil, with much of the archipelago having nothing.`,
            `A liveaboard <b>cruise</b> is effectively an offline week, and any wifi on board is satellite, slow and often charged. That is worth knowing in advance rather than discovering it, and it is genuinely part of the appeal for some people. Download everything before you sail, and keep <b>data roaming off</b> on the boat so your phone does not find a maritime network and bill for it.`
          ]
        },
        {
          h: "On the mainland, the corridor is fine",
          icon: "phoneok",
          key: { fig: "Claro", tag: "The widest reach", text: "Claro reaches furthest, including much of the Andes corridor. The Oriente and the remote paramo are thin on any network.", tone: "teal" },
          p: [
            `Mainland coverage follows the corridor most visitors travel: <b>Quito, Guayaquil, Cuenca</b>, Banos, Otavalo, Riobamba and the Panamericana all have workable 4G with 5G in the big cities, and the mountain roads between them mostly hold. <b>Claro</b> has the widest footprint and is the safe default, with <b>Movistar</b> fine in the cities.`,
            `Where it thins: the <b>Oriente</b>, especially the Amazon lodges reached by canoe from Coca or Tena, which frequently have no signal at all and satellite wifi at best; the remote <b>paramo</b> and the higher Andean approaches; and parts of the northern coast. So an Amazon leg is an offline leg, and a Cotopaxi or Quilotoa day wants <b>offline maps</b>. Note also that Quito sits at 9,350 feet, and altitude affects phones and batteries less than it affects you, but a dying battery on a long bus day is still the common failure.`
          ]
        },
        {
          h: "What each option costs",
          icon: "roamfee",
          key: { fig: `${S.dayPassFig}`, tag: "Roaming default", text: "A US carrier day pass is the expensive default. AT&T caps it at 10 daily fees a bill period, Verizon does not cap at all, and T-Mobile's mid and upper tiers include 5GB to 30GB abroad.", tone: "teal" },
          p: [
            `A local <b>Claro</b> or <b>Movistar</b> prepaid SIM with a data bundle is cheap, bought with your <b>passport</b> in a carrier shop or at the airport, and it is the cheaper option if you are staying a while. A <b>Nomad eSIM</b> at a few dollars per gigabyte works from landing and avoids the counter, which matters if you land late in Quito and want a ride.`,
            `Roaming is about <b>${S.dayPass}</b>, so <b>${S.week}</b> a week, with <b>AT&amp;T</b> capping at <b>${S.capFees}</b>, about <b>${S.capAmount}</b>, and <b>Verizon</b> having <b>${S.verizonNoCap}</b>. <b>T-Mobile</b>'s tiers include <b>${S.tmoRange}</b> before <b>${S.throttle}</b>. Ecuador uses the <b>US dollar</b>, which removes one layer of friction: see <a href='/ecuador/cash-or-card'>cash or card in Ecuador</a>. For more, see <a href='/ecuador/taxis-and-apps'>taxis and apps in Ecuador</a> and the <a href='/ecuador'>Ecuador money guide</a>.`
          ]
        }
      ],
      faqs: [
        { q: `Does my Ecuador plan cover the Galapagos?`, a: `Not always. The Galapagos is listed as its own destination by the US carriers and travel eSIM plans covering Ecuador do not always include it, so look for it by name. Even where covered, island connectivity is limited and slow, concentrated in the main ports, and a liveaboard cruise is effectively an offline week.` },
        { q: `Which network is best in Ecuador?`, a: `Claro has the widest reach, including much of the Andes corridor and the smaller towns, with Movistar competitive in the cities. Neither covers the Oriente or the remote paramo reliably.` },
        { q: `Will I have signal in the Ecuadorian Amazon?`, a: `Frequently not. Lodges reached by canoe from Coca or Tena often have no signal at all and satellite wifi at best. Treat an Amazon leg as offline: download maps and your booking details, and leave your itinerary with somebody.` },
        { q: `How much does it cost to use my US phone in Ecuador?`, a: `About ${S.dayPass} on an AT&T or Verizon day pass, so roughly ${S.week} a week. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad before slowing to ${S.throttle}.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "AT&T: the International Day Pass destination list, which names the Galapagos Islands separately", url: "https://www.att.com/support/article/wireless/KM1395068/", type: "card" },
          { label: "US State Department: Ecuador country information and local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Ecuador.html", type: "gov" }
        ],
        judgment: "Checked Aug 2026. The Galapagos point is the useful content and it is a check rather than a purchase: its separate listing was verified against AT&T's own destination list, and the honest addition is that even a plan covering it buys you limited and slow service, because the islands genuinely are not wired. Saying so costs us a sale on the leg of the trip people are most anxious about. Mainland coverage and Claro's reach advantage are the desk's read from operator footprints and traveler accounts."
      }
    },
    {
      slug: "medical-costs",
      exposureCategory: "evacuationIsTheCost",
      exposureQuote: "the serious case flies to the mainland, and that flight is the bill that matters",
      glance: [
        { k: "Quito and Guayaquil", v: "Capable private hospitals" },
        { k: "Galapagos", v: "Basic care, then a flight" },
        { k: "Payment", v: "Up front, as a visitor" },
        { k: "Real risk", v: "Where you are when it happens" }
      ],
      live: true,
      topic: "health",
      title: "Getting sick in Ecuador: the mainland is the hospital",
      description: "Quito and Guayaquil have capable private hospitals. On the Galapagos and in the Amazon, the serious case flies to the mainland, and that flight is the bill.",
      h1: "What does getting sick in Ecuador cost a visitor?",
      lede: "Ecuador's medical map is honest about itself: capable private hospitals in Quito, Guayaquil and Cuenca, and thin coverage exactly where its most famous trips happen. On the islands and in the Oriente, the serious case flies to the mainland, and that flight is the bill that matters.",
      checked: "Aug 2026",
      checkedISO: "2026-08-21",
      answer: "On the mainland, a visitor's position is ordinary for the region: <b>private clinics and hospitals</b> in Quito, Guayaquil and Cuenca handle everything from the everyday to the serious, at prices that read as moderate by US standards, with <b>payment expected up front</b> and card holds at admission normal. The exposure that is genuinely Ecuadorian is the map. The <b>Galapagos</b> have basic clinics and a small hospital, sized for the islands' population, not for complex medicine; the <b>Amazon lodges</b> of the Oriente sit hours from anything by boat and road. From either, the serious case takes a <b>flight to the mainland</b>, sometimes arranged as a medical transport, and that flight is the largest number this page implies. It is also why cover here is judged on the evacuation and medical transport lines, not the outpatient benefit.",
      insurance: true,
      insuranceNote: "Mainland Ecuador earns real reassurance: good private hospitals in the big cities, moderate costs, an everyday problem handled without drama, and we would rather say that than inflate it. The honest exposure is the trip most people came for: on the Galapagos or at an Amazon lodge, the serious case is a flight to the mainland before treatment even starts. If you carry cover for Ecuador, the medical transport and evacuation lines are the ones doing the work. Faye covers trip medical and evacuation.",
      careFirst: "If it is serious, get to care or start moving toward the mainland first, and settle the money afterwards.",
      sections: [
        {
          h: "The mainland tier is the good news",
          icon: "tag",
          key: { tag: "City hospitals", text: "Quito, Guayaquil and Cuenca run capable private hospitals at moderate prices, with payment up front and card holds at admission the working rule.", tone: "teal" },
          p: [
            "For a mainland itinerary, Ecuador is a calm page. The private hospitals of <b>Quito, Guayaquil and Cuenca</b> are capable and used to foreign patients, everyday care is easy to reach, and the prices, while real, are moderate by US standards. Pharmacies are everywhere and inexpensive.",
            "The billing is the regional norm: <b>payment up front</b>, a deposit or card hold at admission, and reimbursement as your problem unless your insurer has direct billing. Keep every receipt and ask for itemised bills."
          ]
        },
        {
          h: "The islands and the Oriente are the exposure",
          icon: "plane",
          key: { tag: "The flight to the mainland", text: "Galapagos facilities are sized for the islands, not complex medicine, and Amazon lodges are hours from anything. The serious case flies to Quito or Guayaquil.", tone: "amber" },
          p: [
            "Now the honest half. The <b>Galapagos</b> sit six hundred miles offshore with clinics and a small hospital built for the resident population; anything complex, cardiac, trauma, a bad dive profile, is stabilised and <b>flown to the mainland</b>. The <b>Oriente</b> is the same story by river and road: the lodges are wonderful precisely because they are far from everything, hospitals included.",
            "If it is serious, get to care or start moving toward the mainland first, and settle the money afterwards. On the islands that can mean a scheduled flight with a medical escort or a dedicated transport, and either way it is the bill that defines an Ecuadorian emergency."
          ]
        },
        {
          h: "Why there are no prices on this page",
          icon: "receipt",
          key: { tag: "Absence is not zero", text: "We have not sourced an Ecuadorian price list for visitor care that we would stand behind, so we have published none.", tone: "teal" },
          p: [
            "We would rather say this than pad the page. Ecuadorian care is priced facility by facility, and we did not source a published visitor tariff we would put our name to, so no dollar figure appears here even though Ecuador itself uses the US dollar. On a medical page a plausible-sounding number is not a small error, because it is something a person might act on while unwell.",
            "One more thing we are deliberately not claiming: insurance-requirement rules for entering Ecuador or the Galapagos have changed and been unevenly enforced over the years, and we could not pin the current state to an official page we would cite, so no such rule is asserted here. Check current entry requirements before you fly rather than relying on any website, including this one."
          ]
        },
        {
          h: "What this means for your money",
          icon: "cash",
          key: { tag: "Match it to the itinerary", text: "A mainland city trip is a moderate-cost, pay-up-front story. A Galapagos or Amazon trip is a transport story, and the medical transport line is the one to read.", tone: "teal" },
          p: [
            "Ecuador is two trips financially. The mainland city trip needs a card with headroom and ordinary caution. The Galapagos cruise or Amazon lodge trip needs a policy whose <b>medical transport and evacuation lines</b> would genuinely cover a flight to Quito or Guayaquil and, in the worst case, onward to home.",
            "Divers in the Galapagos should know the islands' recompression arrangements and check dive cover specifically. For paying on the ground, see the <a href=\"/ecuador/cash-or-card\">Ecuador cash and cards guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "What happens if I get sick on the Galapagos?", a: "The islands have clinics and a small hospital sized for their population. Everyday problems are handled locally; anything complex is stabilised and flown to the mainland, usually Quito or Guayaquil, and that flight is the bill that matters." },
        { q: "How good are hospitals in Quito and Guayaquil?", a: "The private hospitals there are capable and used to foreign patients, at moderate prices by US standards. Payment is expected up front, with a deposit or card hold at admission the working rule." },
        { q: "Do I need special insurance for the Galapagos?", a: "Entry-rule requirements have changed and been unevenly enforced over the years, so check the current official requirement before you fly. What is certain is practical: the serious case flies to the mainland, so a policy's medical transport line matters more than any entry rule." },
        { q: "Does my US health insurance work in Ecuador?", a: "Rarely, and Medicare not at all. Providers bill you directly and expect payment first. For a Galapagos or Amazon itinerary, what counts is a medical transport line that covers the flight to the mainland." },
        { q: "Do I need travel insurance for Ecuador?", a: "For a mainland city trip, the case is modest: moderate costs paid up front. For the Galapagos or the Oriente, the case is strong and specific: the serious case travels before it is treated, and cover is what pays for the travel." }
      ],
      sources: {
        links: [
          { label: "US State Department: Ecuador country information for US travelers, including health and medical care guidance", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Ecuador.html", type: "gov" }
        ],
        judgment: "The capable-mainland, thin-islands structure and the fly-to-the-mainland pattern for serious Galapagos and Oriente cases are geographic and structural facts consistent with official US guidance, stated qualitatively. We deliberately assert no insurance entry rule for Ecuador or the Galapagos because we could not pin the current requirement to an official page, and absence of the claim is honest where the rule's status is unclear. No figure appears because we did not source a published visitor tariff we would defend. Checked August 2026.",
      }
    }
  ]
};
