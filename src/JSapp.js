function displayTemperature (response){
console.log(response.data.weather[0].description);

let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#Humidity");
let windSpeedElement = document.querySelector("#WindSpeed");

temperatureElement.innerHTML= Math.round(response.data.main.temp); 
cityElement.innerHTML=response.data.name;

descriptionElement.innerHTML=response.data.weather[0].description;

humidityElement.innerHTML = response.data.main.humidity;
windSpeedElement.innerHTML= response.data.wind.speed;
}

let apiKey = "c409940fd7208150de003ea7999c3e64";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);


