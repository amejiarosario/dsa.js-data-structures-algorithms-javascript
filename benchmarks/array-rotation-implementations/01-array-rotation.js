// brute force: O(nd) | O(1)
function rotLeft(a, d) {
  for (let i = 0; i < d; i++) { // O(d)
    a.push(a.shift()); // O(n), shift O(n)
  }
  return a;
}

module.exports = rotLeft;
