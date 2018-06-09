/**
 * Hash Map data structure implementation
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
    const bucketIndex = this._getBucketIndex(key);
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
}

module.exports = HashMap;
