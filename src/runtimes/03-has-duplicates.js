const assert = require('assert');

/**
 * Finds out if an array has duplicates
 *
 * @param {Array} array
 * @returns {boolean} true if has duplicates, false otherwise
 * @example
 *    hasDuplicates([]) => false
 *    hasDuplicates([1, 1]) => true
 *    hasDuplicates([1, 2]) => false
 */
function hasDuplicates(array) {
  const words = new Map();
  for (let index = 0; index < array.length; index++) {
    const word = array[index];
    if (words.has(word)) {
      return true;
    }
    words.set(word, true);
  }
  return false;
}

assert.equal(hasDuplicates([]), false);
assert.equal(hasDuplicates([1, 1]), true);
assert.equal(hasDuplicates([1, 2]), false);

module.exports = hasDuplicates;
