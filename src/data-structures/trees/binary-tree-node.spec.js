const { BinaryTreeNode } = require('../../index');

const { LEFT, RIGHT } = BinaryTreeNode;

describe('Binary Tree Node', () => {
  let treeNode;

  describe('with instance', () => {
    beforeEach(() => {
      treeNode = new BinaryTreeNode('hola');
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
      expect(treeNode.left).toBe(null);
      const newNode = new BinaryTreeNode(1);
      treeNode.setLeftAndUpdateParent(newNode);
      expect(treeNode.left.value).toBe(1);

      expect(newNode.parent).toBe(treeNode);
      expect(treeNode.height).toBe(1);
      expect(treeNode.balanceFactor).toBe(1);
    });

    it('should set/get right node', () => {
      expect(treeNode.right).toBe(null);
      const newNode = new BinaryTreeNode(1);
      treeNode.setRightAndUpdateParent(newNode);

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
        g = new BinaryTreeNode('grandparent');
        p = new BinaryTreeNode('parent');
        u = new BinaryTreeNode('uncle');
        c = new BinaryTreeNode('child');
        s = new BinaryTreeNode('sibling');

        g.setRightAndUpdateParent(p);
        g.setLeftAndUpdateParent(u);
        p.setRightAndUpdateParent(c);
        p.setLeftAndUpdateParent(s);
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

      it('should set leaf correctly', () => {
        expect(c.isLeaf).toBe(true);
        expect(u.isLeaf).toBe(true);
        expect(p.isLeaf).toBe(false);
        expect(g.isLeaf).toBe(false);
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

      it('true if is parent left child for sibling', () => {
        expect(s.isParentLeftChild).toBe(true);
        expect(s.isParentRightChild).toBe(false);
      });

      it('true if is parent left child for child', () => {
        expect(c.isParentLeftChild).toBe(false);
        expect(c.isParentRightChild).toBe(true);
      });
    });
  });

  describe('with static methods', () => {
    it('should work with null', () => {
      const tree = BinaryTreeNode.from();
      expect(tree).toEqual(null);
    });

    it('should build from array', () => {
      /*
                        0
                       / \
                      1   2
                     / \   \
                    3   5   4
      */
      const tree = BinaryTreeNode.from([0, 1, 2, 3, 5, null, 4]);
      expect(tree.toValues()).toEqual({
        value: 0,
        left: 1,
        right: 2,
        parent: null,
        parentSide: null,
      });

      expect(tree.left.toValues()).toEqual({
        value: 1,
        left: 3,
        right: 5,
        parent: 0,
        parentSide: LEFT,
      });

      expect(tree.right.toValues()).toEqual({
        value: 2,
        left: null,
        right: 4,
        parent: 0,
        parentSide: RIGHT,
      });

      expect(tree.right.right.toValues()).toEqual({
        value: 4,
        left: null,
        right: null,
        parent: 2,
        parentSide: RIGHT,
      });
    });
  });
});
