const Serie = require('./stats');

describe('Stats', () => {
  xdescribe('#median', () => {
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

  describe('#describe', () => {
    it('should get describe with odd dataset', () => {
      const s = new Serie([7, 15, 36, 39, 40, 41]); // 6
      expect(s.describe()).toMatchObject({
        '5%': 15, // 0.3
        '25%': 15, // 1.5
        '50%': 39, // 3
        '75%': 40, // 4.5
        '95%': 41, // 5.7
        min: 7,
        max: 41,
      });
    });

    it('should get describe with even data set', () => {
      const s = new Serie([7, 15, 36, 39, 40, 41]);
      expect(s.describe()).toMatchObject({
        '25%': 15,
        '50%': 39,
        '75%': 40,
        count: 6,
        median: 39,
      });
    });
  });

  describe('#mode', () => {
    it('should get mode of repeated value', () => {
      const s = new Serie([7, 15, 36, 36, 39, 40, 41]);
      expect(s.mode).toBe(36);
    });

    it('should get mode when there is no repated', () => {
      const s = new Serie([7, 15, 36, 40, 41]);
      expect(s.mode).toBe(7);
    });
  });

  describe('#sum', () => {
    it('should get mode', () => {
      const s = new Serie([7, 15]);
      expect(s.sum).toBe(22);
    });
  });

  describe('#mean', () => {
    it('should get mean', () => {
      const s = new Serie([10, 20]);
      expect(s.mean).toBe(15);
    });
  });

  describe('#std', () => {
    it('should get std', () => {
      const s = new Serie([1, 2, 3]);
      expect(s.std).toBe(1);
    });
  });
});
