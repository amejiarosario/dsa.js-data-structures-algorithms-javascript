function lengthOfLongestSubstring(s) {
  let max = 0;
  let cmax = 0;
  let lrep = 0;
  const lastRepeated = new Map();

  for (let index = 0; index < s.length; index += 1) {
    const char = s[index];

    if (!lastRepeated.has(char)) {
      cmax += 1;
    } else {
      cmax = index - Math.max(lrep - 1, lastRepeated.get(char));
      lrep = index;
    }

    max = Math.max(cmax, max);
    lastRepeated.set(char, index);
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
