// tag::swapParentChild[]
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
    // this set parent child
    const side = oldChild.isParentRightChild ? 'Right' : 'Left';
    parent[`set${side}AndUpdateParent`](newChild);
  } else {
    // no parent? so set it to null
    newChild.parent = null;
  }
}
// end::swapParentChild[]


// tag::leftRotation[]
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
  newParent.setLeftAndUpdateParent(node);
  node.setRightAndUpdateParent(null);

  return newParent;
}
// end::leftRotation[]

// tag::rightRotation[]
/**
 * Single Right Rotation (RR Rotation)
 *
 * @example rotate node 3 to the right
 *
 *       4                                  4
 *      /                                  /
 *     3*                                 2
 *    /                                 /  \
 *   2    ---| right-rotation(3) |-->  1    3*
 *  /
 * 1
 *
 * @param {TreeNode} node this is the node we want to rotate to the right. (E.g., node 3)
 * @returns {TreeNode} new parent after the rotation (E.g., node 2)
 */
function rightRotation(node) {
  const newParent = node.left; // E.g., node 2
  const grandparent = node.parent; // E.g., node 4

  // swap node 4 left children (node 3) with node 2.
  swapParentChild(node, newParent, grandparent);

  // update right child on node 2 to be node 3,
  // also make node 2 the new parent of node 3.
  newParent.setRightAndUpdateParent(node);
  // remove node 3 left child (so it doesn't point to node 2)
  node.setLeftAndUpdateParent(null);

  return newParent;
}
// end::rightRotation[]

// tag::leftRightRotation[]
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
 * @param {TreeNode} node this is the node we want to rotate to the right. E.g., node 3
 * @returns {TreeNode} new parent after the rotation
 */
function leftRightRotation(node) {
  leftRotation(node.left);
  return rightRotation(node);
}
// end::leftRightRotation[]

// tag::rightLeftRotation[]
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
// end::rightLeftRotation[]

// tag::balance[]
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
      return rightRotation(node);
    } else if (node.left.balanceFactor < 0) {
      return leftRightRotation(node);
    }
  } else if (node.balanceFactor < -1) {
    // right subtree is higher than left subtree
    if (node.right.balanceFactor < 0) {
      return leftRotation(node);
    } else if (node.right.balanceFactor > 0) {
      return rightLeftRotation(node);
    }
  }
  return node;
}
// end::balance[]

// tag::balanceUptream[]
/**
 * Bubbles up balancing nodes a their parents
 *
 * @param {TreeNode} node
 */
function balanceUptream(node) {
  let current = node;
  let newParent;
  while (current) {
    newParent = balance(current);
    current = current.parent;
  }
  return newParent;
}
// end::balanceUptream[]

module.exports = {
  leftRotation,
  rightRotation,
  leftRightRotation,
  rightLeftRotation,
  balance,
  balanceUptream,
};
