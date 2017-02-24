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
function weave(prefix = [], arrays1 = [[]], arrays2 = [[]]) {
  let result = [];

  // in case of two arguments let's asume it is for array 1 and 2 and that prefix is empty
  if(arguments.length === 2) {
    [arrays1, arrays2] = [prefix, arrays1];
    prefix = [];
  }

  // make sure arrays 1 and 2 are an array of arrays and prefix is an array
  prefix = Array.isArray(prefix) ? prefix : [prefix];
  arrays1 = Array.isArray(arrays1[0]) ? arrays1 : [arrays1];
  arrays2 = Array.isArray(arrays2[0]) ? arrays2 : [arrays2];

  // console.log('*weave (', prefix, arrays1, arrays2, ')');

  // process weaving recursively
  arrays1.forEach((array1) => {
    arrays2.forEach((array2) => {

      if(!array1.length || !array2.length) {
        result = result.concat([prefix.concat(array1, array2)]);

      } else {
        // weave the arrays
        result = result.concat(weave(prefix.concat(array1[0]), array1.slice(1), array2));
        result = result.concat(weave(prefix.concat(array2[0]), array1, array2.slice(1)));
      }
    });
  });

  // console.log('\tweave (', prefix, arrays1, arrays2, ')');
  // console.log('\t\t =>', result, '\n');

  return result;
}

module.exports = {getSequences, weave};
