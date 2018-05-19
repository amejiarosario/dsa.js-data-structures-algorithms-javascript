const Node = require('./node');

/**
 * Singly linked list
 */
class LinkedList {
  constructor() {
    this.first = null; // head/root element
  }

  /**
   * Adds element to the end of the list (tail). Similar to Array.push
   * Runtime: O(n)
   * @param {any} value
   */
  addLast(value) {
    const node = new Node(value);

    if(this.first) {
      let currentNode = this.first;
      while(currentNode && currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    } else {
      this.first = node;
    }
  }

  /**
   * Removes element from the start of the list (head/root). similar Array.shift
   * Runtime: O(1)
   */
  removeFirst() {
    const first = this.first;

    if(first) {
      this.first = first.next;
      return first.value;
    }
  }

  /**
   * Adds element to the begining of the list. Similar to Array.unshift
   * Runtime: O(1)
   * @param {any} value
   */
  addFirst(value) {
    const node = new Node(value);
    node.next = this.first;
    this.first = node;
  }

  /**
   * Removes element to the end of the list
   * similar to Array.pop
   * Runtime: O(n)
   */
  removeLast() {
    let current = this.first;
    let target;

    if(current && current.next) {
      while(current && current.next && current.next.next) {
        current = current.next;
      }
      target = current.next;
      current.next = null;
    } else {
      this.first = null;
      target = current;
    }

    if(target) {
      return target.value;
    }
  }
}

module.exports = LinkedList;