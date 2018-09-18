const Serie = require('./stats');

describe('Stats', () => {
  describe('#median', () => {
    it('should work with odd array', () => {
      const s = new Serie([1, 3, 3, 6, 7, 8, 9]); // 7
      expect(s.median()).toEqual({
        median: 6,
        medianIndex: 3,
      });
    });

    it('should work with even array', () => {
      const s = new Serie([1, 2, 3, 4, 5, 6, 8, 9]); // 8
      expect(s.median()).toEqual({
        median: 4.5,
        medianIndex: null,
      });
    });
  });

  xdescribe('#quartile', () => {
    it('should get quartile with odd dataset', () => {
      const s = new Serie([7, 15, 36, 39, 40, 41]);
      expect(s.quartile()).toEqual({
        '25%': 15,
        '50%': 37.5,
        '75%': 40,
      });
    });

    it('should get quartile with even data set', () => {
      const s = new Serie([7, 15, 36, 39, 40, 41]);
      expect(s.quartile()).toEqual({
        '25%': 25.5,
        '50%': 50,
        '75%': 42.5,
      });
    });
  });
});
