const AvlTree = require('./avl-tree.js');

describe('AvlTree', () => {
  let tree;

  beforeEach(() => {
    tree = new AvlTree();
  });

  describe('#contructor', () => {
    it('should initialize', () => {
      expect(tree).not.toBe(undefined)
    });
  });
});
