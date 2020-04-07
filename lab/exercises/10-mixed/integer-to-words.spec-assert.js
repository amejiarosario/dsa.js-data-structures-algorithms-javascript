/*eslint-disable */
const assert = require('assert');

const numberToWords = require('./integer-to-words');
const W9 = 'Nine Hundred Ninety Nine';

assert.equal(numberToWords(0), 'Zero');
assert.equal(numberToWords(1), 'One');
assert.equal(numberToWords(20), 'Twenty');
assert.equal(numberToWords(21), 'Twenty One');
assert.equal(numberToWords(99), 'Ninety Nine');
assert.equal(numberToWords(100), 'One Hundred');
assert.equal(numberToWords(101), 'One Hundred One');
assert.equal(numberToWords(110), 'One Hundred Ten');
assert.equal(numberToWords(111), 'One Hundred Eleven');
assert.equal(numberToWords(777), 'Seven Hundred Seventy Seven');
assert.equal(numberToWords(999), W9);
assert.equal(numberToWords(1_000), 'One Thousand');
assert.equal(numberToWords(9999), `Nine Thousand ${W9}`);
assert.equal(numberToWords(1_000_000), 'One Million');
assert.equal(numberToWords(1_234_567), 'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven');
assert.equal(numberToWords(999_999_999), `${W9} Million ${W9} Thousand ${W9}`);
assert.equal(numberToWords(1_234_567_891), `One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One`);
assert.equal(numberToWords(999_999_999_999), `${W9} Billion ${W9} Million ${W9} Thousand ${W9}`);
assert.equal(numberToWords(2**31 - 1), `Two Billion One Hundred Forty Seven Million Four Hundred Eighty Three Thousand Six Hundred Forty Seven`);

console.log('All tests passed!');
