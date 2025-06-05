import maplibre from "maplibre-gl";
import { cities } from "./cityList.js";
import { weatherCodeToEmoji } from "./weatherCode.js";
import { createCityCards } from "./city-cards.js";
import { fetchWeatherData } from "./api-requests.js";
import { fetchCityData } from "./api-requests.js";
import { serializeCoordinates, deserializeCoordinates } from "./serializer.js";
import { saveFavorite, afficherFavoris } from "./favorites.js"; // ✅ Import favoris
import "./style.css";

// === Initialisation de la carte ===
const map = new maplibre.Map({
  container: "map",
  center: [4.8522, 45.7566],
  zoom: 10,
  minZoom: 0,
  maxZoom: 18,
  maxPitch: 50,
  style: {
    version: 8,
    sources: {
      osm: {
        type: "raster",
        tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
        tileSize: 256,
        attribution: "&copy; OpenStreetMap",
        maxzoom: 19,
      },
    },
    layers: [
      {
        id: "osm",
        type: "raster",
        source: "osm",
      },
    ],
  },
});

// === Au clic sur la carte ===
map.on("click", async (e) => {
  console.log("A click event has occurred at " + e.lngLat);

  const response = await fetchWeatherData(e.lngLat.lat, e.lngLat.lng);
  console.log(response);

  const time = response.current_weather.time;
  const hourPart = time.split("T")[1];

  const windSpeed = response.current_weather.windspeed;
  const windDirection = response.current_weather.winddirection;

  const coordinates = {
    lng: e.lngLat.lng,
    lat: e.lngLat.lat,
  };

  const arrowSize = Math.min(80, Math.max(30, windSpeed * 4));

  const popup = new maplibre.Popup({ closeOnClick: true })
    .setLngLat(e.lngLat)
    .setHTML(
      `
      <div class="popupweather">
        <h3>${response.current_weather.temperature}${
        response.current_weather_units.temperature
      }</h3>
        <p><strong>Heure du relevé :</strong> ${hourPart} h</p>
        <p><strong>Vitesse du vent :</strong> ${windSpeed} ${
        response.current_weather_units.windspeed
      }</p>
        <p><strong>Direction du vent :</strong>
          <span style="
            font-size: ${arrowSize}px;
            display: inline-block;
            transform: rotate(${windDirection}deg);
            transform-origin: center;">
            ⬆
          </span> (${windDirection}°)
        </p>
        <button id="favoris" value=${serializeCoordinates(
          coordinates
        )}>Favoris</button>
      </div>
    `
    )
    .addTo(map);

  const button = document.getElementById("favoris");
  button.addEventListener("click", async () => {
    const coords = deserializeCoordinates(button.value);
    const cityData = await fetchCityData(coords.lat, coords.lng);

    const ville = {
      nom: cityData.city || "Inconnue",
      lat: coords.lat,
      lng: coords.lng,
      temperature: response.current_weather.temperature,
    };

    saveFavorite(ville);
    afficherFavoris();
    console.log("Ajouté aux favoris :", ville);
  });
});

// === Ajout des villes prédéfinies avec emojis météo ===
cities.forEach(async (city) => {
  console.log(city);

  const result = await fetchWeatherData(city.lat, city.lng);
  console.log(result.current_weather.weathercode);

  const el = document.createElement("p");
  el.className = "weathericon";
  el.textContent = weatherCodeToEmoji[result.current_weather.weathercode];

  const marker = new maplibre.Marker({ element: el }).setLngLat([
    city.lng,
    city.lat,
  ]);
  marker.addTo(map);
});

// === Cartes aléatoires de villes ===
const container = document.getElementById("random-city-cards");
async function displayCards() {
  const container = document.getElementById("random-city-cards");
  const cards = await createCityCards(5);
  cards.forEach((card) => {
    container.appendChild(card);
  });
}
displayCards();
console.log(cards);

// === Affichage des favoris au chargement ===
afficherFavoris();
