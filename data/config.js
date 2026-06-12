// ═══════════════════════════════════════════════════════════
// NEXUS v5.14 — CONFIG
// ── THIS IS THE ONLY FILE THAT NEEDS UPDATING ON PATCH DAY ──
// Last verified: 2026-06-12
// Next review: 2026-06-17 (ZZZ 3.0 launches — patch and cycle changes)
// Changes from 2026-05-29 verify:
//   - hsr patch:   4.2 → 4.3 (launched June 1, ends July 14)
//   - hsr_moc:     2026-07-06 (confirmed, no change)
//   - hsr_pf:      2026-06-22 (confirmed, no change)
//   - hsr_as:      2026-06-08 → 2026-07-20 (reset Jun 8, next cycle ~Jul 20 per v4.3 schedule)
//   - hsr_aa:      2026-06-01 → 2026-07-13 (reset Jun 1 with patch, next ~Jul 13)
//   - ww patch:    3.3 → 3.4 (launched June 8, ends July 9)
//   - ww_toa:      2026-06-22 (28-day cycle from May 25, confirmed no change)
//   - ww_ww:       2026-06-08 → 2026-07-06 (reset Jun 8 with patch, next Jul 6 per Game8 3.4)
//   - ww_em:       2026-06-08 → 2026-07-09 (Doomsday Cycle spans 3.2–3.4, ends with patch Jul 9)
//   - zzz patch:   2.8 ends June 17, v3.0 launches June 17 (no change yet — update on Jun 17)
//   - zzz_shiyu:   2026-06-12 (confirmed — resets today per Icy Veins)
//   - zzz_deadly:  2026-06-05 → 2026-06-19 (reset Jun 5, current cycle Jun 5–Jun 19 per Icy Veins)
//   - events updated: WW Cyberpunk collab moved to 3.4, HSR 4.3 events added
// ═══════════════════════════════════════════════════════════

const CONFIG = {
  version: '5.14',
  lastVerified: '2026-06-12',

  notion: {
    recordPageId:  '35d32a84-9d1c-8112-9240-e598022bf1c8',
    recordDsId:    'eec1b2bd-1e5b-481d-874a-51d8bc6f4368',
    achDsId:       '96027bdd-f9d5-4f27-8edc-78e147d49177',
    sessionDsId:   '08655493-ca9f-456d-8165-ef138d50b152',
  },

  resetTimes: {
    hsr: { dailyUTC: 10, weeklyDay: 1, weeklyUTC: 10 },
    ww:  { dailyUTC: 20, weeklyDay: 1, weeklyUTC: 20 },
    zzz: { dailyUTC: 10, weeklyDay: 1, weeklyUTC: 10 },
    czn: { dailyUTC: 18, weeklyDay: 0, weeklyUTC: 18 },
  },

  patches: [
    { game: 'czn', version: 'Season 3', ends: '2026-07-08', resetDay: 0 },
    { game: 'ww',  version: '3.4',      ends: '2026-07-09', resetDay: 1 },
    { game: 'hsr', version: '4.3',      ends: '2026-07-14', resetDay: 1 },
    { game: 'zzz', version: '2.8',      ends: '2026-06-17', resetDay: 1 },
  ],

  cycles: {
    // HSR v4.3 (Jun 1 – Jul 14)
    // AA reset Jun 1 with patch, next ~Jul 13. AS reset Jun 8, next ~Jul 20.
    // PF reset Jun 22 per confirmed v4.3 schedule. MoC reset Jul 6, no change.
    hsr_moc:    { ends: '2026-07-06', type: 'date',   label: 'Memory of Chaos' },
    hsr_pf:     { ends: '2026-06-22', type: 'date',   label: 'Pure Fiction' },
    hsr_as:     { ends: '2026-07-20', type: 'date',   label: 'Apocalyptic Shadow' },
    hsr_aa:     { ends: '2026-07-13', type: 'date',   label: 'Anomaly Arbitration' },

    // WW v3.4 (Jun 8 – Jul 9)
    // ToA 28-day cycle: May 25 reset → Jun 22 next (confirmed unchanged).
    // WhiWa reset Jun 8 with patch → Jul 6 per Game8 v3.4 guide.
    // Endstate Matrix Doomsday Cycle spans v3.2–3.4, ends with patch Jul 9.
    ww_toa:     { ends: '2026-06-22', type: 'date',   label: 'Tower of Adversity (all zones incl. Hazard Zone)' },
    ww_ww:      { ends: '2026-07-06', type: 'date',   label: 'Whimpering Wastes' },
    ww_em:      { ends: '2026-07-09', type: 'patch',  label: 'Endstate Matrix (v3.4 phase)' },
    ww_tg:      { ends: 'weekly',     type: 'weekly', label: 'Fantasies of Thousand Gateways' },

    // CZN — patch ends Jul 8, no change
    czn_boh:    { ends: '2026-07-08', type: 'patch',  label: 'Basin of Hyperspace' },
    czn_fso:    { ends: '2026-07-08', type: 'patch',  label: 'Full-Scale Offensive' },
    czn_sortie: { ends: 'weekly',     type: 'weekly', label: 'Sortie Mode run' },

    // ZZZ v2.8 ends Jun 17 (v3.0 launches Jun 17 — update config again that day)
    // Shiyu biweekly Friday: resets today Jun 12, next Jun 26.
    // Deadly Assault: reset Jun 5, current cycle Jun 5–Jun 19 per Icy Veins.
    zzz_shiyu:  { ends: '2026-06-26', type: 'date',   label: 'Shiyu Defense / Critical Node' },
    zzz_deadly: { ends: '2026-06-19', type: 'date',   label: 'Deadly Assault' },
    zzz_hollow: { ends: 'weekly',     type: 'weekly', label: 'Hollow Zero / Operation Matrix' },
  },

  events: [
    { id: 'ev_ww_cyber',  game: 'ww',  tier: 'critical', name: 'Cyberpunk Edgerunners Collab (v3.4)', ends: '2026-07-09', desc: 'Non-rerun collab — Lucy and Rebecca, free Rebecca copy available', currency: { type: 'astrite', amount: 0, note: 'Free Rebecca + collab Astrite from missions' } },
    { id: 'ev_hsr_fate',  game: 'hsr', tier: 'critical', name: 'Fate/stay night Part 2 (v4.4)',        ends: '2026-07-14', desc: 'Rin Tohsaka + Gilgamesh arrive v4.4 Jul 24 — save Jade now', currency: { type: 'jade', amount: 0, note: 'Free Gilgamesh for logging in during event period' } },
    { id: 'ev_hsr_43',    game: 'hsr', tier: 'standard', name: 'v4.3 Pixel Plane Rumble + Wispae',     ends: '2026-07-14', desc: 'Pixelplane Rumble arcade event + Wispae Amusement Park management event', currency: { type: 'jade', amount: 0, note: 'Stellar Jade from event completions' } },
    { id: 'ev_czn_s3',    game: 'czn', tier: 'standard', name: 'Season 3 SS Edenity Patrol',           ends: '2026-07-08', desc: 'Seasonal event missions', currency: { type: 'crystals', amount: 0, note: 'Crystals + Rescue Anchors from missions' } },
    { id: 'ev_zzz_28',    game: 'zzz', tier: 'standard', name: 'v2.8 New Eridan Sunset Events',        ends: '2026-06-17', desc: 'Operation: Save Bootopia + login chain — ends with patch Jun 17', currency: { type: 'polychrome', amount: 0, note: 'Free Booltergeist Bangboo + event Polychrome' } },
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
