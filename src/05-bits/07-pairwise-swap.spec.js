const expect = require('chai').expect;
const pairwiseSwap = require('./07-pairwise-swap');

describe('Bit Manipulation: pairwiseSwap', function() {
  it('1s', function() {
    expect(pairwiseSwap(0b01)).to.equal(0b10);
  });

  it('1s inverse', function() {
    expect(pairwiseSwap(0b10)).to.equal(0b01);
  });

  it('0s', function() {
    expect(pairwiseSwap(0b00)).to.equal(0b00);
  });

  it('5', function() {
    expect(pairwiseSwap(0b0101)).to.equal(0b1010);
  });

  it('larger', function() {
    expect(pairwiseSwap(0b0110010101)).to.equal(0b1001101010);
  });
});