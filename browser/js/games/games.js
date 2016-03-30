'use strict'
app.config(function($stateProvider) {
  $stateProvider.state('games', {
    url: '/games',
    templateUrl: 'js/games/games.html',
    controller: 'gameController',
    resolve:{
      Guilds: function(fetchFactory){
        return fetchFactory.getGuilds()
      },
      Wonders: function(fetchFactory){
        return fetchFactory.getWonders()
      },
      AgeI:function(fetchFactory){
        return fetchFactory.getAgeI()
      },
      AgeII:function(fetchFactory) {
        return fetchFactory.getAgeII()
      },
      AgeIII:function(fetchFactory) {
        return fetchFactory.getAgeIII()
      },
      Tokens:function(fetchFactory) {
        return fetchFactory.getTokens()
      }
    }
  })
})

app.controller('gameController', function($scope, create, update, preload, Guilds, AgeI, AgeII, AgeIII, Wonders, Tokens) {
  var gameInfo ={
    Guilds: Guilds,
    Wonders: Wonders,
    AgeI: AgeI,
    AgeII: AgeII,
    AgeIII: AgeIII,
    Tokens: Tokens
  }
  $scope.game = new Phaser.Game(1080, 810, Phaser.AUTO, 'wonderBoard', {
    preload: preload,
    create: create,
    update: update,
    gameInfo: gameInfo
  });
})