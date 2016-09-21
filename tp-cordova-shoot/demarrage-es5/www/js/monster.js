/**
 * La classe Monster représente un monstre du jeu.
 * Elle permet de contrôler sa position, de le rendre dans le canvas,
 * et de tester la collision avec un point du canvas.
 * La direction et la vitesse de déplacement sont aléatoires.
 * @param {Number} x    position x du monstre à sa création. 0 par défaut.
 * @param {Number} y    position y du monstre à sa création. 0 par défaut.
 * @param {Number} size taille (largeur & hauteur) du monstre à sa création. 50 par défaut.
 */
function Monster(x, y, size)
{
	this.x = x || 0;
	this.y = y || 0;
	this.size = size || 50;
	this.vx = 2 - 4*Math.random();
	this.vy = 2 - 4*Math.random();
	return this;
}

/**
 * Méthode statique qui permet de lancer le chargement de l'image du monstre en
 * vue de l'afficher ensuite dans le canvas du jeu.
 */
Monster.initialize = function()
{
	this.img = new Image();
	this.img.src = 'img/monster.gif';
}

/**
 * La méthode renderTo permet de dessiner le monstre dans un canvas à sa position x et y.
 * @param  {Object} context Contexte 2D du canvas dans lequel on souhaite dessiner.
 */
Monster.prototype.renderTo = function( context )
{
	context.save();
	context.translate( this.x, this.y )
	context.drawImage( Monster.img, 0, 0, this.size, this.size );
	context.restore();
}

/**
 * Teste l'intersection d'un point x et y avec le monstre.
 * @param  {Number} x position x du point à tester
 * @param  {Number} y position y du point à tester
 * @return {Boolean}   true si le point se superspose avec le monstre
 *                     false si le point est en dehors du mosntre
 */
Monster.prototype.hits = function( x, y )
{
	return x >= this.x
		&& x <= this.x + this.size
		&& y >= this.y
		&& y <= this.y + this.size;
}

/**
 * Déplace le monstre (modifie ses coordonnées x et y).
 * Si le monstre sort des dimensions du canvas,
 * alors il rebondi sur le bord pour repartir dans la direction opposée.
 * @param  {Object} bounds dimensions du canvas
 */
Monster.prototype.move = function( bounds )
{
	this.x += this.vx;
	this.y += this.vy;

	if ( this.x < 0 )
	{
		this.x = 0;
		this.vx *= -1;
	}
	if ( this.x + this.size > bounds.width )
	{
		this.x = bounds.width - this.size;
		this.vx *= -1;
	}
	if ( this.y < 0 )
	{
		this.y = 0;
		this.vy *= -1;
	}
	if ( this.y + this.size > bounds.height )
	{
		this.y = bounds.height - this.size;
		this.vy *= -1;
	}
}