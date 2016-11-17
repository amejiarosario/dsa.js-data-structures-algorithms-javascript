/*
 1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

 EXAMPLE
 Input: Tact Coa
 Output: True (permutations: "taco cat'; "atc o eta·; etc.)
 */
function hasPalindromePermutation(string) {
  const map = new Map();
  const cleanString = string.toLowerCase().replace(/\s/g, '');

  for(const char of cleanString) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  const values = Array.from(map.values());
  const oddValues = values.filter((v) => v % 2);

  return oddValues.length <= 1;
}

console.log(hasPalindromePermutation('Tact Coa')); // true
console.log(hasPalindromePermutation('Tact Coa')); // true
console.log(hasPalindromePermutation('Tact Ca')); // true
console.log(hasPalindromePermutation('Tact')); // false