const LRUCache = require('./lru-cache-3');

describe('LRU Cache', () => {
  let c;

  describe('#constructor', () => {
    it('should initialize', () => {
      c = new LRUCache();
      expect(c).toBeDefined();
    });

    it('should initialize with capacity', () => {
      c = new LRUCache(7);
      expect(c.capacity).toEqual(7);
    });
  });

  describe('when initialized', () => {
    beforeEach(() => {
      c = new LRUCache(2);
    });

    describe('#put', () => {
      it('should insert new elements', () => {
        c.put(1, 1);
        expect(c.size).toEqual(1);
      });

      it('should update existing element', () => {
        c.put(1, 1);
        c.put(1, 2);
        expect(c.size).toEqual(1);
      });
    });

    describe('#get', () => {
      it('should get element', () => {
        c.put(1, 1);
        expect(c.get(1)).toEqual(1);
      });

      it('should return -1 for non-existing elements', () => {
        expect(c.get(1)).toEqual(-1);
      });

      it('should not add non-existing number to the top of the list', () => {
        c.put(1, 1);
        expect(c.get(8)).toEqual(-1);
        c.put(2, 2);
        expect(c.get(9)).toEqual(-1);
        expect(c.get(1)).toEqual(1);
        expect(c.get(2)).toEqual(2);
      });

      it('should return -1 for removed elements', () => {
        c.put(1, 1);
        c.put(2, 2);
        c.put(3, 3);
        expect(c.get(1)).toEqual(-1);
      });

      it('should not remove value if accessed recently', () => {
        c.put(1, 1);
        c.put(2, 2);
        expect(c.get(1)).toEqual(1);
        c.put(3, 3);
        expect(c.get(1)).toEqual(1);
        expect(c.get(2)).toEqual(-1);
      });

      it('should update a value', () => {
        c.put(1, 1);
        c.put(1, 2);
        expect(c.get(1)).toEqual(2);
      });
    });

    it('should work with updates', () => {
      // ["LRUCache","put","put","put","put","get","get"]
      // [[2],[2,1],[1,1],[2,3],[4,1],[1],[2]]
      c = new LRUCache(2);
      c.put(2, 1);
      c.put(1, 1);
      c.put(2, 3);
      c.put(4, 1);
      c.get(1);
      c.get(2);
    });

    it('should work with size 10', () => {
      c = new LRUCache(10);

      c.put(10, 13);
      c.put(3, 17);
      c.put(6, 11);
      c.put(10, 5);
      c.put(9, 10);
      expect(c.get(13)).toEqual(-1);
      c.put(2, 19);
      expect(c.get(2)).toEqual(19);
      expect(c.get(3)).toEqual(17);
      c.put(5, 25);
      expect(c.get(8)).toEqual(-1);
      c.put(9, 22);
      c.put(5, 5);
      c.put(1, 30);
      expect(c.get(11)).toEqual(-1);
      c.put(9, 12);
      expect(c.get(7)).toEqual(-1);
      expect(c.get(5)).toEqual(5);
      expect(c.get(8)).toEqual(-1);
      expect(c.get(9)).toEqual(12);
      c.put(4, 30);
      c.put(9, 3);
      expect(c.get(9)).toEqual(3);
      expect(c.get(10)).toEqual(5);
      expect(c.get(10)).toEqual(5);
    });
  });
});
