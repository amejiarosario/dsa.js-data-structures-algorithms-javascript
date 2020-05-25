// Brute force: O(n^2) | O(1)
function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) { // O(n^2)
    for (let j = i + 1; j < nums.length; j++) { // O(n)
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

module.exports = twoSum;
