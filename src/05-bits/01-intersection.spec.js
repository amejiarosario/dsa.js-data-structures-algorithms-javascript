const expect = require('chai').expect;
const insertion = require('./01-insertion');

describe('Bit Manipulation: insertion', function() {
  it('should insert m on n when i=0', function() {
    const n = 0b1100,
          m = 0b0110,
          i=0,
          j=3,
          expected = m;
    expect(insertion(n, m, i, j).toString(2)).to.equal(expected.toString(2));
  });

  it('should insert m on n at given i-j', function() {
    const n = 0b10000000000,
          m = 0b10011,
          i=2,
          j=6,
          expected = 0b10001001100;
    expect(insertion(n, m, i, j).toString(2)).to.equal(expected.toString(2));
  });
});