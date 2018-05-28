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
  /**
   * Initialize the nodes map
   * @param {Symbol} edgeDirection either `Graph.DIRECTED` or `Graph.UNDIRECTED`
   */
  constructor(edgeDirection = Graph.DIRECTED) {
    this.nodes = new Map();
    this.edgeDirection = edgeDirection;
  }

  /**
   * Add a node to the graph.
   * Returns the new node or the existing one if it already exits.
   * @param {any} value node's value
   */
  addVertex(value) {
    if(this.nodes.has(value)) {
      return this.nodes.get(value);
    } else {
      const vertex = new Node(value);
      this.nodes.set(value, vertex);
      return vertex;
    }
  }

  /**
   * Removes node from graph
   * @param {any} value node's value
   */
  removeVertex(value) {
    return this.nodes.delete(value);
  }

  addEdge(source, target) {
    const sourceNode = this.addVertex(source);
    const targetNode = this.addVertex(target);

    sourceNode.addAdjacent(targetNode);

    if(this.edgeDirection === Graph.UNDIRECTED) {
      targetNode.addAdjacent(sourceNode);
    }

    return [sourceNode, targetNode];
  }

  removeEdge(source, target) {
    const sourceNode = this.nodes.get(source);
    const targetNode = this.nodes.get(target);

    if(sourceNode && targetNode) {
      sourceNode.removeAdjacent(targetNode);

      if(this.edgeDirection === Graph.UNDIRECTED) {
        targetNode.removeAdjacent(sourceNode);
      }
    }

    return [sourceNode, targetNode];
  }
}

Graph.UNDIRECTED = Symbol('directed graph'); // one-way edges
Graph.DIRECTED = Symbol('undirected graph'); // two-ways edges

module.exports = Graph;