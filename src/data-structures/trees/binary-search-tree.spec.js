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
    let n5;
    let root;

    beforeEach(() => {
      //          10
      //         /  \
      //        5    30
      //      /     /  \
      //     4     15    40
      //   /
      //  3
      root = bst.add(10);
      n5 = bst.add(5);
      bst.add(30);
      bst.add(40);
      bst.add(15);
      bst.add(4);
      bst.add(3);
    });

    describe('#find', () => {
      it('should find the value 2', () => {
        expect(bst.find(5)).toBe(n5);
      });

      it('should NOT find the value 20', () => {
        expect(bst.find(20)).toBe(undefined);
      });
    });

    xdescribe('#remove', () => {
      it('should remove value 2', () => {
        expect(bst.toArray()).toEqual([10, 2, 30, undefined, undefined, 15, 40, undefined, undefined, undefined, undefined]);
        expect(Array.from(bst.preOrderTraversal()).map(n => n.value)).toEqual([10, 2, 30, 15, 40]);
        expect(bst.remove(2)).toBe(true);
        expect(Array.from(bst.preOrderTraversal()).map(n => n.value)).toEqual([10, 30, 15, 40]);
        expect(root.left).toBe(undefined);
      });

      xit('should return false for removing unexisting value 20', () => {
        expect(bst.remove(20)).toBe(false);
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
        expect(bst.toArray()).toEqual([10, 5, 30, 4, undefined, 15, 40, 3,
          undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
      });
    });
  });
});
