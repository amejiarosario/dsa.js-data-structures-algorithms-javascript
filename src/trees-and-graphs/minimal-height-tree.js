const Graph = require('./graph');

// all solutions fails for [1, 2, 3, 4, 5]

function minimalHeightTree(array, start = 0, end = array.length -1) {
  if(end < start) { return; }

  const mid = Math.round((end + start)/2);
  const node = new Graph.Node(array[mid]);
  node.adjacents[Graph.LEFT] = minimalHeightTree(array, start, mid - 1);
  node.adjacents[Graph.RIGHT] = minimalHeightTree(array, mid + 1, end);

  return node;
}

function minimalHeightTree2(array) {
  let index, node;

  if(array.length === 1) {
    node = new Graph.Node(array[0]);
  } else if(array.length === 2) {
    node = new Graph.Node(array[1]);
    node.adjacents[Graph.LEFT] = new Graph.Node(array[0]);
  } else {
    index = Math.round(array.length/2);
    node = new Graph.Node(array[index]);
    node.adjacents[Graph.LEFT] = minimalHeightTree(array.slice(0, index));
    node.adjacents[Graph.RIGHT] = minimalHeightTree(array.slice(index+1));
  }

  return node;
}

module.exports = minimalHeightTree;

/*

                  4

              3        5

           1    2



 4

 3        5

 1    2



 */