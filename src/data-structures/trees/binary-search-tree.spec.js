const BinarySearchTree = require('./binary-search-tree');

describe('Binary Search Tree', () => {
  let bst;
  const getValues = treeGenerator => Array.from(treeGenerator).map(node => node.value);

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

      it('should insert left and right child', () => {
        const root = bst.add(5);
        const n = bst.add(1);
        expect(n.toValues()).toMatchObject({
          value: 1, parent: 5, left: null, right: null,
        });
        expect(root.toValues()).toMatchObject({
          value: 5, parent: null, left: 1, right: null,
        });
        bst.add(10);
        expect(root.toValues()).toMatchObject({
          value: 5, parent: null, left: 1, right: 10,
        });
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

        expect(n30.left).toBe(null);
        expect(n30.right).toBe(n40);
      });

      it('should keep parent reference', () => {
        bst.add(1);
        bst.add(2);
        const n3 = bst.add(3);

        expect(n3.parent.value).toBe(2);
      });

      it('should deal with duplicates', () => {
        const root = bst.add(1);
        expect(root.meta.multiplicity).toBe(undefined);
        bst.add(1);
        expect(bst.size).toBe(2);
        expect(root.toValues()).toMatchObject({
          value: 1, parent: null, left: null, right: null,
        });
        expect(root.meta.multiplicity).toBe(2);
      });
    });

    describe('#findNodeAndParent', () => {
      it('should return falsy for empty tree', () => {
        const { found, parent } = bst.findNodeAndParent(5);
        expect(found).toBe(null);
        expect(parent).toBe(null);
      });

      it('should return with a single element', () => {
        bst.add(5);
        const { found, parent } = bst.findNodeAndParent(5);
        expect(found).toMatchObject({ value: 5 });
        expect(parent).toBe(null);
      });

      it('should return with an element and its parent', () => {
        bst.add(5);
        bst.add(1);
        const { found, parent } = bst.findNodeAndParent(1);
        expect(found).toMatchObject({ value: 1 });
        expect(parent).toMatchObject({ value: 5 });
      });

      it('should find future parent of a node that doesnt exist yet', () => {
        bst.add(5);
        bst.add(1);
        const { found, parent } = bst.findNodeAndParent(10);
        expect(found).toBe(null);
        expect(parent).toMatchObject({ value: 5 });
      });

      it('should find future parent of a node that doesnt exist yet', () => {
        bst.add(5);
        bst.add(1);
        const { found, parent } = bst.findNodeAndParent(-1);
        expect(found).toBe(null);
        expect(parent).toMatchObject({ value: 1 });
      });
    });
  });

  describe('when has items', () => {
    let root;
    let n3;
    let n4;
    let n5;
    let n30;
    let n40;
    let n15;

    beforeEach(() => {
      //           10
      //         /    \
      //        5      30
      //      /       /  \
      //     4       15   40
      //   /   \
      //  3   (4.5)
      root = bst.add(10);
      n5 = bst.add(5);
      n30 = bst.add(30);
      n40 = bst.add(40);
      n15 = bst.add(15);
      n4 = bst.add(4);
      n3 = bst.add(3);
    });

    describe('#find', () => {
      it('should find the value 2', () => {
        expect(bst.find(5)).toBe(n5);
        expect(bst.size).toBe(7);
      });

      it('should NOT find the value 20', () => {
        expect(bst.find(20)).toBe(null);
      });
    });

    describe('#remove', () => {
      it('should remove a left leaf node', () => {
        expect(n4.left).toBe(n3);
        bst.remove(3);
        expect(n4.left).toBe(null);
        expect(bst.size).toBe(6);
      });

      it('should remove a right leaf node', () => {
        expect(n30.right).toBe(n40);
        bst.remove(40);
        expect(n30.right).toBe(null);
        expect(bst.size).toBe(6);
      });

      it('should remove a child with one descent on the left', () => {
        expect(n3.toValues()).toMatchObject({
          value: 3, left: null, right: null, parent: 4,
        });
        bst.remove(4);
        expect(n3.toValues()).toMatchObject({
          value: 3, left: null, right: null, parent: 5,
        });
      });

      it('should remove a child with one descent on the right', () => {
        bst.remove(40);
        expect(n15.toValues()).toMatchObject({
          value: 15, left: null, right: null, parent: 30,
        });
        bst.remove(30);
        expect(n15.toValues()).toMatchObject({
          value: 15, left: null, right: null, parent: 10,
        });
      });

      it('should remove a parent with two descents on the right', () => {
        expect(root.left.value).toBe(5);
        expect(root.right.value).toBe(30);

        bst.remove(30);

        expect(root.left.value).toBe(5);
        expect(root.right.value).toBe(40);
        expect(bst.size).toBe(6);
      });

      it('should remove a parent with two descents on the left', () => {
        bst.add(4.5);
        expect(n5.left.value).toBe(4);
        expect(n5.left.right.value).toBe(4.5);

        bst.remove(4);

        expect(n5.left.value).toBe(4.5);
        expect(bst.size).toBe(7);
      });

      it('should return false when it does not exist', () => {
        expect(bst.remove(4.5)).toBe(false);
        expect(bst.size).toBe(7);
      });

      it('should remove the root', () => {
        expect(n30.parent).toBe(root);
        expect(n5.parent).toBe(root);
        bst.remove(10);
        expect(n30.parent).toBe(null);
        expect(n5.parent.value).toBe(15);

        expect(bst.toArray()).toEqual([
          30,
          15, 40,
          5, null, null, null,
          4, null,
          3, null,
          null, null]);

        expect(bst.size).toBe(6);
      });

      it('should remove duplicates', () => {
        bst.add(40); // add duplicate
        expect(n40.meta.multiplicity).toBe(2);

        expect(bst.remove(40)).toBe(true);
        expect(bst.size).toBe(7);
        expect(n40.meta.multiplicity).toBe(1);
        expect(bst.find(40)).toBe(n40);

        expect(bst.remove(40)).toBe(true);
        expect(bst.size).toBe(6);
        expect(bst.find(40)).toBeFalsy();

        expect(bst.remove(40)).toBe(false);
        expect(bst.size).toBe(6);
      });
    });

    describe('#bfs', () => {
      it('should visit nodes on BFS order using iterator', () => {
        const bfs = bst.bfs();
        expect(bfs.next().value).toBe(root); // 10
        expect(bfs.next().value).toBe(n5);
        expect(bfs.next().value.value).toBe(30);
        expect(bfs.next().value.value).toBe(4);
        expect(bfs.next().value.value).toBe(15);
        expect(bfs.next()).toMatchObject({ value: { value: 40 }, done: false });
        expect(bfs.next()).toMatchObject({ value: { value: 3 }, done: false });
        expect(bfs.next().done).toBe(true);
      });

      it('should generate an array from bfs', () => {
        expect(getValues(bst.bfs())).toEqual([10, 5, 30, 4, 15, 40, 3]);
      });
    });

    describe('#dfs', () => {
      it('should visit nodes on dfs order using iterator', () => {
        const dfs = bst.dfs();
        expect(dfs.next().value).toBe(root); // 10
        expect(dfs.next().value).toBe(n5);
        expect(dfs.next().value.value).toBe(4);
        expect(dfs.next().value.value).toBe(3);
        expect(dfs.next().value.value).toBe(30);
        expect(dfs.next().value.value).toBe(15);
        expect(dfs.next()).toMatchObject({ value: { value: 40 }, done: false });
        expect(dfs.next().done).toBe(true);
      });

      it('should generate an array from dfs', () => {
        const nodes = Array.from(bst.dfs());
        const values = nodes.map(node => node.value);
        expect(values).toEqual([10, 5, 4, 3, 30, 15, 40]);
      });
    });

    describe('#inOrderTraversal', () => {
      it('should generate an array', () => {
        expect(getValues(bst.inOrderTraversal())).toEqual([3, 4, 5, 10, 15, 30, 40]);
      });
    });

    describe('#preOrderTraversal', () => {
      it('should generate an array from preOrderTraversal', () => {
        const nodes = Array.from(bst.preOrderTraversal());
        const values = nodes.map(node => node.value);
        expect(values).toEqual([10, 5, 4, 3, 30, 15, 40]);
      });
    });

    describe('#postOrderTraversal', () => {
      it('should generate an array from postOrderTraversal', () => {
        const nodes = Array.from(bst.postOrderTraversal());
        const values = nodes.map(node => node.value);
        expect(values).toEqual([3, 4, 5, 15, 40, 30, 10]);
      });
    });

    describe('#toArray', () => {
      it('should serialize the tree as an array', () => {
        expect(bst.toArray()).toEqual([10, 5, 30, 4, null, 15, 40, 3,
          null, null, null, null, null, null, null]);
      });
    });

    describe('#getMax', () => {
      it('should get the maximun value', () => {
        expect(bst.getMax().value).toBe(40);
      });

      it('should get the maximun value of a subtree', () => {
        expect(bst.getMax(n4).value).toBe(4);
      });

      it('should work with empty BST', () => {
        bst = new BinarySearchTree();
        expect(bst.getMax()).toBe(null);
      });
    });

    describe('#getMin', () => {
      it('should get the maximun value', () => {
        expect(bst.getMin().value).toBe(3);
      });

      it('should get the maximun value of a subtree', () => {
        expect(bst.getMin(n30).value).toBe(15);
      });

      it('should work with empty BST', () => {
        bst = new BinarySearchTree();
        expect(bst.getMin()).toBe(null);
      });
    });
  });
});
