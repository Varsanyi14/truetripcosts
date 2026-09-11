// "WHAT WE'LL HELP YOU KEEP": the costs a traveler can refuse to pay.
//
// WHY THIS EXISTS. The fees section used to list only what happens TO a traveler: the card
// fee, the ATM fee, the tourist tax. All true, all unavoidable, and all passive. The half
// that was missing is the half the site is actually for: the money you do not have to hand
// over at all, and how to refuse it. This module is that half.
//
// EVERY ITEM IS PER COUNTRY AND MUST GENUINELY APPLY. A generic checklist would be worse than
// nothing here, because it would put "claim your VAT refund" on a country with no refund
// scheme and "decline paying in dollars" on a country whose currency IS the dollar. Both of
// those are real traps this file is built to avoid, and both were live bugs caught while
// building it. So each item is gated on a field, and a country that does not qualify shows
// no line.
//
// THE FIGURE RULE. A dollar figure or a percentage appears ONLY where an existing sourced
// field supports it. Everywhere else the item is NAMED with its escape and carries no number.
// Nothing here is ever summed into a "you could save $X" headline: that is the churner tone
// the site exists in opposition to, and a total of money-not-spent is not a real quantity.
// Avoidable amounts are also never folded into any cost total anywhere, because they are by
// definition what the traveler will NOT pay.
//
// ONE ITEM DOES CARRY A LIVE FIGURE: the card and ATM fees, where the amount is the
// calculator's own computed cardFee plus atmFee, which is exactly what the existing
// no-foreign-fee toggle already demonstrates. That is not a savings estimate, it is the fee
// the calculator is already charging, quoted back.
//
// ---------------------------------------------------------------------------
// THE EXPOSURE SPLIT, and the one number this file must never produce.
//
// The items below now carry two extra fields, `side` and `worth`, which exist so the
// calculator can put an honest measure at the head of this list instead of a bare column of
// rows. There are TWO measures and there is never a third:
//
//   side: 'pay'    AVOIDABLE BUT REAL. Money the traveler genuinely hands over if they do
//                  nothing at all: their own bank's foreign fees, the dynamic currency
//                  conversion they accept at the terminal, the exchange desk they use.
//   side: 'dodge'  PURE AVOIDANCE. Money that never leaves their account once they know:
//                  the lookalike site's price for a free form, the reseller's markup, tax
//                  they can reclaim, a tip they were about to pay twice.
//
// THOSE TWO ARE NEVER ADDED TOGETHER. A blended total would sum money-they-will-pay with
// money-they-will-never-lose, which is not a quantity, and the result would be one large
// alarming number about a page whose entire argument is that none of this has to happen.
// There is no danger score here, no percentage at risk, no combined figure. If a future
// change makes these two sum into one, that change is wrong.
//
// `worth` IS NOT A NEW FACT. Every figure it carries is read back out of the sourced string
// already rendered on the item, by the two strict parsers below. Nothing is transcribed by
// hand, so a figure and its own number cannot drift apart, and a sourced value that is not a
// plain dollar amount (another currency, a multiple, a phrase) parses to null and the item is
// COUNTED rather than priced. Inventing a scam's price to fatten a total would be the same
// sin as the scam.

import { arrivalFormFor } from './arrival-forms.js';
import { entryChargesFor, isBillable } from './entry-charges.js';
import { tipping as tippingRows } from './tipping.js';
import { VERDICTS, tierOf } from './connectivity-verdicts.js';
import { spokeUrl } from './site-urls.js';
import { railPasses } from './rail-passes.js';

// Reading order within the block. The price-versus-price items lead where they exist, because a
// real price beside a fake one is the strongest thing on the list and the reader should meet it
// first. The soft, always-present advice sits underneath. Anything not named here keeps its
// build order, so adding an item without touching this list degrades gracefully.
const ORDER = ['form', 'dead', 'reseller', 'exemption', 'fees', 'dcc', 'doubletip', 'exchange', 'vat'];

// ---------------------------------------------------------------------------
// A7 refund availability, classified BY HAND, and here is why.
//
// There is no structured refund field. The obvious shortcut is to pattern-match each guide's
// `taxfree{}` prose for "VAT refund" and treat a hit as availability. That shortcut is
// actively dangerous and was tested: it produced FIVE false positives, because Costa Rica,
// the Dominican Republic, India, Ecuador and Georgia all contain the exact phrase "there is
// no VAT-refund scheme". A regex sees the words and misses the negation, so five countries
// that explicitly have no refund would have been told to go and claim one.
//
// So the classification is written out. Each entry below reflects what that country's own
// guide says in its `taxfree{}` block, and nothing else. Three states, and the third matters:
//
//   yes      the guide affirms a refund exists for visitors
//   no       the guide affirms there is not one, or that there is no VAT at all
//   absent   the guide does not say either way, so we show NOTHING
//
// `absent` is absence-is-not-zero doing real work. Mexico, Indonesia and El Salvador have
// `taxfree{}` blocks that are about entry levies and service charges and simply never address
// refunds; Vietnam has no block at all. Several of those countries may well have a refund
// scheme, but this file will not assert one the guide has not stated. That is a content gap
// for the desk to close, not a gap for this module to fill.
//
// FLAGGED TO MAIN: the four `absent` countries are a real coverage hole in the guides, not in
// this code. Add a refund sentence to their `taxfree{}` block and the line appears here on
// its own.
const REFUND = {
  // affirms a refund exists
  japan: 'yes', thailand: 'yes', italy: 'yes', france: 'yes', spain: 'yes', portugal: 'yes',
  greece: 'yes', germany: 'yes', netherlands: 'yes', uae: 'yes', 'saudi-arabia': 'yes',
  czechia: 'yes', switzerland: 'yes', austria: 'yes', turkey: 'yes', colombia: 'yes',
  argentina: 'yes', ireland: 'yes', bahamas: 'yes', iceland: 'yes', norway: 'yes',
  sweden: 'yes', denmark: 'yes', 'south-korea': 'yes', singapore: 'yes', australia: 'yes',
  'south-africa': 'yes', taiwan: 'yes', poland: 'yes', hungary: 'yes', croatia: 'yes',
  china: 'yes', namibia: 'yes', philippines: 'yes',

  // affirms there is none, or no VAT at all
  'united-kingdom': 'no', oman: 'no', qatar: 'no', bahrain: 'no', kuwait: 'no', canada: 'no',
  'new-zealand': 'no', morocco: 'no', cambodia: 'no', laos: 'no', aruba: 'no',
  'hong-kong': 'no', 'sri-lanka': 'no', egypt: 'no', brazil: 'no', jamaica: 'no',
  'costa-rica': 'no', 'dominican-republic': 'no', india: 'no', ecuador: 'no', georgia: 'no',

  // deliberately unlisted, so no line renders: mexico, indonesia, el-salvador, vietnam
};

// The three guides that carry the refund as a dated, sourced keyFact rather than as prose.
// Only these show a rate and a threshold; everywhere else the item is name-only and points at
// the country's own taxes section. Lifting a rate out of a sentence would be inventing
// structure that was never verified as structure.
const REFUND_FACTS = {
  philippines: 'Tourist VAT refund (RA 12079)',
  'south-africa': 'Tourist VAT refund',
  taiwan: 'Tourist VAT refund (TRS)',
};

// ---------------------------------------------------------------------------
// THE PRICE-VERSUS-PRICE ITEMS.
//
// The four indices below share one shape and it is the sharpest thing this site does: we know
// the REAL price and we know the FAKE or AVOIDABLE price, and we put them side by side. "Free
// on the official site, $50 to $100 from the lookalikes" does more work than any amount of
// warning copy, because the gap is the argument.
//
// EVERY FIGURE ON BOTH SIDES IS QUOTED FROM A GUIDE. None is estimated, and none is a
// markup we reasoned out. Where a guide names the scam only in words ("lookalike sites charge
// far more"), the item ships with NO number and says so in words too. That asymmetry is the
// point: a fabricated scam price would be the same sin as the scam.
// ---------------------------------------------------------------------------

// ITEM A. A free mandatory form, and what the lookalikes charge for it.
//
// Gated on arrival-forms.js, so an item cannot exist for a country with no form. The value
// here is only the FAKE side; the free side and the official URL come from that module, which
// keeps one source of truth for the address a traveler is sent to.
//
// null means the guide names the lookalikes but publishes no price, so the item renders
// without a figure. Only three guides carry a sourced range today.
const SCAM_FORM_PRICE = {
  colombia: '$30 to $50',            // colombia.js: third-party sites charge $30 to $50 to file this free form
  'dominican-republic': '$20 to $50', // dominican-republic.js: lookalike sites charging $20 to $50
  'south-korea': '$50 to $100',       // south-korea.js: third-party sites that charge $50 to $100 for what the government provides free
  thailand: null, philippines: null, singapore: null, taiwan: null, 'sri-lanka': null,
};

// ITEM B. A real official charge, and what resellers add on top.
//
// Gated on entry-charges.js, so it only fires where an unconditional charge genuinely exists,
// plus one deliberate exception below. `official` is the short form of the figure the guide
// already publishes; `fake` is the reseller side and is null wherever no figure is sourced.
const RESELLER = {
  // Both sides sourced. The sharpest example on the site: the fake is over five times the real
  // fee at the top of its range.
  egypt: { official: '$30', fake: '$75 to $160', what: 'tourist visa' },
  // The fake side is a sourced multiple rather than a figure, which is still a real comparison.
  indonesia: { official: 'IDR 150,000', fake: 'two to three times that', what: 'Bali tourist levy' },
  // Official price sourced, reseller side named only.
  'united-kingdom': { official: '20 pounds', fake: null, what: 'ETA' },
  australia: { official: 'AUD 20', fake: null, what: 'ETA' },
  brazil: { official: 'about $81', fake: null, what: 'e-visa' },
  india: { official: 'the published portal fee', fake: null, what: 'e-Tourist Visa' },
  aruba: { official: '$20 a person', fake: null, what: 'ED Card' },
};

// The deliberate exception. Turkey has NO entry charge, because the e-visa for US ordinary
// passports was abolished in 2023, so entry-charges.js holds nothing to gate on. That absence
// is exactly what makes it worth saying: the official price is nothing, and every site selling
// a Turkish e-visa is selling a product that no longer exists. Kept separate from RESELLER so
// nobody later assumes it has a fee.
const DEAD_PRODUCT = {
  turkey: {
    what: 'Turkish e-visa',
    detail: 'US citizens on ordinary passports have needed no visa and no e-visa for Turkey since 2023, so the official price is nothing at all. Every site still selling a Turkish e-visa is charging you for a document that does not exist.',
  },
};

// ITEM C. A service charge already on the bill, so a tip on top is paying twice.
//
// Gated on tipping.serviceCharge, and deliberately only on the two unambiguous tiers. 28 more
// guides are marked `often`, and "often" is not a guarantee: telling those travelers the charge
// is already there would be wrong roughly as often as it was right. Those countries already get
// the honest version further up the page, where the tipping line says to read the bill first.
// This block is for money you can count on keeping, so it takes only `always` and `usually`.
const SERVICE_CHARGE_CERTAIN = ['always', 'usually'];

