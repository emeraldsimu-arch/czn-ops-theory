// ═══════════════════════════════════════════════════════════
// NEXUS v5.17 — CONFIG
// ── THIS IS THE ONLY FILE THAT NEEDS UPDATING ON PATCH DAY ──
// Last verified: 2026-07-20
// Next review: 2026-07-24 (ZZZ Shiyu rolls to Aug 7 window — small edit)
//   ── then a BIG review 2026-07-28/29: CZN Season 4 launches Jul 28,
//      ZZZ 3.1 launches Jul 29, ZZZ Deadly Assault rolls ~Jul 31.
//      Combine into one Jul 28 pass if a 4-day-stale Shiyu row is acceptable.
//      DECIDED 2026-07-25: combining. The Jul 24 Shiyu row is deliberately
//      left stale until Jul 28 — the ⚠ banner correctly reports this.
//
// ── OUT-OF-BAND EDIT 2026-07-25 (version metadata only, NO date changes) ──
//   The v5.16 code (Local Archive Backup, recordCycleClear, totalTasks-
//   Completed delta accumulator) shipped Jul 22-23 but CONFIG.version was
//   never bumped, so the logo rendered "v5.15" on a v5.16 build. Corrected:
//     - version: '5.15' → '5.16'
//     - header title: v5.15 → v5.16
//   lastVerified, patches, cycles, events, pulls, weeklyYields and
//   resetTimes are ALL UNCHANGED. This was not a patch pass.
//
// ── VERSION BUMP 2026-07-26: '5.16' → '5.17' for the app.js backup fixes
//   (import format guard, local-date export filename). Again NO date or
//   game-data changes. The Jul 28 patch pass is still outstanding.
//
// Changes from 2026-06-29 verify:
//   - version: 5.14 → 5.15 (assumes full v5.15 release ships as one commit
//     set; revert to '5.14' if pushing config ahead of the rest)
//   - czn patch: Season 3 (ended Jul 8) → interim row counting down to
//     Season 4 "Shattered Light and Claw", launches 2026-07-28 (official
//     press release; one outlet said Jul 29 — KST discrepancy, Jul 28 stands)
//   - ww patch: 3.4 → 3.5 (live Jul 10, ends Aug 19 per Game8)
//   - hsr patch: 4.3 → 4.4 (NA flip Jul 14 20:00 PST, ends Aug 25 NA-side /
//     Aug 26 global — six-week cycle restored after 4.3's odd schedule)
//   - zzz patch: 3.0 ends 2026-07-28 — CONFIRMED UNCHANGED (3.1 Jul 29,
//     "The Long Goodbye" 2nd anniversary, per official announcement)
//   - hsr_moc: 2026-07-06 → 2026-08-17 (cycle Jul 6–Aug 17 per Sportskeeda 4.4)
//   - hsr_pf: 2026-08-03 — CONFIRMED UNCHANGED (cycle Jun 22–Aug 3)
//   - hsr_as: 2026-07-20 → 2026-08-31 EST (new cycle started today Jul 20;
//     next reset derived from 6-week cadence, not yet officially published)
//   - hsr_aa: 2026-07-13 → 2026-08-25 (AA refreshed WITH v4.4 on Jul 15 per
//     Sportskeeda — not Jul 13 as previously tracked; runs to next version)
//   - ww_toa: 2026-07-20 → 2026-08-17 (new cycle started today Jul 20;
//     28-day Monday cadence May 25 → Jun 22 → Jul 20 → Aug 17)
//   - ww_ww: 2026-07-06 → 2026-08-03 (reset Aug 3 per Game8 3.5 WhiWa guide)
//   - ww_em: 2026-07-09 → 2026-08-19 (patch-tied; follows 3.5 window —
//     ASSUMED from type, not independently verified this pass)
//   - czn_boh: 2026-07-08 → 2026-07-28 UNVERIFIED — interim status of Basin
//     of Hyperspace not covered by sources; confirm in-game, likely
//     refreshes with Season 4
//   - czn_fso: type patch → date. Full-Scale Offensive now has explicit
//     dates: Jul 8 – Aug 19 (bosses Judas, Colossus, Beginning of Desire,
//     per Game8 Jul 8 patch notes)
//   - zzz_shiyu: 2026-07-10 → 2026-07-24 (biweekly Friday; current rotation
//     Jul 10–24, next Jul 24–Aug 7 per nanoka.cc rotation data)
//   - zzz_deadly: 2026-07-02 → 2026-07-30 (current stages Jul 17–30 per
//     Icy Veins; reset Friday Jul 31)
//   - events: removed ev_ww_cyber (ended Jul 9) and ev_czn_s3 (ended Jul 8).
//     ev_hsr_fate2 rewritten — collab banners + free Archer/Gilgamesh claim
//     open Jul 24, claim window runs to END OF v4.6; ends date 2026-11-17 is
//     an ESTIMATE (4.6 end not announced) — re-verify at 4.5 launch.
//     ev_zzz_30 confirmed unchanged (ends Jul 28). Added ev_zzz_31anniv
//     (free limited S-Rank + W-Engine — critical) and ev_ww_35 (Virtual
//     Crisis / Tacet Crisis, dates tied to patch end, not independently
//     verified). CZN Season 4 launch countdown is carried by the patches
//     row, not duplicated as an event; add S4 seasonal event entries at the
//     Jul 28 review once dates are known.
//   - notion block REMOVED — Notion sync deprecated and stripped from
//     app.js in the same v5.15 release; nothing references these IDs.
//     (Values preserved in git history if ever needed.)
//   - pulls / weeklyYields / resetTimes: unchanged
// Sources: official press releases (Smilegate, HoYoverse), Game8, Icy Veins,
//   Sportskeeda, nanoka.cc, u7buy banner schedules — cross-checked Jul 20.
// ═══════════════════════════════════════════════════════════

