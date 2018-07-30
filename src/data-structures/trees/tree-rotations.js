/**
 * Swap parent's child
 *
 *
 * @example Child on the left side (it also work for the right side)
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
 *
 * @example: tree with values 1-2-3-4
 *
 * 1                                 1
 *  \                                 \
 *   2*                                3
 *    \    --left-rotation(2)->      /  \
 *     3                           2*    4
 *      \
 *       4
 * @param {TreeNode} node
 * @returns {TreeNode} new parent after the rotation
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
 *
 * @example rotate node 3 to the right
 *
 *       4                                          4
 *      /                                         /
 *     3*                                       2
 *    /                                       /  \
 *   2       ---| right-rotation(3) |-->     1    3*
 *  /
 * 1
 *
 * @param {TreeNode} node
 * @returns {TreeNode} new parent after the rotation
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
 *
 * @example LR rotation on node 3
 *        4                          4
 *      /                          /                            4
 *    3                          3*                           /
 *  /                          /                             2
 * 1*   --left-rotation(1)->  2   --right-rotation(3)->    /  \
 *  \                        /                            1    3*
 *   2                      1
 *
 * @param {TreeNode} node
 * @returns {TreeNode} new parent after the rotation
 */
function leftRightRotation(node) {
  leftRotation(node.left);
  return rightRotation(node);
}

/**
 * Right Left Rotation (RL Rotation)
 *
 * @example RL rotation on 1
 *
 *   1*                           1*
 *    \                            \                              2
 *      3   -right-rotation(3)->    2   -left-rotation(1)->      /  \
 *    /                              \                          1*   3
 *   2                                3
 *
 * @param {TreeNode} node
 * @returns {TreeNode} new parent after the rotation
 */
function rightLeftRotation(node) {
  rightRotation(node.right);
  return leftRotation(node);
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
    // left subtree is higher than right subtree
    if (node.left.balanceFactor > 0) {
      rightRotation(node);
    } else if (node.left.balanceFactor < 0) {
      leftRightRotation(node);
    }
  } else if (node.balanceFactor < -1) {
    // right subtree is higher than left subtree
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
function balanceUptream(node) {
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
  balanceUptream,
};
