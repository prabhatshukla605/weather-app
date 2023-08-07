//SELECTING ELEMENTS
const input = document.querySelector("input");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

//EVENTS
const search = document
  .querySelector("button")
  .addEventListener("click", searchWeather);
input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    searchWeather();
  }
});

async function searchWeather() {
  const API_KEY = "8f0f1482a20576b9f526e1cbe3f592c3";

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}&units=metric`
  );
  const data = await res.json();

  input.value = "";
  displayWeather(data);
}

function displayWeather(data) {
  temperature.innerHTML = `${Math.round(data.main.temp)}°C`;
  cityName.innerHTML = data.name;
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + " km/h";
  console.log(data.weather[0].main);
  weatherIcon.src = `./images/${data.weather[0].main}.png`;
}
