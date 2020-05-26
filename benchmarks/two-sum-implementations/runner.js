const assert = require('assert');

const twoSum = require('./01-two-sum');

function test() {
  assert.deepEqual(twoSum([1, 2, 3], 4), [0, 2]);
  assert.deepEqual(twoSum([1, 2, 3], 14), []);

  assert.deepEqual(twoSum([2, 2, 2], 4), [0, 1]);
  assert.deepEqual(twoSum(Array(1e7).fill(2), 4), [0, 1]); //
  // assert.deepEqual(twoSum(Array(1e8).fill(2), 4), [0, 1]); // FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
  // assert.deepEqual(twoSum(Array(1e9).fill(2), 4), [0, 1]); // 1e7 - error 137 - OUT OF MEMORY
  console.log('All tests passed!');
}

test();
