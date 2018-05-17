const Node = require('./node');

class LinkedList {
  constructor() {
    this.root = null;
  }

  addLast(value) { // similar Array.push
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

  removeFirst() { // similar Array.shift
    const first = this.root;

    if(first) {
      this.root = first.next;
      return first.value;
    }
  }

  addFirst(value) { // similar to Array.unshift
    const node = new Node(value);
    node.next = this.root;
    this.root = node;
  }

  removeLast() { // similar to Array.pop
    const current = this.root;
    let target;

    if(current && current.next) {
      while(current && current.next && current.next.next) {
        current = current.next;
      }
      target = current.next;
      current.next = null;
    } else {
      this.root = null;
      target = current;
    }

    if(target) {
      return target.value;
    }
  }
}

module.exports = LinkedList;