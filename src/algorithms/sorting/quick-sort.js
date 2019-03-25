const { swap } = require('./sorting-common');

// tag::partition[]
/**
 * Linear-time Partitioning
 * Chooses a pivot and re-arrage the array that
 *  everything on the left is <= pivot and
 *  everything on the right is > pivot
 *
 * Runtime: O(n)
 * @param {*} array
 * @param {*} low start index
 * @param {*} high end index
 * @returns {integer} pivot index
 */
function partition(array, low, high) {
  const pivotInitialIndex = high; // <1>
  let pivotIndex = low; // <2>

  for (let current = low; current < high; current += 1) { // <3>
    if (array[current] <= array[pivotInitialIndex]) { // <4>
      swap(array, current, pivotIndex);
      pivotIndex += 1;
    }
  }

  swap(array, pivotInitialIndex, pivotIndex);
  return pivotIndex;
}
// end::partition[]


// tag::quickSort[]
/**
 * QuickSort - Efficient in-place recursive sorting algorithm.
 * Avg. Runtime: O(n log n) | Worst: O(n^2)
 * @param {Number[]} array
 * @param {Number} low
 * @param {Number} high
 */
function quickSort(array, low = 0, high = array.length - 1) {
  if (low < high) { // <4>
    const partitionIndex = partition(array, low, high); // <1>
    quickSort(array, low, partitionIndex - 1); // <2>
    quickSort(array, partitionIndex + 1, high); // <3>
  }
  return array;
}
// end::quickSort[]


// tag::sort[]
/**
 * Quick sort
 * Runtime: O(n log n)
 * @param {Array|Set} collection elements to be sorted
 */
function quickSortWrapper(collection) {
  const array = Array.from(collection); // <1>
  return quickSort(array);
}
// end::sort[]


module.exports = quickSortWrapper;
