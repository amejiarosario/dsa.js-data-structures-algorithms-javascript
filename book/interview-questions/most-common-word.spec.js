const { mostCommonWord, mostCommonWordExplicit } = require('./most-common-word');
// const {  } = require('../../src/index');

[mostCommonWord, mostCommonWordExplicit].forEach((fn) => {
  describe(`Set: ${fn.name}`, () => {
    it('should work with null/empty', () => {
      const actual = '';
      const expected = '';
      expect(fn(actual, [])).toEqual(expected);
    });

    it('should work with small case', () => {
      const actual = 'a';
      const expected = '';
      expect(fn(actual, ['a'])).toEqual(expected);
    });

    it('should work with small case 2', () => {
      const actual = 'a';
      const expected = 'a';
      expect(fn(actual, ['b'])).toEqual(expected);
    });

    it('should work with other case', () => {
      expect(fn(
        `How much wood, would a Woodchuck chuck,
      if a woodchuck could chuck?`,
        ['a'],
      )).toEqual({
        asymmetricMatch: (actual) => ['woodchuck', 'chuck'].includes(actual),
      });
    });

    it('should work with \' case', () => {
      expect(fn(
        'It\'s a blue ball and its shade... Very BLUE!',
        ['and'],
      )).toEqual('blue');
    });
  });
});
