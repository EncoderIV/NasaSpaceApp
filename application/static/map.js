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
});

// listen for when cells reenter the view
vg.on("cellenter", function(e){
    console.log(e.type, e);
});

// listen for when cells leave the view
vg.on("cellleave", function(e){
    console.log(e.type, e);
});

// add the grid to the map
vg.addTo(map);

console.log("leaflet finished");