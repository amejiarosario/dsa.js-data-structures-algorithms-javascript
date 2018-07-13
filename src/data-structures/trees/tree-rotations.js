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

/**
 * Balance tree doing rotations based on balance factor.
 *
 * Depending on the `node` balance factor and child's factor
 * one of this rotation is performed:
 * - LL rotations: single left rotation
 * - RR rotations: single right rotation
 * - LR rotations: double rotation left-right
 * - RL rotations: double rotation right-left
 *
 * @param {TreeNode} node
 */
function balance(node) {
  if (node.balanceFactor > 1) {
    // left subtree is heighter than right subtree
    if (node.left.balanceFactor > 0) {
      rightRotation(node);
    } else if (node.left.balanceFactor < 0) {
      leftRightRotation(node);
    }
  } else if (node.balanceFactor < -1) {
    // right subtree is heighter than left subtree
    if (node.right.balanceFactor < 0) {
      leftRotation(node);
    } else if (node.right.balanceFactor > 0) {
      rightLeftRotation(node);
    }
  }
}

/**
 * Bubbles up balancing nodes a their parents
 *
 * @param {TreeNode} node
 */
function balanceUp(node) {
  let current = node;
  while (current) {
    balance(current);
    current = current.parent;
  }
}

module.exports = {
  leftRotation,
  rightRotation,
  leftRightRotation,
  rightLeftRotation,
  balance,
  balanceUp,
};
