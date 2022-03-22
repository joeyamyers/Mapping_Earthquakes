// boilerplate

// Create our initial map object and Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
    center: [40.8136, -96.7026],
    zoom: 4
  });
  
  // Add a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: 'mapbox/light-v10',
    accessToken: API_KEY
  }).addTo(myMap);
  
  // L.circleMarker([33.5969, -117.6582], {
  //   color: 'red',
  //   fillColor: 'blue',
  //   fillOpacity: 0.2,
  //   radius: 300
  // }).addTo(myMap);

// get data from cities.js
let cityData = cities;

cityData.forEach(function(city) {
    L.circle(city.location, {
      color: 'red',
      fillColor: 'blue',
      fillOpacity: 0.2,
      lineweight: 4,
      radius: city.population / 12

    }).bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>").addTo(myMap);
});
