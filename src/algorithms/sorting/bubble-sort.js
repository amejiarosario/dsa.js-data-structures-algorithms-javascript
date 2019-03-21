const { swap } = require('./sorting-common');

// tag::sort[]
/**
 * Bubble sort - Bubbles up bigger values to the right side
 * Runtime: O(n^2)
 * @param {Array|Set} collection elements to be sorted
 */
function bubbleSort(collection) {
  const array = Array.from(collection); // <1>

  for (let left = 0; left < array.length; left++) { // <2>
    for (let right = left + 1; right < array.length; right++) { // <3>
      if (array[left] > array[right]) { // <4>
        swap(array, left, right);
      }
    }
  }

  return array;
}
// end::sort[]


module.exports = bubbleSort;
