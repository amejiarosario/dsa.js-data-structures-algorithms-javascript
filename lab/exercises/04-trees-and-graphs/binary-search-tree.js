class BinarySearchTree {
  constructor() {
    this.binaryTree = [];
  }

  add(element){
    this.binaryTree.push(element);
  }

  toString() {
    return this.binaryTree.join(', ');
  }
}

module.exports = BinarySearchTree;