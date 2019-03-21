/* eslint-disable no-bitwise, no-iterator, no-restricted-syntax */
const LinkedList = require('../../linked-lists/linked-list');
const { nextPrime } = require('./primes');

/**
 * The map holds key-value pairs.
 * Any value (both objects and primitive values) may be used as either a key or a value.
 *
 * Features:
 * - HashMap offers avg. 0(1) lookup, insertion and deletion.
 * - Keys and values are ordered by their insertion order (like Java's LinkedHashMap)
 * - It contains only unique key.
 * - It may have one null key and multiple null values.
 */
class HashMap {
  // tag::constructorPartial[]
  /**
   * Initialize array that holds the values.
   * @param {number} initialCapacity initial size of the array (preferably a prime)
   * @param {number} loadFactor rehash is called when this threshold is met.
   */
  constructor(initialCapacity = 19, loadFactor = 0.75) {
    this.initialCapacity = initialCapacity;
    this.loadFactor = loadFactor;
    // end::constructorPartial[]
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
    // keyTracker* is used to keep track of the insertion order
    this.keysTrackerArray = keysTrackerArray;
    this.keysTrackerIndex = keysTrackerIndex;
  }

  // tag::hashFunction[]
  /**
   * Polynomial hash codes are used to hash String typed keys.
   * It uses FVN-1a hashing algorithm for 32 bits
   * @see http://bit.ly/fvn-1a
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
  // end::hashFunction[]

  // tag::getEntry[]
  /**
   * Find an entry inside a bucket.
   *
   * The bucket is an array of Linked Lists.
   * Entries are the nodes in the linked list
   *  containing key/value objects.
   *
   * Avg. Runtime: O(1)
   *  Usually O(1) but if there are many collisions it could be O(n).
   *
   * @param {any} key
   * @returns {object} object `{ bucket, entry }` containing the bucket
   *  and entry (LinkedList's node matching value)
   */
  getEntry(key) {
    const index = this.hashFunction(key); // <1>
    this.buckets[index] = this.buckets[index] || new LinkedList(); // <2>
    const bucket = this.buckets[index];

    const entry = bucket.find(({ value: node }) => { // <3>
      if (key === node.key) {
        return node; // stop search
      }
      return undefined; // continue searching
    });

    return { bucket, entry }; // <4>
  }
  // end::getEntry[]


  // tag::set[]
  /**
   * Insert a key/value pair into the hash map.
   * If the key is already there replaces its content.
   * Avg. Runtime: O(1). In the case a rehash is needed O(n).
   * @param {any} key
   * @param {any} value
   * @returns {HashMap} Return the map to allow chaining
   */
  set(key, value) {
    const { entry: exists, bucket } = this.getEntry(key);

    if (!exists) { // key/value doesn't exist <1>
      bucket.push({ key, value, order: this.keysTrackerIndex });
      this.keysTrackerArray[this.keysTrackerIndex] = key; // <4>
      this.keysTrackerIndex += 1;
      this.size += 1;
      if (bucket.size > 1) { this.collisions += 1; } // <3>
      if (this.isBeyondloadFactor()) { this.rehash(); }
    } else {
      // update value if key already exists
      exists.value = value; // <2>
    }
    return this;
  }
  // end::set[]

  // tag::get[]
  /**
   * Gets the value out of the hash map
   * Avg. Runtime: O(1)
   * @param {any} key
   * @returns {any} value associated to the key, or undefined if there is none.
   */
  get(key) {
    const { entry } = this.getEntry(key);
    return entry && entry.value;
  }
  // end::get[]

  // tag::has[]
  /**
   * Search for key and return true if it was found
   * Avg. Runtime: O(1)
   * @param {any} key
   * @returns {boolean} indicating whether an element
   *  with the specified key exists or not.
   */
  has(key) {
    const { entry } = this.getEntry(key);
    return entry !== undefined;
  }
  // end::has[]

  // tag::delete[]
  /**
   * Removes the specified element from the map.
   * Avg. Runtime: O(1)
   * @param {*} key
   * @returns {boolean} true if an element in the map existed
   *  and has been removed, or false if the element did not exist.
   */
  delete(key) {
    const { bucket, entry } = this.getEntry(key);
    if (!entry) { return false; }

    return !!bucket.remove((node) => {
      if (key === node.value.key) {
        delete this.keysTrackerArray[node.value.order]; // O(1) deletion
        this.size -= 1;
        return true;
      }
      return undefined;
    });
  }
  // end::delete[]

  // tag::getLoadFactor[]
  /**
   * Load factor - measure how full the Map is.
   * It's ratio between items on the map and total size of buckets
   * @returns {number} load factor ratio
   */
  getLoadFactor() {
    return this.size / this.buckets.length;
  }

  /**
   * Check if a rehash is due
   * @returns {boolean} true if is beyond load factor, false otherwise.
   */
  isBeyondloadFactor() {
    return this.getLoadFactor() > this.loadFactor;
  }
  // end::getLoadFactor[]

  // tag::rehash[]
  /**
   * Rehash means to create a new Map with a new (higher)
   *  capacity with the purpose of outgrowing collisions.
   * @param {integer} newBucketSize new bucket size by default
   *  is the 2x the amount of data or bucket size.
   */
  rehash(newBucketSize = Math.max(this.size, this.buckets.length) * 2) {
    const newCapacity = nextPrime(newBucketSize);
    const newMap = new HashMap(newCapacity);

    // copy all values to the new map
    for (const key of this.keys()) {
      newMap.set(key, this.get(key));
    }

    const newArrayKeys = Array.from(newMap.keys());

    // override this map with the newMap
    this.reset(
      newMap.buckets,
      newMap.size,
      newMap.collisions,
      newArrayKeys,
      newArrayKeys.length,
    );
  }
  // end::rehash[]


  /**
   * Keys for each element in the map in insertion order.
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
   * Values for each element in the map in insertion order.
   * @returns {Iterator} values without holes (empty spaces of deleted values)
   */
  * values() {
    for (const key of this.keys()) {
      yield this.get(key);
    }
  }

  /**
   * Contains the [key, value] pairs for each element in the map in insertion order.
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

/* HashMap usage example
// tag::snippet[]
const hashMap = new HashMap();

hashMap.set('cat', 2);
hashMap.set('art', 8);
hashMap.set('rat', 7);
hashMap.set('dog', 1);
// end::snippet[]
*/
