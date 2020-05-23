/* eslint-disable no-restricted-syntax */
// const Tree = require('../../trees/binary-search-tree'); // unbalanced tree (slow everything)
// const Tree = require('../../trees/avl-tree'); // fast lookup
const Tree = require('../../trees/red-black-tree'); // fast insertion

/**
 * TreeMap is a Map implementation using a self-balanced tree
 *  such as AVL Tree or Red-Black tree to guarantee O(log n) operations.
 *
 * Implementing a Map with a tree, TreeMap,
 * has a couple of advantages over a HashMap:
 *    • Keys are always sorted.
 *    • Statistical data can be easily obtained like median,
 *        highest, lowest key.
 *    • Collisions are not a concern so in the worst case is
 *        still O(log n).
 *    • Trees are more space efficient and doesn’t need to
 *        allocate memory beforehand (e.g. HashMap’s initial capacity)
 *        nor you have to rehash when is getting full.
 *
 */
class TreeMap {
  // tag::constructor[]
  /**
   * Initialize tree
   */
  constructor() {
    this.tree = new Tree();
  }
  // end::constructor[]

  // tag::set[]
  /**
   * Insert a key/value pair into the map.
   * If the key is already there replaces its content.
   * Runtime: O(log n)
   * @param {any} key
   * @param {any} value
   * @returns {TreeNode} Return the Map object to allow chaining
   */
  set(key, value) {
    const node = this.tree.get(key);
    if (node) {
      node.data(value);
      return node;
    }
    return this.tree.add(key).data(value);
  }

  /**
   * Size of the map
   */
  get size() {
    return this.tree.size;
  }
  // end::set[]

  // tag::get[]
  /**
   * Gets the value out of the map
   * Runtime: O(log n)
   * @param {any} key
   * @returns {any} value associated to the key, or undefined if there is none.
   */
  get(key) {
    const node = this.tree.get(key) || undefined;
    return node && node.data();
  }

  /**
   * Search for key and return true if it was found
   * Runtime: O(log n)
   * @param {any} key
   * @returns {boolean} indicating whether an element
   *  with the specified key exists or not.
   */
  has(key) {
    return !!this.get(key);
  }
  // end::get[]

  // tag::delete[]
  /**
   * Removes the specified element from the map.
   * Runtime: O(log n)
   * @param {*} key
   * @returns {boolean} true if an element in the Map object existed
   *  and has been removed, or false if the element did not exist.
   */
  delete(key) {
    return this.tree.remove(key);
  }
  // end::delete[]

  // tag::iterators[]
  /**
   * Default iterator for this map
   */
  * [Symbol.iterator]() {
    yield* this.tree.inOrderTraversal(); // <1>
  }

  /**
   * Keys for each element in the Map object
   *  in order ascending order.
   * @returns {Iterator} keys
   */
  * keys() {
    for (const node of this) {
      yield node.value;
    }
  }

  /**
   * Values for each element in the Map object
   *  in corresponding key ascending order.
   * @returns {Iterator} values without holes (empty spaces of deleted values)
   */
  * values() {
    for (const node of this) {
      yield node.data();
    }
  }
  // end::iterators[]

  /**
   * Contains the [key, value] pairs for each element in the Map object
   *  in corresponding key ascending order.
   * @returns {Iterator}
   */
  * entries() {
    for (const node of this) {
      yield [node.value, node.data()];
    }
  }

  /**
   * Removes all key/value pairs from the Map object.
   */
  clear() {
    this.tree = new Tree();
  }
}

// Aliases
TreeMap.prototype.containsKey = TreeMap.prototype.has;
TreeMap.prototype.put = TreeMap.prototype.set;

module.exports = TreeMap;
