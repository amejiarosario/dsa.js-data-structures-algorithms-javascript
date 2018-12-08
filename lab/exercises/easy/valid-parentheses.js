// linear with stack O(n)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];

  // opening = stack.push
  for(let i = 0; i < s.length; i++) {
      const c = s[i];
      if (isOpening(c)) {
          stack.push(c);
      } else {
          const last = stack[stack.length - 1];
          if (matching(last) !== c) {
              // closing = peek if last is the same type, if not return false
              return false;
          }
          // closing = stack.pop
          stack.pop();
      }
  };

  return !stack.length;
};

const parentheses = {
  '(': ')',
  '[': ']',
  '{': '}',
}

function isOpening(c) {
  return !!parentheses[c];
}

function matching(c) {
  return parentheses[c];
}

const assert = require('assert');

function test() {
  // assert.equal(isValid(), true);
  assert.equal(isValid(''), true);
  assert.equal(isValid('['), false);
  assert.equal(isValid('()'), true);
  assert.equal(isValid('(]'), false);
  assert.equal(isValid('()[]{}'), true);
  assert.equal(isValid('([)]'), false);
  assert.equal(isValid('(('), false);
  assert.equal(isValid('([{}])'), true);
}

test();
