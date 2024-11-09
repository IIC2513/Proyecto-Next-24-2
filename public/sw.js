const CACHE_NAME = "CapsulaPWA"
const URLS_TO_CACHE = [
    "/home",
    "/home/mountains"
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.math(event.request)
      .then((response) => {
        // Si la es que la respuest esta en el caché
        if (response) return response;

        return fetch(event.request).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') return networkResponse;
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME)
          .then((cache) => {
            cache.put(event.request, responseToCache)
          })

        return networkResponse;
      })
    }).catch(() => {
      return new Response("Pagina no cacheada", {
        status: 404,
        statusText: "Pagina no cacheada"
      })
    })
  )
})

self.addEventListener("activate", (event) => {
  const cacheList = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheList.includes(cacheName)) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})