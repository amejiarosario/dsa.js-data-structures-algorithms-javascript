const { rotateLeft, rotateLeftBruteForce } = require('./rotate-array-left');

const largeArray = Array(1e6).fill(1).map((t) => t * Math.random());

[rotateLeft, rotateLeftBruteForce].forEach((fn) => {
  xdescribe(`Rotate Left ${fn.name}`, () => {
    describe('when data is small', () => {
      it('should work with 1', () => {
        expect(fn([1, 2, 3], 1)).toEqual([2, 3, 1]);
      });

      it('should work with 4', () => {
        expect(fn([1, 2, 3, 4, 5], 4)).toEqual([5, 1, 2, 3, 4]);
      });
    });

    xdescribe('when data is large', () => {
      it('should work at scale', () => {
        expect(fn(largeArray, 75863)).toEqual(largeArray);
      });
    });
  });
});
