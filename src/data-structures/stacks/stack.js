const LinkedList = require('../linked-lists/linked-list');
// tag::constructor[]
/**
 * Data structure that adds and remove elements in a first-in, first-out (FIFO) fashion
 */
class Stack {
  constructor() {
    this.items = new LinkedList();
  }
  // end::constructor[]

  // tag::add[]
  /**
   * Add element into the stack. Similar to Array.push
   * Runtime: O(1)
   * @param {any} item
   * @returns {stack} instance to allow chaining.
   */
  add(item) {
    this.items.addLast(item);
    return this;
  }
  // end::add[]

  // tag::remove[]
  /**
   * Remove element from the stack.
   * Similar to Array.pop
   * Runtime: O(1)
   * @returns {any} removed value.
   */
  remove() {
    return this.items.removeLast();
  }
  // end::remove[]

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

/* Usage Example:
// tag::snippet[]
const stack = new Stack();

stack.add('a');
stack.add('b');
stack.remove(); //↪️ b
stack.add('c');
stack.remove(); //↪️ c
stack.remove(); //↪️ a
// end::snippet[]
//*/

