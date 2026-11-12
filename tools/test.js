#!/usr/bin/env node
// ═══════════════════════════════════════════════════════════
// NEXUS — logic tests (v5.20)
// Run:  node tools/test.js
// Loads the SHIPPED files (data/*.js + app.js) into a sandbox with a fake
// DOM, fake localStorage and a fixed clock, then exercises the date, cycle,
// lifetime-counter and storage logic. No dependencies, no browser.
// The timezone matters: the v5.19 off-by-one (F1) only shows west of UTC.
// The scenarios are written in the Operator's wall-clock time (US Central),
// so the script pins TZ=America/Chicago itself before any Date is made.
// ═══════════════════════════════════════════════════════════
process.env.TZ = 'America/Chicago';
const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

const ROOT = path.join(__dirname, '..');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');

// ── Fake DOM: every element accepts anything and returns harmless values ──
function fakeEl() {
  const el = {
    style: {}, dataset: {}, value: '', textContent: '', innerHTML: '', className: '',
    classList: { _s: new Set(),
      add(c) { this._s.add(c); }, remove(c) { this._s.delete(c); },
      contains(c) { return this._s.has(c); },
      toggle(c, f) { const on = f === undefined ? !this._s.has(c) : f; on ? this._s.add(c) : this._s.delete(c); return on; } },
    appendChild() {}, removeChild() {}, remove() {}, addEventListener() {}, click() {},
    setAttribute() {}, getAttribute() { return ''; }, closest() { return null; },
    querySelector() { return fakeEl(); }, querySelectorAll() { return []; },
    getBoundingClientRect() { return { left: 0, top: 0 }; },
    getContext() { return new Proxy({}, { get: () => () => ({ addColorStop() {} }) }); },
  };
  return el;
}

// ── Sandbox factory with a fixed clock ──
function boot(isoNow, store = {}) {
  const FIXED = new Date(isoNow).getTime();
  const RealDate = Date;
  class FakeDate extends RealDate {
    constructor(...a) { super(...(a.length ? a : [FIXED])); }
    static now() { return FIXED; }
  }
  const ls = {
    _d: { ...store },
    getItem(k) { return k in this._d ? this._d[k] : null; },
    setItem(k, v) { this._d[k] = String(v); },
    removeItem(k) { delete this._d[k]; },
  };
  const els = {};
  const document = {
    getElementById: id => (els[id] ||= fakeEl()),
    createElement: () => fakeEl(), querySelectorAll: () => [], querySelector: () => fakeEl(),
    body: fakeEl(), addEventListener() {},
  };
  const ctx = {
    Date: FakeDate, Math, JSON, console, Set, Map, Object, Array, String, Number, Promise, RegExp, Proxy,
    localStorage: ls, document, navigator: {}, location: { reload() {} },
    window: { addEventListener() {}, innerWidth: 380, innerHeight: 800 },
    setTimeout: () => 0, clearTimeout() {}, setInterval: () => 0, clearInterval() {},
    requestAnimationFrame: () => 0, confirm: () => true, alert() {},
    Blob: function () {}, URL: { createObjectURL: () => '', revokeObjectURL() {} },
  };
  ctx.globalThis = ctx;
  vm.createContext(ctx);
  // Top-level const/let in classic scripts share one global lexical scope,
  // exactly as in the browser, so load them as one script in load order.
  const src = ['data/config.js', 'data/games.js', 'data/achievements.js', 'app.js']
    .map(read).join('\n;\n')
    + '\n;globalThis.__T = { CONFIG, GAMES, ld, sv, getLT, saveLT, getCy, setCy, setCyWeekly, togCy, togT,'
    + ' recordCycleClear, updateLT, setv, getv, wk, dk, parseDay, daysUntil, localISO, resolveDeadline,'
    + ' daysUntilCycleEnds, cycleResetLabel, isCycleExpired, checkCycleFreshness, migrateV520, pruneStore,'
    + ' confirmReset, getColPrefs, togCol, cycleIdentity, BACKUP_KEYS, COLK, SK, LTK };';
  vm.runInContext(src, ctx, { filename: 'nexus-bundle.js' });
  return { T: ctx.__T, ls, els };
}

// ── Tiny runner ──
let pass = 0, fail = 0;
function test(name, fn) {
  try { fn(); pass++; console.log('  ok   ' + name); }
  catch (e) { fail++; console.log('  FAIL ' + name + '\n       ' + e.message); }
}
function eq(a, b, msg) {
  if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error(`${msg || ''} expected ${JSON.stringify(b)}, got ${JSON.stringify(a)}`);
}
const el = () => fakeEl();

// Pin config to known values so tests don't depend on the live data pass.
function pin(T, overrides) {
  Object.assign(T.CONFIG.cycles.zzz_shiyu, { ends: '2026-11-13', type: 'date' });
  Object.assign(T.CONFIG.patches.find(p => p.game === 'zzz'), { ends: '2026-12-01' });
  if (overrides) overrides(T.CONFIG);
}

