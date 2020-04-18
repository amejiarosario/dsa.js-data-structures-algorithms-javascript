function search(array, target, l = 0, r = array.length - 1) {
  if (!array.length) return -1;

  const m = l + Math.floor((r - l) / 2);
  const M = array[m];
  const L = array[l];
  const R = array[r];

  if (M === target) { return m; }
  if (l > r) { return -1; }

  if (
    (R > L && target > M) // sorted array with no rotation
    || (R > M && (target > M && target <= R)) // sorted array with pivot on M or left
    || (M > R && (target > M || target < L)) // sorted array with pivot to right of M
  ) {
    // go right
    return search(array, target, m + 1, r);
  }
  // go left
  return search(array, target, l, m - 1);
}

module.exports = search;
