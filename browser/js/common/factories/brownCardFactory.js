app.factory('brownCardFactory', function(shapeFactory){
	function brownCard(gameCard, width, height, iconSize){
		shapeFactory.drawHalfRound(gameCard, width, height, 0, 0, 6, 'brown')
		var game = gameCard.game
		var cardEffect = gameCard.cardInfo.effect.result;
		var resource = gameCard.cardInfo.effect.result.resource;

		var numIcons = cardEffect.quantity;
		var yOffset = Math.floor((height - iconSize)/2);
		var spacer = Math.ceil((width-numIcons*iconSize)/(numIcons+1));
		var xOffset = spacer + iconSize;

		var cost = gameCard.cardInfo.cost.length;
		var fontSize = 20;
		var name = game.make.text(0,0, gameCard.cardInfo.name, 
			{font: "bold "+ fontSize +"px", fill:'black'});
		gameCard.draw(name, (width - name.width)/2, gameCard.height - gameCard.height/8);

		for(var i = 0; i < numIcons; i++){
			gameCard.draw(resource, width - xOffset, yOffset, iconSize, iconSize)
			xOffset += (spacer + iconSize);
		}

	}
	return brownCard;
})