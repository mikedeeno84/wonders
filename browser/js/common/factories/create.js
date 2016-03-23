'use strict'
app.factory('create', function($http, cardBuilder, fetchFactory) {


  return function() {
    var game = this;

    //     var sampleRed = {
    //       name: "Arsenal",
    //       age: 3,
    //       color: "Red",
    //       cost: ['Clay', 'Clay', 'Clay', 'Wood',
    //         'Wood'
    //       ],
    //       arms: 2,
    //       vp: 2
    // }

    //     var sampleBlue = {
    //       name: "Theater",
    //       age: 1,
    //       color: "Blue",
    //       cost: ['Gold'],
    //       arms: 0,
    //       link: "Mask",
    //       vp: 3
    //     }

    //     var sampleBrown = {
    //       name: "Logging Camp",
    //       age: 1,
    //       color: "Brown",
    //       cost: ['Gold', 'Gold', 'Papyrus', 'Wood'],
    //       effect: {
    //         result: {
    //           quantity: 1,
    //           resource: "Wood"
    //         }
    //       }
    //     }

    //     var sampleYellow = {
    //     name: "Port",
    //     age: 3,
    //     color: "Yellow",
    //     cost: ['Wood', 'Glass', 'Papyrus'],
    //     special: {
    //         Gold: 2,
    //         per: 'Gray'
    //     },
    //     vp: 3
    // }

    // var sampleYellow2 = {
    //   name: "Stone Reserve",
    //   age: 1,
    //   color: "Yellow",
    //   cost: ['Gold', 'Gold', 'Gold'],
    //   arms: 0,
    //   supply: ['Stone', 'Wood']
    // }
    // var sampleGreen = {
    //   name: "Stone Reserve",
    //   age: 1,
    //   color: "Green",
    //   cost: ['Gold', 'Gold', 'Gold'],
    //   arms: 0,
    //   supply: ['Stone', 'Wood']
    // }


    var radius = 4;
    var cardWidth = 90;
    var cardHeight = 120;

    // example of producing a card
    // var rCard = cardBuilder(game, sampleRed, cardWidth, cardHeight, radius);
    // game.add.image(game.world.centerX, (game.world.centerY) / 2, rCard)
    // var bCard = cardBuilder(game, sampleBlue, cardWidth, cardHeight, radius)
    // game.add.image(game.world.centerX + 170, (game.world.centerY) / 2, bCard)
    // var brCard = cardBuilder(game, sampleBrown, cardWidth, cardHeight, radius)
    // game.add.image(game.world.centerX - 170, (game.world.centerY) / 2, brCard)

    // var yCard = cardBuilder(game, sampleYellow, cardWidth, cardHeight, radius);
    // game.add.image(game.world.centerX, game.world.centerY/2 - cardHeight -20, yCard);

    // var yCard2 = cardBuilder(game, sampleYellow2, cardWidth, cardHeight, radius);
    // game.add.image(game.world.centerX - 170, game.world.centerY/2 - cardHeight -20, yCard2);
    var width = 810;
    var height = 1080;
    var x = 60;
    var y = 0;

    var gameCard = game.make.bitmapData(width, height);
    gameCard.draw('Gyro',0,0,25,25)
    game.add.image(0,0,gameCard)
     // var card = cardBuilder(game, sampleGreen, cardWidth, cardHeight, radius);
  //         game.add.image(x, y, card);



    fetchFactory.getAgeII()
      .then(function(AgeII) {
        game.AgeII = AgeII;
        for (var i = 0; i < AgeII.length; i++) {
          var card = cardBuilder(game, game.AgeII[i], cardWidth, cardHeight, radius);
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
