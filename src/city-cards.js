import { cities } from "./cityList.js";

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

function createCityCards(count = 5) {
  const randomCities = getRandomCities(cities, count);

  return randomCities.map((city) => {
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
