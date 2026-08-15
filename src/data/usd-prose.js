// THE USD BRACKET IN PROSE. Phase 1 put a quiet "(~$340)" beside the one figure
// the calculator states in local currency. This file does the same job for
// figures written into sentences: "a 283 peso tourist tax" earns its "(~$16)"
// without the reader stopping to do the sum.
//
// WHAT THIS FILE IS. A detector, and nothing else. It takes a string and the
// currency the page is written around, and reports which spans of that string
// are amounts of money in that currency. It holds no rate, fetches nothing,
// touches no DOM, and never sees a dollar value. The arithmetic and the
// formatting stay where Phase 1 put them, in usd-bracket.js, on a rate handed
// down from the one place that reads one.
//
// WHY IT IS SHAPED LIKE A BOUNCER RATHER THAN A NET. Phase 1 converted a held
// number: the value was already known to be money, already known to be in the
// local currency, and the only question was arithmetic. Prose has none of that.
// "3 to 8%" is not money. "since 2023" is not money. "7-Eleven" is not money.
// "10 to 12 dollars a day" is money in the wrong currency. "1,000 baisa" is
// money in a subunit, and converting it as if it were rials overstates it by a
// factor of a thousand. Every one of those sits in this site's real copy today.
//
// So the rule this file is built to keep, above all others: A MISSED FIGURE IS
// HONEST, A WRONG BRACKET IS NOT. It converts only what it can positively
// identify, and treats every ambiguity as a reason to walk away. There is no
// fallback guess anywhere in it. A page where most figures get an honest
// bracket and the rest are quietly left alone is the intended outcome, not a
// shortfall.
//
// THE FOUR THINGS THAT MAKE A MATCH SAFE:
//
//   1. AN EXPLICIT MARKER. A number alone is never money. There has to be a
//      currency word ("euros"), an ISO code ("THB"), or a symbol next to it.
//
//   2. THE MARKER HAS TO MEAN THE PAGE'S OWN CURRENCY. The matcher is built
//      per page, from the home currency only, so "8 euros" on a Japan page
//      cannot match at all: there is no euro rate in play and no way to convert
//      it honestly, so it is left alone by construction rather than by a check
//      somebody has to remember. This is also what disambiguates the words that
//      several currencies share. "Pesos" means MXN on the Mexico page and COP
//      on the Colombia page because those are the only meanings offered there.
//
//   3. NO DOLLARS NEARBY. Where the copy already says what a figure is worth in
//      dollars, or is explaining the exchange rate itself, a bracket is either a
//      duplicate or a nonsense. Both are caught by looking at the sentence.
//
//   4. NOTHING THAT IS NOT A PRICE. Percentages, years, subunits, and the tail
//      of a list of banknote denominations are all excluded outright.

// Currency subunits. Never converted, in any currency, ever. The rial splits
// into 1,000 baisa and the dirham into 100 fils, so reading "1,000 baisa" as
// rials would print a bracket a thousand times too large. There is no version
// of this worth attempting: the site writes subunits to explain how prices are
// written, not to quote a price.
const SUBUNITS = ['baisa', 'baiza', 'fils', 'cent', 'cents', 'agora', 'agorot', 'satang', 'paisa', 'paise', 'grosz', 'groszy', 'ore', 'oere', 'halala', 'kopek', 'kopeks', 'centavo', 'centavos', 'centime', 'centimes', 'sen', 'jiao', 'fen', 'qirsh', 'piastre', 'piastres'];

