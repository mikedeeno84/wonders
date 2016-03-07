'use strict'
var brownCards = require('./ageII/brown.js');
var greyCards = require('./ageII/gray.js');
var redCards = require('./ageII/red.js');
var yellowCards = require('./ageII/yellow.js');
var greenCards = require('./ageII/green.js');
var blueCards = require('./ageII/blue.js');

module.exports = [].concat(brownCards, greyCards, redCards, yellowCards, greenCards, blueCards);
