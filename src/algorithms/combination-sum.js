/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(
  candidates,
  target,
  solution = [],
  current = [],
  currentSum = 0,
  index = 0,
) {
  if (currentSum === target) {
    solution.push(current);
  }

  let candidate = candidates[index];
  let newSum = currentSum + candidate;

  if (newSum <= target) {
    combinationSum(candidates, target, solution, current.concat(candidate), newSum, index);
  } else if (index < candidates.length - 1) {
    const newIndex = index + 1;
    while (currentSum + candidates[newIndex] > target) current.pop();
    candidate = candidates[newIndex];
    newSum = currentSum + candidate;
    combinationSum(candidates, target, solution, current.concat(candidate), newSum, newIndex);
  }


  return solution;
}

module.exports = combinationSum;
