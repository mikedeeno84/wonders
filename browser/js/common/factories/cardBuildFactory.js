app.factory('cardBuilder', function(buildingCardBuilder, drawFactory, shapeFactory) {
  
  return function(game, cardInfo, width, height, radius) {
    var gameCard = game.make.bitmapData(width, height);
    gameCard.cardInfo = cardInfo;

    // draws the basic rectangle that makes up all cards, and print the card names. 
    shapeFactory.drawRounded(gameCard, width, height, 0, 0, radius, '#F1ECD7')
    var nameFontSize = width / 10;
    var name = game.make.text(0, 0, gameCard.cardInfo.name, { fontSize: nameFontSize, fill: 'black' });
    if (name.width > width) name.fontSize *= .70
    gameCard.draw(name, (width - name.width) / 2, gameCard.height - gameCard.height / 6.5);

    // if the given card has a color, it should be run through the building card builder function
    if (cardInfo.color){
      buildingCardBuilder(gameCard, radius);
    }
    else{
      // buildWonder(gameCard, radius);
    }



    return gameCard;
  }
})
