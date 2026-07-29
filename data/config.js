// ═══════════════════════════════════════════════════════════
// NEXUS v5.17 — CONFIG
// ── THIS IS THE ONLY FILE THAT NEEDS UPDATING ON PATCH DAY ──
// Last verified: 2026-07-29
// Next review: 2026-07-31 (ZZZ Deadly Assault rolls to the Jul 31–Aug 14
//   window). After that, next natural checkpoint is ~2026-08-03/17/19
//   (HSR PF, WW ToA/WhiWa, CZN FSO / WW patch end cluster).
//
// Changes from 2026-07-20 verify (this is a DATA-ONLY patch pass — no
// version bump, no CACHE_NAME bump, per the release checklist):
//   - czn patch: interim 'Pre-S4' row → Season 4 "Shattered Light and
//     Claw" is LIVE. Official press (Smilegate/Super Creative) says
//     Jul 28; Game8's server-status page shows the maintenance window
//     as Jul 29 00:00–05:00 UTC — same KST/UTC framing gap noted last
//     pass. Treating Jul 28 as the effective start, consistent with
//     the prior pass's call. New combatants Hilde/Arabella/Olga —
//     recruitment banner order not yet announced.
//   - czn patch end: 2026-07-28 → 2026-10-06 ESTIMATED. No official S4
//     end date exists yet. Derived from Season 3's length (Apr 29 →
//     Jul 8 = 70 days) applied to the Jul 28 S4 start. RE-VERIFY when
//     S4 patch notes or an S5 tease land — do not treat as confirmed.
//   - czn_boh: 2026-07-28 → 2026-10-06 (tracks the patch-end estimate
//     above, type 'patch'). UNVERIFIED flag is now RESOLVED — S4 patch
//     notes confirm a full revamp: 3-pick Support Effect System, mode
//     cut from 10 floors to 8, harder/richer final floor.
//   - zzz patch: 3.0 → 3.1 "The Long Goodbye" 2nd anniversary, live
//     Jul 29 (today) per Sportskeeda/Game8/Fandom patch notes. Adds
//     Adversity Mode to Deadly Assault (unlocks at 9 Trial Mode stars).
//   - zzz patch end: 2026-07-28 → 2026-09-08 ESTIMATED. 3.2 has no
//     official date; leaks (Claret/Roxy) plus the standard six-week
//     cadence point to a ~Sep 9 launch. RE-VERIFY at the live-stream.
//   - zzz_shiyu: 2026-07-24 → 2026-08-07 (rotation rolled forward one
//     cycle; Aug 7 reset confirmed per Game8's Shiyu tracker)
//   - zzz_deadly: unchanged at 2026-07-30 — current stage window
//     (Jul 17–30) still valid; rolls at the Jul 31 review, not this one.
//   - events: removed ev_zzz_30 (ZZZ v3.0 ended with the patch).
//     ev_zzz_31anniv label trimmed — anniversary is live now, not
//     upcoming; dates/rewards unchanged and confirmed accurate
//     (Remielle full-patch, Sigrid from Aug 19, both to Sep 8).
//     ev_hsr_fate2 and ev_ww_35 confirmed unchanged, no edits.
//   - ww / hsr: no changes — all cycle end dates (Aug 3/17/19/25/31)
//     are still in the future; nothing expired or rolling this pass.
//   - pulls / weeklyYields / resetTimes: unchanged.
// Sources: official press (Smilegate/Super Creative, HoYoverse), Game8,
//   Icy Veins, Sportskeeda, Fandom wikis — cross-checked 2026-07-29.
//
// Header trimmed to current pass only (prior verbose history dropped —
// full record lives in git and HANDOFF.md §21), per the header-bloat
// convention agreed 2026-07-29 but not yet fully enforced project-wide.
// ═══════════════════════════════════════════════════════════

const CONFIG = {
  version: '5.17',
  lastVerified: '2026-07-29',

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
