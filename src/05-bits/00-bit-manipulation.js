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
 * Set bit to either 1 or 0
 * @param n number
 * @param i index
 * @param b bit
 * @returns {number} new number with a given bit set/cleared
 */
function updateBit(n, i, b) {
  const mask = ~(1 << i);
  return (n & mask) | (b << i);
}

module.exports = {
  getBit,
  setBit,
  clearBit,
  updateBit
};