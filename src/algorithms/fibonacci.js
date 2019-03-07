// tag::snippet[]
/**
 * Get Fibonacci number on the n-th position.
 * @param {integer} n position on the sequence
 * @returns {integer} n-th number
 */
function getFibonacci(n) {
  if (n < 2) {
    return n;
  }

  let prev = 0;
  let result = 1;

  for (let i = 1; i < n; i++) {
    const temp = result;
    result += prev;
    prev = temp;
  }

  return result;
}
// end::snippet[]

module.exports = getFibonacci;
