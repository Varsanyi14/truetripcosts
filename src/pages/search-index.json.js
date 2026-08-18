// /search-index.json, generated at build time and shipped as a static file.
//
// Deliberately an endpoint rather than a committed artifact in public/. A checked-in JSON
// would need regenerating by hand every time a spoke wave lands, and would go stale in
// silence between waves. This way the index is rebuilt from src/data on every build, so
// it cannot describe a site that no longer exists. The gate still diffs the shipped file
// against a fresh read of the data, as a witness that this is really what happened.
//
// No search library and no search service: the browser fetches this once, on the first
// search interaction, and filters it in memory.

import { buildSearchIndex } from '../data/search-index.js';

export function GET() {
  return new Response(JSON.stringify(buildSearchIndex()), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
