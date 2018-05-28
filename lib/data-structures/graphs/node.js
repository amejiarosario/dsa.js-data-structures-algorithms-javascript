/**
 * Graph node/vertex that hold adjacencies
 */
class Node {
  constructor(value) {
    this.value = value;
    this.adjacents = []; // adjacency list
  }

  /**
   * Add node to adjacency list
   * @param {Node} node
   */
  addAdjacent(node) {
    this.adjacents.push(node);
  }

  /**
   * Remove node from adjacency list
   * @param {Node} node
   */
  removeAdjacent(node) {
    const index = this.adjacents.indexOf(node);
    if(index > -1) {
      this.adjacents.splice(index, 1);
      return node;
    }
  }

  /**
   * Get all adjacent nodes
   */
  getAdjacents() {
    return this.adjacents;
  }
}

module.exports = Node;