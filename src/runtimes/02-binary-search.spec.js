const binarySearch = require('./02-binary-search').binarySearchRecursive;

describe('Binary Search', () => {
  let array;

  beforeEach(() => {
    array = [7, 9, 13, 23];
  });

  it('should find a middle element', () => {
    expect(binarySearch(array, 9)).toEqual(1);
  });

  it('should find an first element', () => {
    expect(binarySearch(array, 7)).toEqual(0);
  });

  it('should find the last element', () => {
    expect(binarySearch(array, 23)).toEqual(3);
  });

  it('should not find an bigger element', () => {
    expect(binarySearch(array, 9000)).toEqual(-1);
  });

  it('should find a smaller element', () => {
    expect(binarySearch(array, -9)).toEqual(-1);
  });
});