// What each currency is called in this site's copy, per ISO code. Only the home
// currency's forms are ever built into a matcher, so a word listed under two
// currencies is not an ambiguity: it resolves to whichever page it is read on.
//
// THE DOLLAR CURRENCIES ARE DELIBERATELY QUALIFIED. On the Canada page, "10 to
// 12 dollars a day" is what a US carrier charges to roam, in US dollars, and on
// the Australia page "5, 10, 20, 50 and 100 dollars" is the note series in
// Australian ones. Bare "dollars" cannot be told apart without reading the
// sentence, and this site is written for Americans, so bare "dollars" is never
// matched anywhere. A Canadian dollar figure has to say so.
const FORMS = {
  EUR: { words: ['euro', 'euros'], sym: ['\u20AC'] },
  GBP: { words: ['pound', 'pounds', 'pounds sterling', 'sterling'], sym: ['\u00A3'] },
  JPY: { words: ['yen'], sym: ['\u00A5'] },
  THB: { words: ['baht'], sym: ['\u0E3F'] },
  VND: { words: ['dong'], sym: ['\u20AB'] },
  KRW: { words: ['won'], sym: ['\u20A9'] },
  CNY: { words: ['yuan', 'renminbi', 'rmb'], sym: [] },
  TWD: { words: ['taiwan dollar', 'taiwan dollars', 'new taiwan dollar', 'new taiwan dollars'], sym: ['NT$'] },
  HKD: { words: ['hong kong dollar', 'hong kong dollars'], sym: ['HK$'] },
  SGD: { words: ['singapore dollar', 'singapore dollars'], sym: ['S$'] },
  CAD: { words: ['canadian dollar', 'canadian dollars'], sym: ['CA$', 'C$'] },
  AUD: { words: ['australian dollar', 'australian dollars'], sym: ['A$', 'AU$'] },
  NZD: { words: ['new zealand dollar', 'new zealand dollars'], sym: ['NZ$'] },
  JMD: { words: ['jamaican dollar', 'jamaican dollars'], sym: ['J$'] },
  NAD: { words: ['namibian dollar', 'namibian dollars'], sym: ['N$'] },
  MXN: { words: ['peso', 'pesos'], sym: [] },
  ARS: { words: ['peso', 'pesos'], sym: [] },
  COP: { words: ['peso', 'pesos'], sym: [] },
  DOP: { words: ['peso', 'pesos'], sym: [] },
  PHP: { words: ['peso', 'pesos'], sym: ['\u20B1'] },
  CRC: { words: ['colon', 'colones'], sym: ['\u20A1'] },
  BRL: { words: ['real', 'reais'], sym: ['R$'] },
  INR: { words: ['rupee', 'rupees'], sym: ['\u20B9'] },
  LKR: { words: ['rupee', 'rupees'], sym: [] },
  IDR: { words: ['rupiah'], sym: [] },
  LAK: { words: ['kip'], sym: [] },
  AED: { words: ['dirham', 'dirhams'], sym: [] },
  MAD: { words: ['dirham', 'dirhams'], sym: [] },
  SAR: { words: ['riyal', 'riyals'], sym: [] },
  QAR: { words: ['riyal', 'riyals'], sym: [] },
  OMR: { words: ['rial', 'rials'], sym: [] },
  KWD: { words: ['dinar', 'dinars'], sym: [] },
  BHD: { words: ['dinar', 'dinars'], sym: [] },
  EGP: { words: ['pound', 'pounds', 'egyptian pound', 'egyptian pounds'], sym: [] },
  ZAR: { words: ['rand'], sym: [] },
  TRY: { words: ['lira', 'liras'], sym: ['\u20BA'] },
  GEL: { words: ['lari'], sym: ['\u20BE'] },
  CZK: { words: ['koruna', 'korun', 'korunas', 'crown', 'crowns'], sym: [] },
  HUF: { words: ['forint'], sym: [] },
  PLN: { words: ['zloty', 'zlotys', 'zlotych'], sym: [] },
  NOK: { words: ['krone', 'kroner'], sym: [] },
  DKK: { words: ['krone', 'kroner'], sym: [] },
  SEK: { words: ['krona', 'kronor'], sym: [] },
  ISK: { words: ['krona', 'kronur', 'kronor'], sym: [] },
  CHF: { words: ['franc', 'francs'], sym: [] },
  AWG: { words: ['florin', 'florins'], sym: [] }
};

