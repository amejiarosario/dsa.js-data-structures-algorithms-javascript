const Heap = require('./heap');

describe('Min-Heap (Priority Queue)', () => {
  let heap;

  beforeEach(() => {
    heap = new Heap();
  });

  describe('#contructor', () => {
    it('should initialize', () => {
      expect(heap).not.toBe(undefined);
    });
  });

  describe('#add', () => {
    it('should add an element', () => {
      expect(heap.add(1)).toBe(undefined);
      expect(heap.array).toEqual([1]);
      expect(heap.size()).toBe(1);
    });

    it('should keep things in order', () => {
      heap.add(3);
      expect(heap.array[0]).toEqual(3);
      heap.add(2);
      expect(heap.array[0]).toEqual(2);
      heap.add(1);
      expect(heap.array[0]).toEqual(1);
      expect(heap.size()).toEqual(3);
    });
  });

  describe('#remove', () => {
    it('should work', () => {
      heap.add(1);
      heap.add(0);
      expect(heap.remove()).toBe(0);
      expect(heap.size()).toBe(1);
      expect(heap.array).toEqual([1]);
    });
  });

  describe('when has elements', () => {
    beforeEach(() => {
      heap.add(1);
      heap.add(2);
      heap.add(3);
      heap.add(0);
    });

    describe('#peek', () => {
      it('should get min', () => {
        expect(heap.peek()).toEqual(0);
      });
    });

    describe('#remove', () => {
      it('should get min', () => {
        expect(heap.remove()).toEqual(0);
        expect(heap.remove()).toEqual(1);
        expect(heap.remove()).toEqual(2);
        expect(heap.remove()).toEqual(3);
        expect(heap.size()).toBe(0);
      });
    });
  });
});

describe('Max-Heap (Priority Queue)', () => {
  let heap;

  beforeEach(() => {
    heap = new Heap((a, b) => b - a);
  });

  describe('#contructor', () => {
    it('should initialize', () => {
      expect(heap).not.toBe(undefined);
    });
  });

  describe('#add', () => {
    it('should add an element', () => {
      expect(heap.add(1)).toBe(undefined);
      expect(heap.array).toEqual([1]);
      expect(heap.size()).toBe(1);
    });

    it('should keep things in order', () => {
      heap.add(1);
      expect(heap.array[0]).toEqual(1);
      heap.add(2);
      expect(heap.array[0]).toEqual(2);
      heap.add(3);
      expect(heap.array[0]).toEqual(3);
      expect(heap.size()).toEqual(3);
    });
  });

  describe('#remove', () => {
    it('should work', () => {
      heap.add(1);
      heap.add(0);
      expect(heap.remove()).toBe(1);
      expect(heap.size()).toBe(1);
      expect(heap.array).toEqual([0]);
    });

    it('should work with duplicates', () => {
      heap.add(3);
      heap.add(2);
      heap.add(3);
      heap.add(1);
      heap.add(2);
      heap.add(4);
      heap.add(5);
      heap.add(5);
      heap.add(6);

      expect(heap.remove()).toEqual(6);
      expect(heap.remove()).toEqual(5);
      expect(heap.remove()).toEqual(5);
      expect(heap.remove()).toEqual(4);
    });
  });

  describe('when has elements', () => {
    beforeEach(() => {
      heap.add(1);
      heap.add(2);
      heap.add(3);
      heap.add(0);
    });

    describe('#peek', () => {
      it('should get min', () => {
        expect(heap.peek()).toEqual(3);
      });
    });

    describe('#remove', () => {
      it('should get min when duplicates', () => {
        expect(heap.remove()).toEqual(3);
        expect(heap.remove()).toEqual(2);
        expect(heap.remove()).toEqual(1);
        expect(heap.remove()).toEqual(0);
        expect(heap.size()).toBe(0);
      });
    });
  });
});
