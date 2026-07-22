export default {
  slug: "canada",
  live: true,
  name: "Canada",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  sources: {
    changed: "Sources added. Confirmed with the Canada Revenue Agency that sales tax is added at the register: 5% GST alone in Alberta and the territories, a combined 13% to 15% HST in Ontario and Atlantic Canada, with Nova Scotia down to 14% since April 2025, and GST plus a provincial tax in British Columbia, Manitoba, Saskatchewan and Quebec. Verified that Canada has no general sales-tax refund for visitors, since the GST visitor rebate ended in 2007, and that a narrow rebate survives only for some tour packages and conventions. The guide's figures are current.",
    links: [
      { label: "Canada Revenue Agency: charge and collect the GST/HST, rates by province", url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-which-rate.html", type: "revenue" }
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "911", note: "911 works everywhere, the same as it does at home.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  rentalCommon: true,
  region: "Americas",
  signals: { cardFriendliness: 4, cashNeed: 2, taxRisk: 3, atmRisk: 4 },
  hook: "As card-friendly as the US, but the sticker price hides sales tax and a US-style tip.",
  aliases: ["toronto", "vancouver", "montreal", "quebec", "quebec city", "ottawa", "calgary", "banff", "niagara", "canadian dollar", "cad", "loonie", "toonie", "ontario", "british columbia", "alberta"],

  title: "Money in Canada (2026): Cards, Cash, Sales Tax and Tipping | True Trip Costs",
  description: "How to handle money in Canada as a US traveler in 2026: cards and tap work almost everywhere, why sales tax is added at the register (not on the tag), US-style tipping, which ATMs to use, paying in Canadian dollars not US, and the hotel taxes that vary by province. Checked July 2026.",

  h1: "Money in Canada, sorted.",
  lede: "A calm, current plan for the money side of your trip: why you barely need cash, the two costs that never show up on the price tag, and the hotel taxes that vary by province.",
  hero: {
    img: "/canada-hero.jpg",
    h: 1375,
    alt: "A cobbled Old Quebec street at dusk with stone houses under steep teal roofs, red geraniums in window boxes, string lights crossing the lane, red autumn leaves drifting down, the turreted silhouette of a grand chateau hotel at the end of the street against an orange sky, a figure in a red coat walking away, and a plate of poutine beside a stack of maple-syrup pancakes and a tall glass of golden beer on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Canada is as card-friendly as the US: tap, chip, Apple Pay and Google Pay work almost everywhere, and you rarely need cash. Bring a <b>no-foreign-fee Visa or Mastercard</b>, keep <b>C$40 to C$60</b> for markets, parking and the odd cash-only spot, and pull Canadian dollars from a <b>major bank ATM</b> (RBC, TD, Scotiabank, BMO, CIBC), not a private machine in a bar or convenience store. Two things trip up first-timers, and neither is on the price tag: <b>sales tax is added at the register</b> (5% to 15% depending on the province), and <b>tipping is US-style</b>, 15 to 20% at restaurants, usually prompted on the card terminal. Always choose Canadian dollars, never US, on any screen that offers the choice.",

  meter: {
    heading: "Nearly cashless, just budget for tax and tips on top of the sticker.",
    cashPct: 20,
    note: "A rough feel for everyday spending. Cards and contactless work almost everywhere, on transit, in shops, restaurants and taxis, and card terminals even handle the tip. You need very little cash, mostly for farmers markets, food trucks, parking meters, small tips and the occasional cash-only spot. The bigger surprises are not about cash at all: sales tax is added at checkout, and a tip is expected on top."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are taken nearly everywhere, contactless is standard, and Apple Pay and Google Pay are widely accepted. Tap works up to about C$250, above which you enter a PIN. Amex is accepted at most chains and hotels but is patchier at small independents.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "ok", h: "Cash", verd: "You barely need it", p: "Cards cover almost everything, and you can even tip on the terminal. Keep C$40 to C$60 for farmers markets, food trucks, parking, small tips and the rare cash-only place. Canada dropped the penny in 2013, so cash totals round to the nearest 5 cents, while card charges stay exact.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Use a bank machine", p: "Major bank ATMs (RBC, TD, Scotiabank, BMO, CIBC) are everywhere and mostly dispense C$20 notes. Avoid the private white-label machines in bars, hotels and convenience stores, which pile on fees. Read the on-screen fee and decline \"convert to US dollars.\"", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> with contactless for nearly everything, plus a backup card from a different bank.",
      "Get a <b>no-foreign-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "Check whether your US phone plan already includes Canada, many do, so you may not need a separate eSIM or SIM at all."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters, the rates are poor.",
      "Pull Canadian dollars from a <b>major bank ATM</b> (RBC, TD, Scotiabank, BMO, CIBC) and <b>decline \"convert to US dollars.\"</b>",
      "You will need little cash, so a single modest withdrawal usually covers a whole trip."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card or phone</b> for essentially everything: shops, restaurants, transit, taxis and rideshare.",
      "Remember the <b>sticker price is pre-tax</b>. Sales tax (5% to 15% by province) is added when you pay.",
      "When the terminal offers tip choices (often 18, 20, 25%), that is expected at sit-down restaurants and bars. Check whether the percentage is on the pre-tax or post-tax total.",
      "<b>Always choose Canadian dollars</b>, never US, on every card terminal and ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in Canadian dollars, never in US dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "Budget for the two hidden costs on every restaurant meal: sales tax and a 15 to 20% tip, so a listed $100 dinner really lands closer to $130."
    ], cta: null }
  ],

  cash: {
    rate: 1.38, cur: "CAD", round: 20, defaultIndex: 1,
    rateNote: "Rough guide at about 1.38 Canadian dollars to 1 US dollar in mid-2026, so a Canadian dollar is worth about 72 US cents: C$100 is roughly $72 and C$20 about $14.50. The rate moves, so check a current converter before you go.",
    styles: [
      { n: "Budget", per: 70, cash: 0.2, room: 90 },
      { n: "Mid-range", per: 160, cash: 0.15, room: 170 },
      { n: "Comfort", per: 350, cash: 0.1, room: 330 }
    ]
  },

  connectivity: {
    works: "Very good in the populated south, patchy in the vast north. The three national carriers, Rogers, Bell and Telus, cover cities, towns and the main highways well with 4G and growing 5G, but coverage thins out fast in the mountains, the far north and deep in the national parks. Canadian mobile plans are among the most expensive in the world, so for a short visit an eSIM (Airalo, Nomad, Ubigi) usually beats a local SIM, and many US carriers already include Canada in their plans, so check yours first. You do not need mobile data to pay for anything; cards and contactless stand on their own."
  },

  // TOURIST/HOTEL TAX (high-churn, verified to Jul 2026 knowledge; confirm municipal rates).
  // Canada has no national tourist tax. A hotel room instead carries the province's sales tax
  // (GST 5% alone in Alberta and the territories; HST 13 to 15% in Ontario and Atlantic Canada;
  // GST plus a provincial sales tax in BC, Manitoba, Saskatchewan and Quebec) PLUS, in many
  // cities, a municipal or provincial accommodation levy of roughly 2 to 6%. Sales tax is NOT
  // included in Canadian prices. These are rough combined estimates; the municipal part varies
  // by city and none of it is refundable to visitors (Canada ended its GST visitor rebate in 2007).
  tax: {
    unit: "percentOfRoom",
    currency: "CAD",
    capNights: null,
    note: "Canada has no single tourist tax. Your hotel bill instead carries the province's sales tax plus, in many cities, a municipal or provincial accommodation levy. This is a rough combined estimate of what gets added to a room rate, and unlike Europe none of it is refundable to visitors. Sales tax is not included in Canadian prices.",
    regions: [
      { key: "ontario", label: "Ontario (Toronto, Ottawa, Niagara)", pct: 18, note: "HST is 13%, and big-city hotels add a municipal accommodation tax on top, roughly 4 to 6% (Toronto is about 6%). Smaller towns may charge none." },
      { key: "quebec", label: "Quebec (Montreal, Quebec City)", pct: 18, note: "GST plus Quebec's QST come to just under 15%, plus a 3.5% lodging tax." },
      { key: "bc", label: "British Columbia (Vancouver, Victoria, Whistler)", pct: 16, note: "GST 5% plus 8% PST on accommodation, plus a municipal and regional tax of about 2 to 3% (a little higher in Vancouver)." },
      { key: "alberta", label: "Alberta (Banff, Jasper, Calgary)", pct: 9, note: "Alberta has no provincial sales tax; you pay 5% GST plus the province's 4% tourism levy." },
      { key: "atlantic", label: "Atlantic Canada (Nova Scotia, New Brunswick, PEI, Newfoundland)", pct: 15, note: "HST runs 14 to 15% depending on the province, and a few towns add a small accommodation levy." },
      { key: "other", label: "Elsewhere in Canada (Prairies, the North)", pct: 12, note: "Manitoba and Saskatchewan charge GST plus a provincial sales tax (about 11 to 12%); the territories charge just 5% GST. Some cities add a small accommodation levy." }
    ]
  },

  currencyHeading: "The Canadian dollar, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "At about 1.38 Canadian dollars to 1 US dollar in mid-2026, a Canadian dollar is worth about 72 US cents. So C$10 is roughly $7.25, C$50 about $36, and C$100 about $72. To go the other way, add a little under half again to a US figure." },
    { sym: "smallnotes", k: "Notes and coins", v: "Polymer notes come in C$5, 10, 20, 50 and 100. Coins are the 5, 10 and 25 cent pieces plus the C$1 loonie and C$2 toonie. There is no penny (dropped in 2013), so cash totals round to the nearest 5 cents while card charges are exact." },
    { sym: "usd", k: "The price tag is pre-tax", v: "This catches Americans out even though it mirrors home: the shelf or menu price does not include sales tax. Depending on the province, 5% to 15% is added at the register, so always expect to pay a bit more than the number shown." },
    { sym: "tip", k: "Tipping is expected", v: "Canada follows US-style tipping: 15 to 20% at sit-down restaurants and bars, and the card terminal will prompt you. This is a real part of the cost, on top of tax. See the tipping section below." }
  ],

  taxfree: {
    label: "Taxes, tips and refunds",
    heading: "Tax on top of the sticker, a tip on top of that, and no refund.",
    text: "Canada has no single national tourist tax, but two costs sit on top of almost every price. First, <b>sales tax is added at the register, not shown on the tag</b>: it is <b>5% GST</b> alone in Alberta and the territories, a combined <b>13% to 15% HST</b> in Ontario and Atlantic Canada, and GST plus a provincial sales tax in British Columbia, Manitoba, Saskatchewan and Quebec (Quebec's combined rate is just under 15%). Hotel rooms often carry an extra <b>municipal or provincial accommodation levy of about 2 to 6%</b>. Second, <b>tipping is US-style</b>, effectively another 15 to 20% on restaurant, bar and taxi bills. Unlike Europe, there is <b>no general sales-tax refund for visitors</b>: Canada ended its GST visitor rebate in 2007, so you cannot claim tax back on shopping (a narrow rebate still exists for some tour packages and conventions). There is no separate departure tax; airport fees are built into your airfare."
  },

  traps: [
    "<b>The price you see is not the price you pay.</b> Sales tax (5% to 15% by province) is added at the register, not printed on the tag or menu. Budget above the sticker on everything.",
    "<b>Tipping is a real cost here, US-style.</b> Expect 15 to 20% at sit-down restaurants and bars, prompted on the card terminal (often 18, 20, 25%). It sits on top of the tax, so a listed $100 dinner can land near $130. Check whether the suggested percentage is on the pre-tax or post-tax total.",
    "<b>Pay in Canadian dollars, not US dollars.</b> Terminals and ATMs offer to charge you in dollars (dynamic currency conversion), which adds 3 to 8%. A few border and tourist spots take US cash, but at a poor rate, and your change comes back in Canadian dollars.",
    "<b>Skip the white-label ATMs.</b> Private machines in bars, hotels and convenience stores charge steep fees. Use a major bank's ATM (RBC, TD, Scotiabank, BMO, CIBC) and decline the US-dollar conversion."
  ],

  tippingHeading: "US-style: 15 to 20%, usually on the terminal.",
  tipping: "Tipping in Canada works just like the US, so budget for it. At sit-down restaurants and bars, 15 to 20% is standard, and the card terminal will offer preset choices (often 18, 20 and 25%); watch that the suggested percentage is sometimes calculated on the post-tax total, which nudges it higher. For bartenders, about C$1 to C$2 a drink is fine if you are not tipping a percentage. Taxis and rideshare get 10 to 15%, hairdressers and spa staff 15 to 20%, hotel housekeeping C$2 to C$5 a night, and a bellhop C$2 to C$5 a bag. Coffee shops and counter service have a tip prompt too, but there it is genuinely optional. A service charge is not usually added to the bill except for large groups, so read it before you tip again.",

  faqs: [
    { q: "Do I need cash in Canada?", a: "Very little. Cards and tap work almost everywhere, and you can tip right on the terminal. Keep about C$40 to C$60 for farmers markets, food trucks, parking meters, small tips and the rare cash-only spot, and pull it from a major bank ATM if you run low." },
    { q: "Should I pay in Canadian or US dollars in Canada?", a: "Canadian. If a card terminal or ATM offers to charge you in US dollars, decline; that dynamic currency conversion adds roughly 3 to 8%. A handful of border and tourist businesses take US cash, but the rate is poor and your change comes back in Canadian dollars." },
    { q: "Is sales tax included in prices in Canada?", a: "No, and this catches US visitors out even though it mirrors home. The shelf or menu price is pre-tax. Depending on the province, 5% (Alberta and the territories) up to 15% (Atlantic Canada) is added at checkout, and hotels usually add an accommodation levy on top." },
    { q: "Can I get a tax refund on shopping in Canada?", a: "Generally no. Canada ended its GST visitor rebate program in 2007, so there is no EU-style tourist refund on ordinary purchases. A narrow rebate still exists for some tour packages and foreign conventions, but not for everyday shopping." },
    { q: "How much should I tip in Canada?", a: "Like the US: 15 to 20% at restaurants and bars, 10 to 15% for taxis and rideshare, and a couple of dollars per bag or per night for hotel staff. The card terminal will prompt you, so check whether the suggested percentage is on the pre-tax or post-tax total before you choose." },
    { q: "What is the best ATM to use in Canada?", a: "A major bank's machine: RBC, TD, Scotiabank, BMO or CIBC. Avoid the private white-label ATMs in bars, hotels and convenience stores, which charge high fees, and always decline the US-dollar conversion. Most machines dispense C$20 notes." }
  ],

  culture: {
    heading: "A few local words go a long way",
    intro: "Canada runs on English and French, and on an easy, apologetic friendliness all its own. You will not need a phrasebook, but a few local words and a story or two mark you as a guest rather than a tourist.",
    phrases: [
      { mean: "Sorry, said often, and rarely an apology", say: "SOR-ee", word: "Sorry" },
      { mean: "A friendly tag on a sentence, right?", say: "ay", word: "Eh" },
      { mean: "Hello, in French Canada", say: "bawn-ZHOOR", word: "Bonjour" },
      { mean: "Thank you, in French Canada", say: "mair-SEE", word: "Merci" },
      { mean: "The one-dollar coin, with a loon on it", say: "LOO-nee", word: "Loonie" },
      { mean: "The two-dollar coin", say: "TOO-nee", word: "Toonie" },
    ],
    tip: "Two things are gloriously Canadian: <b>sorry</b>, said so often it is more reflex than apology, and <b>eh</b>, a warm little tag that turns a statement into a shared moment. In Québec, lead with <b>Bonjour</b>, and a cheerful Bonjour-Hi is common in Montréal shops.",
    stories: [
      { img: "/canada-culture-1.jpg",
        alt: "WPA-style illustration of French-Canadian voyageurs in sashes and caps paddling a long birchbark canoe laden with fur bundles across a still lake at dawn, pine shores behind",
        h: "The paddlers who opened a continent",
        p: "Long before roads or rails, French-Canadian voyageurs paddled birchbark canoes, a craft learned from the First Nations, thousands of miles along the rivers and lakes to trade furs. Singing to keep the rhythm, they could paddle for sixteen hours a day. Their routes traced the shape of the country to come.",
        note: "Good to know: the canoe routes became Canada's map" },
      { img: "/canada-culture-2.jpg",
        alt: "WPA-style illustration of a lone Mounted Police rider in a red serge tunic on horseback crossing a vast golden prairie under an enormous open sky",
        h: "Red coats on the plains",
        p: "The Mounties, Canada's famous police in scarlet coats, began in 1873 to bring order to the vast western plains. The old boast that they always get their man became legend, and the red serge is now a proud national symbol. You will still see it at ceremonies and on the celebrated Musical Ride.",
        note: "Good to know: the red serge dates from 1873" },
      { img: "/canada-culture-3.jpg",
        alt: "WPA-style illustration of children playing pond hockey on a frozen lake at dusk, wooden sticks and woolen hats, snow-laden pines and a lit cabin window beyond",
        h: "The game on the frozen pond",
        p: "When the ponds freeze, Canadians of every age lace up for hockey, the game closest to the national heart. Many a star first learned to skate on a backyard rink or a frozen pond, stick in hand, long before any arena. Ask a Canadian about their team and you may have a friend for life.",
        note: "Say it: a game of shinny on the pond" },
    ],
    pride: "Canadians are warm, understated and quick to make room for a newcomer. They are proud of the sheer scale of the place, the second largest country on Earth, of two founding languages, and of a national habit of kindness that the sorry and the eh only hint at."
  },

  spokes: [
    {
      slug: "bringing-your-pet",
      live: true,
      topic: "pets",
      title: "Bringing a dog or cat to Canada from the US (2026): rabies certificate, the border, and the trip home | True Trip Costs",
      description: "Moving to Canada with a pet from the US: why a current rabies vaccination certificate is essentially the whole requirement, no quarantine, no health certificate for adult pets, and what you need for the drive back. Checked July 2026.",
      h1: "Bringing your dog or cat to Canada.",
      lede: "Canada is one of the lightest-lift destinations for a US pet owner. For an adult dog or cat there is no health certificate, no quarantine, and no waiting period. One document does almost all the work: a valid rabies vaccination certificate. Here is exactly what the border wants, and the one thing to remember for the trip home.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "This is an easy one. For an adult dog or cat from the US, Canada asks for essentially <b>one document: a valid rabies vaccination certificate</b> from a licensed vet, in English or French, identifying your pet. There is <b>no health certificate for pets over the relevant age, no quarantine, and no waiting period</b>. You declare your pet to a border officer, who checks the rabies certificate and that the animal looks healthy, and you are through. Puppies and kittens under 3 months are exempt from the rabies requirement, and dogs under 8 months can need extra steps. Coming home, a dog needs the <b>CDC Dog Import Form and a microchip</b>, but no titer, because Canada is rabies-free. Cost and lead time are low: a vet visit and a few days of prep.",
      sections: [
        {
          h: "The one document that matters",
          p: [
            "For an adult pet, Canada's requirement comes down to a single piece of paper: a <b>valid rabies vaccination certificate</b>, issued by a licensed veterinarian, proving vaccination within the last 3 years. It must identify your pet and, to avoid trouble at the border, be written in English or French. The certificate should show the vaccination date, the expiry or validity period, and the vaccine product used.",
            "That is essentially the whole entry requirement for a dog over 3 months or a cat over 3 months. There is <b>no health certificate</b> for adult dogs and cats, no quarantine, no blood test, and no waiting period. The authority is the Canadian Food Inspection Agency (CFIA), and the check itself is done by a Canada Border Services Agency (CBSA) officer at the crossing."
          ]
        },
        {
          h: "The age rules that catch people out",
          p: [
            "Age is where Canada adds a little complexity, mostly for dogs. The clean, simple path applies to dogs over 8 months and to any dog or cat over 3 months carrying a rabies certificate. Below those thresholds, the rules branch."
          ],
          steps: [
            "Puppies and kittens under 3 months are exempt from the rabies vaccination requirement, but you must be able to prove the animal's age to border officials.",
            "Dogs under 8 months traveling with their owner need proof of current rabies vaccination if they are over 3 months, but no health certificate.",
            "Dogs under 8 months traveling unaccompanied (shipped without you) must be examined and have a health certificate issued by a licensed vet within 72 hours of arrival in Canada.",
            "Cats of any age over 3 months need only the rabies certificate; kittens under 3 months are exempt. Cats never need a health certificate for Canada."
          ]
        },
        {
          h: "Driving versus flying",
          p: [
            "Most US pet owners drive into Canada, and the land crossing is the simplest option: your pet stays in the vehicle, no airline policy applies, and there is no crate-size limit. Keep the rabies certificate with your own travel documents, declare the pet when the CBSA officer asks, and keep the animal calm and restrained. A visibly sick animal can be referred for inspection or refused, so travel with a pet that is in good shape.",
            "Flying is straightforward too, but it hands you the airline's rulebook on top of Canada's. Cabin size limits, cargo booking, and carrier requirements vary by airline, and a pet too large for the cabin travels as cargo at meaningfully higher cost. If you fly, confirm your carrier's pet policy well before you book."
          ]
        },
        {
          h: "The trip home",
          p: [
            "Canada is recognized as rabies-free, which makes the return leg to the US one of the easiest. A dog coming home needs a <b>CDC Dog Import Form</b> (you complete it online and carry the receipt), a microchip readable by a universal scanner, a minimum age of 6 months, and a healthy appearance on arrival. Because Canada is not high-risk for dog rabies, there is <b>no titer test and no quarantine</b>, and the form receipt can cover multiple entries for up to 6 months as long as your pet stays within the US, Canada, and Mexico.",
            "Cats returning to the US have essentially no federal requirement. For the full detail on the return, see our guide to <a href=\"/bringing-a-dog-into-the-us\">bringing a dog into the US</a>, and for how Canada stacks up against other destinations on effort and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."
          ]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Canada",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-canada",
        note: "The US-side summary of Canada's rules, including the rabies-certificate requirement and the age branches for dogs. The CFIA is the Canadian authority, and a CBSA officer runs the check at the border."
      },
      faqs: [
        { q: "What do I need to bring my dog or cat to Canada from the US?", a: "For an adult pet, essentially one thing: a valid rabies vaccination certificate from a licensed vet, within the last 3 years, in English or French, identifying your animal. There is no health certificate for adult dogs and cats, no quarantine, and no waiting period. You declare the pet at the border and an officer checks the certificate and that the animal looks healthy." },
        { q: "Does my pet have to quarantine in Canada?", a: "No. Canada has no quarantine for personal dogs and cats arriving from the US, and no blood test or waiting period. A healthy adult pet with a valid rabies certificate is cleared at the border." },
        { q: "What are the rules for puppies going to Canada?", a: "It depends on age and whether the puppy travels with you. Puppies under 3 months are exempt from rabies vaccination but you must prove their age. Puppies over 3 months traveling with their owner need proof of rabies vaccination. A puppy under 8 months shipped unaccompanied must be examined and have a health certificate issued within 72 hours of arrival." },
        { q: "What do I need to bring my dog back to the US from Canada?", a: "Because Canada is rabies-free, the return is easy: a CDC Dog Import Form (completed online, carry the receipt), a microchip, a minimum age of 6 months, and a healthy appearance. There is no titer test and no quarantine. Cats have no federal requirement returning to the US." }
      ],
      sources: {
        links: [
          { label: "USDA APHIS: pet travel from the United States to Canada, the rabies-certificate requirement and the dog age branches", url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-canada", type: "gov" },
          { label: "Canadian Food Inspection Agency (CFIA): bringing pets to Canada, the authority on the day of entry", url: "https://inspection.canada.ca/importing-food-plants-or-animals/pets/eng/1326600389775/1326600500578", type: "gov" },
          { label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, the CDC Dog Import Form and microchip rules for the return", url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html", type: "gov" }
        ],
        judgment: "Canada's entry rules are set by the CFIA and administered on the US side by APHIS, with the dog-return rules set by the CDC. The requirements are light and stable, but the dog age branches and the CDC return rules are the parts worth checking, so we point you to the official pages and dated this July 2026. Airline policies for flying add their own layer, so confirm your carrier's pet rules before booking."
      }
    },
    {
      slug: "cash-or-card",
      live: true,
      topic: "cash",
      title: "Do I need cash in Canada, or can I use cards? (2026) | True Trip Costs",
      description: "Barely any cash. Canada is tap-to-pay almost everywhere and you tip on the terminal. The catches: prices are shown before tax, skip the white-label ATMs, and choose Canadian dollars, not US dollars. Checked Jul 2026.",
      h1: "Do I need cash in Canada, or can I use cards?",
      lede: "Short answer: cards for almost everything, a little cash for markets and parking meters. Canada is nearly as tap-happy as it gets. The things to get right are the pre-tax price tag, the fee-heavy private ATMs, and the dollar prompt.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Cards, almost entirely. Canada is heavily <b>tap-to-pay</b>: Visa and Mastercard are accepted nearly everywhere, contactless and Apple Pay or Google Pay included, and the card terminal even handles the tip. Keep about <b>C$40 to C$60</b> in cash for farmers markets, food trucks, parking meters and small tips. Two things trip up first-timers: the <b>price on the tag is before tax</b> (5 to 15% is added at the register), and you should always choose <b>Canadian dollars, not US dollars</b>, at the terminal or ATM. For cash, use a <b>major bank ATM</b> and skip the private white-label machines.",
      sections: [
        {
          h: "Cards almost everywhere, a little cash for the edges",
          p: [
            "Canada runs on plastic and phones. <b>Visa and Mastercard</b> are taken almost everywhere, <b>contactless</b> is standard, and <b>Apple Pay and Google Pay</b> work at most terminals. Amex is accepted more widely than in much of Europe but still less than Visa or Mastercard, so treat it as a backup rather than your only card. You will see locals tap a card called <b>Interac</b>, the domestic debit network, but it is a Canadian-bank product you will not use, and your own tap works fine alongside it.",
            "Keep a little cash, roughly <b>C$40 to C$60</b>, for the genuinely cash-friendly corners: farmers markets, food trucks, some parking meters, tips for a bellhop or housekeeping, and the rare small shop that prefers it. Note there is <b>no penny</b> in Canada, so a cash total rounds to the nearest 5 cents, while a card charge is exact."
          ]
        },
        {
          h: "The price tag is pre-tax, and tips ride on top",
          p: [
            "This catches US visitors out even though it mirrors home. The <b>shelf or menu price does not include sales tax</b>: depending on the province, roughly <b>5% up to 15%</b> is added at the register, so you always pay a bit more than the number shown. Alberta and the territories are cheapest at 5%, while Ontario and Atlantic Canada run 13 to 15%.",
            "On top of tax, <b>tipping is US-style</b>: around 15 to 20% at sit-down restaurants and bars, prompted right on the terminal, which can suggest figures based on the post-tax total. It is a real part of the cost, so a listed C$100 dinner can land near C$130. The fuller tax and tipping picture, including the fact that there is <b>no general sales-tax refund</b> for visitors, is in the <a href=\"/canada\">Canada money guide</a>."
          ]
        },
        {
          h: "Choose Canadian dollars, not US dollars",
          p: [
            "When a card terminal or an ATM offers to charge you in <b>US dollars or Canadian dollars, always choose Canadian dollars</b>. Picking US dollars triggers dynamic currency conversion, a marked-up rate that quietly adds <b>3 to 8%</b>. Let your own bank do the conversion instead.",
            "A handful of border towns and tourist spots will <b>take US cash</b>, but at a poor rate, and your change comes back in Canadian dollars, so you lose either way. Pay and tip in <b>Canadian dollars</b>, and carry a card with <b>no foreign-transaction fee</b> so the card route stays cheap."
          ]
        },
        {
          h: "Getting cash: use a bank machine",
          p: [
            "For cash, use a <b>major bank ATM</b>: <b>RBC, TD, Scotiabank, BMO or CIBC</b>. Avoid the <b>private white-label machines</b> tucked into bars, hotels and convenience stores, which stack steep surcharges on top of your own bank's fee. Most machines dispense C$20 notes, so ask for an amount that is not all in fifties if you want small bills.",
            "Use a <b>debit card</b> at the ATM rather than a credit card, since a credit-card withdrawal is a cash advance with a fee and interest from day one. Decline the machine's US-dollar conversion, take out a few days' worth at once to limit per-visit fees, and shield your PIN."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Canada?", a: "Very little. Cards and tap work almost everywhere, and you can tip on the terminal. Keep about C$40 to C$60 for farmers markets, food trucks, parking meters, small tips and the rare cash-only spot, and pull it from a major bank ATM if you run low." },
        { q: "Should I pay in Canadian or US dollars in Canada?", a: "Canadian dollars. If a card terminal or ATM offers to charge you in US dollars, decline it: that dynamic currency conversion adds roughly 3 to 8%. Some border and tourist businesses take US cash, but at a poor rate, and your change comes back in Canadian dollars." },
        { q: "Is sales tax included in prices in Canada?", a: "No, and it catches US visitors out even though it mirrors home. The shelf or menu price is before tax. Depending on the province, 5% (Alberta and the territories) up to 15% (Atlantic Canada) is added at checkout, and hotels usually add an accommodation levy on top." },
        { q: "Which ATM should I use in Canada?", a: "A major bank's machine: RBC, TD, Scotiabank, BMO or CIBC. Avoid the private white-label ATMs in bars, hotels and convenience stores, which charge high fees. Use a debit card rather than a credit card, and always decline the US-dollar conversion. Most machines dispense C$20 notes." }
      ],
      sources: {
        links: [
          { label: "Bank of Canada: the official Canadian-dollar exchange-rate reference", url: "https://www.bankofcanada.ca/rates/exchange/", type: "gov" },
          { label: "US Department of State: Canada country information, including safety context relevant to ATM use", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Canada.html", type: "gov" }
        ],
        judgment: "Canada is one of the more cashless countries, and card and ATM fees vary by your own bank, so much of this is our practical read. The exchange rate moves, sales-tax rates are set by each province, and the one firm rule is to decline US-dollar conversion. Checked July 2026."
      }
    },
    {
      slug: "staying-connected",
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "medium",
      title: "Staying connected in Canada (2026): check your US plan first, then the eSIM math | True Trip Costs",
      description: "In Canada your US plan may already cover you cheaply: T-Mobile includes it and Verizon and AT&T have 5 to 6 dollar a day Canada passes. If not, an eSIM beats the day pass. Watch the highway and park dead zones. Checked Jul 2026.",
      h1: "Staying connected in Canada.",
      lede: "Canada is the one trip on this list where your US plan may already have you covered without paying more, so start there. If it does not, or you want real data, an eSIM is cheaper than a day pass. The thing to plan for is the dead zones on rural highways and in the parks.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Check your <b>US plan first</b>. Canada is often bundled cheaply: <b>T-Mobile</b> includes it on most plans, and <b>Verizon and AT&amp;T</b> sell a Canada-and-Mexico pass for about <b>5 to 6 dollars a day</b> rather than the 12 dollars they charge for Europe. If your plan does not include it, or you want fast, generous data, a <b>Nomad eSIM</b> is cheaper and works from landing. Coverage in cities and towns is excellent on all three networks (<b>Rogers, Bell, Telus</b>), but expect <b>dead zones on rural highways and in the national parks</b>, so download offline maps for a road trip. Never roam <b>pay-per-use</b>, which runs about 2 dollars a megabyte.",
      sections: [
        {
          h: "Check your US plan first",
          p: [
            "Canada is the cheap exception among overseas trips, because it is usually lumped in with Mexico on US carrier plans. <b>T-Mobile</b> includes Canada roaming on most of its plans at no extra charge (at your normal speeds on the better plans, slower on others), and <b>Verizon and AT&amp;T</b> offer a <b>Canada and Mexico day pass around 5 to 6 dollars</b>, well under the roughly <b>12 dollars a day</b> those two charge for Europe. So before buying anything, check what your plan already includes.",
            "The one thing to avoid is roaming with <b>no plan at all</b>. Pay-per-use data runs about <b>2 dollars a megabyte</b>, which is thousands of dollars a gigabyte, and a phone burns data in the background even with the screen off. If you are not sure your plan covers Canada, <b>turn off data roaming</b> until you have sorted an eSIM or a pass."
          ]
        },
        {
          h: "When an eSIM is the better call",
          p: [
            "If your US plan does not include Canada, or includes it only at slow speeds, a <b>travel eSIM</b> is usually the cheapest way to get real data. A <b>Nomad eSIM</b> is a few dollars per gigabyte, activates before you fly, and works the moment you land, with no SIM counter and no hunting for a store. For a week or two of maps, rideshare and photos, it easily beats stacking up day-pass fees.",
            "Coverage is not the deciding factor here. Canada's three networks, <b>Rogers, Bell and Telus</b>, all offer strong service in the populated areas where you will spend most of your time, so the network behind your eSIM matters far less than it would somewhere remote. Set the eSIM up before departure, since you need a connection to install it."
          ]
        },
        {
          h: "The real catch: highway and park dead zones",
          p: [
            "Canada is vast, and coverage thins out fast once you leave town. Expect <b>no signal on long stretches of rural highway</b>, in the backcountry of parks like <b>Banff and Jasper</b>, and across much of the north. This catches road-trippers out, because the drive between two well-covered cities can have long gaps in the middle.",
            "The fix is simple: <b>download offline maps</b> (and any trail or park info) before you set off, tell someone your route if you are heading somewhere remote, and do not rely on a live connection for navigation on a backcountry drive. In the cities, by contrast, you will have fast 4G and 5G almost everywhere. For paying as you go, see <a href=\"/canada/cash-or-card\">cash or card in Canada</a>, and the <a href=\"/canada\">Canada money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Does my US phone plan work in Canada?", a: "Often yes, and cheaply. T-Mobile includes Canada roaming on most plans, and Verizon and AT&T sell a Canada and Mexico day pass around 5 to 6 dollars, versus about 12 dollars a day for Europe. Check what your plan includes before buying anything, and never roam with no plan, since pay-per-use runs about 2 dollars a megabyte." },
        { q: "Do I need an eSIM for Canada?", a: "Not always. If your US plan already covers Canada at a usable speed, you may not need anything. If it does not, or you want fast, generous data, a Nomad eSIM is a few dollars per gigabyte and works from landing, which beats stacking up day-pass fees on a longer trip." },
        { q: "Which Canadian network has the best coverage?", a: "Rogers, Bell and Telus all offer strong coverage in cities and towns, so for most travelers the differences are small. What matters more is that coverage thins out on rural highways and in the parks, so download offline maps for a road trip regardless of network or eSIM." },
        { q: "Will I have signal in Banff or on the highway?", a: "In the townsites, yes. On long rural highway stretches and in the backcountry of parks like Banff and Jasper, often not. Download offline maps before you drive, do not count on live navigation off the main routes, and let someone know your plan if you are heading somewhere remote." }
      ],
      sources: {
        links: [
          { label: "US Department of State: Canada country information and local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Canada.html", type: "gov" },
          { label: "Tom's Guide: a 2026 comparison of US carrier international roaming plans and day-pass prices", url: "https://www.tomsguide.com/us/wireless-carriers-international-travel-plans,review-4327.html", type: "guide" }
        ],
        judgment: "Carrier prices and inclusions change and depend on your exact plan, so treat the day-pass figures as a July 2026 snapshot and check your own plan. The steady points are that Canada is usually cheap to add to a US plan, that pay-per-use roaming is punishing, and that coverage is excellent in towns but patchy on rural highways and in the parks."
      }
    }
  ]
};
