/*eslint-disable */
const assert = require('assert');

const numberToWords = require('./integer-to-words');

assert.equal(numberToWords(0), 'Zero');
assert.equal(numberToWords(1), 'One');
assert.equal(numberToWords(20), 'Twenty');
assert.equal(numberToWords(21), 'Twenty One');
assert.equal(numberToWords(99), 'Ninety Nine');

console.log('All tests passed!');
