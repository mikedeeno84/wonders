'use strict'
app.factory('create', function($http, cardBuilder, fetchFactory) {


  return function() {
    var game = this;
    var radius = 4;
    var cardWidth = 90;
    var cardHeight = 120;

    var width = 1080;
    var height = 810;
    var x = 20;
    var y = 20;

    fetchFactory.getGuilds()
      .then(function(Guilds) {
        game.Guilds = Guilds;
        for (var i = 0; i < Guilds.length; i++) {
          var card = cardBuilder(game, game.Guilds[i], cardWidth, cardHeight, radius);
          game.add.image(x, y, card);
          x += cardWidth + 20;
          if (x >= (width - cardWidth)) {
            x = 20;
            y += (cardHeight + 20);
          }
        }
        return fetchFactory.getWonders();
      }).then(function(Wonders) {
        game.Wonders = Wonders;
        cardWidth = cardWidth * 2;
        console.log(Wonders)
        for (var i = 0; i < game.Wonders.length; i++) {
          var card = cardBuilder(game, game.Wonders[i], cardWidth, cardHeight, radius);
          game.add.image(x, y, card);
          x += cardWidth + 20;
          if (x >= (width - cardWidth)) {
            x = 20;
            y += (cardHeight + 20);
          }
        }
      })
  }

})
