/**
 * Data structure that adds and remove elements in a last-in, first-out (LIFO) fashion
 */
class Stack {
  constructor() {
    this.input = [];
  }

  /**
   * Add element into the stack
   * Runtime: O(1)
   * @param {any} element
   */
  add(element) {
    this.input.push(element);
    return this;
  }

  /**
   * Remove element from the stack
   * Runtime: O(1)
   */
  remove() {
    return this.input.pop();
  }

  /**
   * Size of the queue
   */
  get size() {
    return this.input.length;
  }
}

// aliases
Stack.prototype.push = Stack.prototype.add;
Stack.prototype.pop = Stack.prototype.remove;

module.exports = Stack;
