// ═══════════════════════════════════════════════════════════
// NEXUS v5.16 — SERVICE WORKER
// Stale-while-revalidate. Bump CACHE_NAME whenever any file
// outside data/ changes.
// Changes from v5.15:
//   - CACHE_NAME: nexus-v515-static → nexus-v516-static
//     (owed from the v5.16 release — app.js, index.html and style.css
//     all changed Jul 22-23 without a bump; corrected 2026-07-25)
//   - No logic changes.
// Changes from v5.11:
//   - CACHE_NAME: nexus-v511-static → nexus-v515-static
//   - Restored icons/icon-192.png and icons/icon-512.png to the
//     precache list (dropped after v5.6 — offline installs could
//     lose their icons)
//   - install: addAll → individual add() with per-asset catch, so
//     one missing/404 asset no longer fails the entire install
//   - fetch: only same-origin GET requests are cached; cross-origin
//     (Google Fonts) and non-GET pass through untouched
//   - fetch: opaque/error responses no longer poison the cache
// ═══════════════════════════════════════════════════════════

const CACHE_NAME = 'nexus-v516-static';

const ASSETS = [
  '/czn-ops-theory/',
  '/czn-ops-theory/index.html',
  '/czn-ops-theory/style.css',
  '/czn-ops-theory/app.js',
  '/czn-ops-theory/manifest.json',
  '/czn-ops-theory/data/config.js',
  '/czn-ops-theory/data/games.js',
  '/czn-ops-theory/data/achievements.js',
  '/czn-ops-theory/icons/icon-192.png',
  '/czn-ops-theory/icons/icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      // Individually, not addAll(): addAll is atomic, so a single
      // 404 (a renamed icon, a typo'd path) rejects the whole
      // install and the SW never takes over. This degrades to
      // "that one asset isn't precached" instead.
      Promise.all(
        ASSETS.map(url =>
          cache.add(url).catch(err =>
            console.warn('SW precache skipped:', url, err)
          )
        )
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const req = e.request;

  // Non-GET and cross-origin (Google Fonts, etc.) pass straight
  // through — never cached, never intercepted.
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  e.respondWith(
    caches.match(req).then(cached => {
      const fresh = fetch(req).then(res => {
        // Only cache genuine same-origin 200s. Opaque responses
        // (type 'opaque') and errors would otherwise poison the
        // cache with unusable entries.
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
        }
        return res;
      }).catch(() => cached);

      return cached || fresh;
    })
  );
});
