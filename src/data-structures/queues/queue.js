const LinkedList = require('../linked-lists/linked-list');

/**
 * Data structure where add and remove elements in a first-in, first-out (FIFO)
 */
class Queue {
  constructor() {
    this.items = new LinkedList();
  }

  /**
   * Add element to the queue
   * Runtime: O(1)
   * @param {any} item
   */
  enqueue(item) {
    this.items.addLast(item);
  }

  /**
   * Remove element from the queue
   * Runtime: O(1)
   */
  dequeue() {
    return this.items.removeFirst();
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

// Aliases
Queue.prototype.add = Queue.prototype.enqueue;
Queue.prototype.remove = Queue.prototype.dequeue;

module.exports = Queue;

