// const Tree = require('../trees/avl-tree');
const Tree = require('../trees/red-black-tree');

class TreeSet {
  constructor(iterable = []) {
    this.tree = new Tree();
    Array.from(iterable).forEach(value => this.add(value));
  }

  get size() {
    return this.tree.size;
  }

  add(value) {
    if (!this.has(value)) {
      this.tree.add(value);
    }
  }

  has(value) {
    return !!this.tree.get(value);
  }

  delete(value) {
    return this.tree.remove(value);
  }

  * keys() {
    for (const node of this.tree.inOrderTraversal()) {
      yield node.value;
    }
  }

  /**
   * Default iterator for this set
   */
  * [Symbol.iterator]() {
    yield* this.keys();
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
