// Brute force: O(n^2) | O(1)
function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) { // O(n^2)
    const diff = target - nums[i];
    const offset = i + 1;
    const idx = nums.slice(offset).findIndex((n) => n === diff); // O(n)
    const j = offset + idx;
    if (idx > -1) return [i, j];
  }
  return [];
}

module.exports = twoSum;
