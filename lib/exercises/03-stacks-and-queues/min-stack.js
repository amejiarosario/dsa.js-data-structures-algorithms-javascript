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
    this.minimums = [];
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
      this.minimums.push(node);
    }

    this.head = node;

    if(this.minNode.data > node.data) {
      this.minNode = node;
      this.minimums.push(node);
    }
  }

  /**
   * RemoveFirst
   * @returns {*}
   */
  pop() {
    const out = this.head;

    if(!out) { return; }

    this.head = this.head.next;

    if(out === this.minNode) {
      this.minimums.pop();
      this.minNode = this.minimums[this.minimums.length - 1];
    }

    return out.data;
  }

  min() {
    if(!this.minNode) { return; }
    return this.minNode.data;
  }
}

module.exports = MinStack;