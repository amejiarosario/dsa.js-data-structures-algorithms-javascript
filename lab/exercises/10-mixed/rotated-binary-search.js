function search(array, target, lo = 0, hi = array.length - 1) {
  if (!array.length) return -1;
  if (lo > hi) { return -1; }

  const m = lo + Math.floor((hi - lo) / 2);
  const M = array[m];
  const L = array[lo];
  const R = array[hi];

  if (M === target) { return m; }
  if (
    (R > L && target > M) // sorted array with no rotation
    || (R > M && (target > M && target <= R)) // sorted array with pivot on M or left
    || (M > R && (target > M || target < L)) // sorted array with pivot to right of M
  ) {
    // go right
    return search(array, target, m + 1, hi);
  }
  // go left
  return search(array, target, lo, m - 1);
}

module.exports = search;
