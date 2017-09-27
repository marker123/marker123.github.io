var cacheName = 'MyPWA-version-1'
var filesToCache = {
  '/index.html'
}


self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(cacheName)
    .then(function(cache) {
        return.cache.addAll(filesToCache)
    })
  );
});
