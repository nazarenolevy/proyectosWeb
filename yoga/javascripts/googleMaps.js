function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(-34.575754,-58.452212),
    zoom:13,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
