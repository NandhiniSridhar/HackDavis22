const CONFIGURATION = {
    "locations": [
      {"title":"Arbuckle Family Action Center - Food Distribution Center","address1":"812 King St","address2":"Arbuckle, CA 95912, USA","coords":{"lat":39.01439993842376,"lng":-122.06056887790986},"placeId":"ChIJAQAUhDWZhIAR0ZQWL21sRgE"},
      {"title":"Campers Inn RV Park - Food Distribution Center","address1":"2501 County Road 88","address2":"Arbuckle, CA 95912, USA","coords":{"lat":38.903410580718216,"lng":-121.98950262331351},"placeId":"ChIJ4_-jMfS9hIARiSu4-tWGIB4"},
      {"title":"Clarksburg Community Church","address1":"52910 Netherlands Ave","address2":"Clarksburg, CA 95612, USA","coords":{"lat":38.41672981341151,"lng":-121.52665900613421},"placeId":"ChIJJxrHy1HJmoARVby44lyD3pc"},
      {"title":"Clarksburg Firehouse - Food Distribution Center","address1":"52902 Clarksburg Rd","address2":"Clarksburg, CA 95612, USA","coords":{"lat":38.41998792083203,"lng":-121.52966098834324},"placeId":"ChIJ-f-LoFPJmoARFidTAauwnsA"}
    ],
    "mapOptions": {"center":{"lat":38.0,"lng":-100.0},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":17},
    "mapsApiKey": "AIzaSyAGVZtNgRySaf0LB7lpT1MfAddZm55xAnA",
    "capabilities": {"input":true,"autocomplete":true,"directions":false,"distanceMatrix":true,"details":false}
  };

function initMap() {
    new LocatorPlus(CONFIGURATION);
  }