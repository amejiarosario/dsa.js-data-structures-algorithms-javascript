const _ = require('lodash');
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

  copy(node) {
    this.value = node.value;
    this.descendents = node.descendents;
    this.parent = node.parent;
    this.parentSide = node.parentSide;
    this.meta = node.meta;
  }

  clone() {
    return _.cloneDeep(this);
  }

  get left() {
    return this.descendents[LEFT];
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

  /**
   * Return true if this node is its parent left child
   */
  get isParentLeftChild() {
    return this.parentSide === LEFT;
  }

  get right() {
    return this.descendents[RIGHT];
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
}

module.exports = TreeNode;
