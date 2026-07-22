// ═══════════════════════════════════════════════════════════
// NEXUS v5.15 — GAME DATA
// Task lists, endgame modes, calendar plan
// Last verified: 2026-07-20
// Changes from v5.14:
//   - PATCH-DAY RULE FIX. The hardcoded `patch`, `deadline`, and
//     `deadlineSoon` fields duplicated data config already owns,
//     so they silently rotted (this file was 2 months / 3 patches
//     stale while config.js looked current). They are now DERIVED
//     from CONFIG.patches at render time — see resolvePatchLabel()
//     and resolveDeadline() in app.js. Do not re-add them here.
//   - Patch version display now lives in CONFIG.patches[].label.
//   - Removed expired event tasks: WW Cyberpunk collab (ended
//     Jul 9), HSR free Huohuo/Robin claim (ended Jun 1), ZZZ v2.8
//     "Operation: Save Bootopia" (ended Jun 10).
//   - Replaced the two hardcoded "Anniversary event missions"
//     dailies with generic "current event missions" rows that do
//     not need editing every patch.
//   - ww_em endgame label: "v3.3 phase" → "current phase"
//     (the version is now read from config).
// ═══════════════════════════════════════════════════════════

const GAMES = [
  {
    id: 'czn',
    name: 'CHAOS ZERO NIGHTMARE',
    short: 'CZN',
    priority: 1,
    // patch / deadline / deadlineSoon are DERIVED from CONFIG.patches
    accent: '--czn',
    dim: '--czn-dim',
    dailyLoad: 0.3,
    weeklyLoad: 1.5,
    resetDay: 0,
    resetNote: 'Daily & Weekly 18:00 UTC (1PM CT)',

    daily: [
      { t: 'Achievement Schedule — earn 100 points (60 Crystals)', tag: 'res', jade: 60 },
      { t: 'Arkhianon Supply — daily missions (battle pass EXP)', tag: 'res', jade: 0 },
      { t: 'Policy Office — implement policies before cap (refreshes 4×/day)', tag: 'res', jade: 0 },
      { t: 'Garden Cafe — claim daily Aether recovery (80 instant or 60 item)', tag: 'res', jade: 0 },
      { t: 'Spend Aether on Simulation runs (×2 multiplier available)', tag: 'res', jade: 0 },
    ],

    weekly: [
      { t: 'Spiral Tower of Screams — attempt 1/5', tag: 'endgame', jade: 0 },
      { t: 'Spiral Tower of Screams — attempt 2/5', tag: 'endgame', jade: 0 },
      { t: 'Spiral Tower of Screams — attempt 3/5', tag: 'endgame', jade: 0 },
      { t: 'Spiral Tower of Screams — attempt 4/5', tag: 'endgame', jade: 0 },
      { t: 'Spiral Tower of Screams — attempt 5/5', tag: 'endgame', jade: 0 },
      { t: 'Simulation Challenge — weekly boss ×3 (Potential Materials)', tag: 'endgame', jade: 0 },
      { t: 'Guild Office — weekly bounty missions (Crystals of Discord)', tag: 'weekly', jade: 200 },
      { t: "Nono's Shop — weekly priority purchases (Multidimensional Alignment Material)", tag: 'mat', jade: 0 },
      { t: 'Check character / deck upgrade progress', tag: 'prog', jade: 0 },
      { t: 'Review event deadlines & limited content', tag: 'event', jade: 0 },
    ],

    endgameModes: [
      { id: 'czn_boh',    name: 'Basin of Hyperspace',  cycleKey: 'czn_boh' },
      { id: 'czn_fso',    name: 'Full-Scale Offensive', cycleKey: 'czn_fso' },
      { id: 'czn_sortie', name: 'Sortie Mode run',      cycleKey: 'czn_sortie' },
    ],
  },

  {
    id: 'ww',
    name: 'WUTHERING WAVES',
    short: 'WW',
    priority: 2,
    accent: '--ww',
    dim: '--ww-dim',
    dailyLoad: 0.4,
    weeklyLoad: 2.0,
    resetDay: 1,
    resetNote: 'Resets Monday 04:00 UTC+8 (20:00 UTC Sunday)',

    daily: [
      { t: 'Spend Waveplates on Echo / material farming', tag: 'res', jade: 60 },
      { t: 'Complete daily Guidebook activities (100 Activity Points)', tag: 'res', jade: 0 },
      { t: 'Claim daily login reward', tag: 'res', jade: 0 },
      { t: 'Current event missions — see Events panel', tag: 'event', jade: 0 },
    ],

    weekly: [
      { t: 'Weekly tacet discord boss materials ×3 cap', tag: 'mat', jade: 0 },
      { t: 'Weekly event progress — check current patch events', tag: 'event', jade: 0 },
    ],

    endgameModes: [
      { id: 'ww_toa', name: 'Tower of Adversity (all zones incl. Hazard Zone)', cycleKey: 'ww_toa' },
      { id: 'ww_ww',  name: 'Whimpering Wastes',                                cycleKey: 'ww_ww'  },
      { id: 'ww_em',  name: 'Endstate Matrix (current phase)',                  cycleKey: 'ww_em'  },
      { id: 'ww_tg',  name: 'Fantasies of Thousand Gateways',                   cycleKey: 'ww_tg'  },
    ],
  },

  {
    id: 'hsr',
    name: 'HONKAI: STAR RAIL',
    short: 'HSR',
    priority: 3,
    accent: '--hsr',
    dim: '--hsr-dim',
    dailyLoad: 0.4,
    weeklyLoad: 2.5,
    resetDay: 1,
    resetNote: 'Resets Monday 04:00 UTC-5 (10:00 UTC)',

    daily: [
      { t: 'Spend Trailblaze Power (stamina)', tag: 'res', jade: 60 },
      { t: 'Complete Daily Training missions (×4)', tag: 'res', jade: 0 },
      { t: 'Collect Assignments', tag: 'res', jade: 0 },
      { t: 'Current event missions — see Events panel', tag: 'event', jade: 0 },
    ],

    weekly: [
      { t: 'Echo of War — weekly boss ×3 (material cap)', tag: 'mat', jade: 0 },
      { t: 'Simulated Universe / Currency Wars — Accumulated Points cap', tag: 'weekly', jade: 225 },
      { t: 'Nameless Honor — weekly missions', tag: 'weekly', jade: 0 },
      { t: 'Check limited-time claims & event deadlines', tag: 'prog', jade: 0 },
    ],

    endgameModes: [
      { id: 'hsr_moc', name: 'Memory of Chaos',    cycleKey: 'hsr_moc' },
      { id: 'hsr_pf',  name: 'Pure Fiction',        cycleKey: 'hsr_pf'  },
      { id: 'hsr_as',  name: 'Apocalyptic Shadow',  cycleKey: 'hsr_as'  },
      { id: 'hsr_aa',  name: 'Anomaly Arbitration', cycleKey: 'hsr_aa'  },
    ],
  },

  {
    id: 'zzz',
    name: 'ZENLESS ZONE ZERO',
    short: 'ZZZ',
    priority: 4,
    accent: '--zzz',
    dim: '--zzz-dim',
    dailyLoad: 0.2,
    weeklyLoad: 1.5,
    resetDay: 1,
    resetNote: 'Resets Monday 04:00 UTC-5 (10:00 UTC)',

    daily: [
      { t: 'Daily Errands ×4 — Login, Coffee, Scratch Cards, Video Store (60 Polychrome)', tag: 'res', jade: 60 },
      { t: 'Spend Battery Charge in Combat Simulation / Routine Cleanup', tag: 'res', jade: 0 },
      { t: 'HoYoLAB daily check-in (30 Polychrome)', tag: 'res', jade: 0 },
      { t: 'Trust invites — 3 Agents daily (Trust Level progress)', tag: 'prog', jade: 0 },
    ],

    weekly: [
      { t: 'Notorious Hunts — 3 free attempts (resets Monday)', tag: 'mat', jade: 0 },
      { t: 'Ridu Weekly — complete all tasks (105 Polychrome)', tag: 'weekly', jade: 105 },
      { t: 'New Eridu City Fund — weekly mission progress', tag: 'weekly', jade: 0 },
      { t: 'Current patch event missions — see Events panel', tag: 'event', jade: 0 },
    ],

    endgameModes: [
      { id: 'zzz_shiyu',  name: 'Shiyu Defense / Critical Node', cycleKey: 'zzz_shiyu'  },
      { id: 'zzz_deadly', name: 'Deadly Assault',                cycleKey: 'zzz_deadly' },
      { id: 'zzz_hollow', name: 'Hollow Zero / Operation Matrix',cycleKey: 'zzz_hollow' },
    ],
  },
];

