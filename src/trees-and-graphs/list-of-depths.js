const Queue = require('../stacks-and-queues/queue');
const LinkedList = require('../linked-list/linkedlist');

function listOfDepths(root) {
  const queue = new Queue();
  const list = [];
  let depth = 0;

  if(!root) return list;

  queue.add(root);
  queue.add('*');

  while(!queue.isEmpty()) {
    if(queue.peek() === '*') {
      queue.remove();
      depth++;

      if(queue.isEmpty()) {
        continue;
      } else {
        queue.add('*');
      }
    }

    const node = queue.remove();
    add(list, depth, node.data);

    node.adjacents.forEach(function (adj) {
      queue.add(adj);
    });
  }

  return list;
}

function add(list, depth, data) {
  list[depth] = list[depth] || new LinkedList();
  list[depth].addLast(data);
}

module.exports = listOfDepths;