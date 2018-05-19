const Node = require('./node');

/**
 * Singly linked list
 */
class LinkedList {
  constructor() {
    this.root = null;
  }

  /**
   * Adds element to the end of the list (tail)
   * Runtime: O(n)
   * @param {any} value
   */
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

  /**
   * Removes element from the start of the list (head/root)
   * Runtime: O(1)
   */
  removeFirst() { // similar Array.shift
    const first = this.root;

    if(first) {
      this.root = first.next;
      return first.value;
    }
  }

  /**
   * Adds element to the begining of the list
   * Runtime: O(1)
   * @param {any} value
   */
  addFirst(value) { // similar to Array.unshift
    const node = new Node(value);
    node.next = this.root;
    this.root = node;
  }

  /**
   * Removes element to the end of the list
   * similar to Array.pop
   * Runtime: O(n)
   */
  removeLast() {
    let current = this.root;
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