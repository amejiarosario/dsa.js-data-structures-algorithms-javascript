const assert = require('assert');

/**
 * Merge two arrays in asc order
 * @param {array} array1
 * @param {array} array2
 * @returns {array} merged arrays in asc order
 * @example
 *    merge([2,5,9], [1,6,7]) => [1, 2, 5, 6, 7, 9]
 */
function merge(array1 = [], array2 = []) {
  const merged = [];
  let array1Index = 0;
  let array2Index = 0;
  // merge elements on a and b in asc order. Run-time O(a + b)
  while (array1Index < array1.length || array2Index < array2.length) {
    if (array1Index >= array1.length || array1[array1Index] > array2[array2Index]) {
      merged.push(array2[array2Index]);
      array2Index += 1;
    } else {
      merged.push(array1[array1Index]);
      array1Index += 1;
    }
  }
  return merged;
}

/**
 * Sort array in asc order using merge-sort
 * @param {array} array
 * @example
 *    sort([3, 2, 1]) => [1, 2, 3]
 *    sort([3]) => [3]
 *    sort([3, 2]) => [2, 3]
 */
function sort(array = []) {
  const size = array.length;
  // base case
  if (size < 2) {
    return array;
  }
  if (size === 2) {
    return array[0] > array[1] ? [array[1], array[0]] : array;
  }
  // slit and merge
  const mid = size / 2;
  return merge(sort(array.slice(0, mid)), sort(array.slice(mid)));
}

assert.deepStrictEqual(sort([3, 2, 1]), [1, 2, 3]);
assert.deepStrictEqual(sort([3]), [3]);
assert.deepStrictEqual(sort([3, 2]), [2, 3]);
assert.deepStrictEqual(sort([]), []);
assert.deepStrictEqual(sort(), []);

assert.deepStrictEqual(merge([2, 5, 9], [1, 6, 7]), [1, 2, 5, 6, 7, 9]);
assert.deepStrictEqual(merge(), []);
