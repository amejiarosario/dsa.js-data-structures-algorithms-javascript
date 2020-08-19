const fn = require('./2sum');

describe('2 sum', () => {
  it('should work', () => {
    expect(fn([-1, 0, 1], 0)).toEqual(expect.arrayContaining([0, 2]));
  });

  it('should work', () => {
    expect(fn([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('should work', () => {
    expect(fn([2, 7, 11, 15], 18)).toEqual([1, 2]);
  });

  it('should be empty', () => {
    expect(fn([2, 7, 11, 15], 1)).toEqual([]);
  });

  it('should should work with non-sorted', () => {
    expect(fn([3, 2, 4], 6)).toEqual([1, 2]);
  });
});
