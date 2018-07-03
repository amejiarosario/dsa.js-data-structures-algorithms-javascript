const TreeNode = require('./tree-node');

describe('Tree Node', () => {
  let treeNode;

  beforeEach(() => {
    treeNode = new TreeNode('hola');
  });

  it('should hold a value', () => {
    expect(treeNode.value).toBe('hola');
  });

  it('should set/get left node', () => {
    expect(treeNode.left).toBe(undefined);
    treeNode.left = 1;
    expect(treeNode.left).toBe(1);
  });

  it('should set/get right node', () => {
    expect(treeNode.right).toBe(undefined);
    treeNode.right = 1;
    expect(treeNode.right).toBe(1);
  });
});
