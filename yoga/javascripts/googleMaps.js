function initialize() {
  var mapProp = {
    center: {lat: -34.575754,lng: -58.452212},
    zoom:13,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var marker1 = new google.maps.Marker({
    position: {lat: -34.575754,lng: -58.452212},
    map: map,
    title: 'Hello World!'
  });

  marker1.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
