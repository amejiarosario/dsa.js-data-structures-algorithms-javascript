const LEFT = 0;
const RIGHT = 1;

class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendents = [];
    this.parent = null;
    this.parentSide = null;
    this.meta = {};
  }

  /**
   * Node is leaf is it has no descendents
   */
  get isLeaf() {
    return !this.descendents.some(child => child);
  }

  get left() {
    return this.descendents[LEFT] || null;
  }

  /**
   * Set a left node descendents.
   * Also, children get associated to parent.
   */
  set left(node) {
    this.descendents[LEFT] = node;
    if (node) {
      node.parent = this;
      node.parentSide = LEFT;
    }
  }

  get right() {
    return this.descendents[RIGHT] || null;
  }

  /**
   * Set a right node descendents.
   * Also, children get associated to parent.
   */
  set right(node) {
    this.descendents[RIGHT] = node;
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

  // Meta shortcuts

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
}

module.exports = TreeNode;
