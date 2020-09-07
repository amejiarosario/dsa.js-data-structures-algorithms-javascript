const { canFinish, canFinishBrute1 } = require('./course-schedule');
// const {  } = require('../../src/index');

[canFinish, canFinishBrute1].forEach((fn) => {
  describe(`TOPIC: ${fn.name}`, () => {
    it('should work with null/empty', () => {
      const actual = [];
      const expected = true;
      expect(fn(0, actual)).toEqual(expected);
    });

    it('should work basic case', () => {
      const actual = [[1, 0]];
      const courses = 2;
      const expected = true;
      expect(fn(courses, actual)).toEqual(expected);
    });

    it('should detect cycle', () => {
      const actual = [[0, 1], [1, 0]];
      const courses = 2;
      const expected = false;
      expect(fn(courses, actual)).toEqual(expected);
    });

    it('multiple links to a node without cycle', () => {
      const actual = [[2, 1], [1, 0], [2, 0]];
      const courses = 3;
      const expected = true;
      expect(fn(courses, actual)).toEqual(expected);
    });

    it('multiple links to a node without cycle (different order)', () => {
      const actual = [[2, 0], [1, 0], [2, 1]];
      const courses = 3;
      const expected = true;
      expect(fn(courses, actual)).toEqual(expected);
    });

    it('indirect cycle', () => {
      const actual = [[1, 0], [2, 1], [0, 2]];
      const courses = 3;
      const expected = false;
      expect(fn(courses, actual)).toEqual(expected);
    });

    it('indirect cycle with nodes without indegrees', () => {
      const actual = [[1, 0], [2, 1], [3, 2], [1, 3]];
      const courses = 4;
      const expected = false;
      expect(fn(courses, actual)).toEqual(expected);
    });
  });
});