const CONFIG = {
  version: '5.17',
  lastVerified: '2026-07-20',

  resetTimes: {
    hsr: { dailyUTC: 10, weeklyDay: 1, weeklyUTC: 10 },
    ww:  { dailyUTC: 20, weeklyDay: 1, weeklyUTC: 20 },
    zzz: { dailyUTC: 10, weeklyDay: 1, weeklyUTC: 10 },
    czn: { dailyUTC: 18, weeklyDay: 0, weeklyUTC: 18 },
  },

 patches: [
    // CZN: Season 3 ended at Jul 8 maintenance; Season 4 "Shattered Light
    // and Claw" (Galactic Disaster arc — Hilde, Arabella, Olga) lands Jul 28.
    // This row counts down the interim to S4 launch.
    { game: 'czn', version: 'Pre-S4', label: 'SEASON 4 INCOMING — SHATTERED LIGHT AND CLAW', ends: '2026-07-28', resetDay: 0 },
    // WW 3.5 "Blade of Past Resounds, Lingering Dream Hymns" — Jul 10–Aug 19.
    { game: 'ww',  version: '3.5', label: 'VER 3.5 — BLADE OF PAST RESOUNDS', ends: '2026-08-19', resetDay: 1 },
    // HSR 4.4 "In Ravages Does the Whistle Sound" — NA Jul 14 → Aug 25.
    { game: 'hsr', version: '4.4', label: 'VER 4.4 — IN RAVAGES DOES THE WHISTLE SOUND', ends: '2026-08-25', resetDay: 1 },
    // ZZZ 3.0 "A Sleepwalker's Confession" — Jun 17 → Jul 28.
    { game: 'zzz', version: '3.0', label: "VER 3.0 — A SLEEPWALKER'S CONFESSION", ends: '2026-07-28', resetDay: 1 },
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
    hsr_pf:     { ends: '2026-08-03', type: 'date',   label: 'Pure Fiction' },
    hsr_as:     { ends: '2026-08-31', type: 'date',   label: 'Apocalyptic Shadow' },
    hsr_aa:     { ends: '2026-08-25', type: 'date',   label: 'Anomaly Arbitration' },

    // WW v3.5 (Jul 10 – Aug 19)
    // ToA 28-day Monday cadence: May 25 → Jun 22 → Jul 20 (today) → Aug 17.
    //   ToA resets twice in 3.5 (Jul 20 + Aug 17) per pull-count guides.
    // WhiWa cycle Jul 6 → Aug 3 per Game8 3.5 guide.
    // Endstate Matrix assumed patch-tied (type carried over) → Aug 19.
    ww_toa:     { ends: '2026-08-17', type: 'date',   label: 'Tower of Adversity (all zones incl. Hazard Zone)' },
    ww_ww:      { ends: '2026-08-03', type: 'date',   label: 'Whimpering Wastes' },
    ww_em:      { ends: '2026-08-19', type: 'patch',  label: 'Endstate Matrix (v3.5 phase)' },
    ww_tg:      { ends: 'weekly',     type: 'weekly', label: 'Fantasies of Thousand Gateways' },

    // CZN — interim window (S3 ended Jul 8, S4 lands Jul 28)
    // BoH: interim status UNVERIFIED — confirm in-game; tied to S4 boundary.
    // FSO: explicit dates Jul 8 – Aug 19 (Judas / Colossus / Beginning of
    //   Desire) per Game8 Jul 8 patch notes — now type 'date'.
    czn_boh:    { ends: '2026-07-28', type: 'patch',  label: 'Basin of Hyperspace' },
    czn_fso:    { ends: '2026-08-19', type: 'date',   label: 'Full-Scale Offensive' },
    czn_sortie: { ends: 'weekly',     type: 'weekly', label: 'Sortie Mode run' },

    // ZZZ v3.0 (Jun 17 – Jul 28), v3.1 launches Jul 29
    // Shiyu Critical: rotation Jul 10–24, next Jul 24–Aug 7 (tracks NEXT
    //   RESET date per this key's convention).
    // Deadly Assault: stages Jul 17–30, reset Fri Jul 31 (tracks LAST DAY
    //   per this key's convention). 3.1 adds Adversity Mode to DA — watch
    //   for schedule changes at the Jul 28 review.
    zzz_shiyu:  { ends: '2026-07-24', type: 'date',   label: 'Shiyu Defense / Critical Node' },
    zzz_deadly: { ends: '2026-07-30', type: 'date',   label: 'Deadly Assault' },
    zzz_hollow: { ends: 'weekly',     type: 'weekly', label: 'Hollow Zero / Operation Matrix' },
  },

  events: [
    // HSR — Fate/stay night [UBW] Part 2. Banners (Rin Tohsaka, Gilgamesh)
    // open Jul 24, no fixed end, separate pity pool shared between the two.
    // Fate Contract: Renewal — free Archer OR Gilgamesh claim + mats to
    // Lv60, open Jul 24 → END OF v4.6. Ends date below is an ESTIMATE
    // (v4.6 end unannounced, ~mid-Nov by 6-week cadence) — RE-VERIFY at 4.5.
    { id: 'ev_hsr_fate2', game: 'hsr', tier: 'critical', name: 'Fate/stay night Pt 2 — Rin & Gilgamesh (opens Jul 24)', ends: '2026-11-17', desc: 'Banners open Jul 24, shared collab pity. Free Archer OR Gilgamesh claim until end of v4.6 (ends date estimated — verify at 4.5)', currency: { type: 'jade', amount: 0, note: 'Free Archer/Gilgamesh choice + Lv60 mats; Rin & Gilgamesh limited gacha, separate pity pool' } },
    // ZZZ 3.0 — ends with patch Jul 28. Confirmed unchanged.
    { id: 'ev_zzz_30',    game: 'zzz', tier: 'standard', name: 'v3.0 A Sleepwalker\'s Confession',    ends: '2026-07-28', desc: 'Season 3 launch events — Roscaelifer area, free Pyrois story unlock', currency: { type: 'polychrome', amount: 0, note: 'Event Polychrome + free Pyrois (story character)' } },
    // ZZZ 3.1 — 2nd anniversary, launches Jul 29. Free CHOICE of a limited
    // S-Rank Agent + matching W-Engine, 1,600 Polychromes + 20 Signal
    // Searches via login. Remielle (first Lumiflux) full-version banner
    // Jul 29–Sep 8; Sigrid Aug 19–Sep 8 with Exclusive Rescreening rerun.
    { id: 'ev_zzz_31anniv', game: 'zzz', tier: 'critical', name: 'v3.1 2nd Anniversary (launches Jul 29)', ends: '2026-09-08', desc: 'Free limited S-Rank Agent of choice + exclusive W-Engine, 1,600 Polychrome + 20 pulls. Remielle full-version; Sigrid from Aug 19', currency: { type: 'polychrome', amount: 1600, note: 'Login rewards; free limited S-Rank + W-Engine choice — do not miss' } },
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
