/**
 *
 * 8.9 Parens: Implement an algorithm to print all valid (i.e., properly opened and closed) combinations of n pairs of parentheses.

 EXAMPLE
 Input: 3
 Output: ()()(), ()(()), (())(), (()()), ((()))

 n
 1   ()
 2   ()(), (())
 3   ()()(), ()(()), (())(), (()()), ((()))
 4   ()()()(), ()()(()), ()(())(), (())()(), (()()())
 *
 * @param n
 * @returns {*}
 */
function parenthesis(n) {
  const results = [];
  if (n > 0) {
    for(let b = 0; b < n; b++) {
      let el = '';

      for(let a = 0; a < n; a++) {
        if(b === a && a === n - 1) {
          el = p(el);
        } else {
          el += p();
        }
      }

      if(el.length > 0) { results.push(el); }
    }
  }
  return results;
}

function p(str = '') {
  return `(${str})`;
}

module.exports = parenthesis;

const p5 = [
  '()()()()()',

  '()()()(())',
  '()()(())()',
  '()(())()()',
  '(())()()()',

  '()()((()))',
  '()((()))()',
  '((()))()()',

  '()(((())))',
  '(((())))()',

  '((((()))))',

  '()()(()())',
  '()(()())()',
  '(()())()()',

  '()()((()()))',
  '()((()()))()',
  '((()()))()()',

  '()(()()())',
  '(()()())()',
];