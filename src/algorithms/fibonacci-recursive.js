// tag::snippet[]
/**
 * Get Fibonacci number on the n-th position.
 * @param {integer} n position on the sequence
 * @returns {integer} n-th number
 */
function fib(n) {
  if (n < 0) return 0;
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}
// end::snippet[]

module.exports = fib;
