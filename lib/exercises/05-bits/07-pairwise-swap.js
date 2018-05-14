const bm = require('./00-bit-manipulation');

/**
 * 5.7 Pairwise Swap: Write a program to swap odd and even bits in an integer with as few instructions as possible (e.g., bit 0 and bit 1 are swapped, bit 2 and bit 3 are swapped, and so on).
 *
 * @param number
 */
function pairwiseSwap(number) {
  let swapped = number;

  for(let num = number, i = 1; num > 0; num >>= 2, i += 2) {
    swapped = bm.updateBit(swapped, i - 1, bm.getBit(num, 1));
    swapped = bm.updateBit(swapped, i, bm.getBit(num, 0));
  }

  return swapped;
}

/**
 * Shift odd numbers one place to the right and then even bits one to the left
 * @param number
 * @returns {number}
 */
function swapOddEvenBits(number) {
  return ((number & 0xaaaaaaaa) >>> 1) | ((number & 0x55555555) << 1)
}

module.exports = pairwiseSwap;