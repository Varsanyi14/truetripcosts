export default {
  slug: "india",
  live: true,
  name: "India",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-10",
  emergency: { medical: "112", note: "112 is the single national emergency number, and 108 reaches an ambulance directly in most states.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "high",
  region: "Asia",
  signals: { cardFriendliness: 2, cashNeed: 4, taxRisk: 3, atmRisk: 4 },
  hook: "The country runs on QR-code payments, but cash still rules the street and cards fill the gap.",
  aliases: ["bharat", "delhi", "mumbai", "jaipur", "goa", "kerala", "rupee", "upi"],

  title: "Money in India (2026): Cash, Cards, UPI for Tourists, ATMs and GST | True Trip Costs",
  description: "How to handle money in India as a US traveler in 2026: why UPI runs everything (and how tourists can now tap in), how much cash to carry for autos and street food, cards in hotels and cities, fee-aware ATMs, the DCC trap, tipping, and GST on your bill. Checked July 2026.",

  h1: "Money in India, sorted.",
  lede: "A calm, current plan for the money side of your trip: India runs on instant QR-code payments, cash is still essential for the street, and a card covers the hotels and nicer spots. Here is how to combine all three without stress.",
  hero: {
    img: "/india-hero.jpg",
    h: 1375,
    alt: "A rose-pink old-city street at sunset with carved balconies and jharokha windows, bright blue studded wooden doors, marigold garlands hanging along the walls, string lights overhead, a mosque dome and minaret silhouetted against the setting sun, a figure in white walking away up the lane, and a steel thali of samosas, chutneys and paratha beside two glasses of lassi on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "India has three overlapping ways to pay, and the smart move is to carry all of them. The country runs on <b>UPI</b>, the instant QR-code system locals use for nearly everything, and foreign visitors can now tap in through a <b>prepaid \"tourist UPI\" wallet</b> loaded with an international card (set one up before you fly). Bring a <b>no-fee card</b> for hotels, malls and sit-down restaurants in the cities, and always keep some <b>rupees</b>, roughly 3,000 to 8,000 at a time, for autorickshaws, street food, small shops, temples and anywhere off the tourist track. Pull rupees from a bank ATM rather than the airport counter, and refuse the \"pay in dollars\" prompt on any card machine. There is no separate tourist tax, but hotel and restaurant bills carry GST, and a \"service charge\" is optional, not a tax.",

  meter: {
    heading: "Cash still runs the street, but QR payments and cards now cover a lot.",
    cashPct: 55,
    note: "A rough feel for everyday spending. It swings hard by setting: in a metro like Mumbai or Delhi you can go days on UPI and cards, while autorickshaws, street food, small vendors, temples, and anywhere rural still lean on cash. Cities like Varanasi and small towns are more cash-dependent than the big metros."
  },

  trio: [
    { sym: "cash", kind: "warn", h: "Cash", verd: "Still essential off the tourist track", p: "Rupees remain the backbone for autorickshaws, street food, small shops, markets, temples and rural areas. Notes come in 10, 20, 50, 100, 200 and 500 (the old 2,000 note was withdrawn, so decline one if offered). Carry a mix of smaller notes, since vendors often can't break a 500.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "qr", kind: "ok", h: "UPI (QR payments)", verd: "How India actually pays", p: "Locals pay by scanning QR codes through UPI, and you'll see it everywhere, even at roadside stalls. Foreign tourists historically couldn't use it, but prepaid \"tourist UPI\" wallets (UPI One World and similar) now let you load rupees with an international card and pay by QR. It's still evolving, so treat it as a strong option, not your only one.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "card", kind: "ok", h: "Your card", verd: "Great in cities, not the street", p: "Visa and Mastercard work at hotels, malls, and sit-down restaurants in the metros; Amex less widely. Bring at least two cards from different networks, tell your bank you're traveling, and note that US phone wallets (Apple Pay, Google Pay) have very limited acceptance here.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Set up a <b>tourist UPI wallet</b> (UPI One World or similar) and load some rupees, it works where cards don't.",
      "Bring a <b>no-foreign-fee card</b>, ideally two from different networks (Visa and Mastercard are safest), and tell your bank you'll be in India.",
      "Don't rely on <b>Apple Pay or Google Pay</b> from your US wallet; acceptance is very limited. India's \"Google Pay\" is a UPI app, a different thing.",
      "You can't easily buy rupees abroad and there are limits on bringing them in, so plan to get cash on arrival."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters, the rates are among the worst. Change only a little if you need instant cash.",
      "Pull rupees from a <b>bank ATM</b>, choose <b>rupees</b>, and <b>decline \"convert to USD.\"</b>",
      "Withdraw a decent amount at once: Indian ATMs charge a flat fee (often 150 to 300 rupees) per foreign withdrawal, and per-transaction limits are commonly 10,000 rupees.",
      "Aim to land with a little cash already, or grab some here, for the airport taxi and first tips."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>UPI or card</b> for hotels, restaurants and shops in the cities; <b>cash</b> for autos, street food, markets and temples.",
      "Keep small notes (10s, 50s, 100s) handy, and don't rely on vendors breaking a 500.",
      "Check the <b>bottom of restaurant bills</b> for a \"service charge\", it's optional (see below), and you can ask to remove it.",
      "<b>Always choose rupees</b>, never dollars, on any card terminal or ATM that asks."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Pay in rupees, always.</b> US dollars aren't accepted for everyday spending, and choosing dollars on a terminal (dynamic currency conversion) quietly adds 3 to 8%.",
      "<b>Check your notes.</b> Refuse torn or heavily worn notes and any 2,000 rupee note (withdrawn from circulation), since you may struggle to spend them."
    ], cta: null }
  ],

  cash: {
    rate: 94.5, cur: "INR", round: 100, defaultIndex: 1,
    rateNote: "Rough guide at about 94.5 rupees to the dollar in mid-2026, though it moves daily and the rupee has been weakening. A quick trick: divide rupees by roughly 95 (or by 100 for a slightly conservative figure), so 1,000 rupees is a bit over 10 dollars.",
    styles: [
      { n: "Budget",    per: 30,  cash: 0.7 },
      { n: "Mid-range", per: 80,  cash: 0.5 },
      { n: "Comfort",   per: 200, cash: 0.35 }
    ]
  },

  connectivity: {
    works: "Yes across cities, towns and most travel routes, and it's cheap. Jio and Airtel have the widest, fastest coverage, with strong 4G and expanding 5G; a tourist SIM is inexpensive with your passport and a photo, though activation can take a few hours to a day, so an eSIM bought before arrival is often smoother. A data connection matters more here than usual, since UPI payments, ride apps and maps all lean on it. Expect weaker signal in remote hills, deserts and some rural stretches, so download offline maps before heading off the main routes."
  },

  // TOURIST TAX (verified Jul 2026). India has NO per-night city/bed tourist tax of the kind
  // charged in Dubai or much of Europe. The relevant charge is GST (India's VAT), which applies
  // to hotel and restaurant bills:
  //   - Restaurants: typically 5% GST.
  //   - Hotels: by room tariff slab -> 0% up to Rs.1,000; 5% for Rs.1,001-7,500; 18% for Rs.7,500+.
  // GST is usually included/added on the bill and is not a per-night occupancy tax, so the
  // calculator adds nothing here (single "everywhere" region at 0). Separately, a "service
  // charge" some restaurants add is NOT a government tax and is optional (CCPA 2022: it cannot be
  // mandatory), which the taxfree/tipping text explains. There is no VAT-refund scheme for
  // tourists on general goods.
  tax: {
    unit: "flatPerNight",
    currency: "INR",
    capNights: null,
    note: "India has no separate per-night tourist or city tax. What affects your bill is GST (India's value-added tax) on hotels and restaurants, plus an optional restaurant \"service charge\" that is not a tax (see below), so there is nothing extra to estimate per night here.",
    regions: [
      { key: "everywhere", label: "Anywhere in India", rate: 0, note: "No nightly tourist tax applies. The charges you'll actually see are GST on hotel and restaurant bills, and an optional service charge at some restaurants that you can decline." }
    ]
  },

  currencyHeading: "The rupee, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "About 94.5 rupees to the dollar in mid-2026. To estimate dollars fast, divide the rupee amount by roughly 95, or just knock two zeros off for a rough, slightly low figure: 1,000 rupees is a bit over 10 dollars, 5,000 rupees about 53." },
    { sym: "smallnotes", k: "Notes and coins", v: "Notes run 10, 20, 50, 100, 200 and 500 rupees; the 500 is the largest in circulation since the 2,000 note was withdrawn in 2023. Coins go up to 20 rupees. Carry small notes, as autos, stalls and small shops often can't break a 500." },
    { sym: "qr", k: "India runs on UPI", v: "The way locals pay is UPI, scanning a QR code from a phone app, and it's everywhere, even with tiny vendors. Foreign visitors can now use it via prepaid tourist wallets loaded with an international card, which is worth setting up before you arrive." },
    { sym: "usd", k: "Rupees only, and hard to take home", v: "US dollars aren't accepted for everyday spending; everything is priced and paid in rupees. There are also limits on carrying rupees in or out of India, so get cash on arrival and spend or convert what's left before you fly home." }
  ],

  taxfree: {
    label: "Taxes and service charges",
    heading: "No tourist tax, but GST is on your bill, and \"service charge\" is optional.",
    text: "India does not levy a per-night tourist or city tax. What you'll see instead is <b>GST</b>, India's value-added tax. On <b>restaurant</b> bills it's usually <b>5%</b>. On <b>hotel</b> rooms it depends on the nightly rate: rooms up to about 1,000 rupees are exempt, rooms from roughly 1,001 to 7,500 rupees are taxed at <b>5%</b>, and rooms above 7,500 rupees at <b>18%</b>. GST is generally shown on the bill and, for hotels, tied to your room rate, so the higher rate mainly affects luxury stays. Separately, some restaurants add a <b>\"service charge\"</b> of around 5 to 10%. This is <b>not a government tax</b>: India's consumer authority has ruled it cannot be made mandatory, so you're within your rights to ask for it to be removed, and any tip is genuinely up to you. There is no VAT-refund scheme for tourists on general shopping."
  },

  // High-churn entry and tax facts, each tracked on its own with a status, an
  // effective date, a primary source and the date we last checked it. Rendered as
  // a small always-open card after the tax-free section.
  keyFacts: [
    { label: "India e-Tourist Visa (30-day, US citizens)", value: "about 25 dollars April to June, about 40 dollars July to March, on the official portal before you fly", status: "enacted", effective: null, source: "https://indianvisaonline.gov.in/evisa/", checked: "2026-07-11" }
  ],

  traps: [
    "<b>Pay in rupees, never dollars.</b> On card terminals and ATMs, choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%. Dollars aren't useful for everyday spending here anyway.",
    "<b>Refuse a 2,000 rupee note.</b> It was withdrawn from circulation in 2023, so if someone tries to pass you one as change, you may struggle to spend it. Also decline torn or heavily worn notes.",
    "<b>\"Service charge\" is not a tax, and not compulsory.</b> Some restaurants add 5 to 10% and hope you won't notice. You can ask to have it removed, and decide any tip separately.",
    "<b>Skip the airport and hotel exchange desks.</b> Their rates are among the worst. Use a bank ATM (choosing rupees), and withdraw a sensible amount at once since each foreign withdrawal carries a flat 150 to 300 rupee fee."
  ],

  tippingHeading: "Modest, in cash, and always in rupees.",
  tipping: "Tipping in India, sometimes called baksheesh, is common but rarely large, and it's genuinely appreciated since many service workers earn modest wages. At sit-down restaurants, around 10% is generous if no service charge has been added; if one has, an extra tip is optional. For everyday help, small amounts go a long way: 50 to 100 rupees per bag for a hotel porter, 50 to 100 rupees a day for housekeeping, 100 to 300 rupees for a full day with a driver, and 200 to 500 rupees for a good tour guide. Round up autorickshaw and taxi fares rather than adding a formal tip. Keep small notes on hand for this, and tip in rupees, not dollars, so no one loses out on an exchange.",
  sources: {
    changed: "Re-checked July 2026, all confirmed current. From 22 September 2025 India cut GST on hotel rooms: nothing below 1,000 rupees a night, 5% up to 7,500, and 18% above that. Restaurant food is generally 5%. There is still no separate per-night tourist or city tax.",
    links: [
      { label: "Press Information Bureau, Government of India: the September 2025 GST changes for hotels and the hospitality sector", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2169427", type: "gov" },
      { label: "ClearTax: how GST applies to hotel rooms and restaurants, with the current rate bands", url: "https://cleartax.in/s/impact-of-gst-hospitality-industry", type: "revenue" },
    ],
    judgment: "The daily cash share, tipping norms and likely ATM behavior are our own estimate from experience, not an official figure.",
  },

  faqs: [
    { q: "Can tourists use UPI in India?", a: "Increasingly, yes. UPI is how India pays, by scanning QR codes, and while foreign visitors once couldn't use it, prepaid \"tourist UPI\" wallets like UPI One World now let you load rupees with an international card and pay at QR-code merchants. It's still expanding, so set one up before you fly but keep a card and some cash as backup." },
    { q: "Do I need cash in India?", a: "Yes, especially off the tourist track. Autorickshaws, street food, small shops, markets, temples and rural areas still run largely on cash. In the big metros you can lean on UPI and cards, but carry rupees, roughly 3,000 to 8,000 at a time, and keep small notes since vendors often can't break a 500." },
    { q: "Should I pay in dollars or rupees on my card in India?", a: "Always rupees. US dollars aren't accepted for everyday spending, and if a terminal or ATM offers to charge you in dollars (dynamic currency conversion), it adds a padded rate of 3 to 8%. Paying in rupees and letting your own bank convert is cheaper." },
    { q: "What is the best way to get rupees in India?", a: "A bank ATM, choosing rupees and declining the \"convert to USD\" option. Indian ATMs charge a flat fee (often 150 to 300 rupees) per foreign withdrawal with per-transaction limits around 10,000 rupees, so withdraw a sensible amount at once. Avoid airport and hotel exchange counters, which have the worst rates." },
    { q: "Is there a tourist tax in India?", a: "No per-night tourist or city tax like Dubai or much of Europe charges. Instead there's GST (India's value-added tax): usually 5% on restaurant bills, and on hotels 5% for rooms up to about 7,500 rupees a night or 18% above that. A restaurant \"service charge\" is not a tax and is optional." },
    { q: "How much cash should I bring for a week in India?", a: "Rather than carrying a week's worth, withdraw as you go: roughly 3,000 to 8,000 rupees at a time covers autos, street food and small purchases, topped up from ATMs. Pair that with a tourist UPI wallet and a no-fee card for hotels and city restaurants. Budgets vary widely, from very cheap street eats to pricier metro dining." }
  ],

  culture: {
    heading: "A little Hindi goes a long way",
    intro: "A few words and a couple of stories that turn you from a tourist into a guest. Curiosity and warmth are met in kind across India, on a train, in a market, over a cup of chai.",
    phrases: [
      { mean: "Hello", say: "nuh-muh-STAY", word: "Namaste", native: "नमस्ते" },
      { mean: "Please", say: "KRIP-yaa", word: "Kripya", native: "कृपया" },
      { mean: "Thank you", say: "dhun-yuh-VAAD", word: "Dhanyavaad", native: "धन्यवाद" },
      { mean: "Delicious", say: "swaa-DISHT", word: "Swaadisht", native: "स्वादिष्ट" },
      { mean: "Beautiful!", say: "SOON-dur", word: "Sundar", native: "सुंदर" },
      { mean: "You're welcome", say: "koh-ee baat nuh-HEEN", word: "Koi baat nahin", native: "कोई बात नहीं" },
    ],
    tip: "India has many languages and English is widely spoken, but <b>Namaste</b> (palms together) is understood almost everywhere. Shukriya (shoo-kree-YAA) is a common everyday thank you.",
    stories: [
      { img: "/india-culture-1.jpg",
        alt: "WPA-style illustration of the Taj Mahal in soft pink dawn light reflected in its long water channel",
        h: "A monument to love",
        p: "The Mughal emperor Shah Jahan built the Taj Mahal as a tomb for his beloved wife Mumtaz Mahal, who died in childbirth. It took some twenty years and twenty thousand workers. Speak of it as a love story, not just a building, and it lands.",
        note: "Good to know: built by Shah Jahan for his wife Mumtaz" },
      { img: "/india-culture-2.jpg",
        alt: "WPA-style illustration of the four-lion stone capital of Emperor Ashoka atop a pillar at dawn",
        h: "The lions on the flag",
        p: "The four-lion capital of the ancient emperor Ashoka is India's national emblem, and the wheel beneath it, the Ashoka Chakra, sits at the center of the flag. Recognizing it shows you see India, not just a postcard.",
        note: "Good to know: the wheel on the flag is the Ashoka Chakra" },
      { img: "/india-culture-3.jpg",
        alt: "WPA-style illustration of a Diwali evening scene, rooftops and steps glowing with small oil lamps and marigold garlands",
        h: "The festival of lights",
        p: "Diwali is India's most beloved festival, when homes glow with rows of little oil lamps, diyas, marigolds, and sweets, celebrating light over darkness. Wishing someone a happy Diwali, or admiring the diyas, is always welcome.",
        note: "Say it: Diwali (dee-VAH-lee), the festival of lights" },
    ],
    pride: "India is astonishingly old and varied, thousands of years, many languages, countless traditions. Curiosity and respect for that richness, rather than treating it as one thing, open every door."
  },

  // HUB-AND-SPOKE SPOKES. Data-driven, single-source, each independently dated,
  // rendered by components/Spoke.astro via src/pages/[slug]/[spoke].astro.
  spokes: [
    {
      slug: "e-visa",
      live: true,
      topic: "visas",
      title: "How do US citizens get an India e-visa? (2026) | True Trip Costs",
      description: "US citizens need an India e-Tourist Visa, applied for online before you fly. The one official portal, the fees (from about $25), the 30-day, 1-year and 5-year options, and how to avoid the many sites that overcharge. Checked July 2026.",
      h1: "How do US citizens get an India e-visa?",
      lede: "Short answer: online, on one official government site, before you travel. US citizens need an India e-Tourist Visa, the process is straightforward, but the search results are full of overpriced middlemen. Here is the real fee and the real site.",
      checked: "Jul 2026",
      checkedISO: "2026-07-08",
      answer: "US citizens need an <b>India e-Tourist Visa</b>, applied for <b>online before you fly</b>, on the one official portal, <b>indianvisaonline.gov.in</b>. It comes in <b>30-day, 1-year and 5-year</b> versions, with fees <b>from about $25</b> (around $40 for the popular one-year multiple-entry), and approval usually takes a few days. There is no visa on arrival for tourists, and no land-border entry, you must fly in.",
      official: {
        label: "Official India e-Visa portal",
        url: "https://indianvisaonline.gov.in",
        note: "This is the only official Government of India e-Visa site. The whole application is here: fill the form, upload your passport page and a photo, and pay by card. Fees are seasonal and change, so confirm the current amount on the portal before you pay."
      },
      expediter: true,
      expediterNote: "India's form is fiddlier than most, and if you would rather have someone check it, or you are short on time, a private visa service can file it for a fee on top of the government charge. You never need one, the official portal above is cheaper, but for a complex trip some travelers use one.",
      expediterLabel: "File with a visa service",
      sections: [
        {
          h: "Which visa, and what it costs",
          p: [
            "There are three tourist e-Visa options: a <b>30-day</b>, a <b>1-year</b>, and a <b>5-year</b>, the longer two allowing multiple entries. Fees are set per country and shift seasonally, but for US citizens they run roughly: <b>about $25 for the 30-day</b> (cheaper, near $10, in the April to June low season), <b>about $40 for the 1-year</b>, and <b>about $80 for the 5-year</b>, plus a small card-processing charge. They are <b>non-refundable</b>, even if refused.",
            "On the 1-year and 5-year visas, US citizens can stay <b>up to 90 days at a time</b>, with a maximum of <b>180 days in a calendar year</b>. The visa runs from the <b>date it is issued</b>, not the date you arrive, so do not apply too early."
          ]
        },
        {
          h: "How to apply, step by step",
          p: [
            "Allow a few days, and apply a week or two ahead to be safe."
          ],
          steps: [
            "Go to the official portal, indianvisaonline.gov.in, and choose e-Tourist Visa. Go there directly, not through a search ad.",
            "Fill in your details and upload a passport-style photo and a scan of your passport page.",
            "Pay the fee by card. It is non-refundable, so check every field before you submit, no changes are allowed afterward.",
            "Wait for the approval (the ETA) by email, usually 2 to 5 business days. Print it and carry it, airlines check it at boarding and immigration checks it on arrival."
          ]
        },
        {
          h: "The official site, and the many that are not",
          p: [
            "India is one of the worst destinations for <b>visa middlemen</b>: search results overflow with sites that charge well above the government fee to file the same application, and some are outright scams. The only official portal is <b>indianvisaonline.gov.in</b>, so if a site charges noticeably more, it is adding a markup.",
            "India has also rolled out a separate <b>free online arrival form</b> for air travelers, filed before you land, which is distinct from the paid e-Visa. Complete that one on the official government portal too, and never pay for it."
          ]
        },
        {
          h: "A couple of gotchas",
          p: [
            "The e-Visa only works if you <b>fly in</b> through one of the designated airports or seaports, it is <b>not valid at land borders</b>, and it <b>cannot be extended</b>, so for longer you leave and reapply or get a regular visa. Your passport needs <b>6 months</b> of validity and a couple of blank pages.",
            "For how money works once you are there, cards, cash, ATMs and the rest, see the <a href=\"/india\">India money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa for India?", a: "Yes. US citizens need a visa, and the easiest route is the India e-Tourist Visa, applied for online at indianvisaonline.gov.in before you travel. There is no visa on arrival for tourists. It comes in 30-day, 1-year and 5-year versions, and you must fly in through a designated airport, the e-Visa is not valid at land borders." },
        { q: "How much is the India e-visa for US citizens?", a: "Fees are seasonal and set per country, but for US citizens they run roughly $25 for the 30-day (as low as about $10 from April to June), about $40 for the 1-year multiple-entry, and about $80 for the 5-year, plus a small card charge. They are non-refundable. Confirm the current fee on the official portal before you pay." },
        { q: "What is the official India e-visa website?", a: "indianvisaonline.gov.in, the only official Government of India e-Visa portal. India's search results are full of third-party sites that charge inflated fees for the same visa, and some are scams. Apply directly on the official site, and confirm the current fee there." },
        { q: "How long can US citizens stay in India on an e-visa?", a: "The 30-day visa allows 30 days. On the 1-year and 5-year multiple-entry visas, US citizens can stay up to 90 days per visit, with a maximum of 180 days in a calendar year. The e-Tourist Visa cannot be extended, so for a longer stay you must leave and reapply or get a regular visa through the embassy." }
      ],
      sources: {
        links: [
          { label: "Government of India: the official India e-Visa portal, application, fees and conditions", url: "https://indianvisaonline.gov.in", type: "gov" },
          { label: "US Department of State: the country information pages, the official router for entry and visa requirements by destination", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html", type: "gov" }
        ],
        judgment: "India's e-Visa fees are seasonal and set per country, and its arrival requirements have been changing, so confirm the current fee and rules on the official portal before you pay. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Which taxi app to use in India, and the airport tout trap (2026) | True Trip Costs",
      description: "Which ride app to install for India (Uber, Ola and the bike-taxi Rapido), how the airport touts and 'prepaid' scams work, why the Delhi Airport Express metro is the calm way in, and the note-switch trick to watch. Checked July 2026.",
      h1: "Taxi apps in India, and the airport touts to skip",
      lede: "India's taxis are cheap, but the first hour at the airport is where the tricks cluster. Here is the app to install, how to tell the real prepaid taxi from the touts, and the small scams to know once you are moving.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Install <b>Uber</b> or <b>Ola</b> before you land, and add <b>Rapido</b> for cheap motorbike and auto rides. All of them show a fixed price up front, so there is no meter argument. At the airport, ignore anyone who walks up offering a <b>taxi</b> or a <b>prepaid</b> ride, and use either your app's marked pickup zone or the official <b>prepaid taxi booth</b> run by the traffic police, which gives you a printed slip with a set fare. In <b>Delhi</b>, the <b>Airport Express metro</b> is fast, cheap and skips the traffic.",
      sections: [
        {
          h: "Which app to install",
          p: [
            "<b>Uber</b> and <b>Ola</b> are the two big ride apps in India, both showing a fixed price before you go and both covering the cities and airports a visitor is likely to use. <b>Rapido</b> is worth adding for the cheapest short hops, since it does motorbike rides and auto-rickshaws as well as cars. <b>inDrive</b>, where you propose a fare and the driver accepts or counters, is a common option too. Because the fare is agreed in the app, the meter never comes into it.",
            "One name to skip: <b>BluSmart</b>, the all-electric app, suspended its rides in 2025, so ignore it if you see it mentioned in older guides. Keep two apps installed, since drivers do cancel, and occasional driver strikes can thin availability for a day. On a normal day, though, opening Uber or Ola is by far the easiest way to get a fair price."
          ]
        },
        {
          h: "The airport touts, and the real prepaid counter",
          p: [
            "The classic Indian airport scene is a cluster of men approaching you as you exit, offering a <b>taxi</b> or a <b>prepaid</b> ride and quoting a fixed rate that turns out to be well over the odds, sometimes with a grab for your luggage to hurry you along. A sharper version has a driver insisting your hotel is <b>closed, full or unsafe</b>, then steering you to another one where he earns a commission. None of this is the official service.",
            "There are two safe answers. Book in your <b>app</b> and walk to its marked pickup zone, or use the <b>official prepaid taxi booth</b>, which is run by the traffic police and gives you a printed slip with a set fare that you hand to the assigned driver. In <b>Delhi</b>, those prepaid booths are now run with a cooperative called Bharat Taxi under the Delhi Traffic Police, and the fare is fixed and printed, so there is nothing to negotiate at the car."
          ]
        },
        {
          h: "Delhi: take the Airport Express metro",
          p: [
            "If you land in <b>Delhi</b>, the calmest way into the city is often the <b>Airport Express</b> metro line, which runs from Terminal 3 to New Delhi railway station in around twenty minutes for a few rupees, sidestepping the road traffic entirely. From the metro you can take a short app ride or auto to your hotel.",
            "It is a clean way to avoid the whole arrivals-hall scrum on your first day, when you are tired and least in the mood to argue over a fare. Other big cities have their own airport metro or rail links worth checking, but Delhi's is the one most visitors will use."
          ]
        },
        {
          h: "Autos, meters, the note-switch and paying",
          p: [
            "Away from the apps, <b>auto-rickshaw</b> drivers are legally meant to run the meter but often refuse and name a flat price, so either agree the number before you set off or just book the auto through Uber, Ola or Rapido for a fixed fare. Watch for the <b>note-switch</b> trick, where a driver takes your 500 rupee note, palms it, and shows you a 100, claiming you underpaid. Count your notes out loud, keep small change handy, or pay by card or UPI in the app to avoid cash disputes entirely.",
            "Tipping is not expected for a taxi, auto or app ride, though rounding up is a friendly gesture. For the wider money picture, including how much cash to carry and how card and UPI payments work, see the <a href=\"/india\">India money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Does Uber work in India?", a: "Yes. Uber operates across more than a hundred Indian cities, alongside Ola, the big local rival, and Rapido for cheap motorbike and auto rides. inDrive lets you negotiate the fare. BluSmart, the all-electric app, suspended its rides in 2025, so do not rely on it. All the main apps show a fixed price before you ride." },
        { q: "Which taxi app is best in India?", a: "Uber and Ola are both strong and widely covered, and either is a safe default. Rapido is the cheapest for short bike or auto hops where it operates. All show a fixed fare up front. Keep two installed, since drivers cancel and the occasional strike can thin availability, but on a normal day any of them beats haggling on the street." },
        { q: "Are the taxi touts at Indian airports a scam?", a: "The ones who approach you usually are. They quote a fixed rate that runs well over the real fare, or claim your hotel is closed to divert you to one that pays them a commission. Use your app's marked pickup zone, or the official prepaid taxi booth run by the traffic police, which issues a printed slip with a set fare. In Delhi, the Airport Express metro is faster and cheaper still." },
        { q: "Do auto-rickshaws use the meter in India?", a: "Legally they should, but many drivers refuse and quote a flat price, especially to visitors. Agree the fare before you set off, or book the auto through Uber, Ola or Rapido for a fixed price. Watch the note-switch trick, count your change, and paying by card or UPI in the app avoids cash disputes." }
      ],
      sources: {
        links: [
          { label: "US Department of State: India country information, general safety and local-travel context for US visitors", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/India.html", type: "gov" },
          { label: "Business Standard: coverage of Uber India's city reach and the suspension of the electric app BluSmart", url: "https://www.business-standard.com/topic/uber-india", type: "news" },
          { label: "Deccan Herald: reporting on BluSmart's suspension and its effect on airport rides", url: "https://www.deccanherald.com/india/karnataka/bengaluru/blusmart-crisis-affects-airport-commutes-the-most-3499219", type: "news" }
        ],
        judgment: "App coverage, fares and airport arrangements change, BluSmart's rides ended in 2025 and driver strikes flare up now and then, so check your app and the official prepaid counter, and treat rupee figures as a recent read. Checked July 2026."
      }
    }
  ]
};
