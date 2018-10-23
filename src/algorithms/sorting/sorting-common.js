// tag::swap[]
/**
 * Swap array elements in place
 * Runtime: O(1)
 * @param {array} array to be modified
 * @param {integer} from index of the first element
 * @param {integer} to index of the 2nd element
 */
function swap(array, from, to) {
  [array[from], array[to]] = [array[to], array[from]];
}
// end::swap[]

/**
 * Move an element in an array *from* a postion *to* another.
 * Runtime: O(n)
 * @param {array} array
 * @param {integer} from index of the element to remove (source)
 * @param {integer} to index where the removed element would be move (destination)
 */
function moveElement(array, from, to) {
  if (from === to + 1) return;
  const [elementToInsert] = array.splice(from, 1); // delete from position
  array.splice(to + 1, 0, elementToInsert); // insert element in to the position.
}

module.exports = {
  swap,
  moveElement,
};
