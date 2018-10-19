/**
 * get bit on given index
 * @param n number
 * @param i index
 * @returns {number} either 1 or 0
 */
function getBit(n, i) {
  return (n & (1 << i)) > 0 ? 1 : 0;
}

/**
 * set bit to 1 on given index
 * @param n number
 * @param i index
 * @returns {number} new number with a given bit set
 */
function setBit(n, i) {
  return n | (1 << i);
}

/**
 * set bit to 0 on given index
 * @param n number
 * @param i index
 * @returns {number} new number with a given bit cleared
 */
function clearBit(n, i) {
  return n & ~(1 << i);
}

/**
 * Set/clear bit at a given index
 * @param n number
 * @param i index
 * @param b bit
 * @returns {number} new number with a given bit set/cleared
 */
function updateBit(n, i, b) {
  return (b > 0) ? setBit(n, i) : clearBit(n, i);
}

/**
 * Set bit to either 1 or 0
 *
 * It first clear the bit with a mask and then set it to whatever b is.
 *
 * @param n number
 * @param i index
 * @param b bit either 0 or 1. If bigger than 1 value will overflow
 * @returns {number} new number with a given bit set/cleared
 */
function updateBit2(n, i, b) {
  const mask = ~(1 << i);
  return (n & mask) | (b << i);
}

/**
 * Set number to 1 from start (inclusively) to end (exclusively)
 * @param n number
 * @param start
 * @param end
 * @returns {number}
 */
function setBitsRange(n, start = 0, end = 32) {
  if(!(end - start) || start > end || start < 0) { return n; }
  let mask = (~0 >>> (32 - (end - start)));
  if(end - start === 32) { return mask; }
  mask <<= start;
  return n | mask;
}

module.exports = {
  getBit,
  setBit,
  clearBit,
  updateBit,
  setBitsRange
};