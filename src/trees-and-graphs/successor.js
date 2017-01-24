const Node = require('./graph').Node;

function getSuccessor(node) {
  // check current node's value
  // check parent value
  // assign a value, such that value > parent and value <= cureent if left available
  // or value > current if right child is available

  let nextValue;

  const currentValue = node.data;
  const parentValue = node.parent && node.parent.data;

  if(!node.left) {
    nextValue = parentValue + 1;
  } else if(!node.right) {
    nextValue = currentValue + 1;
  } else {
    return;
  }

  return new Node(nextValue);
}

module.exports = getSuccessor;