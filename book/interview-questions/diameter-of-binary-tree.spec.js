const { diameterOfBinaryTree } = require('./diameter-of-binary-tree');
const { BinaryTreeNode } = require('../../src/index');

describe('Binary Tree: Diameter', () => {
  it('should find the diameter', () => {
    const actual = BinaryTreeNode.from([1, 2, 3, 4, 5]);
    expect(diameterOfBinaryTree(actual)).toEqual(3);
  });

  it('should find the diameter when does not pass through the root node', () => {
    const arr = [1, 2, 3, null, null, 4, 5, 6, null, null, 7, 8, null, null, 9];
    expect(diameterOfBinaryTree(BinaryTreeNode.from(arr))).toEqual(6);
  });
});
