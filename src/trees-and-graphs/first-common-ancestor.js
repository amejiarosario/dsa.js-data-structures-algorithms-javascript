/**
 *
   4.8 First Common Ancestor: Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a binary search tree.
 *
 * Ideas:
 *
 * idea #1 do bfs for each node until the two nodes are found and return the level
 * then choose the node with the highest level, which will be the first common ancestor
 * time: O(n^2) | space: O(1)
 *
 * idea # 2 use dfs to generate the ancestors of the two nodes in question. Then compare whats their first common ancestor if any.
 * time O(n) | space: O(h), where h is the height of the deepest tree
 *
 * Implementing idea #2...
 *
 * After reading the solution we can do better: time O(n) and space O(1)
 *
 * 1. Use DFS to iterate through the tree
 * 2. if a current node matches either node1 or node2, then return it
 * 3. if doesn't match return null
 * 4. if a a side of the tree has previously return data then keep the info it has a ancestor
 *
 * Test cases
 * 1. Both nodes are on the tree
 * 2. One or both nodes are not in the tree
 * 3. One node is the ancestor of the other
 *
 *
 * @param graph
 * @param node1
 * @param node2
 */
function getFirstCommonAncestor(graph, dataOrNode1, dataOrNode2) {
  const node1 = graph.getNode(dataOrNode1);
  const node2 = graph.getNode(dataOrNode2);
  let result = null;

  const isFound = graph.getNodes().some(function (node) {
    result = getAncestor(node, node1, node2);
    return result.isAncestor;
  });

  if(isFound) {
    return result.matchingNode;
  }

}

/**
 *
 * @param node
 * @param node1
 * @param node2
 * @returns {matchingNode: Node, isAncestor: boolean} Node matches either Node1, Node2 or common ancestor (if flag is true).
 */
function getAncestor(node, node1, node2) {
  let matchingNode = null;
  let isAncestor = false;

  if(!node) {
    return {matchingNode, isAncestor};
  }

  const left = getAncestor(node.left, node1, node2);
  if (left.isAncestor) {
    return left;
  }

  const right = getAncestor(node.right, node1, node2);
  if (right.isAncestor) {
    return right;
  }

  if(node === node1 && node2 === node1) {

    // already found both nodes since they are the same
    matchingNode = node;
    isAncestor = true;

  } else if(left.matchingNode && right.matchingNode ||
    left.matchingNode === node1 && node === node2 || left.matchingNode === node2 && node === node1 ||
    right.matchingNode === node1 && node === node2 || right.matchingNode === node2 && node === node1) {

    // if we found both nodes already then we found an ancestor
    matchingNode = node;
    isAncestor = true;

  } else if(node === node1 || node === node2) {

    // set match
    matchingNode = node;

  } else {

    // bubble up partial match
    return left.matchingNode ? left : right;

  }

  return {matchingNode, isAncestor};
}


module.exports = getFirstCommonAncestor;