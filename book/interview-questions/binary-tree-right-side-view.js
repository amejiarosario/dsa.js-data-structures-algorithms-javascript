const { Queue } = require('../../src/index');

// tag::description[]
/**
 * Find the rightmost nodes by level.
 *
 * @example rightSideView(bt([1,2,3,4])); // [1, 3, 4]
 *     1      <- 1
 *   /   \
 *  2     3   <- 3
 *   \
 *    4       <- 4
 *
 * @param {BinaryTreeNode} root - The root of the binary tree.
 * @returns {number[]} - array with the rightmost nodes values.
 */
function rightSideView(root) {
  // end::description[]
  // tag::placeholder[]
  // write your code here...
  // end::placeholder[]
  // tag::solution[]
  if (!root) return [];
  const queue = new Queue([root]);
  const ans = [];

  while (queue.size) {
    const { size } = queue;
    for (let i = 0; i < size; i++) {
      const node = queue.dequeue();
      if (i === size - 1) ans.push(node.value);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
  }

  return ans;
  // end::solution[]
  // tag::description[]
}
// end::description[]

// tag::dfs[]
function rightSideViewDfs(root) {
  const ans = [];

  const dfs = (node, level = 0) => {
    if (!node) return;
    if (level === ans.length) ans.push(node.value);
    dfs(node.right, level + 1); // right side first!
    dfs(node.left, level + 1);
  };

  dfs(root);
  return ans;
}
// end::dfs[]

module.exports = { rightSideView, rightSideViewDfs };
