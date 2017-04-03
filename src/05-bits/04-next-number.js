/**
 * 5.4 Next Number: Given a positive integer, print the next smallest and the next largest number that
 have the same number of 1 bits in their binary representation.

 Hints: #147, # 175, #242, #312, #339, #358, #375, #390

 * @param number
 */
function nextNumber(number) {
  // min - swap zeros and 1 until all ones are in the right side
  let min = swapper(number);

  // max - swap 0's and 1's until all ones are on the left side
  let max = swapper(number, false);

  return [min, max];
}

function swapper(number, toRight = true) {
  const result = [];
  const action = toRight ? {one: 'push', zero: 'unshift'} : {one: 'unshift', zero: 'push'};

  while(number > 0) {
    if(number & 1) {
      result[action.one](1);
    } else {
      result[action.zero](0);
    }
    number >>= 1;
  }

  return parseInt(result.join(''), 2);
}

module.exports = nextNumber;