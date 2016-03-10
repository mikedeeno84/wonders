app.factory('redCardFactory', function () {
	function redCard(gameCard, width, height, iconSize){
		gameCard.ctx.beginPath();
		gameCard.ctx.rect(0, 0, width, height)
		gameCard.ctx.fillStyle = 'red';
		gameCard.ctx.fill();
		gameCard.ctx.closePath();

		var numArms = gameCard.cardInfo.arms;
		var numVp = gameCard.cardInfo.vp;
		var numIcons = numArms;
		if (numVp) numIcons++;
		var yOffset = Math.floor((height - iconSize)/2)
		var spacer = Math.floor((width - (3 * iconSize))/4);
		var xOffset = spacer + iconSize;
		for(var i=0; i < numIcons; i++){
			if(i === 0 && numVp > 0){
				gameCard.draw('wreath', width - xOffset, yOffset, iconSize, iconSize)
			}
			else{
				gameCard.draw('shield', width - xOffset, yOffset, iconSize, iconSize)
			}
			xOffset += (spacer + iconSize);
		}

	}
	return redCard
})