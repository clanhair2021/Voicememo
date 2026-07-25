// Service Worker (ダミー記述でもPWAとして認識されます)
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // 通常の通信をそのまま通す
});

