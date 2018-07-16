const TreeNode = require('./tree-node');
const Queue = require('../queues/queue');
const Stack = require('../stacks/stack');

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  /**
   * Insert value on the BST.
   * It the value is already in the tree, then It increase the multiplicity value
   * @param {any} value value to insert in the tree
   */
  add(value) {
    const newNode = new TreeNode(value);

    if (this.root) {
      const { found, parent } = this.findNodeAndParent(value);
      if (found) { // duplicated: value already exist on the tree
        found.meta.multiplicity = (found.meta.multiplicity || 1) + 1;
      } else if (value < parent.value) {
        parent.left = newNode;
      } else {
        parent.right = newNode;
      }
    } else {
      this.root = newNode;
    }

    this.size += 1;
    return newNode;
  }

  /**
   * Return node if it found it or undefined if not
   * @param {any} value value to find
   */
  find(value) {
    return this.findNodeAndParent(value).found;
  }

  /**
   * Finds the node matching the value.
   * If it doesn't find, it returns the leaf where the new value should be added.
   * @param {any} value Node's value to find
   * @returns {TreeNode} matching node or the previous node where value should go
   */
  findNodeAndParent(value) {
    let node = this.root;
    let parent;

    while (node) {
      if (node.value === value) {
        break;
      }
      parent = node;
      node = value >= node.value ? node.right : node.left;
    }

    return { found: node, parent };
  }

  /**
   * Get the node with the max value of subtree: the right-most value.
   * @param {TreeNode} root subtree's root
   */
  getMax(root = this.root) {
    let current = root;
    while (current && current.right) {
      current = current.right;
    }
    return current;
  }

  /**
   * Get the node with the min value of subtree: the left-most value.
   * @param {TreeNode} root subtree's root
   */
  getMin(root = this.root) {
    let current = root;
    while (current && current.left) {
      current = current.left;
    }
    return current;
  }

  /**
   * Remove a node from the tree
   * @returns {boolean} false if not found and true if it was deleted
   */
  remove(value) {
    const nodeToRemove = this.find(value);
    if (!nodeToRemove) return false;

    // Combine left and right children into one subtree without nodeToRemove
    const nodeToRemoveChildren = this.combineLeftIntoRightSubtree(nodeToRemove);

    if (nodeToRemove === this.root) {
      // Replace (root) node to delete with the combined subtree.
      this.root = nodeToRemoveChildren;
      this.root.parent = null; // clearing up old parent
    } else {
      const side = nodeToRemove.isParentLeftChild ? 'left' : 'right';
      const { parent } = nodeToRemove; // get parent
      // Replace node to delete with the combined subtree.
      parent[side] = nodeToRemoveChildren;
    }

    this.size -= 1;
    return true;
  }

  /**
   * Combine left into right children into one subtree without given parent node.
   *
   * @example combineLeftIntoRightSubtree(30)
   *
   *      30*                             40
   *    /     \                          /  \
   *   10      40      combined        35   50
   *     \    /  \    ---------->     /
   *     15  35   50                 10
   *                                   \
   *                                    15
   *
   * It takes node 30 left subtree (10 and 15) and put it in the
   * leftmost node of the right subtree (40, 35, 50).
   *
   * @param {TreeNode} node
   * @returns {TreeNode} combined subtree
   */
  combineLeftIntoRightSubtree(node) {
    if (node.right) {
      const leftmost = this.getLeftmost(node.right);
      leftmost.left = node.left;
      return node.right;
    }
    return node.left;
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
   * In-order traversal on a tree: left-root-right.
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
   * Pre-order traversal on a tree: root-left-right.
   * Similar results to DFS
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
   * Post-order traversal on a tree: left-right-root.
   *
   * @param {TreeNode} node first node to start the traversal
   */
  * postOrderTraversal(node = this.root) {
    if (node.left) { yield* this.postOrderTraversal(node.left); }
    if (node.right) { yield* this.postOrderTraversal(node.right); }
    yield node;
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
    const visited = new Map();

    if (this.root) { queue.add(this.root); }

    while (!queue.isEmpty()) {
      const current = queue.remove();
      array.push(current && current.value);

      if (current) { visited.set(current); }

      if (current && !visited.has(current.left)) { queue.add(current.left); }
      if (current && !visited.has(current.right)) { queue.add(current.right); }
    }

    return array;
  }
}

// aliases
BinarySearchTree.prototype.insert = BinarySearchTree.prototype.add;
BinarySearchTree.prototype.delete = BinarySearchTree.prototype.remove;
BinarySearchTree.prototype.getLeftmost = BinarySearchTree.prototype.getMin;
BinarySearchTree.prototype.minimum = BinarySearchTree.prototype.getMin;
BinarySearchTree.prototype.getRightmost = BinarySearchTree.prototype.getMax;
BinarySearchTree.prototype.maximum = BinarySearchTree.prototype.getMax;

module.exports = BinarySearchTree;
