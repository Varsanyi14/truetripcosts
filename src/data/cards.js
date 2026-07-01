// One home for every card shown in the all-in calculator's card picker.
//
// Why this file exists: card maintenance happens here, in one place, never per
// country. Adding the fiftieth country adds zero card work. The country pages
// and the calculator both read from this list.
//
// Each card carries:
//   issuer     the bank, as plain text (e.g. "Chase")
//   product    the card name, as plain text (e.g. "Sapphire Preferred")
//   network    "Visa", "Mastercard" or "Amex", spelled out as text (no logos)
//   fxPct      the foreign transaction fee, as a percent. 0 means no fee.
//   kind       "credit" or "debit"
//   atm        a short note for the cash side, or null
//   note       an acceptance or fine-print caveat shown when the card is picked, or null
//   color      a representative hex for the tile (a colour, never the real card art)
//   affiliate  { link, label }. Every link is null and every label is "we earn nothing"
//              for now, because there is no card affiliate program yet. When a program
//              lands, set that card's link and flip its label to "we may earn a commission".
//              The rest stay "we earn nothing".
//
// HARD RULE on the tiles: no real Visa, Mastercard or Amex logos and no proprietary
// card artwork. Brand and product names as plain text are fine. A representative
// colour, a generic chip and the network spelled out as text are fine. Logos are not.
//
// HIGH-CHURN: foreign transaction fees change. Every fee below was verified fresh
// against issuer and comparison sources dated June 2026. Re-verify on the same
// cadence as the tourist taxes and update cardsChecked / cardsCheckedISO.

export const cardsChecked = "Jun 2026";
export const cardsCheckedISO = "2026-06-29";

// The safe default for "assume the worst": a typical basic-bank-card fee.
export const fallbackFxPct = 3;

const free = { link: null, label: "we earn nothing" };

export const cards = [
  // Chase. Sapphire and Ink Preferred have no foreign fee; the Freedom pair charges 3%.
  { issuer: "Chase", product: "Sapphire Preferred", network: "Visa", fxPct: 0, kind: "credit", atm: null, note: null, color: "#126BC5", affiliate: free },
  { issuer: "Chase", product: "Sapphire Reserve", network: "Visa", fxPct: 0, kind: "credit", atm: null, note: null, color: "#0E5BA6", affiliate: free },
  { issuer: "Chase", product: "Freedom Unlimited", network: "Visa", fxPct: 3, kind: "credit", atm: null, note: null, color: "#1E8AD6", affiliate: free },
  { issuer: "Chase", product: "Freedom Flex", network: "Mastercard", fxPct: 3, kind: "credit", atm: null, note: null, color: "#2A9BE0", affiliate: free },
  { issuer: "Chase", product: "Ink Business Preferred", network: "Visa", fxPct: 0, kind: "credit", atm: null, note: null, color: "#0B4F91", affiliate: free },

  // Capital One. No foreign transaction fee on any card, which is worth knowing.
  { issuer: "Capital One", product: "Venture", network: "Visa", fxPct: 0, kind: "credit", atm: null, note: "Capital One charges no foreign transaction fee on any of its cards.", color: "#004879", affiliate: free },
  { issuer: "Capital One", product: "Venture X", network: "Visa", fxPct: 0, kind: "credit", atm: null, note: "Capital One charges no foreign transaction fee on any of its cards.", color: "#013A61", affiliate: free },
  { issuer: "Capital One", product: "Quicksilver", network: "Mastercard", fxPct: 0, kind: "credit", atm: null, note: "Capital One charges no foreign transaction fee on any of its cards.", color: "#0A5C91", affiliate: free },
  { issuer: "Capital One", product: "Savor", network: "Mastercard", fxPct: 0, kind: "credit", atm: null, note: "Capital One charges no foreign transaction fee on any of its cards.", color: "#11486F", affiliate: free },

  // Bank of America. The travel cards are no-fee; Customized Cash Rewards charges 3%.
  { issuer: "Bank of America", product: "Travel Rewards", network: "Visa", fxPct: 0, kind: "credit", atm: null, note: null, color: "#012169", affiliate: free },
  { issuer: "Bank of America", product: "Premium Rewards", network: "Visa", fxPct: 0, kind: "credit", atm: null, note: null, color: "#0A3079", affiliate: free },
  { issuer: "Bank of America", product: "Customized Cash Rewards", network: "Visa", fxPct: 3, kind: "credit", atm: null, note: null, color: "#E31837", affiliate: free },

  // Citi. Strata Premier is no-fee; Double Cash charges 3%.
  { issuer: "Citi", product: "Strata Premier", network: "Mastercard", fxPct: 0, kind: "credit", atm: null, note: null, color: "#056DAE", affiliate: free },
  { issuer: "Citi", product: "Double Cash", network: "Mastercard", fxPct: 3, kind: "credit", atm: null, note: null, color: "#1583C4", affiliate: free },

  // Wells Fargo. Autograph is no-fee; Active Cash charges 3%.
  { issuer: "Wells Fargo", product: "Autograph", network: "Visa", fxPct: 0, kind: "credit", atm: null, note: null, color: "#B31B1B", affiliate: free },
  { issuer: "Wells Fargo", product: "Active Cash", network: "Visa", fxPct: 3, kind: "credit", atm: null, note: null, color: "#C9282D", affiliate: free },

  // American Express. The travel cards are no-fee; Blue Cash Everyday charges 2.7%.
  // Amex is accepted less widely abroad than Visa or Mastercard, so carry a backup.
  { issuer: "American Express", product: "Platinum", network: "Amex", fxPct: 0, kind: "credit", atm: null, note: "Amex is accepted less widely abroad than Visa or Mastercard, so carry a Visa or Mastercard backup.", color: "#7C8A96", affiliate: free },
  { issuer: "American Express", product: "Gold", network: "Amex", fxPct: 0, kind: "credit", atm: null, note: "Amex is accepted less widely abroad than Visa or Mastercard, so carry a Visa or Mastercard backup.", color: "#B08D57", affiliate: free },
  { issuer: "American Express", product: "Green", network: "Amex", fxPct: 0, kind: "credit", atm: null, note: "Amex is accepted less widely abroad than Visa or Mastercard, so carry a Visa or Mastercard backup.", color: "#1C6B4C", affiliate: free },
  { issuer: "American Express", product: "Blue Cash Everyday", network: "Amex", fxPct: 2.7, kind: "credit", atm: null, note: "Amex is accepted less widely abroad than Visa or Mastercard, so carry a Visa or Mastercard backup.", color: "#2E77BC", affiliate: free },

  // Discover. No foreign transaction fee, but acceptance abroad is limited.
  { issuer: "Discover", product: "Discover it", network: "Discover", fxPct: 0, kind: "credit", atm: null, note: "Discover acceptance abroad is limited (better in Japan, Mexico and the Caribbean, patchy in much of Europe), so carry a Visa or Mastercard too.", color: "#F37021", affiliate: free },

  // Cash and ATM tools (debit and multi-currency). Already cited on the country pages.
  { issuer: "Charles Schwab", product: "Investor Checking debit", network: "Visa", fxPct: 0, kind: "debit", atm: "Refunds ATM fees worldwide, with no limit", note: "Schwab refunds worldwide ATM fees, so it is the standout card for pulling cash abroad.", color: "#00A3E0", affiliate: free },
  { issuer: "Fidelity", product: "Cash Management debit", network: "Visa", fxPct: 1, kind: "debit", atm: "Refunds ATM fees, often same day", note: "Fidelity refunds ATM fees but adds about a 1% fee on foreign purchases, so it is best for ATM cash, not card spending.", color: "#4D8400", affiliate: free },
  { issuer: "Capital One", product: "360 Checking debit", network: "Mastercard", fxPct: 0, kind: "debit", atm: "No Capital One foreign fee, ATM operator fees may still apply", note: null, color: "#015C8E", affiliate: free },
  { issuer: "Wise", product: "Wise card", network: "Visa", fxPct: 0, kind: "debit", atm: "Free ATM withdrawals up to about $100 a month, then a small fee", note: "Wise uses the mid-market rate plus a small conversion fee (around 0.4% and up), with no flat foreign fee.", color: "#163300", affiliate: free },
  { issuer: "Revolut", product: "Revolut card", network: "Visa", fxPct: 0, kind: "debit", atm: "Some fee-free ATM use, then a small fee", note: "Revolut is fee-free up to your plan's monthly limit, then about 0.5%, with a small extra markup on weekends.", color: "#191C1F", affiliate: free }
];

