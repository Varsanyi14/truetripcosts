// Schengen membership and the shared EES / ETIAS border status.
//
// WHY THIS FILE EXISTS: the EES and ETIAS position is one fact that applies to every
// Schengen guide, and it moves. When it lived as hand-written copy inside individual
// country files it went stale in some and was missing from most: in July 2026 the EU
// withdrew its late-2026 ETIAS target while four guides still asserted it, and the EES
// paragraph existed in only three of the seventeen Schengen guides. This file is now the
// only place that status is written. Edit here and all seventeen guides update together.
//
// WHEN ETIAS GETS A REAL DATE: update `etias` below and bump `checked` / `checkedISO`.
// That is the whole job. Do not re-add launch-date copy to country files.
// The EU removed the launch date from its official ETIAS pages in July 2026 and now says
// only that it will announce one several months ahead, so the wording here is deliberately
// date-free rather than substituting a guess like 2027, which can move again.
//
// The wider explainer lives on /passports-and-visas, which this notice links to.

// The Schengen area as it applies to the countries we cover. Ireland is an EU member but
// opted out, so it is deliberately absent; the UK and Georgia are outside both. Bulgaria
// and Romania are Schengen members but have no guide yet, so they are not listed.
export const schengen = [
  "austria",
  "croatia",
  "czechia",
  "denmark",
  "france",
  "germany",
  "greece",
  "hungary",
  "iceland",
  "italy",
  "netherlands",
  "norway",
  "poland",
  "portugal",
  "spain",
  "sweden",
  "switzerland",
];

export const isSchengen = (slug) => schengen.includes(slug);

// The status shown on every Schengen guide. Keep each field to one or two sentences: this
// renders on 17 country pages and is a summary, not the explainer.
export const borderStatus = {
  checked: "Jul 2026",
  checkedISO: "2026-07-31",

  // EES: fully operational since 10 April 2026 after a phased rollout from October 2025.
  ees: "Since <b>April 2026</b> the EU's <b>Entry/Exit System (EES)</b> has been live at Schengen borders. Instead of a passport stamp you give a quick <b>fingerprint and photo</b> on arrival, and the system then tracks your 90 days automatically. There is <b>no fee, no form and nothing to apply for</b>.",

  // The live practical story for summer 2026, and the part almost nobody covers well.
  queues: "The catch is time, not money: several major airports have run <b>peak queues of two to five hours</b> through the summer, and some countries are using EU-permitted pauses to ease them. Build in a buffer on arrival, especially on a tight connection.",

  // Deliberately date-free. See the note at the top of this file before editing.
  etias: "<b>ETIAS</b>, the separate online authorization, is <b>not running and has no launch date</b>. The EU removed its late-2026 target in July 2026 and says it will announce a real date several months ahead, so any site selling you an ETIAS today is selling something that does not exist yet. For now a <b>US passport is all you need</b>.",
};
