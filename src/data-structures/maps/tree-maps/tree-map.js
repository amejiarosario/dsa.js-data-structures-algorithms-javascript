/* eslint-disable no-restricted-syntax */
// const Tree = require('../../trees/red-black-tree'); // fast insertion
const Tree = require('../../trees/avl-tree'); // fast lookup

class TreeMap {
  constructor() {
    this.tree = new Tree();
  }

  set(key, value) {
    return this.tree.add(key).data(value);
  }

  get size() {
    return this.tree.size;
  }

  get(key) {
    const node = this.tree.get(key) || undefined;
    return node && node.getData();
  }

  has(key) {
    return !!this.get(key);
  }

  delete(key) {
    return this.tree.remove(key);
  }

  * [Symbol.iterator]() {
    yield* this.tree.inOrderTraversal();
  }

  * keys() {
    for (const node of this) {
      yield node.value;
    }
  }

  * values() {
    for (const node of this) {
      yield node.getData();
    }
  }
}

// Aliases
TreeMap.prototype.containsKey = TreeMap.prototype.has;

module.exports = TreeMap;
