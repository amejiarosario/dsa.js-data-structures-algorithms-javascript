// tag::description[]
/**
 * Rotate an array left by k number of times.
 *
 * @example
 *    rotateLeft([1,2,3], 1); // [2,3,1]
 *    rotateLeft([1,2,3,4,5], 4); // [5,1,2,3,4]
 *
 *    rotateLeft(Array(1e6).fill(1), 1e4); // <scale testing>
 *
 * @param a - The array
 * @param k - The number of times the array is rotated
 */
function rotateLeft(a, k) {
// end::description[]
// tag::solution[]
  const moves = k % a.length;
  for (let i = 0; i < moves; i++) {
    a.push(a.shift());
  }
  return a;
}
// end::solution[]

// tag::bruteForce[]
function rotateLeftBruteForce(a, k) {
  for (let i = 0; i < k; i++) {
    a.push(a.shift());
  }
  return a;
}
// end::bruteForce[]

module.exports = { rotateLeft, rotateLeftBruteForce };
