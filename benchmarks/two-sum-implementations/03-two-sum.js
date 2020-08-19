// With a HashMap: O(n) | O(n), 1-pass
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) { // O(n)
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

module.exports = twoSum;
