// tag::description[]
/**
 * Find the length of the binary tree diameter.
 *
 * @param {BinaryTreeNode | null} root - Binary Tree's root.
 * @returns {number} tree's diameter (longest possible path on the tree)
 */
function diameterOfBinaryTree(root) {
  // end::description[]
  // tag::placeholder[]
  // write your code here...
  // end::placeholder[]
  // tag::solution[]
  let diameter = 0;

  const height = (node) => {
    if (!node) return 0;
    const left = height(node.left);
    const right = height(node.right);
    diameter = Math.max(diameter, left + right);
    return 1 + Math.max(left, right);
  };

  height(root);
  return diameter;
  // end::solution[]
  // tag::description[]
}
// end::description[]

module.exports = { diameterOfBinaryTree };
