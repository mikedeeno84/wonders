app.factory('blueCardFactory', function(shapeFactory, drawCost){
	function blueCard(gameCard, width, height, iconSize){
		shapeFactory.drawHalfRound(gameCard, width, height, 0, 0, 6, 'blue')
		var game = gameCard.game;
    var cardInfo = gameCard.cardInfo;
		var numArms = cardInfo.arms;
		var numVp = cardInfo.vp;
		var numIcons = numArms;
		if (numVp) numIcons++;
		var yOffset = Math.floor((height - iconSize)/2)
		var spacer = Math.floor((width - (3 * iconSize))/4);
		var xOffset = spacer + iconSize;
		var vpFontSize = height*3/8;
		var vpText = game.make.text(0,0, numVp, 
			{font: vpFontSize +"px serif", fill:'#1AA1FD'});
		gameCard.draw('Wreath', width/2 - (iconSize/2), yOffset, iconSize, iconSize)
		gameCard.draw(vpText, width/2 - vpText.width/2, yOffset + vpText.height/6)
		if (cardInfo.cost.length) {
			drawCost(gameCard, cardInfo.cost, width, height)
		};
	}
	return blueCard;
})