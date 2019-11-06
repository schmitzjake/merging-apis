
var map;
function initMap() {
  var ch = {lat: 35.9132, lng: -79.056983};
  var chase = {lat: 35.898953, lng: -79.0558};
  map = new google.maps.Map(document.getElementById('map'), {
    center: ch,
    zoom: 14
  });
  var marker = new google.maps.Marker({position: ch, map: map});
  var marker = new google.maps.Marker({position: chase, map: map});
}
