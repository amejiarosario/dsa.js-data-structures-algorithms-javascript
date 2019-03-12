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
  index = 0,
) {
  if (target < 0) {
    // By adding another candidate we've gone below zero.
    // This would mean that the last candidate was not acceptable.
    return solution;
  }

  if (target === 0) {
    // If after adding the previous candidate our remaining sum
    // became zero - we need to save the current combination since it is one
    // of the answers we're looking for.
    solution.push(current.slice());

    return solution;
  }

  // If we haven't reached zero yet let's continue to add all
  // possible candidates that are left.
  for (let candidateIndex = index; candidateIndex < candidates.length; candidateIndex += 1) {
    const currentCandidate = candidates[candidateIndex];

    // Let's try to add another candidate.
    current.push(currentCandidate);

    // Explore further option with current candidate being added.
    combinationSum(
      candidates,
      target - currentCandidate,
      solution,
      current,
      candidateIndex,
    );

    // BACKTRACKING.
    // Let's get back, exclude current candidate and try another ones later.
    current.pop();
  }

  return solution;
}

module.exports = combinationSum;
