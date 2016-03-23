'use strict'
app.config(function($stateProvider) {
  $stateProvider.state('games', {
    url: '/games',
    templateUrl: 'js/games/games.html',
    controller: 'gameController'
  })
})

app.controller('gameController', function($scope, create, update, preload) {
  $scope.game = new Phaser.Game(810, 1080, Phaser.AUTO, 'wonderBoard', {
    preload: preload,
    create: create,
    update: update
  });
})
