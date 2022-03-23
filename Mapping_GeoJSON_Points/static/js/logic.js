// boilerplate

// Create our initial map object and Set the longitude, latitude, and the starting zoom level
// var myMap = L.map("map", {
//     center: [30, 30],
//     zoom: 2,
//     layers: [streets]
//   });

  // Add a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  let streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: 'mapbox/satellite-streets-v11',
    accessToken: API_KEY
  });

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  accessToken: API_KEY
  });


// add both map variables to a new var as our base layer
// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create our initial map object and Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
});

// To cplete the code for the map layers, use control.layers to control the layers we see on the map
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(myMap);


// Accessing the airport GeoJSON URL - must be after the tileLayer() method to ensure the map gets loaded before the data
let airportData = "https://raw.githubusercontent.com/joeyamyers/Mapping_Earthquakes/main/Mapping_GeoJSON_Points/static/js/majorAirports.json";

// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data).addTo(myMap);
// });


// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
L.geoJSON(data, {
      onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup();
      }
}).addTo(myMap);
});


















////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Map a GeoJSON Point - this GeoData is a featurecollection obj
// Add GeoJSON data - coordinates re backwards for geojson data (lng, lat)
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// L.geoJSON(sanFranAirport).addTo(myMap);
  
// // to add functionality to a marker use the pointToLayer() func
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3> " + feature.properties.city + ", " + feature.properties.country + "</h3>");
//   }

// }).addTo(myMap);

  // onEachFeature function
//   L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//       console.log(layer);
//       layer.bindPopup();
//      }
// }).addTo(myMap);
