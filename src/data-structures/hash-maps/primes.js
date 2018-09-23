/**
 * Odd number checker
 * Runtime: O(1)
 * @param {integer} number
 * @returns {boolean} true if is odd, otherwise false.
 */
function isOdd(number) {
  return number % 2 !== 0;
}

/**
 * Prime number tester
 * Runtime: O(n ^ 0.5)
 * @param {integer} number
 * @returns {boolean} true if number is prime, otherwise false.
 */
function isPrime(number) {
  if (number < 2) { return false; }
  const max = Math.sqrt(number);
  for (let divisor = 2; divisor <= max; divisor++) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Find the next prime of a given number
 * Runtime: ? // the gap between prime numbers is not deterministic.
 * @param {integer} number
 */
function nextPrime(number) {
  if (number < 2) { return 2; }
  let possiblePrime = isOdd(number) ? number + 2 : number + 1;

  while (!isPrime(possiblePrime)) {
    possiblePrime += 2;
  }
  return possiblePrime;
}

module.exports = {
  nextPrime,
  isPrime,
  isOdd,
};
