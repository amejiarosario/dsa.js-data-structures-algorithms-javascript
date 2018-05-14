/**
 * Debugger: Explain what the following code does: ( (n & (n - 1) ) == 0).
 *
 * Hints: #151, #202, #261, #302, #346, #372, #383, #398
 *
 *
 *
 * @param n
 * @returns {boolean} return true when power of 2
 *
 * @example
 *
 1 & 0 = 0

 10 & 01 = 0
 11 & 10 = 10

 100 & 011 = 0
 101 & 100 = 100
 110 & 101 = 100
 111 & 110 = 110

 1000 & 0111 = 0
 1001 & 1000 = 1000

 *
 */
function test(n) {
  return ( (n & (n - 1) ) == 0);
}

module.exports = test;