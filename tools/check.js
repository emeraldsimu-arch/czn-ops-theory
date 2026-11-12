#!/usr/bin/env node
// ═══════════════════════════════════════════════════════════
// NEXUS — release checker (v5.20)
// Run before every merge to main:  node tools/check.js
// Exit 0 = safe to merge. Exit 1 = something below is wrong.
// Checks the things that have drifted before:
//   1. Version agrees everywhere (CONFIG.version, README, sw.js cache
//      name, app.js header, HANDOFF.md)
//   2. No dated config row has already passed (patches, cycles, events)
//   3. Every cycleKey used in games.js exists in CONFIG.cycles, and every
//      dated cycle is used by some game
//   4. Event ids are unique, events reference a real game
//   5. Shipped filenames are lowercase (GitHub Pages is case-sensitive)
//   6. Every sw.js precache path exists on disk
// ═══════════════════════════════════════════════════════════
const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

const ROOT = path.join(__dirname, '..');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const errors = [], warnings = [];
const err  = m => errors.push(m);
const warn = m => warnings.push(m);

// Load data files the way the browser does (shared global lexical scope).
const ctx = { console };
vm.createContext(ctx);
vm.runInContext(['data/config.js', 'data/games.js'].map(read).join('\n;\n') +
  '\n;globalThis.__D = { CONFIG, GAMES, WEEK_PLAN };', ctx);
const { CONFIG, GAMES, WEEK_PLAN } = ctx.__D;

// ── 1. Version agreement ──
const v = CONFIG.version;
const vNoDot = v.replace('.', '');
const readme  = read('README.md').match(/\*\*Version:\*\*\s*v([\d.]+)/);
const cache   = read('sw.js').match(/CACHE_NAME\s*=\s*'nexus-v(\d+)-static'/);
const appHdr  = read('app.js').match(/NEXUS v([\d.]+) — APP\.JS/);
const swHdr   = read('sw.js').match(/NEXUS v([\d.]+) — SERVICE WORKER/);
const handoff = read('HANDOFF.md').match(/\*\*Current version:\*\*\s*v([\d.]+)/);
if (!readme  || readme[1]  !== v) err(`README version ${readme && readme[1]} != CONFIG.version ${v}`);
if (!cache   || cache[1]   !== vNoDot) err(`sw.js CACHE_NAME nexus-v${cache && cache[1]}-static != nexus-v${vNoDot}-static`);
if (!appHdr  || appHdr[1]  !== v) err(`app.js header v${appHdr && appHdr[1]} != ${v}`);
if (!swHdr   || swHdr[1]   !== v) err(`sw.js header v${swHdr && swHdr[1]} != ${v}`);
if (!handoff || handoff[1] !== v) err(`HANDOFF.md current version v${handoff && handoff[1]} != ${v}`);

// ── 2. Nothing dated has already passed ──
// Compared as calendar days in the Operator's timezone.
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Chicago' }); // YYYY-MM-DD
const isDay = s => /^\d{4}-\d{2}-\d{2}$/.test(s);
CONFIG.patches.forEach(p => {
  if (!isDay(p.ends)) err(`patch ${p.game} has a non-date ends: ${p.ends}`);
  else if (p.ends < today) err(`patch ${p.game} v${p.version} ended ${p.ends}`);
});
Object.entries(CONFIG.cycles).forEach(([k, c]) => {
  if (c.type === 'weekly') { if (c.ends !== 'weekly') err(`cycle ${k} is weekly but ends=${c.ends}`); return; }
  if (!['date', 'patch', 'permanent'].includes(c.type)) err(`cycle ${k} has unknown type ${c.type}`);
  if (c.type !== 'permanent' && !isDay(c.ends)) err(`cycle ${k} has a non-date ends: ${c.ends}`);
  else if (isDay(c.ends) && c.ends < today) err(`cycle ${k} ended ${c.ends}`);
});
CONFIG.events.forEach(e => {
  if (!isDay(e.ends)) err(`event ${e.id} has a non-date ends: ${e.ends}`);
  else if (e.ends < today) err(`event ${e.id} ended ${e.ends}`);
});
const nr = read('data/config.js').match(/Next review:\s*(\d{4}-\d{2}-\d{2})/);
if (!nr) warn('config.js header has no "Next review:" date');
else if (nr[1] < today) warn(`config.js Next review ${nr[1]} has passed`);

// ── 3. cycleKey integrity ──
const used = new Set();
GAMES.forEach(g => g.endgameModes.forEach(m => {
  used.add(m.cycleKey);
  if (!CONFIG.cycles[m.cycleKey]) err(`games.js ${g.id} mode ${m.id} → missing cycle ${m.cycleKey}`);
}));
WEEK_PLAN.forEach(d => d.tasks.forEach(t => {
  if (t.cycleKey && !CONFIG.cycles[t.cycleKey]) err(`WEEK_PLAN ${d.day} → missing cycle ${t.cycleKey}`);
}));
Object.keys(CONFIG.cycles).forEach(k => { if (!used.has(k)) warn(`cycle ${k} is not used by any game card`); });

// ── 4. Events ──
const ids = new Set();
const gameIds = new Set(GAMES.map(g => g.id));
CONFIG.events.forEach(e => {
  if (ids.has(e.id)) err(`duplicate event id ${e.id}`);
  ids.add(e.id);
  if (!gameIds.has(e.game)) err(`event ${e.id} references unknown game ${e.game}`);
  if (!['critical', 'standard'].includes(e.tier)) err(`event ${e.id} has unknown tier ${e.tier}`);
});

// ── 5. Lowercase filenames ──
const walk = dir => fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true }).flatMap(d => {
  const rel = path.join(dir, d.name);
  if (d.name.startsWith('.git')) return [];
  return d.isDirectory() ? walk(rel) : [rel];
});
const DOCS = new Set(['README.md', 'HANDOFF.md']);   // repo docs, not served assets
walk('.').forEach(f => {
  const base = path.basename(f);
  if (DOCS.has(base)) return;
  if (base !== base.toLowerCase()) err(`filename not lowercase: ${f}`);
});

// ── 6. Precache paths exist ──
const assets = [...read('sw.js').matchAll(/'\/czn-ops-theory\/([^']*)'/g)].map(m => m[1]);
assets.forEach(a => {
  const f = a === '' ? 'index.html' : a;
  if (!fs.existsSync(path.join(ROOT, f))) err(`sw.js precaches missing file: ${a || '/'}`);
});

// ── Report ──
console.log(`\nNEXUS release check — v${v} — ${today} (America/Chicago)\n`);
warnings.forEach(w => console.log('  warn  ' + w));
errors.forEach(e => console.log('  FAIL  ' + e));
if (!errors.length) console.log(`  ok    ${Object.keys(CONFIG.cycles).length} cycles, ${CONFIG.events.length} events, ${CONFIG.patches.length} patches, ${assets.length} precached files`);
console.log(errors.length ? `\n${errors.length} problem(s) — do not merge.\n` : '\nReady to merge.\n');
process.exit(errors.length ? 1 : 0);
