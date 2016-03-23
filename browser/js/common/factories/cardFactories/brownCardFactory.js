app.factory('brownCardFactory', function(shapeFactory){
	function brownCard(gameCard, width, height, iconSize){
		shapeFactory.drawHalfRound(gameCard, width, height, 0, 0, 6, '#6E2F1D')
		var game = gameCard.game
		var cardInfo = gameCard.cardInfo
		var cardEffect = cardInfo.effect.result;
		var resource = cardInfo.effect.result.resource;

		var numIcons = cardEffect.quantity;
		var yOffset = Math.floor((height - iconSize)/2);
		var spacer = Math.ceil((width-numIcons*iconSize)/(numIcons+1));
		var xOffset = spacer + iconSize;
		
		for(var i = 0; i < numIcons; i++){

			gameCard.draw(resource, width - xOffset, yOffset, iconSize, iconSize)
			xOffset += (spacer + iconSize);
		}
	}


	return brownCard;
})