/*eslint-disable */

function reverse (arr, i, j) {
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}

function backtracking(array, start = 0) {
  let permutations = [array];

  for (let i = start; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      reverse(array, i, j);
      permutations = permutations.concat(backtracking(array, i + 1));
      reverse(array, i, j);
    }
  }

  return permutations;
}

function minPermutations(arr) {
  return backtracking(arr);
}

module.exports = minPermutations;

//*/
// console.log(backtracking([1,2,3]));
// console.log(backtracking([1,2,3,4]));
//*/
