function saveFavorite(city) {
  let favorites = JSON.parse(localStorage.getItem("coordinates")) || [];

  // Évite les doublons (même nom ET mêmes coordonnées)
  const exists = favorites.some(
    (fav) =>
      fav.nom === city.nom && fav.lat === city.lat && fav.lng === city.lng
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
    item.style.marginBottom = "10px";


    item.innerHTML = `
      <strong>${city.nom}</strong> (${city.lat.toFixed(
      2
    )}, ${city.lng.toFixed(2)}) : 
      ${city.temperature}°C
      <button style="margin-left: 10px;" data-index="${index}" class="delete-fav">🗑</button>
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
