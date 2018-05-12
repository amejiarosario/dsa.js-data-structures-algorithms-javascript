/**
 * Hash Map data structure implementation
 * @author Adrian Mejia <me AT adrianmejia.com>
 */
class HashMap {

  /**
   * Initialize array that holds the values. Default is size 1,000
   * @param {number} size
   */
  constructor(size = 1000) {
    this.buckets = new Array(size);
    this.size = 0;
    this.collisions = 0;
  }

  /**
   * Decent hash function where each char ascii code is added with an offset depending on the possition
   * @param {any} key
   */
  hash(key) {
    let hashValue = 0;
    const stringKey = key.toString();

    for (let index = 0; index < stringKey.length; index++) {
      const charCode = stringKey.charCodeAt(index);
      hashValue += charCode << (index * 8);
    }

    return hashValue;
  }

  /**
   * Get the array index after applying the hash funtion to the given key
   * @param {any} key
   */
  _getBucketIndex(key) {
    const hashValue = this.hash(key);
    const bucketIndex = hashValue % this.buckets.length;
    return bucketIndex;
  }

  /**
   * Insert a key/value pair into the hash map.
   * If the key is already there replaces its content. Return the Map object to allow chaining
   * @param {any} key
   * @param {any} value
   */
  set(key, value) {
    const {bucketIndex, entryIndex} = this._getIndexes(key);

    if(entryIndex === undefined) {
      // initialize array and save key/value
      this.buckets[bucketIndex] = this.buckets[bucketIndex] || [];
      this.buckets[bucketIndex].push({key, value});
      this.size++;
      // Optional: keep count of collisions
      if(this.buckets[bucketIndex].length > 1) { this.collisions++; }
    } else {
      // override existing value
      this.buckets[bucketIndex][entryIndex].value = value;
    }

    return this;
  }

  /**
   * Gets the value out of the hash map
   * Returns the value associated to the key, or undefined if there is none.
   * @param {any} key
   */
  get(key) {
    const {bucketIndex, entryIndex} = this._getIndexes(key);

    if(entryIndex === undefined) {
      return;
    }

    return this.buckets[bucketIndex][entryIndex].value;
  }

  /**
   * Search for key and return true if it was found
   * @param {any} key
   */
  has(key) {
    return !!this.get(key);
  }

  /**
   * Search for a key in the map. It returns it's internal array indexes.
   * Returns bucketIndex and the internal array index
   * @param {any} key
   */
  _getIndexes(key) {
    const bucketIndex = this._getBucketIndex(key);
    const values = this.buckets[bucketIndex] || [];

    for (let entryIndex = 0; entryIndex < values.length; entryIndex++) {
      const entry = values[entryIndex];
      if(entry.key === key) {
        return {bucketIndex, entryIndex};
      }
    }

    return {bucketIndex};
  }

  /**
   * Returns true if an element in the Map object existed and has been removed, or false if the element does not exist.
   * @param {any} key
   */
  delete(key) {
    const {bucketIndex, entryIndex} = this._getIndexes(key);

    if(entryIndex === undefined) {
      return false;
    }

    this.buckets[bucketIndex].splice(entryIndex, 1);
    this.size--;

    return true;
  }
}

// Usage:
const hashMap = new HashMap();
// const hashMap = new HashMap(1);
// const hashMap = new Map();

const assert = require('assert');
assert.equal(hashMap.size, 0);
hashMap.set('cat', 2);
assert.equal(hashMap.size, 1);
hashMap.set('rat', 7);
hashMap.set('dog', 1);
hashMap.set('art', 0);
assert.equal(hashMap.size, 4);

assert.equal(hashMap.get('cat'), 2);
assert.equal(hashMap.get('rat'), 7);
assert.equal(hashMap.get('dog'), 1);

assert.equal(hashMap.has('rap'), false);
assert.equal(hashMap.delete('rap'), false);

assert.equal(hashMap.has('rat'), true);
assert.equal(hashMap.delete('rat'), true);
assert.equal(hashMap.has('rat'), false);
assert.equal(hashMap.size, 3);

// set override
assert.equal(hashMap.get('art'), 0);
hashMap.set('art', 2);
assert.equal(hashMap.get('art'), 2);
assert.equal(hashMap.size, 3);

// internal structure
console.log(hashMap.collisions);
console.log(hashMap.buckets);