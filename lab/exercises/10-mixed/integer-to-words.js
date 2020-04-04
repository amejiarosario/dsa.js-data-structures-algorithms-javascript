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

  1_000: 'Thousand', // Four Thousand

  1_000_000: 'Million', // One Million

  1_000_000_000: 'Billion', // One Billion
};

const keys = [
  // 1_000_000_000,
  // 1_000_000,
  // 1_000,
  // 100,
  10,
];

/**
 * @param {number} num
 * @return {string}
 * @pomodoro II
 */
function numberToWords(num) {
  if (num < 21) return map[num];

  let ans = [];
//   let i = 0;

//   while (num && i < keys.length) {
//     // const div = keys[i++]; // 10
//     const div = 10;
//     const reminder = num % div; // 1
//     const left = num - reminder; // 20

//     if (left && map[left] !== undefined) {
//       ans.push(map[left]);
//       num -= left;
//     }

//     num = reminder;
//   }
  ans = ans.concat(numberToWords(Math.floor(num/10) * 10));
  ans = ans.concat(numberToWords(Math.floor(num % 10)))

  return ans.join(' ');
};

// convert a number into its English representation

// 21
// Twenty One

// 1_234_567_891

console.log(process.version);

module.exports = numberToWords;
