export default {
  slug: "thailand",
  live: true,
  name: "Thailand",
  from: "United States",
  checked: "Jun 2026",
  checkedISO: "2026-06-28",
  title: "Money in Thailand (2026): Cash, Cards, ATMs, the 220 Baht Fee and Tipping | True Trip Costs",
  description: "How to handle money in Thailand as a US traveler in 2026: cash vs card, the steep ATM fee and how to beat it, the dollar conversion trap, tipping and the ++ service charge, and the tourist VAT refund. Checked June 2026.",
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
    styles: [ { n: "Budget", per: 20, cash: 0.7 }, { n: "Mid-range", per: 40, cash: 0.55 }, { n: "Comfort", per: 85, cash: 0.4 } ]
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
  ]
};
