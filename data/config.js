// NEXUS v5.21 — CONFIG
// ── THIS IS THE ONLY FILE THAT NEEDS UPDATING ON PATCH DAY ──
// Last verified: 2026-11-13
// Next review: 2026-11-16 (hsr_as). Then
//   2026-11-19 (zzz_deadly last day), 2026-11-23 (ww_ww), 2026-11-24
//   (CZN Tiphera rerun ends), 2026-11-30 (hsr_pf + ZZZ Spooky Funhouse),
//   2026-12-01 (ZZZ 3.3 ends), 2026-12-02 (BIG CZN pass — Phase 3/Dahlia,
//   Rossweisse + Blazebell + Carnival close, FSO/BoH roll), 2026-12-07
//   (ww_toa), 2026-12-14 (hsr_moc), ~2026-12-21/22 (WW 4.0 + HSR 4.8,
//   both ESTIMATES — re-verify), ~2026-12-23 (CZN S5 end, DERIVED).
//
// 2026-11-13 data pass (one row): zzz_shiyu 2026-11-13 -> 2026-11-27.
//   Critical Node reset this morning (every other Friday, Icy Veins); the
//   new window runs to the Nov 27 reset. NEXT RESET convention. DERIVED
//   from the fixed 14-day cadence (Sep 4 / 18 / Oct 2 / 16 / 30 / Nov 13).
//   Everything else confirmed unchanged from the 2026-11-12 pass.
//
// v5.21 code release (Field-ready, audit D1–D9): CONFIG.version 5.20 -> 5.21.
//   No date changed. Every live `events[]` row is now SHOWN in the Events
//   panel above the game cards (critical pinned, then soonest first) with
//   its `desc` and `currency.note` on tap — write those for a phone reader.
//
// v5.20 code release (Integrity, audit F1–F9): CONFIG.version 5.19 -> 5.20.
//   No date changed in this file for the release. Two things the app now
//   does differently with these values:
//   - every `ends` / `unlocks` / `lastVerified` is read as a LOCAL calendar
//     day (it used to be UTC midnight = the day before in US Central);
//   - a cycle clear belongs to the exact `ends` value it was made against,
//     so rolling `ends` forward correctly un-clears the row. Never "fix" a
//     cycle by editing its old date back — just set the new one.
//   - an event row past its `ends` now trips the stale banner, same as a
//     cycle: remove expired events on each pass (the scheduled check does).
//   Run `node tools/check.js` before merging any config change.
//
// Changes from 2026-09-04 verify — DATA-ONLY pass, no version bump.
//   ** This pass was ~2 MONTHS overdue: Next review had been 2026-09-09.
//   Every patch, cycle and event row had expired on the live site. Each
//   game moved 1-2 full versions: CZN S4 -> S5, WW 3.6 -> 3.8, HSR 4.5 ->
//   4.7, ZZZ 3.1 -> 3.3. Everything below is re-derived from scratch
//   against current sources, not rolled forward from old values. **
//
//   PRIORITY ORDER: Operator re-confirmed CZN / WW / HSR / ZZZ as P1-P4.
//   Already the order in data/games.js — no change.
//
//   PATCH ROWS — all four rolled:
//   - czn: S4 (ended Sep 30) -> S5 "A Promise Upon the Snow", Phase 1 Oct
//     21, Phase 2 (Blazebell) Nov 11 - Dec 2, Phase 3 (Dahlia) from Dec 2
//     (Game8, Prydwen, Inven). Season end Dec 23 is DERIVED: the 11/11
//     notice lists a window to "12/23 before maintenance", and it matches
//     S4's 9-week length (Oct 21 + 63d). Re-verify at the Dec 2 update.
//   - ww: 3.6 -> 3.8 "Lilies in a Dying Dream", live Nov 12 11:00 UTC+8
//     (= Nov 11 evening Americas). Runs to Dec 21 (Game8; every 3.8 event
//     closes Dec 21). WW 4.0 is unannounced (~Dec 22-23 estimated) —
//     re-verify the end date at the 4.0 broadcast.
//   - hsr: 4.5 -> 4.7 "Now, Lay Laughter to All Stars", NA Nov 10 / server
//     Nov 11. Ends Dec 22 NA — the free-claim window closes Dec 23 05:59
//     UTC+8 (HoYoverse notice via Timesaver), which is the version
//     boundary. 4.8 (ZZZ collab) still unannounced — ESTIMATE.
//   - zzz: 3.1 -> 3.3 "Journey to the Sky", live Oct 21. 42-day version,
//     ends Dec 2 UTC+8 = Dec 1 Americas (TheClick); events close Dec 1.
//
//   CYCLES — all rolled (EXPIRED unless noted):
//   - hsr_moc: Sep 28 -> Dec 14. "Survival of the Fittest" Nov 2 - Dec 14
//     03:59 server (NeonSect, Timesaver, from the official 4.6 post).
//   - hsr_pf: Sep 14 -> Nov 30. "Imagined Words" Oct 19 - Nov 30 03:59.
//   - hsr_as: Oct 12 -> Nov 16. "Dominance of Oblivion" Oct 5 - Nov 16.
//   - hsr_aa: Sep 27 -> Dec 22. Refreshed with 4.7, runs to the version
//     boundary (same rule as before). Follows the hsr patch row.
//   - ww_toa: Sep 14 -> Dec 7. 28-day cadence Sep 14 / Oct 12 / Nov 9 /
//     Dec 7; Nov 9 reset matches GamsGo's calendar. DERIVED, not published.
//   - ww_ww: Sep 28 -> Nov 23. Cadence Sep 28 / Oct 26 / Nov 23 — matches
//     GamsGo's projected Nov 23 reset. DERIVED.
//   - ww_em: Sep 29 -> Dec 21. Patch-tied, follows 3.8.
//   - czn_fso: Sep 9 -> Dec 2. NEW FSO season opened Nov 11 (Aavarck,
//     Suppressed Servant, Woman Within the Fog — Game8). Rolls on the
//     3-week phase boundary, same rule as before -> Dec 2. DERIVED.
//   - czn_boh: Sep 30 -> Dec 2, and type 'patch' -> 'date'. The 11/11
//     notice lists a NEW Basin of Hyperspace opening for the Phase 2
//     window (11/11 - 12/02), so it no longer runs to season end.
//   - zzz_shiyu: Sep 18 -> Nov 13. Current window Oct 30 - Nov 13; Icy
//     Veins: "next reset ... November 13th". NEXT RESET convention.
//   - zzz_deadly: Sep 10 -> Nov 19. Current cycle started Nov 6
//     (TopUpLive); 14-day Friday cadence -> last day Nov 19, next reset
//     Fri Nov 20. LAST DAY convention.
//
//   EVENTS — every old row expired and was REMOVED: ev_czn_arabella,
//   ev_czn_primal, ev_czn_beach (Sep 9/30), ev_ww_36 (Sep 29), ev_hsr_45
//   (Sep 27), ev_hsr_fate2 (end of 4.6 = Nov 10 — the free Archer/
//   Gilgamesh claim is gone), ev_zzz_31anniv (Sep 8).
//   ADDED:
//   - ev_czn_rossweisse (critical, Dec 2) — S5 SEASONAL combatant.
//   - ev_czn_blazebell (standard, Dec 2), ev_czn_tiphera rerun (Nov 24).
//   - ev_czn_carnival (standard, Dec 2) — 1st anniv Nightmare Carnival +
//     Flames Illuminating Memories + Rules of Good Order.
//   - ev_ww_38 (standard, Dec 21) — 3.8 events + Gifts of Bygone Dreams.
//   - ev_hsr_47free (critical, Dec 22) — free limited 5★ selector.
//   - ev_zzz_33login (critical, Dec 1) — 10 Master Tapes + 10 Boopons.
//   - ev_zzz_spooky (standard, Nov 30) — free W-Engine + limited outfit.
//
//   - pulls / weeklyYields / resetTimes: unchanged.
//   - KNOWN CONVENTION SPLIT (deferred, not fixed here): zzz_shiyu tracks
//     NEXT RESET date, zzz_deadly tracks LAST DAY of the cycle. Design
//     decision, not a patch-day edit — see prior header note.
// Sources: Game8 (CZN S5 + banners, WW 3.8 schedule/events), Prydwen,
//   chaoszeronightmare.net, czn.gg 11/11 notice, Inven Global, Final
//   Weapon, RPG Site, wuwa.uk, wudamage, GamsGo (WW endgame calendar),
//   Notebookcheck (HSR 4.6), NeonSect + Timesaver (HSR endgame + 4.7
//   free claims), Gematsu / TheClick (ZZZ 3.3), AllThingsHow (ZZZ 3.3
//   events), Icy Veins (Shiyu), TopUpLive (Deadly Assault) —
//   cross-checked 2026-11-12.
// ═══════════════════════════════════════════════════════════

