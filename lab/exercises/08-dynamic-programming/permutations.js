/**
 * 8.7 Permutations without Dups:
 *
 * Write a method to compute all permutations of
 * a string of unique characters.
 *
 * @param string
 * @param prefix
 * @param memo
 * @returns {*}
 */
function permutations(string = '', prefix = '', memo = {}) {
  if (string.length < 2) {
    return [prefix + string];
  } else if (string.length === 2) {
    return [prefix + string, prefix + string[1] + string[0]];
  } else if (memo[string]) {
    return memo[string].map(e => prefix + e);
  }
  let results = [];
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    results = results.concat(permutations(string.replace(letter, ''), letter, memo));
  }
  memo[string] = results;
  return results.map(e => prefix + e);
}

module.exports = permutations;
