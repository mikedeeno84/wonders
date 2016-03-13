app.factory('redCardFactory', function (shapeFactory) {
	function redCard(gameCard, width, height, iconSize){
		shapeFactory.drawHalfRound(gameCard, width, height, 0, 0, 6, 'red')
		
		var game = gameCard.game;
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
		for(var i=0; i < numIcons; i++){
			if(i === 0 && numVp > 0){
				gameCard.draw('Wreath', width - xOffset, yOffset, iconSize, iconSize)
				gameCard.draw(vpText, (width - xOffset) + spacer*(4/3), yOffset)
				// gameCard.ctx.font = nameFontSize+"px serif";
				// gameCard.ctx.fillStyle = "#1AA1FD"
				// gameCard.ctx.fillText(numVp+"", (width - xOffset) + spacer*(4/3), 27)
			}
			else{
				gameCard.draw('Shield', width - xOffset, yOffset, iconSize, iconSize)
			}
			xOffset += (spacer + iconSize);
		}


	}
	return redCard;
})