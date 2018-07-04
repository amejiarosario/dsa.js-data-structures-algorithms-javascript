const TreeNode = require('./tree-node');
const Queue = require('../queues/queue');
const Stack = require('../stacks/stack');

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
        // if (parent.value < current.value && parent.left.value === value) {
        parent.left = current.left;
        // }
        return true;
      }
      parent = current;
      current = value >= current.value ? current.right : current.left;
    }
    return false;
  }

  /**
   * Represent Binary Tree as an array.
   *
   * Leaf nodes will have two `undefined` descendents.
   *
   * The array representation of the binary tree is as follows:
   *
   * First element (index=0) is the root.
   * The following two elements (index=1,2) are descendents of the root: left (a) and right (b).
   * The next two elements (index=3,4) are the descendents of a
   * The next two elements (index=5,6) are the descendents of b and so on.
   *
   *  0     1            2             3       4        5       6        n
   * [root, a=root.left, b=root.right, a.left, a.right, b.left, b.right, ...]
   *
   * You can also find the parents as follows
   *
   * e.g.
   * Parent 0: children 1,2
   * Parent 1: children 3,4
   * Parent 2: children 5,6
   * Parent 3: children 7,8
   *
   * Given any index you can find the parent index with the following formula:
   *
   * parent = (index) => Math.floor((index-1)/2)
   */
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

  /**
   * Breath-first search for a tree (always starting from the root element).
   *
   */
  * bfs() {
    const queue = new Queue();

    queue.add(this.root);

    while (!queue.isEmpty()) {
      const node = queue.remove();
      yield node;
      node.descendents.forEach(child => queue.add(child));
    }
  }

  /**
   * Depth-first search for a tree (always starting from the root element)
   *
   * @see preOrderTraversal Similar results to the pre-order transversal.
   */
  * dfs() {
    const stack = new Stack();

    stack.add(this.root);

    while (!stack.isEmpty()) {
      const node = stack.remove();
      yield node;
      // reverse array, so left gets removed before right
      node.descendents.reverse().forEach(child => stack.add(child));
    }
  }

  /**
   * In-order traversal on a tree
   *
   * If the tree is a BST, then the values will be sorted in ascendent order
   *
   * @param {TreeNode} node first node to start the traversal
   */
  * inOrderTraversal(node = this.root) {
    if (node.left) { yield* this.inOrderTraversal(node.left); }
    yield node;
    if (node.right) { yield* this.inOrderTraversal(node.right); }
  }

  /**
   * Pre-order traversal on a tree. Similar results to DFS
   *
   * @param {TreeNode} node first node to start the traversal
   * @see dfs similar results to the breath first search
   */
  * preOrderTraversal(node = this.root) {
    yield node;
    if (node.left) { yield* this.preOrderTraversal(node.left); }
    if (node.right) { yield* this.preOrderTraversal(node.right); }
  }

  /**
   * Post-order traversal on a tree
   *
   * @param {TreeNode} node first node to start the traversal
   */
  * postOrderTraversal(node = this.root) {
    if (node.left) { yield* this.postOrderTraversal(node.left); }
    if (node.right) { yield* this.postOrderTraversal(node.right); }
    yield node;
  }
}

module.exports = BinarySearchTree;
