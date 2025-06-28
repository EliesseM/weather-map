function createFooter() {
  const footer = document.createElement("footer");

  Object.assign(footer.style, {
    width: "100%",
    background: "linear-gradient(90deg, rgba(15, 28, 47, 0.85) 0%, rgba(15, 28, 47, 0.85) 100%)",
    color: "#d1d9ff",
    textAlign: "center",
    padding: "0.4rem 1rem",
    zIndex: "100",
    margin: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: "0.9rem",
    position: "fixed",
    bottom: "0",
    left: "0",
    height: "40px",
  });


  const infoProjet = document.createElement("p");
  infoProjet.textContent = "© 2025 - Projet Météo Interactive";

  const participants = document.createElement("p");
  participants.innerHTML = `
    Participants :
    <a href="https://github.com/GuillaumeLoriot" target="_blank" style="color: #d1d9ff; margin: 0 5px; font-weight: 500;">
      <img src="public/github-icon.png" alt="GitHub" width="25" style="vertical-align: middle; margin-right: 5px;">
      Guillaume Loriot
    </a>,
    <a href="https://github.com/EliesseM" target="_blank" style="color: #d1d9ff; margin: 0 5px; font-weight: 500;">
      <img src="public/github-icon.png" alt="GitHub" width="25" style="vertical-align: middle; margin-right: 5px;">
      Eliesse Mosbah
    </a>,
    <a href="https://github.com/SakaS069" target="_blank" style="color: #d1d9ff; margin: 0 5px; font-weight: 500;">
      <img src="public/github-icon.png" alt="GitHub" width="25" style="vertical-align: middle; margin-right: 5px;">
      Alexandre Barruel
    </a>,
    <a href="https://github.com/Amr69130" target="_blank" style="color: #d1d9ff; margin: 0 5px; font-weight: 500;">
      <img src="public/github-icon.png" alt="GitHub" width="25" style="vertical-align: middle; margin-right: 5px;">
      Norris Amrouche
    </a>
  `;

  const mentions = document.createElement("p");
  const legalLink = document.createElement("a");
  legalLink.href = "/mentions-legales.html";
  legalLink.textContent = "Mentions légales";
  legalLink.style.color = "#d1d9ff";
  legalLink.style.textDecoration = "underline";
  legalLink.target = "_blank";
  mentions.appendChild(legalLink);

  footer.appendChild(infoProjet);
  footer.appendChild(participants);
  footer.appendChild(mentions);

  document.body.appendChild(footer);
}

createFooter();