// Currencies at par with the dollar. The same list the currency panel uses to
// decide it has nothing to offer, repeated here so a caller that forgets to
// pass a rate still cannot produce a bracket in Ecuador or the Bahamas.
export const FX_PAR = ['USD', 'BSD', 'PAB'];

const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const NUM = '\\d{1,3}(?:,\\d{3})+(?:\\.\\d+)?|\\d+(?:\\.\\d+)?';

// Everything that makes a figure untouchable, judged on the sentence around it
// rather than the figure itself. Each of these is here because the site's real
// copy contains it today, not because it was imaginable.
const SENT_END = /[.!?](?:\s|$)/;

// A window into the text around a figure, always cut on a word boundary.
//
// THIS IS NOT TIDINESS, IT IS THE BUG. A raw slice invents boundaries that are
// not in the sentence: cut "One more to watch" 25 characters back and it starts
// "ore to watch", where "ore" now looks like a whole word and reads as the
// Scandinavian subunit, which suppressed a perfectly good Thai baht figure. Cut
// the other way and "US dollars" becomes "ollars", the dollar check stops
// seeing it, and a figure the copy has already converted gets a second bracket.
// One slice, two opposite failures, so the edges are pushed out to the nearest
// real boundary instead. Outward, never inward: a window is allowed to be
// slightly too generous, never to fabricate a word that was not there.
function window(text, from, to) {
  let a = Math.max(0, Math.min(from, text.length));
  let b = Math.max(0, Math.min(to, text.length));
  const w = /\w/;
  while (a > 0 && w.test(text[a - 1]) && w.test(text[a])) a--;
  while (b < text.length && w.test(text[b - 1]) && w.test(text[b])) b++;
  return { a, b, s: text.slice(a, b) };
}

// Text after the figure, trimmed at the end of its own sentence, so a dollar
// figure in the NEXT sentence never suppresses this one.
function tail(text, end, span) {
  const t = window(text, end, end + span).s;
  const m = t.match(SENT_END);
  return m ? t.slice(0, m.index) : t;
}
function head(text, start, span) {
  const parts = window(text, start - span, start).s.split(SENT_END);
  return parts[parts.length - 1];
}

// Is the copy already telling the reader what this is in dollars, or explaining
// the exchange rate itself? Both mean hands off.
//
// IT LOOKS BOTH WAYS, and that is not symmetry for its own sake. The site writes
// the gloss on whichever side reads better, so all four of these are real lines
// here today: "50 pounds is roughly $1" (after), "283 pesos (roughly $16)"
// (after), "It costs about $35 (IDR 500,000)" (before), and "$100 is almost
// exactly 367 dirhams" (before, and a rate statement rather than a price). A
// check that only read forwards would bracket the last two, once duplicating a
// figure the sentence already gives and once pricing the exchange rate itself.
//
// The window stops at the sentence boundary in both directions, which is what
// keeps it from being blunt: in "roughly $40. Parking is extra, about 80 to 150
// pesos", the dollar figure belongs to the previous sentence and the pesos still
// earn their bracket.
// THE HOME CURRENCY'S OWN NAME IS NOT A DOLLAR. Nine of the currencies here are
// dollars themselves, and they are written "C$40", "NZ$20", "Canadian dollars".
// Left alone, the check would read the "$" in "C$60" as a US figure and suppress
// the perfectly good "C$2 to C$5 a bag" sitting beside it. So the home
// currency's own markers are blanked out of the window first, and what remains
// is asked the question: does this sentence mention US dollars?
// A dollar figure, as opposed to the word "dollars" used as a warning. This is
// the distinction the whole reach question turns on, below.
const DOLLAR_NUM = /\$\s?\d|\d[\d,.]*\s*(?:US\s+)?dollars?\b/i;
// The copy pricing the exchange rate itself rather than a thing you can buy.
// The article or number is required: "to the dollar" and "to 1 US dollar" are
// rate statements, "convert to dollars" is the terminal warning this site gives
// on nearly every guide and must not suppress anything.
const RATE_STATEMENT = /\bto\s+(?:the|1|one)\s+(?:US\s+)?dollars?\b|\bto\s+\$1\b|\bper\s+(?:US\s+)?dollar\b/i;

