/**
 * Single Left Rotation (LL Rotation)
 * @param {TreeNode} node
 */
function leftRotation(node) {
  const newParent = node.right;
  const grandparent = node.parent;

  newParent.parent = node.parent;
  if (grandparent) { grandparent.left = newParent; }
  newParent.left = node;

  return newParent;
}

/**
 * Single Right Rotation (RR Rotation)
 * @param {TreeNode} node
 */
function rightRotation(node) {
  const newParent = node.left;
  const grandparent = node.parent;

  newParent.parent = node.parent;
  if (grandparent) { grandparent.left = newParent; }
  newParent.right = node;

  return newParent;
}

/**
 * Left Right Rotation (LR Rotation)
 * @param {TreeNode} node
 */
function leftRightRotation(node) {
  let newParent;
  newParent = leftRotation(node.left);
  newParent = rightRotation(node);
  return newParent;
}

function rightLeftRotation(node) {

}

module.exports = {
  leftRotation,
  rightRotation,
  leftRightRotation,
  rightLeftRotation,
};
