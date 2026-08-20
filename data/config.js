// NEXUS v5.19 — CONFIG
// ── THIS IS THE ONLY FILE THAT NEEDS UPDATING ON PATCH DAY ──
// Last verified: 2026-08-20
// Next review: 2026-08-25 (HSR 4.5 lands NA — roll the hsr patch row and
//   hsr_aa). Then 2026-08-27 (ZZZ Deadly Assault), 2026-08-31 (WW WhiWa +
//   HSR AS), 2026-09-03 (ZZZ Shiyu). BIG pass 2026-09-09: CZN Phase 3
//   (Olga) + FSO + Arabella window closes, WW 3.6 Phase 2, HSR 4.5 Phase 2,
//   ZZZ 3.2 — four games roll the same day.
//
// Changes from 2026-08-18 verify — DATA-ONLY pass, no version bump.
//   ** The Aug 18 pass ran the day BEFORE the Aug 19 CZN Phase 2 and WW 3.6
//   updates. It correctly deferred everything unpublished at the time; this
//   pass closes those out now that the Aug 19 patch notes are live. **
//
//   EXPIRED, now rolled:
//   - czn_fso: 2026-08-19 -> 2026-09-09. A new Full-Scale Offensive season
//     opened with the Aug 19 update — bosses are Beginning of Desire,
//     Punisher of Resentment, Suppressed Servant (Game8 Aug 19 patch notes;
//     GameDaily confirms a new FSO season plus a Clear Formation system).
//     FSO now rolls on the 3-week PHASE boundary, not the old 6-week
//     window, so it ends with Phase 2 on Sep 9. End date is DERIVED from
//     the phase boundary — no explicit FSO end date was published.
//   - ww_em: 2026-08-19 -> 2026-09-29, label v3.5 -> v3.6. Endstate Matrix
//     is patch-tied; it was left on the 3.5 boundary when the patch row
//     rolled on Aug 18. Inherits the 3.6 end date.
//
//   CORRECTED:
//   - czn patch S4: 2026-10-06 -> 2026-09-30. Now CONFIRMED rather than
//     estimated. Two independent anchors: Olga's Phase 3 banner runs
//     Sep 9 - Sep 30 and is the FINAL phase (czn.gg, Prydwen), and the
//     9-week Beach Cafe Festival ends Sep 30 — Jul 29 + 9 weeks lands
//     exactly there. The old Oct 6 figure was derived from Season 3's
//     70-day length and is superseded.
//   - czn_boh: 2026-10-06 -> 2026-09-30. Patch-tied, follows the above.
//   - zzz_deadly: 2026-08-26 -> 2026-08-27. The Aug 18 value was DERIVED
//     from the two-week cadence; the real window is Aug 14 - Aug 27.
//     CONFIRMED (Icy Veins, updated Aug 14; BitTopup rotation page updated
//     Aug 18 independently gives Aug 14-27). Next reset is Fri Aug 28.
//
//   CONFIDENCE UPGRADES — value unchanged, evidence improved:
//   - ww 3.6 / 2026-09-29: was an ESTIMATE from the ~40-day 3.5 cadence.
//     Now sourced — Game8 and allthings.how both state 3.6 runs to Sep 30
//     (UTC+8), which is Sep 29 on the Americas convention this file uses.
//     Phase 2 (Jingran + Hiyuki/Mornye reruns) opens Sep 10.
//   - hsr_as / 2026-08-31: was marked EST. CONFIRMED — the 4.4 Apocalyptic
//     Shadow "Vanguard Knight" phase runs Jul 20 - Aug 31 (gamsgo).
//   - zzz_shiyu / 2026-08-21: was DERIVED from the DA alternation.
//     CONFIRMED — Game8's Shiyu tracker states the Frontier Effect resets
//     Aug 21. Next window Aug 21 - Sep 4.
//   - zzz 3.1 / 2026-09-08 and hsr 4.4 / 2026-08-25: unchanged, still
//     correct. HSR rolls in 5 days, ZZZ in 19.
//
//   EVENTS:
//   - ADDED ev_czn_arabella (CRITICAL): Arabella + Licinia rate-up,
//     Aug 19 after maintenance - Sep 9 before maintenance (official CZN_EN
//     account, via GameDaily). Arabella is a SEASONAL combatant — she is
//     obtainable ONLY during this window and does not enter the standard
//     pool afterward (Game8, Prydwen). Tiered critical for that reason.
//   - ADDED ev_czn_primal: Primal Desire, through Sep 9 (GameDaily).
//     Interrogation-style event tied to Arabella's story.
//   - ev_czn_beach / ev_czn_rerun / ev_ww_36 / ev_hsr_45 / ev_hsr_fate2 /
//     ev_zzz_31anniv: all confirmed unchanged, nothing expired.
//
//   STILL NOT IN CONFIG — exists, but no trustworthy window:
//   - CZN Stella Market. Pre-release Korean coverage (Inven Global) put it
//     at Aug 19 for 3 weeks, but the Aug 19 English patch coverage names
//     Primal Desire instead and does not mention it. Either a rename or a
//     second event. VERIFY IN-GAME before adding a row.
//   - CZN Great Rift. Opened Aug 19 with the Aavarck boss; a competitive
//     ranking mode, so a plausible czn_rift CYCLE key rather than an event.
//     Deliberately NOT added — adding a cycles key needs an app.js check
//     first to confirm nothing hardcodes the key list. See handoff notes.
//   - CZN "Following the Fox's Footsteps", Season 4 Check-in, free Rei/Ray
//     outfit (Aug 19 one-off distribution, not a tracked window).
//
//   - pulls / weeklyYields / resetTimes: unchanged. weeklyYields drift for
//     WW and ZZZ (HANDOFF section 6) remains OUTSTANDING and still feeds
//     calcProjection.
//   - KNOWN CONVENTION SPLIT, deliberately not fixed here: zzz_shiyu tracks
//     NEXT RESET date while zzz_deadly tracks LAST DAY of the cycle. Two
//     adjacent rows in the same card meaning different things. Fixing it
//     properly means picking a semantic for every cycle key, which is a
//     design decision, not a patch-day edit. Deferred to v5.20.
// Sources: Game8 (Aug 19 CZN patch notes, WW 3.6, ZZZ 3.2, HSR 4.5),
//   GameDaily, czn.gg, Prydwen, Icy Veins, BitTopup, gamsgo, allthings.how,
//   official CZN_Official_EN account — cross-checked 2026-08-20.
// ═══════════════════════════════════════════════════════════

