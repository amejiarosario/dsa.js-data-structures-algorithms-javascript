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

  // singles ()()()...
  let first = '';
  for(let i = 0; i < n; i++) {
    first += p();
  }
  if(first.length > 0) { results.push(first); }

  // doubles (())(), ()(()), ...
  for(let i = 0; i < n - 1; i++) {
    let el = '';
    for(let y = 0; y < n - 1; y++) {
      if(i === y) {
        el += p(p());
      } else {
        el += p();
      }
    }
    if(el.length > 0) { results.push(el); }
  }

  // nested (()())
  if(first.length > 0 && n > 2) {
    return results.concat(parenthesis(n - 1).map((el) => p(el)));
  }

  return results;
}

function p(str = '') {
  return `(${str})`;
}

module.exports = parenthesis;