const Node = require('./node');

/**
 * Singly LinkedList data structure
 * Trying to keep this interface https://docs.oracle.com/javase/7/docs/api/java/util/LinkedList.html
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Add element to the tail
   * @param data
   * @returns {Node}
   */
  addLast(data){
    const node = getNode(data);
    if(this.head) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
    this.length++;
    return node;
  }

  /**
   * Add element to the head
   * @param data
   */
  addFirst(data) {
    const node = getNode(data);
    if(this.head) {
      node.next = this.head;
    } else {
      this.tail = node;
    }
    this.head = node;
    this.length++;
    return node;
  }

  // O(1)
  add(data) {
    return this.addFirst(data);
  }

  // O(n)
  delete(data) {
    let n = this.head;

    // remove from head
    if(n.data === data) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    // iterate
    while(n.next){
      if(n.next.data === data) {
        n.next = n.next.next;
        this.length--;
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

  size() {
    return this.length;
  }
}

function getNode(dataOrNode) {
  return dataOrNode instanceof Node ? dataOrNode : new Node(dataOrNode);
}

module.exports = LinkedList;