/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let max = 0;
  let start = 0;
  const map = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map[char]) {
      start = map[char] + 1;
    }

    map[char] = i;
    max = Math.max(1 + i - start, max);
  }

  return max;
}

const assert = require('assert');

const testCases = { abcabcbb: 3 };

for (const [string, unique] of Object.entries(testCases)) {
  assert.equal(lengthOfLongestSubstring(string), unique);
}

/*
  Longest string without duplicate chars.

  "abcabcbb"
  3 (abc)

  i=6
  c=b
  s=5
  h={a:3,b:4,c:2}
  m=3

  ---
  a
  1

  aa
  1

  ab
  2

  abc
  3

  aab
  2

  aabca
  3

  "dvdf"
  3 (vdf)

  "abcabcbb"
  3 (abc)
  ---

  map: O(n)
  backtracking
*/
