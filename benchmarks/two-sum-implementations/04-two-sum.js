// sort + two pointers: O(n log n) | O(1)
function twoSum(nums, target) {
  nums.sort((a, b) => a - b);

  let lo = 0;
  let hi = nums.length - 1;

  while (lo < hi) {
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
