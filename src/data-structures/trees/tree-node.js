class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendents = [];
  }

  get left() {
    return this.descendents[0];
  }

  set left(value) {
    this.descendents[0] = value;
  }

  get right() {
    return this.descendents[1];
  }

  set right(value) {
    this.descendents[1] = value;
  }
}

module.exports = TreeNode;
