Application WEATHER-MAP :
Le but de cette application est d'afficher une carte sur laquelle nous pourrons zoomer et cliquer, le click sortira des coordonnées, ces coordonnées donneront ensuite la météo de cette zone via une API météo.

etapes:
initialisation du projet vite via cmd npm create vite@latest
npm install
npm rundev
npm install maplibre-gl
modification du index.html
configuration de la carte dans le main.js

initial commit
creations des 4branches à partir de main (alex, Amrouche, Mosbah-Eliesse, guillaume).
feature à ajouter :

selection de 15 villes principales pour une affichage d'icone (soleil, nuages, pluie,....),

                    Paris

                    Marseille

                    Lyon

                    Toulouse

                    Nice

                    Lille

                    Nantes

                    Strasbourg

                    Bordeaux

                    Montpellier

                    Amiens

                    Brest

                    Rennes

                    Clermont-Ferrand

Requete principale pour API (fetch),
akout d'un tableau contenant les weathercode (0 = icone soleil ☀️, 61 = 🌧️,....),
ajout de marqeur pour chaque ville (15),
customisation du marqueur (d'abord un soleil ecrit en brut pour chaque),
adapter dynamiquement les values réelles pour chaque ville de la liste (soleil à Paris si aujourd'hui vraiment ensoleillé et pluie à Lyon si réellement pluvieux, etc ... en fonction des données API recupérées).,
generation d'une popup on click avec les infos de la villes sur laquelle on a cliqué,
fermeture automatique de la popup lors d'un click ailleurs (ouverture new popup = fermeture ancienne popup),
ajout d'infos personnalisées dans la pop-up
ajout d'une fleche qui indiquera la direction du vent avec valeur en ° (taille adaptée à la puissance), ainsi que sa vitesse en km/h et reconfiguration du format de l'heure avec methode split().

(Weather code/icone meteo:

Code Description
0 Clear sky
1, 2, 3 Mainly clear, partly cloudy, and overcast
45, 48 Fog and depositing rime fog
51, 53, 55 Drizzle: Light, moderate, and dense intensity
56, 57 Freezing Drizzle: Light and dense intensity
61, 63, 65 Rain: Slight, moderate and heavy intensity
66, 67 Freezing Rain: Light and heavy intensity
71, 73, 75 Snow fall: Slight, moderate, and heavy intensity
77 Snow grains
80, 81, 82 Rain showers: Slight, moderate, and violent
85, 86 Snow showers slight and heavy
95 _ Thunderstorm: Slight or moderate
96, 99 _ Thunderstorm with slight and heavy hail)

amelioration du style général en ayant mi la map dans un container et ajout d'un header :

ajout de 5 cards qui de maniere aleatoire affichent 5 villes principales en scrollbar sur la gauche
ajout d'un footer avec infos (participants et mentions légales)

TODO :

- REDUIRE TAILLE DES CARDS ET Y AJOUTER UN BOUTON FAVORI ET AJOUTER DANS CETTE MEME DIV LA DESCRIPTION DU PROJET

- AJOUTER LES CONDITIONS METEO DE LA VILLE DANS LES CARDS ALEATOIRES

- TROUVER LA LOGIQUE POUR AVOIR LA POSSIBILITE D'AJOUTER UNE VILLE EN FAVORI (si possible l'ajouter dans la liste des card)
