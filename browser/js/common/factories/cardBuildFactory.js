app.factory('cardBuilder', function(drawFactory, drawCost, shapeFactory, redCardFactory, blueCardFactory, brownCardFactory, yellowCardFactory, grayCardFactory, greenCardFactory
  //  guildCardFactory){
  ){
  var buildByColor = {
    Red: redCardFactory,
    Blue: blueCardFactory,
    Brown: brownCardFactory,
    Yellow: yellowCardFactory,
    Gray: grayCardFactory,
    Green: greenCardFactory,
    // Guild: guildCardFactory
  }

  return function(game, cardInfo, width, height, radius) {

    var iconSize = width / 4;

    var gameCard = game.make.bitmapData(width, height);
    gameCard.cardInfo = cardInfo;
    var nameFontSize = width / 8;
    
    var bannerHeight = height * .3;

    // draws the basic rectangle that makes up all cards    

    shapeFactory.drawRounded(gameCard, width, height, 0, 0, radius, '#F1ECD7')
    
    var name = game.make.text(0, 0, gameCard.cardInfo.name, { fontSize: nameFontSize, fill: 'black' });
    gameCard.draw(name, (width - name.width)/2, gameCard.height - gameCard.height/8);
      // passes it to color specific card builder function that will 
      // draw the card according to color based specifications
    buildByColor[cardInfo.color](gameCard, width, bannerHeight, iconSize);


    if (cardInfo.cost.length) {
      drawCost(gameCard, cardInfo.cost, width, bannerHeight)
    };

    if (cardInfo.backlink) {
      var miniIconsize = width/8;
      var spacer = miniIconsize/3
      drawFactory.drawIcon(gameCard, cardInfo.backlink, miniIconsize/3, bannerHeight + miniIconsize + spacer*1.5, miniIconsize);
    }
    return gameCard;
  }
})
