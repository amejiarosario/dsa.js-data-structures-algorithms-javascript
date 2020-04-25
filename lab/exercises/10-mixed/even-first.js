function sortArrayByParity(A) {
  let lo = 0;
  let hi = A.length - 1;
  while (lo < hi) {
    if (A[lo] % 2 === 0) {
      lo++;
    } else {
      [A[hi], A[lo]] = [A[lo], A[hi]];
      hi--;
    }
  }
  return A;
}

module.exports = sortArrayByParity;
