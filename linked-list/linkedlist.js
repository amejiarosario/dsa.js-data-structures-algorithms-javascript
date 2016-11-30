const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Add element to the tail
   * @param data
   * @returns {Node}
   */
  addLast(data){
    const node = new Node(data);
    if(this.head) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
    return node;
  }

  /**
   * Add element to the head
   * @param data
   */
  addFirst(data) {
    const node = new Node(data);
    if(this.head) {
      node.next = this.head;
    } else {
      this.tail = node;
    }
    this.head = node;
    return node;
  }

  // O(1)
  add(data) {
    return this.addFirst(data);
  }

  // O(n)
  delete(data) {
    let n = this.head;

    if(n.data === data) {
      this.head = this.head.next;
      return;
    }

    // iterate
    while(n.next){
      if(n.next.data === data) {
        n.next = n.next.next;
        return;
      }
      n = n.next;
    }
  }

  // O(n)
  toString() {
    let data = [];
    let n = this.head;
    while(n) {
      data.push(n.data);
      n = n.next;
    }
    return data.join(' -> ');
  }
}

function test() {
  let list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);

  console.log(list);

  list.delete(4);
  console.log(list);

  list.delete(2);
  console.log(list);

  list.delete(1);
  console.log(list);
};

// test();

module.exports = LinkedList;