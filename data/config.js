// ═══════════════════════════════════════════════════════════
// NEXUS v5.19 — CONFIG
// ── THIS IS THE ONLY FILE THAT NEEDS UPDATING ON PATCH DAY ──
// Last verified: 2026-08-04
// Next review: 2026-08-07 (ZZZ Shiyu Defense rolls to the Aug 7-21 window).
//   Then 2026-08-12 (ZZZ Deadly Assault), 2026-08-17 (HSR MoC + WW ToA),
//   2026-08-19 (WW 3.5 patch end cluster + CZN FSO).
//
// Changes from 2026-07-29 verify (DATA-ONLY patch pass — the version bump
// to 5.19 in this release comes from the app.js banner fix, not from these
// date edits):
//   THREE CYCLES HAD EXPIRED. The freshness banner detected all three but
//   only ever displayed the first (see app.js v5.19 notes) — it read "HSR
//   Pure Fiction date expired" while WW and ZZZ were also expired and
//   unreported. The Jul 31 Deadly Assault roll flagged at the last pass was
//   missed as a result and sat expired for 5 days.
//   - hsr_pf: 2026-08-03 -> 2026-09-14. Phase 'Falsehood to Fact' ran
//     Jun 22 - Aug 3; phases last six weeks and reset Monday 04:00 server
//     time, so the new phase runs Aug 3 - Sep 14. CONFIRMED (Icy Veins +
//     Sportskeeda 4.4 schedule + Game8).
//   - ww_ww: 2026-08-03 -> 2026-08-31. The 3.5 Whimpering Wastes cycle runs
//     Aug 3 - Aug 31 on the standard 28-day cadence. CONFIRMED (Game8
//     states the Aug 31 reset explicitly; topuplive 3.5 guide agrees).
//   - zzz_deadly: 2026-07-30 -> 2026-08-12. Resets every two weeks on a
//     Friday; current stage window is Jul 29 - Aug 12. CONFIRMED (Icy
//     Veins; ZZZ Fandom confirms the two-week alternation with Shiyu).
//     NOTE the window opened Jul 29, not Jul 31 as estimated last pass —
//     the prior row was derived, this one is sourced.
//   - zzz_shiyu: unchanged at 2026-08-07 (rolls in 3 days, next review).
//   - czn (S4 -> 2026-10-06) and zzz (3.1 -> 2026-09-08) patch end dates
//     remain ESTIMATES; still no official announcement for either. The CZN
//     figure is derived from Season 3's 70-day length, the ZZZ figure from
//     the six-week cadence. RE-VERIFY when notes or a livestream land.
//   - hsr_moc / hsr_as / hsr_aa / ww_toa / ww_em / czn_fso / czn_boh and
//     all three events: confirmed unchanged, nothing expired or rolling.
//   - pulls / weeklyYields / resetTimes: unchanged. NOTE weeklyYields for
//     WW and ZZZ are still flagged as drifted in HANDOFF section 6 and feed
//     calcProjection; that audit is outstanding and is not part of this pass.
// Sources: Icy Veins, Game8, Sportskeeda, Fandom wikis, topuplive 3.5
//   guide - cross-checked 2026-08-04.
//
// Header trimmed to current pass only (prior verbose history dropped —
// full record lives in git and HANDOFF.md §21), per the header-bloat
// convention agreed 2026-07-29 but not yet fully enforced project-wide.
// ═══════════════════════════════════════════════════════════

