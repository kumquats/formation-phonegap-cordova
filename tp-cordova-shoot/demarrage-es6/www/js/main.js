// on écoute l'événement 'deviceready' lancé par cordova
// cela permet de n'exécuter notre code JavaScript que lorsque
// la webview est prête à communiquer avec les périphériques du terminal
$(document).ready( init );

// durée entre chaque création de nouveau monstre
const MONSTER_DELAY = 500;
let game;

// compatibilité requestAnimationFrame selon différents navigateurs
window.requestAnimationFrame = window.requestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.oRequestAnimationFrame;


/**
 * La fonction init sera appelée lors de l'événément 'ready'
 * (@see ligne 4)
 */
function init()
{
	// on écoute le click sur le bouton startGame
	$( 'a.startGame' ).click( startGame );
	// on initialise notre classe Monster pour lancer le téléchargement de l'image à afficher dans le canvas
	Monster.initialize();
	game = new Game( $( 'canvas' ), MONSTER_DELAY );
}

/**
 * Fonction appelée lors du click sur le bouton startGame.
 * Affiche le canvas et démarrage le jeu.
 * @param  {Event} event événement click lancé par le bouton startGame
 */
function startGame( event )
{
	event.preventDefault();
	// on masque le bouton startGame
	$( 'a.startGame' ).hide();
	game.start();
}

