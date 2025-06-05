function saveFavorite(ville) {
  let favoris = JSON.parse(localStorage.getItem("coordinates")) || [];

  // Évite les doublons (même nom ET mêmes coordonnées)
  const exists = favoris.some(
    (fav) =>
      fav.nom === ville.nom && fav.lat === ville.lat && fav.lng === ville.lng
  );

  if (!exists) {
    favoris.push(ville);
    localStorage.setItem("coordinates", JSON.stringify(favoris));
  }
}

// 🔥 Supprimer un favori
function deleteFavorite(index) {
  let favoris = JSON.parse(localStorage.getItem("coordinates")) || [];
  favoris.splice(index, 1); // retire l’élément à l’index donné
  localStorage.setItem("coordinates", JSON.stringify(favoris));
  afficherFavoris(); // recharge les favoris à l’écran
}

// 🔁 Afficher tous les favoris dans #favorites
function afficherFavoris() {
  const container = document.getElementById("favorites");
  container.innerHTML = "<h3>Vos villes favorites</h3>";

  let favoris = JSON.parse(localStorage.getItem("coordinates")) || [];

  if (favoris.length === 0) {
    container.innerHTML += "<p>Aucun favori enregistré.</p>";
    return;
  }

  const list = document.createElement("ul");
  list.style.listStyle = "none";
  list.style.padding = "0";

  favoris.forEach((ville, index) => {
    const item = document.createElement("li");
    item.style.marginBottom = "10px";

    item.innerHTML = `
      <strong>${ville.nom}</strong> (${ville.lat.toFixed(
      2
    )}, ${ville.lng.toFixed(2)}) -
      ${ville.temperature}°C
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

export { saveFavorite, afficherFavoris };
