const fn = require('./even-first');

describe('Sort even first and then odd', () => {
  it('should work', () => {
    const actual = fn([5, 4, 3, 7, 8, 3, 2]);
    expect(actual.slice(0, 3)).toEqual(expect.arrayContaining([4, 8, 2]));
    expect(actual.slice(3)).toEqual(expect.arrayContaining([5, 3, 7, 3]));
  });
});
