// tag::constructor[]
/**
 * Graph node/vertex that hold adjacencies nodes
 */
class Node {
  constructor(value) {
    this.value = value;
    this.adjacents = []; // adjacency list
  }
  // end::constructor[]

  /**
   * Add node to adjacency list
   * Runtime: O(1)
   * @param {Node} node
   */
  addAdjacent(node) {
    this.adjacents.push(node);
  }

  /**
   * Remove node from adjacency list
   * Runtime: O(n)
   * @param {Node} node
   * @returns removed node or `undefined` if node was not found
   */
  removeAdjacent(node) {
    const index = this.adjacents.indexOf(node);
    if (index > -1) {
      this.adjacents.splice(index, 1);
      return node;
    }
    return undefined;
  }

  /**
   * Check if a Node is adjacent to other
   * Runtime: O(n)
   * @param {Node} node
   */
  isAdjacent(node) {
    return this.adjacents.indexOf(node) > -1;
  }

  /**
   * Get all adjacent nodes
   */
  getAdjacents() {
    return this.adjacents;
  }
}

module.exports = Node;
