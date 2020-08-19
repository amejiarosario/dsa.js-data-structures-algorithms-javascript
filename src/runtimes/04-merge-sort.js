const assert = require('assert');

// tag::merge[]
/**
 * Merge two arrays in asc order
 * @example
 *    merge([2,5,9], [1,6,7]) => [1, 2, 5, 6, 7, 9]
 * @param {array} a
 * @param {array} b
 * @returns {array} merged arrays in asc order
 */
function merge(a = [], b = []) {
  const merged = [];
  // merge elements on a and b in asc order. Run-time O(a + b)
  for (let ai = 0, bi = 0; ai < a.length || bi < b.length;) {
    if (ai >= a.length || a[ai] > b[bi]) {
      merged.push(b[bi++]);
    } else {
      merged.push(a[ai++]);
    }
  }
  return merged;
}
// end::merge[]

// tag::sort[]
/**
 * Sort array in asc order using merge-sort
 * @example
 *    sort([3, 2, 1]) => [1, 2, 3]
 *    sort([3]) => [3]
 *    sort([3, 2]) => [2, 3]
 * @param {array} array
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
  const mid = parseInt(size / 2, 10);
  return merge(sort(array.slice(0, mid)), sort(array.slice(mid)));
}
// end::sort[]

assert.deepStrictEqual(sort([3, 2, 1]), [1, 2, 3]);
assert.deepStrictEqual(sort([3]), [3]);
assert.deepStrictEqual(sort([3, 2]), [2, 3]);
assert.deepStrictEqual(sort([]), []);
assert.deepStrictEqual(sort(), []);

assert.deepStrictEqual(merge([2, 5, 9], [1, 6, 7]), [1, 2, 5, 6, 7, 9]);
assert.deepStrictEqual(merge(), []);
assert.deepStrictEqual(merge([3, 5, 7], [2, 4]), [2, 3, 4, 5, 7]);
