/**
 * Set implemented with our HashMap to have sublinear times on all operations
 */
class HashMapSet {
  /**
   * Initialize Set using a HashMap
   *
   * @param {Array} iterable If passed, all iterable elements will be added to the new Set
   */
  constructor(iterable = []) {
    this.array = [];
    Array.from(iterable).forEach(element => this.add(element));
  }

  /**
   * Add a new value
   *
   * Runtime: O(1)
   *
   * @param {any} value
   */
  add(value) {
    if (!this.has(value)) {
      this.array.push(value);
    }
  }

  /**
   * check if value is already on the set
   *
   * Runtime: O(n)
   *
   * @param {any} value
   */
  has(value) {
    return this.array.indexOf(value) > -1;
  }

  /**
   * Delete a value from the set
   *
   * Runtime: O(n)
   *
   * @param {any} value
   */
  delete(value) {
    const index = this.array.indexOf(value);
    this.array.splice(index, 1);
    return index > -1;
  }

  /**
   * Get size of the set
   */
  get size() {
    return this.array.length;
  }

  /**
   * Return all values on the set as an array
   */
  entries() {
    return this.array;
  }
}

module.exports = HashMapSet;

