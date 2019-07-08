/**
 * Data structure where add and remove elements in a first-in, first-out (FIFO)
 */
class Queue {
  constructor() {
    this.input = [];
  }

  /**
   * Add element to the queue
   * Insert to the end of the array
   * Runtime: O(1)
   * @param {any} element
   */
  add(element) {
    this.input.push(element);
  }

  /**
   * Add element to the queue
   * Removing from the beginning of the array
   * Runtime: O(n)
   * @param {any} element
   */
  remove() {
    return this.input.shift();
  }

  /**
   * Size of the queue
   */
  get size() {
    return this.input.length;
  }
}

module.exports = Queue;
