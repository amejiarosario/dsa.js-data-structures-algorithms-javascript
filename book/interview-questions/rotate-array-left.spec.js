const { rotateLeft, rotateLeftBruteForce } = require('./rotate-array-left');

describe('Rotate Left', () => {
  describe('when data is small', () => {
    it('should work with 1', () => {
      expect(rotateLeft([1, 2, 3], 1)).toEqual([2, 3, 1]);
    });

    it('should work with 4', () => {
      expect(rotateLeft([1, 2, 3, 4, 5], 4)).toEqual([5, 1, 2, 3, 4]);
    });
  });

  describe('when data is large', () => {
    it('', () => {

    });
  });
});