// Group cards by issuer for the picker, preserving the order above.
export function cardsByIssuer() {
  const groups = [];
  const index = {};
  for (const c of cards) {
    if (index[c.issuer] === undefined) {
      index[c.issuer] = groups.length;
      groups.push({ issuer: c.issuer, cards: [] });
    }
    groups[index[c.issuer]].cards.push(c);
  }
  return groups;
}

// The no-foreign-fee shortlist surfaced under the calculator (the "see no-fee
// cards" links land here). A few standout 0% credit cards plus the debit tools
// that refund ATM fees on the cash side.
export const noFeePicks = cards.filter(c => c.fxPct === 0 && (c.kind === "credit" || c.atm));

// The opt-in shortlist shown when a traveler taps "see cards that work well in X".
// Deliberately short (three cards, never the full roster) and tasteful: two
// no-foreign-fee credit cards for spending and one fee-free-ATM debit card for cash.
// Amex and Discover are left out on purpose, because their acceptance abroad is
// patchy and that matters most for a first trip.
//
// Order is the only thing that changes by country: cash-heavy destinations lead
// with the debit card for ATM cash, card-friendly ones lead with the credit cards.
// This stays generic (a set of slugs), so adding the fiftieth country still adds
// no per-card work. Each card's affiliate label is data-driven from the entry above,
// so the day a program lands, that one card flips to "we may earn a commission" on its own.
const cashHeavySlugs = new Set(["japan", "vietnam", "thailand", "mexico", "indonesia"]);

export function shortlistFor(slug) {
  const pick = (issuer, product) =>
    cards.find(c => c.issuer === issuer && c.product === product);
  const venture = pick("Capital One", "Venture");                         // spending, 0% FX
  const sapphire = pick("Chase", "Sapphire Preferred");                   // spending, wide acceptance
  const schwab = pick("Charles Schwab", "Investor Checking debit");       // fee-free ATM cash

  const list = cashHeavySlugs.has(slug)
    ? [schwab, venture, sapphire]
    : [venture, sapphire, schwab];
  return list.filter(Boolean);
}
