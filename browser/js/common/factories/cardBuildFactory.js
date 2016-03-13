app.factory('cardBuilder', function(shapeFactory, redCardFactory, blueCardFactory, yellowCardFactory, brownCardFactory
    // ,  grayCardFactory, greenCardFactory, guildCardFactory){
    ) {
  var buildByColor = {
    Red: redCardFactory,
    Blue: blueCardFactory,
    Brown: brownCardFactory,
    Yellow: yellowCardFactory,
    // Gray: grayCardFactory,
    // Green: greenCardFactory,
    // Guild: guildCardFactory
  }

  return function(game, cardInfo, width, height, radius) {
    var iconSize = 25;
    var gameCard = game.make.bitmapData(width, height);
    gameCard.cardInfo = cardInfo;
    // draws the basic rectangle that makes up all cards
    shapeFactory.drawRounded(gameCard, width, height, 0, 0,  radius, 'white')
    // passes it to color specific card builder function that will 
    // draw the card according to color based specifications
    buildByColor[cardInfo.color](gameCard, width, height * .3, iconSize);
    return gameCard;
  }
})
