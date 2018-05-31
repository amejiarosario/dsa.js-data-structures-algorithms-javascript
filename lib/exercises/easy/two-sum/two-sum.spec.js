const twoSum = require('./two-sum');

describe('Two Sum', () => {
  it('should find indices', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('should return undefined if there is no found', () => {
    expect(twoSum([2, 7, 11, 15], 10)).toBe(undefined);
  });

  it('should not use the same element twice', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it('should work with the same number if different indices', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});