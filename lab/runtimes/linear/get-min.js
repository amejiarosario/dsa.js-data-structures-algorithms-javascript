/**
 * Get the smallest number on an array of numbers
 * @param {Array} n array of numbers
 * @example
 *    getMin([3, 2, 9]) => 2
 */
function getMin2(n) {
  const array = Array.from(n);
  let min;
  array.forEach((element) => {
    if (min === undefined || element < min) {
      min = element;
    }
  });
  return min;
}

/**
 * Get the smallest number on an array of numbers
 * @param {Array} array array of numbers
 * @example
 *    getMin([3, 2, 9]) => 2
 */
function getMin(array) {
  let min;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (min === undefined || element < min) {
      min = element;
    }
  }
  return min;
}
