const BinarySearchTree = require('./binary-search-tree');

describe('Binary Search Tree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  describe('when is empty', () => {
    describe('#add', () => {
      it('should insert an item', () => {
        expect(bst.size).toBe(0);
        bst.add(1);
        expect(bst.size).toBe(1);
      });

      it('should insert low values to the left and higher to the right', () => {
        const node5 = bst.add(5);
        bst.add(1);
        bst.add(10);
        expect(bst.size).toBe(3);
        // expect(bst.root).toBe(node5);
        expect(node5.left.value).toBe(1);
        expect(node5.right.value).toBe(10);
      });

      it('should insert nested values', () => {
        const root = bst.add(10);
        const n2 = bst.add(2);
        const n30 = bst.add(30);
        const n40 = bst.add(40);

        expect(root.left).toBe(n2);
        expect(root.right).toBe(n30);

        expect(n30.left).toBe(undefined);
        expect(n30.right).toBe(n40);
      });
    });
  });

  describe('when has items', () => {
    let n2;
    let root;

    beforeEach(() => {
      root = bst.add(10);
      n2 = bst.add(2);
      bst.add(30);
      bst.add(40);
      bst.add(15);
    });

    describe('#find', () => {
      it('should find the value 2', () => {
        expect(bst.find(2)).toBe(n2);
      });

      it('should NOT find the value 20', () => {
        expect(bst.find(20)).toBe(undefined);
      });
    });

    xdescribe('#remove', () => {
      it('should remove value 2', () => {
        expect(bst.remove(2)).toBe(true);
        expect(root.left).toBe(undefined);
      });

      it('should return false for removing unexisting value 20', () => {
        expect(bst.remove(20)).toBe(false);
      });
    });

    describe('#toArray', () => {
      it('should serialize the tree as an array', () => {
        expect(bst.toArray()).toEqual([10, 2, 30, undefined, undefined, 15, 40,
          undefined, undefined, undefined, undefined]);
      });

      it('should serialize new tree', () => {
        bst.add(3);
        expect(bst.toArray()).toEqual([10, 2, 30, undefined, 3, 15, 40,
          undefined, undefined, undefined, undefined, undefined, undefined]);
      });
    });
  });
});
