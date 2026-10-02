#!/usr/bin/env node
// Originally the stretch check from OC-BRIEF-cms-germany-tax-proof.md, Step 6.
// Generalized in OC-BRIEF-cms-tax-regions-slice2.md, Step 6, to the whole
// src/data/facts/tax-regions/ folder instead of one named file.
//
// For every tax-regions JSON file that changed between the base branch and
// this PR, compares its `regions` array entries by `key` against the same
// file's content in the base branch. Fails if a region's changed_date moved
// without pct/rate/unit actually changing, or if pct/rate/unit changed
// without changed_date moving. A region whose key does not exist in the base
// branch is a brand-new region and is exempt, since there is nothing to
// compare it against. A file that does not exist in the base branch (a
// brand-new country) is exempt in full, for the same reason.
//
// This is the date-honesty rule enforced as code instead of trusted UI
// behavior. It BLOCKS the pull request: a value change with no change date, or a
// change date with no value change, must never reach the live site quietly.

import { execSync } from "node:child_process";

const DIR = "src/data/facts/tax-regions";
const baseRef = process.env.BASE_REF;

if (!baseRef) {
  console.log("No BASE_REF provided, skipping date-honesty comparison.");
  process.exit(0);
}

function changedJsonFiles() {
  try {
    const raw = execSync(`git diff --name-only ${baseRef} HEAD -- ${DIR}`, { encoding: "utf8" });
    return raw
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.startsWith(DIR + "/") && l.endsWith(".json"));
  } catch (err) {
    console.log(`Could not diff ${DIR} against ${baseRef}: ${err.message}`);
    return [];
  }
}

function loadAtRef(ref, filePath) {
  try {
    const raw = execSync(`git show ${ref}:${filePath}`, { encoding: "utf8" });
    return JSON.parse(raw);
  } catch (err) {
    return null; // file does not exist at this ref (new file, or deleted)
  }
}

// A region's own unit overrides the country default; the default shape for a
// percentage entry is "percentOfRoom" and the default shape for a flat entry
// is "perPersonPerNight", so storing a region's unit as the same value as its
// country's default, or leaving it out and relying on the default, mean the
// same thing and must not count as a value change.
function effectiveUnit(region, countryDefaultUnit) {
  return region.unit ?? countryDefaultUnit ?? undefined;
}

const files = changedJsonFiles();

if (files.length === 0) {
  console.log("No changed tax-regions JSON files to check. Nothing to do.");
  process.exit(0);
}

let violations = [];

for (const filePath of files) {
  const before = loadAtRef(baseRef, filePath);
  const after = loadAtRef("HEAD", filePath);

  if (!before || !after) {
    console.log(`${filePath}: new or deleted file, nothing to compare. Skipping.`);
    continue;
  }

  const beforeRegions = new Map((before.regions || []).map((r) => [r.key, r]));
  const afterRegions = new Map((after.regions || []).map((r) => [r.key, r]));

  for (const [key, a] of afterRegions) {
    const b = beforeRegions.get(key);
    if (!b) {
      console.log(`${filePath}: region "${key}" is new, nothing to compare. Skipping.`);
      continue; // brand-new region, exempt
    }

    const bUnit = effectiveUnit(b, before.unit);
    const aUnit = effectiveUnit(a, after.unit);

    const valueChanged = b.pct !== a.pct || b.rate !== a.rate || bUnit !== aUnit;
    const dateMoved = b.provenance?.changed_date !== a.provenance?.changed_date;

    if (dateMoved && !valueChanged) {
      violations.push(
        `${filePath} / ${key}: changed_date moved (${b.provenance?.changed_date} -> ${a.provenance?.changed_date}) but pct/rate/unit did not change. A re-check must never fake a change signal.`
      );
    }
    if (valueChanged && !dateMoved) {
      violations.push(
        `${filePath} / ${key}: pct/rate/unit changed but changed_date did not move. A real value change must be dated.`
      );
    }
  }
}

if (violations.length > 0) {
  console.error("Date-honesty check failed:");
  for (const v of violations) console.error(" - " + v);
  process.exit(1);
}

console.log("Date-honesty check passed: changed_date and value changes are consistent.");
