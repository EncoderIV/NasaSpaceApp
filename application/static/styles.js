//sidebar styling
document.getElementById('rain-toggle').addEventListener('change', function () {
    if (this.checked) {
        console.log('Rain layer on');
    } else {
        console.log('Rain layer off');
    }
});

document.getElementById('tsunami-toggle').addEventListener('change', function () {
    if (this.checked) {
        console.log('Tsunami layer on');
    } else {
        console.log('Tsunami layer off');
    }
});

document.getElementById('high-water-toggle').addEventListener('change', function () {
    if (this.checked) {
        console.log('High Water layer on');
    } else {
        console.log('High Water layer off');
    }
});

document.getElementById('contamination-toggle').addEventListener('change', function () {
    if (this.checked) {
        console.log('Water Contamination layer on');
    } else {
        console.log('Water Contamination layer off');
    }
});

document.getElementById('zoom-in').addEventListener('click', function () {
    console.log('Zoom in');
});

document.getElementById('zoom-out').addEventListener('click', function () {
    console.log('Zoom out');
});


//something else styling - dynamic funtionality