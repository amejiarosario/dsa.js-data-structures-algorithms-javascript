const { swap } = require('./sorting-common');

// tag::sort[]
/**
 * Bubble sort
 * Runtime: O(n^2)
 * @param {Array|Set} collection elements to be sorted
 */
function bubbleSort(collection) {
  const array = Array.from(collection); // <1>

  for (let outer = 0; outer < array.length; outer += 1) { // <2>
    for (let inner = outer + 1; inner < array.length; inner += 1) { // <3>
      if (array[outer] > array[inner]) { // <4>
        swap(array, outer, inner);
      }
    }
  }

  return array;
}
// end::sort[]


module.exports = bubbleSort;
