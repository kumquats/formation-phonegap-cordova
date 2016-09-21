class Game {

	constructor(canvas, monsterDelay){
		this.canvas = canvas;
		this.context = this.canvas[0].getContext( '2d' );
		this.monsterDelay = monsterDelay;
		this.monsters = [];

		this.render = this.render.bind(this);
	}

	start(){
		// on affiche le canvas
		this.canvas.css( 'display', 'block' );
		// on le redimensionne pour qu'il prenne tout l'écran
		// NB : dans la CSS il est positionné maintenant en absolu top:0 left:0
		this.canvas.attr( 'width', $(window).width() );
		this.canvas.attr( 'height', $(window).height() );
		this.canvas.click( this.canvas_clickHandler.bind(this) );
		// on lance le processus de créaction de monstres à intervalles réguliers
		setInterval( this.createMonster.bind(this), this.monsterDelay );
		// on lance le processus de rendu du canvas
		requestAnimationFrame( this.render );
	}

	/**
	 * Fonction appelée par le setInterval (cf. ligne 40) toutes les 500ms (MONSTER_DELAY)
	 * Crée un nouveau monstre à une position aléatoire.
	 */
	createMonster(){
		// si l'on a 50 monstres déjà à l'écran, on n'en crée pas de nouveau
		if (this.monsters.length < 50 )
		{
			// on crée un nouveau monstre
			var monster = new Monster();
			// position x et y aléatoire, en fonction des dimensions du canvas
			monster.y = Math.random()*$('canvas').height();
			monster.x = Math.random()*$('canvas').width();
			// taille du nouveau monstre aléatoire également
			monster.size = monster.size * ( 0.5 + 0.5*Math.random() )
			// on enregistre le monstre dans notre tableau de monstres
			// pour un affichage ultérieur dans le canvas
			this.monsters.push( monster );
		}
	}

	/**
	 * Fonction appelée au click sur le canvas
	 * teste si l'utilisateur a cliqué sur un monstre ou non
	 * @param  {Event} event événement click lancé par le canvas
	 */
	canvas_clickHandler( event ){
		event.preventDefault();
		// on calcule les coordonnées du point touché
		// relativement au canvas
		var offset = this.canvas.offset();
		// NB : on n'utilise que le premier point touché (multitouch)
		// on pourrait boucler sur tous les points (touches)
		// pour prendre en compte le multitouch
		var x = event.pageX-offset.left,
			y = event.pageY-offset.top;
		// on parcours la liste des monstres
		for ( var i = this.monsters.length - 1; i >= 0 ; i-- )
		{
			var monster = this.monsters[ i ];
			// si l'utilisateur a touché un monstre...
			if ( monster.hits( x, y ) )
			{
				// ... alors on le supprime du tableau
				// (attention au sens de lecture du tableau)
				this.monsters.splice( i, 1 );
			}
		}
	}

	/**
	 * Méthode appelée via la méthode requestAnimationFrame
	 * Affiche les monstres sur le canvas
	 */
	render(){
		// on calcule les dimensions du canvas
		var bounds = this.canvas[0].getBoundingClientRect();
		// on efface complètement le canvas
		this.context.clearRect(0, 0, this.canvas.width(), this.canvas.height() );
		// on affiche un à un les monstres dans le canvas
		for ( var i = 0, monstersLength = this.monsters.length; i < monstersLength; i++ )
		{
			var monster = this.monsters[ i ];
			// on déplace le monstre
			monster.move( bounds );
			// on l'affiche dans le canvas
			monster.renderTo( this.context );
		}
		// on redemande un nouveau render à la frame suivante
		requestAnimationFrame( this.render );
	}

}
