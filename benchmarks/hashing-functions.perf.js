// nodemon benchmarks/hashing-functions.perf.js
/* eslint-disable */
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const Stats = require('./stats');

const keys = [
  '',
  0,
  'aa',
  'stop',
  'pots',
  '@',
  '#!',
  'Ca',
  'DB',
  'polygenelubricants',
  'aoffckzdaoffckzdatafwjsh',
  'aoffckzdaoffckzdbhlijevx',
  'creamwove',
  'quists',
  'costarring',
  Math.PI,
  Number.MAX_VALUE,
  function a() {return;},
  { a:1, 'max-d': 'test' },
  { b:2 },
  Array(100).fill('1').join(''),
];

let hashCodes = [];

// const primes = [7, 97, 997, 9973, 23251, 114451];
// const primes = [7, 47, 223, 3967, 16127, 23251, 114451, 1046527];

// Centered triangular primes (3n**2 + 3n + 2) / 2.
const primes = [19, 31, 109, 199, 409, 571, 631, 829, 1489, 1999, 2341, 2971, 3529, 4621];

const MAX = 109; // bucket size

// add tests
suite
// .add('hashCode31Shifting32bit', function() {
//   runner(hashCode31Shifting32bit);
// })
// .add('hashCode524287Shifting32bitSafeMod', function() {
//   runner(hashCode524287Shifting32bitSafeMod);
// })
// .add('hashCode524287Shifting32bitSafeModBefore', function() {
//   runner(hashCode524287Shifting32bitSafeModBefore);
// })
// .add('hashCode3Shifting', function() {
//   runner(hashCode3Shifting);
// })
// .add('hashFNV1a', function() {
//   runner(hashFNV1a);
// })
.add('murmurhash3_32_gc', function() {
  runner(murmurhash3_32_gc);
})
.add('HashJavaMultiplication', function() {
  runner(HashJavaMultiplication);
})
.add('hashFNV1a32bitSafeModBefore', function() {
  runner(hashFNV1a32bitSafeModBefore);
})
.add('hashFNV1a32bitSafeModAfter', function() {
  runner(hashFNV1a32bitSafeModAfter);
})
.add('hashFNV1a32bitSafeModAfterChop', function() {
  runner(hashFNV1a32bitSafeModAfterChop);
})
.add('fnv1a', function() {
  runner(fnv1a);
})
.add('hashFNV1a32bitSafeModAfterParams', function() {
  runner(hashFNV1a32bitSafeModAfterParams);
})
// .add('HashJavaShifting', function() {
//   runner(HashJavaShifting);
// })
//
// too slow 30k ops/s vs 300k-700k ops/s
//
// .add('hashCode31Shifting', function() {
//   runner(hashCode31Shifting);
// })
// .add('hashCode41Multiplication', function() {
//   runner(hashCode41Multiplication);
// })
// .add('hashCode31Multiplication', function() {
//   runner(hashCode31Multiplication);
// })

// add listeners
.on('start', () => {
  console.log('Fasten your belt...');
})
.on('cycle', function(event) {
  console.log(String(event.target));
  // console.log(`\thashCodes ${hashCodes.sort((a, b) => a - b)}`);
  console.log(`\thashCodes dups ${findDuplicates(hashCodes)}`);
  const s = new Stats(hashCodes);
  // console.log(s.describe());
  console.log(`range: [${s.min}...${s.max}]`);
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
  printSortedResults(this);
})
.on('error', function(event) {
  console.log(event.target.error);
})
// run async
.run({ 'async': true });

function printSortedResults(benchmark) {
  console.log('\n======== Results ========');
  const results = Object.values(benchmark).filter(b => b && b.name);
  const sortedResults = results.sort((a, b) => b.hz - a.hz);
  sortedResults.forEach((b) => {
    console.log(`${b.hz.toLocaleString()} ops/s with ${b.name}`);
  });
}

function runner(fn) {
  hashCodes = [];
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    hashCodes.push(fn(key));
  }
}

function findDuplicates(array) {
  const dups = new Set();
  const sortedArray = array.sort((a, b) => a - b);

  for (let index = 1; index < sortedArray.length; index++) {
    const element = sortedArray[index];
    const previous = sortedArray[index - 1];
    if (element === previous) {
      dups.add(element);
    }
  }
  return [...dups];
}

