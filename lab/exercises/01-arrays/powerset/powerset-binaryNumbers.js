/**
 * Bitmask approach
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsBinary(nums) {
  const len = nums.length;
  const max = 2 ** len;
  const result = [];

  for (let bin = 0; bin < max; bin++) {
    const bitmask = bin.toString(2).padStart(len, '0');

    const el = Array.from(bitmask).reduce((a, bit, i) => {
      if (bit === '1') {
        return a.concat(nums[i]);
      }
      return a;
    }, []);

    result.push(el);
  }

  return result;
}

module.exports = subsetsBinary;
