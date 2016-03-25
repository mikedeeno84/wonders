'use strict';
var socketio = require('socket.io');
var io = null;

module.exports = function (server) {
		var numPlayers = 0;
    if (io) return io;

    io = socketio(server);

    io.on('connection', function () {
    	numPlayers++;
    	if(numPlayers>0){
    		io.emit('join', {hi:'hi'});
    	}
    	console.log('socket')

        // Now have access to socket, wowzers!
    });
    
    return io;

};
