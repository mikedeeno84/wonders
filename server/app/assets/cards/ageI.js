'use strict'
var brownCards = require('./ageI/brown.js');
var greyCards = require('./ageI/gray.js');
var redCards = require('./ageI/red.js');
var yellowCards = require('./ageI/yellow.js');
var greenCards = require('./ageI/green.js');
var blueCards = require('./ageI/blue.js');

module.exports = [].concat(brownCards, greyCards, redCards, yellowCards, greenCards, blueCards);
