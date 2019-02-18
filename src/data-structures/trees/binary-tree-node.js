const LEFT = Symbol('left');
const RIGHT = Symbol('right');

// tag::snippet[]
/**
 * Binary Tree Node
 *
 */
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.parentSide = null;
    this.meta = {};
  }
  // end::snippet[]

  /**
   * Set a left node descendents.
   * Also, children get associated to parent.
   */
  setLeftAndUpdateParent(node) {
    this.left = node;
    if (node) {
      node.parent = this;
      node.parentSide = LEFT;
    }
  }

  /**
   * Set a right node descendents.
   * Also, children get associated to parent.
   */
  setRightAndUpdateParent(node) {
    this.right = node;
    if (node) {
      node.parent = this;
      node.parentSide = RIGHT;
    }
  }

  /**
   * Tell if is parent's left or right child
   *
   * @returns {string} side (left or right) this node is of its parent
   */
  get parentChildSide() {
    if (this.parent) {
      return this.isParentLeftChild ? 'left' : 'right';
    }

    return 'root';
  }

  /**
   * Return true if this node is its parent left child
   */
  get isParentLeftChild() {
    return this.parentSide === LEFT;
  }

  /**
   * Return true if this node is its parent right child
   */
  get isParentRightChild() {
    return this.parentSide === RIGHT;
  }

  /**
   * Node is leaf is it has no descendents
   */
  get isLeaf() {
    return !this.left && !this.right;
  }

  /**
   * Get sibling of current node
   */
  get sibling() {
    const { parent } = this;
    if (!parent) return null;
    return parent.right === this ? parent.left : parent.right;
  }

  /**
   * Get parent sibling = uncle (duh)
   */
  get uncle() {
    const { parent } = this;
    if (!parent) return null;
    return parent.sibling;
  }

  get grandparent() {
    const { parent } = this;
    return parent && parent.parent;
  }

  /**
   * Get color
   */
  get color() {
    return this.meta.color;
  }

  /**
   * Set Color
   */
  set color(value) {
    this.meta.color = value;
  }

  /**
   * Get the max height of the subtrees.
   *
   * It recursively goes into each children calculating the height
   *
   * Height: distance from the deepest leaf to this node
   */
  get height() {
    return Math.max(this.leftSubtreeHeight, this.rightSubtreeHeight);
  }

  get leftSubtreeHeight() {
    return this.left ? this.left.height + 1 : 0;
  }

  get rightSubtreeHeight() {
    return this.right ? this.right.height + 1 : 0;
  }

  /**
   * Returns the difference the heights on the left and right subtrees
   */
  get balanceFactor() {
    return this.leftSubtreeHeight - this.rightSubtreeHeight;
  }

  /**
   * Serialize node's values
   */
  toValues() {
    return {
      value: this.value,
      left: this.left && this.left.value,
      right: this.right && this.right.value,
      parent: this.parent && this.parent.value,
      parentSide: this.parentSide,
    };
  }

  /**
   * Get and Set data value
   * @param {any} value (optional) if not provided is a getter, otherwise a setter.
   */
  data(value) {
    if (value === undefined) {
      return this.meta.data;
    }
    this.meta.data = value;
    return this;
  }
}

BinaryTreeNode.RIGHT = RIGHT;
BinaryTreeNode.LEFT = LEFT;

module.exports = BinaryTreeNode;
