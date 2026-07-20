export default {
  slug: "thailand",
  live: true,
  name: "Thailand",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  sources: {
    changed: "Sources added. Confirmed the TDAC is mandatory and free. The long-discussed 300-baht arrival fee for air travelers was not being collected when this guide was checked, and because the proposal has changed repeatedly, confirm before departure.",
    links: [
      { label: "Thai Immigration Bureau: the Thailand Digital Arrival Card (TDAC), mandatory and free, submitted within 72 hours of arrival", url: "https://tdac.immigration.go.th/", type: "gov" },
      { label: "Tourism Authority of Thailand: the 7% VAT refund for tourists and how to claim it at the airport", url: "https://www.tourismthailand.org/Articles/plan-your-trip-vat-tax-refund", type: "tourism" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "1669", note: "1669 is the medical and ambulance line. 1155 reaches the tourist police, who speak English.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "medium",
  region: "Asia",
  signals: { cardFriendliness: 2, cashNeed: 4, taxRisk: 2, atmRisk: 5 },
  title: "Money in Thailand (2026): Cash, Cards, ATMs, the 220 Baht Fee and Tipping | True Trip Costs",
  description: "How to handle money in Thailand as a US traveler in 2026: cash vs card, the steep ATM fee and how to beat it, the dollar conversion trap, tipping and the ++ service charge, and the tourist VAT refund. Checked July 2026.",
  h1: "Money in Thailand, sorted.",
  lede: "A calm, current plan for the money side of your trip: what you can tap, where you still need baht, and the small rules that trip up first-timers.",
  hero: {
    img: "/thailand-hero.jpg",
    h: 1375,
    alt: "A quiet Thai old-town street at dusk with string lights and lanterns, a temple spire in the distance, a food cart to one side, a lone figure walking away, and a steaming bowl of noodle soup on a wooden table in the foreground"
  },
  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',
  verdict: "Thailand leans cash, especially once you leave the malls. <b>Cards</b> work at hotels, shopping centers and mid to upscale restaurants, but you need <b>baht</b> for street food, markets, tuk-tuks and most of daily life. Bring a <b>no-fee Visa or Mastercard</b>, pull baht from a <b>bank ATM</b> in larger amounts to beat the flat fee, and one rule everywhere: <b>always choose baht, never dollars</b>. Tipping is light here, not expected, but a little cash is appreciated.",
  meter: {
    heading: "Thailand is cash-first once you step outside the malls.",
    cashPct: 60,
    note: "A rough feel for everyday spending. Bangkok and the big tourist hubs are increasingly card and QR friendly at malls, hotels and chains. But street food, markets, tuk-tuks, taxis, islands and small towns run on cash, and a 7-Eleven on almost every corner will break a big note. Keep baht on you."
  },
  trio: [
    { sym: "card", kind: "warn", h: "Your card", verd: "Fine in malls and hotels", p: "Visa and Mastercard work at shopping centers, hotels, chains and mid to upscale restaurants, and contactless is spreading in Bangkok. But street food, markets, tuk-tuks and small shops are cash only, and the local QR system (PromptPay) is mostly for people with a Thai bank account.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Needed every day", p: "Baht is the everyday currency for street food, markets, tuk-tuks, taxis and small shops. Carry small notes (20, 50 and 100 baht) and use a 7-Eleven to break 500s and 1,000s.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Work, but the fee stings", p: "Thai ATMs charge a flat foreign-card fee, commonly 220 baht (about $7) per withdrawal, and higher at some banks. AEON ATMs are the cheapest at 150 baht. Withdraw a large amount at once (up to 20,000 to 30,000 baht), use a bank ATM, and decline the \"convert to dollars\" offer.", cta: { label: "See fee-saving cards", href: "#" } }
  ],
  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Get a <b>no-foreign-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide, which softens Thailand's flat fee; Wise and Revolut are low-fee.",
      "Bring a <b>no-fee Visa or Mastercard</b> for malls, hotels and restaurants, and pack a backup card from a different bank.",
      "File the free <b>Thailand Digital Arrival Card (TDAC)</b> online within 72 hours of your flight. It is mandatory and free, and not a money charge.",
      "<b>Set a travel notice</b> with your bank so a street-stall tap on day one does not get blocked."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Airport ATMs charge the same flat fee and push the dollar conversion hard, so make <b>one larger withdrawal</b> from a bank ATM and <b>decline \"convert to USD.\"</b>",
      "Skip the airport currency counters; their rates are poor.",
      "Grab some small notes for a taxi, and use the official airport taxi desk or a ride app."
    ], cta: { label: "Find fee-saving cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Cash</b> for street food, markets, tuk-tuks, taxis and small shops.",
      "<b>Card</b> for malls, hotels and bigger restaurants.",
      "<b>Always choose baht</b> on every card terminal and ATM screen.",
      "Withdraw in <b>big chunks</b> so the flat ATM fee hurts less, and keep small notes handy."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in baht, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 5 to 8%.",
      "This is true at shop terminals and at ATMs alike."
    ], cta: null }
  ],
  cash: {
    rate: 33, cur: "THB", round: 500, defaultIndex: 1,
    rateNote: "Rough guide at about 33 baht to the dollar. Thailand stays inexpensive day to day, especially for street food, markets and local transport.",
    styles: [ { n: "Budget", per: 20, cash: 0.7, room: 30 }, { n: "Mid-range", per: 40, cash: 0.55, room: 80 }, { n: "Comfort", per: 85, cash: 0.4, room: 190 } ]
  },
  connectivity: {
    works: "Yes across the cities, main routes and the popular islands, with strong 4G and growing 5G in Bangkok, Phuket and Chiang Mai. Signal drops in the northern mountains, jungle parks and the interiors of smaller islands."
  },
  // TOURIST TAX (high-churn, verified Jul 2026). Thailand has no hotel or tourist tax
  // today. A 300-baht arrival fee has been discussed for years but is still not being
  // collected, with no start date, and if it ever begins it would be bundled into airfare.
  // Typical economy round trip per person from major US gateways, as a verified
  // RANGE, never a point. Sourced from fare-tracker averages (Kayak, momondo,
  // Skyscanner published route data), deliberately wide to cover season and
  // gateway. HIGH-CHURN: re-verify on the tourist-tax cadence. The calculator
  // prefills the midpoint, feeds low/high into the confidence range until the
  // traveler enters their own fare, and hides the estimate if this block is absent.
  flight: { low: 800, high: 1400, checked: "Jul 2026", checkedISO: "2026-07-18" },
  tax: {
    none: true,
    note: "Thailand has no hotel or tourist tax today. A 300-baht arrival fee (about 9 dollars) has been talked about for years but is still not being collected. If it ever starts, it would be added to your airfare, not your hotel bill."
  },
  currencyHeading: "The baht, in plain terms.",
  facts: [
    { sym: "baht", k: "Quick conversion", v: "About 33 baht to $1 in mid-2026. A quick gut check: 100 baht is roughly $3, and 1,000 baht about $30. Prices show the baht symbol, the curly mark before or after the number." },
    { sym: "coins", k: "Notes and coins", v: "Notes run 20, 50, 100, 500 and 1,000 baht. The 100 and 1,000 are both brownish and easy to mix up, so keep small notes separate. A 7-Eleven will break big ones." },
    { sym: "tip", k: "Tipping is light", v: "Thailand sits between the US and Japan: not expected, but a little cash is appreciated. Round up a taxi, leave 20 to 100 baht at a sit-down meal, and hand it to the person rather than the counter." },
    { sym: "atm", k: "The ATM fee", v: "Thai ATMs add a flat foreign-card fee, commonly 220 baht (about $7) a withdrawal, on top of anything your own bank charges. AEON machines are cheapest at 150 baht. Pull a large amount at once so the flat fee hurts less." }
  ],
  taxfree: {
    label: "Taxes and refunds",
    heading: "The \"plus plus\" on your bill, and money back on shopping.",
    text: "Two things worth knowing. At mid to upscale restaurants and hotels you may see a price written as \"500++\", which means a <b>10% service charge plus 7% VAT</b> get added on top, roughly 17% more than the listed number. That service charge stands in for a tip at those places. Separately, Thailand runs a <b>VAT refund for tourists</b>: at shops showing the \"VAT Refund for Tourists\" sign, spend at least 2,000 baht in one store on the same day and 5,000 baht in total, show your passport and ask for the P.P.10 form, keep the goods unused, and claim at the airport when you leave. After fees you get a bit under the full 7% back. One more to watch: a proposed <b>300 baht entry fee</b> for air arrivals has been debated for years and delayed again, and as of mid-2026 it is not yet collected, so there is nothing to pay yet."
  },

  // High-churn fees and taxes, each tracked on its own with a status, an effective
  // date, a primary source and the date we last checked it. Rendered as a small,
  // always-open card after the tax-free section. The 300-baht arrival fee is still
  // only a proposal, with no confirmed start date and no clean government page, so
  // it carries no source link and an unmistakable "proposed" marker.
  keyFacts: [
    { label: "300-baht air arrival fee", value: "300 baht (about $9), if it ever starts", status: "proposed", effective: null, source: null, checked: "2026-07-10" }
  ],

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> At a card terminal or ATM, choosing dollars (dynamic currency conversion) quietly adds 5 to 8%. Pick baht every time.",
    "<b>The ATM fee is flat, so withdraw big.</b> Most Thai ATMs charge about 220 baht per foreign-card withdrawal no matter the amount, with AEON cheapest at 150. Take out a large sum at once rather than many small pulls, and use a bank ATM, not a mini-mart machine.",
    "<b>Take your card back.</b> Thai ATMs dispense your cash first and return your card second, the reverse of US machines. Grab the card, or it may be pulled back in after a few seconds.",
    "<b>Check the bill for \"++\" or a service charge.</b> Mid and upscale spots add 10% service plus 7% VAT. If a 10% service charge is already there, you do not need to tip on top.",
    "<b>Mind the 100 and 1,000 baht notes.</b> They are similar shades of brown and easy to confuse in a dark taxi or after a drink. Keep small notes in a separate pocket."
  ],
  tippingHeading: "Tip lightly, in cash.",
  tipping: "Thailand sits between the US and Japan: tipping is not expected, but a small amount in cash is genuinely appreciated. At street stalls and local eateries, just round up or leave loose change. At a sit-down restaurant, 20 to 100 baht or about 10% is plenty when there is no service charge, so check the bill first, since mid and upscale places add a 10% service charge. Round up taxi fares, skip tips on pre-negotiated tuk-tuk rides, and for a massage hand 50 to 100 baht to the therapist directly rather than leaving it at the counter. Tip in baht, not dollars, and where you can, hand it over with your right hand.",
  faqs: [
    { q: "Do I need cash in Thailand?", a: "Yes, every day. Street food, markets, tuk-tuks, taxis and small shops are cash only, even though malls, hotels and bigger restaurants take cards. Carry small baht notes and break large ones at a 7-Eleven." },
    { q: "How do I avoid the Thailand ATM fee?", a: "You cannot avoid the flat foreign-card fee entirely, commonly 220 baht with AEON cheapest at 150, but you can shrink its impact: withdraw a large amount at once, up to the 20,000 to 30,000 baht limit, rather than several small pulls. A card that reimburses ATM fees, like Charles Schwab, helps too." },
    { q: "Should I pay in baht or dollars in Thailand?", a: "Always baht. If a card machine or ATM offers to charge you in dollars, decline. That dynamic currency conversion adds roughly 5 to 8%, and your own bank's rate is better." },
    { q: "Do you tip in Thailand?", a: "It is not expected, but a little cash is appreciated. Round up taxis, leave 20 to 100 baht at a sit-down meal when there is no service charge, and tip a masseuse directly. Check the bill first, since mid and upscale places add a 10% service charge." },
    { q: "Is there a tourist tax or entry fee for Thailand?", a: "A 300 baht entry fee for air arrivals has been proposed and delayed for years, and as of mid-2026 it is still not being collected, so there is nothing to pay yet. The free Thailand Digital Arrival Card (TDAC), filed online within 72 hours of your flight, is separate and already required." },
    { q: "How much cash should I bring for a week in Thailand?", a: "For two mid-range travelers, very roughly 9,000 to 14,000 baht (about $275 to $425) in day-to-day cash across a week, beyond your hotel, pulled in two or three ATM visits. Adjust for your style and how much you put on a card." }
  ],

  culture: {
    heading: "A few words of Thai go a long way",
    intro: "Thai is written in its own graceful script and no one expects you to read it, but a Sawatdee with a little bow and a story or two mark you as a guest rather than a tourist. Thailand is called the Land of Smiles for good reason.",
    phrases: [
      { mean: "Hello", say: "sah-wah-DEE", word: "Sawatdee", native: "สวัสดี" },
      { mean: "Thank you", say: "kop-KOON", word: "Khop khun", native: "ขอบคุณ" },
      { mean: "Please, kindly", say: "gah-roo-NAH", word: "Karuna", native: "กรุณา" },
      { mean: "Delicious", say: "ah-ROY", word: "Aroy", native: "อร่อย" },
      { mean: "No worries, it is fine", say: "my pen rai", word: "Mai pen rai", native: "ไม่เป็นไร" },
      { mean: "Beautiful", say: "sooay", word: "Suay", native: "สวย" },
    ],
    tip: "Greet people with a <b>wai</b>, palms pressed together with a small bow, and say <b>sawatdee khrap</b> if you are a man, <b>sawatdee kha</b> if you are a woman. Two customs matter: the head is the most sacred part of the body, so do not touch it, and the feet are the lowest, so never point them at a person or a Buddha image. Always speak of the royal family and the Buddha with respect.",
    stories: [
      { img: "/thailand-culture-1.jpg",
        alt: "WPA-style illustration of a layperson kneeling with palms pressed together to offer rice to a line of saffron-robed monks with golden alms bowls at dawn, a golden temple spire behind, soft mist",
        h: "The quiet ritual of dawn",
        p: "Each morning before the heat, saffron-robed monks walk barefoot through towns and villages with their alms bowls, and people kneel to offer rice and food, earning merit as they have for centuries. It is calm, wordless and deeply respectful. Watch quietly from a little distance and you glimpse the soul of Thai life.",
        note: "Good to know: the dawn alms round is called tak bat" },
      { img: "/thailand-culture-2.jpg",
        alt: "WPA-style illustration of a joyful Songkran water festival, a laughing woman splashing water from a bowl and a man pouring a bucket, water arcing in the air, a decorated temple and frangipani behind",
        h: "The world's biggest water fight",
        p: "Songkran, the Thai new year in April, began as a gentle rite of pouring water to wash away the old year and bless one's elders. It has grown into a joyous nationwide water fight, streets full of people of all ages soaking each other with buckets and hoses in the tropical heat. It is pure, drenching fun.",
        note: "Good to know: Songkran is the Thai new year in April" },
      { img: "/thailand-culture-3.jpg",
        alt: "WPA-style illustration of a wooden boat piled with tropical fruit paddled by a vendor in a conical hat at a floating market on a canal, stilt houses along the water in warm light",
        h: "A market that floats",
        p: "Long before roads, Thai life flowed along the canals, and vendors still paddle wooden boats piled with mangoes, coconuts and steaming noodles, selling straight from the water at the old floating markets. Wooden houses stand on stilts along the banks. It is a glimpse of a Thailand shaped by its rivers.",
        note: "Say it: a floating market, talat nam" },
    ],
    pride: "Thais are gentle, gracious and quick to smile, and they take real pride in a kingdom that was never colonized and in a culture of deep courtesy. Show respect for their faith and their king, greet people with a wai, and the Land of Smiles opens right up."
  },

  // HUB-AND-SPOKE SPOKES. Data-driven, single-source, each independently dated,
  // rendered by components/Spoke.astro via src/pages/[slug]/[spoke].astro.
  spokes: [
    {
      slug: "tdac",
      live: true,
      topic: "visas",
      title: "Do I need the Thailand Digital Arrival Card (TDAC)? (2026) | True Trip Costs",
      description: "Yes: everyone entering Thailand needs the free TDAC, filed online within 72 hours before arrival. It is not a visa (US citizens get 60 days visa-free), it is free, and the sites charging for it are not official. Checked July 2026.",
      h1: "Do I need the Thailand Digital Arrival Card (TDAC)?",
      lede: "Short answer: yes, everyone does, and it is free. The TDAC is not a visa, US citizens still get 60 days visa-free, but you must file it online before you fly. Here is how, and how not to pay for something free.",
      checked: "Jul 2026",
      checkedISO: "2026-07-08",
      answer: "Yes. Since <b>May 1, 2025</b>, everyone flying, driving or sailing into Thailand must file the free <b>Thailand Digital Arrival Card (TDAC)</b> online, within <b>72 hours before arrival</b>, at the official site <b>tdac.immigration.go.th</b>. It is <b>not a visa</b>: US citizens still enter visa-free for <b>60 days</b> as tourists. The card is <b>free</b>, so any site charging you for it is not the real one.",
      official: {
        label: "Official Thailand TDAC portal",
        url: "https://tdac.immigration.go.th",
        note: "This is the Thai Immigration Bureau's own site, and the card is free here. Fill it in within 72 hours before you arrive, one per traveler (the portal lets a family file up to 10 at once), and save the QR confirmation to your phone."
      },
      expediter: false,
      sections: [
        {
          h: "What it is, and what it is not",
          p: [
            "The TDAC replaced the <b>paper TM6</b> arrival card Thailand used for years. It is a short online declaration of who you are and where you are staying, and <b>almost every foreign traveler needs one for every entry</b>, tourists and long-stay visa holders alike. The only people who skip it are those staying entirely in an airport's international transit area without clearing immigration.",
            "It is <b>not a visa and not an entry permit</b>. For US citizens, Thailand grants a <b>60-day visa exemption</b> on arrival for tourism, free, with no advance visa. The TDAC is simply the arrival form you file before you land, and airlines check for it at boarding."
          ]
        },
        {
          h: "How to file it, step by step",
          p: [
            "It is free and takes about ten minutes."
          ],
          steps: [
            "Within 72 hours (3 days) of your arrival, go to the official site, tdac.immigration.go.th. Go there directly, not through a search ad.",
            "Enter your passport and trip details: arrival date, flight, and where you are staying.",
            "Submit. Traveling as a family or group? The portal lets you file up to 10 cards in one go.",
            "Save the confirmation, a QR code, to your phone, and a screenshot as backup. Show it if asked at boarding or on arrival."
          ]
        },
        {
          h: "It is free, so do not pay for it",
          p: [
            "This is the trap. Because the TDAC is <b>mandatory and free</b>, a crowd of lookalike sites rank in search and charge a service fee to file the same government form for you. <b>The Thai Immigration Bureau does not charge for the TDAC.</b> If a site asks for a payment, it is not the official one. Use only tdac.immigration.go.th.",
            "One heads-up for later: Thailand has been testing a new arrival app (THIM), expected around late 2026. Until it officially replaces the website, the official website above is the way to file."
          ]
        },
        {
          h: "How long you can stay, and one change to watch",
          p: [
            "US citizens get <b>60 days</b> visa-free for tourism, and you can extend once by <b>30 days</b> at a Thai immigration office for <b>฿1,900</b>, for up to 90 days total. You will need a passport valid at least <b>6 months</b> beyond entry, and immigration may ask to see an onward ticket.",
            "Worth knowing before you count on the full 60: in <b>May 2026 the Thai cabinet approved cutting the visa exemption back to 30 days</b>, but as of mid-2026 that had <b>not yet been published in the Royal Gazette</b>, so the 60-day rule was still in force. Because this is exactly the kind of thing that changes quietly, confirm the current limit on the official page before you book a long trip.",
            "For how money works on the ground, cards, cash, ATMs and the rest, see the <a href=\"/thailand\">Thailand money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need the Thailand Digital Arrival Card, and is it a visa?", a: "You need the TDAC (it has been mandatory for almost all foreign arrivals since May 1, 2025), but it is not a visa. It is a free online arrival form filed within 72 hours before you arrive, at tdac.immigration.go.th. US citizens separately get a 60-day visa exemption for tourism, so most Americans need the TDAC but no visa." },
        { q: "Is the TDAC free, and where is the official site?", a: "It is completely free. The official site is tdac.immigration.go.th, run by the Thai Immigration Bureau. Any site charging a fee to file the TDAC is a third party, not the government. File it directly on the official site within 72 hours of arrival, one per traveler." },
        { q: "How long can US citizens stay in Thailand without a visa?", a: "US citizens get a 60-day visa exemption on arrival for tourism, extendable once by 30 days (฿1,900) at a Thai immigration office, for up to 90 days total. Note that in May 2026 Thailand approved reducing the exemption to 30 days, though it had not yet taken effect by mid-2026, so confirm the current limit before you travel." },
        { q: "When do I file the TDAC, and what if I have a layover?", a: "File it online within 72 hours (3 days) before you arrive, and save the QR confirmation. If you are purely transiting and stay inside the international transit area without clearing immigration, you do not need one. Once you pass through immigration, even with an onward flight, you do." }
      ],
      sources: {
        links: [
          { label: "Thai Immigration Bureau: the official TDAC portal, free to file, required within 72 hours before arrival", url: "https://tdac.immigration.go.th", type: "gov" },
          { label: "US Department of State: the country information pages, the official router for entry and exit requirements by destination", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html", type: "gov" }
        ],
        judgment: "Thailand's visa-exemption length is under active change (a cut from 60 to 30 days was approved in May 2026 but not yet in force by mid-2026), and its arrival-card system is being updated, so confirm the current rule and the official site before you travel. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      live: true,
      topic: "cash",
      title: "Do I need cash in Thailand, or can I use cards? (2026) | True Trip Costs",
      description: "Thailand still runs on cash for street food, markets and taxis, though cards work in hotels and malls. The catch is the flat ATM fee (now often 250 to 350 baht), so withdraw big and rarely, or bring dollars to exchange. Checked July 2026.",
      h1: "Do I need cash in Thailand, or can I use cards?",
      lede: "Short answer: yes, carry baht, Thailand is still a cash country for the best bits, even though cards work in cities. The thing to plan around is the flat fee Thai ATMs charge foreign cards. Here is how to keep it cheap.",
      checked: "Jul 2026",
      checkedISO: "2026-07-08",
      answer: "Cash for the good stuff, cards in the city. <b>Street food, markets, taxis and temple entry are cash-only</b>, while Visa and Mastercard work at hotels, malls, chains and supermarkets (Amex less so). The catch is the <b>flat ATM fee</b>: Thai banks charge a fixed amount per foreign-card withdrawal, <b>once 220 baht, now often 250 (Visa) to 350 (Mastercard)</b>, on top of your own bank. So <b>withdraw large amounts rarely</b>, always choose <b>baht not dollars</b>, and keep small notes for the street.",
      sections: [
        {
          h: "Cash still rules the best parts of Thailand",
          p: [
            "Thailand is modernising fast, but it is <b>still a cash-first country</b> where it matters most to travelers: <b>street food, night markets, taxis and tuk-tuks, temple entry and small shops are cash-only</b> or strongly prefer it. Cards, Visa and Mastercard, are reliable at <b>hotels, shopping malls, chain restaurants, supermarkets and tour operators</b>, with Amex accepted less often. Contactless is spreading in Bangkok but assume nothing outside the cities.",
            "Thailand's own QR system, <b>PromptPay</b>, is what locals scan for everything, but it needs a Thai bank account, so <b>tourists cannot use it</b>. You will pay cash or card while everyone around you taps a phone."
          ]
        },
        {
          h: "The flat ATM fee, and how to beat it",
          p: [
            "This is the Thailand money quirk to plan around. Every Thai bank ATM charges a <b>flat fee per foreign-card withdrawal</b>, regardless of how much you take out. For years it was <b>220 baht</b>; in 2026 many machines now show <b>250 baht for Visa and up to 350 for Mastercard</b>, and that is <b>on top of</b> your home bank's fees. Because it is flat, the fix is simple: <b>withdraw the maximum (around 20,000 to 30,000 baht) as rarely as you can</b>, not small amounts often.",
            "Two more habits: always <b>decline the ATM's offer to charge you in dollars</b> and choose baht (the machine's conversion is far worse), and use <b>ATMs attached to a bank branch</b> during the day rather than standalone machines, so if one swallows your card you can walk in and retrieve it."
          ]
        },
        {
          h: "The cheaper route: exchange cash at a city booth",
          p: [
            "Here is the trick experienced visitors use. Because of that flat ATM fee, <b>bringing clean US dollar notes and exchanging them at a city exchange booth</b> often beats the ATM, and it beats airport and hotel rates by a wide margin. The well-known chains are <b>SuperRich, Vasu and K79</b>, with rates you can check online before you go. Change only a little at the airport for your taxi and SIM, then the bulk in the city.",
            "One practical note on notes: ATMs tend to spit out <b>1,000 baht bills</b>, which street vendors and taxis struggle to break. Withdraw an odd amount (say 19,900 rather than 20,000) to force out smaller notes, and keep a stack of 20s, 50s and 100s for daily spending."
          ]
        },
        {
          h: "Tipping, and the wrap",
          p: [
            "Tipping is <b>not traditionally expected</b> in Thailand, though rounding up a taxi fare or leaving small change is appreciated, and smarter restaurants may add a <b>10% service charge</b> to the bill. Do not feel obliged beyond that.",
            "For the fuller money picture, what things cost and how to carry it, see the <a href=\"/thailand\">Thailand money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Thailand, or can I use cards?", a: "You need cash. Street food, markets, taxis and temple entry are cash-only, while Visa and Mastercard work at hotels, malls, chains and supermarkets (Amex less so). Carry small baht notes for daily spending and use a card for larger purchases at established places. Thailand's PromptPay QR system needs a Thai bank account, so tourists cannot use it." },
        { q: "How much do Thai ATMs charge foreign cards?", a: "Thai banks charge a flat fee per foreign-card withdrawal, on top of your own bank's fees. It was long 220 baht, but in 2026 many ATMs show 250 baht for Visa and up to 350 for Mastercard. Because it is a flat fee, withdraw the maximum (around 20,000 to 30,000 baht) as rarely as possible, and always choose baht rather than dollars at the machine." },
        { q: "Is it cheaper to use an ATM or exchange cash in Thailand?", a: "Because of the flat ATM fee, bringing clean US dollar bills and exchanging them at a city exchange booth (SuperRich, Vasu or K79) often works out cheaper, and beats airport and hotel rates. A good approach: exchange a small amount at the airport for your taxi, then change the bulk at a city booth, and use ATMs for top-ups by withdrawing large amounts." },
        { q: "Should I choose baht or dollars at a Thai ATM?", a: "Always choose baht. If the ATM offers to charge you in your home currency (dynamic currency conversion), decline it, the rate is markedly worse. Choosing baht lets your own card network do the conversion at a much better rate. The same applies to card terminals in shops and restaurants." }
      ],
      sources: {
        links: [
          { label: "Bank of Thailand: the central bank and official Thai baht reference", url: "https://www.bot.or.th", type: "gov" },
          { label: "US Department of State: Thailand country information, general money and safety context for travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html", type: "gov" }
        ],
        judgment: "Thai ATM fees rose recently (from 220 baht toward 250 to 350 depending on the card network) and exchange rates move, and much of this is our practical read, so check the fee on the ATM screen and treat amounts as a guide. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Bangkok taxi meter tricks and the airport rank, sorted (2026) | True Trip Costs",
      description: "How Bangkok taxi drivers dodge the meter, which app to install (Grab and Bolt), and the step-by-step way to take the official metered taxi from Suvarnabhumi airport instead of the fake flat-rate touts. Checked July 2026.",
      h1: "Bangkok taxi meters, and the airport rank done right",
      lede: "Thai taxis are cheap and mostly honest, but a few habits around tourists cost money, and the airport has a specific trap. Here is how the meter works, which app to keep as a backup, and the exact way to use the official taxi rank.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Bangkok taxis are metered and inexpensive, and most drivers are fine, but some refuse the meter and quote a flat price two to four times higher, especially to and from tourist spots. The fix is simple: get in, say <b>meter please</b>, and if the driver will not use it, get out and take the next one. Keep <b>Grab</b> (and <b>Bolt</b> as a cheaper backup) on your phone for a fixed price with no argument. At <b>Suvarnabhumi</b> airport, use the official public-taxi counter on <b>Level 1</b>, not the drivers who approach you upstairs with a printed price list.",
      official: {
        label: "Suvarnabhumi Airport, official public-taxi page",
        url: "https://suvarnabhumi.airportthai.co.th/service/transportation/detail/304",
        note: "At <b>Suvarnabhumi</b>, the public-taxi machines and counter are on <b>Level 1</b>, between <b>Gate 4 and Gate 7</b>. Take a ticket, go to the numbered bay, and the fare is the <b>meter</b> plus a <b>50 baht</b> airport surcharge plus any expressway tolls you agree to. The <b>Airport Rail Link</b> train into the city is cheaper still."
      },
      sections: [
        {
          h: "The meter, and the broken-meter flat rate",
          p: [
            "By law, Bangkok taxis must run the meter, and a metered ride across the city is genuinely cheap. The common problem is a driver, often parked outside a mall, market or tourist sight, who refuses to switch it on and instead quotes a flat fare that runs <b>two to four times</b> the metered price. This is not dangerous, it is just overpaying. The clean response is to open the door, say <b>meter</b>, and if he declines, close it and wave down the next cab, of which there are always many.",
            "The other well-worn trick is the <b>tuk-tuk</b> that offers a suspiciously cheap tour, then steers you to a gem shop or tailor where the driver earns a commission and you lose an afternoon. Enjoy a tuk-tuk for a short, fun hop with the price agreed first, but treat any unusually cheap all-day offer as the setup it usually is. For getting somewhere specific, a metered taxi or an app is both cheaper and simpler."
          ]
        },
        {
          h: "Which app to install: Grab and Bolt",
          p: [
            "<b>Grab</b> is the dominant ride app in Thailand and the one to have. It shows a fixed price up front, so the meter question never comes up, and it can book both cars and licensed taxis. <b>Bolt</b> also operates in Bangkok and is often a little cheaper, so many travelers keep both and compare. If you have used Grab elsewhere in Southeast Asia, it is the same app and login.",
            "Using an app is the single easiest way to avoid every meter argument, because the fare is agreed before the driver arrives and the route is tracked on your phone. It is especially worth it late at night, from nightlife areas, or any time your Thai is not up to negotiating. Cash is still widely accepted in the apps, and you can also link a card."
          ]
        },
        {
          h: "The airport rank, done right",
          p: [
            "Suvarnabhumi is where the sharpest trick lives. As you come through, people will approach you offering a <b>taxi</b> or <b>limousine</b>, sometimes waving a <b>printed sheet of flat fares</b>. Those drivers are not the official rank, and the printed price lists are exactly what the airport warns against, so walk past them and go down to <b>Level 1</b>."
          ],
          steps: [
            "Go down to <b>Level 1</b> and find the public-taxi machines and counter, between <b>Gate 4 and Gate 7</b>.",
            "Take a ticket from the machine, which gives you a bay number and the driver's details.",
            "Go to the numbered bay and take that car. Insist the <b>meter</b> is running from the start.",
            "Expect to pay the <b>metered fare</b> plus a <b>50 baht</b> airport surcharge plus any <b>expressway tolls</b>, which you pay as you go.",
            "Cheaper still, take the <b>Airport Rail Link</b> train into the city, then a short taxi or app ride to your hotel."
          ]
        },
        {
          h: "Fares, paying and tipping",
          p: [
            "Metered city fares are low, and the fixed prices in Grab or Bolt are usually only a little higher for the convenience. In a street taxi, carry small baht notes, because drivers often cannot break a large bill, and watch that the meter is on from the start. The 50 baht airport surcharge and any expressway tolls are legitimate additions on an airport run, so those are not the scam; a refusal to use the meter at all is.",
            "Tipping is not expected, though rounding the fare up to the nearest 10 or 20 baht is common and appreciated. Don Mueang, the budget-airline airport, works the same way, with its own public-taxi counter, so apply the same rule there. For the wider money picture, including cash versus card, see the <a href=\"/thailand\">Thailand money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do Bangkok taxis use the meter?", a: "They are legally required to, and a metered ride is cheap. In practice some drivers, especially near tourist spots, refuse the meter and quote a flat fare two to four times higher. Get in, say meter please, and if the driver will not use it, get out and take the next cab. Using Grab or Bolt avoids the issue entirely, since the price is fixed in the app." },
        { q: "Which taxi app is best in Bangkok?", a: "Grab is the dominant ride app in Thailand and the one to install first, showing a fixed price before you ride and able to book cars or licensed taxis. Bolt also operates in Bangkok and is often slightly cheaper, so many travelers keep both and compare. Either removes the meter argument and tracks your route." },
        { q: "What is the official taxi from Suvarnabhumi airport?", a: "The official public taxi is on Level 1, between Gate 4 and Gate 7, where machines and a counter assign you a metered cab and bay number. The fare is the meter plus a 50 baht airport surcharge plus any expressway tolls. Ignore the drivers upstairs offering a taxi with a printed flat-rate list, and consider the cheaper Airport Rail Link train." },
        { q: "Are the printed taxi fare lists at the airport real?", a: "No. The official airport taxi is metered, so a driver waving a printed sheet of flat fares in the arrivals area is one of the touts the airport warns about, not the official rank. Go down to the Level 1 public-taxi counter, take a ticket, and insist the meter runs. A flat quote there is a sign to walk away." }
      ],
      sources: {
        links: [
          { label: "Suvarnabhumi Airport: the official public-taxi page, confirming the Level 1 location, the metered fare, and the 50 baht surcharge", url: "https://suvarnabhumi.airportthai.co.th/service/transportation/detail/304", type: "airport" },
          { label: "Suvarnabhumi Airport: the official ground-transport guide covering the taxi rank, rail link and other options", url: "https://suvarnabhumi.airportthai.co.th/service/airport-guide/detail/Transportation_BKK", type: "airport" },
          { label: "US Department of State: Thailand country information, general safety and local-travel context for US visitors", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Thailand.html", type: "gov" }
        ],
        judgment: "Airport fees, the surcharge and toll amounts, and app availability can change, so treat the figures as a recent read and check the airport's official page and your app before you ride. The meter-refusal habit varies by driver and location. Checked July 2026."
      }
    }
  ]
};
