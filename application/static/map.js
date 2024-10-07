//initialising the map

console.log("leaflet is running");

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();


var vg = new VirtualGrid();

// listen for when new cells come into the view for the first time
vg.on("cellcreate", function(e){
    console.log(e.type, e);
    updateRain(e);
});

// listen for when cells reenter the view
vg.on("cellenter", function(e){
    console.log(e.type, e);
    updateRain(e);
});

// listen for when cells leave the view
vg.on("cellleave", function(e){
    console.log(e.type, e);
    updateRain(e);
});

// add the grid to the map
vg.addTo(map);

console.log("leaflet finished");



// select crop feature

var editableLayers=new L.FeatureGroup();
map.addLayer(editableLayers);

var drawControl = new L.Control.Draw({
    draw: {
        polyline: false,
        polygon: false,
        circlemarker: false,
        marker: false,
        circle : false,
        rectangle: true 
    },
    edit: {
        featureGroup: editableLayers
    }
});

map.addControl(drawControl);

  map.on('draw:created', function (e) {  // Make sure it’s lowercase
    var type = e.layerType,
      layer = e.layer;
      editableLayers.addLayer(layer);

    var bounds = layer.getBounds();

    var cropType = prompt("Enter the type of crop:");

    if (cropType){
        console.log("Crop Type: " + cropType);
        console.log("Rectangle Bounds: ", bounds);
    }
    layer.bindPopup("Crop: " + cropType).openPopup();
  });