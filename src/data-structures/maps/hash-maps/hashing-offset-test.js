const assert = require('assert');

/**
 * Calculates polynomial hash code that maps a key (value) to an integer (unbounded).
 * It uses a 20 bit offset to avoid Unicode value overlaps
 * @param {any} key
 * @returns {BigInt} returns big integer (unbounded) that maps to the key
 */
function hashCode(key) {
  const array = Array.from(`${key}${typeof key}`);
  return array.reduce((hashCode, char, position) => {
    return hashCode + BigInt(char.codePointAt(0)) * (2n ** (BigInt(position) * 20n));
  }, 0n);
}

/**
 * Compression function: maps an arbitrary integer to integer in the range of [0… BUCKET_SIZE -1].
 * @param {BigInt} hashCode
 * @param {Number} size bucket size
 * @returns {Number} array index
 */
function compressToIndex(hashCode, size = 10) {
  return parseInt(hashCode % BigInt(size), 10);
}

/**
 *
 * @param {*} key
 */
function hashFunction(key, size = 10) {
  return compressToIndex(hashCode(key), size);
}


function printHash(el) {
  const code = hashCode(el);
  return { s: el, v: code.toLocaleString(), hex: code.toString(16), hashFn: compressToIndex(code) };
}

// similar ending
console.table(['00', '10', '20', '30', '40', '50', '60', '70', '80', '90'].map(printHash));
// similar start
console.table(['10', '11', '12', '13', '14', '15', '16', '17', '18', '19'].map(printHash));

console.table(['@', '#', '#!', 'stop', 'pots', 'Ca', 'DB'].map(printHash));

// all different
// console.table(['cat', 'dog', 'rat', 'art', 10, '10', {a:1}, '😸', '🐶', '😸🐶', '🐶😸'].map(printHash));
// console.log(hashCode(Array(1500).fill('😁').join('')));
// console.log(hashFunction(Array(1500).fill('😁').join('')));


// function test(){
//   return 1n + 2n;
// }

// test();


// hashCode(10); //=> 97
// hashCode('10'); //=> 97

assert.notEqual(hashCode(10), hashCode('10'), 'Hash code should be different with different types');
assert.notEqual(hashCode('10string'), hashCode('10'), 'Hash code should be different with different types');

hashCode(10) === hashCode('10'); //=> false
hashCode('10') === hashCode('10string'); //=> false
hashCode('art') === hashCode('rat'); //=> false
hashCode('😄') === hashCode('😄'); //=> true
hashCode('😄') === hashCode('😸'); //=> false
