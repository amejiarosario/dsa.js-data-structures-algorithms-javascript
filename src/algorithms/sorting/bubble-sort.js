const { swap } = require('./sorting-common');

// tag::sort[]
/**
 * Bubble sort - Bubbles up bigger values to the right side
 * Runtime: O(n^2)
 * @param {Array|Set} collection elements to be sorted
 */
function bubbleSort(collection) {
  const array = Array.from(collection); // <1>

  for (let i = 1; i < array.length; i++) { // <6>
    let swapped = false;

    for (let current = 0; current < array.length - i; current++) { // <4>
      if (array[current] > array[current + 1]) { // <2>
        swap(array, current, current + 1); // <3>
        swapped = true;
      }
    }

    if (!swapped) break; // <5>
  }

  return array;
}
// end::sort[]

module.exports = bubbleSort;
