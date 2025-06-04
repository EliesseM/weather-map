export function createDescription() {
  const description = document.createElement("div");
  description.className = "description-container";

  const infoDescription = document.createElement("p");
  infoDescription.textContent =
    "Projet Météo Interactive – Découvrez la météo en temps réel grâce à notre carte interactive. Cliquez sur une ville pour voir instantanément la température, la vitesse et la direction du vent, l’heure de la dernière mise à jour et un pictogramme météo. Chaque ville est marquée par une icône animée avec une popup d’informations météo. L’interface est responsive, avec un design sombre, des dégradés dynamiques et une structure claire comprenant une en-tête, une carte centrale et un pied de page avec les infos du projet et les noms des participants. Profitez d’une navigation fluide tout en explorant la météo ville par ville !";

  description.appendChild(infoDescription);

  const main = document.querySelector("main");
  if (main) {
    main.parentNode.insertBefore(description, main);
  } else {
    console.error("La balise <main> est introuvable !");
  }
}

createDescription();
