const getMin = require('./get-min');

describe('find smallest number', () => {
  it('should get the min number of an array', () => {
    expect(getMin([3, 10, 2])).toEqual(2);
  });

  it('should get the min number of an array with negatives', () => {
    expect(getMin([3, 10, -2])).toEqual(-2);
  });

  it('should work with 0', () => {
    expect(getMin([3, 0, 2])).toEqual(0);
  });

  it('should work with empty', () => {
    expect(getMin([])).toEqual(undefined);
  });
});
