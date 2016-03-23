app.factory('blueCardFactory', function(shapeFactory, drawCost, drawFactory){
	function blueCard(gameCard, width, height, iconSize){
		
		var numIcons = 1;
		
		if(gameCard.cardInfo.link){
			numIcons++;
		}
    
    var spacer = Math.floor((width - (numIcons * iconSize)) / (numIcons + 1) );

		shapeFactory.drawHalfRound(gameCard, width, height, 0, 0, 6, 'blue');
    
    var xOffset = spacer + iconSize;
    // var yOffset = Math.floor((height - iconSize) / 2)

		for (var i = 0; i < numIcons; i++) {
			if(i===0){
				drawFactory.drawVp(gameCard, width, height, iconSize, xOffset);
			}
			else{
				drawFactory.drawIcon(gameCard, gameCard.cardInfo.link, width - xOffset, Math.floor((height - iconSize/1.25) / 2), iconSize/1.25);
			}
			xOffset += (spacer + iconSize);
		}


	}
	return blueCard;
})