/**
 * DFS, where the left be in desc while the right should be asc
 * @param node
 * @returns {boolean}
 */
function isBinarySearchTree(node, min, max) {
  if(!node) return true;

  return !((min && node.data <= min) || (max && node.data > max)) &&
    isBinarySearchTree(node.left, min, node.data) &&
    isBinarySearchTree(node.right, node.data, max);
}

module.exports = isBinarySearchTree;