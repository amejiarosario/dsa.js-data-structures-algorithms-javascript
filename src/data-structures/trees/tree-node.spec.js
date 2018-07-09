const TreeNode = require('./tree-node');

describe('Tree Node', () => {
  let treeNode;

  beforeEach(() => {
    treeNode = new TreeNode('hola');
  });

  it('should start with null parent', () => {
    expect(treeNode.parent).toBe(null);
  });

  it('should start with empty metadata', () => {
    expect(treeNode.meta).toEqual({});
  });

  it('should hold a value', () => {
    expect(treeNode.value).toBe('hola');
  });

  it('should set/get left node', () => {
    expect(treeNode.left).toBe(undefined);
    const newNode = new TreeNode(1);
    treeNode.left = newNode;
    expect(treeNode.left.value).toBe(1);
    expect(newNode.parent).toBe(treeNode);
  });

  it('should set/get right node', () => {
    expect(treeNode.right).toBe(undefined);
    const newNode = new TreeNode(1);
    treeNode.right = newNode;
    expect(treeNode.right.value).toBe(1);
    expect(newNode.parent).toBe(treeNode);
  });
});
