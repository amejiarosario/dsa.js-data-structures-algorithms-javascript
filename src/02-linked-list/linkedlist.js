const Node = require('./node');

/**
 * Singly LinkedList data structure
 * Trying to keep this interface https://docs.oracle.com/javase/7/docs/api/java/util/LinkedList.html
 */
class LinkedList {
  constructor() {
    this.head;
    this.tail;
    this.length = 0;
  }

  /**
   * Add element to the tail
   * @param dataOrNode
   * @returns {Node}
   */
  addLast(dataOrNode, once = false){
    let node = getNode(dataOrNode);
    if(this.head) {
      this.tail.next = node;
    } else {
      this.head = node;
    }

    while(node) {
      this.tail = node;
      this.length++;
      if(!node.next || once) { break; }
      node = node.next;
    }
    return node;
  }

  /**
   * Add element to the head
   * @param data
   */
  addFirst(dataOrNode) {
    const node = getNode(dataOrNode);
    if(this.head) {
      node.next = this.head;
    } else {
      this.tail = node;
    }
    this.head = node;
    this.length++;
    return node;
  }

  // O(1)
  add(dataOrNode) {
    return this.addFirst(dataOrNode);
  }

  /**
   * O(n)
   * @returns {*}
   */
  removeLast() {
    const last = this.tail;

    if(!last) { return; }

    let beforeLast = this.head;
    while(beforeLast.next && beforeLast.next.next) { beforeLast = beforeLast.next; }

    if(beforeLast === this.head && !this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      beforeLast.next = null;
      this.tail = beforeLast;
    }
    this.length --;

    return last.data;
  }

  /**
   * Remove first element from list
   *
   * O(1)
   *
   * @returns {*} removed element
   */
  removeFirst() {
    if(!this.head) { return; }

    const first = this.head;
    this.head = first.next;
    this.length--;
    if(this.length <= 1) { this.tail = this.head; }
    return first.data;
  }

  // O(n)
  delete(query) {
    let n = this.head;
    let data = n.data;

    // remove from head
    if(isMatch(data, query)) {
      this.head = this.head.next;
      this.length--;
      return data;
    }

    // iterate
    while(n.next){
      data = n.next.data;
      if(isMatch(data, query)) {
        n.next = n.next.next;
        this.length--;
        return data;
      }
      n = n.next;
    }
  }

  // O(n)
  toString(key) {
    let data = [];
    let n = this.head;
    while(n) {
      data.push(key ? n.data[key] : n.data);
      n = n.next;
    }
    return data.join(' -> ');
  }

  size() {
    return this.length;
  }
}

function getNode(dataOrNode) {
  return dataOrNode instanceof Node ? dataOrNode : new Node(dataOrNode);
}

function isMatch(original, query) {

  if(typeof original !== 'object') {
    return original === query;
  }

  for(let key in query) {
    if(key && query[key] !== original[key]) {
      return false;
    }
  }
  return true;
}

module.exports = LinkedList;