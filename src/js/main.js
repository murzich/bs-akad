// main.js

// filter category
;(function() {

  var $buttonSet = $('.btn-categories');
  var $buttons = $buttonSet.find( 'button' );
  var $container = $('.cards-container .collapse');
  $buttonSet.click( 'button', function() {
    console.log( event.target, $container );
    var $target = $( event.target );
    if ( $target.data( 'target' ) == '[class*="cat-"]' ) {
      $container.addClass( 'show' );
      $target.addClass( 'active' );
    } if ( $target.data( 'target' ) ) {
      $container.addClass('show')
        .not($target.data('target')).removeClass('show');

      $buttons.not($target).removeClass('active');
      $target.addClass('active');
    }

    
  });


})(jQuery());


// TODO: next should appears only on the contact-us page 
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
