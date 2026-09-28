#!/usr/bin/env node
// Stretch check from OC-BRIEF-cms-germany-tax-proof.md, Step 6.
// Compares this PR's version of germany-tax-regions.json against the base
// branch's version. Fails if changed_date moved without pct/rate actually
// changing, or if pct/rate changed without changed_date moving.
//
// This is the date-honesty rule enforced as code instead of trusted UI
// behavior. It BLOCKS the pull request: a value change with no change date, or a
// change date with no value change, must never reach the live site quietly.

import { execSync } from "node:child_process";

const FILE_PATH = "src/data/facts/germany-tax-regions.json";
const baseRef = process.env.BASE_REF;

if (!baseRef) {
  console.log("No BASE_REF provided, skipping date-honesty comparison.");
  process.exit(0);
}

function loadAtRef(ref) {
  try {
    const raw = execSync(`git show ${ref}:${FILE_PATH}`, { encoding: "utf8" });
    return JSON.parse(raw);
  } catch (err) {
    console.log(`Could not read ${FILE_PATH} at ${ref} (new file?). Skipping comparison.`);
    return null;
  }
}

const before = loadAtRef(baseRef);
const after = loadAtRef("HEAD");

if (!before || !after) {
  process.exit(0);
}

let violations = [];

for (const key of Object.keys(after)) {
  const b = before[key];
  const a = after[key];
  if (!b) continue; // new region, nothing to compare

  // "percentOfRoom" is the default shape for a percentage entry, so storing it or
  // leaving it out means the same thing and must not count as a value change.
  const unitOf = (r) => (r.unit === "percentOfRoom" ? undefined : r.unit);
  const valueChanged = b.pct !== a.pct || b.rate !== a.rate || unitOf(b) !== unitOf(a);
  const dateMoved = b.provenance?.changed_date !== a.provenance?.changed_date;

  if (dateMoved && !valueChanged) {
    violations.push(
      `${key}: changed_date moved (${b.provenance?.changed_date} -> ${a.provenance?.changed_date}) but pct/rate/unit did not change. A re-check must never fake a change signal.`
    );
  }
  if (valueChanged && !dateMoved) {
    violations.push(
      `${key}: pct/rate/unit changed but changed_date did not move. A real value change must be dated.`
    );
  }
}

if (violations.length > 0) {
  console.error("Date-honesty check failed:");
  for (const v of violations) console.error(" - " + v);
  process.exit(1);
}

console.log("Date-honesty check passed: changed_date and value changes are consistent.");
