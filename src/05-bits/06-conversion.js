/**
 *
 * 5.6 Conversion: Write a function to determine the number of bits you would need to flip to convert integer A to integer B.

 EXAMPLE
 Input: 29 (or: 111101), 15 (or: 101111)

 Output: 2

 Hints: #336, #369
 *
 * @param number1
 * @param number2
 */
function conversion(number1, number2) {
  return countOnes(number1 ^ number2);
}

function countOnes(num) {
  let ones = 0;

  while(num > 0) {
    if(num & 1) {
      ones++;
    }
    num >>= 1;
  }

  return ones;
}

module.exports = conversion;


/*
xor




 */