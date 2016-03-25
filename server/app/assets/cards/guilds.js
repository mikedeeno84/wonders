'use strict'
module.exports = [{
    name: "Merchant's Guild",
    age: 3,
    color: "Purple",
    cost: ['Clay', 'Wood', 'Glass', 'Papyrus'],
    immediate: [{
        Gold: 1,
        per: 'Yellow'
    }],
    endGame: [{
        vp: 1,
        per: 'Yellow',
        if: 'Greater'
    }]
}, {
    name: "Shipowner's Guild",
    age: 3,
    color: "Purple",
    cost: ['Clay', 'Stone', 'Glass', 'Papyrus'],
    immediate: [{
        Gold: 1,
        per: 'Brown'
    }, {
        Gold: 1,
        per: 'Gray'
    }],
    endGame: [{
        vp: 1,
        per: 'Brown',
        if: 'Greater'
    }, {
        vp: 1,
        per: 'Gray',
        if: 'Greater'
    }]
}, {
    name: "Builder's Guild",
    age: 3,
    color: "Purple",
    cost: ['Stone', 'Stone', 'Clay', 'Wood', 'Glass'],
    endGame: [{
        vp: 2,
        per: 'Wonder',
        if: 'Greater'
    }]
}, {
    name: "Magistrate's Guild",
    age: 3,
    color: "Purple",
    cost: ['Wood', 'Wood', 'Clay', 'Papyrus'],
    immediate: [{
        Gold: 1,
        per: 'Blue'
    }],
    endGame: [{
        vp: 1,
        per: 'Blue',
        if: 'Greater'
    }]
}, {
    name: "Scientist's Guild",
    age: 3,
    color: "Purple",
    cost: ['Clay', 'Clay', 'Wood', 'Wood'],
    immediate: [{
        Gold: 1,
        per: 'Green'
    }],
    endGame: [{
        vp: 1,
        per: 'Green',
        if: 'Greater'
    }]
}, {
    name: "Moneylender's Guild",
    age: 3,
    color: "Purple",
    cost: ['Stone', 'Stone', 'Wood', 'Wood'],
    immediate: [{
        Gold: 1,
        per: 'Brown'
    }, {
        Gold: 1,
        per: 'Gray'
    }],
    endGame: [{
        vp: 1 / 3,
        per: 'Gold',
        if: 'Greater'
    }]
}, {
    name: "Tactician's Guild",
    age: 3,
    color: "Purple",
    cost: ['Stone', 'Stone', 'Clay', 'Papyrus'],
    immediate: [{
        Gold: 1,
        per: 'Red'
    }],
    endGame: [{
        vp: 1,
        per: 'Red',
        if: 'Greater'
    }]
}]