function hashCode3Shifting(key) {
  let hashValue = 0;
  const stringTypeKey = `${key}${typeof key}`;

  for (let index = 0; index < stringTypeKey.length; index++) {
    const charCode = stringTypeKey.charCodeAt(index);
    hashValue += charCode << (index * 8);
  }

  return hashValue;
}

function hashCode41Multiplication(key) {
  return Array.from(key.toString()).reduce((hash, char) => {
    return char.codePointAt() + (hash * 41);
  }, 0);
}

function hashCode31Multiplication(key) {
  return Array.from(key.toString()).reduce((hash, char) => {
    return char.codePointAt() + (hash * 31);
  }, 0);
}

function hashCode31Shifting(key) {
  return Array.from(key.toString()).reduce((hash, char) => {
    return char.codePointAt() + (hash << 5) - hash;
  }, 0);
}

function hashCode31Shifting32bit(key) {
  const str = key.toString();
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    hash = (hash<<5) - hash;
    hash = hash + str.codePointAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  // return Math.abs(hash);
  return hash;
}

// 524287
function hashCode524287Shifting32bitSafe(key) {
  const str = key.toString();
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    hash = (hash << 19) - hash;
    hash = hash + str.codePointAt(i);
    hash = hash & 0x7fffffff; // Convert to 32bit integer
  }
  // return Math.abs(hash);
  return hash;
}

function hashCode524287Shifting32bitSafeMod(key) {
  const str = key.toString();
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    hash = hash + str.codePointAt(i);
    hash = (hash << 19) - hash;
    hash = hash & 0x7fffffff; // Convert to 32bit integer
  }
  // return Math.abs(hash);
  return hash % MAX;
}

function hashCode524287Shifting32bitSafeModBefore(key) {
  const str = key.toString();
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    hash = hash + str.codePointAt(i);
    hash = (hash << 19) - hash;
    // hash = hash & 0x7fffffff; // Convert to 32bit integer
    hash = hash  % MAX;
  }
  // return Math.abs(hash);
  return hash;
}

function hashFNV1a(key) {
  const str = key.toString();
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    hash = hash ^ str.codePointAt(i); // XOR
    // issue with overflow 50855934 << 19 = -1048576
    hash = (hash << 19) - hash; // 524287 * hash
  }
  return hash;
}

function hashFNV1a32bitSafe(key) {
  const str = key.toString();
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    hash = hash ^ str.codePointAt(i); // XOR
    // issue with overflow 50855934 << 19 = -1048576
    // & 0x7fffffff keep 31bit
    hash = (hash << 19) & 0x7fffffff - hash; // 524287 * hash
  }
  return hash;
}

function hashFNV1a32bitSafeModAfterChop(key) {
  const str = key.toString();
  var hash = 0;
  for (i = 0; i < str.length; i++) {
    hash = hash ^ str.codePointAt(i); // XOR
    // issue with overflow 50855934 << 19 = -1048576, so `& 0x7fffffff` keep 31bit positive
    hash = (hash << 19) & 0x7fffffff - hash; // 524287 * hash
  }
  return hash % MAX;
}

function hashFNV1a32bitSafeModAfter(key) {
  const str = key.toString();
  var hash = 0;
  for (i = 0; i < str.length; i++) {
    hash = hash ^ str.codePointAt(i); // XOR
    // issue with overflow 50855934 << 19 = -1048576, so `>>> 0` keep 31bit positive
    hash = (hash << 19) - hash; // 524287 * hash
  }
  return (hash >>> 0) % MAX;
}

function hashFNV1a32bitSafeModBefore(key) {
  const str = key.toString();
  var hash = 0;
  for (i = 0; i < str.length; i++) {
    hash ^= str.codePointAt(i); // XOR
    hash = (hash << 19) - hash; // 524287 * hash
    hash = hash % MAX;
  }
  return hash;
}

function hashFNV1a32bitSafeModAfterParams(key) {
  const str = key.toString();
  var hash = 2166136261;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    hash ^= str.codePointAt(i); // XOR
    hash *= 16777619;
  }
  return (hash >>> 0) % MAX;
}

function HashJavaMultiplication(key) {
  const str = key.toString();
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (524287 * hash + str.codePointAt(i)) % MAX;
  }
  return hash;
}

/**
 * https://github.com/sindresorhus/fnv1a/blob/master/index.js
 * @param {*} key
 */
function fnv1a(key) {
  let hash = 2166136261;
  const string = key.toString();

	for (let i = 0; i < string.length; i++) {
		hash ^= string.codePointAt(i);

		// 32-bit FNV prime: 2**24 + 2**8 + 0x93 = 16777619
		// Using bitshift for accuracy and performance. Numbers in JS suck.
		hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
	}

	return (hash >>> 0) % MAX;
}

