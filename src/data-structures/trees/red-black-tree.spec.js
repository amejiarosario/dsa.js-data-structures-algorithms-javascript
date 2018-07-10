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

    xit('should balance tree by rotating right', () => {
      tree.add(3);
      tree.add(2);
      tree.add(1);

      expect(tree.toArray()).toEqual([
        2,
        1, 3,
        undefined, undefined, undefined, undefined,
      ]);
    });

    it('should change colors', () => {
      tree.add(1);
      tree.add(2);
      tree.add(3);
    });
  });
});
