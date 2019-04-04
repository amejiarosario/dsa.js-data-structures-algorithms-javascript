/**
 * Naïve HashMap implementation
 *
 * Hash function uses the length of the string (very bad)
 * Just for illustration purposes
 */
class HashMap {
  /**
   * Initialize array that holds the values. Default is size 1,000
   * @param {number} initialCapacity
   */
  constructor(initialCapacity = 2) {
    this.buckets = new Array(initialCapacity);
  }

  /**
   * Insert a key/value pair into the hash map
   * It doesn't handle collisions
   * @param {any} key
   * @param {any} value
   */
  set(key, value) {
    const index = this.getIndex(key);
    this.buckets[index] = value;
  }

  /**
   * Gets the value out of the hash map
   * @param {any} key
   */
  get(key) {
    const index = this.getIndex(key);
    return this.buckets[index];
  }

  /**
   * Very bad hash function that causes tons of collisions
   * @param {any} key
   */
  hash(key) {
    return key.toString().length;
  }

  /**
   * Get the array index after applying the hash funtion to the given key
   * @param {any} key
   */
  getIndex(key) {
    const indexHash = this.hash(key);
    const index = indexHash % this.buckets.length;
    return index;
  }
}

module.exports = HashMap;

// // Usage:
// const assert = require('assert');

// const hashMap = new HashMap();

// hashMap.set('cat', 2);
// hashMap.set('rat', 7);
// hashMap.set('dog', 1);
// hashMap.set('art', 8);

// console.log(hashMap.buckets);
// /*
//   bucket #0: <1 empty item>,
//   bucket #1: 8
// */

// assert.equal(hashMap.get('art'), 8); // this one is ok
// assert.equal(hashMap.get('cat'), 8); // got overwritten by art 😱
// assert.equal(hashMap.get('rat'), 8); // got overwritten by art 😱
// assert.equal(hashMap.get('dog'), 8); // got overwritten by art 😱
