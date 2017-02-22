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

  // TODO: validations of prefix as an array and array1/2 as a nested array

  // convert prefix to array if is not any
  if(prefix && !Array.isArray(prefix)) {
    prefix = [prefix];
  }

  arrays1.forEach((array1) => {
    arrays2.forEach((array2) => {

      if(!array1.length && !array2.length) {
        result.push(prefix);

      } else if(!array1.length) {
        result = result.concat(weave(prefix.concat(array2), [array1]));

      } else if(!array2.length) {
        result = result.concat(weave(prefix.concat(array1), [array2]));
      } else {
        result = result.concat(weave(prefix.concat(array1), [array2]));
        result = result.concat(weave(prefix.concat(array2), [array1]));
      }
    });
  });

  // console.log('\nweave (', prefix, arrays1, arrays2, ')');
  // console.log('\t =>', result);

  return result;
}

module.exports = {getSequences, weave};
