// NEXUS v5.19 — CONFIG
// ── THIS IS THE ONLY FILE THAT NEEDS UPDATING ON PATCH DAY ──
// Last verified: 2026-09-04
// Next review: 2026-09-09 (BIG pass — ZZZ 3.2 launches, CZN Phase 3/Olga
//   begins, Arabella + FSO + Primal Desire windows close). Then 2026-09-10
//   (zzz_deadly), 2026-09-14 (ww_toa + hsr_pf), 2026-09-18 (zzz_shiyu),
//   2026-09-27/28 (HSR 4.6 lands — roll hsr patch row + hsr_aa), 2026-09-29
//   (WW 3.6 ends / ww_em), 2026-09-30 (CZN S4 finale + Beach Cafe Festival +
//   czn_boh), ~2026-10-12 (hsr_as next cycle, ESTIMATE — re-verify).
//
// Changes from 2026-08-20 verify — DATA-ONLY pass, no version bump.
//   ** This pass was itself 10 days overdue: Next review had been
//   2026-08-25 and four checkpoints (Aug 25/27/31, Sep 3) had already
//   passed. Five cycle/event rows were showing expired on the live site
//   before this pass. Anchor every future pass to the real current date
//   the moment the session opens — this is the second time a pass has
//   arrived stale; see HANDOFF for a standing fix. **
//
//   EXPIRED, now rolled:
//   - hsr patch: 4.4 (ended 2026-08-25) -> 4.5 "To Roll the Stars in
//     Astropolis", live NA 2026-08-25 / global Aug 26 (RPG Site, Game8,
//     Notebookcheck). CONFIRMED a 5-week patch, not 6 (Game8) — combined
//     with the now-confirmed HSR 4.6 date below, ends 2026-09-27 (NA).
//   - hsr_aa: 2026-08-25 -> 2026-09-27. Anomaly Arbitration refreshed
//     2026-08-26 alongside 4.5 (Sportskeeda) and runs to the next version
//     boundary — now that boundary is dated (see hsr patch row).
//   - hsr_as: 2026-08-31 -> ~2026-10-12 (ESTIMATE). Apocalyptic Shadow's
//     "Vanguard Knight" phase ended and progression reset 2026-08-31
//     (Sportskeeda, Icy Veins); the mode refreshes every 6 weeks (Fandom),
//     so the next cycle is derived, not yet independently published.
//     Re-verify closer to the date.
//   - ww_ww (Whimpering Wastes): 2026-08-31 -> 2026-09-28. CONFIRMED
//     explicit date from Game8's WhiWa tracker, matching the 28-day
//     cadence (Aug 3 -> Aug 31 -> Sep 28).
//   - zzz_shiyu: 2026-08-21 -> 2026-09-18. The Aug 21 - Sep 4 window's
//     reset lands TODAY (Icy Veins: "next reset of Shiyu Defense will
//     happen on September 4th") — rolled forward one full 14-day cycle to
//     the window this pass is actually landing in.
//   - zzz_deadly: 2026-08-27 -> 2026-09-10. CONFIRMED (Icy Veins): current
//     stages run Aug 28 - Sep 10, tracks LAST DAY per this key's
//     convention. Next reset Fri Sep 11.
//
//   REMOVED:
//   - ev_czn_rerun (Chizuru & Itsuku, was ending Sep 1). Expired; Prydwen's
//     current-banners list shows only Arabella/Licinia live now, no
//     confirmed replacement rerun. Re-add when the next rerun banner is
//     announced — don't want a stale row implying something is running.
//
//   CONFIDENCE UPGRADES / TIGHTENED ESTIMATES — re-derived from the now-
//   confirmed HSR 4.6 date:
//   - ev_hsr_45 (Overdrive: Whirlwind Grand Prix): 2026-09-29 -> 2026-09-27,
//     to match the corrected hsr patch row (it's patch-tied, was carrying
//     the old pre-4.6-date estimate).
//   - ev_hsr_fate2 (Fate/stay night free claim, runs to end of v4.6):
//     2026-11-10 -> 2026-11-08. Was estimated from a 6-week 4.6 starting
//     ~Sep 29; 4.6 is now dated Sep 27 NA (Game8, "expected... due to
//     Version 4.5's shortened duration"), so a standard 6-week 4.6 moves
//     the estimate two days earlier. Still an ESTIMATE — re-verify at 4.6.
//
//   CONFIRMED UNCHANGED — checked against current sources, no value change:
//   - czn patch S4 / czn_boh (2026-09-30): Olga's Phase 3 banner is
//     independently confirmed Sep 9 - Sep 30, the FINAL phase (czn.gg,
//     updated Aug 30; Game8). Two anchors on the same date, still holds.
//   - czn_fso (2026-09-09), ev_czn_arabella / ev_czn_primal (2026-09-09),
//     ev_czn_beach (2026-09-30): all confirmed still live, nothing expired.
//   - ww patch 3.6 / ww_em (2026-09-29): Game8 explicitly states 3.6 runs
//     Aug 20 - Sep 30 (UTC+8) = Sep 29 Americas. Matches exactly — this
//     was an estimate last pass, now a direct confirmation.
//   - ww_toa (2026-09-14), ev_ww_36 (2026-09-29): not yet due, no new
//     information contradicts them.
//   - hsr_moc (2026-09-28): CONFIRMED Memory of Chaos will NOT refresh
//     during 4.5's shortened 5-week run (Sportskeeda) — row correctly
//     holds through the version boundary.
//   - hsr_pf (2026-09-14): CONFIRMED — new Pure Fiction cycle goes live
//     2026-09-14, "two days after the second half of 4.5 debuts"
//     (Sportskeeda). Row already correct.
//   - zzz patch 3.1 / ev_zzz_31anniv (2026-09-08): CONFIRMED — 3.1 runs
//     its standard 42 days, closing the evening of Sep 8 Americas /
//     morning Sep 9 UTC+8, when 3.2 goes live (DayOneFix, Game8).
//
//   - pulls / weeklyYields / resetTimes: unchanged.
//   - KNOWN CONVENTION SPLIT (deferred, not fixed here): zzz_shiyu tracks
//     NEXT RESET date, zzz_deadly tracks LAST DAY of the cycle. Design
//     decision, not a patch-day edit — see prior header note.
// Sources: RPG Site, Notebookcheck, Game8 (HSR 4.5/4.6, WW 3.6/WhiWa/
//   Endstate Matrix, ZZZ 3.2, CZN Olga), Sportskeeda (HSR 4.5 endgame
//   calendar), Icy Veins (Apocalyptic Shadow, Shiyu Defense, Deadly
//   Assault), Fandom (Apocalyptic Shadow cadence), czn.gg, Prydwen,
//   DayOneFix — cross-checked 2026-09-04.
// ═══════════════════════════════════════════════════════════

