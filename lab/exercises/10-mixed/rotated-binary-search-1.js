/**
 * Recursive binary search
 * @param {*} array
 * @param {*} target
 * @param {*} l
 * @param {*} r
 */
function search(array, target, l = 0, r = array.length - 1) {
  if (!array.length) return -1;

  const m = l + Math.floor((r - l) / 2);

  if (array[m] === target) { return m; }
  if (r === l || m < 0) { return -1; }

  if (target > array[m]) {
    // go right
    return search(array, target, m + 1, r);
  }
  // go left
  return search(array, target, l, m - 1);
}

module.exports = search;
