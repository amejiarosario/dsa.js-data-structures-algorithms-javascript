// [map w/dups handling] →  O(n^2) | O(n)
function twoSum(nums, target) {
  const map = nums.reduce((m, v, i) => { // O(n)
    const ids = m.get(v) || [];
    ids.push(i);
    return m.set(v, ids);
  }, new Map());

  for (let i = 0; i < nums.length; i++) { // O(n)
    const diff = target - nums[i];
    if (map.has(diff)) {
      const id = map.get(diff).find((j) => j > i);
      if (id > -1) return [i, id];
    }
  }

  return [];
}

module.exports = twoSum;
