const API_KEY = "7011b54191ccb1c7ebbf2c949153c4f3";

function geoOk(position){
    const lat = position.coords.latitude;
    const longi = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longi}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    });
}


function geoError(){
    alert("Can't find your position. No weather for you");
}


navigator.geolocation.getCurrentPosition(geoOk, geoError);