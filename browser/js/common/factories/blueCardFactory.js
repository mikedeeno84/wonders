app.factory('blueCardFactory', function(shapeFactory){
	function blueCard(gameCard, width, height, iconSize){
		shapeFactory.drawHalfRound(gameCard, width, height, 0, 0, 6, 'blue')
		var game = gameCard.game
		var numArms = gameCard.cardInfo.arms;
		var numVp = gameCard.cardInfo.vp;
		var numIcons = numArms;
		if (numVp) numIcons++;
		var yOffset = Math.floor((height - iconSize)/2)
		var spacer = Math.floor((width - (3 * iconSize))/4);
		var xOffset = spacer + iconSize;
		var nameFontSize = 20;
		var vpFontSize = 16;
		var name = game.make.text(0,0, gameCard.cardInfo.name, 
			{font: "bold "+ nameFontSize +"px", fill:'black'});
		var vpText = game.make.text(0,0, numVp, 
			{font: vpFontSize +"px serif", fill:'#1AA1FD'});
		gameCard.draw(name, (width - name.width)/2, gameCard.height - gameCard.height/8);
		gameCard.draw('Wreath', width/2 - (iconSize/2), yOffset, iconSize, iconSize)
		gameCard.draw(vpText, width/2 - vpText.width/2, yOffset + vpText.height/6)
	}
	return blueCard;
})