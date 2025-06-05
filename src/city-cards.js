import { cities } from "./cityList.js";
import { fetchCityData } from "./api-requests.js";
import { fetchWeatherData } from "./api-requests.js";

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

async function createCityCards(count = 5) {
  const randomCities = getRandomCities(cities, count);
  const cards = [];

  for (const city of randomCities) {
    const cityResult = await fetchCityData(city.lat, city.lng);
    const weatherResult = await fetchWeatherData(city.lat, city.lng);

    const time = weatherResult.current_weather.time;
    const hourPart = time.split("T")[1];
    const card = document.createElement("div");
    card.className = "city-card";
    card.innerHTML = `
      <h3>${cityResult.city}</h3>
      <p>${weatherResult.current_weather.temperature}${weatherResult.current_weather_units.temperature
      }</p>
              <p><strong>Heure du relevé :</strong> ${hourPart} h</p>
       <p><strong>Vitesse du vent :</strong> ${weatherResult.current_weather.windspeed} ${weatherResult.current_weather_units.windspeed
      }</p>
        <p><strong>Direction du vent :</strong>
          <span style="
            display: inline-block;
            transform: rotate(${weatherResult.current_weather.windspeed}deg);
            transform-origin: center;">
            ⬆
        </p>
    `;

    cards.push(card);
  }

  return cards;
}

export { createCityCards };
