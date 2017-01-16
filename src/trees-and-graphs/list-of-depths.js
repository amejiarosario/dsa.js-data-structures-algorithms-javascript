const LinkedList = require('../linked-list/linkedlist');

function listOfDepths(root) {
  const result = [];

  if(!root) return result;

  let current = new LinkedList();

  current.addLast(root);

  while(current.size()) {
    result.push(current);

    const parents = current;
    current = new LinkedList();

    for(let parent = parents.head; parent; parent = parent.next) {
      parent.data.adjacents.forEach(function (adj) {
        current.addLast(adj);
      });
    }
  }

  return result;
}

// ------- Alternative solution

const Queue = require('../stacks-and-queues/queue');

function listOfDepths2(root) {
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