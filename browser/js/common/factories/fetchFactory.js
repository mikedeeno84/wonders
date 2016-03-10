app.factory('fetchFactory', function($http) {

  var fetchFactory = {};

  fetchFactory.getWonderCards = function() {
    return $http.get('/api/cards/wonders')
      .then(res => res.data);
  }

  fetchFactory.getAgeICards = function() {
    return $http.get('/api/cards/ageI')
      .then(res => res.data);
  }

  fetchFactory.getAgeIICards = function() {
    return $http.get('/api/cards/ageII')
      .then(res => res.data);
  }

  fetchFactory.getAgeIIICards = function() {
    return $http.get('/api/cards/ageIII')
      .then(res => res.data);
  }

  fetchFactory.getGuildCards = function() {
    return $http.get('/api/cards/guild')
      .then(res => res.data);
  }

  return fetchFactory;
})
