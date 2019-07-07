const staticCacheName = 'site-static';
const assets = [
  '/',
  '/index.html',
  '/js/app.js',
  '/js/script.js',
  '/css/materialize.min.css',
  '/css/materialize.min.js',
  '/css/mdi.css',
  '/css/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2'
]


self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log('caching shell assets...');
      cache.addAll(assets);
    })
  )
})

self.addEventListener('activate', evt => {
  console.log('activated')
});

self.addEventListener('fetch', evt => {
  evt.respondWith(caches.match(evt.request).then(cacheRes => {
    return cacheRes || fetch(evt.request);
  }))
})
