/* eslint-disable */

/**
 * https://leetcode.com/articles/regular-expression-matching/
 * Pattern:
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let si = s.length - 1;

  for(let pi = p.length - 1; pi > 0; pi--) {
    switch(p[pi]) {
      case '.':
        if (si > 0) { si--; }
        else { return false; }
        break;
      case '*':
        const char = p[--pi];
        while(si > 0 && (char === '.' || char === s[si])) {
          si--;
        }
        break;
      default:
        if (si > 0 && p[pi] === s[si]) {
          si--;
        } else {
          return false;
        }
    }
  }

  return si <= 0;
};

const assert = require('assert');
function test() {
  assert.equal(isMatch('aa', 'aa'), true);
  assert.equal(isMatch('aa', 'a'), false);

  assert.equal(isMatch('aa', 'a.'), true);
  assert.equal(isMatch('aaa', 'a.'), false);
  assert.equal(isMatch('aaa', 'a..'), true);

  assert.equal(isMatch('', 'a*'), true);
  assert.equal(isMatch('a', 'a*'), true);
  assert.equal(isMatch('aa', 'a*'), true);
  assert.equal(isMatch('aab', 'a*'), false);
  assert.equal(isMatch('aab', 'a*b'), true);

  assert.equal(isMatch('aab', 'c*a*b'), true);
  assert.equal(isMatch('caab', 'c*a*b'), true);

  assert.equal(isMatch('abc', '.*'), true);

  assert.equal(isMatch('mississippi', 'mis*is*p*.'), false);
  assert.equal(isMatch('mississippi', 'mis*is*ip*.'), true);

  assert.equal(isMatch('ab', '.*..'), true);
  assert.equal(isMatch('abcz', '.*z'), true);
  assert.equal(isMatch('abcz', '.*x'), false);
  assert.equal(isMatch('zabc', 'z.*'), true);
  assert.equal(isMatch('zabc', 'x.*'), false);
  assert.equal(isMatch('zabcz', 'z.*z'), true);
  assert.equal(isMatch('zabcx', 'z.*z'), false);
}
test();



/////

var isMatch3 = function(s, p) {
  let pi = 0;

  for(let si = 0; si < s.length; si++) {
    switch(p[pi]) {
      case '.':
        if (pi < p.length) { pi++; }
        else { return false; }
        break;
      case '*':
        const last = p[pi - 1];
        if(last === s[si]) {
          break; // break switch
        }
        pi++; // continue to the default case
      default:
        if (pi < p.length && p[pi] === s[si]) {
          pi++;
          continue;
        } else {
          return false;
        }
    }
  }

  return true;
};

var isMatch2 = function(s, p) {
  let pi = p.length - 1;

  for(let si = s.length - 1; si > 0; si--) {
    switch(p[pi]) {
      case '.':
        if (pi > 0) { pi--; }
        else { return false; }
        break;
      case '*':
        const last = p[--pi];
        while(si > 0 && last === s[si]) {
          si--;
        }
        break;
      default:
        if (pi > 0 && p[pi] === s[si]) {
          pi--;
          continue;
        } else {
          return false;
        }
    }
  }

  return true;
};
