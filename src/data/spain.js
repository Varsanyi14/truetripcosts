export default {
  slug: "spain",
  iso2: "es",
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
    },
    {
      slug: "tourist-tax",
      live: true,
      topic: "tourist-tax",
      title: "Spain's tourist tax in 2026: only some regions charge it, and where you pay nothing | True Trip Costs",
      description: "Spain has no national tourist tax. Only Catalonia (including a Barcelona surcharge) and the Balearic Islands charge one in 2026, while Madrid, Andalucia and Valencia charge nothing. What it costs, and why Barcelona keeps rising. Checked Jul 2026.",
      h1: "Spain's tourist tax, region by region.",
      lede: "Unlike Italy or France, Spain has no national tourist tax. Whether you pay one depends entirely on the region: Barcelona and the Balearic Islands charge a real fee, while Madrid, Seville and the Costa del Sol charge nothing at all. Here is the 2026 map.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Spain has <b>no national tourist tax</b>. In 2026 only <b>two regions charge a general one</b>: <b>Catalonia</b> (which includes an extra <b>Barcelona city surcharge</b>) and the <b>Balearic Islands</b> (Mallorca, Menorca, Ibiza, Formentera). Most of the country, including <b>Madrid, Andalucia</b> (Seville, Malaga, the Costa del Sol) <b>and Valencia</b>, charges <b>nothing</b>. Where it applies it is <b>per person, per night</b>, collected at your accommodation. <b>Barcelona</b> is the priciest, roughly <b>7 to 15 euros a night</b> by hotel category in 2026 after an <b>increase on 1 April 2026</b>, capped at <b>7 nights</b>. The Balearic <b>ecotasa</b> runs about <b>1 to 4.50 euros</b> per adult per night, higher in summer.",
      sections: [
        {
          h: "Where you pay, and where you do not",
          p: [
            "This is the useful part to know before you book. As of 2026, a general tourist tax applies only in <b>Catalonia</b> and the <b>Balearic Islands</b>. Everywhere else the answer is mostly no: <b>Madrid</b> has none, and <b>Andalucia</b>, which covers <b>Seville, Malaga and the whole Costa del Sol</b>, has none. <b>Valencia</b> and the <b>Basque Country</b> have none. A handful of individual towns have added small local charges (<b>Santiago de Compostela</b> is the notable one), but they are the exception.",
            "So if you are choosing between, say, a few nights in Barcelona and the same in Madrid or Seville, the tourist tax is a real, if small, point in the mainland cities' favour. Where it does apply, it is <b>per person, per night</b> and collected at your accommodation, not baked into the price you paid online. For the wider money picture see the <a href=\"/spain\">Spain money guide</a>."
          ]
        },
        {
          h: "Catalonia and Barcelona",
          p: [
            "In Catalonia the tax has <b>two parts</b>: a <b>regional rate</b> set by the Catalan government that applies across the region, and, in Barcelona only, an <b>extra city surcharge</b> on top. Both are <b>per person, per night</b>, and the total is <b>capped at 7 nights</b>. Guests <b>under 16 are exempt</b>. Catalonia <b>raised its rates on 1 April 2026</b>, with further increases planned into 2027.",
            "The combined effect in <b>Barcelona</b> in 2026 is roughly <b>7 to 15 euros per person, per night</b> depending on the hotel category, which puts it among the higher city taxes in Europe. Outside Barcelona, only the regional part applies, so the rest of Catalonia is cheaper, though the 2026 law now lets other Catalan towns add a surcharge of up to 4 euros too."
          ]
        },
        {
          h: "The Balearic Islands ecotasa",
          p: [
            "The Balearic Islands (<b>Mallorca, Menorca, Ibiza and Formentera</b>) have charged a <b>Sustainable Tourism Tax</b>, widely called the <b>ecotasa</b>, since 2016. It is <b>per person, per night</b> and <b>seasonal</b>: higher in the summer peak, roughly <b>1 to 4.50 euros</b> a night by accommodation category, and much less in the low season. <b>Under-16s are exempt.</b>",
            "There is a built-in break for longer stays: from around the <b>ninth night</b>, the ecotasa is <b>halved</b>. As elsewhere, it is collected at your accommodation, so keep a little cash or expect it on the final bill."
          ]
        },
        {
          h: "What to expect at checkout",
          p: [
            "Where the tax applies, it is almost never in the online total. Expect it <b>at check-in or checkout</b>, sometimes in cash. The figures here are a <b>2026 read</b>, and both Catalonia and Barcelona are on a rising schedule, so confirm the per-night amount with your accommodation when you book.",
            "There is no legitimate way to avoid the tax where it is charged, and you should not try. The honest levers are the built-in ones: the <b>7-night cap</b> in Catalonia, the <b>halving from the ninth night</b> in the Balearics, a <b>lower accommodation category</b>, and simply knowing that much of mainland Spain does not charge it at all."
          ]
        }
      ],
      faqs: [
        { q: "Does Spain have a tourist tax?", a: "Not nationally. In 2026 only Catalonia (including a Barcelona city surcharge) and the Balearic Islands charge a general tourist tax. Madrid, Andalucia (Seville, Malaga, the Costa del Sol) and Valencia charge nothing. A few individual towns such as Santiago de Compostela have small local charges." },
        { q: "How much is the tourist tax in Barcelona in 2026?", a: "Roughly 7 to 15 euros per person per night depending on the hotel category, combining the Catalan regional rate and the Barcelona city surcharge. It rose on 1 April 2026 and is capped at 7 nights per stay. Guests under 16 are exempt. Confirm the exact amount with your hotel, as the rate is on a rising schedule." },
        { q: "Is there a tourist tax in Madrid, Seville or the Costa del Sol?", a: "No. Madrid and all of Andalucia, which includes Seville, Malaga and the Costa del Sol, have no general tourist tax in 2026. If you see an older article suggesting otherwise, check its date: proposals surface periodically but none is in force there." },
        { q: "How much is the Balearic ecotasa?", a: "Roughly 1 to 4.50 euros per adult per night in the summer peak, by accommodation category, and less in the low season. Children under 16 are exempt, and from about the ninth night the charge is halved. It is collected at your accommodation on Mallorca, Menorca, Ibiza and Formentera." }
      ],
      sources: {
        links: [
          { label: "Idealista: a July 2026 guide to Spain's tourist taxes, the Barcelona increase and which regions charge one", url: "https://www.idealista.com/en/news/legal-advice-in-spain/2026/07/07/856013-spain-s-tourist-tax-barcelona-hike-new-city-levies-for-2026", type: "guide" }
        ],
        judgment: "Spain's tax is regional, so this is a map of where it applies in 2026 rather than a single national rate. Catalonia and Barcelona raised rates on 1 April 2026 and are on a rising schedule into 2027, and the Balearic ecotasa is seasonal, so the euro figures are a recent read by accommodation category. Confirm the per-night amount with your accommodation. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      live: true,
      topic: "cash",
      title: "Do I need cash in Spain, or can I use cards? (2026) | True Trip Costs",
      description: "Barely any. Spain is card-first: tap almost everywhere, with a chip-and-PIN backup. The catches: some tapas bars set a card minimum, skip the blue-and-yellow Euronet ATMs, and choose euros, not dollars. Checked Jul 2026.",
      h1: "Do I need cash in Spain, or can I use cards?",
      lede: "Short answer: card for almost everything, a little cash for tapas bars and markets. Spain is firmly card-first, and contactless runs the day. The things to get right are the fee-heavy kiosk ATMs, the odd card minimum, and the dollar prompt.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Cards, almost entirely. Spain is <b>card-first</b>: over <b>90% of city businesses</b> take a tap, <b>contactless</b> is standard with no PIN under about <b>50 euros</b>, and Apple Pay and Google Pay are widely accepted. Keep <b>40 to 50 euros</b> in small notes for tapas bars, neighborhood markets, small towns, tips and the occasional cash-only or <b>card-minimum</b> spot (often around 5 euros). Two traps: skip the <b>blue-and-yellow Euronet ATMs</b>, and always choose <b>euros, not dollars</b> (the Spanish prompt reads sin conversion).",
      sections: [
        {
          h: "Card-first, with a little cash for the edges",
          p: [
            "Spain is comfortably <b>card-first</b>. <b>Visa and Mastercard</b> are taken almost everywhere, over <b>90% of city businesses</b> accept a tap, <b>contactless</b> is the default with <b>no PIN under about 50 euros</b>, and <b>Apple Pay and Google Pay</b> are widely accepted. You will hear about <b>Bizum</b>, an instant phone-to-phone payment locals love, but it needs a Spanish bank account, so it is not your tool. Carry a <b>chip-and-PIN card</b> as a backup.",
            "Keep <b>40 to 50 euros</b> in small notes and coins for the cash-friendly corners: <b>tapas bars</b>, neighborhood <b>markets</b>, small towns, tips, and the occasional place with a <b>card minimum</b> of around 5 euros. Anything above a 50 euro note is awkward to spend, so break big notes at a supermarket."
          ]
        },
        {
          h: "The euro-versus-dollar trap, and the kiosk ATMs",
          p: [
            "When a card terminal or an ATM asks whether to charge in <b>dollars or euros, always choose euros</b>. Choosing dollars triggers dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's, and a Euronet machine can mark it up far more. At a Spanish ATM the prompt reads con conversion or sin conversion, so pick <b>sin conversion</b>, without conversion.",
            "Avoid the <b>blue-and-yellow Euronet and Cashzone ATMs</b> at airports, stations and tourist sites. They charge flat fees around <b>4 to 7 euros</b> and push the dollar conversion hardest. Use a machine <b>attached to a real bank</b>, CaixaBank, BBVA, Santander or Sabadell, and read the on-screen fee before you confirm."
          ]
        },
        {
          h: "Getting cash safely",
          p: [
            "Use a <b>bank-branch ATM</b> in daylight, take out a few days' worth at once to limit per-visit fees, and use a <b>debit card</b> rather than a credit card, since a credit-card withdrawal is a cash advance with a fee and interest from day one. Carry a <b>no-foreign-fee card</b> plus a backup on a different network.",
            "As a rough guide, two mid-range travelers might pull <b>250 to 350 euros</b> of day-to-day cash across a week beyond the hotel, with cards covering the rest. Watch your pockets in crowds: Barcelona and Madrid pickpockets work Las Ramblas, the metro and the crowds at big sights, so keep cards and phone in a front or zipped pocket."
          ]
        },
        {
          h: "Tipping, terraces and the city tax",
          p: [
            "Tipping is light in Spain: the price already includes <b>IVA</b> (VAT) and staff earn a real wage, so there is no US-style percentage. Locals just round up or leave the small change, the <b>propina</b>. Leave any tip in <b>cash</b>, since card terminals rarely pass it on. One bill quirk: some places add a small <b>terrace surcharge</b> (suplemento de terraza) to sit outside, which is not a tip, so read the bill first.",
            "Spain's tourist tax is <b>regional</b>: only Catalonia (including Barcelona) and the Balearic Islands charge one, and most of the country does not. Where it applies and how much is in <a href=\"/spain/tourist-tax\">Spain's tourist tax</a>. For the wider picture, see the <a href=\"/spain\">Spain money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Spain?", a: "Not much. Spain is card-first, and over 90% of city businesses take a tap, including Apple Pay and Google Pay. Keep 40 to 50 euros in small notes for tapas bars, neighborhood markets, small towns, tips and the occasional cash-only or card-minimum spot, and top up at a bank ATM as needed." },
        { q: "Should I pay in euros or dollars in Spain?", a: "Always euros. If a card terminal or ATM offers to charge you in dollars, decline: that dynamic currency conversion adds roughly 3 to 8%, and a Euronet machine can be far worse. At a Spanish ATM the charge-in-euros choice is worded sin conversion, without conversion." },
        { q: "What ATM should I use in Spain?", a: "A machine attached to a real bank, such as CaixaBank, BBVA, Santander or Sabadell. Avoid the blue-and-yellow standalone Euronet and Cashzone machines at airports, stations and tourist sites, which charge flat fees around 4 to 7 euros and push the dollar conversion. Always choose to be charged in euros." },
        { q: "How much cash should I bring for a week in Spain?", a: "For two mid-range travelers, very roughly 250 to 350 euros of day-to-day cash across a week beyond your hotel, pulled in a couple of bank-ATM visits, with cards and contactless covering the rest. Adjust for how much you tap versus pay in cash." }
      ],
      sources: {
        links: [
          { label: "European Central Bank: the official euro reference exchange rates", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html", type: "gov" },
          { label: "US Department of State: Spain country information, including safety context relevant to ATM use", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Spain.html", type: "gov" }
        ],
        judgment: "Spain is strongly card-first, but ATM and card fees vary by your own bank, so much of this is our practical read. The euro rate moves, and the firm rule is to decline dollar conversion. Checked July 2026."
      }
    },
    {
      slug: "vat-refund",
      live: true,
      topic: "vat-refund",
      title: "Spain VAT refund (IVA) for tourists (2026): no minimum spend, DIVA, and what you get back | True Trip Costs",
      description: "Non-EU visitors can reclaim Spain's 21% IVA on shopping with no minimum spend, one of Europe's most generous. How the DIVA digital validation works, who qualifies, and why operator fees leave you closer to 12 to 17%. Checked Jul 2026.",
      h1: "Spain's VAT refund (IVA), and what you get back.",
      lede: "Spain charges 21% IVA, and it is unusually generous on refunds: there is no minimum spend, so even a small purchase qualifies. It runs digitally through DIVA, but operator fees mean the real refund is under the headline. Here is how it works.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Yes, and with <b>no minimum spend</b>. Spain scrapped its minimum-purchase rule in 2019, so non-EU visitors can reclaim the <b>21% IVA</b> on almost any purchase, from a small souvenir to a designer bag. Ask for a <b>tax-free form</b> with your passport at checkout, keep the goods <b>unused</b>, and validate at a <b>DIVA</b> kiosk when you leave the EU, then collect from the operator. After <b>operator fees</b> you net closer to <b>12 to 17%</b>, not the full 21%, so on a very small buy the queue may not be worth it. Validate at your <b>final EU exit</b>.",
      sections: [
        {
          h: "Who qualifies, and the no-minimum rule",
          p: [
            "The refund is for <b>non-EU residents</b> (what counts is your <b>home address</b>, not your passport) taking goods home unused. Spain is unusually generous: it <b>abolished the minimum purchase</b> in 2019, so unlike Italy or France there is <b>no threshold</b>, and even a small buy technically qualifies. Around <b>90% of stores</b> in tourist areas of Madrid and Barcelona take part, from El Corte Ingles to luxury boutiques; look for the tax-free signs.",
            "Only <b>goods</b> for personal use qualify, carried out of the EU unused. <b>Services</b> like hotels and restaurants do not, and neither do consumables used in Spain. Ask for the <b>tax-free form</b> at the moment of purchase, with your <b>passport</b>: a shop generally will not issue it after you have paid and left."
          ]
        },
        {
          h: "DIVA: the digital stamp",
          p: [
            "Spain validates through <b>DIVA</b>, its mandatory digital stamping system, which has replaced the manual customs stamp used in much of the EU. At the airport you scan your form at a <b>DIVA kiosk</b> (or, if it flags, see a customs officer) before checking any bags with the goods. Kiosks are at the main airports including <b>Madrid Barajas and Barcelona El Prat</b>.",
            "Once validated, you collect from a <b>refund operator</b> (Global Blue, Planet and others) at the airport, choosing <b>cash</b> (with a commission) or a <b>refund to your card</b> (more, but it takes a few weeks). Keep the goods reachable in case customs wants to see them, and validate <b>before</b> you check in."
          ]
        },
        {
          h: "What you actually get back",
          p: [
            "The <b>21% IVA</b> is the headline, but the <b>operators</b> take a cut, so you typically net closer to <b>12 to 17%</b> of the price. Because there is <b>no minimum</b>, it is tempting to claim on small buys, but the <b>fees and the queue</b> can outweigh a tiny refund, so it is really worth it on a <b>meaningful purchase</b>. A cash refund pays less than one to your card.",
            "One <b>carve-out</b> worth knowing: the Canary Islands, Ceuta and Melilla sit outside the EU VAT area, so their residents can claim on mainland purchases, and if you are traveling on through the Canaries the process differs. For a standard mainland trip home, the steps above are what apply."
          ]
        },
        {
          h: "Validate at your final EU exit, and the rest of the picture",
          p: [
            "As across the EU, <b>validate at your last EU departure point</b>. If you connect through another EU country on the way home, you validate <b>there</b>, not in Spain.",
            "The IVA refund is the shopping side of money in Spain. For the tax that only some regions add to your hotel bill, see <a href=\"/spain/tourist-tax\">Spain's tourist tax</a>, and for paying day to day, <a href=\"/spain/cash-or-card\">cash or card in Spain</a>. The wider picture is in the <a href=\"/spain\">Spain money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is there a minimum spend for a VAT refund in Spain?", a: "No. Spain abolished its minimum purchase in 2019, so there is no threshold and even a small purchase qualifies for an IVA refund. That said, after operator fees a very small refund may not be worth the airport queue, so it pays off most on a meaningful purchase." },
        { q: "How much IVA do I actually get back in Spain?", a: "Less than the 21% headline. After the refund operators take their cut, you typically net closer to 12 to 17% of the price. A cash refund at the airport pays the least; a refund to your card nets more but can take a few weeks." },
        { q: "What is DIVA in Spain?", a: "DIVA is Spain's mandatory digital customs stamping system, which replaced the manual stamp. You scan your tax-free form at a DIVA kiosk at the airport (or see a customs officer if it flags) before checking bags, then collect your refund from an operator like Global Blue or Planet. Kiosks are at Madrid Barajas, Barcelona El Prat and other airports." },
        { q: "Who can claim a VAT refund in Spain?", a: "Non-EU residents taking new, unused goods home. What matters is your country of residence, not the passport you carry. Only goods for personal use qualify, not services like hotels or meals. Residents of the Canary Islands, Ceuta and Melilla can also claim on mainland Spanish purchases." }
      ],
      sources: {
        links: [
          { label: "GoodVat: a 2026 guide to Spain's IVA refund, the no-minimum rule and the DIVA digital export system", url: "https://goodvat.com/guides/eu-vat/vat-refund-spain/", type: "guide" },
          { label: "International Tax Legal Spain: how non-residents reclaim IVA through the DIVA form and airport validation", url: "https://www.internationaltaxlegalspain.com/the-non-residents-guide-to-vat-in-spain-when-to-pay-it-and-how-to-get-it-back", type: "guide" }
        ],
        judgment: "The 21% rate, the no-minimum rule (since 2019) and the DIVA validation are current, with DIVA being the Spanish Tax Agency (Agencia Tributaria) system. The net-refund figure is a market estimate after operator fees and varies by operator and payout method, so treat 12 to 17% as a guide. Checked July 2026."
      }
    },
    {
      slug: "staying-connected",
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "Staying connected in Spain (2026): the eSIM math, and where the signal thins | True Trip Costs",
      description: "Spain's coverage is excellent in cities and along the coast, so it is a cost question. Your US carrier charges about 12 dollars a day to roam; a Nomad eSIM is a few dollars per gigabyte. Expect gaps in the interior. Checked Jul 2026.",
      h1: "Staying connected in Spain.",
      lede: "Spain is well covered where you will be, the cities, the coast, the islands, so the real decision is how you pay for data. For most US travelers an eSIM is far cheaper than the carrier day pass. Here is the math, and the few places signal drops.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Coverage is <b>strong</b> in cities, along the coast and on the islands, so this is mostly a cost question. Your US carrier charges about <b>12 dollars a day</b> to roam in Spain (<b>AT&amp;T and Verizon</b> day passes), and <b>T-Mobile</b>'s included roaming is often <b>slow 2G</b>, fine for messages but not maps. A <b>Nomad eSIM</b> is a few dollars per gigabyte, activates before you fly and works from landing, so for a data-first trip it is the cheapest option. Expect <b>weaker signal in the rural interior and the mountains</b>. Never roam <b>pay-per-use</b>, which runs about 2 dollars a megabyte.",
      sections: [
        {
          h: "A cost question first",
          p: [
            "Spain has strong mobile coverage across the places visitors go, so the main decision is how you pay. The expensive default is roaming on your US plan: <b>AT&amp;T and Verizon</b> charge about <b>12 dollars a day</b>, roughly <b>84 dollars</b> for a week. <b>T-Mobile</b> and some Google Fi and Visible plans include roaming, but often at <b>slow 2G-style speeds</b> that handle messaging but struggle with maps and rideshare, so check your plan's fine print.",
            "Whatever you pick, do not roam with <b>no plan</b>. Pay-per-use data is around <b>2 dollars a megabyte</b>, thousands per gigabyte, and phones use data in the background, so <b>turn off data roaming</b> until an eSIM or pass is active."
          ]
        },
        {
          h: "Why an eSIM is usually cheapest",
          p: [
            "A <b>travel eSIM</b> is the cheapest way for most visitors to get real data in Spain. A <b>Nomad eSIM</b> is a few dollars per gigabyte, well under day-pass fees, <b>activates before you fly</b> and works from landing, with no SIM counter. Your US number stays reachable on your normal plan while the eSIM carries the data.",
            "The network barely matters where you will be: a Nomad eSIM rides a <b>major Spanish network</b>, and coverage in the cities, along the coast and on the islands is strong on all of them. Set it up before departure, since installing it needs a connection."
          ]
        },
        {
          h: "Where signal drops, and the practical bits",
          p: [
            "The gaps are in the <b>rural interior and the mountains</b>: parts of the <b>Pyrenees and the Sierra Nevada</b>, and stretches of the empty inland meseta and small villages. In cities, along the coast and on the main islands you will have fast 4G and 5G, but a mountain hike or a back-road drive can lose signal.",
            "So <b>download offline maps</b> before a mountain day or a rural drive. For paying as you go, see <a href=\"/spain/cash-or-card\">cash or card in Spain</a>, and the <a href=\"/spain\">Spain money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need an eSIM for Spain?", a: "For most US travelers it is the cheapest way to get real data. Spain's coverage is strong in cities and along the coast, so it is a cost question: a Nomad eSIM is a few dollars per gigabyte, versus about 12 dollars a day for an AT&T or Verizon roaming pass. Set it up before you fly and it works from landing." },
        { q: "How much does it cost to use my US phone in Spain?", a: "About 12 dollars a day on an AT&T or Verizon day pass, so roughly 84 dollars a week. T-Mobile and some other plans include roaming but often at slow 2G speeds. Never roam with no plan, since pay-per-use runs about 2 dollars a megabyte." },
        { q: "Will I have signal in the Spanish countryside?", a: "Mostly, but not everywhere. Coverage is strong in cities, along the coast and on the main islands, while parts of the Pyrenees and Sierra Nevada and the empty inland meseta have gaps. Download offline maps before a mountain hike or a back-road drive, whatever network or eSIM you use." },
        { q: "Is an eSIM or a local SIM better for Spain?", a: "An eSIM is simpler for most visitors: no SIM counter and it works from landing if you set it up beforehand. A physical Spanish SIM can suit very heavy, long-stay use, but for a normal trip a Nomad eSIM is more convenient, and coverage is strong either way." }
      ],
      sources: {
        links: [
          { label: "US Department of State: Spain country information and local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Spain.html", type: "gov" },
          { label: "Tom's Guide: a 2026 comparison of US carrier international roaming plans and day-pass prices", url: "https://www.tomsguide.com/us/wireless-carriers-international-travel-plans,review-4327.html", type: "guide" }
        ],
        judgment: "Carrier prices and inclusions change with your exact plan, so treat the day-pass figures as a July 2026 snapshot and check your own plan. The steady points are that Spanish coverage is strong where visitors go, that a day pass is the pricey default, and that signal thins in the rural interior and the mountains."
      }
    },
    {
      slug: "renting-a-car",
      live: true,
      topic: "driving",
      carExcess: true,
      title: "Renting a car in Spain (2026): the fuel-policy trick, the permit you need, and the insurance excess | True Trip Costs",
      description: "Spain's budget rentals push a full-to-empty fuel trick that overcharges you, you legally need an International Driving Permit, and the counter's excess cover is pricey. Fewer tolls than France now. Checked Jul 2026.",
      h1: "What does renting a car in Spain really cost?",
      lede: "Spain is superb for a road trip, from Andalusian white towns to the northern coast, and renting is easy once you dodge two traps: a fuel policy designed to overcharge you, and a permit you must carry by law.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Two things to get right. First, choose the <b>full-to-full fuel policy</b> (pick up full, return full) and avoid the <b>full-to-empty</b> option some budget brands push, where you <b>prepay a whole tank</b>, return it empty and lose the unused fuel plus a service fee. Second, you <b>legally need an International Driving Permit</b> (IDP) with your US license; the big chains <b>refuse the car without it</b>, and a police check can fine you up to <b>150 euros</b>. On insurance, your <b>US card and policy generally do not cover you in Europe</b>, so decline the counter's pricey excess reduction and buy a <b>cheaper standalone excess policy</b>. Good news: Spain now has <b>far fewer tolls</b> than France or Italy.",
      sections: [
        {
          h: "The fuel-policy trick",
          p: [
            "This is where Spain's cheap headline rates make their money back. The fair option is <b>full-to-full</b>: you collect the car with a full tank and return it full, paying only for what you use, so stop at a station near the airport before dropping off. Some <b>budget brands</b> instead steer you to <b>full-to-empty</b> (sometimes called prepaid fuel): you <b>pay for a whole tank up front</b>, return the car empty, and any fuel you did not use is <b>gone</b>, often with a <b>refuelling service fee</b> on top.",
            "On a short rental you can easily lose <b>30 to 60 euros</b> this way. When you book and at the counter, pick <b>full-to-full</b>, and <b>photograph the fuel gauge and the odometer</b> at pickup and return so there is no dispute."
          ]
        },
        {
          h: "The permit you must carry",
          p: [
            "Spain requires non-EU drivers to hold an <b>International Driving Permit</b> alongside their home license. This one is enforced at the counter: the major chains (<b>Sixt, Hertz, Europcar, Goldcar</b>) will <b>refuse to release the car without it</b> in most cases, citing their own rules, and a police check can bring a fine of up to <b>150 euros</b> and may invalidate your insurance.",
            "You <b>cannot get an IDP in Spain</b>. Arrange it in the US before you travel, from <b>AAA</b> (about <b>20 dollars</b>), and carry it with your physical license and passport. As elsewhere, ignore instant online IDP sellers."
          ]
        },
        {
          h: "Insurance: decline the counter, cover the excess",
          p: [
            "As across Europe, your <b>US auto policy and credit-card collision cover generally do not apply in Spain</b>, so you need collision protection. The confusion at the desk is deliberate: the agent bundles the <b>legally required cover</b>, optional <b>excess-reduction</b> waivers and deposit rules into one fast pitch, and tired travelers assume it is all mandatory. It is not.",
            "The rental includes basic collision and theft cover with a <b>high excess</b>; rather than pay the counter's steep fee to reduce it, <b>decline the excess reduction</b> and hold a <b>standalone excess policy</b> bought in advance, which covers the same gap for less. That is what the option on this page covers. Decide your plan <b>before</b> you land so the counter pitch cannot rush you."
          ]
        },
        {
          h: "Tolls, age and the extras",
          p: [
            "Here Spain is kinder than its neighbors: <b>only about a fifth of motorways are tolled</b>, since many former toll roads (the AP autopistas) were <b>made free</b> in recent years, and free A-road alternatives are common. Where tolls remain, pay by <b>card</b> or use a <b>Via-T</b> tag; a route like <b>Barcelona to the French border</b> is around <b>15 euros</b>.",
            "Drivers must be <b>21 or older</b> (23 to 25 for larger cars), with a <b>young-driver surcharge</b> of about <b>10 to 25 euros a day</b> under 25. One-way drops cost extra, and a <b>deposit hold</b> goes on your card. For paying day to day, see <a href=\"/spain/cash-or-card\">cash or card in Spain</a>, and the <a href=\"/spain\">Spain money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "What fuel policy should I choose renting a car in Spain?", a: "Full-to-full: you pick up with a full tank and return it full, paying only for what you use. Avoid the full-to-empty (prepaid) option some budget brands push, where you pay for a whole tank up front and lose any fuel you do not use, often plus a service fee. Photograph the gauge at pickup and return." },
        { q: "Do I need an International Driving Permit for Spain?", a: "Yes. Spain legally requires non-EU drivers, including US license holders, to carry an International Driving Permit with their license. The major chains will refuse the car without one, and a police check can fine you up to 150 euros. Get an IDP from AAA in the US before you travel; you cannot buy one in Spain." },
        { q: "Does my US insurance cover a rental car in Spain?", a: "Generally no. Unlike in Canada, US auto policies and credit-card collision cover usually do not apply in Europe, so you need collision protection in Spain. Rather than pay the counter's steep excess-reduction fee, a standalone excess policy bought in advance covers the rental's high excess for less." },
        { q: "Are there many toll roads in Spain?", a: "Fewer than in France or Italy. Only about a fifth of Spanish motorways are tolled, since many former toll autopistas were made free in recent years, and free A-road alternatives are common. Where tolls remain, pay by card or a Via-T tag; Barcelona to the French border is around 15 euros." }
      ],
      sources: {
        links: [
          { label: "US Department of State: Spain country information and road travel guidance", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Spain.html", type: "gov" },
          { label: "Salt in our Hair: a 2026 guide to renting a car in Spain, including the IDP requirement and fuel policies", url: "https://www.saltinourhair.com/spain/rent-car-spain/", type: "guide" }
        ],
        judgment: "The IDP requirement and the full-to-full fuel advice are firm; exact fuel-fee losses, toll amounts and young-driver surcharges vary by company and route, so treat the euro figures as typical 2026 ranges. The steady advice is to choose full-to-full, carry an IDP, and cover the insurance excess before the counter. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      live: true,
      topic: "taxis",
      caution: "low",
      title: "Taxis and apps in Spain (2026): the Barcelona catch, and Madrid's fixed airport fare | True Trip Costs",
      description: "Uber, Cabify and Bolt work in Madrid, but Barcelona's VTC law means you must pre-book hours ahead, so a street taxi is the real option there. Madrid's airport is a fixed 33 euros; Barcelona is metered. Checked Jul 2026.",
      h1: "Taxis and apps in Spain.",
      lede: "How you get a ride in Spain depends on the city. In Madrid the apps work like home; in Barcelona a new law has effectively pushed visitors back to the black-and-yellow taxi. Here is what works where, and the two airport fares to know.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "It varies by city. The apps are <b>Uber, Cabify</b> (a Spanish firm, often the cheapest and best-stocked), <b>Bolt</b> and <b>Free Now</b>; compare a couple, since prices differ a lot. In <b>Madrid</b> they work normally, and the airport has a <b>fixed 33 euro taxi fare</b> to anywhere inside the M-30 ring, any time. <b>Barcelona is the catch</b>: a strict Catalan <b>VTC law</b> means app cars must be <b>booked well in advance</b> rather than summoned on demand, so for a spontaneous trip the <b>black-and-yellow street taxi</b> is the practical choice, hailed or via the Free Now app. Barcelona's airport has <b>no fixed fare</b>: it is metered, about <b>30 to 40 euros</b> plus a roughly <b>4.50 euro airport supplement</b>.",
      sections: [
        {
          h: "Which apps, and where they work",
          p: [
            "Spain has four main ride apps: <b>Uber, Cabify, Bolt and Free Now</b>. <b>Cabify</b> is Spanish and usually has the biggest fleet and keenest prices in the major cities; <b>Uber</b> is strongest in <b>Madrid</b> and also runs in Valencia, Malaga, Seville, Bilbao and others, but is <b>limited in Barcelona</b>. Prices vary sharply between apps for the same trip, so it is worth having two or three installed and <b>comparing before you book</b>. All accept international Visa and Mastercard and are cashless.",
            "In smaller towns and rural areas the apps thin out, and the <b>local taxi</b>, hailed, at a rank, or by phone, is the reliable option. Official taxis are clearly marked (in Madrid, white with a red diagonal stripe; in Barcelona, black and yellow) and run regulated meters, so they are safe and predictable even where an app is scarce."
          ]
        },
        {
          h: "The Barcelona catch",
          p: [
            "Barcelona is genuinely different in 2026. Catalan rules have <b>phased out most on-demand private-hire (VTC) rides</b>: any remaining app ride must be <b>booked well ahead</b> rather than summoned on the spot, which ends the quick-car-across-town convenience you might expect. In practice, <b>Uber and Bolt are not useful for a spontaneous trip</b> in Barcelona, and where they operate they often just <b>dispatch a licensed taxi</b> anyway.",
            "So in Barcelona, lean on the <b>black-and-yellow taxis</b>: hail one on the street, pick one up at a rank outside stations and hotels, or summon a licensed cab through the <b>Free Now</b> app. They are plentiful, metered at regulated rates, and free of surge pricing, which during rush hour or a festival is an advantage. The city's <b>Metro</b> is also excellent for getting around cheaply."
          ]
        },
        {
          h: "The two airport fares to know",
          p: [
            "The airports work differently. <b>Madrid Barajas</b> has a <b>fixed 33 euro taxi fare</b> to any destination inside the <b>M-30 ring road</b>, regardless of time or traffic and with no luggage fee; take an official white taxi from the rank. If you use an app, Uber, Cabify and Bolt pick up from designated <b>VTC zones</b> at the airport, and their price varies with demand, so compare against the fixed 33 euros.",
            "<b>Barcelona El Prat</b> has <b>no fixed fare</b>: the black-and-yellow taxi runs a meter, roughly <b>30 to 40 euros</b> to the center for the 20 to 25 minute ride, plus an <b>airport supplement of about 4.50 euros</b> and a minimum airport fare around <b>20 euros</b>. The <b>Aerobus</b> and the metro are cheaper if you are travelling light. For how cards and cash work, see <a href=\"/spain/cash-or-card\">cash or card in Spain</a>."
          ]
        },
        {
          h: "Paying and tipping",
          p: [
            "Apps are <b>cashless</b> and bill the card on file. Street taxis take <b>cash and usually card</b>, though the card machine is not always as smooth as an app, so keep some euros handy for a taxi just in case. Official taxis must run the <b>meter</b> and give a receipt on request, so there is no need to agree a price in advance except where a fixed fare officially applies, as in Madrid from the airport.",
            "Tipping is <b>light</b>: rounding up to the nearest euro, or leaving small change, is normal and plenty, with no expected percentage. For the wider money picture, see the <a href=\"/spain\">Spain money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Does Uber work in Spain?", a: "In much of it, yes, but not everywhere the same. Uber works normally in Madrid and runs in Valencia, Malaga, Seville, Bilbao and others, but it is limited in Barcelona, where a strict VTC law means app cars must be pre-booked well ahead rather than summoned on demand. Cabify, a Spanish app, often has better availability and lower prices, so compare a few apps." },
        { q: "How do I get a taxi in Barcelona in 2026?", a: "Use the black-and-yellow street taxis: hail one, take one from a rank at stations and hotels, or summon a licensed cab through the Free Now app. Because of Catalonia's VTC rules, Uber and Bolt are not practical for spontaneous trips in Barcelona, so the metered taxi (or the Metro) is the reliable choice." },
        { q: "How much is a taxi from Madrid airport to the city?", a: "A fixed 33 euros to any destination inside the M-30 ring road, any time of day and regardless of traffic, with no luggage fee. Take an official white taxi (red diagonal stripe) from the rank. Apps like Uber and Cabify pick up from VTC zones and their price varies, so compare against the 33 euro fixed fare." },
        { q: "How much is a taxi from Barcelona airport to the city?", a: "There is no fixed fare. The black-and-yellow taxi is metered, roughly 30 to 40 euros to the center for a 20 to 25 minute ride, plus an airport supplement of about 4.50 euros and a minimum airport fare around 20 euros. The Aerobus and the metro are cheaper if you are travelling light." }
      ],
      sources: {
        links: [
          { label: "US Department of State: Spain country information and local-travel context", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Spain.html", type: "gov" },
          { label: "Expat Focus: a guide to taxis and ride-hailing in Spain, including the Madrid fixed airport fare and city coverage", url: "https://www.expatfocus.com/spain/guide/spain-taxis-and-ride-hailing-services", type: "guide" }
        ],
        judgment: "The Madrid fixed fare and the Barcelona VTC restrictions are current for 2026, but app availability, city rules and meter rates change, and Barcelona's private-hire rules in particular have shifted repeatedly, so treat the euro figures as a recent read and check the app for your city on arrival. Checked July 2026."
      }
    }
  ]
};
