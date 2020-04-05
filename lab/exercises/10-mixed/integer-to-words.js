// npx jest lab/exercises/10-mixed/integer-to-words.spec.js --watch

const map = {
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
  20: 'Twenty', // Twenty One

  30: 'Thirty', // Thirty Four
  40: 'Forty',
  50: 'Fifty',
  60: 'Sixty', // Sixty Seven
  70: 'Seventy',
  80: 'Eighty',
  90: 'Ninety',
  100: 'Hundred', // One Hundred, Two Hundred

  1_000: 'Thousand', // One Thousand
  1_000_000: 'Million', // One Million
  1_000_000_000: 'Billion', // One Billion
};

const keys = [
  1_000_000_000,
  1_000_000,
  1_000,
  100,
];

/**
 * Convert a positive integer into its English representation.
 *
 * @param {number} num - The positive integer. Should be <= 2^31 - 1
 * @return {string} - The English words for the given number
 *
 * @pomodoro II
 */
function numberToWords(num) {
  if (map[num] && num < 99) return map[num];

  let ans = [];
  let i = 0;

  while (num && i < keys.length) {
    const div = keys[i++];
    if (Math.floor(num/div)) {
      ans = ans.concat(numberToWords(Math.floor(num/div)));
      ans = ans.concat(map[div]);
      num %= div;
    }
  }

  if (num) {
    ans = ans.concat(numberToWords(Math.floor(num/10) * 10));
    ans = ans.concat(numberToWords(Math.floor(num % 10)));
  }

  return ans.join(' ');
};

module.exports = numberToWords;
