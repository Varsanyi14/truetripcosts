#!/usr/bin/env node
// Advisory only, never blocks. When a region's value or changed_date actually
// moves, this reminds whoever's reviewing the pull request where that
// country's hand-written prose might now disagree with the fact, since the
// CMS only edits the structured data, never the wording built around it.
//
// This is deliberately a pointer, not a checker. It does not try to detect
// whether the prose is actually stale, that needs a human reading it, it
// only makes sure the places worth a look are never forgotten. Confirmed by
// direct read: src/data/{country}.js carries at least two separate spots
// that cite these figures in free text, a "taxfree" guide section and a
// "tourist-tax" spoke with its own description, lede and glance cards, the
// same shape in Germany, Croatia, Czechia and Austria. A future country
// without a full spoke yet is handled: this only names what it can actually
// find in that file.

import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

const DIR = "src/data/facts/tax-regions";
const baseRef = process.env.BASE_REF;

if (!baseRef) {
  console.log("No BASE_REF provided, skipping prose-pointer check.");
  process.exit(0);
}

function changedJsonFiles() {
  try {
    const raw = execSync(`git diff --name-only ${baseRef} HEAD -- ${DIR}`, { encoding: "utf8" });
    return raw.split("\n").map((l) => l.trim()).filter((l) => l.startsWith(DIR + "/") && l.endsWith(".json"));
  } catch {
    return [];
  }
}

function loadAtRef(ref, filePath) {
  try {
    return JSON.parse(execSync(`git show ${ref}:${filePath}`, { encoding: "utf8" }));
  } catch {
    return null;
  }
}

function regionActuallyMoved(before, after) {
  const beforeRegions = new Map((before?.regions || []).map((r) => [r.key, r]));
  for (const r of after?.regions || []) {
    const b = beforeRegions.get(r.key);
    if (!b) return true; // a brand-new region is itself worth a prose look
    if (b.pct !== r.pct || b.rate !== r.rate) return true;
    if (b.provenance?.changed_date !== r.provenance?.changed_date) return true;
  }
  return false;
}

const files = changedJsonFiles();
if (files.length === 0) {
  console.log("No changed tax-regions JSON files. Nothing to point at.");
  process.exit(0);
}

let any = false;

for (const filePath of files) {
  const country = filePath.split("/").pop().replace(/\.json$/, "");
  const before = loadAtRef(baseRef, filePath);
  const after = loadAtRef("HEAD", filePath);
  if (!after || !regionActuallyMoved(before, after)) continue;

  const jsPath = `src/data/${country}.js`;
  if (!existsSync(jsPath)) continue;
  const src = readFileSync(jsPath, "utf8");

  const spots = [];
  if (/taxfree:\s*{/.test(src)) spots.push(`${jsPath}: the "taxfree" section's text field (the guide's "Taxes and refunds" paragraph)`);
  if (/slug:\s*"tourist-tax"/.test(src)) spots.push(`${jsPath}: the "tourist-tax" spoke, its description, lede and glance cards`);

  if (spots.length === 0) continue;

  any = true;
  console.log(`\n${filePath} changed a value or a changed_date. Worth a human look at:`);
  for (const s of spots) console.log(`  - ${s}`);
}

if (!any) {
  console.log("Changed facts, but no matching prose locations found to point at.");
}
console.log("\nThis is a reminder, not a verdict. It never fails the check.");
process.exit(0);
