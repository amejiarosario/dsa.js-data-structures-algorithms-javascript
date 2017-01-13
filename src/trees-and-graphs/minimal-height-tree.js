const Graph = require('./graph');

function minimalHeightTree(array, start = 0, end = array.length -1) {
  if(end < start) { return; }

  const mid = Math.round((end + start)/2);
  const node = new Graph.Node(array[mid]);
  node.adjacents[Graph.LEFT] = minimalHeightTree(array, start, mid - 1);
  node.adjacents[Graph.RIGHT] = minimalHeightTree(array, mid + 1, end);

  return node;
}

module.exports = minimalHeightTree;