const fn = require('./even-first');

describe('Sort even first and then odd', () => {
  it('should work when start with even', () => {
    const actual = fn([0, 1, 2]);
    expect(actual.slice(0, 2)).toEqual(expect.arrayContaining([0, 2]));
    expect(actual.slice(2)).toEqual(expect.arrayContaining([1]));
  });

  it('should work when start with odd', () => {
    const actual = fn([5, 4, 3, 7, 8, 3, 2]);
    expect(actual.slice(0, 3)).toEqual(expect.arrayContaining([4, 8, 2]));
    expect(actual.slice(3)).toEqual(expect.arrayContaining([5, 3, 7, 3]));
  });

  it('should work with empty', () => {
    const actual = fn([]);
    expect(actual).toEqual([]);
  });
});
