const trap = require('./trapping-rain-water');

describe('Trapping Rain Water', () => {
  it('should trap', () => {
    expect(trap([1, 0, 1])).toEqual(1);
  });

  it('should not trap', () => {
    expect(trap([1, 1, 1])).toEqual(0);
  });

  it('should not trap', () => {
    expect(trap([0, 0, 0])).toEqual(0);
  });

  it('should trap', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
  });
});
