# NEXUS — Complete Project Handoff Document

**For:** Fresh Claude instance taking over development
**Date:** November 12, 2026
**Current version:** v5.20
**Live:** https://emeraldsimu-arch.github.io/czn-ops-theory/

---

## 1. WHAT THIS PROJECT IS

NEXUS is a personal game mission tracker and operations dashboard built for one user. It tracks daily tasks, weekly resets, endgame cycle clears, currency/pull planning, and long-term achievement progression across four priority games. It is a Progressive Web App — install via Chrome Android or iOS Safari to home screen, hosted on GitHub Pages, with **all data stored in localStorage on the device**.

Vanilla JS. No build tooling, no frameworks, no bundler. One user ("the Operator"), one deployment.

The tracker was built through an extended collaboration — every design decision, data verification, and architectural choice was discussed and agreed upon. The dual-pass methodology (developer lens + user lens before every build) is a standing requirement.

**Important:** The dual-pass is not an exercise in arguing. The developer pass catches technical issues. The user pass catches real UX friction. Neither pass should second-guess decisions that are already correct. If a decision is right, both passes confirm it and move on.

---

## 2. THE STACK


|
 Layer 
|
 Service 
|
 Details 
|
|
---
|
---
|
---
|
|
 Code storage 
|
 GitHub 
|
 Public repo: 
`emeraldsimu-arch/czn-ops-theory`
|
|
 Hosting 
|
 GitHub Pages 
|
 Deploy-from-branch on 
`main`
|
|
 Storage 
|
 localStorage 
|
 Device-only. No server-side copy. 
|
|
 PWA 
|
 Chrome Android / iOS Safari 
|
 Install to home screen 
|
|
 Fonts 
|
 Google Fonts 
|
 Orbitron, Syne, JetBrains Mono 
|

**Notion sync was removed in v5.15.** The sync code targeted `api.anthropic.com` and could never authenticate from a static site — it produced a permanent error state in the UI and a localStorage outbox that only grew. All of it (three push functions, the outbox queue, the flush timer, four call sites, and the `notion` config block) is deleted. Do not rebuild it, extend it, or propose re-enabling it unless the Operator raises it first. Local data durability via export/import is the replacement.

---

## 3. FILE STRUCTURE

czn-ops-theory/
├── index.html — app shell, PIN gate, tab structure
├── style.css — complete design system, all CSS variables
├── app.js — all logic and state management
├── sw.js — service worker (stale-while-revalidate)
├── manifest.json — PWA install config
├── .nojekyll — required; disables Jekyll processing
├── README.md — project documentation
├── HANDOFF.md — this document
├── tools/
│ ├── check.js — release checker: node tools/check.js (v5.20)
│ └── test.js — logic tests: node tools/test.js (v5.20)
├── icons/
│ ├── icon-192.png
│ └── icon-512.png
└── data/
├── config.js — ⭐ ONLY FILE TO TOUCH ON PATCH DAY
├── games.js — task lists, endgame modes, calendar plan
└── achievements.js — all achievement and dispatch definitions


**Script load order in `index.html` is load-bearing:** `config.js` → `games.js` → `achievements.js` → `app.js`. The achievement `check()` functions call helpers defined in `app.js` at global scope. Previously `achievements.js` carried stub versions of those helpers as a safety net; those were deleted in v5.15 because they masked failures rather than preventing them. Do not reorder the scripts or add `defer`/`async`.

**Critical rule:** On patch day, only `data/config.js` changes.

---

## 4. DESIGN SYSTEM — DO NOT CHANGE

- **Color palette:** dark tactical dashboard, `#08090c` background
- **Game accents:** CZN `#e84faa`, WW `#2de8a0`, HSR `#9d7ff5`, ZZZ `#4ab8f0`
- **Font stack:** Orbitron (headers/labels), Syne (body), JetBrains Mono (data/numbers)
- **Background:** subtle dot grid with radial gradients, plus a canvas starfield with planet and periodic asteroid pass
- **Per-game card motifs:** CZN diagonal crosshatch, WW wave repeat, HSR starfield + rail, ZZZ hollow-zone scan lines
- **Achievement tiers:** SIGNAL=blue, OPERATIVE=green, VANGUARD=purple, PHANTOM=gold

---

## 5. GAMES TRACKED

Priority order is user-defined. Do not change.

