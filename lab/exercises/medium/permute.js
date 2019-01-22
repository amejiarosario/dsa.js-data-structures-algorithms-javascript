/* eslint-disable */

/**
 * https://www.youtube.com/watch?v=AfxHGNRtFac
 * https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
 * https://leetcode.com/articles/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  var result = [];
  backtrack(nums, result);
  return result;
};

function backtrack(nums, result, first = 0) {
  // console.log(Array(first).fill("    ").join(""), JSON.stringify({nums, first}));
  if (first === nums.length - 1) {
    // console.log(nums);
    result.push(nums.slice());
  } else {
    for (let i = first; i < nums.length; i++) {
      swap(nums, first, i);
      backtrack(nums, result, first + 1);
      swap(nums, first, i);
    }
  }
};

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]]
}

// ---

const assert = require('assert');

function test() {
  // assert.deepEqual(permute([1]), [
  //   [1]
  // ]);
  // assert.deepEqual(permute([1, 2]), [
  //   [1, 2],
  //   [2, 1]
  // ]);
  assert.deepEqual(permute([1, 2, 3]), [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 2, 1],
    [3, 1, 2]
  ]);
}
test();
