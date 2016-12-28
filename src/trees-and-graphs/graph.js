const Queue = require('../stacks-and-queues/queue');

/**
 * Node with data and reference to adjacent nodes
 */
class Node {
  constructor(data) {
    this.data = data;
    this.adjacents = [];
    this.visited = false;
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
    targetNode = this.getNode(target);

    sourceNode.adjacents.push(targetNode);
    this.nodes.set(sourceNode.data, sourceNode);
    this.nodes.set(targetNode.data, targetNode);

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
 * Breadth-first search
 *
 * O(n)
 *
 * @param start data or node reference
 */
function* bfs(start) {
  const queue = new Queue();

  queue.add(this.getNode(start));

  this.nodes.forEach(function (node) {
    node.visited = false;
  });

  while(!queue.isEmpty()) {
    const node = queue.remove();
    node.visited = true;
    yield node;

    const adjacents = node.adjacents || [];
    adjacents.forEach(function (adjacent) {
      if(!adjacent.visited) {
        queue.add(adjacent);
      }
    });
  }
}


module.exports = {
  Graph,
  Node
};