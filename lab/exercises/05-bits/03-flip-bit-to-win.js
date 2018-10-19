/**
 * 5.3 Flip Bit to Win: You have an integer and you can flip exactly one bit from a 0 to a 1. Write code to find the length of the longest sequence of 1syou could create.

 EXAMPLE

 Input: 1775 (or: 11011101111)
 Output: 8

 * @param number
 */
function flipBitToWin(number) {
  // keep two counters for previous and current ones
  let previous = 0;
  let current = 0;
  let max = 0;

  while(number > 0) {
    if(number & 1) {
      current++;
    } else {
      if(previous > 0) {
        max = Math.max(current + previous + 1, max);
      }

      previous = current;
      current = 0;
    }

    number >>= 1;
  }

  if(previous > 0) {
    max = Math.max(current + previous + 1, max);
  } else {
    max = Math.max(current, max);
  }

  return max;
}

module.exports = flipBitToWin;

/*

Brute force
  1. number to binary string
  2. iterate to find 0's
  3. change the 0 to 1 and count contiguous 1's
  4. flip back to zero and repeat until last bit
  5. print max contiguous 1's

O (x^2), where x is the number of bits

Hints: #159, #226, #314, #352

  # Start with a brute force solution. Can you try all possibilities?
  # Flipping a 0 to a 1 can merge two sequences of 1s-but only if the two sequences are separated by only one O.
  # Each sequence can be lengthened by merging it with an adjacent sequence (if any) or just flipping the immediate neighboring zero.You just need to find the best choice.
  # Try to do it in linear time, a single pass, and 0 (1) space.

 */