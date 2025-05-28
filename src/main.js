import maplibre from "maplibre-gl";

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

// The `click` event is an example of a `MapMouseEvent`.
// Set up an event listener on the map.
map.on("click", (e) => {
  // The event object (e) contains information like the
  // coordinates of the point on the map that was clicked.
  console.log("A click event has occurred at " + e.lngLat);
});

async function fetchData() {
  let response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&current_weather=true"
  );
  response = await response.json();
  return response;
}
