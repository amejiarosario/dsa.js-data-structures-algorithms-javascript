/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * @example twoSum([2, 7, 11, 15], 9) === [0, 1]
 *
 * @param {Number[]} nums
 * @param {Number} target
 * @returns {Number[]}
 */
function twoSum(nums, target) {
  const map = new Map();

  for (let index = 0; index < nums.length; index++) {
    const number = nums[index];
    const complement = target - number;

    if(map.has(complement) && index !== map.get(complement)) {
      return [map.get(complement), index];
    }

    map.set(number, index);
  }
}

module.exports = twoSum;