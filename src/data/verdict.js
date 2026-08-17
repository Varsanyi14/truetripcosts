// THE VERDICT CARD: the screenshot-sized country card at the top of every guide.
//
// WHAT THIS IS. A selector and formatter, not a source. It holds no facts of its own,
// in the same way latest-checks.js and usd-prose.js hold none. It reads three sources
// that already exist, decides which of their lines belong on a card, and puts them in
// a fixed order. Fix a line in money-rules.js, hero-facts.js or a country's spokes and
// the card changes on the next build. Nothing is ever re-typed here as a second copy
// of a fact.
//
// THE THREE SOURCES, in the order a card fills from them.
//   1. src/data/money-rules.js. The rich source. Its `rules[].h` headings are already
//      verdict-shaped one-liners ("Do not tip. Say something instead"), so a card row
//      is the heading VERBATIM. Nothing is rewritten, so nothing can drift.
//   2. src/data/hero-facts.js. The fallback, for a country with no rules pocket. The
//      `escape` field is a "do this" instruction, usually two or three clauses long.
//      A card row is one clause of it, selected by hand, again verbatim.
//   3. The country's own `spokes[].glance` pairs, in src/data/<slug>.js. The desk has
//      already written and checked these as terse key/value lines, so a card row is
//      one glance pair VERBATIM. This is what turns a one-row hero-fact card into a
//      real card, and it means the next spoke wave thickens the cards for free.
//      See SPOKE_ROWS for the selection rule and the anti-duplication rule.
//
// THE ANTI-FABRICATION RAIL, and this is the whole point of the file. A row's text is
// never composed here. It is either:
//   a heading read straight out of the pocket by its own text, or
//   a clause that MUST appear, character for character, inside that country's escape, or
//   a glance pair read straight out of a named spoke, key and value both verbatim.
// The match test runs on every build (see rowsFromEscape and rowsFromSpokes). A pointer
// that no longer matches its source is DROPPED, not shown and not repaired. So if
// somebody rewords an escape line or a glance value next year, the affected row quietly
// disappears and the card gets shorter. It never goes stale and it never invents.
//
// That is why the maps below hold pointers rather than prose: an index into rules[],
// or a substring that is checked against the source before it can render. Neither can
// outlive the fact it points at. scripts/check-verdict.mjs reports any that have.
//
// CLASSIFIED BY HAND. Which bucket a line belongs in is a judgment, so it is written
// down per country rather than guessed by a keyword match at runtime. A naive regex is
// exactly how an earlier build nearly told five countries to claim a VAT refund they
// cannot get: the pattern matched "there is NO VAT refund". Negation and context are
// not things a regex reads. Where a line did not clearly belong to a bucket it was
// left off the card rather than forced into the nearest one.
//
// ABSENCE IS NOT ZERO, applied here. A country with thin data gets a short card and an
// honest note, never a padded one. There is deliberately nowhere in this file to type a
// rule, a figure or a "carry this much" number. If a country needs a better card, the
// fix is a money-rules pocket, written in money-rules.js where the desk's own writing
// rules and checked date apply.

import { moneyRules } from './money-rules.js';
import { heroFacts } from './hero-facts.js';

// The label set. These are topic chips, not sentence openers: the row reads as
// "WITHDRAW / Draw francs from a bank machine", the way the site's `.lab` eyebrows
// already work. Order is fixed so all 59 cards read as one product rather than 59
// one-offs, whatever order the source happens to list its rules in.
export const LABEL_ORDER = ['Do', 'Carry', 'Withdraw', "Don't", 'Expect'];

// A rich card aims for 4 or 5 rows. Below this the card is genuinely short and says so.
export const MIN_FULL_ROWS = 3;

// The ceiling. Five rows is the shape the pocket cards already settled on and the one
// that still screenshots as a card; six is the most the harvest may add up to. Past
// that the thing stops reading as a verdict and starts reading as a list, which is what
// the guide below is for. The cap CUTS, in source and tier order, and never truncates a
// row: a line is shown whole or not at all.
export const MAX_ROWS = 6;

// A row is one line on a phone. Anything longer is a paragraph and belongs in the guide.
// This is a selection gate, never a truncation: a line is shown whole or not at all,
// because cutting a rule mid-clause is how a true rule turns into a false one.
export const MAX_ROW_CHARS = 110;

