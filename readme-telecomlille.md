07 - TP cordova : application Bazinga
=====================================

Objectif
--------
Créer un nouveau projet cordova et utiliser les différentes méthodes de déploiement, et les principaux outils de test et debug


Exercices
---------
**0- Installer les sdk android & PhoneGap en suivant les instructions du support)**

**1- création du projet en ligne de commande**
- cordova create bazinga fr.kumquats.bazinga Bazinga
- cd bazinga
- cordova platform add android

**2- test sur l'emulateur**
- cordova emulate android

**3. test sur device connecté**
- activer les options développeur et autoriser le débogage usb sur le téléphone
- installer le driver USB propre au téléphone (pour le wiko se rendre sur cette page : http://androidxda.com/download-wiko-usb-drivers)
- connecter le téléphone au PC avec le cable USB
- lancer la commande : adb devices (doit demander une autorisation sur le téléphone et afficher l'id du périphérique suivi de "device" dans la console)
- déployer le projet sur le téléphone connecté : 
- cordova run android --device

**3b- debug avec chrome dev tools (si android 4.4 mini)**
- chrome://inspect

**4- installer l'apk depuis une URL**
- sur le poste de développement :
- cordova build android
- copier l'apk depuis le dossier platforms/android/build/outputs/apk/
- coller l'apk dans xampp/htdocs
- sur le téléphone : 
- autoriser l'installation de sources inconnues (settings>security)
- ouvrir chrome et aller sur l'adresse du poste de développement (http://192.168.xxxxx/bazinga.apk)

**5- debug avec Phonegap Developer app**
- facultatif selon les installations : dans le index.html commenter la ligne <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *">
- installer Phonegap Developer App sur le téléphone depuis le store
- lancer la commande : phonegap serve
- lancer PhoneGap Developer App sur le téléphone
- entrer l'url affichée dans la ligne de commande
- L'application se lance dans le téléphone (en cas de soucis, creer un dossier/fichier : .cordova/config.json)
- modifier les fichiers html/css/js et voir le live reload de l'app

NB : on peut voir les console.log dans la ligne de commande
NB : plusieurs devices peuvent se connecter au même serveur


**6- création projet avec phonegap-build**
- upload d'un zip contenant le fichier config.xml et le dossier www 
- scan du QRCode de l'appli par le téléphone

**8- créer une appli multi-pages :**
- ajouter un fichier page2.html
- ajouter un lien dans la page index.html vers ce fichiers (chemin relatifs)
- relancer l'appli pour voir le résultat

**9- créer une première SPA :**
- supprimer le fichier page2.html
- en javascript, détecter le clic sur le lien et modifier le DOM pour afficher le contenu de la page2 à la place de l'index

**10- développer une application mobile ajax**
- sur la base des fichiers de démarrage présents sur https://github.com/kumquats/formation-js-perfectionnement/tree/master/6.1-donnees-ajax/demarrage
- récupérer le fichier html
- lors de la recherche, lancer un appel ajax vers 
https://fr.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=marecherche
- lors du clic sur un résultat de recherche, lancer un appel ajax vers :
https://fr.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&rvprop=content&titles=titredelapage




- archiver le dossier www généré (le renommer)
- copier les fichiers du TP SNCF dans un nouveau dossier www
- reprendre la balise meta viewport du fichier index.html de l'ancien dossier www
- si besoin modifier le index.html pour utiliser un fichier jquery local
- modifier l'appel ajax pour appeler directement l'api SNCF et pas le proxy.php
- inclure dans le fichier index.html le script cordova.js
- compiler avec la méthode de son choix
