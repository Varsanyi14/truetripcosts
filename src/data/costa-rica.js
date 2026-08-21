export default {
  slug: "costa-rica",
  iso2: "cr",
  live: true,
  name: "Costa Rica",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  sources: {
    changed: "Sources added. Confirmed that VAT (IVA) is 13% and built into displayed prices, that sit-down restaurants add a 10% service charge on top so a bill can run about 23% over the menu price, and that there is no per-night tourist or city tax. The US dollar is widely accepted, though paying in colones gives better value. The colon figure, about 455 to the dollar, is current.",
    links: [
      { label: "Costa Rica Travel Blog: the 13% VAT (IVA) explained", url: "https://costaricatravelblog.com/vat-tax-in-costa-rica/", type: "guide" },
      { label: "Costa Rica Guide: the 10% restaurant service charge and tipping", url: "https://costa-rica-guide.com/practical/budget/how-much-to-tip/", type: "guide" }
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "911", note: "911 has English-speaking operators. In rural areas and along the coast, an ambulance can take longer to reach you.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "medium",
  rentalCommon: true,
  region: "Americas",
  spokes: [
    {
      slug: "renting-a-car",
      glance: [
        { k: "Online rate", v: "Usually not the real price" },
        { k: "Required by law", v: "Local liability, cannot decline" },
        { k: "Add per day", v: "Roughly $10 to $25" },
        { k: "Never covered", v: "Driving through water" }
      ],
      live: true,
      topic: "driving",
      title: "Renting a car in Costa Rica: the real cost 2026",
      description: "Costa Rican law requires local liability cover no credit card can replace, and the online quote usually hides it. What you can decline, and the hold.",
      h1: "What does renting a car in Costa Rica really cost?",
      lede: "Costa Rica is one of the great drives and also one of the places where the rate you booked is least likely to be the price you pay. A single mandatory insurance explains most of the gap.",
      checked: "Jul 2026",
      checkedISO: "2026-07-31",
      answer: "The rate you booked online is usually <b>not the final price</b>. Costa Rican law requires <b>local third-party liability cover</b>, sold as <b>TPL</b>, <b>PLI</b> or simply <b>Liability Protection</b> and underwritten through the state insurer <b>INS</b>, and <b>no credit card can replace it</b>. Budget roughly <b>$10 to $25 a day</b> on top, depending on the vehicle. The <b>collision damage waiver is separate and optional</b>, but declining it means a <b>large hold on your card</b> and paying for any repairs in Costa Rica before you can claim a cent back. One rule overrides everything: <b>no policy sold anywhere covers driving into water</b>.",
      carExcess: true,
      sections: [
        {
          h: "The insurance your quote leaves out",
          icon: "alert",
          key: { fig: "$10-25", tag: "Per day, and not optional", text: "Costa Rican law requires local third-party liability cover on every rental. It is not an upsell, you cannot decline it, and no credit card substitutes for it.", tone: "amber" },
          p: [
            "Every rental in Costa Rica has to carry <b>third-party liability</b> cover written through the state insurer, the <b>Instituto Nacional de Seguros (INS)</b>. You will see it billed as <b>TPL</b>, <b>PLI</b>, <b>SLI</b> or <b>Liability Protection</b>, and the naming is inconsistent between companies, which is part of why it confuses people. What it does is narrow: it pays for injury or damage you cause to <b>other people</b>, typically to around <b>$20,000</b> for third-party property and up to about <b>$100,000</b> for third-party injury. It pays nothing toward the rental car itself.",
            "This is the charge that breaks the online quote. It is legally required, so it gets added at pickup whether or not the booking site showed it, and it commonly runs <b>$10 to $25 a day</b> depending on the size of the vehicle. A $15 a day economy booking can land nearer <b>$30 to $40</b> before you have agreed to a single optional extra. Your <b>US auto policy does not satisfy it</b> and neither does any <b>credit card benefit</b>, because card cover is written for damage to the rental car, not for your liability to others."
          ]
        },
        {
          h: "Declining the collision waiver has its own price",
          icon: "card",
          key: { fig: "$1,000+", tag: "Typical hold on your card", text: "You can decline the collision waiver and lean on your card, but expect a large authorization hold and expect to pay repairs in Costa Rica first, then claim later.", tone: "amber" },
          p: [
            "The <b>collision damage waiver</b> (CDW or LDW) is the genuinely optional one, and it is where the counter makes its money. Take it and your liability for damage to the car drops to a deductible, commonly <b>$1,500 to $3,000</b>. Decline it and use your credit card instead, and two things follow that the pitch tends to skip.",
            "First, the <b>hold</b>. Declining the waiver means the company wants security, and holds of <b>$1,000 and up</b> are standard, with travelers reporting demands far higher at some airport desks. It has to sit on <b>one</b> card, so a thin credit limit can end the conversation at the counter. Second, the <b>sequence</b>: you pay for the repair in Costa Rica out of your own pocket, then claim reimbursement from your card issuer afterward. Bring a <b>letter of coverage</b> from your issuer, and pay for the whole rental on that same card, or the benefit does not apply at all.",
            "Note the asymmetry that trips people up: accepting <b>any</b> collision cover from the rental company voids your card's collision benefit, but paying the <b>mandatory liability</b> does not, because that one is required by law rather than sold as a waiver."
          ]
        },
        {
          h: "Tolls, fuel and the roads themselves",
          icon: "coins",
          key: { fig: "3 toll roads", tag: "Ruta 27, Ruta 1 and Ruta 32", text: "Costa Rica has only three tolled highways, and the tolls are small. Fuel is the bigger line, and it is government-regulated so the price is the same everywhere.", tone: "teal" },
          p: [
            "Tolls are a minor cost. Only <b>three</b> highways are tolled: <b>Ruta 27</b> from San Jose to Caldera, which is the main run to the Pacific beaches and has nine plazas, plus a couple of plazas each on <b>Ruta 1</b> and <b>Ruta 32</b>. The whole San Jose to Caldera stretch comes to roughly <b>4,000 to 4,500 colones</b>, about <b>$8</b>. Keep small colones in the car anyway. Card acceptance at the booths has been expanding, but reports still conflict on how reliable it is plaza to plaza, and where dollars are taken your change comes back in colones at a poor rate.",
            "Fuel matters more. Prices are <b>set by the government</b>, so they are identical at every station in the country and there is nothing to shop around for, but the level is well above what US drivers expect, in the region of <b>$1.50 to $1.65 a liter</b>, which is roughly <b>$5.70 to $6.25 a gallon</b>. Stations are full service, so an attendant pumps for you. Confirm gasoline or diesel out loud, because a wrong fill is on you.",
            "The other real cost is the vehicle. Plenty of the places people actually drive to, including stretches around Monteverde and much of the Nicoya peninsula, involve steep unpaved roads that get worse in the May to November rains, and a <b>4x4</b> runs far more than an economy car. Decide the vehicle by your route rather than by the daily rate, and see the <a href='/costa-rica/cash-or-card'>Costa Rica cash and cards guide</a> for how to pay once you are on the road."
          ]
        },
        {
          h: "What this means for your money",
          icon: "tag",
          key: { fig: "Get all-in", tag: "Quote with liability included", text: "Compare cars on an all-in quote that already includes the mandatory liability, and never drive into water, which voids every policy sold.", tone: "teal" },
          p: [
            "Do one thing before you book: get a quote that <b>explicitly includes the mandatory liability cover</b>, in writing, and compare companies on that number. A booking site showing a rate without it is not comparable to one that includes it, and the gap is not small. If you cannot get an all-in figure, assume the real price is the headline rate plus <b>$10 to $25 a day</b>.",
            "Then make the collision-waiver decision on paper rather than at the desk, knowing what your card actually covers in Costa Rica, whether you can absorb a four-figure hold, and whether you are willing to pay a repair bill locally and claim it back later. If any of those is a problem, buying the cover is the calmer choice, not the naive one.",
            "Finally, the rule that no amount of insurance solves: <b>do not drive through a river</b>. Navigation apps in Costa Rica will route you across shallow crossings to save time. Water damage voids the liability cover and the collision waiver alike, and you own the whole bill."
          ]
        }
      ],
      faqs: [
        { q: "Is car rental insurance mandatory in Costa Rica?", a: "The liability part is. Costa Rican law requires third-party liability cover, written through the state insurer INS, on every rental. You cannot decline it and no credit card replaces it, so budget roughly $10 to $25 a day on top of the rate. The collision damage waiver is separate and optional." },
        { q: "Does my credit card cover a rental car in Costa Rica?", a: "It may cover damage to the car, but never the mandatory liability. To use a card benefit you have to decline the company's collision waiver, pay for the whole rental with that card, and usually show a letter of coverage from your issuer. Expect a hold of $1,000 or more, and expect to pay repairs in Costa Rica first and claim afterward." },
        { q: "Why is the price so much higher at the counter?", a: "Because the legally required liability cover is often left out of the online quote. It gets added at pickup because the law requires it, which is how a cheap-looking rate becomes $30 to $40 a day or more. The charge is legitimate; the missing disclosure is what catches people." },
        { q: "Do I need a 4x4 in Costa Rica?", a: "It depends entirely on your route, not on the season alone. Paved main roads and the Ruta 27 corridor are fine in a normal car, but steep unpaved access roads in areas like Monteverde and much of the Nicoya peninsula are a different matter, especially in the May to November rains. Pick the vehicle for where you are actually going." },
        { q: "Are there many toll roads in Costa Rica?", a: "No, only three tolled highways, and the amounts are small. San Jose to Caldera on Ruta 27 totals about 4,000 to 4,500 colones, roughly $8. Keep small colones in the car, since card acceptance at the booths is improving but still inconsistent." }
      ],
      sources: {
        links: [
          { label: "US State Department: Costa Rica country information, including road conditions and driving guidance", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/CostaRica.html", type: "gov" },
          { label: "Instituto Nacional de Seguros (INS), the state insurer that underwrites the mandatory liability cover", url: "https://www.grupoins.com/", type: "gov" }
        ],
        judgment: "That third-party liability cover is legally required and cannot be replaced by a credit card is the settled part, and it is the only part we state flatly. The daily cost is not fixed by law: it varies by company, vehicle class and how the charge is bundled, so the $10 to $25 range is a typical band from current rental-company published rates rather than an official tariff, and the same goes for the $1,500 to $3,000 collision deductibles. Card-hold amounts vary widely between desks; $1,000 is common and travelers report far higher, so we give it as a floor. Sources genuinely conflict on card acceptance at Ruta 27 toll plazas, with toll trackers reporting card readers at all nine and driving guides still advising cash, so we say to carry colones either way. Fuel is government-regulated and therefore uniform nationwide, but the level is revised periodically, so treat the per-liter figure as approximate and check before you budget a long drive. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Apps", v: "Uber, DiDi (both work)" },
        { k: "Airport (SJO)", v: "Official orange taxis, or an app" },
        { k: "Taxis", v: "Red, metered (ask for la maria)" },
        { k: "Watch for", v: "Meter refusal, pirata taxis" }
      ],
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Taxis in Costa Rica: apps, the airport, la maria",
      description: "Uber and DiDi operate, official orange taxis serve SJO, and you should insist on the meter, la maria. How much to tip. Checked 2026.",
      h1: "Taxis in Costa Rica, and the apps to use",
      lede: "Costa Rican taxis are cheap and metered, and ride apps make it easier still. The one habit to keep is insisting on the meter, called la maria. Here is how it works.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Install <b>Uber</b> and <b>DiDi</b> (both widely used, DiDi especially), and official <b>red taxis</b> are metered too. The meter is called <b>la maria</b>, and the one habit to keep is <b>insisting it is on</b>, since some drivers skip it for tourists. From <b>San Jose airport (SJO)</b>, use the <b>official orange airport taxis</b> (a regulated fare) or an app. Avoid unmarked <b>pirata</b> (pirate) taxis. Fares are cheap, so pay in <b>colones</b> and round up to tip.",
      sections: [
        {
          h: "Which apps to install",
          icon: "phoneok",
          key: { fig: "DiDi, Uber", tag: "Both work", text: "Uber and DiDi are both widely used in Costa Rica, DiDi especially. They show the fare up front and remove any meter doubt.", tone: "teal" },
          p: [
            "<b>Uber</b> and <b>DiDi</b> both work well in Costa Rica, and <b>DiDi</b> is especially popular, so install both and compare. They cover the <b>San Jose</b> area, the Central Valley and the main tourist spots, showing the fare and driver up front and taking card in the app.",
            "Ride apps operate in a bit of a <b>legal gray area</b> here, so a driver may ask you to <b>sit up front</b> to look like a friend, especially near the airport. It is routine and nothing to worry about."
          ]
        },
        {
          h: "From San Jose airport",
          icon: "plane",
          key: { fig: "Official", tag: "Orange airport taxis", text: "From SJO, use the official orange airport taxis (a regulated fare) or an app. Official taxis and apps also serve Liberia (LIR).", tone: "teal" },
          p: [
            "At <b>San Jose (SJO, Juan Santamaria)</b>, the official <b>airport taxis are orange</b> (operated by Taxis Unidos) and run on a <b>regulated fare</b> from the marked stand outside arrivals. An <b>app</b> works too, with drivers meeting you at the designated pickup area.",
            "From <b>Liberia (LIR)</b>, official taxis and apps both serve the beach towns of Guanacaste, though rides are longer, so agree the app fare or confirm the taxi rate first."
          ]
        },
        {
          h: "Insist on the meter (la maria)",
          icon: "alert",
          key: { tag: "Use red or orange taxis", text: "Official taxis are red (orange at the airport) and metered. Some drivers skip the meter, the maria, for tourists, and unmarked pirata taxis are best avoided. Insist on the meter or use an app.", tone: "amber" },
          p: [
            "Official Costa Rican taxis are <b>red</b> with a <b>yellow triangle</b> on the door (and <b>orange</b> at the airport), and they carry a meter called <b>la maria</b>. The classic issue is a driver who <b>will not switch on the maria</b> for a tourist and instead names an inflated flat price.",
            "Insist the <b>maria is running</b> from the start, or just use an <b>app</b>, where the fare is set in advance. Avoid unofficial <b>pirata</b> (pirate) taxis, which are unmarked and unregulated."
          ]
        },
        {
          h: "Fares, paying and tipping",
          icon: "crc",
          key: { fig: "Metered", tag: "Pay in colones", text: "Fares are cheap and metered. Pay in colones for the best value, and round up to tip; there is no set percentage.", tone: "teal" },
          p: [
            "Fares are <b>cheap</b>: metered in a red taxi, set up front in an app. Prices may be quoted in dollars in tourist areas, but <b>pay in colones</b> for the best value. To <b>tip</b>, <b>round up</b> the fare; there is no set percentage.",
            "For more, see <a href='/costa-rica/cash-or-card'>cash or card in Costa Rica</a>, <a href='/costa-rica/tipping'>tipping in Costa Rica</a>, and the <a href='/costa-rica'>Costa Rica money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "What taxi app should I use in Costa Rica?", a: "Uber and DiDi both work well, with DiDi especially popular. They show the fare up front and take card in the app. Ride apps operate in a legal gray area, so a driver may ask you to sit up front, which is routine." },
        { q: "How do I get from San Jose airport (SJO)?", a: "Use the official orange airport taxis (operated by Taxis Unidos) on a regulated fare from the marked stand, or an app from the designated pickup area. Avoid unmarked pirata taxis." },
        { q: "What is la maria in a Costa Rican taxi?", a: "It is the meter. Official red taxis (orange at the airport) are metered, but some drivers skip the maria for tourists and name an inflated price. Insist the meter is on, or use an app." },
        { q: "Do you tip taxi drivers in Costa Rica?", a: "Only lightly: round up the fare. There is no set percentage. Fares are cheap and metered, and paying in colones gives better value than dollars." }
      ],
      sources: {
        links: [
          { label: "Costa Rica Tourism Board (ICT): official travel information", url: "https://www.visitcostarica.com/en", type: "gov" },
          { label: "US State Department: Costa Rica country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/CostaRica.html", type: "gov" }
        ],
        judgment: "Costa Rican taxis are cheap and metered, apps like DiDi and Uber are widely used in a legal gray area, and the meter (la maria) games and pirata taxis are the things to watch. Fares and app rules shift over time, so this is our practical read. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Colon (CRC), dollars accepted" },
        { k: "Cards", v: "Widely accepted, contactless growing" },
        { k: "Cash for", v: "Sodas, markets, buses, remote areas" },
        { k: "On a card", v: "Choose colones, not dollars" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Costa Rica? Colones vs cards",
      description: "Costa Rica is card-friendly and dollars are widely taken, but paying in colones is better value. Carry some for sodas, buses and small vendors.",
      h1: "Do I need cash in Costa Rica, or can I use cards?",
      lede: "Short answer: cards work almost everywhere, dollars are accepted, but you get better value paying in colones, and you will want a little cash for sodas, buses and small vendors. Here is how to handle it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Cards, mostly, with a little cash. Costa Rica is <b>card-friendly</b>: cards work at <b>hotels, restaurants, tour operators and supermarkets</b>, and <b>contactless</b> is growing. It is a <b>dual-currency</b> economy: the <b>colon</b> is official, but <b>US dollars are widely accepted</b>, especially in tourist areas. The catch is that paying in <b>dollars</b> often gets you <b>change in colones at a poor rate</b>, so <b>pay in colones</b> for local prices. Keep <b>some colones</b> for <b>sodas (local eateries), markets, buses and remote areas</b>. Choose <b>colones, not dollars</b>, on any card or ATM.",
      sections: [
        {
          h: "Card-friendly, colones and dollars",
          icon: "phoneok",
          key: { fig: "Dual currency", tag: "Cards work widely", text: "Costa Rica is card-friendly, and both colones and US dollars circulate. Keep some colones for sodas, markets, buses and remote areas.", tone: "teal" },
          p: [
            "Costa Rica is <b>card-friendly</b>: cards work at <b>hotels, restaurants, tour operators, supermarkets and shops</b>, and <b>contactless</b> is growing. It runs on <b>two currencies</b>: the <b>colon</b> is official, but <b>US dollars are widely accepted</b>, especially in tourist areas.",
            "Keep <b>some colones</b> for <b>sodas (small local eateries), markets, buses and remote areas</b>, where cards are less certain and small dollar bills are awkward."
          ]
        },
        {
          h: "Pay in colones, not dollars",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Colones give better value", text: "Choose colones on a card, and prefer paying in colones in cash: paying in dollars often gives change in colones at a poor rate.", tone: "amber" },
          p: [
            "Two things about currency. On a <b>card</b>, if asked to charge in <b>dollars or colones, choose colones</b>, since dollars trigger dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your bank's. In <b>cash</b>, paying in <b>US dollars</b> is accepted but you often get <b>change in colones at the shop's rate</b>, which is usually poor.",
            "So <b>pay in colones</b> for local prices and better value. For cash, use a bank ATM, which can dispense both colones and dollars, and use a <b>debit card</b> to avoid cash-advance fees."
          ]
        },
        {
          h: "Cash for sodas and buses",
          icon: "crc",
          key: { fig: "A little", tag: "For local spots", text: "Keep some colones for sodas, markets, public buses and remote areas, where cards are less certain.", tone: "teal" },
          p: [
            "A <b>card covers most spending</b>, but keep <b>some colones</b> for the <b>sodas, markets, public buses and remote or rural areas</b>. Small vendors and bus fares are much easier in colones than with dollar bills.",
            "For tipping norms, see <a href='/costa-rica/tipping'>tipping in Costa Rica</a>, and for the wider picture, the <a href='/costa-rica'>Costa Rica money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Costa Rica?", a: "A little. Costa Rica is card-friendly and both colones and US dollars are accepted, so a card covers most spending. Keep some colones for sodas, markets, buses and remote areas." },
        { q: "Should I pay in colones or dollars in Costa Rica?", a: "Colones, for the best value. On a card, choose colones, not dollars, to avoid the 3 to 8% conversion. In cash, paying in dollars is accepted but you often get change in colones at a poor rate, so colones are better." },
        { q: "Are US dollars accepted in Costa Rica?", a: "Yes, widely, especially in tourist areas. But you often get change in colones at the shop's rate, which is usually poor, so paying in colones gives better value for local prices." },
        { q: "Can I use cards everywhere in Costa Rica?", a: "In most places: hotels, restaurants, tour operators and supermarkets take cards, with contactless growing. Sodas, markets, buses and remote areas lean on cash, so carry some colones." }
      ],
      sources: {
        links: [
          { label: "Banco Central de Costa Rica: official exchange rate information", url: "https://www.bccr.fi.cr", type: "gov" },
          { label: "US State Department: Costa Rica country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/CostaRica.html", type: "gov" }
        ],
        judgment: "Costa Rica is card-friendly and dual-currency, but paying in colones beats paying in dollars, where change comes at a poor rate. The colon rate moves, and the firm rule is to decline dollar conversion. Checked July 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Best network", v: "Kolbi (ICE), widest reach" },
        { k: "Everyday", v: "4G, 5G only in bigger towns" },
        { k: "Dead zones", v: "Parks and remote coasts" },
        { k: "Also set up", v: "WhatsApp for lodges" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "medium",
      title: "eSIM for Costa Rica: the Kolbi coverage edge",
      description: "The coverage gaps sit where you are going: parks, cloud forest, remote coast. Kolbi reaches them where Liberty and Claro fade, so pick a Kolbi eSIM.",
      h1: "Staying connected in Costa Rica",
      lede: "The catch in Costa Rica is that the coverage gaps sit exactly where you came to go: the parks, the cloud forests and the wild coasts. Which network your eSIM uses is what decides whether you have signal in Corcovado or Monteverde, so it is worth getting right before you fly.",
      checked: "Jul 2026",
      checkedISO: "2026-07-20",
      answer: "Pick a <b>Kolbi-backed eSIM</b>. The state carrier <b>Kolbi (ICE)</b> has by far the widest reach in Costa Rica, including national parks, cloud forests and remote coasts where Liberty and Claro lose signal. 4G is the everyday standard, with 5G only in the larger towns. Expect dead zones in places like <b>Corcovado, deep Monteverde, the Osa Peninsula</b> and stretches of the Caribbean coast, so download offline maps before you head off the main routes. Set up <b>WhatsApp</b> before you go too, since it is how local tour operators and lodges communicate.",
      sections: [
        {
          h: "Why the network decides your coverage",
          icon: "phoneok",
          key: { fig: "Kolbi", tag: "The carrier matters", text: "Costa Rica's draw is its wild places, and that is where coverage thins. The state carrier Kolbi (ICE) has by far the widest reach, so pick an eSIM that runs on Kolbi, not the plan size.", tone: "teal" },
          p: [
            "Costa Rica's draw is its wild places, and those are precisely where mobile coverage thins out. That makes the carrier behind your eSIM the thing that matters, not the plan size or the brand on the app.",
            "<b>Kolbi (ICE)</b>, the state carrier, reaches into the national parks, cloud forests and remote coasts where <b>Liberty</b> and <b>Claro</b> drop out. So a Kolbi-backed eSIM is the safest bet for a trip built around Corcovado, Monteverde or the Osa Peninsula. If you are only in San Jose and the main towns, the difference matters less, but few people come to Costa Rica to stay in the city."
          ]
        },
        {
          h: "Where to expect dead zones",
          icon: "alert",
          key: { tag: "Plan for no signal", text: "Expect no signal in Corcovado, deep in Monteverde, on the Osa Peninsula and along stretches of the Caribbean coast. These are lodge and day-trip spots, so download maps and details first.", tone: "amber" },
          p: [
            "Plan for no signal in <b>Corcovado</b>, deep in <b>Monteverde</b>, on the <b>Osa Peninsula</b> and along stretches of the <b>Caribbean coast</b>. These are day-trip and lodge destinations, so it is easy to assume you will be connected and then find you are not.",
            "Download <b>offline maps</b> before you leave the main routes, and let your lodge know your rough plan if you are heading somewhere truly remote, since you may be out of contact for hours."
          ]
        },
        {
          h: "Set up WhatsApp, and the simplest eSIM",
          icon: "qr",
          key: { fig: "WhatsApp", tag: "How lodges talk", text: "WhatsApp is how tour operators and lodges communicate, from confirming a shuttle to shifting a tour around the weather. Install it, and a Kolbi-backed eSIM is the simplest data setup.", tone: "teal" },
          p: [
            "In Costa Rica, <b>WhatsApp is the default way tour operators and lodges communicate</b>, from confirming a shuttle to rearranging a tour around the weather. Install it and confirm your bookings on it before you fly, so you are reachable the way locals expect.",
            "For the connection itself, a travel eSIM skips the SIM counter and works from landing. <b>Nomad</b> partners with <b>Kolbi (ICE)</b> and Liberty in Costa Rica, so a Nomad eSIM can ride the wide-reach Kolbi network that this whole page points you toward. Set it up before you travel, since you need a connection to install it."
          ]
        }
      ],
      faqs: [
        {
          q: "Which eSIM network is best for Costa Rica?",
          a: "Kolbi (ICE), the state carrier. It has the widest reach in the country, including national parks, cloud forests and remote coasts where Liberty and Claro lose signal. If your trip is built around wild places like Corcovado or Monteverde, a Kolbi-backed eSIM is the safest bet."
        },
        {
          q: "Will I have signal in the national parks?",
          a: "Often not, even on the widest network. Expect dead zones in Corcovado, deep Monteverde, the Osa Peninsula and along parts of the Caribbean coast. A Kolbi-backed eSIM gives you the best coverage of any option, but download offline maps and plan for stretches with no signal."
        },
        {
          q: "Do I really need WhatsApp in Costa Rica?",
          a: "Effectively yes. It is how local tour operators, shuttle drivers and lodges communicate, including last-minute changes for weather. Install it and confirm your bookings on it before you fly, so you can be reached the way the local operators expect."
        },
        {
          q: "Is an eSIM or a local SIM better for Costa Rica?",
          a: "An eSIM is simpler for most travelers: it skips the SIM counter and works from the moment you land if you set it up beforehand. What matters more than the format is the network, so whichever you choose, aim for one backed by Kolbi if your trip goes into the parks and remote coasts."
        }
      ],
      sources: {
        links: [
          {
            label: "US State Department: Costa Rica country information and local conditions",
            url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/CostaRica.html",
            type: "gov"
          }
        ],
        judgment: "Network reach and coverage can change as carriers invest, so treat this as a July 2026 snapshot. The steady point is that Kolbi (ICE) has the widest reach into the parks and remote coasts, so the carrier behind your eSIM is what to check, not the brand on the app."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Currency", v: "Colón (₡ CRC)" },
        { k: "Restaurants", v: "10% service charge included" },
        { k: "Tip extra", v: "Guides and drivers" },
        { k: "How", v: "Cash, in colones" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Costa Rica: the 10% service charge",
      description: "A 10% service charge is already on your restaurant bill, so the double-tip trap is real. Where to tip extra, and how much for guides and drivers.",
      h1: "Tipping in Costa Rica",
      lede: "The short version: most restaurant bills already include a 10% service charge, so the tipping is largely done for you. The people worth tipping extra are your guides and drivers, and the one trap to watch for is a blank tip line on a bill that has already charged you.",
      checked: "Jul 2026",
      checkedISO: "2026-07-20",
      answer: "Most sit-down restaurants in Costa Rica add a <b>10% service charge (servicio)</b> by law, so you are <b>not expected to tip on top</b> unless the service was genuinely exceptional, in which case an extra <b>5 to 10%</b> is a kind gesture. <b>Sodas</b> (local diners) and street stands do not expect tips at all. The people who do depend on tips are <b>tour guides and private drivers</b>: roughly <b>10%, or about 5 to 15 dollars per person per day</b>, is appreciated and forms a real part of their income. <b>Tip in colones</b> where you can, since it spares staff an exchange, and always <b>tip in cash</b>.",
      sections: [
        {
          h: "The 10% service charge, and the double-tip trap",
          icon: "receipt",
          key: { tag: "Watch out", text: "Most bills already include a 10% service charge. Some tourist spots then leave a blank tip line, so read the bill before you sign or you tip twice.", tone: "amber" },
          p: [
            "The single most important thing to know is that most sit-down restaurants already add a <b>10% service charge</b> to your bill. It is printed on the receipt, and it is the tip. You do not owe anything beyond it for a normal meal.",
            "The trap: some tourist-area restaurants hand over a <b>US-style receipt with a blank tip line</b> after the bill has already included the 10%. If you add 18 to 20% on top without reading the bill, you have tipped twice. <b>Read the bill before you sign.</b>"
          ]
        },
        {
          h: "Where to tip more: guides, drivers and hotels",
          icon: "tip",
          key: { fig: "10%", tag: "Guides and drivers", text: "Tour guides and private drivers do rely on tips, roughly 10%, or about 5 to 15 dollars per person per day. This is where your tipping should go.", tone: "teal" },
          p: [
            "<b>Tour guides</b> are the real exception. Gratuities are genuinely appreciated and form a real part of a guide's income: roughly <b>10%, or about 5 to 15 dollars per person per day</b> for a naturalist or adventure guide, more for something outstanding. <b>Private drivers</b> often see <b>5 to 15 dollars a day</b>.",
            "At hotels, <b>1 to 2 dollars a day</b> for housekeeping and <b>1 to 2 dollars per bag</b> for porters is appreciated. For taxis, <b>rounding up the fare</b> is plenty. And it is customary to hand a <b>guachiman</b>, the vested person watching your parked car, a few hundred colones."
          ]
        },
        {
          h: "Cash and currency for tips",
          icon: "crc",
          key: { fig: "Colones", tag: "Tip in cash", text: "Always tip in cash, since card tips may not reach staff. Colones are better than dollars, they spare your server an exchange.", tone: "teal" },
          p: [
            "Always tip in <b>cash</b>, since card tips do not always reach staff directly. <b>Colones are better than dollars</b> for tips, because they spare your server or guide an exchange. Keep a small stack of colones in small notes for the day, and save your dollars for hotels and tours that quote in dollars."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Costa Rica?", a: "Lightly, because most restaurants already add a 10% service charge by law, which covers the baseline tip. Add a little more only for exceptional service. Tour guides and private drivers are the real exception: around 10%, or roughly 5 to 15 dollars per person per day, is appreciated and forms part of their income." },
        { q: "Is there a service charge on restaurant bills in Costa Rica?", a: "Yes. Most sit-down restaurants add a 10% service charge (servicio) to the bill, plus 13% tax. That service charge is your tip. Watch for a blank tip line on the receipt in tourist spots, because it is easy to tip twice without realizing it." },
        { q: "How much should I tip a tour guide in Costa Rica?", a: "Roughly 10%, or about 5 to 15 dollars per person per day for a naturalist or adventure guide, more for something outstanding. Tips are a genuine part of guides' income in Costa Rica, so this is the one place where tipping matters most." },
        { q: "Should I tip in dollars or colones in Costa Rica?", a: "Colones are better for tips, since they spare staff an exchange. Keep a small stack of colones in small notes. Dollars are fine for tours and hotels that quote in dollars, but for a restaurant or a taxi, colones are more useful to the person receiving them." }
      ],
      sources: {
        links: [
          { label: "Costa Rica Guide: the 10% restaurant service charge and tipping norms", url: "https://costa-rica-guide.com/practical/budget/how-much-to-tip/", type: "guide" }
        ],
        judgment: "Tipping norms are cultural, not legislated rates, so the figures here are our own read from recent traveler reports and local guidance, not a single official table. The 10% restaurant service charge is a real, consistent practice, but whether an extra tip is expected is a judgment call that varies by place. Checked July 2026."
      }
    },
    {
      slug: "visa",
      glance: [
        { k: "Visa", v: "None for US citizens" },
        { k: "Stay", v: "Up to 180 days, officer decides" },
        { k: "Must have", v: "Onward or return ticket" },
        { k: "Form", v: "None, no online entry form" }
      ],
      live: true,
      topic: "visas",
      title: "Do US citizens need a visa for Costa Rica? 2026",
      description: "No visa and no online form: you are stamped in on arrival. The onward-ticket rule that catches people, and the stay of up to 180 days. Checked 2026.",
      h1: "Do US citizens need a visa for Costa Rica?",
      lede: "Short answer: no visa, and no online form. US citizens are stamped in on arrival, now for up to 180 days. The one thing that trips people up is the onward-ticket rule. Here is what actually matters at the border.",
      checked: "Jul 2026",
      checkedISO: "2026-07-26",
      answer: "US citizens need <b>no visa</b> for Costa Rica, and there is <b>no online entry form</b> to fill in (the old COVID health pass is gone). You are simply <b>stamped in on arrival</b>. The one requirement people miss is <b>proof of onward travel</b>: you must show a <b>return or onward ticket</b> dated within your allowed stay, or you can be refused at check-in. US citizens can now be granted up to <b>180 days</b>, though the officer sets the exact length on arrival, so <b>check your stamp</b>.",
      official: {
        label: "Costa Rica Tourism Board: official entry requirements",
        url: "https://www.visitcostarica.com/planning-your-trip/entry-requirements",
        note: "The official tourism-board page on entry rules. There is nothing to apply for and no form to file as a US tourist: it confirms visa-free entry and spells out the onward-ticket and funds requirements. For visa questions the immigration authority (DGME) is the final word."
      },
      expediter: false,
      sections: [
        {
          h: "No visa, and no form to fill in",
          icon: "passport",
          key: { fig: "Up to 180 days", tag: "Stamp on arrival", text: "US citizens need no visa and no online form. You are stamped in on arrival for up to 180 days, though the officer decides the exact length, so check your stamp.", tone: "teal" },
          p: [
            "US passport holders need <b>no visa</b> for Costa Rica and <b>no online entry form</b>. The COVID-era digital health pass was <b>scrapped in 2022</b> and never came back, so despite what some older pages say, there is nothing to register before you fly. You are simply <b>stamped in on arrival</b>.",
            "On stay length the picture has shifted: the current standard for US citizens is <b>up to 180 days</b>, but the <b>immigration officer sets the actual number</b> on arrival, and many travelers still get 90. So do not assume, <b>check the date written in your passport</b> before you leave the airport."
          ]
        },
        {
          h: "The onward ticket is the real requirement",
          icon: "plane",
          key: { tag: "Show your exit", text: "Costa Rica requires proof you will leave: a return or onward ticket dated within your allowed stay. Arrive on a one-way ticket and you can be denied boarding or entry.", tone: "amber" },
          p: [
            "The requirement that catches people is <b>proof of onward travel</b>. Costa Rica expects every non-resident to show a <b>return or onward ticket</b> that leaves the country <b>within the allowed stay</b> (dated within 90 days of arrival if that is your window). This applies at airports and land borders.",
            "If you arrive on a <b>one-way ticket</b>, the <b>airline can refuse to board you</b>, and immigration can turn you back. If your plans are open, a cheap onward bus or flight ticket, or a ticket out of a different country, satisfies the rule."
          ]
        },
        {
          h: "Funds, yellow fever and the exit tax",
          icon: "alert",
          key: { tag: "A few extras", text: "Expect to show funds of about $100 per month of stay. Yellow fever vaccination is required only if arriving from certain countries. A $29 exit tax applies, usually already in your airfare.", tone: "amber" },
          p: [
            "A few smaller things. Officers can ask you to show <b>funds of about $100 for each month</b> of your stay, and where you are staying. <b>Yellow fever</b> vaccination is required only if you are <b>arriving from</b> certain countries in Africa or South America (Brazil, Colombia, Peru and Venezuela among them), not for a direct trip from the US.",
            "There is a <b>$29 departure tax</b> when you leave, but it is <b>usually already included</b> in your airline ticket, so most travelers never pay it separately. Carry a passport <b>valid for your stay</b>, with six months a safe margin."
          ]
        },
        {
          h: "A couple of notes",
          icon: "tag",
          key: { tag: "Extending is awkward", text: "Extending a tourist stay from inside Costa Rica is possible but convoluted; most who want longer get a proper visa. Then see the money guide.", tone: "amber" },
          p: [
            "If you want to stay <b>beyond what you were given</b>, extending from inside the country is <b>possible but awkward</b>, and the US Embassy warns the process is convoluted, so most people who want longer arrange a proper <b>visa</b> (there are digital-nomad, pensionado and rentista options). Working locally needs the right visa too.",
            "For how money works once you are there, the colon, US dollars, cards and the rest, see the <a href=\"/costa-rica\">Costa Rica money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa for Costa Rica?", a: "No. US citizens enter Costa Rica visa-free for tourism and are stamped in on arrival. There is no online entry form to complete either; the COVID-era health pass was removed in 2022. You do need a passport and, importantly, proof of onward travel." },
        { q: "How long can US citizens stay in Costa Rica?", a: "Up to 180 days is now the standard maximum for US citizens, but the immigration officer sets the actual length on arrival and many travelers still receive 90 days. Always check the date written into your passport before leaving the airport, and do not overstay it." },
        { q: "Do I need an onward ticket for Costa Rica?", a: "Yes, and this is the requirement travelers most often miss. Costa Rica requires proof you will leave within your allowed stay, so you must show a return or onward ticket. Arrive on a one-way ticket and the airline can deny boarding, or immigration can refuse entry. A cheap onward ticket satisfies the rule." },
        { q: "Is there an online entry form or health pass for Costa Rica?", a: "No, not any more. Costa Rica required a digital health pass during the pandemic, but all COVID-era requirements were permanently removed in April 2022. As of 2026 there is no mandatory online form for US tourists; you just need a passport and an onward ticket. Ignore any site charging to file an entry form." }
      ],
      sources: {
        links: [
          { label: "Costa Rica Tourism Board: the official entry-requirements page, including the onward-ticket rule", url: "https://www.visitcostarica.com/planning-your-trip/entry-requirements", type: "gov" },
          { label: "US Department of State: the country information pages, the official router for entry requirements by destination", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html", type: "gov" }
        ],
        judgment: "Costa Rica's visa-free entry for US citizens is stable, COVID-era digital forms were removed in 2022, and the onward-ticket rule is enforced. Stay length has trended toward a 180-day maximum but is set by the officer on arrival, so treat 180 as a ceiling, not a guarantee, and check your stamp. Checked July 2026."
      }
    },
    {
      slug: "money-scams",
      glance: [
        { k: "Most cost", v: "The rental counter, mostly" },
        { k: "Car insurance", v: "Required, and rarely quoted" },
        { k: "Prices", v: "Pay in the currency shown" },
        { k: "Flat tire", v: "Drive to a gas station" }
      ],
      live: true,
      topic: "scams",
      title: "Common money scams in Costa Rica, and what they cost",
      description: "The rental quote that is not the quote, the helpful stranger at a flat tire, the colones-or-dollars gap and unofficial taxis. What each costs, and how to sidestep it.",
      h1: "Common money scams in Costa Rica, and what they cost you",
      lede: "Costa Rica is safe for the great majority of visitors and almost none of this is dramatic. The single biggest money surprise here is not a con at all, it is a rental car quote that leaves out a charge the law requires. The rest are ordinary traps: a currency gap at the till, an unofficial taxi, a stranger who is unusually keen to help. A few habits defuse nearly all of them. Here is each one, what it costs, and how to sidestep it.",
      checked: "Aug 2026",
      checkedISO: "2026-08-15",
      answer: "The costliest surprise in Costa Rica is the <b>rental car quote</b>, because Costa Rican law requires a third-party liability cover that most online quotes leave out and no credit card can replace. After that: the <b>colones or dollars</b> gap, where paying in the other currency lets the merchant set the rate; the <b>convert to USD</b> prompt on card machines and ATMs; unofficial <b>pirata taxis</b> and drivers who skip the meter; and the <b>flat tire</b> setup, where strangers who stop to help take your bags instead. The golden rules that beat them: <b>budget the mandatory insurance before you book</b>, <b>pay in the currency on the price tag</b>, <b>use official taxis or an app</b>, and <b>never accept roadside help from strangers</b>.",
      sections: [
        {
          h: "The rental car quote that is not the quote",
          icon: "wheel",
          key: { fig: "$10-25 a day", tag: "Not optional", text: "Costa Rican law requires third-party liability cover, sold as TPL or PLI, and no credit card replaces it. Most online quotes omit it, so budget it before you book.", tone: "amber" },
          p: [
            "This is not a scam, it is a legal requirement presented badly, and it costs more than everything else on this page combined. Costa Rican law requires local <b>third-party liability</b> cover, sold as TPL, PLI or simply Liability Protection and underwritten through the state insurer INS. <b>No credit card benefit replaces it</b>, and you cannot decline it. Budget roughly <b>10 to 25 dollars a day</b> on top of the headline rate, which on a ten-day trip is a hundred to two hundred and fifty dollars that was never in the price you compared. Aggregator sites are the worst offenders here, because they quote the metal and nothing else.",
            "The honest fix is arithmetic rather than vigilance: get a quote that already includes the mandatory cover, then compare. The separate <b>collision damage waiver</b> is genuinely optional, but declining it means a large hold on your card and paying for any repairs in Costa Rica before you can claim a cent back from your card issuer. One exclusion overrides every policy sold: <b>driving into water voids the lot</b>, so ignore any navigation app that routes you across a riverbed. The full breakdown is in the <a href=\"/costa-rica/renting-a-car\">Costa Rica car rental guide</a>."
          ]
        },
        {
          h: "The flat tire, and the helpful stranger",
          icon: "alert",
          key: { fig: "Keep driving", tag: "Do not stop there", text: "The US Embassy describes rental car tires going flat and people who stop to help stealing the bags. If you get a flat, drive on to a service station or another public place and change it yourself.", tone: "teal" },
          p: [
            "The US Embassy in Costa Rica names this one directly in its own crime guidance: a rental car's tire goes flat, people stop to help change it, and passports, bags, cash and a camera leave with them. The embassy's advice is unusually specific and worth following exactly. If you get a flat, <b>drive on if you can</b>, to the nearest service station or another public area, and <b>change it yourself while watching your valuables</b>. Most rental companies cover damage to the tire, so there is no reason to solve it at the roadside. Be wary of strangers offering help with car trouble at all.",
            "The same logic covers the car when you are not in it. A November 2025 embassy security alert added a detail worth knowing: thieves use <b>signal blockers</b> so a key fob press does not actually lock the car, then help themselves. Pull the handle to check the door is really locked, park in secured lots where you can, and take valuables with you rather than leaving them in the trunk."
          ]
        },
        {
          h: "Colones or dollars, and the gap in between",
          icon: "atm",
          key: { fig: "5 to 10%", tag: "Pay what is shown", text: "Pay in the currency on the price tag. Mixing colones and dollars lets the merchant pick the rate, costing roughly 5 to 10 percent, and the convert-to-USD prompt costs more again.", tone: "amber" },
          p: [
            "Costa Rica runs on two currencies, and the gap between them is where money quietly goes. <b>Pay in the currency on the price tag</b>: colones for a colon price, dollars for a dollar price. Mixing them hands the merchant the exchange rate, and it will not be a good one, typically costing you <b>5 to 10 percent</b>. Paying dollars for a colon price is the common version, because your change comes back in colones at whatever rate they choose.",
            "The separate, legal version is the <b>convert to USD</b> prompt on card machines and ATMs. Decline it every time and choose colones, so your own bank sets the rate rather than a marked-up one at the till. The US Embassy also advises changing money at <b>banks or other financial institutions</b>, noting that street money changers have passed counterfeit US dollars and local currency. Bring small, clean US bills as backup, since fifties and hundreds are hard to break and torn or worn notes get refused. The mechanics are in the <a href=\"/costa-rica/cash-or-card\">Costa Rica cash and cards guide</a>."
          ]
        },
        {
          h: "Taxis, the maria, and the pirata",
          icon: "taxi",
          key: { fig: "Meter on", tag: "Official or app", text: "Official red taxis are metered, and the meter is called la maria. Insist it is running. Avoid unmarked pirata taxis, and at the airport use the official orange taxis or an app.", tone: "teal" },
          p: [
            "Official taxis in Costa Rica are <b>red</b>, they are metered, and the meter has a name: <b>la maria</b>. The one habit is to insist it is on, because some drivers skip it for visitors and name a figure at the end instead. Fares are genuinely cheap when the meter runs, so this is a small loss rather than a large one, but it is the most frequent one. <b>Uber and DiDi</b> both work well here and remove the question entirely by fixing the price up front.",
            "The one to avoid is the <b>pirata</b>, an unofficial taxi in an unmarked car, particularly one whose driver approaches you rather than waiting at a rank. At San Jose airport, use the <b>official orange airport taxis</b>, which run a regulated fare, or book an app. The full picture is in the <a href=\"/costa-rica/taxis-and-apps\">Costa Rica taxis and apps guide</a>."
          ]
        },
        {
          h: "What this means for your money",
          icon: "coins",
          key: { fig: "Habits", tag: "How to avoid it", text: "Budget the mandatory car insurance before you book, pay in the currency on the tag, use official taxis or an app, and set a daily withdrawal cap on your account before you fly.", tone: "teal" },
          p: [
            "One item on this page costs real money and it is the one nobody warns you about: <b>budget the mandatory rental insurance before you book</b>. The rest are habits. <b>Pay in the currency on the price tag</b>, <b>decline convert to USD</b>, <b>use official taxis or an app</b>, and <b>do not stop for roadside help</b>. One more, straight from the embassy's own financial advice for visitors: <b>set a daily withdrawal limit</b> on your account before you fly and keep less in any single account, which caps your exposure whatever happens.",
            "Two smaller ones worth knowing. Your restaurant bill already carries a <b>10 percent service charge</b> by law, and some tourist spots then hand over a US-style receipt with a blank tip line, hoping for another 18 to 20 percent on top; the <a href=\"/costa-rica/tipping\">Costa Rica tipping guide</a> has the detail. And informal parking attendants in high-visibility vests will watch your car for a small tip, which is a local custom rather than a scam, though the amount is yours to choose. For getting and spending money well, see the <a href=\"/costa-rica/cash-or-card\">Costa Rica cash and cards guide</a> and the <a href=\"/costa-rica\">Costa Rica cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Costa Rica safe for tourists?", a: "For the great majority of visitors, yes, and most trips are trouble free. The issues travelers actually meet are money ones: a rental quote missing the insurance the law requires, the colones-or-dollars gap at the till, unofficial taxis, and the roadside flat-tire setup. A few habits avoid nearly all of them." },
        { q: "Why is my Costa Rica rental car so much more expensive at the counter?", a: "Because Costa Rican law requires third-party liability cover that most online quotes, especially on aggregator sites, leave out. It runs roughly 10 to 25 dollars a day, cannot be declined, and no credit card benefit replaces it. Get a quote that already includes it before comparing prices. The optional collision damage waiver is a separate decision." },
        { q: "Should I pay in colones or US dollars in Costa Rica?", a: "Pay in whichever currency the price is shown in. Costa Rica quotes in both, and mixing them lets the merchant set the exchange rate, which typically costs you 5 to 10 percent. Separately, always decline the convert-to-USD prompt on card machines and ATMs, and choose colones so your own bank sets the rate." },
        { q: "What should I do if I get a flat tire in a rental car in Costa Rica?", a: "Drive on if the car will move, to a service station or another busy public place, and change it there yourself while keeping an eye on your bags. The US Embassy describes cases where people who stopped to help change a tire took passports, bags, cash and a camera. Most rental companies cover the tire damage, so there is no reason to fix it at the roadside." },
        { q: "How do I avoid taxi overcharging in Costa Rica?", a: "Official taxis are red and metered, and the meter is called la maria, so insist it is running before you set off. Uber and DiDi both operate here and fix the fare in advance, which removes the question. Avoid unmarked pirata taxis, especially any driver who approaches you, and at San Jose airport use the official orange airport taxis or an app." },
        { q: "Do I need to tip on top of the service charge in Costa Rica?", a: "Usually not. Sit-down restaurants add a 10 percent service charge by law, so it is already on your bill. Some places in tourist areas then present a US-style receipt with a blank tip line. An extra 5 to 10 percent for genuinely exceptional service is a kind gesture, not an expectation. Tour guides and private drivers are the people who do rely on tips." }
      ],
      sources: {
        links: [
          { label: "US Embassy in Costa Rica: threat from crime, including the flat-tire theft setup and changing money at banks", url: "https://cr.usembassy.gov/services/threat-from-crime/", type: "gov" },
          { label: "US Embassy San Jose: security alert of 25 November 2025, including key fob signal blockers and financial precautions", url: "https://cr.usembassy.gov/security-alert-u-s-embassy-san-jose-costa-rica-november-25-2025/", type: "gov" }
        ],
        judgment: "The flat-tire theft setup, the advice to change money at banks rather than street changers, the key fob signal blockers and the financial precautions all come from US Embassy San Jose guidance and its November 2025 security alert. The 10 to 25 dollars a day for mandatory liability cover is a typical 2026 range across rental companies, not a fixed tariff, and it varies by vehicle; the legal requirement itself is not in doubt. The 5 to 10 percent currency gap is our own estimate of the spread merchants apply when you pay in the other currency, not an official figure. Checked August 2026."
      }
    },
    {
      slug: "medical-costs",
      exposureCategory: "routineAffordable",
      exposureQuote: "In San Jose the private hospitals are excellent, and the prices are Costa Rican rather than American.",
      glance: [
        { k: "San Jose private", v: "Excellent, local prices" },
        { k: "At the desk", v: "Payment or proof first" },
        { k: "Beach towns", v: "Clinics, then a transfer" },
        { k: "Ambulances", v: "Basic outside the capital" }
      ],
      live: true,
      topic: "health",
      title: "Getting sick in Costa Rica: excellent in San Jose, far from the beach",
      description: "Costa Rica's private hospitals in San Jose are excellent and priced locally, and they want payment or proof of insurance before the work starts. The catch is distance: the beaches this country sells are a long ride from that care.",
      h1: "What does getting sick in Costa Rica cost a visitor?",
      lede: "Costa Rica's medical story is a geography story. In San Jose the care is excellent and priced for Costa Rica. On the beaches and in the rainforest, where your trip actually is, the answer to anything serious is a ride back toward the capital.",
      checked: "Aug 2026",
      checkedISO: "2026-08-21",
      answer: "Costa Rica's public <b>Caja</b> is for residents, so a visitor's realistic lane is private, and it is a good lane: In San Jose the private hospitals are excellent, and the prices are Costa Rican rather than American. The desk culture is pay-first, in the State Department's words: hospitals and doctors <b>often need payment up front before service or admission</b>, and private hospitals usually want <b>payment or proof of insurance before treating you</b>. The real Costa Rican variable is distance. <b>Outside San Jose, services may be limited</b>, some facilities <b>lack basic equipment</b>, and <b>ambulances may not carry the advanced kit</b> you would assume, so the serious case in Guanacaste, on the Caribbean coast or down the Osa Peninsula travels, by road or air, back toward the capital's hospitals.",
      insurance: true,
      insuranceNote: "The honest Costa Rican read is proportionate: the private consultation in San Jose is priced for Costa Rica, quality at the top is genuinely high, and the routine problem is not the financial risk here, which we would rather say plainly than imply otherwise. The risk with a Costa Rican shape is the ride: the surf coasts and rainforest lodges are hours from the hospitals that handle the serious case, and that transfer plus a pay-first admission are what cover is for. Check the medical transport and evacuation lines before the outpatient benefit. Faye covers trip medical and evacuation.",
      careFirst: "If it is serious, call 911 and start moving toward San Jose-grade care; the front desk can be argued with after.",
      sections: [
        {
          h: "The San Jose tier",
          icon: "receipt",
          key: { tag: "Where the care is", text: "The capital's private hospitals are excellent, internationally affiliated and priced for Costa Rica, and they are where serious medicine happens.", tone: "teal" },
          p: [
            "Costa Rica's serious medicine lives in and around <b>San Jose</b>, in a private tier, the CIMA and Clinica Biblica class, that is internationally affiliated, English-capable and accustomed to foreign patients, alongside the public system's own national hospitals. The State Department's summary is simple: in San Jose, care is usually good; outside it, services may be limited.",
            "For a visitor the practical meaning is that the private consultation, the scan, the small procedure are all available at Costa Rican prices in the capital, quickly. The question this page keeps returning to is how far from that capital your trip has taken you."
          ]
        },
        {
          h: "Payment or proof, before",
          icon: "cash",
          key: { tag: "The desk culture", text: "Hospitals and doctors often need payment up front before service or admission, and private hospitals want payment or proof of insurance first.", tone: "teal" },
          p: [
            "The money mechanics are stated ones: hospitals and doctors here <b>often need payment up front, before service or admission</b>, and private hospitals usually want <b>payment or proof of insurance before treating you</b>. It is the standard Latin American private-sector handshake: show how the bill gets paid, then the work starts.",
            "If it is serious, call 911 and start moving toward San Jose-grade care; the front desk can be argued with after. For the planned and the minor, arrive with a working card and your policy's assistance number, because a guarantee of payment from an insurer opens the same doors your card would."
          ]
        },
        {
          h: "The distance problem",
          icon: "plane",
          key: { tag: "The Costa Rican exposure", text: "The beaches and rainforest are hours from serious care, ambulances can be basic, and the bad case rides or flies to the capital.", tone: "teal" },
          p: [
            "Costa Rica sells its edges: the Pacific surf towns, the Caribbean coast, the Osa rainforest. Its serious hospitals are in the middle. The State Department fills in the rest: outside the capital services may be limited, <b>some facilities lack basic medical equipment</b>, and <b>ambulances might not carry advanced emergency kit</b>. In public hospitals, overnight staffing runs lean enough that having a family member stay is the recommended move.",
            "So the genuinely Costa Rican medical bill is the <b>transfer</b>: the road or air ride from a beach town to a San Jose hospital, before treatment proper begins. If your itinerary is Nosara and Puerto Viejo rather than the capital, that line on a policy matters more than any other."
          ]
        },
        {
          h: "What is still worth covering",
          icon: "tag",
          key: { tag: "Proportion", text: "Routine care is priced for Costa Rica. The transfer from the coast and the pay-first admission are the bills that stay big.", tone: "teal" },
          p: [
            "Here is the honest, commission-costing sentence: <b>the routine medical side of Costa Rica is affordable and good</b>, which is exactly why the country runs a thriving medical and dental tourism trade in the other direction.",
            "The bills that stay big are the pair the geography creates: the <b>ride to the capital</b> and the <b>admission that wants payment or proof first</b>, plus the flight home in the worst case. Point cover at those, and for cards, cash and colones on the ground, see the <a href='/costa-rica/cash-or-card'>Costa Rica cash and cards guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Can tourists use Costa Rica's public healthcare?", a: "The Caja is for residents. A visitor's realistic lane is private care, which in San Jose is excellent and priced for Costa Rica, or the public emergency room for the genuinely urgent, billed after." },
        { q: "Do Costa Rican hospitals require payment upfront?", a: "Often, yes: the State Department notes payment up front before service or admission is common, and private hospitals usually want payment or proof of insurance before treating you. An insurer's guarantee substitutes for your card." },
        { q: "What happens if I get hurt at a beach town in Costa Rica?", a: "Clinics handle the small and stabilise the serious, and the serious case then travels to San Jose by road or air, at your cost, before real treatment begins. That transfer is the most Costa Rican line on any medical bill." },
        { q: "Are ambulances good in Costa Rica?", a: "In the capital, adequate; elsewhere the State Department warns they may lack advanced equipment. For anything grave in a remote area, moving toward San Jose matters as much as the first response." },
        { q: "What is the emergency number in Costa Rica?", a: "911, nationwide, same as home. English-speaking operators are common, and the system will route you toward the capital's hospitals when it is serious." }
      ],
      sources: {
        links: [
          { label: "US State Department: Costa Rica country information, health section, on upfront payment, private payment-or-proof, limited services outside San Jose, equipment gaps and basic ambulances", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/CostaRica.html", type: "gov" }
        ],
        judgment: "The structural claims, payment up front, payment or proof before private treatment, capital-versus-coast quality, equipment gaps and ambulance limitations, are the State Department's own statements. The judgment that private prices are Costa Rican rather than American is ours, made qualitatively and consistent with the country's inbound medical-tourism trade; no colones or dollar figure appears because none was verified against a hospital's own published tariff this pass. Checked August 2026."
      }
    }
  ],
  signals: { cardFriendliness: 3, cashNeed: 3, taxRisk: 2 },
  hook: "Dollars work almost everywhere, but paying in colones quietly saves you money.",

  title: "Costa Rica currency: dollars or colones? (2026)",
  description: "Pay in colones rather than dollars, use fee-free bank ATMs, and skip the tip: a 10% service charge is already on your bill. Checked 2026.",

  h1: "Money in Costa Rica, sorted.",
  lede: "A calm, current plan for the money side of your trip: the dollar works almost everywhere here, but knowing when to reach for colones instead is what keeps a little extra in your pocket.",
  hero: {
    img: "/costa-rica-hero.jpg",
    h: 1375,
    alt: "A colorful Costa Rican village street at dusk with a volcano and a small white church framed at the end, brightly painted houses with tile roofs lining both sides, palm trees and string lights overhead, a lone figure walking up the cobblestone street, and a plate of rice and black beans with fried plantains beside a fruit smoothie on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Costa Rica runs on two currencies at once: the colón and the US dollar, which works as an unofficial second currency almost everywhere tourists go. The simple rule is to <b>pay in whatever currency the price is quoted in</b>, dollars for hotels, tours and shuttles, colones for sodas (local diners), markets, taxis and buses, so you avoid a poor made-up exchange rate. Bring a <b>no-fee credit or debit card</b> for most spending, pull <b>colones from a bank ATM</b> (Banco Nacional or BCR are often fee-free), and carry small, pristine US bills (twenties and under) as a backup. There is no separate tourist tax, but restaurant bills already include a <b>13% tax and a 10% service charge</b>, so check before tipping again.",

  meter: {
    heading: "Cards go a long way, but cash still matters off the tourist track.",
    cashPct: 45,
    note: "A rough feel for everyday spending. Cards work remarkably well in Costa Rica, even at small businesses and toll booths, but sodas, roadside stands, small towns and remote areas like the Osa Peninsula, Tortuguero and Santa Teresa often run on cash. Carry some of both currencies."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Widely accepted, even rurally", p: "Visa and Mastercard work at hotels, restaurants, grocery stores, tour offices and even highway tolls. Amex is taken at high-end spots but less widely. The exceptions are cash-only pockets like Tortuguero, Drake Bay and parts of the Osa and Nicoya peninsulas, plus the odd rural machine that loses its internet signal.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Two currencies, used differently", p: "Dollars cover tourist services and bigger purchases; colones are better for sodas, markets, taxis, buses and toll booths. Bring small US bills (twenties and under) in pristine condition, since torn or worn notes are routinely refused, and you'll get change in colones.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy, some fee-free", p: "Bank ATMs are common outside the most remote areas and usually dispense both colones and dollars. Banco Nacional and BCR often charge foreign cards no access fee; others run about $3 to $6 per withdrawal. Choose colones, and decline the \"convert to USD\" prompt.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee credit or debit card</b> for most spending, plus a backup card.",
      "Pack a stack of <b>small US bills (ones, fives, tens, twenties) in perfect condition</b>. Skip fifties and hundreds, which are hard to use outside banks.",
      "You do <b>not</b> need to buy colones before you travel. Pull them from an ATM on arrival at a better rate."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters, they have the worst rates in the country.",
      "Pull a little cash from a <b>bank ATM</b> (Banco Nacional or BCR if you can find one), choose <b>colones</b>, and <b>decline \"convert to USD.\"</b>",
      "Withdraw a reasonable amount at once to limit per-withdrawal fees, but you won't need much up front since dollars work too."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Pay in the quoted currency:</b> dollars for hotels, tours and shuttles; colones for sodas, markets, taxis and buses.",
      "<b>Card</b> for most things, including grocery stores and tolls. Keep <b>cash</b> for sodas, roadside stands and remote areas.",
      "Tip the <b>guachiman</b> (the vested person watching parked cars) a few hundred colones, it's a local custom.",
      "When paying by card, <b>ask to be charged in colones</b> to get your bank's rate, not the merchant's."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Match the currency to the price tag.</b> Paying dollars on a colón price (or vice versa) lets the seller pick the exchange rate, usually in their favor.",
      "On any card terminal or ATM, <b>choose colones, never dollars</b>, to dodge the dynamic-conversion markup of 3 to 8%."
    ], cta: null }
  ],

  cash: {
    rate: 453, cur: "CRC", round: 1000, defaultIndex: 1,
    rateNote: "Rough guide at about 453 colones to the dollar in mid-2026, though it moves daily. A quick trick: 1,000 colones is a bit over 2 dollars, so halve the colón figure and drop the zeros for a rough dollar amount.",
    styles: [
      { n: "Budget", per: 50, cash: 0.5, room: 70 },
      { n: "Mid-range", per: 110, cash: 0.4, room: 140 },
      { n: "Comfort", per: 200, cash: 0.25, room: 280 }
    ]
  },

  connectivity: {
    works: "Mostly, with real gaps in the wild places you came to see. The state carrier Kolbi (ICE) has by far the widest reach, including national parks, cloud forests and remote coasts where Liberty and Claro lose signal, so a Kolbi-backed eSIM is the safest bet. 4G is the everyday standard; 5G is only in the larger towns. Expect dead zones in places like Corcovado, deep Monteverde, the Osa Peninsula and stretches of the Caribbean coast, and download offline maps before heading off the main routes. WhatsApp is the default way local tour operators and lodges communicate, so set it up before you go."
  },

  // TOURIST TAX (verified Jul 2026). Costa Rica has NO city/bed tourist tax of the kind charged
  // in much of Europe. The relevant charges are: (1) 13% VAT (IVA), included in displayed prices
  // by law; and (2) a 10% service charge ("servicio") added by law to most restaurant bills, on
  // top of which the 13% sits. Neither is a per-night occupancy tax, so the calculator adds
  // nothing here (single "everywhere" region at 0). The taxfree block below explains the real
  // charges travelers actually see on a bill.
  tax: {
    unit: "flatPerNight",
    currency: "CRC",
    capNights: null,
    note: "Costa Rica has no separate per-night tourist or city tax. Prices already include 13% VAT, and restaurant bills add a 10% service charge by law (see below), so there is nothing extra to estimate per night here.",
    regions: [
      { key: "everywhere", label: "Anywhere in Costa Rica", rate: 0, note: "No nightly tourist tax applies. The charges you will actually see are 13% VAT, already baked into prices, and a 10% service charge added to most restaurant bills." }
    ]
  },

  currencyHeading: "The colón (and the dollar), in plain terms.",
  facts: [
    { sym: "crc", k: "Quick conversion", v: "About 453 colones to the dollar in mid-2026. To estimate dollars fast, halve the colón amount and drop the zeros: 10,000 colones is roughly 22 dollars. The symbol is the crossed C, the same shape as a cent sign." },
    { sym: "coins", k: "Notes and coins", v: "Colón notes run 1,000, 2,000, 5,000, 10,000, 20,000 and 50,000, all colorful plastic featuring Costa Rican wildlife. Coins go from 5 to 500 colones. You'll often receive colones as change even when you pay in dollars." },
    { sym: "usd", k: "Two currencies at once", v: "The US dollar is an unofficial second currency: hotels, tours and shuttles are usually quoted in dollars, while sodas, markets and local services price in colones. Pay in whatever the price is quoted in for the fairest rate." },
    { sym: "tip", k: "Service is already on the bill", v: "Most sit-down restaurants add a 10% service charge plus 13% VAT to the menu price by law. That covers the baseline tip, so an extra gratuity is only for standout service, not an obligation." }
  ],

  taxfree: {
    label: "Taxes and service charges",
    heading: "No tourist tax, but two charges are baked into bills.",
    text: "Costa Rica does not levy a per-night tourist or city tax. What you will see instead are two things. <b>VAT (IVA) of 13%</b> is included in displayed prices by law, so a shelf or menu price is usually what you pay. At sit-down restaurants, a <b>10% service charge</b> is added on top of the food total, and the 13% tax is then calculated on the combined amount, so a menu price can rise by roughly 23% at checkout if neither was shown included. Some places fold both into the listed prices and note \"impuestos incluidos\"; others add them at the end. Because the 10% service charge already covers a baseline tip, you only need to add more for genuinely great service. There is no VAT-refund scheme for tourists in Costa Rica, so the 13% is simply part of the price."
  },

  traps: [
    "<b>Pay in the currency on the price tag.</b> If something is priced in colones, pay colones; if priced in dollars, pay dollars. Mixing them lets the merchant set an exchange rate that favors them, quietly costing you 5 to 10%.",
    "<b>Bring small, flawless US bills.</b> Fifties and hundreds are hard to break outside banks, and any bill that is torn, stained or heavily worn is routinely refused, even ones that came from a local ATM.",
    "<b>Watch for a second \"tip\" line.</b> Your bill already includes a 10% service charge. Some spots in tourist areas then hand over a US-style receipt with a blank tip line, hoping you'll add another 18 to 20% on top. You've already tipped.",
    "<b>\"Convert to USD?\" Always decline.</b> On card terminals and ATMs, choosing your home currency (dynamic currency conversion) adds 3 to 8%. Pick colones and let your own bank handle the rate.",
    "<b>The advertised rental price is rarely the real one.</b> Rental companies in Costa Rica require a third-party liability insurance that most quotes leave out and that you generally cannot waive, so the true daily cost runs well above the headline rate. The basic rate also still leaves you owing the collision excess, which the desk sells cover to erase at a steep markup, and that excess cover is far cheaper arranged before you go than bought at the counter (see below)."
  ],

  tippingHeading: "Light, since 10% is usually already on the bill.",
  tipping: "Tipping in Costa Rica is modest and often already handled. Most sit-down restaurants add a 10% service charge by law, so you are not expected to tip again unless the service was exceptional, in which case an extra 5 to 10% is a kind gesture. Sodas and street stands do not expect tips. For guided tours, gratuities are genuinely appreciated and a real part of guides' income: roughly 10%, or about $5 to $15 per person per day for a naturalist or adventure guide, more for something outstanding. Private drivers often see $5 to $15 a day; for taxis, rounding up the fare is plenty. Hotel housekeeping and porters appreciate $1 to $2 a day or per bag, and it is customary to hand a guachiman (the vested person watching your parked car) a few hundred colones. Tip in colones where you can, since it spares staff an exchange.",

  faqs: [
    { q: "Should I use US dollars or colones in Costa Rica?", a: "Both work, but pay in whatever currency the price is quoted in. Hotels, tours and shuttles are usually priced in dollars, while sodas, markets, taxis and buses price in colones. Matching the currency avoids a made-up exchange rate that favors the seller. You'll often get colones as change even when you pay in dollars." },
    { q: "Do I need cash in Costa Rica?", a: "Less than you might think, but yes for some situations. Cards work widely, even at small shops and toll booths, but sodas, roadside stands and remote areas like Tortuguero, Drake Bay and the Osa Peninsula are often cash only. Carry small US bills and some colones as backup." },
    { q: "What is the best ATM to use in Costa Rica?", a: "Banco Nacional and BCR (Banco de Costa Rica) often charge foreign cards no access fee, while others run about $3 to $6 per withdrawal. Most ATMs dispense both colones and dollars. Choose colones, and always decline the \"convert to USD\" option to avoid the markup." },
    { q: "Do you tip in Costa Rica?", a: "Lightly, because most restaurants already add a 10% service charge by law, which covers the baseline tip. Add a little more only for exceptional service. Tour guides and private drivers are the real exception: around 10%, or roughly $5 to $15 per person per day, is appreciated and forms part of their income." },
    { q: "Is there a tourist tax in Costa Rica?", a: "No per-night tourist or city tax like much of Europe charges. Prices already include 13% VAT, and restaurant bills add a 10% service charge on top of the food total. There is no VAT refund for visitors, so the 13% is simply part of what you pay." },
    { q: "How much cash should I bring for a week in Costa Rica?", a: "For two travelers, very roughly $300 to $500 across a week in small US bills, topped up with colones from an ATM as you go, alongside a no-fee card for most spending. Carry more cash if you're heading to remote, card-light areas like the Osa Peninsula or Tortuguero." }
  ],

  culture: {
    heading: "A little Spanish goes a long way",
    intro: "A few words and a couple of stories that turn you from a tourist into a guest. Costa Ricans, Ticos, are warm and easygoing, and they light up when a visitor tries a little Spanish.",
    phrases: [
      { mean: "Hello", say: "OH-lah", word: "Hola" },
      { mean: "Please", say: "por fah-VOR", word: "Por favor" },
      { mean: "Thank you", say: "GRAH-syahs", word: "Gracias" },
      { mean: "Cheers", say: "sah-LOOD", word: "Salud" },
      { mean: "Delicious", say: "keh REE-koh", word: "Qué rico" },
      { mean: "All good, hello and thanks", say: "POO-rah VEE-dah", word: "Pura vida" },
    ],
    tip: "<b>Pura vida</b> (pure life) is the phrase that runs the country: it means hello, goodbye, thank you, no worries and all good, all at once. Use it and you are instantly on the same wavelength. Locals also call each other mae (dude) and say tuanis for cool.",
    stories: [
      { img: "/costa-rica-culture-1.jpg",
        alt: "WPA-style illustration of white oxen pulling a brightly hand-painted Costa Rican oxcart along a green mountain lane, coffee hills and a volcano behind",
        h: "The painted oxcart",
        p: "The carreta, a wooden oxcart hand-painted in bright swirling patterns, once hauled coffee down to the coast and is now a national symbol, protected by UNESCO. Traditionally each region had its own colors and design. You will see them everywhere, proud and gleaming.",
        note: "Say it: carreta (kah-RREH-tah)" },
      { img: "/costa-rica-culture-2.jpg",
        alt: "WPA-style illustration of a misty cloud forest with a resplendent quetzal on a mossy branch, a red-eyed tree frog, orchids and shafts of green light",
        h: "More life than almost anywhere",
        p: "Costa Rica is a sliver of a country, yet it holds around five percent of all the species on Earth, and it protects roughly a quarter of its land in parks and reserves. Show that you came for the quetzals and cloud forests, not just the beach, and Ticos warm to you.",
        note: "Good to know: about 5% of the world's species live here" },
      { img: "/costa-rica-culture-3.jpg",
        alt: "WPA-style illustration of pickers with baskets gathering red coffee cherries on a terraced hillside beneath a green volcano at golden hour",
        h: "The golden bean",
        p: "Coffee built modern Costa Rica, and the highland beans are still called grano de oro, the golden bean. A cafecito is a daily ritual and a reason to pause and chat. Accept one when it is offered; it is how friendships start.",
        note: "Say it: grano de oro (GRAH-noh deh OH-roh)" },
    ],
    pride: "Here is the one that stuns visitors: Costa Rica abolished its army in 1948 and has spent the savings on schools, health and nature ever since. No military, more teachers than soldiers, and a lot of pura vida."
  }
};
