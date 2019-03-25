const { swap } = require('./sorting-common');

// tag::sort[]
/**
 * Selection sort - Look for smaller numbers on the right side
 *
 * It starts from the first element (index 0),
 * and tries to find any element (to the right)
 * that could be smaller than the current index.
 * If it finds one, it will swap the positions.
 *
 * Runtime: O(n^2)
 * @param {Array|Set} collection elements to be sorted
 */
function selectionSort(collection) {
  const array = Array.from(collection); // <1>

  for (let left = 0; left < array.length; left++) { // <2>
    let selection = left; // minimum value <3>

    for (let right = left + 1; right < array.length; right++) { // <4>
      if (array[selection] > array[right]) {
        selection = right; // <5>
      }
    }

    if (selection !== left) {
      swap(array, selection, left); // <6>
    }
  }

  return array;
}
// end::sort[]

module.exports = selectionSort;