// ITEM D. An exemption you only get if you do something.
//
// Both entries are verified in their own guide's sources block, and both are conditional on an
// action, which is what makes them belong here rather than in a tax explainer. An exemption
// that applies automatically with no action is not money you keep by knowing something.
const EXEMPTION = {
  colombia: {
    title: 'The hotel IVA you do not owe',
    rate: '19%',
    // Matches the Colombia hero fact exactly, on purpose: same rate, same escape. The two must
    // never diverge, because they sit on the same page.
    action: 'Show your passport with the entry tourist stamp at check-in, and check the bill.',
    // Deliberately does NOT re-tell the hero fact at the top of this page. Same figure and the
    // same escape, but this is the checklist version: what to do at the desk, not the surprise.
    detail: 'It is not applied automatically, and about half of hotels add it anyway, so the exemption is only worth what you actually claim at check-in.',
    href: '#taxes-and-refunds',
  },
  argentina: {
    title: 'The accommodation VAT you lose by paying cash',
    rate: '21%',
    action: 'Pay with a foreign-issued card or an international transfer, never cash.',
    detail: 'Non-resident foreign tourists get an automatic 21% VAT discount on accommodation, and on breakfast where it is included, but only when the bill is paid with a foreign-issued card or by international transfer. Pay that same bill in cash and you simply lose it.',
    href: '#taxes-and-refunds',
  },
};

