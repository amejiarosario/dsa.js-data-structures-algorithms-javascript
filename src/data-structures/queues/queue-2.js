/**
 * Data structure where add and remove elements in a first-in, first-out (FIFO)
 */
class Queue {
  constructor() {
    this.input = [];
    this.output = [];
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
   * Remove element from the queue
   * Runtime: O(n)
   * Amortized runtime: O(1)*
   */
  remove() {
    if (!this.output.length) {
      while (this.input.length) {
        this.output.push(this.input.pop());
      }
    }
    return this.output.pop();
  }

  /**
   * Size of the queue
   */
  get size() {
    return this.input.length + this.output.length;
  }
}

// Aliases
Queue.prototype.enqueue = Queue.prototype.add;
Queue.prototype.dequeue = Queue.prototype.remove;

module.exports = Queue;
