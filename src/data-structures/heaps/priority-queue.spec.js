const { PriorityQueue } = require('../..');

describe('Priorty Queue (as MinHeap default)', () => {
  const num = 1;
  const obj = { a: 1, b: 2 };
  let pq;

  describe('with default contructor', () => {
    beforeEach(() => {
      pq = new PriorityQueue();
    });

    describe('.enqueue', () => {
      it('should enqueue [priority, element]', () => {
        pq.enqueue([Infinity, 2]);
        pq.enqueue([0, 1]);
        pq.enqueue([100, { a: 1, b: 2 }]);
        expect(pq.size).toEqual(3);
        expect(pq.peek()).toEqual([0, 1]);
      });
    });

    describe('.dequeue', () => {
      it('should enqueue and dequeue elements on priority order', () => {
        pq.enqueue([100, obj]);
        pq.enqueue([Infinity, 2]);
        pq.enqueue([0, num]);

        expect(pq.dequeue()).toEqual([0, num]);
        expect(pq.size).toEqual(2);
        expect(pq.dequeue()).toEqual([100, obj]);
        expect(pq.dequeue()).toEqual([Infinity, 2]);
        expect(pq.size).toEqual(0);
      });

      it('should handle case when priorty was forgotten', () => {
        expect(() => pq.enqueue({ a: 100 })).not.toThrow();
        expect(() => pq.enqueue({ b: 200 })).toThrow();
      });
    });
  });

  describe('with default values', () => {
    it('should add values on creation', () => {
      pq = new PriorityQueue([[100, obj], [Infinity, 2], [0, num]]);
      expect(pq.size).toEqual(3);
      expect(pq.peek()).toEqual([0, num]);
      expect(pq.dequeue()).toEqual([0, num]);
      expect(pq.size).toEqual(2);
    });
  });

  describe('with custom comparator', () => {
    const alice = { name: 'Alice', grade: 80, assistance: 1 };
    const bob = { name: 'Bob', grade: 93, assistance: 0.7 };
    const ana = { name: 'Ana', grade: 98, assistance: 0.8 };

    it('should become MaxPriortyQueue and compare objects', () => {
      pq = new PriorityQueue([], (a, b) => b.grade * b.assistance - a.grade * a.assistance);
      pq.enqueue(alice);
      pq.enqueue(ana);
      pq.enqueue(bob);
      expect(pq.size).toEqual(3);
      expect(pq.dequeue()).toEqual(alice);
      expect(pq.dequeue()).toEqual(ana);
      expect(pq.dequeue()).toEqual(bob);
    });

    it('should handle errors', () => {
      pq = new PriorityQueue([], (a, b) => b.grade - a.grade);
      expect(() => pq.enqueue(alice)).not.toThrow();
      expect(() => pq.enqueue({ name: 'Oops', error: 98 })).toThrow();
    });
  });
});
