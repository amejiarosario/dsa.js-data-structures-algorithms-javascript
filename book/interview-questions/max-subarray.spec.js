const { maxSubArray, maxSubArrayBrute1, maxSubArrayBrute2 } = require('./max-subarray');
const largeArray = require('./max-subarray.data');

describe('Max Subarray Sum', () => {
  [maxSubArray, maxSubArrayBrute1, maxSubArrayBrute2].forEach((fn) => {
    describe(`with ${fn.name}`, () => {
      it('should work with large arrays', () => {
        expect(fn([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
      });

      it('should work with small arrays', () => {
        expect(fn([1, -3, 10, -5])).toEqual(10);
      });

      it('should work with humongous arrays', () => {
        expect(fn(largeArray)).toEqual(4853);
      });
    });
  });
});
