const Node = require('./node');

/**
 * Graph that uses an adjacent list
 *
 * Most common operations:
 * - Add vertex
 * - Add edge
 * - Remove vertex
 * - Remove edge
 * - Query (query if two vertices are connected)
 *
 *  - Graph search (BFS, DFS)
 *
 * - Find path (between two vertices)
 * - Find all paths (between two vertices)
 * - Find shortest paths (between two vertices)
 */
class Graph {
  constructor(edgeDirection = Graph.DIRECTED) {
    this.nodes = new Map();
    this.edgeDirection = edgeDirection;
  }

  addVertex(value) {
    if(this.nodes.has(value)) {
      return this.nodes.get(value);
    } else {
      const vertex = new Node(value);
      this.nodes.set(value, vertex);
      return vertex;
    }
  }

  removeVertex(value) {
    return this.nodes.delete(value);
  }
}

Graph.UNDIRECTED = Symbol('directed graph'); // one-way edges
Graph.DIRECTED = Symbol('undirected graph'); // two-ways edges

module.exports = Graph;