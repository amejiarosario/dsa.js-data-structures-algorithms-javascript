const Heap = require('./heap');
const PriorityQueue = require('./priority-queue');
const MaxHeap = require('./max-heap');
const MinHeap = require('./min-heap');

[
  [Heap],
  [PriorityQueue, [], (a, b) => a - b],
  [MinHeap],
].forEach(([DS, ...arg]) => {
  describe('Min-Heap and Priority Queue', () => {
    let heap;

    beforeEach(() => {
      heap = new DS(...arg);
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
        expect(heap.size).toBe(1);
      });

      it('should keep things in order', () => {
        heap.add(3);
        expect(heap.array[0]).toEqual(3);
        heap.add(2);
        expect(heap.array[0]).toEqual(2);
        heap.add(1);
        expect(heap.array[0]).toEqual(1);
        expect(heap.size).toEqual(3);
      });
    });

    describe('#remove', () => {
      it('should work', () => {
        heap.add(1);
        heap.add(0);
        expect(heap.remove()).toBe(0);
        expect(heap.size).toBe(1);
        expect(heap.array).toEqual([1]);
      });

      it('should return null if empty', () => {
        heap = new Heap();
        expect(heap.remove()).toBe(null);
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
          expect(heap.size).toBe(0);
        });
      });
    });
  });
});

[
  [Heap, (a, b) => b - a],
  [PriorityQueue, [], (a, b) => b - a],
  [MaxHeap],
].forEach(([DS, ...arg]) => {
  describe('Max-Heap (Priority Queue)', () => {
    let heap;

    beforeEach(() => {
      heap = new DS(...arg);
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
        expect(heap.size).toBe(1);
      });

      it('should keep things in order', () => {
        heap.add(1);
        expect(heap.array[0]).toEqual(1);
        heap.add(2);
        expect(heap.array[0]).toEqual(2);
        heap.add(3);
        expect(heap.array[0]).toEqual(3);
        expect(heap.size).toEqual(3);
      });
    });

    describe('#remove', () => {
      it('should work', () => {
        heap.add(1);
        heap.add(0);
        expect(heap.remove()).toBe(1);
        expect(heap.size).toBe(1);
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
          expect(heap.size).toBe(0);
        });
      });
    });
  });
});
