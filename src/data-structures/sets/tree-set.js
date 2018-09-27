// const Tree = require('../trees/avl-tree'); // faster lookups
const Tree = require('../trees/red-black-tree'); // faster insertion

/**
 * TreeSet implements a Set (collection of unique values)
 *  using a balanced binary search tree to guarantee a O(log n) in all operations.
 */
class TreeSet {
  /**
   * Initialize tree and accept initial values.
   * @param {array} iterable initial values (duplicates will be added once)
   */
  constructor(iterable = []) {
    this.tree = new Tree();
    Array.from(iterable).forEach(value => this.add(value));
  }

  /**
   * Size of the set
   */
  get size() {
    return this.tree.size;
  }

  /**
   * Add a new value (duplicates will be added only once)
   * Runtime: O(log n)
   * @param {any} value
   */
  add(value) {
    if (!this.has(value)) {
      this.tree.add(value);
    }
  }

  /**
   * Check if value is already on the set
   * Runtime: O(log n)
   * @param {any} value
   * @returns {boolean} true if exists or false otherwise
   */
  has(value) {
    return !!this.tree.get(value);
  }

  /**
   * Delete a value from the set
   * Runtime: O(log n)
   * @param {any} value
   */
  delete(value) {
    return this.tree.remove(value);
  }

  /**
   * Default iterator for this set
   * @returns {iterator} values in ascending order
   */
  * [Symbol.iterator]() {
    for (const node of this.tree.inOrderTraversal()) {
      yield node.value;
    }
  }

  /**
   * Get all the values on the Set
   * @returns {iterator} values in ascending order
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

module.exports = TreeSet;
