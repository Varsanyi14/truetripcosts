// US State Department travel advisories, single source of truth.
//
// Any country slug present in BY_SLUG renders the AdvisoryNotice block on its guide
// page. There is no per-guide component work: add a slug here and the block appears,
// remove it and the block disappears everywhere at once.
//
// This is treated the same as entry rules and taxes under AUTHORING-GUIDES.md: it is a
// real-consequence fact for a US traveler, so the link must be the official State
// Department page for that country, and `checked` gets bumped whenever the position is
// re-verified. It is not a safety opinion and it is not a recommendation. It reports
// the level the US government has set and what that level does to the money.
//
// When the Gulf position changes, edit GULF_2026 once and every country in the map
// updates. If a single country moves off the shared level, give it its own object.

export const GULF_2026 = {
  level: "Level 3",
  label: "Reconsider Travel",
  checked: "Aug 2026",
  checkedISO: "2026-08-02",
  body:
    "The US State Department currently rates {name} <b>Level 3, Reconsider Travel</b>. " +
    "The advisory cites the hostilities between the United States and Iran that began on " +
    "February 28, 2026, an ongoing threat of drone and missile attacks, and significant " +
    "disruption to commercial flights. That is the US government's assessment, published on " +
    "the page linked below, and what to do with it is your call.",
  money:
    "It changes the money side whether or not it changes your plans. Travel insurance bought " +
    "after an advisory is already public will generally not pay out for cancelling because of " +
    "that advisory, so the cover that actually helps here is a <b>refundable rate</b>, the " +
    "airline's own rebooking policy, or a <b>cancel for any reason</b> upgrade if your policy " +
    "sells one. Gulf airports are open but have closed at short notice, and US carriers have " +
    "suspended some nonstop routes into the region. Confirm your flight is still operating " +
    "before you pay for anything non-refundable, and keep the booking flexible if you can.",
};

const BY_SLUG = {
  oman: {
    ...GULF_2026,
    url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Oman.html",
    note:
      "The ordered departure of non-emergency US government staff and their families from Oman " +
      "was dated March 13, 2026.",
  },
  qatar: {
    ...GULF_2026,
    url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Qatar.html",
    note:
      "Qatar's ordered departure was dated March 2, 2026, and the US Embassy in Doha has " +
      "suspended routine consular services, so replacing a lost passport in country is not the " +
      "routine errand it normally is.",
  },
  bahrain: {
    ...GULF_2026,
    url: "https://bh.usembassy.gov/travel-advisory-bahrain-march-2026/",
    note:
      "Bahrain's ordered departure was dated March 2, 2026, and the FAA has issued a Special " +
      "Federal Aviation Regulation and a NOTAM covering civil aviation in and near Bahrain, " +
      "which is the concrete reason flights into Bahrain have been disrupted rather than a " +
      "general caution.",
  },
  "saudi-arabia": {
    ...GULF_2026,
    url: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html",
    note:
      "This link goes to the State Department's advisory index rather than a country page, " +
      "because we could not verify a stable Saudi-specific URL at this check. Select Saudi " +
      "Arabia from the list for the current wording.",
  },
  uae: {
    ...GULF_2026,
    url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/UnitedArabEmirates.html",
  },
};

export const advisoryFor = (slug) => BY_SLUG[slug] || null;
