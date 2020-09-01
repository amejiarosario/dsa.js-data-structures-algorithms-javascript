const { diameterOfBinaryTree } = require('./diameter-of-binary-tree');
const { BinaryTreeNode } = require('../../src/index');

describe('Binary Tree: Diameter', () => {
  function toBinaryTree(array, index = 0) {
    if (index >= array.length) return null;
    const node = new BinaryTreeNode(array[index]);
    node.left = toBinaryTree(array, index * 2 + 1);
    node.right = toBinaryTree(array, index * 2 + 2);
    return node;
  }

  it('should find the diameter', () => {
    expect(diameterOfBinaryTree(toBinaryTree([1, 2, 3, 4, 5]))).toEqual(3);
  });

  it('should find the diameter when does not pass through the root node', () => {
    const tree = [1, 2, 3, null, null, 4, 5, 6, null, null, 7, 8, null, null, 9];
    expect(diameterOfBinaryTree(toBinaryTree(tree))).toEqual(6);
  });
});
