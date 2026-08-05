# NEXUS — Game Mission Tracker

A personal operations dashboard and mission tracker for four priority gacha games. Built as a vanilla-JS Progressive Web App — no frameworks, no build step, no bundler. Install to your home screen for a full-screen native app experience.

**Live:** `https://emeraldsimu-arch.github.io/czn-ops-theory/`
**Version:** v5.19
**Last updated:** July 2026

Single user ("the Operator"), single deployment. Not accepting contributions.

---

## What It Does

NEXUS tracks everything across four games in one place:

- **Daily tasks** — reset at each game's actual server reset time, not midnight
- **Weekly tasks** — Monday-anchored, except CZN which resets Sunday 18:00 UTC
- **Endgame cycle clears** — tracked against real in-game cycle end dates, independent of weekly resets
- **Currency & pull planning** — balance input, pull count, and pity tracking per game
- **Achievement system** — four permanent tiers (SIGNAL → OPERATIVE → VANGUARD → PHANTOM) plus weekly Dispatches
- **Session planner** — calendar view showing what to prioritise, time budget, and what can wait
- **Local Archive Backup** — export/import your entire record as a JSON file

---

## Games Tracked

Priority order is fixed and load-bearing — cards render in this sequence.

| Priority | Game | Short | Daily reset | Weekly reset |
|---|---|---|---|---|
| P1 | Chaos Zero Nightmare | CZN | — (weekly only) | Sunday 18:00 UTC |
| P2 | Wuthering Waves | WW | 20:00 UTC | Monday 20:00 UTC |
| P3 | Honkai: Star Rail | HSR | 10:00 UTC | Monday 10:00 UTC |
| P4 | Zenless Zone Zero | ZZZ | 10:00 UTC | Monday 10:00 UTC |

HoYoverse titles are tracked on **America** servers. Reset times live in `data/config.js → resetTimes`.

---

## Stack

| Layer | Service | Details |
|---|---|---|
| Code | GitHub | Public repo: `emeraldsimu-arch/czn-ops-theory` |
| Hosting | GitHub Pages | Deploy-from-branch on `main` |
| Storage | localStorage | Device-only. No server-side copy. |
| PWA | Chrome Android / iOS Safari | Install to home screen |
| Fonts | Google Fonts | Orbitron, Syne, JetBrains Mono |

No backend, no database, no API keys, no analytics.

---

## Your Data Lives On One Device

**localStorage is the only copy of your NEXUS RECORD.** Clearing your browser cache, resetting your phone, or using "clear site data" erases it permanently. There is no server-side backup and no account to restore from.

The NEXUS RECORD panel therefore has an **Export / Import** pair:

- **Export** writes every tracked storage key to `nexus-backup-YYYY-MM-DD.json`, tagged with a format version, app version, and timestamp.
- **Import** validates the file, summarises its contents, confirms twice, then **replaces** all tracked keys and reloads. It does not merge — reconciling two divergent sets of lifetime stats is guesswork.
- Your PIN is deliberately **not** included in the export, so the backup file carries no credential.
- The panel shows backup age: amber at 14 days, red if never backed up.

Export regularly. The panel exists because losing this data is the only unrecoverable failure mode in the app.

> **Note:** Notion sync was removed in v5.15. The old sync code targeted `api.anthropic.com`, could never authenticate from a static site, and produced a permanent error state plus a localStorage outbox that only grew. Local export/import replaced it. Do not rebuild it.

---

## File Structure

```
czn-ops-theory/
├── index.html          — app shell, PIN gate, tab structure
├── style.css           — complete design system, all CSS variables
├── app.js              — all logic and state management
├── sw.js               — service worker (stale-while-revalidate)
├── manifest.json       — PWA install config
├── .nojekyll           — required; disables Jekyll processing
├── README.md           — this file
├── HANDOFF.md          — full architecture reference
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── data/
    ├── config.js       — ⭐ ONLY FILE TO TOUCH ON PATCH DAY
    ├── games.js        — task lists, endgame modes, calendar plan
    └── achievements.js — achievement and dispatch definitions
```

**Script load order in `index.html` is load-bearing:** `config.js` → `games.js` → `achievements.js` → `app.js`. Achievement `check()` functions call helpers defined at global scope in `app.js`. Do not reorder the scripts and do not add `defer` or `async`.

**Filenames are all lowercase.** GitHub Pages is case-sensitive; a capitalised filename will 404 in production while working fine locally.

---

## Install as PWA

**Android (Chrome):** Open the live URL → three-dot menu → "Add to Home screen" → Add.

**iOS (Safari):** Open the live URL → Share button → "Add to Home Screen" → Add.

Once installed, the app opens full-screen with no browser chrome. The UI is built for a ~380px portrait viewport.

---

## Development

### Branch workflow

All changes go through a branch — never commit directly to `main` during a multi-file update.

```
1. Create branch (e.g. v5-17)
2. Commit all changed files to the branch
3. Open pull request → review the diff
4. Merge to main → GitHub Pages deploys automatically
```

One merge = one deploy. Keep it to one deploy per session.

### Patch updates

When game data goes stale:

1. Verify new dates against two sources minimum (official patch notes, Game8, Icy Veins, Sportskeeda, Fandom wikis)
2. Update `data/config.js` **only** — `lastVerified`, patch end dates, cycle end dates, events
3. Update the annotated change-log header at the top of `config.js`: what changed, what was confirmed unchanged, and the next review date
4. Branch → commit → PR → merge

`config.js` carries a `Next review:` date. If today is past it, a patch pass is due before any other work.

**If a patch update requires touching any file other than `config.js`, the design is wrong — stop and reassess.**

### Release checklist

Every release must update all four of these together, or the app reports a version it isn't running:

- [ ] `data/config.js` → `CONFIG.version`
- [ ] `data/config.js` → header title comment
- [ ] `sw.js` → `CACHE_NAME` (only if a file outside `data/` changed)
- [ ] `README.md` → **Version:** line

The logo version in `index.html` renders from `CONFIG.version` at runtime — it is not hardcoded and needs no edit.

### Architecture rules

- **One owner per state field.** The state-ownership table in `HANDOFF.md` §8 is authoritative. Never add a second writer to a lifetime-stat field; that is exactly what caused the v5.5 double-count bugs.
- **If you add a new storage key, add it to `BACKUP_KEYS`** or it will not survive a restore.
- The design system in `HANDOFF.md` §4 does not change without explicit approval.

See `HANDOFF.md` for the complete architecture reference.

---

## Security

- PIN gate on app load
- No passwords, financial data, personal information, credentials, or API keys anywhere in the codebase
- All user data stays in localStorage on the device — nothing is transmitted anywhere
- Exported backup files exclude the PIN

---

*Personal project — not accepting contributions.*
