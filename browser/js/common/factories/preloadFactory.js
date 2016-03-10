app.factory('preload', function() {

  return function() {
    var game = this;
    // game.load.image('table', '/assets/game_bg.png');
    game.load.image('wreath', '/assets/vp.png');
    game.load.image('shield', '/assets/shield.png');


  }
})
