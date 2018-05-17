const Node = require('./node');

class LinkedList {
  constructor() {
    this.root = null;
  }

  addLast(value) { // like Array.push
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

  removeFirst() { // like Array.shift
    const first = this.root;

    if(first) {
      this.root = first.next;
      return first.value;
    }
  }
}

module.exports = LinkedList;