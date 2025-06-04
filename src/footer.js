function createFooter() {
  const footer = document.createElement("footer");

  Object.assign(footer.style, {
    width: "100%",
    background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
    color: "#fff",
    textAlign: "center",
    padding: "0.4rem 1rem",
    zIndex: "100",
    margin: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: "0.75rem",
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
    <a href="https://github.com/GuillaumeLoriot" target="_blank" style="color: white; margin: 0 5px;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="25" style="vertical-align: middle; margin-right: 5px;">
      Guillaume Loriot
    </a>,
    <a href="https://github.com/EliesseM" target="_blank" style="color: white; margin: 0 5px;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="25" style="vertical-align: middle; margin-right: 5px;">
      Eliesse Mosbah
    </a>,
    <a href="https://github.com/SakaS069" target="_blank" style="color: white; margin: 0 5px;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="25" style="vertical-align: middle; margin-right: 5px;">
      Alexandre Barruel
    </a>,
    <a href="https://github.com/Amr69130" target="_blank" style="color: white; margin: 0 5px;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="25" style="vertical-align: middle; margin-right: 5px;">
      Norris Amrouche
    </a>
  `;

  const mentions = document.createElement("p");
  const legalLink = document.createElement("a");
  legalLink.href = "/mentions-legales.html";
  legalLink.textContent = "Mentions légales";
  legalLink.style.color = "#fff";
  legalLink.style.textDecoration = "underline";
  legalLink.target = "_blank";
  mentions.appendChild(legalLink);

  footer.appendChild(participants);
  footer.appendChild(mentions);
  footer.appendChild(infoProjet);

  document.body.appendChild(footer);
}

createFooter();
