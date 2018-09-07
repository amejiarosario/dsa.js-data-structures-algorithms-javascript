const Node = require('./node');

/**
 * Doubly linked list that keeps track of
 * the last and first element
 */
class LinkedList {
  constructor() {
    this.first = null; // head/root element
    this.last = null; // last element of the list
    this.size = 0; // total number of elements in the list
  }

  /**
   * Adds element to the begining of the list. Similar to Array.unshift
   * Runtime: O(1)
   * @param {any} value
   */
  addFirst(value) {
    const node = new Node(value);

    node.next = this.first;

    if (this.first) {
      this.first.previous = node;
    } else {
      this.last = node;
    }

    this.first = node; // update head
    this.size += 1;

    return node;
  }

  /**
   * Adds element to the end of the list (tail). Similar to Array.push
   * Using the element last reference instead of navigating through the list,
   * we can reduced from linear to a constant runtime.
   * Runtime: O(1)
   * @param {any} value node's value
   * @returns {Node} newly created node
   */
  addLast(value) {
    const newNode = new Node(value);

    if (this.first) {
      newNode.previous = this.last;
      this.last.next = newNode;
      this.last = newNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }

    this.size += 1;

    return newNode;
  }

  /**
   * Insert new element at the given position (index)
   *
   * @param {any} value new node's value
   * @param {Number} position position to insert element
   * @returns {Node} new node or 'undefined' if the index is out of bound.
   */
  add(value, position = 0) {
    if (position === 0) {
      return this.addFirst(value);
    }

    if (position === this.size) {
      return this.addLast(value);
    }

    for (let current = this.first, index = 0;
      index <= this.size;
      index += 1, current = (current && current.next)) {
      if (index === position) {
        const newNode = new Node(value);
        newNode.previous = current.previous;
        newNode.next = current;

        current.previous.next = newNode;
        if (current.next) { current.next.previous = newNode; }
        this.size += 1;
        return newNode;
      }
    }

    return undefined; // out of bound index
  }

  /**
   * Removes element from the start of the list (head/root). similar Array.shift
   * Runtime: O(1)
   */
  removeFirst() {
    const first = this.first;

    if (first) {
      this.first = first.next;
      if (this.first) {
        this.first.previous = null;
      }

      this.size--;

      return first.value;
    }
    this.last = null;
  }

  /**
   * Removes element to the end of the list
   * similar to Array.pop
   * Using the `last.previous` we can reduce the runtime from O(n) to O(1)
   * Runtime: O(1)
   */
  removeLast() {
    let current = this.first;
    let target;

    if (current && current.next) {
      current = this.last.previous;
      this.last = current;
      target = current.next;
      current.next = null;
    } else {
      this.first = null;
      this.last = null;
      target = current;
    }

    if (target) {
      this.size--;
      return target.value;
    }
  }

  /**
   * Search by value. It finds first occurrence  of
   * the element matching the value.
   * Runtime: O(n)
   * @param {any} value
   * @returns {number} return index or undefined
   */
  indexOf(value) {
    for (let current = this.first, index = 0;
      current;
      index += 1, current = current.next) {
      if (current.value === value) {
        return index;
      }
    }
    return undefined; // not found
  }

  /**
   * Search by index
   * Runtime: O(n)
   * @param {Number} index position of the element
   * @returns {Node} element at the specified position in this list.
   */
  get(index = 0) {
    for (let current = this.first, position = 0;
      current;
      position += 1, current = current.next) {
      if (position === index) {
        return current;
      }
    }
    return undefined; // not found
  }

  /**
   * Remove the nth element from the list. Starting with 0
   * Returns value if found or undefined if it was not found
   * Runtime: O(n)
   * @param {any} index
   */
  remove(index = 0) {
    if (index === 0) {
      return this.removeFirst();
    }

    for (let current = this.first, i = 0; current; i++, current = current.next) {
      if (i === index) {
        if (!current.next) { // if it doesn't have next it means that it is the last
          return this.removeLast();
        }
        current.previous = current.next;
        this.size--;
        return current.value;
      }
    }
  }
}

// Aliases
LinkedList.prototype.push = LinkedList.prototype.addLast;
LinkedList.prototype.pop = LinkedList.prototype.removeLast;
LinkedList.prototype.unshift = LinkedList.prototype.addFirst;
LinkedList.prototype.shift = LinkedList.prototype.removeFirst;
LinkedList.prototype.search = LinkedList.prototype.contains;

module.exports = LinkedList;
