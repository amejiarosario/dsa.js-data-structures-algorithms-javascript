const fn = require('./rotated-binary-search');

describe('Search in Rotated Sorted Array', () => {
  it('should work with empty', () => {
    const array = [];
    const target = 0;
    const expected = -1;
    expect(fn(array, target)).toEqual(expected);
  });

  it('should work with base case', () => {
    const array = [0];
    const target = 0;
    const expected = 0;
    expect(fn(array, target)).toEqual(expected);
  });

  it('should work with base case if not found', () => {
    const array = [0];
    const target = 1;
    const expected = -1;
    expect(fn(array, target)).toEqual(expected);
  });

  it('should work with 2 elements', () => {
    const array = [0, 1];
    expect(fn(array, 0)).toEqual(0);
    expect(fn(array, 1)).toEqual(1);
    expect(fn(array, 2)).toEqual(-1);
    expect(fn(array, -1)).toEqual(-1);
  });

  it('should work with 2 elements "rotated"', () => {
    const array = [1, 0];
    expect(fn(array, 0)).toEqual(1);
    expect(fn(array, 1)).toEqual(0);
    expect(fn(array, 2)).toEqual(-1);
    expect(fn(array, -1)).toEqual(-1);
  });

  it('should work with 3 elements', () => {
    const array = [0, 1, 2];
    expect(fn(array, 0)).toEqual(0);
    expect(fn(array, 1)).toEqual(1);
    expect(fn(array, 2)).toEqual(2);
    expect(fn(array, 3)).toEqual(-1);
    expect(fn(array, -1)).toEqual(-1);
  });

  it('should work with 3 elements "rotated"', () => {
    const array = [2, 0, 1];
    expect(fn(array, 0)).toEqual(1);
    expect(fn(array, 1)).toEqual(2);
    expect(fn(array, 2)).toEqual(0);
    expect(fn(array, 3)).toEqual(-1);
    expect(fn(array, -1)).toEqual(-1);
  });

  it('should work', () => {
    const array = [4, 5, 6, 7, 0, 1, 2];
    const target = 5;
    const expected = 1;
    expect(fn(array, target)).toEqual(expected);
  });

  it('should work', () => {
    const array = [9, 0, 2, 7, 8];
    const target = 3;
    const expected = -1;
    expect(fn(array, target)).toEqual(expected);
  });
});