// ---------------------------------------------------------------------------
// POCKET_ROWS: for the countries that have a money-rules pocket.
// `match` is the heading to look for in that country's rules[] array, and the row shows
// that heading as money-rules.js currently writes it. It is a lookup key, not a copy:
// nothing here is displayed, and a key that no longer matches drops its row rather than
// rendering. Deliberately not an array index, which survives a reorder while silently
// pointing at a different rule. See rowsFromPocket.
// ---------------------------------------------------------------------------
export const POCKET_ROWS = {
  france: [
    { label: 'Do', match: 'Say euros, not dollars, every single time' },
    { label: 'Carry', match: 'Bring one card that has a chip and a PIN' },
    { label: 'Withdraw', match: 'The standalone kiosks are the dear way to get cash' },
    { label: 'Expect', match: 'Service is in the price already, by law' },
  ],
  'united-kingdom': [
    { label: 'Do', match: 'Pay in pounds, whatever the screen suggests' },
    { label: 'Carry', match: 'Scottish notes are sterling, but spend them up there' },
    { label: 'Withdraw', match: 'Some cash machines charge, most do not' },
    { label: "Don't", match: 'Do not buy an Oyster card' },
    { label: 'Expect', match: 'That 12.5 percent on the bill is the tip' },
  ],
  italy: [
    { label: 'Do', match: 'Choose euros, and learn the Italian for it' },
    { label: "Don't", match: 'Walk past the bright blue cash machines' },
    { label: 'Expect', match: 'Coperto is a table charge, not a gratuity' },
    { label: 'Expect', match: 'Your hotel will want the city tax separately' },
  ],
  mexico: [
    { label: 'Do', match: 'Read the bill before you add that tip' },
    { label: 'Carry', match: 'You will want pesos in your pocket every day' },
    { label: 'Withdraw', match: 'Take cash out inside a bank, never at the airport' },
    { label: 'Expect', match: 'Tipping is real here, and it wants to be cash' },
  ],
  'costa-rica': [
    { label: 'Do', match: 'Let the price decide the currency' },
    { label: 'Carry', match: 'Bring small US bills in good condition' },
    { label: "Don't", match: 'Refuse any screen offering to charge you in dollars' },
    { label: 'Expect', match: 'Sit down to eat and the tip is already there' },
  ],
  canada: [
    { label: 'Do', match: 'Choose Canadian dollars, never US dollars' },
    { label: 'Do', match: 'Tip like you would at home, on the total before tax' },
    { label: 'Withdraw', match: 'Draw cash at a bank, not from the box in the bar' },
    { label: 'Expect', match: 'The price on the shelf is never the price you pay' },
  ],
  japan: [
    { label: 'Do', match: 'Say yen every time a screen offers you dollars' },
    { label: 'Do', match: 'An IC card is the best thing you set up all trip' },
    { label: 'Carry', match: 'Cashless in the cities, cash at the old places' },
    { label: 'Withdraw', match: 'Most bank machines here will refuse your card' },
    { label: "Don't", match: 'Do not tip. Say something instead' },
  ],
  spain: [
    { label: 'Do', match: 'Choose euros, not dollars, every single time' },
    { label: 'Withdraw', match: 'The kiosk machines are the dear way to get cash' },
    { label: 'Expect', match: 'Tipping is light here, and it should be cash' },
    { label: 'Expect', match: 'No service charge, and no cover charge either' },
  ],
  portugal: [
    { label: 'Do', match: 'Choose euros, not dollars, at every screen' },
    { label: 'Withdraw', match: 'Use a Multibanco machine. Walk past the yellow ones' },
    { label: 'Expect', match: 'The bread you did not order is a charge' },
    { label: 'Expect', match: 'Tipping is light, and cash is the way to do it' },
  ],
  germany: [
    { label: 'Do', match: 'Choose euros, not dollars, at every screen' },
    { label: 'Do', match: 'Say the total. Do not leave it on the table' },
    { label: 'Carry', match: 'Carry cash. Germany is not as card-first as it looks' },
    { label: 'Expect', match: 'Trinkgeld is modest, and you round rather than calculate' },
  ],
  'dominican-republic': [
    { label: 'Do', match: 'Choose pesos, not dollars, on every card screen' },
    { label: 'Do', match: 'The E-Ticket is free, and you need it twice' },
    { label: 'Carry', match: 'Dollars are accepted, but your change will not be' },
    { label: 'Expect', match: 'The menu price is about a quarter off the truth' },
  ],
  jamaica: [
    { label: 'Do', match: 'On a card, choose Jamaican dollars' },
    { label: 'Do', match: 'Always ask which dollars they mean' },
    { label: 'Carry', match: 'Keep local cash for the parts worth having' },
    { label: 'Expect', match: 'Read the bill before you add a tip' },
  ],
  india: [
    { label: 'Do', match: 'Choose rupees, and ask for small notes' },
    { label: 'Do', match: 'Book the auto in an app and skip the whole argument' },
    { label: "Don't", match: 'Never buy gems or carpets to sell at home' },
    { label: 'Expect', match: 'Baksheesh means many small tips, not big ones' },
  ],
  netherlands: [
    { label: 'Do', match: 'Say euros when the screen offers you dollars' },
    { label: 'Do', match: 'Round up, do not work out a percentage' },
    { label: 'Carry', match: 'Carry a debit card, not only a credit card' },
    { label: 'Expect', match: 'Your room costs more than the rate you booked' },
  ],
  iceland: [
    { label: 'Carry', match: 'You can cross this country without a banknote' },
    { label: "Don't", match: 'Refuse every offer to charge you in dollars' },
    { label: 'Expect', match: 'It is krona, and euros will not spend here' },
    { label: 'Expect', match: 'Nobody is waiting for a tip' },
  ],
  indonesia: [
    { label: 'Do', match: 'Choose rupiah, never dollars, at the terminal' },
    { label: 'Carry', match: 'Most of what you will do runs on cash' },
    { label: 'Withdraw', match: 'Draw cash inside a bank or a mall, not off the street' },
    { label: 'Expect', match: 'Read the bill for the plus plus before you tip' },
  ],
  uae: [
    { label: 'Carry', match: 'Tap for everything, keep a little cash for the souk' },
    { label: "Don't", match: 'Never change money at the airport or your hotel' },
    { label: 'Expect', match: 'The dirham does not move against the dollar' },
    { label: 'Expect', match: 'The room rate is not the room bill' },
  ],
  oman: [
    { label: 'Do', match: 'Say rials when the screen offers dollars' },
    { label: 'Carry', match: 'Cards run the cities, cash runs everything else' },
    { label: 'Expect', match: 'That price has three decimals, so read it twice' },
    { label: 'Expect', match: 'Look for a service charge before you add anything' },
  ],
  qatar: [
    { label: 'Do', match: 'Say riyals, every screen, every time' },
    { label: 'Carry', match: 'Cards cover nearly everything, official cabs included' },
    { label: 'Expect', match: 'There is no VAT, so the tag is the price' },
    { label: 'Expect', match: 'A percentage on the bill is service, not tax' },
  ],
  bahrain: [
    { label: 'Do', match: 'Choose dinars at every terminal' },
    { label: 'Carry', match: 'Card for most of it, small notes for the souq' },
    { label: 'Expect', match: 'A small-looking number is not a small amount' },
    { label: 'Expect', match: 'The bill answers the tipping question more clearly here' },
  ],
  'saudi-arabia': [
    { label: 'Do', match: 'Say riyals when a screen offers dollars' },
    { label: 'Carry', match: 'Cards work almost everywhere, metro gates included' },
    { label: "Don't", match: 'The unlicensed street taxi is not worth the saving' },
    { label: 'Expect', match: 'Budget for the highest VAT in the Gulf' },
  ],
  kuwait: [
    { label: 'Do', match: 'Agree the fare before the door closes' },
    { label: 'Carry', match: 'Tip in coins, not notes' },
    { label: 'Expect', match: 'No VAT, so the shelf price is final' },
    { label: 'Expect', match: 'Three decimals, and the strongest currency unit anywhere' },
  ],
  greece: [
    { label: 'Do', match: 'Say euros when a screen offers dollars' },
    { label: 'Carry', match: 'Cities take cards, islands take notes' },
    { label: 'Withdraw', match: 'Draw your cash before the ferry, not after' },
    { label: 'Expect', match: 'Round up, or a little more for a meal worth it' },
  ],
  switzerland: [
    { label: 'Do', match: 'Say francs when a screen offers dollars' },
    { label: 'Carry', match: 'Cards do nearly all of it, so carry little' },
    { label: 'Withdraw', match: 'Draw francs from a bank machine' },
    { label: 'Expect', match: 'Service is in the price by law, so relax' },
  ],
  bahamas: [
    { label: 'Do', match: 'On a card screen, still pick Bahamian dollars' },
    { label: 'Carry', match: 'The straw market and the Fish Fry want cash' },
    { label: 'Expect', match: 'Your own dollars spend here, at par' },
    { label: 'Expect', match: 'Read the bill first, then tip like you would at home' },
  ],
  turkey: [
    { label: 'Do', match: 'Pay in lira, on every screen' },
    { label: 'Carry', match: 'The bazaar runs on cash, and cash bargains' },
    { label: "Don't", match: 'Do not trust a price you read months ago' },
    { label: 'Expect', match: 'Look for servis on the bill before adding to it' },
  ],
};

