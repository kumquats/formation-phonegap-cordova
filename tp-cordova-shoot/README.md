TP Cordova : shoot
==================

Objectif
--------
Créer une application mobile Cordova utilisant deux plugins natifs : l'appareil photo & l'accéleromètre


Exercices
---------
**1- création d'un nouveau projet**
```bash
$> cordova create shoot fr.kumquats.shoot Shoot
$> cd shoot
$> cordova platform add android
```

**2- intégration du code de démarrage**
- archiver le contenu du dossier www généré par Cordova (on aura besoin des fichiers par la suite)
- copier les fichiers de démarrage dans le dossier www vide
- reprendre la balise meta viewport du index.html généré par cordova
- modifier le index.html pour utiliser un fichier jquery local
- inclure cordova.js
- dans le main.js remplacer l'événement jquery "ready" par l'événement cordova "deviceready"

NB: si vous utilisez la version es6, installez babel dans le dossier www
```bash
npm install --save-dev babel-cli babel-loader babel-core babel-preset-es2015
```
et compilez l'application avec la commande :
```bash
.\node_modules\.bin\babel js -d build --watch --source-maps
```

**3- optimisations**
- forcer l'orientation portrait
- passer l'application en plein écran
- désactiver la couleur du tap en css (cf. CSS générée par Cordova)
- empêcher l'application de scroller
- utiliser les événements touchstart plutôt que click

**4- prendre l'utilisateur en photo au lancement du jeu**
- installer le plugin Cordova permettant de manipuler la caméra
```bash
$> cordova plugin add cordova-plugin-camera
```
- lancer l'appareil photo au clic sur le bouton startgame
- afficher la photo dans le canvas (dans la fonction render)

**5- utiliser l'accéléromètre pour déplacer le joueur**
- installer le plugin cordova permettant d'utiliser l'accéléromètre du device :
```bash
$> cordova plugin add cordova-plugin-device-motion
```
- utiliser la méthode watchAcceleration et inspecter les valeurs retournées
- modifier la position de l'image en fonction de l'accélération 


Pour aller plus loin
--------------------
- détecter la collision entre le joueur et les monstres et détruire les monstres lorsque l'utilisateur passe dessus.
> remplacer le clickhandler par un test dans la fonction render (monster.hits(playerx, playery))
