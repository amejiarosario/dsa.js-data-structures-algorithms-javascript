const LinkedList = require('../linked-lists/linked-list');

/**
 * Data structure that adds and remove elements in a last-in, first-out (LIFO) fashion
 */
class Stack {
  constructor() {
    this.input = new LinkedList();
  }

  /**
   * Add element into the stack
   * Runtime: O(1)
   * @param {any} element
   */
  add(element) {
    this.input.addLast(element);
    return this;
  }

  /**
   * Remove element from the stack
   * Runtime: O(1)
   */
  remove() {
    return this.input.removeLast();
  }

  /**
   * Size of the queue
   */
  get size() {
    return this.input.size;
  }

  /**
   * Return true if is empty false otherwise true
   */
  isEmpty() {
    return !this.input.size;
  }
}

// aliases
Stack.prototype.push = Stack.prototype.add;
Stack.prototype.pop = Stack.prototype.remove;

module.exports = Stack;

