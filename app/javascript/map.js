window.onload =function initMap() {
  // navigator.geolocation.getCurrentPosition(function(position) {
    // latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    function resetOverlay(deleteFLG){
      if(overlays.length>0){
          for(i in overlays){
              overlays[i][1].close();
              if(deleteFLG==1){
                  openFLG[i]=0;
                  overlays[i][0].setMap(null);
              }
          }
          if(deleteFLG==1) overlays.length=0;
          if(deleteFLG==1) iterator=0;
      }
  }
  myposition = new google.maps.LatLng(35.4520229, 139.6374385);
  map = new google.maps.Map(document.getElementById("map"), {
  center: myposition,
  zoom: 16,
  });
  marker = new google.maps.Marker({
    position: myposition,
    map: map
  });
  
  const service = new google.maps.places.PlacesService(map);
    const request = {
      location: myposition,
      radius: 1000,
      types: ['cafe']
    };
    service.search(request, Result_Places);

    function Result_Places(results, status){
      if(status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          createMarker({
            position: place.geometry.location,
            map: map
          });
        };
      };
    };
    function createMarker(options) {
      options.map = map;
      const marker = new google.maps.Marker(options);
      return marker;
    };
  
  // }
};