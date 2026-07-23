export default {
  slug: "czechia",
  iso2: "cz",
  live: true,
  name: "Czechia",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  sources: {
    changed: "Sources added. Verified with the City of Prague that the local accommodation fee is 50 koruna per person per night (doubled from 21 in 2022), capped by national law, applying to the first 60 nights, with under-18s exempt. Standard Czech VAT is 21%, and non-EU visitors can reclaim it on shopping. The guide's figures are current.",
    links: [
      { label: "City of Prague: the local tourist fee, 50 koruna per person per night since 2022, under Act 565/1990", url: "https://sdileneubytovani.praha.eu/jnp/en/for_accommodation_providers/local_tourist_fee.html", type: "gov" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "112", note: "112 reaches every service, and 155 goes straight to an ambulance.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  region: "Europe",
  signals: { cardFriendliness: 4, cashNeed: 2, taxRisk: 3, atmRisk: 4 },
  hook: "One of Europe's most card-friendly countries, with a small Prague city fee and a couple of tourist-money traps to dodge.",
  aliases: ["czech republic", "czech", "prague", "praha", "brno", "cesky krumlov", "karlovy vary", "plzen", "pilsen", "koruna", "czk", "bohemia", "moravia"],

  title: "Money in Czechia (2026): Cards, Cash, ATMs and the Prague City Fee | True Trip Costs",
  description: "How to handle money in Czechia as a US traveler in 2026: why cards and contactless work almost everywhere, which ATMs to use and which yellow ones to avoid, the dollar-conversion trap, the koruna versus the euro, Prague's per-night city fee, and light round-up tipping. Checked July 2026.",

  h1: "Money in Czechia, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your tap-to-pay card covers almost everything, the two tourist traps that quietly cost the most, and the small nightly city fee in Prague.",
  hero: {
    img: "/czechia-hero.jpg",
    h: 1375,
    alt: "A colorful Prague old-town street at dusk with pastel townhouses and red-tiled roofs, string lights strung across the lane, the twin Gothic spires of the Tyn Church silhouetted against an orange sunset, a lone figure walking away down the cobblestones, and a plate of roast pork with bread dumplings, red cabbage and pickles beside a tall glass of golden Czech beer on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Czechia is one of Europe's most card-friendly countries, and Prague is close to tap-to-pay everywhere. Bring a <b>no-foreign-fee Visa or Mastercard</b> and you can pay for almost everything by contactless card, phone or watch. Keep a little cash, <b>about 1,000 to 2,000 koruna</b>, for pubs outside the center, market stalls, tips and paid restrooms, and pull it from a <b>bank ATM</b> (ČSOB, Komerční banka, Česká spořitelna, Raiffeisenbank), never a bright yellow Euronet machine. Two habits save the most money: <b>always choose koruna, never dollars</b>, and skip the tourist-area street exchange booths. If you are staying in Prague, add the small nightly city fee to your budget.",

  meter: {
    heading: "Very card-friendly, with a little cash for pubs and small towns.",
    cashPct: 30,
    note: "A rough feel for everyday spending. Cards and contactless work almost everywhere in Prague and the cities, on transit, in shops, restaurants and supermarkets. You still want a little koruna for neighborhood pubs, market stalls, small-town bakeries, tips and paid public toilets, and cash leans more useful the further you get from the tourist center."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are taken nearly everywhere in cities and towns, contactless is the norm, and Apple Pay and Google Pay are widely accepted. Amex is patchier at small spots. The odd neighborhood pub, bakery or market stall is still cash only or sets a small card minimum.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "A little, for the small stuff", p: "You do not need much. Keep about 1,000 to 2,000 Kč in small notes for pubs off the tourist strip, markets, tips, paid restrooms and small towns. A 200 note is far easier to spend than a 2,000.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Easy, but avoid the yellow ones", p: "Bank ATMs (ČSOB, Komerční banka, Česká spořitelna, Raiffeisenbank, UniCredit) are all over the cities. Avoid the bright yellow standalone Euronet machines at tourist sites, which charge the most and push the dollar conversion. Read the on-screen fee and decline \"convert to dollars.\"", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> with contactless for nearly everything, plus a backup card from a different bank.",
      "Get a <b>no-foreign-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "You will need little cash, so plan to pull a modest amount of koruna once you land rather than buying it at home."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters and currency kiosks, the rates are poor.",
      "Pull koruna from a <b>bank ATM</b> (ČSOB, Komerční banka, Česká spořitelna, Raiffeisenbank) and <b>decline \"convert to USD.\"</b>",
      "Avoid the bright yellow Euronet ATMs, even the ones at the airport and in the arrivals hall."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card or phone</b> for shops, supermarkets (Albert, Billa, Lidl, Tesco), restaurants, museums and transit.",
      "<b>Cash</b> for neighborhood pubs, market stalls, small-town bakeries, tips and paid public toilets.",
      "In tourist-area restaurants, check the bill for a cover charge (couvert) or service charge before you add a tip.",
      "<b>Always choose koruna</b>, never dollars, on every card terminal and ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in koruna, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "Ignore the \"0% commission\" street exchange booths; a bank ATM gives you a fairer rate with less hassle."
    ], cta: null }
  ],

  cash: {
    rate: 22, cur: "CZK", round: 100, defaultIndex: 1,
    rateNote: "Rough guide at about 22 koruna to the dollar in mid-2026, so 100 Kč is roughly $4.50 and 1,000 Kč about $45. The koruna moves against the dollar, so check a current converter before you travel.",
    styles: [
      { n: "Budget", per: 45, cash: 0.3, room: 60 },
      { n: "Mid-range", per: 100, cash: 0.25, room: 120 },
      { n: "Comfort", per: 240, cash: 0.2, room: 240 }
    ]
  },

  connectivity: {
    works: "Very good, and cheap. The three networks, O2, T-Mobile and Vodafone, all give strong 4G and growing 5G across Prague, the other cities and most of the countryside, with only the odd dead spot in deep forest or on rural train lines. A local prepaid SIM is easy to buy, and eSIMs from Airalo, Nomad, Ubigi or Holafly work well if your phone supports them. You do not need mobile data to pay for anything, cards and contactless stand on their own, so data is really just for maps, transit apps and calling a taxi."
  },

  // TOURIST TAX / FEES (high-churn, verified to Jul 2026 knowledge; confirm the Prague figure).
  // Czechia levies a local accommodation fee ("poplatek z pobytu"), capped by national law at
  // 50 Kč per person per night. Municipalities set their own rate up to that cap: Prague charges
  // the full 50 Kč, many tourist towns charge up to it, and lots of small places charge nothing.
  // Children under 18 are exempt, and the fee applies only to the first 60 consecutive nights.
  tax: {
    unit: "perPersonPerNight",
    currency: "CZK",
    capNights: 60,
    note: "A small local accommodation fee, capped by national law at 50 Kč per person, per night, and added to your hotel bill. The rate is set by each municipality up to that cap. Children under 18 are exempt, and it applies only to the first 60 consecutive nights.",
    regions: [
      { key: "prague", label: "Prague", rate: 50, note: "Prague charges the full national maximum of 50 Kč per person, per night." },
      { key: "towns", label: "Other cities and tourist towns", rate: 30, note: "Karlovy Vary, Český Krumlov, Brno, Plzeň and other towns set their own fee up to the 50 Kč cap; many popular ones are at or near it, so this is a middle estimate." },
      { key: "other", label: "Villages and countryside", rate: 0, note: "Many small municipalities charge no accommodation fee at all." }
    ]
  },

  currencyHeading: "The koruna, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "At about 22 koruna to the dollar in mid-2026, 100 Kč is roughly $4.50, 500 Kč about $23, and 1,000 Kč about $45. To sanity-check a price fast, divide the koruna figure by 22." },
    { sym: "smallnotes", k: "Notes and coins", v: "Notes run 100, 200, 500, 1,000, 2,000 and 5,000 Kč; coins are 1, 2, 5, 10, 20 and 50 Kč. Small shops and pubs dislike breaking the 2,000 and 5,000, so ask the ATM for a mix where you can, and spend the big notes in supermarkets." },
    { sym: "usd", k: "It's koruna, not euros", v: "Czechia is in the EU but does not use the euro; it uses the koruna (Kč). Some tourist-area hotels, shops and restaurants will take euros, but the rate they give is poor, so pay in koruna whenever you can." },
    { sym: "tip", k: "Tipping is light", v: "No US-style percentage is expected. Round up, or leave about 10% for good restaurant service, usually by telling the server the total when you pay. See the tipping section below." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "A small city fee, plus money back on shopping.",
    text: "Prague and many Czech tourist towns add a small <b>local accommodation fee</b> to your room, capped by national law at <b>50 Kč per person, per night</b> (Prague charges the full amount), with <b>children under 18 exempt</b>. Everyday prices already include VAT, a <b>21%</b> standard rate with a reduced <b>12%</b> on things like hotel stays and restaurant food, so the figure on the tag or menu is what you pay. If you shop, non-EU visitors can reclaim part of the 21% VAT on goods (not services): spend <b>over 2,000 Kč</b> in one store, ask for a tax-free form, keep the goods unused, and have customs stamp it when you leave the EU. After the refund operator's fee, expect back roughly 12 to 17%, not the full 21%. There is no separate departure tax; it is built into your airfare."
  },

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> Card terminals and ATMs in tourist areas love to offer to charge you in dollars (dynamic currency conversion). It quietly adds 3 to 8%. Choose koruna every time.",
    "<b>Skip the bright yellow Euronet ATMs.</b> They cluster around the tourist sights, charge high fees, and push the dollar-conversion trick. Use a bank machine instead: ČSOB, Komerční banka, Česká spořitelna, Raiffeisenbank or UniCredit.",
    "<b>Avoid the street exchange booths.</b> The tourist-area kiosks (\"směnárna\") that advertise \"0% commission\" often give a terrible rate, or quote one rate and hand over less. A Czech law lets you cancel a bad exchange within three hours, but it is far simpler to pull koruna from a bank ATM and skip them.",
    "<b>Read the bill, and pick your taxi.</b> Some tourist-area restaurants add a cover charge (couvert) for bread or a service charge, so check before you tip. For taxis, order through Bolt or Uber or have your hotel call one, rather than hailing on the street, where overcharging is a long-running Prague problem."
  ],

  tippingHeading: "Round up, or about 10% for good service.",
  tipping: "Tipping in Czechia is light and not the US 18 to 20%. In a restaurant, leave around 10% for good service, or just round up at a casual spot. The local habit is to tell the server the total you want to pay, tip included, when they take your card or cash, rather than leaving coins on the table and walking off. Card terminals often have no tip line, so a <b>cash tip</b> is the easy way to do it. In tourist-area restaurants, check whether a service charge is already on the bill before adding more. Round up for taxis and in pubs, and leave 20 to 50 Kč for hotel porters or housekeeping. None of it is obligatory; staff are paid a wage.",

  faqs: [
    { q: "Do I need cash in Czechia?", a: "Not much. Prague and the Czech cities are very card-friendly, with contactless almost everywhere. Keep about 1,000 to 2,000 Kč on hand for neighborhood pubs, markets, tips and paid restrooms, and top up at a bank ATM if you run low. Cards and your phone cover nearly everything else." },
    { q: "Should I pay in koruna, dollars or euros in Czechia?", a: "Always koruna. If a card terminal or ATM offers to charge you in dollars, decline; that dynamic currency conversion adds roughly 3 to 8%. And although some tourist spots accept euros, the rate they give is poor, so the koruna price is the better deal." },
    { q: "What is the best ATM to use in Prague?", a: "Use a bank-branded machine: ČSOB, Komerční banka, Česká spořitelna, Raiffeisenbank or UniCredit. Avoid the bright yellow standalone Euronet ATMs that cluster around the tourist sights, which charge high fees and push the dollar conversion. Read the on-screen fee and decline \"convert to dollars.\"" },
    { q: "Do you tip in Czechia?", a: "Lightly. Around 10% for good restaurant service, or just round up at casual spots and for taxis, and 20 to 50 Kč for hotel porters or housekeeping. Tell the server the total you want to pay, tip included, when they take your card or cash; a cash tip is easiest since terminals often have no tip line. Check for a service charge before adding more." },
    { q: "What is Czechia's tourist tax?", a: "A local accommodation fee, capped nationally at 50 Kč per person, per night, and added to your hotel bill. Prague charges the full 50 Kč; other towns set their own up to that cap, and many small places charge nothing. Children under 18 are exempt, and it applies only to the first 60 consecutive nights." },
    { q: "How much cash should I bring for a week in Czechia?", a: "For two mid-range travelers, very roughly 3,000 to 5,000 Kč (about $140 to $230) in day-to-day cash across a week beyond your hotel, pulled from a bank ATM once or twice. Cards and your phone cover the great majority of spending; the cash is for pubs, markets, tips and the odd cash-only spot." }
  ],

  culture: {
    heading: "A little Czech goes a long way",
    intro: "Czech is a Slavic language and no one expects you to master it, but a Dobrý den on the way in and an Ahoj among friends, plus a story or two, mark you as a guest rather than a tourist.",
    phrases: [
      { mean: "Good day, a formal hello", say: "DOH-bree den", word: "Dobrý den" },
      { mean: "Hi and bye, informal", say: "AH-hoy", word: "Ahoj" },
      { mean: "Please, and you are welcome", say: "PROH-seem", word: "Prosím" },
      { mean: "Thank you", say: "DYE-koo-yih", word: "Děkuji" },
      { mean: "Cheers", say: "nah ZDRAH-vee", word: "Na zdraví" },
      { mean: "Delicious, excellent", say: "VEE-bor-neh", word: "Výborné" },
    ],
    tip: "Use <b>Dobrý den</b> (good day) when you walk into a shop or restaurant, and save the cheerful <b>Ahoj</b> for friends. Then raise a glass of the local beer: the Czechs invented <b>pilsner</b> and drink more beer per person than anyone else on Earth.",
    stories: [
      { img: "/czechia-culture-1.jpg",
        alt: "WPA-style illustration of the medieval astronomical clock on Prague's Old Town Hall tower, its blue and gold dials glowing and a small crowd gathered below in the square",
        h: "The oldest clock still ticking",
        p: "Prague's astronomical clock, the Orloj, has kept time on the Old Town Hall since 1410, making it the oldest working clock of its kind anywhere in the world. On the hour a little parade of the twelve apostles appears in the windows above the dial. Crowds still gather in the square to watch it strike.",
        note: "Good to know: the Orloj dates from 1410" },
      { img: "/czechia-culture-2.jpg",
        alt: "WPA-style illustration of a towering clay figure standing in a moonlit cobbled lane of old Prague as a bearded scholar in a long robe reaches up with a slip of parchment",
        h: "The clay giant of Prague",
        p: "Legend says that centuries ago a learned rabbi in Prague's old Jewish quarter shaped a giant from the clay of the riverbank and brought it to life with a sacred word, to guard his people. The creature was called the Golem. It is one of Europe's most famous folk tales, and Prague still tells it with pride.",
        note: "Say it: the Golem of Prague" },
      { img: "/czechia-culture-3.jpg",
        alt: "WPA-style illustration of the stone Charles Bridge at dawn lined with weathered statues, Prague Castle and its cathedral rising through morning mist beyond the river",
        h: "A bridge fit for an emperor",
        p: "The great stone Charles Bridge was begun in 1357 under Emperor Charles IV, who built much of golden Prague, including the oldest university in central Europe. Legend says egg yolks were mixed into the mortar to make it strong, and it has stood for more than 650 years. Cross it at dawn, before the crowds, and it is pure magic.",
        note: "Good to know: begun in 1357 under Charles IV" },
    ],
    pride: "Czechs can seem reserved at first but warm quickly, and they are quietly proud of a country that gave the world pilsner beer and Art Nouveau, and a capital of a hundred spires that came through the centuries almost untouched."
  },

  spokes: [
    {
      slug: "taxis-and-apps",
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Which taxi app to use in Prague, and the airport scam to skip (2026) | True Trip Costs",
      description: "Which ride app to install for Prague (Bolt is cheapest, with Uber and the local Liftago), why the city's old taxi-overcharging reputation is mostly outdated, and how to leave the airport without the flat-fare trick. Checked July 2026.",
      h1: "Prague taxis, the apps, and the airport scam to skip",
      lede: "Prague's taxis had a bad name for years, but apps have quietly fixed most of it. Here is which one to install, the airport trick that still catches people, and how to get into the city cheaply.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Install <b>Bolt</b>, and <b>Uber</b> too. Both lock the price before you ride, and Bolt is usually the cheapest. Prague's old taxi-overcharging reputation is mostly <b>outdated</b> now that apps dominate, but unlicensed drivers and touts at tourist spots and the airport still quote inflated flat fares in unmarked cars, so <b>never take a taxi that approaches you</b>. If you need a traditional cab, use <b>AAA Radiotaxi</b> or <b>Liftago</b> with the meter running. From <b>Vaclav Havel airport</b>, use Bolt or Uber (the airport Wi-Fi is free, so you can book without a SIM) or the Airport Express bus.",
      sections: [
        {
          h: "Which app to install",
          p: [
            "<b>Bolt</b> is the cheapest and most-used ride app in Prague, and the one to have. <b>Uber</b> works well too and is usually only a little pricier, so many travelers keep both and compare. <b>Liftago</b> is a Czech app that dispatches licensed taxis and uses a bidding model, which makes it a useful backup when Bolt and Uber are both surging on a busy night. All three lock the fare before the car arrives, so there is nothing to argue about.",
            "The reassuring part is that Prague's fearsome taxi reputation was earned back in the 1990s and 2000s, when unregulated cabs ran the tourist areas and honest meters were rare. Apps changed that. For almost every ride now, opening Bolt or Uber is cheaper, transparent and paid in advance, and it sidesteps the whole problem below."
          ]
        },
        {
          h: "The scam, and the licensed-taxi rules",
          p: [
            "The trouble that remains comes from <b>unlicensed drivers and touts</b> at the big tourist spots, Wenceslas Square, Old Town Square, the main train station and the airport, who quote a flat price instead of running the meter and overcharge many times the real fare. The airport version is a friendly man, often with an <b>official-looking vest</b>, who offers a taxi at a fixed price like 800 koruna, walks you to an unmarked car, and lands a final bill two to four times higher with invented luggage, night or toll fees. The single rule that defeats all of it: <b>never get into a taxi that approaches you</b>, and always book the ride yourself.",
            "If you do want a traditional cab, licensed Prague taxis must display a rate card on the doors, run the meter from the moment you get in, and give a printed receipt, with the regulated rate around 36 koruna per kilometer. The two names to trust for a street or phone-booked cab are <b>AAA Radiotaxi</b> (call 14014) and <b>Liftago</b>. Confirm the meter is on before you move, and keep a map open to watch the route."
          ]
        },
        {
          h: "Getting in from the airport",
          p: [
            "At <b>Vaclav Havel airport</b> (PRG), Bolt and Uber are the cheapest and clearest options, and because the airport has free Wi-Fi you can order one without a local SIM. Uber is the official airport partner allowed to wait at the terminal curb, while for Bolt or Liftago you walk to the marked ride-hailing pickup zone. Reckon on roughly <b>550 to 700 koruna</b> to the centre by Bolt. Ignore anyone soliciting a ride inside or just outside arrivals.",
            "If you would rather take public transport, the <b>Airport Express</b> bus runs straight to the main train station for about 100 koruna, or the number <b>119</b> bus connects to metro line A for about 40 koruna and takes you into the centre. Both are cheap, quick and completely scam-proof."
          ]
        },
        {
          h: "Fares, paying and tipping",
          p: [
            "Pay in <b>Czech koruna</b>, not euros. The koruna is the currency, and euros are poorly accepted and get a bad rate where they are taken at all. In the apps you pay by card in koruna, and for a traditional taxi carry small koruna notes. On an app ride, tipping is not expected, though rounding up to the nearest 10 or 20 koruna is a normal gesture, and the same modest rounding is standard in a metered street taxi.",
            "For the wider money picture, including how much cash to carry and why to always pay in koruna rather than euros, see the <a href=\"/czechia\">Czechia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Uber or Bolt better in Prague?", a: "Both work well and lock the price before you ride. Bolt is usually 15 to 25 percent cheaper and is the local default, while Uber is a little pricier but familiar and is the app allowed to wait at the airport curb. Liftago, a Czech app that dispatches licensed taxis, is a handy backup when both are surging on a busy night." },
        { q: "Are Prague taxis a scam?", a: "The apps are safe and transparent. The risk is unlicensed drivers and touts at tourist spots and the airport who quote inflated flat fares in unmarked cars, a reputation earned back in the 1990s and 2000s. Use Bolt or Uber, and never get into a taxi that approaches you. If you need a street cab, use only AAA Radiotaxi or Liftago with the meter running." },
        { q: "How do I get from Prague airport to the city?", a: "Bolt or Uber are cheapest and clearest, and the airport's free Wi-Fi lets you book without a SIM; expect roughly 550 to 700 koruna to the centre by Bolt. The Airport Express bus runs to the main train station for about 100 koruna, or the number 119 bus connects to metro line A for about 40 koruna. Ignore drivers soliciting outside arrivals." },
        { q: "Do I pay in euros or koruna in Prague?", a: "Koruna. Czechia uses the koruna (CZK), and paying in euros, where it is accepted at all, gets a poor rate. The apps charge your card in koruna, and for a traditional taxi carry small koruna notes." }
      ],
      sources: {
        links: [
          { label: "Prague Trip: a 2026 guide to Prague taxis, Uber and Bolt, prices and the airport scams", url: "https://www.prague-trip.com/practical/taxis-uber-bolt/", type: "guide" },
          { label: "Best Prague Guide: a 2026 breakdown of Bolt, Uber, the licensed-taxi rules and the regulated meter rate", url: "https://bestpragueguide.com/en/blog/prague-taxi-uber-bolt", type: "guide" },
          { label: "How in Czech: a 2026 Prague airport taxi guide covering Uber, Bolt and the pickup zones", url: "https://howinczech.com/prague-airport-taxi-guide", type: "guide" }
        ],
        judgment: "App availability and the regulated meter rate can change, and airport pickup arrangements shift, so treat any koruna figures as a recent read and check the price in your app. The advice to never take a taxi that approaches you is the constant. Checked July 2026."
      }
    },
    {
      slug: "bringing-your-pet",
      live: true,
      topic: "pets",
      title: "Bringing a dog or cat to Czechia from the US (2026): the EU process, and the Czechia-specific parts | True Trip Costs",
      description: "Moving to Czechia with a pet from the US: why it runs on the shared EU health-certificate process, no quarantine and no titer, plus what is specific to Czechia on arrival and after you settle in. Checked July 2026.",
      h1: "Bringing your dog or cat to Czechia.",
      lede: "Czechia runs on the single EU pet-entry process for a US-origin dog or cat: microchip, rabies in the right order, and an EU health certificate on a 10-day clock. No quarantine, no rabies titer. Here is what that means for Czechia, and the local parts worth knowing.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Czechia uses the <b>shared EU pet-entry process</b>, so there is no separate national permit and nothing unusual at the border. Your pet needs an <b>ISO microchip, a rabies vaccination given after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS</b>, then must enter within <b>10 days</b> of that endorsement. There is <b>no quarantine and no rabies titer</b> for a pet coming straight from the US. The full step-by-step, the ordering trap, and the current fees are on one page: see <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a>. Below are the Czechia-specific notes. Coming home to the US is the easy part.",
      sections: [
        {
          h: "Czechia runs on the EU process",
          p: ["There is no Czechia-only pet permit and no national quarantine. Bringing a dog or cat into Czechia from the US is the standard EU move: an ISO microchip first, a rabies vaccination after the chip, then an EU Animal Health Certificate completed by a USDA-accredited vet and endorsed by APHIS, with the pet arriving within 10 days of endorsement. A first rabies shot adds a 21-day wait before travel.", "Because the core process is identical across the EU (and the countries that follow its rules), we do not repeat it per country. The full sequence, the microchip-before-rabies trap that costs people the most time, the 10-day clock, and the current APHIS endorsement fees all live on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Read that first, then come back for the Czechia notes."]
        },
        {
          h: "The Czechia-specific parts",
          p: ["At the border, Czech customs may ask to see the endorsed certificate and confirm the microchip, and pets should enter through a designated traveller point of entry, which Prague airport is. There is no dog or cat tapeworm rule for Czechia, unlike Ireland, Finland or Malta.", "The Czech-specific parts are local. Czechia requires dogs to be microchipped, and cities and municipalities charge an annual dog fee and ask owners to register the dog locally, with the amount set by each municipality. There is no strict national banned-breed list. Register and pay the local dog fee once you have an address."]
        },
        {
          h: "Coming back to the US is the easy part",
          p: ["Good news for the return trip: a dog flying home to the US from Czechia is on the simplest CDC path, typically a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement.", "For the wider picture, including how Czechia compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Czechia",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-czech-republic",
        note: "The US-side steps and the EU health certificate for Czechia. Czechia applies the shared EU process, and the destination's own authorities are the final word on the day."
      },
      faqs: [
        {
          q: "Is there anything Czechia-specific beyond the EU rules?",
          a: "Mostly local. Czechia has no tapeworm rule (that applies to Ireland, Finland and Malta). Dogs must be microchipped, and municipalities charge an annual dog fee and expect local registration, with the amount set by each city. Register once you have an address."
        },
        {
          q: "Does my pet have to go into quarantine in Czechia?",
          a: "No. Czechia applies the shared EU pet-entry process, which has no quarantine and no rabies titer for a pet coming straight from the US. Your pet needs a microchip, a rabies vaccination in the right order, and an EU Animal Health Certificate endorsed by APHIS, then must arrive within 10 days of endorsement. See our EU pet health certificate page for the full process."
        },
        {
          q: "Do I need to quarantine my pet coming back to the US from Czechia?",
          a: "No. A dog returning to the US from Czechia is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details."
        }
      ],
      sources: {
        links: [
          {
            label: "True Trip Costs: the EU pet health certificate, the shared microchip, rabies and certificate process for all EU countries including Czechia",
            url: "/eu-pet-health-certificate",
            type: "internal"
          },
          {
            label: "USDA APHIS: pet travel from the United States to Czechia, the US-side steps and EU health certificate",
            url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-czech-republic",
            type: "gov"
          },
          {
            label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, for the return leg",
            url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html",
            type: "gov"
          }
        ],
        judgment: "Czechia applies the shared EU pet-entry framework, set by the EU and administered on the US side by APHIS, not by us. The process is stable in substance, though the EU certificate format changes on 1 October 2026, which we cover on the EU pet health certificate page. The local registration and any breed rules vary, so we point you to the official pages and dated this July 2026."
      }
    }
  ]
};
