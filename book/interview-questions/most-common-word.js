// tag::description[]
/**
 * Find the most common word that is not banned.
 * @example mostCommonWord("It's blue and it's round", ['and']) // it
 * @param {string} paragraph - The text to sanitize and search on.
 * @param {string[]} banned - List of banned words (lowercase)
 * @returns {string} - The first word that is the most repeated.
 */
function mostCommonWord(paragraph, banned) {
  // end::description[]
  // tag::placeholder[]
  // write your code here...
  // end::placeholder[]
  // tag::solution[]
  const words = paragraph.toLowerCase().replace(/\W+/g, ' ').split(/\s+/);
  const b = new Set(banned);
  const map = words.reduce((m, w) => (b.has(w) ? m : m.set(w, 1 + (m.get(w) || 0))), new Map());
  const max = Math.max(...map.values());
  for (const [w, c] of map.entries()) if (c === max) return w;
  return '';
  // end::solution[]
  // tag::description[]
}
// end::description[]


// tag::explicit[]
function mostCommonWordExplicit(paragraph, banned) {
  const words = paragraph
    .toLowerCase()
    .replace(/\W+/g, ' ')
    .split(/\s+/);
  const exclude = new Set(banned);

  const wordsCount = words.reduce((map, word) => {
    if (exclude.has(word)) return map;
    const count = map.get(word) || 0;
    return map.set(word, 1 + count);
  }, new Map());

  const max = Math.max(...wordsCount.values());

  for (const [word, count] of wordsCount.entries()) {
    if (count === max) {
      return word;
    }
  }
  return '';
}
// end::explicit[]

module.exports = { mostCommonWord, mostCommonWordExplicit };
