// modulus for rotations: O(n^2) | O(1)
function rotLeft(a, d) {
  const len = a.length;
  const rot = d % len;
  for (let i = 0; i < rot; i++) { // O(n^2)
    a.push(a.shift()); // O(n)
  }
  return a;
}

module.exports = rotLeft;
