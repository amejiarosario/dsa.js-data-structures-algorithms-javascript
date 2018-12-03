// divide and modulus.


// convert to string -> array -> reverse(). sign would be messed up, but easy to fix
/**
 * @param {number} x
 * @return {number}
 */
const reverse1 = function (x) {
  const sign = x < 0 ? -1 : 1;
  const num = Math.abs(x);
  const reversed = Number(num.toString().split('').reverse().join(''));

  return reversed * sign;
};

const assert = require('assert');

function test(fn) {
  assert.equal(fn(123), 321);
  assert.equal(fn(-123), -321, 'should keep sign');
  assert.equal(fn(120), 21, 'should handle zeros');
  assert.equal(fn(1534236469), 0, 'should not overflow');
}

const MAX = 2**31 - 1;
const MIN = -(2**31);

function reverse(x) {
  let reminder = x;
  let reversed = 0;

  while (reminder !== 0) {
    const digit = reminder % 10;
    reminder = parseInt(reminder / 10, 10);
    reversed = (reversed * 10) + digit;
    if (reversed > MAX || reversed < MIN) { return 0; }
  }
  return reversed;
}

// test(reverse1);
test(reverse);
