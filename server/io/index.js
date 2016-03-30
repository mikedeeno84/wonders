'use strict';
var socketio = require('socket.io');
var io = null;
var numPlayers = 0;

module.exports = function(server) {
  var gameStarted = false;

  if (io) return io;

  io = socketio(server);

  io.on('connection', function(socket) {
    numPlayers++;
    if (numPlayers === 1) {
      io.emit('join', {
        gameStarted: gameStarted,
        numPlayers: numPlayers
      });
    } else if (numPlayers >= 2) {
      gameStarted = true;
      io.emit('gameStart', {
        gameStarted: true,
        numPlayers: numPlayers, time:Date.now()
      })
    }
    // if (gameStarted) {io.emit('dealRound')}

    // Now have access to socket, wowzers!
    socket.on('dealRound', function() {
      io.emit('dealCards')
    })

    socket.on('disconnect', function() {
      numPlayers--;
    })

  });

  return io;

};
