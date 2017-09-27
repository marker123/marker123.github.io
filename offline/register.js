if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
  .then(function() {
    console.log("service worker register")
  });
  .catch(function(){
    console.log('ooh er is een probleem')
  });
}
