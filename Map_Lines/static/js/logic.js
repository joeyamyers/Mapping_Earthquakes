// boilerplate

// Create our initial map object and Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
    center: [37.6213, -122.3790],
    zoom: 5
  });
  
  // Add a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: 'mapbox/satellite-streets-v11',
    accessToken: API_KEY
  }).addTo(myMap);
  
  // L.circleMarker([33.5969, -117.6582], {
  //   color: 'red',
  //   fillColor: 'blue',
  //   fillOpacity: 0.2,
  //   radius: 300
  // }).addTo(myMap);

// // get data from cities.js
// let cityData = cities;

// cityData.forEach(function(city) {
//     L.circle(city.location, {
//       color: 'red',
//       fillColor: 'blue',
//       fillOpacity: 0.2,
//       lineweight: 4,
//       radius: city.population / 12

//     }).bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>").addTo(myMap);
// });

// Coordinates for each point to be used in the line.
let latlngs = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088],
  [33.5969, -117.6582]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(latlngs, {
  color: "blue",
  dashArray: '8',
  opacity: .5,
  weight: 4
}).addTo(myMap);