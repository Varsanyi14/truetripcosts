// THE VERDICT CARD: the screenshot-sized country card at the top of every guide.
//
// WHAT THIS IS. A selector and formatter, not a source. It holds no facts of its own,
// in the same way latest-checks.js and usd-prose.js hold none. It reads two sources
// that already exist, decides which of their lines belong on a card, and puts them in
// a fixed order. Fix a line in money-rules.js or hero-facts.js and the card changes on
// the next build. Nothing is ever re-typed here as a second copy of a fact.
//
// THE TWO SOURCES.
//   1. src/data/money-rules.js. The rich source. Its `rules[].h` headings are already
//      verdict-shaped one-liners ("Do not tip. Say something instead"), so a card row
//      is the heading VERBATIM. Nothing is rewritten, so nothing can drift.
//   2. src/data/hero-facts.js. The fallback, for a country with no rules pocket. The
//      `escape` field is a "do this" instruction, usually two or three clauses long.
//      A card row is one clause of it, selected by hand, again verbatim.
//
// THE ANTI-FABRICATION RAIL, and this is the whole point of the file. A row's text is
// never composed here. It is either:
//   a heading read straight out of the pocket by index, or
//   a clause that MUST appear, character for character, inside that country's escape.
// The substring test runs on every build (see rowsFromEscape). A clause that no longer
// matches its source is DROPPED, not shown and not repaired. So if somebody rewords an
// escape line next year, the affected row quietly disappears and the note row takes
// over. The card gets shorter. It never goes stale and it never invents.
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

// The card for one country. `country` is a country object from src/data/index.js.
// Returns null only when there is no country to describe. Everything else degrades:
// a country with no rows still gets a valid card carrying the note and the footer.
export function verdictFor(country) {
  if (!country || !country.slug) return null;
  const slug = country.slug;
  const pocket = moneyRules[slug] || null;
  const fact = heroFacts[slug] || null;

  // The pocket is the richer source, so a country that has one is read from it alone.
  // Mixing the two would put a pocket heading and an escape clause about the same habit
  // on the same card, said two different ways.
  const rows = sortRows(pocket ? rowsFromPocket(slug, pocket) : rowsFromEscape(slug, fact));

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
  // headings or the hero escape exactly as before. The pocket is still the row source,
  // it is just no longer the date source. Nothing is rounded to today, and a country
  // with no date on its guide shows no pill at all rather than an invented one.
  const checked = longMonth(country.checked || '');

  // The note is shown when the card is genuinely short: no pocket to draw on, or fewer
  // rows than a full card. A rich card does not need it and does not get it.
  const thin = !pocket || rows.length < MIN_FULL_ROWS;
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
    source: pocket ? 'money-rules' : (rows.length ? 'hero-facts' : 'none'),
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
  }
  return problems;
}
