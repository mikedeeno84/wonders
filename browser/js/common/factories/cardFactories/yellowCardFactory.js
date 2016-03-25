app.factory('yellowCardFactory', function(shapeFactory, drawCost, drawFactory) {
  function yellowCard(gameCard, width, height, iconSize, radius) {
    shapeFactory.drawHalfRound(gameCard, width, height, 0, 0, radius, '#ffd800')

    var cardInfo = gameCard.cardInfo;
    var numVp = cardInfo.vp;
    var numIcons = 0;
    var effects = {};
    if (cardInfo.link) {
      numIcons++;
      effects.link = cardInfo.link;
    }
    if (cardInfo.gold) {
      numIcons++;
      effects.gold = cardInfo.gold;
    }
    if (cardInfo.discount) {
      numIcons += cardInfo.discount.length;
      effects.discount = cardInfo.discount;
    }
    if (cardInfo.special) {
      numIcons++;
      effects.special = cardInfo.special;
    }
    if (cardInfo.supply) {
      numIcons += cardInfo.supply.length;
      effects.supply = cardInfo.supply;
    }
    if (numVp) {
      numIcons++;
      effects.vp = numVp;
    }

    var yOffset = Math.floor((height - iconSize) / 2)
    var spacer = (width - (numIcons * iconSize)) / (numIcons + 1)
    var xOffset = iconSize + spacer;

    Object.keys(effects).forEach(function(key) {
      if (key === 'link') {
        drawFactory.drawIcon(gameCard, gameCard.cardInfo.link, width - xOffset, Math.floor((height - iconSize / 2) / 2), iconSize / 1.25)
        xOffset += (spacer + iconSize);
      } else if (key === 'gold') {
        // draw gold
        drawFactory.drawGold(gameCard, effects[key], width - xOffset, yOffset, iconSize)

        xOffset += (spacer + iconSize);

      } else if (key === 'discount') {
        // loop through supply in discount 'discount
        effects[key].forEach(function(resource) {
          // print each resource
          var miniIconSize = width / 8;
          drawFactory.drawIcon(gameCard, resource, width - xOffset, yOffset, iconSize)
          drawFactory.drawGold(gameCard, 1, width - (xOffset + (miniIconSize / 2)), yOffset - miniIconSize / 4, miniIconSize)


          // Still need to print a 1
          xOffset += (spacer + iconSize);

        })


      } else if (key === 'special') {
        // print special effects
        // still need to get and register the icons for this step
        // pyramid and miniature card with white outline
        // with a gold coin on each
        drawFactory.drawSpecial(gameCard, width - xOffset, yOffset, iconSize, effects[key].per)
        xOffset += (spacer + iconSize);
      } else if (key === 'supply') {
        // print supplied resources
        var slash = gameCard.game.make.text(0, 0, '/', { fontSize: iconSize / 2, fill: 'gray' })
        effects[key].forEach(function(resource, index) {
          drawFactory.drawIcon(gameCard, resource, width - xOffset, yOffset, iconSize)
            // print a "/" between resources
          if (effects[key][index + 1]) {
            gameCard.draw(slash, width - xOffset - spacer, yOffset + (height - slash.height) / 4);
          }
          xOffset += (spacer + iconSize);

        })

      } else {
        // print vp
        drawFactory.drawVp(gameCard, width, height, iconSize, xOffset);
        xOffset += (spacer + iconSize);

      }

    })
  }
  return yellowCard;
})