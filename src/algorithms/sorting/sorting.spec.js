const sortingAlgorithms = [
  require('./selection-sort'),
];

sortingAlgorithms.forEach((sort) => {
  describe(`Sorting with ${sort.name}`, () => {
    it('should sort numbers', () => {
      expect(sort([3, 5, 0])).toEqual([0, 3, 5]);
    });

    it('should sort with negative numbers', () => {
      expect(sort([3, -5, 0])).toEqual([-5, 0, 3]);
    });

    it('should sort with inverse array', () => {
      expect(sort([3, 2, 1])).toEqual([1, 2, 3]);
    });

    it('should sort with with already sorted array', () => {
      expect(sort([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });
});
