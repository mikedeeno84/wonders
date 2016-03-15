app.factory('redCardFactory', function(shapeFactory, drawCost) {
  function redCard(gameCard, width, height, iconSize) {
    shapeFactory.drawHalfRound(gameCard, width, height, 0, 0, 6, 'red')

    var game = gameCard.game;
    var cardInfo = gameCard.cardInfo;
    var numArms = gameCard.cardInfo.arms;
    var numVp = gameCard.cardInfo.vp;
    var numIcons = numArms;
    if (numVp) numIcons++;
    var yOffset = Math.floor((height - iconSize) / 2)
    var spacer = Math.floor((width - (3 * iconSize)) / 4);
    var xOffset = spacer + iconSize;
    var vpFontSize = height * 3 / 8;
    var vpText = game.make.text(0, 0, numVp, { font: vpFontSize + "px serif", fill: '#1AA1FD' });
    for (var i = 0; i < numIcons; i++) {
      if (i === 0 && numVp > 0) {
        gameCard.draw('Wreath', width - xOffset, yOffset, iconSize, iconSize)
        gameCard.draw(vpText, (width - xOffset) + spacer * (4 / 3), yOffset + vpText.height / 6)
      } else {
        gameCard.draw('Shield', width - xOffset, yOffset, iconSize, iconSize)
      }
      xOffset += (spacer + iconSize);
    }
    if (cardInfo.cost.length) {
      drawCost(gameCard, cardInfo.cost, width, height)
    };

  }
  return redCard;
})
