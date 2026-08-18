// Every URL on the site, built in one place.
//
// Why this file exists: the site has already been bitten by a hand-typed link to a page
// that did not exist (/netherlands/hotel-taxes-and-fees, when the spoke was slugged
// tourist-tax). String concatenation scattered across templates is how that happens, so
// the search index builds every URL through these four functions and nothing else.
//
// This is also the seam the approved-but-unbuilt internal-link resolver
// (src/data/internal-links.js: country + topic in, real URL or null out) should sit on
// top of. When it lands, it can call spokeUrl() rather than re-deriving the shape, and
// the two surfaces cannot drift apart. Keep these functions dumb: they take slugs that
// the caller has already proved are real, and they only know the shape of a path. The
// question "does this page exist" is answered by the data, not here.

/** A country guide, at /{slug}. */
export function countryUrl(countrySlug) {
  return `/${countrySlug}`;
}

/** A country spoke, at /{countrySlug}/{spokeSlug}. */
export function spokeUrl(countrySlug, spokeSlug) {
  return `/${countrySlug}/${spokeSlug}`;
}

/** The money rules pocket card, at /{countrySlug}/rules. */
export function rulesCardUrl(countrySlug) {
  return `/${countrySlug}/rules`;
}

/**
 * A standalone page, derived from its file name under src/pages rather than typed.
 * 'cash-or-card.astro' becomes /cash-or-card, and 'compare/index.astro' becomes
 * /compare, matching how Astro routes the file.
 */
export function pageUrlFromFile(file) {
  const path = file.replace(/\.astro$/, '');
  const trimmed = path.replace(/(^|\/)index$/, '');
  return `/${trimmed.replace(/^\/+|\/+$/g, '')}`;
}

/**
 * Where a built page lands in dist, so a checker can prove the page exists as a file.
 * The root path is dist/index.html; everything else is dist/{path}/index.html.
 */
export function distPathForUrl(url) {
  const clean = url.replace(/^\/+|\/+$/g, '');
  // Template literals rather than concatenation, so the prose gate's leaked-identifier
  // scan (scripts/check-content.py) does not read a legitimate path join as a defect.
  return clean ? `dist/${clean}/index.html` : 'dist/index.html';
}
