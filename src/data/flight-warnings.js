// BRIEF-calc-result-flights-integration: the flights domain's capstone. Four bites of
// flight KNOWLEDGE already live as their own pages (money-your-airline-owes-you,
// airline-fees-what-your-fare-doesnt-include, what-actually-makes-a-flight-cheaper); this
// file is what lets the calculator's own "Getting there" section point at them, as soft,
// question-less warnings, rather than repeating what those pages already say.
//
// WHY THIS IS A FLAT, UNIVERSAL LIST, NOT A PER-COUNTRY OR PER-CARRIER ONE. Every line here
// applies to any traveler with a flight, regardless of destination or airline, so nothing
// here is gated on a country field the way avoidable.js's items are, and nothing here asks
// a new wizard question. The parked airRegistryEntryExample(c) in avoidable.js is the
// question-gated shape this deliberately is NOT: see that function's own header for why it
// stays parked and unshipped. CalcResult.astro decides whether to show this list at all, by
// reading the calculator's own existing flight-total state (its own <style>, which keys
// visibility off the engine's #hnFlightLine element); nothing in this file decides that,
// because the four lines are the same regardless of the trip.
//
// THE FIGURE RULE, same as avoidable.js's own. No dollar figure, no percentage, anywhere in
// this file. Bag, seat, and change fees genuinely vary by carrier, route, and season, which
// is exactly why the pages this file points to refuse to store one either (see
// flight-fee-mechanics.js's own header). Naming the pattern and linking to the sourced page
// is the honest move here; guessing a number nobody can stand behind is not.
//
// EACH LINE TRACES TO ONE LIVE PAGE, AND THE WORDING IS ANCHORED TO WHAT THAT PAGE ACTUALLY
// SAYS, not to a claim invented for this list. Two of the four land on the same page
// (airline-fees-what-your-fare-doesnt-include) but point at two different sections of it:
// the page's own top-level framing for the bags/seats/change item, and its dedicated
// id="currency" section for the foreign-fee item, because that is where each claim actually
// lives on the page. If either page's own prose ever changes, re-check the matching line
// here against it rather than assuming it still holds.
//
// tier: 'watch' (amber, rendered under "Watch out for") | 'prepare' (green, rendered under
// "Prepare ahead"). Both labels are CalcResult.astro's own to render, not this file's, and
// they reuse wording already established elsewhere on the site rather than inventing new
// vocabulary: "Prepare ahead" is CalcWizard.astro's own label for its shield-marked group,
// and "Watch out for" is CountryBriefing.astro's own existing section label.

export const flightWarnings = [
  {
    tier: 'watch',
    heading: 'Bags, seats, and change fees are the avoidable part, not the fare.',
    body: 'The fare already covers the mandatory part. Bags, seats, and the right to change your mind are optional, and every airline strips a different amount out to get there.',
    href: '/airline-fees-what-your-fare-doesnt-include',
    hrefLabel: 'What your fare doesn\u2019t include',
  },
  {
    tier: 'watch',
    heading: 'Paying in dollars does not dodge your card\u2019s foreign fee.',
    body: 'The fee attaches to a foreign merchant, not to whatever currency shows on the receipt, so billing in dollars does not exempt the charge.',
    href: '/airline-fees-what-your-fare-doesnt-include#currency',
    hrefLabel: 'Why dollars don\u2019t dodge it',
  },
  {
    tier: 'watch',
    heading: 'There is no magic day or trick that reliably drops the fare.',
    body: 'The studies disagree with each other on the best day and the best advance window, and that disagreement is itself the finding: no single number is worth planning a purchase around.',
    href: '/what-actually-makes-a-flight-cheaper',
    hrefLabel: 'What actually makes a flight cheaper',
  },
  {
    tier: 'prepare',
    heading: 'If the airline cancels, you are owed cash, not a voucher.',
    body: 'US rules already owe you an automatic refund to your original payment method if you decline the rebooking, voucher, or credit the airline offers instead.',
    href: '/money-your-airline-owes-you',
    hrefLabel: 'What your airline owes you',
  },
];
