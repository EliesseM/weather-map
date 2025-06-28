import { weatherCodeToEmoji } from "./weatherCode.js";


function saveFavorite(city) {
  let favorites = JSON.parse(localStorage.getItem("coordinates")) || [];

  // Évite les doublons
  const exists = favorites.some(
    (fav) =>
      fav.name === city.name
  );

  if (!exists) {
    favorites.push(city);
    localStorage.setItem("coordinates", JSON.stringify(favorites));
  }
}

// Supprimer un favori
function deleteFavorite(index) {
  let favorites = JSON.parse(localStorage.getItem("coordinates")) || [];
  favorites.splice(index, 1); // retire l’élément à l’index donné
  localStorage.setItem("coordinates", JSON.stringify(favorites));
  displayFavorites(); // recharge les favoris à l’écran
}

// Afficher tous les favoris dans #favorites
function displayFavorites() {
  const container = document.getElementById("favorites");
  container.innerHTML = "<h3>Vos villes favorites</h3>";

  let favorites = JSON.parse(localStorage.getItem("coordinates")) || [];

  if (favorites.length === 0) {
    container.innerHTML += "<p>Aucun favori enregistré.</p>";
    return;
  }

  const list = document.createElement("ul");
  list.style.listStyle = "none";
  list.style.padding = "0";

  favorites.forEach((city, index) => {
    const item = document.createElement("li");
    item.className = "fav-item";


    item.innerHTML = `
    <div>
      <p><strong>${city.name}</strong></p>
      <div class ="fav-weather">
      <p id="fav-weather-icon">${weatherCodeToEmoji[city.weathercode]}</p>
      <p>${city.temperature}°C</p>
      </div>
    </div>
    <button data-index="${index}" class="delete-fav">🗑</button>
    `;

    list.appendChild(item);
  });

  container.appendChild(list);

  // Ajout des événements "supprimer"
  document.querySelectorAll(".delete-fav").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = parseInt(e.target.getAttribute("data-index"));
      deleteFavorite(index);
    });
  });
}

export { saveFavorite, displayFavorites };
