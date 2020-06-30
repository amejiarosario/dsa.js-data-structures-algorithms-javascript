// additional space: O(n) | O(n)
function rotLeft(a, d) {
  const len = a.length;
  const rot = d % len;
  const b = [];
  for (let i = 0; i < len; i++) { // O(n)
    b[i] = a[(rot + i) % len]; // O(1)
  }
  return b;
}

module.exports = rotLeft;
