const expect = require('chai').expect;
const nextNumber = require('./03-flip-bit-to-win');

describe('Bit Manipulation: nextNumber', function() {
  it('one zero', function() {
    expect(nextNumber(0b101)).to.equal([11, 110]);
  });

  it('all ones', function() {
    expect(nextNumber(0b111)).to.equal([111, 111]);
  });

  it('largest number already', function() {
    expect(nextNumber(0b100)).to.equal([1, 100]);
  });
});