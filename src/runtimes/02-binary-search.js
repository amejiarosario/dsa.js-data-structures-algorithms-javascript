// tag::binarySearchRecursive[]
/**
 * Recursive Binary Search
 * Runtime: O(log n)
 *
 * @example
 *  binarySearch([1, 2, 3], 2); //↪️ 1
 *  binarySearch([1, 2, 3], 31); //↪️ -1
 * @param {array} array collection of sorted elements
 * @param {string|number} search value to search for
 * @param {number} offset keep track of array's original index
 * @return index of the found element or -1 if not found
 */
function binarySearchRecursive(array, search, offset = 0) {
  // split array in half
  const half = parseInt(array.length / 2, 10);
  const current = array[half];

  if (current === search) {
    return offset + half;
  } else if (array.length < 2) {
    return -1;
  } else if (search > current) {
    const right = array.slice(half);
    return binarySearchRecursive(right, search, offset + half);
  }

  const left = array.slice(0, half);
  return binarySearchRecursive(left, search, offset);
}
// end::binarySearchRecursive[]

/**
 * Iterative Binary Search
 *
 * @return index of the found element or -1 if not found
 * @param {array} array collection of sorted elements
 * @param {string|number} search value to search for
 */
function binarySearchIterative(array, search) {
  // console.log('binarySearchIterative', {array, search});
  let start = 0;
  let end = array.length;
  const half = () => parseInt((end - start) / 2, 10) + start;

  while (end - start > 0) {
    const currentIndex = half();
    const current = array[currentIndex];

    if (current === search) {
      return currentIndex;
    } else if (search > current) {
      start = currentIndex;
    } else if (search < current) {
      end = currentIndex;
    }
  }

  return -1;
}

// const binarySearch = binarySearchRecursive;
const binarySearch = binarySearchIterative;

// function test() {
//  const directory = ['Adrian', 'Bella', 'Charlotte', 'Daniel',
//  'Emma', 'Hanna', 'Isabella', 'Jayden', 'Kaylee', 'Luke', 'Mia',
//  'Nora', 'Olivia', 'Paisley', 'Riley', 'Thomas', 'Wyatt', 'Xander', 'Zoe'];
//
//   const assert = require('assert');
//   assert.equal(binarySearch([], 'not found'), -1);
//   assert.equal(binarySearch([1], 2), -1);
//   assert.equal(binarySearch([1], 1), 0);
//   assert.equal(binarySearch([1, 2, 3], 1), 0);
//   assert.equal(binarySearch([1, 2, 3], 2), 1);
//   assert.equal(binarySearch([1, 2, 3], 3), 2);
//   assert.equal(binarySearch([1, 2, 3], 31), -1);
//   assert.equal(binarySearch(directory, 'Adrian'), 0);
//   assert.equal(binarySearch(directory, 'Hanna'), 5);
//   assert.equal(binarySearch(directory, 'Zoe'), 18);
//   assert.equal(binarySearch(directory, 'not found'), -1);
// }

// test();


module.exports = { binarySearch, binarySearchIterative, binarySearchRecursive };
