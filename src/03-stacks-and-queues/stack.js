const LinkedList = require('../02-linked-list/linkedlist');

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

  isEmpty() {
    return typeof this.peek() === 'undefined';
  }

  size() {
    return this.list.size();
  }
}

module.exports = Stack;