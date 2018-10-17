const HashSet = require('../sets/hash-set');

// tag::constructor[]
/**
 * Graph node/vertex that hold adjacencies nodes
 * For performance, uses a HashSet instead of array for adjacents.
 */
class Node {
    constructor(value) {
      this.value = value;
      this.adjacents = new HashSet(); // adjacency list
    }
  // end::constructor[]
  
    /**
     * Add node to adjacency list
     * Runtime: O(1)
     * @param {Node} node
     */
    addAdjacent(node) {
      this.adjacents.add(node);
    }
  
    /**
     * Remove node from adjacency list
     * Runtime: O(1)
     * @param {Node} node
     * @returns removed node or `false` if node was not found
     */
    removeAdjacent(node) {
      return this.adjacents.delete(node);
    }
  
    /**
     * Check if a Node is adjacent to other
     * Runtime: O(1)
     * @param {Node} node
     */
    isAdjacent(node) {
      return this.adjacents.has(node);
    }
  
    /**
     * Get all adjacent nodes
     */
    getAdjacents() {
      return Array.from(this.adjacents);
    }
  }
  
  module.exports = Node;
  