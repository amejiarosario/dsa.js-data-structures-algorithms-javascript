/**
 *
 * @param {*} nums
 */
function subsetBacktrack(nums, start = 0, current = [], result = []) {
  // console.log({ nums, start, current, result });
  result.push([...current]);

  for (let i = start; i < nums.length; i++) {
    current.push(nums[i]);
    subsetBacktrack(nums, i + 1, current, result);
    current.pop();
    // console.log(current.pop());
  }
  return result;
}

module.exports = subsetBacktrack;
