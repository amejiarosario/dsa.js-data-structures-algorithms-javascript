const HashMap = require('../hash-maps/hashmap');
/**
 * Set implemented with our HashMap to have sublinear times on all operations
 */
class HashMapSet {
  /**
   * Initialize (Hash)map for the set
   *
   * @param {Array} iterable If passed, all iterable elements will be added to the new Set
   */
  constructor(iterable = []) {
    this.hashMap = new HashMap();
    Array.from(iterable).forEach(element => this.add(element));
  }

  /**
   * Add a new value
   * @param {any} value
   */
  add(value) {
    this.hashMap.set(value);
  }

  /**
   * check if value is already on the set
   * @param {any} value
   */
  has(value) {
    return this.hashMap.has(value);
  }

  /**
   * Get size of the set
   */
  get size() {
    return this.hashMap.size;
  }

  /**
   * Delete a value from the set
   * @param {any} value
   */
  delete(value) {
    return this.hashMap.delete(value);
  }

  /**
   * Return all values on the set as an array
   */
  entries() {
    return Array.from(this);
  }

  /**
   * Make this class iterable
   */
  [Symbol.iterator]() {
    return this.hashMap.keys()[Symbol.iterator]();
  }
}

module.exports = HashMapSet;

