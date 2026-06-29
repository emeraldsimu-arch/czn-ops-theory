// ═══════════════════════════════════════════════════════════
// NEXUS v5.14 — CONFIG
// ── THIS IS THE ONLY FILE THAT NEEDS UPDATING ON PATCH DAY ──
// Last verified: 2026-06-29
// Next review: 2026-07-09 (WW 3.4 ends — patch and all WW cycle dates flip)
// Changes from 2026-06-12 verify:
//   - zzz patch: 2.8 → 3.0 (launched Jun 17, ends Jul 28 per 42-day cycle, v3.1 Jul 29)
//   - zzz_shiyu: 2026-06-26 → 2026-07-10 (biweekly Friday, next reset Jul 10 per Icy Veins)
//   - zzz_deadly: 2026-06-19 → 2026-07-02 (reset Jun 19, current cycle Jun 19–Jul 2 per Icy Veins)
//   - hsr_pf: 2026-06-22 — reset confirmed, next ends ~2026-08-03 (6-week cycle)
//   - hsr_moc: 2026-07-06 (confirmed, no change)
//   - hsr_as: 2026-07-20 (confirmed, no change)
//   - hsr_aa: 2026-07-13 (confirmed, no change)
//   - ww_toa: 2026-06-22 → 2026-07-20 (reset Jun 22, 28-day cycle → Jul 20 per LDShop guide)
//   - ww_ww: 2026-07-06 (confirmed, no change — Game8 v3.4)
//   - ww_em: 2026-07-09 (confirmed, ends with patch — no change)
//   - events: ZZZ v3.0 events added, WW 3.4 Cyberpunk collab updated, HSR 4.4 Fate collab noted
// ═══════════════════════════════════════════════════════════

const CONFIG = {
  version: '5.14',
  lastVerified: '2026-06-29',

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
    { game: 'zzz', version: '3.0',      ends: '2026-07-28', resetDay: 1 },
  ],

  cycles: {
    // HSR v4.3 (Jun 1 – Jul 14)
    // MoC resets Jul 6 — current cycle ends ~Aug 17 (next patch). Tracking Jul 6 end.
    // PF reset Jun 22 — 6-week cycle ends ~Aug 3. Tracking Jun 22 reset window.
    // AS reset Jun 8 — 6-week cycle ends ~Jul 20. Confirmed no change.
    // AA reset Jun 1 — 6-week cycle ends ~Jul 13. Confirmed no change.
    hsr_moc:    { ends: '2026-07-06', type: 'date',   label: 'Memory of Chaos' },
    hsr_pf:     { ends: '2026-08-03', type: 'date',   label: 'Pure Fiction' },
    hsr_as:     { ends: '2026-07-20', type: 'date',   label: 'Apocalyptic Shadow' },
    hsr_aa:     { ends: '2026-07-13', type: 'date',   label: 'Anomaly Arbitration' },

    // WW v3.4 (Jun 8 – Jul 9)
    // ToA reset Jun 22 — 28-day cycle ends Jul 20 per LDShop v3.4 guide.
    // WhiWa Jul 6 confirmed unchanged per Game8 v3.4.
    // Endstate Matrix ends with patch Jul 9 — confirmed unchanged.
    ww_toa:     { ends: '2026-07-20', type: 'date',   label: 'Tower of Adversity (all zones incl. Hazard Zone)' },
    ww_ww:      { ends: '2026-07-06', type: 'date',   label: 'Whimpering Wastes' },
    ww_em:      { ends: '2026-07-09', type: 'patch',  label: 'Endstate Matrix (v3.4 phase)' },
    ww_tg:      { ends: 'weekly',     type: 'weekly', label: 'Fantasies of Thousand Gateways' },

    // CZN — patch ends Jul 8, no change
    czn_boh:    { ends: '2026-07-08', type: 'patch',  label: 'Basin of Hyperspace' },
    czn_fso:    { ends: '2026-07-08', type: 'patch',  label: 'Full-Scale Offensive' },
    czn_sortie: { ends: 'weekly',     type: 'weekly', label: 'Sortie Mode run' },

    // ZZZ v3.0 (Jun 17 – Jul 28), v3.1 launches Jul 29
    // Shiyu biweekly Friday: last reset Jun 26, next Jul 10 per Icy Veins.
    // Deadly Assault: current cycle Jun 19–Jul 2 per Icy Veins, alternates with Shiyu.
    zzz_shiyu:  { ends: '2026-07-10', type: 'date',   label: 'Shiyu Defense / Critical Node' },
    zzz_deadly: { ends: '2026-07-02', type: 'date',   label: 'Deadly Assault' },
    zzz_hollow: { ends: 'weekly',     type: 'weekly', label: 'Hollow Zero / Operation Matrix' },
  },

  events: [
    // WW 3.4 — Cyberpunk collab ends with patch Jul 9. Critical — no rerun expected.
    { id: 'ev_ww_cyber',  game: 'ww',  tier: 'critical', name: 'Cyberpunk Edgerunners Collab (v3.4)', ends: '2026-07-09', desc: 'Non-rerun collab — Lucy and Rebecca, free Rebecca copy available', currency: { type: 'astrite', amount: 0, note: 'Free Rebecca + collab Astrite from missions' } },
    // HSR 4.4 — Fate/stay night Part 2 arrives Jul 24. Flag now so players save Jade.
    { id: 'ev_hsr_fate2', game: 'hsr', tier: 'critical', name: 'Fate/stay night Part 2 — Rin & Gilgamesh (v4.4)', ends: '2026-07-14', desc: 'Rin Tohsaka + free Gilgamesh arrive Jul 24 in v4.4 — save Jade now', currency: { type: 'jade', amount: 0, note: 'Free Gilgamesh for logging in during event; Rin is limited gacha' } },
    // ZZZ 3.0 — Season 3 launch, ends with patch Jul 28
    { id: 'ev_zzz_30',    game: 'zzz', tier: 'standard', name: 'v3.0 A Sleepwalker\'s Confession',    ends: '2026-07-28', desc: 'Season 3 launch events — Roscaelifer area, free Pyrois story unlock', currency: { type: 'polychrome', amount: 0, note: 'Event Polychrome + free Pyrois (story character)' } },
    // CZN Season 3 — unchanged
    { id: 'ev_czn_s3',    game: 'czn', tier: 'standard', name: 'Season 3 SS Edenity Patrol',           ends: '2026-07-08', desc: 'Seasonal event missions', currency: { type: 'crystals', amount: 0, note: 'Crystals + Rescue Anchors from missions' } },
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
