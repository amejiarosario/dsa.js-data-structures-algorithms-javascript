/**
 * 4.9 BST Sequences: A binary search tree was created by traversing through an array from left to right and inserting each element. Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.
 *
 *
 * Input:
 *                    2
 *                 1     3
 *
 *
 * Output: {2, 1, 3}, {2, 3, 1}
 *
 *
 * IDEAS
 *
 * 1. use BFS to go level by level
 * 2. compute the multiple permutations on that level and concat with the ones in the previous level
 *
 * @param root Binary Search Tree
 */
function getSequences(root) {
  if(!root) { return [[]]; }
  return weave(root.data, getSequences(root.left), getSequences(root.right));
}

/**
 * Weave two arrays with a given prefix
 */
function weave(prefix = [], array1 = [[]], array2 = [[]]) {
  let result = [];

  // convert prefix to array if is not any
  if(prefix && !Array.isArray(prefix)) {
    prefix = [prefix];
  }

  // return prefix if arrays are empty
  if((!array1.length && !array2.length) || (!array1.some(subarrayHasSomething) && !array2.some(subarrayHasSomething))) {
    result.push(prefix);
  }

  array1.forEach((a) => {
    if(a.length) {
      result = result.concat(weave(prefix.concat(a), [[]], array2));
    }
  });

  array2.forEach((b) => {
    if(b.length) {
      result = result.concat(weave(prefix.concat(b), array1, [[]]));
    }
  });

  // console.log('\nweave (', prefix, array1, array2, ')');
  // console.log('\t =>', result);

  return result;
}

function subarrayHasSomething(array) {
  return array.length;
}

module.exports = {getSequences, weave};