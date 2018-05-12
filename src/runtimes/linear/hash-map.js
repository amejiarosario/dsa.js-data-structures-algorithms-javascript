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
    this.array = new Array(size);
    this.size = 0;
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
  getIndex(key) {
    const indexHash = this.hash(key);
    const index = indexHash % this.array.length;
    return index;
  }

  /**
   * Insert a key/value pair into the hash map.
   * If the key is already there replaces its content. Return the Map object to allow chaining
   * @param {any} key
   * @param {any} value
   */
  set(key, value) {
    const index = this.getIndex(key);
    if(this.array[index]) {
      this.array[index].push({key, value});
    } else {
      this.array[index] = [{key, value}];
    }
    this.size++;
    return this;
  }

  /**
   * Gets the value out of the hash map
   * Returns the value associated to the key, or undefined if there is none.
   * @param {any} key
   */
  get(key) {
    const {hashIndex, arrayIndex} = this._getIndexes(key);

    if(arrayIndex === undefined) {
      return;
    }

    return this.array[hashIndex][arrayIndex].value;
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
   * Returns hashIndex and the internal array index
   * @param {any} key
   */
  _getIndexes(key) {
    const hashIndex = this.getIndex(key);
    const values = this.array[hashIndex] || [];

    for (let arrayIndex = 0; arrayIndex < values.length; arrayIndex++) {
      const entry = values[arrayIndex];
      if(entry.key === key) {
        return {hashIndex, arrayIndex};
      }
    }

    return {hashIndex};
  }

  /**
   * Returns true if an element in the Map object existed and has been removed, or false if the element does not exist.
   * @param {any} key
   */
  delete(key) {
    const {hashIndex, arrayIndex} = this._getIndexes(key);

    if(arrayIndex === undefined) {
      return false;
    }

    this.array[hashIndex].splice(arrayIndex, 1);
    this.size--;

    return true;
  }
}

// Usage:
const hashMap = new HashMap();
// const hashMap = new Map();

const assert = require('assert');
assert.equal(hashMap.size, 0);
hashMap.set('cat', 2);
assert.equal(hashMap.size, 1);
hashMap.set('rat', 7);
hashMap.set('dog', 1);
hashMap.set('art', 0);
assert.equal(hashMap.size, 4);

// console.log(hashMap.array);

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
// assert.equal(hashMap.get('art'), 0);
// hashMap.set('art', 2);
// assert.equal(hashMap.get('art'), 2);