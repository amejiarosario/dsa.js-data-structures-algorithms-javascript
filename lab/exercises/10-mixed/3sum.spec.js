const fn = require('./3sum');

describe('3 Sum', () => {
  it('should work', () => {
    expect(fn([-1, 0, 1, 2, -1, 4])).toEqual(expect.arrayContaining([
      expect.arrayContaining([-1, 0, 1]),
      expect.arrayContaining([-1, 2, -1]),
    ]));
  });

  it('should work', () => {
    const actual = fn([-2, 0, 1, 1, 2]);
    expect(actual.length).toEqual(2);
    expect(actual).toEqual(expect.arrayContaining([
      expect.arrayContaining([-2, 0, 2]),
      expect.arrayContaining([-2, 1, 1]),
    ]));
  });

  it('should work', () => {
    const actual = fn([-2, -4, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]);
    expect(actual.length).toEqual(6);
    expect(actual).toEqual(expect.arrayContaining([
      expect.arrayContaining([-4, -2, 6]),
      expect.arrayContaining([-4, 0, 4]),
      expect.arrayContaining([-4, 1, 3]),
      expect.arrayContaining([-4, 2, 2]),
      expect.arrayContaining([-2, -2, 4]),
      expect.arrayContaining([-2, 0, 2]),
    ]));
  });

  it('should work with many zeros', () => {
    const actual = fn(Array(5).fill(0));
    expect(actual.length).toEqual(1);
    expect(JSON.stringify(actual)).toEqual('[[0,0,0]]'); // jest negative zero workaround
  });

  it('should work with large arrays', () => {
    const actual = fn(Array(3000).fill(0));
    expect(actual.length).toEqual(1);
    expect(JSON.stringify(actual)).toEqual('[[0,0,0]]');
  });
});
