/**
 * Set implemented with our HashMap to have sublinear times on all operations
 */
class ArraySet {
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
   * Make this class iterable
   */
  [Symbol.iterator]() {
    return this.array[Symbol.iterator]();
  }

  /**
 * Get all the values on the Set
 * @returns {iterator} values in insertion order
 */
  * keys() {
    yield* this;
  }

  /**
   * This is kept similar to the Map object, so that each entry has the
   *  same value for its key and value here.
   * @returns {iterator} new Iterator object that contains[value, value]
   *  for each element in the Set object, in ascending order.
   */
  * entries() {
    for (const value of this) {
      yield [value, value];
    }
  }
}

module.exports = ArraySet;

