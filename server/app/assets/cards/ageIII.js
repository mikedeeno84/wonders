'use strict'
var redCards = require('./ageIII/red.js');
var yellowCards = require('./ageIII/yellow.js');
var greenCards = require('./ageIII/green.js');
var blueCards = require('./ageIII/blue.js');
var guildCards = require('./ageIII/guilds.js');

module.exports = [].concat(redCards, yellowCards, greenCards, blueCards, guildCards);
