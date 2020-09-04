// tag::description[]
/**
 * Find the number of subarrays that add up to k.
 * @example subarraySum([1, -1, 1], 0); // 3 ([1,-1,1], [1], [1])
 * @param {number[]} nums - Array of integers.
 * @param {number} k - The target sum.
 * @returns {number} - The number of solutions.
 */
function subarraySum(nums, k) {
  // end::description[]
  // tag::placeholder[]
  // write your code here...
  // end::placeholder[]
  // tag::solution[]
  let ans = 0;
  let sum = 0;
  const map = new Map([[0, 1]]);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) ans += map.get(sum - k);
    map.set(sum, 1 + (map.get(sum) || 0));
  }

  return ans;
  // end::solution[]
  // tag::description[]
}
// end::description[]

// tag::subarraySumBrute1[]
function subarraySumBrute1(nums, k) {
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = 0;
      for (let n = i; n <= j; n++) {
        sum += nums[n];
      }
      if (sum === k) ans++;
    }
  }

  return ans;
}
// end::subarraySumBrute1[]

// tag::subarraySumBrute2[]
function subarraySumBrute2(nums, k) {
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) ans++;
    }
  }

  return ans;
}
// end::subarraySumBrute2[]

module.exports = { subarraySum, subarraySumBrute1, subarraySumBrute2 };
