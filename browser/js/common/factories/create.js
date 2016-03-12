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

    // example of producing a card
    var rCard = cardBuilder(game, sampleRed, 100, 150);
    game.add.image(game.world.centerX, (game.world.centerY) / 2, rCard)
    var bCard = cardBuilder(game, sampleBlue, 100, 150)
    game.add.image(game.world.centerX + 120, (game.world.centerY) / 2, bCard)
  }

})
