const CACHE_NAME = "kakis-acoustics-v20";
const ASSETS = [
  "./",
  "./index.html",
  "./style.css?v=20",
  "./materials.js?v=20",
  "./app.js?v=20",
  "./manifest.json",
  "./assets/app-icon.png",
  "./assets/shape_flat.png",
  "./assets/shape_vaulted.png",
  "./assets/shape_raked.png",
  "./assets/shape_arbitrary.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
