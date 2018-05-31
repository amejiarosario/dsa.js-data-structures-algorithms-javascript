const Node = require('./node');
const Stack = require('../stacks/stack');
const Queue = require('../queues/queue');

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
    const current = this.nodes.get(value);
    if(current) {
      for (const node of this.nodes.values()) {
        node.removeAdjacent(current);
      }
    }
    return this.nodes.delete(value);
  }

  /**
   * Create a connection between source node and target node.
   * If the graph is undirected it will also create the conneciton from target to destination.
   * If the nodes doesn't exist then it will create them on the fly
   * @param {any} source
   * @param {any} target
   */
  addEdge(source, target) {
    const sourceNode = this.addVertex(source);
    const targetNode = this.addVertex(target);

    sourceNode.addAdjacent(targetNode);

    if(this.edgeDirection === Graph.UNDIRECTED) {
      targetNode.addAdjacent(sourceNode);
    }

    return [sourceNode, targetNode];
  }

  /**
   * Remove connection between source node and target.
   * If the graph is undirected it will also remove the conneciton from target to destination.
   * @param {any} source
   * @param {any} target
   */
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

  /**
   * Depth-first search
   * Use a stack to visit nodes (LIFO)
   * @param {Node} first node to start the dfs
   */
  *dfs(first) {
    yield* this._graphSearch(first, Stack);
  }

  /**
   * Depth-first search
   * Use a queue to visit nodes (FIFO)
   * @param {Node} first node to start the dfs
   */
  *bfs(first) {
    yield* this._graphSearch(first, Queue);
  }

  /**
   *
   * @param {Node} first
   * @param {Stack|Queue} dsType Stack for DFS or Queue for BFS
   */
  *_graphSearch(first, dsType = Stack) {
    const visited = new Map();
    const visitList = new dsType();

    visitList.add(first);

    while(!visitList.isEmpty()) {
      const node = visitList.remove();
      if(node && !visited.has(node)) {
        yield node;
        visited.set(node);
        node.getAdjacents().forEach(adj => visitList.add(adj));
      }
    }
  }
}

Graph.UNDIRECTED = Symbol('directed graph'); // one-way edges
Graph.DIRECTED = Symbol('undirected graph'); // two-ways edges

module.exports = Graph;