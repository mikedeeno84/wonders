app.factory('cardBuilder', function(shapeFactory, redCardFactory, blueCardFactory, brownCardFactory
  // ,  grayCardFactory, greenCardFactory, guildCardFactory, yellowCardFactory){
) {
  var buildByColor = {
    Red: redCardFactory,
    Blue: blueCardFactory,
    Brown: brownCardFactory,
    // Yellow: yellowCardFactory,
    // Gray: grayCardFactory,
    // Green: greenCardFactory,
    // Guild: guildCardFactory
  }

  return function(game, cardInfo, width, height, radius) {
    var iconSize = width / 4;

    var gameCard = game.make.bitmapData(width, height);
    gameCard.cardInfo = cardInfo;
    var nameFontSize = width / 5;
    

    // draws the basic rectangle that makes up all cards    

    shapeFactory.drawRounded(gameCard, width, height, 0, 0, radius, 'white')
    
    var name = game.make.text(0, 0, gameCard.cardInfo.name, { font: "bold " + nameFontSize + "px", fill: 'black' });
    gameCard.draw(name, (width - name.width)/2, gameCard.height - gameCard.height/8);
      // passes it to color specific card builder function that will 
      // draw the card according to color based specifications
    buildByColor[cardInfo.color](gameCard, width, height * .3, iconSize);
    return gameCard;
  }
})