// ---------------------------------------------------------------------------
// ESCAPE_ROWS: for the countries with no money-rules pocket.
// `clause` MUST appear verbatim inside that country's hero-fact `escape`. It is a
// selection, not a copy: rowsFromEscape checks it against the live source on every
// build and drops any row that no longer matches.
//
// Clauses were chosen to stand alone. A clause carrying a dangling pronoun ("install
// BOTH", "top up IT") was left off rather than reworded, because the card travels as a
// screenshot with no surrounding page to resolve it.
// ---------------------------------------------------------------------------
export const ESCAPE_ROWS = {
  vietnam: [
    { label: "Don't", clause: 'ignore the fake-taxi touts at the Hanoi and Ho Chi Minh City airports' },
  ],
  thailand: [
    { label: 'Do', clause: 'take your card back straight away' },
    { label: 'Withdraw', clause: 'Take out a large sum at once from a bank ATM' },
  ],
  czechia: [
    { label: 'Do', clause: 'Take the receipt, and if the rate was a stitch-up, go straight back inside within three hours' },
  ],
  austria: [
    { label: 'Do', clause: 'Buy the vignette, then price the specific tunnels and mountain roads on your route separately' },
  ],
  egypt: [
    { label: 'Do', clause: 'treat the card as the backup for hotels and the largest bills' },
    { label: 'Carry', clause: 'break them into small notes immediately' },
    { label: 'Withdraw', clause: 'Pull pounds from a bank ATM' },
  ],
  colombia: [
    { label: 'Do', clause: 'Show your passport with the tourist stamp at check-in, and check the bill' },
  ],
  brazil: [
    { label: 'Do', clause: 'Sort the e-visa on the official VFS portal early' },
    { label: 'Carry', clause: 'bring one no-foreign-fee card for everything else' },
    { label: "Don't", clause: 'Pix runs the country but needs a Brazilian tax ID, so it is not for you' },
  ],
  argentina: [
    { label: 'Do', clause: 'Just pay by card' },
    { label: "Don't", clause: 'skip the cash-exchange back-alleys' },
  ],
  ireland: [
    { label: 'Do', clause: 'Pay on the eFlow site the same evening you drive it' },
  ],
  norway: [
    { label: 'Do', clause: 'Ask which tyres your car has' },
  ],
  sweden: [
    { label: 'Carry', clause: 'Bring a card' },
    { label: "Don't", clause: 'skip the exchange counter entirely' },
  ],
  denmark: [
    { label: 'Do', clause: 'Compare companies rather than assuming a fixed rate' },
    { label: 'Do', clause: 'in Copenhagen check the Metro first' },
  ],
  'south-korea': [
    { label: 'Do', clause: 'Set a four-digit PIN before you fly' },
    { label: 'Withdraw', clause: 'use a machine marked Global ATM or Global Service rather than a plain domestic one' },
  ],
  singapore: [
    { label: 'Do', clause: 'Learn the two symbols before you order' },
    { label: 'Expect', clause: 'Nett is the real price, ++ is not' },
  ],
  australia: [
    { label: 'Do', clause: 'Use the official app only' },
    { label: "Don't", clause: 'Anything charging you more on a website is a reseller' },
  ],
  'new-zealand': [
    { label: 'Do', clause: 'Use the official app rather than the website' },
    { label: "Don't", clause: 'do not plan any shopping around a refund that does not exist here' },
  ],
  morocco: [
    { label: 'Do', clause: 'pay in dirham every time' },
    { label: 'Do', clause: 'keep the exchange receipts, and convert what is left before you fly home' },
    { label: 'Withdraw', clause: 'Withdraw dirham from a bank ATM on arrival' },
  ],
  'south-africa': [
    { label: 'Carry', clause: 'Keep a pocket of small rand' },
  ],
  taiwan: [
    { label: 'Do', clause: 'book High Speed Rail separately' },
  ],
  'hong-kong': [
    { label: "Don't", clause: 'do not go looking for a refund desk that does not exist' },
    { label: 'Expect', clause: 'Read the folio at check-in for the 3%' },
  ],
  poland: [
    { label: 'Do', clause: 'Say the total you want to pay' },
    { label: 'Do', clause: 'save the thank-you until after your change is back in your hand' },
  ],
  hungary: [
    { label: 'Do', clause: 'Use whichever app you already have' },
    { label: 'Do', clause: 'at the airport take only the official Fotaxi stand' },
  ],
  croatia: [
    { label: 'Do', clause: 'Ask for the weight and the total before you order it' },
  ],
  cambodia: [
    { label: 'Carry', clause: 'Ask for small notes' },
    { label: 'Expect', clause: 'expect change in riel' },
  ],
  laos: [
    { label: 'Do', clause: 'Plan the ticket before the trip, not the train' },
    { label: 'Do', clause: 'use an agent or buy in person the moment seats release' },
  ],
  ecuador: [
    { label: 'Carry', clause: 'If the Galapagos are on the plan, carry the $220 a person in cash from the mainland' },
  ],
  'el-salvador': [
    { label: 'Do', clause: 'Spend dollars exactly as you would at home' },
    { label: 'Expect', clause: 'There is nothing to exchange and no crypto to set up' },
  ],
  georgia: [
    { label: 'Carry', clause: 'Carry the certificate as a PDF or a printout in English' },
    { label: 'Expect', clause: 'Most standard US policies already qualify' },
  ],
  china: [
    { label: 'Do', clause: 'Set up both apps before you fly' },
    { label: 'Expect', clause: 'Verification takes time' },
  ],
  'sri-lanka': [
    { label: 'Do', clause: 'Apply on the official government portal before you fly' },
    { label: 'Expect', clause: 'confirm the fee shows as zero for your passport' },
  ],
  namibia: [
    { label: 'Do', clause: 'Apply on the official e-visa portal before you fly' },
    { label: 'Carry', clause: 'bring a printed approval if you applied online' },
  ],
  aruba: [
    { label: 'Do', clause: 'Ask for an all-in nightly figure including levies, service charge and resort fee before you book' },
  ],
  philippines: [
    { label: 'Do', clause: 'Shop at accredited stores' },
    { label: 'Do', clause: 'keep the receipts and the goods unused, and claim on departure' },
  ],
};

