const expect = require('chai').expect;
const nextNumber = require('./04-next-number');

describe('Bit Manipulation: nextNumber', function() {
  it('one zero', function() {
    expect(nextNumber(0b101)).to.eql([0b11, 0b110]);
  });

  it('all ones', function() {
    expect(nextNumber(0b111)).to.eql([0b111, 0b111]);
  });

  it('largest number already', function() {
    expect(nextNumber(0b100)).to.eql([0b1, 0b100]);
  });

  it('example', function() {
    expect(nextNumber(13948)).to.eql([0b1, 0b100]);
    expect(nextNumber(0b11011001111100)).to.eql([0b1, 0b100]);
  });
});