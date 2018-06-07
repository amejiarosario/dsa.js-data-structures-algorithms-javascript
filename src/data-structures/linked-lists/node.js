/**
 * Node with reference to next and previous element
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

module.exports = Node;