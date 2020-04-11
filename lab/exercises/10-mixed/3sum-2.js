/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 * @runtime O(n^2)
 * @space O(n)
 */
const threeSum = function (nums) {
  const array = nums.reduce((acc, n, i) => { // O(n^2)
    if (i > nums.length - 2) return acc;
    const partial = twoSum(nums, -n, i + 1);
    const res = partial.map((p) => [n, ...p]);
    // console.log({i, n, partial, res, acc})
    return acc.concat(res);
  }, []);

  // remove dups
  const set = array.reduce((acc, n) => {
    const str = n.sort((a, b) => a - b).toString();
    return acc.add(str);
  }, new Set());

  // convert to array of nums
  return [...set].map((a) => a.split(',').map((n) => +n));
};

function twoSum(nums, target, start) { // O(n)
  const ans = [];
  const map = new Map();

  for (let i = start; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      ans.push([target - nums[i], nums[i]]);
    }
    map.set(nums[i], i);
  }

  return ans;
}

module.exports = threeSum;

// Given an array find the unique triplets elements that sum zero.

// Brute force: O(n^3)
// Using twoSum: O(n^2)
//