console.log('\nNEXUS logic tests — TZ=' + process.env.TZ + '\n');

// ── F1: local dates ──
test('F1 parseDay builds a LOCAL calendar date', () => {
  const { T } = boot('2026-11-12T16:00:00Z');   // 10:00 CT
  const d = T.parseDay('2026-11-13');
  eq([d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours()], [2026, 11, 13, 0]);
});
test('F1 daysUntil: Shiyu ending Nov 13 is 1 day away on Nov 12 morning CT', () => {
  const { T } = boot('2026-11-12T16:00:00Z'); pin(T);
  eq(T.daysUntilCycleEnds('zzz_shiyu'), 1);
  eq(T.cycleResetLabel('zzz_shiyu'), '1d left');
});
test('F1 daysUntil: still 1 day at 11pm CT (after UTC midnight)', () => {
  const { T } = boot('2026-11-13T05:00:00Z'); pin(T);   // Nov 12 23:00 CT
  eq(T.daysUntilCycleEnds('zzz_shiyu'), 1);
});
test('F1 patch deadline label shows the configured day (Dec 1, not Nov 30)', () => {
  const { T } = boot('2026-11-12T16:00:00Z'); pin(T);
  eq(T.resolveDeadline('zzz').text, 'Dec 1, 2026');
});
test('F1 a cleared cycle stays cleared through its last day (evening CT)', () => {
  const { T } = boot('2026-11-14T03:00:00Z'); pin(T);   // Nov 13 21:00 CT
  T.setCy('zzz_shiyu', true);
  eq(T.getCy('zzz_shiyu'), true);
});

// ── F2: cycle identity ──
test('F2 a clear does NOT carry into the next cycle when config rolls forward', () => {
  const { T } = boot('2026-11-12T16:00:00Z'); pin(T);
  T.setCy('zzz_shiyu', true);
  eq(T.getCy('zzz_shiyu'), true, 'before roll');
  T.CONFIG.cycles.zzz_shiyu.ends = '2026-11-27';
  eq(T.getCy('zzz_shiyu'), false, 'after roll');
});
test('F2 expired (config not yet rolled) rows read as Awaiting data and refuse clears', () => {
  const { T } = boot('2026-11-15T16:00:00Z'); pin(T);
  eq(T.isCycleExpired('zzz_shiyu'), true);
  eq(T.cycleResetLabel('zzz_shiyu'), 'Awaiting data');
  T.togCy('zzz_shiyu', el());
  eq(T.getCy('zzz_shiyu'), false);
  eq(T.getLT().totalCycleClears || 0, 0, 'no lifetime count');
});

// ── F3: idempotent lifetime counting ──
test('F3 cycle clear toggled on/off/on counts once', () => {
  const { T } = boot('2026-11-12T16:00:00Z'); pin(T);
  T.togCy('zzz_shiyu', el()); T.togCy('zzz_shiyu', el()); T.togCy('zzz_shiyu', el());
  eq(T.getCy('zzz_shiyu'), true);
  eq(T.getLT().totalCycleClears, 1);
  eq(T.getLT().zzzLifetimeCycleClears, 1);
});
test('F3 next cycle instance counts again', () => {
  const { T } = boot('2026-11-12T16:00:00Z'); pin(T);
  T.togCy('zzz_shiyu', el());
  T.CONFIG.cycles.zzz_shiyu.ends = '2026-11-27';
  T.togCy('zzz_shiyu', el());
  eq(T.getLT().totalCycleClears, 2);
});
test('F3 task untick/retick counts once in totalTasksCompleted', () => {
  const { T } = boot('2026-11-12T16:00:00Z'); pin(T);
  T.updateLT();                                   // seed (upgrade path)
  const before = T.getLT().totalTasksCompleted || 0;
  T.setv('hsr', 'daily', 0, true);  T.updateLT();
  T.setv('hsr', 'daily', 0, false); T.updateLT();
  T.setv('hsr', 'daily', 0, true);  T.updateLT();
  eq((T.getLT().totalTasksCompleted || 0) - before, 1);
});
test('F3 upgrade seeds already-ticked tasks without re-counting them', () => {
  const { T } = boot('2026-11-12T16:00:00Z'); pin(T);
  T.setv('hsr', 'daily', 0, true); T.setv('ww', 'weekly', 1, true);
  // boot() already ran init; rewind LT to its pre-upgrade (v5.19) shape.
  const lt = T.getLT(); delete lt._ltSeenTasks; lt.totalTasksCompleted = 50; lt._ltSeenWeek = T.wk(); lt._ltSeenCount = 2; T.saveLT(lt);
  T.updateLT();
  eq(T.getLT().totalTasksCompleted, 50);
  eq(T.getLT()._ltSeenWeek, undefined, 'legacy fields removed');
});

