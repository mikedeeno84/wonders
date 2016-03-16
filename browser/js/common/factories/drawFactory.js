app.factory('drawFactory', function(){
	var drawFactory = {};
	
	drawFactory.drawGold = function(gameCard, numGold, x,y, iconSize){
		gameCard.draw('Gold', x, y, iconSize, iconSize)
		var number = gameCard.game.make.text(0, 0, numGold,
			{font: "bold "+ iconSize/20 +"px", fill:'black'});
		gameCard.draw(number, x + (iconSize - number.width)/2, y + (iconSize - number.height))
	}

	drawFactory.drawIcon = function drawIcon(gameCard, icon, x, y, iconSize){
		gameCard.draw(icon,x,y,iconSize, iconSize);
	}

	drawFactory.drawVp = function(gameCard, width, height, iconSize, xOffset){
		var game = gameCard.game;
		var vpFontSize = iconSize/2;
		var yOffset = Math.floor((height - iconSize)/2)
		var numVp = gameCard.cardInfo.vp;

		var vpText = game.make.text(0,0, numVp, {font: vpFontSize +"px serif", fill:'#1AA1FD'});
		
		if (!xOffset) {
			gameCard.draw('Wreath', width/2 - (iconSize/2), yOffset, iconSize, iconSize)
			gameCard.draw(vpText, width/2 - vpText.width/2, height/2 - vpText.height/2);
		}

		else{
			var diff = width - xOffset;
			gameCard.draw('Wreath', width - xOffset, yOffset, iconSize, iconSize)
			gameCard.draw(vpText, width - xOffset + (iconSize/2 - vpText.width/2) , height/2 - vpText.height/2);
		}
	}
	return drawFactory;
})