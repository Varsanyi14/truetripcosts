export default {
  slug: "china",
  iso2: "cn",
  live: true,
  name: "China",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-20",
  sources: {
    changed: "Sources added on first publish. Confirmed that US citizens need a tourist (L) visa for a normal round trip, with the 240-hour visa-free transit available only when continuing to a third country; that Alipay and WeChat Pay let foreign visitors link an international Visa or Mastercard without a Chinese bank account, with the limit raised to about 35,000 CNY per transaction in 2026; that China began enforcing penalties on merchants refusing cash from 1 February 2026; that standard VAT is 13% with a tourist departure refund of about 8 to 11%; and the yuan at about 6.8 to the US dollar.",
    links: [
      { label: "US State Department: China country information, entry requirements and the 240-hour transit", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/China.html", type: "gov" },
      { label: "China Visa Application Service Center: tourist (L) visa applications", url: "https://www.visaforchina.cn/", type: "gov" },
      { label: "China's State Taxation Administration: the departure VAT refund for overseas travelers", url: "https://www.chinatax.gov.cn/", type: "revenue" }
    ],
    judgment: "The daily cash share, tipping norms, likely ATM behavior, and the practical steps for setting up the pay apps and getting online are our own read from 2026 reporting and traveler experience, not a single official table. Payment rules and app behavior in China change quickly, so confirm anything critical before you travel."
  },
  emergency: { medical: "120", note: "China uses separate emergency numbers, with no single 911: 120 for an ambulance, 110 for police and 119 for fire. All are free and work from any phone, including a foreign SIM, but dispatchers mostly speak Mandarin, so ask a local to call if you can. For anything not life-threatening, a taxi or Didi is often faster than an ambulance.", checked: "Jul 2026", checkedISO: "2026-07-20" },
  insuranceLevel: "medium",
  region: "Asia",
  signals: { cardFriendliness: 3, cashNeed: 3, taxRisk: 2, atmRisk: 3 },
  hook: "China runs on mobile QR payments, and the big shift for visitors is that Alipay and WeChat Pay now let you link a foreign Visa or Mastercard, no Chinese bank account needed. Set both up before you fly, carry some yuan as a backup, and bring a card for hotels. Two more things to sort before you go: a visa, and a way around the Great Firewall.",
  aliases: ["china", "beijing", "shanghai", "guangzhou", "shenzhen", "chengdu", "xian", "xi'an", "guilin", "hangzhou", "great wall", "forbidden city", "cny", "rmb", "yuan", "renminbi", "chinese yuan", "alipay", "wechat pay", "prc", "mainland china"],

  title: "China money 2026: Alipay, WeChat Pay and cash",
  description: "Alipay and WeChat Pay now take foreign cards, so set both up before you fly. Physical cards work in few places, and tipping is not expected. Checked 2026.",

  h1: "Money in China, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your phone matters more than your wallet, how to set up the pay apps before you land, the cash worth carrying, and the two things first-timers forget, a visa and a way past the Great Firewall.",
  hero: {
    img: "/china-hero.jpg",
    h: 1375,
    alt: "A quiet grey-brick hutong alley in Beijing at dusk, with round red paper lanterns glowing on the courtyard walls and dark carved timber doors, strings of warm bulbs crossing overhead, the tiered silhouette of a traditional pagoda roof on the skyline, a lone figure walking away down the lane past a person sweeping and a cat on a step, and a steaming bamboo steamer of dumplings beside a small porcelain teapot and cup of tea on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "China is a <b>mobile-payment country</b>. Daily life runs on <b>Alipay and WeChat Pay</b>, and the change that makes a trip easy is that both now let you <b>link a foreign Visa or Mastercard</b> with just your passport and a face scan, <b>no Chinese bank account</b>. Set up <b>both apps before you fly</b>, since acceptance varies and one can work where the other fails. <b>Physical foreign cards</b> work at <b>international hotels, big retailers and major attractions</b> but are hit or miss at small places, so carry one mainly for hotels and for pulling yuan from a <b>Bank of China or ICBC ATM</b>. Keep some <b>cash (yuan)</b> as a backup, and note China <b>reaffirmed that shops must accept cash</b> from February 2026, though change can be scarce and the phone is king. Two more things to sort before you go: US citizens <b>need a tourist (L) visa</b> for a normal round trip (the visa-free option only applies if you are transiting onward to a third country), and the <b>Great Firewall</b> blocks Google, Maps and WhatsApp, so set up a <b>roaming eSIM</b> before you land. Prices include <b>13% VAT</b>, tipping is <b>not expected</b>, and a departure VAT refund of about 8 to 11% is there for bigger purchases.",

  recentChange: {
    date: "Jul 2026",
    text: "The way visitors pay in China has changed fast. Since late 2023, <b>Alipay and WeChat Pay</b> have let foreign travelers link an international <b>Visa or Mastercard</b> without a Chinese bank account, and in 2026 the limit was raised to about <b>35,000 CNY</b> (roughly 5,000 dollars) per transaction after identity verification. Set both apps up <b>before you fly</b>. And from <b>1 February 2026</b>, China began enforcing penalties on shops that refuse <b>cash</b>, so yuan is a reliable backup again, even though almost everyone pays by phone."
  },

  meter: {
    heading: "Your phone does most of the paying. Keep some yuan as a backup, and a card for hotels.",
    cashPct: 20,
    note: "A rough feel for everyday spending. Alipay and WeChat Pay, linked to a foreign card, cover almost everything from street food to metro gates. Cash is a legal, useful backup, especially at small vendors, temples and in rural areas, and a physical card is mainly for hotels and big stores."
  },

  trio: [
    { sym: "qr", kind: "ok", h: "Your phone", verd: "This is how you pay", p: "<b>Alipay and WeChat Pay</b> are how China pays, and both now take a linked <b>foreign Visa or Mastercard</b> with passport and face verification, no Chinese bank account. You either scan a merchant's QR code or show your own to be scanned. <b>Set up both apps before you fly</b>, since one can be accepted where the other is not.", cta: { label: "How to set them up", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "A useful backup", p: "Almost everyone pays by phone, but <b>yuan still works</b>, and from February 2026 shops face penalties for refusing it. Carry some <b>small notes</b> for tiny vendors, temples, markets and rural areas, and expect that change for large notes can be scarce.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "card", kind: "warn", h: "Your card", verd: "Mainly for hotels", p: "Foreign <b>Visa and Mastercard</b> work at international hotels, big retailers and major attractions, but are <b>hit or miss</b> at small local places. <b>Bank of China and ICBC</b> ATMs dispense yuan for a fee. Bring a card mostly as a hotel and ATM backup, and choose to be charged in <b>yuan</b>, not dollars.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "<b>Set up both Alipay and WeChat Pay</b> and link a foreign Visa or Mastercard. It needs passport and face verification that can take time, so do it at home, not at a turnstile.",
      "<b>Apply for your tourist (L) visa</b> in advance at a Chinese Visa Application Service Center. A normal round trip needs one; budget roughly 185 to 250 dollars all in.",
      "<b>Buy a roaming eSIM</b> (Airalo, Nomad or Holafly) so Google, Maps and WhatsApp work the moment you land. Do not plan around a VPN.",
      "Bring a <b>card for hotels</b>, tell your bank you are traveling, and plan to pull a little <b>yuan</b> from an ATM on arrival rather than buying it at home."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Your <b>eSIM</b> should already be working, so check Maps and WhatsApp load before you leave the terminal.",
      "If you want cash, use a <b>Bank of China or ICBC ATM</b> and take out enough for a few days.",
      "Open <b>Alipay or WeChat</b> and add the local <b>metro</b> card or ride pass in-app so the subway is a simple scan.",
      "Keep your <b>passport</b> handy for your hotel check-in and any SIM or refund steps."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Pay by phone</b> almost everywhere: scan the merchant code or show yours, for food, shops, taxis and the metro.",
      "Keep <b>small yuan notes</b> for tiny vendors, temples and rural stops.",
      "Use a <b>card for hotels</b> and big stores, and <b>Didi</b> for taxis.",
      "You need a data connection to pay by QR, so keep your <b>eSIM topped up</b>."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Do the setup at home.</b> Link Alipay and WeChat Pay to your card and buy a roaming eSIM before you fly, because behind the Great Firewall you cannot download a VPN or easily fix a payment app that will not verify.",
      "<b>On a physical card, choose yuan (CNY), not dollars.</b> If a hotel or shop terminal offers to charge in your home currency, decline, so your own bank sets the rate."
    ], cta: null }
  ],

  cash: {
    rate: 6.78, cur: "CNY", round: 20, defaultIndex: 1,
    rateNote: "About 6.8 yuan (CNY, also called renminbi or RMB) to the US dollar in 2026, so 100 yuan is roughly 15 dollars. This is only the cash-in-hand slice; most of your spending goes through Alipay or WeChat Pay on your phone.",
    styles: [
      { n: "Budget",    per: 40,  cash: 0.25, room: 45 },
      { n: "Mid-range", per: 85,  cash: 0.15, room: 95 },
      { n: "Comfort",   per: 165, cash: 0.10, room: 190 }
    ]
  },

  connectivity: {
    works: "This is the one thing to sort before you land. On a Chinese SIM or Wi-Fi, the Great Firewall blocks Google, Google Maps, Gmail, WhatsApp, Instagram, Facebook and YouTube, and VPNs became unreliable after a crackdown in 2026, so do not plan around one. The reliable fix is a roaming travel eSIM (Airalo, Nomad or Holafly), set up before you land: it routes your data through a network outside mainland China, so Google, WhatsApp and Maps work normally, and so do the Chinese apps you need like WeChat, Alipay and Didi. Apple Maps also works. Coverage is strong in the cities and along the high-speed rail, and thinner in remote areas. Because you need a connection to pay by QR code, keep the eSIM topped up. Most hotels have Wi-Fi, but it sits behind the same firewall, so your eSIM is what keeps your usual apps working."
  },

  flight: { low: 650, high: 1500, checked: "Jul 2026", checkedISO: "2026-07-20" },

  tax: {
    none: true,
    currency: "CNY",
    note: "China has no per-person nightly tourist tax to add at the desk. Prices include a 13% VAT on most goods, usually baked in, and upscale hotels and restaurants may add a service charge of about 10 to 15%. If you shop, you can claim a departure VAT refund of roughly 8 to 11% on eligible goods at participating stores, covered below."
  },

  currencyHeading: "The yuan, and why your phone matters more.",
  facts: [
    { sym: "qr", k: "Your phone is the wallet", v: "Alipay and WeChat Pay run daily life in China, and since late 2023 both let foreign visitors link an international Visa or Mastercard with just a passport and a face scan, no Chinese bank account. Set both up before you fly, since acceptance varies and one can work where the other fails." },
    { sym: "coins", k: "Quick conversion", v: "About 6.8 yuan (CNY), also called renminbi or RMB, to 1 US dollar in 2026, so 100 yuan is roughly 15 dollars and a 30 yuan noodle lunch is about 4 to 5 dollars. Prices include 13% VAT." },
    { sym: "cash", k: "Cash is a backup, not the default", v: "Almost everyone pays by phone, but cash still works, and from February 2026 shops face penalties for refusing it. Carry some small yuan notes for tiny vendors, temples and rural areas, though change for large notes can be scarce." },
    { sym: "card", k: "Physical cards, mainly for hotels", v: "Foreign Visa and Mastercard work at international hotels, big retailers and major attractions, but are hit or miss at small local places. Bank of China and ICBC ATMs dispense yuan for a fee. Bring a card mostly as a hotel and ATM backup." }
  ],

  taxfree: {
    label: "Taxes and the tourist refund",
    heading: "A 13% VAT in the price, and a departure refund on shopping.",
    text: "China keeps everyday tax simple: prices include a <b>13% VAT</b> on most goods, and there is <b>no nightly tourist tax</b> to hand over, though upscale hotels and restaurants may add a service charge. If you shop, you can claim a <b>departure VAT refund</b>: for 13% VAT goods the refund rate is about <b>11%</b>, and after a roughly 2% agency fee you keep close to <b>8 to 11%</b>. Since 2025 many stores offer an <b>instant refund at checkout</b>, paid to your Alipay, WeChat or card with a small hold placed on the card, and the minimum spend was lowered to <b>200 yuan</b> in one store on the same day. You still make a quick stop at the airport <b>customs</b> desk on the way out, keep the goods unused, and leave within <b>90 days</b> of the purchase."
  },

  keyFacts: [
    { label: "Tourist (L) visa for US citizens", value: "Required for a normal round trip, roughly 185 to 250 dollars all in, applied for in advance", status: "enacted", effective: null, source: "https://www.visaforchina.cn/", checked: "2026-07-20" },
    { label: "240-hour visa-free transit", value: "Up to 10 days without a visa only if continuing to a third country, via a designated port", status: "enacted", effective: "2024-12-17", source: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/China.html", checked: "2026-07-20" }
  ],

  traps: [
    "<b>Set up Alipay and WeChat Pay before you fly.</b> Linking a foreign card needs passport and face verification that can take time, and doing it at home avoids getting stuck at a turnstile. Set up both, since one can fail where the other works.",
    "<b>You need a visa, unless you are only transiting.</b> A normal US round trip needs a tourist (L) visa applied for in advance. The 240-hour visa-free entry applies only if you fly onward to a third country, not back to the US.",
    "<b>Get a roaming eSIM, and do not rely on a VPN.</b> The Great Firewall blocks Google, Maps and WhatsApp, and VPNs became unreliable in 2026. A roaming eSIM set up before you land keeps your usual apps and the Chinese ones working.",
    "<b>Carry some cash, and expect small change to be scarce.</b> Cash is a legal backup, but vendors often cannot break large notes, so keep 10, 20 and 50 yuan notes on hand.",
    "<b>On a physical card, choose yuan, not dollars.</b> If a hotel terminal offers to bill in your home currency, decline, so your own bank sets the rate rather than a poor one at the till."
  ],

  tippingHeading: "Not expected.",
  tipping: "Tipping is <b>not part of the culture</b> in mainland China. In everyday places, restaurants, taxis, cafes and shops, it is neither expected nor necessary, and a bill is simply the bill, so you do not need to tip a driver or a waiter. The exceptions are narrow: some <b>upscale hotels and restaurants add a service charge</b> of about 10 to 15% that stands in for a tip, and on an <b>organized tour</b> it has become common to tip the guide and driver a modest amount per day, often arranged through the tour company. Otherwise, keep your yuan, since no one is waiting for a tip. Note that this is mainland China; Hong Kong and Macau lean more toward tipping.",

  faqs: [
    { q: "How do I pay in China as a tourist?", a: "Mostly with your phone. Alipay and WeChat Pay run daily life, and since late 2023 both let foreign visitors link an international Visa or Mastercard with just a passport and a face scan, no Chinese bank account. Set up both apps before you fly, carry some yuan as a backup (shops must accept cash as of February 2026), and bring a physical card mainly for hotels." },
    { q: "Can I use my Visa or Mastercard in China?", a: "Physical foreign cards work at international hotels, big retailers and major attractions, but are hit or miss at small local places, where the phone is expected. The better move is to link your Visa or Mastercard to Alipay or WeChat Pay and pay by QR code, which works almost everywhere. Keep the physical card for hotels and for pulling yuan at a Bank of China or ICBC ATM." },
    { q: "Do US citizens need a visa for China?", a: "Yes, for a normal round trip. The US is not on China's visa-free list, so US passport holders need a tourist (L) visa, applied for in advance at a Chinese Visa Application Service Center, roughly 185 to 250 dollars all in. The only no-visa option is the 240-hour transit, which applies only if you are continuing to a third country, not flying back to the US. Tibet needs the L visa plus a separate permit." },
    { q: "Do I need cash in China?", a: "Some, as a backup. Almost everyone pays by phone with Alipay or WeChat Pay, but cash still works and, from February 2026, shops face penalties for refusing it. Carry small yuan notes for tiny vendors, temples, markets and rural areas, and pull more from a Bank of China or ICBC ATM. Expect that change for large notes can be scarce." },
    { q: "Will Google Maps and WhatsApp work in China?", a: "Not on a Chinese network. The Great Firewall blocks Google, Google Maps, Gmail, WhatsApp, Instagram, Facebook and YouTube, and VPNs became unreliable after a 2026 crackdown. The reliable fix is a roaming travel eSIM set up before you land, which routes your data outside mainland China so those apps work normally, along with the Chinese ones. Apple Maps also works." },
    { q: "Is there tipping or a tourist tax in China?", a: "Tipping is not expected in mainland China, so a bill is the bill, aside from a service charge at some upscale places and modest tips on organized tours. There is no per-person nightly tourist tax. Prices include a 13% VAT, and if you shop you can claim a departure VAT refund of about 8 to 11% on eligible goods at participating stores." }
  ],

  culture: {
    heading: "A few Mandarin words go a long way",
    intro: "Mandarin is the language of China, and it is tonal, so nobody expects fluency, but a warm ni hao and xiexie open doors. China is one of the world's oldest continuous civilizations, proud of its food, history and traditions, and a little curiosity marks you as a traveler rather than a tourist.",
    phrases: [
      { mean: "Hello", say: "nee-HOW", word: "Ni hao", native: "\u4F60\u597D" },
      { mean: "Thank you", say: "SYEH-syeh", word: "Xiexie", native: "\u8C22\u8C22" },
      { mean: "Please", say: "cheeng", word: "Qing", native: "\u8BF7" },
      { mean: "How much is it?", say: "dwoh-shao CHYEN", word: "Duoshao qian", native: "\u591A\u5C11\u94B1" },
      { mean: "Delicious", say: "hun how-CHRR", word: "Hen haochi", native: "\u5F88\u597D\u5403" },
      { mean: "Cheers", say: "gan-BAY", word: "Ganbei", native: "\u5E72\u676F" }
    ],
    tip: "A little Mandarin goes a long way, and <b>ni hao</b> (hello) and <b>xiexie</b> (thank you) are always welcome. When tea is poured for you, the traditional way to say thank you without interrupting the conversation is a light <b>tap of two fingers</b> on the table.",
    stories: [
      { img: "/china-culture-1.jpg",
        alt: "WPA-style vintage travel poster of the Great Wall of China winding along a green mountain ridge with square stone watchtowers, layered blue peaks behind and pine trees in the foreground",
        h: "The Great Wall",
        p: "The Great Wall snakes for thousands of miles across northern China, built and rebuilt over many dynasties and largely what you see today from the Ming era. It climbs ridgelines and drops into valleys, studded with watchtowers. The restored sections nearest Beijing, like Badaling and Mutianyu, are the easiest to visit on a day trip.",
        note: "Good to know: the Wall runs for thousands of miles" },
      { img: "/china-culture-2.jpg",
        alt: "WPA-style vintage travel poster of the Forbidden City in Beijing, an imperial palace hall with a golden tiled roof, red columns, white marble terraces and a bronze guardian lion under a warm sky",
        h: "The Middle Kingdom",
        p: "For nearly five hundred years the emperors of China ruled from the Forbidden City in Beijing, a vast walled palace of golden roofs and red walls said to hold around nine thousand rooms. China calls itself the Middle Kingdom, and as one of the oldest continuous civilizations on Earth, its history is written into its palaces, temples and cities.",
        note: "Good to know: the palace is said to have around 9,000 rooms" },
      { img: "/china-culture-3.jpg",
        alt: "WPA-style vintage travel poster of two giant pandas resting and eating bamboo among green bamboo groves and soft misty hills",
        h: "The giant panda",
        p: "The giant panda, native to the misty bamboo forests of Sichuan in China's southwest, is the country's most beloved animal and a global symbol of conservation. Pandas spend much of the day eating bamboo, up to twelve hours of it, and you can see them at the research bases around Chengdu, where decades of work have brought the species back from the brink.",
        note: "Good to know: pandas eat bamboo up to 12 hours a day" }
    ],
    pride: "China is one of the world's oldest continuous civilizations, and it shows in everything from the Great Wall to the daily ritual of tea. Mandarin is the most widely spoken first language on Earth, and travelers who arrive curious, about the food, the history and the sheer scale of a country of 1.4 billion people, are richly rewarded."
  },

  spokes: [
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Not customary" },
        { k: "Restaurants, taxis", v: "No tip" },
        { k: "Exceptions", v: "Tour guides and drivers" },
        { k: "High-end hotels", v: "A small tip is fine" }
      ],
      live: true,
      topic: "tipping",
      title: "Do you tip in China? Not at restaurants or taxis",
      description: "Tipping is not customary in China at restaurants or in taxis. The exceptions for tour guides and hotel staff, and how service charges work. Checked 2026.",
      h1: "Tipping in China",
      lede: "China is not a tipping country. At everyday restaurants and in taxis, no tip is expected, and it can even cause confusion. The exceptions are tour guides and drivers, and high-end hotels. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "China is <b>not a tipping country</b>. At <b>everyday restaurants, cafes and in taxis</b>, <b>no tip is expected</b>, and offering one can cause mild confusion. Staff are paid a wage and do not rely on tips. The main <b>exceptions</b> are <b>tour guides and drivers on organized tours</b>, where a tip is expected and often built into the tour culture, and <b>high-end international hotels</b>, where a small tip for a porter is fine. Some <b>upscale or Western restaurants</b> add a <b>service charge</b>, so check the bill. Otherwise, keep your money.",
      sections: [
        {
          h: "You do not tip in everyday China",
          icon: "notip",
          key: { fig: "No tip", tag: "Not customary", text: "At everyday restaurants, cafes and in taxis, no tip is expected. Staff earn a wage, and offering a tip can cause mild confusion.", tone: "teal" },
          p: [
            "In everyday China, <b>tipping is simply not part of the culture</b>. At <b>local restaurants, cafes and food stalls</b>, and in <b>taxis and rideshare</b>, <b>no tip is expected</b>, and trying to leave one can be waved off or cause mild confusion. Staff earn a wage and do not depend on tips.",
            "This is genuinely a place where you can <b>relax about it</b>: the total on the bill or the meter is what you pay, full stop."
          ]
        },
        {
          h: "The exceptions: guides, drivers, hotels",
          icon: "tip",
          key: { fig: "Guides, drivers", tag: "Where a tip is expected", text: "Tour guides and drivers on organized tours are the main exception and do expect a tip. A small tip for a porter at a high-end hotel is also fine.", tone: "teal" },
          p: [
            "There are a few exceptions. <b>Tour guides and drivers on organized tours</b> are the main one: tipping them at the end of a tour is <b>expected</b>, and group tours often suggest a per-day amount. <b>High-end international hotels</b> are the other: a <b>small tip for a porter</b> or for exceptional service is fine, though not required.",
            "Some <b>upscale restaurants and hotels</b> add a <b>service charge</b> (often 10 to 15%) to the bill. If it is there, that stands in for a tip, so you do not add more."
          ]
        },
        {
          h: "The rest, and paying",
          icon: "cash",
          key: { fig: "Keep it", tag: "No taxi or restaurant tip", text: "Do not tip taxis or local restaurants. Note that daily payment runs on mobile apps, but that is separate from tipping.", tone: "teal" },
          p: [
            "Do <b>not</b> tip <b>taxi drivers</b> or at <b>local restaurants</b>; it is not expected and the fare or bill is final. Day-to-day payment in China runs heavily on <b>mobile apps</b> (WeChat Pay and Alipay), but that is about <b>how you pay</b>, not tipping. For the wider picture, see <a href='/china/how-to-pay-in-china'>how to pay in China</a> and the <a href='/china'>China money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in China?", a: "Generally no. Tipping is not customary at everyday restaurants, cafes or in taxis, and staff do not rely on it. The main exceptions are tour guides and drivers on organized tours, who do expect a tip, and high-end international hotels." },
        { q: "Do you tip taxi drivers in China?", a: "No. Tipping taxi drivers is not expected in China; the meter fare is what you pay. The same goes for rideshare, where the app total is final." },
        { q: "Is there a service charge in Chinese restaurants?", a: "At everyday places, no. Some upscale restaurants and high-end hotels add a service charge, often 10 to 15%. If it is on the bill, it stands in for a tip, so you do not add more." },
        { q: "Should I tip a tour guide in China?", a: "Yes. Tour guides and drivers on organized tours are the main exception to China's no-tipping norm, and a tip at the end is expected. Group tours often suggest a per-day amount per traveler." }
      ],
      sources: {
        links: [
          { label: "US State Department: China country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/China.html", type: "gov" }
        ],
        judgment: "China's no-tipping norm is well established, with tour guides, drivers and high-end hotels the recognized exceptions. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "how-to-pay-in-china",
      glance: [
        { k: "Pay with", v: "Alipay and WeChat Pay" },
        { k: "Link", v: "Visa/Mastercard, passport + face scan" },
        { k: "No need for", v: "A Chinese bank account" },
        { k: "Backup", v: "Some cash and a physical card" }
      ],
      live: true,
      topic: "cash",
      title: "How to pay in China: Alipay, WeChat Pay, cash",
      description: "Alipay and WeChat Pay now take a foreign Visa or Mastercard with no Chinese bank account. Set both up before you fly, and carry some yuan as a backup.",
      h1: "How to pay in China",
      lede: "Short answer: your phone, not your wallet. Here is how to set up Alipay and WeChat Pay with your own card before you go, what cash to carry, and where a physical card still helps.",
      checked: "Jul 2026",
      checkedISO: "2026-07-20",
      answer: "With your <b>phone</b>. Alipay and WeChat Pay run daily life in China, and since late 2023 both let foreign visitors <b>link an international Visa or Mastercard</b> with just a passport and a face scan, <b>no Chinese bank account</b>. <b>Set up both apps before you fly</b>, since acceptance varies and one can work where the other fails. Carry some <b>yuan</b> as a backup (shops must accept cash as of February 2026), and bring a <b>physical card</b> mainly for hotels and for pulling yuan at a bank ATM.",
      official: {
        label: "US State Department: China country information",
        url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/China.html",
        note: "Useful background on local conditions and money in China. App rules change quickly, so check the in-app international section for the current setup steps."
      },
      sections: [
        {
          h: "Set up the apps at home",
          icon: "phoneok",
          key: { tag: "Set both up before you fly", text: "China runs on phone pay, so download Alipay and WeChat Pay and link your Visa or Mastercard with passport and face verification before you travel. Arriving without them ready can leave you stuck, and acceptance varies so have both.", tone: "amber" },
          p: [
            "Download <b>Alipay</b> and <b>WeChat Pay</b> before you travel, and in each one add your <b>Visa or Mastercard</b>, then complete <b>passport and face verification</b>. This can take time or hit a review, which is exactly why you do it at home rather than at a metro gate.",
            "Do <b>both</b>. Some merchants take one and not the other, so having both is the difference between paying and being stuck. In 2026 the spending limit for verified foreign users rose to about <b>35,000 CNY</b> (roughly 5,000 dollars) per transaction, enough for hotels and big purchases."
          ]
        },
        {
          h: "Cash as a backup",
          icon: "cash",
          key: { fig: "Cash OK", tag: "A backup", text: "Almost everything is paid by phone, but cash still works, and from February 2026 shops face penalties for refusing it. Pull yuan from a Bank of China or ICBC ATM.", tone: "teal" },
          p: [
            "Almost everything is paid by phone, but <b>cash still works</b>, and from <b>February 2026</b> shops face penalties for refusing it. Pull <b>yuan</b> from a <b>Bank of China or ICBC</b> ATM, and keep <b>small notes</b>, since vendors often cannot break a large bill.",
            "Cash is most useful for <b>tiny vendors, temples, markets and rural areas</b>, and as a fallback if an app has a bad moment."
          ]
        },
        {
          h: "Where a physical card helps",
          icon: "atm",
          key: { fig: "Hotels", tag: "Bring a card too", text: "Bring a foreign Visa or Mastercard for hotels, big retailers and major attractions, where it is generally accepted, and as your ATM card. At small local places, phone pay rules.", tone: "teal" },
          p: [
            "Bring a <b>foreign Visa or Mastercard</b> for <b>hotels, big retailers and major attractions</b>, where it is generally accepted, and as your ATM card. At small local places it is <b>hit or miss</b>, so do not rely on it there.",
            "One connection point to remember: you need <b>mobile data</b> to pay by QR code, so keep a <b>roaming eSIM</b> topped up. For the whole money picture, see the <a href=\"/china\">China money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do Alipay and WeChat Pay work with foreign cards in 2026?", a: "Yes. Both let foreign visitors link an international Visa or Mastercard with a passport and a face scan, no Chinese bank account needed, and in 2026 the per-transaction limit for verified users rose to about 35,000 CNY (roughly 5,000 dollars). Set up both apps before you fly, since verification can take time and one app can be accepted where the other is not." },
        { q: "Do I still need cash in China?", a: "Some, as a backup. The phone covers almost everything, but cash still works and shops must accept it as of February 2026. Carry small yuan notes for tiny vendors, temples, markets and rural areas, pull more from a Bank of China or ICBC ATM, and expect that change for large notes can be scarce." },
        { q: "Can I just use my credit card in China?", a: "Only partly. Physical foreign cards work at international hotels, big retailers and major attractions, but are hit or miss at small local places, so you cannot rely on a card alone. The better approach is to link your card to Alipay or WeChat Pay and pay by QR code, keeping the physical card for hotels and ATMs." },
        { q: "What happens if my payment app gets blocked or fails?", a: "It happens, which is why you set up both Alipay and WeChat Pay and also carry some cash. If one app fails at a merchant, try the other; if both stumble, pay cash. Verification issues usually clear within a day, and having done the setup at home means you are not troubleshooting behind the Great Firewall." }
      ],
      sources: {
        links: [
          { label: "US State Department: China country information and local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/China.html", type: "gov" }
        ],
        judgment: "The setup steps, limits and acceptance notes are our read from 2026 reporting and traveler experience, not a single official table, and app behavior changes quickly, so confirm the current in-app steps. Checked July 2026."
      }
    },
    {
      slug: "visa-and-transit",
      glance: [
        { k: "Visa", v: "Tourist (L) visa, in advance" },
        { k: "Cost", v: "About $185 to $250 all in" },
        { k: "No-visa option", v: "240-hour transit only" },
        { k: "Where", v: "A Chinese Visa Application Center" }
      ],
      live: true,
      topic: "visas",
      title: "China visa for US citizens, and 240-hour transit",
      description: "US citizens need a tourist L visa for a normal round trip. The only no-visa route is the 240-hour transit, and only if you fly on to a third country.",
      h1: "Do US citizens need a visa for China?",
      lede: "Short answer: yes, for a normal trip, and you apply in advance. The one exception is a transit rule that turns a stopover into a 10-day visit. Here is how each works.",
      checked: "Jul 2026",
      checkedISO: "2026-07-20",
      answer: "Yes, for a normal round trip. The <b>US is not on China's visa-free list</b>, so US passport holders need a <b>tourist (L) visa</b>, applied for in advance at a <b>Chinese Visa Application Service Center</b>, roughly <b>185 to 250 dollars</b> all in. The only no-visa option is the <b>240-hour (10-day) transit</b>, and only if you are continuing to a <b>third country</b> (not back to the US), entering and exiting through a designated port. <b>Tibet</b> needs the L visa plus a separate permit.",
      official: {
        label: "China Visa Application Service Center",
        url: "https://www.visaforchina.cn/",
        note: "The official route for tourist (L) visa applications. Confirm the current documents, fees and appointment steps for your nearest center before you apply."
      },
      expediter: true,
      expediterLabel: "Use a visa service",
      expediterNote: "Prefer to hand off the paperwork? A private visa service can prepare and file your Chinese tourist visa for you, for a fee on top of the consular cost.",
      sections: [
        {
          h: "The tourist (L) visa",
          icon: "receipt",
          key: { fig: "$185-250", tag: "Apply in advance", text: "The US is not on China's visa-free list, so apply for a tourist L visa in advance at a Chinese Visa Application Service Center, roughly $185 to $250 all in, with flights, hotels and an application form.", tone: "teal" },
          p: [
            "For a standard visit, apply for an <b>L visa</b> in advance. You submit your passport, a photo to spec, an application form and supporting documents (flights, hotels, sometimes an itinerary) to a <b>Chinese Visa Application Service Center</b>, in person or by an agent.",
            "For US citizens the fee is a <b>reciprocity fee of about 140 dollars</b>, flat whether you want single, double or the <b>10-year multiple-entry</b> visa, plus a service charge, so budget roughly <b>185 to 250 dollars</b> all in. The reduced fee structure runs through the end of 2026. If you will return within ten years, ask for the 10-year visa."
          ]
        },
        {
          h: "The 240-hour visa-free transit",
          icon: "plane",
          key: { fig: "240 hours", tag: "Stopover only", text: "If China is a stopover on the way to a third country, you may enter visa-free for up to 240 hours, about 10 days. This replaced the 144-hour rule in December 2024, and covers many cities.", tone: "teal" },
          p: [
            "If China is a <b>stopover on the way to a third country</b>, you may enter visa-free for up to <b>240 hours</b>, about 10 days. This replaced the old 144-hour rule in December 2024 and now covers <b>65 ports across 24 regions</b>, and you can move between provinces within the window.",
            "The catch is the wording: you need an <b>onward ticket to a different country or region</b> (Hong Kong and Macau count), and it does <b>not</b> work for a round trip back to the US. So US to China to Japan qualifies; US to China to US does not."
          ]
        },
        {
          h: "A few special cases",
          icon: "alert",
          key: { tag: "Tibet and Hainan differ", text: "Tibet needs the L visa plus a Tibet Travel Permit arranged through a tour operator. Hainan has its own 30-day visa-free scheme via a registered tour, so check the rules for where you are going.", tone: "amber" },
          p: [
            "<b>Tibet</b> requires the L visa <b>plus a Tibet Travel Permit</b>, arranged through a tour operator. <b>Hainan</b> has its own 30-day visa-free scheme via a registered tour, and there is a 15-day cruise route.",
            "<b>Hong Kong</b> (90 days) and <b>Macau</b> (30 days) are visa-free for US citizens and are treated separately from mainland China. For the money side of a China trip, see the <a href=\"/china\">China money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa to visit China in 2026?", a: "Yes, in almost all cases. The US is not on China's visa-free list, so a normal round trip needs a tourist (L) visa applied for in advance at a Chinese Visa Application Service Center, roughly 185 to 250 dollars all in. The exception is the 240-hour transit, which works only if you are continuing to a third country rather than flying back to the US." },
        { q: "How much does a Chinese tourist visa cost for Americans?", a: "About 140 dollars in the reciprocity fee, which is flat whether you choose single, double or the 10-year multiple-entry visa, plus a service center charge, so roughly 185 to 250 dollars all in. The reduced fee structure runs through the end of 2026. If you expect to return within ten years, the 10-year multiple-entry visa costs the same, so it is worth requesting." },
        { q: "What is the 240-hour visa-free transit, and can Americans use it?", a: "It lets eligible travelers, including US passport holders, stay up to 10 days without a visa when China is a stopover to a third country. You need an onward ticket to a different country or region (Hong Kong and Macau count) and must enter and exit through a designated port. It does not apply to a round trip back to the US." },
        { q: "Do I need anything special to visit Tibet?", a: "Yes. Tibet requires a Chinese tourist (L) visa plus a separate Tibet Travel Permit, which is arranged through a registered tour operator rather than applied for directly. Independent travel is restricted, so most visitors go as part of an organized tour that handles the permit." }
      ],
      sources: {
        links: [
          { label: "US State Department: China entry requirements and the 240-hour transit", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/China.html", type: "gov" },
          { label: "China Visa Application Service Center: tourist (L) visa applications", url: "https://www.visaforchina.cn/", type: "gov" }
        ],
        judgment: "Visa fees, transit ports and the reduced-fee window can change, so confirm the current rules and costs on the official pages before you apply or book. Checked July 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "The key", v: "A roaming eSIM, set up before you fly" },
        { k: "Firewall blocks", v: "Google, Maps, WhatsApp, Instagram" },
        { k: "VPNs", v: "Unreliable since a 2026 crackdown" },
        { k: "eSIM routes via", v: "Hong Kong or Singapore" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      title: "eSIM for China: the Great Firewall and VPNs 2026",
      description: "The Great Firewall blocks Google, Maps and WhatsApp, and VPNs turned unreliable in 2026. A roaming eSIM set up before you land keeps your apps working.",
      h1: "Staying connected in China",
      lede: "Short answer: sort this before you land, because it affects how you pay too. Here is why a VPN is the wrong plan in 2026, and why a roaming eSIM is the right one.",
      checked: "Jul 2026",
      checkedISO: "2026-07-20",
      answer: "Set up a <b>roaming eSIM</b> before you fly. On a Chinese network the <b>Great Firewall</b> blocks Google, Google Maps, Gmail, WhatsApp, Instagram, Facebook and YouTube, and <b>VPNs became unreliable</b> after a 2026 crackdown, so do not plan around one. A roaming eSIM (Airalo, Nomad or Holafly) routes your data <b>outside mainland China</b>, so those apps work normally, and so do <b>WeChat, Alipay and Didi</b>. This matters for money too, since you need a connection to pay by QR code.",
      official: {
        label: "US State Department: China country information",
        url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/China.html",
        note: "Background on local conditions, including connectivity. The specific app and VPN situation changes often, so treat any single source as a snapshot."
      },
      sections: [
        {
          h: "Why not a VPN",
          icon: "alert",
          key: { tag: "VPNs now fail", text: "For years the advice was a VPN. A 2026 crackdown took most out, so they now often fail to connect rather than just run slow. Do not plan your trip around one.", tone: "amber" },
          p: [
            "For years the advice was to install a VPN. In <b>2026 that broke</b>: a crackdown took most VPNs out, so they now often fail to connect rather than merely running slow. A short trip has no slack for a method that mostly fails, and you <b>cannot download or fix a VPN</b> once you are behind the firewall.",
            "You also cannot rely on hotel Wi-Fi, since it sits behind the <b>same firewall</b> as any Chinese connection."
          ]
        },
        {
          h: "Why a roaming eSIM works",
          icon: "qr",
          key: { fig: "Via HK/SG", tag: "Bypasses the firewall", text: "A roaming travel eSIM (Airalo, Nomad or Holafly) connects to a Chinese tower but sends your data out through Hong Kong or Singapore, so it never passes through the Great Firewall filter.", tone: "teal" },
          p: [
            "A <b>roaming travel eSIM</b> connects to a Chinese tower for signal but sends your data out through a network in <b>Hong Kong or Singapore</b>, so it never passes through the filtered Chinese internet. Google, Maps and WhatsApp just work, with no VPN to install, and the Chinese apps you need work too.",
            "Set it up <b>before you land</b>, since you need a working connection to activate it, and keep it <b>topped up</b>, because you rely on data to pay by QR code. Providers like <b>Airalo, Nomad and Holafly</b> all sell China-capable roaming plans."
          ]
        },
        {
          h: "Maps and the apps that matter",
          icon: "phoneok",
          key: { fig: "Apple Maps", tag: "What works", text: "On an iPhone set to a non-China region, Apple Maps works with no VPN and is accurate in the cities. Didi is the ride app, and the metro pays by QR inside Alipay or WeChat.", tone: "teal" },
          p: [
            "On an <b>iPhone set to a non-China region</b>, Apple Maps works with no VPN at all and is accurate in the cities. For getting around, <b>Didi</b> is the ride app, and the metro runs off a QR pass inside Alipay or WeChat.",
            "For how all of this ties into paying, see the <a href=\"/china\">China money guide</a> and the <a href=\"/china/how-to-pay-in-china\">how to pay in China</a> guide."
          ]
        }
      ],
      faqs: [
        { q: "Does WhatsApp work in China?", a: "Not on a Chinese network, where the Great Firewall blocks it along with Google, Maps, Gmail, Instagram, Facebook and YouTube. It works if you route around the firewall, and in 2026 the reliable way is a roaming travel eSIM set up before you land, since VPNs became unreliable after a crackdown. On the eSIM, WhatsApp calls and messages work normally." },
        { q: "Should I use a VPN in China in 2026?", a: "It is no longer a reliable plan. A 2026 crackdown broke most VPNs, so they often fail to connect, and you cannot download or troubleshoot one once you are behind the firewall. Use a roaming eSIM instead, which bypasses the firewall at the network level, and treat any VPN as a backup at best." },
        { q: "Will Google Maps work in China?", a: "Not on a Chinese SIM or Wi-Fi. It works on a roaming eSIM, which routes your data outside mainland China. On an iPhone set to a non-China region, Apple Maps also works with no VPN and is accurate in major cities, so between the two you can navigate normally." },
        { q: "How does connectivity affect paying in China?", a: "Directly. Alipay and WeChat Pay work by scanning QR codes, which needs a data connection, so if you are offline you cannot pay by phone. A roaming eSIM keeps you connected for payments as well as maps and messaging, which is why setting one up before you land is part of the money plan, not just a convenience." }
      ],
      sources: {
        links: [
          { label: "US State Department: China country information and local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/China.html", type: "gov" }
        ],
        judgment: "Which apps are blocked, and how well VPNs and eSIMs work, can shift quickly in China, so treat this as a July 2026 snapshot and check current guidance before you travel."
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Best app", v: "Didi (has English)" },
        { k: "Pay", v: "Through Alipay or WeChat" },
        { k: "Metro", v: "Cheap, QR pass in the app" },
        { k: "Between cities", v: "High-speed rail" }
      ],
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Getting around China: Didi, metro, high-speed rail",
      description: "Didi is the ride app and has an English option, the metro is cheap and pays by QR, and fast trains link the cities. Use the meter in street taxis.",
      h1: "Getting around China: Didi and the metro",
      lede: "Short answer: Didi for taxis, a QR pass for the metro, and the train between cities. Here is how each works, and the one or two things to watch.",
      checked: "Jul 2026",
      checkedISO: "2026-07-20",
      answer: "Use <b>Didi</b>, China's ride app, which has an <b>English option</b> and lets you pay through Alipay or WeChat, so there is no fare haggling or language barrier. The <b>metro</b> in big cities is cheap, fast and pays by a <b>QR pass</b> inside Alipay or WeChat. For street taxis, use the <b>meter</b> or agree the fare first. Between cities, the <b>high-speed rail</b> is excellent, and you book with your passport.",
      official: {
        label: "US State Department: China country information",
        url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/China.html",
        note: "General guidance on transport and local conditions in China. Confirm current fares and booking steps locally."
      },
      sections: [
        {
          h: "Didi first",
          icon: "phoneok",
          key: { fig: "Didi", tag: "English, no haggling", text: "Didi is China's ride app and the easy choice: switch it to English and pay through your linked Alipay or WeChat, so there is no fare haggling and no language barrier.", tone: "teal" },
          p: [
            "<b>Didi</b> is how most people get around China's cities, and it is the easy choice for visitors: switch it to <b>English</b>, and pay through your linked <b>Alipay or WeChat</b>, so you see the route and price up front with no cash to fumble.",
            "It needs a data connection, so keep your <b>eSIM</b> topped up. Drivers may call to confirm pickup, which can be tricky across the language gap, so pin your location clearly in the app."
          ]
        },
        {
          h: "The metro and street taxis",
          icon: "alert",
          key: { tag: "Street taxis: use the meter", text: "The metro is cheap, clean and signposted in English, paid by QR pass in Alipay or WeChat. For street taxis, insist on the meter or agree the fare first, since visitors are sometimes overcharged.", tone: "amber" },
          p: [
            "The <b>metro</b> in Beijing, Shanghai and other cities is cheap, clean and signposted in English, and you pay with a <b>QR pass</b> in Alipay or WeChat, or buy a token with cash. It is often the fastest way across a big city.",
            "For <b>street taxis</b>, use the <b>meter</b> or agree the fare before you get in, keep small yuan notes in case the driver prefers cash, and have your destination written in <b>Chinese characters</b> to show, since many drivers do not read English."
          ]
        },
        {
          h: "Between cities: high-speed rail",
          icon: "ticket",
          key: { fig: "Fast rail", tag: "Often beats flying", text: "China's high-speed rail links cities at speed, often faster than flying once you count airports. Book with your passport through Alipay, WeChat or Trip.com.", tone: "teal" },
          p: [
            "China's <b>high-speed rail</b> is one of the best ways to travel, linking cities at speed and often faster than flying once you count airports. Book with your <b>passport</b>, through the official rail app or a booking site, and arrive early for the airport-style security.",
            "For the money side, tipping and setting up the pay apps, see the <a href=\"/china\">China money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is there an Uber in China?", a: "Not Uber itself, but Didi is China's ride app and works the same way, with an English-language option. You link it to Alipay or WeChat and pay in-app, so there is no haggling and no cash needed. It is the easiest way for visitors to get around cities, as long as your eSIM keeps you connected." },
        { q: "How do I pay for the metro in China?", a: "In most big cities you pay with a QR pass inside Alipay or WeChat, which you add once and then scan at the gate, or you can buy a single-journey token at a machine with cash. The metro is cheap, fast and signposted in English, making it one of the best ways to cross a large Chinese city." },
        { q: "Are taxis in China safe and metered?", a: "Registered city taxis are generally fine and use a meter; use the meter or agree the fare before setting off, and keep small yuan notes since some drivers prefer cash. The bigger hurdle is language, so have your destination written in Chinese characters to show the driver, or simply use Didi, which removes the issue." },
        { q: "Should I take the high-speed train between Chinese cities?", a: "Usually yes. China's high-speed rail is fast, comfortable and extensive, and on many routes it beats flying once you count airport time. Book with your passport through the official rail app or a reputable booking site, and arrive early, since stations have airport-style security and passport checks." }
      ],
      sources: {
        links: [
          { label: "US State Department: China country information and transport", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/China.html", type: "gov" }
        ],
        judgment: "App coverage, metro payment options and rail booking steps are our read from recent traveler reports, not an official transport table, so check current details locally. Checked July 2026."
      }
    },
    {
      slug: "money-scams",
      glance: [
        { k: "Most cost", v: "Avoidable entirely" },
        { k: "The big one", v: "Never follow a stranger" },
        { k: "Taxis", v: "Meter, app, or agree first" },
        { k: "Cash", v: "Small notes, check change" }
      ],
      live: true,
      topic: "scams",
      title: "Common money scams in China, and what they cost",
      description: "The tea house invitation, the art student gallery, taxi meter refusal and counterfeit notes in change. What each costs a US visitor, and the habit that beats nearly all of them.",
      h1: "Common money scams in China, and what they cost you",
      lede: "China is safe for the great majority of visitors, violent crime against foreigners is rare, and nearly everything below is defeated by one habit: do not follow a stranger who approached you to a venue you did not choose. These are ordinary money traps clustered around a few famous landmarks, plus the usual taxi and cash-handling ones. Here is each, what it costs, and how to sidestep it.",
      checked: "Aug 2026",
      checkedISO: "2026-08-15",
      answer: "A short list comes up again and again, almost all of it around a handful of landmarks: the <b>tea house invitation</b> and the <b>art student gallery</b>, where a friendly stranger walks you to a venue and the bill is inflated; the <b>bar or KTV</b> version of the same setup; <b>taxi</b> meter refusal, airport overcharging and the <b>note swap</b>; and <b>counterfeit notes</b> handed back as change. There is also a phone version, callers posing as <b>police</b> demanding a transfer. The golden rules that beat almost all of it: <b>never follow a street stranger to a venue</b>, <b>insist on the meter or use DiDi</b>, <b>pay by phone where you can</b>, and <b>check any note handed back to you</b>. None of it should shape your trip.",
      sections: [
        {
          h: "The invitation you did not ask for",
          icon: "receipt",
          key: { fig: "$75-300", tag: "Say no and walk", text: "A friendly stranger invites you to tea, an art show, a massage or a bar. The bill arrives inflated, typically 500 to 2,000 yuan, and your new friends melt away. Never follow a stranger to a venue.", tone: "teal" },
          p: [
            "This is the one to know, and Canada's travel advice names the exact places: <b>Tiananmen Square</b> in Beijing, and <b>the Bund, East Nanjing Road and People's Square</b> in Shanghai. A polite English-speaking stranger, often a pair, strikes up a conversation, then suggests a traditional tea ceremony, a look at their art school's exhibition, a massage or a nearby bar. Inside, you drink or eat modestly and are handed a bill that bears no relation to it. Typical bills run <b>500 to 2,000 yuan, roughly 75 to 300 dollars</b>, and staff can be insistent about payment. Your companions either vanish or offer to split, having paid nothing.",
            "The escape is entirely upstream of the bill: <b>do not go anywhere with someone who approached you</b>. It is not rudeness; a genuine local connection almost never begins with a stranger steering you into a shop within minutes. If you want a tea house or a gallery, walk into an established one yourself and ask for a priced menu before you sit. If you are already holding a bad bill, Canada's guidance is specific: get somewhere safe, write down the name and address of the venue, report it to the police and get a report, then call your card issuer, which will usually want that police report to reverse the charge."
          ]
        },
        {
          h: "Taxis, the airport, and the fapiao",
          icon: "taxi",
          key: { fig: "3 to 5x", tag: "Meter or app", text: "Meter broken plus a flat fare is the classic, most often at airports and stations, and the flat fare is usually several times the metered one. Say da biao, or book DiDi so the price is fixed.", tone: "teal" },
          p: [
            "Canada's travel advice puts it plainly: taxi, motorcycle and pedicab drivers sometimes overcharge, especially at airports, and may hand back counterfeit currency. The classic move is <b>the meter is broken</b> followed by a flat fare that is typically <b>several times</b> what the metered ride would have been. Ignore anyone touting inside a terminal, join the signed official queue, and either ask for the meter (<b>da biao</b>) or book through <b>DiDi</b>, where the price is set before you get in.",
            "Three small habits from the same advisory finish the job: use only licensed taxis or a reputable app, <b>ask for the receipt (fapiao)</b> so you have something to complain with or trace a lost item, and <b>take your luggage out of the trunk before you pay</b>, so nobody is holding your bag while the fare is being discussed. The full transport picture is in the <a href=\"/china/taxis-and-apps\">China taxis and apps guide</a>."
          ]
        },
        {
          h: "At the card machine and on your phone",
          icon: "qr",
          key: { tag: "Choose yuan", text: "On a physical card, always choose yuan rather than dollars: the dollar option uses a poor built-in rate. On Alipay or WeChat Pay, check the amount on your own screen before you approve it.", tone: "amber" },
          p: [
            "The most common everyday cost in China is not a con at all. When a hotel or shop terminal offers to charge you <b>in US dollars or yuan</b>, choose <b>yuan</b>, so your own bank sets the rate rather than a marked-up one at the till. Everyday spending in China mostly runs through <b>Alipay and WeChat Pay</b> anyway, which sidesteps the whole question; set both up before you fly, as covered in the <a href=\"/china/how-to-pay-in-china\">China payment guide</a>.",
            "Paying by phone has its own version of care. Canada's advice is to be cautious about scanning QR codes from unofficial or unfamiliar sources, and to <b>verify the charge on your screen before authorizing it</b>. That one glance is the whole defense, and it also catches ordinary mistakes. For ATMs, use machines inside a bank, shield the keypad, and check your statement."
          ]
        },
        {
          h: "Cash, counterfeit notes and the phone call",
          icon: "coins",
          key: { tag: "Check the note", text: "Counterfeit notes are far less common than they were and now turn up mostly in small cash transactions. Carry small denominations, and never accept a note handed back as a replacement for the one you gave.", tone: "teal" },
          p: [
            "China's counterfeit note problem has shrunk a long way as the country moved to phone payments. Canada's current advice is that a small number of fake notes still circulate and are most often met in <b>low-volume cash transactions</b>, so this is a habit rather than a worry. Two rules cover it: <b>carry small denominations</b> so you are not handing over 100 yuan notes for a 10 yuan purchase, and keep your own note in sight while a vendor inspects it, because the con is the swap, not the inspection. If a driver or vendor hands your note back saying it is fake, look closely at the note you are being given: it is often not the one you handed over. Refuse damaged or poor-quality notes too.",
            "There is a phone version worth knowing about because it targets foreigners specifically: a caller claiming to be the <b>police</b>, saying you are under investigation for identity theft or money laundering, and asking you to transfer funds to clear it up. Real police do not do this. Do not send money, and hang up."
          ]
        },
        {
          h: "What this means for your money",
          icon: "cash",
          key: { fig: "Habits", tag: "How to avoid it", text: "Never follow a street stranger to a venue, insist on the meter or use DiDi, pay by phone, choose yuan on a card, and check any note handed back. Almost nothing here survives those five.", tone: "teal" },
          p: [
            "Nearly every trap on this page starts the same way: someone you did not approach steers you somewhere you did not choose. Five habits cover the lot: <b>never follow a street stranger to a venue</b>, <b>insist on the meter or use DiDi</b>, <b>pay by phone where you can</b>, <b>choose yuan on a physical card</b>, and <b>check any note handed back to you</b>. The one worth active care, because it is the one that can reach real money, is the tea house and bar invitation, and it is also the easiest to refuse.",
            "Handled calmly, none of this should shape your trip, and most visitors meet none of it. For getting and spending money well while you are there, see the <a href=\"/china/how-to-pay-in-china\">China payment guide</a> and the <a href=\"/china\">China cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is China safe for tourists?", a: "For the great majority of visitors, yes. Violent crime against foreigners is rare and most trips are trouble free. What tourists actually meet are money traps: the tea house or art gallery invitation near famous landmarks, taxi overcharging, and occasional counterfeit notes in change. A few habits, chiefly never following a stranger to a venue, avoid nearly all of it." },
        { q: "What is the tea house scam in China?", a: "A friendly English-speaking stranger near a landmark invites you for a traditional tea ceremony, an art exhibition, a massage or a drink, and the bill afterwards is wildly inflated, commonly 500 to 2,000 yuan, roughly 75 to 300 dollars. Canada's travel advice names Tiananmen Square, the Bund, East Nanjing Road and People's Square as the areas where it clusters. Do not follow a stranger to a venue." },
        { q: "What should I do if I have been handed a huge bill in a Chinese bar or tea house?", a: "Get somewhere safe first. Note the name and address of the venue, since police need it to identify who was involved and issue a report. Report it and obtain that report, then call your card company, which will usually want a copy of it to reverse the charge. Police in China are 110. Do not go back to the venue to argue." },
        { q: "How do I avoid taxi scams in China?", a: "Use licensed taxis or book through DiDi, where the fare is set in advance. If you take a street taxi, ask for the meter (da biao) and agree a fare first only if there genuinely is no meter. Ask for the receipt, or fapiao, and take your luggage out of the trunk before you pay. Ignore anyone touting for rides inside an airport terminal." },
        { q: "Are counterfeit banknotes still a problem in China?", a: "Much less than they were, because almost everything is now paid by phone. A small number of fake notes still circulate and are mostly encountered in small cash transactions. Carry small denominations, keep your own note in sight while it is being checked, and be wary if someone hands a note back claiming yours was fake, since the swap is the scam." },
        { q: "Should I pay in yuan or dollars in China?", a: "Yuan. If a hotel or shop terminal offers to bill you in your home currency, decline, so your own bank sets the exchange rate rather than a marked-up one at the till. In practice most of your spending will go through Alipay or WeChat Pay, which avoids the question, but check the amount on your screen before approving any QR payment." }
      ],
      sources: {
        links: [
          { label: "Government of Canada: China travel advice, including scams, taxis, fraud and money", url: "https://travel.gc.ca/destinations/china", type: "gov" },
          { label: "US State Department: China country information and safety guidance for travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/China.html", type: "gov" }
        ],
        judgment: "The named landmark areas, the taxi advice including the fapiao and the luggage rule, the counterfeit note picture and the fake police call all come from the Government of Canada's current China travel advice. The 500 to 2,000 yuan bill is a typical reported range, not a fixed tariff, and individual cases have run far higher; we have deliberately given the typical range rather than the worst case. Government advisories treat all of this as routine petty crime awareness rather than a safety emergency, and so do we. Checked August 2026."
      }
    }
  ]
};
