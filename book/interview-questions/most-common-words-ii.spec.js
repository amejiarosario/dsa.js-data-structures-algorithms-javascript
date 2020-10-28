const { mostCommonWords, mostCommonWordsBrute } = require('./most-common-words-ii');

[mostCommonWordsBrute, mostCommonWords].forEach((fn) => {
  describe(`Most Common words: ${fn.name}`, () => {
    it('should work', () => {
      expect(fn(
        'The map, maps keys to values; Keys can be anything.',
        1,
      )).toEqual(['keys']);
    });

    it('should work 2', () => {
      expect(fn(
        'Look at it! What is it? It does look like my code from 1 year ago',
        2,
      )).toEqual(['it', 'look']);
    });

    it('should work all puntuations', () => {
      expect(fn(
        'a; a,b, a\'s c a!; b,b, c.',
        4,
      )).toEqual(['a', 'b', 'c', 's']);
    });
  });
});
