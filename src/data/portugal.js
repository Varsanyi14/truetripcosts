export default {
  slug: "portugal",
  live: true,
  name: "Portugal",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  sources: {
    changed: "Sources added. Verified with Lisbon City Council that the taxa turistica is 4 euros a person per night (it doubled from 2 euros on 1 September 2024), from age 13 and capped at 7 nights, with Porto at 3 euros. Portugal's standard VAT is 23% and non-EU visitors can reclaim it on shopping. The guide's figures are current.",
    links: [
      { label: "Lisbon City Council: the notice that the overnight tourist tax rose to 4 euros a person per night", url: "https://informacao.lisboa.pt/en/news/detail/tourist-tax-on-overnight-stays-rises-to-4-euros", type: "gov" },
      { label: "Lisbon City Council services: the taxa municipal turistica rules, amount, minimum age and 7-night cap", url: "https://informacoeseservicos.lisboa.pt/servicos/detalhe/taxa-municipal-turistica", type: "gov" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "112", note: "112 reaches every emergency service across the country.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  rentalCommon: true,
  region: "Europe",
  signals: { cardFriendliness: 4, cashNeed: 2, taxRisk: 3, atmRisk: 4 },
  title: "Money in Portugal (2026): Cards, Cash, Multibanco ATMs, Tipping and the Tourist Tax | True Trip Costs",
  description: "How to handle money in Portugal as a US traveler in 2026: cards work almost everywhere, the dollar conversion trap, Multibanco ATMs vs the yellow Euronet ones, light tipping, the Lisbon and Porto tourist taxes, and the 23% IVA refund. Checked July 2026.",
  h1: "Money in Portugal, sorted.",
  lede: "A calm, current plan for the money side of your trip: what you can tap, the little things you still want euros for, and the small rules that trip up first-timers.",
  hero: {
    img: "/portugal-hero.jpg",
    h: 1375,
    alt: "A quiet Lisbon old-town street at dusk with string lights overhead, pastel houses with azulejo tiles and wrought-iron balconies, laundry lines, a yellow tram climbing the hill toward a domed church, a lone figure walking away up the cobbles, and a pastel de nata with a glass of white wine, olives and bread on a wooden table in the foreground"
  },
  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',
  verdict: "Portugal is very <b>card-friendly</b>, arguably more so than its neighbors. Visa and Mastercard work almost everywhere, contactless is the norm, Apple Pay and Google Pay are widely accepted, and you can tap on the Lisbon and Porto metro. Bring a <b>no-fee Visa or Mastercard</b> for nearly everything, keep <b>a little cash</b> for small tascas, markets, fado-bar tips and rural spots, and pull euros from a <b>Multibanco (MB) machine</b>, not the bright yellow Euronet ones. One rule above all: <b>always choose euros, never dollars</b>. Tipping is light. In Lisbon, Porto and a growing list of towns, budget the small per-night tourist tax.",
  meter: {
    heading: "Portugal is very card-friendly, but keep a little cash for the small stuff.",
    cashPct: 26,
    note: "A rough feel for everyday spending. Cards and contactless work almost everywhere, in shops, restaurants, museums and on the metro and trams, helped by Portugal's near-universal tap culture. The cash you do want is for small family-run tascas, markets, fado-bar and cafe tips, coins for public toilets, and rural areas, where a card minimum or a cash-only sign still turns up."
  },
  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are taken nearly everywhere, contactless is standard, and tap needs no PIN under about 50 euros. Apple Pay and Google Pay are widely accepted, including on the Lisbon and Porto metro. Amex is patchier. Some small spots set a card minimum, often 5 to 15 euros.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "A little, for the small stuff", p: "You do not need much, but keep some euros in small notes and coins. Small tascas, neighborhood markets, fado-bar tips, the odd cash-only spot and coins for public toilets still run on cash, and a 20 is easier to spend than a 50.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Use a Multibanco, not Euronet", p: "Look for the Multibanco (MB) network, the national bank machines, which charge little or nothing for the withdrawal itself (CGD, Millennium, Novo Banco, Caixa Geral). Avoid the bright yellow standalone Euronet machines at airports and tourist squares, which charge 5 to 7 euros and push the dollar conversion. It may ask about conversion twice, so decline both times.", cta: { label: "See low-fee cards", href: "#" } }
  ],
  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> with contactless for nearly everything, and pack a backup card from a different bank.",
      "Get a <b>no-foreign-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "You will need little cash, so plan to pull a modest amount once you land rather than buying euros at home.",
      "Most US issuers no longer need a travel notice, but it does not hurt to flag the trip so a first-day tap is not blocked."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters and walk past the bright yellow <b>Euronet</b> machines by the exits.",
      "Pull a modest amount of euros from a <b>Multibanco</b> bank machine (CGD or Novo Banco are just past customs at Lisbon) and <b>decline \"convert to USD,\"</b> twice if it asks twice.",
      "Heading into the city? You can usually <b>tap your card or phone</b> on the metro and the airport bus, no cash needed."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card or contactless</b> for almost everything: restaurants, shops, museums, the metro and trams.",
      "<b>A little cash</b> for small tascas, markets, tips and the rare cash-only or card-minimum spot.",
      "<b>Always choose euros</b> on every card terminal and ATM screen, never dollars.",
      "When you need a machine, find a <b>Multibanco</b> (MB) one rather than a yellow Euronet box."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in euros, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%, and at a Euronet machine the markup can be far worse.",
      "At a Multibanco ATM the conversion question can pop up <b>twice</b>, so decline it both times to get euros at the real rate."
    ], cta: null }
  ],
  cash: {
    rate: 0.88, cur: "EUR", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 1.14 dollars to the euro in mid-2026, so roughly 0.88 euros per dollar. Portugal is card-first, so this is the smaller, cash-in-hand slice of your spending.",
    styles: [ { n: "Budget", per: 40, cash: 0.38 }, { n: "Mid-range", per: 85, cash: 0.26 }, { n: "Comfort", per: 160, cash: 0.15 } ]
  },
  connectivity: {
    works: "Yes, and coverage is very good. Portugal has near-universal 4G and growing 5G across the cities, the Algarve coast and the main routes. Signal thins in the interior, like the Alentejo and the remote north, and in the national parks."
  },
  // TOURIST TAX (high-churn, verified Jul 2026). A per-person, per-night municipal
  // tax (taxa turistica) collected by your accommodation, usually not in the room rate.
  // Most of Portugal charges nothing. Capped at 7 nights, under-13s exempt.
  tax: {
    unit: "perPersonPerNight",
    currency: "EUR",
    capNights: 7,
    note: "A per-person, per-night town tax, collected by your hotel (often in cash) and usually not in the room rate. Capped at 7 nights, children under 13 exempt. Most of Portugal charges nothing.",
    regions: [
      { key: "lisbon", label: "Lisbon", rate: 4 },
      { key: "porto", label: "Porto", rate: 3 },
      { key: "algarve", label: "Algarve (Faro, Albufeira, Lagos)", rate: 2 },
      { key: "other", label: "Elsewhere in Portugal", rate: 0 }
    ]
  },
  currencyHeading: "The euro, in plain terms.",
  facts: [
    { sym: "euro", k: "Quick conversion", v: "About 1.14 dollars to 1 euro in mid-2026, so euro prices are roughly the same as dollars, just a touch more: a 10 euro lunch is about 11 and a half dollars, and 100 euros is about 114. Prices show the euro sign, usually after the number, as in \"12 \u20AC\"." },
    { sym: "coins", k: "Notes and coins", v: "Notes run 5, 10, 20, 50, 100, 200 and 500 euros, though anything above 50 is awkward to spend and many small places will not take it. The 1 and 2 euro pieces are coins, not notes, so keep a small stash of coins and small notes for cafes, tascas, tips and toilets." },
    { sym: "card", k: "Contactless is king", v: "Tap to pay is everywhere, with no PIN under about 50 euros, and Apple Pay and Google Pay work even on the Lisbon and Porto metro. Locals use MB WAY, an instant phone app, but it needs a Portuguese bank account, so it is not your tool. Any place that takes MB WAY also takes a card." },
    { sym: "tip", k: "Tipping is light", v: "Portugal is not a US-style tipping culture. The price you see includes IVA (VAT) and staff earn a real wage, so there is no expected percentage. Rounding up, or 5 to 10% for good service at a sit-down meal, is plenty, and best left in cash." }
  ],
  taxfree: {
    label: "Taxes and refunds",
    heading: "The town tourist taxes, and money back on shopping.",
    text: "Two things to know. Portugal has <b>no national tourist tax</b>, but about 40 towns charge their own <b>municipal tourist tax (taxa turistica)</b>, per person per night, collected by your accommodation and usually not in the headline room rate. <b>Lisbon</b> is 4 euros per person per night (it doubled from 2 euros in late 2024, so older guides are wrong), <b>Porto</b> is 3 euros, and Algarve towns run 1 to 2 euros depending on the season. It is capped at 7 nights and children under 13 are exempt. Most of the country charges nothing. Separately, if you shop, non-EU visitors can reclaim Portugal's <b>23% IVA (VAT)</b> on goods (22% in Madeira, lower in the Azores). The catch is a <b>minimum of about 50 euros before tax</b> (around 61 euros on the receipt) in one store. Ask for a tax-free form with your passport, keep the goods unused, and validate at an <b>e-Taxfree kiosk</b> at the airport when you leave the EU. After the operators' fees you get back roughly 12 to 17%."
  },
  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> At a shop terminal or an ATM, choosing dollars (dynamic currency conversion) quietly adds 3 to 8%, and a Euronet machine can mark it up far more. Pick euros every time. At a Multibanco ATM the conversion question can appear twice, so decline it both times.",
    "<b>Skip the bright yellow Euronet ATMs.</b> They cluster at airports and tourist squares (Rossio and Praca do Comercio in Lisbon, the Algarve strip) and charge 5 to 7 euros plus an aggressive dollar-conversion prompt. Use a Multibanco (MB) machine instead and read the on-screen fee before you confirm.",
    "<b>Watch your pockets on the famous trams.</b> Pickpockets work Lisbon's crowded Tram 28 and the tourist crush around Rossio and Belem, and the same in central Porto. Keep cards and phone in a front or zipped pocket.",
    "<b>Some small spots are cash, or have a minimum.</b> A few tascas, markets and rural shops are cash-preferred or set a card minimum around 5 to 15 euros, so keep a little cash and some coins on you, including for public toilets.",
    "<b>MB WAY is for locals.</b> You will see MB WAY stickers everywhere, but the app needs a Portuguese bank account, so it is not available to visitors. Any merchant that takes it also takes a card or cash, so it is not a problem, just not your tool."
  ],
  tippingHeading: "Tip lightly, in cash.",
  tipping: "Portugal is not a US-style tipping culture, and this surprises many first-timers. The menu price already includes IVA, and staff are paid a real wage, so there is no expected percentage and nobody will chase you for one. For good table service you can round up or leave 5 to 10%, but it is a kind gesture rather than an obligation. At a cafe or pastelaria, rounding up or leaving the coins is plenty, and at a counter, nothing is fine. Leave any tip in cash, since card terminals rarely pass it to the staff. A euro or two for a porter or for housekeeping is appreciated, rounding up a taxi fare is normal, and a free walking-tour guide lives on tips, so 5 to 10 euros per person is fair. Do not feel pressured to tip 15 to 20% the way you would at home.",
  faqs: [
    { q: "Do I need cash in Portugal?", a: "Not much. Portugal is very card-friendly, contactless works almost everywhere, including on the Lisbon and Porto metro, and Apple Pay and Google Pay are widely accepted. But carry some euros for small tascas, markets, fado-bar tips, coins for public toilets, rural areas and the occasional card-minimum spot, and top up at a Multibanco ATM as needed." },
    { q: "Should I pay in euros or dollars in Portugal?", a: "Always euros. If a card terminal or ATM offers to charge you in dollars, decline. That dynamic currency conversion adds roughly 3 to 8%, and a Euronet machine can be far worse. At a Multibanco ATM the conversion question can appear twice, so say no both times to get euros at the real rate." },
    { q: "What ATM should I use in Portugal?", a: "Use a Multibanco (MB) machine, the national bank network, which charges little or nothing for the withdrawal itself. Avoid the bright yellow standalone Euronet machines at airports and tourist squares; they charge 5 to 7 euros and push the dollar conversion. Always choose to be charged in euros, and decline conversion both times it asks." },
    { q: "Do you tip in Portugal?", a: "Only lightly. The price includes IVA and staff earn a real wage, so tipping is optional. Round up or leave 5 to 10% at a sit-down restaurant for good service, a few coins at a cafe, and tip a free-tour guide 5 to 10 euros. Leave it in cash, since card tips often do not reach the staff, and do not feel you need to tip US-style." },
    { q: "Is there a tourist tax in Portugal, and can I get an IVA refund?", a: "About 40 towns charge a small municipal tourist tax, per person per night, collected at your accommodation: Lisbon is 4 euros, Porto 3 euros, Algarve towns 1 to 2 euros, capped at 7 nights with under-13s exempt. Most of the country charges nothing. Separately, non-EU visitors can reclaim the 23% IVA on shopping over about 50 euros before tax in one store: ask for the tax-free form, keep the goods unused, and validate at an e-Taxfree kiosk when you leave. After fees you get roughly 12 to 17% back." },
    { q: "How much cash should I bring for a week in Portugal?", a: "For two mid-range travelers, very roughly 200 to 300 euros in day-to-day cash across a week, beyond your hotel, pulled in a couple of Multibanco visits. Cards and contactless cover most of the rest. Adjust for your style and how much you tap versus pay in cash." }
  ],

  culture: {
    heading: "A little Portuguese goes a long way",
    intro: "A few words and a couple of stories that turn you from a tourist into a guest. The Portuguese are gentle and welcoming, and a little effort with the language is always met warmly.",
    phrases: [
      { mean: "Hello", say: "oh-LAH", word: "Olá" },
      { mean: "Please", say: "poor fah-VOR", word: "Por favor" },
      { mean: "Thank you", say: "oh-bree-GAH-doo / oh-bree-GAH-dah", word: "Obrigado / Obrigada" },
      { mean: "Cheers", say: "sah-OO-djeh", word: "Saúde" },
      { mean: "Delicious", say: "deh-lee-see-OH-zoo", word: "Delicioso" },
      { mean: "Beautiful", say: "LEEN-doo", word: "Lindo" },
    ],
    tip: "Thank you changes with who is speaking, not who you thank: a man says <b>obrigado</b>, a woman says <b>obrigada</b>. Get that right and you will earn an instant smile.",
    stories: [
      { img: "/portugal-culture-1.jpg",
        alt: "WPA-style illustration of a Portuguese Age of Discovery sailing ship with cross-marked sails leaving the Tagus at dawn, an astrolabe and charts on deck, the Belem tower in the distance",
        h: "The small country that mapped the world",
        p: "From this coast, tiny Portugal launched the Age of Discovery. Vasco da Gama opened the sea route to India in 1498, and Portuguese ships charted oceans no one had mapped. For a nation its size, it is an astonishing story, and a deep source of pride.",
        note: "Good to know: da Gama reached India by sea in 1498" },
      { img: "/portugal-culture-2.jpg",
        alt: "WPA-style illustration of a fado singer in a black shawl singing with eyes closed in a candlelit Lisbon tavern, a musician beside her playing a round twelve-string Portuguese guitar",
        h: "The music of saudade",
        p: "Fado is Lisbon's soul in song: a voice, a twelve-string guitarra, and a feeling the Portuguese call saudade, a bittersweet longing for something loved and lost. You do not need the words to feel it. Hearing live fado is the real thing.",
        note: "Say it: saudade (sow-DAH-deh)" },
      { img: "/portugal-culture-3.jpg",
        alt: "WPA-style illustration of a craftsman's hands painting cobalt-blue patterns onto white ceramic tiles, a wall of blue-and-white azulejos behind, sunlit workshop",
        h: "Walls that tell stories",
        p: "Those blue-and-white tiles you see everywhere, on churches, palaces and train stations, are azulejos, and many are not just decoration: whole walls tell stories of history and legend. Once you notice them, you see Portugal differently.",
        note: "Say it: azulejos (ah-zoo-LEH-zhoosh)" },
    ],
    pride: "For a small country, Portugal has an enormous heart: centuries of seafaring, the world's fish cooked a hundred ways, and the word saudade, which they gave to a feeling no other language quite names."
  },

  // HUB-AND-SPOKE SPOKES. Each spoke is a short, focused page answering ONE on-the-ground
  // money question for Portugal. Data-driven and single-source: the spoke lives here, so
  // its checked date, facts and sources are governed the same way the guide is, and it is
  // rendered by components/Spoke.astro through src/pages/[slug]/[spoke].astro at
  // /portugal/<spoke slug>. The country page lists these automatically under "Going
  // deeper on Portugal", and each spoke links back here, top and bottom.
  spokes: [
    {
      slug: "euronet-atm-fees",
      live: true,
      title: "How to avoid the yellow Euronet ATMs in Lisbon (2026) | True Trip Costs",
      description: "Skip the bright yellow Euronet machines in Lisbon and use a Multibanco (MB) bank ATM instead. How to tell them apart, why the yellow ones cost so much, and the one screen tap that saves you the most. Checked July 2026.",
      h1: "How to avoid the yellow Euronet ATMs in Lisbon",
      lede: "The bright yellow machines by the airport exits and in the tourist squares are the most expensive way to get euros. Here is how to spot them, what to use instead, and the one habit that matters more than the machine.",
      checked: "Jul 2026",
      checkedISO: "2026-07-05",
      answer: "Walk past the bright yellow <b>Euronet</b> machines and use a <b>Multibanco (MB)</b> bank ATM instead. Multibanco is Portugal's shared bank network, and its machines charge little or nothing of their own for the withdrawal. Whichever machine you end up at, <b>always choose euros, never dollars</b>, and decline the offer to convert. That single tap saves you more than the machine choice does.",
      sections: [
        {
          h: "The short version: use a Multibanco machine, not a Euronet one",
          p: [
            "Portugal runs one national bank ATM network called <b>Multibanco</b>, or <b>MB</b>, operated by SIBS and shared by nearly every Portuguese bank. Its machines charge little or nothing for the withdrawal itself. The bright yellow standalone machines you meet in airport arrivals and tourist squares are <b>Euronet</b>, a private operator that sits outside that network and sets its own, much higher, pricing.",
            "So the rule is simple. Find a Multibanco machine, or an ATM built into a real bank branch such as CGD, Millennium, Novo Banco or Santander, and skip the freestanding yellow boxes. Then, on any machine, pick euros and turn down the conversion offer, because that offer is where most of the money quietly disappears."
          ]
        },
        {
          h: "How to tell a Euronet ATM from a Multibanco one",
          p: [
            "Euronet machines are freestanding and wrapped in bright yellow, they carry no bank name, and the screen skips the normal Multibanco welcome. You will find them clustered at Lisbon airport arrivals, around Rossio and Praca do Comercio, along the Baixa and Alfama tourist streets, and all down the Algarve strip.",
            "A Multibanco machine shows the orange MB logo, opens with a language menu (Portugues, English, Espanol, Francais), and offers preset euro amounts like 20, 40, 60, 100 and 200. It also shows a short fee-disclosure screen before you confirm, so you always see the charge in advance rather than after."
          ]
        },
        {
          h: "Why the yellow machines cost so much",
          p: [
            "Two charges stack on a Euronet withdrawal. First, a per-withdrawal fee, usually a few euros and steepest at the airport. Second, and far worse, <b>dynamic currency conversion</b>: the machine offers to bill you in US dollars and quietly sets its own exchange rate, which can add roughly 10% or more on top. That is how withdrawing 100 euros can end up costing well over the odds.",
            "You always have the right to decline dollars and be charged in euros, at which point your own bank does the conversion at a normal rate. Euronet's screens make the dollar option look like the helpful default. It is not, so say no."
          ]
        },
        {
          h: "Getting euros the cheap way, step by step",
          p: [
            "It takes about a minute and no special app."
          ],
          steps: [
            "Leaving the airport, skip the exchange counters and the freestanding yellow machines.",
            "Find a Multibanco machine or a bank-branch ATM. At Lisbon airport there are bank machines just past customs.",
            "Insert your card, choose English, and pick a sensible amount. Multibanco often caps each withdrawal around 200 euros, so take enough in one go to avoid repeat fees.",
            "When it offers to charge you in dollars, say no and choose euros. At a Multibanco machine that question can appear <b>twice</b>, so decline both times.",
            "Read the on-screen fee before you confirm, then take your cash and keep the receipt."
          ]
        },
        {
          h: "The bigger lever: the card you withdraw with",
          p: [
            "Which machine you use matters, but the card in your hand matters more. Your US bank's own foreign and ATM fees stack on top of anything the machine charges, so a <b>no-foreign-fee debit card</b> is the real saving. Charles Schwab refunds ATM fees worldwide, and Wise and Revolut keep them low.",
            "Because Portugal is so card-friendly, you can tap a card or phone for almost everything and only need an ATM once or twice a trip. Get that right and a few euros of machine fee stops mattering. The <a href=\"/portugal#calcNoFee\">Portugal money guide</a> has the exact card pairing we would pick and how much cash to actually carry, and <a href=\"/cash-or-card\">cash or card by country</a> covers the broader question of how much to tap versus carry."
          ]
        }
      ],
      faqs: [
        { q: "Are the yellow Euronet ATMs in Lisbon a scam?", a: "No, they are legal and they work, but they are an expensive way to get cash. A Euronet machine adds a per-withdrawal fee and pushes dynamic currency conversion, where it bills you in dollars at a poor rate. Decline the dollars, or better, use a Multibanco bank machine instead." },
        { q: "How do I spot a Multibanco ATM?", a: "Look for the orange MB logo and a machine built into or beside a bank such as CGD, Millennium, Novo Banco or Santander. It opens with a language menu and shows preset euro amounts and a fee screen before you confirm. The freestanding bright yellow machines with no bank name are Euronet, so walk past those." },
        { q: "Should I choose euros or dollars at a Lisbon ATM?", a: "Always euros. Choosing dollars lets the machine set the exchange rate, which can add roughly 10% or more. Pick euros and let your own bank convert at a normal rate. At a Multibanco machine the conversion question can appear twice, so say no both times." },
        { q: "How much can I take out at a Multibanco machine?", a: "Multibanco machines often cap each withdrawal around 200 euros, and a daily limit of 400 euros is common for local cards, though a foreign card may allow more depending on your own bank. Take enough in one visit so you are not paying a fee on repeat trips." }
      ],
      sources: {
        links: [
          { label: "SIBS: operator of the Multibanco national bank ATM network that nearly every Portuguese bank shares, including machines at airports", url: "https://www.sibs.com/independent-atm-deployer/", type: "currency" },
          { label: "Euronet: the operator's own page confirming its ATMs charge a withdrawal fee and offer currency conversion", url: "https://www.euronetatms.com/euronet-atm-fees-explained/", type: "card" },
          { label: "Monito: a fee breakdown putting Euronet's per-withdrawal charge at roughly 2 to 5 euros and its conversion markup around 10 to 13%", url: "https://www.monito.com/en/wiki/euronet-atm-charges-and-fees", type: "media" }
        ],
        judgment: "Fees and withdrawal limits move and vary from machine to machine, so treat the euro figures as a recent read rather than a fixed price, and always check the fee shown on screen before you confirm. Checked July 2026."
      }
    },
    {
      slug: "iva-tax-refund-kiosk",
      live: true,
      title: "The IVA tax-refund kiosk at Lisbon airport, step by step (2026) | True Trip Costs",
      description: "How the e-Taxfree kiosks at Lisbon airport work for US visitors: the green code, where the machines are, why you validate before checking bags, and what you actually get back after fees. Checked July 2026.",
      h1: "The IVA tax-refund kiosk at Lisbon airport, step by step",
      lede: "If you shopped in Portugal and want the IVA (VAT) back, it comes down to a self-service kiosk at the airport and one green screen. Here is the exact sequence, and the one timing mistake that costs people the refund.",
      checked: "Jul 2026",
      checkedISO: "2026-07-06",
      answer: "Validate your tax-free forms at an <b>e-Taxfree kiosk</b> at Lisbon airport before you fly. Scan the form and your passport, and a <b>green screen (Code Green)</b> means you are approved, so you can collect from the refund operator's desk or drop the form in their box. The rule that trips people up: if your purchases are in your <b>checked luggage</b>, validate <b>before</b> you drop the bag, not after.",
      sections: [
        {
          h: "First, do you actually qualify",
          p: [
            "The refund is Portugal's <b>IVA</b> (VAT). The standard rate is 23%, and non-EU visitors, which includes US travelers, can claim it back on goods taken home unused. You need to have asked the shop for a <b>tax-free form</b> at the till, with your passport, and to have spent at least about <b>50 euros before tax in a single store</b> (roughly 61 to 62 euros on the receipt), one of the lower thresholds in Europe.",
            "Two things kill a refund fast: using or wearing the goods before you leave, and missing the window. You have to export the items within three months and validate before you leave the EU. A tax-free form is not the same as your receipt, so make sure the shop actually issues one."
          ]
        },
        {
          h: "Where the e-Taxfree kiosks are at Lisbon airport",
          p: [
            "Lisbon's airport (LIS) runs two terminals that work almost separately, so the kiosk you use depends on where your goods are. If your purchases are in your <b>carry-on</b>, the e-Taxfree kiosks and Customs desks are <b>airside, after security</b>, in both Terminal 1 and Terminal 2. Validate there, then collect from the operator's desk.",
            "If any item is in your <b>checked luggage</b>, you use the <b>landside</b> kiosks near the oversized-baggage area <b>before</b> you drop the bag. One trap worth naming: the operator kiosk out on the arrivals level is not a Customs validation point, so do not queue there thinking it counts."
          ]
        },
        {
          h: "The kiosk, step by step",
          p: [
            "It is quick once you are in front of the machine, but give yourself room."
          ],
          steps: [
            "Budget 30 to 45 minutes on top of your normal airport routine, and more at busy morning departures.",
            "If any goods are checked, go to the landside kiosk first and tell check-in staff you need to validate. They can tag the bag and hand it back for inspection.",
            "At the e-Taxfree kiosk, scan the barcode on your tax-free form and scan your passport. Have your boarding pass ready.",
            "Watch for the light. <b>Code Green</b> means you are validated and can move on. <b>Code Red</b> means take the form to the Customs (Alfandega) desk for a manual check.",
            "Collect your money: go to your operator's desk (Global Blue, Planet and others) for an immediate refund, or drop the validated form in their box for a later card refund or cheque."
          ]
        },
        {
          h: "What you actually get back",
          p: [
            "Do not expect the full 23%. The tax-free operators take a cut, so after their fees you typically net around <b>12 to 16%</b> of the price. An immediate cash refund at the desk is fastest but usually carries the biggest fee, while a refund to your card is cleaner but can take weeks.",
            "So the honest math: on a few hundred euros of shopping the refund is real and worth the half hour, but on a small purchase the fees and the queue may not be. If you only bought a little, it is fine to skip it."
          ]
        },
        {
          h: "A note on what this is not",
          p: [
            "This is the visitor VAT refund, handled through the <b>e-Taxfree</b> system and the private operators. It is separate from IVAucher, a domestic scheme for Portuguese residents that you will see mentioned but cannot use as a tourist. And it only covers <b>goods you take home</b>, not hotels, meals or services, which are not refundable. For how Portugal charges its town tourist taxes and everyday IVA, the <a href=\"/portugal\">Portugal money guide</a> has the rest."
          ]
        }
      ],
      faqs: [
        { q: "Do US visitors get the VAT back when shopping in Portugal?", a: "Yes. Portugal's IVA (VAT) is 23%, and non-EU visitors, including US travelers, can reclaim it on goods taken home unused. You need a tax-free form from the shop, a minimum spend of about 50 euros before tax in one store, and to validate at an e-Taxfree kiosk when you leave the EU. After operator fees you net roughly 12 to 16%." },
        { q: "What is Code Green at the airport kiosk?", a: "It is the e-Taxfree kiosk telling you your tax-free form is validated. You scan the form and your passport, and a green screen means you are approved and can collect your refund from the operator. A red screen means you take the form to the Customs desk for a manual check." },
        { q: "Do I validate before or after checking my bags?", a: "Before, if the goods are in your checked luggage. Use the landside kiosks near oversized baggage and tell check-in staff, so Customs can inspect the items before the bag is loaded. If your purchases are in your carry-on, validate airside after security instead." },
        { q: "How much time should I leave at Lisbon airport for the refund?", a: "Budget an extra 30 to 45 minutes beyond your normal check-in and security time, and more at busy morning departures. The process involves a kiosk, a possible Customs inspection and collecting the refund, all before you fly, so arrive early on a shopping-heavy trip." }
      ],
      sources: {
        links: [
          { label: "Lisbon Airport (ANA): the official VAT refund page explaining the e-Taxfree kiosk, Code Green and Code Red, and how to collect", url: "https://www.lisbonairport.pt/en/lis/services-shopping/essential-services/vat-refund", type: "gov" },
          { label: "Planet: a tax-free operator's own page confirming the kiosks sit near Customs and that checked-luggage goods must be validated before bag drop at Lisbon", url: "https://taxfree.weareplanet.com/countries/portugal", type: "revenue" },
          { label: "e-Taxfree conditions: the minimum spend of 50 euros before tax in one store and the three-month export window", url: "https://epaytaxfree.com/tax-free-conditions-portugal/", type: "doc" }
        ],
        judgment: "Refund percentages depend on the operator and how you collect, and airport layouts and desks change, so confirm your operator and the current kiosk locations on the day. Checked July 2026."
      }
    },
    {
      slug: "tram-28-contactless",
      live: true,
      title: "Does tram 28 in Lisbon take contactless? (2026) | True Trip Costs",
      description: "Whether you can tap a bank card or phone on Lisbon's famous 28 tram, why the metro is different, and the cheap, reliable way to pay, the Navegante card and zapping. Checked July 2026.",
      h1: "Does tram 28 in Lisbon take contactless?",
      lede: "The short, honest answer is: not reliably. Tapping your own card is solid on the metro, but on the historic 28 tram it is hit or miss, so here is the cheap way that always works.",
      checked: "Jul 2026",
      checkedISO: "2026-07-06",
      answer: "On the Lisbon <b>metro</b>, you can tap a contactless bank card or phone at the gates and it works reliably (1.92 euros a ride). On the historic <b>28 tram</b>, open-loop contactless is being rolled out but reports are mixed, so <b>do not count on it</b>. The reliable, cheap route is a <b>navegante card</b> (0.50 euros) loaded with <b>zapping</b> (1.72 euros a ride), or a 24-hour pass. Paying the driver onboard works but costs about 3.30 euros, the most expensive option.",
      sections: [
        {
          h: "Contactless on the metro, yes; on the 28 tram, not reliably",
          p: [
            "Lisbon's metro now takes open-loop contactless: tap your own Visa or Mastercard, or a phone or watch, at the fare gates, and you are charged <b>1.92 euros</b> per journey, one person per card. That part is official and dependable.",
            "The historic trams are run by a different operator, Carris, and here it gets murky. Some onboard validators accept a contactless tap and some do not, and recent local guides openly disagree about whether it works on the 28. The city is rolling it out, but as of 2026 you should not board the packed 28 assuming your card will tap. Bring a fallback."
          ]
        },
        {
          h: "The cheap, reliable way to pay: navegante and zapping",
          p: [
            "Get a <b>navegante occasional card</b> for <b>0.50 euros</b> from any metro ticket machine or ticket office. It is reusable for a year, and each traveler needs their own. Then load <b>zapping</b>, pay-as-you-go credit, and each Carris ride (tram, bus or funicular) costs <b>1.72 euros</b>, the cheapest single fare there is, with free transfers inside 60 minutes.",
            "If you are doing the classic tram-and-funicular sightseeing day, the <b>24-hour Carris and Metro pass at 7.25 euros</b> is better value, and it covers the trams, buses, metro, the funiculars and the Santa Justa lift. One quirk: a navegante card holds only one fare type at a time, so you cannot mix zapping and a day pass on the same card. Locals just buy two 0.50-euro cards."
          ]
        },
        {
          h: "What paying the driver actually costs",
          p: [
            "You can buy a single ticket from the tram driver, but it is the tourist-premium option at about <b>3.30 euros</b> a ride, nearly double the zapping fare, and drivers often want coins or small notes. On a route as busy as the 28, fumbling for change while boarding is also how you hold up the queue and flag yourself to pickpockets.",
            "So the order of preference is simple: zapping or a day pass on a navegante card first, the metro's contactless gates while you are on the metro, and paying the driver only as a last resort."
          ]
        },
        {
          h: "One more thing contactless does not do here",
          p: [
            "Even where a tap works, Lisbon does not give you London-style fare capping across the whole network. The metro caps your own contactless spending at about <b>6.50 euros</b> a day, but that cap does not stretch across the trams and buses, and it is per card, not per group. For a few days of mixed sightseeing, a navegante card with zapping is still the simplest thing to hand a travel companion. The full <a href=\"/portugal\">Portugal money guide</a> covers cards, cash and the rest."
          ]
        }
      ],
      faqs: [
        { q: "Can I tap my credit card on Lisbon's 28 tram?", a: "Not reliably. Open-loop contactless works dependably at the Lisbon metro gates (1.92 euros a ride), but on the historic 28 tram the onboard readers are inconsistent and local guides disagree about whether a tap works. Do not rely on it. Use a navegante card with zapping, or a 24-hour pass, and keep some cash as a backup." },
        { q: "What is the cheapest way to ride tram 28?", a: "A navegante occasional card (0.50 euros) loaded with zapping credit, which makes each Carris ride 1.72 euros. If you are riding trams and funiculars all day, the 24-hour Carris and Metro pass at 7.25 euros is better value. Both beat the roughly 3.30-euro fare you pay buying a single ticket from the driver." },
        { q: "Where do I buy a navegante card?", a: "At any metro station, from the ticket machines or the ticket office, and at many kiosks and Carris points of sale. The card is 0.50 euros, reusable for a year, and each person needs their own. Load it with zapping credit or a 24-hour pass, then tap it on the validator when you board." },
        { q: "Does Apple Pay or Google Pay work on Lisbon transit?", a: "On the metro, yes, you can tap a phone or watch at the gates just like a contactless card. On the historic trams it is the same mixed picture as a physical card, so treat it as unreliable there. For trams and buses, a navegante card with zapping is the dependable choice." }
      ],
      sources: {
        links: [
          { label: "Metropolitano de Lisboa: the official fares page confirming the metro contactless bank-card fare, zapping, the single ticket and the 24-hour pass", url: "https://www.metrolisboa.pt/en/buy/", type: "gov" },
          { label: "Next Stop Lisbon: a local guide noting contactless is clear at the metro gates but that trams and buses need a navegante card", url: "https://www.nextstoplisbon.com/can-you-pay-contactless-on-lisbon-metro", type: "guide" },
          { label: "Visit City: the 2026 onboard tram single fare and the metro daily contactless cap", url: "https://visitcity.travel/en/lisbon/guides/tickets-passes", type: "media" }
        ],
        judgment: "The contactless rollout on Lisbon's surface trams is moving and reports conflict, so the honest read is not to depend on it on the 28. Fares can change too, so confirm on the Carris and Metro sites. Checked July 2026."
      }
    }
  ]
};