// Named scam and taxi tactics a traveler can refuse, extracted from each country's own
// scams and taxis spokes. SOFT items only: named, with an action, never a figure. Every
// tactic below is lifted from that country's real guide prose (see the build's verification
// table), never invented and never generic. A country with no entry here simply has no
// scam or taxi content specific enough to name, which is the honest outcome, not a gap.
//
// `spoke` records which of the country's own spokes (taxis-and-apps / taxis-and-ride-hailing
// / money-scams) the tactic came from, so avoidableFor(c) below can build the href without
// guessing: it is always '/' + c.slug + '/' + spoke, the real URL for that spoke's own page.
const REFUSE_TACTICS = {
  "thailand": [
    { key: "taxi-meter-refusal", name: "The taxi meter refusal", action: "Say \"meter, please,\" and if the driver refuses or claims it is broken, get out and take the next cab, or use Grab, Bolt or inDrive for a price agreed up front.", detail: "Thailand's guide names this as the everyday trap at the airport and tourist spots: a driver skips the meter and quotes a flat price well above it.", spoke: "taxis-and-apps" },
    { key: "gem-tour-scam", name: "The \"temple is closed\" gem-tour scam", action: "Ignore anyone outside a temple who says it is closed today and offers a cheap tuk-tuk tour instead; never buy gems, jewelry or tailoring as an \"investment\" on a stranger's tip.", detail: "The Grand Palace is open nearly every day. The tuk-tuk that follows a stranger's \"it is closed\" line ends at a gem or tailor shop paying the driver commission on worthless stones.", spoke: "money-scams" },
    { key: "jetski-damage-scam", name: "The jet-ski or motorbike damage shakedown", action: "Take a slow walk-around video of the jet ski or motorbike from all angles before you ride, rent only through a reputable operator or your hotel, and never leave your passport as a deposit, only a copy.", detail: "At the beaches, an operator points to damage that was already there and demands a large cash sum on return, sometimes holding a passport as leverage.", spoke: "money-scams" },
    { key: "bar-tab-scam", name: "The inflated nightlife bar tab", action: "Check drink prices before ordering and avoid bars with pushy touts outside; if a bill is wildly wrong, call the Tourist Police on 1155 rather than pay under pressure.", detail: "Cheap drinks lure you in, then a massively inflated bill arrives with staff blocking the door until it is paid.", spoke: "money-scams" },
    { key: "note-swap", name: "The taxi note-swap", action: "Carry small notes so a driver cannot claim to have no change, and watch your large notes closely at handover.", detail: "A rare but real trick: a driver takes a large baht note, hands back a different one, and claims it was fake.", spoke: "money-scams" },
  ],
  "vietnam": [
    { key: "fake-branded-taxi", name: "The fake-branded taxi (rigged meter or copycat colors)", action: "Use the Grab, Be or Xanh SM app booked on your own phone, or a street taxi only from Vinasun (white) or Mai Linh (green); refuse any cab that approaches you at the airport or a tourist site.", detail: "An unlicensed car with a rigged fast meter or a paint job copying a trusted firm's colors can overcharge three to ten times the real fare.", spoke: "taxis-and-apps" },
    { key: "fake-grab-screen", name: "The fake Grab app screen at the airport", action: "Open the real Grab app on your own phone and book the ride yourself; never trust a driver who taps your destination into his own phone and turns the screen around to show a fare.", detail: "A driver shows what looks like the Grab app with a fixed price, but it is a screenshot or a fake app, not a real booking.", spoke: "money-scams" },
    { key: "dong-note-switch", name: "The dong note mix-up or switch", action: "Count your cash out loud and say the amount as you pay, keep denominations separate, and pay by app or card where you can.", detail: "Dong notes run to a lot of zeros and look similar, so a driver can palm a large note for a smaller one or simply claim they have no change.", spoke: "money-scams" },
    { key: "motorbike-damage-scam", name: "The motorbike-rental damage scam", action: "Photograph and video the bike from every angle before you ride, rent from a reputable shop or your hotel, and never leave your passport as the deposit, only a copy.", detail: "A rental shop points to scratches that were already there and demands a repair fee, sometimes holding an outsized deposit or a passport.", spoke: "money-scams" },
    { key: "unsolicited-street-service", name: "The unrequested shoeshine or photo prop", action: "Decline unsolicited services on sight, before they start.", detail: "A shoeshiner who starts working unasked, or a fruit vendor who hands you a photo prop, both bill you afterward for something you never ordered.", spoke: "money-scams" },
    { key: "halongbay-listing-mismatch", name: "The Ha Long Bay cruise that does not match its listing", action: "Book Ha Long Bay or similar cruises only through a reputable operator or your hotel.", detail: "Some tour operators sell cruises on a boat that does not match what was advertised.", spoke: "money-scams" },
  ],
  "georgia": [
    { key: "taxi-unmetered-overcharge", name: "The unmetered street-taxi overcharge", action: "Agree the fare before you get in, or book a Bolt instead.", detail: "Many street taxis are older cars with no meter, so the driver names a price, and the opening quote to visitors runs high.", spoke: "taxis-and-apps" },
  ],
  "norway": [
    { key: "fare-variance-deregulation", name: "The post-deregulation fare gouge", action: "Check the fare sticker or use an app like Bolt or Uber that shows the total up front before you ride, especially at ranks and the airport.", detail: "Since Norway deregulated taxis, fares vary widely between companies, and some independent cabs charge steep rates.", spoke: "taxis-and-apps" },
  ],
  "portugal": [
    { key: "wrong-tariff-meter-trick", name: "The wrong-tariff meter trick", action: "Check the meter is running on tariff 1, the standard daytime city rate, not tariff 2; or use an app that prices the trip in advance.", detail: "The exceptions cluster at the airport rank and tourist spots: a driver runs the higher night tariff in daytime, or takes a long route.", spoke: "taxis-and-apps" },
  ],
  "united-kingdom": [
    { key: "airport-tout", name: "The unbooked airport tout", action: "Ignore anyone who approaches you inside the terminal offering a taxi or a lift; only licensed black cabs at the marked rank or a pre-booked app car are legitimate.", detail: "Only black cabs can be hailed on the street or from a rank; an unbooked stranger offering a ride inside the terminal is not a deal.", spoke: "taxis-and-apps" },
  ],
  "netherlands": [
    { key: "amsterdam-street-taxi-overcharge", name: "The Amsterdam street-taxi overcharge", action: "Book through Uber, Bolt or FreeNow, or use an official metered rank, rather than an unmarked street cab.", detail: "Amsterdam street taxis have a longstanding reputation for overcharging tourists, taking long routes, or refusing short fares.", spoke: "taxis-and-apps" },
  ],
  "oman": [
    { key: "unmetered-fare-agree-first", name: "The unmetered fare", action: "Ask the price to your destination before you get in; if it sounds wrong, the next taxi is thirty seconds away, or use a licensed app like OTaxi or Marhaba.", detail: "Muscat fares are meant to be metered by law, but in practice many drivers do not use one.", spoke: "taxis-and-apps" },
  ],
  "saudi-arabia": [
    { key: "unlicensed-street-taxi", name: "The unlicensed street taxi", action: "Use official ranks or the Uber and Careem apps rather than an unlicensed street taxi.", detail: "Unlicensed street taxis are illegal, and there is no recourse if something goes wrong with one.", spoke: "taxis-and-apps" },
  ],
  "kuwait": [
    { key: "unmetered-fare-agree-first", name: "The unmetered fare, agreed after the fact", action: "State your destination and agree the price before setting off; metered billing is rarely applied in practice.", detail: "Kuwaiti taxis are metered on paper, but drivers rarely run the meter, so the convention is to settle the number before the door shuts.", spoke: "taxis-and-apps" },
  ],
  "jamaica": [
    { key: "robot-taxi", name: "The unlicensed \"robot\" taxi", action: "Use only a red-plate licensed taxi, a tourist-board-approved operator like JUTA, or your hotel's own driver, never an unlicensed white-plate \"robot.\"", detail: "A legitimate Jamaican taxi carries a red plate and a Transport Authority sticker; an unlicensed \"robot\" carries an ordinary white plate and leaves passengers uninsured.", spoke: "taxis-and-apps" },
    { key: "currency-quote-mixup", name: "The US-dollar-or-Jamaican-dollar quote", action: "Agree the fare before you get in, and confirm whether the driver's quote is in US or Jamaican dollars.", detail: "The gap between a US-dollar quote and a Jamaican-dollar quote is large, and a vague number is where misunderstandings happen.", spoke: "taxis-and-apps" },
  ],
  "bahamas": [
    { key: "hacker-taxi", name: "The unlicensed \"hacker\" taxi", action: "Confirm the driver holds a visible licence and the cab shows a yellow plate; unlicensed \"hackers\" work the tourist areas.", detail: "Unlicensed drivers, known locally as hackers, are the ones most likely to invent a price at the end of the ride.", spoke: "taxis-and-apps" },
    { key: "unposted-zone-fare", name: "The unposted zone fare", action: "Settle the price before you open the door and repeat it back; Nassau's zone rates are not posted anywhere a visitor will see them.", detail: "Taxis are legally metered but in practice fares are quoted from government-set zone rates that are never published for visitors to check.", spoke: "taxis-and-apps" },
  ],
  "sweden": [
    { key: "rogue-cab-no-sticker-check", name: "The rogue cab without the price-sticker check", action: "Check the yellow comparison-price sticker (jamforpris) in the rear window before you get in; if the number looks high, walk away, or use an app or known firm.", detail: "Sweden deregulated taxis, so a small number of rogue cabs charge wildly high rates, especially at the airport and tourist spots.", spoke: "taxis-and-apps" },
  ],
  "laos": [
    { key: "open-ended-tuktuk-fare", name: "The open-ended tuk-tuk fare", action: "Agree the price out loud before you get in, confirm it covers the whole trip and any waiting time, and check whether it is per person or for the vehicle.", detail: "A fare left open until you arrive is a negotiation, not a price, and the per-person-versus-per-vehicle mix-up is the most common one.", spoke: "taxis-and-ride-hailing" },
  ],
  "el-salvador": [
    { key: "no-meter-no-reference-price", name: "The unmetered, no-reference-price street taxi", action: "Use Uber where it operates, since the fare is fixed and shown before you accept, or a hotel-arranged taxi with the fare agreed first; walk away from a high opening quote from anyone who approaches you in the terminal.", detail: "Salvadoran taxis do not generally have meters, so a newly arrived visitor with no reference price is negotiating at a real disadvantage.", spoke: "taxis-and-apps" },
  ],
  "japan": [
    { key: "bottakuri-bar", name: "The street-tout \"bottakuri\" rip-off bar", action: "Never follow a street tout into a bar; choose your own venue, keep your card in sight, and if a bill still looks wrong ask for it itemized and say you will call the police (110).", detail: "A tout leads you into a bar in Kabukicho or Roppongi and the bill arrives inflated, occasionally alongside drink spiking and card fraud.", spoke: "money-scams" },
  ],
  "mexico": [
    { key: "unofficial-airport-driver", name: "The flat overcharge or unofficial airport driver", action: "Use the official taxi desk, a pre-booked transfer, or an app with a fixed fare, and track the route on your phone.", detail: "A flat overcharge or an unofficial driver can turn a short airport ride into $40 to $60.", spoke: "money-scams" },
    { key: "closed-hotel-detour", name: "The \"your hotel is closed\" detour", action: "Politely say no; a driver who insists your destination is shut is steering you to a shop for commission or racking up the fare.", detail: "A driver claims your hotel is shut and offers somewhere \"better,\" which pays him a commission.", spoke: "money-scams" },
    { key: "no-change-trick", name: "The \"no change\" trick", action: "Carry small notes (20, 50, 100 pesos) and settle close to the exact fare.", detail: "A driver claims to have no change for a large note and simply keeps the difference.", spoke: "money-scams" },
    { key: "padded-bill-mexico", name: "The padded restaurant or bar bill", action: "Check the itemized bill for a double charge, items you did not order, or a service charge added twice, and watch your card at the bar so it is not taken away to swipe twice.", detail: "The usual issues are a double charge, unordered items, or a service charge counted twice.", spoke: "money-scams" },
    { key: "free-tasting-obligation", name: "The \"free\" tasting that is not free", action: "Confirm whether a mezcal or tequila tasting near a market is actually complimentary before you accept.", detail: "A tasting that looked complimentary can land as a 400 to 800 peso bill.", spoke: "money-scams" },
    { key: "roadside-cash-fine", name: "The roadside cash fine demand", action: "Stay calm and polite; real fines are paid at a station, not by the roadside, so ask for the written ticket (infraccion) and to settle it there.", detail: "Someone in uniform may demand an on-the-spot cash fine for a minor infraction; that is not how real fines work.", spoke: "money-scams" },
    { key: "timeshare-pitch-and-resale-fraud", name: "The \"free breakfast\" timeshare pitch, and resale fraud", action: "Do not sign anything on the day of a free breakfast or tour pitch, and never pay an upfront fee to a company offering to resell a timeshare you own; check any company through PROFECO.", detail: "A free breakfast or tour is often the door into a long, high-pressure timeshare sales pitch, and a separate scheme charges upfront fees to \"resell\" a timeshare you own.", spoke: "money-scams" },
  ],
  "italy": [
    { key: "abusivi-unlicensed-driver", name: "The abusivi unlicensed airport driver", action: "Only take a taxi from the official rank; refuse anyone who approaches you inside the terminal.", detail: "Unlicensed abusivi drivers, most common at Fiumicino, charge two to four times the real fare.", spoke: "money-scams" },
    { key: "broken-card-machine-italy", name: "The suddenly \"broken\" card machine", action: "If a driver announces the card reader is not working after you have arrived, ask for a receipt and note the licence number.", detail: "This is a recurring move used to push a card fare into a cash one after the ride is already done.", spoke: "money-scams" },
    { key: "unordered-items-italy", name: "Unordered bread or antipasti on the bill", action: "Wave away anything that arrives unasked and read the itemized bill; ask for the printed menu with prices if none is offered.", detail: "The coperto and servizio are legitimate and printed; unordered bread, water or antipasti appearing on the bill is not.", spoke: "money-scams" },
    { key: "etto-pricing-italy", name: "Fish or steak priced by the etto", action: "Ask what a by-weight dish will actually cost, and ask to see it weighed, before you agree to order it.", detail: "A dish priced by the etto (100 grams) where nobody shows the weight can turn a modest-looking plate into an eye-watering line item.", spoke: "money-scams" },
    { key: "street-distraction-italy", name: "The street distraction plays (bracelet, rose, costumed photo)", action: "Give a firm no and no eye contact with the object being offered.", detail: "A friendship bracelet tied on, a rose pressed into your hand, or a costumed photo you never asked for are all followed by a charge.", spoke: "money-scams" },
  ],
  "france": [
    { key: "cdg-airport-tout", name: "The CDG unlicensed airport tout", action: "Ignore anyone who approaches you inside the terminal offering a taxi; follow the signs to the official rank, where a marshal assigns a licensed cab at the fixed fare.", detail: "Rides sold by a tout inside the terminal routinely run several times the official government-set fare.", spoke: "money-scams" },
    { key: "gold-ring-scam", name: "The gold ring \"found\" at your feet", action: "Do not take the ring and do not stop walking.", detail: "Someone \"finds\" a ring near you and, once you engage, tries to sell it to you as gold.", spoke: "money-scams" },
    { key: "montmartre-bracelet", name: "The Montmartre friendship bracelet", action: "Do not let anyone start weaving a thread onto your wrist on the steps below Sacre-Coeur.", detail: "A friendly chat while a thread is woven onto your wrist ends in a demand for payment.", spoke: "money-scams" },
    { key: "petition-clipboard", name: "The petition or clipboard distraction", action: "Do not stop for a clipboard or petition, usually from a group of young people; it is a pickpocket distraction.", detail: "While your hands and eyes are on the paper, your pockets are not.", spoke: "money-scams" },
    { key: "three-card-shell-game-france", name: "The three-card or shell game", action: "Do not play; it is not a game you can win.", detail: "A fixture near the tourist bridges that is designed to take money, not to be won.", spoke: "money-scams" },
    { key: "metro-ticket-tout", name: "The metro ticket sold by a stranger", action: "Buy tickets only from the machine, a staffed window or the official app.", detail: "A ticket sold by a stranger on the concourse can be already used, invalid, or simply overpriced.", spoke: "money-scams" },
  ],
  "spain": [
    { key: "padded-bill-tip-line-spain", name: "The padded restaurant bill and pre-filled tip line", action: "Ask for the menu with prices before you order, wave away anything that arrives unasked, read the itemized bill, and cross out a tip line filled in for you.", detail: "Bread, olives or tapas that arrived unasked can appear on the bill, and a tip line is occasionally filled in already.", spoke: "money-scams" },
    { key: "standalone-atm-fee-spain", name: "The standalone tourist-street ATM", action: "Use a machine attached to a real bank rather than a standalone kiosk in a tourist street, station or airport.", detail: "Standalone ATMs in tourist areas charge a higher fee of their own and push the dollar-conversion offer hardest.", spoke: "money-scams" },
    { key: "fake-police-cash-check-spain", name: "The \"police\" cash check", action: "Decline politely and walk into a shop or busy street; real police officers do not need to inspect your cash or cards for counterfeits.", detail: "Someone in plain clothes claiming to be police asks to inspect your cash; genuine officers do not do this.", spoke: "money-scams" },
    { key: "atm-helper-spain", name: "The unsolicited ATM \"helper\"", action: "Cover your PIN and decline help you did not ask for at a machine; if a card is retained, call your bank rather than accepting a stranger's assistance.", detail: "Someone offers to guide you through the screens, or claims the machine is broken and points you to another one.", spoke: "money-scams" },
    { key: "street-distraction-spain", name: "The street distraction plays (spill, hug, clipboard, shell game)", action: "Treat any unexpected physical contact or clipboard as a cue to check your pockets, not to accept help.", detail: "A spill, a sudden hug, or a shell game on a busy promenade are all built to buy two seconds of confusion.", spoke: "money-scams" },
  ],
  "greece": [
    { key: "meter-refusal-towel-greece", name: "The meter refusal, towel, or announced fare", action: "Insist the meter is running from the start, refuse an announced flat price, and watch for an invented service fee tacked on at the end.", detail: "A driver refuses the meter, drapes a towel over it, or simply announces a price, worst at the port and on the islands.", spoke: "taxis-and-apps" },
    { key: "tariff-2-daytime-overcharge", name: "The tariff 2 daytime overcharge", action: "Glance at the tariff number on the meter when you set off; a driver who sets the higher overnight/out-of-town band for a normal daytime city trip roughly doubles the fare.", detail: "Greek meters run two tariff bands, and setting the higher one for an ordinary city trip roughly doubles the fare.", spoke: "money-scams" },
    { key: "athens-bar-invitation", name: "The Athens bar invitation", action: "Choose your own bar and be politely wary of a new acquaintance steering you to a specific venue.", detail: "Drinks and company arrive unasked at a bar a friendly stranger suggested, and the bill runs to hundreds.", spoke: "money-scams" },
    { key: "unordered-bread-fish-weight-greece", name: "Unordered bread or dips, and fish priced by weight", action: "Ask what a by-weight fish dish will cost before you agree to order it, and wave away bread, water or dips that arrive unasked.", detail: "Fish priced by the kilo where the weight is never shown, and bread or dips that arrive unasked, are the two leaks on a tourist-strip bill.", spoke: "money-scams" },
    { key: "island-atm-kiosk-greece", name: "The island standalone ATM kiosk", action: "Use a bank machine where you can, withdraw a larger amount less often, and always choose euros.", detail: "Many island machines are standalone kiosks rather than bank ATMs, with their own fee and the hardest push to convert to dollars.", spoke: "money-scams" },
  ],
  "indonesia": [
    { key: "scooter-damage-claim", name: "The scooter damage claim", action: "Photograph the bike from every angle and take a slow video walk-around with the shop in shot before you ride off; never leave your passport as the deposit, offer cash instead.", detail: "A rental shop points to scratches that were already there and names a repair figure you cannot argue with.", spoke: "money-scams" },
    { key: "fake-bluebird-meter-refusal", name: "The fake Bluebird, meter refusal, or flat airport rate", action: "Use a registered company (Bluebird, Silverbird, Express) or Grab/Gojek where the fare is set before you get in; check the logo and driver ID rather than the paint.", detail: "Bluebird, the trusted metered taxi, is widely imitated by copycats using a similar paint job and a near-identical name.", spoke: "money-scams" },
    { key: "money-changer-fast-count", name: "The unlicensed money changer's fast count", action: "Use only a licensed exchange showing a Bank of Indonesia logo and QR code, count the money yourself before leaving the counter, and do not let notes go back across the desk once counted.", detail: "An unbeatable board rate is the bait; a fast, confusing count with notes folded or palmed back is the method.", spoke: "money-scams" },
    { key: "atm-fake-help-number", name: "The fake help number stuck on the ATM", action: "Ignore any phone number stuck to an ATM; if a machine misbehaves, call the number on the back of your own card instead.", detail: "Criminals place fake help numbers on machines so a caller can talk a victim through handing over card details.", spoke: "money-scams" },
    { key: "salon-fee-dispute", name: "The salon or tattoo-parlour fee dispute", action: "Agree the price before anything starts at a tattoo parlour, nail salon or spa in Bali.", detail: "Fee disputes at Bali salons and tattoo parlours are common enough to be worth heading off in advance.", spoke: "money-scams" },
  ],
  "costa-rica": [
    { key: "la-maria-meter-skip", name: "La maria, the meter some drivers skip", action: "Insist the meter (la maria) is running from the start, or use Uber or DiDi where the fare is set in advance.", detail: "Some drivers will not switch on the maria for a tourist and instead name an inflated flat price.", spoke: "money-scams" },
    { key: "pirata-unofficial-taxi", name: "The pirata (pirate) unofficial taxi", action: "Avoid unmarked pirata taxis, especially a driver who approaches you rather than waiting at a rank; at San Jose airport use the official orange airport taxis or an app.", detail: "An unofficial pirata taxi in an unmarked car is the one to avoid, particularly one whose driver approaches you.", spoke: "money-scams" },
    { key: "flat-tire-helper-costa-rica", name: "The flat-tire \"helper,\" and the signal-blocker break-in", action: "If you get a flat, drive to a public place and change it yourself rather than accepting a stranger's help; pull the door handle to confirm your key fob actually locked the car.", detail: "People who stop to help with a flat tire have taken bags, cash and passports, and thieves have used signal blockers to defeat a key fob's lock press.", spoke: "money-scams" },
    { key: "colones-dollars-gap", name: "The colones-or-dollars currency gap", action: "Pay in the currency shown on the price tag; mixing colones and dollars lets the merchant set the exchange rate.", detail: "Paying dollars for a colon price, or vice versa, hands the merchant the exchange rate, typically costing 5 to 10 percent.", spoke: "money-scams" },
    { key: "counterfeit-street-changer-cr", name: "The street money changer's counterfeit notes", action: "Change money at banks or financial institutions rather than street money changers, which have passed counterfeit US dollars and local currency.", detail: "Street money changers have been reported passing counterfeit notes in both currencies.", spoke: "money-scams" },
  ],
  "dominican-republic": [
    { key: "card-carried-away-dr", name: "The card carried away to a back terminal", action: "Ask for the card machine to come to the table, or walk to the counter yourself, rather than letting a server carry your card away.", detail: "Tampered card readers can quietly save card details during an otherwise legitimate purchase.", spoke: "money-scams" },
    { key: "unagreed-taxi-fare-dr", name: "The unagreed taxi fare", action: "Settle the fare out loud before the door closes, every time, since Dominican taxis run no meters, or use Uber, DiDi or inDrive in the cities.", detail: "With no meter, the fare is either what you agreed before the door closed or whatever the driver says on arrival.", spoke: "taxis-and-apps" },
    { key: "street-money-changer-dr", name: "The street money changer", action: "Use bank ATMs or a licensed casa de cambio rather than a street money changer, where counterfeit notes and short-changing are real risks.", detail: "Street changers carry a real counterfeit and short-changing risk.", spoke: "money-scams" },
    { key: "pirate-lawyer-dr", name: "The \"pirate lawyer\" near tourist police stations", action: "If anything goes wrong, contact your embassy first; unofficial \"pirate lawyers\" charge excessive fees to help detained foreigners.", detail: "Unofficial lawyers wait near tourist police stations offering help to detained foreigners at excessive fees.", spoke: "money-scams" },
  ],
  "india": [
    { key: "meter-refusal-overcharge-india", name: "The meter refusal or flat-fare overcharge", action: "Use Uber, Ola, or an official prepaid taxi counter at airports and stations; if you take a metered auto, confirm the meter is running or agree the fare first.", detail: "A driver refuses the meter, quotes a flat fare 3 to 5 times the real price, or takes a long route, worst at airports and tourist sites.", spoke: "money-scams" },
    { key: "hotel-is-closed-scam-india", name: "The \"your hotel is closed\" scam", action: "Call your hotel directly, check its location on Google Maps, and insist on being taken to your booking; say you have already paid in advance.", detail: "A driver claims your booked hotel is closed, full or does not exist, and knows a \"better\" place that pays him a commission.", spoke: "money-scams" },
    { key: "gem-carpet-export-india", name: "The gem or carpet export \"investment\"", action: "Treat any purchase as a purchase, never an investment, and ignore anyone offering a resale scheme.", detail: "A friendly local or shop steers you toward export-quality gems or textiles to \"resell at home for a profit\"; the goods are overpriced or worthless.", spoke: "money-scams" },
    { key: "fake-tourist-office-india", name: "The fake \"Government Approved\" tourist office", action: "Buy monument tickets only at the official counter, book tours through a reputable operator, and arrange a licensed guide in advance.", detail: "Private shops with signs like \"Official Tourism Office\" sell overpriced tours and tickets that carry no such authority.", spoke: "money-scams" },
    { key: "temple-blessing-donation-india", name: "The temple blessing donation demand", action: "Decline before anything is tied on your wrist or applied to your forehead; if you accept, give only a small amount you are comfortable with.", detail: "A priest or guide ties a thread or marks your forehead as a \"blessing,\" then asks for a large donation.", spoke: "money-scams" },
    { key: "auto-rickshaw-note-switch-india", name: "The auto-rickshaw note-switch", action: "Count your notes out loud, keep small change handy, or pay by card or UPI in the app.", detail: "A driver takes a large note, palms it, and shows a smaller one, claiming you underpaid.", spoke: "taxis-and-apps" },
    { key: "street-changer-no-commission-india", name: "The street money changer's \"no commission\" rate", action: "Change cash only at banks or official counters; ignore anyone offering a better rate or no commission.", detail: "A too-good exchange rate offered on the street signals a counterfeit risk rather than a bargain.", spoke: "money-scams" },
  ],
  "czechia": [
    { key: "exchange-booth-smenarna", name: "The \"zero commission\" exchange booth (smenarna)", action: "Skip the booth and pull koruna from a bank ATM; if you use one, insist on a receipt, since Czech law lets you cancel within three hours at the same booth for amounts up to about 1,000 euros.", detail: "A \"zero commission\" sign hides a dreadful rate, a rate that applies only to some other amount, or a short count at handover.", spoke: "money-scams" },
    { key: "airport-tout-taxi-czechia", name: "The airport or station taxi tout", action: "Never take a ride from someone who approaches you; book Bolt, Uber or Liftago from the arrivals hall instead.", detail: "A driver who approaches you at the airport or main station can turn a normal fare into two to three times the real price.", spoke: "money-scams" },
    { key: "euronet-atm-czechia", name: "The bright yellow Euronet ATM", action: "Use a machine attached to a real Czech bank instead of a standalone Euronet machine, which clusters around the sights and charges high fees.", detail: "These machines sit exactly where disoriented visitors land, charge high fees, and push the dollar-conversion prompt hard.", spoke: "money-scams" },
    { key: "couvert-bill-padding-czechia", name: "The couvert and padded restaurant bill", action: "Ask for the menu with prices before you sit down; a place that only quotes verbally is the tell.", detail: "A couvert for bread you never ordered, or a service charge plus a blank tip line on top, shows up mainly in tourist-area restaurants.", spoke: "money-scams" },
  ],
  "turkey": [
    { key: "meter-off-noteswap-turkey", name: "Taxi meter tricks: off, long route, note swap", action: "Use BiTaksi or Uber, or insist the meter is on from the start; pay by card or state your note out loud (here is 200 lira) to defeat the note swap.", detail: "Drivers may turn the meter off, take a long route, claim no change, or swap a large note for a smaller one.", spoke: "taxis-and-apps" },
    { key: "fake-night-surcharge-turkey", name: "The fake night surcharge (gece tarifesi)", action: "Turkey uses a single 24-hour meter rate, so refuse any claimed night surcharge.", detail: "A driver claiming a night rate, a gece tarifesi, is simply overcharging you, since the meter reads the same at any hour.", spoke: "taxis-and-apps" },
    { key: "dropped-shoeshine-brush-turkey", name: "The dropped shoeshine brush", action: "If someone drops something ahead of you and offers a \"free\" service after you return it, decline and keep walking.", detail: "A shoeshiner drops a brush, you return it, and he insists on shining your shoes as thanks, then presents a hefty bill.", spoke: "money-scams" },
    { key: "bar-invitation-turkey", name: "The friendly bar invitation", action: "Choose your own bar and be wary of an over-eager new acquaintance; if a bill is wildly wrong, call the police on 155.", detail: "A friendly stranger leads you to a specific bar with astronomical prices and staff who ensure you pay.", spoke: "money-scams" },
    { key: "unordered-extras-turkey", name: "Unordered bread, water or meze on the bill", action: "Check the menu and prices before ordering, wave away anything you did not ask for, and read the itemized bill.", detail: "Bread, water or meze that arrive unasked and look complimentary can appear on the bill anyway.", spoke: "money-scams" },
    { key: "grand-bazaar-opening-price", name: "The Grand Bazaar opening price", action: "Start at roughly a quarter to a third of the first price, compare a few shops, and remember accepting tea creates no obligation to buy.", detail: "Opening prices in the bazaar are aimed at tourists, so the first number is a starting point, not the price.", spoke: "money-scams" },
    { key: "fake-officer-turkey", name: "The fake plainclothes officer", action: "Decline to hand over your wallet; real officers do not need to inspect your money.", detail: "Rarely, someone poses as a plainclothes officer and asks to inspect a passport and wallet to lift cash or card details.", spoke: "money-scams" },
  ],
  "egypt": [
    { key: "street-taxi-dollar-quote-egypt", name: "The meter refusal or dollar-quoted street taxi", action: "Use Uber or Careem for upfront pricing, or agree the fare before getting into a street cab and carry small notes.", detail: "A driver refuses the meter, quotes in dollars or euros, or takes a long route.", spoke: "taxis-and-apps" },
    { key: "airport-fixer-egypt", name: "The airport tout or bag-carrying \"fixer\"", action: "Ignore drivers who approach you in the arrivals hall; accept help with bags only from uniformed official staff.", detail: "Helpers who grab bags or offer to walk you through customs can then demand a large payment.", spoke: "money-scams" },
    { key: "camel-horse-letdown-egypt", name: "The camel or horse ride \"let-down\" fee", action: "Agree the full price, including the return and any photos, clearly out loud before you get on.", detail: "A handler offers a cheap-looking ride, then once you are up, demands much more to let you down or take you back.", spoke: "money-scams" },
    { key: "photo-helper-phone-egypt", name: "The photo \"helper\" who takes your phone", action: "Decline a stranger who offers to take your photo and then takes your phone; expect a tip demand to get it back.", detail: "A photo helper takes your phone to snap a picture, then wants a tip to hand it back.", spoke: "money-scams" },
    { key: "fake-guide-ticket-tout-egypt", name: "The fake guide or ticket tout", action: "Buy tickets only at the official counter, and arrange a licensed guide through your hotel or a known operator in advance.", detail: "Fake guides and ticket touts around major sites sell inflated tours with little real information.", spoke: "money-scams" },
    { key: "manufactured-favor-egypt", name: "The manufactured favor (baksheesh pressure)", action: "Decline unrequested help with a friendly but firm no; you are not obliged to pay for a favor you did not ask for.", detail: "Someone points you toward something you did not ask about, then presses for a tip.", spoke: "money-scams" },
    { key: "unofficial-street-changer-egypt", name: "The unofficial street money changer", action: "Change money only at banks, official bureaux or ATMs; unofficial exchange is illegal in Egypt and a route to counterfeit notes.", detail: "Unofficial currency exchange outside the airport is illegal and a route to counterfeit notes.", spoke: "money-scams" },
    { key: "souk-opening-price-egypt", name: "The souk opening price", action: "Ask your hotel what a fair price should be, start well below the opening price, and be ready to walk away.", detail: "Souk prices are rarely fixed and the first number is aimed at tourists.", spoke: "money-scams" },
  ],
  "colombia": [
    { key: "fake-police-cash-check-colombia", name: "The \"police\" cash check", action: "Ask to see their placa (badge) and offer to walk together to the nearest CAI police post rather than handing over cash or your phone; real officers do not demand cash on the spot.", detail: "People posing as police, sometimes claiming to be detectives, stop foreigners to \"inspect\" cash for counterfeits.", spoke: "money-scams" },
  ],
  "brazil": [
    { key: "airport-tout-brazil", name: "The unofficial airport driver", action: "Never accept a ride from someone who approaches you in the arrivals hall; use an app from the marked pickup area or the official prepaid taxi desk instead.", detail: "Unofficial drivers who approach arriving passengers inside the terminal are where problems concentrate.", spoke: "taxis-and-apps" },
  ],
  "argentina": [
    { key: "note-swap-counterfeit-argentina", name: "The counterfeit note swap", action: "Hand over one note at a time, keep your own note in sight while it is examined, and look at what comes back before you get out.", detail: "A driver offers to help with unfamiliar peso notes, then swaps a valid bill for a counterfeit or lower-value one.", spoke: "money-scams" },
    { key: "airport-handler-double-pay-argentina", name: "The airport handler who takes payment twice", action: "Pre-arrange the ride through a dispatch service, a ride-hailing app, or a flat-rate remise.", detail: "A handler at the airport takes payment for the ride, then the driver denies seeing it and asks again at the other end.", spoke: "money-scams" },
    { key: "staged-breakdown-argentina", name: "The staged breakdown, and the second taxi", action: "Pre-arrange the ride through an app or dispatcher rather than hailing one.", detail: "The taxi breaks down mid-journey, a second taxi conveniently appears, and both drivers present a bill.", spoke: "money-scams" },
    { key: "mustard-stain-argentina", name: "The mustard stain distraction", action: "If something lands on you, hold your bag, keep walking, and clean it yourself somewhere you have chosen.", detail: "Something is sprayed on you from a distance, and a \"helpful\" stranger appears immediately to rob you while cleaning it off.", spoke: "money-scams" },
    { key: "blue-dollar-changer-argentina", name: "The \"blue dollar\" street changer", action: "Exchange money only at banks, hotels or exchangers with an actual storefront; the street rate no longer beats the card rate by enough to offset the risk.", detail: "The old blue-dollar street-rate advantage has narrowed to a few percent, not enough to offset a counterfeit or short-change risk.", spoke: "money-scams" },
  ],
  "morocco": [
    { key: "petit-taxi-meter-refusal-morocco", name: "The petit taxi meter refusal", action: "Ask for the meter (compteur, afak) as you get in; if the driver refuses, close the door and flag another, or use inDrive.", detail: "A driver who will not switch on the compteur can quote a flat rate many times the real fare, worst at night.", spoke: "money-scams" },
    { key: "friendly-guide-morocco", name: "The friendly guide who demands payment", action: "Decline all unsolicited guidance politely and firmly from the first moment, and navigate with an offline map.", detail: "A stranger falls into step, says they are going the same way, leads you a short distance, then demands payment.", spoke: "money-scams" },
    { key: "closed-today-redirect-morocco", name: "The \"it is closed today\" carpet-shop redirect", action: "Assume it is not true and check for yourself; there is no entrance fee for public medina streets.", detail: "A stranger tells you the sight you are heading for is shut, then offers an \"alternative\" that turns out to be a shop.", spoke: "money-scams" },
    { key: "tannery-hard-sell-morocco", name: "The tannery \"free viewpoint\" hard sell", action: "You cannot lawfully be prevented from leaving any shop, so decline firmly and go.", detail: "A free viewpoint or escort to see the dye pits becomes high-pressure leather selling.", spoke: "money-scams" },
    { key: "henna-snake-photo-morocco", name: "The uninvited henna, snake or monkey photo", action: "Agree a price, or decline, before anything touches your hand or your camera.", detail: "A henna design applied uninvited, or an animal draped on you for a photo, is followed by a demand for payment.", spoke: "money-scams" },
    { key: "street-changer-morocco", name: "The street money changer", action: "Use banks, official bureaux de change or ATMs; never a street changer offering a better rate, who deals in counterfeit notes.", detail: "A better-than-bank rate offered on the street is a counterfeit-note risk, not a bargain.", spoke: "money-scams" },
    { key: "souk-opening-price-morocco", name: "The souk opening price", action: "Ask your riad what things should cost, open well below the first price, and walk away freely.", detail: "Souk prices are aimed at tourists and are meant to be negotiated down from the opening ask.", spoke: "money-scams" },
    { key: "diluted-argan-oil-morocco", name: "The diluted \"pure\" argan oil", action: "Buy argan oil from a reputable cooperative if purity matters to you.", detail: "Argan oil sold as pure is sometimes diluted.", spoke: "money-scams" },
  ],
  "south-africa": [
    { key: "atm-card-swap-south-africa", name: "The ATM card swap", action: "Refuse all help at a cash machine, including from security guards or anyone presenting as a bank official; go inside the branch instead.", detail: "A stranger offers to assist at an ATM, presses cancel so the machine ejects your card, and swaps it for another before you notice.", spoke: "money-scams" },
    { key: "card-out-of-sight-south-africa", name: "The card that leaves your sight at a till or pump", action: "Never let your card leave your sight; if a machine is elsewhere, walk with the staff member or ask them to bring the machine to you.", detail: "Skimming devices can be fitted to any card reader, including till points at restaurants and full-service filling stations.", spoke: "money-scams" },
    { key: "unofficial-ride-terminal-south-africa", name: "The unofficial ride offered inside the terminal", action: "Never accept an unsolicited ride from someone who approaches you inside the terminal; use the official metered-taxi rank or the app's e-hailing bay.", detail: "Uber and Bolt do not pick up at the arrivals door, and anyone offering a ride inside the terminal is outside that system.", spoke: "taxis-and-apps" },
  ],
  "poland": [
    { key: "airport-driver-approach-poland", name: "The friendly driver who approaches you first", action: "Never take a ride from someone who approaches you; book Bolt, Uber or FreeNow, or use the official rank with a car showing a company name and phone number.", detail: "A friendly driver who reaches you before the official rank can charge several times the real fare at the other end.", spoke: "money-scams" },
    { key: "discount-bar-flyer-poland", name: "The bar or club discount flyer", action: "Choose your own venue rather than accepting one offered on a flyer or by a tout; keep your card in sight.", detail: "Bars and clubs that lure customers with a discount flyer have been linked to spiked drinks and overcharged cards.", spoke: "money-scams" },
    { key: "fake-hotel-call-poland", name: "The fake \"hotel front desk\" card-number call", action: "Hang up; no legitimate hotel asks for a full card number over the phone.", detail: "A late call claims to be the front desk fixing a \"problem\" with the card on file and asks you to read the number out.", spoke: "money-scams" },
    { key: "kantor-unbeatable-rate-poland", name: "The \"unbeatable rate\" kantor", action: "Ask exactly how many zloty you will receive before handing anything over, and count it before you leave.", detail: "An exchange booth advertising a rate that beats everyone usually has a catch revealed only at the counter.", spoke: "money-scams" },
    { key: "euronet-atm-poland", name: "The standalone Euronet ATM", action: "Use an ATM attached to a real bank instead of a standalone blue-and-yellow Euronet machine.", detail: "These machines cluster in tourist areas, charge high fees, and push the dollar-conversion prompt.", spoke: "money-scams" },
  ],
  "hungary": [
    { key: "konzumlany-bar-hungary", name: "The konzumlany \"consumption girl\" bar setup", action: "Never follow someone who approached you to a bar they chose; if handed a bad bill, ask for an itemized receipt, stay calm, and report it to the Budapest tourist police afterward.", detail: "A friendly stranger steers you to a specific, complicit bar where the bill lands far above what the round was worth.", spoke: "money-scams" },
    { key: "unmarked-car-hungary", name: "The unmarked, unlicensed car", action: "Never get into an unmarked car or take a ride from a driver who approaches you in the arrivals hall; use the official rank, an app, or the 100E bus.", detail: "Every licensed Budapest taxi runs the same regulated tariff, so the risk sits entirely with unmarked, unlicensed cars.", spoke: "taxis-and-apps" },
    { key: "exchange-kiosk-hungary", name: "The tourist-area exchange kiosk and Euronet ATM", action: "Use a machine attached to a real Hungarian bank instead of a tourist kiosk or standalone Euronet machine.", detail: "Tourist-area exchange kiosks and standalone Euronet ATMs quote poor rates and lean on fees.", spoke: "money-scams" },
    { key: "unordered-bread-hungary", name: "Unordered bread or olives on the bill", action: "Decline unasked bread, olives or a small plate if you do not want it; ask for a menu with printed prices before you sit.", detail: "Bread or olives brought unasked are normally a chargeable item here, not a courtesy.", spoke: "money-scams" },
  ],
  "croatia": [
    { key: "fish-by-kilogram-croatia", name: "Fish or shellfish priced by the kilogram", action: "Ask the price per kilogram and the weight of the specific fish before it goes to the kitchen.", detail: "Coastal menus price whole fish by the kilogram, not the plate, so a shared fish can land at a number nobody expected.", spoke: "money-scams" },
    { key: "unordered-bread-croatia", name: "Unordered bread, olives or a couvert", action: "Decline what you do not want as it arrives, rather than at the bill; ask for the receipt, which Croatian law requires.", detail: "Bread, olives or a couvert brought unasked are chargeable items in Croatia, and accepting them is treated as ordering them.", spoke: "money-scams" },
    { key: "port-airport-flat-rate-croatia", name: "The flat rate quoted at the ferry port or airport", action: "Use Uber or Bolt where you can; if you take a street taxi, check the pricing table on the vehicle and make sure the meter runs from the start.", detail: "Overcharging concentrates at cruise berths, ferry terminals and airports, where a flat rate is quoted instead of the meter.", spoke: "money-scams" },
    { key: "fake-qr-parking-croatia", name: "The fake QR sticker on a parking meter", action: "Pay at the meter face itself, by card or coin, or use the city's official parking app rather than a code found on a post; a fake sticker sits slightly raised or misaligned.", detail: "Fake QR stickers pasted over real parking meter codes in Dubrovnik have sent drivers to a page that harvests card details.", spoke: "money-scams" },
  ],
  "cambodia": [
    { key: "fake-dollar-change-cambodia", name: "The fake dollar bill in your change", action: "Check that notes handed to you are genuine and not torn or heavily worn.", detail: "Cambodia runs on US dollars, and travelers report being handed fake bills as change in shops and clubs.", spoke: "money-scams" },
    { key: "angkor-pass-reseller-cambodia", name: "The Angkor pass sold by anyone but Angkor Enterprise", action: "Buy Angkor passes only from Angkor Enterprise (its official site or the Road 60 ticket centre); a discounted pass from a driver is either a markup or a counterfeit that will not scan.", detail: "The Angkor pass has one price and one official seller; anything else offered by a driver or shop is a markup or a dud.", spoke: "money-scams" },
    { key: "land-border-visa-inflation-cambodia", name: "The inflated visa fee at a land border", action: "Know the official visa fee before you travel (about $36 for the e-visa, about $30 on arrival); if quoted more at a land border, the published fee is the answer.", detail: "At land crossings, officials and tour operators can ask for unofficial fees or inflate the published visa price.", spoke: "money-scams" },
    { key: "tuktuk-commission-routing-cambodia", name: "The tuk-tuk driver's commission routing", action: "Verify any claimed closure yourself with a phone call, and agree the fare and the stops before you set off, or use PassApp or Grab so the price is fixed in advance.", detail: "A friendly driver mentions your guesthouse has closed or moved and knows a \"better\" shop or tour, paid on commission.", spoke: "taxis-and-ride-hailing" },
    { key: "passport-deposit-scooter-cambodia", name: "The passport held as a scooter deposit", action: "Never hand over your passport as a guarantee for returning a motorcycle or scooter; offer a cash deposit instead.", detail: "A shop holding your passport controls whatever repair or late figure it decides to name.", spoke: "money-scams" },
  ],
  "china": [
    { key: "tea-house-invitation-china", name: "The tea house or art gallery invitation", action: "Do not follow a stranger who approached you to a venue; walk into an established tea house or gallery yourself and ask for a priced menu before you sit.", detail: "A friendly stranger near a famous landmark suggests a tea ceremony, gallery or bar, and the bill afterward bears no relation to what was consumed.", spoke: "money-scams" },
    { key: "taxi-meter-broken-china", name: "The \"meter is broken\" flat fare", action: "Ignore anyone touting inside a terminal, join the signed official queue, and ask for the meter (da biao) or book DiDi where the price is set before you get in.", detail: "A driver claims the meter is broken and quotes a flat fare typically several times the metered price, most often at airports and stations.", spoke: "taxis-and-apps" },
    { key: "counterfeit-note-china", name: "The counterfeit note handed back", action: "Carry small denominations, keep your own note in sight while a vendor inspects it, and look closely if a note is handed back claiming yours was fake.", detail: "The con is the swap, not the inspection: a note handed back as \"fake\" is often not the one you gave.", spoke: "money-scams" },
    { key: "fake-police-call-china", name: "The fake \"police\" phone call", action: "Do not send money, and hang up; real police do not call demanding a transfer to clear an investigation.", detail: "A caller claiming to be police says you are under investigation and asks you to transfer funds to clear it up.", spoke: "money-scams" },
  ],
  "sri-lanka": [
    { key: "tuktuk-phone-app-meter-srilanka", name: "The \"broken meter\" run on a driver's own phone app", action: "Book through PickMe or Uber yourself, or insist the meter runs from the start; if negotiating, agree the price out loud and carry the exact amount.", detail: "A driver runs your ride on his own phone app rather than the meter, and the figure quoted at the end is well above the routine fare.", spoke: "taxis-and-apps" },
    { key: "gem-shop-tour-srilanka", name: "The special tour to a gem shop", action: "Never buy gems as an investment or to resell at home; buy only from a shop you found yourself, and walk out the moment anyone applies pressure.", detail: "A driver's special tour to a gem shop pressures a purchase of stones that are cut glass or worth far less than asked.", spoke: "money-scams" },
    { key: "surfboard-damage-srilanka", name: "The rented surfboard \"damage\" claim", action: "Photograph or video any rented gear from every angle before you use it, with the shop in shot; never leave your passport as a deposit.", detail: "Surf schools have claimed renters damaged boards that already carried old dings and demanded high repair fees.", spoke: "money-scams" },
    { key: "hotel-closed-srilanka", name: "The \"your hotel is closed\" commission diversion", action: "Phone your hotel yourself and ask; save the number, address and an offline map before you land.", detail: "A driver claims the place you booked has closed or is full and knows somewhere \"better\" that pays him a referral fee.", spoke: "money-scams" },
    { key: "unofficial-temple-guide-srilanka", name: "The unofficial temple guide", action: "Give a firm \"no thank you\" at the first sentence, before anything is explained.", detail: "An unofficial guide starts walking and explaining before anything has been agreed, then asks for payment.", spoke: "money-scams" },
  ],
  "philippines": [
    { key: "airport-flat-rate-philippines", name: "The airport flat rate instead of the meter", action: "Ignore anyone who approaches you inside the terminal, book Grab, or take a taxi from the marshalled rank; confirm out loud that the meter will run.", detail: "A driver approaches inside the terminal with a fixed price, or announces the meter is broken, well above the real fare.", spoke: "money-scams" },
    { key: "budol-budol-philippines", name: "The friendly stranger (budol-budol)", action: "Decline food, drinks or rides from someone who befriends you soon after you arrive, even if they seem legitimate.", detail: "A stranger who befriends you soon after arrival, sometimes with a second person joining in, can talk you into handing over cash or valuables.", spoke: "money-scams" },
    { key: "tanim-bala-philippines", name: "The tanim-bala bullet-planting extortion", action: "Wrap your checked bag (about 160 pesos at the airport) and keep it closed and in sight before it goes to the belt.", detail: "A documented, if now rare, Manila airport scheme where a bullet appeared in checked luggage and a payment was demanded to make it go away.", spoke: "money-scams" },
  ],
};

