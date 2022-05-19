const { binarySearchRecursive, binarySearchIterative } = require('./02-binary-search');

describe('Binary Search Recursive', () => {
  let array;

  beforeEach(() => {
    array = [7, 9, 13, 23];
  });

  it('should find a middle element', () => {
    expect(binarySearchRecursive(array, 9)).toEqual(1);
  });

  it('should find an first element', () => {
    expect(binarySearchRecursive(array, 7)).toEqual(0);
  });

  it('should find the last element', () => {
    expect(binarySearchRecursive(array, 23)).toEqual(3);
  });

  it('should not find an bigger element', () => {
    expect(binarySearchRecursive(array, 9000)).toEqual(-1);
  });

  it('should find a smaller element', () => {
    expect(binarySearchRecursive(array, -9)).toEqual(-1);
  });
});

describe('Binary Search Iterative', () => {
  let array;

  beforeEach(() => {
    array = [7, 9, 13, 23];
  });

  it('should find a middle element', () => {
    expect(binarySearchIterative(array, 9)).toEqual(1);
  });

  it('should find an first element', () => {
    expect(binarySearchIterative(array, 7)).toEqual(0);
  });

  it('should find the last element', () => {
    expect(binarySearchIterative(array, 23)).toEqual(3);
  });

  it('should not find an bigger element', () => {
    expect(binarySearchIterative(array, 9000)).toEqual(-1);
  });

  it('should find a smaller element', () => {
    expect(binarySearchIterative(array, -9)).toEqual(-1);
  });
});