function dollarsNearby(text, start, end, m) {
  const near = /\$|\bdollars?\b|\bUSD\b/i;
  const clean = s => s.replace(m.homeI, ' ').replace(m.homeS, ' ');
  if (near.test(clean(tail(text, end, 45))) || near.test(clean(head(text, start, 45)))) return true;
  // A SECOND, LONGER LOOK FORWARD, AND ONLY FOR THE TWO THINGS WORTH IT.
  //
  // The near window has to stay tight, because this site ends a great many
  // sentences with "decline the convert to dollars offer" or "choose pesos, not
  // dollars". Widening it far enough to catch a late gloss would take those with
  // it and silently strip the bracket off a dozen good figures on every guide.
  //
  // So the long look is choosier than the short one. It only reacts to an actual
  // dollar AMOUNT, or to the copy explaining the rate itself, both of which mean
  // a bracket would be a duplicate or a nonsense however far away they sit.
  // "About 6.8 yuan (CNY), also called renminbi or RMB, to 1 US dollar" is the
  // case that earns it: thirty characters of the page naming its own currency
  // push the giveaway out of reach of any window a gloss check could afford.
  // A warning with no number in it still passes, which is the point.
  const far = clean(tail(text, end, 110));
  return DOLLAR_NUM.test(far) || RATE_STATEMENT.test(far);
}

// A run of banknote or coin denominations: "5, 10, 20 pounds", "notes come in
// 1,000, 5,000 and 10,000 yen", "Polymer notes come in C$5, 10, 20, 50 and 100".
// Each number is real money, but the marker sits at one end of the run and a
// bracket beside it reads as though it priced the whole list. Both ends are
// checked because this site writes the marker at either one: after the last
// item for the yen and pound notes, before the first for the Canadian and Swiss.
function inDenominationRun(text, start, end) {
  if (/\d[\d,]*(?:\.\d+)?\s*(?:,|and|or)\s*$/i.test(head(text, start, 30))) return true;
  if (/^\s*(?:,\s*|\s+(?:and|or)\s+)\d/i.test(text.slice(end, end + 14))) return true;
  return false;
}

// Does this figure sit inside a parenthetical the copy opened itself? Only the
// rendering changes: a bracket inside a bracket is noise, so the caller drops
// the parentheses and lets the figure join the aside it is already in.
export function insideParens(text, start) {
  const before = text.slice(0, start);
  return before.lastIndexOf('(') > before.lastIndexOf(')');
}

// A subunit anywhere in the immediate neighbourhood is enough to stand down. It
// is cheap, and the downside it prevents is a bracket a thousand times too big.
//
// MATCHED AS WHOLE WORDS, WHICH IS THE ENTIRE POINT. Tested as bare substrings
// these names are hidden inside ordinary English everywhere: "ore" lives in
// "store", "before" and "foreign", "cent" lives in "percent", "recent" and
// "central", "sen" lives in "sense". A substring test does not produce a wrong
// bracket, it silently removes right ones, and a check that quietly deletes
// good output is worse than no check because nothing ever complains.
const SUBUNIT_RE = new RegExp('\\b(?:' + SUBUNITS.join('|') + ')\\b', 'i');
function subunitNearby(text, start, end) {
  return SUBUNIT_RE.test(window(text, start - 25, end + 25).s);
}

function toNum(s) {
  const n = Number(String(s).replace(/,/g, ''));
  return isFinite(n) ? n : null;
}

