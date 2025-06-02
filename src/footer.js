function createFooter() {
  const footer = document.createElement("footer");

  Object.assign(footer.style, {
    width: "100%",
    textAlign: "center",
    fontSize: "0.9rem",
    background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
    color: "#ffffff",
    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
    Padding: "0",
    marginTop: "3.1rem",
  });

  const infoProjet = document.createElement("p");
  infoProjet.textContent = "© 2025 - Projet Météo Interactive";

  const participants = document.createElement("p");
  participants.textContent =
    "Participants : Guillaume Loriot, Eliesse Mosbah, Alexandre Baruel, Norris Amrouche";

  footer.appendChild(infoProjet);
  footer.appendChild(participants);

  document.body.appendChild(footer);
}

createFooter();
