'use strict'
module.exports = [{
    name: 'The Appian Way',
    vp: 3,
    gold: 3,
    repeatTurn: true,
    opponent: {
        action: "discard",
        type: "gold",
        quantity: 3
    }
}, {
    name: 'Circus Maximus',
    vp: 3,
    arms: 1,
    opponent: {
        action: "discard",
        type: "grey",
        quantity: 1
    }
}, {
    name: 'The Colussus',
    vp: 3,
    arms: 2
}, {
    name: 'The Great Library',
    vp: 4,
    draw:{
    	from:"tokens",
    	quantity:3,
    	play:1
    }
}, {
    name: 'The Great Lighthouse',
    vp: 4,
    effect:{
    	cost:[],
    	supply:['Wood', 'Stone', 'Clay']
    }
}, {
    name: 'The Haning Gardens',
    vp: 3,
    gold: 6,
    repeatTurn: true
}, {
    name: 'The Mausoleum',
    vp: 2,
    draw:{
    	from: "discard",
    	quantity: "all",
    	play:1
    	}
}, {
    name: 'Piraeus',
    vp: 2,
    repeatTurn:true,
    effect:{
    	cost:[],
    	supply:['Papyrus', 'Glass']
    }

}, {
    name: 'The Pyramids',
    vp: 9
}, {
    name: 'The Sphinx',
    vp: 6,
    repeatTurn:true
}, {
    name: 'The Statue of Zeus',
    vp: 3,
    arms: 1,
        opponent: {
        action: "discard",
        type: "Brown",
        quantity: 1
    }
}, {
    name: 'The Temple of Artemis',
    gold: 12,
    repeatTurn:true
}];