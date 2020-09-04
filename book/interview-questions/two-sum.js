// tag::description[]
/**
 * Find two numbers that add up to the target value.
 * Return empty array if not found.
 * @example twoSum([19, 7, 3], 10) // => [1, 2]
 * @param {number[]} nums - Array of integers
 * @param {number} target - The target sum.
 * @returns {[number, number]} - Array with index 1 and index 2
 */
function twoSum(nums, target) {
  // end::description[]
  // tag::placeholder[]
  // write your code here...
  // end::placeholder[]
  // tag::solution[]
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(nums[i])) return [map.get(nums[i]), i];
    map.set(complement, i);
  }

  return [];
  // end::solution[]
  // tag::description[]
}
// end::description[]

// tag::twoSumBrute[]
function twoSumBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }

  return [];
}
// end::twoSumBrute[]

module.exports = { twoSum, twoSumBrute };