const CONFIG = {
  version: '5.19',
  lastVerified: '2026-08-04',

  resetTimes: {
    hsr: { dailyUTC: 10, weeklyDay: 1, weeklyUTC: 10 },
    ww:  { dailyUTC: 20, weeklyDay: 1, weeklyUTC: 20 },
    zzz: { dailyUTC: 10, weeklyDay: 1, weeklyUTC: 10 },
    czn: { dailyUTC: 18, weeklyDay: 0, weeklyUTC: 18 },
  },

 patches: [
    // CZN: Season 4 "Shattered Light and Claw" (Galactic Disaster arc —
    // Hilde, Arabella, Olga) is LIVE as of Jul 28. End date is an
    // ESTIMATE (no official end announced) — see header.
    { game: 'czn', version: 'S4', label: 'SEASON 4 — SHATTERED LIGHT AND CLAW', ends: '2026-10-06', resetDay: 0 },
    // WW 3.5 "Blade of Past Resounds, Lingering Dream Hymns" — Jul 10–Aug 19.
    { game: 'ww',  version: '3.5', label: 'VER 3.5 — BLADE OF PAST RESOUNDS', ends: '2026-08-19', resetDay: 1 },
    // HSR 4.4 "In Ravages Does the Whistle Sound" — NA Jul 14 → Aug 25.
    { game: 'hsr', version: '4.4', label: 'VER 4.4 — IN RAVAGES DOES THE WHISTLE SOUND', ends: '2026-08-25', resetDay: 1 },
    // ZZZ 3.1 "The Long Goodbye" (2nd anniversary) — live Jul 29. End
    // date is an ESTIMATE (six-week cadence + 3.2 leaks) — see header.
    { game: 'zzz', version: '3.1', label: 'VER 3.1 — THE LONG GOODBYE', ends: '2026-09-08', resetDay: 1 },
  ],
  
  cycles: {
    // HSR v4.4 endgame calendar (per Sportskeeda 4.4 endgame article):
    // AA refreshed Jul 15 with the version (NOT Jul 13 as previously
    //   tracked) — runs to next version boundary Aug 25 (NA).
    // AS new cycle started Mon Jul 20 — next reset ~Aug 31 (6-week
    //   cadence Jun 8 → Jul 20 → Aug 31; Aug 31 is derived, mark EST).
    // PF cycle Jun 22 → Aug 3 — confirmed unchanged.
    // MoC cycle Jul 6 → Aug 17 — confirmed.
    hsr_moc:    { ends: '2026-08-17', type: 'date',   label: 'Memory of Chaos' },
    hsr_pf:     { ends: '2026-09-14', type: 'date',   label: 'Pure Fiction' },
    hsr_as:     { ends: '2026-08-31', type: 'date',   label: 'Apocalyptic Shadow' },
    hsr_aa:     { ends: '2026-08-25', type: 'date',   label: 'Anomaly Arbitration' },

    // WW v3.5 (Jul 10 – Aug 19)
    // ToA 28-day Monday cadence: May 25 → Jun 22 → Jul 20 (today) → Aug 17.
    //   ToA resets twice in 3.5 (Jul 20 + Aug 17) per pull-count guides.
    // WhiWa cycle Jul 6 → Aug 3 per Game8 3.5 guide.
    // Endstate Matrix assumed patch-tied (type carried over) → Aug 19.
    ww_toa:     { ends: '2026-08-17', type: 'date',   label: 'Tower of Adversity (all zones incl. Hazard Zone)' },
    ww_ww:      { ends: '2026-08-31', type: 'date',   label: 'Whimpering Wastes' },
    ww_em:      { ends: '2026-08-19', type: 'patch',  label: 'Endstate Matrix (v3.5 phase)' },
    ww_tg:      { ends: 'weekly',     type: 'weekly', label: 'Fantasies of Thousand Gateways' },

    // CZN — Season 4 live as of Jul 28.
    // BoH: revamped with S4 (3-pick Support Effect System, 8 floors not
    //   10). Tracks the patch-end estimate — see header for caveats.
    // FSO: explicit dates Jul 8 – Aug 19 (Judas / Colossus / Beginning of
    //   Desire) per Game8 Jul 8 patch notes — type 'date'.
    czn_boh:    { ends: '2026-10-06', type: 'patch',  label: 'Basin of Hyperspace' },
    czn_fso:    { ends: '2026-08-19', type: 'date',   label: 'Full-Scale Offensive' },
    czn_sortie: { ends: 'weekly',     type: 'weekly', label: 'Sortie Mode run' },

    // ZZZ v3.1 "The Long Goodbye" live Jul 29 (2nd anniversary).
    // Shiyu Critical: rotation Jul 24–Aug 7, tracks NEXT RESET date per
    //   this key's convention — confirmed via Game8's Shiyu tracker.
    // Deadly Assault: stages Jul 17–30, reset Fri Jul 31 (tracks LAST DAY
    //   per this key's convention). 3.1 adds Adversity Mode to DA
    //   (unlocks at 9 Trial Mode stars) — no schedule change to the
    //   existing rotation.
    zzz_shiyu:  { ends: '2026-08-07', type: 'date',   label: 'Shiyu Defense / Critical Node' },
    zzz_deadly: { ends: '2026-08-12', type: 'date',   label: 'Deadly Assault' },
    zzz_hollow: { ends: 'weekly',     type: 'weekly', label: 'Hollow Zero / Operation Matrix' },
  },

  events: [
    // HSR — Fate/stay night [UBW] Part 2. Banners (Rin Tohsaka, Gilgamesh)
    // open Jul 24, no fixed end, separate pity pool shared between the two.
    // Fate Contract: Renewal — free Archer OR Gilgamesh claim + mats to
    // Lv60, open Jul 24 → END OF v4.6. Ends date below is an ESTIMATE
    // (v4.6 end unannounced, ~mid-Nov by 6-week cadence) — RE-VERIFY at 4.5.
    { id: 'ev_hsr_fate2', game: 'hsr', tier: 'critical', name: 'Fate/stay night Pt 2 — Rin & Gilgamesh (opens Jul 24)', ends: '2026-11-17', desc: 'Banners open Jul 24, shared collab pity. Free Archer OR Gilgamesh claim until end of v4.6 (ends date estimated — verify at 4.5)', currency: { type: 'jade', amount: 0, note: 'Free Archer/Gilgamesh choice + Lv60 mats; Rin & Gilgamesh limited gacha, separate pity pool' } },
    // ZZZ 3.1 — 2nd anniversary, live now. Free CHOICE of a limited
    // S-Rank Agent + matching W-Engine, 1,600 Polychromes + 20 Signal
    // Searches via login. Remielle (first Lumiflux) full-version banner
    // Jul 29–Sep 8; Sigrid Aug 19–Sep 8 with Exclusive Rescreening rerun.
    { id: 'ev_zzz_31anniv', game: 'zzz', tier: 'critical', name: 'v3.1 2nd Anniversary', ends: '2026-09-08', desc: 'Free limited S-Rank Agent of choice + exclusive W-Engine, 1,600 Polychrome + 20 pulls. Remielle full-version; Sigrid from Aug 19', currency: { type: 'polychrome', amount: 1600, note: 'Login rewards; free limited S-Rank + W-Engine choice — do not miss' } },
    // WW 3.5 — headline events Virtual Crisis / Tacet Crisis. Individual
    // event windows not independently verified; tied to patch end.
    { id: 'ev_ww_35',     game: 'ww',  tier: 'standard', name: 'v3.5 Events — Virtual Crisis / Tacet Crisis', ends: '2026-08-19', desc: 'Headline 3.5 events (windows assumed patch-length — verify in-game). Electro Rover unlock via main quest', currency: { type: 'astrite', amount: 0, note: 'Event Astrite; Reverb Convene rerun banner has free pulls + rebate' } },
  ],

  pulls: {
    hsr: { currency: 'Stellar Jade', currencyShort: 'SJ',  perPull: 160, softPity: 74, hardPity: 90, worstCase: 180, has50_50: true, pityCarries: true, note: 'Soft pity ~74. Hard pity 90. Lose 50/50 = guaranteed next. Pity carries same-type banners.' },
    ww:  { currency: 'Astrite',      currencyShort: 'AST', perPull: 160, softPity: 62, hardPity: 80, worstCase: 160, has50_50: true, pityCarries: true, note: 'Soft pity ~62–65 (community verified). Hard pity 80. Lose 50/50 = guaranteed next.' },
    czn: { currency: 'Crystals',     currencyShort: 'CR',  perPull: 160, softPity: 58, hardPity: 70, worstCase: 140, has50_50: true, pityCarries: true, note: 'Combatant: 50/50, soft pity 58, hard 70. Partner banner: no 50/50, always featured at 70.' },
    zzz: { currency: 'Polychrome',   currencyShort: 'PC',  perPull: 160, softPity: 75, hardPity: 90, worstCase: 180, has50_50: true, pityCarries: true, note: 'Soft pity ~75. Hard pity 90. Lose 50/50 = guaranteed next.' },
  },

  weeklyYields: {
    hsr: { daily: 420, endgame: 800, weekly: 225, events: 0, note: '~645 SJ/week from daily+weekly tasks.' },
    ww:  { daily: 420, endgame: 800, weekly: 160, events: 0, note: '~580 Astrite/week.' },
    czn: { daily: 420, endgame: 0,   weekly: 200, events: 0, note: '~620 Crystals/week from dailies + Guild Office.' },
    zzz: { daily: 420, endgame: 335, weekly: 105, events: 0, note: '~775 PC/week F2P.' },
  },
};

if (typeof module !== 'undefined') module.exports = CONFIG;
