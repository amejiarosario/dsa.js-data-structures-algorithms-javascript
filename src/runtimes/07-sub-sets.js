const assert = require('assert');

/**
 * Finds all distinct subsets of a given set
 *
 * @param {string|array} n
 * @returns {array} all the subsets (including empty and set itself).
 * @example
 *    findSubsets('a') => ['', 'a']
 *    findSubsets([1, 'b']) => ['', '1', 'b', '1b']
 *    findSubsets('abc') => ['', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc']
 */
function findSubsets(n = '') {
  const array = Array.from(n);
  const base = [''];

  const results = array.reduce((previous, element) => {
    const previousPlusElement = previous.map(el => `${el}${element}`);
    return previous.concat(previousPlusElement);
  }, base);

  return results;
}

assert.deepStrictEqual(findSubsets(), ['']);
assert.deepStrictEqual(findSubsets('a'), ['', 'a']);
assert.deepStrictEqual(findSubsets([1, 'b']), ['', '1', 'b', '1b']);
assert.deepStrictEqual(findSubsets('abc'), ['', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc']);

module.exports = findSubsets;
