'use strict'
app.factory('create', function(fetchFactory, cardBuilder) {

  var radius = 4;
  var cardWidth = 90;
  var cardHeight = 120;

  var wonderWidth = cardWidth * 2;

  var width = 1080;
  var height = 810;
  var x = 20;
  var y = 20;

  var roundDealt = false;
  var cardsDealt = false;


  return function() {
    var game = this;

    function cardClicked(sprite) {
      console.log(sprite.x, sprite.y)
      var oldDisplayed = game.displayed;
      if (oldDisplayed) {
        // var cardToReplace = cardBuilder(game, oldDisplayed.info, oldDisplayed.width / 2, oldDisplayed.height / 2, radius);
        // var backInPlace = makeCardSprite(oldDisplayed.original[0], oldDisplayed.original[1], cardToReplace);
        // console.log(backInPlace.x, backInPlace.y)
        oldDisplayed.x = oldDisplayed.original[0];
        oldDisplayed.y = oldDisplayed.original[1];
      }
      // sprite.kill();
      var newCard = cardBuilder(game, sprite.info, sprite.width * 2, sprite.height * 2, radius * 2);
      var newSprite = makeCardSprite(width / 2 - newCard.width / 2, height / 2 - newCard.height / 2, newCard);
      game.displayed = newSprite;

    }
    var socket = io(window.location.origin);
    game.socket = socket;

    function makeCardSprite(x, y, card) {
      var sprite = game.add.sprite(x, y, card)
      sprite.info = card.cardInfo;
      sprite.events.onInputDown.add(cardClicked, this);
      sprite.original = [x, y];
      sprite.inputEnabled = true;
      return sprite;
    }

    function dealCards() {
      if (!cardsDealt) {
        cardsDealt = true;
        game.Guilds = [];
        for (var i = 0; i < game.gameInfo.Guilds.length; i++) {
          var card = cardBuilder(game, game.gameInfo.Guilds[i], cardWidth, cardHeight, radius);
          game.Guilds.push(makeCardSprite(x, y, card));
          x += cardWidth + 20;
          if (x >= (width - cardWidth)) {
            x = 20;
            y += (cardHeight + 20);
          }
        }
        game.Wonders = [];
        for (var i = 0; i < game.gameInfo.Wonders.length; i++) {
          var card = cardBuilder(game, game.gameInfo.Wonders[i], wonderWidth, cardHeight, radius);
          game.Wonders.push(makeCardSprite(x, y, card));

          x += wonderWidth + 20;
          if (x >= (width - wonderWidth)) {
            x = 20;
            y += (cardHeight + 20);
          }
        }
      }
    }

    socket.on('gameStart', function(payload) {
      if (payload.gameStarted && !cardsDealt) {
        game.socket.emit('dealRound', function() {})
      }
    })
    socket.on('dealCards', function() {
      if (!roundDealt) dealCards()
      roundDealt = true;
    })
  }
})
