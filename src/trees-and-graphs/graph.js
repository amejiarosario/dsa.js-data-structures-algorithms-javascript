const Queue = require('../stacks-and-queues/queue');

/**
 * Node with data and reference to adjacent nodes
 */
class Node {
  constructor(data) {
    this.data = data;
    this.adjacents = [];
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

    return sourceNode;
  }

  /**
   * Get existing node or create a new one
   * @param dataOrNode
   * @returns {*}
   */
  getNode(dataOrNode) {
    let node;

    if(isNode(dataOrNode)) {
      node = dataOrNode;
    } else if(this.nodes.has(dataOrNode)) {
      node = this.nodes.get(dataOrNode);
    } else {
      node = new Node(dataOrNode);
    }
    return node;
  }
}

function isNode(thing){
  return thing instanceof Node;
}


Graph.prototype.bfs = bfs;

/**
 * Breadth-first search
 * @param start
 */
function* bfs(start) {
  const queue = new Queue();

  queue.add(start);

  while(!queue.isEmpty()) {
    const node = queue.remove();
    yield node;
  }
}


module.exports = {
  Graph,
  Node
};