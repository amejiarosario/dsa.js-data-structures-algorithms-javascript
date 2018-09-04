const assert = require('assert');

const array = [2, 5, 1, 9, 6, 7];

// Insert to tail
array.push(4); // array: [2, 5, 1, 9, 6, 7, 4]

// Insert/update values anywhere
array[8] = 3; // array: [2, 5, 1, 9, 6, 7, 4, empty, 3]

// Insert to head, changes every index
array.unshift(0); // array: [0, 2, 5, 1, 9, 6, 7, 4, empty, 3];

// Deleting could change all the indexes
// on the position 4, delete 2 elements
array.splice(4, 2); // array: [0, 2, 5, 1, 7, 4, empty, 3]


/**
 * Search for array's element by index
 *
 * @param {array} array
 * @param {number} index
 * @returns {any} value or -1 if not found
 * @example Given array = [2, 5, 1, 9, 6, 7];
 *    searchByIndex(array, 3) => 9
 *    searchByIndex(array, 13) => -1
 */
function searchByIndex(array, index) {
  return array[index] || -1;
}

assert.equal(searchByIndex(array, 3), 9);
assert.equal(searchByIndex(array, 13), -1);

/**
 * Search for array's element by value
 *
 * @param {array} array
 * @param {any} value
 * @example Given array = [2, 5, 1, 9, 6, 7];
 *    searchByValue(array, 9) => 3
 *    searchByValue(array, 13) => -1
 */
function searchByValue(array, value) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === value) return index;
  }
  return -1;
}

assert.equal(searchByValue(array, 9), 3);
assert.equal(searchByValue(array, 13), -1);
