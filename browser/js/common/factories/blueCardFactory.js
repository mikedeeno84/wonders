app.factory('blueCardFactory', function(shapeFactory, drawCost, drawFactory){
	function blueCard(gameCard, width, height, iconSize){
		shapeFactory.drawHalfRound(gameCard, width, height, 0, 0, 6, 'blue');
		drawFactory.drawVp(gameCard, width, height, iconSize);
		if (gameCard.cardInfo.cost.length) {
			drawCost(gameCard, gameCard.cardInfo.cost, width, height);
		};
	}
	return blueCard;
})