const CONFIG = {
  version: '5.19',
  lastVerified: '2026-08-20',

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
    // HSR 4.4 "In Ravages Does the Whistle Sound" — NA Jul 14 -> Aug 25.
    // 4.5 "To Roll the Stars in Astropolis" lands NA Aug 25 / global Aug 26
    // and is a FIVE-week patch, not six -> should end ~Sep 29. Roll this
    // row at the Aug 25 review.
    { game: 'hsr', version: '4.4', label: 'VER 4.4 — IN RAVAGES DOES THE WHISTLE SOUND', ends: '2026-08-25', resetDay: 1 },
    // ZZZ 3.1 "The Long Goodbye" (2nd anniversary) — live Jul 29, runs its
    // standard 42 days. 3.2 dated Sep 9 (Game8), so Sep 8 holds.
    { game: 'zzz', version: '3.1', label: 'VER 3.1 — THE LONG GOODBYE', ends: '2026-09-08', resetDay: 1 },
  ],

  cycles: {
    // HSR v4.4 endgame calendar:
    // AA refreshed Jul 15 with the version — runs to the next version
    //   boundary, Aug 25 (NA). Rolls with 4.5.
    // AS "Vanguard Knight" phase Jul 20 - Aug 31 — CONFIRMED (gamsgo).
    // PF phase Aug 3 - Sep 14 (six-week cadence, Monday 04:00 server).
    // MoC "Stormcleanse" Aug 17 - Sep 28 — CONFIRMED (Icy Veins).
    hsr_moc:    { ends: '2026-09-28', type: 'date',   label: 'Memory of Chaos' },
    hsr_pf:     { ends: '2026-09-14', type: 'date',   label: 'Pure Fiction' },
    hsr_as:     { ends: '2026-08-31', type: 'date',   label: 'Apocalyptic Shadow' },
    hsr_aa:     { ends: '2026-08-25', type: 'date',   label: 'Anomaly Arbitration' },

    // WW v3.6 (Americas Aug 19 - Sep 29)
    // ToA 28-day Monday cadence: Jun 22 / Jul 20 / Aug 17 / Sep 14.
    // WhiWa cycle Aug 3 - Aug 31 (28-day cadence, Game8).
    // Endstate Matrix is patch-tied -> follows 3.6 to Sep 29.
    ww_toa:     { ends: '2026-09-14', type: 'date',   label: 'Tower of Adversity (all zones incl. Hazard Zone)' },
    ww_ww:      { ends: '2026-08-31', type: 'date',   label: 'Whimpering Wastes' },
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

    // ZZZ v3.1 "The Long Goodbye" live Jul 29 (2nd anniversary).
    // Shiyu Critical: window Aug 7 - Aug 21, tracks NEXT RESET date per
    //   this key's convention. CONFIRMED (Game8 Shiyu tracker). Next
    //   window Aug 21 - Sep 4.
    // Deadly Assault: stages Aug 14 - Aug 27, tracks LAST DAY per this
    //   key's convention. CONFIRMED (Icy Veins, BitTopup). Next reset
    //   Fri Aug 28. See header re: the convention split between these two.
    zzz_shiyu:  { ends: '2026-08-21', type: 'date',   label: 'Shiyu Defense / Critical Node' },
    zzz_deadly: { ends: '2026-08-27', type: 'date',   label: 'Deadly Assault' },
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
    // Chizuru / Itsuku rerun banners, through Sep 1 (Prydwen: Aug 11 -
    // Sep 1). These do NOT share acquisition count with the Phase 2 banners.
    { id: 'ev_czn_rerun',  game: 'czn', tier: 'standard', name: 'Chizuru & Itsuku Rerun Banners', ends: '2026-09-01', desc: 'Rerun banners. NOTE: separate acquisition count from the Arabella/Licinia banners — pity does not carry between them', currency: { type: 'crystal', amount: 0, note: 'Separate pity pool from Arabella/Licinia — budget accordingly' } },

    // ── WW ── v3.6 "Lamplight in Mirage, Sword's Resolve in Heart".
    // Americas Aug 19, most other regions Aug 20. Event roster CONFIRMED by
    // name; individual windows still unpublished, so this row is patch-tied.
    // Verify in-game once the event timers are visible.
    { id: 'ev_ww_36',      game: 'ww',  tier: 'standard', name: 'v3.6 Events — Resonance Sim Realm / Coded Deception', ends: '2026-09-29', desc: 'Resonance Sim Realm, Second Coming of Solaris: Coded Deception, If Dreams Still Reverberate, The Strings Remember, Wuthering Exploration, Gifts of Drifting Mist (individual windows unpublished — verify in-game)', currency: { type: 'astrite', amount: 0, note: 'Patch-length assumption; confirm individual event end dates in-game' } },

    // ── HSR ── v4.5 "To Roll the Stars in Astropolis": NA Aug 25, global
    // Aug 26. CONFIRMED 5 weeks, not the usual 6 -> ends ~Sep 29.
    { id: 'ev_hsr_45',     game: 'hsr', tier: 'standard', name: 'v4.5 Overdrive: Whirlwind Grand Prix (opens Aug 25)', ends: '2026-09-29', desc: 'Flagship 4.5 event, launches with the patch. Rewards the A Race to the Horizon 4-star Light Cone. Minuscule Great Adventure follows in Phase 2 from Sep 12', currency: { type: 'jade', amount: 0, note: '7-day login after 4.5 goes live grants 10x Special Star Rail Pass' } },
    // Fate/stay night [UBW] Part 2. Free Archer OR Gilgamesh claim runs to
    // END OF v4.6. Nov 10 is an ESTIMATE — 4.5 is a 5-week patch (Aug 25 -
    // ~Sep 29), so a standard 6-week 4.6 lands ~Nov 10. RE-VERIFY at 4.6.
    { id: 'ev_hsr_fate2',  game: 'hsr', tier: 'critical', name: 'Fate/stay night Pt 2 — Free Archer or Gilgamesh', ends: '2026-11-10', desc: 'Free Archer OR Gilgamesh claim + mats to Lv60, open until end of v4.6 (ends date ESTIMATED — 4.5 is a 5-week patch; re-verify at 4.6)', currency: { type: 'jade', amount: 0, note: 'Rin & Gilgamesh limited gacha share one separate collab pity pool' } },

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
