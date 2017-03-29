const LinkedList = require('./linkedlist');

class Queue {
  constructor(){
    this.list = new LinkedList();
  }

  add(data) {
    this.list.addLast(data);
  }

  remove() {
    return this.list.removeFirst();
  }

  peek() {
    if(this.isEmpty()) { return; }
    return this.list.head.data;
  }

  isEmpty() {
    return !this.list.size();
  }

  removeBy(query) {
    return this.list.delete(query);
  }
}

module.exports = Queue;