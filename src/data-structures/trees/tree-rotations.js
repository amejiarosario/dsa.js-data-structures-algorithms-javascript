/**
 * Swap parent's child
 *
 *
 * @example Child on the left side
 *
 * p = parent
 * o = old child
 * n = new child
 *
 * p           p
 *  \    =>     \
 *   o           n
 *
 * @param {TreeNode} oldChild current child's parent
 * @param {TreeNode} newChild new child's parent
 * @param {TreeNode} parent parent
 */
function swapParentChild(oldChild, newChild, parent) {
  if (parent) {
    const side = oldChild.isParentRightChild ? 'right' : 'left';
    // this set parent child AND also
    parent[side] = newChild;
  } else {
    // no parent? so set it to null
    newChild.parent = null;
  }
}

/**
 * Single Left Rotation (LL Rotation)
 * @param {TreeNode} node
 */
function leftRotation(node) {
  const newParent = node.right;
  const grandparent = node.parent;

  swapParentChild(node, newParent, grandparent);

  // do LL rotation
  newParent.left = node;
  node.right = undefined;

  return newParent;
}

/**
 * Single Right Rotation (RR Rotation)
 * @param {TreeNode} node
 */
function rightRotation(node) {
  const newParent = node.left;
  const grandparent = node.parent;

  swapParentChild(node, newParent, grandparent);

  // do RR rotation
  newParent.right = node;
  node.left = undefined;

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

/**
 * Right Left Rotation (RL Rotation)
 * @param {TreeNode} node
 */
function rightLeftRotation(node) {
  let newParent;
  newParent = rightRotation(node.right);
  newParent = leftRotation(node);
  return newParent;
}

module.exports = {
  leftRotation,
  rightRotation,
  leftRightRotation,
  rightLeftRotation,
};
