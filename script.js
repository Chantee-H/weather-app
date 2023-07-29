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
    const response = fetch(`http://api.weatherapi.com/v1/current.json?key=2a33ec3bad3c4dc386f55016232007&q=${cityInput.value}`, {mode: 'cors'});
}