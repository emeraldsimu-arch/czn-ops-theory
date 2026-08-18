// ═══════════════════════════════════════════════════════════
// NEXUS v5.19 — CONFIG
// ── THIS IS THE ONLY FILE THAT NEEDS UPDATING ON PATCH DAY ──
// Last verified: 2026-08-18
// Next review: 2026-08-19 (TOMORROW — WW 3.6 lands in the Americas, CZN
//   Stella Market + free Rei outfit drop, CZN Full-Scale Offensive ends).
//   Then 2026-08-21 (ZZZ Shiyu), 2026-08-25 (HSR 4.5 NA + HSR AA),
//   2026-08-26 (ZZZ Deadly Assault), 2026-08-31 (WW WhiWa + HSR AS).
//
// Changes from 2026-08-04 verify — DATA-ONLY pass, no version bump.
//   ** The 2026-08-04 pass was itself run against the wrong date and was
//   two weeks stale on arrival. FOUR cycles had expired by the time it was
//   caught. Anchor every future pass to the real current date first. **
//
//   EXPIRED, now rolled:
//   - hsr_moc: 2026-08-17 -> 2026-09-28. Memory Turbulence "Stormcleanse"
//     runs Aug 17 - Sep 28. CONFIRMED (Icy Veins; Sportskeeda 4.4 schedule
//     independently gives the Aug 17 reset).
//   - ww_toa: 2026-08-17 -> 2026-09-14. Hazard Zone reset Aug 17, 28-day
//     rotation. CONFIRMED (Game8). Cadence holds: May 25 / Jun 22 / Jul 20
//     / Aug 17 / Sep 14. NOTE one secondary source claimed an Aug 27 end —
//     that breaks the 28-day cadence and is disregarded as sloppy.
//   - zzz_shiyu: 2026-08-07 -> 2026-08-21. DERIVED from the confirmed
//     two-week alternation with Deadly Assault. Specific window not
//     independently published — verify in-game.
//   - zzz_deadly: 2026-08-12 -> 2026-08-26. Prior window Jul 29 - Aug 12
//     CONFIRMED (Icy Veins); this one DERIVED from the two-week cadence.
//     Verify in-game.
//
//   PATCH:
//   - ww: 3.5 -> 3.6 "Lamplight in Mirage, Sword's Resolve in Heart".
//     Live Aug 20 11:00 UTC+8; the Americas receive it Aug 19. End date
//     2026-09-29 is an ESTIMATE from the ~40-day 3.5 cadence (Jul 10 -
//     Aug 19). RE-VERIFY when Kuro publishes the 3.7 schedule.
//   - hsr: 4.4 / Aug 25 UNCHANGED and still correct — 4.5 "To Roll the
//     Stars in Astropolis" launches Aug 25 NA / Aug 26 global. NOTE 4.5 is
//     a FIVE-week patch, not six (Game8), so it should end ~Sep 29. Roll
//     the patch row at the Aug 25 review.
//   - zzz: 3.1 / Sep 8 UNCHANGED — now CORROBORATED rather than estimated.
//     3.2 is dated Sep 9 (Game8) and 3.1 runs its standard 42 days.
//   - czn: S4 / Oct 6 unchanged, still an ESTIMATE. New signal: the Beach
//     Cafe Festival is a 9-week event ending Sep 30, which hints the season
//     may close nearer Sep 30 than Oct 6. Not enough to move it — re-verify.
//
//   EVENTS — rebuilt this pass; CZN previously had NO event rows at all.
//   - ADDED ev_czn_beach: Beach Cafe Festival, through Sep 30. CONFIRMED
//     (Smilegate press). 9 weeks, objectives refresh every 3 weeks.
//   - ADDED ev_czn_rerun: Chizuru & Itsuku reruns, Aug 8 - Sep 1.
//     CONFIRMED (Game8). Separate pity from the Hilde/Eunie banners.
//   - ADDED ev_hsr_45: Overdrive: Whirlwind Grand Prix, opens with 4.5.
//     Minuscule Great Adventure follows in Phase 2 from Sep 12.
//   - REPLACED ev_ww_35 (expired Aug 19) with ev_ww_36. The six 3.6 events
//     are confirmed BY NAME but their individual windows are unpublished,
//     so the row is patch-tied and inherits that estimate. Verify in-game.
//   - REVISED ev_hsr_fate2: 2026-11-17 -> 2026-11-10. The old figure assumed
//     a six-week 4.5; it is five. Still an ESTIMATE pending 4.6.
//   - ev_zzz_31anniv: dates unchanged and re-confirmed. Description now
//     notes the two login giveaways (20 Encrypted Master Tapes + 10 Boopons
//     total) and that Sigrid's banner opens Aug 19.
//
//   NOT YET IN CONFIG — confirmed to exist, no firm end dates published.
//   Add once visible in-game rather than guessing:
//     CZN Stella Market (starts Aug 19, 3-day news/prediction cycles),
//     CZN "Following the Fox's Footsteps" (Hilde event, Crystals + Prism
//     Lenses), CZN Season 4 Check-in, free Rei outfit "Exciting Summer
//     Vacation" (Aug 19 one-off distribution, not a tracked window).
//
//   - pulls / weeklyYields / resetTimes: unchanged. weeklyYields drift for
//     WW and ZZZ (HANDOFF section 6) remains OUTSTANDING and still feeds
//     calcProjection.
// Sources: Smilegate/Super Creative press, HoYoverse, Kuro Games
//   maintenance notice, Game8, Icy Veins, Sportskeeda, RPG Site, Fandom —
//   cross-checked 2026-08-18.
// ═══════════════════════════════════════════════════════════

