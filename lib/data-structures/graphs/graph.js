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
   *
   * Runtime: O(1)
   *
   * @param {any} value node's value
   */
  addVertex(value) {
    if (this.nodes.has(value)) {
      return this.nodes.get(value);
    }
    const vertex = new Node(value);
    this.nodes.set(value, vertex);
    return vertex;
  }

  /**
   * Removes node from graph
   *
   * Runtime: O(|V| + |E|)
   *
   * @param {any} value node's value
   */
  removeVertex(value) {
    const current = this.nodes.get(value);
    if (current) {
      Array.from(this.nodes.values()).forEach(node => node.removeAdjacent(current));
    }
    return this.nodes.delete(value);
  }

  /**
   * Create a connection between source node and destination node.
   * If the graph is undirected it will also create the conneciton from destination to destination.
   * If the nodes doesn't exist then it will create them on the fly
   *
   * Runtime: O(1)
   *
   * @param {any} source
   * @param {any} destination
   */
  addEdge(source, destination) {
    const sourceNode = this.addVertex(source);
    const destinationNode = this.addVertex(destination);

    sourceNode.addAdjacent(destinationNode);

    if (this.edgeDirection === Graph.UNDIRECTED) {
      destinationNode.addAdjacent(sourceNode);
    }

    return [sourceNode, destinationNode];
  }

  /**
   * Remove connection between source node and destination.
   * If the graph is undirected it will also remove the conneciton from destination to destination.
   *
   * Runtime: O(|E|)
   *
   * @param {any} source
   * @param {any} destination
   */
  removeEdge(source, destination) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destinationNode);

      if (this.edgeDirection === Graph.UNDIRECTED) {
        destinationNode.removeAdjacent(sourceNode);
      }
    }

    return [sourceNode, destinationNode];
  }

  /**
   * True if two nodes are adjacent to each other
   * @param {any} source node's value
   * @param {any} destination node's value
   */
  areAdjacents(source, destination) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      return sourceNode.isAdjacent(destinationNode);
    }

    return false;
  }

  /**
   * Depth-first search
   * Use a stack to visit nodes (LIFO)
   * @param {Node} first node to start the dfs
   */
  static* dfs(first) {
    yield* Graph.graphSearch(first, Stack);
  }

  /**
   * Depth-first search
   * Use a queue to visit nodes (FIFO)
   * @param {Node} first node to start the dfs
   */
  static* bfs(first) {
    yield* Graph.graphSearch(first, Queue);
  }

  /**
   * Generic graph search where we can pass a Stack or Queue
   * @param {Node} first node to start the search
   * @param {Stack|Queue} dsType Stack for DFS or Queue for BFS
   */
  static* graphSearch(first, dsType = Stack) {
    const visited = new Map();
    const visitList = new dsType();

    visitList.add(first);

    while (!visitList.isEmpty()) {
      const node = visitList.remove();
      if (node && !visited.has(node)) {
        yield node;
        visited.set(node);
        node.getAdjacents().forEach(adj => visitList.add(adj));
      }
    }
  }

  /**
   * Return true if two nodes are connected and false if not
   * @param {any} source vertex's value
   * @param {*} destination vertex's value
   */
  areConnected(source, destination) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      const bfsFromFirst = Graph.bfs(sourceNode);
      for (const node of bfsFromFirst) {
        if (node === destinationNode) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Find a path between source and destination
   * It might not be the optimal path
   *
   * @param {any} source vertex's value
   * @param {any} destination vertex's value
   * @param {Map<Node>} path current path from source to destination
   * @returns list of nodes from source to destination
   */
  findPath(source, destination, path = new Map()) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    path.set(sourceNode);

    // eslint-disable-next-line no-iterator
    for (const node of sourceNode.getAdjacents()) {
      if (node === destinationNode) {
        path.set(destinationNode);
        return Array.from(path.keys());
      }

      if (!path.has(node)) {
        const newPath = this.findPath(node.value, destination, path);
        if (newPath.length) {
          return newPath;
        }
      }
    }

    return [];
  }
}

Graph.UNDIRECTED = Symbol('directed graph'); // one-way edges
Graph.DIRECTED = Symbol('undirected graph'); // two-ways edges

module.exports = Graph;
