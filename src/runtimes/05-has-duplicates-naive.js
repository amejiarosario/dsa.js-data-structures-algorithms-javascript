const assert = require('assert');

// tag::hasDuplicates[]
/**
 * Finds out if an array has duplicates
 * Runtime: O(n^2)
 * @example
 *    hasDuplicates([]); //↪️ false
 *    hasDuplicates([1, 1]); //↪️ true
 *    hasDuplicates([1, 2]); //↪️ false
 * @param {Array} array
 * @returns {boolean} true if has duplicates, false otherwise
 */
function hasDuplicates(array) {
  for (let outter = 0; outter < array.length; outter++) {
    for (let inner = outter + 1; inner < array.length; inner++) {
      if (array[outter] === array[inner]) {
        return true;
      }
    }
  }

  return false;
}
// end::hasDuplicates[]


assert.equal(hasDuplicates([]), false);
assert.equal(hasDuplicates([1, 1]), true);
assert.equal(hasDuplicates([1, 2]), false);

module.exports = hasDuplicates;
