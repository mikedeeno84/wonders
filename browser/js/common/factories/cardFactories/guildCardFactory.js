app.factory('guildCardFactory', function(shapeFactory, drawFactory){
	function guildCard(gameCard, width, height, iconSize, radius){

    shapeFactory.drawHalfRound(gameCard, width, height, 0, 0, radius, 'purple');
    
    var yOffset = Math.floor((height - iconSize) / 2)

    drawFactory.drawIcon(gameCard, 'GuildArrows', (width - iconSize)/2 - iconSize , yOffset, iconSize)
    drawFactory.drawIcon(gameCard, gameCard.cardInfo.name, (width - iconSize)/2, yOffset, iconSize * 1.25)

	}

	return guildCard;
})