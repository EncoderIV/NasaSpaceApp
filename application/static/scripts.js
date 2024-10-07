async function fetchData() {
    const response = await fetch('/api/data?region=us&date=2023-01-01');
    const data = await response.json();
    document.getElementById('data-output').innerHTML = JSON.stringify(data, null, 2);
}



//meteomatics code - or put in different file

async function updateRain(gridCoords) {
    console.log(gridCoords);

    data  = gridCoords.bounds

    fetch("/rain/",{
        "method": "POST",
        "headers": {"Content-Type": "application/json"},
        "body": JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        //create layer with new data
        console.log(data);
    })
}




//lealet.js code - or put in different file - ended up putting in differnet file to not forget relative position of scipts tag
