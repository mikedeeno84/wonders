app.factory('drawFactory', function(shapeFactory){
	var drawFactory = {};

	drawFactory.drawGold = function(gameCard, numGold, x,y, iconSize){
		
		gameCard.draw('Gold', x, y, iconSize, iconSize);

		var number = gameCard.game.make.text(0, 0, numGold + "",
			{fontSize: Math.floor(iconSize/2), fill:'black'});
		gameCard.draw(number, (x + (iconSize - number.width)/2), (y + (iconSize - number.height/1.5)))
	}

	drawFactory.drawIcon = function drawIcon(gameCard, icon, x, y, iconSize){
		gameCard.draw(icon,x,y,iconSize, iconSize);
	}

	drawFactory.drawVp = function(gameCard, width, height, iconSize, xOffset){
		var game = gameCard.game;
		var vpFontSize = iconSize/2;
		var yOffset = Math.floor((height - iconSize)/2)
		var numVp = gameCard.cardInfo.vp;

		var vpText = game.make.text(0,0, numVp, {fontSize: vpFontSize, fill:'white'});
		
		if (!xOffset) {
			gameCard.draw('Wreath', width/2 - (iconSize/2), yOffset, iconSize, iconSize)
			gameCard.draw(vpText, width/2 - vpText.width/2, height/2 - vpText.height/2);
		}

		else{
			gameCard.draw('Wreath', width - xOffset, yOffset, iconSize, iconSize)
			gameCard.draw(vpText, width - xOffset + (iconSize/2 - vpText.width/2) , height/2 - vpText.height/2);
		}

	}

	drawFactory.drawSpecial = function(gameCard,x,y,iconSize, type){

		if (type !== 'Wonder') {
			shapeFactory.drawRounded(gameCard, iconSize*.8,iconSize, x, y, 4, type.toLowerCase(), 'white')	
		}
		else{
			this.drawIcon(gameCard, 'Pyramid', x, y, iconSize)
		}
		this.drawGold(gameCard, 1, x - (iconSize*1/4) , y + (iconSize*5/8), iconSize/2)
	}

	return drawFactory;
})