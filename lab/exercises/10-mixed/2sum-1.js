
/**
 * Given a SORTED array and a target, return the indices of the 2 number that sum up target
 *
 * @param {number[]} nums
 * @param {numer} target
 * @returns
 *
 * @runtime O(n)
 */
function twoSum(nums, target) {
  const len = nums.length - 1;
  let lo = 0;
  let hi = len;

  while (lo < hi && hi > 0 && lo < len) {
    const sum = nums[lo] + nums[hi];
    if (sum === target) {
      return [lo, hi];
    }
    if (sum > target) {
      hi--;
    } else {
      lo++;
    }
  }

  return [];
}

module.exports = twoSum;
