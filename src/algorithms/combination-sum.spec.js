const combinationSum = require('./combination-sum.js');

describe('combinationSum', () => {
  it('should return empty', () => {
    expect(combinationSum([], 0)).toEqual([[]]);
  });

  it('should find solution for one item', () => {
    expect(combinationSum([1], 1)).toEqual([[1]]);
  });

  it('should use multiple times one value', () => {
    expect(combinationSum([1], 2)).toEqual([[1, 1]]);
  });

  it('should not find solution', () => {
    expect(combinationSum([2], 1)).toEqual([]);
  });

  it('should find solution using two values', () => {
    expect(combinationSum([1, 2], 3)).toEqual([
      [1, 1, 1],
      [1, 2],
    ]);
  });

  it('should move on with next index', () => {
    expect(combinationSum([1, 10, 2], 3)).toEqual([
      [1, 1, 1],
      [1, 2],
    ]);
  });
});
