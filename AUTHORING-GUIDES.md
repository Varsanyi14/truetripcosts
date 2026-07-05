# Authoring guides: sources, and keeping facts single-source

This is the working convention for two things the guides now need to be consistent on:

1. Every country shows a **sources panel** (the expandable "Sources, and how this guide was checked").
2. Correction-prone facts live in **one place** so a fix reaches every sentence that uses it.

Start from `src/data/_TEMPLATE.js`. The two fullest worked examples are `src/data/ireland.js` and `src/data/united-kingdom.js`. Copy their shape.

## The sources panel

The panel renders automatically on any guide whose data has a `sources` object. There is no per-guide component work: add the data, it appears. The shape:

```js
sources: {
  changed: "One or two lines on what changed at this check.",
  links: [
    { label: "What this official page confirms", url: "https://example.gov/page" },
  ],
  judgment: "What here is our estimate rather than an official figure.",
}
```

Rules for filling it:

- **Verify against the primary source.** Government, card issuer, city or tax authority. Not an affiliate blog, not a roundup site, both of which recycle old numbers. If the claim is high-stakes (entry or visa rules, taxes, tourist fees, emergency numbers), the link must be the official page.
- **Date it.** `checked` and `checkedISO` at the top of the file are what the panel shows as "Last checked". Update them when you re-verify.
- **Write a real change log.** `changed` is not filler. If you corrected something, say what, in plain language. If you only re-confirmed, say that.
- **Separate fact from judgment.** Official numbers go in the links. The soft calls (cash share, tipping habits, likely ATM behavior) go in `judgment`, labeled as ours. This is the line the reviewers care most about.
- **Two to four links.** Enough to back the high-stakes claims, not a link dump.

## Single source of truth for facts

The problem this prevents: the same fact written as loose prose in the summary, the FAQ, a warning card and a calculator note. Correct one, the others go stale. That is exactly what happened with the Ireland M50 toll.

The fix needs no renderer change, because the data files are JavaScript. Put the fact in one object at the top of the file and interpolate it into the prose with a template literal:

```js
const F = {
  tollLateFee: "about 4 euros",
};

export default {
  // ...
  notes: [
    `Miss the toll deadline and the late fee is ${F.tollLateFee}, climbing if unpaid.`,
  ],
  faq: [
    { q: "What if I miss the toll?", a: `The late fee is ${F.tollLateFee}.` },
  ],
};
```

Fix the value in `F` and both sentences update. Expose it as `facts: F` on the exported object so the shape stays the same across guides.

What already works this way, and is the model to follow:

- The **emergency number** is interpolated from `emergency.medical`.
- The **tourist tax** lives in the `tax` object, which the calculator reads directly, so the number in the calculator and the number you write about cannot disagree.
- The **foreign-fee default** is one value, `fallbackFxPct` in `cards.js`, used across every calculator.

What to move into `F`: any fact that appears in more than one sentence, or any number that gets corrected over time (rates, fees, dates, entry requirements). Pure one-off prose can stay prose.

## Per-country rollout checklist

For each guide, in order:

1. Re-verify the high-stakes claims (entry or visa, taxes, tourist fees, emergency number) on their official pages.
2. Update `checked` and `checkedISO`.
3. Add the `sources` block: `changed`, 2 to 4 official `links`, and `judgment`.
4. Pull any fact that is repeated or correction-prone into a `const F` object and interpolate it into the prose. Fix any copies that disagree while you are there.
5. Build and check (below), then commit.

## Country cost alerts (the costUpdate field)

When a country's money actually changes, and only then, add or update a `costUpdate` block at the top of that country's data file, next to `checkedISO`:

```js
costUpdate: {
  on: "2026-07-15",
  note: "Vienna raised its nightly tourist tax, and the airport train went up to 12 euros.",
},
```

On your next push, a GitHub Action (`.github/workflows/country-alerts.yml`) notices which countries' `costUpdate.on` changed in that push and emails only that country's subscribers, the people who picked it at signup. The `note` becomes the body of that email, so write it for the reader: what changed, in a sentence or two, plainly.

Rules, because this sends real email:

- **Set it only for a real money change.** `checkedISO` bumps every time you re-check a guide, even when nothing changed. `costUpdate.on` is a separate, deliberate signal that means the money moved. If you only re-confirmed, leave `costUpdate` untouched, or people get a "costs changed" email when nothing did.
- **`on` is the trigger.** The alert fires when `on` differs from the previous commit. To announce a fresh change, set `on` to the date of that change, and do not reuse an old date.
- **`note` is reader-facing copy, not a log.** It is the email itself. The internal change log still goes in `sources.changed`.
- **New guides do not spam.** Publishing a brand-new country with a `costUpdate` present only reaches people already tagged for it, which for a new country is nobody.

Testing safely: set the GitHub repo variable `ALERTS_DRY_RUN` to `true` and the Action creates a draft in Buttondown instead of sending, so you can review it. Set it back to `false`, or delete it, to go live.

## House rules

- No em dashes and no en dashes anywhere, in copy or in code. Hyphens, commas and colons only.
- Never claim the site is "unbiased", or any absolute you cannot prove ("never guessed" was removed for this reason).
- Never sell hotel rooms.
- Commission labels are generated from data, never hand-typed.
- Never edit or import `src/data/links.js`.
- The author is the "True Trip Costs desk". No employer, job title or personal name on the site.

## Verify before shipping

```sh
npm run build
# zero em dashes and zero en dashes across the built site:
grep -rl $'\u2014' dist | wc -l    # must be 0
grep -rl $'\u2013' dist | wc -l    # must be 0
```

Then load the guide and expand "Sources, and how this guide was checked" to confirm the panel renders and the links are correct.
