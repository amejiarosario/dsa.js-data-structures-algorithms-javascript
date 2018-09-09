const LinkedList = require('../linked-lists/linked-list');

/**
 * Data structure that adds and remove elements in a first-in, first-out (FIFO) fashion
 */
class Stack {
  constructor() {
    this.items = new LinkedList();
  }

  /**
   * Add element into the stack.
   * Similar to Array.push
   * Runtime: O(1)
   * @param {any} item
   */
  add(item) {
    this.items.addLast(item);
    return this;
  }

  /**
   * Remove element from the stack.
   * Similar to Array.pop
   * Runtime: O(1)
   */
  remove() {
    return this.items.removeLast();
  }

  /**
   * Size of the queue
   */
  get size() {
    return this.items.size;
  }

  /**
   * Return true if is empty false otherwise true
   */
  isEmpty() {
    return !this.items.size;
  }
}

// aliases
Stack.prototype.push = Stack.prototype.add;
Stack.prototype.pop = Stack.prototype.remove;

module.exports = Stack;

