function lengthOfLongestSubstring(s) {
  let max = 0;
  const lastIndex = new Map();

  for (let start = 0, end = 0; end < s.length; end += 1) {
    const char = s[end];

    if (lastIndex.has(char)) {
      start = Math.max(start, lastIndex.get(char));
    }

    max = Math.max(max, (end - start) + 1);
    lastIndex.set(char, end + 1);
  }

  return max;
}

const assert = require('assert');

function test() {
  assert.equal(lengthOfLongestSubstring('abcabcbb'), 3); // abc
  assert.equal(lengthOfLongestSubstring('bbbbb'), 1); // b
  assert.equal(lengthOfLongestSubstring('pwwkew'), 3); // wke

  assert.equal(lengthOfLongestSubstring('abba'), 2); // ab
  assert.equal(lengthOfLongestSubstring('dvdf'), 3); // vdf
  //                                     0123456
  assert.equal(lengthOfLongestSubstring('tmmzuxt'), 5); // mzuxt
  assert.equal(lengthOfLongestSubstring('wobgrovw'), 6); // bgrovw
}

test();

// solution:
// https://leetcode.com/articles/longest-substring-without-repeating-characters/
