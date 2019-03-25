/**
 * swap in-place between two elements in an array
 * @param {Array} array array to operate on
 * @param {Number} index1
 * @param {Number} index2
 */
function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

// tag::snippet[]
/**
 * Find all permutations (without duplicates) of a word/array
 *
 * @param {String|Array} word given string or array
 * @param {Array} solution (used by recursion) array with solutions
 * @param {Number} start (used by recursion) index to start
 * @returns {String[]} all permutations
 *
 * @example
 *  permutations('ab') // ['ab', 'ba']
 *  permutations([1, 2, 3]) // ['123', '132', '213', '231', '321', '312']
 */
function permutations(word = '', solution = [], start = 0) {
  const array = Array.isArray(word) ? word : Array.from(word);

  if (start === array.length - 1) { // <4>
    solution.push(array.join(''));
  } else {
    for (let index = start; index < array.length; index++) { // <1>
      swap(array, start, index); // <2>
      permutations(array, solution, start + 1); // <3>
      swap(array, start, index); // backtrack // <5>
    }
  }

  return solution;
}
// end::snippet[]

module.exports = permutations;
