// tag::description[]
/**
 * Find the length of the longest substring without duplicates.
 * @example lenLongestSubstring('abccxyz'); // => 4 (cxyz)
 * @param {string} s - The string.
 * @returns {number} - The length of the longest unique substring.
 */
function lenLongestSubstring(s) {
  // end::description[]
  // tag::placeholder[]
  // write your code here...
  // end::placeholder[]
  // tag::solution[]
  let max = 0;
  const set = new Set();

  for (let i = 0, j = 0; j < s.length; j++) {
    while (set.has(s[j])) set.delete(s[i++]);
    set.add(s[j]);
    max = Math.max(max, set.size);
  }

  return max;
  // end::solution[]
  // tag::description[]
}
// end::description[]

module.exports = { lenLongestSubstring };
