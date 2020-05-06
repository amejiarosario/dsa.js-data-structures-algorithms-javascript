/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 * @runtime O(n^3)
 */
function threeSum(nums) {
  const ans = new Set();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          ans.add(JSON.stringify([nums[i], nums[j], nums[k]].sort()));
        }
      }
    }
  }

  return Array.from(ans).map((s) => JSON.parse(s));
}

module.exports = threeSum;

// Given an array find the unique triplets elements that sum zero.

// Brute force: O(n^3)
// Using twoSum: O(n^2)
//
