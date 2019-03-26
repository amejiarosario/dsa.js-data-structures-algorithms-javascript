// tag::swap[]
/**
 * Swap array elements in place
 * Runtime: O(1)
 * @param {array} array to be modified
 * @param {integer} from index of the first element
 * @param {integer} to index of the 2nd element
 */
function swap(array, from, to) {
  // ES6 array destructing
  [array[from], array[to]] = [array[to], array[from]];
}
// end::swap[]

// tag::shuffle[]
/**
 * Shuffle items in an array in-place
 * Runtime: O(n)
 * @param {*} array
 */
function shuffle(array) {
  const { length } = array;
  for (let index = 0; index < length; index++) {
    const newIndex = Math.floor(Math.random() * length);
    swap(array, index, newIndex);
  }
  return array;
}
// end::shuffle[]

module.exports = {
  swap,
  shuffle,
};
