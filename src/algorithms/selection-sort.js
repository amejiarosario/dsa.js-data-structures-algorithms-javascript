// tag::swap[]
/**
 * Swap array elements in place
 * @param {array} array to be modified
 * @param {integer} from index of the first element
 * @param {integer} to index of the 2nd element
 */
function swap(array, from, to) {
  [array[from], array[to]] = [array[to], array[from]];
}
// end::swap[]

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
