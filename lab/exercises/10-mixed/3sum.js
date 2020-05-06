/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 * @runtime O(n^2) and skips duplicates
 * @space O(1)
 */
function threeSum(nums) {
  const ans = [];

  nums.sort((a, b) => a - b); // sort: O(n log n)

  for (let i = 0; i < nums.length - 2; i++) { // O(n^2)
    if (i > 0 && nums[i - 1] === nums[i]) continue; // skip duplicates

    let lo = i + 1;
    let hi = nums.length - 1;

    while (lo < hi) {
      const sum = nums[i] + nums[lo] + nums[hi];
      if (sum === 0) {
        ans.push([nums[i], nums[lo], nums[hi]]);
        // console.log([nums[i], nums[lo], nums[hi]]);
        lo++;
        hi--;
        while (lo < hi && nums[lo - 1] === nums[lo]) lo++; // skip duplicates
        while (lo < hi && nums[hi + 1] === nums[hi]) hi--; // skip duplicates
      } else if (sum < 0) {
        lo++;
        while (lo < hi && nums[lo - 1] === nums[lo]) lo++; // skip duplicates
      } else {
        hi--;
        while (lo < hi && nums[hi + 1] === nums[hi]) hi--; // skip duplicates
      }
    }
  }

  return ans;
}

module.exports = threeSum;

// Given an array find the unique triplets elements that sum zero.

// Brute force: O(n^3)
// Using twoSum: O(n^2)
//
