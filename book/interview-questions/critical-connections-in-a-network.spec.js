const { criticalConnections, criticalConnectionsBrute1 } = require('./critical-connections-in-a-network');
// const {  } = require('../../src/index');

[criticalConnections, criticalConnectionsBrute1].forEach((fn) => {
  describe(`Graph: ${fn.name}`, () => {
    it('should work with null/empty', () => {
      const actual = fn(0, []);
      const expected = [];
      expect(actual).toEqual(expected);
    });

    it('should work with critical path', () => {
      const actual = fn(4, [[0, 1], [1, 2], [2, 0], [1, 3]]);
      const expected = [[1, 3]];
      expect(actual).toEqual(expected);
    });

    it('should work without critical path', () => {
      const actual = fn(4, [[0, 1], [1, 2], [2, 0], [1, 3], [3, 2]]);
      const expected = [];
      expect(actual).toEqual(expected);
    });

    it('should work with other case', () => {
      const actual = fn(3, [[0, 1], [1, 2]]);
      const expected = [[0, 1], [1, 2]];
      expect(actual).toEqual(expect.arrayContaining(expected));
    });


    it('should work with 2 SCC', () => {
      const actual = fn(6, [[0, 1], [1, 2], [2, 0], [1, 3], [3, 4], [4, 5], [5, 3]]);
      const expected = [[1, 3]];
      expect(actual).toEqual(expected);
    });
  });
});
