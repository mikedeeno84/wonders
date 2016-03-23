app.factory('grayCardFactory', function(shapeFactory, drawFactory) {
  function grayCard(gameCard, width, height, iconSize) {
    shapeFactory.drawHalfRound(gameCard, width, height, 0, 0, 6, 'gray');

    var slash = gameCard.game.make.text(0, 0, '/', { fontSize: iconSize / 2, fill: 'gray' })

    var numIcons = gameCard.cardInfo.supply.length;
    var yOffset = Math.floor((height - iconSize) / 2);
    var spacer = (width - (numIcons * iconSize)) / (numIcons + 1);
    var xOffset = iconSize + spacer;


    gameCard.cardInfo.supply.forEach(function(resource, index) {
      drawFactory.drawIcon(gameCard, resource, width - xOffset, yOffset, iconSize)
      if (gameCard.cardInfo.supply[index + 1]) {
        gameCard.draw(slash, width - xOffset - spacer, yOffset + (height - slash.height) / 4);
      }
      xOffset += (spacer + iconSize);

    })

  }

  return grayCard;
})
