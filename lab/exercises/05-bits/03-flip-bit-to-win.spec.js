const expect = require('chai').expect;
const flipBitToWin = require('./03-flip-bit-to-win');

describe('Bit Manipulation: flipBitToWin', function() {
  it('all ones', function() {
    expect(flipBitToWin(0b11111111)).to.equal(8);
  });

  it('all ones but one', function() {
    expect(flipBitToWin(0b11111101)).to.equal(8);
  });

  it('two zeros at the beginning', function() {
    expect(flipBitToWin(0b11110101)).to.equal(6);
  });

  it('two zeros at the end', function() {
    expect(flipBitToWin(0b10101111)).to.equal(6);
  });
});