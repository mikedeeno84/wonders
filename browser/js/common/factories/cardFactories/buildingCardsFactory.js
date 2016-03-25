app.factory('buildingCardBuilder', function(drawFactory, redCardFactory, blueCardFactory, brownCardFactory, yellowCardFactory, grayCardFactory, greenCardFactory, drawCost,
   guildCardFactory){
  var buildByColor = {
    Red: redCardFactory,
    Blue: blueCardFactory,
    Brown: brownCardFactory,
    Yellow: yellowCardFactory,
    Gray: grayCardFactory,
    Green: greenCardFactory,
    Purple: guildCardFactory
  }

  function buildingCardBuilder(gameCard, radius) {
    var cardInfo = gameCard.cardInfo;
    var width = gameCard.width;

    var iconSize = width / 4;

    var bannerHeight = gameCard.height * .3;

    // passes it to color specific card builder function that will 
    // draw the card according to color based specifications
    buildByColor[cardInfo.color](gameCard, width, bannerHeight, iconSize, radius);


    if (cardInfo.cost.length) {
      drawCost(gameCard, cardInfo.cost, width, bannerHeight)
    };

    if (cardInfo.backlink) {
      var miniIconsize = width / 8;
      var spacer = miniIconsize / 3
      drawFactory.drawIcon(gameCard, cardInfo.backlink, miniIconsize / 3, bannerHeight + miniIconsize + spacer * 1.5, miniIconsize);
    }

  }
  return buildingCardBuilder;
})
