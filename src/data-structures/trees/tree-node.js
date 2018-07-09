class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendents = [];
    this.parent = null;
    this.meta = {};
  }

  get left() {
    return this.descendents[0];
  }

  /**
   * Set a left node descendents.
   * Also, children get associated to parent.
   */
  set left(node) {
    this.descendents[0] = node;
    if (node) { node.parent = this; } // eslint-disable-line  no-param-reassign
  }

  get right() {
    return this.descendents[1];
  }

  /**
   * Set a right node descendents.
   * Also, children get associated to parent.
   */
  set right(node) {
    this.descendents[1] = node;
    if (node) { node.parent = this; } // eslint-disable-line  no-param-reassign
  }
}

module.exports = TreeNode;
