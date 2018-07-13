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

  it('should have a height 0', () => {
    expect(treeNode.height).toBe(0);
  });

  it('should set/get left node', () => {
    expect(treeNode.left).toBe(undefined);
    const newNode = new TreeNode(1);
    treeNode.left = newNode;
    expect(treeNode.left.value).toBe(1);

    expect(newNode.parent).toBe(treeNode);
    expect(treeNode.height).toBe(1);
    expect(treeNode.balanceFactor).toBe(1);
  });

  it('should set/get right node', () => {
    expect(treeNode.right).toBe(undefined);
    const newNode = new TreeNode(1);
    treeNode.right = newNode;

    expect(treeNode.right.value).toBe(1);
    expect(newNode.parent).toBe(treeNode);
    expect(treeNode.height).toBe(1);
    expect(treeNode.balanceFactor).toBe(-1);
  });

  describe('Family operations', () => {
    let g;
    let p;
    let u;
    let c;
    let s;

    beforeEach(() => {
      g = new TreeNode('grandparent');
      p = new TreeNode('parent');
      u = new TreeNode('uncle');
      c = new TreeNode('child');
      s = new TreeNode('sibling');

      g.right = p;
      g.left = u;
      p.right = c;
      p.left = s;
    });

    it('should set heights', () => {
      expect(g.height).toBe(2);
      expect(g.balanceFactor).toBe(-1);

      expect(p.height).toBe(1);
      expect(p.balanceFactor).toBe(0);

      expect(u.height).toBe(0);
      expect(u.balanceFactor).toBe(0);
    });

    it('should get the sibling', () => {
      expect(c.sibling).toBe(s);
      expect(p.sibling).toBe(u);
    });

    it('should get null if no sibling', () => {
      expect(g.sibling).toBe(null);
    });

    it('should get the uncle', () => {
      expect(c.uncle).toBe(u);
    });

    it('should get null if no uncle', () => {
      expect(g.uncle).toBe(null);
      expect(p.uncle).toBe(null);
    });

    it('true if is parent left child', () => {
      expect(s.isParentLeftChild).toBe(true);
      expect(s.isParentRightChild).toBe(false);
    });

    it('true if is parent left child', () => {
      expect(c.isParentLeftChild).toBe(false);
      expect(c.isParentRightChild).toBe(true);
    });
  });
});
