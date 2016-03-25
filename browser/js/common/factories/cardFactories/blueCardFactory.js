app.factory('blueCardFactory', function(shapeFactory, drawFactory) {
  function blueCard(gameCard, width, height, iconSize, radius) {
		console.log(gameCard.cardInfo.name)

    var numIcons = 1;
    var printLink = false;

    if (gameCard.cardInfo.link) {
      numIcons++;
      printLink = true;
    }


    var spacer = Math.floor((width - (numIcons * iconSize)) / (numIcons + 1));

    shapeFactory.drawHalfRound(gameCard, width, height, 0, 0, radius, 'blue');

    var xOffset = spacer + iconSize;
    // var yOffset = Math.floor((height - iconSize) / 2)

    for (var i = 0; i < numIcons; i++) {
      if (printLink) {
        drawFactory.drawIcon(gameCard, gameCard.cardInfo.link, width - xOffset, Math.floor((height - iconSize / 1.25) / 2), iconSize / 1.25);
        printLink = false;
      } else {
        drawFactory.drawVp(gameCard, width, height, iconSize, xOffset);
      }
      xOffset += (spacer + iconSize);
    }

  }
  return blueCard;
})