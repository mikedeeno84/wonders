app.factory('greenCardFactory', function(shapeFactory, drawCost, drawFactory) {
  function greenCard(gameCard, width, height, iconSize) {
    shapeFactory.drawHalfRound(gameCard, width, height, 0, 0, 6, 'green')
    var game = gameCard.game;
    var cardInfo = gameCard.cardInfo;
    var numVp = cardInfo.vp;
    var numIcons = 1;
    if (cardInfo.vp) numIcons++;

    var yOffset = Math.floor((height - iconSize) / 2)

    var spacer = Math.floor((width - (numIcons * iconSize)) / (numIcons + 1));
    var xOffset = spacer + iconSize;

    for (var i = 0; i < numIcons; i++) {
      if (i === 0 && numVp > 0) {
        drawFactory.drawVp(gameCard, width, height, iconSize, xOffset);
      } else {
        drawFactory.drawIcon(gameCard, cardInfo.symbol, width - xOffset, yOffset,iconSize)
      }
      xOffset += (spacer + iconSize);
    }
  }
  return greenCard;
})