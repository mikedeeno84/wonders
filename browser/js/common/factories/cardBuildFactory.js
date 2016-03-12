app.factory('cardBuilder', function(redCardFactory, blueCardFactory) {
  var buildByColor = {
    Red: redCardFactory,
    Blue: blueCardFactory
  }

  return function(game, cardInfo, width, height) {
    var iconSize = 25;
    var gameCard = game.make.bitmapData(width, height);
    console.log(cardInfo)
    // draws the basic rectangle that makes up all cards
    gameCard.cardInfo = cardInfo;
    gameCard.ctx.beginPath();
    gameCard.ctx.rect(0, 0, width, height)
    gameCard.ctx.fillStyle = 'white'
    gameCard.ctx.fill()
    gameCard.ctx.lineWidth = 1;
    gameCard.ctx.stroke();
    gameCard.ctx.closePath();

    // passes it to color specific card builder function that will 
    // draw the card according to color based specifications
    buildByColor[cardInfo.color](gameCard, width, height * .3, iconSize);
    return gameCard;
  }
})
