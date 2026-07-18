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
  verdict: "Portugal is very <b>card-friendly</b>, arguably more so than its neighbors. Visa and Mastercard work almost everywhere, contactless is the norm, Apple Pay and Google Pay are widely accepted, and you can tap on the Lisbon and Porto metro and trams. Bring a <b>no-fee Visa or Mastercard</b> for nearly everything, keep <b>a little cash</b> for small tascas, markets, fado-bar tips and rural spots, and pull euros from a <b>Multibanco (MB) machine</b>, not the bright yellow Euronet ones. One rule above all: <b>always choose euros, never dollars</b>. Tipping is light. In Lisbon, Porto and a growing list of towns, budget the small per-night tourist tax.",
  meter: {
    heading: "Portugal is very card-friendly, but keep a little cash for the small stuff.",
    cashPct: 26,
    note: "A rough feel for everyday spending. Cards and contactless work almost everywhere, in shops, restaurants, museums and on the metro and trams, helped by Portugal's near-universal tap culture. The cash you do want is for small family-run tascas, markets, fado-bar and cafe tips, coins for public toilets, and rural areas, where a card minimum or a cash-only sign still turns up."
  },
  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are taken nearly everywhere, contactless is standard, and tap needs no PIN under about 50 euros. Apple Pay and Google Pay are widely accepted, including on Lisbon and Porto transit. Amex is patchier. Some small spots set a card minimum, often 5 to 15 euros.", cta: { label: "Check yours", href: "#calc" } },
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
    { sym: "card", k: "Contactless is king", v: "Tap to pay is everywhere, with no PIN under about 50 euros, and Apple Pay and Google Pay work even on Lisbon and Porto transit. Locals use MB WAY, an instant phone app, but it needs a Portuguese bank account, so it is not your tool. Any place that takes MB WAY also takes a card." },
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
    { q: "Do I need cash in Portugal?", a: "Not much. Portugal is very card-friendly, contactless works almost everywhere, including on Lisbon and Porto transit, and Apple Pay and Google Pay are widely accepted. But carry some euros for small tascas, markets, fado-bar tips, coins for public toilets, rural areas and the occasional card-minimum spot, and top up at a Multibanco ATM as needed." },
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
            "Because Portugal is so card-friendly, you can tap a card or phone for almost everything, including the Lisbon metro and trams, and only need an ATM once or twice a trip. Get that right and a few euros of machine fee stops mattering. The <a href=\"/portugal#calcNoFee\">Portugal money guide</a> has the exact card pairing we would pick and how much cash to actually carry."
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
    }
  ]
};
