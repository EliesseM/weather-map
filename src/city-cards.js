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

  return randomCities.map(async(city) => {
    let cityResult = await fetchCityData(city.lat, city.lng);
    console.log(cityResult);
    const card = document.createElement("div");
    card.className = "city-card";
    card.innerHTML = `
      <h3>${city.name}</h3>
      <p>Latitude: ${city.lat.toFixed(4)}</p>
      <p>Longitude: ${city.lng.toFixed(4)}</p>
    `;
    return card;
  });
}

export { createCityCards };
