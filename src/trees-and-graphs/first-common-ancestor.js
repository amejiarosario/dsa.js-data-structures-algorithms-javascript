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
 * time O(n) | space: O(log(n)) height
 *
 * Implementing idea #2
 *
 * @param graph
 * @param node1
 * @param node2
 */
function getFirstCommonAncestor(graph, dataOrNode1, dataOrNode2) {
  let ancestors1 = [];
  let ancestors2 = [];
  const node1 = graph.getNode(dataOrNode1);
  const node2 = graph.getNode(dataOrNode2);

  graph.getNodes().some(function (node) {
    ancestors1 = [];
    ancestors2 = [];
    getAncestors(node, node1, node2, ancestors1, ancestors2);
    // console.log(node.data, ancestors1.map((d)=>d.data), ancestors2.map((d)=>d.data))
    return ancestors1.length && ancestors2.length;
  });

  return findLastCommon(ancestors1, ancestors2);
}

function findLastCommon(array1, array2) {
  const end = Math.min(array1.length, array2.length);

  for(let i = end; i > 0; i--) {
    if(array1[i-1] === array2[i-1]) {
      return array1[i-1];
    }
  }
}

/**
 *
 * @param node
 * @param node1
 * @param node2
 * @param ancestors1
 * @param ancestors2
 * @returns {number} 0 none, 1 node1, 2 node2, 3 node1 and node2
 */
function getAncestors(node, node1, node2, ancestors1, ancestors2) {
  if(node === node1) {
    ancestors1.unshift(node);
    return 1;
  } else if (node === node2) {
    ancestors2.unshift(node);
    return 2;
  } else {
    let nodesFound = 0;

    node.adjacents.forEach(function (adj) {
      const found = getAncestors(adj, node1, node2, ancestors1, ancestors2);

      if(found === 1 || nodesFound === 3) {
        ancestors1.unshift(node);

        if(nodesFound === 2) {
          nodesFound = 3;
        } else {
          nodesFound = 1;
        }
      }

      if(found === 2 || nodesFound === 3) {
        ancestors2.unshift(node);

        if(nodesFound === 1) {
          nodesFound = 3;
        } else {
          nodesFound = 2;
        }
      }
    });

    return nodesFound;
  }
}


module.exports = getFirstCommonAncestor;