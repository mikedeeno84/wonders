app.factory('preload', function() {

  return function() {
    var game = this;
    // game.load.image('table', '/assets/game_bg.png');

    // load resources
    game.load.image('Wreath', '/assets/wreath.png');
    game.load.image('Shield', '/assets/arms.png');
    game.load.image('Wood', '/assets/wood.png');
    game.load.image('Stone', '/assets/stone.png');
    game.load.image('Clay', '/assets/clay.png');
    game.load.image('Papyrus', '/assets/papyrus.png');
    game.load.image('Glass', '/assets/glass.png');

    game.load.image('Gold', '/assets/Gold.png');
    game.load.image('Pyramid', '/assets/Pyramid.png');

    // load symbols
    game.load.image('Gyro', '/assets/symbols/gyro.png');
    game.load.image('Mortar', '/assets/symbols/Mortar.png');
    game.load.image('A', '/assets/symbols/Plumb.png');
    game.load.image('Scales', '/assets/symbols/Scales.png');
    game.load.image('Sundial', '/assets/symbols/Sundial.png');
    game.load.image('Wheel', '/assets/symbols/Wheel.png');
    game.load.image('Quill', '/assets/symbols/Quill.svg');

    // load links
    game.load.image('Barrel', '/assets/links/Barrel.svg');
    game.load.image('Book', '/assets/links/Book.svg');
    game.load.image('Bullseye', '/assets/links/Bullseye.svg');
    game.load.image('Column', '/assets/links/Column.svg');
    game.load.image('Crescent', '/assets/links/Crescent.png');
    game.load.image('Drop', '/assets/links/Drop.png');
    game.load.image('Gear', '/assets/links/Gear.svg');
    game.load.image('Harp', '/assets/links/Harp.png');
    game.load.image('Helmet', '/assets/links/Helmet.svg');
    game.load.image('Lamp', '/assets/links/Lamp.svg');
    game.load.image('Mask', '/assets/links/Mask.png');
    game.load.image('Rook', '/assets/links/Rook.svg');
    game.load.image('Shoe', '/assets/links/Shoe.svg');
    game.load.image('Sun', '/assets/links/Sun.png');
    game.load.image('Sword', '/assets/links/Sword.svg');
    game.load.image('Temple', '/assets/links/Temple.png');
    game.load.image('Vase', '/assets/links/Vase.png');

  }
})