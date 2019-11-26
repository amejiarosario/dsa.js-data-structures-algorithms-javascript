/**
 * Get the smallest number on an array of numbers
 * @param {Array} n array of numbers
 */
function getMin(n = []) {
  let min = n[0];

  n.forEach((element) => {
    if (element < min) {
      min = element;
    }
  });
  return min;
}

module.exports = getMin;
