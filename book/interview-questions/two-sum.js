// tag::description[]
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
