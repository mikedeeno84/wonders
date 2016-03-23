app.factory('greenCardFactory', function(shapeFactory, drawCost, drawFactory) {
  function greenCard(gameCard, width, height, iconSize) {
    
    shapeFactory.drawHalfRound(gameCard, width, height, 0, 0, 6, 'green')
    
    var cardInfo = gameCard.cardInfo;
    
    var numVp = cardInfo.vp;
    var numIcons = 1;

    var printLink = false;
    
    if (cardInfo.vp) numIcons++;

    if(cardInfo.link) {
      numIcons++;
      printLink = true;
    }
    var yOffset = Math.floor((height - iconSize) / 2)

    var spacer = Math.floor((width - (numIcons * iconSize)) / (numIcons + 1));
    var xOffset = spacer + iconSize;

    for (var i = 0; i < numIcons; i++) {
      if (i === 0 && numVp) {
        drawFactory.drawVp(gameCard, width, height, iconSize, xOffset);
      } else if(printLink){
        drawFactory.drawIcon(gameCard, gameCard.cardInfo.link, width - xOffset, Math.floor((height - iconSize/1.25) / 2), iconSize/1.25)
        printLink = false;
      } else {
        drawFactory.drawIcon(gameCard, cardInfo.symbol, width - xOffset, yOffset, iconSize)
      }
      xOffset += (spacer + iconSize);
    }
  }
  return greenCard;
})