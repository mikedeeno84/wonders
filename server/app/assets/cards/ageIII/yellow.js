'use strict'
module.exports = [{
    name: "Chamber of Commerce",
    age: 3,
    color: "Yellow",
    cost: ['Papyrus', 'Papyrus'],
    immediate: [{
        Gold: 3,
        per: 'Gray'
    }],
    vp: 3
}, {
    name: "Port",
    age: 3,
    color: "Yellow",
    cost: ['Wood', 'Glass', 'Papyrus'],
    immediate: [{
        Gold: 2,
        per: 'Gray'
    }],
    vp: 3
}, {
    name: "Armory",
    age: 3,
    color: "Yellow",
    cost: ['Stone', 'Stone', 'Glass'],
    immediate: [{
        Gold: 1,
        per: 'Red'
    }],
    vp: 3
}, {
    name: "Lighthouse",
    age: 3,
    color: "Yellow",
    cost: ['Clay', 'Clay', 'Glass'],
    immediate: [{
        Gold: 1,
        per: 'Yellow'
    }],
    vp: 3,
    backlink: 'Vase'
}, {
    name: "Arena",
    age: 3,
    color: "Yellow",
    cost: ['Clay', 'Stone', 'Wood'],
    immediate: [{
        Gold: 2,
        per: 'Wonder'
    }],
    vp: 3,
    backlink: 'Barrel'
}]
