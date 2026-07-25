self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Supabaseや外部CDNの通信を邪魔せずそのまま通過させる
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
