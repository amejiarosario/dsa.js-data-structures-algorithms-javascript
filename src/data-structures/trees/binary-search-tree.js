const TreeNode = require('./tree-node');
const Queue = require('../queues/queue');

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  /**
   * Insert value on the BST
   * @param {any} value value to insert in the tree
   */
  add(value) {
    const node = new TreeNode(value);

    if (this.root) {
      let current = this.root;

      while (current) {
        if (value >= current.value && !current.right) {
          current.right = node;
          break;
        } else if (value < current.value && !current.left) {
          current.left = node;
          break;
        } else {
          current = value >= current.value ? current.right : current.left;
        }
      }
    } else {
      this.root = node;
    }

    this.size += 1;
    return node;
  }

  /**
   * Return node if it found it or undefined if not
   * @param {any} value value to find
   */
  find(value) {
    let current = this.root;

    while (current) {
      if (current.value === value) {
        return current;
      }
      current = value >= current.value ? current.right : current.left;
    }

    return undefined;
  }

  /**
   * Remove a node from the tree
   * @param {any} value value to remove from the tree
   */
  remove(value) {
    let current = this.root;
    let parent = this.root;

    // search for the parent of the element
    while (current) {
      if (current.value === value) {
        if (parent.value < current.value && parent.left.value === value) {
          parent.left = current.left;
        }
        return true;
      }
      parent = current;
      current = value >= current.value ? current.right : current.left;
    }
    return false;
  }

  toArray() {
    const array = [];
    const queue = new Queue();

    if (this.root) { queue.add(this.root); }

    while (!queue.isEmpty()) {
      const current = queue.remove();
      array.push(current && current.value);

      if (current) { queue.add(current.left); }
      if (current) { queue.add(current.right); }
    }

    return array;
  }
}

module.exports = BinarySearchTree;
