import maplibre from "maplibre-gl";
import { cities } from "./cityList.js";
import { weatherCodeToEmoji } from "./weatherCode.js";
import { createCityCards } from "./city-cards.js";
import { fetchWeatherData } from "./api-requests.js";
import { fetchCityData } from "./api-requests.js";
import { serializeCoordinates, deserializeCoordinates } from "./serializer.js";
import { saveFavorite, displayFavorites } from "./favorites.js";
import "./style.css";
// === Initialisation de la carte ===
const map = new maplibre.Map({
  container: "map",
  center: [2.6399999, 47.56],
  zoom: 4.5,
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
        paint: {
          "raster-brightness-max": 0.6,
          // "raster-brightness-min": 0.2,
          "raster-saturation": 0.3,
          "raster-contrast": 0.5,
          // "raster-opacity": 1.0
        }
      },
    ],
  },
});

// === Affichage des favoris au chargement ===
displayFavorites();

// === Au clic sur la carte ===
map.on("click", async (e) => {
  console.log("A click event has occurred at " + e.lngLat);

  const response = await fetchWeatherData(e.lngLat.lat, e.lngLat.lng);
  console.log(response);
  const cityResult = await fetchCityData(e.lngLat.lat, e.lngLat.lng);
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
    <div class="city-card">
    <div class="city-card-title">
      <hgroup>
        <h3>${cityResult.city}</h3>
        <p>${cityResult.countryName}</p>
      </hgroup>
      <p>${weatherCodeToEmoji[response.current_weather.weathercode]}</p>
    </div>
    <div class="city-card-content">
      <div>
        <p class="temp">${response.current_weather.temperature}${response.current_weather_units.temperature}</p>
        <p><strong>Vents :</strong> ${response.current_weather.windspeed}
          ${response.current_weather_units.windspeed}</p>
        <p><strong>Dernier relevé :</strong> ${hourPart}h</p>
      </div>
      <div class="compass-container">
        <img src="public/compass-white.png" alt="" class="compass">
        <img src="public/arrow-white.png" alt="" class="arrow "style="transform: rotate(${response.current_weather.winddirection}deg);
            transform-origin: center;">
      </div>
    </div>
            <button id="fav-button" value=${serializeCoordinates(
        coordinates
      )}>Favoris</button>

    </div>
    `
    )
    .addClassName("popup-weather")
    .addTo(map);


  const button = document.getElementById("fav-button");
  button.addEventListener("click", async () => {
    const coords = deserializeCoordinates(button.value);
    const cityData = await fetchCityData(coords.lat, coords.lng);

    const ville = {
      name: cityData.city || "Inconnue",
      lat: coords.lat,
      lng: coords.lng,
      temperature: response.current_weather.temperature,
      weathercode: response.current_weather.weathercode,
    };

    saveFavorite(ville);
    displayFavorites();
    console.log("Ajouté aux favoris :", ville);
  });
});

// === Ajout des villes prédéfinies avec emojis météo ===
cities.forEach(async (city) => {
  console.log(city);

  const result = await fetchWeatherData(city.lat, city.lng);
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
const container = document.getElementById("slide-show");
async function displayCards() {
  const container = document.getElementById("slide-show");
  const cards = await createCityCards(5);
  cards.forEach((card) => {
    container.appendChild(card);
  });
}
displayCards();
displayCards().then(() => {
  const slideShow = document.getElementById("slide-show");
  // On duplique le contenu pour avoir une boucle continue
  slideShow.innerHTML += slideShow.innerHTML;

  // Initialisation du scroll
  slideShow.scrollLeft = 0;
  const speed = 1;

  function loop() {
    slideShow.scrollLeft += speed;
    // quand on dépase la moitié des cards
    if (slideShow.scrollLeft >= slideShow.scrollWidth / 2) {
      slideShow.scrollLeft = 0;
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
});



