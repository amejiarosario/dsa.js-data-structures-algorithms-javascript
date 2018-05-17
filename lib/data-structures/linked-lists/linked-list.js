const Node = require('./node');

class LinkedList {
  constructor() {
    this.root = null;
  }

  addLast(value) {
    const node = new Node(value);

    if(this.root) {
      let currentNode = this.root;
      while(currentNode && currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    } else {
      this.root = node;
    }
  }
}

module.exports = LinkedList;