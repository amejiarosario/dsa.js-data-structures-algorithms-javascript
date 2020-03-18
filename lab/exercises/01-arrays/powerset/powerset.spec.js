// npx jest lab/exercises/01-arrays/powerset/powerset.spec.js --watch

const backtrack = require('./powerset-backtrack');
const subsetsBinary = require('./powerset-binaryNumbers');
const subsetsConcat = require('./powerset-concat');

const approaches = [backtrack, subsetsBinary, subsetsConcat];

approaches.forEach((approach) => {
  describe(`Powerset ${approach.name}`, () => {
    it('should work with 0 elements', () => {
      expect(approach([])).toEqual([
        [],
      ]);
    });

    it('should work with 1 element', () => {
      expect(approach([1])).toEqual([
        [],
        [1],
      ]);
    });

    it('should work with 2 elements', () => {
      expect(approach([1, 2])).toEqual(expect.arrayContaining([
        [],
        [1],
        [2],
        [1, 2],
      ]));
    });

    it('should work with 3 elements', () => {
      expect(approach([1, 2, 3])).toEqual(expect.arrayContaining([
        [],
        [1],
        [2],
        [1, 2],
        [3],
        [2, 3],
        [1, 3],
        [1, 2, 3],
      ]));
    });
  });
});