const CONFIG = {
  version: '5.19',
  lastVerified: '2026-08-18',

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
    { game: 'ww',  version: '3.6', label: 'VER 3.6 — LAMPLIGHT IN MIRAGE', ends: '2026-09-29', resetDay: 1 },
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
    hsr_moc:    { ends: '2026-09-28', type: 'date',   label: 'Memory of Chaos' },
    hsr_pf:     { ends: '2026-09-14', type: 'date',   label: 'Pure Fiction' },
    hsr_as:     { ends: '2026-08-31', type: 'date',   label: 'Apocalyptic Shadow' },
    hsr_aa:     { ends: '2026-08-25', type: 'date',   label: 'Anomaly Arbitration' },

    // WW v3.5 (Jul 10 – Aug 19)
    // ToA 28-day Monday cadence: May 25 → Jun 22 → Jul 20 (today) → Aug 17.
    //   ToA resets twice in 3.5 (Jul 20 + Aug 17) per pull-count guides.
    // WhiWa cycle Jul 6 → Aug 3 per Game8 3.5 guide.
    // Endstate Matrix assumed patch-tied (type carried over) → Aug 19.
    ww_toa:     { ends: '2026-09-14', type: 'date',   label: 'Tower of Adversity (all zones incl. Hazard Zone)' },
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
    zzz_shiyu:  { ends: '2026-08-21', type: 'date',   label: 'Shiyu Defense / Critical Node' },
    zzz_deadly: { ends: '2026-08-26', type: 'date',   label: 'Deadly Assault' },
    zzz_hollow: { ends: 'weekly',     type: 'weekly', label: 'Hollow Zero / Operation Matrix' },
  },

  events: [
    // ── CZN ── Season 4 "Shattered Light and Claw", live since Jul 28/29.
    // Beach Cafe Festival: 9-week seasonal event, CONFIRMED to run through
    // Sep 30 (Smilegate press). Mission objectives refresh every 3 weeks;
    // earns "Midsummer Night Memories" -> Save Data background, Rei outfit,
    // stickers, plus an exclusive summer story.
    { id: 'ev_czn_beach',  game: 'czn', tier: 'standard', name: 'Beach Cafe Festival', ends: '2026-09-30', desc: 'S4 seasonal event, 9 weeks. New mission objectives every 3 weeks — earns Midsummer Night Memories for Save Data background, Rei outfit and stickers', currency: { type: 'crystal', amount: 0, note: 'Mission rewards + exchange shop; new objectives every 3 weeks — do not let them stack up' } },
    // Chizuru / Itsuku rerun banners, Aug 8 - Sep 1 CONFIRMED (Game8).
    // These do NOT share acquisition count with the Hilde/Eunie banners.
    { id: 'ev_czn_rerun',  game: 'czn', tier: 'standard', name: 'Chizuru & Itsuku Rerun Banners', ends: '2026-09-01', desc: 'Rerun banners. NOTE: separate acquisition count from the Hilde/Eunie banners — pity does not carry between them', currency: { type: 'crystal', amount: 0, note: 'Separate pity pool from Hilde/Eunie — budget accordingly' } },

    // ── WW ── v3.6 "Lamplight in Mirage, Sword's Resolve in Heart".
    // Americas gets it Aug 19, most other regions Aug 20 (Kuro maintenance
    // notice). Event roster CONFIRMED by name; individual event windows are
    // NOT yet published, so this row is tied to the patch end, which is
    // itself an ESTIMATE from the ~40-day 3.5 cadence. RE-VERIFY once the
    // in-game event timers are visible.
    { id: 'ev_ww_36',      game: 'ww',  tier: 'standard', name: 'v3.6 Events — Resonance Sim Realm / Coded Deception', ends: '2026-09-29', desc: 'Resonance Sim Realm, Second Coming of Solaris: Coded Deception, If Dreams Still Reverberate, The Strings Remember, Wuthering Exploration, Gifts of Drifting Mist (individual windows unpublished — verify in-game)', currency: { type: 'astrite', amount: 0, note: 'Patch-length assumption; confirm individual event end dates in-game' } },

    // ── HSR ── v4.5 "To Roll the Stars in Astropolis": NA Aug 25, global
    // Aug 26. CONFIRMED 5 weeks, not the usual 6 (Game8) -> ends ~Sep 29.
    // Flagship event Overdrive: Whirlwind Grand Prix launches with the
    // patch; Minuscule Great Adventure arrives with Phase 2 on Sep 12.
    { id: 'ev_hsr_45',     game: 'hsr', tier: 'standard', name: 'v4.5 Overdrive: Whirlwind Grand Prix (opens Aug 25)', ends: '2026-09-29', desc: 'Flagship 4.5 event, launches with the patch. Rewards the A Race to the Horizon 4-star Light Cone. Minuscule Great Adventure follows in Phase 2 from Sep 12', currency: { type: 'jade', amount: 0, note: '7-day login after 4.5 goes live grants 10x Special Star Rail Pass' } },
    // Fate/stay night [UBW] Part 2. Free Archer OR Gilgamesh claim runs to
    // END OF v4.6. Ends date REVISED 2026-11-17 -> 2026-11-10: 4.5 is a
    // 5-week patch (Aug 25 - ~Sep 29), so a standard 6-week 4.6 lands ~Nov
    // 10. STILL AN ESTIMATE — 4.6 unannounced. RE-VERIFY at 4.6 launch.
    { id: 'ev_hsr_fate2',  game: 'hsr', tier: 'critical', name: 'Fate/stay night Pt 2 — Free Archer or Gilgamesh', ends: '2026-11-10', desc: 'Free Archer OR Gilgamesh claim + mats to Lv60, open until end of v4.6 (ends date ESTIMATED — 4.5 is a 5-week patch; re-verify at 4.6)', currency: { type: 'jade', amount: 0, note: 'Rin & Gilgamesh limited gacha share one separate collab pity pool' } },

    // ── ZZZ ── v3.1 "The Long Goodbye", 2nd anniversary. Ends Sep 8;
    // v3.2 CONFIRMED for Sep 9 (Game8), so the patch row holds.
    // Sigrid's banner "Till the Ends of the Sky" opens Aug 19 - Sep 8 with
    // the Exclusive Rescreening rerun. Remielle runs the full patch.
    { id: 'ev_zzz_31anniv', game: 'zzz', tier: 'critical', name: 'v3.1 2nd Anniversary — free S-Rank choice', ends: '2026-09-08', desc: 'Free limited S-Rank Agent of choice + exclusive W-Engine, 1,600 Polychrome. Gift from the Clouds and The Great En-Nah Giveaway login events give 20 Encrypted Master Tapes + 10 Boopons total. Sigrid banner opens Aug 19', currency: { type: 'polychrome', amount: 1600, note: 'Free limited S-Rank + W-Engine choice — highest-value claim of the year, do not miss' } },
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
