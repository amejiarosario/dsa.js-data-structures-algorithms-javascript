const { twoSum } = require('./two-sum');
// const {  } = require('../../src/index');

describe('HashMap: Two Sum', () => {
  it('should work with null/empty', () => {
    const actual = [];
    const expected = [];
    expect(twoSum(actual, 0)).toEqual(expected);
  });

  it('should work with small case', () => {
    const actual = [150, 100, 200];
    const expected = [1, 2];
    expect(twoSum(actual, 300)).toEqual(expected);
  });

  it('should work with small invalid case', () => {
    const actual = [150, 100, 200];
    const expected = [];
    expect(twoSum(actual, 150)).toEqual(expected);
  });

  it('should work with other case', () => {
    const actual = [113, 248, 80, 200, 91, 201, 68];
    const expected = [1, 6];
    expect(twoSum(actual, 316)).toEqual(expected);
  });
});
