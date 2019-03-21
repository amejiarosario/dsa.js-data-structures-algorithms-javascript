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
  const array = Array.from(collection);

  for (let left = 0; left < array.length; left++) {
    let selection = array[left];

    for (let right = left + 1; right < array.length; right++) {
      const element = array[right];

      if (element < selection) {
        swap(array, left, right);
        selection = array[left];
      }
    }
  }

  return array;
}
// end::sort[]

module.exports = selectionSort;
