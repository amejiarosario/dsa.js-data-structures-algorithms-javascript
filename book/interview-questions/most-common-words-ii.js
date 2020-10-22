/**
 * Given text and banned words,
 * return the most common words in descending order.
 * @param {string} text - The text to parse.
 * @param {number} n - The number of results.
 * @return {string[]}
 */
// tag::map[]
function mostCommonWords(text, n = 1) {
  const words = text.toLowerCase().split(/\W+/);

  const map = words
    .reduce((m, w) => m.set(w, 1 + (m.get(w) || 0)), new Map());

  return Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map((w) => w[0]);
}
// end::map[]

// tag::brute[]
function mostCommonWordsBrute(text, n = 1) {
  const words = text.toLowerCase().split(/\W+/);
  const entries = []; // array of [word, count] pairs

  for (let i = 0; i < words.length; i++) {
    if (!words[i]) continue;
    let count = 1;
    for (let j = i + 1; j < words.length; j++) {
      if (words[i] === words[j]) {
        count++;
        words[j] = null; // removed letter once it's counted.
      }
    }
    entries.push([words[i], count]);
  }

  return entries
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map((w) => w[0]);
}
// end::brute[]


module.exports = { mostCommonWords, mostCommonWordsBrute };
