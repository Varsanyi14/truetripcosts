export default {
  slug: "spain",
  live: true,
  name: "Spain",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  sources: {
    changed: "Sources added. Verified that Barcelona's tourist tax roughly doubled on 1 April 2026 (the regional Catalan rate plus the city surcharge now runs about 6 to 12 euros a person per night by category, capped at 7 nights, under-16s exempt, and the surcharge is set to keep rising to 2029), and that Spain's IVA refund for non-EU visitors has no minimum spend. The guide's figures are current.",
    links: [
      { label: "Barcelona City Council: the Catalan parliament's 2026 increase to the tourist tax and the city surcharge", url: "https://ajuntament.barcelona.cat/turisme/en/latest-news/news/the-parliament-of-catalonia-passes-an-increase-of-the-tourist-tax-1607097", type: "gov" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "112", note: "112 reaches every emergency service, with English-speaking operators available.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  rentalCommon: true,
  region: "Europe",
  signals: { cardFriendliness: 4, cashNeed: 2, taxRisk: 3, atmRisk: 4 },
  title: "Money in Spain (2026): Cards, Cash, ATMs, Tipping and the Tourist Tax | True Trip Costs",
  description: "How to handle money in Spain as a US traveler in 2026: cards work almost everywhere, the dollar conversion trap, bank ATMs vs Euronet, light tipping, the Catalonia and Balearic tourist taxes including Barcelona's 2026 rise, and the IVA refund with no minimum spend. Checked July 2026.",
  h1: "Money in Spain, sorted.",
  lede: "A calm, current plan for the money side of your trip: what you can tap, the little things you still want euros for, and the small rules that trip up first-timers.",
  hero: {
    img: "/spain-hero.jpg",
    h: 1375,
    alt: "A quiet Spanish old-town street at dusk with string lights overhead, whitewashed walls and teal shutters, red geraniums in pots, a bell tower silhouetted at the end, a lone figure walking away, a cat asleep on the cobbles, and a pan of paella with a glass of red wine, olives and bread on a wooden table in the foreground"
  },
  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',
  verdict: "Spain is very <b>card-friendly</b>. Visa and Mastercard work almost everywhere, contactless is the norm, and Apple Pay and Google Pay are widely accepted, with no PIN needed under about 50 euros. Bring a <b>no-fee Visa or Mastercard</b> for nearly everything, keep <b>40 to 50 euros</b> in small notes for tapas bars, markets, small towns and tips, and pull euros from a <b>bank ATM</b> (CaixaBank, BBVA, Santander) rather than the blue and yellow Euronet machines. One rule above all: <b>always choose euros, never dollars</b>. Tipping is light. If you stay in Catalonia, including Barcelona, or the Balearic Islands, budget the per-night tourist tax, which rose in 2026.",
  recentChange: {
    date: "Apr 2026",
    text: "<b>Catalonia raised its tourist tax on 1 April 2026.</b> Barcelona is the headline: the combined charge (the regional IEET plus the city's own surcharge) now runs roughly <b>6 to 12 euros and up per person per night</b> depending on the accommodation, and the city surcharge is set to keep rising about a euro a year through 2029. It is capped at the first 7 nights, and under-16s are exempt. The rest of Catalonia rose too, more modestly, phased in through 2027. This only affects Catalonia and the Balearic Islands; most of Spain, including Madrid, Andalusia and Valencia, still has no tourist tax."
  },
  meter: {
    heading: "Spain is very card-friendly, but keep some euros for tapas and small towns.",
    cashPct: 28,
    note: "A rough feel for everyday spending. Cards and contactless work almost everywhere, in shops, restaurants, supermarkets, museums and on city transit, and over 90% of city businesses take a tap. You still want a little cash for tapas bars, neighborhood markets, small family-run spots, tips and rural Andalusia, where a card minimum of 5 euros or a cash-only sign still turns up."
  },
  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are taken nearly everywhere, contactless is standard, and tap needs no PIN under about 50 euros. Apple Pay and Google Pay are widely accepted. Amex is patchier at small spots. Some small bars, bakeries and shops set a card minimum, often 5 euros.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "A little, for the small stuff", p: "You do not need much, but keep 40 to 50 euros in small notes and coins. Tapas bars, neighborhood markets, small village spots, tips and the odd cash-only place still run on cash, and a 20 is easier to spend than a 50.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy, pick a bank machine", p: "Bank ATMs from CaixaBank, BBVA, Santander or Sabadell are everywhere in towns and cities. Avoid the blue and yellow standalone Euronet (and Cashzone) machines at tourist sites, which charge the most and push the dollar conversion. Read the on-screen fee, and always decline \"convert to dollars.\"", cta: { label: "See low-fee cards", href: "#" } }
  ],
  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> with contactless for nearly everything, and pack a backup card from a different bank.",
      "Get a <b>no-foreign-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "You will need little cash, so plan to pull a modest amount once you land rather than buying euros at home.",
      "Most US issuers no longer need a travel notice, but it does not hurt to flag the trip so a first-day tap is not blocked."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters and the standalone airport ATMs, which carry the poorest rates and highest fees.",
      "Pull a modest amount of euros from a <b>bank ATM</b> (CaixaBank, BBVA or Santander, not the blue Euronet box) and <b>decline \"convert to USD.\"</b>",
      "Heading into the city? You can usually <b>tap your card or phone</b> on the metro and buses in Madrid and Barcelona, no cash needed."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card or contactless</b> for almost everything: restaurants, shops, supermarkets, museums and transit.",
      "<b>A little cash</b> for tapas bars, markets, tips and the rare cash-only or card-minimum spot.",
      "<b>Always choose euros</b> on every card terminal and ATM screen, never dollars.",
      "When you need a machine, pick a Spanish bank ATM, not a standalone tourist-zone one."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in euros, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%, and at a Euronet ATM the markup can be far worse.",
      "Same at the machine: if it asks to charge you with or without conversion, choose <b>without conversion</b> (sin conversion), the charge-in-euros option."
    ], cta: null }
  ],
  cash: {
    rate: 0.88, cur: "EUR", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 1.14 dollars to the euro in mid-2026, so roughly 0.88 euros per dollar. Spain is card-first, so this is the smaller, cash-in-hand slice of your spending.",
    styles: [ { n: "Budget", per: 45, cash: 0.40, room: 75 }, { n: "Mid-range", per: 95, cash: 0.28, room: 140 }, { n: "Comfort", per: 175, cash: 0.18, room: 280 } ]
  },
  connectivity: {
    works: "Yes, and coverage is among the best in Europe. Spain has near-universal 4G and widespread 5G across the cities, the coast and the main tourist routes, including the islands. Signal can dip in remote mountains and sparsely populated inland areas."
  },
  // TOURIST TAX (high-churn, verified Jul 2026). Only some Spanish regions charge a
  // per-person, per-night tax, collected by your accommodation. Catalonia (Barcelona)
  // and the Balearic Islands are the main ones. Madrid, Andalusia and the Canary Islands
  // charge nothing today. Children under 16 are usually exempt.
  // Typical economy round trip per person from major US gateways, as a verified
  // RANGE, never a point. Sourced from fare-tracker averages (Kayak, momondo,
  // Skyscanner published route data), deliberately wide to cover season and
  // gateway. HIGH-CHURN: re-verify on the tourist-tax cadence. The calculator
  // prefills the midpoint, feeds low/high into the confidence range until the
  // traveler enters their own fare, and hides the estimate if this block is absent.
  flight: { low: 500, high: 1100, checked: "Jul 2026", checkedISO: "2026-07-18" },
  tax: {
    unit: "perPersonPerNight",
    currency: "EUR",
    capNights: null,
    note: "A per-person, per-night tax that only some regions charge, collected by your accommodation. Children under 16 are usually exempt, and the amount can rise with hotel category.",
    regions: [
      { key: "barcelona", label: "Barcelona", rate: 7, capNights: 7, note: "Barcelona's tax is a Catalan regional charge plus a city surcharge that rose in 2026. It is capped at 7 nights, and the exact amount rises with hotel category." },
      { key: "catalonia", label: "Rest of Catalonia", rate: 1, capNights: 7 },
      { key: "balearics", label: "Balearic Islands (Mallorca, Ibiza, Menorca)", rate: 3, note: "The Balearic sustainable-tourism tax is higher in summer and lower in winter, and drops by half after the eighth night. This is a typical high-season figure." },
      { key: "other", label: "Elsewhere in Spain", rate: 0, note: "Most of Spain, including Madrid, Andalusia and the Canary Islands, has no tourist tax today." }
    ]
  },
  currencyHeading: "The euro, in plain terms.",
  facts: [
    { sym: "euro", k: "Quick conversion", v: "About 1.14 dollars to 1 euro in mid-2026, so euro prices are roughly the same as dollars, just a touch more: a 10 euro lunch is about 11 and a half dollars, and 100 euros is about 114. Prices show the euro sign, usually after the number, as in \"12 \u20AC\"." },
    { sym: "coins", k: "Notes and coins", v: "Notes run 5, 10, 20, 50, 100, 200 and 500 euros, though anything above 50 is awkward to spend and many shops will not take it. The 1 and 2 euro pieces are coins, not notes, so keep a small stash of coins and small notes for cafes, markets and tips." },
    { sym: "card", k: "Contactless is king", v: "Tap to pay is everywhere, with no PIN under about 50 euros, and Apple Pay and Google Pay are widely accepted. Locals also use Bizum, an instant phone-to-phone system, but it needs a Spanish bank account, so it is not your tool. Carry a chip-and-PIN card as backup." },
    { sym: "tip", k: "Tipping is light", v: "Spain is not a US-style tipping culture. The price you see includes IVA (VAT) and staff earn a real wage, so there is no expected percentage. Locals round up or leave small change (the \"propina\"), and that is plenty." }
  ],
  taxfree: {
    label: "Taxes and refunds",
    heading: "The regional tourist taxes, and money back on shopping.",
    text: "Two things to know. Spain has <b>no national tourist tax</b>. Only some regions charge one, and it is collected by your accommodation, not built into the room rate. <b>Catalonia</b> (including Barcelona, the Costa Brava and the Costa Dorada) charges a per-person, per-night tax that rose on 1 April 2026: Barcelona now runs roughly <b>6 to 12 euros and up</b> per person per night combined, the rest of Catalonia much less, capped at 7 nights with under-16s exempt. The <b>Balearic Islands</b> (Mallorca, Menorca, Ibiza, Formentera) charge a sustainable-tourism \"ecotasa,\" roughly <b>1 to 4 euros</b> per person per night in high season and less off-season. Most of Spain, including Madrid, Andalusia and Valencia, charges nothing. Separately, if you shop, non-EU visitors can reclaim Spain's <b>21% IVA (VAT)</b> on goods, and Spain is generous here: it scrapped its minimum-purchase rule, so <b>any amount can qualify</b>. Ask for a tax-free form with your passport, keep the goods unused, and validate at a <b>DIVA kiosk</b> at the airport when you leave the EU. After the operators' fees you get back roughly 12 to 17%, so very small refunds may not be worth the queue."
  },
  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> At a shop terminal or an ATM, choosing dollars (dynamic currency conversion) quietly adds 3 to 8%, and a Euronet machine can mark it up far more. Pick euros every time. At a Spanish ATM the prompt reads \"con conversion\" or \"sin conversion,\" so choose sin conversion, without conversion.",
    "<b>Skip the blue and yellow Euronet ATMs.</b> The standalone machines clustered at airports, stations and tourist sites charge flat fees around 4 to 7 euros and push the dollar conversion hardest. Use a machine attached to a real bank (CaixaBank, BBVA, Santander, Sabadell) and read the on-screen fee before you confirm.",
    "<b>Watch your pockets in crowds.</b> Barcelona and Madrid pickpockets work Las Ramblas, the metro, and the crowds around the Sagrada Familia and Puerta del Sol. Keep cards and phone in a front or zipped pocket, and be wary of the rosemary-sprig and clipboard-petition distractions.",
    "<b>Some small spots are cash, or have a minimum.</b> A few tapas bars, bakeries and market stalls are cash-preferred or set a card minimum around 5 euros, so keep a little cash and some coins on you.",
    "<b>Mind the terrace surcharge.</b> Some places charge a little more to sit on the outdoor terrace (a \"suplemento de terraza\"), and a rare tourist spot may add a service charge. Neither is a tip, so read the bill before adding one."
  ],
  tippingHeading: "Tip lightly, in cash.",
  tipping: "Spain is not a US-style tipping culture, and this surprises many first-timers. The menu price already includes IVA, and staff are paid a real wage, so there is no expected percentage and nobody will chase you for one. Locals simply round up or leave the small change (the \"propina\"). For good table service you can leave a euro or two, or up to roughly 5 to 10% at a nicer restaurant, but it is a kind gesture rather than an obligation. At a bar or counter, or for a quick coffee, a few coins are plenty and often nothing at all. Leave any tip in cash, since card terminals rarely pass it to the staff. A euro or two for a porter or for housekeeping is appreciated, and rounding up a taxi fare is normal. Do not feel pressured to tip 15 to 20% the way you would at home.",
  faqs: [
    { q: "Do I need cash in Spain?", a: "Less than you would think. Cards and contactless work almost everywhere, and over 90% of city businesses take a tap, including Apple Pay and Google Pay. But carry 40 to 50 euros in small notes for tapas bars, neighborhood markets, tips, small towns and the occasional cash-only or card-minimum spot, and top up at a bank ATM as needed." },
    { q: "Should I pay in euros or dollars in Spain?", a: "Always euros. If a card terminal or ATM offers to charge you in dollars, decline. That dynamic currency conversion adds roughly 3 to 8%, and a Euronet machine can be far worse. At a Spanish ATM the option is worded \"sin conversion,\" without conversion, which is the charge-in-euros choice." },
    { q: "What ATM should I use in Spain?", a: "Use a machine attached to a real bank, such as CaixaBank, BBVA, Santander or Sabadell. Avoid the blue and yellow standalone Euronet and Cashzone machines at airports, stations and tourist sites; they charge flat fees around 4 to 7 euros and push the dollar conversion. Always choose to be charged in euros." },
    { q: "Do you tip in Spain?", a: "Only lightly. The price includes IVA and staff earn a real wage, so tipping is optional. Locals round up or leave small change, and a euro or two, or about 5 to 10% at a nicer restaurant, is generous. Leave it in cash, since card tips often do not reach the staff, and do not feel you need to tip US-style." },
    { q: "Is there a tourist tax in Spain, and can I get an IVA refund?", a: "There is no national tourist tax. Only Catalonia (including Barcelona, where it rose in April 2026) and the Balearic Islands charge a per-person, per-night tax, collected at your accommodation, capped and with children exempt; most of Spain charges nothing. Separately, non-EU visitors can reclaim the 21% IVA on shopping, and Spain has no minimum spend, so any purchase can qualify: ask for the tax-free form, keep the goods unused, and validate at a DIVA kiosk when you leave. After fees you get roughly 12 to 17% back." },
    { q: "How much cash should I bring for a week in Spain?", a: "For two mid-range travelers, very roughly 250 to 350 euros in day-to-day cash across a week, beyond your hotel, pulled in a couple of bank-ATM visits. Cards and contactless cover most of the rest. Adjust for your style and how much you tap versus pay in cash." }
  ],

  culture: {
    heading: "A little Spanish goes a long way",
    intro: "A few words and a couple of stories that turn you from a tourist into a guest. Spaniards warm up fast when you meet them halfway, over tapas, in a plaza, at a long lunch.",
    phrases: [
      { mean: "Hello", say: "OH-lah", word: "Hola" },
      { mean: "Please", say: "por fah-VOR", word: "Por favor" },
      { mean: "Thank you", say: "GRAH-thyahs", word: "Gracias" },
      { mean: "Cheers", say: "sah-LOOD", word: "Salud" },
      { mean: "Delicious", say: "keh REE-koh", word: "Qué rico" },
      { mean: "Beautiful", say: "keh boh-NEE-toh", word: "Qué bonito" },
    ],
    tip: "In Spain, <b>c</b> before e or i and the letter <b>z</b> are pronounced like the th in think, so gracias sounds like GRAH-thyahs and Barcelona like Bar-the-LOH-na. It is the quickest way to sound less like a visitor from the Americas.",
    stories: [
      { img: "/spain-culture-1.jpg",
        alt: "WPA-style illustration of Don Quixote in armor on a bony horse charging a row of windmills, his squire Sancho Panza on a donkey behind, dry gold plain of La Mancha",
        h: "Tilting at windmills",
        p: "In Cervantes' Don Quixote, published in 1605 and often called the first modern novel, the old knight charges a row of windmills he is sure are giants. The phrase tilting at windmills, for fighting imaginary enemies, comes straight from it. Every Spaniard knows the scene.",
        note: "Say it: Don Quijote (don kee-HOH-teh)" },
      { img: "/spain-culture-2.jpg",
        alt: "WPA-style illustration of a flamenco dancer in a red ruffled dress mid-stamp, arms raised, a guitarist in shadow in a warm Andalusian courtyard at night",
        h: "The soul called duende",
        p: "Flamenco, the song, guitar and dance of Andalusia, is not choreography so much as raw feeling. Spaniards call the goosebump moment, when a performer truly catches fire, duende, a kind of soul that cannot be faked. Admire it aloud and you speak their language.",
        note: "Say it: duende (DWEN-deh)" },
      { img: "/spain-culture-3.jpg",
        alt: "WPA-style illustration of the Court of the Lions in the Alhambra of Granada at golden hour, slender marble arches and the lion fountain, still reflecting pools",
        h: "When Granada was Moorish",
        p: "For nearly 800 years much of Spain was al-Andalus, under Muslim rule, and the Alhambra in Granada is its masterpiece, all fountains, arches and carved light. Understanding Spain as a meeting place of cultures, not just one, shows you see it clearly.",
        note: "Good to know: al-Andalus lasted nearly 800 years" },
    ],
    pride: "Spaniards live out loud and late: long lunches, the sobremesa lingering at the table, dinner near midnight, the streets full of people. Join in rather than rush, and you will be treated like one of the family."
  },

  spokes: [
    {
      slug: "bringing-your-pet",
      live: true,
      topic: "pets",
      title: "Bringing a dog or cat to Spain from the US (2026): the EU process, and the Spain-specific parts | True Trip Costs",
      description: "Moving to Spain with a pet from the US: why it runs on the shared EU health-certificate process, no quarantine and no titer, plus what is specific to Spain on arrival and after you settle in. Checked July 2026.",
      h1: "Bringing your dog or cat to Spain.",
      lede: "Spain is a popular EU destination for US pet owners, and there is nothing Spain-specific to fear at the border. It runs on the single EU pet-entry process: microchip, rabies in the right order, and an EU health certificate on a 10-day clock. No quarantine, no rabies titer. Here is what that means for Spain, and the local parts worth knowing.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Spain uses the <b>shared EU pet-entry process</b>, so there is no separate Spanish permit and nothing unusual at the border. Your pet needs an <b>ISO microchip, a rabies vaccination given after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS</b>, then must enter Spain within <b>10 days</b> of that endorsement. There is <b>no quarantine and no rabies titer</b> for a pet coming straight from the US. The full step-by-step, the ordering trap, and the current fees are on one page: see <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a>. Below are the Spain-specific notes. Coming home to the US is the easy part.",
      sections: [
        {
          h: "Spain runs on the EU process",
          p: [
            "There is no Spain-only pet permit and no national quarantine. Bringing a dog or cat into Spain from the US is the standard EU move: an ISO microchip first, a rabies vaccination after the chip, then an EU Animal Health Certificate completed by a USDA-accredited vet and endorsed by APHIS, with the pet arriving within 10 days of endorsement. A first rabies shot adds a 21-day wait before travel.",
            "Because the process is identical across all 27 member countries, we do not repeat it per country. The full sequence, the microchip-before-rabies trap that costs people the most time, the 10-day clock, and the current APHIS endorsement fees all live on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Read that first, then come back for the Spain notes."
          ]
        },
        {
          h: "The Spain-specific parts",
          p: [
            "At the border, Spanish customs may ask to see the endorsed certificate and confirm the microchip, and pets should enter through a designated traveller point of entry, which the major airports are. There is no dog or cat tapeworm rule for Spain, unlike Ireland, Finland or Malta.",
            "After you arrive, the Spanish-specific part is registration and, if you have a dog considered potentially dangerous, a licence. Spain requires pets to be microchipped and registered in the regional animal database once you have a local address, handled by a local vet. Spain also maintains a category of potentially dangerous dogs (perros potencialmente peligrosos), covering certain breeds such as some bull and mastiff types, which requires the owner to hold a licence, take out liability insurance, and muzzle and leash the dog in public. If your dog may fall in that category, check the requirement before you travel, since the rules also vary a little by region."
          ]
        },
        {
          h: "Coming back to the US is the easy part",
          p: [
            "Good news for the return trip: a dog flying home to the US from Spain is on the simplest CDC path, typically a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement.",
            "For the wider picture, including how Spain compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."
          ]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Spain",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-spain",
        note: "The US-side steps and the EU health certificate for Spain. Spain applies the shared EU process, and the destination's own authorities are the final word on the day."
      },
      faqs: [
        { q: "Does my pet have to go into quarantine in Spain?", a: "No. Spain applies the shared EU pet-entry process, which has no quarantine and no rabies titer for a pet coming straight from the US. Your pet needs a microchip, a rabies vaccination in the right order, and an EU Animal Health Certificate endorsed by APHIS, then must arrive within 10 days of endorsement. See our EU pet health certificate page for the full process." },
        { q: "Is there anything Spain-specific beyond the EU rules?", a: "Yes. Spain has no tapeworm rule (that applies to Ireland, Finland and Malta). But you register your pet in the regional animal database once you settle, and Spain has a potentially dangerous dog category covering some bull and mastiff breeds that requires an owner licence, liability insurance, and muzzling in public. Rules vary a little by region, so check if your dog may qualify." },
        { q: "Do I need to quarantine my pet coming back to the US from Spain?", a: "No. A dog returning to the US from Spain is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details." }
      ],
      sources: {
        links: [
          { label: "True Trip Costs: the EU pet health certificate, the shared microchip, rabies and certificate process for all EU countries including Spain", url: "/eu-pet-health-certificate", type: "internal" },
          { label: "USDA APHIS: pet travel from the United States to Spain, the US-side steps and EU health certificate", url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-spain", type: "gov" },
          { label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, for the return leg", url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html", type: "gov" }
        ],
        judgment: "Spain applies the shared EU pet-entry framework, set by the EU and administered on the US side by APHIS, not by us. The process is stable in substance, though the EU certificate format changes on 1 October 2026, which we cover on the EU pet health certificate page. The Spanish potentially-dangerous-dog licence and regional registration vary locally, so confirm them for your region. We point you to the official pages and dated this July 2026."
      }
    }
  ]
};
