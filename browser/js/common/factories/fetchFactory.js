'use strict'
app.factory('fetchFactory', function($http) {

  var fetchFactory = {};

  fetchFactory.getWonders = function() {
    return $http.get('/api/cards/wonders')
      .then(res => res.data);
  }

  fetchFactory.getAgeI = function() {
    return $http.get('/api/cards/ageI')
      .then(res => res.data);
  }

  fetchFactory.getAgeII = function() {
    return $http.get('/api/cards/ageII')
      .then(res => res.data);
  }

  fetchFactory.getAgeIII = function() {
    return $http.get('/api/cards/ageIII')
      .then(res => res.data);
  }

  fetchFactory.getGuilds = function() {
    return $http.get('/api/cards/guilds')
      .then(res => res.data);
  }

  fetchFactory.getTokens = function() {
    return $http.get('/api/cards/tokens')
      .then(res => res.data);
  }

  return fetchFactory;
})
