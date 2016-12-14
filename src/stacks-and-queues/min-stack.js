class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class MinStack {
  constructor() {
    this.head = null;
    this.minNode = null;
  }

  /**
   * AddFirst O(1)
   * @param data
   */
  push(data) {
    const node = new Node(data);

    if(this.head) {
      node.next = this.head;
    } else {
      this.minNode = node;
    }

    this.head = node;

    if(this.minNode.data > node.data) {
      this.minNode = node;
    }
  }

  /**
   * RemoveFirst
   * @returns {*}
   */
  pop() {
    const out = this.head;
    this.head = this.head.next;
    return out.data;
  }

  min() {
    return this.minNode.data;
  }
}

module.exports = MinStack;