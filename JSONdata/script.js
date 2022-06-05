const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude } = data;
    console.log(latitude);
    console.log(longitude);

    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
}


getData();