// ---------------------------------------------------------------------------
// SPOKE_ROWS: the third source, and the reason a thin card can now be a real one.
//
// Every country file carries a `spokes` array, and each spoke carries a `glance`
// list of terse key/value pairs that the desk already wrote and already checked.
// Those lines are verdict-shaped by construction, so the card can borrow them the
// same way it borrows a pocket heading: as a POINTER, never as a copy.
//
// THE ANCHOR IS THE SOURCE STRING, in three parts. `spoke` is the spoke's slug,
// `k` and `v` are the glance pair exactly as that spoke writes them. All three
// must resolve to exactly one live glance entry or the row is dropped and the
// audit reports it. Reword a glance line next year and the row disappears rather
// than relabelling itself around new words, which is the same failure mode the
// pocket rows are anchored against.
//
// WHAT GETS DISPLAYED. By default the row reads `k: v`, both halves verbatim,
// because most glance values are written to lean on their key ("Not required, but
// appreciated" says nothing on its own). Where the key only repeats the row's own
// label chip, `show: 'v'` renders the value alone. Nothing is case-fixed: a value
// like "evisa.gov.vn only" has to stay as the desk typed it.
//
// THE SELECTION RULE, which is the whole judgment here. A card is screenshot
// sized, so these are not every line a spoke has. `tier` records why a line earned
// its slot, and rows are taken in that order when the cap bites:
//   1  corrects a wrong belief   ("Uber and Lyft: Neither operates here")
//   2  surprising, least known   ("Cash for: Fuel and remote areas")
//   3  important but confirming  ("Taxis: Metered, honest") - almost never used
// The card's job is to disabuse, not to summarise. A line that confirms what a
// traveller already assumes is the first thing cut, and a spoke with no line worth
// showing contributes nothing. There is no padding to the cap anywhere in here.
//
// `theme` is a dedupe key. Two spokes often make the same point in different words
// (Thailand's taxis spoke and its scams spoke both say to insist on the meter), and
// only the first row of a theme is shown. It does NOT dedupe against pocket rows,
// which cannot be matched by string: that judgment was made by hand at triage time,
// which is why no row below repeats a point its country's pocket already makes.
//
// DELIBERATELY NOT HARVESTED, recorded so the next person does not read a gap as an
// oversight. check-verdict section 7 lists every untriaged spoke as a note, and these
// three will show up there forever. They are decisions, not to-dos.
//   dominican-republic/hotel-taxes-and-fees  The pocket already says "The menu price is
//     about a quarter off the truth", which is the same 28% arithmetic the glance states.
//     Pocket wins on a shared theme, and the remaining glance lines are thin. Nothing.
//   bahrain/hotel-taxes-and-fees   A strong fact ("About 25%, plus a flat fee"), held on
//     card SHAPE rather than content: that card already carries three Expect rows, and a
//     fourth in six turns a card into a list of warnings. Every hotel-tax line is an
//     Expect by nature, so the harvest cannot balance itself, and the cap has to.
//   oman/hotel-taxes-and-fees      Same reason, and the weaker fact of the two: 14% is
//     the smallest stack in the wave and the card already has a service-charge Expect.
// If either Bahrain or Oman later gains a Do or Carry row from another source, the tax
// row becomes affordable and is worth revisiting.
// ---------------------------------------------------------------------------
export const SPOKE_ROWS = {
  // Countries with a money-rules pocket. The pocket leads and these fill at most
  // one remaining slot, with a theme the pocket does not already cover.
  france: [
    { label: 'Expect', spoke: 'taxis-and-apps', k: 'CDG airport', v: 'Flat 56 euros to the Right Bank', tier: 1, theme: 'taxi-airport' },
  ],
  italy: [
    { label: 'Expect', spoke: 'money-scams', k: 'Rome from FCO', v: '55 euros fixed, all in', tier: 1, theme: 'taxi-airport' },
  ],
  spain: [
    { label: 'Expect', spoke: 'taxis-and-apps', k: 'Madrid airport', v: 'Fixed 33 euros inside the M-30', tier: 1, theme: 'taxi-airport' },
  ],
  greece: [
    { label: 'Expect', spoke: 'money-scams', k: 'Athens from ATH', v: '40 euros day, 55 euros night, fixed', tier: 1, theme: 'taxi-airport' },
  ],
  portugal: [
    { label: 'Expect', spoke: 'tram-28-contactless', k: 'Tram 28', v: 'Contactless mixed, do not rely on it', tier: 1, theme: 'transit' },
  ],
  germany: [
    { label: 'Expect', spoke: 'driving-and-tolls', k: 'The real trap', v: 'The city Umweltzone sticker', tier: 1, theme: 'driving' },
  ],
  'united-kingdom': [
    { label: 'Expect', spoke: 'vat-refund', k: 'VAT refund', v: 'None in Great Britain', tier: 1, theme: 'vat' },
  ],
  japan: [
    { label: 'Do', spoke: 'money-scams', k: 'Sitting down', v: 'Ask about the seat charge', tier: 1, theme: 'seat-charge' },
  ],
  mexico: [
    { label: 'Expect', spoke: 'fmm-and-visitax', k: 'Visitax', v: 'Quintana Roo only, ~283 pesos', tier: 1, theme: 'entry-fee' },
    // Different theme from the Visitax row above: that is a one-time entry fee, this is tax on
    // the room. 'About a fifth' is vaguer than the other percentage rows on purpose, because
    // the state lodging tax genuinely runs 2 to 5% and a single national figure would be
    // fabricated precision. Hedged at source, so hedged here.
    { label: 'Expect', spoke: 'hotel-taxes-and-fees', k: 'On top of the room', v: 'About a fifth', tier: 1, theme: 'hotel-bill' },
  ],
  canada: [
    { label: 'Do', spoke: 'staying-connected', k: 'Check first', v: 'Your US plan, Canada is often bundled', tier: 1, theme: 'connectivity' },
  ],
  'costa-rica': [
    { label: 'Expect', spoke: 'money-scams', k: 'Car insurance', v: 'Required, and rarely quoted', tier: 1, theme: 'car-insurance' },
  ],
  'dominican-republic': [
    { label: 'Do', spoke: 'taxis-and-apps', k: 'Taxis', v: 'No meters, agree the fare first', tier: 1, theme: 'taxi' },
  ],
  jamaica: [
    { label: 'Do', spoke: 'taxis-and-apps', k: 'No Uber', v: 'Use a licensed red-plate taxi', tier: 1, theme: 'taxi' },
    // The only forward-dated row on any card, and it changes a 2027 booking decision.
    // Deliberate consequence: when the rate actually moves in April 2027 the glance gets
    // reworded, this anchor stops resolving, and the row DROPS itself while check-verdict
    // reports it. The card gets shorter on a known date rather than carrying a stale one.
    { label: 'Expect', spoke: 'hotel-taxes-and-fees', k: 'Tourism GCT', v: '10% now, 15% from Apr 2027', tier: 1, theme: 'hotel-bill' },
  ],
  india: [
    { label: 'Do', spoke: 'e-visa', k: 'Where', v: 'indianvisaonline.gov.in only', tier: 1, theme: 'visa-site' },
  ],
  netherlands: [
    { label: 'Do', spoke: 'taxis-and-apps', k: 'From Schiphol', v: 'The train is fast and cheap', tier: 2, theme: 'taxi-airport' },
  ],
  iceland: [
    { label: 'Expect', spoke: 'renting-a-car', k: 'The catch', v: 'Super CDW still excludes the likely damage', tier: 1, theme: 'car-insurance' },
  ],
  indonesia: [
    { label: 'Expect', spoke: 'visa', k: 'Visa', v: 'Required, visa on arrival', tier: 1, theme: 'visa' },
  ],
  uae: [
    { label: 'Expect', spoke: 'visa', k: 'Visa', v: 'Free on arrival, nothing to apply for', tier: 1, theme: 'visa' },
    // Not the size of the bill, which the pocket already makes as 'The room rate is not the
    // room bill'. This is the refund direction, and it is the negation trap in its purest
    // form: the UAE runs a famous visitor refund through Planet, so a traveller reasonably
    // assumes hotel VAT is reclaimable. It is not. Verbatim, so the 'not' survives.
    { label: 'Expect', spoke: 'hotel-taxes-and-fees', k: 'VAT', v: '5%, and not reclaimable on hotels', tier: 1, theme: 'vat' },
  ],
  oman: [
    { label: 'Expect', spoke: 'taxis-and-apps', k: 'Uber', v: 'Does not operate in Oman', tier: 1, theme: 'taxi' },
  ],
  qatar: [
    { label: 'Expect', spoke: 'visa', k: 'Visa', v: 'Free on arrival, no application', tier: 1, theme: 'visa' },
  ],
  bahrain: [
    { label: 'Expect', spoke: 'visa', k: 'Visa', v: 'Required, and not free', tier: 1, theme: 'visa' },
  ],
  'saudi-arabia': [
    { label: 'Expect', spoke: 'visa', k: 'Visa', v: 'Required, and it costs', tier: 1, theme: 'visa' },
    // The pocket already says 'Budget for the highest VAT in the Gulf', so the 15% glance line
    // is out as a duplicate and the roughly 20% total is too close to call. This one is
    // unambiguously additive: nothing else on the card mentions a second levy, and the
    // star-rating split is the least-known thing about a Saudi room bill. Tier 2 rather than
    // 1, because it is surprising rather than belief-correcting.
    { label: 'Expect', spoke: 'hotel-taxes-and-fees', k: 'Municipality levy', v: '5%, or 2.5% lower down', tier: 2, theme: 'hotel-bill' },
  ],
  kuwait: [
    { label: 'Expect', spoke: 'taxis-and-apps', k: 'Uber', v: 'Contested, do not rely on it', tier: 1, theme: 'taxi' },
  ],
  switzerland: [
    { label: 'Expect', spoke: 'cash-or-card', k: 'Euros', v: 'Sometimes taken, poor change', tier: 1, theme: 'currency' },
  ],
  bahamas: [
    { label: 'Expect', spoke: 'taxis-and-apps', k: 'Uber and Lyft', v: 'Neither operates here', tier: 1, theme: 'taxi' },
    // The strongest row the hotel-taxes wave produced. Nothing else on this card says the room
    // carries tax at all, and 21% is both specific and geographically qualified. Note what is
    // NOT taken: 'Resort fee: Set per property, often steep' carries no figure, so as a row it
    // says almost nothing. The hedging that makes it honest in the spoke is what disqualifies
    // it here, which is the rail working rather than a gap.
    { label: 'Expect', spoke: 'hotel-taxes-and-fees', k: 'On top of the room', v: 'About 21% around Nassau', tier: 1, theme: 'hotel-bill' },
  ],
  turkey: [
    { label: 'Expect', spoke: 'visa', k: 'e-Visa', v: 'Not needed, US citizens are exempt', tier: 1, theme: 'visa' },
  ],

  // Countries with no pocket. These are the thin cards the harvest is for: the
  // hero-fact clause leads and the spokes carry the rest of the card.
  vietnam: [
    { label: 'Do', spoke: 'e-visa', k: 'Where', v: 'evisa.gov.vn only', tier: 1, theme: 'visa-site' },
    { label: 'Expect', spoke: 'tipping', k: 'Tipping', v: 'Not required, but appreciated', tier: 1, theme: 'tipping' },
    { label: 'Expect', spoke: 'money-scams', k: 'The notes', v: 'Big dong notes look alike', tier: 1, theme: 'notes' },
    { label: 'Carry', spoke: 'cash-or-card', k: 'Cash for', v: 'Street food, markets, taxis', tier: 2, theme: 'cash-need' },
  ],
  thailand: [
    { label: 'Do', spoke: 'tdac', k: 'TDAC', v: 'Free, file online within 72 hours', tier: 1, theme: 'entry-form' },
    { label: "Don't", spoke: 'taxis-and-apps', k: 'Meter refusal', v: 'Quotes 2 to 4x, walk away', tier: 1, theme: 'taxi-meter' },
    { label: 'Expect', spoke: 'tipping', k: 'Check the bill', v: 'Some add 10% service', tier: 1, theme: 'tipping' },
    { label: 'Carry', spoke: 'cash-or-card', k: 'Cash for', v: 'Street food, markets, taxis, temples', tier: 2, theme: 'cash-need' },
  ],
  czechia: [
    { label: 'Expect', spoke: 'cash-or-card', k: 'Currency', v: 'Koruna (CZK), not euros', tier: 1, theme: 'currency' },
    { label: 'Withdraw', spoke: 'money-scams', k: 'At the ATM', v: 'Choose koruna, skip Euronet', tier: 1, theme: 'atm' },
    { label: 'Do', spoke: 'money-scams', k: 'Taxis', v: 'Book an app, never hail', tier: 1, theme: 'taxi' },
    { label: 'Expect', spoke: 'tipping', k: 'Tipping', v: 'About 10%, customary', tier: 2, theme: 'tipping' },
  ],
  austria: [
    { label: 'Do', spoke: 'cash-or-card', k: 'On a card', v: 'Choose euros, not dollars', tier: 1, theme: 'dcc' },
    { label: 'Do', spoke: 'tipping', k: 'The habit', v: 'Tell the server, do not leave it', tier: 1, theme: 'tipping' },
    { label: 'Carry', spoke: 'cash-or-card', k: 'Cards', v: 'Fine in cities, cash for small spots', tier: 2, theme: 'cash-need' },
    { label: 'Expect', spoke: 'taxis-and-apps', k: 'From Vienna airport', v: 'The S-Bahn or the CAT', tier: 2, theme: 'taxi-airport' },
  ],
  egypt: [
    { label: 'Do', spoke: 'cash-or-card', k: 'On a card', v: 'Choose pounds, not dollars', tier: 1, theme: 'dcc' },
    { label: 'Expect', spoke: 'tipping', k: 'Tipping (baksheesh)', v: 'Constant and expected', tier: 1, theme: 'tipping' },
  ],
  colombia: [
    { label: 'Do', spoke: 'taxis-and-apps', k: 'The one rule', v: 'Never hail on the street', tier: 1, theme: 'taxi' },
    { label: 'Do', spoke: 'check-mig', k: 'Check-Mig', v: 'Required, free, before every flight', tier: 1, theme: 'entry-form' },
    { label: 'Expect', spoke: 'tipping', k: 'Tipping', v: 'A 10% voluntary tip', tier: 2, theme: 'tipping' },
    { label: 'Withdraw', spoke: 'cash-or-card', k: 'ATMs', v: 'Use ones inside bank branches', tier: 2, theme: 'atm' },
  ],
  brazil: [
    { label: 'Do', spoke: 'cash-or-card', k: 'On a card', v: 'Choose reais (mind the IOF)', tier: 1, theme: 'dcc' },
    { label: 'Expect', spoke: 'tipping', k: 'Tipping', v: 'A 10% service charge, usually added', tier: 1, theme: 'tipping' },
  ],
  argentina: [
    { label: 'Expect', spoke: 'tipping', k: 'Cubierto', v: 'A cover charge, not a tip', tier: 1, theme: 'cover-charge' },
    { label: 'Do', spoke: 'taxis-and-ride-hailing', k: 'Safer bet', v: 'A radio taxi or an app', tier: 2, theme: 'taxi' },
    { label: 'Carry', spoke: 'cash-or-card', k: 'Cash for', v: 'Taxis, kiosks, markets, tips', tier: 2, theme: 'cash-need' },
  ],
  ireland: [
    { label: 'Expect', spoke: 'renting-a-car', k: 'The problem', v: 'Card cover often excludes Ireland', tier: 1, theme: 'car-insurance' },
    { label: 'Expect', spoke: 'cash-or-card', k: 'The border', v: 'Northern Ireland uses pounds', tier: 1, theme: 'currency' },
    { label: 'Expect', spoke: 'tipping', k: 'Pubs', v: 'No tip at the bar', tier: 1, theme: 'tipping' },
    { label: 'Do', spoke: 'cash-or-card', k: 'On a card', v: 'Choose euros, not dollars', tier: 1, theme: 'dcc' },
  ],
  norway: [
    { label: 'Carry', spoke: 'cash-or-card', k: 'Cash', v: 'Rarely needed, often refused', tier: 1, theme: 'cash-need' },
    { label: 'Expect', spoke: 'tipping', k: 'Tipping', v: 'Not really expected', tier: 1, theme: 'tipping' },
    { label: 'Expect', spoke: 'taxis-and-apps', k: 'Taxis', v: 'Very expensive, fares vary by firm', tier: 1, theme: 'taxi' },
  ],
  sweden: [
    { label: 'Expect', spoke: 'taxis-and-apps', k: 'Taxis', v: 'Deregulated, fares vary a lot', tier: 1, theme: 'taxi' },
    { label: 'Expect', spoke: 'tipping', k: 'Tipping', v: 'Not really expected', tier: 1, theme: 'tipping' },
    { label: 'Do', spoke: 'cash-or-card', k: 'On a card', v: 'Choose krona, not dollars', tier: 1, theme: 'dcc' },
  ],
  denmark: [
    { label: 'Expect', spoke: 'tipping', k: 'Tipping', v: 'Not really expected', tier: 1, theme: 'tipping' },
    { label: 'Do', spoke: 'cash-or-card', k: 'On a card', v: 'Choose krone, not dollars', tier: 1, theme: 'dcc' },
    { label: 'Carry', spoke: 'cash-or-card', k: 'Cash', v: 'Rarely needed, some places refuse it', tier: 2, theme: 'cash-need' },
  ],
  'south-korea': [
    { label: 'Do', spoke: 'k-eta', k: 'You still need', v: 'The free e-Arrival Card', tier: 1, theme: 'entry-form' },
    { label: 'Expect', spoke: 'tipping', k: 'Tipping', v: 'Not expected', tier: 1, theme: 'tipping' },
    { label: 'Do', spoke: 'cash-or-card', k: 'Transit', v: 'A T-money card', tier: 2, theme: 'transit' },
  ],
  singapore: [
    { label: 'Expect', spoke: 'tipping', k: 'Tipping', v: 'Not customary', tier: 1, theme: 'tipping' },
    { label: 'Carry', spoke: 'cash-or-card', k: 'Cash for', v: 'Hawker stalls and small vendors', tier: 2, theme: 'cash-need' },
    { label: 'Do', spoke: 'taxis-and-apps', k: 'From Changi', v: 'The MRT is cheap and fast', tier: 2, theme: 'taxi-airport' },
  ],
  australia: [
    { label: 'Expect', spoke: 'driving-and-tolls', k: 'Tolls', v: 'All electronic, no cash anywhere', tier: 1, theme: 'tolls' },
    { label: 'Expect', spoke: 'tipping', k: 'Tipping', v: 'Not expected, not the culture', tier: 1, theme: 'tipping' },
    { label: 'Do', spoke: 'cash-or-card', k: 'On a card', v: 'Choose Australian dollars', tier: 1, theme: 'dcc' },
  ],
  'new-zealand': [
    { label: 'Expect', spoke: 'cash-or-card', k: 'Local quirk', v: 'Card surcharges, about 1.5 to 2%', tier: 1, theme: 'surcharge' },
    { label: 'Expect', spoke: 'tipping', k: 'Tipping', v: 'Not expected, not the culture', tier: 1, theme: 'tipping' },
    { label: 'Carry', spoke: 'cash-or-card', k: 'Cash for', v: 'A little, NZ$100 to NZ$200 a trip', tier: 2, theme: 'cash-need' },
  ],
  morocco: [
    { label: 'Expect', spoke: 'cash-or-card', k: 'Note', v: 'A closed currency, get it on arrival', show: 'v', tier: 1, theme: 'currency' },
    { label: 'Expect', spoke: 'taxis-and-apps', k: 'Petit taxi', v: 'Has a meter, often refused', tier: 1, theme: 'taxi-meter' },
  ],
  'south-africa': [
    { label: 'Withdraw', spoke: 'money-scams', k: 'ATM security guards', v: 'Not allowed to help you', tier: 1, theme: 'atm' },
    { label: 'Expect', spoke: 'tipping', k: 'Tipping', v: '10 to 15%, expected', tier: 1, theme: 'tipping' },
    { label: 'Do', spoke: 'taxis-and-apps', k: 'Airport pickup', v: 'A designated e-hailing bay', tier: 2, theme: 'taxi-airport' },
  ],
  taiwan: [
    { label: 'Carry', spoke: 'cash-or-card', k: 'Carry', v: 'NT dollars, it is cash-reliant', show: 'v', tier: 1, theme: 'cash-need' },
    { label: 'Expect', spoke: 'tipping', k: 'Tipping', v: 'Not customary', tier: 1, theme: 'tipping' },
    { label: 'Do', spoke: 'cash-or-card', k: 'Transit', v: 'Get an EasyCard', tier: 2, theme: 'transit' },
  ],
  'hong-kong': [
    { label: 'Do', spoke: 'cash-or-card', k: 'On a card', v: 'Choose HKD, not US dollars', tier: 1, theme: 'dcc' },
    { label: 'Expect', spoke: 'tipping', k: 'Restaurants', v: 'A 10% service charge is common', tier: 1, theme: 'tipping' },
    { label: 'Do', spoke: 'cash-or-card', k: 'The key', v: 'Get an Octopus card', show: 'v', tier: 2, theme: 'transit' },
  ],
  poland: [
    { label: 'Expect', spoke: 'cash-or-card', k: 'Currency', v: 'Polish zloty (PLN), not euro', tier: 1, theme: 'currency' },
    { label: 'Do', spoke: 'taxis-and-apps', k: 'Why apps', v: 'Cheap, and no meter games', tier: 1, theme: 'taxi' },
    { label: 'Expect', spoke: 'money-scams', k: 'Your card', v: 'Nobody calls to verify it', tier: 1, theme: 'card-call' },
  ],
  hungary: [
    { label: 'Expect', spoke: 'cash-or-card', k: 'Currency', v: 'Hungarian forint (HUF), not euro', tier: 1, theme: 'currency' },
    { label: 'Expect', spoke: 'tipping', k: 'Tipping', v: '10 to 15%, customary', tier: 1, theme: 'tipping' },
    { label: 'Carry', spoke: 'cash-or-card', k: 'Cards', v: 'Fine in Budapest, carry some forint', tier: 2, theme: 'cash-need' },
  ],
  croatia: [
    { label: 'Expect', spoke: 'cash-or-card', k: 'Currency', v: 'Euro (EUR), since 2023', tier: 1, theme: 'currency' },
    { label: 'Expect', spoke: 'driving-and-tolls', k: 'Vignette', v: 'None, Croatia charges by distance', tier: 1, theme: 'tolls' },
    { label: 'Do', spoke: 'taxis-and-apps', k: 'Apps', v: 'Uber, Bolt (often cheapest)', tier: 2, theme: 'taxi' },
    { label: 'Expect', spoke: 'tipping', k: 'Tipping', v: 'Modest, appreciated', tier: 2, theme: 'tipping' },
  ],
  cambodia: [
    { label: 'Expect', spoke: 'cash-or-card', k: 'Everyday money', v: 'US dollars', tier: 1, theme: 'currency' },
    { label: 'Do', spoke: 'taxis-and-ride-hailing', k: 'Fares', v: 'App price or meter, not haggling', tier: 1, theme: 'taxi' },
    { label: 'Do', spoke: 'money-scams', k: 'Angkor tickets', v: 'One official seller only', tier: 1, theme: 'tickets' },
  ],
  laos: [
    { label: 'Withdraw', spoke: 'cash-or-card', k: 'ATMs', v: 'Low limits, a fee each time', tier: 1, theme: 'atm' },
    { label: 'Do', spoke: 'taxis-and-ride-hailing', k: 'Fares', v: 'Agree before you get in', tier: 1, theme: 'taxi' },
    { label: 'Carry', spoke: 'cash-or-card', k: 'Carry', v: 'Kip, in small notes', show: 'v', tier: 2, theme: 'cash-need' },
  ],
  ecuador: [
    { label: 'Expect', spoke: 'cash-or-card', k: 'Currency', v: 'US dollar', tier: 1, theme: 'currency' },
    { label: 'Expect', spoke: 'tipping', k: 'Tipping', v: 'A 10% service, often added', tier: 1, theme: 'tipping' },
    { label: 'Do', spoke: 'money-scams', k: 'Taxis', v: 'Order it, never hail it', tier: 1, theme: 'taxi' },
    { label: 'Carry', spoke: 'cash-or-card', k: 'Cash for', v: 'Taxis, markets, small towns', tier: 2, theme: 'cash-need' },
  ],
  'el-salvador': [
    { label: 'Expect', spoke: 'tipping', k: 'The real risk', v: 'Tipping twice, not too little', tier: 1, theme: 'tipping' },
    { label: 'Withdraw', spoke: 'cash-or-card', k: 'ATM fee', v: 'About $3 to $6, flat', tier: 1, theme: 'atm' },
    { label: 'Carry', spoke: 'cash-or-card', k: 'What matters', v: 'Small bills, ones to tens', tier: 2, theme: 'cash-need' },
  ],
  georgia: [
    { label: 'Do', spoke: 'taxis-and-apps', k: 'Street taxis', v: 'Agree the fare first', tier: 1, theme: 'taxi' },
    { label: 'Carry', spoke: 'cash-or-card', k: 'Cash for', v: 'Marshrutkas, markets', tier: 2, theme: 'cash-need' },
    { label: 'Expect', spoke: 'tipping', k: 'Tipping', v: 'Light, emerging', tier: 2, theme: 'tipping' },
  ],
  china: [
    { label: 'Expect', spoke: 'staying-connected', k: 'Firewall blocks', v: 'Google, Maps, WhatsApp, Instagram', tier: 1, theme: 'connectivity' },
    { label: 'Do', spoke: 'visa-and-transit', k: 'Visa', v: 'Tourist (L) visa, in advance', show: 'v', tier: 1, theme: 'visa' },
    { label: 'Carry', spoke: 'how-to-pay-in-china', k: 'Backup', v: 'Some cash and a physical card', tier: 2, theme: 'cash-need' },
  ],
  'sri-lanka': [
    { label: 'Expect', spoke: 'tipping', k: 'Restaurants', v: '10% often already added, check', tier: 1, theme: 'tipping' },
    { label: 'Do', spoke: 'taxis-and-apps', k: 'Best apps', v: 'PickMe (local) and Uber', tier: 2, theme: 'taxi' },
    { label: 'Carry', spoke: 'cash-or-card', k: 'Cash for', v: 'Tuk-tuks, street food, temples', tier: 2, theme: 'cash-need' },
  ],
  namibia: [
    { label: 'Expect', spoke: 'cash-or-card', k: 'Also spend', v: 'SA rand 1:1', tier: 1, theme: 'currency' },
    { label: 'Do', spoke: 'taxis-and-apps', k: 'Ride apps', v: 'LEFA, Yango (no Uber)', tier: 1, theme: 'taxi' },
    { label: 'Carry', spoke: 'cash-or-card', k: 'Cash for', v: 'Fuel and remote areas', tier: 1, theme: 'cash-need' },
  ],
  aruba: [
    { label: 'Expect', spoke: 'hotel-taxes-and-fees', k: 'Resort fee', v: 'Commonly $30 to $90 a night', tier: 1, theme: 'hotel-fees' },
    { label: 'Expect', spoke: 'tipping', k: 'Restaurants', v: 'Check for a 10 to 15% service charge', tier: 1, theme: 'tipping' },
    { label: 'Do', spoke: 'cash-or-card', k: 'On a card', v: 'Choose florin, not dollars', tier: 1, theme: 'dcc' },
    // The thinnest card in the set at four rows, and its two free slots are better spent
    // off the ED card spoke than on a third hotel-bill row: the fee is a genuine surprise
    // (once per CALENDAR YEAR, not per trip) and the portal row is an anti-scam fact, since
    // third-party ED card sites resell the free form at a markup.
    { label: 'Expect', spoke: 'visa-and-ed-card', k: 'The fee', v: '$20, once per calendar year', tier: 1, theme: 'entry-fee' },
    { label: 'Do', spoke: 'visa-and-ed-card', k: 'Where', v: 'edcardaruba.aw, nowhere else', tier: 1, theme: 'official-site' },
  ],
  philippines: [
    { label: 'Expect', spoke: 'tipping', k: 'Restaurants', v: 'Check for a 10% service charge', tier: 1, theme: 'tipping' },
    { label: 'Withdraw', spoke: 'cash-or-card', k: 'ATMs', v: 'Low limits, about 250 peso fee', tier: 1, theme: 'atm' },
    { label: 'Do', spoke: 'visa-and-etravel', k: 'eTravel', v: 'Free and mandatory', tier: 1, theme: 'entry-form' },
  ],
};