// The site-wide DCC band, written once. The item's visible figure and the number the exposure
// total reads are the same constant, so they cannot drift.
const DCC_BAND = 'about 3 to 8%';

const plain = (s) => String(s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

// ---------------------------------------------------------------------------
// THE TWO PARSERS. Both are deliberately strict and both fail closed.
//
// They exist so that no figure in this file is ever written down twice. The item shows the
// sourced string; the exposure total reads its number back out of that same string. Change
// the string and the number follows, which is the only arrangement where the headline and the
// row underneath it cannot disagree.
//
// FAILING CLOSED IS THE POINT. Anything that is not a plain dollar amount returns null:
// "IDR 150,000", "20 pounds", "two to three times that", "the published portal fee",
// "nothing", "free". Those are all real values on real items below, and every one of them
// SHOULD be unpriced. A looser parser would have to guess an exchange rate or a multiplier,
// and a guessed number in a total presented as honest is worse than no total at all.

// "$30", "$30 to $50", "about $81", "$20 a person". Anything else is null.
const USD_RE = /^(?:about\s+)?\$([\d,]+(?:\.\d{1,2})?)(?:\s+to\s+\$([\d,]+(?:\.\d{1,2})?))?(\s+(?:a|per)\s+person)?$/i;
function usdRange(s) {
  const m = USD_RE.exec(String(s == null ? '' : s).trim());
  if (!m) return null;
  const lo = parseFloat(m[1].replace(/,/g, ''));
  const hi = m[2] ? parseFloat(m[2].replace(/,/g, '')) : lo;
  if (!isFinite(lo) || !isFinite(hi) || lo < 0 || hi < lo) return null;
  return { lo, hi, perPerson: !!m[3] };
}

// "about 3 to 8%", "19%". Used for one item only, see the guard at its call site.
const PCT_RE = /^(?:about\s+)?(\d+(?:\.\d+)?)(?:\s+to\s+(\d+(?:\.\d+)?))?\s*%$/i;
function pctRange(s) {
  const m = PCT_RE.exec(String(s == null ? '' : s).trim());
  if (!m) return null;
  const lo = parseFloat(m[1]);
  const hi = m[2] ? parseFloat(m[2]) : lo;
  if (!isFinite(lo) || !isFinite(hi) || lo < 0 || hi < lo) return null;
  return { lo, hi };
}

// The markup is the gap between the two prices, and it only exists where BOTH sides parse as
// dollars. Egypt is currently the only country where they do. Everywhere else the reseller
// item is real, named and counted, with no figure attached, which is exactly what the guides
// support.
function markupRange(official, fake) {
  const o = usdRange(official), f = usdRange(fake);
  if (!o || !f) return null;
  const lo = f.lo - o.hi, hi = f.hi - o.lo;
  if (!(hi > 0)) return null;
  // An entry charge is per person by definition, stated as such on the object
  // entry-charges.js returns, so the markup that rides it is per person too.
  return { kind: 'usd', lo: Math.max(0, lo), hi, perPerson: true };
}

// Builds the avoidable list for one country. Order is deliberate: the two that cost the most
// and are easiest to refuse come first.
export function avoidableFor(c) {
  if (!c) return [];
  const out = [];
  const cur = (c.cash && c.cash.cur) || '';
  // A country whose currency IS the dollar has no pay-in-dollars choice at a terminal and
  // nothing to exchange. Rendering "choose USD rather than dollars" there is nonsense, and it
  // shipped in the last build before this gate existed.
  const usdCountry = cur === 'USD';

  // 1. DCC. The band is a site-wide sourced figure (money-rules.js states 3 to 8 percent),
  //    so it renders as a band on the card spend, never as a computed dollar saving.
  if (!usdCountry) {
    out.push({
      key: 'dcc',
      title: 'Paying in dollars at the terminal',
      escape: 'Choose ' + cur + ' every time, at a till and at an ATM.',
      detail: 'Dynamic currency conversion lets the machine set its own rate on top of any fee, and it runs about 3 to 8 percent on whatever you put on the card. It is the single easiest charge on this page to refuse, and it costs nothing to say no.',
      // A range, not a dollar figure: the band is sourced, the multiplication would not be.
      figure: DCC_BAND,
      figureNote: 'on what you card',
      href: '/' + c.slug + '#cards',
      hrefLabel: 'How to decline it',
      side: 'pay',
      // THE ONE PERCENTAGE THAT IS ALLOWED TO BECOME MONEY, and only as a band.
      //
      // The line above says the multiplication is not sourced, and that still holds for a
      // SINGLE dollar figure: picking 3, or 8, or anything between, would be choosing an end
      // of a band nobody measured. Carrying both ends through to both ends of the exposure
      // total keeps the band a band. The reader sees "$70 to $190", never "$130".
      //
      // The base is the card base the calculator already computes, which is what the item
      // already claims in words ("on what you card"), so this adds no new assumption beyond
      // the one the row is already making.
      //
      // NOT the exemption rate below, which is also a percentage and must stay unpriced. See
      // the note on that item for why.
      worth: (() => { const p = pctRange(DCC_BAND); return p ? { kind: 'pctCardBase', lo: p.lo, hi: p.hi } : null; })(),
    });
  }

  // 2. The card and ATM fees, which a different card takes to zero. This is the one item with
  //    a live dollar figure, and it is the calculator's own computed fee rather than an
  //    estimate of a saving. The element is filled by render(), so it cannot disagree with the
  //    fee lines directly above it.
  out.push({
    key: 'fees',
    title: 'Your own bank\'s foreign fees',
    escape: 'A no-foreign-fee card takes both fee lines above to zero.',
    detail: 'Most US cards add a percentage on what you buy and on the cash you pull, plus a few dollars per ATM withdrawal. Nothing about that is a cost of the trip; it is a cost of the card you happened to bring.',
    liveFigureId: 'avFees',
    figureNote: 'what the fees above come to',
    href: '#calcNoFee',
    hrefLabel: 'The cards that do not charge it',
    side: 'pay',
    // The only exact figure in the whole exposure measure, because it is not an estimate of
    // anything: it is the fee the calculator is charging on this reader's own inputs, three
    // lines further up the same page. The calculator fills it at render time.
    worth: { kind: 'liveFees' },
  });

  // 3. Exchange desks. Name-only: no honest spread figure exists per country, and the guides
  //    say so. Skipped for dollar countries, where there is nothing to change.
  if (!usdCountry) {
    out.push({
      key: 'exchange',
      title: 'The airport or hotel exchange desk',
      escape: 'Withdraw from a bank ATM instead, and never change cash at the airport.',
      detail: 'Exchange counters make their money on the spread rather than on a stated fee, which is why we publish no percentage for it: it moves by counter, by hour and by note. The rule is what is reliable, not the number.',
      href: '/' + c.slug + '#cash',
      hrefLabel: 'Getting cash here',
      side: 'pay',
      // Real money, and genuinely unpriced. The spread moves by counter and by hour, the
      // guides say so, and no figure exists to read. So it is named in the list and counted
      // beside the total rather than summed into it: a phantom figure here would make the
      // amber number look more precise than the facts behind it.
      worth: null,
    });
  }

  // 4. VAT or GST refund. Only where the guide affirms one exists. This is money the traveler
  //    is owed and mostly does not claim, which makes it the purest item on the list.
  if (REFUND[c.slug] === 'yes') {
    const factLabel = REFUND_FACTS[c.slug];
    const fact = (factLabel && Array.isArray(c.keyFacts)) ? c.keyFacts.find(k => k.label === factLabel) : null;
    out.push({
      key: 'vat',
      title: 'The sales tax you can claim back',
      escape: 'Ask for the tax-free form at the till, keep the goods unused, and claim on the way out.',
      detail: fact
        ? plain(fact.value) + ' Most travelers never claim it. We put no dollar figure on it, because it depends on what you buy.'
        : c.name + ' refunds sales tax to visitors on qualifying shopping, with the rate and any minimum spend set out in this guide. Most travelers never claim it, and we put no dollar figure on it, because it depends on what you buy.',
      href: '#taxes-and-refunds',
      hrefLabel: 'The rate and the minimum spend',
      side: 'dodge',
      // Money the traveler is owed, and deliberately unpriced: what comes back depends on
      // what they buy, which this page never asks. Counted, never estimated.
      worth: null,
    });
  }

  // 5. THE SCAM PRICE TAG. Only where the country genuinely has a pre-flight form, read from
  //    the arrival-forms module so the two can never disagree. The paid one (Aruba) is excluded
  //    here because its fee is real: it goes through the reseller item instead.
  //
  //    This is the upgrade of an item that already existed rather than a second one beside it.
  //    Showing "the form is free" and "the lookalikes charge $30 to $50" as two separate rows
  //    would read as two separate facts about the same form, which is exactly the duplication
  //    the page has to avoid.
  const form = arrivalFormFor(c.slug);
  if (form && form.free) {
    const fake = SCAM_FORM_PRICE[c.slug] || null;
    const site = form.official.replace(/^https?:\/\//, '').replace(/\/$/, '');
    out.push({
      key: 'form',
      title: 'Paying for the ' + form.name,
      escape: 'File it yourself at ' + site + '. It takes minutes.',
      detail: fake
        ? 'It is free on the official government site. Lookalike sites charge ' + fake + ' to type the same details into the same form, and they rank above the real one because the government does not buy ads.'
        : 'It is free on the official government site, and it is mandatory, which is exactly why lookalike sites buy the search terms. We publish no figure for what they charge because none is sourced for ' + c.name + ', but anything above nothing is too much.',
      // The two prices, side by side. The free side is the fact; the fake side appears only
      // where a guide publishes it.
      figure: fake || 'free',
      figureNote: fake ? 'what the fakes charge' : 'on the official site',
      priceVs: fake ? { real: 'free', fake: fake } : null,
      href: '/arrival-forms',
      hrefLabel: 'Every form, and its real site',
      side: 'dodge',
      // The whole fake price is the dodge, because the real price is nothing. Per person: the
      // form is filed per traveler, so two travelers are quoted for two forms.
      //
      // Only three guides publish a range. The other five forms are real and the lookalikes
      // are real, and they carry no number here, because none is sourced.
      worth: (() => { const u = usdRange(fake); return u ? { kind: 'usd', lo: u.lo, hi: u.hi, perPerson: true } : null; })(),
    });
  }

  // 6. THE RESELLER MARKUP. Only where a real unconditional charge exists to be impersonated.
  //    Where the guide publishes both prices they sit side by side; where it names the markup
  //    only in words, so does this.
  const charges = entryChargesFor(c).filter(isBillable);
  const r = RESELLER[c.slug];
  if (charges.length && r) {
    out.push({
      key: 'reseller',
      title: 'Reseller markup on the ' + r.what,
      escape: 'Apply on the official government portal, linked in Getting there above.',
      detail: r.fake
        ? 'The official ' + r.what + ' is ' + r.official + '. Resellers charge ' + r.fake + ' for the same document, and they are not a faster route, only a costlier one.'
        : 'The official ' + r.what + ' is ' + r.official + ' on the government site. Resellers charge above that for the same document. We publish no figure for the markup because none is sourced for ' + c.name + ', and it varies by reseller.',
      figure: r.official,
      figureNote: 'the official price',
      priceVs: r.fake ? { real: r.official, fake: r.fake } : null,
      href: '#true-cost',
      hrefLabel: 'The official source for this charge',
      side: 'dodge',
      // THE MARKUP IS THE DODGE, NOT THE WHOLE RESELLER PRICE. The official charge is owed
      // either way, so only the gap above it is money the traveler keeps. Both sides have to
      // parse as dollars for the gap to exist, which today is Egypt alone: Indonesia's is in
      // rupiah and expressed as a multiple, and the rest have no sourced fake side at all.
      // Those are counted, not priced.
      worth: markupRange(r.official, r.fake),
    });
  } else if (charges.length) {
    // A real charge with no reseller data of its own: named, never figured.
    out.push({
      key: 'reseller',
      title: 'Reseller markup on the entry charge',
      escape: 'Apply on the official government portal, linked in Getting there above.',
      detail: 'The charge itself is unavoidable. Paying an agent on top of it is not, and the sites that rank above the official one are agents. We publish no figure for the markup because it varies by reseller.',
      href: '#true-cost',
      hrefLabel: 'The official source for this charge',
      side: 'dodge',
      worth: null,
    });
  }

  // 6b. THE DEAD PRODUCT. No entry charge exists to gate on, which is the whole fact: the
  //     official price is nothing because the document was abolished.
  const dead = DEAD_PRODUCT[c.slug];
  if (dead) {
    out.push({
      key: 'dead',
      title: 'Buying a ' + dead.what,
      escape: 'Buy nothing. Fly on your ordinary passport.',
      detail: dead.detail,
      figure: 'nothing',
      figureNote: 'the official price',
      priceVs: { real: 'nothing', fake: 'whatever they ask' },
      href: '/' + c.slug,
      hrefLabel: 'What you actually need to enter',
      side: 'dodge',
      // "Whatever they ask" is the honest fake side and it is not a number, so this item is
      // counted. Pricing a document that does not exist would be inventing the scam's own
      // price list.
      worth: null,
    });
  }

  // 7. THE DOUBLE-TIP GUARD. Only on the two service-charge tiers that are a guarantee rather
  //    than a tendency. Categorical by design: the money kept is the tip you would have added,
  //    which is not a fixed number, so this item never carries one.
  const tipRow = tippingRows.find(x => x.slug === c.slug);
  if (tipRow && SERVICE_CHARGE_CERTAIN.includes(tipRow.serviceCharge)) {
    out.push({
      key: 'doubletip',
      title: 'Tipping on top of a service charge',
      escape: 'Read the bill first. Where the charge is on it, that is the tip.',
      detail: 'A service charge is ' + (tipRow.serviceCharge === 'always' ? 'always' : 'usually') + ' added to the bill in ' + c.name + ', so a tip on top of it is paying for service twice. We put no figure on this one, because what you would have added is up to you.',
      href: '/' + c.slug + '/tipping',
      hrefLabel: 'How tipping works here',
      side: 'dodge',
      // Categorical by design: what the traveler would have added is up to the traveler.
      worth: null,
    });
  }

  // 8. THE CLAIMABLE EXEMPTION. Money you are owed and only get by doing something.
  const ex = EXEMPTION[c.slug];
  if (ex) {
    out.push({
      key: 'exemption',
      title: ex.title,
      escape: ex.action,
      detail: ex.detail,
      figure: ex.rate,
      figureNote: 'you should not be paying',
      href: ex.href,
      hrefLabel: 'How the exemption works',
      side: 'dodge',
      // DELIBERATELY UNPRICED, and this is the closest call in the file, so here is the
      // reasoning in full.
      //
      // The rate is sourced and the calculator holds a room total, so 19% of the room looks
      // computable. It is not, for two reasons that both push the same way. First, the base:
      // a room price a traveler types in is whatever their booking site showed them, and
      // whether that already includes the local VAT is unknown to this page. Second, the
      // arithmetic: where a price IS tax-inclusive, removing a 21% VAT takes about 17.4% off
      // the gross, not 21%, so the sourced rate is the wrong multiplier against the wrong
      // base. Two unknowns compounding into the site's headline honesty measure is not a
      // trade worth making.
      //
      // So it shows its rate on its own row, where the reader can apply it to a bill they can
      // actually see, and it is COUNTED beside the total rather than summed into it. This
      // understates the dodge total for Colombia and Argentina, on purpose. Understating is
      // survivable; a confident wrong number on this page is not.
      //
      // FLAGGED TO MAIN: if the guides ever state whether quoted room rates are VAT
      // inclusive, this becomes computable and should be revisited.
      worth: null,
    });
  }

  // 9. THE NAMED SCAM AND TAXI TACTICS. Extracted from this country's own scams and taxis
  //    spokes, never invented. Every one is a real, named thing that country's guide
  //    describes, with the actual action that refuses it, which is why every single one is
  //    SOFT: the amount a traveler avoids by knowing a meter trick or a street setup varies
  //    by encounter, so a figure here would be exactly the fabrication this file exists to
  //    avoid. Pushed after the existing items so it can never reorder anything above it, and
  //    a country with nothing specific enough to name in its own spokes gets no entry here,
  //    which is the honest outcome rather than a gap to fill.
  const tactics = REFUSE_TACTICS[c.slug];
  if (tactics) {
    for (const t of tactics) {
      out.push({
        key: t.key,
        title: t.name,
        escape: t.action,
        detail: t.detail,
        href: '/' + c.slug + '/' + t.spoke,
        hrefLabel: t.spoke === 'money-scams' ? 'The full scam guide' : 'How taxis work here',
        side: 'dodge',
        // Categorical by design, same as the reseller and form items above when they carry
        // no sourced figure: the tactic is real and counted, but a scam's own take varies by
        // encounter, so no number is invented for it.
        worth: null,
      });
    }
  }

  // Sort into the reading order above. An item whose key is not listed falls to the end in the
  // order it was built, so adding one without touching ORDER can never drop it.
  const rank = (k) => { const i = ORDER.indexOf(k); return i === -1 ? ORDER.length : i; };
  return out.sort((a, b) => rank(a.key) - rank(b.key));
}

// Exported so a check or a page can report the coverage hole rather than discover it later.
export const refundStatusFor = (slug) => REFUND[slug] || 'absent';

// ---------------------------------------------------------------------------
// THE EXPOSURE SUMMARY: the static half of the two honest numbers.
//
// Returns the parts that are known at build time. The calculator supplies the rest at render
// time, because two of the inputs are the reader's own: the card base the percentage band
// applies to, and how many travelers a per-person figure multiplies by.
//
// THE SHAPE IS TWO SIDES THAT NEVER MEET. Nothing in here adds `pay` to `dodge`, and the
// consumer must not either. Each side carries a low and a high because several sourced
// figures are ranges, and a range collapsed to its middle is a number nobody published.
//
// `unpriced` is a COUNT, not a zero. It is how many real items on that side carry no sourced
// figure, so the page can say "and three more we will help you avoid" instead of quietly
// implying that three items are worth nothing. Absence is not zero, on this page most of all.
export function exposureFor(c) {
  const items = avoidableFor(c);
  const s = {
    // pay side: avoidable but real
    payLive: false,        // the calculator's own card and ATM fee lines belong to this side
    payPctLo: 0, payPctHi: 0,   // percent of the card base (DCC)
    payFlatLo: 0, payFlatHi: 0, // whole-trip dollars
    payPpLo: 0, payPpHi: 0,     // dollars per traveler
    payUnpriced: 0,
    // dodge side: pure avoidance
    dodgeFlatLo: 0, dodgeFlatHi: 0,
    dodgePpLo: 0, dodgePpHi: 0,
    dodgeUnpriced: 0,
    // how many items are on each side at all, so a consumer can tell an empty side from a
    // side that is merely unpriced
    payItems: 0, dodgeItems: 0,
  };
  for (const it of items) {
    const side = (it.side === 'dodge') ? 'dodge' : 'pay';
    s[side + 'Items'] += 1;
    const w = it.worth;
    if (!w) { s[side + 'Unpriced'] += 1; continue; }
    if (w.kind === 'liveFees') { s.payLive = true; continue; }
    if (w.kind === 'pctCardBase') {
      // Guarded on purpose. A percentage of the card base is money the traveler pays, so it
      // can only ever sit on the pay side; a dodge item reaching for this kind would be a
      // modelling mistake, and it is counted rather than silently misfiled.
      if (side !== 'pay') { s[side + 'Unpriced'] += 1; continue; }
      s.payPctLo += w.lo; s.payPctHi += w.hi;
      continue;
    }
    if (w.kind === 'usd') {
      const k = side + (w.perPerson ? 'Pp' : 'Flat');
      s[k + 'Lo'] += w.lo; s[k + 'Hi'] += w.hi;
      continue;
    }
    // An unrecognised kind is counted, never guessed at.
    s[side + 'Unpriced'] += 1;
  }
  return s;
}

// ---------------------------------------------------------------------------
// THE CARRIER CONNECTIVITY FALLBACK (BRIEF-carrier-honest-build).
//
// A trip's real phone-plan exposure depends on which US carrier the traveler is on and how
// many nights they are staying, and NEITHER is known when this page is built: they only
// exist once the calculator wizard asks for them. So the carrier item itself is authored
// and rendered CLIENT-SIDE, in calc-wizard.js, from the sourced constants in
// src/data/carrier-roaming.js's CARRIER_PROFILES (see that file's own header for the
// day-pass math and the honesty line that keeps the other four models unpriced).
//
// This function is the one piece of the carrier item that IS knowable at build time: what
// to say when the reader picks "Other or not sure", or names a carrier this file has no
// profile for. It is deliberately carrier-blind and reuses the SAME per-country
// connectivity verdict the /staying-connected hub already shows (connectivity-verdicts.js),
// so a wizard reader and a guide reader are never told two different honest answers for the
// same country.
//
// NEVER merged into avoidableFor()'s own array above. That array is asserted byte-for-byte
// by calc-regression-test.mjs and check-avoidable-highlight.mjs against every live
// country's static data, and this item is not static (it depends on wizard-only state
// avoidableFor() has no concept of), so it stays a separate export, read only by
// CalcWizard.astro to seed the wizard's own client-side fallback text. avoidableFor()'s own
// output, and every existing item on it, is byte-unchanged by this addition.
export function carrierFallbackFor(c) {
  if (!c) return null;
  const v = VERDICTS[c.slug];
  const tier = v ? tierOf(v.tier) : null;
  const detail = v
    ? (v.why + ' Check your own carrier plan before you go either way.')
    : "This country's own connectivity guidance is still pending a full review here. Check your carrier's plan before you go, and compare live prices for a local SIM or eSIM.";
  return {
    key: 'carrier-fallback',
    title: 'Your phone plan abroad',
    detail,
    tierLabel: tier ? tier.short : null,
    href: spokeUrl(c.slug, 'staying-connected'),
    hrefLabel: 'How connectivity works here',
  };
}

// ---------------------------------------------------------------------------
// THE RAIL-PASS ITEM (BRIEF-rail-avoidable). Verdict-driven, never priced.
//
// rail-passes.js is deliberately price-free: its own header explains that a per-country
// rail-pass figure cannot be built honestly, because what rail costs depends entirely on the
// traveler's specific route. So this item NEVER carries a `worth`. It surfaces the
// categorical verdict (worth / depends / point-to-point / not-rail) already sourced there,
// in the traveler's own generic terms, plus that country's own specific `reason` verbatim,
// so the calculator and the /rail-passes page can never say two different things about the
// same country.
//
// FULLY build-time computable, unlike the carrier item: nothing here depends on trip length
// or traveler count, only on the country and the wizard's own yes/no answer to "planning
// intercity train travel?". So CalcWizard.astro renders the finished sentence directly; no
// client-side string assembly is needed at all, only a visibility toggle (see
// calc-wizard.js's mirror(), which shows this card only when the wizard's own rail answer is
// 'yes' AND this function returned a real item, i.e. the country has a verdict row).
//
// NEVER merged into avoidableFor()'s own array above, for the same reason
// carrierFallbackFor() above is not: this item's visibility is gated on wizard-only state
// (the rail question), which avoidableFor()'s static per-country output has no concept of,
// and CountryBriefing.astro's own static guide page must not grow this item unconditionally.
const RAIL_MESSAGE = {
  'point-to-point': (name) => 'For most trips in ' + name + ', point-to-point tickets beat a rail pass. Do not buy a pass reflexively, price your actual route first.',
  depends: (name) => 'Whether a rail pass beats tickets in ' + name + ' depends on your route. Price your actual legs before buying, a wide itinerary can justify a pass, a narrow one cannot.',
  worth: (name) => 'In ' + name + ', a rail pass usually wins for a normal trip, but it still depends on your route, so price your legs to be sure.',
  // Dormant: no row uses this tier today, but the branch is here so a future country can
  // use it without anyone having to add the message in a later, separate commit.
  'not-rail': (name) => 'Trains are not really how visitors get around ' + name + ', so a pass is unlikely to be the question.',
};

export function railAvoidableFor(c) {
  if (!c) return null;
  const row = railPasses.find((r) => r.slug === c.slug);
  if (!row) return null;
  const build = RAIL_MESSAGE[row.tier];
  if (!build) return null;
  return {
    key: 'rail',
    title: 'Rail pass or point-to-point tickets',
    // The generic, tier-level call, always in the traveler's own terms.
    detail: build(c.name),
    // The country's own specific reason, read verbatim from rail-passes.js's own row, never
    // paraphrased: this is the exact sentence /rail-passes.astro already shows for this
    // country, so the two surfaces cannot drift apart.
    reason: row.reason,
    href: row.railSpoke,
    hrefLabel: 'How rail passes work in ' + c.name,
    side: 'dodge',
    // NEVER priced. There is no honest per-country figure to show, by rail-passes.js's own
    // design; see that file's header for the full reasoning.
    worth: null,
  };
}

// ---------------------------------------------------------------------------
// THE RENTAL-CAR COUNTER-INSURANCE ITEM (BRIEF-rental-avoidable). Guidance, not data.
//
// RESEARCH VERDICT that governs this item: a stored per-card or per-rental-company dollar
// comparison cannot be maintained honestly, because card benefit terms and their country
// exclusions change on each issuer's own timeline, not this site's. So there is no lookup
// table here: no per-card row, no per-company row, no per-country row, only the stable,
// broad ranges the research found, in prose, plus the one action that actually matters
// (check YOUR OWN card for YOUR destination before declining anything at the counter).
//
// A CONSTANT, not a function, unlike carrierFallbackFor(c) and railAvoidableFor(c) above:
// this guidance genuinely does not vary by country, the counter upsell is the same pitch
// everywhere, so writing it as a function taking a country would imply a per-country
// variation that does not exist. Also unlike those two, it is not gated on the destination
// at all, only on the wizard's own "renting a car?" answer (see CalcWizard.astro / calc-
// wizard.js), so it is the same object on every country page.
//
// THE COVERAGE CLAIM IS LOCKED. Every sentence in `escape` and `detail` is the brief's own
// wording, unchanged: this is liability-sensitive copy, where a wrong "your card covers you"
// could leave a traveler responsible for damage or a crash. "may" and "confirm YOUR card
// for YOUR destination" must survive verbatim, never rephrased into a guarantee. Do not
// edit these two strings without MAIN's sign-off, even for style.
//
// Two non-breaking spaces (U+00A0) sit either side of "to" in the three real dollar ranges
// below ($15 to $40, twice, and 950 to 1,500), per the brief's own house-style instruction,
// so a range can never wrap onto two lines. This is the first place in this file that does,
// since every other stored range here is a short chip or a single sourced string rather than
// flowing prose long enough to wrap; flagged in the handoff since it is a new precedent.
export const RENTAL_AVOIDABLE = {
  key: 'rental',
  title: 'The rental counter insurance upsell',
  escape: 'Decline the counter CDW only after you have checked what you already have; you can often buy the same cover for less, or already own it.',
  detail: 'At the counter you will be pushed collision damage waiver (CDW/LDW) and \'excess reduction\' add-ons, often around $15\u00A0to\u00A0$40 a day, framed against a scary excess (the amount you owe if the car is damaged: roughly up to $2,500 in the US, about 950\u00A0to\u00A01,500 euros or pounds in Europe, more in Australia). Before you accept, three things are usually true. First, your credit card may already include rental CDW, but you must check your card\'s own current benefit guide: coverage differs by card, is often secondary, has duration limits, and excludes some countries (Italy, Ireland, Australia, Israel and Jamaica are common exclusions), so confirm YOUR card for YOUR destination rather than assuming. Second, if you are not covered, a standalone excess policy (bought from an independent insurer, not the counter) is usually far cheaper, often under $8 a day versus the counter\'s $15\u00A0to\u00A0$40. Third, personal accident and personal effects add-ons usually duplicate health and home insurance you already have. The one cover a card\'s CDW does NOT include is third-party liability, so if your rental does not include enough of that, it is the one worth genuinely considering.',
  // /driving-and-car-rental is a sitewide topic hub (not per-country, matching this item's
  // own scope), and it already carries the same warning in its own words ("No general
  // article can tell you where you stand, including this one" / "It never covers your
  // liability to others"), so this item and that page can never say two different things.
  href: '/driving-and-car-rental',
  hrefLabel: 'How rental car insurance really works',
  side: 'dodge',
  // NEVER priced. Guidance, not a computed or looked-up figure.
  worth: null,
};
