const RedBlackTree = require('./red-black-tree.js');
const {RED, BLACK} = RedBlackTree;

describe('RedBlackTree', () => {
  let tree;

  beforeEach(() => {
    tree = new RedBlackTree();
  });

  describe('#add', () => {
    it('should add and self-balance the tree', () => {
      expect(tree).not.toBe(undefined);
    });

    it('should make root black', () => {
      const root = tree.add(1);
      expect(root.meta.color).toBe(BLACK);
      expect(tree.size).toBe(1);
    });

    it('should add a new node as red', () => {
      tree.add(1);
      const n2 = tree.add(2);
      expect(n2.meta.color).toBe(RED);
    });

    it('should balance tree by rotating left', () => {
      const n1 = tree.add(1);
      const n2 = tree.add(2);
      const n3 = tree.add(3);

      // console.log(n3)

      expect(tree.size).toBe(3);

      expect(tree.toArray()).toEqual([
        2,
        1, 3,
        undefined, undefined, undefined, undefined,
      ]);

      // verify colors
      expect(tree.root.color).toBe(BLACK);
      expect(tree.root.right.color).toBe(RED);
      expect(tree.root.left.color).toBe(RED);
    });

    it('should balance tree by rotating right', () => {
      tree.add(3);
      tree.add(2);
      tree.add(1);

      expect(tree.toArray()).toEqual([
        2,
        1, 3,
        undefined, undefined, undefined, undefined,
      ]);

      // verify colors
      expect(tree.root.color).toBe(BLACK);
      expect(tree.root.right.color).toBe(RED);
      expect(tree.root.left.color).toBe(RED);
    });

    it('should change colors', () => {
      const n1 = tree.add(1);
      const n2 = tree.add(2);
      const n3 = tree.add(3);
      const n4 = tree.add(4);

      expect(tree.toArray()).toEqual([
        2,
        1, 3,
        undefined, undefined, undefined, 4,
        undefined, undefined,
      ]);

      expect(tree.root.color).toBe(BLACK);
      expect(tree.root.right.color).toBe(BLACK);
      expect(tree.root.left.color).toBe(BLACK);
      expect(tree.root.right.right.color).toBe(RED);

      expect(n1.color).toBe(BLACK);
      expect(n2.color).toBe(BLACK);
      expect(n3.color).toBe(BLACK);
      expect(n4.color).toBe(RED);
    });

    xtest('letf roation with grandparent', () => {
      const n1 = tree.add(1);
      const n2 = tree.add(2);
      const n3 = tree.add(3);
      const n4 = tree.add(4);
      const n5 = tree.add(5);

      expect(tree.toArray()).toEqual([
        2,
        1, 4,
        undefined, undefined, 3, 5,
        undefined, undefined, undefined, undefined,
      ]);

      expect(n1.color).toBe(BLACK);
      expect(n2.color).toBe(BLACK);
      expect(n4.color).toBe(BLACK);
      expect(n3.color).toBe(RED);
      expect(n5.color).toBe(RED);
    });
  });
});
