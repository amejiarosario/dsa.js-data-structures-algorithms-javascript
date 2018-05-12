/**
 * Hash Map data structure implementation
 * @author Adrian Mejia <me AT adrianmejia.com>
 */
class HashMap {

  /**
   * Initialize array that holds the values. Default is size 1,000
   * @param {number} initialCapacity initial size of the array
   * @param {number} loadFactor if set, the Map will automatically rehash when the load factor threshold is met
   */
  constructor(initialCapacity = 1000, loadFactor = 0) {
    this.buckets = new Array(initialCapacity);
    this.loadFactor = loadFactor;
    this.size = 0;
    this.collisions = 0;
    this.keys = [];
  }

  /**
   * Decent hash function where each char ascii code is added with an offset depending on the possition
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
      const keyIndex = this.keys.push({content: key}) - 1; // keep track of the key index
      this.buckets[bucketIndex] = this.buckets[bucketIndex] || [];
      this.buckets[bucketIndex].push({key, value, keyIndex});
      this.size++;
      // Optional: keep count of collisions
      if(this.buckets[bucketIndex].length > 1) { this.collisions++; }
    } else {
      // override existing value
      this.buckets[bucketIndex][entryIndex].value = value;
    }

    // check if a rehash is due
    if(this.loadFactor > 0 && this.getLoadFactor() > this.loadFactor) {
      this.rehash(this.buckets.length * 2);
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
    const {bucketIndex, entryIndex, keyIndex} = this._getIndexes(key);

    if(entryIndex === undefined) {
      return false;
    }

    this.buckets[bucketIndex].splice(entryIndex, 1);
    delete this.keys[keyIndex];
    this.size--;

    return true;
  }

  /**
   * Rehash means to create a new Map with a new (higher) capacity with the purpose of outgrow collisions.
   * @param {Number} newCapacity
   */
  rehash(newCapacity) {
    const newMap = new HashMap(newCapacity);

    this.keys.forEach(key => {
      if(key) {
        newMap.set(key.content, this.get(key.content));
      }
    });

    // update bucket
    this.buckets = newMap.buckets;
    this.collisions = newMap.collisions;
    // Optional: both `keys` has the same content except that the new one doesn't have empty spaces from deletions
    this.keys = newMap.keys;
  }

  /**
   * Load factor - measure how full the Map is. It's ratio between items on the map and total size of buckets
   */
  getLoadFactor() {
    return this.size / this.buckets.length;
  }
}

// Usage:
// const hashMap = new HashMap();
const hashMap = new HashMap(1);
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

// undefined
hashMap.set(undefined, 'undefined type');
hashMap.set('undefined', 'string type');

assert.equal(hashMap.get(undefined), 'undefined type');
assert.equal(hashMap.get('undefined'), 'string type');
assert.equal(hashMap.size, 5);

// ----
// Internal structure tests
// ----
console.log(hashMap.collisions);
console.log(hashMap.buckets);

assert.equal(hashMap.getLoadFactor(), 5);

// rehash
hashMap.rehash(1000);
console.log(hashMap.collisions);
console.log(hashMap.buckets);
assert.equal(hashMap.getLoadFactor(), 5/1000);

// automatic rehashing based on loadFactor
const dynamicMap = new HashMap(2, 0.75);

dynamicMap.set('uno', 1);
assert.equal(dynamicMap.buckets.length, 2);
assert.equal(dynamicMap.getLoadFactor(), 1/2);
console.log(hashMap.collisions);

dynamicMap.set('dos', 2);
assert.equal(dynamicMap.buckets.length, 4); // <-- rehash took place
assert.equal(dynamicMap.getLoadFactor(), 1/2);
console.log(hashMap.collisions);

dynamicMap.set('tres', 3);
assert.equal(dynamicMap.buckets.length, 4); // <-- no rehash
assert.equal(dynamicMap.getLoadFactor(), 3/4);
console.log(hashMap.collisions);

dynamicMap.set('cuatro', 4);
assert.equal(dynamicMap.buckets.length, 8); // <-- rehash took place
assert.equal(dynamicMap.getLoadFactor(), 4/8);
console.log(hashMap.collisions);

dynamicMap.set('cinco', 5);
assert.equal(dynamicMap.buckets.length, 8); // <-- no rehash
assert.equal(dynamicMap.getLoadFactor(), 5/8);
console.log(hashMap.collisions);