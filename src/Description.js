export function createDescription() {
  let description = document.getElementById("description");
  // description.className = "description";

  const infoDescription = document.createElement("p");
  infoDescription.textContent =
    "Découvrez la météo en temps réel grâce à notre carte interactive. Cliquez sur une ville pour voir instantanément la température, l’heure du relevé et la vitesse du vent ainsi que sa direction. Vous aurez aussi la possibilité d’ajouter vos villes préférées à vos favoris pour un accès rapide.";

  description.appendChild(infoDescription);
  const main = document.querySelector("main");

  main.append(descriptionDiv);
  description.appendChild(p);
}

createDescription();
