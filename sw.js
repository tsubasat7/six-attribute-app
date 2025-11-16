self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("six-attribute-app-v1").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(r => {
      return r || fetch(event.request);
    })
  );
});
