const BinarySearchTree = require('./binary-search-tree');

const RED = Symbol('red');
const BLACK = Symbol('black');

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
 */
class RedBlackTree extends BinarySearchTree {
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
      node.meta.color = BLACK;
    } else {
      node.meta.color = RED;
      this.balance(node);
    }

    return node;
  }

  /**
   * Balance tree by doing rotations
   *
   * Fix RED/BLACK violations
   * - RED violation: a RED node has a RED child or root is RED.
   * - BLACK violation: one path has more BLACK nodes than other.
   *
   *
   * @param {TreeNode} node
   */
  balance(node) {
    // check uncle
    if (node.uncle && node.uncle.color === RED) {
      // if uncle is RED, change the color of uncle, parent and grandparent to BLACK
      node.parent.color = BLACK;
      node.uncle.color = BLACK;
      node.grandparent.color = BLACK;
    } else if (node.uncle && node.uncle.color === BLACK) {
      // if uncle is BLACK

      // case: Right Right Case

    } else if (node.parent && node.color === RED && node.parent.color === RED) {
      // Solve RED violation doing rotations and re-color
      if (node.isParentLeftChild) {
        this.rightRotation(node.parent);
      } else {
        this.leftRotation(node.parent);
      }
    }
  }

  /**
   * Left rotation in-place
   *
   * E.g. left-rotate node 2
   *
   * 1                          [2]
   *   \                      /    \
   *    [2]        =>       1        3
   *      \
   *         3
   *
   * @param {TreeNode} node
   */
  leftRotation(node) {
    const oldParent = node.parent;
    const grandParent = oldParent.parent;

    if (grandParent) {
      // do something
    } else {
      this.root = node;
      node.parent = null;
      node.setLeftAndUpdateParent(oldParent);
      oldParent.setRightAndUpdateParent(null);
      // re-color
      node.color = BLACK;
      node.right.color = RED;
      node.left.color = RED;
    }
  }

  /**
   * Right rotation in-place
   *
   * E.g. Right-rotate node 2
   *
   *        3                   [2]
   *      /                   /    \
   *    [2]        =>       1        3
   *   /
   *  1
   *
   * @param {TreeNode} node
   */
  rightRotation(node) {
    const oldParent = node.parent;
    const grandParent = oldParent.parent;

    if (grandParent) {
      // do something
    } else {
      this.root = node;
      node.parent = null;
      node.setRightAndUpdateParent(oldParent);
      oldParent.setLeftAndUpdateParent(null);
      // re-color
      node.color = BLACK;
      node.right.color = RED;
      node.left.color = RED;
    }
  }
}

RedBlackTree.RED = RED;
RedBlackTree.BLACK = BLACK;

module.exports = RedBlackTree;
