/**
 * DFS, where the left be in desc while the right should be asc
 * @param node
 * @returns {boolean}
 */
function isBinarySearchTree(node, min, max) {
  if(!node) return true;

  const parent = node.data;
  let isBST = true, left, right;

  if(node.left) {
    left = node.left.data;
    isBST = isBST && left <= parent;

    if(min) {
      isBST = isBST && left > min;
    }
  }

  if(node.right) {
    right = node.right.data;
    isBST = isBST && right > parent;

    if(max) {
      isBST = isBST && right < max;
    }
  }

  return isBST &&
    isBinarySearchTree(node.left, null, parent) &&
    isBinarySearchTree(node.right, parent, null);
}

module.exports = isBinarySearchTree;