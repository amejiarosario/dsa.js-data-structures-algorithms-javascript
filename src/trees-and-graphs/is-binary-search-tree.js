/**
 * DFS, where the left be in desc while the right should be asc
 * @param node
 * @returns {boolean}
 */
function isBinarySearchTree(node) {
  if(!node) return true;

  const parent = node.data;
  let isBST = true;

  if(node.left) {
    const left = node.left.data;
    isBST = isBST && left < parent;
  }

  if(node.right) {
    const right = node.right.data;
    isBST = isBST && right > parent;
  }

  return isBST && isBinarySearchTree(node.left) && isBinarySearchTree(node.right);
}

module.exports = isBinarySearchTree;