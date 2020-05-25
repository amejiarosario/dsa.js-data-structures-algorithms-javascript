// With a HashMap: O(n) | O(n)
function twoSum(nums, target) {
  const map = nums.reduce((m, v, i) => { // O(n)
    const ids = m.get(v) || [];
    ids.push(i);
    return m.set(v, ids);
  }, new Map());

  for (let i = 0; i < nums.length; i++) { // O(n)
    const diff = target - nums[i];
    if (map.has(diff) && i !== map.get(diff)) {
      return [i, map.get(diff)];
    }
  }

  return [];
}

module.exports = twoSum;
