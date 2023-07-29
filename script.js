'use strict';

let form = document.getElementById('form');
let cityInput = document.getElementById('cityInput');
let output = document.getElementById('output');
let cityName = document.getElementById('cityName');
let temp = document.getElementById('temp');
let condition = document.getElementById('condition');
let feels = document.getElementById('feels');
let humidity = document.getElementById('humidity');

async function getWeather() {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=2a33ec3bad3c4dc386f55016232007&q=${cityInput.value}`, {mode: 'cors'});
    const weatherData = await response.json();
    temp.innerHTML = weatherData.current.temp_c + '\u00B0C'; 
    condition.innerHTML = String(weatherData.current.condition.text);
    feels.innerHTML = 'Feels Like:' + ' ' + weatherData.current.feelslike_c + '\u00B0C';
    humidity.innerHTML = 'Humidty:' + ' ' + weatherData.current.humidity + '%';
}
 catch (error) {
    alert(error.textContent = 'Error: city not found');
}
}

form.onsubmit = e =>{
    e.preventDefault();
    cityName.innerHTML = cityInput.value.charAt(0).toUpperCase() + cityInput.value.slice(1);
    output.style.display = 'block';
   getWeather();
 }
 