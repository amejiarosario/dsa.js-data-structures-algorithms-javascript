/**
 * Runtime: O(n^2)
 * Space: O(1)
 * @param {String} s string
 */
function longestPalindrome(s) {
  if (!s) {
    return '';
  }

  let max = { start: 0, end: 0, length: 0 };

  for (let i = 0; i < s.length; i++) {
    const s1 = expandFromCenter(s, i, i);
    const s2 = expandFromCenter(s, i, i + 1);

    max = (Math.max(s1.length, s2.length) > max.length) ? ((s1.length > s2.length) ? s1 : s2) : max;
  }

  return s.substring(max.start, max.end + 1);
}

function expandFromCenter(s, left, right) {
  let start = left;
  let end = left;

  while (s[left] === s[right]) {
    start = left;
    end = right;

    if (left === 0 || right === s.length - 1) {
      break;
    }
    left--;
    right++;
  }

  return { start, end, length: end - start };
}

const assert = require('assert');

function test() {
  assert.equal(longestPalindrome(), '');
  assert.equal(longestPalindrome(''), '');
  assert.equal(longestPalindrome('a'), 'a');
  assert.equal(longestPalindrome('aa'), 'aa');
  assert.equal(longestPalindrome('aaa'), 'aaa');
  assert.equal(longestPalindrome('xaaa'), 'aaa');
  assert.equal(longestPalindrome('aaax'), 'aaa');
  // assert.equal(expandFromCenter('cbbd', 1, 2), 'bb');
  assert.equal(longestPalindrome('cbbd'), 'bb');
}

test();

// solution:
// https://leetcode.com/articles/longest-substring-without-repeating-characters/
