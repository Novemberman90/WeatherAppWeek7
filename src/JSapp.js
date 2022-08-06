
 function formatDate(timetemp) {
    let date = new Date(timetemp);
    let hours = date.getHours()
    if (hours < 10) {
        hours= `0${hours}`
      };
    let minutes = date.getMinutes()
    if (minutes < 10) {
        minutes = `0${minutes}`
      };
    let days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thuresday" ,
                 "Friday", 
                  "Saturday" 
    ];
    let day = days[date.getDay()];
  
return `${day} ${hours}:${minutes}`
}

function displayForecast() {
    let forecastElement = document.querySelector("#forecast");

    let forecastHTML = `<div class="row">`;
    let days = ["Sun","Mon", "Tue", "Wed", "Thu"];
    days.forEach(function(day){
        forecastHTML = 
        forecastHTML + ` 

<div class="col-2">
        <div class="weather-forcast-date">
             ${day}
        </div>
   
         <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="#" width="42px">
          <div class="weather-forcast-temperature">
            <span class="weather-forcast-temperature-max">18° </span>
            <span class="weather-forcast-temperature-min">12° </span>
             
        </div>
   
</div>`;
    }); 
        
    forecastHTML = forecastHTML + `</div>`
    forecastElement.innerHTML = forecastHTML;
    
}



function displayTemperature (response){
    console.log(response.data)
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#Humidity");
let windSpeedElement = document.querySelector("#WindSpeed");
let dataElement = document.querySelector("#date");
let iconElement = document.querySelector("#icon");

celsiusTemperature = response.data.main.temp;

temperatureElement.innerHTML= Math.round(celsiusTemperature); 
cityElement.innerHTML=response.data.name;

descriptionElement.innerHTML=response.data.weather[0].description;

humidityElement.innerHTML = response.data.main.humidity;
windSpeedElement.innerHTML= Math.round(response.data.wind.speed);
dataElement.innerHTML = formatDate(response.data.dt * 1000);
iconElement.setAttribute( "src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("atl", response.data.weather[0].description);
}

function search (city) {
    let apiKey = "c409940fd7208150de003ea7999c3e64";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}


function checkCity(event) {
    event.preventDefault();
    let inputCityElement = document.querySelector("#inputCity");
   search(inputCityElement.value);
}

// Fahrenheit
function showFahrenheitTemperature (event) {
    event.preventDefault();
    let fahrenheitElement = document.querySelector("#temperature");
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let fahrenheitTemperature = (celsiusTemperature*9) / 5 +32;
    fahrenheitElement.innerHTML = Math.round(fahrenheitTemperature);
}
let celsiusTemperature = null
// Celsium
function showcelsiusTemperature (event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

;

let form = document.querySelector("#search_form");
form.addEventListener("submit", checkCity);


// Fahrenheit
let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", showFahrenheitTemperature);

// Celsium
let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", showcelsiusTemperature);

search("Vinnytsia");
displayForecast();