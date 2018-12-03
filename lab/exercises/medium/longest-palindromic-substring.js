function longestPalindrome(s) {
  if (!s) {
    return '';
  }

  let max = '';

  for (let i = 0; i < s.length; i++) {
    const s1 = expandFromCenter(s, i, i);
    const s2 = expandFromCenter(s, i, i + 1);

    max = (Math.max(s1.length, s2.length) > max.length) ? ((s1.length > s2.length) ? s1 : s2) : max;
  }

  return max;
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

  return s.substring(start, end + 1);
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
