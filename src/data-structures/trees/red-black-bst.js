const BinarySearchTree = require('./binary-search-tree');
/**
 * Red-Black Tree
 *
 * Properties:
 *
 * 1. Every node is either BLACK or RED.
 * 2. The root is BLACK.
 * 3. The null leaves are considered BLACK.
 * 4. Every RED node has only BLACK children.
 *    A BLACK node can have BLACK children, however a RED node cannot have RED children.
 * 5. Every path from the leaves to the root has the same number of BLACK nodes.
 *
 *
 */
class RedBlackBST extends BinarySearchTree {
  /**
   * Insert node in the tree.
   *
   * The root is always BLACK.
   * New nodes are always RED.
   *
   * @param {any} value new nodes' value
   */
  add(value) {
    const node = super.add(value);

    if (node === this.root) {
      node.meta.color = RedBlackBST.BLACK;
    } else {
      node.meta.color = RedBlackBST.RED;
      // this.balance(node);
    }

    return node;
  }
}

RedBlackBST.RED = Symbol('red');
RedBlackBST.BLACK = Symbol('black');

module.exports = RedBlackBST;
