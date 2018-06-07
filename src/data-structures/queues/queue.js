const LinkedList = require('../linked-lists/linked-list');

/**
 * Data structure where add and remove elements in a first-in, first-out (FIFO)
 */
class Queue {
  constructor() {
    this.input = new LinkedList();
  }

  /**
   * Add element to the queue
   * Runtime: O(1)
   * @param {any} element
   */
  add(element) {
    this.input.addFirst(element);
  }

  /**
   * Remove element from the queue
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

// Aliases
Queue.prototype.enqueue = Queue.prototype.add;
Queue.prototype.dequeue = Queue.prototype.remove;

module.exports = Queue;
