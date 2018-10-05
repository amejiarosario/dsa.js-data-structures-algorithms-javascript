/* eslint-disable */
const assert = require('assert');


const array = [2, 5, 1, 9, 6, 7]; // JavaScript
array[4]; //=> 6

// Insert to tail
array.push(4); // array: [2, 5, 1, 9, 6, 7, 4]

// Insert/update values anywhere
array[8] = 3; // array: [2, 5, 1, 9, 6, 7, 4, empty, 3]

// Insert to head, changes every index
array.unshift(0); // array: [0, 2, 5, 1, 9, 6, 7, 4, empty, 3];

// Deleting could change all the indexes
// on the position 4, delete 2 elements
array.splice(4, 2); // array: [0, 2, 5, 1, 7, 4, empty, 3]

// Inserting element sin the middle
array.splice(1, 0, 111); // at the postion 1, delete 0 elements and insert 111
//=> array: [2, 111, 5, 1, 9, 6, 7]

// Deleting from the beginning of the array.
array.shift(); //=> [5, 1, 9, 6, 7]

// Deleting from the middle
array.splice(2, 1); // delete 1 element at position 2
// => array: [2, 5, 9, 6, 7]

// Deleting last element from the array
array.pop(); // => array: [2, 5, 1, 9, 6]


// tag::searchByIndex[]
/**
 * Search for array's element by index
 *
 * @example Given array = [2, 5, 1, 9, 6, 7];
 *    searchByIndex(array, 3); //↪️ 9
 *    searchByIndex(array, 13); //↪️ -1
 * @param {array} array
 * @param {number} index
 * @returns {any} value or -1 if not found
 */
function searchByIndex(array, index) {
  return array[index] || -1;
}
// end::searchByIndex[]

assert.equal(searchByIndex(array, 3), 9);
assert.equal(searchByIndex(array, 13), -1);

// tag::searchByValue[]
/**
 * Search for array's element by value
 *
 * @example Given array = [2, 5, 1, 9, 6, 7];
 *    searchByValue(array, 9); //↪️ 3
 *    searchByValue(array, 13); //↪️ -1
 * @param {array} array
 * @param {any} value
 */
function searchByValue(array, value) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === value) return index;
  }
  return -1;
}
// end::searchByValue[]

assert.equal(searchByValue(array, 9), 3);
assert.equal(searchByValue(array, 13), -1);
