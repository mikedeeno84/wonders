'use strict'
module.exports = [{
    name: "Brewery",
    age: 2,
    color: "Yellow",
    cost: [],
    arms: 0,
    immediate: [{
        Gold: 6
    }],
    link: "Barrel"
}, {
    name: "Forum",
    age: 2,
    color: "Yellow",
    cost: ['Gold', 'Gold', 'Gold', 'Clay'],
    arms: 0,
    effect: {
        cost: [],
        result: [{
            supply: ['Glass', 'Papyrus']
        }]

    }
}, {
    name: "Caravansery",
    age: 2,
    color: "Yellow",
    cost: ['Gold', 'Gold', 'Glass', 'Papyrus'],
    arms: 0,
    effect: {
        cost: [],
        result: [{
            supply: ['Wood', 'Stone', 'Clay']
        }]
    }
}, {
    name: "Custom's House",
    age: 2,
    color: "Yellow",
    cost: ['Gold', 'Gold', 'Gold', 'Gold'],
    arms: 0,
    effect: {
        cost: ['Gold'],
        result: [{
            resource: ['Glass']
        }, {
            resource: ['Papyrus']
        }]
    },
}]
