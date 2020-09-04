// tag::description[]
/**
 * Find the maximun sum of contiguous elements in an array.
 *
 * @examples
 *  maxSubArray([1, -3, 10, -5]); // => 10
 *  maxSubArray([-3,4,-1,2,1,-5]); // => 6
 *
 * @param {number[]} a - Array
 * @returns {number} - max sum
 */
function maxSubArray(a) {
// end::description[]
// tag::solution[]
  let max = -Infinity;
  let local = 0;

  a.forEach((n) => {
    local = Math.max(n, local + n);
    max = Math.max(max, local);
  });

  return max;
}
// end::solution[]

// tag::maxSubArrayBrute1[]
function maxSubArrayBrute1(nums) {
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) { // O(n^3)
    for (let j = i + 1; j <= nums.length; j++) { // O(n^2)
      const sum = nums.slice(i, j).reduce((a, n) => n + a, 0); // O(n)
      max = Math.max(max, sum); // O(1)
    }
  }

  return max;
}
// end::maxSubArrayBrute1[]

// tag::maxSubArrayBrute2[]
function maxSubArrayBrute2(nums) {
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) { // O(n) * O(n)
    let local = 0;
    for (let j = i; j < nums.length; j++) { // O(n)
      local += nums[j];
      max = Math.max(max, local);
    }
  }
  return max;
}
// end::maxSubArrayBrute2[]

module.exports = { maxSubArrayBrute1, maxSubArrayBrute2, maxSubArray };
