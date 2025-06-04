function createFooter() {
  const footer = document.createElement("footer");

  Object.assign(footer.style, {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
    color: "#fff",
    textAlign: "center",
    padding: "0",
    zIndex: "100",
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

  footer.appendChild(infoProjet);
  footer.appendChild(participants);
  footer.appendChild(mentions);

  document.body.appendChild(footer);
}

createFooter();
