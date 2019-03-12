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
  let newCurrent = current.concat(candidate);

  if (newSum <= target) {
    combinationSum(candidates, target, solution, newCurrent, newSum, index);
  } else if (index < candidates.length - 1) {
    const newIndex = index + 1;
    candidate = candidates[newIndex];
    newSum = currentSum;
    const reducedCurrent = current.slice(); // clone current
    while (newSum + candidate > target) {
      const deletedCandidate = reducedCurrent.pop();
      newSum -= deletedCandidate;
    }
    newSum += candidate;
    newCurrent = reducedCurrent.concat(candidate);
    combinationSum(candidates, target, solution, newCurrent, newSum, newIndex);
  }


  return solution;
}

module.exports = combinationSum;
