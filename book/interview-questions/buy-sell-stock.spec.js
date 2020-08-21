const { maxProfitBrute1, maxProfit } = require('./buy-sell-stock');

describe('Best Time to Buy and Sell Stocks', () => {
  [maxProfitBrute1, maxProfit].forEach((fn) => {
    describe(`with ${fn.name}`, () => {
      it('should work with bullish markets', () => {
        expect(fn([1, 2, 3])).toEqual(2);
      });

      it('should work with bearish markets', () => {
        expect(fn([3, 2, 1])).toEqual(0);
      });

      it('should work with zig-zag markets', () => {
        expect(fn([5, 10, 5, 10, 5, 10, 5, 10])).toEqual(5);
      });
    });
  });
});
