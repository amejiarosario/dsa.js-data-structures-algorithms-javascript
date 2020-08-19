const WordDictionary = require('./trie-wildcard-search');

describe('WordDictionary', () => {
  let wd;

  beforeEach(() => {
    wd = new WordDictionary();
  });

  describe('should find exact matches', () => {
    beforeEach(() => {
      wd.addWord('bad');
      wd.addWord('mad');
    });

    it('should find match', () => {
      expect(wd.search('bad')).toEqual(true);
      expect(wd.search('mad')).toEqual(true);
    });

    it('should be false for partial match', () => {
      expect(wd.search('ba')).toEqual(false);
    });

    it('should be false for NO match', () => {
      expect(wd.search('dad')).toEqual(false);
    });
  });

  describe('should find wildcard matches', () => {
    beforeEach(() => {
      wd.addWord('bad');
    });

    it('should work with 1 wildcard', () => {
      expect(wd.search('.ad')).toEqual(true);
    });

    it('should work with 1 wildcard not match', () => {
      expect(wd.search('.ax')).toEqual(false);
    });

    it('should work with 2 wildcard', () => {
      expect(wd.search('..d')).toEqual(true);
    });
  });
});