| P | Game | Short | Accent | Reset |
|---|---|---|---|---|
| P1 | Chaos Zero Nightmare | CZN | `#e84faa` | Sunday 18:00 UTC (weekly only, no daily reset) |
| P2 | Wuthering Waves | WW | `#2de8a0` | Daily 20:00 UTC / Weekly Monday |
| P3 | Honkai: Star Rail | HSR | `#9d7ff5` | Daily 10:00 UTC / Weekly Monday |
| P4 | Zenless Zone Zero | ZZZ | `#4ab8f0` | Daily 10:00 UTC / Weekly Monday |

HoYo-style games are on America servers. 7DSO was removed in v5.5 — do not re-add. ZZZ was promoted to a full P4 card in v5.5; no passive strip.

---

## 6. NEXUS LANGUAGE SYSTEM

- **DISPATCHES** — weekly commendations, reset every Monday
- **SIGNAL → OPERATIVE → VANGUARD → PHANTOM** — permanent achievement tiers
- **NEXUS RECORD** — lifetime stats panel
- **Cycle clears** — endgame completions tied to in-game reset dates, NOT weekly resets
- **Operator** — the user

Keep all UI copy in this voice.

---

## 7. ACHIEVEMENT SYSTEM

**Dispatches:** 10 per week, reset Monday. IDs are hardcoded in a `switch` in `checkDispatch()` in `app.js` and must stay in sync with the `DISPATCHES` array in `achievements.js` — a mismatch silently produces an unearnable dispatch.

**Permanent achievements:** four tiers, 32 total. Names are game-specific lore references.

**PHANTOM tier names (user-selected, do not rename):**
- The SS Nightmare Recognizes You
- Bella Has Stopped Asking
- The Express Doesn't Wait
- The Trailblaze Continues
- A Hundred Fractures, All Remembered
- The Zero System Has Seen Everything
- What the Zero System Keeps
- The Resonance Doesn't Ask Permission

**Debounce rules:** SIGNAL 5s, OPERATIVE+ 60s, minimum 2 tasks completed before any permanent achievement fires.

`p_zero_system` fires when all other achievements are unlocked (`>= ACHIEVEMENTS.length - 1`). It is the last domino — if any single achievement is unreachable, this one is too.

Achievement `check()` calls run inside a `try {} catch {}` that swallows errors silently. A broken check does not throw visibly; it simply never fires. Test changes deliberately.

---

## 8. STATE OWNERSHIP — CRITICAL ARCHITECTURE

**One owner per field, no exceptions.** This is law.

| Field | Owner | Trigger |
|---|---|---|
| Daily task state | `setv()` via `togT()` / `sessionToggleDaily()` | User tap — keyed by `dk(gid)` |
| Weekly task state | `setv()` via `togT()` | User tap — keyed by `wk(gid)` |
| Cycle clear state | `setCy()` / `setCyWeekly()` | User tap |
| `totalCycleClears` | **`recordCycleClear()` ONLY** | Called by `togCy()` and `sessionToggleCycle()` |
| `*LifetimeCycleClears` | **`recordCycleClear()` ONLY** | Called by `togCy()` and `sessionToggleCycle()` |
| `totalPerfectWeeks` | `checkWeekRollover()` ONLY | Monday rollover |
| `weeksTracked` | `checkWeekRollover()` ONLY | Monday rollover |
| `totalTasksCompleted` | `updateLT()` ONLY | Any task tap (delta accumulator) |
| `dailyCompletions` | `updateLT()` ONLY | Any task tap |
| `unlockedAch` | `checkAllAchievements()` | Debounced tap |
| `unlockedDispatches` | `checkAllAchievements()` ONLY | Debounced tap — **week-scoped**, see below |
| `totalDispatchesEarned` | `checkAllAchievements()` ONLY | Debounced tap |
| `_ltSeenTasks` | `updateLT()` ONLY | Per-task "already counted" latch (v5.20) |
| `_cyCounted` | `recordCycleClear()` ONLY | Per-cycle-instance "already counted" latch (v5.20) |
| Card collapse prefs (`nexus_v53_col`) | `togCol()` ONLY | User tap |

**v5.20 change — idempotent lifetime counters (audit F3).** `totalTasksCompleted`
used a week-level delta (`count now − count last seen`), so unticking and
re-ticking a task counted it twice. `totalCycleClears` was incremented on
every clear, so off/on toggling inflated it. Both writers are unchanged, but
each now latches: `updateLT()` counts a task once per bucket via
`_ltSeenTasks` (ids `<bucketKey>|<gid>|d|w|<idx>`, pruned to the current
buckets), and `recordCycleClear()` counts a cycle once per *cycle identity*
via `_cyCounted` (see §10). `_ltSeenWeek` / `_ltSeenCount` are deleted on
first run. `migrateV520()` seeds `_cyCounted` once for cycles already cleared
at upgrade — a one-time migration write, like the v5.18 dispatch migration.

