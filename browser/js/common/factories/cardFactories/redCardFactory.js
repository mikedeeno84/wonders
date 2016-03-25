app.factory('redCardFactory', function(shapeFactory, drawCost, drawFactory) {
  function redCard(gameCard, width, height, iconSize, radius) {
    shapeFactory.drawHalfRound(gameCard, width, height, 0, 0, radius, 'red')

    var cardInfo = gameCard.cardInfo;
    var numArms = cardInfo.arms;
    var numVp = cardInfo.vp;
    var numIcons = numArms;
    var printLink = false;
    var printVp = false;
    
    if (numVp) {
      numIcons++;
      printVp = true;
    }

    if(cardInfo.link) {
      numIcons++;
      printLink = true;
    }

    var yOffset = Math.floor((height - iconSize) / 2)

    var spacer = Math.floor((width - (numIcons * iconSize)) / (numIcons + 1) );
    var xOffset = spacer + iconSize;
    for (var i = 0; i < numIcons; i++) {
      if(printLink){
        drawFactory.drawIcon(gameCard, gameCard.cardInfo.link, width - xOffset, Math.floor((height - iconSize/1.25) / 2), iconSize/1.25)
        printLink = false;
      }
      else if (printVp) {
        drawFactory.drawVp(gameCard, width, height, iconSize, xOffset);
        printVp = false;
      }

      else {
        gameCard.draw('Shield', width - xOffset, yOffset, iconSize, iconSize)
      }
      xOffset += (spacer + iconSize);
    }
  }
  return redCard;
})


