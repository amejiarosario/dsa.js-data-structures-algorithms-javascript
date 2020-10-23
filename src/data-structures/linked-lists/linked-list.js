const util = require('util');
const Node = require('./node');

// tag::constructor[]
/**
 * Doubly linked list that keeps track of
 * the last and first element
 */
class LinkedList {
  constructor(iterable = []) {
    this.first = null; // head/root element
    this.last = null; // last element of the list
    this.size = 0; // total number of elements in the list

    Array.from(iterable, (i) => this.addLast(i));
  }
  // end::constructor[]

  // tag::addFirst[]
  /**
   * Adds element to the begining of the list. Similar to Array.unshift
   * Runtime: O(1)
   * @param {any} value
   */
  addFirst(value) {
    const newNode = new Node(value);

    newNode.next = this.first;

    if (this.first) { // check if first node exists (list not empty)
      this.first.previous = newNode; // <1>
    } else { // if list is empty, first & last will point to newNode.
      this.last = newNode;
    }

    this.first = newNode; // update head
    this.size += 1;

    return newNode;
  }
  // end::addFirst[]

  // tag::addLast[]
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

    if (this.first) { // check if first node exists (list not empty)
      newNode.previous = this.last;
      this.last.next = newNode;
      this.last = newNode;
    } else { // if list is empty, first & last will point to newNode.
      this.first = newNode;
      this.last = newNode;
    }

    this.size += 1;

