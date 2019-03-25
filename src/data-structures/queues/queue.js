const LinkedList = require('../linked-lists/linked-list');

// tag::constructor[]
/**
 * Data structure where add and remove elements in a first-in, first-out (FIFO)
 */
class Queue {
  constructor() {
    this.items = new LinkedList();
  }
  // end::constructor[]

  // tag::enqueue[]
  /**
   * Add element to the queue
   * Runtime: O(1)
   * @param {any} item
   * @returns {queue} instance to allow chaining.
   */
  enqueue(item) {
    this.items.addLast(item);
    return this;
  }
  // end::enqueue[]

  // tag::dequeue[]
  /**
   * Remove element from the queue
   * Runtime: O(1)
   * @returns {any} removed value.
   */
  dequeue() {
    return this.items.removeFirst();
  }
  // end::dequeue[]
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

/* Usage Example:
// tag::snippet[]
const queue = new Queue();

queue.enqueue('a');
queue.enqueue('b');
queue.dequeue(); //↪️ a
queue.enqueue('c');
queue.dequeue(); //↪️ b
queue.dequeue(); //↪️ c
// end::snippet[]
// */

