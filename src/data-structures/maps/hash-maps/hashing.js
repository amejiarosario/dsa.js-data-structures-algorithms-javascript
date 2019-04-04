/* eslint-disable */

// tag::naiveHashCode[]
/**
 * Naïve implementation of a non-cryptographic hashing function
 * @param {any} key to be converted to a positive integer
 * @returns {integer} hash code (numeric representation of the key)
 */
function hashCodeNaive(key) {
  return Array.from(key.toString()).reduce((hashCode, char) => {
    return hashCode + char.codePointAt(0);
  }, 0);
}
// end::naiveHashCode[]

/* Hash Code examples
// tag::naiveHashCodeExamples[]
hashCode('cat'); //=> 312 (c=99 + a=97 + t=116)
hashCode('dog'); //=> 314 (d=100 + o=111 + g=103)
hashCode('rat'); //=> 327 (r=114 + a=97 + t=116)
hashCode('art'); //=> 327 (a=97 + r=114 + t=116)
hashCode(10); //=> 97 ('1'=49 + '0'=48)
// end::naiveHashCodeExamples[]
*/

// tag::hashCodeOffset[]
/**
 * Calculates hash code that maps a key (value) to an integer (unbounded).
 * It uses a 20 bit offset to avoid Unicode value overlaps
 * @param {any} key to be converted to a positive integer
 * @returns {BigInt} returns big integer (unbounded) that maps to the key
 */
function hashCode(key) {
  const array = Array.from(`${key}${typeof key}`);
  return array.reduce((hashCode, char, position) => {
    return hashCode + BigInt(char.codePointAt(0)) * (2n ** (BigInt(position) * 20n));
  }, 0n);
}
// end::hashCodeOffset[]

/*
// tag::hashCodeOffsetExample[]
hashCode('art') //↪️ 150534821962845809557083360656040988391557528813665n
hashCode(10) === hashCode('10'); //↪️ false
hashCode('10') === hashCode('10string'); //↪️ false
hashCode('art') === hashCode('rat'); //↪️ false
hashCode('😄') === hashCode('😄'); //↪️ true
hashCode('😄') === hashCode('😸'); //↪️ false
// end::hashCodeOffsetExample[]
*/


// ---- Experiments -----

const primes = [31n, 33n, 37n, 39n, 41n, 101n, 8191n, 131071n, 524287n, 6700417n, 1327144003n, 9007199254740881n];

function doubleToLongBits(number) {
  const buffer = new ArrayBuffer(8); // 8 bytes for float64
  const dataView = new DataView(buffer);
  dataView.setFloat64(0, number); // set as float64
  return dataView.getBigInt64(0); // read as long int (BigInt)
}

function hashNumber(number) {
  const bigInt = doubleToLongBits(number);
  return bigInt > 0 ? bigInt : ((2n ** 63n) + (bigInt * -1n));
}

/**
 * Polynomial hash codes
 * @param {any} key
 */
function hashString(key) {
  return Array.from(key.toString()).reduce((hash, char) => {
    return (hash * 33n) + BigInt(char.codePointAt(0));
  }, 0n);
}

function hashCode2(key) {
  if (typeof(key) === 'number') {
    return hashNumber(key);
  }
  return 2n ** 64n + hashString(key);
}

function hashIndex({key, size = 16} = {}) {
  // return hashCode(key) % BigInt(size); // modulo size

  // Multiply-Add-Divide (MAD) compression
  const p = 524287n; // prime number larger than size.
  const a = 8191n; // random [1..p-1]
  const b = 0n; // random [0..p-1]
  return ( (a * hashCode2(key) + b) % p ) % BigInt(size);
}

module.exports = {
  hashCode: hashCode2,
  hashIndex
}

/**

function prepareToPrint(key){
  return { key: key.substring ? `${key.substring(0, 10)} (${key.length})` : key, hashCode: hashCode(key), hashIndex10: hashIndex({key, size: 10}) };
}

const res = [-2, -1, 0.5, 1, 2, 3, Math.PI, Number.MAX_VALUE, 2.7976931348623157e+308, 17.976931348623156e+400,
  '😁',
  'hola',
  '@', '#', '#!', 'stop', 'pots', 'Ca', 'DB', 'polygenelubricants',
  'Aa',
  'BB',
  'aoffckzdaoffckzdatafwjsh',
  'aoffckzdaoffckzdbhlijevx',
  Array(50).fill('1').join(''),
  // types
  {a:1},
  1n,
  1,
  '1',
  function a() {return;}
  ]
  .map(prepareToPrint);

console.table(res);

const res1 = [
    Array(1500).fill('1').join(''),
    Array(1500).fill('😁').join(''),
    // Array(1500).fill('z').join(''),
  ]
  .map(prepareToPrint);

  console.log(res1);

// */
