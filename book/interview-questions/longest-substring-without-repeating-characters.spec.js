const { lenLongestSubstring } = require('./longest-substring-without-repeating-characters');
// const {  } = require('../../src/index');

[lenLongestSubstring].forEach((fn) => {
  describe(`Set: ${fn.name}`, () => {
    it('should work with null/empty', () => {
      const actual = '';
      const expected = 0;
      expect(fn(actual)).toEqual(expected);
    });

    it('should work with small case', () => {
      const actual = 'abc';
      const expected = 3;
      expect(fn(actual)).toEqual(expected);
    });

    it('should work with other case', () => {
      const actual = 'abccdefg';
      const expected = 5;
      expect(fn(actual)).toEqual(expected);
    });

    it('should work with example', () => {
      const actual = 'abcdaefg';
      const expected = 7;
      expect(fn(actual)).toEqual(expected);
    });
  });
});
