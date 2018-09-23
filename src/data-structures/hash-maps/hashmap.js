const LinkedList = require('../linked-lists/linked-list');
const { nextPrime } = require('./primes');

class HashMap {
  /**
   * Initialize array that holds the values.
   * @param {number} initialCapacity initial size of the array
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

  set(key, value) {
    const index = this.hashFunction(key);
    this.setBucket(index, key, value);
    return this;
  }

  get(key) {
    const index = this.hashFunction(key);
    const bucket = this.getBucket(index, key);
    return bucket && bucket.value;
  }

  has(key) {
    const index = this.hashFunction(key);
    const bucket = this.getBucket(index, key);
    return bucket !== undefined;
  }

  delete(key) {
    const index = this.hashFunction(key);
    return this.removeBucket(index, key);
  }

  /**
   * Uses FVN-1a hashing algorithm for 32 bits
   * @see https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function
   * @param {any} key
   * @return {integer} bucket index
   */
  hashFunction(key) {
    const str = key.toString();
    let hash = 2166136261;
    for (let i = 0; i < str.length; i += 1) {
      hash ^= str.codePointAt(i); // eslint-disable-line no-bitwise
      hash *= 16777619;
    }
    return (hash >>> 0) % this.buckets.length; // eslint-disable-line no-bitwise
  }

  setBucket(index, key, value) {
    this.buckets[index] = this.buckets[index] || new LinkedList();
    const bucket = this.buckets[index];
    // update value if key already exists
    const hasKey = bucket.find(({ value: data }) => {
      if (key === data.key) {
        data.value = value; // update value
        return true;
      }
      return undefined;
    });
    // add key/value if it doesn't find the key
    if (!hasKey) {
      bucket.push({
        key,
        value,
        order: this.keysTrackerIndex,
      });
      this.keysTrackerArray[this.keysTrackerIndex] = key;
      this.keysTrackerIndex += 1;
      this.size += 1;
      // count collisions
      if (bucket.size > 1) {
        this.collisions += 1;
      }

      if (this.isBeyondloadFactor()) {
        this.rehash();
      }
    }
  }

  getBucket(index, key) {
    const bucket = this.buckets[index] || new LinkedList();
    return bucket.find(({ value: data }) => {
      if (key === data.key) {
        return data;
      }
      return undefined;
    });
  }

  removeBucket(index, key) {
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

  getLoadFactor() {
    return this.size / this.buckets.length;
  }

  isBeyondloadFactor() {
    return this.getLoadFactor() > this.loadFactor;
  }

  /**
   * @returns keys without holes (empty spaces of deleted keys)
   */
  keys() {
    return Object.values(this.keysTrackerArray);
  }

  rehash(newBucketSize = Math.max(this.size, this.buckets.length) * 2) {
    const newCapacity = nextPrime(newBucketSize);
    const newMap = new HashMap(newCapacity);
    this.keys().forEach((key) => {
      newMap.set(key, this.get(key));
    });
    const newArrayKeys = newMap.keys();

    this.reset(
      newMap.buckets,
      newMap.size,
      newMap.collisions,
      newArrayKeys,
      newArrayKeys.length,
    );
  }
}

module.exports = HashMap;
