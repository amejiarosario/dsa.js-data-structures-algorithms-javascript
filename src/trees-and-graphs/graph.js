const Queue = require('../stacks-and-queues/queue');

/**
 * Node with data and reference to adjacent nodes
 */
class Node {
  constructor(data) {
    this.data = data;
    this.adjacents = [];
    this.metadata = {};
  }

  get left() {
    return this.adjacents[0];
  }

  set left(value) {
    this.adjacents[0] = value;
  }

  get right() {
    return this.adjacents[1];
  }

  set right(value) {
    this.adjacents[1] = value;
  }

  toArray() {
    const string = [];
    const queue = new Queue();
    queue.add(this);

    while(!queue.isEmpty()) {
      const node = queue.remove();
      string.push(node.data);

      node.adjacents.forEach(function (adj) {
        if(adj) { queue.add(adj); }
      });
    }

    return string;
  }

  toString() {
    return this.toArray().join(' -> ');
  }
}

/**
 * Directed Graph
 * Note: no data duplicates are allowed
 */
class Graph {
  /**
   * Initialize adjacency list
   */
  constructor() {
    this.nodes = new Map();
  }

  /**
   * Add a relationship between two nodes
   *
   * O(1)
   *
   * @param source node reference or node data
   * @param target node reference or node data
   * @returns {*} resulting source node
   */
  add(source, target) {
    let sourceNode, targetNode;

    sourceNode = this.getNode(source);
    if(target) targetNode = this.getNode(target);

    if(target) sourceNode.adjacents.push(targetNode);

    this.nodes.set(sourceNode.data, sourceNode);
    if(target) this.nodes.set(targetNode.data, targetNode);

    return sourceNode;
  }

  /**
   * Get existing node or create a new one
   * @param dataOrNode
   * @returns {*}
   */
  getNode(dataOrNode) {
    let node;

    if(this.nodes.has(dataOrNode)) {
      node = this.nodes.get(dataOrNode);
    } else if(isNode(dataOrNode)) {
      node = dataOrNode;
    } else {
      node = new Node(dataOrNode);
    }
    return node;
  }

  /**
   * Return an array with all the nodes
   * @returns {Array}
   */
  getNodes() {
    return Array.from(this.nodes.values());
  }

  /**
   * Return adjacency matrix of the data
   * @returns {string}
   */
  toString() {
    let string = [];

    for (var [data, node] of this.nodes.entries()) {
      const adjacetsData = node.adjacents.map((adj) => adj.data).join(', ');
      if(adjacetsData){
        string.push(`${data}: ${adjacetsData}`);
      }
    }

    return string.join('\n');
  }
}

function isNode(thing){
  return thing instanceof Node;
}


Graph.prototype.bfs = bfs;

/**
 * Set all visited nodes to false
 */
Graph.prototype.clearVisitedNodes = function () {
  this.nodes.forEach(function (node) {
    node.metadata.visited = false;
  });
};

/**
 * Breadth-first search
 *
 * O(n)
 *
 * @param start data or node reference
 */
function* bfs(start, clearVisited = true) {
  const queue = new Queue();

  queue.add(this.getNode(start));

  if(clearVisited) {
    this.clearVisitedNodes();
  }

  while(!queue.isEmpty()) {
    const node = queue.remove();
    node.metadata.visited = true;

    yield node;

    const adjacents = node.adjacents || [];
    adjacents.forEach(function (adjacent) {
      if(!adjacent.metadata.visited) {
        queue.add(adjacent);
      }
    });
  }
}


module.exports = {
  Graph,
  Node,
  LEFT: 0,
  RIGHT: 1
};