app.factory('drawCost', function (shapeFactory, drawFactory) {
	
	function drawCost(gameCard, cost, width, height){
		var miniIconSize = width/8;
		var spacer = miniIconSize/3;
		var costMap=_.countBy(cost, function(n){return n});
		var numIcons = cost.length;

		var extraIcons = costMap["Gold"] > 1 ? costMap['Gold'] - (costMap['Gold']- 1) : 0;
		numIcons -= extraIcons;
		var xOffset = Math.floor(width/20)
		var yOffset = height + miniIconSize/4
		var spacer = xOffset/2;
		var costBarWidth = xOffset + numIcons*(miniIconSize+ spacer)
		shapeFactory.drawRectangle(gameCard, costBarWidth, miniIconSize/2, 0, height + miniIconSize/2, 'gray')
		for (var i = Object.keys(costMap).length - 1; i >= 0; i--) {
			var resource = Object.keys(costMap)[i];
			if (resource === 'Gold'){
				// Draw Gold with number
				drawFactory.drawGold(gameCard, costMap['Gold'], xOffset, yOffset, miniIconSize)
				xOffset += spacer + miniIconSize;
			}
			else{
				for (var j = 0; j < costMap[resource]; j++){
					drawFactory.drawIcon(gameCard, resource, xOffset, yOffset, miniIconSize, miniIconSize);
					xOffset += spacer + miniIconSize;
				}
			}
		}
	}

	return drawCost;
})