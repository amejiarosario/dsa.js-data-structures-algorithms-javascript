const { swap } = require('./sorting-common');

// tag::sort[]
/**
 * Bubble sort - Bubbles up bigger values to the right side
 * Runtime: O(n^2)
 * @param {Array|Set} collection elements to be sorted
 */
function bubbleSort(collection) {
  const array = Array.from(collection); // <1>

  let swapped = false;

  for (let left = 0; left < array.length; left++) { // <2>
    for (let right = 0; right < array.length - left; right++) { // <5>
      if (array[right] > array[right + 1]) { // <3>
        swap(array, right, right + 1);
        swapped = true;
      }
    }
    if (!swapped) break; // <4>
  }

  return array;
}
// end::sort[]

module.exports = bubbleSort;
