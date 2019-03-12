const combinationSum = require('./combination-sum.js');

describe('combinationSum', () => {
  it('should return empty', () => {
    expect(combinationSum([], 0)).toEqual([[]]);
  });
});
