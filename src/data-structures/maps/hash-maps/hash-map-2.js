/**
 * Hash Map data structure implementation
 * Hash uses string code. Doesn't support overwrite.
 */
class HashMap {
  /**
   * Initialize array that holds the values. Default is size 1,000
   * @param {number} initialCapacity
   */
  constructor(initialCapacity = 2) {
    this.buckets = new Array(initialCapacity);
    this.collisions = 0;
  }

  /**
   * insert a key/value pair into the hash map
   * @param {any} key
   * @param {any} value
   */
  set(key, value) {
    const bucketIndex = this.getIndex(key);
    if (this.buckets[bucketIndex]) {
      this.buckets[bucketIndex].push({ key, value });
      if (this.buckets[bucketIndex].length > 1) { this.collisions++; }
    } else {
      this.buckets[bucketIndex] = [{ key, value }];
    }
    return this;
  }

  /**
   * Gets the value out of the hash map
   * @param {any} key
   */
  get(key) {
    const bucketIndex = this.getIndex(key);
    for (let arrayIndex = 0; arrayIndex < this.buckets[bucketIndex].length; arrayIndex++) {
      const entry = this.buckets[bucketIndex][arrayIndex];
      if (entry.key === key) {
        return entry.value;
      }
    }
  }

  /**
   * This hash function returns the sum of the char codes.
   * Limitation same characters return the same code regardless of the order
   * @param {any} key
   */
  hash(key) {
    let hashValue = 0;
    const stringTypeKey = `${key}${typeof key}`;

    for (let index = 0; index < stringTypeKey.length; index++) {
      const charCode = stringTypeKey.charCodeAt(index);
      hashValue += charCode << (index * 8);
    }

    return hashValue;
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

// console.log('collisions: ', hashMap.collisions);
// console.log('hashMap.buckets\n', hashMap.buckets);
// /*
//   bucket #0: [ { key: 'cat', value: 2 }, { key: 'dog', value: 1 } ]
//   bucket #1: [ { key: 'rat', value: 7 }, { key: 'dog', value: 1 } ]
// */

// assert.equal(hashMap.get('art'), 8); // this one is ok
// assert.equal(hashMap.get('cat'), 2); // Good. Didn't got overwritten by art
// assert.equal(hashMap.get('rat'), 7); // Good. Didn't got overwritten by art
// assert.equal(hashMap.get('dog'), 1); // Good. Didn't got overwritten by art


// //


// const hashMapSize10 = new HashMap(10);

// hashMapSize10.set('cat', 2);
// hashMapSize10.set('rat', 7);
// hashMapSize10.set('dog', 1);
// hashMapSize10.set('art', 8);

// console.log('collisions: ', hashMapSize10.collisions);
// console.log('hashMapSize10\n', hashMapSize10.buckets);
// /*
//   bucket#0: [ { key: 'cat', value: 2 }, { key: 'art', value: 8 } ],
//   <4 empty items>,
//   bucket#5: [ { key: 'rat', value: 7 } ],
//   <1 empty item>,
//   bucket#7: [ { key: 'dog', value: 1 } ],
//   <2 empty items> ]
// */


// //


// const hashMapSize100 = new HashMap(100);

// hashMapSize100.set('cat', 2);
// hashMapSize100.set('rat', 7);
// hashMapSize100.set('dog', 1);
// hashMapSize100.set('art', 8);

// console.log('collisions: ', hashMapSize100.collisions);
// console.log('hashMapSize100\n', hashMapSize100.buckets);
