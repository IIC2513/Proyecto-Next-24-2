const CACHE_NAME = "CapsulaPWA"
const URLS_TO_CACHE = [
  "/home",
  "/home/mountains",
];

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
      caches.match(event.request)
        .then((response) => {
          // Si la respuesta está en el caché, la retornamos
          if (response) return response;
  
          // Si no está en el caché, hacemos la solicitud a la red y la almacenamos en el caché
          return fetch(event.request).then((networkResponse) => {
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== "basic") {
              return networkResponse;
            }
  
            // Clonamos y almacenamos en caché la respuesta
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
  
            return networkResponse;
          });
        }).catch(() => {
          return new Response("Página no encontrada", {
            status: 404,
            statusText: "Página no encontrada",
          });
        })
    );
  });
  

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});