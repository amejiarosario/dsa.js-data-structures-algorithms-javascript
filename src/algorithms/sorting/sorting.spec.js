const {
  selectionSort, insertionSort, bubbleSort, mergeSort, quickSort,
} = require('../../index');

const sortingAlgorithms = [
  selectionSort,
  insertionSort,
  bubbleSort,
  mergeSort,
  quickSort,
];

sortingAlgorithms.forEach((sort) => {
  describe(`Sorting with ${sort.name}`, () => {
    it('should work with zero numbers', () => {
      expect(sort([])).toEqual([]);
    });

    it('should work with one number', () => {
      expect(sort([3])).toEqual([3]);
    });

    it('should sort numbers', () => {
      expect(sort([3, 5, 0])).toEqual([0, 3, 5]);
    });

    it('should sort with negative numbers', () => {
      expect(sort([3, -5, 0])).toEqual([-5, 0, 3]);
    });

    it('should sort with inverse array', () => {
      expect(sort([3, 2, 1])).toEqual([1, 2, 3]);
    });

    it('should sort with already sorted array', () => {
      expect(sort([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should sort a set', () => {
      expect(sort(new Set([3, 1, 2]))).toEqual([1, 2, 3]);
    });

    it('should sort with duplicated values', () => {
      expect(sort([1, 3, 2, 1])).toEqual([1, 1, 2, 3]);
    });

    it('should sort with almost already sorted array', () => {
      expect(sort([1, 2, 3, 0])).toEqual([0, 1, 2, 3]);
    });
  });
});
