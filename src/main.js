import maplibre from "maplibre-gl";
import { cities } from "./cityList";
import { weatherCodeToEmoji } from "./weatherCode.js";
import "./style.css";

const map = new maplibre.Map({
  container: "map",
  center: [4.8522, 45.7566],
  zoom: 10, // Niveau de zoom initial
  minZoom: 0, // Zoom minimum autorisé
  maxZoom: 18, // Zoom maximum autorisé
  maxPitch: 50, // Inclinaison maximale de la carte

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

// // The `click` event is an example of a `MapMouseEvent`.
// // Set up an event listener on the map.
map.on("click", async (e) => {
  // The event object (e) contains information like the
  // coordinates of the point on the map that was clicked.
  console.log("A click event has occurred at " + e.lngLat);
  // You can use the coordinates to fetch weather data or perform other actions.
  let response = await fetchData(e.lngLat.lat, e.lngLat.lng);
  console.log(response);
  const popup = new maplibre.Popup({ closeOnClick: true })
    .setLngLat(e.lngLat)
    .setHTML(
      `<div class= "popupweather"><h3>${response.current_weather.temperature}${response.current_weather_units.temperature}</h3>
           <p><strong>Vitesse du vent : </strong>${response.current_weather.windspeed}${response.current_weather_units.windspeed}</p>
           <p><strong>Adresse :</strong> Address test</p>
           </div>`
    )
    .addTo(map);
});

async function fetchData(lat, lng) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`;
  let response = await fetch(url);
  response = await response.json();

  return response;
}
cities.forEach(async (city) => {
  console.log(city);

  let result = await fetchData(city.lat, city.lng);
  console.log(result.current_weather.weathercode);
  const el = document.createElement("p");
  el.className = "weathericon";
  el.textContent = weatherCodeToEmoji[result.current_weather.weathercode];
  const marker = new maplibre.Marker({ element: el }).setLngLat([
    city.lng,
    city.lat,
  ]);
  // // Ajouter un popup
  // let popup = new maplibre.Popup({ offset: 25 }).setHTML(
  //   `<div class= "popupweather"><h3>Hello</h3>
  //          <p><strong>Station:</strong> Test Station 1</p>
  //          <p><strong>Adresse :</strong> Address test</p>
  //          </div>`
  // );
  // marker.setPopup(popup); // Attacher le popup au marqueur
  marker.addTo(map);
});