**v5.18 change:** `unlockedDispatches` changed shape from a flat `{ id: true }`
map to `{ week: '<wk() key>', ids: { id: true } }`. DISPATCHES are weekly
commendations, but nothing ever cleared the flat map, so every dispatch could
be earned exactly once ever — `totalDispatchesEarned` capped at
`DISPATCHES.length` permanently and the toasts went silent after the first few
weeks. The latch now resets whenever `ud.week !== wk()`. The legacy flat map is
migrated by carrying its ids into the current week (not discarding them), so
upgrading does not replay a screenful of toasts or double-count the total.
`checkWeekRollover()` READS this latch to report the ended week's dispatch
count — it must keep running before any `checkAllAchievements()` at init, or
the latch will already have rolled. Do not reorder init.

**v5.16 change:** `recordCycleClear()` was extracted because `togCy()` and `sessionToggleCycle()` each incremented the cycle-clear fields directly — two writers on single-owner fields. Session Mode was added after the original table was written and nobody updated it. Behaviour was correct in practice (the two paths can't both fire for one clear), but it was exactly the shape of the v5.5 double-count bug. If you add a third entry point for clearing a cycle, call `recordCycleClear()` — do not write the fields inline.

**Never add a second writer to any field in this table.** The v5.5 bugs (double-count perfect weeks, undercount cycle clears) both came from two functions writing the same field.

---

## 9. DAILY RESET ARCHITECTURE

Daily tasks use `dk(gameId)` — a per-game day key that respects actual game reset times.

// If current UTC hour < game's dailyUTC, use yesterday's date.
// Tasks stay checked until the game actually resets, not at midnight.
dk('hsr') → 'D2026-07-20-hsr' // resets 10:00 UTC
dk('ww') → 'D2026-07-19-ww' // resets 20:00 UTC
dk('zzz') → 'D2026-07-20-zzz' // resets 10:00 UTC
dk('czn') → falls through to wk('czn') // no daily reset


Weekly tasks use `wk(gameId)` — Monday-anchored for HSR/WW/ZZZ, Sunday 18:00 UTC for CZN.

Reset times live in `config.js → resetTimes`.

**Config dates are calendar days, not instants (v5.20, audit F1).** `new Date('2026-11-13')` is UTC midnight — 18:00 on Nov 12 in US Central — so every countdown, "Ends" label, freshness check and cycle expiry used to run a day early for the Operator. All config dates (`ends`, `unlocks`, `lastVerified`, stored day strings) must go through `parseDay()` / `daysUntil()` / `localISO()` at the top of `app.js`. Never construct a `Date` from a bare ISO day string anywhere else. `tools/test.js` pins US Central and covers this.

---

## 10. CYCLE CLEAR ARCHITECTURE

Cycle clears are NOT weekly tasks. They have their own reset schedules.

**Four cycle types:** `date` | `patch` | `weekly` | `permanent`

Cycle clear rows render **ABOVE** weekly tasks in every game card.

**Cycle identity (v5.20, audit F2/F4).** A clear belongs to one cycle *instance*, identified by `cycleIdentity(k)`: the cycle's current `ends` string for `date` / `patch` / `permanent` cycles, or the owning game's `wk(gid)` for `weekly` cycles (so CZN's Sortie follows the Sunday 18:00 UTC week). `CY_<key>` stores `{ cleared, ends | weekKey, date }`; `getCy()` is true only while the stored `ends` equals the configured `ends`. Before v5.20 it compared dates only, so a clear from the previous cycle **resurrected** when config rolled `ends` forward.

Consequences for patch day: rolling a cycle's `ends` forward un-clears it — that is correct. Never edit an old date back to "restore" a clear.

**Expired rows.** When a dated cycle's `ends` has passed but config hasn't been rolled, `isCycleExpired()` is true: the row shows **Awaiting data**, is locked, and is excluded from the Today panel, Endgame Alerts, the planner and Session Mode (`isCycleOpen()`). There is no valid instance to clear until config names the new one.

Current end dates live in `config.js → cycles` and are verified on patch day. Do not duplicate them here — a hardcoded date list in this document is exactly how `games.js` rotted for two months.

---

## 11. PATCH LABEL / DEADLINE DERIVATION (v5.15)

`games.js` previously carried `patch`, `deadline`, and `deadlineSoon` fields per game. These duplicated data `config.js` already owned, so they silently went stale — by July 2026 `games.js` was showing "VER 4.2 — 3RD ANNIVERSARY / Ends Jun 1" while config was correctly on HSR 4.4. `deadlineSoon` was a hand-maintained boolean that was flat wrong on two games.

Those fields are **deleted**. `buildCard()` now calls `resolvePatchLabel(gid)` and `resolveDeadline(gid)`, which read from `CONFIG.patches`. The ⚠ deadline warning is computed (fires inside 7 days) rather than hand-set.

Each `CONFIG.patches` entry carries an optional `label` for the display string (e.g. `'VER 4.4 — IN RAVAGES DOES THE WHISTLE SOUND'`); without it the resolver falls back to `'VER ' + version`.

**Do not re-add patch or deadline fields to `games.js`.** That file is task lists and mode definitions only — no dates.

---

## 12. LOCAL ARCHIVE BACKUP (v5.16)

localStorage is the only copy of the NEXUS RECORD. A cleared cache, a phone reset, or "clear site data" erases everything permanently.

The NEXUS RECORD panel has Export and Import buttons:

- **Export** serialises all twelve `nexus_v53*` keys (v5.20 added `nexus_v53_col`, card collapse prefs) into `nexus-backup-YYYY-MM-DD.json` with a format version, app tag, app version, and ISO timestamp. Writes `nexus_v53_bak` so the panel can show backup age.
- **Import** validates shape (`_app === 'NEXUS'`, format not newer than current), summarises the backup's contents, confirms **twice**, then **replaces** all tracked keys and reloads. Merge semantics were considered and rejected — reconciling two divergent lifetime-stat sets is guesswork.
- **The PIN (`nexus_pin`) is deliberately excluded** so the backup file carries no credential. A restore re-enters the PIN at the gate.
- The age label turns amber at 14 days, red if never backed up.

`BACKUP_KEYS` is built from the existing storage-key constants so it cannot drift. **If you add a new storage key, add it to `BACKUP_KEYS`** or it won't survive a restore.

---

## 13. PULL & PITY SYSTEM

| Game | Currency | Per Pull | Soft Pity | Hard Pity | 50/50 | Pity Carries |
|---|---|---|---|---|---|---|
| HSR | Stellar Jade | 160 | ~74 | 90 | Yes | Yes |
| WW | Astrite | 160 | ~62 | 80 | Yes | Yes |
| CZN | Crystals | 160 | 58 | 70 | Yes (Combatant) | Yes |
| ZZZ | Polychrome | 160 | ~75 | 90 | Yes | Yes |

Re-verify against community data each major patch. Values live in `config.js → pulls`.

---

## 14. CALENDAR TAB

Session planning tool, not a duplicate of the tracker. It answers "how should I structure my session today," not "what tasks exist."

Structure top to bottom: **Featured Day** (priority order, time budget, can-wait list) → **Week Strip** (7-day, tappable, expands to a day detail panel) → **Workload Burn Chart** → **Planning Notes**.

The week strip load bars are dynamic (v5.14): tasks carrying a `cycleKey` are checked against `getCy()`, and cleared cycles subtract their share from the day's load before past-day decay applies. Keyed tasks are weighted at 60% of day load with an 8% floor so a bar never fully disappears.

---

## 15. DEPLOYMENT PROCESS — BRANCH-BASED

GitHub Pages auto-deploys on every merge to `main`. All changes go through a branch first.

**FILE NAMING:** GitHub Pages runs on case-sensitive Linux. All filenames lowercase — `app.js` not `App.js`. Uppercase filenames 404 even though they look fine in the GitHub UI on Windows/Mac.

**Repo:** `github.com/emeraldsimu-arch/czn-ops-theory` (public)
**Pages source:** deploy from branch, `main`
**`.nojekyll`:** required at repo root

**Workflow:**
1. Create a branch (e.g. `v5-17`, `patch-august`)
2. Commit every changed file to the branch — zero deploys during this phase
3. Open the PR, review the diff
4. Merge to `main` → **one** deploy → verify at the live URL

Never commit directly to `main` during a multi-file update.

**Files by update type:**

| Update type | Files |
|---|---|
| Patch day (dates only) | `data/config.js` only |
| Task list change | `data/games.js` |
| Logic fix | `app.js` |
| Visual change | `style.css` |
| New achievements | `data/achievements.js` |
| New version | changed files + `CONFIG.version` + `sw.js` cache name + README |

**Versioning:** `CONFIG.version` in `data/config.js` is the single source of truth. The header logo renders from it automatically (v5.15) and needs no manual edit. Bump `CACHE_NAME` in `sw.js` whenever any file outside `data/` changes. Update the README version line.

**Before merging**, both must exit clean:

```
node tools/test.js    # logic tests — dates, cycles, counters, storage, migration (pins US Central)
node tools/check.js   # versions agree everywhere, nothing expired, keys/ids/filenames/precache valid
```

**Service worker (v5.20):** app-shell files are stale-while-revalidate (fast start); `data/*.js` is **network-first** with cache fallback, so a patch-day `config.js` fix is live on the first open after deploy. Shell changes still need one extra reload to pick up the new SW.

---

## 16. DATA VERIFICATION STANDARD

Verify from at least 2 independent sources before adding or changing game data:

- Game8 (game8.co)
- Prydwen (prydwen.gg) or Icy Veins
- GameWith, official announcements, or Fandom wikis

Never trust training data alone for cycle end dates, event deadlines, pull/pity numbers, new game modes, or reset schedules.

`config.js` carries a `Next review:` date in its header. If today is past it, flag that a patch-day update is due before doing anything else.

**Scheduled data check.** A scheduled task, "NEXUS config.js date check", runs Mondays and Thursdays at 7:14am US Central. If no row has expired and Next review hasn't passed, it sends a one-line "data current" message. Otherwise it runs the full verification pass below, runs `tools/check.js`, and opens a PR from a `data-YYYY-MM-DD` branch for the Operator to review and merge. It never merges and never touches files outside `data/config.js`. It exists because the two data passes before it were 10 days and ~2 months overdue.

---

## 17. HOW TO DO A PATCH UPDATE

1. Web search per game: `[game] current version patch [month year] endgame schedule game8`
2. Fetch Game8 and Icy Veins / Prydwen for each game separately — combined queries return shallow results
3. Create a branch
4. Update **only** `data/config.js`: `lastVerified`, `patches[]` (including `label`), `cycles{}`, `events[]` — remove expired events (they trip the stale banner since v5.20)
5. Keep the annotated changelog header format — note what changed, what was confirmed unchanged, what's estimated vs verified, and the next review date
6. `node tools/check.js` must pass
7. Dual pass
8. Merge → one deploy → verify

If a patch update requires touching any file other than `config.js`, the design is wrong. Stop and discuss.

---

## 18. HOW TO DO A FEATURE UPDATE

1. User describes what they want
2. Ask clarifying questions only when genuinely ambiguous
3. Developer pass — architecture, data model, state ownership, edge cases
4. User pass — daily-use experience on a ~380px phone screen
5. Present both passes, discuss adjustments
6. Lock scope explicitly before writing code
7. Build all files for the batch
8. Audit pass — review written code for bugs, optimisations, consistency
9. Report audit findings — user decides what gets folded in
10. Branch → commit → merge → one deploy → verify

**Deliver complete files, not fragments.** The Operator replaces whole files rather than hunting for individual sections. Always state which files changed and whether the SW cache name needs bumping.

This methodology is non-negotiable.

---

## 19. WHAT THE USER VALUES

- The NEXUS aesthetic — dark, tactical, neon accents. Never change without asking.
- The NEXUS language system — Dispatches, tiers, Operator. Use consistently.
- PHANTOM achievement names — chosen carefully, do not rename.
- Accuracy over assumptions — always verify game data before adding it.
- The dual-pass + audit methodology — this is how bugs get caught.
- Complete files over patch fragments.
- GitHub branches — never deploy mid-session, always batch into one merge.
- Lowercase filenames, always.

---

## 20. KNOWN MINOR ISSUES (non-breaking, flagged)

- `getv()` still takes an unused `s` parameter (kept for call-site compatibility).
- Google Fonts loaded via `@import` in CSS — render-blocking, and not cached offline (the SW skips cross-origin). Scheduled for v5.21 (self-host + precache).
- `cyclesDone()` in the week-rollover modal reads *current* cycle state, not the archived week's — the "Cycle Clears" figure there is misleading.
- Storage keys still carry the `v53` prefix. Renaming would orphan all existing data — **leave them alone.**
- `totalTasksCompleted` history before v5.16 was not recovered (opening balance kept). Untick/retick inflation before v5.20 was not unwound.
- `ld()` returns one shared in-memory object (v5.20). Mutating it without `sv()` changes memory only — fine for adding an empty bucket, wrong for anything meant to persist. Always `sv()` what you change.
- Day/week buckets older than 70 days are pruned at boot (`pruneStore()`, after `checkWeekRollover()`). Anything new that needs older history must change `PRUNE_DAYS` first.

Resolved in v5.20: notes autosave debounced; `confirmReset()` now clears every game's week and today's dailies (Operator decision); unused `ws()` / `ds()` / `zzzEndgameDone()` / `getDailyCompletionCount()` removed.

**Open audit items (Nov 2026 system audit doc, v5.21+):** events have no visible panel (only critical events within 3 days surface in Today); task rows ~26px tall and 70 rules at 7–9px text on a 380px phone; top scrolling nav; tracker repeats cycle alerts; starfield redraws at full frame rate and ignores reduced-motion; minimal ARIA. All approved by the Operator on 2026-11-12 — see §21 roadmap.

---

## 21. VERSION HISTORY — RECENT

**v5.20 — Integrity** (Nov 2026 audit F1–F9). Local-calendar date parsing everywhere (dates had read a day early in US Central). Cycle clears bound to the cycle instance (`ends`) — no more resurrection after a data update; expired rows lock as "Awaiting data". Idempotent lifetime counters (`_ltSeenTasks`, `_cyCounted`). CZN Sortie on the CZN week. "Reset this week" clears all games' weeks + today's dailies. In-memory store cache + 70-day pruning. Collapse prefs in `nexus_v53_col` (backed up). Expired events trip the stale banner. SW network-first for `data/`. New `tools/check.js` + `tools/test.js`. One-time `migrateV520()` keeps everything the Operator currently sees.

**Roadmap (approved 2026-11-12):** v5.21 Field-ready — Events section above the game cards (critical pinned), 44px rows, type floor 11px data / 10px Orbitron, bottom tab bar, Endgame Alerts folded into Today, collapsed-card summary line, throttled starfield + reduced-motion, self-hosted fonts, ARIA roles. v5.22 — `cadence` cycle type (`anchor` + `everyDays`) so fixed-rhythm modes roll themselves; NEXUS RECORD weekly history; backup nudge.

**v5.19** — Freshness banner names every expired cycle, not just the first.

**v5.18** — `getv()` resolves per-game keys (CZN weeklies had always read false); weekly-scoped dispatch latch; week-rollover % rewritten.

**v5.17** — Import format guard; local-date backup filename.

**v5.16** — Local Archive Backup (export/import). `totalTasksCompleted` converted from `Math.max` to a true delta accumulator. `recordCycleClear()` extracted as the single owner for cycle-clear fields. This document rewritten.

**v5.15** — Notion sync stripped entirely. Patch-day config update (CZN interim/S4, WW 3.5, HSR 4.4, ZZZ 3.0). Patch labels and deadlines derived from `config.js` instead of hardcoded in `games.js`. Logo version rendered from `CONFIG.version`. Helper stubs deleted from `achievements.js`. SW cache bump, icon precache restored, fetch handler hardened (individual `cache.add`, cross-origin and non-GET pass through). `Netfly.toml` deleted. README refreshed.

**v5.14** — Dynamic week strip load calculation.

**v5.6** — State ownership table established. Daily reset architecture. Calendar rebuild.

---

## 22. STARTING INSTRUCTIONS FOR NEXT CHAT

1. **The GitHub repo `emeraldsimu-arch/czn-ops-theory` (`main`) is the source of truth** (Operator decision, 2026-11-12). Clone it; don't rely on files pasted into chat or project knowledge, which go stale
2. Check `config.js` header — if today is past `Next review:`, flag a patch update as the first priority
3. Ask what they want to work on
4. Create a branch before writing any code
5. Follow dual-pass + audit methodology
6. Batch all files, one merge, one deploy per session

The user is a good collaborator and will push back if something feels wrong. Trust their instincts — they have caught real bugs and made good design calls throughout the project, including spotting the stale `games.js` dates that triggered the v5.15 derivation refactor.

---

*Updated November 12, 2026 — v5.20. GitHub `main` is the source of truth; localStorage is the only data store. Hosted on GitHub Pages, deploy-from-branch on `main`.*
