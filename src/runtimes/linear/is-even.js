function isEvenOrOdd(n) {
  return n % 2 ? 'Odd' : 'Even';
  // return n & 1 ? 'Odd' : 'Even';
}

const assert = require('assert');
assert.equal(isEvenOrOdd(100), 'Even');
assert.equal(isEvenOrOdd(101), 'Odd');
assert.equal(isEvenOrOdd(24), 'Even');
assert.equal(isEvenOrOdd(7), 'Odd');
assert.equal(isEvenOrOdd(1), 'Odd');
