// tag::swapParentChild[]
/**
 * Swap parent's child
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
 * @example: #1 tree with values 1-2-3-4
 *
 * 1                                 1
 *  \                                 \
 *   2*                                3
 *    \    --left-rotation(2)->      /  \
 *     3                           2*    4
 *      \
 *       4
 *
 * @example: #2 left rotation
 *
 *     1                                          1
 *      \                                          \
 *       4*                                         16
 *      / \                                        / \
 *    2    16    -- left-rotation(4) ->          4   32
 *       /  \                                   / \    \
 *      8   32                                2   8    64
 *            \
 *            64
 * @param {TreeNode} node current node to rotate (e.g. 4)
 * @returns {TreeNode} new parent after the rotation (e.g. 16)
 */
function leftRotation(node) {
  const newParent = node.right; // E.g., node 16
  const grandparent = node.parent; // E.g., node 1
  const previousLeft = newParent.left; // E.g., node 8

  // swap parent of node 4 from node 1 to node 16
  swapParentChild(node, newParent, grandparent);

  // Update node 16 left child to be 4, and
  // updates node 4 parent to be node 16 (instead of 1).
  newParent.setLeftAndUpdateParent(node);
  // set node4 right child to be previousLeft (node 8)
  node.setRightAndUpdateParent(previousLeft);

  return newParent;
}
// end::leftRotation[]

// tag::rightRotation[]
/**
 * Single Right Rotation (RR Rotation)
* @example: #1 rotate node 3 to the right
 *
 *       4                                  4
 *      /                                  /
 *     3*                                 2
 *    /                                 /  \
 *   2    ---| right-rotation(3) |-->  1    3*
 *  /
 * 1
 *
 * @example: #2 rotate 16 to the right and preserve nodes
 *       64                                       64
 *       /                                        /
 *      16*                                      4
 *      / \                                     / \
 *     4  32    -- right-rotation(16) -->      2   16
 *    / \                                     /    / \
 *   2   8                                   1    8   32
 *  /
 * 1
 *
 * @param {TreeNode} node
 *    this is the node we want to rotate to the right. (E.g., node 16)
 * @returns {TreeNode} new parent after the rotation (E.g., node 4)
 */
function rightRotation(node) {
  const newParent = node.left; // E.g., node 4
  const grandparent = node.parent; // E.g., node 64
  const previousRight = newParent.right; // E.g., node 8

  // swap node 64's left children (node 16) with node 4 (newParent).
  swapParentChild(node, newParent, grandparent);

  // update node 4's right child to be node 16,
  // also make node 4 the new parent of node 16.
  newParent.setRightAndUpdateParent(node);
  // Update 16's left child to be the `previousRight` node.
  node.setLeftAndUpdateParent(previousRight);

  return newParent;
}
// end::rightRotation[]

// tag::leftRightRotation[]
/**
 * Left Right Rotation (LR Rotation)
 *
 * @example LR rotation on node 3
 *        4                       4
 *      /                        /                           4
 *    3                         3*                          /
 *  /                          /                           2
 * 1*   --left-rotation(1)->  2   --right-rotation(3)->  /  \
 *  \                        /                          1    3*
 *   2                      1
 *
 * @param {TreeNode} node
 *    this is the node we want to rotate to the right. E.g., node 3
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
 *    \                            \                          2
 *      3   -right-rotation(3)->    2   -left-rotation(1)->  /  \
 *    /                              \                      1*   3
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

module.exports = {
  leftRotation,
  rightRotation,
  leftRightRotation,
  rightLeftRotation,
};
