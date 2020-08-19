/**
 *
 * https://leetcode.com/problems/subsets
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsConcat(nums) {
  return nums.reduce((result, n) => {
    const newSet = result.map(r => r.concat(n));
    return result.concat(newSet); // O(n * n^2) bcuz copy
  }, [
    [],
  ]);
}

module.exports = subsetsConcat;
