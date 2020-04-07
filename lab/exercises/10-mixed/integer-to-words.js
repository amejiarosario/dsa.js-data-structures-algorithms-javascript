// nodemon lab/exercises/10-mixed/integer-to-words.spec-assert.js
// npx jest lab/exercises/10-mixed/integer-to-words.spec.js --watch
const UPTO20 = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"]
const TENS = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const HUNDREDS = new Map([
  [1_000_000_000, 'Billion'],
  [1_000_000, 'Million'],
  [1_000, 'Thousand'],
  [100, 'Hundred'],
]);

/**
 * You are creating a basic number-to-speech algorithms to use at Google.
 * The first part is to convert a given number into its text representation.
 * The 2nd part, is to take that text and synthetize the voice.
 * We are going to focus on the first part for this exercise.
 *
 * Convert a positive integer into its English words representation.
 *
 * @param {number} num - The positive integer. Should be <= 2^31 - 1
 * @return {string} - The English words for the given number
 *
 * @author Adrian Mejia <adrianmejia.com>
 */
function numberToWords(num) {
  if (num < 21) return UPTO20[num];

  let ans = '';

  for (const [div, word] of HUNDREDS.entries()) {
    if (Math.floor(num/div)) {
      ans += `${ numberToWords(Math.floor(num/div)) } `;
      ans += `${ word } `;
      num %= div;
    }
  }

  if (num && num < 21) {
    ans += UPTO20[num]  + ' ';
  } else {
    if (Math.floor(num/10)) ans += `${ TENS[Math.floor(num/10)] } `;
    if (Math.floor(num % 10)) ans += `${ UPTO20[Math.floor(num % 10)] } `;
  }

  return ans.trim();
};

module.exports = numberToWords;
