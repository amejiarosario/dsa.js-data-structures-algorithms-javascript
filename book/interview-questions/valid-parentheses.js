// tag::description[]
/**
 * Validate if the parentheses are opened and closed in the right order.
 *
 * @examples
 *  isParenthesesValid('(){}[]'); // true
 *  isParenthesesValid('([{}])'); // true
 *  isParenthesesValid('([{)}]'); // false
 *
 * @param {string} string - The string
 * @returns {boolean} - True if valid, false otherwise.
 */
function isParenthesesValid(string) {
  // end::description[]
  // tag::solution[]
  const map = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
  const stack = [];

  for (const c of string) {
    if (map.has(c)) stack.push(map.get(c));
    else if (c !== stack.pop()) return false;
  }

  return stack.length === 0;
}
// end::solution[]

module.exports = { isParenthesesValid };
