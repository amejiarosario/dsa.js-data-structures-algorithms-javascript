/* eslint-disable */

/**
 * binary search O(log n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target, start =  0) {
  if (!nums.length) return start;
  const i = parseInt(nums.length / 2, 10);

  if (nums[i] === target) {
    return start + i;
  } else if (target > nums[i]) {
    const newArray = nums.slice(i + 1);
    if (!newArray.length) return start + i + 1;
    return searchInsert(newArray, target, start + i + 1);
  } else {
    return searchInsert(nums.slice(0, i), target, start);
  }
};

// ---

const assert = require('assert');
function test() {
  assert.equal(searchInsert([], 0), 0);
  assert.equal(searchInsert([], 1), 0);

  assert.equal(searchInsert([1], 0), 0);
  assert.equal(searchInsert([1], 2), 1);

  assert.equal(searchInsert([1,3,5,6], 5), 2);
  assert.equal(searchInsert([1,3,5,6], 2), 1);
  assert.equal(searchInsert([1,3,5,6], 7), 4);
  assert.equal(searchInsert([1,3,5,6], 0), 0);

  assert.equal(searchInsert([1,3,5], 5), 2);

}
test();