// Month abbreviations as the guides write them ("Jul 2026"), spelled out for the pill so
// a hero-fact card and a pocket card ("August 2026") do not read as two different
// products. Expanding an abbreviation changes no fact. Anything unrecognised is passed
// through untouched rather than guessed at.
const MONTHS = {
  Jan: 'January', Feb: 'February', Mar: 'March', Apr: 'April', May: 'May', Jun: 'June',
  Jul: 'July', Aug: 'August', Sep: 'September', Sept: 'September', Oct: 'October',
  Nov: 'November', Dec: 'December',
};

function longMonth(s) {
  if (!s) return '';
  const parts = String(s).trim().split(/\s+/);
  if (parts.length !== 2) return String(s).trim();
  const full = MONTHS[parts[0]];
  return full ? full + ' ' + parts[1] : String(s).trim();
}

// A clause lifted from mid-sentence starts lowercase. Raising the first letter is a
// typographic fix, not an edit: it changes no word and no meaning. The substring test
// always runs against the raw clause, before this touches it.
function sentenceCase(s) {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function sortRows(rows) {
  return rows
    .map((r, n) => ({ r, n }))
    .sort((a, b) => {
      const d = LABEL_ORDER.indexOf(a.r.label) - LABEL_ORDER.indexOf(b.r.label);
      return d !== 0 ? d : a.n - b.n;
    })
    .map(x => x.r);
}

// Rows from a money-rules pocket. The row is looked up BY ITS HEADING, not by its
// position in rules[], and the text rendered is the heading read back out of the
// source. `match` is the lookup key, never the thing displayed.
//
// Position was the obvious way to do this and it is wrong. Deleting one rule from a
// pocket shifts every index after it, so an index pointer keeps resolving and quietly
// starts describing a different rule: a test run of this file with Japan's "Do not tip"
// removed relabelled "Say yen every time a screen offers you dollars" as a DON'T. The
// pointer had not broken, so nothing complained. That is a fabricated instruction with a
// clean build behind it, which is the worst failure this card could have.
//
// Anchoring on the heading fixes both directions. Reorder a pocket and the row follows
// its rule. Reword a heading and the row is dropped and reported, because a rewording
// may have changed what the rule says and the bucket it was hand-classified into can no
// longer be trusted. Headings are unique inside a pocket, so a match is unambiguous.
function rowsFromPocket(slug, pocket) {
  const plan = POCKET_ROWS[slug];
  if (!plan || !pocket || !Array.isArray(pocket.rules)) return [];
  const out = [];
  for (const step of plan) {
    const hits = pocket.rules.filter(r => r && typeof r.h === 'string' && r.h.trim() === step.match);
    if (hits.length !== 1) continue;
    const text = hits[0].h.trim();
    if (text.length > MAX_ROW_CHARS) continue;
    out.push({ label: step.label, text, source: 'money-rules' });
  }
  return out;
}

// Rows from a hero fact's escape line. THE SUBSTRING TEST LIVES HERE. A clause that is
// not found character for character in the live escape is dropped: the source has been
// reworded and this pointer no longer describes it. Dropping is the correct outcome. The
// note row then covers the gap, so the card gets shorter and stays true.
function rowsFromEscape(slug, fact) {
  const plan = ESCAPE_ROWS[slug];
  const escape = fact && typeof fact.escape === 'string' ? fact.escape : '';
  if (!plan || !escape.trim()) return [];
  const out = [];
  for (const step of plan) {
    if (!step.clause || !escape.includes(step.clause)) continue;
    const text = sentenceCase(step.clause.trim());
    if (text.length > MAX_ROW_CHARS) continue;
    out.push({ label: step.label, text, source: 'hero-facts' });
  }
  return out;
}

// Rows from a country's spokes. THE THREE-PART MATCH TEST LIVES HERE. The spoke is
// found by its slug, then the glance pair by its key AND its value, and all three have
// to resolve to exactly one live line or the row is dropped. Matching on the value as
// well as the key is what stops a relabel: if somebody rewrites "Not required, but
// appreciated" into something firmer, the key still exists and a key-only pointer would
// happily render the new wording under the bucket the old wording was classified into.
// That is the pocket-index failure again in a different costume, so the value is part
// of the anchor and a reworded line drops out and shows up in the audit.
//
// Sorted by tier, so when the cap bites it cuts the confirming lines before the ones
// that overturn a costly assumption. Rows keep their theme and tier for the audit and
// for the dedupe below; the card component reads only `label` and `text`.
export function resolveSpokeRows(slug, country) {
  const plan = SPOKE_ROWS[slug];
  const spokes = country && Array.isArray(country.spokes) ? country.spokes : [];
  if (!plan || !spokes.length) return [];
  const out = [];
  for (const step of plan.slice().sort((a, b) => (a.tier || 3) - (b.tier || 3))) {
    const hitSpokes = spokes.filter(s => s && s.live !== false && s.slug === step.spoke);
    if (hitSpokes.length !== 1) continue;
    const glance = Array.isArray(hitSpokes[0].glance) ? hitSpokes[0].glance : [];
    const hits = glance.filter(g => g && typeof g.k === 'string' && typeof g.v === 'string'
      && g.k.trim() === step.k && g.v.trim() === step.v);
    if (hits.length !== 1) continue;
    const text = spokeText(step, hits[0]);
    if (text.length > MAX_ROW_CHARS) continue;
    out.push({ label: step.label, text, source: 'spokes', theme: step.theme, tier: step.tier || 3 });
  }
  return out;
}

// The displayed string, assembled out of the source's own two halves and nothing else.
// The default keeps the key because most glance values lean on it ("Not required, but
// appreciated" is not a sentence about anything). `show: 'v'` drops a key that only
// repeats the row's label chip. No capitalisation fix: a value like "evisa.gov.vn only"
// has to survive exactly as typed.
function spokeText(step, pair) {
  return step.show === 'v' ? pair.v.trim() : pair.k.trim() + ': ' + pair.v.trim();
}

// Two spokes often make one point twice: Thailand's taxis spoke and its scams spoke
// both say to insist on the meter, and a card carrying both looks padded and reads as
// two rules. `theme` is the hand-written key that collapses them, first row wins, and
// because rows arrive in source-then-tier order the winner is the better-sourced or
// more disabusing of the two. The normalised-text pass underneath it catches the case
// where two sources happen to agree word for word.
//
// It does NOT dedupe a spoke row against a pocket row. Nothing mechanical can see that
// "Do not tip. Say something instead" and "Tipping: Not customary" are the same point,
// so that judgment is made by hand when a row is triaged into SPOKE_ROWS. If a pocket
// later grows a rule that a spoke row already covers, the audit's card-shape listing is
// where it shows up, not here.
function dedupe(rows) {
  const seenText = new Set();
  const seenTheme = new Set();
  const out = [];
  for (const r of rows) {
    const key = r.text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    if (seenText.has(key)) continue;
    if (r.theme && seenTheme.has(r.theme)) continue;
    seenText.add(key);
    if (r.theme) seenTheme.add(r.theme);
    out.push(r);
  }
  return out;
}

// The card for one country. `country` is a country object from src/data/index.js.
// Returns null only when there is no country to describe. Everything else degrades:
// a country with no rows still gets a valid card carrying the note and the footer.
export function verdictFor(country) {
  if (!country || !country.slug) return null;
  const slug = country.slug;
  const pocket = moneyRules[slug] || null;
  const fact = heroFacts[slug] || null;

  // SOURCE PRIORITY. The pocket is the richest source, so a country that has one leads
  // with it and never also draws on the hero fact: mixing those two would put a pocket
  // heading and an escape clause about the same habit on the same card, said two
  // different ways. Spokes then fill whatever the leading source left, up to the cap.
  //
  // Order matters twice over. It decides which rows survive the cap (the pocket or the
  // escape always does), and, because sortRows is stable, it decides which row leads
  // inside a shared label, so a pocket rule still sits above a harvested glance line.
  const lead = pocket ? rowsFromPocket(slug, pocket) : rowsFromEscape(slug, fact);
  const filler = resolveSpokeRows(slug, country);
  const rows = sortRows(dedupe(lead.concat(filler)).slice(0, MAX_ROWS));

  // The checked date is the GUIDE's own date, and only ever that. Not the pocket's
  // `checked` string, and not a hero fact's re-verify override.
  //
  // Each of those is individually honest, but the card sits a few centimetres above the
  // hero's own "checked" stamp, and a pocket-dated card read "checked August 2026"
  // directly over a hero reading "checked Jul 2026". Two dates disagreeing in one
  // eyeful is the kind of small inconsistency that costs a trust-first site more than
  // the extra precision buys it. One date, the guide's, so the pill and the stamp agree.
  //
  // This changes nothing about where the ROWS come from: they still trace to the pocket
  // headings, the hero escape or a spoke's own glance pair exactly as before. The pocket
  // is still a row source, it is just not the date source. Nothing is rounded to today,
  // and a country with no date on its guide shows no pill at all rather than an invented
  // one.
  const checked = longMonth(country.checked || '');

  // The note is shown when the card is genuinely short, and short now means short:
  // fewer rows than a full card, whatever they were drawn from. Under v1 this also
  // fired on every card without a pocket, which was right when a pocketless card was
  // one clause of a hero fact. It is no longer right: a country with four rows lifted
  // from its own checked spokes is not a country we are still checking, and saying so
  // under four real rules reads as false modesty rather than honesty. The wording is
  // unchanged, and a card that the spokes leave short still says so.
  const thin = rows.length < MIN_FULL_ROWS;
  const note = !thin
    ? null
    : rows.length > 0
      ? 'We are still checking the rest of ' + country.name + '. This is what we can stand behind today.'
      : 'We are still checking ' + country.name + '. The guide below has what we can stand behind today.';

  return {
    slug,
    name: country.name,
    title: 'True Trip Costs: ' + country.name,
    subhead: 'before you go',
    checked,
    rows,
    note,
    // The leading source, kept as v1 wrote it so anything reading `source` still reads
    // the same thing. `sources` is the honest full list for the audit, because a card
    // can now be fed by two of the three.
    source: pocket ? 'money-rules' : (lead.length ? 'hero-facts' : (rows.length ? 'spokes' : 'none')),
    sources: Array.from(new Set(rows.map(r => r.source))),
  };
}

// Desk tool, read by scripts/check-verdict.mjs. Reports every pointer that no longer
// resolves, so a reworded escape or a reordered pocket surfaces as a to-do rather than
// as a silently shorter card.
export function verdictAudit(countries) {
  const problems = [];
  for (const c of countries) {
    if (!c.live) continue;
    const pocket = moneyRules[c.slug];
    if (pocket) {
      const plan = POCKET_ROWS[c.slug] || [];
      if (!POCKET_ROWS[c.slug]) problems.push({ slug: c.slug, kind: 'pocket-unclassified', detail: 'has a money-rules pocket but no POCKET_ROWS entry' });
      for (const step of plan) {
        const hits = pocket.rules.filter(r => r && typeof r.h === 'string' && r.h.trim() === step.match);
        if (hits.length === 0) {
          problems.push({ slug: c.slug, kind: 'heading-not-in-pocket', detail: step.match });
        } else if (hits.length > 1) {
          problems.push({ slug: c.slug, kind: 'heading-ambiguous', detail: step.match });
        } else if (hits[0].h.trim().length > MAX_ROW_CHARS) {
          problems.push({ slug: c.slug, kind: 'pocket-row-too-long', detail: hits[0].h.trim() });
        }
      }
    } else {
      const plan = ESCAPE_ROWS[c.slug] || [];
      const escape = (heroFacts[c.slug] && heroFacts[c.slug].escape) || '';
      for (const step of plan) {
        if (!escape.includes(step.clause)) {
          problems.push({ slug: c.slug, kind: 'clause-not-in-escape', detail: step.clause });
        } else if (sentenceCase(step.clause.trim()).length > MAX_ROW_CHARS) {
          problems.push({ slug: c.slug, kind: 'escape-row-too-long', detail: step.clause });
        }
      }
    }

    // The third source gets the same treatment, and it applies to every country
    // whether or not it has a pocket, because spokes fill behind both leading sources.
    const spokes = Array.isArray(c.spokes) ? c.spokes : [];
    for (const step of (SPOKE_ROWS[c.slug] || [])) {
      const where = step.spoke + ' / ' + step.k + ': ' + step.v;
      const hitSpokes = spokes.filter(s => s && s.live !== false && s.slug === step.spoke);
      if (hitSpokes.length === 0) {
        problems.push({ slug: c.slug, kind: 'spoke-not-found', detail: where });
        continue;
      }
      if (hitSpokes.length > 1) {
        problems.push({ slug: c.slug, kind: 'spoke-ambiguous', detail: where });
        continue;
      }
      const glance = Array.isArray(hitSpokes[0].glance) ? hitSpokes[0].glance : [];
      const hits = glance.filter(g => g && typeof g.k === 'string' && typeof g.v === 'string'
        && g.k.trim() === step.k && g.v.trim() === step.v);
      if (hits.length === 0) {
        problems.push({ slug: c.slug, kind: 'glance-not-in-spoke', detail: where });
      } else if (hits.length > 1) {
        problems.push({ slug: c.slug, kind: 'glance-ambiguous', detail: where });
      } else if (spokeText(step, hits[0]).length > MAX_ROW_CHARS) {
        problems.push({ slug: c.slug, kind: 'spoke-row-too-long', detail: where });
      }
    }

    // Cheap rail across all three maps: a bucket typo would otherwise sort to the front
    // of the card and render with the wrong glyph rather than failing.
    const labels = []
      .concat(POCKET_ROWS[c.slug] || [], ESCAPE_ROWS[c.slug] || [], SPOKE_ROWS[c.slug] || [])
      .map(step => step.label);
    for (const label of labels) {
      if (!LABEL_ORDER.includes(label)) problems.push({ slug: c.slug, kind: 'unknown-label', detail: String(label) });
    }
  }
  return problems;
}

// Desk report, not a gate. Two things worth seeing that are not failures:
//   `untriaged`  live spokes with no row in SPOKE_ROWS. Usually correct (a pets spoke
//                has nothing card-shaped in it), sometimes a new wave nobody has
//                triaged yet. Failing the build on these would mean a content wave
//                could not land until the card caught up, which is backwards.
//   `unused`     rows that resolve cleanly but never reach the card, because the cap
//                cut them or a theme was already taken. Worth knowing before writing
//                more of them.
export function spokeReport(countries) {
  const out = [];
  for (const c of countries) {
    if (!c.live) continue;
    const spokes = (Array.isArray(c.spokes) ? c.spokes : []).filter(s => s && s.live !== false);
    const plan = SPOKE_ROWS[c.slug] || [];
    const used = new Set(plan.map(step => step.spoke));
    const resolved = resolveSpokeRows(c.slug, c);
    const shown = new Set((verdictFor(c) || { rows: [] }).rows.map(r => r.text));
    out.push({
      slug: c.slug,
      untriaged: spokes.filter(s => !used.has(s.slug)).map(s => s.slug),
      unused: resolved.filter(r => !shown.has(r.text)).map(r => r.text),
      unresolved: plan.length - resolved.length,
    });
  }
  return out;
}
