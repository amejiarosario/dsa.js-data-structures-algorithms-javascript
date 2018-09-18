/* global BigInt */

/**
 * Hash Map data structure implementation
 *
 * Features:
 * - HashMap offers 0(1) lookup and insertion.
 * - Keys are ordered by their insertion order (like LinkedHashMap)
 * - It contains only unique elements.
 * - It may have one null key and multiple null values.
 *
 * @author Adrian Mejia <me AT adrianmejia.com>
 */
class HashMap {
  /**
   * Initialize array that holds the values. Default is size 16
   * @param {number} initialCapacity initial size of the array
   * @param {number} loadFactor if set, the Map will automatically rehash when the load factor threshold is met
   */
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity);
    this.loadFactor = loadFactor;
    this.size = 0;
    this.collisions = 0;
    this.keysArrayWrapper = [];
  }

  /**
   * Use the binary represenation (IEEE 754) as a hashCode
   * @param {any} key
   */
  static hashCodeForNumber(number) {
    const buffer = new ArrayBuffer(8); // 8 bytes for float64
    const dataView = new DataView(buffer);
    dataView.setFloat64(0, number); // set as float64
    const longBits = dataView.getBigInt64(0); // read as long int (BigInt)
    // gurantee only positive (big) integers
    return longBits > 0 ? longBits : BigInt(2 ** 63) + (longBits * BigInt(-1));
  }

  /**
   * Polynomial hsah codes are used to hash String typed keys.
   * A string is a sequence of characters encoded
   * using Unicode's numerical value.
   * @param {any} key converted to string
   */
  hashFunctionForString(key) {
    return Array
      .from(key.toString())
      .reduce((hashIndex, char) => this.hashCodeToIndex((41 * hashIndex) + char.codePointAt(0)), 0);
  }

  /**
   * A hash function converts keys into array indices
   * @param {any} key
   * @returns {BigInt} array index given the bucket size
   */
  hashFunction(key) {
    if (typeof key === 'number') {
      return this.hashCodeToIndex(HashMap.hashCodeForNumber(key));
    }
    return this.hashFunctionForString(key);
  }

  /**
   * Multiply-Add-Divide (MAD) compression
   * @param {number} hash hashCode
   * @param {number} size bucket array size
   * @returns {number} array bucket index
   */
  hashCodeToIndex(hash, size = this.buckets.length) {
    const prime = BigInt(6700417); // prime number > size
    const a = prime - BigInt(2); // integer from range [1..(p-1)]
    const b = prime - BigInt(1); // integer from range [0..(p-1)]
    const hashIndex = (((a * BigInt(hash)) + b) % prime) % BigInt(size);
    return parseInt(hashIndex, 10);
  }

  /**
   * Insert a key/value pair into the hash map.
   * If the key is already there replaces its content. Return the Map object to allow chaining
   * @param {any} key
   * @param {any} value
   */
  set(key, value) {
    const { bucketIndex, entryIndex } = this._getIndexes(key);

    if (entryIndex === undefined) {
      // initialize array and save key/value
      const keyIndex = this.keysArrayWrapper.push({ content: key }) - 1; // keep track of the key index
      this.buckets[bucketIndex] = this.buckets[bucketIndex] || [];
      this.buckets[bucketIndex].push({ key, value, keyIndex });
      this.size++;
      // Optional: keep count of collisions
      if (this.buckets[bucketIndex].length > 1) { this.collisions++; }
    } else {
      // override existing value
      this.buckets[bucketIndex][entryIndex].value = value;
    }

    // check if a rehash is due
    if (this.loadFactor > 0 && this.getLoadFactor() > this.loadFactor) {
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
    const { bucketIndex, entryIndex } = this._getIndexes(key);

    if (entryIndex === undefined) {
      return;
    }

    return this.buckets[bucketIndex][entryIndex].value;
  }

  /**
   * Search for key and return true if it was found
   * @param {any} key
   */
  has(key) {
    return this._getIndexes(key).entryIndex !== undefined;
  }

  /**
   * Search for a key in the map. It returns it's internal array indexes.
   * Returns bucketIndex and the internal array index
   * @param {any} key
   */
  _getIndexes(key) {
    const bucketIndex = this.hashFunction(key);
    const values = this.buckets[bucketIndex] || [];

    for (let entryIndex = 0; entryIndex < values.length; entryIndex++) {
      const entry = values[entryIndex];
      if (entry.key === key) {
        return { bucketIndex, entryIndex, keyIndex: entry.keyIndex };
      }
    }

    return { bucketIndex };
  }

  /**
   * Returns true if an element in the Map object existed and has been removed, or false if the element does not exist.
   * @param {any} key
   */
  delete(key) {
    const { bucketIndex, entryIndex, keyIndex } = this._getIndexes(key);

    if (entryIndex === undefined) {
      return false;
    }

    this.buckets[bucketIndex].splice(entryIndex, 1);
    delete this.keysArrayWrapper[keyIndex];
    this.size--;

    return true;
  }

  /**
   * Rehash means to create a new Map with a new (higher) capacity with the purpose of outgrow collisions.
   * @param {Number} newCapacity
   */
  rehash(newCapacity) {
    const newMap = new HashMap(newCapacity);

    this.keysArrayWrapper.forEach((key) => {
      newMap.set(key.content, this.get(key.content));
    });

    // update bucket
    this.buckets = newMap.buckets;
    this.collisions = newMap.collisions;
    // Optional: both `keys` has the same content except that the new one doesn't have empty spaces from deletions
    this.keysArrayWrapper = newMap.keysArrayWrapper;
  }

  /**
   * Load factor - measure how full the Map is.
   * It's ratio between items on the map and total size of buckets
   */
  getLoadFactor() {
    return this.size / this.buckets.length;
  }

  /**
   * Returns an array with valid keys
   * If keys has been deleted they shouldn't be in the array of keys
   */
  keys() {
    return this.keysArrayWrapper.reduce((acc, key) => {
      acc.push(key.content);
      return acc;
    }, []);
  }

  /**
   * The values() method returns a new Iterator object that
   * contains the values for each element in the Map object
   * in insertion order.
   *
   * @example
   *   const myMap = new HashMap();
   *   myMap.set('0', 'foo');
   *   myMap.set(1, 'bar');
   *   myMap.set({}, 'baz');
   *
   *   var mapIter = myMap.values();
   *
   *   console.log(mapIter.next().value); // "foo"
   *   console.log(mapIter.next().value); // "bar"
   *   console.log(mapIter.next().value); // "baz"
   */
  values() {
    throw new Error('Not implemented');
  }
}

// Aliases
HashMap.prototype.containsKey = HashMap.prototype.has;

module.exports = HashMap;
