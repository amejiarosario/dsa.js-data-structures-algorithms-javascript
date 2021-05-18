// npx eslint --fix -f codeframe lib/data-structures/graphs/graph.js
const Node = require('./node');
const Stack = require('../stacks/stack');
const Queue = require('../queues/queue');
const HashMap = require('../maps/hash-maps/hash-map');

// tag::constructor[]
/**
 * Graph data structure implemented with an adjacent list
 */
class Graph {
  /**
   * Initialize the nodes map
   * @param {Symbol} edgeDirection either `Graph.DIRECTED` or `Graph.UNDIRECTED`
   */
  constructor(edgeDirection = Graph.DIRECTED) {
    this.nodes = new HashMap();
    this.edgeDirection = edgeDirection;
  }
  // end::constructor[]

  // tag::addVertex[]
  /**
   * Add a node to the graph.
   * Runtime: O(1)
   * @param {any} value node's value
   * @returns {Node} the new node or the existing one if it already exits.
   */
  addVertex(value) {
    if (this.nodes.has(value)) { // <1>
      return this.nodes.get(value);
    }
    const vertex = new Node(value); // <2>
    this.nodes.set(value, vertex); // <3>
    return vertex;
  }
  // end::addVertex[]

  // tag::removeVertex[]
  /**
   * Removes node from graph
   * It also removes the reference of the deleted node from
   *  anywhere it was adjacent to.
   * Runtime: O(|V|) because adjacency list is implemented with a HashSet.
   * It were implemented with an array then it would be O(|V| + |E|).
   * @param {any} value node's value
   */
  removeVertex(value) {
    const current = this.nodes.get(value); // <1>
    if (current) {
      Array.from(this.nodes.values()).forEach((node) => node.removeAdjacent(current)); // <2>
    }
    return this.nodes.delete(value); // <3>
  }
  // end::removeVertex[]

  // tag::addEdge[]
  /**
   * Create a connection between the source node and the destination node.
   * If the graph is undirected, it will also create the link from destination to source.
   * If the nodes don't exist, then it will make them on the fly.
   * Runtime: O(1)
   * @param {any} source
   * @param {any} destination
   * @returns {[Node, Node]} source/destination node pair
   */
  addEdge(source, destination) {
    const sourceNode = this.addVertex(source); // <1>
    const destinationNode = this.addVertex(destination); // <1>

    sourceNode.addAdjacent(destinationNode); // <2>

    if (this.edgeDirection === Graph.UNDIRECTED) {
      destinationNode.addAdjacent(sourceNode); // <3>
    }

    return [sourceNode, destinationNode];
  }
  // end::addEdge[]

  // tag::removeEdge[]
  /**
   * Remove the connection between source node and destination.
   * If the graph is undirected, it will also create the link from destination to source.
   *
   * Runtime: O(1): implemented with HashSet.
   * If implemented with array, would be O(|E|).
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
  // end::removeEdge[]

  // tag::areAdjacents[]
  /**
   * True if two nodes are adjacent.
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
  // end::areAdjacents[]

  // tag::graphSearch[]
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
   * @param {Stack|Queue} Type Stack for DFS or Queue for BFS
   */
  static* graphSearch(first, Type = Stack) {
    const visited = new Map();
    const visitList = new Type();

    visitList.add(first);

    while (!visitList.isEmpty()) {
      const node = visitList.remove();
      if (node && !visited.has(node)) {
        yield node;
        visited.set(node);
        node.getAdjacents().forEach((adj) => visitList.add(adj));
      }
    }
  }
  // end::graphSearch[]

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
      // eslint-disable-next-line no-restricted-syntax
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
   * @param {Map<Node>} newPath current path from source to destination
   * @returns list of nodes from source to destination
   */
  findPath(source, destination, path = new Map()) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);
    const newPath = new Map(path);

    if (!destinationNode || !sourceNode) return [];

    newPath.set(sourceNode);

    if (source === destination) {
      return Array.from(newPath.keys());
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const node of sourceNode.getAdjacents()) {
      if (!newPath.has(node)) {
        const nextPath = this.findPath(node.value, destination, newPath);
        if (nextPath.length) {
          return nextPath;
        }
      }
    }

    return [];
  }

  /**
   * Find all paths from source to destination
   *
   * @param {any} source vertex'value
   * @param {any} destination vertex'value
   * @param {Map} path (optional) used for recursion
   */
  findAllPaths(source, destination, path = new Map()) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);
    const newPath = new Map(path);

    if (!destinationNode || !sourceNode) return [];

    newPath.set(sourceNode);

    if (source === destination) {
      return [Array.from(newPath.keys())];
    }

    const paths = [];
    sourceNode.getAdjacents().forEach((node) => {
      if (!newPath.has(node)) {
        const nextPaths = this.findAllPaths(node.value, destination, newPath);
        nextPaths.forEach((nextPath) => paths.push(nextPath));
      }
    });
    return paths;
  }
}

Graph.UNDIRECTED = Symbol('undirected graph'); // two-way edges
Graph.DIRECTED = Symbol('directed graph'); // one-way edges

module.exports = Graph;
