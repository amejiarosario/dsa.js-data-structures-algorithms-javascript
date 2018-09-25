const assert = require('assert');

/**
 *
 * @param {*} key
 */
function hashFunction(key, size = 10) {
  const primeNumber = 1327144003n; // 2 ** 77232917 - 1

  const hashCode = Array.from(key.toString()).reduce((hash, char) => {
    return (hash * primeNumber + BigInt(char.codePointAt(0))) % BigInt(size);
  }, 0n);

  return parseInt(hashCode, 10);
}

// function hashCodeJava(key) {
//   let h = 0;
//   const value = key.toString();
//   const length = value.length >> 1;

//   for (let i = 0; i < length; i++) {
//     h = 31 * h + value.codePointAt(i);
//   }
//   return h;
// }

function printHash(key) {
  return { s: key, hashFn: hashFunction(key) };
}

// similar ending
// console.table(['00', '10', '20', '30', '40', '50', '60', '70', '80', '90'].map(printHash));
// similar start
// console.table(['10', '11', '12', '13', '14', '15', '16', '17', '18', '19'].map(printHash));

// console.table(['@', '#', '#!', 'stop', 'pots', 'Ca', 'DB', 'polygenelubricants', 'Pneumonoultramicroscopicsilicovolcanoconiosis'].map(printHash));

const size = 5100;
console.log(printHash(Array(size).fill('😁').join('')).hashFn);
console.log(printHash(Array(size).fill('1').join('')).hashFn);
console.log(printHash(Array(size).fill('A').join('')).hashFn);


// all different
// console.table(['cat', 'dog', 'rat', 'art', 10, '10', {a:1}, '😸', '🐶', '😸🐶', '🐶😸'].map(printHash));
// console.log(hashFunction(Array(1500).fill('😁').join('')));


// function test(){
//   return 1n + 2n;
// }

// test();


// hashCode(10); //=> 97
// hashCode('10'); //=> 97

// assert.notEqual(hashCode(10), hashCode('10'), 'Hash code should be different with different types');
// assert.notEqual(hashCode('10string'), hashCode('10'), 'Hash code should be different with different types');

// hashCode(10) === hashCode('10'); //=> false
// hashCode('10') === hashCode('10string'); //=> false
// hashCode('art') === hashCode('rat'); //=> false
// hashCode('😄') === hashCode('😄'); //=> true
// hashCode('😄') === hashCode('😸'); //=> false
