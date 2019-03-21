const { swap } = require('./sorting-common');

// tag::sort[]
/**
 * Sorting by insertion - start from the 2nd element,
 * it tries to find any element (to the left) that could be bigger than the current index.
 * It will move all the elements that are bigger and insert the current element where it belongs.
 * Runtime: O(n^2)
 * @param {Array|Set} collection elements to be sorted
 */
function insertionSort(collection) {
  const array = Array.from(collection);

  for (let outer = 1; outer < array.length; outer++) {
    const insert = array[outer];

    for (let inner = outer - 1; array[inner] > insert; inner--) {
      swap(array, inner + 1, inner);
    }
  }
  return array;
}
// end::sort[]


module.exports = insertionSort;
