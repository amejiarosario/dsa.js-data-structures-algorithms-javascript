const { rightSideView, rightSideViewDfs } = require('./binary-tree-right-side-view');
const { BinaryTreeNode } = require('../../src/index');

[rightSideView, rightSideViewDfs].forEach((fn) => {
  describe(`Binary Tree: ${fn.name}`, () => {
    it('should work with null', () => {
      const actual = null;
      const expected = [];
      expect(fn(actual)).toEqual(expected);
    });

    it('should work with small case', () => {
      const actual = BinaryTreeNode.from([1, 2, 3, null, 4]);
      const expected = [1, 3, 4];
      expect(fn(actual)).toEqual(expected);
    });

    it('should work with other case', () => {
      const actual = BinaryTreeNode.from([1, 2, 3, null, 5, null, 4, 6]);
      const expected = [1, 3, 4, 6];
      expect(fn(actual)).toEqual(expected);
    });
  });
});
