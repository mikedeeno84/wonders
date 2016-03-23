var router = require('express').Router();
var ageI = require('../../assets/cards/ageI.js');
var ageII = require('../../assets/cards/ageII.js');
var ageIII = require('../../assets/cards/ageIII.js');
var wonders = require('../../assets/cards/wonders');
var guilds = require('../../assets/cards/guilds');
var tokens = require('../../assets/cards/tokens');

router.get('/ageI', function (req, res, next) {

	res.status(200).send(ageI);
})

router.get('/ageII', function (req, res, next) {
	res.status(200).send(ageII);
})

router.get('/ageIII', function (req, res, next) {
	res.status(200).send(ageIII);
})

router.get('/guilds', function (req, res, next) {
	res.status(200).send(guilds);
})

router.get('/wonders', function (req, res, next) {
	res.status(200).send(wonders);
})

router.get('/tokens', function (req, res, next) {
	res.status(200).send(tokens);
})
module.exports = router;