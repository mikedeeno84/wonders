app.factory('yellowCardFactory', function(shapeFactory, drawCost, drawFactory){
	function yellowCard(gameCard, width, height, iconSize){
		shapeFactory.drawHalfRound(gameCard, width, height, 0, 0, 6, 'yellow')
		var game = gameCard.game;
    var cardInfo = gameCard.cardInfo;
		var numVp = cardInfo.vp;
		var numIcons = 0;
		var effects = {};
		if (cardInfo.immediate){
			numIcons++;
			effects.gold = cardInfo.gold;
		}
		if (cardInfo.discount){
			numIcons += cardInfo.discount.length;
			effects.discount = cardInfo.discount;
		}
		if (cardInfo.special){
			numIcons++;
			effects.special = cardInfo.special;
		}
		if (cardInfo.supply){
			numIcons += supply.length;
			effects.supply = cardInfo.supply;
		}
		if (cardInfo.vp){
			numIcons++;
			effects.vp = cardInfo.vp;
		}

		var yOffset = Math.floor((height - iconSize)/2)
		var spacer = Math.floor((width - (3 * iconSize))/4);
		var xOffset = spacer + iconSize;
		
		Object.keys(effects).forEach(function(key){
			if(key === 'gold'){
				// draw gold
				drawFactory.drawGold(gameCard, effects[key], xOffset, yOffset, iconSize)
			}
			else if(key === 'discount'){
				// loop through supply in discount 'discount
				effects[key].forEach(function(resource){
					// print each resource
					drawFactory.drawIcon(gameCard, resource, xOffset, yOffset, iconSize)
					// Still need to print a 1
					xOffset += (spacer + iconSize);
				})


			}	
			else if(key=== 'special'){
				// print special effects
				// still need to get and register the icons for this step
				// pyramid and miniature card with white outline
				// with a gold coin on each
			}
			else if(key === 'supply'){
				// print supplied resources
				effects[key].forEach(function(resource){
					drawFactory.drawIcon(gameCard, resource, xOffset, yOffset, iconSize)
					// print a "/" between resources
					xOffset += (spacer + iconSize);
				})

			}
			else{
				// print vp
				drawFactory.drawVp(gameCard, width, height, iconSize);
				xOffset += (spacer + iconSize);
			
			}


		})

		if (cardInfo.cost.length) {
			drawCost(gameCard, cardInfo.cost, width, height)
		};
	}
	return yellowCard;
})