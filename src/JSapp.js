
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

function displayTemperature (response){
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#Humidity");
let windSpeedElement = document.querySelector("#WindSpeed");
let dataElement = document.querySelector("#date");
let iconElement = document.querySelector("#icon");

temperatureElement.innerHTML= Math.round(response.data.main.temp); 
cityElement.innerHTML=response.data.name;

descriptionElement.innerHTML=response.data.weather[0].description;

humidityElement.innerHTML = response.data.main.humidity;
windSpeedElement.innerHTML= Math.round(response.data.wind.speed);
dataElement.innerHTML = formatDate(response.data.dt * 1000);
iconElement.setAttribute( "src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("atl", response.data.weather[0].description);
}

let apiKey = "c409940fd7208150de003ea7999c3e64";
let city = "Vinnytsia";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);


