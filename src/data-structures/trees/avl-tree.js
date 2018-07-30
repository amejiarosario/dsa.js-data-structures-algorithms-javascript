const BinarySearchTree = require('./binary-search-tree');
const {
  balanceUptream,
} = require('./tree-rotations');

class AvlTree extends BinarySearchTree {
  /**
   * Add node to tree. It self-balance itself.
   *
   * @param {any} value node's value
   */
  add(value) {
    const node = super.add(value);
    balanceUptream(node);
    return node;
  }

  /**
   * Remove node if it exists and re-balance tree
   * @param {any} value
   */
  remove(value) {
    const node = super.find(value);
    if (node) {
      const found = super.remove(value);
      balanceUptream(node.parent);
      return found;
    }

    return false;
  }
}

module.exports = AvlTree;
