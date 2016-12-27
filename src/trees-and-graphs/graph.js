const Queue = require('../stacks-and-queues/queue');
/**
 * Digraph
 */
class Graph {
  constructor() {
    this.nodes = {};
  }

  /**
   * use adjacency list to store nodes and more
   *
   * O(1)
   *
   * @param a
   * @param b
   */
  add(a, b) {
    if(!this.nodes[a]) {
      this.nodes[a] = [];
    }

    this.nodes[a].push(b);
  }

  /**
   * Depth-first search
   * @param node
   */
  dfs(node) {

  }
}

/**
 * Breadth-first search
 * @param node
 */
Graph.prototype.bfs = function* (node) {
  const queue = new Queue();

  queue.add(node);

  while(!queue.isEmpty()) {
    const current = queue.remove();
    yield current;
    const adjacents = this.nodes[current] || [];
    adjacents.forEach(function (adjNode) {
      queue.add(adjNode);
    });
  }
};

module.exports = Graph;