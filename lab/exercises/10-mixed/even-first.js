function evenFirst(array) {
  let lo = 0;
  let hi = 1;
  while (hi < array.length) {
    if (array[hi] % 2 === 0) {
      [array[hi], array[lo]] = [array[lo], array[hi]];
      lo++;
    }
    hi++;
  }
  return array;
}

module.exports = evenFirst;
