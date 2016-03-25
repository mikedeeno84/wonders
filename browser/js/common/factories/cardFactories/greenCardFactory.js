app.factory('greenCardFactory', function(shapeFactory, drawCost, drawFactory) {
  function greenCard(gameCard, width, height, iconSize, radius) {
    
    shapeFactory.drawHalfRound(gameCard, width, height, 0, 0, radius, 'green')
    
    var cardInfo = gameCard.cardInfo;
    
    var numVp = cardInfo.vp;
    var numIcons = 1;

    var printLink = false;
    var printVp = false;
    if (cardInfo.vp) {
      numIcons++;
      printVp = true;
    }
    if(cardInfo.link) {
      numIcons++;
      printLink = true;
    }
    var yOffset = Math.floor((height - iconSize) / 2)

    var spacer = Math.floor((width - (numIcons * iconSize)) / (numIcons + 1));
    var xOffset = spacer + iconSize;

    for (var i = 0; i < numIcons; i++) {
      if (printLink) {
        drawFactory.drawIcon(gameCard, gameCard.cardInfo.link, width - xOffset, Math.floor((height - iconSize/1.25) / 2), iconSize/1.25)
        printLink = false;
      } else if(printVp){
        drawFactory.drawVp(gameCard, width, height, iconSize, xOffset);
        printVp = false;
      } else {
        drawFactory.drawIcon(gameCard, cardInfo.symbol, width - xOffset, yOffset, iconSize)
      }
      xOffset += (spacer + iconSize);
    }
  }
  return greenCard;
})