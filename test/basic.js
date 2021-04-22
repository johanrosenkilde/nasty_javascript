const tap = require('tap');
const clamp = require('..').clamp;
const thumbsUp = require('..').thumbsUp;
const addThree = require('..').addThree;
const mystery = require('..').mystery;

tap.equal(clamp(5, 0, 10), 5);
tap.equal(clamp(0, 5, 10), 5);
tap.equal(addThree(5), 8);
tap.equal(addThree(-2), 1);
tap.equal(mystery(5), "a");
tap.equal(mystery(-2), "a");
