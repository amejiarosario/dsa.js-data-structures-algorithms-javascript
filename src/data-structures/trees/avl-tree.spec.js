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
    });

    it('should rebalance desc inserted nodes (RR Rotation)', () => {
      tree.add(3);
      const n = tree.add(2);
      tree.add(1);

      expect(n.toValues()).toMatchObject({
        value: 2, left: 1, right: 3, parent: null,
      });
    });

    it('should rebalance with LR Rotation', () => {
      tree.add(3);
      tree.add(1);
      const n = tree.add(2);

      expect(n.toValues()).toMatchObject({
        value: 2, left: 1, right: 3, parent: null,
      });
    });


    it('should rebalance with RL Rotation', () => {
      tree.add(1);
      tree.add(3);
      const n = tree.add(2);

      expect(n.toValues()).toMatchObject({
        value: 2, left: 1, right: 3, parent: null,
      });
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
    });
  });
});
