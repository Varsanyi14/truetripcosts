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
  }
};
