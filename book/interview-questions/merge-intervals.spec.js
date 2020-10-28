const { merge } = require('./merge-intervals');
// const {  } = require('../../src/index');

[merge].forEach((fn) => {
  describe(`TOPIC: ${fn.name}`, () => {
    it('should work with null/empty', () => {
      const actual = fn([]);
      const expected = [];
      expect(actual).toEqual(expected);
    });

    it('should work with small case', () => {
      const actual = fn([[1, 3]]);
      const expected = [[1, 3]];
      expect(actual).toEqual(expected);
    });

    it('should work with other case', () => {
      const actual = fn([[0, 1], [1, 3], [3, 5], [6, 6]]);
      const expected = [[0, 5], [6, 6]];
      expect(actual).toEqual(expected);
    });

    it('should work with other case with large numbers', () => {
      const actual = fn([[10, 99], [20, 50], [9, 11], [98, 100]]);
      const expected = [[9, 100]];
      expect(actual).toEqual(expected);
    });
  });
});
