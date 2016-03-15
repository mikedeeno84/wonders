// app.factory('yellowCardFactory', function(drawCost){
// 	function yellowCard(gameCard, width, height, iconSize){
// 		gameCard.ctx.beginPath();
// 		gameCard.ctx.rect(0, 0, width, height)
// 		gameCard.ctx.fillStyle = 'Yellow';
// 		gameCard.ctx.fill();
// 		gameCard.ctx.closePath();
// 		var game = gameCard.game
// 		var numArms = gameCard.cardInfo.arms;
// 		var numVp = gameCard.cardInfo.vp;
// 		if (numVp){ 
// 			var vpText = game.make.text(0,0, numVp, 
// 				{font: fontSize +"px serif", fill:'#1AA1FD'});
// 			gameCard.draw(vpText, width/2 - iconSize/5, yOffset)
// 		}
// 		var yOffset = Math.floor((height - iconSize)/2)
// 		var spacer = Math.floor((width - (3 * iconSize))/4);
// 		var xOffset = spacer + iconSize;
// 		var fontSize = 20;
// 		var name = game.make.text(0,0, gameCard.cardInfo.name, 
// 			{font: "bold "+ fontSize +"px", fill:'#1AA1FD'});
// 		gameCard.draw(name, (width - name.width)/2, gameCard.height - gameCard.height/8);
// 		gameCard.draw('Wreath', width/2 - (iconSize/2), yOffset, iconSize, iconSize)
// 		if (cardInfo.cost.length) {
// 			drawCost(gameCard, cardInfo.cost, width, height)
// 		};
// 	}
// 	return yellowCard;
// })