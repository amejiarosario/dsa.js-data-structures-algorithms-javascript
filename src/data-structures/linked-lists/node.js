// tag::snippet[]
/**
 * Node with reference to next and previous element
 */
class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
    this.previous = null; // for doubly linked list
  }
}
// end::snippet[]

module.exports = Node;
