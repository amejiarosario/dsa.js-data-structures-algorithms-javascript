const { swap } = require('./sorting-common');

// tag::sort[]
/**
 * Selection sort
 * @param {Array|Set} collection list to be sorted
 */
function selectionSort(collection) {
  const array = Array.from(collection);

  for (let outer = 0; outer < array.length; outer += 1) {
    let selection = array[outer];

    for (let inner = outer + 1; inner < array.length; inner += 1) {
      const element = array[inner];

      if (element < selection) {
        swap(array, outer, inner);
        selection = array[outer];
      }
    }
  }

  return array;
}
// end::sort[]

module.exports = selectionSort;
