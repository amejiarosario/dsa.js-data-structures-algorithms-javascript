function isBalanced(root) {
  // find tree's leaves' levels
  const leavesDepths = getLeavesDepths(root).sort();

  // TODO: check for empty trees, and that has less than 2 leaves

  // if any leave depth is bigger than 2 than any other, then is not balanced
  return leavesDepths[leavesDepths.length -1] - leavesDepths[leavesDepths.length -2] < 2;
}

function getLeavesDepths(node, level = 0, leavesDepths = []) {
  if(!node.adjacents.length) {
    leavesDepths.push(level);
  }

  node.adjacents.forEach(function (adj) {
    getLeavesDepths(adj, level+1, leavesDepths);
  });

  return leavesDepths;
}

module.exports = isBalanced;