// ── F4: CZN weekly cycle on CZN week ──
test('F4 czn_sortie clear is keyed to the CZN (Sunday 18:00 UTC) week', () => {
  const { T } = boot('2026-11-12T16:00:00Z');
  T.setCyWeekly('czn_sortie', true);
  const e = T.ld().CY_czn_sortie;
  eq(e.weekKey.startsWith('WCZN'), true, e.weekKey);
  eq(T.getCy('czn_sortie'), true);
});
test('F4 czn_sortie clear expires at Sunday 18:00 UTC, not Monday', () => {
  const { T } = boot('2026-11-15T17:00:00Z');   // Sun 17:00 UTC — before CZN reset
  T.setCyWeekly('czn_sortie', true);
  const later = boot('2026-11-15T19:00:00Z', T.ld && { nexus_v53: JSON.stringify(T.ld()) });
  eq(later.T.getCy('czn_sortie'), false);
});

// ── F5: reset scope ──
test('F5 Reset this week clears CZN weeklies and every game\'s dailies', () => {
  const { T } = boot('2026-11-12T16:00:00Z');
  T.setv('czn', 'weekly', 0, true); T.setv('hsr', 'weekly', 0, true);
  T.setv('ww', 'daily', 0, true);   T.setv('zzz', 'daily', 1, true);
  T.confirmReset();
  eq([T.getv(null, 'czn', 'weekly', 0), T.getv(null, 'hsr', 'weekly', 0),
      T.getv(null, 'ww', 'daily', 0),  T.getv(null, 'zzz', 'daily', 1)], [false, false, false, false]);
});

// ── Migration ──
test('Migration keeps a valid legacy clear and seeds the lifetime latch', () => {
  const store = { nexus_v53: JSON.stringify({ CY_zzz_shiyu: { cleared: true, date: '2026-11-10' } }) };
  const { T } = boot('2026-11-12T16:00:00Z', store); pin(T);
  T.migrateV520();
  eq(T.getCy('zzz_shiyu'), true, 'still cleared');
  eq(T.getLT()._cyCounted.zzz_shiyu, '2026-11-13', 'latched');
  T.togCy('zzz_shiyu', el()); T.togCy('zzz_shiyu', el());   // off, on
  eq(T.getLT().totalCycleClears || 0, 0, 'no double count of a pre-upgrade clear');
});
test('Migration drops a legacy clear made after the cycle ended', () => {
  const store = { nexus_v53: JSON.stringify({ CY_zzz_shiyu: { cleared: true, date: '2026-11-20' } }) };
  const { T } = boot('2026-11-12T16:00:00Z', store); pin(T);
  T.migrateV520();
  eq(T.getCy('zzz_shiyu'), false);
});
test('Migration lifts collapse prefs out of the week bucket', () => {
  const { T: t0 } = boot('2026-11-12T16:00:00Z');
  const store = { nexus_v53: JSON.stringify({ [t0.wk('ww')]: { _col: { ww: false } } }) };
  const { T } = boot('2026-11-12T16:00:00Z', store);
  T.migrateV520();
  eq(T.getColPrefs(), { ww: false });
});

// ── F7: pruning ──
test('F7 pruneStore drops buckets older than 70 days, keeps recent + CY_', () => {
  const store = { nexus_v53: JSON.stringify({
    'D2026-08-01-hsr': {}, 'W2026-08-03': {}, 'WCZN2026-08-02': {},
    'D2026-11-11-hsr': {}, 'W2026-11-09': {}, CY_hsr_moc: { cleared: true } }) };
  const { T } = boot('2026-11-12T16:00:00Z', store);   // init runs pruneStore()
  eq(Object.keys(T.ld()).sort(),
     ['CY_hsr_moc', 'D2026-11-11-hsr', 'W2026-11-09']);
  eq(T.pruneStore(), 0, 'idempotent');
});

// ── F8 / F9 ──
test('F8 COLK is part of the backup set', () => {
  const { T } = boot('2026-11-12T16:00:00Z');
  eq(T.BACKUP_KEYS.includes(T.COLK), true);
});
test('F9 an expired event row makes the data stale', () => {
  const { T } = boot('2026-11-12T16:00:00Z');
  T.CONFIG.events.push({ id: 'ev_test', game: 'hsr', tier: 'standard', name: 'Old Event', ends: '2026-11-01' });
  const cf = T.checkCycleFreshness();
  eq(cf.stale, true);
  eq(cf.warnings.some(w => w.includes('Old Event')), true);
});

// ── Boot smoke: the full init path runs against the live config ──
test('Boot: full init runs against shipped config without throwing', () => {
  boot(new Date().toISOString());
});

console.log(`\n${pass} passed, ${fail} failed\n`);
process.exit(fail ? 1 : 0);
