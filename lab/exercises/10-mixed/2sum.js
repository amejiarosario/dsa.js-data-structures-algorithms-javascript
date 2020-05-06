
/**
 * Given an array and a target, return the indices of the 2 number that sum up target
 *
 * @param {number[]} nums
 * @param {numer} target
 * @returns
 *
 * @runtime O(n)
 */
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }

  return [];
}

module.exports = twoSum;
