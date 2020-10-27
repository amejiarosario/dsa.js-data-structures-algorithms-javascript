/* eslint-disable no-return-assign */
// const {  } = require('../../src/index');

// tag::description[]
/**
 * Sort array of 0's, 1's and 2's in linear time and in-place.
 * @param {numbers[]} nums - Array of number (0, 1, or 2).
 * @returns {void} Don't return anything, modify the input array.
 */
function sortColors(nums) {
  // end::description[]
  // tag::placeholder[]
  // write your code here...
  // end::placeholder[]
  // tag::solution[]
  let left = 0;
  let right = nums.length - 1;
  let curr = 0;

  while (curr <= right) {
    if (nums[curr] < 1) {
      [nums[curr], nums[left]] = [nums[left], nums[curr]]; // swap
      left++;
      curr++;
    } else if (nums[curr] > 1) {
      [nums[curr], nums[right]] = [nums[right], nums[curr]]; // swap
      right--;
    } else {
      curr++;
    }
  }
  // end::solution[]
  // tag::description[]
}
// end::description[]

// tag::compact[]
function sortColorsCompact(nums) {
  let i = 0; let lo = 0; let
    hi = nums.length - 1;
  const swap = (k, j) => [nums[k], nums[j]] = [nums[j], nums[k]];

  while (i <= hi) {
    if (nums[i] < 1) swap(i++, lo++);
    else if (nums[i] > 1) swap(i, hi--);
    else i++;
  }
}
// end::compact[]

module.exports = { sortColors, sortColorsCompact };
