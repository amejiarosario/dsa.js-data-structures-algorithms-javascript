/* eslint-disable */

/**
 * Runtime O(10^n)
 * https://leetcode.com/problems/next-permutation/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation2 = function(nums) {
  const current = parseInt(nums.join(''), 10);
  const max = Math.pow(10, nums.length);

  for(let next = current + 1; next < max; next++) {
    if(isPermutation(nums, next)) {
      setNumbersInArray(nums, next);
      return;
    }
  }
};

function isPermutation(array, number) {
  return array.sort().join('') === numberToArray(number, array.length).sort().join('');
}

function numberToArray(num, pad = 0) {
  return num.toString().padStart(pad, "0").split('').map(s => +s)
}

function setNumbersInArray(to, number) {
  const from = numberToArray(number, to.length);

  for(let i = 0; i < to.length; i++) {
    to[i] = from[i];
  }
}


/*
  // swap last with previous and check if is bigger
  // if not, swap last with previous - 1 recursively and check if bigger
  // sort in asc order the rest and check if bigger

123
132
213
231
312
321
---
123
*/

// generate all numbers - discard no matching: O(10^n)
//


// starting from last find a bigger number than current


function nextPermutation(nums) {

  // try to find next
  for(let i = nums.length - 2; i >= 0; i--) {
    let smallestBigger;

    for(let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        smallestBigger = Math.min(nums[j], smallestBigger || nums[j]);
      }
    }

    if (smallestBigger) {
      const k = nums.lastIndexOf(smallestBigger);
      [nums[i], nums[k]] = [nums[k], nums[i]]; // swap
      // sort asc starting from i
      sort(nums, i + 1);
      return;
    }
  }

  sort(nums);
}

/**
 * Sort in-place from start on
 * @param {*} array
 * @param {*} start
 */
function sort(array, start = 0) {
  for(let i = start; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
}

// -----
const assert = require('assert');
function test() {
  let a;

  a = [100, 4,3,2];
  sort(a, 1);
  assert.deepEqual(a, [100, 2, 3, 4]);

  a = [1, 2, 3];
  nextPermutation(a);
  assert.deepStrictEqual(a, [1, 3, 2]);

  a = [2, 3, 1];
  nextPermutation(a);
  assert.deepStrictEqual(a, [3, 1, 2]);

  a = [3, 2, 1];
  nextPermutation(a);
  assert.deepEqual(a, [1, 2, 3]);

  a = [0,0,4,2,1,0];
  nextPermutation(a);
  assert.deepStrictEqual(a, [0,1,0,0,2,4]);

  // Time Limit Exceeded on leetcode for O(n^10) algorithm
  a = [2,2,7,5,4,3,2,2,1];
  nextPermutation(a);
  assert.deepStrictEqual(a, [2,3,1,2,2,2,4,5,7]);

  a = [5,4,7,5,3,2];
  nextPermutation(a);
  assert.deepEqual(a, [5,5,2,3,4,7]);
}
test();
