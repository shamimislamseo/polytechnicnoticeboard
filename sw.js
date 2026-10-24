const VERSION = "jonbarta-shell-v1";
const BASE = new URL("./", self.location).pathname;
const CORE = [
  BASE,
  BASE + "index.html",
  BASE + "manifest.webmanifest",
  BASE + "icons/jonbarta.svg",
  BASE + "about.html",
  BASE + "contact.html",
  BASE + "privacy.html",
  BASE + "live-setup.html",
  BASE + "404.html"
];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== VERSION).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  const url = new URL(req.url);
  if (url.pathname.endsWith("/live-config.js")) {
    event.respondWith(fetch(req).catch(() => caches.match(req)));
    return;
  }
  if (req.mode === "navigate") {
    event.respondWith(fetch(req).then(response => {
      if (response.ok) caches.open(VERSION).then(cache => cache.put(req, response.clone()));
      return response;
    }).catch(async () => (await caches.match(req)) || (await caches.match(BASE + "index.html"))));
    return;
  }
  event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(response => {
    if (response.ok) caches.open(VERSION).then(cache => cache.put(req, response.clone()));
    return response;
  })));
});
