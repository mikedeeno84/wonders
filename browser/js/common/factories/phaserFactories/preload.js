app.factory('preload', function() {

  return function() {
    var game = this;
    // game.load.image('table', '/assets/game_bg.png');

    // load resources
    game.load.image('Wreath', '/assets/wreath.png');
    game.load.image('Shield', '/assets/arms.png');

    // guild cards
    game.load.image("Builder's Guild", '/assets/guilds/builders.png');
    game.load.image("Moneylender's Guild", '/assets/guilds/moneylenders.png');
    game.load.image("Shipowner's Guild", '/assets/guilds/Shipowners.png');
    game.load.image("Tactician's Guild", '/assets/guilds/Tacticians.png');
    game.load.image("Magistrate's Guild", '/assets/guilds/Magistrates.png');
    game.load.image("Scientist's Guild", '/assets/guilds/Scientists.png');
    game.load.image("Merchant's Guild", '/assets/guilds/Merchants.png');


    game.load.image('Wood', '/assets/resources/wood.png');
    game.load.image('Stone', '/assets/resources/stone.png');
    game.load.image('Clay', '/assets/resources/clay.png');
    game.load.image('Papyrus', '/assets/resources/papyrus.png');
    game.load.image('Glass', '/assets/resources/glass.png');

    // load assorted images for wonder cards or other purposes
    game.load.image('Gold', '/assets/Gold.png');
    game.load.image('Pyramid', '/assets/wonders/Pyramid.png');
    game.load.image('BrokenBrown', '/assets/wonders/BrokenBrown.png');
    game.load.image('BrokenGray', '/assets/wonders/BrokenGray.png');
    game.load.image('Take3', '/assets/wonders/Take3.png');
    game.load.image('GuildArrows', '/assets/GuildArrows.png');
    game.load.image('BrokenGold', '/assets/BrokenGold.png');
    game.load.image('Cycle', '/assets/Cycle.png');

    // load tokens
    game.load.image('Agriculture', '/assets/tokens/Agriculture.png');
    game.load.image('Architecture', '/assets/tokens/Architecture.png');
    game.load.image('Economy', '/assets/tokens/Economy.png');
    game.load.image('Law', '/assets/tokens/Law.png');
    game.load.image('Masonry', '/assets/tokens/Masonry.png');
    game.load.image('Mathematics', '/assets/tokens/Mathematics.png');
    game.load.image('Philosophy', '/assets/tokens/Philosophy.png');
    game.load.image('Strategy', '/assets/tokens/Strategy.png');
    game.load.image('Theology', '/assets/tokens/Theology.png');
    game.load.image('Urbanism', '/assets/tokens/Urbanism.png');

    // load science symbols
    game.load.image('Gyro', '/assets/science/gyro.png');
    game.load.image('Mortar', '/assets/science/Mortar.png');
    game.load.image('A', '/assets/science/Plumb.png');
    game.load.image('Scales', '/assets/science/Scales.png');
    game.load.image('Sundial', '/assets/science/Sundial.png');
    game.load.image('Wheel', '/assets/science/Wheel.png');
    game.load.image('Quill', '/assets/science/Quill.svg');

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