const Graph = require('./graph');
const Queue = require('../stacks-and-queues/queue');

/**
 * Test if two nodes are connected using BFS
 * @param node1
 * @param node2
 * @returns {boolean}
 */
Graph.prototype.isConnected = function(node1, node2) {
  const queue = new Queue();

  queue.add(node1);

  while(!queue.isEmpty()) {
    const current = queue.remove();

    if(current === node2) {
      return true;
    }

    (this.nodes[current] || []).forEach(function (node) {
      queue.add(node);
    });
  }

  return false;
};

module.exports = Graph;