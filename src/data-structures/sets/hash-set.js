const HashMap = require('../maps/hash-maps/hash-map');
// tag::constructor[]
/**
 * Set implemented with our HashMap
 * Have an average of O(1) time on all operations
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
   * Get size of the set
   */
  get size() {
    return this.hashMap.size;
  }
  // end::constructor[]

  // tag::add[]
  /**
   * Add a new value (duplicates will be added only once)
   * Avg. Runtime: O(1)
   * @param {any} value
   */
  add(value) {
    this.hashMap.set(value);
  }
  // end::add[]

  // tag::has[]
  /**
   * Check if value is already on the set
   * Avg. Runtime: O(1)
   * @param {any} value
   */
  has(value) {
    return this.hashMap.has(value);
  }
  // end::has[]

  // tag::delete[]
  /**
   * Delete a value from the set
   * Avg. Runtime: O(1)
   * @param {any} value
   */
  delete(value) {
    return this.hashMap.delete(value);
  }
  // end::delete[]

  // tag::iterators[]
  /**
   * Make this class iterable
   */
  * [Symbol.iterator]() {
    yield* this.hashMap.keys();
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
// end::iterators[]
}

module.exports = HashMapSet;

