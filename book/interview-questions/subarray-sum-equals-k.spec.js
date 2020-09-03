const { subarraySum, subarraySumBrute1, subarraySumBrute2 } = require('./subarray-sum-equals-k');
// const {  } = require('../../src/index');

[subarraySum, subarraySumBrute1, subarraySumBrute2].forEach((fn) => {
  describe(`HashMap: ${fn.name}`, () => {
    it('should work with null/empty', () => {
      const actual = [];
      const expected = 0;
      expect(fn(actual, 0)).toEqual(expected);
    });

    it('should work with small case', () => {
      const actual = [1, -1, 1];
      const expected = 3;
      expect(fn(actual, 1)).toEqual(expected);
    });

    it('should work with other case', () => {
      const actual = [1, 2, 3, 0, 1, 4, 0, 5];
      const expected = 8;
      expect(fn(actual, 5)).toEqual(expected);
    });
  });
});
