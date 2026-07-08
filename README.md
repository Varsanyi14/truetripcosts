# True Trip Costs

Plain-language money guides for US travelers heading abroad, one country per page: cards versus cash, ATM and dynamic-conversion fees, tourist taxes, tipping, connectivity, travel insurance, and an all-in cost calculator.

This is an editorial site, not a booking site. It never sells hotel rooms. The author is the "True Trip Costs desk".

Live at https://truetripcosts.com

## Stack

- [Astro](https://astro.build) static site, built to `dist/`. No server rendering.
- Deployed as a Cloudflare Worker that serves the static build and runs a small signup API.
- Content is plain JavaScript data files, one per country, so a fact can be fixed in one place and reused everywhere.

## Getting started

```sh
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the built dist/ locally
```

Use a recent LTS Node (20 or newer).

## Project layout

```
src/
  data/            one file per country (e.g. japan.js), plus:
    _TEMPLATE.js   the shape to copy when adding a new guide
    index.js       explicit list of live countries (drives the build)
    cards.js       shared card and fee data used by every calculator
    links.js       affiliate link registry (generated, do not hand-edit)
  components/
    CountryBriefing.astro   renders a full country guide from its data
    Nav / Footer / Symbol / NewTab
  layouts/Base.astro
  pages/
    index.astro    home
    [slug].astro   one page per country, built from src/data
    about.astro, privacy.astro
  styles/global.css   design tokens and site styles
public/            static assets (images, flags, favicon)
worker.js          Cloudflare Worker: serves dist/ and POST /api/notify (signups)
wrangler.toml      Worker config (static assets, SIGNUPS KV, /api routing)
astro.config.mjs   site URL and sitemap
workflows/         automation for country cost-change alerts
```

To add a country: copy `_TEMPLATE.js`, fill it in, add the slug to `src/data/index.js`, then build.

## Content conventions

The rules for writing and updating guides live in [AUTHORING-GUIDES.md](./AUTHORING-GUIDES.md). Read that before editing content. In short:

- Every guide carries a `sources` panel: what changed at the last check, the official links behind the high-stakes facts, and a note on what is our own judgment rather than an official figure.
- Correction-prone facts (rates, fees, dates, entry rules) live in one object and are interpolated into the prose, so fixing the value updates every sentence that uses it.
- The tourist-tax figure the calculator uses is the same one the prose describes, because both read the `tax` object.
- No em dashes and no en dashes anywhere. Never claim the site is "unbiased". Never sell hotel rooms.

## Deploy

Build first, then deploy the Worker and its static assets with Wrangler:

```sh
npm run build
npx wrangler deploy
```

The Worker handles newsletter signups at `POST /api/notify`, creating subscribers in Buttondown (the store of record, double opt-in) with a best-effort backup copy in the `SIGNUPS` KV namespace. It needs one secret:

```sh
npx wrangler secret put BUTTONDOWN_API_KEY
```

## Verify before shipping

```sh
npm run build
grep -rl $'\u2014' dist | wc -l   # em dashes, must be 0
grep -rl $'\u2013' dist | wc -l   # en dashes, must be 0
```

Then open a guide and expand "Sources, and how this guide was checked" to confirm the panel renders and the links are right.
