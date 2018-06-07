/**
 * Data structure where add and remove elements in a first-in, first-out (FIFO)
 */
class Queue {
  constructor() {
    this.input = [];
  }

  /**
   * Add element to the queue
   * Runtime: O(1)
   * @param {any} element
   */
  add(element) {
    this.input.push(element);
  }

  /**
   * Add element to the queue
   * Runtime: O(1)
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