function HashJavaShifting(key) {
  const str = key.toString();
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 19) - hash; // 524287 * hash
    hash += str.codePointAt(i);
    hash = hash % MAX;
  }
  return hash;
}

/**
 * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
 *
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 *
 * @param {string} string ASCII only
 * @param {number} seed Positive integer only
 * @return {number} 32-bit positive integer hash
 */

function murmurhash3_32_gc(key, seed = 17) {
  var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;
  const string = key.toString();

	remainder = string.length & 3; // key.length % 4
	bytes = string.length - remainder;
	h1 = seed;
	c1 = 0xcc9e2d51;
	c2 = 0x1b873593;
	i = 0;

	while (i < bytes) {
	  	k1 =
	  	  ((string.charCodeAt(i) & 0xff)) |
	  	  ((string.charCodeAt(++i) & 0xff) << 8) |
	  	  ((string.charCodeAt(++i) & 0xff) << 16) |
	  	  ((string.charCodeAt(++i) & 0xff) << 24);
		++i;

		k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

		h1 ^= k1;
        h1 = (h1 << 13) | (h1 >>> 19);
		h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
		h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
	}

	k1 = 0;

	switch (remainder) {
		case 3: k1 ^= (string.charCodeAt(i + 2) & 0xff) << 16;
		case 2: k1 ^= (string.charCodeAt(i + 1) & 0xff) << 8;
		case 1: k1 ^= (string.charCodeAt(i) & 0xff);

		k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
		h1 ^= k1;
	}

	h1 ^= string.length;

	h1 ^= h1 >>> 16;
	h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
	h1 ^= h1 >>> 13;
	h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
	h1 ^= h1 >>> 16;

	return (h1 >>> 0) % MAX;
}

/*
Some results:

hashCode31Shifting32bit x 759,784 ops/sec ±0.54% (89 runs sampled)
hashCode524287 x 761,726 ops/sec ±0.42% (92 runs sampled)

hashCode3 x 391,452 ops/sec ±0.55% (88 runs sampled)

hashCode31 x 28,797 ops/sec ±0.57% (87 runs sampled)
hashCode31Shifting x 28,482 ops/sec ±0.85% (83 runs sampled)
hashCode41 x 23,764 ops/sec ±6.83% (77 runs sampled)

Fastest is hashCode524287,hashCode31Shifting32bit


with hashcodes

hashCode31Shifting32bit x 582,669 ops/sec ±6.72% (78 runs sampled)

        hashCodes 0,0,64,1118,2174,2174,3104,3446974,3540994,722070080,1074417128,1500524167,1758434107,2042954132,2147483648

hashCode524287Shifting32bit x 680,640 ops/sec ±0.86% (87 runs sampled)
        hashCodes 64,18350078,35127326,35651582,50855936,117440514,120586238,210763577,245891020,385351712,446168968,475004805,503316480,553648128,1284505600

hashCode41Multiplication x 27,893 ops/sec ±0.68% (87 runs sampled)
        hashCodes 64,1468,2844,2854,4074,7910614,8125574,3.556517065053352e+24,3.325152872191153e+27,3.000313600725833e+29,7.750355967319522e+35,1.51902022979367e+37,1.2388723180112171e+39,1.2388723180112171e+39,2.325529005454274e+161

hashCode31Multiplication x 28,448 ops/sec ±0.94% (87 runs sampled)
        hashCodes 64,1118,2174,2174,3104,3446974,3540994,7.167221549533951e+22,3.8216381216178624e+25,2.608985481173328e+27,2.205256818032087e+33,3.263014092084299e+34,2.015146744279022e+36,2.015146744279022e+36,2.2348285391311887e+149

hashCode31Shifting x 28,531 ops/sec ±0.50% (87 runs sampled)
        hashCodes -8589934592,-8589934592,-3572897216,-2147483648,-1074417128,64,1118,2174,2174,3104,3446974,3540994,1500524167,1758434107,2042954132

hashCode3Shifting x 386,779 ops/sec ±0.65% (86 runs sampled)
        hashCodes 1927012777,3655487572,3688991381,3688999862,3689007797,3689007827,3706145617,5414626663,7566791752,7865868062,11198827154,11505401766,12046659649,12366339893,22401821098

Fastest is hashCode524287Shifting32bit,hashCode31Shifting32bit
*/
