const { swap } = require('./sorting-common');

// tag::sort[]
/**
 * Sorting by insertion - Look for bigger numbers on the left side
 *
 * It starts from the 2nd element,
 * and it tries to find any element (to the left)
 * that could be bigger than the current index.
 * It will move all the elements that are bigger and insert the current element where it belongs.
 *
 * Runtime: O(n^2)
 * @param {Array|Set} collection elements to be sorted
 */
function insertionSort(collection) {
  const array = Array.from(collection);

  for (let right = 1; right < array.length; right++) {
    const insert = array[right];

    for (let left = right - 1; array[left] > insert; left--) {
      swap(array, left + 1, left);
    }
  }
  return array;
}
// end::sort[]


module.exports = insertionSort;
