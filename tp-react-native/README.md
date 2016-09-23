# TP React Native

## Objectifs
Créer une application React Native de moteur de recherche dans les articles wikipedia. 

## Préparatifs
- ajouter la variable d'environnement ANDROID_HOME vers le dossier sdk
- installer react-native-cli 
```bash
npm install -g react-native-cli
```
- créer un nouveau projet 
```bash
react-native init WikiReact
cd WikiReact
```
- Vérifier et éventuellement modifier ./android/app/build.gradle pour remplacer lignes 87 et 92 les valeurs de buildToolsVersion et targetSdkVersion pour correspondre aux build-tools et sdk installés
cf. http://stackoverflow.com/questions/33155087/react-native-on-android-failed-to-find-build-tools#34928913
- Dans le sdk manager : installer/mettre à jour Extras/Android Support repository cf. http://stackoverflow.com/questions/33023018/react-native-awesome-project-not-building-android-project#33023883
- lancer l'application 
```bash
react-native run-android
```
- Afficher les outils de debug de l'app, en appuyant sur la touche "menu" du téléphone (ou appui long sur la touche "carré" sur android 6)
    + Activer le Hot Reloading 
    + Activer la fonction "Debug JS Remotely"
    + modifier le contenu du fichier index.android.js et constater le rechargement à chaud de l'appli
    + ajouter un console.log et constater l'affichage dans la fenêtre de debug


## Instructions
- Créer un composant SearchForm contenant sur la même ligne un champ de saisie (TextInput) et un bouton (TouchableHighlight ou TouchableNativeFeedback - Android uniquement)) cf. http://facebook.github.io/react-native/releases/0.33/docs/layout-props.html
- Afficher le composant SearchForm dans l'application
- Détecter le clic sur le bouton submit du SearchForm et lancer une requête ajax vers l'api wikipedia (configurer la requête pour retourner 50 résultats - et non pas 10 par défaut) cf. https://www.mediawiki.org/wiki/API:Search
- afficher un loading dans la page pendant le chargement
- Créer un composant permettant d'afficher les résultats de recherche dans via une ListView

## Pour aller plus loin
- détecter le tap sur un des résultats et afficher le détail
- utiliser des animations/Navigator