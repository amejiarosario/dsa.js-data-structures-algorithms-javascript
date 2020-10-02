
// npx jest lab/exercises/10-mixed/document-distance.spec.js  --watch -c 'jest-all.config.js'

/**
 * Find the distance between two documents.
 *
 * Convert files into vectors of words where the value is the frequency.
 * Calculate the angle of the two vectors: cos α = v1 · v2 / |v1| * |v2|
 * @param {string} file1 - String of words separated by whitespace
 * @param {string} file2 - String of words separated by whitespace
 */
function documentDistance(file1, file2) {
  // 0. slip words
  // 1. calculate freq of each word per file
  const byCounter = (map, w) => map.set(w, 1 + (map.get(w) || 0));
  const f1 = file1.split(' ').reduce(byCounter, new Map());
  const f2 = file2.split(' ').reduce(byCounter, new Map());
  // 2. multiply each occurence and divide it
  const dotProd = (m1, m2) => [...new Set([...m1.keys(), ...m2.keys()])].reduce((sum, w) => sum + (m1.get(w) || 0) * (m2.get(w) || 0), 0);
  return Math.acos(dotProd(f1, f2) / Math.sqrt(dotProd(f1, f1) * dotProd(f2, f2)));
}

module.exports = { documentDistance };
