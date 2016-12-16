const LinkedList = require('../linked-list/linkedlist');

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.addLast(data);
  }

  pop() {
    return this.list.removeLast();
  }

  peek() {
    if(!this.list.tail) { return; }
    return this.list.tail.data;
  }
}

module.exports = Stack;