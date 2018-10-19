const assert = require('assert');

// tag::snippet[]
/**
 * Find all the different permutations a word can have
 * Runtime: O(n!)
 * @example
 *    getPermutations('a') => ['a']
 *    getPermutations('ab') => ['ab', 'ba']
 *    getPermutations('mad') => ['mad', 'mda', 'amd', 'adm', 'dma', 'dam']
 * @param {string} word string or array of chars to find permutations
 * @param {string} prefix used internally for recursion
 * @returns {array} collection of all the ways the letters can be arranged
 */
function getPermutations(word = '', prefix = '') {
  if (word.length <= 1) {
    return [prefix + word];
  }
  return Array.from(word).reduce((result, char, index) => {
    const reminder = word.slice(0, index) + word.slice(index + 1);
    return result.concat(getPermutations(reminder, prefix + char));
  }, []);
}
// end::snippet[]


assert.deepStrictEqual(getPermutations(), ['']);
assert.deepStrictEqual(getPermutations('a'), ['a']);
assert.deepStrictEqual(getPermutations('ab'), ['ab', 'ba']);
assert.deepStrictEqual(getPermutations('mad'), ['mad', 'mda', 'amd', 'adm', 'dma', 'dam']);


module.exports = getPermutations;