const CONFIG = {
  version: '5.19',
  lastVerified: '2026-09-04',

  resetTimes: {
    hsr: { dailyUTC: 10, weeklyDay: 1, weeklyUTC: 10 },
    ww:  { dailyUTC: 20, weeklyDay: 1, weeklyUTC: 20 },
    zzz: { dailyUTC: 10, weeklyDay: 1, weeklyUTC: 10 },
    czn: { dailyUTC: 18, weeklyDay: 0, weeklyUTC: 18 },
  },

  patches: [
    // CZN: Season 4 "Shattered Light and Claw" — live since Jul 28/29.
    // Phase 1 Hilde (Jul 29), Phase 2 Arabella (Aug 19 - Sep 9), Phase 3
    // Olga (Sep 9 - Sep 30) is the FINAL phase. End date now CONFIRMED
    // Sep 30 — see header.
    { game: 'czn', version: 'S4', label: 'SEASON 4 — SHATTERED LIGHT AND CLAW', ends: '2026-09-30', resetDay: 0 },
    // WW 3.6 "Lamplight in Mirage, Sword's Resolve in Heart" — Americas
    // Aug 19, most regions Aug 20. Ends Sep 30 UTC+8 = Sep 29 Americas.
    // Phase 2 (Jingran) opens Sep 10.
    { game: 'ww',  version: '3.6', label: 'VER 3.6 — LAMPLIGHT IN MIRAGE', ends: '2026-09-29', resetDay: 1 },
    // HSR 4.5 "To Roll the Stars in Astropolis" — NA Aug 25 -> Sep 27.
    // CONFIRMED 5-week patch (Game8). 4.6 dated Sep 27 NA / Sep 28 EU-Asia,
    // itself an estimate from the 5-week shortening — re-verify at 4.6.
    { game: 'hsr', version: '4.5', label: 'VER 4.5 — TO ROLL THE STARS IN ASTROPOLIS', ends: '2026-09-27', resetDay: 1 },
    // ZZZ 3.1 "The Long Goodbye" (2nd anniversary) — live Jul 29, runs its
    // standard 42 days. 3.2 dated Sep 9 (Game8), so Sep 8 holds.
    { game: 'zzz', version: '3.1', label: 'VER 3.1 — THE LONG GOODBYE', ends: '2026-09-08', resetDay: 1 },
  ],

  cycles: {
    // HSR v4.5 endgame calendar:
    // AA refreshed Aug 26 with the version (Sportskeeda) — runs to the
    //   next version boundary, now dated Sep 27 (NA). Rolls with 4.6.
    // AS: progression reset Aug 31 (Sportskeeda, Icy Veins); refreshes
    //   every 6 weeks (Fandom) -> next ~Oct 12, ESTIMATE, re-verify.
    // PF: current cycle unchanged, refreshes Sep 14 — CONFIRMED, "two days
    //   after the second half of 4.5 debuts" (Sportskeeda).
    // MoC "Stormcleanse" Aug 17 - Sep 28 — CONFIRMED will NOT refresh
    //   during 4.5's shortened 5-week run (Sportskeeda); row unchanged.
    hsr_moc:    { ends: '2026-09-28', type: 'date',   label: 'Memory of Chaos' },
    hsr_pf:     { ends: '2026-09-14', type: 'date',   label: 'Pure Fiction' },
    hsr_as:     { ends: '2026-10-12', type: 'date',   label: 'Apocalyptic Shadow' },
    hsr_aa:     { ends: '2026-09-27', type: 'date',   label: 'Anomaly Arbitration' },

    // WW v3.6 (Americas Aug 19 - Sep 29)
    // ToA 28-day Monday cadence: Jun 22 / Jul 20 / Aug 17 / Sep 14.
    // WhiWa: CONFIRMED next reset Sep 28 (Game8 WhiWa tracker), matching
    //   the 28-day cadence (Aug 3 -> Aug 31 -> Sep 28).
    // Endstate Matrix is patch-tied -> follows 3.6 to Sep 29.
    ww_toa:     { ends: '2026-09-14', type: 'date',   label: 'Tower of Adversity (all zones incl. Hazard Zone)' },
    ww_ww:      { ends: '2026-09-28', type: 'date',   label: 'Whimpering Wastes' },
    ww_em:      { ends: '2026-09-29', type: 'patch',  label: 'Endstate Matrix (v3.6 phase)' },
    ww_tg:      { ends: 'weekly',     type: 'weekly', label: 'Fantasies of Thousand Gateways' },

    // CZN — Season 4, Phase 2 live since Aug 19.
    // BoH: revamped with S4 (3-pick Support Effect System, 8 floors not
    //   10). Patch-tied -> Sep 30.
    // FSO: NEW season opened Aug 19 (Beginning of Desire, Punisher of
    //   Resentment, Suppressed Servant). Now rolls on the 3-week phase
    //   boundary -> Sep 9. DERIVED, no published end date.
    czn_boh:    { ends: '2026-09-30', type: 'patch',  label: 'Basin of Hyperspace' },
    czn_fso:    { ends: '2026-09-09', type: 'date',   label: 'Full-Scale Offensive' },
    czn_sortie: { ends: 'weekly',     type: 'weekly', label: 'Sortie Mode run' },

    // ZZZ v3.1 "The Long Goodbye" live Jul 29 (2nd anniversary), closes
    //   Sep 8/9 as 3.2 launches.
    // Shiyu Critical: window Sep 4 - Sep 18, tracks NEXT RESET date per
    //   this key's convention. Today (Sep 4) IS the reset day — CONFIRMED
    //   (Icy Veins: "next reset of Shiyu Defense will happen on September
    //   4th"). Rolled one full cycle to the window starting today.
    // Deadly Assault: stages Aug 28 - Sep 10, tracks LAST DAY per this
    //   key's convention. CONFIRMED (Icy Veins). Next reset Fri Sep 11.
    //   See header re: the convention split between these two.
    zzz_shiyu:  { ends: '2026-09-18', type: 'date',   label: 'Shiyu Defense / Critical Node' },
    zzz_deadly: { ends: '2026-09-10', type: 'date',   label: 'Deadly Assault' },
    zzz_hollow: { ends: 'weekly',     type: 'weekly', label: 'Hollow Zero / Operation Matrix' },
  },

  events: [
    // ── CZN ── Season 4 "Shattered Light and Claw", Phase 2 live Aug 19.
    // Arabella is a SEASONAL combatant: obtainable ONLY during this rate-up
    // window, does not join the standard pool afterward. Hard deadline —
    // tiered critical. Licinia (Striker Partner) runs the same window.
    { id: 'ev_czn_arabella', game: 'czn', tier: 'critical', name: 'Arabella & Licinia Rate-Up (Phase 2)', ends: '2026-09-09', desc: 'SEASONAL combatant — obtainable only during this banner, does NOT enter the standard pool afterward. Instinct Striker, introduces the Fracture DoT tag. Licinia (Striker Partner) runs the full window. Ends before Sep 9 maintenance', currency: { type: 'crystal', amount: 0, note: 'Hard deadline, no rerun. Soft pity 58 / hard 70. Phase 3 (Olga) opens Sep 9 — budget for both' } },
    // Primal Desire — Phase 2 story-side event, through Sep 9 (GameDaily).
    { id: 'ev_czn_primal', game: 'czn', tier: 'standard', name: 'Primal Desire', ends: '2026-09-09', desc: 'Phase 2 event — interrogate key characters connected to Arabella for rewards. Runs with "The Black Panther Left Uncared For", the second chapter of Shattered Light and Claw', currency: { type: 'crystal', amount: 0, note: 'Phase-length event; closes with Phase 2 on Sep 9' } },
    // Beach Cafe Festival: 9-week seasonal event, CONFIRMED through Sep 30
    // (Smilegate press). Objectives refresh every 3 weeks — Week 2 set
    // opened with the Aug 19 update.
    { id: 'ev_czn_beach',  game: 'czn', tier: 'standard', name: 'Beach Cafe Festival', ends: '2026-09-30', desc: 'S4 seasonal event, 9 weeks. New mission objectives every 3 weeks — earns Midsummer Night Memories for Save Data background, Rei outfit and stickers', currency: { type: 'crystal', amount: 0, note: 'Mission rewards + exchange shop; new objectives every 3 weeks — do not let them stack up' } },
    // Chizuru & Itsuku rerun banners ended Sep 1 with no confirmed
    // replacement yet (Prydwen's current-banners list shows only
    // Arabella/Licinia live). Row removed rather than left stale — re-add
    // when the next rerun is announced.

    // ── WW ── v3.6 "Lamplight in Mirage, Sword's Resolve in Heart".
    // Americas Aug 19, most other regions Aug 20. Event roster CONFIRMED by
    // name; individual windows still unpublished, so this row is patch-tied.
    // Verify in-game once the event timers are visible.
    { id: 'ev_ww_36',      game: 'ww',  tier: 'standard', name: 'v3.6 Events — Resonance Sim Realm / Coded Deception', ends: '2026-09-29', desc: 'Resonance Sim Realm, Second Coming of Solaris: Coded Deception, If Dreams Still Reverberate, The Strings Remember, Wuthering Exploration, Gifts of Drifting Mist (individual windows unpublished — verify in-game)', currency: { type: 'astrite', amount: 0, note: 'Patch-length assumption; confirm individual event end dates in-game' } },

    // ── HSR ── v4.5 "To Roll the Stars in Astropolis": NA Aug 25, global
    // Aug 26. CONFIRMED 5-week patch -> ends 2026-09-27 NA, matching the
    // patch row (Game8).
    { id: 'ev_hsr_45',     game: 'hsr', tier: 'standard', name: 'v4.5 Overdrive: Whirlwind Grand Prix (opens Aug 25)', ends: '2026-09-27', desc: 'Flagship 4.5 event, launches with the patch. Rewards the A Race to the Horizon 4-star Light Cone. Minuscule Great Adventure follows in Phase 2 from Sep 12', currency: { type: 'jade', amount: 0, note: '7-day login after 4.5 goes live grants 10x Special Star Rail Pass' } },
    // Fate/stay night [UBW] Part 2. Free Archer OR Gilgamesh claim runs to
    // END OF v4.6. Nov 8 is an ESTIMATE — 4.6 is now dated Sep 27 NA
    // (Game8), so a standard 6-week 4.6 lands ~Nov 8. RE-VERIFY at 4.6.
    { id: 'ev_hsr_fate2',  game: 'hsr', tier: 'critical', name: 'Fate/stay night Pt 2 — Free Archer or Gilgamesh', ends: '2026-11-08', desc: 'Free Archer OR Gilgamesh claim + mats to Lv60, open until end of v4.6 (ends date ESTIMATED — re-verify at 4.6)', currency: { type: 'jade', amount: 0, note: 'Rin & Gilgamesh limited gacha share one separate collab pity pool' } },

    // ── ZZZ ── v3.1 "The Long Goodbye", 2nd anniversary. Ends Sep 8;
    // v3.2 dated Sep 9 (Game8), so the patch row holds.
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
