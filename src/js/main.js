// main.js

;(function() {

var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 47.816150, lng: 35.170192},
  zoom: 18,
  // styles: styleMap,
  unitSystem: google.maps.UnitSystem.METRIC,
});

var markerBeetroot = new google.maps.Marker({
  position: {lat: 47.816150, lng: 35.170192},
  map: map, // or use marker.setMap(map)
  title: 'Beetroot',
  // label: 'B',
  icon: {
    path: "M256 64c-66 0-119 54-119 120 0 115 119 264 119 264s119-149 119-264c0-66-53-120-119-120zm0 178c-31 0-56-25-56-57a56 56 0 1 1 112 0c0 32-25 57-56 57z",
    fillColor: '#60606e',
    fillOpacity: 1,
    anchor: new google.maps.Point(256,256),
    strokeWeight: 0,
    scale: .1
  },
  // animation: google.maps.Animation.BOUNCE,
});

})();



// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// }
