const Graph = require('./graph').Graph;
const Queue = require('../stacks-and-queues/queue');

/**
 * Test if two nodes are connected using BFS
 * @param node1
 * @param node2
 * @returns {boolean}
 */
Graph.prototype.isConnected = function(node1, node2) {
  const bfs = this.bfs(node1);
  let next;

  do {
    next = bfs.next();

    if(next.value && next.value.data === node2) {
      return true;
    }
  } while(!next.done);

  return false;
};

module.exports = Graph;