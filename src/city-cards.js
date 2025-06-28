import { cities } from "./cityList.js";
import { fetchCityData } from "./api-requests.js";
import { fetchWeatherData } from "./api-requests.js";
import { weatherCodeToEmoji } from "./weatherCode.js";


function getRandomCities(cities, count) {
  let copy = [...cities];
  let result = [];

  for (let i = 0; i < count; i++) {
    if (copy.length === 0) break;
    let index = Math.floor(Math.random() * copy.length);
    result.push(copy[index]);
    copy.splice(index, 1);
  }

  return result;
}

async function createCityCards(count = 10) {
  const randomCities = getRandomCities(cities, count);
  const cards = [];

  for (const city of randomCities) {
    const cityResult = await fetchCityData(city.lat, city.lng);
    const weatherResult = await fetchWeatherData(city.lat, city.lng);

    const time = weatherResult.current_weather.time;
    const hourPart = time.split("T")[1];
    const card = document.createElement("div");
    card.className = "city-card";
    card.innerHTML = 
    `
<div class="city-card-title">
  <hgroup>
    <h3>${cityResult.city}</h3>
    <p>${cityResult.countryName}</p>
  </hgroup>
  <p>${weatherCodeToEmoji[weatherResult.current_weather.weathercode]}</p>
</div>
<div class="city-card-content">
  <div>
    <p class="temp">${weatherResult.current_weather.temperature}${weatherResult.current_weather_units.temperature}</p>
    <p><strong>Vents :</strong> ${weatherResult.current_weather.windspeed}
      ${weatherResult.current_weather_units.windspeed}</p>
    <p><strong>Dernier relevé :</strong> ${hourPart} h</p>
  </div>
  <div class="compass-container">
    <img src="public/compass-white.png" alt="" class="compass">
    <img src="public/arrow-white.png" alt="" class="arrow "style="transform: rotate(${weatherResult.current_weather.winddirection}deg);
        transform-origin: center;">
  </div>
</div>
    `;

    cards.push(card);
  }

  return cards;
}

export { createCityCards };
