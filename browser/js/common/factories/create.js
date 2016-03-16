'use strict'
app.factory('create', function($http, cardBuilder) {


  return function() {
    var game = this;

    var sampleRed = {
      name: "Arsenal",
      age: 3,
      color: "Red",
      cost: ['Clay', 'Clay', 'Clay', 'Wood',
        'Wood'
      ],
      arms: 2,
      vp: 2
    }

    var sampleBlue = {
      name: "Theater",
      age: 1,
      color: "Blue",
      cost: ['Gold'],
      arms: 0,
      link: "Mask",
      vp: 3
    }

    var sampleBrown = {
    name: "Logging Camp",
    age: 1,
    color: "Brown",
    cost: ['Gold','Gold','Papyrus', 'Wood'],
    effect: {
        result: {
            quantity: 1,
            resource: "Wood"
        }
    }
}
    var radius = 6;
    var cardWidth = 145;
    var cardHeight = 200;

    // example of producing a card
    var rCard = cardBuilder(game, sampleRed, cardWidth, cardHeight, radius);
    game.add.image(game.world.centerX, (game.world.centerY) / 2, rCard)
    var bCard = cardBuilder(game, sampleBlue, cardWidth, cardHeight, radius)
    game.add.image(game.world.centerX + 170, (game.world.centerY) / 2, bCard)
    var brCard = cardBuilder(game, sampleBrown, cardWidth, cardHeight, radius)
    game.add.image(game.world.centerX - 170, (game.world.centerY) / 2, brCard)

  }

})
