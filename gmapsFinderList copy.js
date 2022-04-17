CONFIGURATION = {
  "locations": firebaseclient.get('addresses'),
  
    "mapOptions": {"center":{"lat":38.0,"lng":-100.0},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":17},
    "mapsApiKey": "AIzaSyAGVZtNgRySaf0LB7lpT1MfAddZm55xAnA",
    "capabilities": {"input":true,"autocomplete":true,"directions":false,"distanceMatrix":true,"details":false}
};

function initMap() {
    new LocatorPlus(CONFIGURATION);
}