// Build the matchers for one currency. Only the home currency's forms go in, so
// a foreign amount cannot be matched at all rather than being matched and then
// rejected. That is the difference between a rule and a habit.
//
// WORDS AND CODES ARE MATCHED SEPARATELY, and it is worth saying why, because
// folding them into one pattern is the obvious move and it is wrong. A currency
// WORD has to be case-insensitive: a sentence can open on "Euros" as easily as
// it can carry "euros" in the middle. A currency CODE has to be case-sensitive,
// because three uppercase letters are a code and three lowercase ones are
// usually a word. Case-fold the codes and TRY becomes "try", MAD becomes "mad",
// GEL becomes "gel", and ARS matches the last three letters of "dollars", which
// is exactly the sort of quiet nonsense this whole file exists to avoid. A
// regex carries one set of flags, so this is two regexes, not one.
function matcherFor(cur) {
  const f = FORMS[cur];
  if (!f) return null;
  const longest = (a, b) => b.length - a.length;
  const words = f.words.slice().sort(longest).map(esc);
  const syms = f.sym.slice().sort(longest).map(esc);
  const iso = esc(cur);
  // Spelled out or symbol: case-insensitive, and the words carry word
  // boundaries so "won" the currency is never "won" inside a longer word.
  const markI = words.map(w => '\\b' + w + '\\b').concat(syms).join('|');
  // The code: uppercase only.
  const markS = '\\b' + iso + '\\b';
  const build = (mark, flags) => ({
    // "EUR 8", "EUR 8 to 12", the symbol forms
    pre: new RegExp('(?:' + mark + ')\\s?(' + NUM + ')(?:\\s*(?:to|-)\\s*(?:(?:' + mark + ')\\s?)?(' + NUM + '))?', flags),
    // "8 euros", "8 to 12 euros", "1,200 THB"
    post: new RegExp('(' + NUM + ')(?:\\s*(?:to|-)\\s*(' + NUM + '))?\\s?(?:' + mark + ')', flags)
  });
  // Every way this page can name its own currency, used to blank the home
  // currency out of a window before that window is searched for US dollars.
  // Word-bounded for the same reason, and for the same near miss.
  return {
    sets: [build(markI, 'gi'), build(markS, 'g')],
    homeI: new RegExp(markI, 'gi'),
    homeS: new RegExp(markS, 'g')
  };
}

/**
 * Find every span of `text` that is safely an amount of money in `cur`.
 * Returns [{ start, end, lo, hi }] in document order, non-overlapping.
 * `hi` is null for a single figure and a number for a range.
 * Knows nothing about rates or dollars: that is the caller's half.
 */
export function findFigures(text, cur) {
  if (!text || !cur || FX_PAR.indexOf(cur) !== -1) return [];
  const m = matcherFor(cur);
  if (!m) return [];
  const hits = [];
  const scan = (re) => {
    re.lastIndex = 0;
    let x;
    while ((x = re.exec(text))) {
      const start = x.index;
      const end = x.index + x[0].length;
      // A percentage is not a currency, whatever sits beside it.
      if (/^\s*(?:%|percent|per cent)/i.test(text.slice(end))) continue;
      if (/%\s*$/.test(text.slice(0, start))) continue;
      const lo = toNum(x[1]);
      const hi = x[2] != null ? toNum(x[2]) : null;
      if (lo == null || lo <= 0) continue;
      // A range that does not read as a range (backwards, or an unparsable half)
      // is left whole and untouched rather than half-converted.
      if (x[2] != null && (hi == null || hi <= lo)) continue;
      if (subunitNearby(text, start, end)) continue;
      if (inDenominationRun(text, start, end)) continue;
      if (dollarsNearby(text, start, end, m)) continue;
      hits.push({ start, end, lo, hi, paren: insideParens(text, start) });
    }
  };
  for (const set of m.sets) { scan(set.post); scan(set.pre); }
  hits.sort((a, b) => a.start - b.start || b.end - a.end);
  const out = [];
  for (const h of hits) if (!out.length || h.start >= out[out.length - 1].end) out.push(h);
  return out;
}