const CONFIG = {
  version: '5.21',
  lastVerified: '2026-11-13',

  resetTimes: {
    hsr: { dailyUTC: 10, weeklyDay: 1, weeklyUTC: 10 },
    ww:  { dailyUTC: 20, weeklyDay: 1, weeklyUTC: 20 },
    zzz: { dailyUTC: 10, weeklyDay: 1, weeklyUTC: 10 },
    czn: { dailyUTC: 18, weeklyDay: 0, weeklyUTC: 18 },
  },

  patches: [
    // CZN: Season 5 "A Promise Upon the Snow" — 1st anniversary season.
    // Phase 1 Rossweisse (Oct 21), Phase 2 Blazebell (Nov 11 - Dec 2),
    // Phase 3 Dahlia (Dec 2). End Dec 23 DERIVED — see header.
    { game: 'czn', version: 'S5', label: 'SEASON 5 — A PROMISE UPON THE SNOW', ends: '2026-12-23', resetDay: 0 },
    // WW 3.8 "Lilies in a Dying Dream" — Nov 12 11:00 UTC+8 (Nov 11 PT).
    // Phase 1 Lily to Dec 3 09:59 UTC+8, then Phase 2. Ends Dec 21.
    { game: 'ww',  version: '3.8', label: 'VER 3.8 — LILIES IN A DYING DREAM', ends: '2026-12-21', resetDay: 1 },
    // HSR 4.7 "Now, Lay Laughter to All Stars" — NA Nov 10 / server Nov 11.
    // Ends Dec 22 NA (free-claim window closes Dec 23 05:59 UTC+8).
    { game: 'hsr', version: '4.7', label: 'VER 4.7 — NOW, LAY LAUGHTER TO ALL STARS', ends: '2026-12-22', resetDay: 1 },
    // ZZZ 3.3 "Journey to the Sky" — live Oct 21, 42 days, ends Dec 2
    // UTC+8 = Dec 1 Americas. Phase 2 (Severian) Nov 11 - Dec 1.
    { game: 'zzz', version: '3.3', label: 'VER 3.3 — JOURNEY TO THE SKY', ends: '2026-12-01', resetDay: 1 },
  ],

  cycles: {
    // HSR v4.7 endgame calendar (dates from the official 4.6 post — these
    // windows run past the 4.6/4.7 boundary):
    // MoC "Survival of the Fittest" Nov 2 - Dec 14 03:59 server.
    // PF "Imagined Words" Oct 19 - Nov 30 03:59.
    // AS "Dominance of Oblivion" Oct 5 - Nov 16 03:59.
    // AA refreshed with 4.7 -> runs to the version boundary (Dec 22 NA).
    hsr_moc:    { ends: '2026-12-14', type: 'date',   label: 'Memory of Chaos' },
    hsr_pf:     { ends: '2026-11-30', type: 'date',   label: 'Pure Fiction' },
    hsr_as:     { ends: '2026-11-16', type: 'date',   label: 'Apocalyptic Shadow' },
    hsr_aa:     { ends: '2026-12-22', type: 'date',   label: 'Anomaly Arbitration' },

    // WW v3.8 (Nov 12 - Dec 21)
    // ToA 28-day Monday cadence: Sep 14 / Oct 12 / Nov 9 / Dec 7.
    // WhiWa 28-day cadence: Sep 28 / Oct 26 / Nov 23 / Dec 21.
    // Endstate Matrix is patch-tied -> follows 3.8 to Dec 21.
    ww_toa:     { ends: '2026-12-07', type: 'date',   label: 'Tower of Adversity (all zones incl. Hazard Zone)' },
    ww_ww:      { ends: '2026-11-23', type: 'date',   label: 'Whimpering Wastes' },
    ww_em:      { ends: '2026-12-21', type: 'patch',  label: 'Endstate Matrix (v3.8 phase)' },
    ww_tg:      { ends: 'weekly',     type: 'weekly', label: 'Fantasies of Thousand Gateways' },

    // CZN — Season 5, Phase 2 live since Nov 11.
    // BoH: NEW Basin opened Nov 11 for the Phase 2 window -> Dec 2.
    // FSO: NEW season opened Nov 11 (Aavarck, Suppressed Servant, Woman
    //   Within the Fog). Rolls on the 3-week phase boundary -> Dec 2.
    //   DERIVED, no published end date.
    czn_boh:    { ends: '2026-12-02', type: 'date',   label: 'Basin of Hyperspace' },
    czn_fso:    { ends: '2026-12-02', type: 'date',   label: 'Full-Scale Offensive' },
    czn_sortie: { ends: 'weekly',     type: 'weekly', label: 'Sortie Mode run' },

    // ZZZ v3.3 "Journey to the Sky" live Oct 21, closes Dec 1/2.
    // Shiyu Critical: window Nov 13 - Nov 27, tracks NEXT RESET date per
    //   this key's convention (every other Friday; Nov 27 DERIVED).
    // Deadly Assault: cycle started Nov 6, tracks LAST DAY per this key's
    //   convention -> Nov 19. Next reset Fri Nov 20.
    zzz_shiyu:  { ends: '2026-11-27', type: 'date',   label: 'Shiyu Defense / Critical Node' },
    zzz_deadly: { ends: '2026-11-19', type: 'date',   label: 'Deadly Assault' },
    zzz_hollow: { ends: 'weekly',     type: 'weekly', label: 'Hollow Zero / Operation Matrix' },
  },

  events: [
    // ── CZN ── Season 5, Phase 2 live Nov 11.
    // Rossweisse is the S5 SEASONAL combatant (1st anniversary) — seasonal
    // units do not join the standard pool afterward. Hard deadline.
    { id: 'ev_czn_rossweisse', game: 'czn', tier: 'critical', name: 'Rossweisse & Sig Rate-Up (Seasonal)', ends: '2026-12-02', desc: 'SEASONAL 1st-anniversary combatant — Justice Striker, Binding keyword. Obtainable only during this banner (Oct 21 - Dec 2). Sig is her signature Partner, same window. Ends before Dec 2 maintenance', currency: { type: 'crystal', amount: 0, note: 'Hard deadline. Soft pity 58 / hard 70. Dahlia (Justice Hunter) opens Dec 2 — budget across both' } },
    { id: 'ev_czn_blazebell',  game: 'czn', tier: 'standard', name: 'Blazebell & Vivian Rate-Up (Phase 2)', ends: '2026-12-02', desc: 'New Justice Controller — AP generation, card draw, healing; pairs with Rossweisse. Vivian is her signature Controller Partner. Nov 11 - Dec 2', currency: { type: 'crystal', amount: 0, note: 'Phase-length banner, closes at the Dec 2 update' } },
    { id: 'ev_czn_tiphera',    game: 'czn', tier: 'standard', name: 'Tiphera & Tiana Rerun', ends: '2026-11-24', desc: 'Rerun banner Nov 3 - Nov 24 18:00 UTC. Rita & Ivy rerun follows Nov 24 - Dec 15', currency: { type: 'crystal', amount: 0, note: 'Rerun — only pull if filling a gap' } },
    // 1st anniversary "Nightmare Carnival" (adjusted with the Nov 11 patch)
    // plus the two Phase 2 events, all closing at the Dec 2 update.
    { id: 'ev_czn_carnival',   game: 'czn', tier: 'standard', name: 'Nightmare Carnival / Flames Illuminating Memories', ends: '2026-12-02', desc: '1st-anniversary Nightmare Carnival (Blazebell now a guest manager in Nightmare Dream Park), Rules of Good Order, and the Flames Illuminating Memories story-mission event — all run to Dec 2', currency: { type: 'crystal', amount: 0, note: 'Anniversary rewards — clear mission sets and exchange shop before Dec 2' } },

    // ── WW ── v3.8 "Lilies in a Dying Dream", Nov 12 - Dec 21.
    // Lahai-Roi Blocks (Nov 19 - Dec 3), Dreamfield Odyssey (Dec 3 - 21),
    // Whither the Wind login (Dec 7 - 21) open later — check in-game.
    { id: 'ev_ww_38',      game: 'ww',  tier: 'standard', name: 'v3.8 Events — Unwritten Dreams / Bygone Dreams login', ends: '2026-12-21', desc: 'Second Coming of Solaris: Unwritten Dreams, Gifts of Bygone Dreams (7-day login), Gifts of Starpath, Tactical Hologram: Calamity Effigy. Later: Lahai-Roi Blocks Nov 19, Dreamfield Odyssey + Lollo Campaign Dec 3, Whither the Wind Dec 7', currency: { type: 'astrite', amount: 0, note: 'Patch-length; 7-day login can be claimed on any 7 days before Dec 21' } },

    // ── HSR ── v4.7 "Now, Lay Laughter to All Stars": NA Nov 10.
    // Free claims all share one window, ending Dec 23 05:59 UTC+8 =
    // Dec 22 21:59 UTC (HoYoverse Opening Gifts notice via Timesaver).
    { id: 'ev_hsr_47free', game: 'hsr', tier: 'critical', name: 'v4.7 Free Limited 5★ — Acheron / Imbibitor Lunae / Jing Yuan', ends: '2026-12-22', desc: 'Log in to claim ONE free limited 5★ (Acheron, Dan Heng • Imbibitor Lunae, or Jing Yuan) + a free Affinitive Eidolon for the same three, a Golden Companion Spirit, and 20 Star Rail Special Passes', currency: { type: 'jade', amount: 0, note: 'Closes Dec 23 05:59 UTC+8 (Dec 22 evening NA) — highest-value claim of the patch' } },

    // ── ZZZ ── v3.3 "Journey to the Sky", ends Dec 1 Americas.
    { id: 'ev_zzz_33login', game: 'zzz', tier: 'critical', name: 'v3.3 Check-ins — 10 Master Tapes + 10 Boopons', ends: '2026-12-01', desc: 'All-New Program: log in any 7 days for 10 Encrypted Master Tapes. "En-Nah" Into Your Lap (from Nov 11): any 7 days for 10 Boopons. Both end Dec 1 03:59 server', currency: { type: 'polychrome', amount: 0, note: '10 free limited pulls — 7 logins needed, do not leave it to the last week' } },
    { id: 'ev_zzz_spooky',  game: 'zzz', tier: 'standard', name: 'Spooky Funhouse Tales', ends: '2026-11-30', desc: 'Halloween HIA Club event — free A-Rank W-Engine Candlelit Scheme, and the limited Angels of Delusion outfit for clearing every Mission Mode stage. Ends Nov 30 03:59 server', currency: { type: 'polychrome', amount: 0, note: 'Limited outfit is a full-clear reward — do not skip the last stages' } },
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
