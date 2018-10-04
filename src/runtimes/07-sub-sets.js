const assert = require('assert');

// tag::snippet[]
/**
 * Finds all distinct subsets of a given set
 * Runtime: O(2^n)
 *
 * @example
 *    findSubsets('a') //↪️ ['', 'a']
 *    findSubsets([1, 'b']) //↪️ ['', '1', 'b', '1b']
 *    findSubsets('abc') //↪️ ['', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc']
 *
 * @param {string|array} n
 * @returns {array} all the subsets (including empty and set itself).
 */
function findSubsets(n = '') {
  const array = Array.from(n);
  const base = ['']; // <1>

  const results = array.reduce((previous, element) => {
    const previousPlusElement = previous.map(el => `${el}${element}`); // <2>
    return previous.concat(previousPlusElement); // <3>
  }, base);

  return results;
}
// end::snippet[]

assert.deepStrictEqual(findSubsets(), ['']);
assert.deepStrictEqual(findSubsets('a'), ['', 'a']);
assert.deepStrictEqual(findSubsets([1, 'b']), ['', '1', 'b', '1b']);
assert.deepStrictEqual(findSubsets('abc'), ['', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc']);

module.exports = findSubsets;
