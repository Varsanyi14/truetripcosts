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

## Spoke scannability fields (glance, key, icon)

Spokes are long: the median is about 6,800 characters across 3 to 5 sections. Three optional fields give the reader somewhere for the eye to land, and every new spoke should carry them. A spoke without them still renders correctly, it just reads as a wall of prose next to the ones that have them, so treat these as part of the standard spoke shape, not as an extra.

All three are authored by hand. They are editorial judgment about which fact matters, which is exactly why they are worth writing: nothing derived automatically from the prose comes close.

### `glance`: the at-a-glance grid

A short array of key and value pairs, rendered as a small grid under the lede, before the short answer. Four cells is the sweet spot. Keep values terse, this is the five-second summary, not a sentence.

```js
glance: [
  { k: "Currency", v: "Japanese yen (¥ JPY)" },
  { k: "Cards", v: "Fine across cities" },
  { k: "Still cash", v: "Shrines, small shops, vending" },
  { k: "Get yen at", v: "7-Eleven, Japan Post" }
],
```

Keep `glance` values as text. Never bake them into an image: they are indexable content and they need to stay that way.

### `key`: the pull-out callout inside a section

One per section, placed on the section object. It renders as a callout after that section's first paragraph, so the reader gets the section's single most important fact without reading the whole thing.

```js
{
  h: "Getting yen: only some ATMs take foreign cards",
  icon: "atm",
  key: {
    fig: "58%",                 // optional: a number, short word or amount. Omit for a warning icon.
    tag: "Cashless in 2025",    // a short label above the text
    text: "But shrines, small shops and vending machines are still cash. Big things on a card, the small old-fashioned things in cash.",
    tone: "teal"                // "teal" for a key fact, "amber" for a watch-out
  },
  p: [ ... ]
}
```

Rules for `key`:

- **`text` is a real sentence or two, not a label.** It is indexable prose and it is what makes the callout useful. "Most bank ATMs reject foreign cards. Pull yen at a 7-Eleven or Japan Post ATM instead" earns its place; "ATM warning" does not.
- **`tone` carries meaning, not decoration.** Use `teal` for the key fact of the section and `amber` for a genuine watch-out or trap. If everything is amber, nothing is.
- **`fig` is optional.** Use it when there is a crisp number or word to anchor on (`"58%"`, `"180 days"`, `"Suica"`, `"Yen"`). Leave it out and the callout shows a warning symbol instead, which suits an amber caution.
- **Do not repeat the paragraph.** The callout should pull the fact forward, not restate the sentence next to it.

### `icon`: the section symbol

An optional icon name on a section, rendered beside the heading. Use a name that already exists in `src/components/Symbol.astro`; an unknown name renders nothing. Check the component for what is available rather than inventing a name.

```js
{ h: "The real picture: cashless, but not cash-free", icon: "qr", ... }
```

### What not to do

- Do not delete or shorten prose to make room for these. They are additive. The full `answer` and all section paragraphs stay exactly as they are, this is a scannability layer on top, not a replacement, and cutting body copy would cost search traffic for no reader benefit.
- Do not add `glance` cells or `key` callouts that state something the reader already knows from the heading.
- Do not use `key` more than once per section.

### The short answer, and `ANSWER_MODE`

`src/components/Spoke.astro` has a constant `ANSWER_MODE`, set to `'A'`. Mode A renders the `answer` field as a single prose paragraph, which is the safe default. Mode B additionally pulls the answer's `<b>` phrases into a bullet list above the prose, with a guard that falls back to prose whenever any bold looks like a mid-sentence fragment. Leave it on `'A'` unless you are deliberately testing B, and if you switch it, check a pets spoke and a scams spoke, not just a cash spoke, because their bolds are shaped differently.

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
# Content gate: zero em dashes, zero en dashes, and zero periods-form "U.S.",
# across source and the built site. Runs in Python so it is shell-independent.
# (The earlier grep-based dash check was removed: it silently passed under the
# sandbox shell, so a green result did not actually mean the site was clean.)
python3 scripts/check-content.py    # must print: RESULT: PASS
```

Then load the guide and expand "Sources, and how this guide was checked" to confirm the panel renders and the links are correct.
