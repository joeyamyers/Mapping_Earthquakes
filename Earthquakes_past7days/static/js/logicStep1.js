
  // Add a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  let streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
  });

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: 'mapbox/satellite-streets-v11',
  accessToken: API_KEY
  });


// add both map variables to a new var as our base layer
// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

// Create our initial map object and Set the longitude, latitude, and the starting zoom level
var map = L.map("map", {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
});

// To complete the code for the map layers, use control.layers to control the layers we see on the map
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// grab the geojson data
d3.json(queryUrl).then(function(data) {
  // Create a GeoJSON layer w the retrieved data
  L.geoJSON(data).addTo(map);
});
