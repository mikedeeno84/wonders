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
      cost: [],
      arms: 0,
      link: "Mask",
      vp: 3
    }

    var sampleBrown = {
      name: "Lumber Yard",
      age: 1,
      color: "Brown",
      cost: ['Gold'],
      effect: {
        result: {
          quantity: 1,
          resource: "Wood"
        }
      },
      vp: 0,
      arms: 0,
    }
    var radius = 6;
    // example of producing a card
    var rCard = cardBuilder(game, sampleRed, 100, 150, radius);
    game.add.image(game.world.centerX, (game.world.centerY) / 2, rCard)
    var bCard = cardBuilder(game, sampleBlue, 100, 150, radius)
    game.add.image(game.world.centerX + 120, (game.world.centerY) / 2, bCard)
    var brCard = cardBuilder(game, sampleBrown, 100, 150, radius)
    game.add.image(game.world.centerX - 120, (game.world.centerY) / 2, brCard)

  }

})
