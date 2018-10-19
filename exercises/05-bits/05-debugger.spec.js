const expect = require('chai').expect;
const test = require('./05-debugger');

describe('Bit Manipulation: Debugger', function() {
  it('power of two', function() {
    expect(test(0b0)).to.equal(true);
    expect(test(0b1)).to.equal(true);
    expect(test(0b10)).to.equal(true);
    expect(test(0b100)).to.equal(true);
    expect(test(0b1000)).to.equal(true);
    expect(test(0b10000)).to.equal(true);
  });

  it('no power of two', function() {
    expect(test(0b111)).to.equal(false);
    expect(test(0b1010)).to.equal(false);
    expect(test(0b10101)).to.equal(false);
    expect(test(0b101010)).to.equal(false);
    expect(test(0b111000)).to.equal(false);
  });
});