/**
 * https://leetcode.com/submissions/detail/313704254/
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n, result = [], open = 0, close = 0, curr = '') {
  if (curr.length === n * 2) {
    result.push(curr);
  } else {
    if (open < n) {
      generateParenthesis(n, result, open + 1, close, `${curr}(`);
    }
    if (close < n) {
      generateParenthesis(n, result, open, close + 1, `${curr})`);
    }
  }

  return result;
}

module.exports = generateParenthesis;

/*
0: [""]
1: ["()"]
2: ["(())", "()()"]
3: ["((()))", "()()()", "(())()", "()(())"]
*/
