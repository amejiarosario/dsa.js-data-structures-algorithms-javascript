const MedianHeap = require('./median-heap');

describe('Median Heap', () => {
  let medianHeap;

  beforeEach(() => {
    medianHeap = new MedianHeap();
  });

  describe('#add', () => {
    it('should work', () => {
      expect(medianHeap.add(1)).toEqual(undefined);
      expect(medianHeap.size).toEqual(1);
    });

    it('should work with 2 additions', () => {
      expect(medianHeap.add(1)).toEqual(undefined);
      expect(medianHeap.add(1)).toEqual(undefined);
      expect(medianHeap.size).toEqual(2);
    });
  });

  describe('#findMedian', () => {
    it('should work', () => {
      medianHeap.add(5);
      expect(medianHeap.findMedian()).toEqual(5);
      medianHeap.add(15);
      expect(medianHeap.findMedian()).toEqual(10);
      medianHeap.add(10);
      expect(medianHeap.findMedian()).toEqual(10);
    });

    it('should work with even numbers', () => {
      const values = [5, 15, 1, 3];
      const medians = values.map((v) => {
        medianHeap.add(v);
        return medianHeap.findMedian();
      });
      expect(medians).toEqual([5, 10, 5, 4]);
    });

    it('should work with odd numbers', () => {
      const values = [2, 4, 7, 1, 5, 3];
      const medians = values.map((v) => {
        medianHeap.add(v);
        return medianHeap.findMedian();
      });
      expect(medians).toEqual([2, 3, 4, 3, 4, 3.5]);
    });

    it('should work with negative numbers', () => {
      const values = [-1, -2, -3];
      const expected = [-1, -1.5, -2];
      const medians = values.map((v) => {
        medianHeap.add(v);
        return medianHeap.findMedian();
      });
      expect(medians).toEqual(expected);
    });
  });
});
