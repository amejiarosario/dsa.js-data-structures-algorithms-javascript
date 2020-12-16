// tag::snippet[]
/**
 * Get Fibonacci number on the n-th position.
 * @param {integer} n position on the sequence
 * @param {Map} memo cache of previous solutions
 * @returns {integer} n-th number
 */
function fib(n, memo = new Map()) {
  if (n < 0) return 0;
  if (n < 2) return n;

  if (memo.has(n)) {
    return memo.get(n);
  }

  const result = fib(n - 1) + fib(n - 2);
  memo.set(n, result);

  return result;
}
// end::snippet[]

module.exports = fib;
