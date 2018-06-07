const Node = require('./node');

describe('Node (Graph)', () => {
  let node;

  beforeEach(() => {
    node = new Node('a');
  });

  describe('#addAdjacent', () => {
    it('should add node to adjacent list', () => {
      node.addAdjacent(new Node(2));
      expect(node.adjacents.map(n => n.value)).toEqual([2]);
    });
  });

  describe('#removeAdjacent', () => {
    let a,
      b,
      c,
      d;

    beforeEach(() => {
      a = node;
      b = new Node('b');
      c = new Node('c');
      d = new Node('d');

      a.addAdjacent(b);
      a.addAdjacent(c);
    });

    it('should remove node to adjacent list', () => {
      expect(a.removeAdjacent(c)).toBe(c);
      expect(node.adjacents.map(n => n.value)).toEqual(['b']);

      expect(a.removeAdjacent(b)).toBe(b);
      expect(node.adjacents.map(n => n.value)).toEqual([]);
    });

    it('should return undefined if not found', () => {
      expect(a.removeAdjacent(d)).toBe(undefined);
      expect(node.adjacents.map(n => n.value)).toEqual(['b', 'c']);
    });
  });

  describe('#getAdjacents', () => {
    it('should get adjacents', () => {
      node.addAdjacent(new Node('b'));
      expect(node.getAdjacents().map(n => n.value)).toEqual(['b']);
    });

    it('should get adjacents when empty', () => {
      expect(node.getAdjacents().map(n => n.value)).toEqual([]);
    });
  });

  describe('#isAdjacent', () => {
    it('should return true if they are adjacent', () => {
      const b = new Node('b');
      node.addAdjacent(b);
      expect(node.isAdjacent(b)).toBe(true);
    });

    it('should return true if they are adjacent', () => {
      const c = new Node('c');
      expect(node.isAdjacent(c)).toBe(false);
    });
  });
});
