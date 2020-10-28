const { sortColors, sortColorsCompact } = require('./sort-colors');
// const {  } = require('../../src/index');

[sortColors, sortColorsCompact].forEach((fn) => {
  describe(`Sorting: ${fn.name}`, () => {
    it('should work with null/empty', () => {
      const actual = [];
      fn(actual);
      const expected = [];
      expect(actual).toEqual(expected);
    });

    it('should work with small case', () => {
      const actual = [0, 2, 1];
      fn(actual);
      const expected = [0, 1, 2];
      expect(actual).toEqual(expected);
    });

    it('should work with small case1', () => {
      const actual = [2, 1, 2];
      fn(actual);
      const expected = [1, 2, 2];
      expect(actual).toEqual(expected);
    });

    it('should work with small case2', () => {
      const actual = [1, 0, 2];
      fn(actual);
      const expected = [0, 1, 2];
      expect(actual).toEqual(expected);
    });

    it('should work with small case3', () => {
      const actual = [2, 0, 1];
      fn(actual);
      const expected = [0, 1, 2];
      expect(actual).toEqual(expected);
    });

    it('all numbers the same', () => {
      const actual = Array(3).fill(1);
      fn(actual);
      const expected = [1, 1, 1];
      expect(actual).toEqual(expected);
    });

    it('larger cases', () => {
      const actual = [2, 0, 2, 1, 0, 1, 0];
      fn(actual);
      const expected = [0, 0, 0, 1, 1, 2, 2];
      expect(actual).toEqual(expected);
    });
  });
});
