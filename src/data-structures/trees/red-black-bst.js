const BinarySearchTree = require('./binary-search-tree');
// const TreeNode = require('./tree-node');

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
    // add node using the regular BST add
    const node = super.add(value);

    if (node === this.root) {
      node.meta.color = RedBlackBST.BLACK;
    } else {
      node.meta.color = RedBlackBST.RED;
      this.balance(node);
    }

    return node;
  }

  /**
   * Balance tree by doing rotations
   * @param {TreeNode} node
   */
  balance(node) {

  }
}


RedBlackBST.RED = Symbol('red');
RedBlackBST.BLACK = Symbol('black');

module.exports = RedBlackBST;
