app.factory('preload', function() {

  return function() {
    var game = this;
    // game.load.image('table', '/assets/game_bg.png');
    game.load.image('Wreath', '/assets/wreath.png');
    game.load.image('Shield', '/assets/arms.png');
    game.load.image('Wood', '/assets/wood.png');
    game.load.image('Stone', '/assets/stone.png');
    game.load.image('Clay', '/assets/clay.png');
    game.load.image('Papyrus', '/assets/papyrus.png');
    game.load.image('Glass', '/assets/glass.png');
    game.load.image('Gold', '/assets/Gold.png');
  }
})