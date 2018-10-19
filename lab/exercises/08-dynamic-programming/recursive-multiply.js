/**
 * 8.5 Recursive Multiply: Write a recursive function to multiply two positive integers without using the * operator (or / operator). You can use addition, subtraction, and bit shifting, but you should minimize the number of those operations.
 *
 * O(b), BUT there is a better solution that could do O(log Math.min(a, b))
 *
 * @param a
 * @param b
 * @returns {*}
 */
function recursiveMultiply(a, b) {
  if(!b) return 0;
  return a + recursiveMultiply(a, b-1);
}

module.exports = recursiveMultiply;