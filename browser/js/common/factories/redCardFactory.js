app.factory('redCardFactory', function () {
	function redCard(gameCard, width, height, iconSize){
		gameCard.ctx.beginPath();
		gameCard.ctx.rect(0, 0, width, height)
		gameCard.ctx.fillStyle = 'red';
		gameCard.ctx.fill();
		gameCard.ctx.closePath();
		var game = gameCard.game;
		var numArms = gameCard.cardInfo.arms;
		var numVp = gameCard.cardInfo.vp;
		var numIcons = numArms;
		if (numVp) numIcons++;
		var yOffset = Math.floor((height - iconSize)/2)
		var spacer = Math.floor((width - (3 * iconSize))/4);
		var xOffset = spacer + iconSize;
		var fontSize = 20;
		var name = game.make.text(0,0, gameCard.cardInfo.name, 
			{font: "bold "+ fontSize +"px", fill:'1AA1FD'});
		var vpText = game.make.text(0,0, numVp, 
			{font: fontSize +"px serif", fill:'1AA1FD'});
		gameCard.draw(name, 5, height + 5);
		for(var i=0; i < numIcons; i++){
			if(i === 0 && numVp > 0){
				gameCard.draw('wreath', width - xOffset, yOffset, iconSize, iconSize)
				gameCard.draw(vpText, (width - xOffset) + spacer*(4/3), yOffset)
				// gameCard.ctx.font = fontSize+"px serif";
				// gameCard.ctx.fillStyle = "#1AA1FD"
				// gameCard.ctx.fillText(numVp+"", (width - xOffset) + spacer*(4/3), 27)
			}
			else{
				gameCard.draw('shield', width - xOffset, yOffset, iconSize, iconSize)
			}
			xOffset += (spacer + iconSize);
		}


	}
	return redCard;
})