// ── Weekly calendar plan ──
// cycleKey field (optional): links a task to a tracked endgame cycle.
// renderWeekStrip() uses this to subtract cleared cycles from each
// day's dynamic load bar. Tasks without cycleKey are static (dailies,
// weeklies, non-cycle content) and always contribute their full weight.
const WEEK_PLAN = [
  {
    day: 'MON', load: 'medium', focus: 'CZN + HSR Dailies',
    tasks: [
      { l: 'CZN Dailies + Spiral Tower ×2', c: '#e84faa' },
      { l: 'HSR Dailies + Trailblaze Power', c: '#9d7ff5' },
      { l: 'WW Dailies + Echo farm',         c: '#2de8a0' },
      { l: 'ZZZ Errands + Battery Charge',   c: '#4ab8f0' },
    ]
  },
  {
    day: 'TUE', load: 'light', focus: 'ZZZ + Materials',
    tasks: [
      { l: 'ZZZ Notorious Hunts + Ridu Weekly', c: '#4ab8f0' },
      { l: 'CZN Spiral Tower ×1',               c: '#e84faa' },
      { l: 'WW Waveplate spend',                c: '#2de8a0' },
    ]
  },
  {
    day: 'WED', load: 'heavy', focus: 'WW Endgame Block',
    tasks: [
      { l: 'WW Tower of Adversity (all zones incl. Hazard Zone)', c: '#2de8a0', cycleKey: 'ww_toa' },
      { l: 'WW Whimpering Wastes',              c: '#2de8a0', cycleKey: 'ww_ww' },
      { l: 'HSR Daily + Sim Universe',          c: '#9d7ff5' },
      { l: 'CZN Spiral Tower ×1',               c: '#e84faa' },
    ]
  },
  {
    day: 'THU', load: 'medium', focus: 'HSR Endgame Block',
    tasks: [
      { l: 'HSR Memory of Chaos',     c: '#9d7ff5', cycleKey: 'hsr_moc' },
      { l: 'HSR Pure Fiction',        c: '#9d7ff5', cycleKey: 'hsr_pf'  },
      { l: 'ZZZ Hollow Zero run',     c: '#4ab8f0', cycleKey: 'zzz_hollow' },
      { l: 'CZN Basin of Hyperspace', c: '#e84faa', cycleKey: 'czn_boh' },
    ]
  },
  {
    day: 'FRI', load: 'heavy', focus: 'HSR + ZZZ Endgame',
    tasks: [
      { l: 'HSR Apocalyptic Shadow',    c: '#9d7ff5', cycleKey: 'hsr_as'    },
      { l: 'HSR Anomaly Arbitration',   c: '#9d7ff5', cycleKey: 'hsr_aa'    },
      { l: 'ZZZ Shiyu Defense / Critical Node', c: '#4ab8f0', cycleKey: 'zzz_shiyu'  },
      { l: 'ZZZ Deadly Assault',        c: '#4ab8f0', cycleKey: 'zzz_deadly' },
      { l: 'WW Endstate Matrix',        c: '#2de8a0', cycleKey: 'ww_em'     },
    ]
  },
  {
    day: 'SAT', load: 'medium', focus: 'CZN Deep Session',
    tasks: [
      { l: 'CZN Sortie Mode run',      c: '#e84faa', cycleKey: 'czn_sortie' },
      { l: 'CZN Full-Scale Offensive', c: '#e84faa', cycleKey: 'czn_fso'    },
      { l: 'WW Thousand Gateways',     c: '#2de8a0', cycleKey: 'ww_tg'      },
      { l: 'Mop-up any missed dailies',c: '#4a5468' },
    ]
  },
  {
    day: 'SUN', load: 'light', focus: 'Catch-up + CZN Weekly Reset',
    tasks: [
      { l: 'CZN weekly reset — Guild Office + Nono Shop', c: '#e84faa' },
      { l: 'ZZZ Trust invites + event check',             c: '#4ab8f0' },
      { l: 'Any missed endgame modes',                    c: '#4a5468' },
      { l: 'Plan next week pulls',                        c: '#4a5468' },
    ]
  },
];

if (typeof module !== 'undefined') { module.exports = { GAMES, WEEK_PLAN }; }
