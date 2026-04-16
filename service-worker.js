let currentUser = localStorage.getItem("fatimeCurrentUser") || null;
let users = JSON.parse(localStorage.getItem("fatimeUsers")) || {};
const CACHE_NAME = "fatime-cache-v1";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});