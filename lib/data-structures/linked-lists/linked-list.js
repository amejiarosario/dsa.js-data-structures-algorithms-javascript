const Node = require('./node');

/**
 * Doubly linked list that keeps track of the last and first element
 */
class LinkedList {
  constructor() {
    this.first = null; // head/root element
    this.last = null; // last element of the list
    this.size = 0; // total number of elements in the list
  }

  /**
   * Adds element to the end of the list (tail). Similar to Array.push
   * Using the element last reference instead of finding last, we can reduce the runtime from O(n) to O(1)
   * Runtime: O(1)
   * @param {any} value
   */
  addLast(value) {
    const newNode = new Node(value);

    if(this.first) {
      newNode.previous = this.last;
      this.last.next = newNode;
      this.last = newNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }

    this.size++;

    return newNode;
  }

  /**
   * Removes element from the start of the list (head/root). similar Array.shift
   * Runtime: O(1)
   */
  removeFirst() {
    const first = this.first;

    if(first) {
      this.first = first.next;
      if(this.first) {
        this.first.previous = null;
      }

      this.size--;

      return first.value;
    } else {
      this.last = null;
    }
  }

  /**
   * Adds element to the begining of the list. Similar to Array.unshift
   * Runtime: O(1)
   * @param {any} value
   */
  addFirst(value) {
    const node = new Node(value);

    node.next = this.first;

    if(this.first) {
      this.first.previous = node;
    } else {
      this.last = node;
    }

    this.first = node; // update head
    this.size++;

    return node;
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

    if(current && current.next) {
      current = this.last.previous;
      this.last = current;
      target = current.next;
      current.next = null;
    } else {
      this.first = null;
      this.last = null;
      target = current;
    }

    if(target) {
      this.size--;
      return target.value;
    }
  }

  /**
   * Find first occurence of the element matching the value
   * return index or undefined
   * Runtime: O(n)
   * @param {any} value
   */
  contains(value) {
    for (let current = this.first, index = 0; current;  index++, current = current.next) {
      if(current.value === value) {
        return index;
      }
    }
  }

  /**
   * Remove the nth element from the list. Starting with 0
   * Returns value if found or undefined if it was not found
   * Runtime: O(n)
   * @param {any} index
   */
  removeAt(index) {
    if(index === 0) {
      return this.removeFirst();
    }

    for (let current = this.first, i = 0; current;  i++, current = current.next) {
      if(i === index) {
        if(!current.next) { // if it doesn't have next it means that it is the last
          return this.removeLast();
        }
        current.previous = current.next;
        this.size--;
        return current.value;
      }
    }
  }

  /**
   * Insert new element on the given position
   * Returns index if it failed to insert element (index out of bounds), otherwise undefined
   * @param {any} value new node's value
   * @param {Number} index position to insert element
   */
  add(value, index = 0) {
    if(index === 0) {
      return this.addFirst(value);
    }

    for (let current = this.first, i = 0; i <= this.size;  i++, current = (current && current.next)) {
      if(i === index) {
        if(i === this.size) { // if it doesn't have next it means that it is the last
          return this.addLast(value);
        }
        const newNode = new Node(value);
        newNode.previous = current.previous;
        newNode.next = current;

        current.previous.next = newNode;
        if(current.next) { current.next.previous = newNode; }
        this.size++;
        return newNode;
      }
    }
  }

}

// Aliases
LinkedList.prototype.push = LinkedList.prototype.addLast;
LinkedList.prototype.remove = LinkedList.prototype.pop = LinkedList.prototype.removeLast;
LinkedList.prototype.unshift = LinkedList.prototype.addFirst;
LinkedList.prototype.shift = LinkedList.prototype.removeFirst;
LinkedList.prototype.search = LinkedList.prototype.contains;

module.exports = LinkedList;