    return newNode;
  }
  // end::addLast[]

  // tag::addMiddle[]
  /**
   * Insert new element at the given position (index)
   *
   * Runtime: O(n)
   *
   * @param {any} value new node's value
   * @param {Number} position position to insert element
   * @returns {Node|undefined} new node or 'undefined' if the index is out of bound.
   */
  addAt(value, position = 0) {
    if (position === 0) return this.addFirst(value); // <1>
    if (position === this.size) return this.addLast(value); // <2>

    // Adding element in the middle
    const current = this.findBy({ index: position }).node;
    if (!current) return undefined; // out of bound index

    const newNode = new Node(value); // <3>
    newNode.previous = current.previous; // <4>
    newNode.next = current; // <5>
    current.previous.next = newNode; // <6>
    current.previous = newNode; // <7>
    this.size += 1;
    return newNode;
  }
  // end::addMiddle[]

  // tag::searchByValue[]
  /**
   * @deprecated use findBy
   * Search by value. It finds first occurrence  of
   * the position of element matching the value.
   * Similar to Array.indexOf.
   *
   * Runtime: O(n)
   *
   * @example: assuming a linked list with: a -> b -> c
   *  linkedList.getIndexByValue('b') // ↪️ 1
   *  linkedList.getIndexByValue('z') // ↪️ undefined
   * @param {any} value
   * @returns {number} return index or undefined
   */
  getIndexByValue(value) {
    return this.findBy({ value }).index;
  }
  // end::searchByValue[]

  // tag::searchByIndex[]
  /**
   * @deprecated use findBy directly
   * Search by index
   * Runtime: O(n)
   * @example: assuming a linked list with: a -> b -> c
   *  linkedList.get(1) // ↪️ 'b'
   *  linkedList.get(40) // ↪️ undefined
   * @param {Number} index position of the element
   * @returns {Node|undefined} element at the specified position in
   *   this list or undefined if was not found.
   */
  get(index = 0) {
    return this.findBy({ index }).node;
  }
  // end::searchByIndex[]

  // tag::find[]
  /**
   * Find by index or by value, whichever happens first.
   * Runtime: O(n)
   * @example
   *  this.findBy({ index: 10 }).node; // node at index 10.
   *  this.findBy({ value: 10 }).node; // node with value 10.
   *  this.findBy({ value: 10 }).index; // node's index with value 10.
   *
   * @param {Object} params - The search params
   * @param {number} params.index - The index/position to search for.
   * @param {any} params.value - The value to search for.
   * @returns {{node: any, index: number}}
   */
  findBy({ value, index = Infinity } = {}) {
    for (let current = this.first, position = 0; // <1>
      current && position <= index; // <2>
      position += 1, current = current.next) { // <3>
      if (position === index || value === current.value) { // <4>
        return { node: current, index: position }; // <5>
      }
    }
    return {}; // not found
  }
  // end::find[]


  // tag::removeFirst[]
  /**
   * Removes element from the start of the list (head/root).
   * Similar to Array.shift().
   * Runtime: O(1)
   * @returns {any} the first element's value which was removed.
   */
  removeFirst() {
    if (!this.first) return null; // Check if list is already empty.
    const head = this.first;

    this.first = head.next; // move first pointer to the next element.
    if (this.first) {
      this.first.previous = null;
    } else { // if list has size zero, then we need to null out last.
      this.last = null;
    }
    this.size -= 1;
    return head.value;
  }
  // end::removeFirst[]

  // tag::removeLast[]
  /**
   * Removes element to the end of the list.
   * Similar to Array.pop().
   * Runtime: O(1)
   * @returns {any} the last element's value which was removed
   */
  removeLast() {
    if (!this.last) return null; // Check if list is already empty.
    const tail = this.last;

    this.last = tail.previous;
    if (this.last) {
      this.last.next = null;
    } else { // if list has size zero, then we need to null out first.
      this.first = null;
    }
    this.size -= 1;
    return tail.value;
  }
  // end::removeLast[]

  // tag::removeByPosition[]
  /**
   * Removes the element at the given position (index) in this list.
   * Runtime: O(n)
   * @param {any} position
   * @returns {any} the element's value at the specified position that was removed.
   */
  removeByPosition(position = 0) {
    if (position === 0) return this.removeFirst();
    if (position === this.size - 1) return this.removeLast();
    const current = this.findBy({ index: position }).node;
    if (!current) return null;
    current.previous.next = current.next;
    current.next.previous = current.previous;
    this.size -= 1;
    return current && current.value;
  }
  // end::removeByPosition[]

  /**
   * Remove element by Node
   * O(1)
   */
  removeByNode(node) {
    if (!node) { return null; }
    if (node === this.first) {
      return this.removeFirst();
    }
    if (node === this.last) {
      return this.removeLast();
    }
    node.previous.next = node.next;
    node.next.previous = node.previous;
    this.size -= 1;

    return node.value;
  }

  /**
   * Iterate through the list yield on each node
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#User-defined_iterables
   */
  * [Symbol.iterator]() {
    for (let node = this.first, position = 0;
      node;
      position += 1, node = node.next) {
      yield { node, position };
    }
  }

  toString() {
    const parts = [...this]; // see [Symbol.iterator]()
    return parts.map((n) => util.inspect(n.node.value)).join(' -> ');
  }

  /**
   * Alias for size
   */
  get length() {
    return this.size;
  }

  /**
   * @deprecated use findBy
   * Iterate through the list until callback returns a truthy value
   * @example see #get and  #getIndexByValue
   * @param {Function} callback evaluates current node and index.
   *  If any value other than undefined it's returned it will stop the search.
   * @returns {any} callbacks's return value or undefined
   */
  find(callback) {
    for (let current = this.first, position = 0; // <1>
      current; // <2>
      position += 1, current = current.next) { // <3>
      const result = callback(current, position); // <4>

      if (result !== undefined) {
        return result; // <5>
      }
    }
    return undefined; // not found
  }

  /**
   * @deprecated use removeByNode or removeByPosition
   * Removes the first occurrence of the specified elementt
   * from this list, if it is present.
   * Runtime: O(n)
   * @param {any} callbackOrIndex callback or position index to remove
   */
  remove(callbackOrIndex) {
    if (typeof callbackOrIndex !== 'function') {
      return this.removeByPosition(parseInt(callbackOrIndex, 10) || 0);
    }

    // find desired position to remove using #find
    const position = this.find((node, index) => {
      if (callbackOrIndex(node, index)) {
        return index;
      }
      return undefined;
    });

    if (position !== undefined) { // zero-based position.
      return this.removeByPosition(position);
    }

    return false;
  }
}

// Aliases
LinkedList.prototype.push = LinkedList.prototype.addLast;
LinkedList.prototype.pop = LinkedList.prototype.removeLast;
LinkedList.prototype.unshift = LinkedList.prototype.addFirst;
LinkedList.prototype.shift = LinkedList.prototype.removeFirst;
LinkedList.prototype.search = LinkedList.prototype.contains;

module.exports = LinkedList;
