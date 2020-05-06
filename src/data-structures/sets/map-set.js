/**
 * Set implemented with Map (JS built-in) to have sublinear times on all operations
 */
class MapSet {
  /**
   * Initialize Set using the built-in Map
   *
   * @param {Array} iterable If passed, all iterable elements will be added to the new Set
   */
  constructor(iterable = []) {
    this.map = new Map();
    Array.from(iterable).forEach((element) => this.add(element));
  }

  /**
   * Add a new value
   * @param {any} value
   */
  add(value) {
    this.map.set(value);
  }

  /**
   * check if value is already on the set
   * @param {any} value
   */
  has(value) {
    return this.map.has(value);
  }

  /**
   * Get size of the set
   */
  get size() {
    return this.map.size;
  }

  /**
   * Delete a value from the set
   * @param {any} value
   */
  delete(value) {
    return this.map.delete(value);
  }

  /**
   * Make this class iterable
   */
  * [Symbol.iterator]() {
    yield* this.map.keys();
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

module.exports = MapSet;
