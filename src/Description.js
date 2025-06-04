export function createDescription() {
  const description = document.createElement("div");

  Object.assign(description.style, {
    width: "30%",
  });

  const infoDescription = document.createElement("p");
  infoDescription.textContent = "Projet Météo Interactive – Application web affichant en temps réel la météo de différentes villes via une carte interactive (MapLibre + API Open-Meteo). L’utilisateur clique sur une ville pour voir la température, le vent (vitesse/direction), l’heure de mise à jour, un pictogramme météo. Marqueurs animés par ville avec popup d’infos. Design responsive, thème sombre, dégradés dynamiques, structure claire : en-tête, carte centrale, footer (infos projet et noms des participants). Objectifs : maîtriser API REST, DOM JS, bibliothèques cartographiques, gestion d’événements.";

  description.appendChild(infoDescription);

  const main = document.querySelector("main");
  if (main) {
    main.appendChild(description);
  } else {
    console.error("La balise <main> est introuvable !");
  }
}

createDescription();