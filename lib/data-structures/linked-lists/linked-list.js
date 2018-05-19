const Node = require('./node');

/**
 * Singly linked list
 */
class LinkedList {
  constructor() {
    this.first = null; // head/root element
    this.last = null;
  }

  /**
   * Adds element to the end of the list (tail). Similar to Array.push
   * Using the element last reference instead of finding last, we can reduce the runtime from O(n) to O(1)
   * Runtime: O(1)
   * @param {any} value
   */
  addLast(value) {
    const node = new Node(value);

    if(this.first) {
      let currentNode = this.first;
      this.last.next = node;
      this.last = node;
    } else {
      this.first = node;
      this.last = node;
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
    } else {
      this.last = null;
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
    if(!this.first) {
      this.last = node;
    }
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
      this.last = current;
      target = current.next;
      current.next = null;
    } else {
      this.first = null;
      this.last = null;
      target = current;
    }

    if(target) {
      return target.value;
    }
  }
}

// Aliases
LinkedList.prototype.add = LinkedList.prototype.push = LinkedList.prototype.addLast;
LinkedList.prototype.remove = LinkedList.prototype.pop = LinkedList.prototype.removeLast;
LinkedList.prototype.unshift = LinkedList.prototype.addFirst;
LinkedList.prototype.shift = LinkedList.prototype.removeFirst;

module.exports = LinkedList;