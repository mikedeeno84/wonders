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

    // example of producing a card
    var aCard = cardBuilder(game, sampleRed, 100, 150);
    game.add.image(game.world.centerX, (game.world.centerY) / 2, aCard)

  }

})
