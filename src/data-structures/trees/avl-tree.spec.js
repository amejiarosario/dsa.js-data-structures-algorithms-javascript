const AvlTree = require('./avl-tree.js');

describe('AvlTree', () => {
  let tree;

  beforeEach(() => {
    tree = new AvlTree();
  });

  describe('#contructor', () => {
    it('should initialize', () => {
      expect(tree).not.toBe(null);
    });
  });

  describe('#add', () => {
    it('should add a node', () => {
      expect(tree.size).toBe(0);
      const n1 = tree.add(1);
      expect(tree.size).toBe(1);
      expect(n1.height).toBe(0);
    });

    it('should rebalance asc inserted nodes (LL Rotation)', () => {
      tree.add(1);
      const n = tree.add(2);
      tree.add(3);

      expect(n.toValues()).toMatchObject({
        value: 2, left: 1, right: 3, parent: null,
      });

      expect(tree.toArray()).toEqual([2, 1, 3, null, null, null, null]);
      expect(tree.root).toBe(n);
    });

    it('should rebalance desc inserted nodes (RR Rotation)', () => {
      tree.add(3);
      const n = tree.add(2);
      tree.add(1);

      expect(n.toValues()).toMatchObject({
        value: 2, left: 1, right: 3, parent: null,
      });
      expect(tree.root).toBe(n);
    });

    it('should rebalance with LR Rotation', () => {
      tree.add(3);
      tree.add(1);
      const n = tree.add(2);

      expect(n.toValues()).toMatchObject({
        value: 2, left: 1, right: 3, parent: null,
      });
      expect(tree.root).toBe(n);
    });


    it('should rebalance with RL Rotation', () => {
      tree.add(1);
      tree.add(3);
      const n = tree.add(2);

      expect(n.toValues()).toMatchObject({
        value: 2, left: 1, right: 3, parent: null,
      });
      expect(tree.root).toBe(n);
    });

    it('should not balance', () => {
      [30, 20, 40, 10, 50].forEach(v => tree.add(v));

      expect(tree.toArray()).toEqual([
        30,
        20, 40,
        10, null, null, 50,
        null, null, null, null,
      ]);

      expect(tree.find(40).balanceFactor).toBe(-1); // l: 0, r: 1, bf: -1
      expect(tree.find(20).balanceFactor).toBe(1); // l: 1, r: 0, bf: 1
      expect(tree.find(30).balanceFactor).toBe(0); // l: 2, r: 2, bf: 0
    });
  });

  describe('#remove', () => {
    it('should rebalance asc inserted nodes (LL Rotation)', () => {
      tree.add(1);
      tree.add(-1);
      const n = tree.add(2);
      tree.add(3);

      tree.remove(-1);

      expect(n.toValues()).toMatchObject({
        value: 2, left: 1, right: 3, parent: null,
      });

      expect(tree.root).toBe(n);
      expect(tree.toArray()).toEqual([2, 1, 3, null, null, null, null]);
    });

    it('should rebalance desc inserted nodes (RR Rotation)', () => {
      tree.add(3);
      tree.add(4);
      const n = tree.add(2);
      tree.add(1);

      tree.remove(4);

      expect(n.toValues()).toMatchObject({
        value: 2, left: 1, right: 3, parent: null,
      });
      expect(tree.root).toBe(n);
    });

    it('should rebalance with LR Rotation', () => {
      tree.add(3);
      tree.add(4);
      tree.add(1);
      const n = tree.add(2);

      tree.remove(4);

      expect(n.toValues()).toMatchObject({
        value: 2, left: 1, right: 3, parent: null,
      });
      expect(tree.root).toBe(n);
    });


    it('should rebalance with RL Rotation', () => {
      tree.add(1);
      tree.add(-1);
      tree.add(3);
      const n = tree.add(2);

      tree.remove(-1);

      expect(n.toValues()).toMatchObject({
        value: 2, left: 1, right: 3, parent: null,
      });
      expect(tree.root).toBe(n);
    });
  });

  describe('balance without loosing nodes', () => {
    beforeEach(() => {
      tree.add(16);
      tree.add(4);
      tree.add(32);
      tree.add(8);
      tree.add(2);
    });

    it('should have all nodes', () => {
      expect(tree.toArray()).toEqual([16, 4, 32, 2, 8,
        null, null, null, null, null, null]);
    });

    it('should rebalance and keep all nodes', () => {
      tree.add(1);
      expect(tree.toArray()).toEqual([4, 2, 16, 1, null, 8, 32,
        null, null, null, null, null, null]);
    });
  });

  describe('balancing to the left', () => {
    let n32;
    beforeEach(() => {
      n32 = tree.add(32);
      tree.add(8);
      tree.add(64);
      tree.add(4);
      tree.add(16);
      tree.add(48);
      tree.add(128);
      tree.add(2);
      tree.add(6);
      tree.add(10);
      tree.add(20);
    });

    it('should have all nodes', () => {
      expect(tree.toArray()).toEqual([32, 8, 64, 4, 16, 48, 128, 2, 6, 10, 20,
        null, null, null, null, null, null, null, null, null, null, null, null]);
    });

    it('should rebalance when removing', () => {
      tree.remove(64);
      expect(tree.toArray()).toEqual([32, 8, 128, 4, 16, 48, null, 2, 6, 10, 20,
        null, null, null, null, null, null, null, null, null, null]);
      expect(n32.balanceFactor).toBe(1);
      expect(n32.right.balanceFactor).toBe(1);
      expect(n32.left.balanceFactor).toBe(0);

      tree.remove(48);
      expect(tree.toArray()).toEqual([8, 4, 32, 2, 6, 16, 128, null, null, null, null, 10, 20,
        null, null, null, null, null, null]);
    });
  });

  describe('balancing to the right', () => {
    beforeEach(() => {
      tree.add(8);
      tree.add(4);
      tree.add(32);
      tree.add(2);
      tree.add(16);
      tree.add(64);
      tree.add(10);
      tree.add(20);
      tree.add(60);
      tree.add(70);
    });

    it('should build the tree', () => {
      expect(tree.toArray()).toEqual([8, 4, 32, 2, null, 16, 64, null, null, 10, 20, 60, 70,
        null, null, null, null, null, null, null, null]);
    });

    it('should rebalance right side', () => {
      tree.remove(2);
      expect(tree.toArray()).toEqual([32, 8, 64, 4, 16, 60, 70, null, null, 10, 20,
        null, null, null, null, null, null, null, null]);
    });
  });
});
