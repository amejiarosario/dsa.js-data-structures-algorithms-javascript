/* eslint-disable no-bitwise, no-iterator, no-restricted-syntax */
const LinkedList = require('../linked-lists/linked-list');
const { nextPrime } = require('./primes');

/**
 * The Map object holds key-value pairs.
 * Any value (both objects and primitive values) may be used as either a key or a value.
 *
 * Features:
 * - HashMap offers avg. 0(1) lookup, insertion and deletion.
 * - Keys and values are ordered by their insertion order (like Java's LinkedHashMap)
 * - It contains only unique key.
 * - It may have one null key and multiple null values.
 */
class HashMap {
  /**
   * Initialize array that holds the values.
   * @param {number} initialCapacity initial size of the array (should be a prime)
   * @param {number} loadFactor if set, the Map will automatically
   *  rehash when the load factor threshold is met
   */
  constructor(initialCapacity = 19, loadFactor = 0.75) {
    this.initialCapacity = initialCapacity;
    this.loadFactor = loadFactor;
    this.reset();
  }

  reset(
    buckets = new Array(this.initialCapacity),
    size = 0,
    collisions = 0,
    keysTrackerArray = [],
    keysTrackerIndex = 0,
  ) {
    this.buckets = buckets;
    this.size = size;
    this.collisions = collisions;
    this.keysTrackerArray = keysTrackerArray;
    this.keysTrackerIndex = keysTrackerIndex;
  }

  /**
   * Polynomial hash codes are used to hash String typed keys.
   * It uses FVN-1a hashing algorithm for 32 bits
   * @see https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function
   * @param {any} key
   * @return {integer} bucket index
   */
  hashFunction(key) {
    const str = String(key);
    let hash = 2166136261; // FNV_offset_basis (32 bit)
    for (let i = 0; i < str.length; i += 1) {
      hash ^= str.codePointAt(i); // XOR
      hash *= 16777619; // 32 bit FNV_prime
    }
    return (hash >>> 0) % this.buckets.length;
  }

  /**
   * Find an entry inside a bucket.
   *
   * The bucket is an array of LinkedList.
   * Entries are each of the nodes in the linked list.
   *
   * Avg. Runtime: O(1)
   * If there are many collisions it could be O(n).
   *
   * @param {any} key
   * @param {function} callback (optional) operation to
   *  perform once the entry has been found
   * @returns {any} entry (LinkedList's node's value)
   */
  getEntry(key, callback = () => {}) {
    const index = this.hashFunction(key);
    const bucket = this.buckets[index] || new LinkedList();
    return bucket.find(({ value: entry }) => {
      if (key === entry.key) {
        callback(entry);
        return entry;
      }
      return undefined;
    });
  }

  /**
   * Insert a key/value pair into the hash map.
   * If the key is already there replaces its content.
   * Avg. Runtime: O(1)
   * In the case a rehash is needed O(n).
   * @param {any} key
   * @param {any} value
   * @returns {HashMap} Return the Map object to allow chaining
   */
  set(key, value) {
    const index = this.hashFunction(key);
    this.buckets[index] = this.buckets[index] || new LinkedList();
    const bucket = this.buckets[index];

    const found = this.getEntry(key, (entry) => {
      entry.value = value; // update value if key already exists
    });

    if (!found) { // add key/value if it doesn't find the key
      bucket.push({ key, value, order: this.keysTrackerIndex });
      this.keysTrackerArray[this.keysTrackerIndex] = key;
      this.keysTrackerIndex += 1;
      this.size += 1;
      if (bucket.size > 1) { this.collisions += 1; }
      if (this.isBeyondloadFactor()) { this.rehash(); }
    }
    return this;
  }

  /**
   * Gets the value out of the hash map
   *
   * @param {any} key
   * @returns {any} value associated to the key, or undefined if there is none.
   */
  get(key) {
    const bucket = this.getEntry(key);
    return bucket && bucket.value;
  }

  /**
   * Search for key and return true if it was found
   * @param {any} key
   * @returns {boolean} indicating whether an element
   *  with the specified key exists or not.
   */
  has(key) {
    const bucket = this.getEntry(key);
    return bucket !== undefined;
  }

  /**
   * Removes the specified element from a Map object.
   * @param {*} key
   * @returns {boolean} true if an element in the Map object existed
   *  and has been removed, or false if the element did not exist.
   */
  delete(key) {
    const index = this.hashFunction(key);
    const bucket = this.buckets[index];

    if (!bucket || bucket.size === 0) {
      return false;
    }

    return !!bucket.remove((node) => {
      if (key === node.value.key) {
        delete this.keysTrackerArray[node.value.order];
        this.size -= 1;
        return true;
      }
      return undefined;
    });
  }

  /**
   * Load factor - measure how full the Map is.
   * It's ratio between items on the map and total size of buckets
   */
  getLoadFactor() {
    return this.size / this.buckets.length;
  }

  /**
   * Check if a rehash is due
   */
  isBeyondloadFactor() {
    return this.getLoadFactor() > this.loadFactor;
  }

  /**
   * Rehash means to create a new Map with a new (higher)
   *  capacity with the purpose of outgrow collisions.
   * @param {integer} newBucketSize new bucket size by default
   *  is the 2x the amount of data or bucket size.
   */
  rehash(newBucketSize = Math.max(this.size, this.buckets.length) * 2) {
    const newCapacity = nextPrime(newBucketSize);
    const newMap = new HashMap(newCapacity);

    for (const key of this.keys()) {
      newMap.set(key, this.get(key));
    }

    const newArrayKeys = Array.from(newMap.keys());

    this.reset(
      newMap.buckets,
      newMap.size,
      newMap.collisions,
      newArrayKeys,
      newArrayKeys.length,
    );
  }

  /**
   * Keys for each element in the Map object in insertion order.
   * @returns {Iterator} keys without holes (empty spaces of deleted keys)
   */
  * keys() {
    for (let index = 0; index < this.keysTrackerArray.length; index++) {
      const key = this.keysTrackerArray[index];
      if (key !== undefined) {
        yield key;
      }
    }
  }

  /**
   * Values for each element in the Map object in insertion order.
   * @returns {Iterator} values without holes (empty spaces of deleted values)
   */
  * values() {
    for (const key of this.keys()) {
      yield this.get(key);
    }
  }

  /**
   * Contains the [key, value] pairs for each element in the Map object in insertion order.
   * @returns {Iterator}
   */
  * entries() {
    for (const key of this.keys()) {
      yield [key, this.get(key)];
    }
  }

  /**
   * the same function object as the initial value of the `entries` method.
   * Contains the [key, value] pairs for each element in the Map.
   */
  * [Symbol.iterator]() {
    yield* this.entries();
  }

  /**
   * @returns {integer} number of elements in the hashmap
   */
  get length() {
    return this.size;
  }
}

// Aliases
HashMap.prototype.containsKey = HashMap.prototype.has;

module.exports = HashMap;
