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

module.exports = {
  swap,
};
