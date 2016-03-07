'use strict'
module.exports = [{
    name: "Tavern",
    age: 1,
    color: "Yellow",
    cost: [],
    arms: 0,
    immediate: [{
        Gold: 4
    }],
    link: "Vase"
}, {
    name: "Stone Reserve",
    age: 1,
    color: "Yellow",
    cost: ['Gold', 'Gold', 'Gold'],
    arms: 0,
    immediate: [{
        Gold: 4
    }],
    effect: {
        cost: ['Gold'],
        result: [{
            quantity: 1,
            resource: "Stone"
        }]
    }
}, {
    name: "Clay Reserve",
    age: 1,
    color: "Yellow",
    cost: ['Gold', 'Gold', 'Gold'],
    arms: 0,
    immediate: [{
        Gold: 4
    }],
    effect: {
        cost: ['Gold'],
        result: [{
            quantity: 1,
            resource: "Clay"
        }]
    }
}, {
    name: "Wood Reserve",
    age: 1,
    color: "Yellow",
    cost: ['Gold', 'Gold', 'Gold'],
    arms: 0,
    immediate: [{
        Gold: 4
    }],
    effect: {
        cost: ['Gold'],
        result: [{
            quantity: 1,
            resource: "Wood"
        }]
    }
}, ]
