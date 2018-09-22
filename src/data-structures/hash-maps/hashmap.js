const LinkedList = require('../linked-lists/linked-list');

class HashMap {
  /**
   * Initialize array that holds the values.
   * @param {number} initialCapacity initial size of the array
   * @param {number} loadFactor if set, the Map will automatically
   *  rehash when the load factor threshold is met
   */
  constructor(initialCapacity = 19, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity);
    this.loadFactor = loadFactor;
    this.size = 0;
    this.collisions = 0;
    this.keysTrackerArray = [];
    this.keysTrackerIndex = 0;
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

  hashFunction(key) {
    const hashCode = Array.from(key.toString()).reduce((hash, char) => {
      return char.codePointAt() + (hash * 41);
    }, 0);
    return hashCode % this.buckets.length;
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

  /**
   * @returns keys without holes (empty spaces of deleted keys)
   */
  keys() {
    return Object.values(this.keysTrackerArray);
  }
}

module.exports = HashMap;
