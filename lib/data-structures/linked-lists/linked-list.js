const Node = require('./node');

/**
 * Doubly linked list that keeps track of the last and first element
 */
class LinkedList {
  constructor() {
    this.first = null; // head/root element
    this.last = null; // last element of the list
    this.size = 0; // total number of elements in the list
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
      node.previous = this.last;
      this.last.next = node;
      this.last = node;
    } else {
      this.first = node;
      this.last = node;
    }

    this.size++;

    return node;
  }

  /**
   * Removes element from the start of the list (head/root). similar Array.shift
   * Runtime: O(1)
   */
  removeFirst() {
    const first = this.first;

    if(first) {
      this.first = first.next;
      if(this.first) {
        this.first.previous = null;
      }

      this.size--;

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

    if(this.first) {
      this.first.previous = node;
    } else {
      this.last = node;
    }

    this.first = node; // update head
    this.size++;

    return node;
  }

  /**
   * Removes element to the end of the list
   * similar to Array.pop
   * Using the `last.previous` we can reduce the runtime from O(n) to O(1)
   * Runtime: O(1)
   */
  removeLast() {
    let current = this.first;
    let target;

    if(current && current.next) {
      current = this.last.previous;
      this.last = current;
      target = current.next;
      current.next = null;
    } else {
      this.first = null;
      this.last = null;
      target = current;
    }

    if(target) {
      this.size--;
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